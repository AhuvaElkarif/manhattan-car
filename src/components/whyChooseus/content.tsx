const FinancingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4a6cf7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const DealershipIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4a6cf7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PricingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4a6cf7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4a6cf7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="8" width="20" height="8" rx="2" ry="2" />
    <circle cx="5" cy="16" r="2" />
    <circle cx="19" cy="16" r="2" />
    <path d="M5 11h14" />
  </svg>
);

export const features = [
  {
    icon: <FinancingIcon />,
    title: "הצעות מימון מיוחדות",
    description:
      "מחלקת המימון ללא לחץ שלנו שיכולה למצוא פתרונות פיננסיים לחסוך לך כסף.",
  },
  {
    icon: <DealershipIcon />,
    title: "סוכנות רכב אמינה",
    description:
      "מחלקת המימון ללא לחץ שלנו שיכולה למצוא פתרונות פיננסיים לחסוך לך כסף.",
  },
  {
    icon: <PricingIcon />,
    title: "מחירים שקופים",
    description:
      "מחלקת המימון ללא לחץ שלנו שיכולה למצוא פתרונות פיננסיים לחסוך לך כסף.",
  },
  {
    icon: <ServiceIcon />,
    title: "שירות רכב מומחה",
    description:
      "מחלקת המימון ללא לחץ שלנו שיכולה למצוא פתרונות פיננסיים לחסוך לך כסף.",
  },
];
