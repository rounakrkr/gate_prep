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
let hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '<b>OV</b>' });
hub.mount(); await wait(20); nav('tracker');
ok(root.textContent.includes('Saving is disabled'), 'load error shows warning, no editing');
await hub.flush(); ok(saves === 0, 'no write after failed load');
await hub.destroy();

// 2. normal flow
failLoad = false; root.innerHTML = '';
hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '<b>OV</b>', examDate: new Date(Date.now() + 100 * 86400000), onStudentView: () => { studentCalled = true; } });
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
const cb = root.querySelector('.ah-focus [data-act=tt][data-f=concept]'); cb.checked = true; cb.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
ok(root.querySelector('.ah-focus h2').textContent.startsWith('Trees, BST'), 'done (concept + 80% PYQs) → plan advances');
click(root.querySelector('[data-act=student]')); ok(studentCalled, 'student-view toggle callback fires');
nav('roadmap'); click(root.querySelector('[data-act=focus]:not([disabled])')); ok(root.textContent.includes('Back to plan'), 'focus override works');
click(root.querySelector('[data-act=auto]')); nav('roadmap');
const ps = root.querySelector('[data-act=planstart]'); ps.value = new Date(Date.now() - 5 * 86400000).toISOString().slice(0, 10); ps.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
ok(root.textContent.includes('behind'), 'behind-schedule indicator');
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
nav('err'); root.querySelector('#ah-e-paper').value = "<img src=x onerror=alert(1)>"; root.querySelector('#ah-e-logic').value = 'use A²=cI';
root.querySelector('#ah-e-topic').value = TOPICS.find(t => t.tier === 'S').id;
click(root.querySelector('[data-act=erradd]'));
ok(!root.querySelector('#ah-view img'), 'XSS escaped in error log'); ok(root.textContent.includes('Highest ROI'), 'ROI ranker appears');
await hub.flush(); ok(store.err.length === 1, 'error saved to store');
await hub.destroy();

// 3. reload restores state
root.innerHTML = '';
hub = createAdminHub({ root, db, doc, getDoc, setDoc, overviewHtml: () => '' });
hub.mount(); await wait(20); nav('pyq');
ok(root.querySelectorAll('.ah-q.q1, .ah-q.q2').length >= 1, 'state restored after reload');
await hub.destroy(); process.exit(process.exitCode || 0);
