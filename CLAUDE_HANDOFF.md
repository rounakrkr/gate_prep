# 🤖 Handoff Brief for Claude — GATEway 2027 Project
> Read this fully before doing anything. This is Rounak's complete context.

---

## 👤 Who is Rounak?

- **Name:** Rounak KR
- **GitHub:** `rounakrkr` (repo: `rounakrkr/gate_prep`, private)
- **KIIT email:** `24051123@kiit.ac.in` ← this is critical
- **Personal email:** `rounakkr2017@gmail.com`
- **College:** KIIT University, 3rd year B.Tech CSE
- **Goal:** GATE 2027 CSE → MTech from IIT/NIT → Lecturer at private college (ideally KIIT)
- **Vibe:** Burst productivity (3-4 day sprints), loves momos (🥟), chill but serious about GATE

---

## 🚀 The App — GATEway 2027

### Live URLs
- **Vercel:** https://gate-prep-ten.vercel.app/
- **Firebase project:** `gate-prep-b1d7a`

### Tech Stack
- **Single file app:** `c:\Extra Programs\Files\GATE\index.html` — all HTML + CSS + JS in one file
- **Firebase Modular SDK v12.19.0** via CDN ESM (`type="module"` script)
- **Google Auth** — only `@kiit.ac.in` accounts allowed (`hd: 'kiit.ac.in'` parameter set + email validation)
- **Firestore** — `users/{uid}` document stores: `email`, `name`, `photoURL`, `deliverables` (map), `mocks` (map), `lastUpdated`
- **Vercel** — auto-deploys on push to `main` branch of `rounakrkr/gate_prep`

### App Features
1. **Sprint Tracker** — 30 sprints (S1–S30, S13 was removed so array skips from S12 → S14). Each sprint has deliverables (checkboxes). Current sprint auto-detected by date. Firestore saves checkbox state.
2. **Mock Tests** — 3 mock cards with PDF download buttons (mocks/mock-1.pdf, mock-2.pdf, mock-3.pdf)
3. **Footer quote** — "Discipline is choosing between what you want now and what you want most."
4. **Login/Logout** — Google OAuth, KIIT-only. Logout resets button to "Sign in with Google".

### Important Code Patterns
```javascript
// Auth check (line ~904, ~928, ~970 in index.html)
if (!email.endsWith('@kiit.ac.in')) { /* block */ }

// Google hd restriction (line ~696)
provider.setCustomParameters({ hd: 'kiit.ac.in' });

// Firestore path
doc(db, 'users', user.uid)

// Debounced save (500ms)
```

---

## 📊 GATE PYQ Scores (Verified)

Both scores verified directly from official answer key PDFs using Python:

| Paper | Score | Correct | Wrong | Skipped | Negatives |
|:---|:---:|:---:|:---:|:---:|:---:|
| **GATE 2023** | **52.00 / 100** | 36 | 16 | 13 | −3.00 |
| **GATE 2024** | **54.00 / 100** | 36 | 18 | 11 | −1.00 |

**Key insight:** Same raw marks in both years (+55), but 2024 score is 2 marks higher purely due to better negative mark avoidance (−3 → −1).

### Section breakdown (2024 full paper):
| Section | Score | Max | Accuracy |
|:---|:---:|:---:|:---:|
| GA | 14.00 | 15 | 100% |
| MCQ 1m | 8.67 | 11 | 90% |
| MSQ 1m | 3.00 | 10 | 43% |
| NAT 1m | 1.00 | 4 | 33% |
| MCQ 2m | 9.33 | 16 | 83% |
| MSQ 2m | 6.00 | 20 | 30% |
| NAT 2m | 12.00 | 24 | 67% |

**Weak spots:** MSQ (adds extra option or misses 1 option consistently), DSD (Digital Logic barely studied), NAT calculation errors.
**Strengths:** GA is near-perfect, MCQ conceptual questions solid, smart skip decisions.

---

## 📁 Repo State (updated 6 Oct 2026) — READ THIS FIRST

