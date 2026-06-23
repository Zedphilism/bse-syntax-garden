# PROJECT.md — SECR1013 Elevator Controller System

## Context

Course: SECR1013 Digital Logic, UTM SPACE JB, Semester 2025/2026-2
Project: Mini Project — Hotel Elevator Controller System
Deadline: 28 June 2026
Submission portal: elearnppsm.utmspace.edu.my
Slide reference: `lecture_slides/SECR1013-digital-logic/` (read before making any design decisions)

This is a group digital logic design project. The deliverable is a 3-bit synchronous up/down counter for an 8-floor hotel elevator, implemented in DEEDS simulator using JK flip-flops, with a card detector, passcode circuit, and door logic gating the clock.

---

## System Overview

- 8 floors: level 0–7, encoded as 3-bit binary (000–111)
- Counter type: 3-bit synchronous up/down, saturated at both ends
- Flip-flop type: JK (not D — the project explicitly upgrades from the D FF example in slides)
- Control input X: 0 = count UP, 1 = count DOWN
- Clock: push button (not free-running clock generator, to avoid undesired transitions)
- Simulation tool: DEEDS (`.pbs` file format)

### Clock enable equation

```
CLK_EN = CLK_PUSH AND POWER AND START AND CARD AND DOOR_CLOSED AND PASS_OK AND NOT_EQUAL
```

The elevator only moves when all 7 conditions are HIGH simultaneously.

---

## Team Structure

| Member | Role | Dependency |
|--------|------|------------|
| M1 | Logic Designer | Blocks M2 — must finish first |
| M2 | DEEDS Circuit Designer | Waits on M1's Boolean expressions |
| M3 | Input Controller Designer | Can work in parallel with M2 |
| M4 | Report and Demo Lead | Collects from M1, M2, M3 |

---

## Member 1 — Logic Designer

### Responsibility
Derive all mathematical foundations. Nothing gets built until M1's Boolean expressions are ready.

### Tasks

