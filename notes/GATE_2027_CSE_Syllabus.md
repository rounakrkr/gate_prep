# 📚 GATE 2027 CSE — Official Syllabus (Detailed)

> Source: GATE 2027, organized by IIT Madras
> Paper Code: **CS** (Computer Science and Information Technology)
> Total Marks: **100** (GA: 15 + Core: 85)

---

## Section 1: General Aptitude (GA) — 15 Marks

### 1.1 Verbal Aptitude
- Basic English grammar: tenses, articles, prepositions, conjunctions, subject-verb agreement
- Parts of speech
- Vocabulary
- Reading comprehension
- Narrative sequencing

### 1.2 Quantitative Aptitude
- Numerical computation & estimation
- Data interpretation (bar graphs, pie charts, tables)
- Ratios, proportions, percentages
- Powers, exponents, logarithms
- Permutations & combinations
- Series & sequences
- Mensuration & geometry
- Elementary statistics & probability

### 1.3 Analytical Aptitude
- Logic: deduction and induction
- Analogy
- Numerical relations & reasoning

### 1.4 Spatial Aptitude
- Transformation of shapes: translation, rotation, scaling, mirroring
- Paper folding & cutting
- 2D and 3D patterns

---

## Section 2: Engineering Mathematics — ~13 Marks

### 2.1 Discrete Mathematics
- **Propositional Logic**: truth tables, tautologies, satisfiability
- **First-Order Logic**: predicates, quantifiers
- **Sets**: operations, power sets, cardinality
- **Relations**: properties (reflexive, symmetric, transitive), equivalence relations, partial orders
- **Functions**: injective, surjective, bijective, composition, inverse
- **Partial Orders & Lattices**: Hasse diagrams, LUB, GLB
- **Monoids & Groups**: definition, properties, subgroups
- **Graph Theory**: connectivity, matching, coloring, planarity, Euler/Hamilton paths
- **Combinatorics**: counting principles, recurrence relations, generating functions

### 2.2 Linear Algebra
- **Matrices**: types, operations, transpose, rank
- **Determinants**: properties, computation
- **System of Linear Equations**: consistency, solutions (Gaussian elimination)
- **Eigenvalues & Eigenvectors**: computation, properties
- **LU Decomposition**

### 2.3 Calculus
- **Limits, Continuity, Differentiability**
- **Mean Value Theorem**
- **Maxima & Minima**
- **Integration**: definite & indefinite integrals

### 2.4 Probability & Statistics
- **Random Variables**: discrete & continuous
- **Probability Distributions**: uniform, normal (Gaussian), binomial, Poisson, exponential
- **Mean, Median, Mode**
- **Standard Deviation & Variance**
- **Conditional Probability & Bayes' Theorem**

---

## Section 3: Core Computer Science — ~72 Marks

---

### 3.1 Digital Logic — ~4-7 Marks

| Topic | Subtopics |
|-------|-----------|
| **Boolean Algebra** | Laws, simplification, canonical forms (SOP, POS) |
| **Minimization** | Karnaugh Maps (K-maps), tabulation/Quine-McCluskey method |
| **Number Representations** | Binary, octal, hexadecimal, BCD, sign-magnitude, 1's complement, 2's complement |
| **Computer Arithmetic** | Fixed-point, floating-point (IEEE 754) |
| **Combinational Circuits** | MUX, DEMUX, Encoder, Decoder, Adders (half, full, ripple carry), Subtractors, Comparators |
| **Sequential Circuits** | Flip-flops (SR, JK, D, T), Latches, Counters (synchronous, asynchronous), Shift Registers, FSM design |

> **Rounak's Status**: ✅ Studied in previous sem. Quick revision needed.

---

### 3.2 Computer Organization & Architecture (COA) — ~7-10 Marks

| Topic | Subtopics |
|-------|-----------|
| **Machine Instructions** | Instruction formats, instruction types, instruction cycle |
| **Addressing Modes** | Immediate, direct, indirect, register, register indirect, indexed, base+offset |
| **ALU Design** | Integer arithmetic, floating-point arithmetic |
| **CPU Control Design** | Hardwired control, microprogrammed control |
| **Data-path Design** | Single-cycle, multi-cycle |
| **Instruction Pipelining** | Stages, hazards (data, control, structural), forwarding, stalling |
| **Memory Hierarchy** | Cache memory (direct mapped, set-associative, fully associative), replacement policies (LRU, FIFO, LFU), write policies (write-back, write-through) |
| **Main Memory** | DRAM, SRAM, interleaving |
| **Secondary Storage** | Disk scheduling (FCFS, SSTF, SCAN, C-SCAN) |
| **I/O Interface** | Programmed I/O, interrupt-driven I/O, DMA |

> **Rounak's Status**: ✅ Studied in previous sem. Revision in Phase 4 (Sprint 17-18).

---

### 3.3 Programming & Data Structures (PDS) — ~10-13 Marks 🔥

