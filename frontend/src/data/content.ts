export const stats = [
  { label: "Settlement speed", value: "3–5 sec" },
  { label: "Transaction cost", value: "~$0.0007" },
  { label: "Payment model", value: "Installments" },
];

export const features = [
  {
    title: "Student Fee Wallet",
    description:
      "Each student has a dedicated Stellar account. All payments flow to it. The payment history is tied to the student, not the app.",
  },
  {
    title: "Partial Payments",
    description:
      "Parents send any amount at any time — ₦500 today, ₦5,000 next week. Every transaction is recorded on-chain with timestamps.",
  },
  {
    title: "Live Balance Dashboard",
    description:
      "Both parent and school see the same real-time balance. No disputes possible. The ledger is the receipt.",
  },
  {
    title: "Auto-Clearance",
    description:
      "When the term fee is complete, the student's status updates automatically. No manual reconciliation needed.",
  },
  {
    title: "Why Stellar",
    description:
      "Fees of ~$0.0007 per transaction. 3–5 second finality. Immutable history. USDC stability. Only a public blockchain makes the record truly neutral.",
  },
  {
    title: "Full Payment History",
    description:
      "Timestamped record of every payment, visible to both parties forever. Seven payments across a term = seven on-chain receipts, automatically aggregated.",
  },
];

export const steps = [
  "School registers and creates a student roster with term fee targets.",
  "Parent links to their child's profile with a unique student code.",
  "Parent pays any amount, anytime — ₦500 today, ₦5,000 next week — via USDC or XLM on Stellar.",
  "Horizon API streams the transaction. School dashboard updates in real time.",
  "Balance reaches term fee? Student status auto-clears. No staff input required.",
];

export const pillars = [
  {
    title: "For parents",
    body: "You've paid ₦45,000 of ₦75,000 this term. See exactly how much has been paid, how much is left, and when the latest payment landed. No disputes.",
  },
  {
    title: "For schools",
    body: "38 of 120 students are fully cleared. Replace bursar notebooks and scattered WhatsApp alerts with a single transparent payment ledger per student.",
  },
  {
    title: "For students",
    body: "No child should be sent home over a payment that was already made. Fewer payment disputes means fewer days sitting at home while adults argue.",
  },
];
