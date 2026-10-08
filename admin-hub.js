// 👑 Admin Hub — personal GATE command center (loaded only for the admin account).
// Data comes from admin-data.js (generated from the PYQ analysis files).
// Progress is stored in Firestore: admin/tracker (protected by firestore.rules).
import { PAPERS, TOPICS, SUBJECTS, TEMPLATES, GA_ROWS, GA_PATTERNS, TRENDS } from './admin-data.js';

const VIEWS = [['today', '🎯 Today'], ['roadmap', '🗺️ Roadmap'], ['tracker', '📋 Tracker'], ['pyq', '📚 PYQ Index'],
    ['tpl', '🔁 Templates'], ['err', '🐞 Error Log'], ['insights', '📈 Insights'], ['playbook', '🛣️ Playbook'], ['papers', '📄 Papers'], ['overview', '🛠️ Scores & Tools']];
// Dependency-aware learning order of ALL Tier S (16) + Tier A (15) topics — one topic per day.
// Chains: Regular → CFG/PDA → Parsing → SDD → Code-opt · Number repr → Cache → Pipelining → Instr. format · Process → Paging → CPU sched → File sys
const ORDER_NAMES = ['C output tracing', 'Trees, BST', 'Graph algos', 'Graph theory', 'Regular langs', 'CFG, PDA', 'Parsing',
    'Number repr', 'Boolean algebra', 'Cache', 'Pipelining', 'Process, threads', 'Paging', 'IP addressing', 'Linear algebra', 'Probability',
    'Syntax-directed', 'Code optimization', 'Decidability', 'Asymptotics', 'Stack & queue', 'CPU scheduling', 'File systems',
    'Instruction format', 'FDs & normalization', 'Relational algebra', 'Transactions', 'Link performance', 'TCP / HTTP', 'Sets, relations', 'Calculus'];
const DONE_PCT = 0.8;
// Days with no study topics (end-sem exams). ISO dates, inclusive. The plan skips these.
const BREAKS = [['2026-11-01', '2026-11-18', 'End-sem exams']];
const brk = d => BREAKS.find(([a, b]) => d >= a && d <= b);
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
function planDates(start, n) {           // n study days from `start`, skipping BREAKS
    const out = []; const d = new Date(start + 'T00:00:00');
    while (out.length < n) { const k = iso(d); if (!brk(k)) out.push(k); d.setDate(d.getDate() + 1); }
    return out;
}
const ERR_TYPES = ['🧠 Concept gap', '🧮 Calculation', '⏱️ Time pressure', '👀 Misread', '🎲 Guess', '⬜ Skipped'];
const TIER_LABEL = { S: '🔴 S', A: '🟠 A', B: '🟡 B', C: '🟢 C' };
const DAY = 86400000;