| Topic | Subtopics |
|-------|-----------|
| **C Programming** | Variables, data types, operators, control flow (if/else, switch, loops) |
| **Functions** | Parameter passing (by value, by reference), scope, recursion, tail recursion |
| **Pointers** | Pointer arithmetic, pointers to pointers, function pointers, dynamic memory allocation (malloc, calloc, free) |
| **Arrays** | 1D, 2D, row-major/column-major, string manipulation |
| **Structures & Unions** | Definition, nested structures, typedef |
| **Linked Lists** | Singly, doubly, circular; insertion, deletion, reversal |
| **Stacks** | Array & linked list implementation, applications (infix to postfix, expression evaluation, balanced parentheses) |
| **Queues** | Array & linked list implementation, circular queue, deque, priority queue |
| **Trees** | Binary trees, traversals (inorder, preorder, postorder, level-order), BST (insert, delete, search), AVL trees (rotations, balancing) |
| **Binary Heaps** | Min-heap, max-heap, heap operations, heapify, heap sort |
| **Graphs** | Representations (adjacency matrix, adjacency list), BFS, DFS |
| **Hashing** | Hash functions, collision handling (chaining, open addressing — linear probing, quadratic probing, double hashing) |

> **Rounak's Status**: ✅ Expert (archived). Revival in Phase 3 (Sprint 14).

---

### 3.4 Algorithms — ~8-10 Marks 🔥

