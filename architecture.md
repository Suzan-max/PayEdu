# EduPay Architecture

## Purpose

EduPay gives schools and parents a shared payment record for installment-based school fees. The product goal is simple: every student has a transparent running balance that both parties can trust.

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

Stellar is the payment rail and ledger source of truth for transfers.

- Each student is represented by a dedicated fee wallet.
- Parents pay with XLM or USDC on Stellar.
- The backend watches Horizon payment streams and reconciles each incoming transfer against student records.
- Clearance logic updates the student status when paid amount reaches or exceeds the configured term fee.

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

1. A school creates a profile and registers students with term fee amounts.
2. EduPay creates or assigns a Stellar wallet for each student.
3. A parent links to a student using a secure student code.
4. The parent initiates a payment in XLM or USDC.
5. The backend confirms the payment through Stellar Horizon events.
6. EduPay updates the running paid amount, outstanding balance, and payment history.
7. If the student reaches the fee target, the school sees the student as cleared and can trigger follow-up notifications.

## MVP Boundaries

The next implementation wave should prioritize:

- student wallet creation
- payment collection flow
- Horizon event ingestion
- parent balance view
- school roster dashboard

The current repo setup intentionally stops short of backend implementation so the product story, repo structure, and frontend presentation can be reviewed and deployed first.