const CSS = `
.ah-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:18px}
.ah-bar .sp{flex:1}.ah-save{font-size:.8rem;color:var(--text-secondary)}
.ah-btn,.ah-chip{background:var(--bg-card);border:1px solid var(--border);color:var(--text-primary);padding:7px 13px;border-radius:999px;cursor:pointer;font-size:.85rem}
.ah-btn.on,.ah-chip.on{background:var(--accent-gradient,linear-gradient(135deg,#ffd700,#ff6b35));color:#111;border-color:transparent;font-weight:600}
.ah-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:22px;margin-bottom:20px}
.ah-card h3{margin:0 0 10px;font-size:1rem}.ah-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-bottom:16px}
.ah-stat .v{font-size:1.5rem;font-weight:700}.ah-stat .l{font-size:.75rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px}
.ah-muted{color:var(--text-secondary);font-size:.85rem}.ah-warn{border-color:rgba(255,107,53,.6)}
.ah-scroll{overflow-x:auto}.ah-tbl{width:100%;border-collapse:collapse;font-size:.85rem}
.ah-tbl th,.ah-tbl td{padding:8px 10px;border-bottom:1px solid var(--border);text-align:left;vertical-align:middle}
.ah-tbl th{color:var(--text-secondary);font-size:.72rem;text-transform:uppercase;white-space:nowrap}
.ah-prog{height:6px;border-radius:4px;background:var(--border);overflow:hidden;min-width:70px}.ah-prog i{display:block;height:100%;background:linear-gradient(90deg,#ff6b35,#ffd700)}
.ah-heat{display:inline-flex;gap:2px}.ah-heat b{width:11px;height:11px;border-radius:2px;background:#2a2a35}
.ah-heat .h1{background:#f7e26b}.ah-heat .h2{background:#f4a640}.ah-heat .h3{background:#e5484d}
.ah-chips{display:flex;flex-wrap:wrap;gap:10px}.ah-q{border:1px solid var(--border);background:var(--bg-secondary,#1b1b24);color:var(--text-primary);border-radius:10px;padding:9px 14px;min-width:70px;cursor:pointer;font-size:.88rem}
.ah-q.q1{background:rgba(46,204,113,.22);border-color:#2ecc71}.ah-q.q2{background:rgba(229,72,77,.22);border-color:#e5484d}.ah-q small{opacity:.6;margin-left:4px}
.ah-in,.ah-sel,.ah-txt{background:var(--bg-secondary,#1b1b24);border:1px solid var(--border);color:var(--text-primary);border-radius:8px;padding:8px 10px;font:inherit;font-size:.85rem}
.ah-txt{width:100%;min-height:54px;box-sizing:border-box}.ah-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.ah-shell{display:grid;grid-template-columns:215px minmax(0,1fr);gap:22px;align-items:start}.ah-main{min-width:0}
.ah-side{position:sticky;top:12px;display:flex;flex-direction:column;gap:6px;padding:14px;border:1px solid var(--border);border-radius:var(--radius);background:var(--bg-card)}
.ah-side .ah-btn{border-radius:12px;text-align:left}.ah-brand{font-weight:700;margin-bottom:6px}.ah-spacer{height:10px}
.ah-hero{display:flex;flex-wrap:wrap;gap:20px;align-items:center;padding:20px;margin-bottom:20px;border-radius:var(--radius);border:1px solid rgba(247,201,72,.35);background:linear-gradient(135deg,rgba(247,201,72,.1),rgba(255,107,53,.06))}
.ah-hero{gap:18px 32px;padding:26px 30px}.ah-hero-prog{flex:1;min-width:240px}.ah-hero-row{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 16px}
.ah-hero-num{font-size:2rem;font-weight:800;line-height:1.1}.ah-hero-num .ah-muted{font-size:1.4rem;font-weight:600;margin-left:2px}.ah-hero-lbl{font-size:1.1rem;color:var(--text-secondary)}
.ah-pace{padding:5px 14px;border-radius:999px;font-size:.88rem;font-weight:600;border:1px solid;text-transform:capitalize;white-space:nowrap}.ah-pace.ok{color:#4ecdc4;border-color:rgba(78,205,196,.5);background:rgba(78,205,196,.1)}.ah-pace.up{color:#2ecc71;border-color:rgba(46,204,113,.5);background:rgba(46,204,113,.1)}.ah-pace.down{color:#ffb347;border-color:rgba(255,179,71,.55);background:rgba(255,179,71,.1)}
.ah-hero-prog .ah-prog{height:10px;border-radius:6px;margin-top:18px}
.ah-big{font-size:2.2rem;font-weight:800;line-height:1}.ah-focus{border-color:rgba(247,201,72,.55)}.ah-focus{padding:30px}.ah-focus h2{margin:10px 0 8px;line-height:1.3}
.ah-step{display:block;margin:18px 0;padding:18px 20px;border:1px solid var(--border);border-radius:14px;background:rgba(255,255,255,.025)}
label.ah-step{display:flex;align-items:center;gap:12px;cursor:pointer}
.ah-step input[type=checkbox],.ah-tbl input[type=checkbox]{width:19px;height:19px;accent-color:#f7c948;cursor:pointer}
.ah-step .ah-prog{margin:12px 0 16px}.ah-qrow{display:flex;gap:14px;align-items:flex-start;margin-bottom:12px}.ah-qrow:last-child{margin-bottom:0}
.ah-qrow{align-items:center}
.ah-qp{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;width:150px;flex-shrink:0;font-size:.8rem;font-weight:600;color:var(--text-secondary);white-space:nowrap}
.ah-open{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;padding:0;font-size:.85rem;line-height:1;border-radius:50%;border:1px solid rgba(247,201,72,.4);background:rgba(247,201,72,.08);color:#f7c948;cursor:pointer;transition:all .15s}
.ah-open:hover{background:#f7c948;color:#111;transform:scale(1.1)}
.ah-focus .ah-in{margin-top:6px;padding:14px 16px}.ah-focus>p{margin-top:18px!important}.ah-cur{background:rgba(247,201,72,.1)}
@media(max-width:560px){.ah-qp{width:auto}.ah-card{padding:16px}.ah-focus{padding:18px}.ah-step{padding:14px}.ah-qrow{flex-direction:column;gap:6px}.ah-qp{padding-top:0}}
@media(max-width:860px){.ah-shell{display:block}/* phone: floating, lifted nav so it stays clear of the system gesture area */.ah-side{position:fixed;left:14px;right:14px;bottom:calc(18px + env(safe-area-inset-bottom,0px));top:auto;z-index:50;flex-direction:row;gap:8px;overflow-x:auto;overflow-y:hidden;border-radius:20px;padding:8px 10px;background:var(--bg-secondary);box-shadow:0 8px 28px rgba(0,0,0,.55);overscroll-behavior-x:contain;touch-action:pan-x;-webkit-overflow-scrolling:touch;scrollbar-width:none;scroll-snap-type:x proximity}.ah-side::-webkit-scrollbar{display:none}.ah-side .ah-btn{white-space:nowrap;flex:0 0 auto;min-height:48px;padding:12px 18px;font-size:.95rem;scroll-snap-align:start}.ah-brand,.ah-spacer,.ah-save{display:none}.ah-main{padding-bottom:128px}}
.ah-tpl{padding:24px 26px;transition:border-color .2s,background .2s}.ah-tpl.got{border-color:rgba(78,205,196,.55);background:rgba(78,205,196,.06)}
.ah-tpl-head{display:flex;flex-wrap:wrap;gap:14px;align-items:flex-start;justify-content:space-between}.ah-tpl h4{margin:12px 0 0;font-size:1.05rem;line-height:1.45}
.ah-kind{display:inline-block;font-size:.72rem;font-weight:600;padding:4px 11px;border-radius:999px;border:1px solid}
.ah-kind.A{color:#f7c948;border-color:rgba(247,201,72,.5);background:rgba(247,201,72,.08)}.ah-kind.B{color:#a29bfe;border-color:rgba(162,155,254,.5);background:rgba(162,155,254,.08)}
.ah-tid{margin-left:10px;font-size:.72rem;color:var(--text-muted)}
.ah-got{margin-left:auto;padding:9px 16px;border-radius:999px;border:1px solid var(--border);background:transparent;color:var(--text-secondary);font:inherit;font-size:.82rem;cursor:pointer;white-space:nowrap}
.ah-got.on{background:rgba(78,205,196,.18);border-color:#4ecdc4;color:#4ecdc4;font-weight:600}
.ah-seen-wrap{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 4px}
.ah-seen{font-size:.76rem;padding:4px 11px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--text-secondary)}
.ah-logic{margin-top:14px;padding:14px 18px;border-left:3px solid #f7c948;background:rgba(247,201,72,.06);border-radius:0 12px 12px 0;line-height:1.65;font-size:.92rem}
.ah-logic small{display:block;margin-bottom:4px;color:var(--text-secondary);font-size:.72rem;text-transform:uppercase;letter-spacing:.5px}
.ah-main a{color:inherit;text-decoration:none}
.ah-trk td,.ah-trk th{padding:14px 10px}.ah-trk .ah-topic{min-width:230px;max-width:320px}.ah-trk td:nth-child(5){min-width:100px!important}
.ah-trk .ah-topic a{display:inline-block;font-weight:600;font-size:.95rem;line-height:1.45;color:var(--text-primary);border-bottom:1px dashed rgba(247,201,72,.35);transition:color .15s,border-color .15s}
.ah-trk .ah-topic a:hover{color:#f7c948;border-bottom-color:#f7c948}
.ah-sub{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:8px;font-size:.78rem;color:var(--text-secondary)}
.ah-trk td:not(:first-child):not(:last-child),.ah-trk th:not(:first-child):not(:last-child){text-align:center}
.ah-trk .ah-prog{margin:6px auto 0;max-width:120px}.ah-trk td:last-child .ah-in{width:100%;min-width:140px;box-sizing:border-box}
@media(max-width:1400px){.ah-trk th:nth-child(3),.ah-trk td:nth-child(3){display:none}}
@media(max-width:1000px){.ah-trk th:nth-child(2),.ah-trk td:nth-child(2),.ah-trk th:nth-child(3),.ah-trk td:nth-child(3){display:none}}
@media(max-width:760px){.ah-trk th:nth-child(6),.ah-trk td:nth-child(6){display:none}.ah-trk{font-size:.8rem}.ah-trk th,.ah-trk td{padding:8px 4px}.ah-trk td:nth-child(5){min-width:70px!important}.ah-trk td:last-child .ah-in{min-width:90px;width:100%;padding:8px}.ah-trk .ah-topic{min-width:105px}}
@media(max-width:520px){.ah-trk th:nth-child(7),.ah-trk td:nth-child(7){display:none}}
.ah-trk tbody tr:hover,.ah-trk tr:hover td{background:rgba(255,255,255,.02)}
.ah-finish{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:22px}.ah-finish .ah-btn{padding:12px 22px;font-weight:600}
.ah-fin{transition:all .2s}.ah-fin.locked{opacity:.45;filter:grayscale(.9)}.ah-fin.locked .h{display:none}
.ah-fin.locked:hover{opacity:1;filter:none;border:1px dashed #f7c948;color:#f7c948;transform:translateY(-1px)}.ah-fin.locked:hover .i{display:none}.ah-fin.locked:hover .h{display:inline}
.ah-pos{color:#2ecc71}.ah-neg{color:#e5484d}.ah-tag{font-size:.7rem;padding:2px 7px;border-radius:999px;border:1px solid var(--border)}
`;

