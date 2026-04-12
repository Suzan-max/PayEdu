export const stats = [
  { label: "Settlement speed", value: "3-5 sec" },
  { label: "Transaction cost", value: "~$0.0007" },
  { label: "Payment model", value: "Installments" },
];

export const features = [
  {
    title: "Per-student payment tracking",
    description:
      "Every student has a clear fee target, live running balance, and a payment record both parents and schools can trust.",
  },
  {
    title: "Shared ledger for both sides",
    description:
      "Parents and schools see the same timestamped payment history, reducing disputes and manual reconciliation.",
  },
  {
    title: "Clearance in real time",
    description:
      "Once the fee target is reached, the student can be marked cleared immediately instead of waiting on manual confirmation.",
  },
];

export const steps = [
  "School registers a roster and term fee for each student.",
  "Parent links to a student with a secure code.",
  "Payment is sent in XLM or USDC on Stellar.",
  "EduPay listens for the payment and updates the balance view.",
];

export const pillars = [
  {
    title: "For parents",
    body: "See exactly how much has been paid, how much is left, and when the latest payment landed.",
  },
  {
    title: "For schools",
    body: "Replace bursar notebooks and scattered transfer alerts with a single payment ledger per student.",
  },
  {
    title: "For students",
    body: "Fewer payment disputes means fewer situations where a child is sent home over money that was already paid.",
  },
];
