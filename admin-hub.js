// 👑 Admin Hub — personal GATE command center (loaded only for the admin account).
// Data comes from admin-data.js (generated from the PYQ analysis files).
// Progress is stored in Firestore: admin/tracker (protected by firestore.rules).
import { PAPERS, TOPICS, SUBJECTS, TEMPLATES, GA_ROWS, GA_PATTERNS, TRENDS } from './admin-data.js';

const VIEWS = [['overview', '🏠 Overview'], ['today', '🎯 Today'], ['tracker', '📋 Tracker'], ['pyq', '📚 PYQ Index'],
    ['tpl', '🔁 Templates'], ['err', '🐞 Error Log'], ['insights', '📈 Insights'], ['playbook', '🛣️ Playbook']];
const ERR_TYPES = ['🧠 Concept gap', '🧮 Calculation', '⏱️ Time pressure', '👀 Misread', '🎲 Guess', '⬜ Skipped'];
const TIER_LABEL = { S: '🔴 S', A: '🟠 A', B: '🟡 B', C: '🟢 C' };
const DAY = 86400000;

const CSS = `
.ah-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:18px}
.ah-bar .sp{flex:1}.ah-save{font-size:.8rem;color:var(--text-secondary)}
.ah-btn,.ah-chip{background:var(--bg-card);border:1px solid var(--border);color:var(--text-primary);padding:7px 13px;border-radius:999px;cursor:pointer;font-size:.85rem}
.ah-btn.on,.ah-chip.on{background:var(--accent-gradient,linear-gradient(135deg,#ffd700,#ff6b35));color:#111;border-color:transparent;font-weight:600}
.ah-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:14px}
.ah-card h3{margin:0 0 10px;font-size:1rem}.ah-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-bottom:16px}
.ah-stat .v{font-size:1.5rem;font-weight:700}.ah-stat .l{font-size:.75rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px}
.ah-muted{color:var(--text-secondary);font-size:.85rem}.ah-warn{border-color:rgba(255,107,53,.6)}
.ah-scroll{overflow-x:auto}.ah-tbl{width:100%;border-collapse:collapse;font-size:.85rem}
.ah-tbl th,.ah-tbl td{padding:8px 10px;border-bottom:1px solid var(--border);text-align:left;vertical-align:middle}
.ah-tbl th{color:var(--text-secondary);font-size:.72rem;text-transform:uppercase;white-space:nowrap}
.ah-prog{height:6px;border-radius:4px;background:var(--border);overflow:hidden;min-width:70px}.ah-prog i{display:block;height:100%;background:linear-gradient(90deg,#ff6b35,#ffd700)}
.ah-heat{display:inline-flex;gap:2px}.ah-heat b{width:11px;height:11px;border-radius:2px;background:#2a2a35}
.ah-heat .h1{background:#f7e26b}.ah-heat .h2{background:#f4a640}.ah-heat .h3{background:#e5484d}
.ah-chips{display:flex;flex-wrap:wrap;gap:8px}.ah-q{border:1px solid var(--border);background:var(--bg-secondary,#1b1b24);color:var(--text-primary);border-radius:8px;padding:7px 10px;cursor:pointer;font-size:.82rem}
.ah-q.q1{background:rgba(46,204,113,.22);border-color:#2ecc71}.ah-q.q2{background:rgba(229,72,77,.22);border-color:#e5484d}.ah-q small{opacity:.6;margin-left:4px}
.ah-in,.ah-sel,.ah-txt{background:var(--bg-secondary,#1b1b24);border:1px solid var(--border);color:var(--text-primary);border-radius:8px;padding:8px 10px;font:inherit;font-size:.85rem}
.ah-txt{width:100%;min-height:54px;box-sizing:border-box}.ah-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.ah-pos{color:#2ecc71}.ah-neg{color:#e5484d}.ah-tag{font-size:.7rem;padding:2px 7px;border-radius:999px;border:1px solid var(--border)}
`;