#### 1. State diagram
- 8 states: 000, 001, 010, 011, 100, 101, 110, 111
- Input X=0: each state transitions to next higher (count up)
- Input X=1: each state transitions to next lower (count down)
- Saturated states:
  - State 111 with X=0 stays at 111 (top floor, can't go higher)
  - State 000 with X=1 stays at 000 (ground floor, can't go lower)
- Every arc must be labelled 0 or 1 (including self-loops)

#### 2. Next state + JK transition table
- 16 rows: all combinations of X (2) × Q2Q1Q0 (8)
- Columns: `X | Q2 Q1 Q0 | Q2+ Q1+ Q0+ | J2 K2 | J1 K1 | J0 K0`
- Use JK excitation table to fill J/K columns:
  ```
  Q → Q+  :  J   K
  0 → 0   :  0   X
  0 → 1   :  1   X
  1 → 0   :  X   1
  1 → 1   :  X   0
  ```
- X = don't care in excitation table; treat as 1 in K-maps to maximise groupings

#### 3. K-maps (6 total)
- Variables: X, Q2, Q1, Q0 (4-variable K-map, 4×4 grid)
- Row axis: XQ2 in Gray code order (00, 01, 11, 10)
- Column axis: Q1Q0 in Gray code order (00, 01, 11, 10)
- One K-map per flip-flop input: J2, K2, J1, K1, J0, K0
- Group 1s and Xs; maximise group sizes (1, 2, 4, 8, or 16)
- Write minimised SOP expression for each

#### 4. Verification
- Back-substitute 3+ rows from transition table into final expressions
- Confirm J and K outputs match expected values before handing to M2

### Output (hand to M2)
- State diagram image
- Complete 16-row transition table
- 6 K-map grids with groupings annotated
- 6 minimised Boolean expressions: J2, K2, J1, K1, J0, K0

---

## Member 2 — DEEDS Circuit Designer

### Responsibility
Build the main counter and comparator in DEEDS. Clock input comes from M3.

### Tasks

#### 1. 3-bit JK flip-flop counter
- Place 3 JK flip-flops: FF2 (Q2), FF1 (Q1), FF0 (Q0)
- Connect all CLK inputs to a single wire labelled `CLK_EN` (M3 will drive this)
- Add inputs: X (up/down), PRE_bar, CLR_bar
- Implement M1's 6 Boolean expressions as gate networks feeding J and K of each FF
- Add HEX display output showing current floor (Q2 Q1 Q0 → 0–7)
- Build incrementally: verify FF0 alone before adding FF1 and FF2

#### 2. 3-bit comparator
- Inputs: Q2,Q1,Q0 (counter outputs) and A2,A1,A0 (target floor toggles)
- Add HEX display for target floor
- 3 XNOR gates: `Qn XNOR An` for n=2,1,0
- 3-input AND gate: output = `EQUAL` (HIGH when current floor = target floor)
- NOT gate on EQUAL output: `NOT_EQUAL` — feed this to M3's clock enable block
- Test: set target = current → EQUAL HIGH, clock button has no effect

#### 3. Testing checklist
Run and screenshot before handoff:
- Count up 000→111 (X=0, 7 clock presses)
- Count down 111→000 (X=1, 7 clock presses)
- Mid-stop at target=100 starting from 000
- Saturation: at 111 with X=0, clock does nothing
- Saturation: at 000 with X=1, clock does nothing

### Output (hand to M3 and M4)
- DEEDS `.pbs` file with counter + comparator
- `CLK_EN` input wire clearly labelled
- `NOT_EQUAL` output wire clearly labelled
- Screenshots of 3+ test scenarios

---

## Member 3 — Input Controller Designer

### Responsibility
Design the three security/control sub-circuits and wire them into the final clock enable AND gate.

### Tasks

#### 1. Hotel card detector
- 1-bit toggle input in DEEDS labelled `CARD`
- CARD=1 means valid card tapped, CARD=0 means no card
- Optional: LED output "Card OK" for visual feedback
- Signal feeds directly into the clock enable AND gate

#### 2. Door logic
- Toggle input `DOOR_CLOSED`: must be 1 for elevator to run
- LED output `DOOR_OPEN_LED`: connect to M2's `EQUAL` signal — lights when floor is reached
- `DOOR_CLOSED` feeds into clock enable; `DOOR_OPEN_LED` is display only

#### 3. Passcode circuit (3-bit pattern detector)
- Choose a 3-bit passcode (e.g. 101) and document it
- Toggle inputs: P2, P1, P0
- For each bit that should be 1: connect directly to AND input
- For each bit that should be 0: invert through NOT gate first
- 3-input AND gate output = `PASS_OK`
- Test: correct code → PASS_OK=1; any wrong code → PASS_OK=0
- Optional: LED "Wrong code" connected to NOT(PASS_OK)

#### 4. Final clock enable integration
- Push button input `CLK_PUSH` (replaces free-running clock)
- Toggle inputs: `POWER`, `START`
- Wire all signals into final AND gate:
  ```
  CLK_EN = CLK_PUSH AND POWER AND START AND CARD AND DOOR_CLOSED AND PASS_OK AND NOT_EQUAL
  ```
- Use chained ANDs if DEEDS doesn't support 7-input AND (e.g. 4-input AND feeding a second AND)
- Connect output to `CLK_EN` wire in M2's circuit
- Test: block one input at a time and verify elevator stops

### Output (hand to M4)
- Sub-circuit diagrams for card, door, passcode
- Final integrated clock enable block
- Written note: chosen passcode value
- Screenshots of PASS_OK and DOOR signals in operation

---

## Member 4 — Report and Demo Lead

### Responsibility
Write the report, record the demo video, and handle final submission.

### Report format
- Font: Times New Roman 12pt
- Spacing: 1.5
- Structure:
  1. Title Page
  2. Dedication and Acknowledgement
  3. Table of Contents
  4. Background / Overview
  5. Problem Statement
  6. Suggested Solution — include M1's state diagram, full transition table, all 6 K-maps, all 6 Boolean expressions with explanation
  7. System Implementation — include M2 and M3 DEEDS screenshots, explain each block, include CLK_EN equation
  8. Conclusion and Reflection — achievements, weaknesses, proposed future work, individual reflections from each member
  9. References
  10. Appendices — task distribution table, group photo, full DEEDS circuit screenshot

### Demo video
- Duration: max 15 minutes
- Format: .mp4
- Content sequence:
  1. Intro: show full circuit, name each block (1 min)
  2. Count up 000→111 with narration (2 min)
  3. Count down 111→000 with narration (2 min)
  4. Mid-floor stop demo at floor 4 (1 min)
  5. Security demo: wrong passcode, no card, door open each blocking movement (2 min)
  6. Saturation demo at floor 7 and floor 0 (1 min)
  7. Summary (1 min)

### Submission checklist
- [ ] Project report (PDF or .docx)
- [ ] DEEDS source file (.pbs)
- [ ] Demo video (.mp4)
- [ ] All files uploaded to elearnppsm.utmspace.edu.my before 28 June 2026 midnight

---

## File Structure

```
SECR1013-digital-logic/
├── PROJECT.md                      ← this file
├── elevator-project-guide.html     ← interactive task guide for team
├── _Index                          ← course index (add project link after Module 8)
├── lecture_slides/                 ← reference slides (read before designing)
└── submission/
    ├── report.pdf
    ├── circuit.pbs
    └── demo.mp4
```

---

## Key Constraints

- Use JK flip-flops only (not D) — explicit project requirement
- 4-variable K-maps required (X, Q2, Q1, Q0) — explicit project requirement
- DEEDS simulator — final circuit must run in DEEDS, output `.pbs` file
- Push button clock — not a free-running clock generator
- Saturated counter — does not wrap around at 000 or 111
- Report must include all diagrams and tables, not just the final expressions

---

## Common Mistakes to Avoid

- Forgetting the saturated self-loop rows in the transition table (X=0 at 111, X=1 at 000)
- Using wrong Gray code ordering in K-maps (must be 00,01,11,10 — not 00,01,10,11)
- Not treating JK don't-cares as 1s when grouping K-map cells
- Wiring CLK directly to flip-flops instead of through the clock enable AND gate
- Running a free-running clock instead of push button (causes undesired state transitions)
- Submitting D flip-flop design instead of JK
