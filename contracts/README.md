# Smart Contracts

This directory is reserved for optional Soroban contracts if EduPay later needs on-chain fee locking or programmable settlement rules.

## Current Scope

The MVP does not require smart contracts. The core functionality — transparent payment tracking, balance aggregation, and auto-clearance — is handled by:

1. **Stellar's native payment operations** (XLM and USDC transfers)
2. **Horizon API event streaming** (real-time payment detection)
3. **Backend reconciliation logic** (balance calculation and clearance status)

## Potential Future Use Cases

If the product evolves to require more complex on-chain logic, Soroban contracts could enable:

- **Fee locking**: Lock term fees in escrow until clearance conditions are met
- **Multi-party settlement**: Automatic distribution of fees to multiple school accounts
- **Conditional refunds**: Programmable refund logic for withdrawn students
- **Payment schedules**: On-chain enforcement of installment deadlines

## Why Not Smart Contracts Now?

The problem EduPay solves is **transparency**, not **trustlessness**. Parents and schools already have a relationship — they just need a shared source of truth for payment records.

Stellar's immutable transaction history provides that transparency without requiring complex smart contract logic. The backend can aggregate payments, calculate balances, and update clearance status off-chain while still maintaining full auditability through on-chain payment records.

**The blockchain is the backend. The value is the transparency.**

---

*Part of the [Drips Wave Program](https://drips.network/wave/stellar) on Stellar*

