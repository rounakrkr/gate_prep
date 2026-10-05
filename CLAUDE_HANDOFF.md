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

## 📁 Repo State (as of 5 Oct 2026)

### Committed & pushed to `main` ✅
- `index.html` — the app (all features working)
- `mocks/` — folder exists (holds PDF files)
- `README.md`
- `formula-sheets/`, `mock-tests/`, `notes/` — folders

### ⚠️ NOT committed (untracked — Rounak made these today locally):
- `GATE_PYQ_Analysis.md` — 821 lines, 8-paper PYQ pattern analysis (2022→2026), subject heatmaps, tier list, question template library
- `GATE_CS_PYQ_Analysis_S16.md` — 600 lines, more detailed version with 16 Tier S topics, exact PYQ index per topic, progress tracker

> Rounak said he'll commit these himself or ask Claude to — **don't auto-commit unless asked**.

### Git remote
- `origin` = `https://github.com/rounakrkr/gate_prep`

---

## 🎯 NEXT TASK — What Claude needs to build

### Feature: Admin-only mode for Rounak in GATEway app

**What Rounak wants:**
- The app is currently open to ALL `@kiit.ac.in` users
- He wants a **special "admin/premium" mode** that is **only for him** (`24051123@kiit.ac.in`)
- Other KIIT users should see the normal app
- Rounak (admin) should see **extra features** — exact features TBD but the concept is:
  - Maybe a special "Admin" badge/indicator when he's logged in
  - Maybe access to hidden stats, dev tools, or future premium features
  - The point is: his account = elevated access, others = standard access

**How to implement (suggested approach):**

**Option A — Client-side (simple, fine for this personal app):**
```javascript
const ADMIN_EMAIL = '24051123@kiit.ac.in';
const isAdmin = user.email === ADMIN_EMAIL;
// Then conditionally render admin-only UI
```
Pros: Zero backend change needed. Cons: Security via obscurity (fine for a personal study app).

**Option B — Firestore role field (more robust):**
```
users/{uid}/role: "admin"  // set manually in Firebase console for Rounak's UID
```
Then check `userData.role === 'admin'` after loading Firestore doc.
Pros: Cleaner, extensible. Cons: Need to manually set field in Firebase console once.

> Rounak will decide which approach. Ask him if unsure.

**What admin mode might show (brainstorm — confirm with Rounak):**
- 🔴 Admin badge next to name in header
- 📊 Extra analytics tab showing his GATE PYQ performance stats
- 🛠️ Dev tools / debug info
- 📝 Ability to edit sprint descriptions live
- 🔒 A hidden "admin panel" route/section

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

## 🎯 Summary: What to do next

1. **Ask Rounak** which admin approach he prefers (Option A vs B above)
2. **Implement** admin detection in `index.html`
3. **Show admin UI** — at minimum an admin badge; confirm with Rounak what else he wants
4. **Test** — make sure normal @kiit.ac.in users see nothing different
5. **Commit + push** — Vercel will auto-deploy

> 💡 Rounak's KIIT email `24051123@kiit.ac.in` is the ONE and ONLY admin. Hardcode it or use Firestore role — either works for this personal app.
