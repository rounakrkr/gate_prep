# 🎓 GATE CS/IT — PYQ Deep Analysis (2022 → 2026) 🚀

> 🧠 **Goal:** exact question nahi, **topic + question-logic** ka pattern pakadna — taaki prep smart ho, random nahi.  
> 📅 **Scope:** 8 papers → 2022, 2023, 2024 (Set 1 & 2), 2025 (Set 1 & 2), 2026 (Set 1 & 2)  
> 🧮 **Total questions tagged:** 8 × 65 = **520** (har question ko ek topic diya + marks gine)

---

## 📑 Contents

1. ⚠️ Pehle ye padho (limitations)
2. ⚡ TL;DR — sabse important findings
3. 📊 Subject-wise marks per paper
4. 🗺️ Topic × Paper heatmap (subject by subject)
5. 🏆 Priority tier list
6. 🔁 Question-template library (jo logic baar baar aata hai)
7. ✅ Tumhari observation vs actual data
8. 🎯 General Aptitude analysis
9. 📚 Topic → exact question index (PYQ practice ke liye)
10. 🛣️ Roadmap + 📋 tracker + 🐞 error log

---

## 1. ⚠️ Pehle ye padho (limitations)

| # | 📌 Note |
|---|---|
| 1 | 🖼️ **Diagram wale questions** (DFA, circuit, ER, CFG, routing table, B+ tree) ka topic maine **question text se** tag kiya hai. Figure ke andar ka exact detail yahan nahi hai. |
| 2 | ✍️ Is file me **answers nahi hain** — sirf topic, marks aur logic pattern. Answers khud solve karke verify karna (wahi asli practice hai). |
| 3 | 📄 2022 aur 2023 me **ek-ek paper**, 2024–2026 me **do-do sets** → isliye columns paper-wise hain, aur "Avg" matlab **average per paper (8 papers pe)**. |
| 4 | 🎯 Marks: Q1–5 = 1m, Q6–10 = 2m (GA); Q11–35 = 1m, Q36–65 = 2m (technical). Har paper = 100 marks (maine har paper ka sum check kiya ✅). |
| 5 | 🔀 Topic boundaries judgment-based hain (jaise "IEEE-754" ko COA me, "closure properties" ko TOC-Decidability me rakha). Thoda idhar-udhar ho sakta hai, trend nahi badlega. |

---

## 2. ⚡ TL;DR — sabse important findings

### 🔥 Big picture

- 🎯 **GA = 15 marks** har paper me fixed. Baaki **85 marks technical** hain.
- 🔴 **Tier S ke 16 topics = average ~47 marks / paper** (technical 85 me se). Yahi core hai.
- 🟠 Tier A ke 15 topics ≈ **24 marks**, 🟡 Tier B ke 15 topics ≈ **13 marks**, 🟢 Tier C ke 4 topics ≈ **2 marks**.
- 🔁 **Exact question word-to-word repeat nahi hota**, par **2 jagah near-copy mila** (Section 6 me) aur **~35 templates** baar-baar aate hain.
- 💻 **C programming / output tracing** har paper me aaya (avg ~4.8 marks) — sabse consistent "free marks" zone.
- 🧠 **Graph algorithms (BFS/DFS/MST/Shortest path)** har paper me aaye — avg 3.5 marks.

### 🏅 Subject ranking (avg marks per paper)

| Rank | Subject | Avg marks | Visual |
|:---:|---|:---:|---|
| 1 | ➗ Engineering Maths | **15.1** | ███████████████ |
| 2 | 🖥️ Computer Organization & Architecture | **10.1** | ██████████ |
| 3 | 🧠 Operating Systems | **9.1** | █████████ |
| 4 | 🌐 Computer Networks | **8.1** | ████████ |
| 5 | 🤖 Theory of Computation | **7.1** | ███████ |
| 6 | 🗄️ DBMS | **7.1** | ███████ |
| 7 | ⚙️ Compiler Design | **6.4** | ██████ |
| 8 | 📊 Algorithms | **6.2** | ██████ |
| 9 | 🌳 Data Structures | **5.9** | ██████ |
| 10 | 💡 Digital Logic | **5.0** | █████ |
| 11 | 💻 Programming (C) | **4.8** | █████ |

> 📝 Note: "Engineering Maths" yahan Discrete Math + Linear Algebra + Calculus + Probability ka total hai (graph theory, combinatorics, logic bhi isi me).

### 📈 Trend jo dikha

| Trend | Data |
|---|---|
| 📊 Algorithms ka weight badh raha hai | '22: 3, '23: 5, '24: 7/4, '25: 7/8, '26: 7/9 marks |
| ➗ '22 me Maths heavy tha, baad me stable | '22: 21, '23: 16, '24: 14/15, '25: 15/12, '26: 15/13 marks |
| 💡 Digital Logic fluctuate karta hai | '22: 2, '23: 7, '24: 5/3, '25: 7/6, '26: 5/5 marks |

### 🧪 Tumhare scores ka matlab

| Paper | Total | GA | Technical (≈) |
|---|:---:|:---:|:---:|
| 2023 | 52 | 13.66 | ≈ 38.3 / 85 |
| 2024 | 54 | 14 | ≈ 40 / 85 |

> 💪 GA already ~14/15 hai → **GA pe aur time mat lagao**. Asli growth technical ke 85 marks me hai, aur wahan Tier S topics sabse zyada return denge.

---

## 3. 📊 Subject-wise marks per paper

| Subject | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | **Avg** | % of paper |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 🎯 General Aptitude (15 marks) | 15 | 15 | 15 | 15 | 15 | 15 | 15 | 15 | **15.0** | 15.0% |
| ➗ Engineering Maths | 21 | 16 | 14 | 15 | 15 | 12 | 15 | 13 | **15.1** | 15.1% |
| 🤖 Theory of Computation | 8 | 8 | 7 | 7 | 8 | 7 | 6 | 6 | **7.1** | 7.1% |
| ⚙️ Compiler Design | 4 | 8 | 7 | 8 | 6 | 6 | 6 | 6 | **6.4** | 6.4% |
| 🖥️ Computer Organization & Architecture | 10 | 9 | 9 | 11 | 9 | 12 | 10 | 11 | **10.1** | 10.1% |
| 💡 Digital Logic | 2 | 7 | 5 | 3 | 7 | 6 | 5 | 5 | **5.0** | 5.0% |
| 🧠 Operating Systems | 10 | 9 | 10 | 10 | 8 | 7 | 10 | 9 | **9.1** | 9.1% |
| 🗄️ DBMS | 7 | 5 | 8 | 8 | 8 | 9 | 6 | 6 | **7.1** | 7.1% |
| 🌐 Computer Networks | 10 | 8 | 9 | 9 | 6 | 6 | 8 | 9 | **8.1** | 8.1% |
| 📊 Algorithms | 3 | 5 | 7 | 4 | 7 | 8 | 7 | 9 | **6.2** | 6.2% |
| 🌳 Data Structures | 5 | 7 | 4 | 4 | 6 | 6 | 9 | 6 | **5.9** | 5.9% |
| 💻 Programming (C) | 5 | 3 | 5 | 6 | 5 | 6 | 3 | 5 | **4.8** | 4.8% |
| ✅ **Total** | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | **100** | 100% |

---

## 4. 🗺️ Topic × Paper heatmap

**Legend:** 🟥 4+ marks &nbsp; 🟧 2–3 marks &nbsp; 🟨 1 mark &nbsp; ⬜ aaya hi nahi  
**Papers** = kitne papers (8 me se) me aaya &nbsp;|&nbsp; **Avg** = avg marks/paper &nbsp;|&nbsp; **Tier** = S/A/B/C

### ➗ Engineering Maths

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Propositional & predicate logic | ⬜ | 🟨 1 | ⬜ | 🟨 1 | 🟧 2 | 🟨 1 | ⬜ | 🟨 1 | 5/8 | 0.8 | B |
| Sets, relations, functions, posets, lattices | ⬜ | 🟧 2 | 🟧 3 | 🟨 1 | 🟨 1 | 🟧 2 | ⬜ | 🟨 1 | 6/8 | 1.2 | A |
| Groups & algebraic structures | 🟨 1 | 🟧 2 | ⬜ | 🟧 2 | 🟧 2 | ⬜ | ⬜ | ⬜ | 4/8 | 0.9 | B |
| Combinatorics, counting & recurrences | 🟥 5 | 🟧 3 | ⬜ | ⬜ | 🟨 1 | ⬜ | 🟨 1 | ⬜ | 4/8 | 1.2 | B |
| Graph theory (coloring, matching, cover, cycles) | 🟥 9 | 🟧 2 | 🟧 3 | 🟥 5 | ⬜ | ⬜ | 🟥 6 | 🟧 2 | 6/8 | 3.4 | S |
| Linear algebra (eigen, det, rank, LU, systems) 🔥 | 🟥 5 | 🟧 2 | 🟧 3 | 🟧 2 | 🟧 3 | 🟥 4 | 🟧 2 | 🟧 3 | 8/8 | 3.0 | S |
| Calculus (limits, continuity, integrals, maxima) 🔥 | 🟨 1 | 🟧 2 | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 1 | 🟧 3 | 🟧 3 | 8/8 | 1.6 | A |
| Probability & statistics 🔥 | ⬜ | 🟧 2 | 🟥 4 | 🟧 3 | 🟥 5 | 🟥 4 | 🟧 3 | 🟧 3 | 7/8 | 3.0 | S |
| **Subject total** | **21** | **16** | **14** | **15** | **15** | **12** | **15** | **13** | – | **15.1** | – |

