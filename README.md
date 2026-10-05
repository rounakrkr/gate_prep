# 🎯 GATE 2027 CSE — Rounak's Prep Hub

> **Target:** GATE CSE Feb 2027
> **Strategy:** Prepare 80, Attempt 65, Score 55+
> **Style:** 3-day burst sprints

## 📂 Folder Structure

```
GATE/
├── notes/              # Subject-wise revision notes
│   ├── algorithms/
│   ├── os/
│   ├── cn/
│   ├── dbms/
│   ├── pds/
│   ├── coa/
│   ├── digital-logic/
│   ├── toc/
│   ├── engg-maths/
│   └── general-aptitude/
├── pyqs/               # Previous Year Questions (sorted by subject)
├── mock-tests/         # Mock test scores & analysis
├── formula-sheets/     # Quick revision formula sheets
└── README.md           # This file
```

## 🚫 Skipping
- Compiler Design (4-6 marks, not worth it)

## 📅 Timeline
- Sep-Nov: College subjects = GATE prep
- Nov 19-30: Break #1 BLITZ
- Dec: Spring sem + COA/TOC
- Dec 20 - Jan 3: Break #2 BLITZ
- Jan: Mocks + PYQs
- Feb: GATE 🎯

## 🔐 Security & Admin Mode

- Login is restricted to `@kiit.ac.in` Google accounts.
- **Admin mode** (badge + Admin tab) is shown only to the admin account. The UI check is client-side,
  so **real protection comes from Firestore rules** in [`firestore.rules`](firestore.rules).
- To deploy rules: Firebase Console → Firestore Database → Rules → paste file contents → Publish.
- Rules summary: `admin/*` → admin only · `users/{uid}` → that user only · everything else → denied.
- Admin PYQ stats live in Firestore (`admin/pyq_stats`), never in this repo.