### 🗺️ File map
| File | Purpose |
|---|---|
| `index.html` | Whole student app (Firebase Auth + Firestore, 31 sprints in `SPRINTS`, S13 skipped). Also the admin gate: `ADMIN_EMAIL`, `setupAdminMode()`, `adminOverviewHtml()`, `loadAdminHub()` |
| `admin-hub.js` | **Admin-only module** (dynamic `import()` after admin check). `createAdminHub({root, db, doc, getDoc, setDoc, esc, overviewHtml, sprints})` → views: Overview, Today, Tracker, PYQ Index, Templates, Error Log, Insights, Playbook. Event delegation via `data-act`. Never saves before a successful load |
| `admin-data.js` | **AUTO-GENERATED** (50 topics, 440 PYQs, 44 templates, subject/GA/trend tables) from `GATE_CS_PYQ_Analysis_S16.md` + `GATE_PYQ_Analysis.md`. Regenerate: `python tools/build_admin_data.py` |
| `tools/test_admin_hub.mjs` | jsdom test of the hub with mocked Firestore (`npm i jsdom`, run from `tools/`; needs `{"type":"module"}` package.json). Keep it green after every hub change |
| `firestore.rules` | Correct rules (admin/* → admin only, users/{uid} → owner only). **Owner must paste into Firebase Console → Publish.** Verify it is published (user pasted their own buggy version earlier: `!request.path.size() > 3` breaks everything) |
| `GATE_CS_PYQ_Analysis_S16.md` | **Preferred analysis** (user likes it): 16 Tier-S topics ≈ 47 marks/paper, exact PYQ index, templates |
| `GATE_PYQ_Analysis.md` | Older 71-bucket analysis (used for trends + GA patterns) |

### 🗄️ Firestore data
- `users/{uid}` → student progress (deliverables, mocks…)
- `admin/pyq_stats` → PYQ scores JSON pasted in Overview panel (private; never put scores in repo)
- `admin/tracker` → hub state: `{q:{<qkey>:1|2}, t:{<topicId>:{concept,rev2,note,last,done}}, tpl:{<id>:true}, err:[{id,date,paper,topic,type,logic,retry}], v:1}`. `qkey` like `24S1Q43`; 1=correct, 2=wrong. Topic ids look like `s_graph_algos_bfs_dfs_mst_short`

### ✅ Done
Admin mode (badge, gate, rules), Admin Hub v1 + full-site admin redesign (38/38 jsdom tests pass), sprint-count/timer/XSS/sync-toast fixes, README security section.

### 🧭 User decisions (do not re-ask)
- Goal = **complete ALL Tier S (16) + Tier A (15) topics**, regardless of subject. Subject-wise thinking no longer matters to him.
- **Compiler Design is IN** (it overlaps TOC/AFL: ~59% of CD marks are Parsing/SDD/Lexical). `SPRINTS` still has NO compiler sprint → either add 2 sprints after TOC Part 3 (S22) or rely on the topic plan below.
- S16 file is preferred over the older analysis.

## ✅ Admin full-site redesign — DONE (6 Oct 2026, 38/38 jsdom tests)

When `isAdmin`, `setupAdminMode()` adds `body.admin-mode`: the student shell (countdown, stats, nav tabs, footer, other tabs) is hidden by CSS and the user lands on `#tab-admin`, which the hub renders as a **sidebar Command Center** (bottom nav on mobile). `👁️ Student view` (sidebar) toggles `body.student-view`; a floating `#admin-back` button returns. If `admin-hub.js` fails to import, `admin-mode` is removed so the admin is never stranded.

- **Topic-first plan:** `ORDER_NAMES` in `admin-hub.js` = all 31 Tier S+A topics in dependency order (Regular → CFG/PDA → Parsing → SDD → Code-opt; Number repr → Cache → Pipelining → Instr fmt; Process → Paging → CPU sched → File sys …), 1 topic/day from `admin/tracker.plan.start` (editable on Roadmap), ahead/behind indicator.
- **Topic finish is EXPLICIT** (user decision, 8 Oct): the Finish button unlocks only when concept ✓ AND ≥80% (`DONE_PCT`) of PYQs are solved (`isReady`); pressing it stores `t[id].done='YYYY-MM-DD'` (`isDone`) and only then does Today advance. Reopen deletes it. Earlier versions auto-advanced mid-practice (bug) — never go back to auto. v1→v2 migration marks previously-auto-finished topics as done. To jump ahead, user uses Roadmap → Focus / PYQ Index.
- **Views:** 🎯 Today (current topic checklist + inline PYQ chips, up-next, revision due) · 🗺️ Roadmap · 📋 Tracker · 📚 PYQ Index · 🔁 Templates · 🐞 Error Log (ROI ranker) · 📈 Insights · 🛣️ Playbook · 🛠️ Scores & Tools (old overview: PYQ JSON, backup).
- **End-sem exams Nov 1–18 2026** (user confirmed): `BREAKS` const in `admin-hub.js` makes the 31-day plan skip those dates (plan from Oct 6 → 4 days in late Oct... then resumes Nov 19). Today shows a "paused" card during the break. Edit `BREAKS` for any other blackout.
- **Student `SPRINTS` deliberately NOT changed** for Compiler Design: inserting sprints would shift dates for every student and risk orphaning saved progress keyed by sprint id. If the user still wants it, add NEW ids (33, 34), never renumber.
- Compiler Design is now inside the plan (Parsing, SDD, Code-opt), so no `SPRINTS` change was needed.

## 🎯 NEXT IDEAS (not started)
- Add CD sprints to student `SPRINTS` only if the user wants the student view to match.
- After S+A is done: Tier B/C ordering, timed-mock tracker in the hub, per-topic "logic one-liner" export.
- Visual check on a real phone after Vercel deploy (only jsdom-tested so far).

## ⚠️ Known caveats
- `mocks/*.pdf` missing from repo → mock download buttons 404.
- Sprint dates overlap on boundary days (S10/S11 Oct 25, S11/S12 Oct 28, S25/S26 Jan 3) — confirm intended.
- Repo is **public**; this file contains personal emails. Consider removing them or making the repo private.
- **GitHub token:** the user pastes a PAT in chat for pushing. NEVER write it into any file. Use it only transiently: `git -c http.extraheader="Authorization: Basic $(printf 'x-access-token:%s' "$TOKEN" | base64 -w0)" push origin main`. Ask the user to revoke it when done.
- Prefer committing quickly (user worries about running out of tokens), then testing.

---

## 🗂️ PYQ Analysis Files (Rounak made these — reference only, don't edit without asking)

### `GATE_PYQ_Analysis.md`
- 8 papers (2022, 2023, 2024-S1, 2024-S2, 2025-S1, 2025-S2, 2026-S1, 2026-S2)
- 71 topic buckets across 14 subjects
- Tier S/A/B/C classification with marks heatmap
- Subject deep-dives with exact question numbers
- Rising/falling topic trends
- GA pattern analysis
- Prep strategy (4 phases)

### `GATE_CS_PYQ_Analysis_S16.md`
- More concise version, same 8 papers
- **16 Tier S topics** → ~47 marks/paper coverage
- 36 recurring question templates (near-exact repeats + logic-same templates)
- Exact PYQ index: every topic → every question from all 8 papers
- Progress tracker table (pre-filled with Tier S topics, 0/N solved)

---

## 🧠 Rounak's GATE Prep Context

### Tier S topics (must-master, ~47 marks/paper):
1. C output tracing / pointers / recursion (8/8 papers, avg 4.75m)
2. Graph algos BFS/DFS/MST/shortest path (8/8, 3.5m)
3. Graph theory coloring/matching (6/8, 3.38m)
4. Paging/VM/TLB/page replacement (8/8, 3.25m)
5. Regular langs DFA/NFA/regex/min-DFA (8/8, 3.12m)
6. Trees/BST/heaps (8/8, 3.12m)
7. Linear algebra eigen/det/rank (8/8, 3.0m)
8. Probability & statistics (7/8, 3.0m)
9. Cache tag/index/AMAT/hit-miss (7/8, 3.0m)
10. CFG/PDA/CFL properties (8/8, 2.75m)
11. IP addressing/CIDR/NAT/fragmentation (8/8, 2.75m)
12. Number repr 2's comp/IEEE-754 (8/8, 2.38m)
13. Boolean algebra/K-map (6/8, 2.38m)
14. Process/threads/semaphores/sync (7/8, 2.38m)
15. Parsing LL/LR/SLR/FIRST-FOLLOW (7/8, 2.25m)
16. Pipelining/hazards/CPU perf (7/8, 2.25m)

---

## 💬 Rounak's Communication Style
- Types in Hinglish (Hindi + English mix) — perfectly normal, reply naturally
- Says things like "akk second", "bhout", "hii" — casual typing
- Smart student, understands CS concepts well
- Very open to suggestions but has clear opinions
- Calls the AI "bhai" / "buddy"

---

## ⚙️ Technical Environment
- **OS:** Windows (PowerShell)
- **Python:** 3.10 at `C:\Users\RounakKR\AppData\Local\Programs\Python\Python310\`
- **pip:** use `python -m pip` (not `pip` directly in PowerShell)
- **Unicode in PowerShell:** always set `$env:PYTHONIOENCODING='utf-8'` before Python commands
- **Libraries available:** pdfplumber, PyMuPDF (fitz)
- **Workspace:** `c:\Extra Programs\Files\GATE\`
- **Artifacts dir:** `C:\Users\RounakKR\.gemini\antigravity\brain\5ac20a0f-5144-48ba-b237-2ec495e33885\`

---