| Topic | Subtopics |
|-------|-----------|
| **Asymptotic Analysis** | Big-O, Big-Ω, Big-Θ, worst/best/average case |
| **Recurrence Relations** | Master theorem, substitution method, recursion tree |
| **Searching** | Linear search, binary search |
| **Sorting** | Bubble, selection, insertion, merge sort, quick sort, heap sort, counting sort, radix sort — time & space complexity of each |
| **Divide & Conquer** | Merge sort, quick sort, binary search, matrix multiplication (Strassen's) |
| **Greedy Algorithms** | Activity selection, fractional knapsack, Huffman coding, job sequencing |
| **Dynamic Programming** | 0/1 knapsack, LCS, LIS, matrix chain multiplication, edit distance, coin change, Floyd-Warshall |
| **Graph Algorithms** | BFS, DFS, topological sort, SCC (Kosaraju/Tarjan), Dijkstra, Bellman-Ford, Floyd-Warshall, Prim's MST, Kruskal's MST |
| **Hashing** | Hash tables, collision resolution, load factor |
| **NP-Completeness** | P, NP, NP-hard, NP-complete, polynomial-time reductions (conceptual) |

> **Rounak's Status**: 🔥 College this sem (DAA). Sprint 1, 5, 7, 10.

---

### 3.5 Theory of Computation (TOC) — ~7-9 Marks

| Topic | Subtopics |
|-------|-----------|
| **Regular Languages** | DFA, NFA, NFA→DFA conversion (subset construction), ε-NFA |
| **Regular Expressions** | Equivalence with FA, Arden's theorem |
| **Properties of Regular Languages** | Closure properties, pumping lemma, Myhill-Nerode theorem |
| **Context-Free Languages** | Context-Free Grammars (CFG), derivations, parse trees, ambiguity |
| **Pushdown Automata (PDA)** | Deterministic & non-deterministic PDA, acceptance by final state/empty stack |
| **Properties of CFL** | Closure properties, pumping lemma for CFL |
| **Turing Machines** | Definition, computation, variants (multi-tape, non-deterministic) |
| **Recursively Enumerable Sets** | RE and recursive languages, closure properties |
| **Undecidability** | Halting problem, Rice's theorem, reductions |

> **Rounak's Status**: ❌ Never studied. Learning from scratch in Phase 4-5 (Sprint 19-23).

---

### 3.6 Compiler Design (CD) — ~4-6 Marks ❌ SKIPPING

| Topic | Subtopics |
|-------|-----------|
| **Lexical Analysis** | Tokens, patterns, regular expressions, finite automata for lexing |
| **Parsing** | Top-down (recursive descent, LL(1)), Bottom-up (SLR, CLR, LALR), first & follow sets |
| **Syntax-Directed Translation** | Synthesized & inherited attributes, S-attributed and L-attributed grammars |
| **Runtime Environments** | Activation records, stack allocation, heap management |
| **Intermediate Code Generation** | Three-address code, syntax trees, DAGs |
| **Code Optimization** | Basic blocks, flow graphs (conceptual) |

> **Rounak's Status**: ❌ Never studied. **SKIPPING** — low weightage, teacher recommended skip.

---

### 3.7 Operating Systems (OS) — ~8-10 Marks 🔥

| Topic | Subtopics |
|-------|-----------|
| **Processes** | Process states, PCB, process creation (fork), process scheduling |
| **Threads** | User-level vs kernel-level threads, multithreading models |
| **Inter-Process Communication** | Shared memory, message passing, pipes |
| **CPU Scheduling** | FCFS, SJF (preemptive & non-preemptive), Priority, Round Robin, MLFQ — Gantt charts, turnaround time, waiting time, response time |
| **Concurrency & Synchronization** | Critical section, mutex, semaphores (binary & counting), monitors |
| **Classical Problems** | Producer-consumer, readers-writers, dining philosophers |
| **Deadlocks** | Conditions (mutual exclusion, hold & wait, no preemption, circular wait), detection, prevention, avoidance (Banker's algorithm), recovery |
| **Memory Management** | Contiguous allocation, paging (page table, TLB), segmentation, segmentation with paging |
| **Virtual Memory** | Demand paging, page replacement algorithms (FIFO, LRU, Optimal, Clock), thrashing, working set model, Belady's anomaly |
| **File Systems** | File operations, directory structures, allocation methods (contiguous, linked, indexed), free space management |
| **Disk Scheduling** | FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK |

> **Rounak's Status**: 🔥 College this sem (DOS). Sprint 2, 6.

---

### 3.8 Database Management Systems (DBMS) — ~7-9 Marks

| Topic | Subtopics |
|-------|-----------|
| **ER Model** | Entities, attributes, relationships, cardinality (1:1, 1:N, M:N), weak entities, ER diagram design |
| **Relational Model** | Relations, tuples, keys (candidate, primary, foreign, super key) |
| **Relational Algebra** | σ (select), π (project), × (cross product), ⋈ (join — natural, equi, theta), ∪, ∩, −, ÷ (division) |
| **Tuple Relational Calculus** | Expressions, safe queries |
| **SQL** | SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, JOINs, subqueries, aggregate functions, nested queries, views |
| **Integrity Constraints** | Domain, key, referential integrity, CHECK |
| **Normalization** | Functional dependencies, Armstrong's axioms, canonical cover, 1NF, 2NF, 3NF, BCNF, lossless join decomposition, dependency preservation |
| **File Structures** | Indexing (primary, secondary, dense, sparse), B-trees, B+ trees |
| **Transactions** | ACID properties, states, serializability (conflict, view), recoverability |
| **Concurrency Control** | Lock-based protocols (2PL — basic, strict, rigorous), timestamp ordering, deadlock handling |

> **Rounak's Status**: 🔥 College this sem (DBDW). Sprint 9, 11.

---

### 3.9 Computer Networks (CN) — ~7-9 Marks

| Topic | Subtopics |
|-------|-----------|
| **Concept of Layering** | OSI model (7 layers), TCP/IP model (4/5 layers), comparison |
| **Data Link Layer** | Framing (character count, bit stuffing, byte stuffing) |
| **Error Detection & Correction** | Parity, CRC, Hamming code, checksum |
| **Flow Control** | Stop-and-wait, sliding window (Go-Back-N, Selective Repeat) |
| **MAC Protocols** | ALOHA (pure, slotted), CSMA/CD, CSMA/CA |
| **Switching** | Circuit switching, packet switching (datagram, virtual circuit) |
| **Network Layer** | IPv4 addressing, classful & classless (CIDR), subnetting, supernetting |
| **IPv6** | Addressing basics, comparison with IPv4 |
| **Routing** | Distance vector (Bellman-Ford/RIP), link state (Dijkstra/OSPF), BGP (conceptual) |
| **Network Devices** | Hubs, switches, routers, gateways |
| **Transport Layer** | TCP vs UDP, connection management (3-way handshake), flow control (sliding window) |
| **TCP Congestion Control** | Slow start, congestion avoidance, fast retransmit, fast recovery |
| **Sockets** | Client-server model basics |
| **Application Layer** | DNS, HTTP/HTTPS, FTP, SMTP, POP3, IMAP (basic concepts) |

> **Rounak's Status**: 🔥 College this sem (CN). Sprint 3, 8.

---

## Summary — What to Prep vs What to Skip

| Subject | Marks | Status | Strategy |
|---------|-------|--------|----------|
| General Aptitude | 15 | Practice | Easy marks, just do PYQs |
| Engg. Mathematics | ~13 | Revival | Focus on Discrete Math & Probability |
| Digital Logic | 4-7 | Revival | Quick revision, K-maps + sequential |
| COA | 7-10 | Revival | Cache & pipelining = most questions |
| **PDS** | **10-13** | **Revival** | **Highest marks, revive fast** |
| **Algorithms** | **8-10** | **College** | **DAA this sem = free prep** |
| TOC | 7-9 | NEW | Learn DFA/NFA/Regex first (70% questions) |
| ~~Compiler Design~~ | ~~4-6~~ | ~~SKIP~~ | ~~Not worth it~~ |
| **OS** | **8-10** | **College** | **DOS this sem = free prep** |
| **DBMS** | **7-9** | **College** | **DBDW this sem = free prep** |
| **CN** | **7-9** | **College** | **CN this sem = free prep** |

---

*Last Updated: September 17, 2026*
*Source: GATE 2027 Official Syllabus — IIT Madras (gate2027.iitm.ac.in)*
