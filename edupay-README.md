# EduPay 🎓

> **Transparent school fee payments on Stellar — for parents who pay in bits, and schools who need to track every kobo.**

---

## The Problem

In Nigeria and across much of Africa, school fee payment is chaotic. Parents rarely pay full term fees upfront — they send money in installments through relatives, mobile transfers, or cash drops. On the school's end, a bursar tracks this in a notebook or a basic spreadsheet. Records get lost. Parents dispute balances. Children get sent home over amounts already paid but not recorded.

There's no shared source of truth between parent and school.

EduPay fixes this with the simplest possible solution: a transparent, running payment balance — powered by Stellar — that both sides can see in real time.

---

## What It Does

EduPay is a lightweight web app where:

1. **A school registers** and creates a student roster with term fee amounts per student.
2. **A parent links** to their child's profile using a unique student code.
3. **The parent pays** any amount, anytime — ₦500 today, ₦2,000 next week — directly via USDC or XLM on Stellar.
4. **Both parent and school** see a live, on-chain balance: total paid, outstanding amount, and payment history with timestamps.
5. **When the term fee is fully paid**, the school receives an automatic notification and the student's payment status updates to "Cleared."

That's it. No NFTs. No complex escrow. No governance tokens. Just a transparent ledger replacing the bursar's notebook.

---

## Why Stellar

- **Fees are negligible** (~$0.0007 per transaction) — critical when payments are as small as ₦500.
- **Fast finality** (3–5 seconds) means parents get instant confirmation.
- **USDC on Stellar** provides a stable, naira-equivalent payment option without volatility risk.
- **Stellar's account model** maps perfectly to the student wallet concept — each student gets a dedicated Stellar account acting as their fee wallet.

---

## Core Features

| Feature | Description |
|---|---|
| Student Fee Wallet | Each student has a dedicated Stellar account. All payments flow to it. |
| Partial Payments | Parents send any amount at any time. Every transaction is recorded on-chain. |
| Live Balance Dashboard | Both parent and school see the same real-time balance — no disputes. |
| Payment History | Full timestamped history of every payment, visible to both parties. |
| Clearance Notification | Automatic status update when term fee reaches 100%. |
| School Admin Panel | Schools manage student roster, set term amounts, and view all balances in one place. |
| Parent Portal | Simple mobile-friendly view: how much paid, how much left, when to pay next. |

---

## How It Works (Technical Flow)

```
Parent → EduPay App → Stellar Payment (USDC/XLM) → Student Fee Wallet
                                                              ↓
                                               School Dashboard updates in real time
                                               (via Stellar Horizon event stream)
                                                              ↓
                                               Balance == Term Fee? → Auto-notify school
```

Each student's fee wallet is a Stellar account created by EduPay. The school is set as the primary recipient. EduPay listens to the Horizon API's payment stream and updates balances automatically — no manual reconciliation needed.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Blockchain | Stellar (Horizon API, Stellar SDK) |
| Payments | USDC on Stellar, XLM |
| Smart Contracts | Soroban (optional: for term fee locking logic) |
| Frontend | TypeScript + React |
| Backend | Node.js + Stellar SDK |
| Database | PostgreSQL (off-chain metadata: student profiles, school info) |

---

## Project Structure

```
edupay/
├── contracts/          # Optional Soroban contracts (fee lock logic)
├── frontend/           # React app — parent portal + school admin panel
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ParentPortal.tsx
│   │   │   ├── SchoolDashboard.tsx
│   │   │   └── StudentProfile.tsx
│   │   └── components/
├── backend/            # Node.js API — Stellar account management + event listening
│   ├── src/
│   │   ├── stellar/    # Horizon integration, account creation, payment watching
│   │   └── routes/     # REST API for frontend
├── docs/               # Architecture diagrams, API reference
└── README.md
```

---

## MVP Scope (Wave Sprint)

For the initial Wave contribution, the MVP focuses on:

- [ ] Stellar account creation per student (backend)
- [ ] Payment sending via Stellar SDK (parent flow)
- [ ] Horizon payment stream listener (real-time balance updates)
- [ ] Basic parent portal UI (balance + history)
- [ ] Basic school dashboard UI (student roster + balances)

Post-MVP additions (future waves):
- SMS notifications via Termii/Africa's Talking
- Naira on-ramp integration (via local payment gateway → USDC)
- Multi-term history and reports
- School fee receipt PDF generation

---

## Target Users

- **Parents** in Nigerian primary and secondary schools who pay fees in installments
- **Private schools and academies** (50–500 students) that want to eliminate bursar disputes
- **Vocational and coding bootcamps** (like Semicolon, AltSchool) with monthly payment plans

---

## Why This Matters

Nigeria has over 30 million students in primary and secondary schools. The vast majority of their parents cannot pay full term fees upfront. The current system — notebooks, WhatsApp messages, and memory — creates unnecessary conflict and puts children at risk of being turned away.

EduPay doesn't ask anyone to understand blockchain. Parents just see: *"You've paid ₦45,000 of ₦75,000 this term."* Schools just see: *"38 of 120 students are fully cleared."*

The blockchain is the backend. The value is the transparency.

---

## Contributing

This project is part of the Stellar Wave Program on Drips. Contributions are welcome — check the Issues tab for open tasks tagged `good-first-issue`, `frontend`, `backend`, and `stellar-integration`.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

*Built on [Stellar](https://stellar.org) · Part of the [Drips Wave Program](https://drips.network/wave/stellar)*
