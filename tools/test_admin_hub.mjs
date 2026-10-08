import { JSDOM } from 'jsdom';
const dom = new JSDOM('<div id="r"></div>');
global.window = dom.window; global.document = dom.window.document;
global.confirm = () => true;
const { createAdminHub } = await import('../admin-hub.js');
const { TOPICS, TEMPLATES } = await import('../admin-data.js');

let studentCalled = false, store = null, saves = 0, failLoad = false;
const db = {}, doc = () => 'ref';
const getDoc = async () => { if (failLoad) throw new Error('denied'); return { exists: () => store !== null, data: () => store }; };
const setDoc = async (_, d) => { store = JSON.parse(JSON.stringify(d)); saves++; };
const root = document.getElementById('r');
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) process.exitCode = 1; };
const click = el => el.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
const nav = k => click(root.querySelector(`[data-act=view][data-k=${k}]`));
const wait = ms => new Promise(r => setTimeout(r, ms));

// 1. load failure must block saving
failLoad = true;
let opened = null;
let hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '<b>OV</b>' });
hub.mount(); await wait(20); nav('tracker');
ok(root.textContent.includes('Saving is disabled'), 'load error shows warning, no editing');
await hub.flush(); ok(saves === 0, 'no write after failed load');
await hub.destroy();