export function createAdminHub({ root, db, doc, getDoc, setDoc, esc, overviewHtml, sprints }) {
    const e = esc || (s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
    const ref = () => doc(db, 'admin', 'tracker');
    const byId = Object.fromEntries(TOPICS.map(t => [t.id, t]));
    const ui = { view: 'overview', tiers: { S: true, A: true, B: false, C: false }, topic: null, tplF: 'all', tplQ: '', status: 'loading' };
    let S = { q: {}, t: {}, tpl: {}, err: [], v: 1 };
    let loaded = false, timer = null, dirty = false, dead = false, rand = null;

    // ---------- persistence (never saves before a successful load) ----------
    async function load() {
        ui.status = 'loading'; paintStatus();
        try {
            const snap = await getDoc(ref());
            if (snap.exists()) { const d = snap.data(); S = { q: d.q || {}, t: d.t || {}, tpl: d.tpl || {}, err: d.err || [], v: 1 }; }
            loaded = true; ui.status = 'saved';
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

    function vToday() {
        const T = totals();
        const rank = TOPICS.filter(t => t.tier === 'S' || t.tier === 'A')
            .map(t => ({ t, p: t.avg * (1 - mastery(t)) * (S.t[t.id]?.concept ? 1 : 1.1) })).sort((a, b) => b.p - a.p).slice(0, 3);
        const now = Date.now();
        const due = TOPICS.filter(t => S.t[t.id]?.last && st(t).solved && now - new Date(S.t[t.id].last).getTime() >= 7 * DAY)
            .sort((a, b) => new Date(S.t[a.id].last) - new Date(S.t[b.id].last));
        const compilerGap = sprints && !sprints.some(s => /compiler|pars|lexical|syntax|sdt|sdd/i.test(s.title + ' ' + (s.deliverables || []).join(' ')));
        return `
<div class="ah-grid">
 <div class="ah-card ah-stat"><div class="l">Tier S coverage</div><div class="v">${pct(T.sPct)}</div>${bar(T.sPct)}<div class="ah-muted">16 topics · ~${T.sAll.toFixed(0)} marks/paper</div></div>
 <div class="ah-card ah-stat"><div class="l">PYQs solved</div><div class="v">${T.solved}/${T.bank}</div>${bar(T.solved / T.bank)}</div>
 <div class="ah-card ah-stat"><div class="l">Accuracy</div><div class="v">${T.acc === null ? '–' : pct(T.acc)}</div><div class="ah-muted">correct ÷ attempted</div></div>
 <div class="ah-card ah-stat"><div class="l">Mastery index</div><div class="v">${T.idx.toFixed(1)}/${T.wsum.toFixed(0)}</div><div class="ah-muted">Σ avg-marks × solved% × accuracy. Indicator only, not a prediction.</div></div>
</div>
<div class="ah-card"><h3>🎯 Next best topics (marks × what's left)</h3>
${rank.map(({ t }) => { const s = st(t); return `<div class="ah-row" style="align-items:center"><span class="ah-tag">${TIER_LABEL[t.tier]}</span><b>${e(t.name)}</b><span class="ah-muted">avg ${t.avg} marks/paper · ${s.solved}/${t.qs.length} solved</span><span class="sp" style="flex:1"></span><button class="ah-btn" data-act="open" data-t="${t.id}">Practice →</button></div>`; }).join('')}</div>
<div class="ah-card"><h3>🔁 Revision due (7+ days)</h3>
${due.length ? due.map(t => `<div class="ah-row" style="align-items:center"><b>${e(t.name)}</b><span class="ah-muted">${Math.floor((now - new Date(S.t[t.id].last)) / DAY)} days ago</span><button class="ah-btn" data-act="rand" data-t="${t.id}">🎲 5 random PYQs</button></div>`).join('') : '<p class="ah-muted">Nothing due. Solve some PYQs and this fills up automatically.</p>'}
${rand ? `<div class="ah-card" style="margin:10px 0 0"><b>${e(topicLabel(rand.t))}</b><div class="ah-chips" style="margin-top:8px">${rand.qs.map(q => `<span class="ah-q">${e(q.l)}</span>`).join('')}</div></div>` : ''}</div>
${compilerGap ? `<div class="ah-card ah-warn"><h3>⚠️ Compiler Design gap</h3><p class="ah-muted">Data says Compiler Design is ~6.4 marks/paper (Parsing is Tier S, 18 marks over 8 papers) but no sprint in your plan mentions it. Add one around the Tier S sprints.</p></div>` : ''}`;
    }

    function vTracker() {
        const rows = TOPICS.filter(t => ui.tiers[t.tier]).map(t => {
            const s = st(t), m = S.t[t.id] || {};
            return `<tr><td><span class="ah-tag">${TIER_LABEL[t.tier]}</span> <a href="#" data-act="open" data-t="${t.id}"><b>${e(t.name)}</b></a><div class="ah-muted">${e(t.subject)} · ${t.papers}/8 papers</div></td>
<td>${t.avg}</td><td>${heat(t.heat)}</td>
<td><input type="checkbox" data-act="tt" data-f="concept" data-t="${t.id}" ${m.concept ? 'checked' : ''}></td>
<td style="min-width:120px">${s.solved}/${t.qs.length}${bar(s.pct)}</td><td>${s.acc === null ? '–' : pct(s.acc)}</td>
<td><input type="checkbox" data-act="tt" data-f="rev2" data-t="${t.id}" ${m.rev2 ? 'checked' : ''}></td>
<td><input class="ah-in" style="width:150px" data-act="note" data-t="${t.id}" value="${e(m.note || '')}" maxlength="200" placeholder="note"></td></tr>`;
        }).join('');
        return `<div class="ah-bar">${['S', 'A', 'B', 'C'].map(k => `<button class="ah-chip ${ui.tiers[k] ? 'on' : ''}" data-act="tier" data-k="${k}">${TIER_LABEL[k]}</button>`).join('')}
<span class="ah-muted">Heat strip = marks in ${PAPERS.join(' ')}</span></div>
<div class="ah-card ah-scroll"><table class="ah-tbl"><tr><th>Topic</th><th>Avg</th><th>Heat</th><th>Concept</th><th>PYQs</th><th>Acc</th><th>Rev 2×</th><th>Notes</th></tr>${rows}</table></div>`;
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
<div class="ah-chips">${t.qs.map(q => { const v = S.q[q.k] || 0; return `<button class="ah-q q${v}" data-act="q" data-k="${q.k}">${v === 1 ? '✅' : v === 2 ? '❌' : '⬜'} ${e(q.l)}${q.m === 2 ? '<small>2m</small>' : ''}</button>`; }).join('')}</div>
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
    const tplList = list => list.map(x => `<div class="ah-card"><div class="ah-row" style="align-items:center"><span class="ah-tag">${x.id}</span><b style="flex:1">${e(x.title)}</b>
<label class="ah-muted"><input type="checkbox" data-act="tpl" data-k="${x.id}" ${S.tpl[x.id] ? 'checked' : ''}> got it</label></div>
<div class="ah-muted">📍 ${e(x.seen)}</div><div style="margin-top:6px">${e(x.logic)}</div></div>`).join('') || '<p class="ah-muted">No match.</p>';

    function vErr() {
        const topicOpts = '<option value="">— topic —</option>' + TOPICS.map(t => `<option value="${t.id}">${t.tier} · ${e(t.name)}</option>`).join('');
        const by = {}, roi = {};
        S.err.forEach(r => { by[r.type] = (by[r.type] || 0) + 1; if (r.topic) roi[r.topic] = (roi[r.topic] || 0) + 1; });
        const top = Object.entries(roi).map(([id, n]) => ({ t: byId[id], n })).filter(x => x.t).sort((a, b) => b.n * b.t.avg - a.n * a.t.avg).slice(0, 5);
        return `<div class="ah-card"><h3>➕ Log a mistake</h3>
<div class="ah-row"><input class="ah-in" id="ah-e-paper" placeholder="Paper & Q (e.g. '24-S1 Q43)" maxlength="40"><select class="ah-sel" id="ah-e-topic">${topicOpts}</select>
<select class="ah-sel" id="ah-e-type">${ERR_TYPES.map(x => `<option>${x}</option>`).join('')}</select></div>
<textarea class="ah-txt" id="ah-e-logic" maxlength="500" placeholder="Correct logic in one line…"></textarea>
<div style="margin-top:8px"><button class="ah-btn on" data-act="erradd">Add</button></div></div>
${S.err.length ? `<div class="ah-card"><h3>📊 Where you lose marks</h3><div class="ah-chips">${Object.entries(by).map(([k, n]) => `<span class="ah-tag">${e(k)} · ${n}</span>`).join('')}</div>
${top.length ? `<p class="ah-muted" style="margin-top:10px">Highest ROI to fix (errors × avg marks/paper):</p>${top.map(x => `<div>• <b>${e(x.t.name)}</b> — ${x.n} error${x.n > 1 ? 's' : ''} · ${x.t.avg} marks/paper</div>`).join('')}` : ''}</div>` : ''}
<div class="ah-card ah-scroll"><table class="ah-tbl"><tr><th>Date</th><th>Paper & Q</th><th>Topic</th><th>Type</th><th>Correct logic</th><th>Retried</th><th></th></tr>
${S.err.slice().reverse().map(r => `<tr><td>${e(r.date)}</td><td>${e(r.paper)}</td><td>${e(topicLabel(r.topic))}</td><td>${e(r.type)}</td><td>${e(r.logic)}</td>
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

    const RENDER = { overview: vOverview, today: vToday, tracker: vTracker, pyq: vPyq, tpl: vTpl, err: vErr, insights: vInsights, playbook: vPlaybook };
    const STATUS = { loading: '⏳ Loading…', saved: '💾 Saved', saving: '⏳ Saving…', saveerr: '⚠️ Save failed — will retry on next change', loaderr: '⚠️ Could not load tracker' };
    function paintStatus() { const el = root.querySelector('#ah-status'); if (el) el.textContent = STATUS[ui.status] || ''; }

    function render() {
        if (dead) return;
        const needsData = ui.view !== 'overview';
        let body;
        if (needsData && ui.status === 'loaderr') body = `<div class="ah-card ah-warn"><p>Could not load your tracker from Firestore. Saving is disabled so existing data is never overwritten. Check the Firestore rules and your login.</p><button class="ah-btn on" data-act="retry">Retry</button></div>`;
        else if (needsData && !loaded) body = '<p class="ah-muted">Loading…</p>';
        else body = RENDER[ui.view]();
        root.innerHTML = `<div class="section-header"><h2>👑 Admin Hub</h2><div class="line"></div></div>
<div class="ah-bar">${VIEWS.map(([k, l]) => `<button class="ah-btn ${ui.view === k ? 'on' : ''}" data-act="view" data-k="${k}">${l}</button>`).join('')}<span class="sp"></span><span class="ah-save" id="ah-status"></span></div>
<div id="ah-view">${body}</div>`;
        paintStatus();
    }

    // ---------- events (delegated) ----------
    const touch = id => { (S.t[id] = S.t[id] || {}).last = new Date().toISOString(); };
    function onClick(ev) {
        const b = ev.target.closest('[data-act]'); if (!b || b.tagName === 'INPUT' || b.tagName === 'SELECT') return;
        const a = b.dataset.act;
        if (a === 'view') { ui.view = b.dataset.k; render(); }
        else if (a === 'retry') load();
        else if (a === 'open') { ev.preventDefault(); ui.topic = b.dataset.t; ui.view = 'pyq'; render(); }
        else if (a === 'tier') { ui.tiers[b.dataset.k] = !ui.tiers[b.dataset.k]; render(); }
        else if (a === 'tplf') { ui.tplF = b.dataset.k; render(); }
        else if (a === 'rand') {
            const t = byId[b.dataset.t], pool = t.qs.filter(q => S.q[q.k]);
            rand = { t: t.id, qs: pool.sort(() => Math.random() - 0.5).slice(0, 5) }; render();
        } else if (a === 'q') {
            const k = b.dataset.k, v = ((S.q[k] || 0) + 1) % 3;
            if (v) S.q[k] = v; else delete S.q[k];
            touch(ui.topic); save(); render();
        } else if (a === 'clear') {
            const t = byId[b.dataset.t];
            if (confirm(`Reset all PYQ marks for "${t.name}"?`)) { t.qs.forEach(q => delete S.q[q.k]); save(); render(); }
        } else if (a === 'erradd') {
            const g = id => root.querySelector(id).value.trim();
            const logic = g('#ah-e-logic'), paper = g('#ah-e-paper');
            if (!logic && !paper) return;
            S.err.push({ id: Date.now().toString(36), date: new Date().toISOString().slice(0, 10), paper: paper.slice(0, 40), topic: g('#ah-e-topic'), type: g('#ah-e-type'), logic: logic.slice(0, 500), retry: false });
            save(); render();
        } else if (a === 'errdel') { S.err = S.err.filter(r => r.id !== b.dataset.id); save(); render(); }
    }
    function onChange(ev) {
        const x = ev.target, a = x.dataset && x.dataset.act; if (!a) return;
        if (a === 'pick') { ui.topic = x.value; render(); }
        else if (a === 'tt') { (S.t[x.dataset.t] = S.t[x.dataset.t] || {})[x.dataset.f] = x.checked; save(); }
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
