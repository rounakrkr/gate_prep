"""Regenerates admin-data.js from the two PYQ analysis markdown files.
Run:  python tools/build_admin_data.py   (from repo root)"""
import re, json, sys

s16 = open('GATE_CS_PYQ_Analysis_S16.md', encoding='utf-8').read()
full = open('GATE_PYQ_Analysis.md', encoding='utf-8').read()
L16 = s16.split('\n')

def section(text, start, end=None):
    a = text.index(start)
    b = text.index(end, a + 1) if end else len(text)
    return text[a:b]

def cells(line):
    return [c.strip() for c in line.strip().strip('|').split('|')]

def clean(t):
    return t.replace('**', '').replace('`', '').strip()

# ---- tiers (Section 5) ----
sec5 = section(s16, '## 5. 🏆', '## 6. 🔁')
topics = {}
order = []
tier = None
for line in sec5.split('\n'):
    m = re.match(r'### .*TIER ([SABC])', line)
    if m: tier = m.group(1); continue
    if tier and line.startswith('|') and not line.startswith('|--') and not line.startswith('| Topic') and not line.startswith('|:'):
        c = cells(line)
        if len(c) >= 6:
            name = clean(c[0])
            papers = int(c[2].split('/')[0])
            topics[name] = dict(name=name, subject=clean(c[1]), tier=tier, papers=papers,
                                avg=float(c[3]), total=int(c[4]), bank=int(c[5]))
            order.append(name)

# ---- exact question index (Section 9) ----
sec9 = section(s16, '## 9. 📚', '## 10. 🛣️')
for line in sec9.split('\n'):
    m = re.match(r'^- \*\*(.+?)\*\* — (\d+) Qs \((\d+) marks\): (.+)$', line)
    if not m: continue
    name, nq, marks, rest = m.group(1), int(m.group(2)), int(m.group(3)), m.group(4)
    qs = []
    for yr, n, two in re.findall(r"'(\d\d(?:-S\d)?) Q(\d+)( \(2m\))?", rest):
        qs.append(dict(k=yr.replace('-', '') + 'Q' + n, l=f"'{yr} Q{n}", m=2 if two else 1))
    assert name in topics, f'index topic not in tiers: {name}'
    assert len(qs) == nq, (name, len(qs), nq)
    assert sum(q['m'] for q in qs) == marks, (name, sum(q['m'] for q in qs), marks)
    assert nq == topics[name]['bank'], name
    topics[name]['qs'] = qs

# question keys must be globally unique
seen = {}
for t in topics.values():
    for q in t['qs']:
        assert q['k'] not in seen, f"dup question key {q['k']} in {t['name']} & {seen[q['k']]}"
        seen[q['k']] = t['name']

# ---- heatmap (Section 4) ----
sec4 = section(s16, '## 4. 🗺️', '## 5. 🏆')
heat_hit = 0
for line in sec4.split('\n'):
    if not line.startswith('|') or line.startswith('|--') or line.startswith('|:') or line.startswith('| Topic'):
        continue
    c = cells(line)
    if len(c) < 12 or 'Subject total' in c[0]: continue
    name = re.sub(r'[🔥\s]+$', '', clean(c[0])).strip()
    if name in topics:
        topics[name]['heat'] = [int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else 0 for x in c[1:9]]
        heat_hit += 1

# ---- subjects (Section 3) ----
sec3 = section(s16, '## 3. 📊', '## 4. 🗺️')
subjects = []
for line in sec3.split('\n'):
    if line.startswith('|') and not line.startswith('|--') and not line.startswith('|:') and not line.startswith('| Subject'):
        c = cells(line)
        if len(c) >= 11 and 'Total' not in c[0]:
            subjects.append(dict(name=clean(c[0]), marks=[int(x) for x in c[1:9]], avg=float(clean(c[9]))))

# ---- templates (Section 6) ----
sec6 = section(s16, '## 6. 🔁', '## 7. ✅')
templates = []
kind = None
for line in sec6.split('\n'):
    if line.startswith('### 🎯 A)'): kind = 'A'; continue
    if line.startswith('### 🧩 B)'): kind = 'B'; continue
    if kind and line.startswith('|') and not line.startswith('|--') and not line.startswith('|:') and not line.startswith('| #'):
        c = cells(line)
        templates.append(dict(id=f"{kind}{c[0]}", kind=kind, title=clean(c[1]), seen=clean(c[2]), logic=clean('|'.join(c[3:]))))

# ---- GA (S16 Section 8) + patterns & trends (full file) ----
sec8 = section(s16, '## 8. 🎯', '## 9. 📚')
ga_rows = []
for line in sec8.split('\n'):
    if line.startswith('|') and not line.startswith('|--') and not line.startswith('|:') and not line.startswith('| Type'):
        c = cells(line)
        if len(c) >= 10 and 'Total' not in c[0]:
            ga_rows.append(dict(type=clean(c[0]), marks=[int(x) for x in c[1:9]], avg=float(clean(c[9]))))
ga_pat = section(full, '### 🔁 Repeating GA patterns', '> ✅')
ga_patterns = [clean(l[2:]) for l in ga_pat.split('\n') if l.startswith('- ')]

def trend_rows(heading, nxt):
    sec = section(full, heading, nxt)
    out = []
    for line in sec.split('\n'):
        if line.startswith('|') and not line.startswith('|--') and not line.startswith('| Topic'):
            c = cells(line)
            out.append(dict(topic=clean(c[0]), a=int(c[1]), b=int(c[2]), d=clean(c[3])))
    return out
trends = dict(rising=trend_rows('### 📈 Rising', '### 📉 Falling'),
              falling=trend_rows('### 📉 Falling', '> ⚠️'))

# ---- slugs + output ----
out_topics = []
for name in order:
    t = topics[name]
    slug = re.sub(r'[^a-z0-9]+', '_', re.sub(r'\(.*?\)', '', name).lower()).strip('_')[:28]
    t['id'] = f"{t['tier'].lower()}_{slug}"
    t.setdefault('heat', None)
    out_topics.append(t)
ids = [t['id'] for t in out_topics]
assert len(ids) == len(set(ids)), 'duplicate topic ids'

js = '// AUTO-GENERATED by tools/build_admin_data.py from the PYQ analysis .md files. Do not edit by hand.\n'
js += 'export const PAPERS = ' + json.dumps(["'22","'23","'24-S1","'24-S2","'25-S1","'25-S2","'26-S1","'26-S2"], ensure_ascii=False) + ';\n'
for k, v in [('TOPICS', out_topics), ('SUBJECTS', subjects), ('TEMPLATES', templates),
             ('GA_ROWS', ga_rows), ('GA_PATTERNS', ga_patterns), ('TRENDS', trends)]:
    js += f'export const {k} = ' + json.dumps(v, ensure_ascii=False, separators=(',', ':')) + ';\n'
open('admin-data.js', 'w', encoding='utf-8').write(js)

by_tier = {x: sum(1 for t in out_topics if t['tier'] == x) for x in 'SABC'}
print('topics', len(out_topics), by_tier, '| questions', sum(len(t['qs']) for t in out_topics),
      '| heat matched', heat_hit, '| subjects', len(subjects), '| templates', len(templates),
      '| GA rows', len(ga_rows), '| GA patterns', len(ga_patterns),
      '| rising', len(trends['rising']), 'falling', len(trends['falling']))
print('missing heat:', [t['name'] for t in out_topics if not t['heat']])
print('size KB', round(len(js.encode('utf-8')) / 1024, 1))