// 2. normal flow
failLoad = false; root.innerHTML = '';
hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '<b>OV</b>', examDate: new Date(Date.now() + 100 * 86400000), onStudentView: () => { studentCalled = true; }, papers: [{ id: 101, label: 'GATE 2026', sub: 'CS · Set 1' }], onOpenPaper: (id, pg) => { opened = [id, pg]; } });
hub.mount(); await wait(20);
ok(root.textContent.includes('days to GATE'), 'hero shows countdown');
nav('overview'); ok(root.textContent.includes('OV'), 'overview renders');
for (const v of ['today','tracker','pyq','tpl','err','insights','playbook']) { nav(v); ok(root.querySelector('#ah-view').innerHTML.length > 200, `view ${v} renders`); }
// --- new topic-first plan ---
nav('roadmap'); ok(root.querySelectorAll('[data-act=focus]').length === 31, 'roadmap lists 31 S+A topics');
ok(!root.textContent.includes('undefined'), 'all ORDER names resolve');
const names = [...root.querySelectorAll('tr b')].map(x => x.textContent);
ok(names.length === 31 && new Set(names).size === 31, '31 unique topics in plan');
ok(names.indexOf('CFG, PDA, ambiguity, CFL properties') < names.indexOf('Parsing (LL / LR / SLR, FIRST-FOLLOW)') && names.indexOf('Parsing (LL / LR / SLR, FIRST-FOLLOW)') < names.indexOf('Syntax-directed definitions / translation (.val)'), 'dependency order CFG → Parsing → SDD');
nav('today'); ok(root.querySelector('.ah-focus h2').textContent.startsWith('C output tracing'), 'today starts with Tier S #1');
for (let i = 0; i < 20; i++) click(root.querySelector('.ah-focus [data-act=q].q0'));
ok(root.querySelector('.ah-focus h2').textContent.startsWith('C output'), 'not done without concept ✓');
ok(root.querySelector('[data-act=finish]').classList.contains('locked'), 'Finish is greyed (locked style) without concept ✓');
global.confirm = () => false; click(root.querySelector('[data-act=finish]'));
ok(root.querySelector('.ah-focus h2').textContent.startsWith('C output'), 'early Finish + cancel → stays on topic'); global.confirm = () => true;
const cb = root.querySelector('.ah-focus [data-act=tt][data-f=concept]'); cb.checked = true; cb.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
ok(root.querySelector('.ah-focus h2').textContent.startsWith('C output'), 'Today does NOT jump on its own at concept ✓ + 80%');
const fin = root.querySelector('[data-act=finish]'); ok(!fin.classList.contains('locked') && fin.classList.contains('on'), 'Finish turns gold at concept ✓ + 80%');
let asked = 0; global.confirm = () => { asked++; return true; };
click(fin); ok(root.querySelector('.ah-focus h2').textContent.startsWith('Trees, BST'), 'Finish button advances the plan'); ok(asked === 0, 'no confirm when ready');
click(root.querySelector('[data-act=finish]')); ok(asked === 1 && root.querySelector('.ah-focus h2').textContent.startsWith('Graph algos'), 'early Finish + confirm → advances (asks once)');
click(root.querySelector('[data-act=student]')); ok(studentCalled, 'student-view toggle callback fires');
nav('roadmap'); click(root.querySelector('[data-act=focus]:not([disabled])')); ok(root.textContent.includes('Back to plan'), 'focus override works');
click(root.querySelector('[data-act=reopen]')); ok(root.querySelector('[data-act=finish]'), 'Reopen restores the Finish button');
click(root.querySelector('[data-act=auto]')); nav('roadmap');
const ps = root.querySelector('[data-act=planstart]'); ps.value = new Date(Date.now() - 5 * 86400000).toISOString().slice(0, 10); ps.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
ok(root.textContent.includes('behind'), 'behind-schedule indicator');
const ps2 = root.querySelector('[data-act=planstart]'); ps2.value = '2026-10-28'; ps2.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
const dts = [...root.querySelectorAll('tr td:nth-child(2)')].map(x => x.textContent);
ok(dts.length === 31 && dts[3] === '10-31' && dts[4] === '11-19', 'plan skips end-sem break (Oct 31 → Nov 19)');
ok(!dts.some(d => d >= '11-01' && d <= '11-18'), 'no topic scheduled Nov 1–18');
ok(dts[30] === '12-15', 'plan end date after break');
nav('pyq');
const t0 = root.querySelector('[data-act=pick]').value;
const k = root.querySelector('[data-act=q].q0').dataset.k;      // an unsolved chip (earlier steps solved others)
const me = () => root.querySelector(`[data-k="${k}"]`);
click(me()); ok(me().classList.contains('q1'), 'chip -> correct');
click(me()); ok(me().classList.contains('q2'), 'chip -> wrong');
click(me()); ok(me().classList.contains('q0'), 'chip -> cleared');
click(me());
await wait(900); ok(saves === 1 && store.q[k] === 1, 'debounced single save with q state');
ok(store.plan && store.plan.start, 'plan start persisted');
ok(!!store.t[t0].last, 'last-solved timestamp set');
nav('tracker'); ok(root.querySelectorAll('tr').length === 1 + 31, 'tracker shows 31 S+A rows');
click(root.querySelector('[data-act=tier][data-k=B]')); ok(root.querySelectorAll('tr').length === 1 + 46, 'tier B toggle adds 15');
nav('tpl'); ok(root.querySelectorAll('#ah-tpl-list .ah-card').length === TEMPLATES.length, '44 templates listed');
const q = root.querySelector('[data-act=tplq]'); q.value = 'cache'; q.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
ok(root.querySelectorAll('#ah-tpl-list .ah-card').length < TEMPLATES.length, 'template search filters');
click(root.querySelector('[data-act=tplgot]')); ok(root.querySelector('.ah-tpl.got'), 'template card toggles to got-it');
ok(root.querySelectorAll('.ah-seen').length > 1, 'seen-in chips render');
nav('err'); root.querySelector('#ah-e-paper').value = "<img src=x onerror=alert(1)>"; root.querySelector('#ah-e-logic').value = 'use A²=cI';
root.querySelector('#ah-e-topic').value = TOPICS.find(t => t.tier === 'S').id;
click(root.querySelector('[data-act=erradd]'));
ok(!root.querySelector('#ah-view img'), 'XSS escaped in error log'); ok(root.textContent.includes('Highest ROI'), 'ROI ranker appears');
await hub.flush(); ok(store.err.length === 1, 'error saved to store');
nav('err'); root.querySelector('#ah-e-pid').value = '101'; root.querySelector('#ah-e-paper').value = 'Q43'; root.querySelector('#ah-e-page').value = '7'; root.querySelector('#ah-e-logic').value = 'recheck';
click(root.querySelector('[data-act=erradd]'));
await hub.flush(); ok(store.err.length === 2 && store.err[1].pid === 101 && store.err[1].page === 7, 'error stores paper id + page');
click(root.querySelector('[data-act=erropen]')); ok(opened && opened[0] === 101 && opened[1] === 7, 'error Open button opens paper at the page');
await hub.destroy();

// 3. reload restores state
root.innerHTML = '';
hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '' });
hub.mount(); await wait(20); nav('pyq');
ok(root.querySelectorAll('.ah-q.q1, .ah-q.q2').length >= 1, 'state restored after reload');
await hub.destroy();

// 4. v1 → v2 migration: topics the old auto-rule had finished stay finished
const c0 = TOPICS.find(t => t.name.startsWith('C output'));
store = { q: Object.fromEntries(c0.qs.slice(0, 20).map(q => [q.k, 1])), t: { [c0.id]: { concept: true, last: '2026-10-07T10:00:00.000Z' } }, tpl: {}, err: [], plan: { start: '2026-10-06' }, v: 1 };
root.innerHTML = '';
hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '' });
hub.mount(); await wait(20);
ok(root.querySelector('.ah-focus h2').textContent.startsWith('Trees, BST'), 'v1 auto-finished topic migrated to done');
await wait(900); ok(store.v === 2 && store.t[c0.id].done === '2026-10-07', 'migration persisted with done date');
await hub.destroy(); process.exit(process.exitCode || 0);
