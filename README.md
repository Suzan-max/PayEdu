# EduPay

EduPay is a transparent school fee payment platform built for the Stellar Wave Program on Drips. It helps schools and parents share a single source of truth for installment-based fee payments, using Stellar to provide low-cost transfers, fast confirmation, and an auditable payment history.

The repository is now scaffolded as a frontend-first MVP. The immediate goal is to ship a polished landing page and establish the project structure for upcoming school, parent, backend, and Stellar integration work.

## Project Overview

- Parents can pay school fees in flexible installments instead of one large upfront payment.
- Schools get a live record of how much has been paid per student and what remains outstanding.
- Stellar provides the transaction rail for USDC or XLM payments, while EduPay handles the app experience, student mapping, and reporting.

## Repository Structure

```text
.
|-- architecture.md
|-- backend/
|   |-- README.md
|   `-- src/
|       |-- routes/
|       `-- stellar/
|-- contracts/
|   `-- README.md
|-- docs/
|   `-- setup.md
`-- frontend/
    |-- public/
    |-- src/
    |   |-- components/
    |   |-- data/
    |   `-- styles/
    `-- package.json
```

## Quick Start

### Frontend

```bash
npm install
npm run dev
```

The landing page lives in `frontend/` and is ready to deploy as a static frontend.

## Current Scope

This setup focuses on:

- project structure and documentation
- a deployable React + TypeScript landing page
- architecture guidance for future backend and Stellar work

The backend API, parent portal, school dashboard, and optional Soroban contracts are documented but intentionally left as the next implementation steps.

## Source Material

The original concept brief is preserved in [`edupay-README.md`](./edupay-README.md).

