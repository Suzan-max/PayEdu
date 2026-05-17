# EduPay Architecture

## Purpose

EduPay solves a critical problem: there is no shared source of truth for school fee payments in Nigeria. Parents pay in installments through relatives, mobile transfers, or cash. Schools track this in notebooks. Records get lost. Children get sent home over payments already made.

EduPay creates a payment record that both sides see, neither side can alter, and no one has to manually maintain. The product goal is simple: every student has a transparent running balance backed by Stellar's immutable ledger.

## System Layers

### 1. Frontend

The frontend is a React + TypeScript application with two near-term surfaces:

- a parent portal for balances, recent payments, and payment prompts
- a school dashboard for roster management, fee configuration, and clearance tracking

For this setup phase, the frontend ships a landing page that introduces the product and prepares the repo for future authenticated flows.

### 2. Backend API

The backend will be a Node.js service responsible for:

- school onboarding and student roster management
- unique student code generation and parent linking
- Stellar account creation per student wallet
- listening to Horizon payment events
- syncing off-chain metadata and computed balances to PostgreSQL
- exposing REST endpoints for the frontend

### 3. Stellar Integration

Stellar isn't a design choice here — it's what makes the core idea possible.

- **Fees of ~$0.0007 per transaction** mean parents can send ₦500 installments without losing money to charges
- **3–5 second finality** gives parents instant confirmation every time they pay
- **Immutable transaction history** means neither side can alter the record — the ledger is the receipt
- **USDC on Stellar** gives schools a stable, dollar-pegged balance without naira volatility risk
- **Stellar account per student** means the payment history is tied to the student, not the app

Each student is represented by a dedicated Stellar fee wallet. Parents pay with XLM or USDC. The backend watches Horizon payment streams and reconciles each incoming transfer against student records. Clearance logic updates the student status automatically when paid amount reaches the configured term fee.

### 4. Data Layer

PostgreSQL stores application metadata that should not live on-chain:

- schools
- students
- parent link records
- fee plans
- cached payment records
- notification state

The chain remains the transaction source of truth, while PostgreSQL supports fast UI queries and admin workflows.

## Suggested Module Breakdown

```text
frontend/
  src/
    components/      Shared UI sections
    data/            Landing page and demo content
    styles/          Global theme and layout styles

backend/
  src/
    routes/          REST endpoints for schools, students, payments
    stellar/         Wallet creation, Horizon streaming, SDK helpers

contracts/
  Optional Soroban experiments for fee-locking or advanced settlement rules
```

## Request Flow

1. A school registers and creates a student roster with term fee targets.
2. EduPay creates a dedicated Stellar wallet (fee wallet) for each student.
3. A parent links to their child's profile using a unique student code.
4. The parent pays any amount, anytime — ₦500 today, ₦5,000 next week — via USDC or XLM on Stellar.
5. Horizon API streams the transaction to the backend in real time.
6. EduPay updates the running paid amount, outstanding balance, and payment history automatically.
7. When the balance reaches the term fee, the student's status auto-clears — no staff input required.
8. Both parent and school see the same live balance: total paid, amount remaining, full payment history.

**No manual reconciliation. No disputes. No child sent home over a payment that was already made.**

## MVP Boundaries

The next implementation wave should prioritize:

- Student fee wallet creation (Stellar account per student)
- Parent payment flow via Stellar SDK
- Horizon payment stream listener (real-time balance updates)
- Parent portal UI (balance + payment history)
- School admin dashboard (roster + clearance status)
- Auto-clearance logic

Post-MVP additions:
- SMS notifications via Termii/Africa's Talking
- Naira on-ramp integration (local payment gateway → USDC)
- Multi-term history and reports
- School fee receipt PDF generation

The current repo setup intentionally stops short of backend implementation so the product story, repo structure, and frontend presentation can be reviewed and deployed first.

