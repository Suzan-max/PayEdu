# EduPay 🎓

**Transparent school fee payments on Stellar — because no child should be sent home over a payment that was already made.**

---

## The Problem

Every school term, the same thing happens across thousands of Nigerian households.

A parent scrapes together ₦15,000 and sends it to an aunt who passes it to the school's bursar. The bursar writes it in a notebook. Two weeks later, the parent sends another ₦10,000 — this time directly via mobile transfer. A month into term, the school sends the child home. "Your fees are not complete." The parent has receipts. The school has a different number. Nobody can agree on what was paid, when, or by whom.

The child sits at home for three days while the adults argue.

This isn't an edge case. It's the default experience for millions of families who cannot pay school fees in one lump sum — which is most families. Nigeria has over 30 million students in private primary and secondary schools. The majority of their parents pay in installments. And the system that tracks those installments is a bursar's notebook, a WhatsApp thread, or nothing at all.

**The problem isn't that people aren't paying. The problem is that there is no shared source of truth.**

---

## Why Existing Solutions Don't Work

Banks have transfer records, but they're on the parent's side only — the school can't see them. School management software exists, but it requires manual entry by staff who are already overwhelmed. WhatsApp payment confirmations get deleted. Paper receipts get lost. And none of these solutions work for the parent who sent money through three different people over six weeks.

What's missing is a payment record that both sides see, neither side can alter, and no one has to manually maintain.

---

## The Solution

EduPay is a lightweight web app that turns every school fee payment into an on-chain Stellar transaction — permanent, timestamped, and visible to both parent and school in real time.

1. A school registers and creates a student roster with term fee targets
2. A parent links to their child's profile with a unique student code
3. The parent pays any amount, anytime — ₦500 today, ₦5,000 next week — via USDC or XLM on Stellar
4. Both parent and school see the same live balance: total paid, amount remaining, full payment history
5. When the term fee is complete, the student's status updates automatically

**No manual reconciliation. No disputes. No child sent home over a payment that was already made.**

---

## Why This Only Works on Stellar

Stellar isn't a design choice here — it's what makes the core idea possible.

- **Fees of ~$0.0007 per transaction** mean parents can send ₦500 installments without losing money to charges
- **3–5 second finality** gives parents instant confirmation every time they pay
- **Immutable transaction history** means neither side can alter the record — the ledger is the receipt
- **USDC on Stellar** gives schools a stable, dollar-pegged balance without naira volatility risk
- **Stellar account per student** means the payment history is tied to the student, not the app — it outlives any software

A parent who pays school fees seven times across a term ends up with seven on-chain receipts, automatically aggregated, permanently accessible. No bank can offer this at this cost. No management software offers this transparency. Only a public blockchain makes the record truly neutral.

---

## Core Features

| Feature | Description |
|---|---|
| **Student Fee Wallet** | Each student has a dedicated Stellar account. All payments flow to it. |
| **Partial Payments** | Parents send any amount at any time. Every transaction is recorded on-chain. |
| **Live Balance Dashboard** | Both parent and school see the same real-time balance — no disputes possible. |
| **Full Payment History** | Timestamped record of every payment, visible to both parties forever. |
| **Auto-Clearance** | Student status updates automatically when term fee reaches 100%. |
| **School Admin Panel** | Manage roster, set term amounts, view all student balances at once. |
| **Parent Portal** | Simple mobile-friendly view: paid, remaining, last payment date. |

---

## How It Works

```
Parent → EduPay App → Stellar Payment (USDC/XLM) → Student Fee Wallet
                                                               ↓
                                           Horizon API streams the transaction
                                                               ↓
                                           School dashboard updates in real time
                                                               ↓
                                           Balance == Term Fee? → Auto-clear student
```

Each student's fee wallet is a Stellar account. The school is the destination. EduPay listens to Stellar's Horizon event stream and updates balances automatically — no staff input required.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Blockchain** | Stellar (Horizon API, Stellar SDK) |
| **Payments** | USDC on Stellar, XLM |
| **Smart Contracts** | Soroban (fee lock logic) |
| **Frontend** | TypeScript + React |
| **Backend** | Node.js + Stellar SDK |
| **Database** | PostgreSQL (off-chain metadata) |

---

## Project Structure

```
edupay/
├── contracts/           # Soroban contracts (fee lock logic)
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ParentPortal.tsx
│   │   │   ├── SchoolDashboard.tsx
│   │   │   └── StudentProfile.tsx
│   │   └── components/
├── backend/
│   ├── src/
│   │   ├── stellar/     # Horizon integration, account creation, payment watching
│   │   └── routes/
├── docs/
└── README.md
```

---

## Roadmap

- [x] Project concept and architecture
- [x] Landing page deployed
- [ ] Student fee wallet creation (Stellar account per student)
- [ ] Parent payment flow via Stellar SDK
- [ ] Horizon payment stream listener
- [ ] Parent portal UI
- [ ] School admin dashboard
- [ ] Auto-clearance logic
- [ ] Testnet end-to-end demo
- [ ] Naira on-ramp integration
- [ ] SMS payment notifications

---

## Quick Start

### Frontend

```bash
npm install
npm run dev
```

The landing page lives in `frontend/` and is ready to deploy as a static frontend.

### Current Scope

This setup focuses on:

- Project structure and documentation
- A deployable React + TypeScript landing page
- Architecture guidance for future backend and Stellar work

The backend API, parent portal, school dashboard, and optional Soroban contracts are documented but intentionally left as the next implementation steps.

---

## Target Users

- **Parents** in Nigerian primary and secondary schools who pay fees in installments
- **Private schools and academies** (50–500 students) that want to eliminate bursar disputes
- **Vocational and coding bootcamps** (like Semicolon, AltSchool) with monthly payment plans

---

## Why This Matters

Nigeria has over 30 million students in primary and secondary schools. The vast majority of their parents cannot pay full term fees upfront. The current system — notebooks, WhatsApp messages, and memory — creates unnecessary conflict and puts children at risk of being turned away.

EduPay doesn't ask anyone to understand blockchain. Parents just see: *"You've paid ₦45,000 of ₦75,000 this term."* Schools just see: *"38 of 120 students are fully cleared."*

**The blockchain is the backend. The value is the transparency.**

---

## Contributing

This project is part of the Stellar Wave Program on Drips. Contributions are welcome — check the Issues tab for open tasks tagged `good-first-issue`, `frontend`, `backend`, and `stellar-integration`.

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

*Built on [Stellar](https://stellar.org) · Part of the [Drips Wave Program](https://drips.network/wave/stellar)*
