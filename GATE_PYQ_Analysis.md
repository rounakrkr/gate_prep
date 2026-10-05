# 🎯 GATE CSE — PYQ Pattern Analysis (2022 → 2026)
### 🧬 Topics, Question-Logic & Repeat-Frequency — 8 papers, 440 technical questions tagged

> 👤 Made for **Rounak** · 📅 Analysis date: 05 Oct 2026 · 🎓 Target: **GATE 2027**
> 📄 Source papers: **2022 (CS) · 2023 (CS) · 2024 (CS1 + CS2) · 2025 (CS1 + CS2) · 2026 (CS1 + CS2)**

---

## 📑 Table of Contents
1. 🚀 [TL;DR — 12 key findings](#-tldr--12-key-findings)
2. 🧪 [Dataset & method](#-dataset--method)
3. 📊 [Subject-wise marks heatmap](#-subject-wise-marks-heatmap)
4. 🏆 [Topic leaderboard (tiers)](#-topic-leaderboard--tiers)
5. 🔬 [Subject deep-dives (question logic)](#-subject-deep-dives)
6. ✅ [Tumhari observed topic list — verified](#-tumhari-observed-topic-list--verified)
7. 📈 [Trends: rising / falling topics](#-trends-rising--falling-topics)
8. 🧠 [General Aptitude analysis](#-general-aptitude-analysis)
9. 🗓️ [Prep strategy](#-prep-strategy)
10. ⚠️ [Caveats](#-caveats)

---

## 🚀 TL;DR — 12 key findings

1. 🔁 **Exact question repeat nahi hota, par topics + logic bahut repeat hote hain.** 71 distinct topic-buckets mein se **45 topics 8 mein se kam-se-kam 5 papers mein aaye**.
2. 🔥 **Sirf 10 topics 7/8 ya 8/8 papers mein aaye** — total marks ka **22.2%** (≈ 18.9 marks/paper).
3. ⭐ **Tier S + Tier A (≥5 papers) milake ≈ 74% of all marks** cover hote hain. Yani 45 topics = ~3/4 paper.
4. 🧊 Jo topics sirf 1-2 papers mein aaye unka share bahut chhota hai — inhe **last mein** rakho.
5. 🥇 **Sabse zyada marks (8-paper total)**: **Graph Theory** (21m), **Number Representation** (18m), **Normalization & Functional Dependencies** (17m), **Cache Memory** (17m), **SQL, Relational Algebra & Calculus** (16m).
6. 🔢 **Number Representation (2's compl / IEEE-754 / radix) — 8/8 papers**. **Paging/Page-table — 8/8 papers**. Ye dono *guaranteed* marks hain.
7. 🌐 **Computer Networks har paper mein 6–10 marks**: IP addressing, delay/utilization, TCP sabse zyada.
8. ⚙️ **COA sabse stable subject**: har paper mein **9–12 marks** (avg 10.4).
9. 📐 **Maths (DM + LA + Calculus + Prob) ≈ 15.2 marks/paper** (range 12–19). Graph Theory akela sabse bada maths-topic hai.
10. 🗺️ **K-map / minimal SOP 2024 se har paper mein (6/6)** — 2022-23 mein nahi tha. Trend upward.
11. 🌲 **BST/Tree, MST/Shortest-path, Sorting/DP, Distributions** — last 4 papers mein pehle se zyada marks.
12. 🧠 **GA mein dice-probability 3 baar** (25-1, 26-1, 26-2), **paper-folding/spatial/visual har paper mein**, **statement-logic (all/some/when…then) 6 baar**.

---

## 🧪 Dataset & method

| 📄 Paper | 🔖 Code | 📝 Total Q | 🧠 GA | 💻 Core CS (Q11–Q65) | 🎯 Core marks |
|---|---|---|---|---|---|
| GATE 2022 | `22` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2023 | `23` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2024 CS1 | `24-1` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2024 CS2 | `24-2` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2025 CS1 | `25-1` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2025 CS2 | `25-2` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2026 CS1 | `26-1` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |
| GATE 2026 CS2 | `26-2` | 65 | 10 (15 m) | 55 (25×1m + 30×2m) | 85 |

- 🏷️ Har core question ko ek **topic-bucket** (71 buckets, 14 subjects) mein tag kiya gaya.
- ✖️ Mixed questions (e.g. SQL + normalization) ko **dominant concept** ke under rakha.
- 📌 Notation: `24-1` = GATE 2024 **CS1**, `24-2` = **CS2**. `Q18` = question number **paper ke andar**.
- 🧾 Marks = 1 (Q11–Q35) ya 2 (Q36–Q65). MCQ/MSQ/NAT split alag se tag nahi kiya.
- 🧮 Legend for grids: ✅ = aaya · ✅² = 2 questions · `·` = nahi aaya.

---

## 📊 Subject-wise marks heatmap

🟥 ≥8 · 🟧 4–7 · 🟨 1–3 · ⬜ 0  (marks out of 85 core)

| Subject | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | 📊 Avg | Range |
|---|---|---|---|---|---|---|---|---|---|---|
| ⚙️ **Computer Org & Arch** | 🟥 10 | 🟥 11 | 🟥 9 | 🟥 11 | 🟥 9 | 🟥 12 | 🟥 10 | 🟥 11 | **10.4** | 9–12 |
| 🖥️ **Operating Systems** | 🟥 10 | 🟥 9 | 🟥 10 | 🟥 10 | 🟥 8 | 🟧 7 | 🟥 10 | 🟥 9 | **9.1** | 7–10 |
| 🌐 **Computer Networks** | 🟥 10 | 🟥 8 | 🟥 9 | 🟥 9 | 🟧 6 | 🟧 6 | 🟥 8 | 🟥 9 | **8.1** | 6–10 |
| 🔣 **Discrete Maths** | 🟥 13 | 🟥 12 | 🟧 6 | 🟥 10 | 🟧 6 | 🟨 3 | 🟧 7 | 🟧 4 | **7.6** | 3–13 |
| 🗄️ **Databases** | 🟧 7 | 🟧 5 | 🟥 8 | 🟥 8 | 🟥 8 | 🟥 9 | 🟧 6 | 🟧 6 | **7.1** | 5–9 |
| 🤖 **Theory of Computation** | 🟥 8 | 🟥 8 | 🟧 7 | 🟧 7 | 🟥 8 | 🟧 7 | 🟧 5 | 🟧 5 | **6.9** | 5–8 |
| 🛠️ **Compiler Design** | 🟧 4 | 🟥 8 | 🟧 7 | 🟥 8 | 🟧 6 | 🟧 6 | 🟧 7 | 🟧 6 | **6.5** | 4–8 |
| 🧮 **Algorithms** | 🟧 5 | 🟨 3 | 🟧 7 | 🟧 5 | 🟧 7 | 🟥 8 | 🟧 7 | 🟥 9 | **6.4** | 3–9 |
| 🌳 **Data Structures** | 🟧 5 | 🟧 7 | 🟧 4 | 🟧 4 | 🟧 6 | 🟧 6 | 🟥 9 | 🟧 6 | **5.9** | 4–9 |
| 🔌 **Digital Logic** | 🟨 2 | 🟧 5 | 🟧 5 | 🟨 3 | 🟧 7 | 🟧 6 | 🟧 5 | 🟧 5 | **4.8** | 2–7 |
| 💻 **Programming (C)** | 🟧 5 | 🟨 3 | 🟧 5 | 🟧 4 | 🟧 5 | 🟧 6 | 🟨 3 | 🟧 6 | **4.6** | 3–6 |
| 📐 **Linear Algebra** | 🟧 5 | 🟨 2 | 🟨 3 | 🟨 2 | 🟨 3 | 🟧 4 | 🟨 2 | 🟨 3 | **3.0** | 2–5 |
| 🎲 **Probability** | ⬜ 0 | 🟨 2 | 🟧 4 | 🟨 3 | 🟧 5 | 🟧 4 | 🟨 3 | 🟨 3 | **3.0** | 0–5 |
| ∫ **Calculus** | 🟨 1 | 🟨 2 | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 3 | 🟨 3 | **1.6** | 1–3 |

### 🧮 Average weightage (per 85 core marks)

```
Computer Org & Arch      ████████████████      10.4  (12.2%)
Operating Systems        ██████████████         9.1  (10.7%)
Computer Networks        ████████████           8.1  ( 9.6%)
Discrete Maths           ███████████            7.6  ( 9.0%)
Databases                ███████████            7.1  ( 8.4%)
Theory of Computation    ██████████             6.9  ( 8.1%)
Compiler Design          ██████████             6.5  ( 7.6%)
Algorithms               ██████████             6.4  ( 7.5%)
Data Structures          █████████              5.9  ( 6.9%)
Digital Logic            ███████                4.8  ( 5.6%)
Programming (C)          ███████                4.6  ( 5.4%)
Linear Algebra           ████                   3.0  ( 3.5%)
Probability              ████                   3.0  ( 3.5%)
Calculus                 ██                     1.6  ( 1.9%)
```

> 💡 **Maths bundle** (Discrete + LA + Calculus + Probability) per paper: 22=19, 23=18, 24-1=14, 24-2=16, 25-1=15, 25-2=12, 26-1=15, 26-2=13 → avg **15.2**.

---

## 🏆 Topic leaderboard & tiers

**Tier rule** (papers jisme topic aaya, out of 8):  🔥 **S** = 7–8 · ⭐ **A** = 5–6 · 🌱 **B** = 3–4 · 🧊 **C** = 1–2

| Tier | # Topics | Total marks (8 papers) | Share of all marks |
|---|---|---|---|
| 🔥 S | 10 | 151 | 22.2% |
| ⭐ A | 35 | 355 | 52.2% |
| 🌱 B | 26 | 163 | 24.0% |
| 🧊 C | 3 | 11 | 1.6% |

### 🔥 Tier S — *kabhi miss mat karo* (7–8 papers)

| # | Topic | Subject | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Papers | Qs | Marks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Number Representation (2s-compl, IEEE-754, radix)** | ⚙️ COA | ✅² | ✅² | ✅ | ✅² | ✅ | ✅ | ✅² | ✅² | **8/8** | 13 | **18** |
| 2 | **Paging, Page Tables & TLB** | 🖥️ OS | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | ✅ | ✅ | **8/8** | 9 | **16** |
| 3 | **Normalization & Functional Dependencies** | 🗄️ DBMS | ✅² | · | ✅² | ✅ | ✅ | ✅ | ✅³ | ✅ | **7/8** | 11 | **17** |
| 4 | **Cache Memory (mapping, tag bits, hit/miss)** | ⚙️ COA | ✅² | ✅ | ✅ | · | ✅ | ✅ | ✅ | ✅² | **7/8** | 9 | **17** |
| 5 | **SQL, Relational Algebra & Calculus** | 🗄️ DBMS | ✅² | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | · | **7/8** | 9 | **16** |
| 6 | **IP Addressing, CIDR & Forwarding** | 🌐 CN | ✅² | ✅ | ✅ | ✅² | ✅ | · | ✅ | ✅ | **7/8** | 9 | **15** |
| 7 | **Delay, Utilization & Sliding Window** | 🌐 CN | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | ✅² | **7/8** | 8 | **14** |
| 8 | **Pipelining (speedup, hazards)** | ⚙️ COA | ✅ | ✅ | ✅ | ✅² | · | ✅ | ✅² | ✅ | **7/8** | 9 | **14** |
| 9 | **TCP (handshake, congestion, seq no.)** | 🌐 CN | ✅ | ✅ | ✅ | ✅ | ✅ | · | ✅² | ✅ | **7/8** | 8 | **13** |
| 10 | **CPU Scheduling** | 🖥️ OS | ✅ | ✅ | · | ✅ | ✅ | ✅ | ✅ | ✅ | **7/8** | 7 | **11** |

### ⭐ Tier A — *high-value* (5–6 papers)

| # | Topic | Subject | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Papers | Qs | Marks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Graph Theory (trees / matchings / cover / matrices)** | 🔣 DM | ✅⁵ | ✅ | ✅ | ✅² | · | · | ✅² | ✅ | **6/8** | 12 | **21** |
| 2 | **Closure Properties & Language Classes** | 🤖 TOC | ✅² | ✅ | ✅ | · | ✅² | ✅³ | ✅ | · | **6/8** | 10 | **16** |
| 3 | **MST & Shortest Paths** | 🧮 ALGO | ✅ | · | · | ✅ | ✅² | ✅ | ✅² | ✅ | **6/8** | 8 | **15** |
| 4 | **BST & Tree Traversals** | 🌳 DSA | ✅ | · | · | ✅ | ✅ | ✅² | ✅³ | ✅² | **6/8** | 10 | **14** |
| 5 | **Disk, File System & Memory Allocation** | 🖥️ OS | ✅ | · | ✅ | ✅ | ✅ | · | ✅ | ✅² | **6/8** | 7 | **14** |
| 6 | **Recurrences & Asymptotic Analysis** | 🧮 ALGO | ✅² | ✅² | ✅² | · | ✅ | · | ✅ | ✅² | **6/8** | 10 | **13** |
| 7 | **CFG / PDA (language generated, derivations)** | 🤖 TOC | · | ✅² | ✅ | ✅ | ✅ | · | ✅ | ✅ | **6/8** | 7 | **13** |
| 8 | **Instruction Format, Addressing & ISA** | ⚙️ COA | · | ✅ | · | ✅² | ✅ | ✅ | ✅² | ✅ | **6/8** | 8 | **13** |
| 9 | **K-map & Boolean Minimization** | 🔌 DLD | · | · | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **6/8** | 6 | **12** |
| 10 | **Transactions & Concurrency (schedules, 2PL, ACID)** | 🗄️ DBMS | ✅ | · | ✅ | ✅² | ✅ | ✅² | · | ✅ | **6/8** | 8 | **11** |
| 11 | **Syntax-Directed Translation (SDD / .val)** | 🛠️ CD | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | · | **6/8** | 6 | **10** |
| 12 | **Linear Systems, Null Space & LU** | 📐 LA | ✅ | · | ✅ | · | ✅ | ✅ | ✅ | ✅ | **6/8** | 6 | **9** |
| 13 | **Indexing, B+ Tree & File Organization** | 🗄️ DBMS | · | ✅ | ✅ | ✅ | ✅ | ✅ | · | ✅ | **6/8** | 6 | **9** |
| 14 | **Boolean Algebra & Logic Circuits** | 🔌 DLD | · | · | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | **6/8** | 7 | **8** |
| 15 | **I/O: DMA, Interrupts, Polling** | ⚙️ COA | ✅ | ✅ | ✅ | ✅ | ✅ | · | · | ✅ | **6/8** | 6 | **6** |
| 16 | **C Pointers, Arrays & Strings** | 💻 PDS | ✅² | · | · | ✅² | ✅ | ✅² | · | ✅ | **5/8** | 8 | **12** |
| 17 | **C Loops / Bitwise / Expression Output** | 💻 PDS | ✅ | · | ✅³ | ✅ | ✅ | ✅² | · | · | **5/8** | 8 | **12** |
| 18 | **Heap & Priority Queue** | 🌳 DSA | · | ✅² | ✅² | · | ✅ | ✅ | ✅ | · | **5/8** | 7 | **11** |
| 19 | **Stack & Queue** | 🌳 DSA | ✅ | ✅ | · | ✅ | · | ✅ | · | ✅ | **5/8** | 5 | **10** |
| 20 | **Conditional Prob, Bayes & Independence** | 🎲 PROB | · | ✅ | ✅³ | · | ✅ | · | ✅ | ✅ | **5/8** | 7 | **10** |
| 21 | **DFA/NFA Analysis & RE Conversion** | 🤖 TOC | ✅ | ✅ | · | ✅² | ✅ | · | · | ✅ | **5/8** | 6 | **9** |
| 22 | **LR / SLR / LALR Parsing** | 🛠️ CD | ✅² | · | ✅ | ✅ | · | ✅ | · | ✅ | **5/8** | 6 | **9** |
| 23 | **Synchronization (Semaphores)** | 🖥️ OS | ✅ | ✅ | ✅ | ✅ | · | · | · | ✅ | **5/8** | 5 | **9** |
| 24 | **Group Theory & Algebraic Structures** | 🔣 DM | ✅ | ✅ | ✅ | ✅ | ✅ | · | · | · | **5/8** | 5 | **9** |
| 25 | **C Recursion** | 💻 PDS | · | ✅ | ✅ | · | ✅ | · | ✅ | ✅ | **5/8** | 5 | **9** |
| 26 | **Distributions, PDF & Expectation** | 🎲 PROB | · | · | · | ✅ | ✅ | ✅ | ✅ | ✅ | **5/8** | 5 | **9** |
| 27 | **Determinant, Rank & Matrix Properties** | 📐 LA | ✅ | ✅ | · | ✅ | · | ✅² | · | ✅ | **5/8** | 6 | **8** |
| 28 | **Lexical Analysis, Runtime & Compiler Phases** | 🛠️ CD | · | ✅³ | · | ✅ | ✅ | · | ✅ | ✅ | **5/8** | 7 | **8** |
| 29 | **DFA Design, Minimization & State Counting** | 🤖 TOC | · | ✅ | ✅ | · | ✅ | ✅ | ✅ | · | **5/8** | 5 | **8** |
| 30 | **Eigenvalues & Eigenvectors** | 📐 LA | ✅ | ✅ | ✅ | · | ✅ | · | ✅ | · | **5/8** | 5 | **7** |
| 31 | **Link Layer & Misc (CRC, Ethernet, ARP, NAT, OSI)** | 🌐 CN | · | · | ✅ | ✅ | ✅ | ✅² | · | ✅ | **5/8** | 6 | **7** |
| 32 | **Hashing** | 🌳 DSA | ✅ | ✅ | · | · | ✅ | · | ✅ | ✅ | **5/8** | 5 | **6** |
| 33 | **Limits, Continuity & Differentiability** | ∫ CALC | ✅ | · | ✅ | · | ✅ | · | ✅ | ✅ | **5/8** | 5 | **6** |
| 34 | **Application Layer (DNS / HTTP / DHCP)** | 🌐 CN | ✅ | ✅ | ✅ | · | · | · | ✅ | ✅ | **5/8** | 5 | **6** |
| 35 | **Propositional & Predicate Logic** | 🔣 DM | · | ✅ | · | ✅ | ✅ | ✅ | · | ✅ | **5/8** | 5 | **6** |

### 🌱 Tier B & 🧊 Tier C — *baad mein / selectively*

| Topic | Subject | Papers | Marks | Aaya kahan |
|---|---|---|---|---|
| 🌱 B Sorting, Searching, DP & Misc Complexity | ALGO | 4/8 | 12 | 24-2: Q35, Q42 · 25-1: Q33 · 25-2: Q20, Q41 · 26-2: Q32, Q38, Q39 |
| 🌱 B AMAT, CPI & Performance | COA | 4/8 | 11 | 22: Q33 · 24-1: Q55, Q56 · 25-1: Q53 · 25-2: Q55, Q61 |
| 🌱 B BFS / DFS | ALGO | 4/8 | 11 | 24-1: Q45, Q60 · 25-1: Q43 · 25-2: Q29, Q59 · 26-1: Q50 |
| 🌱 B Sequential Circuits (FF, Counter, FSM) | DLD | 4/8 | 10 | 23: Q21, Q43 · 25-1: Q59, Q60 · 25-2: Q34 · 26-1: Q37 |
| 🌱 B Combinational Design (Mux / Decoder) | DLD | 4/8 | 8 | 22: Q40 · 23: Q44 · 24-1: Q64 · 26-2: Q59 |
| 🌱 B Page Replacement | OS | 4/8 | 8 | 22: Q64 · 23: Q57 · 25-1: Q54 · 25-2: Q47 |
| 🌱 B Graph Coloring | DM | 4/8 | 8 | 23: Q55 · 24-1: Q51 · 24-2: Q60 · 26-1: Q55 |
| 🌱 B Data-flow Analysis & Optimization | CD | 4/8 | 7 | 23: Q37 · 25-1: Q13 · 26-1: Q42 · 26-2: Q45 |
| 🌱 B FIRST/FOLLOW & LL(1) Parsing | CD | 4/8 | 7 | 24-1: Q38 · 24-2: Q40 · 25-1: Q46 · 26-1: Q28 |
| 🌱 B Intermediate Code & Basic Blocks | CD | 4/8 | 7 | 24-1: Q39 · 24-2: Q43 · 25-1: Q52 · 25-2: Q21 |
| 🌱 B Linked List | DSA | 4/8 | 6 | 22: Q15 · 23: Q13 · 25-1: Q62 · 26-1: Q39 |
| 🌱 B Process, Threads & Context Switch | OS | 4/8 | 6 | 23: Q22, Q23 · 24-1: Q24, Q25 · 24-2: Q25 · 25-1: Q29 |
| 🌱 B IP Fragmentation | CN | 4/8 | 6 | 24-1: Q65 · 24-2: Q28 · 25-1: Q57 · 25-2: Q23 |
| 🌱 B Counting & Combinatorics | DM | 4/8 | 5 | 22: Q32 · 23: Q48 · 25-1: Q30 · 26-1: Q12 |
| 🌱 B ER Model & Relational Model basics | DBMS | 4/8 | 4 | 23: Q16 · 24-1: Q20 · 24-2: Q20 · 26-2: Q15 |
| 🌱 B Integration | CALC | 4/8 | 4 | 23: Q31 · 24-2: Q16 · 25-2: Q12 · 26-2: Q27 |
| 🌱 B Decidability & Turing Machines | TOC | 3/8 | 5 | 22: Q23, Q46 · 25-2: Q25 · 26-2: Q13 |
| 🌱 B Deadlock | OS | 3/8 | 5 | 22: Q26 · 25-2: Q48 · 26-1: Q29, Q35 |
| 🌱 B Counting-type Probability (dice / coins / balls) | PROB | 3/8 | 5 | 24-2: Q18 · 25-1: Q56 · 25-2: Q64 |
| 🌱 B Recurrence & Generating Functions | DM | 3/8 | 4 | 22: Q36 · 23: Q15 · 24-2: Q15 |
| 🌱 B Routing Protocols (DV / LS / OSPF) | CN | 3/8 | 4 | 22: Q57 · 23: Q25 · 25-2: Q17 |
| 🌱 B C Scoping, Storage & Memory | PDS | 3/8 | 4 | 23: Q35 · 26-1: Q34 · 26-2: Q17, Q19 |
| 🌱 B Datapath / Booth / Memory Interfacing | COA | 3/8 | 4 | 23: Q42 · 25-1: Q27 · 25-2: Q32 |
| 🌱 B Functions (one-one / onto) | DM | 3/8 | 4 | 23: Q49 · 24-1: Q32 · 25-1: Q17 |
| 🌱 B Relations, Posets & Lattices | DM | 3/8 | 4 | 24-2: Q34 · 25-2: Q42 · 26-2: Q26 |
| 🌱 B Grammar Ambiguity | CD | 3/8 | 4 | 25-2: Q51 · 26-1: Q25 · 26-2: Q29 |
| 🧊 C fork() Process Creation | OS | 2/8 | 4 | 24-1: Q57 · 26-1: Q63 |
| 🧊 C Regex / String Counting | TOC | 2/8 | 4 | 24-1: Q61 · 24-2: Q62 |
| 🧊 C Maxima / Minima | CALC | 2/8 | 3 | 23: Q28 · 26-1: Q46 |

---

## 🔬 Subject deep-dives

Har subject mein: 📋 topic grid → 🧩 **question logic** (kis tarah ke sawal aate hain, paper+Q# ke saath) → 🎯 priority.

### 🤖 Theory of Computation  —  avg **6.9** marks/paper · 8-paper total **55**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Closure Properties & Language Classes | ⭐ A | ✅² | ✅ | ✅ | · | ✅² | ✅³ | ✅ | · | 16 |
| CFG / PDA (language generated, derivations) | ⭐ A | · | ✅² | ✅ | ✅ | ✅ | · | ✅ | ✅ | 13 |
| DFA/NFA Analysis & RE Conversion | ⭐ A | ✅ | ✅ | · | ✅² | ✅ | · | · | ✅ | 9 |
| DFA Design, Minimization & State Counting | ⭐ A | · | ✅ | ✅ | · | ✅ | ✅ | ✅ | · | 8 |
| Decidability & Turing Machines | 🌱 B | ✅² | · | · | · | · | ✅ | · | ✅ | 5 |
| Regex / String Counting | 🧊 C | · | · | ✅ | ✅ | · | · | · | · | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Closure Properties & Language Classes** (⭐ A)
  - 🧱 **Closure / language class statements**: 23 Q24 · 24-1 Q23 · 25-2 Q30 · 26-1 Q51
  - ❓ **'Is L regular / CFL?' for given L1, L2**: 22 Q47, Q48 · 25-1 Q44, Q45 · 25-2 Q52
  - 🧠 **DPDA vs PDA**: 25-2 Q24
- **CFG / PDA (language generated, derivations)** (⭐ A)
  - 📝 **Language of a given grammar / counting a's,b's,c's**: 23 Q39 · 24-2 Q52 · 25-1 Q19 · 26-1 Q52
  - 🤖 **PDA language**: 23 Q40 · **CFL-ness under constraints**: 26-2 Q48
  - 🧾 **CNF derivation steps**: 24-1 Q59
- **DFA/NFA Analysis & RE Conversion** (⭐ A)
  - 🔤 **DFA/NFA → regular expression**: 22 Q12 · 23 Q14 · 24-2 Q22 · 24-2 Q41
  - 🔍 **Identify language / compare automata**: 25-1 Q50 · 26-2 Q47
- **DFA Design, Minimization & State Counting** (⭐ A)
  - 📉 **Min DFA states / distinguishable states**: 23 Q63 · 24-1 Q50 · 25-2 Q60
  - 🔁 **NFA → DFA bounds**: 25-1 Q28 · 26-1 Q26
- **Decidability & Turing Machines** (🌱 B)
  - 🧠 **Undecidable / decidable questions, TM decides**: 22 Q23, Q46 · 25-2 Q25 · 26-2 Q13
- **Regex / String Counting** (🧊 C) → 📍 24-1: Q61 · 24-2: Q62

**🎯 Priority:** Closure/language-class + DFA↔RE + CFG language + min-DFA. Decidability sirf concept-level.

---

### 🛠️ Compiler Design  —  avg **6.5** marks/paper · 8-paper total **52**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Syntax-Directed Translation (SDD / .val) | ⭐ A | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | · | 10 |
| LR / SLR / LALR Parsing | ⭐ A | ✅² | · | ✅ | ✅ | · | ✅ | · | ✅ | 9 |
| Lexical Analysis, Runtime & Compiler Phases | ⭐ A | · | ✅³ | · | ✅ | ✅ | · | ✅ | ✅ | 8 |
| Data-flow Analysis & Optimization | 🌱 B | · | ✅ | · | · | ✅ | · | ✅ | ✅ | 7 |
| FIRST/FOLLOW & LL(1) Parsing | 🌱 B | · | · | ✅ | ✅ | ✅ | · | ✅ | · | 7 |
| Intermediate Code & Basic Blocks | 🌱 B | · | · | ✅ | ✅ | ✅ | ✅ | · | · | 7 |
| Grammar Ambiguity | 🌱 B | · | · | · | · | · | ✅ | ✅ | ✅ | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Syntax-Directed Translation (SDD / .val)** (⭐ A)
  - 🧾 **Evaluate S.val for given string**: 22 Q65 · 23 Q60 · 24-1 Q37
  - 🏷️ **S-attributed / L-attributed classification**: 24-2 Q29 · 25-2 Q22 · 26-1 Q53
  - 📌 Sirf **2025-1 aur 2026-2** mein SDT nahi aaya — baaki 6 mein tha.
- **LR / SLR / LALR Parsing** (⭐ A)
  - 📊 **Items / GOTO / conflicts**: 22 Q29 · 24-2 Q65 (SLR) · 26-2 Q41 (LR(0) conflicts)
  - 🧠 **LALR/SLR/bottom-up concepts**: 22 Q13 · 24-1 Q26 · 25-2 Q40
- **Lexical Analysis, Runtime & Compiler Phases** (⭐ A)
  - 🛠️ **Compiler phases / symbol table / front-end vs back-end**: 23 Q11 · 24-2 Q21 · 25-1 Q12
  - 🔤 **Tokens / lexical error / runtime tree**: 23 Q19, Q36 · 26-1 Q27 · 26-2 Q35
- **Data-flow Analysis & Optimization** (🌱 B)
  - 🔎 **Live variables / redundant expressions**: 23 Q37 · 25-1 Q13 · 26-1 Q42 · 26-2 Q45
- **FIRST/FOLLOW & LL(1) Parsing** (🌱 B)
  - 📋 **FIRST/FOLLOW & LL(1) table**: 24-1 Q38 · 24-2 Q40 · 25-1 Q46 · 26-1 Q28
- **Intermediate Code & Basic Blocks** (🌱 B)
  - 🧱 **Basic blocks count / triples / backpatching**: 24-1 Q39 · 25-1 Q52 · 24-2 Q43 · 25-2 Q21
- **Grammar Ambiguity** (🌱 B) → 📍 25-2: Q51 · 26-1: Q25 · 26-2: Q29

**🎯 Priority:** SDT (6/8!) + LR/SLR items + FIRST/FOLLOW + basic blocks/live variables. Lexical phase concepts.

---

### 🖥️ Operating Systems  —  avg **9.1** marks/paper · 8-paper total **73**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Paging, Page Tables & TLB | 🔥 S | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | ✅ | ✅ | 16 |
| CPU Scheduling | 🔥 S | ✅ | ✅ | · | ✅ | ✅ | ✅ | ✅ | ✅ | 11 |
| Disk, File System & Memory Allocation | ⭐ A | ✅ | · | ✅ | ✅ | ✅ | · | ✅ | ✅² | 14 |
| Synchronization (Semaphores) | ⭐ A | ✅ | ✅ | ✅ | ✅ | · | · | · | ✅ | 9 |
| Page Replacement | 🌱 B | ✅ | ✅ | · | · | ✅ | ✅ | · | · | 8 |
| Process, Threads & Context Switch | 🌱 B | · | ✅² | ✅² | ✅ | ✅ | · | · | · | 6 |
| Deadlock | 🌱 B | ✅ | · | · | · | · | ✅ | ✅² | · | 5 |
| fork() Process Creation | 🧊 C | · | · | ✅ | · | · | · | ✅ | · | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Paging, Page Tables & TLB** (🔥 S)
  - 📚 **Multi-level page table** (levels / outer index bits / total pages): 23 Q58 · 24-2 Q64 · 25-2 Q58
  - 📏 **Page table entries / address translation numericals**: 25-1 Q14 · 24-1 Q62
  - ⚡ **TLB** (reach, TLB size in bytes, impossible TLB-page table-cache event orders): 22 Q38 · 26-1 Q54 · 26-2 Q54
  - 🛡️ **MMU responsibilities** (trap on invalid / read-only): 24-2 Q24
- **CPU Scheduling** (🔥 S)
  - 🧮 **Gantt numericals**: SRTF 24-2 Q37 · 25-2 Q26 · FCFS 26-1 Q64 · 2-processor priority 25-1 Q38 · RR 22 Q42
  - 🧠 **Concept**: starvation 23 Q27 · which algo can't be preemptive 26-2 Q23
- **Disk, File System & Memory Allocation** (⭐ A)
  - 💽 **Disk time numericals** (seek + rotation + transfer): 24-2 Q53 · 26-1 Q59 · 24-1 Q54 (cylinders)
  - 📁 **File allocation**: 22 Q63 (contiguous vs linked) · 25-1 Q51 (internal fragmentation) · 26-2 Q53 (free list)
  - 🧩 **Memory allocation**: 26-2 Q55 (best fit holes)
- **Synchronization (Semaphores)** (⭐ A)
  - 🚦 **Output pattern with semaphores**: 22 Q19 · 26-2 Q51
  - 🔢 **Min/possible final values & outcomes**: 23 Q38 · 24-1 Q40 · 24-2 Q46
- **Page Replacement** (🌱 B)
  - 📄 **Fault-count / which policy**: 22 Q64 (LRU) · 23 Q57 (LRU on 2D array) · 25-1 Q54 (modified optimal) · 25-2 Q47
- **Process, Threads & Context Switch** (🌱 B)
  - 🔄 **Context switch contents & user→kernel**: 23 Q22, Q23 · 24-1 Q24, Q25 · 24-2 Q25 · 25-1 Q29 (ready-queue count)
- **fork() Process Creation** (🧊 C)
  - 🍴 **fork() count**: 24-1 Q57 (fork+wait in loop) · 26-1 Q63 (fork in for with continue)
- **Deadlock** (🌱 B) → 📍 22: Q26 · 25-2: Q48 · 26-1: Q29, Q35

**🎯 Priority:** Paging (8/8) → Scheduling → Disk/File → Sync → Page replacement → Process/threads. Deadlock/fork chhote par pakke marks.

---

### ⚙️ Computer Org & Arch  —  avg **10.4** marks/paper · 8-paper total **83**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Number Representation (2s-compl, IEEE-754, radix) | 🔥 S | ✅² | ✅² | ✅ | ✅² | ✅ | ✅ | ✅² | ✅² | 18 |
| Cache Memory (mapping, tag bits, hit/miss) | 🔥 S | ✅² | ✅ | ✅ | · | ✅ | ✅ | ✅ | ✅² | 17 |
| Pipelining (speedup, hazards) | 🔥 S | ✅ | ✅ | ✅ | ✅² | · | ✅ | ✅² | ✅ | 14 |
| Instruction Format, Addressing & ISA | ⭐ A | · | ✅ | · | ✅² | ✅ | ✅ | ✅² | ✅ | 13 |
| I/O: DMA, Interrupts, Polling | ⭐ A | ✅ | ✅ | ✅ | ✅ | ✅ | · | · | ✅ | 6 |
| AMAT, CPI & Performance | 🌱 B | ✅ | · | ✅² | · | ✅ | ✅² | · | · | 11 |
| Datapath / Booth / Memory Interfacing | 🌱 B | · | ✅ | · | · | ✅ | ✅ | · | · | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Number Representation (2s-compl, IEEE-754, radix)** (🔥 S)
  - 🔢 **Overflow check** (2's complement / sign-magnitude, 4-8 bit add/sub): 22 Q18 · 24-1 Q13 · 26-1 Q22 · 26-2 Q28
  - 🧮 **IEEE-754 hex decode / add / multiply / compare**: 22 Q41 · 23 Q45 · 24-2 Q14 · 25-2 Q49 · 26-1 Q36 · 26-2 Q34
  - 🔁 **Radix conversion / signed representation**: 23 Q32 (base-4→base-5) · 24-2 Q49 (base-5 equality) · 25-1 Q25 (−6 in 8/16-bit)
  - 💡 Ye topic **har paper mein** aaya hai. Sign-exponent-mantissa decode + bias ka muscle memory banao.
- **Cache Memory (mapping, tag bits, hit/miss)** (🔥 S)
  - 🏷️ **Tag-bits / cache size from address split**: 23 Q64 (8-way 64KB) · 25-1 Q36 (direct mapped total tag bits) · 25-2 Q39 · 26-1 Q38 (direct vs K-way: N vs M) · 26-2 Q56
  - 🎯 **Hit/miss trace** of P,Q,R,S repeated 10×: 22 Q54 · 26-2 Q52 (index bits nikalo, conflict check)
  - ✍️ **Write-back vs write-through statements**: 22 Q24 · 24-1 Q53
- **Pipelining (speedup, hazards)** (🔥 S)
  - 🚀 **Speedup pipelined vs non-pipelined with stalls**: 24-2 Q58 · 26-2 Q57 · 22 Q61 (branch predictor)
  - ⏳ **Total time for n instructions**: 23 Q33 · 25-2 Q56
  - ⚠️ **Hazards** (RAW/WAR/WAW, forwarding, structural stalls): 24-1 Q30 · 24-2 Q31 · 26-1 Q16 · 26-1 Q60
- **Instruction Format, Addressing & ISA** (⭐ A)
  - 🧬 **Instruction-field bit budget** (opcode / mode / registers / immediate): 24-2 Q57 · 24-2 Q61 · 25-1 Q37 · 26-2 Q44 (variable opcodes)
  - 🧷 **Addressing modes / load-store code**: 26-1 Q14 · 26-1 Q15 · 23 Q41 (assembly operands) · 25-2 Q28
- **I/O: DMA, Interrupts, Polling** (⭐ A)
  - 📥 **DMA** (modes, cycle stealing rate, throughput): 22 Q17 · 24-1 Q15 · 24-2 Q11
  - 🔔 **Interrupts / polling**: 23 Q34 · 25-1 Q11 · 26-2 Q18
- **AMAT, CPI & Performance** (🌱 B)
  - ⏱️ **AMAT (1-level / 2-level) & CPI**: 22 Q33 · 25-1 Q53 · 25-2 Q55, Q61 · 24-1 Q55, Q56
- **Datapath / Booth / Memory Interfacing** (🌱 B) → 📍 23: Q42 · 25-1: Q27 · 25-2: Q32

**🎯 Priority:** Number repr + Cache + Pipelining + ISA + I/O. AMAT/CPI numericals 4/8 papers mein aaye.

---

### 🌐 Computer Networks  —  avg **8.1** marks/paper · 8-paper total **65**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| IP Addressing, CIDR & Forwarding | 🔥 S | ✅² | ✅ | ✅ | ✅² | ✅ | · | ✅ | ✅ | 15 |
| Delay, Utilization & Sliding Window | 🔥 S | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | ✅² | 14 |
| TCP (handshake, congestion, seq no.) | 🔥 S | ✅ | ✅ | ✅ | ✅ | ✅ | · | ✅² | ✅ | 13 |
| Link Layer & Misc (CRC, Ethernet, ARP, NAT, OSI) | ⭐ A | · | · | ✅ | ✅ | ✅ | ✅² | · | ✅ | 7 |
| Application Layer (DNS / HTTP / DHCP) | ⭐ A | ✅ | ✅ | ✅ | · | · | · | ✅ | ✅ | 6 |
| IP Fragmentation | 🌱 B | · | · | ✅ | ✅ | ✅ | ✅ | · | · | 6 |
| Routing Protocols (DV / LS / OSPF) | 🌱 B | ✅ | ✅ | · | · | · | ✅ | · | · | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **IP Addressing, CIDR & Forwarding** (🔥 S)
  - 🧭 **Longest-prefix-match forwarding**: 23 Q65 · 24-1 Q58 · 25-1 Q40
  - 🧱 **CIDR block / aggregation / subnet count / max hosts**: 22 Q22 · 22 Q55 · 24-2 Q38 · 26-1 Q56 · 26-2 Q33
  - 📨 **Dest IP vs dest MAC at source**: 24-2 Q23
- **Delay, Utilization & Sliding Window** (🔥 S)
  - ⏱️ **Transmission + propagation time**: 22 Q59 · 24-1 Q36 (store-and-forward chunks) · 26-2 Q21 (3 links, bottleneck)
  - 📉 **Stop-and-wait utilization**: 23 Q17 · 25-2 Q36
  - 🪟 **Sliding window size for 100% utilization / seq bits**: 26-1 Q45 · 26-2 Q65
  - 📡 **Ethernet min frame size (collision detection)**: 24-2 Q55
- **TCP (handshake, congestion, seq no.)** (🔥 S)
  - 🔢 **Seq-number bits (MSL, bandwidth)**: 22 Q60 · 23 Q50
  - 🤝 **3-way handshake flags / seq-ack**: 24-1 Q29 · 25-1 Q22 · 26-1 Q18
  - 📈 **Congestion control** (slow start, timeout, rounds to reach CA): 24-2 Q54 · 26-1 Q44 · 26-2 Q58
- **Link Layer & Misc (CRC, Ethernet, ARP, NAT, OSI)** (⭐ A)
  - 🔗 **Header fields / NAT / OSI / ARP / CRC**: 24-1 Q31 · 24-2 Q32 · 25-1 Q16 · 25-2 Q16, Q18 · 26-2 Q43
- **Application Layer (DNS / HTTP / DHCP)** (⭐ A)
  - 🌐 **DNS / HTTP flow & RTT counting**: 22 Q35 · 23 Q52 · 24-1 Q16 · 26-1 Q19 · 26-2 Q22
- **IP Fragmentation** (🌱 B)
  - ✂️ **IP fragmentation count / last fragment**: 24-1 Q65 · 24-2 Q28 (statements) · 25-1 Q57 · 25-2 Q23
- **Routing Protocols (DV / LS / OSPF)** (🌱 B) → 📍 22: Q57 · 23: Q25 · 25-2: Q17

**🎯 Priority:** IP addressing + Delay/Utilization + TCP — in teen se hi ~35-40 marks 8 papers mein. Fragmentation chhota par predictable.

---

### 🗄️ Databases  —  avg **7.1** marks/paper · 8-paper total **57**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Normalization & Functional Dependencies | 🔥 S | ✅² | · | ✅² | ✅ | ✅ | ✅ | ✅³ | ✅ | 17 |
| SQL, Relational Algebra & Calculus | 🔥 S | ✅² | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | · | 16 |
| Transactions & Concurrency (schedules, 2PL, ACID) | ⭐ A | ✅ | · | ✅ | ✅² | ✅ | ✅² | · | ✅ | 11 |
| Indexing, B+ Tree & File Organization | ⭐ A | · | ✅ | ✅ | ✅ | ✅ | ✅ | · | ✅ | 9 |
| ER Model & Relational Model basics | 🌱 B | · | ✅ | ✅ | ✅ | · | · | · | ✅ | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Normalization & Functional Dependencies** (🔥 S)
  - 🔑 **BCNF / 3NF check on given FDs**: 22 Q14 · 25-1 Q47 · 25-2 Q46
  - 🧮 **Count superkeys / candidate keys**: 22 Q31 · 26-1 Q65 (keys {AB, AC} → superkeys count)
  - 📐 **FD inference / Armstrong axioms / 'always true' implications**: 24-1 Q44 · 26-1 Q30 · 26-2 Q42
  - ✂️ **Decomposition** (lossless, dependency-preserving 3NF/BCNF): 25-1 Q47 · 26-1 Q31
  - ➕ Extras: 1NF statements 24-1 Q22 · count of 'useful' FDs 24-2 Q56
- **SQL, Relational Algebra & Calculus** (🔥 S)
  - 🧾 **Query ka output / row count**: 22 Q56 (NOT EXISTS + EXCEPT) · 23 Q61 · 24-1 Q35 · 25-1 Q55 (nested IN + MIN)
  - 🔄 **RA ↔ TRC ↔ SQL equivalence**: 22 Q25 (division = 'owns all brands') · 25-1 Q39 · 26-1 Q43 · 25-2 Q54
  - 🧠 **RA expressiveness**: 24-2 Q45 (kitne cross products chahiye)
- **Transactions & Concurrency (schedules, 2PL, ACID)** (⭐ A)
  - 🔀 **Conflict equivalent / serializable schedule**: 22 Q39 · 24-1 Q46 · 25-2 Q53
  - 🔒 **2PL / ACID / lost update**: 24-2 Q19, Q27 · 25-2 Q27 · 26-2 Q20
  - ↩️ **Cascading rollback after abort**: 25-1 Q15
- **Indexing, B+ Tree & File Organization** (⭐ A)
  - 🌿 **B+ tree insert / occupancy / split**: 24-1 Q21 · 25-1 Q21 · 25-2 Q57
  - 🗂️ **Index types & file org**: 23 Q62 · 24-2 Q26 · 26-2 Q46
- **ER Model & Relational Model basics** (🌱 B) → 📍 23: Q16 · 24-1: Q20 · 24-2: Q20 · 26-2: Q15

**🎯 Priority:** Normalization + SQL/RA + Transactions + Indexing/B+ tree. ER model bas basics.

---

### 🌳 Data Structures  —  avg **5.9** marks/paper · 8-paper total **47**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| BST & Tree Traversals | ⭐ A | ✅ | · | · | ✅ | ✅ | ✅² | ✅³ | ✅² | 14 |
| Heap & Priority Queue | ⭐ A | · | ✅² | ✅² | · | ✅ | ✅ | ✅ | · | 11 |
| Stack & Queue | ⭐ A | ✅ | ✅ | · | ✅ | · | ✅ | · | ✅ | 10 |
| Hashing | ⭐ A | ✅ | ✅ | · | · | ✅ | · | ✅ | ✅ | 6 |
| Linked List | 🌱 B | ✅ | ✅ | · | · | ✅ | · | ✅ | · | 6 |

**🧩 Question logic (kaise sawal aate hain):**

- **BST & Tree Traversals** (⭐ A)
  - 🌳 **Insertion / structure facts**: 25-1 Q26 · 25-2 Q35 · 26-1 Q40 (insert order of complete BST) · 26-2 Q49
  - 🔀 **Traversal conversions**: 26-1 Q62 (pre→post) · 26-2 Q12 · 24-2 Q39
  - 📏 **Height / array position**: 22 Q28 · 25-2 Q13 · 26-1 Q33
- **Heap & Priority Queue** (⭐ A)
  - 🏔️ **Is this sequence a heap? / heapify result**: 23 Q12 · 24-1 Q41
  - 📏 **Index / height / leaf facts**: 24-1 Q43 · 25-1 Q35 · 26-1 Q23
  - ⏱️ **Operation complexity**: 23 Q46 · 25-2 Q38 (meld)
- **Stack & Queue** (⭐ A)
  - 🥞 **Stack/queue puzzles (valid output sequences)**: 22 Q62 · 23 Q59 · 24-2 Q48 · 26-2 Q50
  - 🧠 **Augmented stack (O(1) MIN)**: 25-2 Q45
- **Hashing** (⭐ A)
  - #️⃣ **Probe/chain numericals**: 25-1 Q65 (double hashing) · 26-1 Q24 (linear probing) · 26-2 Q30 (chaining)
  - 🛡️ **Concepts**: 22 Q16 · 23 Q20 (universal hashing)
- **Linked List** (🌱 B) → 📍 22: Q15 · 23: Q13 · 25-1: Q62 · 26-1: Q39

**🎯 Priority:** BST/Tree traversals + Heap + Stack/Queue puzzles + Hashing + Linked list.

---

### 💻 Programming (C)  —  avg **4.6** marks/paper · 8-paper total **37**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| C Pointers, Arrays & Strings | ⭐ A | ✅² | · | · | ✅² | ✅ | ✅² | · | ✅ | 12 |
| C Loops / Bitwise / Expression Output | ⭐ A | ✅ | · | ✅³ | ✅ | ✅ | ✅² | · | · | 12 |
| C Recursion | ⭐ A | · | ✅ | ✅ | · | ✅ | · | ✅ | ✅ | 9 |
| C Scoping, Storage & Memory | 🌱 B | · | ✅ | · | · | · | · | ✅ | ✅² | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **C Pointers, Arrays & Strings** (⭐ A)
  - 🧷 **Pointer arithmetic & printing**: 22 Q21 · 24-2 Q36 · 25-2 Q62 · 26-2 Q60
  - 🧵 **String/array via pointer**: 24-2 Q33 · 25-2 Q19 · 25-1 Q34 · 22 Q43 (3D array)
- **C Loops / Bitwise / Expression Output** (⭐ A)
  - 🔁 **Loop output / digit manipulation**: 24-1 Q18 · 25-1 Q63 · 25-2 Q33 (GCD by subtraction)
  - 🧮 **Bitwise / operator precedence / eval order**: 22 Q44 · 24-1 Q33 · 24-2 Q13 · 25-2 Q63
- **C Recursion** (⭐ A)
  - 🌀 **Trace the recursion**: 24-1 Q19 · 25-1 Q61 · 26-1 Q61 (smallest n) · 26-2 Q61 (max value) · 23 Q47
- **C Scoping, Storage & Memory** (🌱 B) → 📍 23: Q35 · 26-1: Q34 · 26-2: Q17, Q19

**🎯 Priority:** C output questions: pointers, loops/bitwise, recursion. Practice dry-run speed.

---

### 🧮 Algorithms  —  avg **6.4** marks/paper · 8-paper total **51**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| MST & Shortest Paths | ⭐ A | ✅ | · | · | ✅ | ✅² | ✅ | ✅² | ✅ | 15 |
| Recurrences & Asymptotic Analysis | ⭐ A | ✅² | ✅² | ✅² | · | ✅ | · | ✅ | ✅² | 13 |
| Sorting, Searching, DP & Misc Complexity | 🌱 B | · | · | · | ✅² | ✅ | ✅² | · | ✅³ | 12 |
| BFS / DFS | 🌱 B | · | · | ✅² | · | ✅ | ✅² | ✅ | · | 11 |

**🧩 Question logic (kaise sawal aate hain):**

- **MST & Shortest Paths** (⭐ A)
  - 🌲 **MST properties (unique weights, cycle/cut)**: 22 Q49 · 26-1 Q49 · 25-1 Q64 (edge in every MST)
  - 🔢 **Number of distinct MSTs**: 24-2 Q59
  - 🛣️ **MST vs shortest path under +α / d₁ vs d₂**: 25-1 Q18 · 25-2 Q37
  - 🧭 **Shortest paths**: 26-1 Q41 · 26-2 Q37 (DAG complexity)
- **Recurrences & Asymptotic Analysis** (⭐ A)
  - 🔁 **Solve the recurrence**: 24-1 Q42 (√n·T(√n)+n) · 25-1 Q20 · 26-1 Q17 (coupled) · 22 Q51
  - 📊 **Growth order / Θ,O,o,Ω claims**: 22 Q11 · 23 Q29 · 26-2 Q24 · 26-2 Q25
  - 🔂 **Loop counting**: 23 Q54 · 24-1 Q17
- **BFS / DFS** (🌱 B)
  - 🧭 **DFS/BFS tree & edge classification**: 24-1 Q45 · 26-1 Q50 · 25-2 Q29
  - 🧮 **Numericals**: 25-1 Q43 · 25-2 Q59 · 24-1 Q60 (components from DFS forest)
- **Sorting, Searching, DP & Misc Complexity** (🌱 B) → 📍 24-2: Q35, Q42 · 25-1: Q33 · 25-2: Q20, Q41 · 26-2: Q32, Q38, Q39

**🎯 Priority:** Recurrences/asymptotics + MST/shortest paths + BFS/DFS + DP/sorting complexities.

---

### 🔌 Digital Logic  —  avg **4.8** marks/paper · 8-paper total **38**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| K-map & Boolean Minimization | ⭐ A | · | · | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 12 |
| Boolean Algebra & Logic Circuits | ⭐ A | · | · | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | 8 |
| Sequential Circuits (FF, Counter, FSM) | 🌱 B | · | ✅² | · | · | ✅² | ✅ | ✅ | · | 10 |
| Combinational Design (Mux / Decoder) | 🌱 B | ✅ | ✅ | ✅ | · | · | · | · | ✅ | 8 |

**🧩 Question logic (kaise sawal aate hain):**

- **K-map & Boolean Minimization** (⭐ A)
  - 🗺️ **Minimal SOP / K-map from minterms**: 25-1 Q42 · 25-2 Q43 · 26-1 Q48 · 26-2 Q40
  - 🧮 **Minterm ↔ maxterm equivalence, function composition**: 24-1 Q47 · 24-2 Q50
  - 📌 K-map **2022 aur 2023 mein nahi tha**, 2024 se har paper mein aaya hai (6 for 6).
- **Boolean Algebra & Logic Circuits** (⭐ A)
  - 🔌 **Identities / equivalent expressions / which equation is correct**: 24-2 Q30 · 25-1 Q24 · 25-2 Q50 · 26-1 Q21 · 26-2 Q16
  - ⚡ **Glitch / circuit output**: 24-1 Q28 · 25-2 Q31
- **Sequential Circuits (FF, Counter, FSM)** (🌱 B)
  - 🔁 **Flip-flop / counter / FSM**: 23 Q21, Q43 · 25-1 Q59, Q60 · 25-2 Q34 · 26-1 Q37
- **Combinational Design (Mux / Decoder)** (🌱 B)
  - 🔌 **Mux/decoder circuits**: 22 Q40 · 23 Q44 · 24-1 Q64 (mux tree, count combos for Y=1) · 26-2 Q59

**🎯 Priority:** K-map/minimal SOP + Boolean algebra + sequential circuits + mux/decoder.

---

### 🔣 Discrete Maths  —  avg **7.6** marks/paper · 8-paper total **61**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Graph Theory (trees / matchings / cover / matrices) | ⭐ A | ✅⁵ | ✅ | ✅ | ✅² | · | · | ✅² | ✅ | 21 |
| Group Theory & Algebraic Structures | ⭐ A | ✅ | ✅ | ✅ | ✅ | ✅ | · | · | · | 9 |
| Propositional & Predicate Logic | ⭐ A | · | ✅ | · | ✅ | ✅ | ✅ | · | ✅ | 6 |
| Graph Coloring | 🌱 B | · | ✅ | ✅ | ✅ | · | · | ✅ | · | 8 |
| Counting & Combinatorics | 🌱 B | ✅ | ✅ | · | · | ✅ | · | ✅ | · | 5 |
| Recurrence & Generating Functions | 🌱 B | ✅ | ✅ | · | ✅ | · | · | · | · | 4 |
| Functions (one-one / onto) | 🌱 B | · | ✅ | ✅ | · | ✅ | · | · | · | 4 |
| Relations, Posets & Lattices | 🌱 B | · | · | · | ✅ | · | ✅ | · | ✅ | 4 |

**🧩 Question logic (kaise sawal aate hain):**

- **Graph Theory (trees / matchings / cover / matrices)** (⭐ A)
  - 🌲 **Spanning-tree counting / properties**: 24-1 Q34 (K4) · 24-2 Q51 · 26-2 Q36 · 22 Q58 (directed spanning trees)
  - 🧮 **Adjacency matrix tricks**: 22 Q37 (3-cycles = tr(A³)/6) · 22 Q52 · 24-2 Q17 (A = A⁻¹)
  - 🧩 **Matching / vertex cover / max edges disconnected**: 26-1 Q47 · 26-1 Q57 · 22 Q30
  - 🔭 **Special graphs / BFS orderings**: 22 Q50 (Petersen) · 23 Q56
- **Group Theory & Algebraic Structures** (⭐ A)
  - 🧮 **Group / monoid / structure check**: 22 Q27 · 23 Q51 (Δ on powerset) · 24-1 Q52 · 25-1 Q49
  - 🔢 **Count elements**: 24-2 Q63 (self-inverse in Z2×Z3×Z4)
- **Propositional & Predicate Logic** (⭐ A)
  - 🧠 **Translate English → predicate logic / quantifier implications**: 23 Q26 · 24-2 Q12 · 25-1 Q48 · 26-2 Q11 · 25-2 Q15
- **Graph Coloring** (🌱 B)
  - 🎨 **Chromatic number / greedy / bipartite**: 23 Q55 · 24-1 Q51 · 24-2 Q60 · 26-1 Q55
- **Counting & Combinatorics** (🌱 B) → 📍 22: Q32 · 23: Q48 · 25-1: Q30 · 26-1: Q12
- **Recurrence & Generating Functions** (🌱 B) → 📍 22: Q36 · 23: Q15 · 24-2: Q15
- **Functions (one-one / onto)** (🌱 B) → 📍 23: Q49 · 24-1: Q32 · 25-1: Q17
- **Relations, Posets & Lattices** (🌱 B) → 📍 24-2: Q34 · 25-2: Q42 · 26-2: Q26

**🎯 Priority:** Graph theory (sabse bada) + Groups + Logic + Counting/Recurrence + Relations/Functions.

---

### 📐 Linear Algebra  —  avg **3.0** marks/paper · 8-paper total **24**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Linear Systems, Null Space & LU | ⭐ A | ✅ | · | ✅ | · | ✅ | ✅ | ✅ | ✅ | 9 |
| Determinant, Rank & Matrix Properties | ⭐ A | ✅ | ✅ | · | ✅ | · | ✅² | · | ✅ | 8 |
| Eigenvalues & Eigenvectors | ⭐ A | ✅ | ✅ | ✅ | · | ✅ | · | ✅ | · | 7 |

**🧩 Question logic (kaise sawal aate hain):**

- **Linear Systems, Null Space & LU** (⭐ A)
  - 🧮 **Solution-count with parameter k / multiple solutions**: 25-1 Q23 · 26-2 Q31
  - 🧊 **Null space / Ax=0 / LU**: 22 Q45 · 24-1 Q49 · 25-2 Q44 · 26-1 Q20
- **Determinant, Rank & Matrix Properties** (⭐ A)
  - 🧮 **Determinant tricks**: 22 Q20 (trace) · 23 Q18 · 24-2 Q47 (row swap) · 25-2 Q11, Q14 · 26-2 Q62 (det 2A)
- **Eigenvalues & Eigenvectors** (⭐ A)
  - 🔬 **λ facts**: sum = trace 23 Q30 · product = det 24-1 Q12 · λ(Aᵏ)=λᵏ 25-1 Q41 · multiplicity 26-1 Q13 · eigenvectors 22 Q53

**🎯 Priority:** Linear systems/null space + Determinant tricks + Eigenvalue facts.

---

### ∫ Calculus  —  avg **1.6** marks/paper · 8-paper total **13**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Limits, Continuity & Differentiability | ⭐ A | ✅ | · | ✅ | · | ✅ | · | ✅ | ✅ | 6 |
| Integration | 🌱 B | · | ✅ | · | ✅ | · | ✅ | · | ✅ | 4 |
| Maxima / Minima | 🧊 C | · | ✅ | · | · | · | · | ✅ | · | 3 |

**🧩 Question logic (kaise sawal aate hain):**

- **Limits, Continuity & Differentiability** (⭐ A)
  - 📈 **Continuity/differentiability for a parameter**: 25-1 Q31 · 26-1 Q32 · 24-1 Q11 · 26-2 Q64 · 22 Q34
- **Integration** (🌱 B) → 📍 23: Q31 · 24-2: Q16 · 25-2: Q12 · 26-2: Q27
- **Maxima / Minima** (🧊 C) → 📍 23: Q28 · 26-1: Q46

**🎯 Priority:** Limits/continuity + Integration + Maxima-minima. Chhota par 2 marks tak.

---

### 🎲 Probability  —  avg **3.0** marks/paper · 8-paper total **24**

| Topic | Tier | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Marks |
|---|---|---|---|---|---|---|---|---|---|---|
| Conditional Prob, Bayes & Independence | ⭐ A | · | ✅ | ✅³ | · | ✅ | · | ✅ | ✅ | 10 |
| Distributions, PDF & Expectation | ⭐ A | · | · | · | ✅ | ✅ | ✅ | ✅ | ✅ | 9 |
| Counting-type Probability (dice / coins / balls) | 🌱 B | · | · | · | ✅ | ✅ | ✅ | · | · | 5 |

**🧩 Question logic (kaise sawal aate hain):**

- **Conditional Prob, Bayes & Independence** (⭐ A)
  - 🪙 **Independence / conditional**: 23 Q53 · 24-1 Q14, Q27, Q63 · 26-2 Q63
  - 🔮 **Bayes**: 25-1 Q32 (fake coin) · 26-1 Q11 (urn)
- **Distributions, PDF & Expectation** (⭐ A)
  - 📈 **PDF / expectation**: 25-1 Q58 · 25-2 Q65 · 26-1 Q58 · 24-2 Q44 · 26-2 Q14 (identify normal)
- **Counting-type Probability (dice / coins / balls)** (🌱 B) → 📍 24-2: Q18 · 25-1: Q56 · 25-2: Q64

**🎯 Priority:** Conditional/Bayes + Distributions/Expectation + dice/coin counting.

---

## ✅ Tumhari observed topic list — verified

Tumne jo topics list kiye the (2023 + 2024 solve karte waqt) unka **8-paper reality check**:

| Topic | 22 | 23 | 24-1 | 24-2 | 25-1 | 25-2 | 26-1 | 26-2 | Papers | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| Production rules / CFG | · | ✅² | ✅ | ✅ | ✅ | ✅ | ✅² | ✅² | **7/8** | 🔥 Almost every year |
| Syntax-Directed Translation (.val) | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | · | **6/8** | ⭐ Frequent |
| Multiplexer / decoder circuits | ✅ | ✅ | ✅ | · | · | · | · | ✅ | **4/8** | 🌱 Alternate years |
| fork() | · | · | ✅ | · | · | · | ✅ | · | **2/8** | 🧊 Occasional |
| Cache | ✅² | ✅ | ✅ | · | ✅ | ✅ | ✅ | ✅² | **7/8** | 🔥 Almost every year |
| Page replacement | ✅ | ✅ | · | · | ✅ | ✅ | · | · | **4/8** | 🌱 Alternate years |
| Page table / address translation | ✅ | ✅ | ✅ | ✅² | ✅ | ✅ | ✅ | ✅ | **8/8** | 🔥 Almost every year |
| Eigenvalues | ✅ | ✅ | ✅ | · | ✅ | · | ✅ | · | **5/8** | ⭐ Frequent |
| IP forwarding / subnet / NAT | ✅² | ✅ | ✅² | ✅³ | ✅² | ✅² | ✅ | ✅² | **8/8** | 🔥 Almost every year |
| CN delay calculation | ✅ | ✅ | ✅ | ✅ | · | ✅ | ✅ | ✅² | **7/8** | 🔥 Almost every year |
| Context switching / process-thread | · | ✅² | ✅² | ✅ | ✅ | · | · | · | **4/8** | 🌱 Alternate years |
| Max/Min heap | · | ✅² | ✅² | · | ✅ | ✅ | ✅ | · | **5/8** | ⭐ Frequent |
| RE from DFA | ✅ | ✅ | · | ✅² | ✅ | · | · | ✅ | **5/8** | ⭐ Frequent |
| DFA design / counting 0s & 1s / min-DFA | · | ✅ | ✅² | ✅ | ✅ | ✅ | ✅ | · | **6/8** | ⭐ Frequent |
| ER diagram / ER model | · | ✅ | ✅ | ✅ | · | · | · | ✅ | **4/8** | 🌱 Alternate years |
| Graph coloring | · | ✅ | ✅ | ✅ | · | · | ✅ | · | **4/8** | 🌱 Alternate years |
| Time complexity / recurrence | ✅² | ✅² | ✅² | · | ✅ | · | ✅ | ✅² | **6/8** | ⭐ Frequent |
| Recursion code snippet | · | ✅ | ✅ | · | ✅ | · | ✅ | ✅ | **5/8** | ⭐ Frequent |
| BFS & DFS | · | · | ✅² | · | ✅ | ✅² | ✅ | · | **4/8** | 🌱 Alternate years |
| One-one / onto mapping | · | ✅ | ✅ | · | ✅ | · | · | · | **3/8** | 🌱 Alternate years |
| Probability | · | ✅ | ✅³ | ✅² | ✅³ | ✅² | ✅² | ✅² | **7/8** | 🔥 Almost every year |

> 🔎 **Observation:** Tumhari list lagbhag sahi hai — par kuch topics (jaise **fork()**, **page replacement**, **ER diagram**, **graph coloring**) 8 papers mein *har paper* mein nahi aate, 2–4 papers mein hi aaye. **Cache, page-table, delay, IP, SDT, probability** wale topics ka frequency zyada hai. Priority isi table se set karo.

---

## 📈 Trends: rising / falling topics

Comparison: **2022–2024 (4 papers)** vs **2025–2026 (4 papers)** — total marks per topic.

### 📈 Rising (zyada marks late papers mein)

| Topic | 2022–24 marks | 2025–26 marks | Δ |
|---|---|---|---|
| BST & Tree Traversals | 3 | 11 | **+8** |
| MST & Shortest Paths | 4 | 11 | **+7** |
| Sorting, Searching, DP & Misc Complexity | 3 | 9 | **+6** |
| Distributions, PDF & Expectation | 2 | 7 | **+5** |
| Grammar Ambiguity | 0 | 4 | **+4** |
| K-map & Boolean Minimization | 4 | 8 | **+4** |
| Boolean Algebra & Logic Circuits | 2 | 6 | **+4** |
| Sequential Circuits (FF, Counter, FSM) | 3 | 7 | **+4** |
| Closure Properties & Language Classes | 6 | 10 | **+4** |
| Counting-type Probability (dice / coins / balls) | 1 | 4 | **+3** |

### 📉 Falling (late papers mein kam)

| Topic | 2022–24 marks | 2025–26 marks | Δ |
|---|---|---|---|
| Graph Theory (trees / matchings / cover / matrices) | 15 | 6 | **-9** |
| Recurrences & Asymptotic Analysis | 9 | 4 | **-5** |
| Synchronization (Semaphores) | 7 | 2 | **-5** |
| IP Addressing, CIDR & Forwarding | 10 | 5 | **-5** |
| Group Theory & Algebraic Structures | 7 | 2 | **-5** |
| Recurrence & Generating Functions | 4 | 0 | **-4** |
| Combinational Design (Mux / Decoder) | 6 | 2 | **-4** |
| Syntax-Directed Translation (SDD / .val) | 7 | 3 | **-4** |
| Process, Threads & Context Switch | 5 | 1 | **-4** |
| Graph Coloring | 6 | 2 | **-4** |

> ⚠️ 4 vs 4 papers ka sample chhota hai — ise *signal* maano, *rule* nahi. Falling topics ko skip mat karo, bas time-weight kam rakho.

---

## 🧠 General Aptitude analysis

`V` = Verbal · `Q` = Quant · `L` = Logic/Reasoning · `S` = Spatial/Visual

| Paper | Q1–5 (1m) | Q6–10 (2m) | V | Q | L | S |
|---|---|---|---|---|---|---|
| 22 | V Q Q L S | V Q Q L S | 2 | 4 | 2 | 2 |
| 23 | V V Q L S | V Q V Q S | 4 | 3 | 1 | 2 |
| 24-1 | V Q Q Q Q | V Q Q S S | 2 | 6 | 0 | 2 |
| 24-2 | V Q Q Q Q | V Q Q S S | 2 | 6 | 0 | 2 |
| 25-1 | V V Q L S | V Q Q S Q | 3 | 4 | 1 | 2 |
| 25-2 | V V Q S Q | V L L Q L | 3 | 3 | 3 | 1 |
| 26-1 | V S Q Q L | V S Q L Q | 2 | 4 | 2 | 2 |
| 26-2 | V S Q Q L | V S L S Q | 2 | 3 | 2 | 3 |

### 🔁 Repeating GA patterns

- 🎲 **Dice / coin probability**: 25-1 Q8 (dice thrice, exactly one 6) · 26-1 Q10 (2nd multiple of 1st) · 26-2 Q10 (sum prime) · 22 Q8 (balls draw) · 26-2 Q3 (4 days, 3 cloudy)
- ✂️ **Folding / cutting / cube / symmetry**: 22 Q5 · 23 Q5 · 24-1 Q9, Q10 · 24-2 Q9 · 25-1 Q9 · 25-2 Q4 · 26-1 Q7
- 🧩 **Statement-logic** (all/some/no, if-then): 22 Q4 · 26-1 Q5 · 26-2 Q5 · 25-1 Q4 · 25-2 Q6 · 23 Q4
- 📊 **Pie / table / data**: 24-1 Q8 · 24-2 Q8 · 25-2 Q8
- 🔤 **Verbal**: analogies (24-1 Q1, 24-2 Q1, 25-2 Q2, 26-2 Q6) · articles/synonyms/antonyms (25-1 Q1, Q2 · 26-1 Q1 · 26-2 Q1) · para-jumbles (24-2 Q6, 23 Q8)
- 🧮 **Quant staples**: log identities (24-1 Q5, 24-2 Q4) · averages/ratios · profit-loss (24-2 Q7) · series (23 Q3, 24-2 Q5)

> ✅ Tumhara GA already ~95% accuracy hai (13.66–14/15). **Weekly 1 set** bas maintain karne ke liye kaafi hai — time yahan mat lagao.

---

## 🗓️ Prep strategy

> 🧭 Data kehta hai: **Tier S + A (≥5 papers) ≈ 74% marks**. Isliye order = **Tier S → Tier A → Tier B → Tier C**.

### 🥇 Phase 1 — *Tier S sprint* (Oct – mid Nov)

- [ ] Number Representation (2s-compl, IEEE-754, radix)  ·  `COA`  ·  8/8 papers · 18 marks
- [ ] Paging, Page Tables & TLB  ·  `OS`  ·  8/8 papers · 16 marks
- [ ] Normalization & Functional Dependencies  ·  `DBMS`  ·  7/8 papers · 17 marks
- [ ] Cache Memory (mapping, tag bits, hit/miss)  ·  `COA`  ·  7/8 papers · 17 marks
- [ ] SQL, Relational Algebra & Calculus  ·  `DBMS`  ·  7/8 papers · 16 marks
- [ ] IP Addressing, CIDR & Forwarding  ·  `CN`  ·  7/8 papers · 15 marks
- [ ] Delay, Utilization & Sliding Window  ·  `CN`  ·  7/8 papers · 14 marks
- [ ] Pipelining (speedup, hazards)  ·  `COA`  ·  7/8 papers · 14 marks
- [ ] TCP (handshake, congestion, seq no.)  ·  `CN`  ·  7/8 papers · 13 marks
- [ ] CPU Scheduling  ·  `OS`  ·  7/8 papers · 11 marks

### 🥈 Phase 2 — *Tier A coverage* (mid Nov – Dec)

- 🤖 **Theory of Computation**: Closure Properties & Language Classes · CFG / PDA (language generated, derivations) · DFA/NFA Analysis & RE Conversion · DFA Design, Minimization & State Counting
- 🛠️ **Compiler Design**: Syntax-Directed Translation (SDD / .val) · LR / SLR / LALR Parsing · Lexical Analysis, Runtime & Compiler Phases
- 🖥️ **Operating Systems**: Disk, File System & Memory Allocation · Synchronization (Semaphores)
- ⚙️ **Computer Org & Arch**: Instruction Format, Addressing & ISA · I/O: DMA, Interrupts, Polling
- 🌐 **Computer Networks**: Link Layer & Misc (CRC, Ethernet, ARP, NAT, OSI) · Application Layer (DNS / HTTP / DHCP)
- 🗄️ **Databases**: Transactions & Concurrency (schedules, 2PL, ACID) · Indexing, B+ Tree & File Organization
- 🌳 **Data Structures**: BST & Tree Traversals · Heap & Priority Queue · Stack & Queue · Hashing
- 💻 **Programming (C)**: C Pointers, Arrays & Strings · C Loops / Bitwise / Expression Output · C Recursion
- 🧮 **Algorithms**: MST & Shortest Paths · Recurrences & Asymptotic Analysis
- 🔌 **Digital Logic**: K-map & Boolean Minimization · Boolean Algebra & Logic Circuits
- 🔣 **Discrete Maths**: Graph Theory (trees / matchings / cover / matrices) · Group Theory & Algebraic Structures · Propositional & Predicate Logic
- 📐 **Linear Algebra**: Linear Systems, Null Space & LU · Determinant, Rank & Matrix Properties · Eigenvalues & Eigenvectors
- ∫ **Calculus**: Limits, Continuity & Differentiability
- 🎲 **Probability**: Conditional Prob, Bayes & Independence · Distributions, PDF & Expectation

### 🥉 Phase 3 — *Tier B + maths polish* (Dec – Jan)

- 🌱 Tier B topics ko PYQ-first approach se karo (concept chhota, 2-3 PYQs ek topic ke).
- 📐 Maths: Graph theory, linear systems, determinant tricks, conditional probability — ye *formula-light, trick-heavy* hain.

### 🏁 Phase 4 — *Timed papers & revision* (Jan – exam)

- ⏱️ Har hafte **2 full-length timed papers** (3 hrs). Pehle 2022–2026 ke 8 papers dobara timed solve karo.
- 🧾 Har paper ke baad **wrong + blank** questions ko is file ke topic-bucket mein tag karo → weak list banegi.
- 🔁 Tier C ko sirf last 2 hafte mein quick revision.

### 🛠️ Daily routine (suggested)

| ⏰ Block | 📚 Kaam |
|---|---|
| Morning (2 hrs) | 1 Tier S/A topic — concept + 8-10 **topic-wise PYQs** (GateOverflow tags) |
| Afternoon (1 hr) | Tier B/C ya maths — 1 topic |
| Evening (1 hr) | Wrong-question notebook + 1 GA set (weekly 1) ya C-output dry-runs |

### 🧪 Apne 2023 / 2024 blank questions ke saath kaise use karo

1. 📋 2023 aur 2024 ke har blank/wrong question ko upar ke **topic name** se tag karo.
2. 🧮 Har topic ke aage count likho → jo topic Tier S/A mein ho aur tumhare blank mein ho, wahi **sabse bada ROI** hai.
3. 🔁 Phir us topic ke saare logic-patterns (deep-dive section) ek saath solve karo.

---

## ⚠️ Caveats

- 🏷️ Topic tagging **mera interpretation** hai; borderline questions (jaise SQL+normalization, CFG+SDT) ko ek hi bucket mein daala hai. Ek baar apni nazar se check kar lena.
- 🖼️ Kuch questions figure-based hain (DFA, circuits, graphs, ER); unka tag question-text + context se kiya hai, picture se nahi.
- 📉 8 papers ka sample hai — trends **indicative** hain, guarantee nahi. GATE hamesha naye twist deta hai.
- 🧮 Answer-keys / official marks scheme ka use nahi kiya; marks Q-number se (1m: Q11–35, 2m: Q36–65) nikale gaye.
- 🔭 Syllabus change ho sakta hai — official GATE 2027 syllabus ek baar confirm kar lena.

---

### 🏁 Ek line mein
> **Tier S (10 topics) pakka karo → Tier A (35 topics) systematically → baaki PYQ-driven.** Exact questions repeat nahi honge, par *logic* wahi rahega. 💪🔥
