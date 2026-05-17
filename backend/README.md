# Backend

This folder is reserved for the EduPay Node.js API.

## Planned Responsibilities

- **School onboarding**: Registration and student roster management
- **Parent linking**: Unique student code generation and parent-to-student mapping
- **Stellar wallet creation**: Generate dedicated fee wallet (Stellar account) per student
- **Horizon payment stream handling**: Listen to Stellar's event stream for real-time payment updates
- **Balance reconciliation**: Automatically aggregate payments and update student balances
- **Auto-clearance logic**: Update student status when term fee reaches 100%
- **Notification triggers**: SMS alerts for payment confirmations and clearance status

## Tech Stack

- **Runtime**: Node.js
- **Blockchain SDK**: Stellar SDK (for account creation and Horizon API integration)
- **Database**: PostgreSQL (off-chain metadata: schools, students, parent links, fee plans)
- **API**: REST endpoints for frontend consumption

## Key Modules

```
backend/
├── src/
│   ├── stellar/
│   │   ├── accountCreation.ts    # Create student fee wallets
│   │   ├── horizonListener.ts    # Stream payment events
│   │   └── sdkHelpers.ts         # Stellar SDK utilities
│   └── routes/
│       ├── schools.ts            # School registration and management
│       ├── students.ts           # Student roster and fee configuration
│       ├── payments.ts           # Payment history and balance queries
│       └── parents.ts            # Parent linking and portal access
```

## Why Stellar

- **Fees of ~$0.0007 per transaction** — critical for ₦500 installment payments
- **3–5 second finality** — instant confirmation for parents
- **Immutable transaction history** — the ledger is the receipt
- **USDC on Stellar** — stable, dollar-pegged balance without naira volatility
- **Account model** — each student gets a dedicated Stellar account as their fee wallet

## Implementation Priority

1. Student fee wallet creation (Stellar account per student)
2. Horizon payment stream listener (real-time balance updates)
3. Parent payment flow via Stellar SDK
4. Auto-clearance logic
5. REST API for frontend integration

---

*Part of the [Drips Wave Program](https://drips.network/wave/stellar) on Stellar*