export function createAdminHub({ root, db, doc, getDoc, setDoc, esc, overviewHtml, examDate, onStudentView, papers = [], onOpenPaper }) {
    const e = esc || (s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
    const ref = () => doc(db, 'admin', 'tracker');
    const byId = Object.fromEntries(TOPICS.map(t => [t.id, t]));
    const ui = { view: 'today', focus: null, tiers: { S: true, A: true, B: false, C: false }, topic: null, tplF: 'all', tplQ: '', status: 'loading' };
    let S = { q: {}, t: {}, tpl: {}, err: [], plan: null, v: 2 };
    const todayStr = () => iso(new Date());
    const ORDER = ORDER_NAMES.map(n => TOPICS.find(t => t.name.startsWith(n)));
    let loaded = false, timer = null, dirty = false, dead = false, rand = null;

    // ---------- persistence (never saves before a successful load) ----------
    async function load() {
        ui.status = 'loading'; paintStatus();
        let migrated = false;
        try {
            const snap = await getDoc(ref());
            if (snap.exists()) { const d = snap.data(); S = { q: d.q || {}, t: d.t || {}, tpl: d.tpl || {}, err: d.err || [], plan: d.plan || null, v: d.v || 1 };
                if (S.v < 2) {   // v1 auto-finished topics at concept ✓ + 80%; keep those finished
                    TOPICS.forEach(t => { if (isReady(t)) S.t[t.id].done = (S.t[t.id].last || new Date().toISOString()).slice(0, 10); });
                    S.v = 2; migrated = true;
                }
            }
            loaded = true; ui.status = 'saved';
            if (migrated) save();
            if (!S.plan) { S.plan = { start: todayStr() }; save(); }
        } catch (err) { console.error('Hub load error', err); ui.status = 'loaderr'; }
        if (!dead) render();
    }
    function save() {
        if (!loaded) return;
        dirty = true; ui.status = 'saving'; paintStatus();
        clearTimeout(timer); timer = setTimeout(flush, 700);
    }
    async function flush() {
        if (!loaded || !dirty || dead) return;
        dirty = false;
        try { await setDoc(ref(), S); ui.status = 'saved'; }
        catch (err) { console.error('Hub save error', err); ui.status = 'saveerr'; dirty = true; }
        paintStatus();
    }
    const onVis = () => { if (document.visibilityState === 'hidden') flush(); };
    document.addEventListener('visibilitychange', onVis);

    // ---------- derived stats ----------
    function st(t) {
        let c = 0, w = 0;
        for (const q of t.qs) { const v = S.q[q.k]; if (v === 1) c++; else if (v === 2) w++; }
        const solved = c + w;
        return { c, w, solved, acc: solved ? c / solved : null, pct: solved / t.qs.length };
    }
    // ready = unlocks the Finish button; done = the user pressed Finish (explicit, stored as a date)
    const isReady = t => !!(S.t[t.id] && S.t[t.id].concept) && st(t).pct >= DONE_PCT;
    const isDone = t => !!(S.t[t.id] && S.t[t.id].done);
    function planInfo() {
        const start = (S.plan && S.plan.start) || todayStr();
        const dates = planDates(start, ORDER.length), today = todayStr();
        const expected = dates.filter(d => d < today).length;      // study days already passed
        const doneN = ORDER.filter(isDone).length;
        return { start, dates, doneN, expected, diff: doneN - expected, next: ORDER.find(t => !isDone(t)), brk: brk(today) };
    }
    const paceTxt = P => P.diff > 0 ? `🔥 ${P.diff} ahead` : P.diff < 0 ? `⚠️ ${-P.diff} behind` : '✅ on track';
    const mastery = t => { const s = st(t); return s.pct * (s.acc || 0); };
    const topicLabel = id => (byId[id] ? byId[id].name : '—');
    function totals() {
        let solved = 0, bank = 0, c = 0, w = 0, idx = 0, wsum = 0;
        for (const t of TOPICS) { const s = st(t); solved += s.solved; bank += t.qs.length; c += s.c; w += s.w; idx += t.avg * mastery(t); wsum += t.avg; }
        const tierS = TOPICS.filter(t => t.tier === 'S');
        const sDone = tierS.reduce((a, t) => a + t.avg * st(t).pct, 0), sAll = tierS.reduce((a, t) => a + t.avg, 0);
        return { solved, bank, acc: c + w ? c / (c + w) : null, idx, wsum, sPct: sAll ? sDone / sAll : 0, sAll };
    }
    const pct = x => Math.round(x * 100) + '%';
    const bar = p => `<div class="ah-prog"><i style="width:${Math.round(Math.min(1, p) * 100)}%"></i></div>`;
    const heat = h => h ? `<span class="ah-heat" title="${PAPERS.join(' · ')}">${h.map(v => `<b class="${v >= 4 ? 'h3' : v >= 2 ? 'h2' : v >= 1 ? 'h1' : ''}"></b>`).join('')}</span>` : '';

    // ---------- views ----------
    function vOverview() { return `<div id="ah-overview">${overviewHtml ? overviewHtml() : ''}</div>`; }

    // "'24-S1" → the matching entry of `papers` (GATE 2024 · Set 1); "'23" → GATE 2023 (single set)
    const paperFor = tag => {
        const m = /^'(\d\d)(?:-S(\d))?$/.exec(tag); if (!m) return null;
        return papers.find(p => p.label === 'GATE 20' + m[1] && (m[2] ? p.sub.includes('Set ' + m[2]) : !/Set/.test(p.sub))) || null;
    };
    // PYQ chips grouped one row per paper ('22, '23, '24-S1 …) so they scan easily
    const chipsHtml = t => {
        const g = [];
        t.qs.forEach(q => { const [p, n] = q.l.split(' Q'); const last = g[g.length - 1]; (last && last.p === p ? last : g[g.push({ p, qs: [] }) - 1]).qs.push({ q, n }); });
        return g.map(({ p, qs }) => { const pp = paperFor(p); return `<div class="ah-qrow"><div class="ah-qp"><span>${e(p)}</span>${pp && onOpenPaper ? `<button class="ah-open" data-act="paper" data-id="${pp.id}" title="Open ${e(pp.label)} · ${e(pp.sub)}">📄</button>` : ''}</div><div class="ah-chips">${qs.map(({ q, n }) => { const v = S.q[q.k] || 0;
            return `<button class="ah-q q${v}" data-act="q" data-t="${t.id}" data-k="${q.k}">${v === 1 ? '✅' : v === 2 ? '❌' : '⬜'} Q${e(n)}${q.m === 2 ? '<small>2m</small>' : ''}</button>`; }).join('')}</div></div>`; }).join('');
    };

    function vToday() {
        const T = totals(), P = planInfo();
        const cur = ui.focus ? byId[ui.focus] : P.next;
        const now = Date.now();
        const upNext = ORDER.filter(t => !isDone(t) && t !== cur).slice(0, 3);
        const due = TOPICS.filter(t => S.t[t.id] && S.t[t.id].last && st(t).solved && now - new Date(S.t[t.id].last).getTime() >= 7 * DAY)
            .sort((a, b) => new Date(S.t[a.id].last) - new Date(S.t[b.id].last));
        let curHtml;
        if (!cur) curHtml = '<div class="ah-card"><h3>🏆 All 31 Tier S + A topics done!</h3><p class="ah-muted">Now Tier B/C, timed mocks and the error log.</p></div>';
        else {
            const s = st(cur), m = S.t[cur.id] || {}, idx = ORDER.indexOf(cur), need = Math.max(0, Math.ceil(DONE_PCT * cur.qs.length) - s.solved),
                rd = isReady(cur), why = [m.concept ? '' : 'concept not ticked', need ? `${need} more PYQs for ${Math.round(DONE_PCT * 100)}%` : ''].filter(Boolean).join(' + ');
            curHtml = `<div class="ah-card ah-focus"><div class="ah-row" style="align-items:center"><span class="ah-tag">${TIER_LABEL[cur.tier]}</span><span class="ah-muted">Day ${idx + 1} of ${ORDER.length} · ${e(P.dates[idx].slice(5))}</span>
<span style="flex:1"></span>${ui.focus ? '<button class="ah-btn" data-act="auto">↩ Back to plan</button>' : ''}</div>
<h2 style="margin:6px 0">${e(cur.name)}</h2><div class="ah-muted" style="margin-bottom:12px">avg ${cur.avg} marks/paper · ${cur.papers}/8 papers ${heat(cur.heat)}</div>
<label class="ah-step"><input type="checkbox" data-act="tt" data-f="concept" data-t="${cur.id}" ${m.concept ? 'checked' : ''}> <b>1️⃣ Concept done</b></label>
<div class="ah-step"><b>2️⃣ Solve PYQs</b> <span class="ah-muted">${s.solved}/${cur.qs.length}${s.acc === null ? '' : ' · ' + pct(s.acc) + ' accuracy'} · tap: ⬜ → ✅ → ❌</span>${bar(s.pct)}<div style="margin-top:8px">${chipsHtml(cur)}</div></div>
<label class="ah-step"><input type="checkbox" data-act="tt" data-f="rev2" data-t="${cur.id}" ${m.rev2 ? 'checked' : ''}> <b>3️⃣ Revised 2×</b></label>
<input class="ah-in" style="width:100%;box-sizing:border-box" data-act="note" data-t="${cur.id}" value="${e(m.note || '')}" maxlength="200" placeholder="📝 one-line logic / trick for this topic">
${isDone(cur)
 ? `<div class="ah-finish"><span class="ah-muted">✅ Finished on ${e(S.t[cur.id].done.slice(5))}</span><button class="ah-btn" data-act="reopen" data-t="${cur.id}">↩ Reopen</button></div>`
 : `<div class="ah-finish"><button class="ah-btn ah-fin ${rd ? 'on' : 'locked'}" data-act="finish" data-t="${cur.id}" title="${e(rd ? 'Ready to finish' : 'Not ready: ' + why + ' (click to finish anyway)')}">${rd ? '✅ Finish topic → next' : '<span class="i">🔒 Finish topic</span><span class="h">⚠️ Finish anyway?</span>'}</button>
<span class="ah-muted">${rd ? 'Ready. You decide when to move on.' : `Not ready: ${e(why)}. You can still finish early; it will ask you to confirm.`}</span></div>`}</div>`;
        }
        const pause = P.brk ? `<div class="ah-card ah-warn"><h3>📚 ${e(P.brk[2])}</h3><p class="ah-muted">Plan is paused until ${e(planDates(P.brk[1], 2)[1].slice(5))}. Rest, revise lightly, or use the revision list below.</p></div>` : '';
        return `${pause}${curHtml}
<div class="ah-grid">
 <div class="ah-card ah-stat"><div class="l">Tier S coverage</div><div class="v">${pct(T.sPct)}</div>${bar(T.sPct)}<div class="ah-muted">16 topics · ~${T.sAll.toFixed(0)} marks/paper</div></div>
 <div class="ah-card ah-stat"><div class="l">PYQs solved</div><div class="v">${T.solved}/${T.bank}</div>${bar(T.solved / T.bank)}</div>
 <div class="ah-card ah-stat"><div class="l">Accuracy</div><div class="v">${T.acc === null ? '–' : pct(T.acc)}</div><div class="ah-muted">correct ÷ attempted</div></div>
 <div class="ah-card ah-stat"><div class="l">Mastery index</div><div class="v">${T.idx.toFixed(1)}/${T.wsum.toFixed(0)}</div><div class="ah-muted">Σ avg-marks × solved% × accuracy. Indicator, not a prediction.</div></div>
</div>
${upNext.length ? `<div class="ah-card"><h3>⏭️ Up next</h3>${upNext.map(t => `<div class="ah-row" style="align-items:center"><span class="ah-tag">${TIER_LABEL[t.tier]}</span><b>${e(t.name)}</b><span class="ah-muted">Day ${ORDER.indexOf(t) + 1}</span></div>`).join('')}</div>` : ''}
<div class="ah-card"><h3>🔁 Revision due (7+ days)</h3>
${due.length ? due.map(t => `<div class="ah-row" style="align-items:center"><b>${e(t.name)}</b><span class="ah-muted">${Math.floor((now - new Date(S.t[t.id].last)) / DAY)} days ago</span><button class="ah-btn" data-act="rand" data-t="${t.id}">🎲 5 random PYQs</button></div>`).join('') : '<p class="ah-muted">Nothing due yet. It fills up as you solve PYQs.</p>'}
${rand ? `<div class="ah-card" style="margin:10px 0 0"><b>${e(topicLabel(rand.t))}</b><div class="ah-chips" style="margin-top:8px">${rand.qs.map(q => `<span class="ah-q">${e(q.l)}</span>`).join('')}</div></div>` : ''}</div>`;
    }

    function vRoadmap() {
        const P = planInfo();
        const row = (t, i) => { const s = st(t), d = isDone(t), cur = P.next === t;
            return `<tr class="${cur ? 'ah-cur' : ''}"><td>${i + 1}</td><td>${e(P.dates[i].slice(5))}</td><td>${d ? '✅' : isReady(t) ? '🟢' : s.solved || (S.t[t.id] && S.t[t.id].concept) ? '🔶' : '⬜'}</td>
<td><span class="ah-tag">${TIER_LABEL[t.tier]}</span> <b>${e(t.name)}</b></td><td>${t.avg}</td><td style="min-width:110px">${s.solved}/${t.qs.length}${bar(s.pct)}</td>
<td><button class="ah-btn" data-act="focus" data-t="${t.id}">Focus</button></td></tr>`; };
        return `<div class="ah-card"><div class="ah-row" style="align-items:center"><h3 style="margin:0">🗺️ 31-day plan: all Tier S → Tier A</h3><span style="flex:1"></span><b>${P.doneN}/${ORDER.length} done · ${paceTxt(P)}</b></div>
<div class="ah-row" style="margin-top:10px;align-items:center"><label class="ah-muted">Plan start <input type="date" class="ah-in" data-act="planstart" value="${e(P.start)}"></label>
<span class="ah-muted">✅ finished · 🟢 ready to finish · 🔶 in progress. Ends ${e(P.dates[ORDER.length - 1].slice(5))}. ${BREAKS.map(b => `${b[2]} (${b[0].slice(5)} → ${b[1].slice(5)}) skipped.`).join(' ')} Order follows topic dependencies.</span></div></div>
<div class="ah-card ah-scroll"><table class="ah-tbl"><tr><th>#</th><th>Date</th><th></th><th>Topic</th><th>Avg</th><th>PYQs</th><th></th></tr>${ORDER.map(row).join('')}</table></div>`;
    }

    function vTracker() {
        const rows = TOPICS.filter(t => ui.tiers[t.tier]).map(t => {
            const s = st(t), m = S.t[t.id] || {};
            return `<tr><td class="ah-topic"><a href="#" data-act="open" data-t="${t.id}">${e(t.name)}</a><div class="ah-sub"><span class="ah-tag">${TIER_LABEL[t.tier]}</span><span>${e(t.subject)} · ${t.papers}/8 papers</span></div></td>
<td>${t.avg}</td><td>${heat(t.heat)}</td>
<td><input type="checkbox" data-act="tt" data-f="concept" data-t="${t.id}" ${m.concept ? 'checked' : ''}></td>
<td style="min-width:120px">${s.solved}/${t.qs.length}${bar(s.pct)}</td><td>${s.acc === null ? '–' : pct(s.acc)}</td>
<td><input type="checkbox" data-act="tt" data-f="rev2" data-t="${t.id}" ${m.rev2 ? 'checked' : ''}></td>
<td><input class="ah-in" style="width:150px" data-act="note" data-t="${t.id}" value="${e(m.note || '')}" maxlength="200" placeholder="note"></td></tr>`;
        }).join('');
        return `<div class="ah-bar">${['S', 'A', 'B', 'C'].map(k => `<button class="ah-chip ${ui.tiers[k] ? 'on' : ''}" data-act="tier" data-k="${k}">${TIER_LABEL[k]}</button>`).join('')}
<span class="ah-muted">Heat strip = marks in ${PAPERS.join(' ')}</span></div>
<div class="ah-card ah-scroll"><table class="ah-tbl ah-trk"><tr><th>Topic</th><th>Avg</th><th>Heat</th><th>Concept</th><th>PYQs</th><th>Acc</th><th>Rev 2×</th><th>Notes</th></tr>${rows}</table></div>`;
    }

    function vPyq() {
        if (!ui.topic) ui.topic = TOPICS.filter(t => t.tier === 'S')[0].id;
        const t = byId[ui.topic], s = st(t);
        const opts = [...new Set(TOPICS.map(x => x.subject))].map(sub =>
            `<optgroup label="${e(sub)}">${TOPICS.filter(x => x.subject === sub).map(x => `<option value="${x.id}" ${x.id === t.id ? 'selected' : ''}>${x.tier} · ${e(x.name)}</option>`).join('')}</optgroup>`).join('');
        return `<div class="ah-bar"><select class="ah-sel" data-act="pick">${opts}</select>
<span class="ah-muted">tap a question: ⬜ unsolved → ✅ correct → ❌ wrong → ⬜</span></div>
<div class="ah-card"><h3>${TIER_LABEL[t.tier]} · ${e(t.name)}</h3>
<div class="ah-muted" style="margin-bottom:10px">${s.solved}/${t.qs.length} solved · ${s.acc === null ? 'no accuracy yet' : pct(s.acc) + ' accuracy'} · avg ${t.avg} marks/paper ${heat(t.heat)}</div>
${chipsHtml(t)}
<div style="margin-top:12px"><button class="ah-btn" data-act="clear" data-t="${t.id}">Reset this topic</button></div></div>`;
    }

    function vTpl() {
        const q = ui.tplQ.toLowerCase();
        const list = TEMPLATES.filter(x => (ui.tplF === 'all' || (ui.tplF === 'todo' ? !S.tpl[x.id] : x.kind === ui.tplF)) &&
            (!q || (x.title + x.seen + x.logic).toLowerCase().includes(q)));
        const got = TEMPLATES.filter(x => S.tpl[x.id]).length;
        return `<div class="ah-bar">${[['all', 'All'], ['A', '🎯 Near-exact repeats'], ['B', '🧩 Recurring'], ['todo', 'Not mastered']].map(([k, l]) => `<button class="ah-chip ${ui.tplF === k ? 'on' : ''}" data-act="tplf" data-k="${k}">${l}</button>`).join('')}
<input class="ah-in" data-act="tplq" placeholder="search…" value="${e(ui.tplQ)}"><span class="ah-muted">${got}/${TEMPLATES.length} mastered</span></div>
<div id="ah-tpl-list">${tplList(list)}</div>`;
    }
    const tplList = list => list.map(x => {
        const got = !!S.tpl[x.id], seen = x.seen.split(/;\s*|,\s*(?=')/).map(v => v.trim()).filter(Boolean);
        return `<div class="ah-card ah-tpl ${got ? 'got' : ''}">
<div class="ah-tpl-head"><div><span class="ah-kind ${x.kind}">${x.kind === 'A' ? '🎯 Near-exact repeat' : '🧩 Recurring'}</span><span class="ah-tid">${x.id}</span><h4>${e(x.title)}</h4></div>
<button class="ah-got ${got ? 'on' : ''}" data-act="tplgot" data-k="${x.id}">${got ? '✅ Got it' : '⬜ Mark as got it'}</button></div>
<div class="ah-seen-wrap">${seen.map(v => `<span class="ah-seen">${e(v)}</span>`).join('')}</div>
<div class="ah-logic"><small>${x.kind === 'A' ? "💡 What's the same" : '🧠 Core logic to practise'}</small><div>${e(x.logic)}</div></div></div>`;
    }).join('') || '<p class="ah-muted">No match.</p>';

    function errPaper(r) {
        const p = r.pid ? papers.find(x => x.id === r.pid) : null;
        if (!p) return e(r.paper);
        return `<b>${e(p.label)} · ${e(p.sub)}</b>${r.paper ? ' · ' + e(r.paper) : ''}${r.page ? ' · p.' + e(r.page) : ''}<br><button class="ah-btn" data-act="erropen" data-id="${e(r.id)}">📖 Open</button>`;
    }

    function vErr() {
        const topicOpts = '<option value="">— topic —</option>' + TOPICS.map(t => `<option value="${t.id}">${t.tier} · ${e(t.name)}</option>`).join('');
        const paperOpts = '<option value="">— paper —</option>' + papers.map(p => `<option value="${e(p.id)}">${e(p.label)} · ${e(p.sub)}</option>`).join('');
        const by = {}, roi = {};
        S.err.forEach(r => { by[r.type] = (by[r.type] || 0) + 1; if (r.topic) roi[r.topic] = (roi[r.topic] || 0) + 1; });
        const top = Object.entries(roi).map(([id, n]) => ({ t: byId[id], n })).filter(x => x.t).sort((a, b) => b.n * b.t.avg - a.n * a.t.avg).slice(0, 5);
        return `<div class="ah-card"><h3>➕ Log a mistake</h3>
<div class="ah-row"><select class="ah-sel" id="ah-e-pid">${paperOpts}</select><input class="ah-in" id="ah-e-paper" placeholder="Q no. / note (e.g. Q43)" maxlength="40"><input class="ah-in" id="ah-e-page" type="number" min="1" max="200" placeholder="PDF page (opt.)" style="max-width:130px"><select class="ah-sel" id="ah-e-topic">${topicOpts}</select>
<select class="ah-sel" id="ah-e-type">${ERR_TYPES.map(x => `<option>${x}</option>`).join('')}</select></div>
<textarea class="ah-txt" id="ah-e-logic" maxlength="500" placeholder="Correct logic in one line…"></textarea>
<div style="margin-top:8px"><button class="ah-btn on" data-act="erradd">Add</button></div></div>
${S.err.length ? `<div class="ah-card"><h3>📊 Where you lose marks</h3><div class="ah-chips">${Object.entries(by).map(([k, n]) => `<span class="ah-tag">${e(k)} · ${n}</span>`).join('')}</div>
${top.length ? `<p class="ah-muted" style="margin-top:10px">Highest ROI to fix (errors × avg marks/paper):</p>${top.map(x => `<div>• <b>${e(x.t.name)}</b> — ${x.n} error${x.n > 1 ? 's' : ''} · ${x.t.avg} marks/paper</div>`).join('')}` : ''}</div>` : ''}
<div class="ah-card ah-scroll"><table class="ah-tbl"><tr><th>Date</th><th>Paper & Q</th><th>Topic</th><th>Type</th><th>Correct logic</th><th>Retried</th><th></th></tr>
${S.err.slice().reverse().map(r => `<tr><td>${e(r.date)}</td><td>${errPaper(r)}</td><td>${e(topicLabel(r.topic))}</td><td>${e(r.type)}</td><td>${e(r.logic)}</td>
<td><input type="checkbox" data-act="errretry" data-id="${e(r.id)}" ${r.retry ? 'checked' : ''}></td><td><button class="ah-btn" data-act="errdel" data-id="${e(r.id)}">✕</button></td></tr>`).join('') || '<tr><td colspan="7" class="ah-muted">No mistakes logged yet.</td></tr>'}</table></div>`;
    }

    function vInsights() {
        const cell = v => `<td style="text-align:center;${v >= 10 ? 'background:rgba(229,72,77,.35)' : v >= 6 ? 'background:rgba(244,166,64,.3)' : v >= 3 ? 'background:rgba(247,226,107,.18)' : ''}">${v}</td>`;
        const tr = (a, cls) => `<table class="ah-tbl"><tr><th>Topic</th><th>'22–24</th><th>'25–26</th><th>Δ</th></tr>${a.map(r => `<tr><td>${e(r.topic)}</td><td>${r.a}</td><td>${r.b}</td><td class="${cls}">${e(r.d)}</td></tr>`).join('')}</table>`;
        return `<div class="ah-card ah-scroll"><h3>📊 Subject marks per paper</h3><table class="ah-tbl"><tr><th>Subject</th>${PAPERS.map(p => `<th>${p}</th>`).join('')}<th>Avg</th></tr>
${SUBJECTS.map(s => `<tr><td>${e(s.name)}</td>${s.marks.map(cell).join('')}<td><b>${s.avg}</b></td></tr>`).join('')}</table></div>
<div class="ah-card ah-scroll"><h3>📈 Rising topics</h3>${tr(TRENDS.rising, 'ah-pos')}</div>
<div class="ah-card ah-scroll"><h3>📉 Falling topics</h3>${tr(TRENDS.falling, 'ah-neg')}<p class="ah-muted">4 vs 4 papers is a small sample: treat as a signal, not a rule.</p></div>
<div class="ah-card ah-scroll"><h3>🎯 General Aptitude</h3><table class="ah-tbl"><tr><th>Type</th>${PAPERS.map(p => `<th>${p}</th>`).join('')}<th>Avg</th></tr>
${GA_ROWS.map(r => `<tr><td>${e(r.type)}</td>${r.marks.map(v => `<td style="text-align:center">${v}</td>`).join('')}<td><b>${r.avg}</b></td></tr>`).join('')}</table>
<ul style="margin:10px 0 0 18px">${GA_PATTERNS.map(p => `<li class="ah-muted">${e(p)}</li>`).join('')}</ul></div>`;
    }

    function vPlaybook() {
        const li = a => `<ul style="margin:0 0 0 18px">${a.map(x => `<li>${e(x)}</li>`).join('')}</ul>`;
        return `<div class="ah-card"><h3>🛣️ 3-phase plan</h3>${li([
            '🔴 Phase 1 — Tier S (16 topics, ~47 marks): concept revise, then ALL PYQs of that topic together.',
            '🟠 Phase 2 — Tier A (15 topics, ~24 marks): same method; use the template library for the logic.',
            '🟡🟢 Phase 3 — Tier B/C + full timed mocks; revisit weak topics from the error log.'])}</div>
<div class="ah-card"><h3>✅ Daily / weekly rules</h3>${li([
            'One day = one topic, 10–15 PYQs (topic-wise, not year-wise).',
            'After solving, write the logic in one line (like the template library).',
            'Every 7 days: 5 random PYQs from older topics again (Today tab does this).',
            'Start full 3-hour timed papers once a Tier S + A round is complete.',
            'GA: ~14/15 already — only 1 weekly set to maintain; spend time on the 85 technical marks.'])}</div>
<div class="ah-card"><h3>🏁 Final takeaways</h3>${li([
            'Tier S is the core: ~47 marks/paper.',
            'Most reliable zone: C output tracing + graph algos + IP/forwarding + cache/pipelining.',
            'Exact questions do not repeat; the logic does.',
            'Keep the error log: it is the cheapest way to move your score up.'])}</div>`;
    }

    function vPapers() {
        if (!papers.length) return '<div class="ah-card"><p class="ah-muted">No papers configured.</p></div>';
        return `<div class="ah-card"><h3>📄 Papers</h3><p class="ah-muted">Open a paper right here and solve it. Save scores from Student view → Mock Tests.</p></div>
<div class="ah-grid">${papers.map(p => `<div class="ah-card"><div class="ah-muted">${e(p.sub)}</div><h3>${e(p.label)}</h3><button class="ah-btn on" data-act="paper" data-id="${e(p.id)}">📖 Open paper</button></div>`).join('')}</div>`;
    }

    const RENDER = { overview: vOverview, today: vToday, roadmap: vRoadmap, tracker: vTracker, pyq: vPyq, tpl: vTpl, err: vErr, insights: vInsights, playbook: vPlaybook, papers: vPapers };
    const STATUS = { loading: '⏳ Loading…', saved: '💾 Saved', saving: '⏳ Saving…', saveerr: '⚠️ Save failed — will retry on next change', loaderr: '⚠️ Could not load tracker' };
    function paintStatus() { const el = root.querySelector('#ah-status'); if (el) el.textContent = STATUS[ui.status] || ''; }

    function render() {
        if (dead) return;
        const needsData = ui.view !== 'overview' && ui.view !== 'papers';
        let body;
        if (needsData && ui.status === 'loaderr') body = `<div class="ah-card ah-warn"><p>Could not load your tracker from Firestore. Saving is disabled so existing data is never overwritten. Check the Firestore rules and your login.</p><button class="ah-btn on" data-act="retry">Retry</button></div>`;
        else if (needsData && !loaded) body = '<p class="ah-muted">Loading…</p>';
        else body = RENDER[ui.view]();
        const P = planInfo(), days = examDate ? Math.max(0, Math.ceil((examDate - Date.now()) / DAY)) : null;
        const prevSide = root.querySelector('.ah-side'), prevLeft = prevSide ? prevSide.scrollLeft : 0;
        root.innerHTML = `<div class="ah-shell"><nav class="ah-side"><div class="ah-brand">👑 Command Center</div>
${VIEWS.map(([k, l]) => `<button class="ah-btn ${ui.view === k ? 'on' : ''}" data-act="view" data-k="${k}">${l}</button>`).join('')}
<span class="ah-spacer"></span><button class="ah-btn" data-act="student">👁️ Student view</button><span class="ah-save" id="ah-status"></span></nav>
<main class="ah-main">${loaded ? `<div class="ah-hero"><div class="ah-hero-days"><div class="ah-big">${days === null ? '—' : days}</div><div class="ah-muted">days to GATE</div></div>
<div class="ah-hero-prog"><div class="ah-hero-row"><span class="ah-hero-num"><b>${P.doneN}</b><span class="ah-muted">/${ORDER.length}</span></span><span class="ah-hero-lbl">Tier S+A topics done</span><span class="ah-pace ${P.diff > 0 ? 'up' : P.diff < 0 ? 'down' : 'ok'}">${paceTxt(P)}</span></div>${bar(P.doneN / ORDER.length)}</div></div>` : ''}<div id="ah-view">${body}</div></main></div>`;
        // keep the phone nav slider where it was (the whole nav is rebuilt on each render), and keep the active tab in view
        const side = root.querySelector('.ah-side');
        if (side) {
            side.scrollLeft = prevLeft;
            const on = side.querySelector('.ah-btn.on');
            if (on && (on.offsetLeft < side.scrollLeft || on.offsetLeft + on.offsetWidth > side.scrollLeft + side.clientWidth)) {
                side.scrollLeft = on.offsetLeft - (side.clientWidth - on.offsetWidth) / 2;
            }
        }
        paintStatus();
    }

    // ---------- events (delegated) ----------
    const touch = id => { (S.t[id] = S.t[id] || {}).last = new Date().toISOString(); };
    function onClick(ev) {
        const b = ev.target.closest('[data-act]'); if (!b || b.tagName === 'INPUT' || b.tagName === 'SELECT') return;
        const a = b.dataset.act;
        if (a === 'view') { ui.view = b.dataset.k; render(); }
        else if (a === 'retry') load();
        else if (a === 'paper') { if (onOpenPaper) onOpenPaper(Number(b.dataset.id)); }
        else if (a === 'student') { if (onStudentView) onStudentView(); }
        else if (a === 'focus') { ui.focus = b.dataset.t; ui.view = 'today'; render(); }
        else if (a === 'finish') { const t = byId[b.dataset.t]; if (!t) return;
            if (!isReady(t)) { const sx = st(t); if (!confirm(`Only ${sx.solved}/${t.qs.length} PYQs solved${S.t[t.id] && S.t[t.id].concept ? '' : ' and concept not ticked'}.\nFinish "${t.name}" anyway?`)) return; }
            (S.t[t.id] = S.t[t.id] || {}).done = todayStr(); ui.focus = null; save(); render(); }
        else if (a === 'reopen') { const m = S.t[b.dataset.t]; if (m) delete m.done; save(); render(); }
        else if (a === 'auto') { ui.focus = null; render(); }
        else if (a === 'open') { ev.preventDefault(); ui.topic = b.dataset.t; ui.view = 'pyq'; render(); }
        else if (a === 'tier') { ui.tiers[b.dataset.k] = !ui.tiers[b.dataset.k]; render(); }
        else if (a === 'tplgot') { const k = b.dataset.k; if (S.tpl[k]) delete S.tpl[k]; else S.tpl[k] = true; save(); render(); }
        else if (a === 'tplf') { ui.tplF = b.dataset.k; render(); }
        else if (a === 'rand') {
            const t = byId[b.dataset.t], pool = t.qs.filter(q => S.q[q.k]);
            rand = { t: t.id, qs: pool.sort(() => Math.random() - 0.5).slice(0, 5) }; render();
        } else if (a === 'q') {
            const k = b.dataset.k, v = ((S.q[k] || 0) + 1) % 3;
            if (v) S.q[k] = v; else delete S.q[k];
            touch(b.dataset.t || ui.topic); save(); render();
        } else if (a === 'clear') {
            const t = byId[b.dataset.t];
            if (confirm(`Reset all PYQ marks for "${t.name}"?`)) { t.qs.forEach(q => delete S.q[q.k]); save(); render(); }
        } else if (a === 'erradd') {
            const g = id => root.querySelector(id).value.trim();
            const logic = g('#ah-e-logic'), paper = g('#ah-e-paper');
            const pid = Number(g('#ah-e-pid')) || null, pageN = parseInt(g('#ah-e-page'), 10);
            if (!logic && !paper && !pid) return;
            S.err.push({ id: Date.now().toString(36), date: new Date().toISOString().slice(0, 10), paper: paper.slice(0, 40), pid: papers.some(p => p.id === pid) ? pid : null, page: pageN > 0 && pageN <= 200 ? pageN : null, topic: g('#ah-e-topic'), type: g('#ah-e-type'), logic: logic.slice(0, 500), retry: false });
            save(); render();
        } else if (a === 'erropen') {
            const r = S.err.find(r => r.id === b.dataset.id);
            if (r && r.pid && onOpenPaper) onOpenPaper(r.pid, r.page || undefined);
        } else if (a === 'errdel') { S.err = S.err.filter(r => r.id !== b.dataset.id); save(); render(); }
    }
    function onChange(ev) {
        const x = ev.target, a = x.dataset && x.dataset.act; if (!a) return;
        if (a === 'pick') { ui.topic = x.value; render(); }
        else if (a === 'tt') { (S.t[x.dataset.t] = S.t[x.dataset.t] || {})[x.dataset.f] = x.checked; save(); render(); }
        else if (a === 'planstart') { if (x.value) { S.plan = { start: x.value }; save(); render(); } }
        else if (a === 'note') { (S.t[x.dataset.t] = S.t[x.dataset.t] || {}).note = x.value.slice(0, 200); save(); }
        else if (a === 'tpl') { if (x.checked) S.tpl[x.dataset.k] = true; else delete S.tpl[x.dataset.k]; save(); }
        else if (a === 'errretry') { const r = S.err.find(r => r.id === x.dataset.id); if (r) { r.retry = x.checked; save(); } }
    }
    function onInput(ev) {
        const x = ev.target;
        if (x.dataset && x.dataset.act === 'tplq') {
            ui.tplQ = x.value;
            const q = ui.tplQ.toLowerCase();
            const list = TEMPLATES.filter(t => (ui.tplF === 'all' || (ui.tplF === 'todo' ? !S.tpl[t.id] : t.kind === ui.tplF)) && (!q || (t.title + t.seen + t.logic).toLowerCase().includes(q)));
            root.querySelector('#ah-tpl-list').innerHTML = tplList(list);
        }
    }

    return {
        mount() {
            if (!document.getElementById('ah-style')) { const s = document.createElement('style'); s.id = 'ah-style'; s.textContent = CSS; document.head.appendChild(s); }
            root.addEventListener('click', onClick); root.addEventListener('change', onChange); root.addEventListener('input', onInput);
            render(); load();
        },
        flush,
        refreshOverview() { const o = root.querySelector('#ah-overview'); if (o && overviewHtml) o.innerHTML = overviewHtml(); },
        async destroy() {
            clearTimeout(timer); if (dirty) await flush();
            dead = true; document.removeEventListener('visibilitychange', onVis);
            root.removeEventListener('click', onClick); root.removeEventListener('change', onChange); root.removeEventListener('input', onInput);
        }
    };
}