💬 Pattern: Linear algebra me **A² = cI trick** ('25-S1 Q41, '25-S2 Q11), eigenvalue = trace/det ('23 Q30, '24-S1 Q12). Graph theory + combinatorics ('22 me bahut) counting-style aate hain.

### 🤖 Theory of Computation

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Regular langs: DFA/NFA, regex, min-DFA 🔥 | 🟨 1 | 🟧 3 | 🟥 4 | 🟥 5 | 🟥 5 | 🟥 4 | 🟨 1 | 🟧 2 | 8/8 | 3.1 | S |
| CFG, PDA, ambiguity, CFL properties 🔥 | 🟥 4 | 🟥 4 | 🟧 2 | 🟧 2 | 🟧 3 | 🟨 1 | 🟧 3 | 🟧 3 | 8/8 | 2.8 | S |
| Decidability, TM & language-class closure | 🟧 3 | 🟨 1 | 🟨 1 | ⬜ | ⬜ | 🟧 2 | 🟧 2 | 🟨 1 | 6/8 | 1.2 | A |
| **Subject total** | **8** | **8** | **7** | **7** | **8** | **7** | **6** | **6** | – | **7.1** | – |

💬 Pattern: DFA/min-DFA/regex har paper me; **CFG se strings count (n_a vs n_b)** ka template '24-S2 aur '26-S1 dono me aaya; closure properties lagbhag har saal.

### ⚙️ Compiler Design

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Lexical analysis | ⬜ | 🟨 1 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 🟨 1 | 2/8 | 0.2 | C |
| Parsing (LL / LR / SLR, FIRST-FOLLOW) 🔥 | 🟧 2 | ⬜ | 🟧 3 | 🟥 4 | 🟧 2 | 🟥 4 | 🟨 1 | 🟧 2 | 7/8 | 2.2 | S |
| Syntax-directed definitions / translation (.val) | 🟧 2 | 🟧 2 | 🟧 2 | 🟨 1 | ⬜ | 🟨 1 | 🟧 2 | ⬜ | 6/8 | 1.2 | A |
| Intermediate code (triples, backpatching) | ⬜ | ⬜ | ⬜ | 🟧 2 | ⬜ | 🟨 1 | ⬜ | ⬜ | 2/8 | 0.4 | C |
| Code optimization (basic blocks, liveness, CSE) | ⬜ | 🟧 2 | 🟧 2 | ⬜ | 🟧 3 | ⬜ | 🟧 2 | 🟧 2 | 5/8 | 1.4 | A |
| Compiler phases, symbol table, runtime env | ⬜ | 🟧 3 | ⬜ | 🟨 1 | 🟨 1 | ⬜ | 🟨 1 | 🟨 1 | 5/8 | 0.9 | B |
| **Subject total** | **4** | **8** | **7** | **8** | **6** | **6** | **6** | **6** | – | **6.4** | – |

💬 Pattern: **SDT/SDD har saal**, parsing (LL/LR) har saal, code-optimization (basic block/liveness/CSE) lagbhag har saal.

### 🖥️ Computer Organization & Architecture

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Instruction format, addressing modes, datapath | ⬜ | 🟧 2 | ⬜ | 🟥 4 | 🟧 3 | 🟨 1 | 🟧 2 | 🟧 2 | 6/8 | 1.8 | A |
| Pipelining, hazards, CPU performance 🔥 | 🟧 2 | 🟨 1 | 🟧 3 | 🟧 3 | ⬜ | 🟥 4 | 🟧 3 | 🟧 2 | 7/8 | 2.2 | S |
| Cache (tag/index bits, AMAT, hit-miss, WB/WT) 🔥 | 🟥 4 | 🟧 2 | 🟥 4 | ⬜ | 🟥 4 | 🟥 4 | 🟧 2 | 🟥 4 | 7/8 | 3.0 | S |
| I/O: DMA, interrupts, polling | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 1 | ⬜ | ⬜ | 🟨 1 | 6/8 | 0.8 | B |
| Number repr (2's comp, IEEE-754, overflow) 🔥 | 🟧 3 | 🟧 3 | 🟨 1 | 🟧 3 | 🟨 1 | 🟧 3 | 🟧 3 | 🟧 2 | 8/8 | 2.4 | S |
| **Subject total** | **10** | **9** | **9** | **11** | **9** | **12** | **10** | **11** | – | **10.1** | – |

💬 Pattern: **Cache** (tag bits, AMAT, hit/miss simulation), **pipelining**, **IEEE-754 / overflow**, DMA-interrupt — in chaaron ka combo har paper me.

### 💡 Digital Logic

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Boolean algebra, K-map, minimization | ⬜ | ⬜ | 🟧 2 | 🟧 3 | 🟧 3 | 🟥 5 | 🟧 3 | 🟧 3 | 6/8 | 2.4 | S |
| Combinational (MUX, decoder, glitches) | 🟧 2 | 🟥 4 | 🟧 3 | ⬜ | ⬜ | ⬜ | ⬜ | 🟧 2 | 4/8 | 1.4 | B |
| Sequential (flip-flops, counters, FSM) | ⬜ | 🟧 3 | ⬜ | ⬜ | 🟥 4 | 🟨 1 | 🟧 2 | ⬜ | 4/8 | 1.2 | B |
| **Subject total** | **2** | **7** | **5** | **3** | **7** | **6** | **5** | **5** | – | **5.0** | – |

💬 Pattern: K-map minimization + MUX/decoder circuits baar-baar; sequential (counter/FSM) kabhi 2 marks, kabhi 4.

### 🧠 Operating Systems

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| CPU scheduling 🔥 | 🟧 2 | 🟨 1 | ⬜ | 🟧 2 | 🟧 2 | 🟨 1 | 🟧 2 | 🟨 1 | 7/8 | 1.4 | A |
| Process, threads, fork, semaphores / sync 🔥 | 🟨 1 | 🟥 4 | 🟥 6 | 🟧 3 | 🟨 1 | ⬜ | 🟧 2 | 🟧 2 | 7/8 | 2.4 | S |
| Deadlocks | 🟨 1 | ⬜ | ⬜ | ⬜ | ⬜ | 🟧 2 | 🟧 2 | ⬜ | 3/8 | 0.6 | B |
| Paging, virtual memory, TLB, page replacement 🔥 | 🟥 4 | 🟥 4 | 🟧 2 | 🟧 3 | 🟧 3 | 🟥 4 | 🟧 2 | 🟥 4 | 8/8 | 3.2 | S |
| File systems & disk | 🟧 2 | ⬜ | 🟧 2 | 🟧 2 | 🟧 2 | ⬜ | 🟧 2 | 🟧 2 | 6/8 | 1.5 | A |
| **Subject total** | **10** | **9** | **10** | **10** | **8** | **7** | **10** | **9** | – | **9.1** | – |

💬 Pattern: **Paging/VM (page table size, TLB, page replacement)**, semaphores/sync outputs, scheduling avg waiting time.

### 🗄️ DBMS

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ER model & DBMS basics | ⬜ | 🟨 1 | 🟨 1 | 🟨 1 | ⬜ | ⬜ | ⬜ | 🟨 1 | 4/8 | 0.5 | B |
| Relational algebra / calculus / SQL 🔥 | 🟧 3 | 🟧 2 | 🟨 1 | 🟧 2 | 🟥 4 | 🟧 2 | 🟧 2 | ⬜ | 7/8 | 2.0 | A |
| FDs & normalization 🔥 | 🟧 2 | ⬜ | 🟧 3 | 🟧 2 | 🟧 2 | 🟧 2 | 🟥 4 | 🟧 2 | 7/8 | 2.1 | A |
| Transactions, ACID, serializability, 2PL | 🟧 2 | ⬜ | 🟧 2 | 🟧 2 | 🟨 1 | 🟧 3 | ⬜ | 🟨 1 | 6/8 | 1.4 | A |
| Indexing, B+ tree, file organization | ⬜ | 🟧 2 | 🟨 1 | 🟨 1 | 🟨 1 | 🟧 2 | ⬜ | 🟧 2 | 6/8 | 1.1 | B |
| **Subject total** | **7** | **5** | **8** | **8** | **8** | **9** | **6** | **6** | – | **7.1** | – |

💬 Pattern: **Normalization/FD har paper me**, transactions (serializability), SQL/relational algebra, B+ tree.

### 🌐 Computer Networks

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| TCP / HTTP / DNS / layers (app & transport) 🔥 | 🟨 1 | 🟧 2 | 🟧 2 | 🟨 1 | 🟧 2 | 🟧 2 | 🟧 2 | 🟨 1 | 8/8 | 1.6 | A |
| IP addressing, CIDR, subnetting, fragmentation, NAT 🔥 | 🟧 3 | 🟧 2 | 🟥 5 | 🟥 4 | 🟥 4 | 🟨 1 | 🟧 2 | 🟨 1 | 8/8 | 2.8 | S |
| Link performance: sliding window, delay, seq-no bits | 🟥 4 | 🟧 3 | 🟧 2 | ⬜ | ⬜ | 🟧 2 | 🟧 2 | 🟧 3 | 6/8 | 2.0 | A |
| TCP congestion control | ⬜ | ⬜ | ⬜ | 🟧 2 | ⬜ | ⬜ | 🟧 2 | 🟧 2 | 3/8 | 0.8 | B |
| Routing (distance vector, link state, OSPF) | 🟧 2 | 🟨 1 | ⬜ | ⬜ | ⬜ | 🟨 1 | ⬜ | ⬜ | 3/8 | 0.5 | B |
| Data link (CRC, Ethernet) | ⬜ | ⬜ | ⬜ | 🟧 2 | ⬜ | ⬜ | ⬜ | 🟧 2 | 2/8 | 0.5 | C |
| **Subject total** | **10** | **8** | **9** | **9** | **6** | **6** | **8** | **9** | – | **8.1** | – |

💬 Pattern: **IP fragmentation / CIDR / forwarding table** + **sliding-window / delay / sequence-number bits** + TCP (handshake, congestion).

### 📊 Algorithms

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Asymptotics & recurrences (time complexity) 🔥 | 🟨 1 | 🟧 3 | 🟧 3 | 🟨 1 | 🟨 1 | 🟨 1 | 🟨 1 | 🟥 4 | 8/8 | 1.9 | A |
| Sorting & searching | ⬜ | ⬜ | ⬜ | ⬜ | 🟨 1 | 🟧 2 | ⬜ | 🟨 1 | 3/8 | 0.5 | B |
| Graph algos (BFS / DFS / MST / shortest path) 🔥 | 🟧 2 | 🟧 2 | 🟥 4 | 🟧 2 | 🟥 5 | 🟥 5 | 🟥 6 | 🟧 2 | 8/8 | 3.5 | S |
| DP & greedy | ⬜ | ⬜ | ⬜ | 🟨 1 | ⬜ | ⬜ | ⬜ | 🟧 2 | 2/8 | 0.4 | C |
| **Subject total** | **3** | **5** | **7** | **4** | **7** | **8** | **7** | **9** | – | **6.2** | – |

💬 Pattern: Graph algos (BFS/DFS/MST) har paper, recurrences/asymptotics har paper; DP/greedy kam par concept-based.

### 🌳 Data Structures

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Stack & queue | 🟧 2 | 🟧 2 | ⬜ | 🟧 2 | ⬜ | 🟧 2 | ⬜ | 🟧 2 | 5/8 | 1.2 | A |
| Linked lists | 🟨 1 | 🟨 1 | ⬜ | ⬜ | 🟧 2 | ⬜ | 🟧 2 | ⬜ | 4/8 | 0.8 | B |
| Trees, BST, heaps 🔥 | 🟨 1 | 🟧 3 | 🟥 4 | 🟧 2 | 🟧 2 | 🟥 4 | 🟥 6 | 🟧 3 | 8/8 | 3.1 | S |
| Hashing | 🟨 1 | 🟨 1 | ⬜ | ⬜ | 🟧 2 | ⬜ | 🟨 1 | 🟨 1 | 5/8 | 0.8 | B |
| **Subject total** | **5** | **7** | **4** | **4** | **6** | **6** | **9** | **6** | – | **5.9** | – |

💬 Pattern: **Heap + BST + traversals** har paper; hashing (linear probing / chaining / double hashing) lagbhag har saal.

### 💻 Programming (C)

| Topic | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Papers | Avg | Tier |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| C output tracing, pointers, recursion, fork-free code 🔥 | 🟥 5 | 🟧 3 | 🟥 5 | 🟥 6 | 🟥 5 | 🟥 6 | 🟧 3 | 🟥 5 | 8/8 | 4.8 | S |
| **Subject total** | **5** | **3** | **5** | **6** | **5** | **6** | **3** | **5** | – | **4.8** | – |

💬 Pattern: pointers, recursion, loops ka **output nikalna** — pure concentration + dry-run practice.

---

## 5. 🏆 Priority tier list

**Tier rule:** S = ≥6 papers me aaya **aur** avg ≥ 2.25 marks | A = ≥5 papers **aur** avg ≥ 1.2 | B = ≥3 papers | C = baaki.  
(GA topics alag Section 8 me.)

### 🔴 TIER S — Must-master  — avg ≈ **47.2 marks/paper**

| Topic | Subject | Papers | Avg marks | Total marks (8 papers) | PYQ bank (questions) |
|---|---|:---:|:---:|:---:|:---:|
| C output tracing, pointers, recursion, fork-free code | 💻 Programming | 8/8 | 4.75 | 38 | 25 |
| Graph algos (BFS / DFS / MST / shortest path) | 📊 Algorithms | 8/8 | 3.50 | 28 | 15 |
| Graph theory (coloring, matching, cover, cycles) | ➗ Engineering Maths | 6/8 | 3.38 | 27 | 15 |
| Paging, virtual memory, TLB, page replacement | 🧠 Operating Systems | 8/8 | 3.25 | 26 | 14 |
| Regular langs: DFA/NFA, regex, min-DFA | 🤖 Theory of Computation | 8/8 | 3.12 | 25 | 15 |
| Trees, BST, heaps | 🌳 Data Structures | 8/8 | 3.12 | 25 | 17 |
| Linear algebra (eigen, det, rank, LU, systems) | ➗ Engineering Maths | 8/8 | 3.00 | 24 | 17 |
| Probability & statistics | ➗ Engineering Maths | 7/8 | 3.00 | 24 | 15 |
| Cache (tag/index bits, AMAT, hit-miss, WB/WT) | 🖥️ Computer Organization & Architecture | 7/8 | 3.00 | 24 | 13 |
| CFG, PDA, ambiguity, CFL properties | 🤖 Theory of Computation | 8/8 | 2.75 | 22 | 13 |
| IP addressing, CIDR, subnetting, fragmentation, NAT | 🌐 Computer Networks | 8/8 | 2.75 | 22 | 14 |
| Number repr (2's comp, IEEE-754, overflow) | 🖥️ Computer Organization & Architecture | 8/8 | 2.38 | 19 | 14 |
| Boolean algebra, K-map, minimization | 💡 Digital Logic | 6/8 | 2.38 | 19 | 12 |
| Process, threads, fork, semaphores / sync | 🧠 Operating Systems | 7/8 | 2.38 | 19 | 13 |
| Parsing (LL / LR / SLR, FIRST-FOLLOW) | ⚙️ Compiler Design | 7/8 | 2.25 | 18 | 11 |
| Pipelining, hazards, CPU performance | 🖥️ Computer Organization & Architecture | 7/8 | 2.25 | 18 | 11 |

### 🟠 TIER A — High value  — avg ≈ **23.6 marks/paper**

| Topic | Subject | Papers | Avg marks | Total marks (8 papers) | PYQ bank (questions) |
|---|---|:---:|:---:|:---:|:---:|
| FDs & normalization | 🗄️ DBMS | 7/8 | 2.12 | 17 | 11 |
| Relational algebra / calculus / SQL | 🗄️ DBMS | 7/8 | 2.00 | 16 | 9 |
| Link performance: sliding window, delay, seq-no bits | 🌐 Computer Networks | 6/8 | 2.00 | 16 | 9 |
| Asymptotics & recurrences (time complexity) | 📊 Algorithms | 8/8 | 1.88 | 15 | 12 |
| Instruction format, addressing modes, datapath | 🖥️ Computer Organization & Architecture | 6/8 | 1.75 | 14 | 9 |
| Calculus (limits, continuity, integrals, maxima) | ➗ Engineering Maths | 8/8 | 1.62 | 13 | 11 |
| TCP / HTTP / DNS / layers (app & transport) | 🌐 Computer Networks | 8/8 | 1.62 | 13 | 12 |
| File systems & disk | 🧠 Operating Systems | 6/8 | 1.50 | 12 | 6 |
| Code optimization (basic blocks, liveness, CSE) | ⚙️ Compiler Design | 5/8 | 1.38 | 11 | 6 |
| CPU scheduling | 🧠 Operating Systems | 7/8 | 1.38 | 11 | 7 |
| Transactions, ACID, serializability, 2PL | 🗄️ DBMS | 6/8 | 1.38 | 11 | 8 |
| Sets, relations, functions, posets, lattices | ➗ Engineering Maths | 6/8 | 1.25 | 10 | 7 |
| Decidability, TM & language-class closure | 🤖 Theory of Computation | 6/8 | 1.25 | 10 | 8 |
| Syntax-directed definitions / translation (.val) | ⚙️ Compiler Design | 6/8 | 1.25 | 10 | 6 |
| Stack & queue | 🌳 Data Structures | 5/8 | 1.25 | 10 | 5 |

### 🟡 TIER B — Medium  — avg ≈ **12.6 marks/paper**

| Topic | Subject | Papers | Avg marks | Total marks (8 papers) | PYQ bank (questions) |
|---|---|:---:|:---:|:---:|:---:|
| Combinational (MUX, decoder, glitches) | 💡 Digital Logic | 4/8 | 1.38 | 11 | 6 |
| Combinatorics, counting & recurrences | ➗ Engineering Maths | 4/8 | 1.25 | 10 | 7 |
| Sequential (flip-flops, counters, FSM) | 💡 Digital Logic | 4/8 | 1.25 | 10 | 6 |
| Indexing, B+ tree, file organization | 🗄️ DBMS | 6/8 | 1.12 | 9 | 6 |
| Groups & algebraic structures | ➗ Engineering Maths | 4/8 | 0.88 | 7 | 4 |
| Compiler phases, symbol table, runtime env | ⚙️ Compiler Design | 5/8 | 0.88 | 7 | 6 |
| Propositional & predicate logic | ➗ Engineering Maths | 5/8 | 0.75 | 6 | 5 |
| I/O: DMA, interrupts, polling | 🖥️ Computer Organization & Architecture | 6/8 | 0.75 | 6 | 6 |
| TCP congestion control | 🌐 Computer Networks | 3/8 | 0.75 | 6 | 3 |
| Linked lists | 🌳 Data Structures | 4/8 | 0.75 | 6 | 4 |
| Hashing | 🌳 Data Structures | 5/8 | 0.75 | 6 | 5 |
| Deadlocks | 🧠 Operating Systems | 3/8 | 0.62 | 5 | 4 |
| ER model & DBMS basics | 🗄️ DBMS | 4/8 | 0.50 | 4 | 4 |
| Routing (distance vector, link state, OSPF) | 🌐 Computer Networks | 3/8 | 0.50 | 4 | 3 |
| Sorting & searching | 📊 Algorithms | 3/8 | 0.50 | 4 | 3 |

### 🟢 TIER C — Low / bonus  — avg ≈ **1.5 marks/paper**

| Topic | Subject | Papers | Avg marks | Total marks (8 papers) | PYQ bank (questions) |
|---|---|:---:|:---:|:---:|:---:|
| Data link (CRC, Ethernet) | 🌐 Computer Networks | 2/8 | 0.50 | 4 | 2 |
| Intermediate code (triples, backpatching) | ⚙️ Compiler Design | 2/8 | 0.38 | 3 | 2 |
| DP & greedy | 📊 Algorithms | 2/8 | 0.38 | 3 | 2 |
| Lexical analysis | ⚙️ Compiler Design | 2/8 | 0.25 | 2 | 2 |

> 🧭 **Strategy:** pehle S → phir A. B/C ko tab lo jab S+A pe 80%+ accuracy ho.

---

## 6. 🔁 Question-template library

### 🎯 A) Near-exact repeats (sabse valuable)

| # | Template | Kahan aaya | Kya same hai |
|:-:|---|---|---|
| 1 | 🧮 **Direct-mapped cache, 4 words P,Q,R,S ko order me 10 baar access → kaunsa hit/miss/evict** | '22 Q54, '26-S2 Q52 | Same setup (40 accesses, 1-byte word, "which statements true"). Sirf numbers/addresses alag. |
| 2 | ✍️ **Write-back vs Write-through cache statements (LRU, set-associative)** | '22 Q24, '24-S1 Q53 | Dono me WB/WT + LRU + dirty bit/eviction wale statements. |
| 3 | 🧬 **CFG se banne wali strings me n_a vs n_b / n_c relations** | '24-S2 Q52, '26-S1 Q52 | Dono multi-select: har production ka a/b/c count invariant nikalo. |
| 4 | 🔢 **Sequence-number field ke bits (wrap-around / max-lifetime)** | '22 Q60, '23 Q50, '26-S2 Q65 | Bandwidth × lifetime → bits. 3 baar aaya! |
| 5 | 🧱 **Heap array indices / leaf / max element position** | '24-S1 Q43, '26-S1 Q23 (+ '25-S1 Q35 height) | Leaves = ⌊n/2⌋+1 … n; min-heap ka max leaf me hota hai. |
| 6 | 🔑 **Superkeys ki ginti given FDs/candidate keys** | '22 Q31, '26-S1 Q65 | Candidate keys diye → superkeys = inclusion-exclusion. |
| 7 | 📶 **AMAT, 2-level cache** | '25-S1 Q53, '25-S2 Q55 | Ek hi saal ke dono sets me! |
| 8 | 🧊 **A² = cI wala matrix (A^k ke eigenvalues / A^8)** | '25-S1 Q41, '25-S2 Q11 | Dono me 2×2 matrix jiska A² scalar×I hai. |

### 🧩 B) Recurring templates (logic same, numbers/twist alag)

| # | Template | Seen in | Core logic jo practise karna hai |
|:-:|---|---|---|
| 1 | 🌐 IP fragmentation (kitne fragments / last fragment size) | '24-S1 Q65, '24-S2 Q28, '25-S1 Q57, '25-S2 Q23 | Payload = MTU−20 ko 8 ke multiple me round-down; offset = bytes/8; doosre link pe re-fragment. |
| 2 | 🌐 Longest-prefix match / forwarding table / CIDR aggregation | '22 Q22, Q55; '23 Q65; '24-S1 Q58; '24-S2 Q38; '25-S1 Q40; '26-S1 Q56; '26-S2 Q33 | Mask AND address → sabse lamba matching prefix; block start multiple-of-size hona chahiye. |
| 3 | 📡 Stop-and-wait / sliding window / link delay | '22 Q59; '23 Q17; '24-S1 Q36; '25-S2 Q36; '26-S1 Q45; '26-S2 Q21 | Utilization = Tt/(Tt+2Tp); W = 1+2a; store-and-forward me pipeline delay. |
| 4 | 🚦 TCP congestion window (slow start → CA, timeout) | '24-S2 Q54, '26-S1 Q44, '26-S2 Q58 | Doubling per RTT till ssthresh, phir +1 MSS/RTT; timeout pe ssthresh=cwnd/2, cwnd=1. |
| 5 | 🔗 DNS / HTTP / TCP handshake order | '22 Q35; '23 Q52; '24-S1 Q16, Q29; '25-S1 Q22; '26-S1 Q18, Q19 | Event ordering + RTT count; persistent vs non-persistent HTTP. |
| 6 | 🔄 Basic blocks / liveness / common subexpression | '23 Q37; '24-S1 Q39; '25-S1 Q13, Q52; '26-S1 Q42; '26-S2 Q45 | Leaders nikalo; liveness backward; CSE tab jab expression har path pe available aur operand redefine na ho. |
| 7 | 📝 SDD / SDT with .val | '22 Q65; '23 Q60; '24-S1 Q37; '24-S2 Q29; '25-S2 Q22; '26-S1 Q53 | Parse tree bottom-up evaluate; S-attributed vs L-attributed classification. |
| 8 | 🌳 LL(1)/LR/SLR table & conflicts | '22 Q13, Q29; '24-S1 Q26, Q38; '24-S2 Q40, Q65; '25-S1 Q46; '25-S2 Q40, Q51; '26-S1 Q28; '26-S2 Q41 | FIRST/FOLLOW, closure/goto items, shift-reduce / reduce-reduce conflict ginna. |
| 9 | 🔢 IEEE-754 decode / add / multiply | '22 Q41; '23 Q45; '24-S2 Q14; '25-S2 Q49; '26-S1 Q36; '26-S2 Q34 | 1 | 8 (bias 127) | 23; exponent align karke add; hex → binary carefully. |
| 10 | ➕ 2's complement / sign-magnitude overflow | '22 Q18; '24-S1 Q13; '25-S1 Q25; '26-S1 Q22; '26-S2 Q28 | Same-sign operands, opposite-sign result = overflow; subtraction = add negative. |
| 11 | 🍴 fork() / process count / ready-queue count | '24-S1 Q57; '25-S1 Q29; '26-S1 Q63 | Process tree draw karo; har fork pe process double (parent/child path alag). |
| 12 | 🚦 Semaphores / thread interleaving outputs | '22 Q19; '23 Q38; '24-S1 Q40; '24-S2 Q46; '26-S2 Q51 | Semaphore value track karo; "possible outputs" = valid interleavings enumerate. |
| 13 | 📄 Paging: multi-level page table / TLB / sizes | '23 Q58; '24-S1 Q62; '24-S2 Q64; '25-S1 Q14; '25-S2 Q58; '26-S1 Q54; '26-S2 Q54 | VA bits − offset = page no. bits; PTE size se entries/page; levels nikalo. |
| 14 | 🔁 Page replacement simulation (LRU / FIFO / OPT / LFU) | '22 Q64; '23 Q57; '25-S1 Q54; '25-S2 Q47 | Frame table banao; policy ke hisaab se victim. |
| 15 | 🗺️ K-map / minimal SOP / Boolean equivalence | '24-S1 Q47; '25-S1 Q24, Q42; '25-S2 Q31, Q43, Q50; '26-S1 Q21, Q48; '26-S2 Q16, Q40 | Prime implicants, essential PIs; multiple minimal answers possible. |
| 16 | 🔌 MUX / decoder based circuit | '22 Q40; '23 Q42, Q44; '24-S1 Q64; '26-S2 Q59 | Truth table / minterm substitute karke output count. |
| 17 | 🔐 Conflict serializability / equivalent serial schedule | '22 Q39; '24-S1 Q46; '25-S2 Q53 | Precedence graph; cycle = not serializable; topological orders = equivalent serial schedules. |
| 18 | 📚 FD closure, candidate keys, normal forms | Har paper ('22 Q14, Q31 … '26-S1 Q30, Q31, Q65) | Attribute closure; BCNF/3NF check; lossless & dependency-preserving. |
| 19 | 🌲 B+ tree insert / occupancy | '23 Q62; '24-S1 Q21; '25-S1 Q21; '25-S2 Q57 | Split rule (copy-up vs push-up), min occupancy, kitne node split. |
| 20 | 🕸️ MST properties (cut / cycle property) | '22 Q49; '24-S2 Q51, Q59; '25-S1 Q18, Q64; '25-S2 Q37; '26-S1 Q49 | Unique weights → unique MST; heaviest edge of a cycle MST me nahi. |
| 21 | 🧭 BFS / DFS properties (edge types, d/f times, tree height) | '24-S1 Q45, Q60; '25-S1 Q43; '25-S2 Q29, Q59; '26-S1 Q41, Q50 | DFS parenthesis theorem; BFS levels = shortest unweighted distance. |
| 22 | 🎨 Graph coloring / matching / vertex cover | '22 Q50; '23 Q55; '24-S1 Q51; '24-S2 Q60; '26-S1 Q47, Q55, Q57 | Chromatic number bounds; 2-colorable ⇔ bipartite ⇔ no odd cycle. |
| 23 | 🔁 One-one / onto / function composition | '23 Q49; '24-S1 Q32; '25-S1 Q17 | Injective/surjective conditions on composition; counting bijections. |
| 24 | 🧩 Group / algebraic structure properties | '22 Q27; '23 Q51; '24-S2 Q63; '25-S1 Q49 | Closure, identity, inverse; self-inverse elements; abelian/monoid check. |
| 25 | 🎲 Conditional probability / Bayes / expectation | '24-S1 Q14, Q27, Q63; '24-S2 Q18, Q44; '25-S1 Q32, Q56, Q58; '25-S2 Q64, Q65; '26-S1 Q11, Q58; '26-S2 Q14, Q63 | Total probability + Bayes; E[X] direct; PDF normalization. |
| 26 | 📈 Recurrence → Θ (Master / recursion tree) | '22 Q11; '23 Q29, Q54; '24-S1 Q17, Q42; '24-S2 Q15; '25-S1 Q20; '25-S2 Q20; '26-S1 Q17; '26-S2 Q24, Q25, Q38 | Master theorem, substitution; √n and 2T(n−1) type twists. |
| 27 | 🔤 DFA ↔ regex / min-DFA states / distinguishability | '22 Q12; '23 Q14, Q63; '24-S1 Q50, Q61; '24-S2 Q22, Q41, Q62; '25-S1 Q28, Q44, Q50; '25-S2 Q52, Q60; '26-S1 Q26; '26-S2 Q47 | State elimination, Myhill–Nerode, product construction (mod counts). |
| 28 | 🧾 Closure properties / decidability / language classes | '22 Q23, Q46; '23 Q24; '24-S1 Q23; '25-S2 Q24, Q25, Q30; '26-S1 Q51; '26-S2 Q13 | Closure table (regular/CFL/recursive/RE) pakka karo. |
| 29 | ⏱️ CPU scheduling avg waiting/turnaround | '22 Q42; '24-S2 Q37; '25-S1 Q38; '25-S2 Q26; '26-S1 Q64 | Gantt chart; FCFS/SJF/SRTF/RR/priority; WT = TAT − burst. |
| 30 | 🔒 Deadlock (min resources / RAG / safe state) | '22 Q26; '25-S2 Q48; '26-S1 Q29, Q35 | Min k = Σ(need−1)+1; RAG cycle with single instance. |
| 31 | 🛠️ Pipelining speedup / CPI / stalls | '22 Q61; '23 Q33; '24-S1 Q30, Q55; '24-S2 Q31, Q58; '25-S2 Q56, Q61; '26-S1 Q16, Q60; '26-S2 Q57 | Speedup = (non-pipe time)/(pipe time incl. stalls); clock = max stage + latch. |
| 32 | 🧮 Opcode / instruction-format bit counting | '23 Q41; '24-S2 Q57, Q61; '25-S1 Q27, Q37; '26-S1 Q14, Q15; '26-S2 Q44 | Total bits − (opcode + reg fields + mode) = immediate; expanding-opcode logic. |
| 33 | 🖥️ DMA / interrupt / polling | '22 Q17; '23 Q34; '24-S1 Q15; '24-S2 Q11; '25-S1 Q11; '26-S2 Q18 | Cycle-stealing vs burst; vectored vs non-vectored; CPU overhead % calculation. |
| 34 | 🔗 Hashing (linear probing / chaining / double hashing / universal) | '22 Q16; '23 Q20; '25-S1 Q65; '26-S1 Q24; '26-S2 Q30 | Dry-run insertion; load factor; probe sequence. |
| 35 | 🌿 BST / traversals / complete-tree insertion order | '22 Q28; '24-S2 Q39, Q49; '25-S2 Q35; '26-S1 Q33, Q40, Q62; '26-S2 Q12 | Preorder → BST rebuild; postorder position; complete tree = fixed shape. |
| 36 | 📦 Stack + queue manipulation puzzles | '22 Q62; '23 Q59; '24-S2 Q48; '25-S2 Q45; '26-S2 Q50 | Simulate step-by-step; valid output sequences. |

> 🛡️ Reference format: `'24-S1 Q43` = GATE 2024, Set 1, Question 43.

---

## 7. ✅ Tumhari observation vs actual data

Tumne jo topics list kiye the, unko 8 papers pe check kiya:

| Tumhara topic | Verdict | Kitne papers me | Examples |
|---|:---:|:---:|---|
| Production rules (CFG) | ✅ Confirmed | 8/8 | '22 Q47-48; '23 Q39; '24-S1 Q59; '25-S1 Q19; '26-S1 Q25, Q52 |
| CFG + .val (SDT) | ✅ Confirmed | 6/8 papers | '22 Q65; '23 Q60; '24-S1 Q37; '25-S2 Q22; '26-S1 Q53 |
| Multiplexer | ✅ Confirmed | 5/8 | '22 Q40; '23 Q42, Q44; '24-S1 Q64; '26-S2 Q59 |
| fork() | ✅ but sirf 2–3 baar | 2/8 direct | '24-S1 Q57; '26-S1 Q63 (+ '25-S1 Q29 process/ready queue) |
| Cache | ✅ Har paper | 8/8 | '22 Q24, Q33, Q54; '23 Q64; '24-S1 Q53, Q56; '26-S2 Q52, Q56 |
| Page replacement | ✅ Confirmed | 4/8 | '22 Q64; '23 Q57; '25-S1 Q54; '25-S2 Q47 |
| Page table + PA/VA | ✅ Har paper | 8/8 | '23 Q58; '24-S1 Q62; '24-S2 Q64; '25-S2 Q58 |
| Eigenvalues | ✅ Confirmed | 6/8 | '22 Q53; '23 Q30; '24-S1 Q12; '25-S1 Q41; '25-S2 Q11; '26-S1 Q13 |
| Port forwarding (router forwarding) | 🔄 Naam alag: **longest-prefix / forwarding table** | 7/8 | '23 Q65; '24-S1 Q58; '25-S1 Q40; '22 Q55; '26-S1 Q56 |
| CN delay calculation | ✅ Confirmed | 7/8 | '22 Q59; '24-S1 Q36; '26-S2 Q21; '25-S2 Q36 |
| Context switching | ✅ Confirmed | ~4/8 | '23 Q22; '24-S1 Q24, Q25; '24-S2 Q25; '22 Q42 |
| Max heap | ✅ Confirmed | 7/8 | '23 Q12, Q46; '24-S1 Q41, Q43; '25-S1 Q35; '26-S1 Q23 |
| RE from DFA / DFA with 0's & 1's | ✅ Confirmed | 8/8 | '22 Q12; '23 Q14; '24-S2 Q22, Q41; '25-S1 Q50; '26-S2 Q47 |
| ER diagram | ⚠️ Kam — 3/8 pure ER | 3/8 | '24-S1 Q20; '24-S2 Q20; '26-S2 Q15 (+ '23 Q16 basics) |
| Graph coloring | ✅ Confirmed | 5/8 | '22 Q50; '23 Q55; '24-S1 Q51; '24-S2 Q60; '26-S1 Q55 |
| Time complexity | ✅ Har paper | 8/8 | '22 Q11; '23 Q29, Q54; '24-S1 Q17; '25-S1 Q20; '26-S1 Q17 |
| Recursion code snippet | ✅ Confirmed | 5/8 | '24-S1 Q19; '25-S1 Q61; '26-S1 Q61; '26-S2 Q61; '25-S2 Q63 |
| BFS & DFS | ✅ Har paper | 8/8 | '24-S1 Q45, Q60; '25-S2 Q29, Q59; '26-S1 Q50 |
| One-one & onto | ✅ but sirf 3 baar | 3/8 | '23 Q49; '24-S1 Q32; '25-S1 Q17 |
| Probability | ✅ Har paper (GA + Maths dono) | 8/8 | '22 Q8 (GA); '24-S1 Q14, Q63; '25-S1 Q32; '26-S2 Q63 |

> 🧠 **Conclusion:** tumhari observation 95% sahi hai — concept-level repeat hi asli game hai.

---

## 8. 🎯 General Aptitude analysis

| Type | '22 | '23 | '24-S1 | '24-S2 | '25-S1 | '25-S2 | '26-S1 | '26-S2 | Avg |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 📝 Verbal (vocab, grammar, analogy, passage inference) | 3 | 4 | 3 | 3 | 4 | 4 | 3 | 3 | **3.4** |
| 🔢 Quant (arithmetic, probability, geometry, data interp.) | 6 | 5 | 8 | 7 | 7 | 4 | 6 | 4 | **5.9** |
| 🧩 Logical reasoning (statements, puzzles, series) | 3 | 3 | 0 | 3 | 2 | 6 | 3 | 5 | **3.1** |
| 🧊 Spatial / visual (folding, cuts, views, tiling) | 3 | 3 | 4 | 2 | 2 | 1 | 3 | 3 | **2.6** |
| ✅ **Total** | 15 | 15 | 15 | 15 | 15 | 15 | 15 | 15 | **15** |

### 🔍 Pattern

- 🔢 **Quant sabse bada hissa (~6 marks)**: probability with dice/coins ('22 Q8, '24-S2 Q18-type, '25-S1 Q8, '26-S1 Q10, '26-S2 Q3, Q10), percentage/ratio/profit-loss, averages, mean-median.
- 🧊 **Spatial/visual har paper me** (2–3 marks): paper folding & cutting ('25-S1 Q9, '24-S1 Q9), 3D views ('26-S1 Q7), tiling ('26-S1 Q2), cube nets ('25-S2 Q4).
- 🧩 **Logical inference** ("based only on passage… necessarily true"): har paper ('26-S1 Q5, '26-S2 Q5, '25-S2 Q6, '23 Q4, '23 Q6).
- 📝 **Verbal**: vocabulary/analogy 1-markers + 1 passage/sentence-ordering 2-marker.

> ⏱️ Tumhara timed GA result (60 min me 40 questions, 36 correct) already strong hai. GA ke liye alag daily time nahi — sirf mock me 12–15 min me nipta do.

---

## 9. 📚 Topic → exact question index

PYQ practice ke liye: topic uthao → ye saare questions solve karo (`'24-S1 Q43` = 2024 Set-1 Q43).

### ➗ Engineering Maths

- **Propositional & predicate logic** — 5 Qs (6 marks): '23 Q26, '24-S2 Q12, '25-S1 Q48 (2m), '25-S2 Q15, '26-S2 Q11
- **Sets, relations, functions, posets, lattices** — 7 Qs (10 marks): '23 Q49 (2m), '24-S1 Q32, '24-S1 Q52 (2m), '24-S2 Q34, '25-S1 Q17, '25-S2 Q42 (2m), '26-S2 Q26
- **Groups & algebraic structures** — 4 Qs (7 marks): '22 Q27, '23 Q51 (2m), '24-S2 Q63 (2m), '25-S1 Q49 (2m)
- **Combinatorics, counting & recurrences** — 7 Qs (10 marks): '22 Q32, '22 Q36 (2m), '22 Q51 (2m), '23 Q15, '23 Q48 (2m), '25-S1 Q30, '26-S1 Q12
- **Graph theory (coloring, matching, cover, cycles)** — 15 Qs (27 marks): '22 Q30, '22 Q37 (2m), '22 Q50 (2m), '22 Q52 (2m), '22 Q58 (2m), '23 Q55 (2m), '24-S1 Q34, '24-S1 Q51 (2m), '24-S2 Q17, '24-S2 Q51 (2m), '24-S2 Q60 (2m), '26-S1 Q47 (2m), '26-S1 Q55 (2m), '26-S1 Q57 (2m), '26-S2 Q36 (2m)
- **Linear algebra (eigen, det, rank, LU, systems)** — 17 Qs (24 marks): '22 Q20, '22 Q45 (2m), '22 Q53 (2m), '23 Q18, '23 Q30, '24-S1 Q12, '24-S1 Q49 (2m), '24-S2 Q47 (2m), '25-S1 Q23, '25-S1 Q41 (2m), '25-S2 Q11, '25-S2 Q14, '25-S2 Q44 (2m), '26-S1 Q13, '26-S1 Q20, '26-S2 Q31, '26-S2 Q62 (2m)
- **Calculus (limits, continuity, integrals, maxima)** — 11 Qs (13 marks): '22 Q34, '23 Q28, '23 Q31, '24-S1 Q11, '24-S2 Q16, '25-S1 Q31, '25-S2 Q12, '26-S1 Q32, '26-S1 Q46 (2m), '26-S2 Q27, '26-S2 Q64 (2m)
- **Probability & statistics** — 15 Qs (24 marks): '23 Q53 (2m), '24-S1 Q14, '24-S1 Q27, '24-S1 Q63 (2m), '24-S2 Q18, '24-S2 Q44 (2m), '25-S1 Q32, '25-S1 Q56 (2m), '25-S1 Q58 (2m), '25-S2 Q64 (2m), '25-S2 Q65 (2m), '26-S1 Q11, '26-S1 Q58 (2m), '26-S2 Q14, '26-S2 Q63 (2m)

### 🤖 Theory of Computation

- **Regular langs: DFA/NFA, regex, min-DFA** — 15 Qs (25 marks): '22 Q12, '23 Q14, '23 Q63 (2m), '24-S1 Q50 (2m), '24-S1 Q61 (2m), '24-S2 Q22, '24-S2 Q41 (2m), '24-S2 Q62 (2m), '25-S1 Q28, '25-S1 Q44 (2m), '25-S1 Q50 (2m), '25-S2 Q52 (2m), '25-S2 Q60 (2m), '26-S1 Q26, '26-S2 Q47 (2m)
- **CFG, PDA, ambiguity, CFL properties** — 13 Qs (22 marks): '22 Q47 (2m), '22 Q48 (2m), '23 Q39 (2m), '23 Q40 (2m), '24-S1 Q59 (2m), '24-S2 Q52 (2m), '25-S1 Q19, '25-S1 Q45 (2m), '25-S2 Q24, '26-S1 Q25, '26-S1 Q52 (2m), '26-S2 Q29, '26-S2 Q48 (2m)
- **Decidability, TM & language-class closure** — 8 Qs (10 marks): '22 Q23, '22 Q46 (2m), '23 Q24, '24-S1 Q23, '25-S2 Q25, '25-S2 Q30, '26-S1 Q51 (2m), '26-S2 Q13

### ⚙️ Compiler Design

- **Lexical analysis** — 2 Qs (2 marks): '23 Q19, '26-S2 Q35
- **Parsing (LL / LR / SLR, FIRST-FOLLOW)** — 11 Qs (18 marks): '22 Q13, '22 Q29, '24-S1 Q26, '24-S1 Q38 (2m), '24-S2 Q40 (2m), '24-S2 Q65 (2m), '25-S1 Q46 (2m), '25-S2 Q40 (2m), '25-S2 Q51 (2m), '26-S1 Q28, '26-S2 Q41 (2m)
- **Syntax-directed definitions / translation (.val)** — 6 Qs (10 marks): '22 Q65 (2m), '23 Q60 (2m), '24-S1 Q37 (2m), '24-S2 Q29, '25-S2 Q22, '26-S1 Q53 (2m)
- **Intermediate code (triples, backpatching)** — 2 Qs (3 marks): '24-S2 Q43 (2m), '25-S2 Q21
- **Code optimization (basic blocks, liveness, CSE)** — 6 Qs (11 marks): '23 Q37 (2m), '24-S1 Q39 (2m), '25-S1 Q13, '25-S1 Q52 (2m), '26-S1 Q42 (2m), '26-S2 Q45 (2m)
- **Compiler phases, symbol table, runtime env** — 6 Qs (7 marks): '23 Q11, '23 Q36 (2m), '24-S2 Q21, '25-S1 Q12, '26-S1 Q27, '26-S2 Q17

### 🖥️ Computer Organization & Architecture

- **Instruction format, addressing modes, datapath** — 9 Qs (14 marks): '23 Q41 (2m), '24-S2 Q57 (2m), '24-S2 Q61 (2m), '25-S1 Q27, '25-S1 Q37 (2m), '25-S2 Q28, '26-S1 Q14, '26-S1 Q15, '26-S2 Q44 (2m)
- **Pipelining, hazards, CPU performance** — 11 Qs (18 marks): '22 Q61 (2m), '23 Q33, '24-S1 Q30, '24-S1 Q55 (2m), '24-S2 Q31, '24-S2 Q58 (2m), '25-S2 Q56 (2m), '25-S2 Q61 (2m), '26-S1 Q16, '26-S1 Q60 (2m), '26-S2 Q57 (2m)
- **Cache (tag/index bits, AMAT, hit-miss, WB/WT)** — 13 Qs (24 marks): '22 Q24, '22 Q33, '22 Q54 (2m), '23 Q64 (2m), '24-S1 Q53 (2m), '24-S1 Q56 (2m), '25-S1 Q36 (2m), '25-S1 Q53 (2m), '25-S2 Q39 (2m), '25-S2 Q55 (2m), '26-S1 Q38 (2m), '26-S2 Q52 (2m), '26-S2 Q56 (2m)
- **I/O: DMA, interrupts, polling** — 6 Qs (6 marks): '22 Q17, '23 Q34, '24-S1 Q15, '24-S2 Q11, '25-S1 Q11, '26-S2 Q18
- **Number repr (2's comp, IEEE-754, overflow)** — 14 Qs (19 marks): '22 Q18, '22 Q41 (2m), '23 Q32, '23 Q45 (2m), '24-S1 Q13, '24-S2 Q14, '24-S2 Q49 (2m), '25-S1 Q25, '25-S2 Q32, '25-S2 Q49 (2m), '26-S1 Q22, '26-S1 Q36 (2m), '26-S2 Q28, '26-S2 Q34

### 💡 Digital Logic

- **Boolean algebra, K-map, minimization** — 12 Qs (19 marks): '24-S1 Q47 (2m), '24-S2 Q30, '24-S2 Q50 (2m), '25-S1 Q24, '25-S1 Q42 (2m), '25-S2 Q31, '25-S2 Q43 (2m), '25-S2 Q50 (2m), '26-S1 Q21, '26-S1 Q48 (2m), '26-S2 Q16, '26-S2 Q40 (2m)
- **Combinational (MUX, decoder, glitches)** — 6 Qs (11 marks): '22 Q40 (2m), '23 Q42 (2m), '23 Q44 (2m), '24-S1 Q28, '24-S1 Q64 (2m), '26-S2 Q59 (2m)
- **Sequential (flip-flops, counters, FSM)** — 6 Qs (10 marks): '23 Q21, '23 Q43 (2m), '25-S1 Q59 (2m), '25-S1 Q60 (2m), '25-S2 Q34, '26-S1 Q37 (2m)

### 🧠 Operating Systems

- **CPU scheduling** — 7 Qs (11 marks): '22 Q42 (2m), '23 Q27, '24-S2 Q37 (2m), '25-S1 Q38 (2m), '25-S2 Q26, '26-S1 Q64 (2m), '26-S2 Q23
- **Process, threads, fork, semaphores / sync** — 13 Qs (19 marks): '22 Q19, '23 Q22, '23 Q23, '23 Q38 (2m), '24-S1 Q24, '24-S1 Q25, '24-S1 Q40 (2m), '24-S1 Q57 (2m), '24-S2 Q25, '24-S2 Q46 (2m), '25-S1 Q29, '26-S1 Q63 (2m), '26-S2 Q51 (2m)
- **Deadlocks** — 4 Qs (5 marks): '22 Q26, '25-S2 Q48 (2m), '26-S1 Q29, '26-S1 Q35
- **Paging, virtual memory, TLB, page replacement** — 14 Qs (26 marks): '22 Q38 (2m), '22 Q64 (2m), '23 Q57 (2m), '23 Q58 (2m), '24-S1 Q62 (2m), '24-S2 Q24, '24-S2 Q64 (2m), '25-S1 Q14, '25-S1 Q54 (2m), '25-S2 Q47 (2m), '25-S2 Q58 (2m), '26-S1 Q54 (2m), '26-S2 Q54 (2m), '26-S2 Q55 (2m)
- **File systems & disk** — 6 Qs (12 marks): '22 Q63 (2m), '24-S1 Q54 (2m), '24-S2 Q53 (2m), '25-S1 Q51 (2m), '26-S1 Q59 (2m), '26-S2 Q53 (2m)

### 🗄️ DBMS

- **ER model & DBMS basics** — 4 Qs (4 marks): '23 Q16, '24-S1 Q20, '24-S2 Q20, '26-S2 Q15
- **Relational algebra / calculus / SQL** — 9 Qs (16 marks): '22 Q25, '22 Q56 (2m), '23 Q61 (2m), '24-S1 Q35, '24-S2 Q45 (2m), '25-S1 Q39 (2m), '25-S1 Q55 (2m), '25-S2 Q54 (2m), '26-S1 Q43 (2m)
- **FDs & normalization** — 11 Qs (17 marks): '22 Q14, '22 Q31, '24-S1 Q22, '24-S1 Q44 (2m), '24-S2 Q56 (2m), '25-S1 Q47 (2m), '25-S2 Q46 (2m), '26-S1 Q30, '26-S1 Q31, '26-S1 Q65 (2m), '26-S2 Q42 (2m)
- **Transactions, ACID, serializability, 2PL** — 8 Qs (11 marks): '22 Q39 (2m), '24-S1 Q46 (2m), '24-S2 Q19, '24-S2 Q27, '25-S1 Q15, '25-S2 Q27, '25-S2 Q53 (2m), '26-S2 Q20
- **Indexing, B+ tree, file organization** — 6 Qs (9 marks): '23 Q62 (2m), '24-S1 Q21, '24-S2 Q26, '25-S1 Q21, '25-S2 Q57 (2m), '26-S2 Q46 (2m)

### 🌐 Computer Networks

- **TCP / HTTP / DNS / layers (app & transport)** — 12 Qs (13 marks): '22 Q35, '23 Q52 (2m), '24-S1 Q16, '24-S1 Q29, '24-S2 Q23, '25-S1 Q16, '25-S1 Q22, '25-S2 Q16, '25-S2 Q18, '26-S1 Q18, '26-S1 Q19, '26-S2 Q22
- **IP addressing, CIDR, subnetting, fragmentation, NAT** — 14 Qs (22 marks): '22 Q22, '22 Q55 (2m), '23 Q65 (2m), '24-S1 Q31, '24-S1 Q58 (2m), '24-S1 Q65 (2m), '24-S2 Q28, '24-S2 Q32, '24-S2 Q38 (2m), '25-S1 Q40 (2m), '25-S1 Q57 (2m), '25-S2 Q23, '26-S1 Q56 (2m), '26-S2 Q33
- **Link performance: sliding window, delay, seq-no bits** — 9 Qs (16 marks): '22 Q59 (2m), '22 Q60 (2m), '23 Q17, '23 Q50 (2m), '24-S1 Q36 (2m), '25-S2 Q36 (2m), '26-S1 Q45 (2m), '26-S2 Q21, '26-S2 Q65 (2m)
- **TCP congestion control** — 3 Qs (6 marks): '24-S2 Q54 (2m), '26-S1 Q44 (2m), '26-S2 Q58 (2m)
- **Routing (distance vector, link state, OSPF)** — 3 Qs (4 marks): '22 Q57 (2m), '23 Q25, '25-S2 Q17
- **Data link (CRC, Ethernet)** — 2 Qs (4 marks): '24-S2 Q55 (2m), '26-S2 Q43 (2m)

### 📊 Algorithms

- **Asymptotics & recurrences (time complexity)** — 12 Qs (15 marks): '22 Q11, '23 Q29, '23 Q54 (2m), '24-S1 Q17, '24-S1 Q42 (2m), '24-S2 Q15, '25-S1 Q20, '25-S2 Q20, '26-S1 Q17, '26-S2 Q24, '26-S2 Q25, '26-S2 Q38 (2m)
- **Sorting & searching** — 3 Qs (4 marks): '25-S1 Q33, '25-S2 Q41 (2m), '26-S2 Q32
- **Graph algos (BFS / DFS / MST / shortest path)** — 15 Qs (28 marks): '22 Q49 (2m), '23 Q56 (2m), '24-S1 Q45 (2m), '24-S1 Q60 (2m), '24-S2 Q59 (2m), '25-S1 Q18, '25-S1 Q43 (2m), '25-S1 Q64 (2m), '25-S2 Q29, '25-S2 Q37 (2m), '25-S2 Q59 (2m), '26-S1 Q41 (2m), '26-S1 Q49 (2m), '26-S1 Q50 (2m), '26-S2 Q37 (2m)
- **DP & greedy** — 2 Qs (3 marks): '24-S2 Q35, '26-S2 Q39 (2m)

### 🌳 Data Structures

- **Stack & queue** — 5 Qs (10 marks): '22 Q62 (2m), '23 Q59 (2m), '24-S2 Q48 (2m), '25-S2 Q45 (2m), '26-S2 Q50 (2m)
- **Linked lists** — 4 Qs (6 marks): '22 Q15, '23 Q13, '25-S1 Q62 (2m), '26-S1 Q39 (2m)
- **Trees, BST, heaps** — 17 Qs (25 marks): '22 Q28, '23 Q12, '23 Q46 (2m), '24-S1 Q41 (2m), '24-S1 Q43 (2m), '24-S2 Q39 (2m), '25-S1 Q26, '25-S1 Q35, '25-S2 Q13, '25-S2 Q35, '25-S2 Q38 (2m), '26-S1 Q23, '26-S1 Q33, '26-S1 Q40 (2m), '26-S1 Q62 (2m), '26-S2 Q12, '26-S2 Q49 (2m)
- **Hashing** — 5 Qs (6 marks): '22 Q16, '23 Q20, '25-S1 Q65 (2m), '26-S1 Q24, '26-S2 Q30

### 💻 Programming (C)

- **C output tracing, pointers, recursion, fork-free code** — 25 Qs (38 marks): '22 Q21, '22 Q43 (2m), '22 Q44 (2m), '23 Q35, '23 Q47 (2m), '24-S1 Q18, '24-S1 Q19, '24-S1 Q33, '24-S1 Q48 (2m), '24-S2 Q13, '24-S2 Q33, '24-S2 Q36 (2m), '24-S2 Q42 (2m), '25-S1 Q34, '25-S1 Q61 (2m), '25-S1 Q63 (2m), '25-S2 Q19, '25-S2 Q33, '25-S2 Q62 (2m), '25-S2 Q63 (2m), '26-S1 Q34, '26-S1 Q61 (2m), '26-S2 Q19, '26-S2 Q60 (2m), '26-S2 Q61 (2m)

---

## 10. 🛣️ Roadmap + 📋 tracker + 🐞 error log

### 🛣️ 3-phase plan

| Phase | 🎯 Focus | 📝 Kaam |
|---|---|---|
| **1** 🔴 | Tier S (16 topics, ~47 marks) | Concept revise → us topic ke saare PYQs (Section 9) topic-wise ek saath solve. |
| **2** 🟠 | Tier A (15 topics, ~24 marks) | Same method; template library (Section 6) se logic yaad. |
| **3** 🟡🟢 | Tier B/C + full mocks | Timed 3-hour papers; error log se weak topics dobara. |

### ✅ Daily/weekly rules

- 📅 Ek din = ek topic ke **10–15 PYQs** (year-wise nahi, topic-wise).
- 🧪 Solve karne ke baad **logic ek line me likho** (template library jaisa).
- 🔁 Har 7 din me purane topics ke 5 random PYQs dobara.
- ⏱️ Full 3-hour timed paper tab shuru karo jab Tier S + A ka ek round complete ho.

### 📋 Progress tracker (Tier S pre-filled)

| Topic | PYQ bank | Concept done | PYQs solved | Accuracy | Revised 2× | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| S · C output tracing, pointers, recursion, fork-free code | 25 | ⬜ | 0/25 | – | ⬜ | |
| S · Graph algos (BFS / DFS / MST / shortest path) | 15 | ⬜ | 0/15 | – | ⬜ | |
| S · Graph theory (coloring, matching, cover, cycles) | 15 | ⬜ | 0/15 | – | ⬜ | |
| S · Paging, virtual memory, TLB, page replacement | 14 | ⬜ | 0/14 | – | ⬜ | |
| S · Regular langs: DFA/NFA, regex, min-DFA | 15 | ⬜ | 0/15 | – | ⬜ | |
| S · Trees, BST, heaps | 17 | ⬜ | 0/17 | – | ⬜ | |
| S · Linear algebra (eigen, det, rank, LU, systems) | 17 | ⬜ | 0/17 | – | ⬜ | |
| S · Probability & statistics | 15 | ⬜ | 0/15 | – | ⬜ | |
| S · Cache (tag/index bits, AMAT, hit-miss, WB/WT) | 13 | ⬜ | 0/13 | – | ⬜ | |
| S · CFG, PDA, ambiguity, CFL properties | 13 | ⬜ | 0/13 | – | ⬜ | |
| S · IP addressing, CIDR, subnetting, fragmentation, NAT | 14 | ⬜ | 0/14 | – | ⬜ | |
| S · Number repr (2's comp, IEEE-754, overflow) | 14 | ⬜ | 0/14 | – | ⬜ | |
| S · Boolean algebra, K-map, minimization | 12 | ⬜ | 0/12 | – | ⬜ | |
| S · Process, threads, fork, semaphores / sync | 13 | ⬜ | 0/13 | – | ⬜ | |
| S · Parsing (LL / LR / SLR, FIRST-FOLLOW) | 11 | ⬜ | 0/11 | – | ⬜ | |
| S · Pipelining, hazards, CPU performance | 11 | ⬜ | 0/11 | – | ⬜ | |
| A · FDs & normalization | 11 | ⬜ | 0/11 | – | ⬜ | |
| A · Relational algebra / calculus / SQL | 9 | ⬜ | 0/9 | – | ⬜ | |
| A · Link performance: sliding window, delay, seq-no bits | 9 | ⬜ | 0/9 | – | ⬜ | |
| A · Asymptotics & recurrences (time complexity) | 12 | ⬜ | 0/12 | – | ⬜ | |
| A · Instruction format, addressing modes, datapath | 9 | ⬜ | 0/9 | – | ⬜ | |
| A · Calculus (limits, continuity, integrals, maxima) | 11 | ⬜ | 0/11 | – | ⬜ | |
| A · TCP / HTTP / DNS / layers (app & transport) | 12 | ⬜ | 0/12 | – | ⬜ | |
| A · File systems & disk | 6 | ⬜ | 0/6 | – | ⬜ | |
| A · Code optimization (basic blocks, liveness, CSE) | 6 | ⬜ | 0/6 | – | ⬜ | |
| A · CPU scheduling | 7 | ⬜ | 0/7 | – | ⬜ | |
| A · Transactions, ACID, serializability, 2PL | 8 | ⬜ | 0/8 | – | ⬜ | |
| A · Sets, relations, functions, posets, lattices | 7 | ⬜ | 0/7 | – | ⬜ | |
| A · Decidability, TM & language-class closure | 8 | ⬜ | 0/8 | – | ⬜ | |
| A · Syntax-directed definitions / translation (.val) | 6 | ⬜ | 0/6 | – | ⬜ | |
| A · Stack & queue | 5 | ⬜ | 0/5 | – | ⬜ | |

### 🐞 Error log template

| Date | Paper & Q | Topic | Galti ka type | Sahi logic (1 line) | Dobara try ✅ |
|---|---|---|---|---|:---:|
| | | | 🧠 Concept gap / 🧮 Calculation / ⏱️ Time pressure / 👀 Misread / 🎲 Guess | | ⬜ |
| | | | | | ⬜ |
| | | | | | ⬜ |

---

## 🏁 Final takeaways

1. 🔴 **Tier S topics pakke karo** — ye ~47 marks ka core hai.
2. 🔁 PYQ ko **topic-wise** solve karo; template library se logic pakdo.
3. 💻 C output tracing + 🧠 Graph algos + 🌐 IP/forwarding + 🧮 Cache/Pipelining = sabse reliable scoring zone.
4. 🐞 Error log maintain karo — 52→54 se aage jaane ka sabse sasta tareeka.
5. 🎯 GA pe time mat lagao; technical 85 marks pe focus.

_Made from GATE CS/IT papers 2022–2026 (8 papers, 520 questions tagged)._ 🚀