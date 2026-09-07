// Mock data for HTSOne - Your AI Security Engineer

export const features = [
  {
    id: 1,
    title: "Sees Everything",
    description: "Your AI engineer monitors 11 security domains - SAST, SCA, DAST, Container, IaC, Secrets, Mobile, PII, API, SBOM, and CryptoBOM scanning",
    icon: "Shield",
    highlights: [
      "Cross-Scanner Correlation",
      "Smart Deduplication",
      "Unified Visibility"
    ]
  },
  {
    id: 2,
    title: "Fixes While You Sleep",
    description: "HTSOne automatically creates PRs with secure dependency versions across npm, PyPI, Maven, Gradle, Go, Cargo, RubyGems, NuGet, Composer",
    icon: "Wrench",
    highlights: [
      "Auto-Fix Dependencies",
      "Multi-Ecosystem Support",
      "Single PR for Multiple Scanners"
    ]
  },
  {
    id: 3,
    title: "Guards Your Blind Spots",
    description: "It watches for when private repos go public with auto-revert capability and real-time fork & clone monitoring",
    icon: "Eye",
    highlights: [
      "Repository Exposure Tracking",
      "Auto-Revert Capability",
      "Fork & Clone Monitoring"
    ]
  },
  {
    id: 4,
    title: "Thinks Like a Senior Engineer",
    description: "HTSOne uses AI to detect false positives, answer vulnerability queries in natural language, and prioritize risks intelligently",
    icon: "Brain",
    highlights: [
      "False Positive Detection",
      "Security Chatbot",
      "Smart Prioritization"
    ]
  },
  {
    id: 5,
    title: "Joins Your Workflow",
    description: "Your AI engineer integrates with GitHub & GitLab, sets up PR security gates, handles Jira ticketing, and triggers AWS EventBridge",
    icon: "GitBranch",
    highlights: [
      "Native GitHub & GitLab",
      "PR Security Gates",
      "Jira & AWS Integration"
    ]
  },
  {
    id: 6,
    title: "Scales With You",
    description: "HTSOne handles multi-tenant architecture, RBAC, license compliance, DPDPA compliance, and SBOM generation as you grow",
    icon: "Building",
    highlights: [
      "Multi-Tenant Architecture",
      "Role-Based Access Control",
      "SBOM Generation"
    ]
  }
];

export const scanners = [
  { name: "SAST", description: "Static Application Security Testing" },
  { name: "SCA", description: "Software Composition Analysis" },
  { name: "DAST", description: "Dynamic Application Security Testing" },
  { name: "Container", description: "Container Security Scanning" },
  { name: "IaC", description: "Infrastructure as Code" },
  { name: "Secrets", description: "Secret Detection" },
  { name: "Mobile", description: "APK/AAB/IPA Analysis" },
  { name: "PII", description: "Personal Data Detection" },
  { name: "API", description: "API Security Testing" },
  { name: "SBOM", description: "Software Bill of Materials" },
  { name: "CryptoBOM", description: "Cryptography Bill of Materials" }
];

export const integrations = [
  { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/white", color: "#181717" },
  { name: "GitLab", logoUrl: "https://cdn.simpleicons.org/gitlab/white", color: "#FC6D26" },
  { name: "Azure DevOps", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg", color: "#0078D4" },
  { name: "Jira", logoUrl: "https://cdn.simpleicons.org/jira/white", color: "#0052CC" },
  { name: "AWS", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", color: "#FF9900" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Head of Security, TechCorp",
    company: "TechCorp",
    content: "The unified dashboard saved us countless hours. We went from managing 8 different security tools to one comprehensive platform. The auto-fix feature alone reduced our remediation time by 70%.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "DevOps Lead, CloudScale",
    company: "CloudScale",
    content: "Integration with our GitHub workflow was seamless. PR security gates have prevented multiple vulnerabilities from reaching production. HTSOne is the best AI Security Engineer we've evaluated.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "CISO, FinSecure",
    company: "FinSecure",
    content: "The AI-powered prioritization is a game-changer. Our team now focuses on real threats instead of chasing false positives. The security posture score gives our board clear visibility.",
    rating: 5
  }
];

export const faqs = [
  {
    id: 1,
    question: "Is this actually like having a security engineer?",
    answer: "Yes. HTSOne handles what a security engineer would: reviewing code, researching fixes, opening PRs, prioritizing risks. The difference? It works 24/7 across all repos simultaneously."
  },
  {
    id: 2,
    question: "Will this replace my security team?",
    answer: "No — it amplifies them. HTSOne handles repetitive work so your engineers focus on strategy. Think of it as giving your team superpowers."
  },
  {
    id: 3,
    question: "How is this different from other security tools?",
    answer: "Most tools generate reports. HTSOne takes action — it opens PRs with fixes, not just alerts. It's the difference between a dashboard and a team member."
  },
  {
    id: 4,
    question: "What programming languages and package managers are supported?",
    answer: "HTSOne works with npm, PyPI, Maven, Gradle, Go, Cargo, RubyGems, NuGet, and Composer. It fixes vulnerabilities across all these ecosystems automatically."
  },
  {
    id: 5,
    question: "Can it integrate with our existing DevOps pipeline?",
    answer: "Yes! HTSOne joins your workflow with native integrations for GitHub, GitLab, Jira, and AWS EventBridge. It sets up PR security gates and handles ticketing automatically."
  },
  {
    id: 6,
    question: "Is this suitable for enterprise organizations?",
    answer: "Absolutely. HTSOne scales with you — handling multi-tenant architecture, role-based access control (RBAC), license compliance, DPDPA compliance, and SBOM generation."
  }
];

export const stats = [
  { label: "Security Specializations", value: "11", icon: "Shield" },
  { label: "Works With Your Stack", value: "9", icon: "Package" },
  { label: "Fixes Autonomously", value: "95%", icon: "CheckCircle" },
  { label: "Less Noise", value: "80%", icon: "Target" }
];

/**
 * @typedef {Object} PricingTier
 * @property {string}  name
 * @property {string}  description
 * @property {boolean} [popular]
 * @property {{annual: string, monthly: string}} [price]       Price shown per billing period.
 * @property {{annual: string, monthly: string}} [priceSuffix] Suffix after the amount, e.g. "/mo".
 * @property {{annual: string, monthly: string}} [priceNote]   Small note under the price (e.g. "free forever").
 * @property {string}  [seats]      Seat count phrase, e.g. "2 members" — rendered bold.
 * @property {string}  [seatNote]   Extra text after "included ·", e.g. "₹1,000/mo per extra seat".
 * @property {string}  [seatTail]   Overrides the text after the bold seat count (default "included [· seatNote]").
 * @property {string}  [buttonLabel]
 * @property {string}  [buttonNote]
 * @property {string[]} features
 */

/** @type {PricingTier[]} */
export const pricingTiers = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: { annual: "₹0", monthly: "₹0" },
    priceNote: { annual: "free forever", monthly: "free forever" },
    seats: "2 members",
    buttonLabel: "Start free",
    buttonNote: "Free forever · no credit card",
    features: [
      "3 repositories",
      "All code scanners — SAST, SCA, Secrets, IaC, Container",
      "Cloud Security (CSPM) — 1 account",
      "AI auto-fix — 10 fixes / month",
      "3 PR checks & 3 rescans / day",
      "Email support"
    ]
  },
  {
    name: "Basic",
    description: "For small teams",
    price: { annual: "₹14,080", monthly: "₹16,000" },
    priceSuffix: { annual: "/mo", monthly: "/mo" },
    priceNote: { annual: "billed annually (₹1,68,960/yr)", monthly: "billed monthly" },
    seats: "10 members",
    seatNote: "₹1,000/mo per extra seat",
    buttonLabel: "Try free for 14 days",
    buttonNote: "No credit card · downgrades to Free",
    features: [
      "Everything in Free, plus:",
      "100 repositories",
      "AI auto-fix — 100 fixes / month",
      "Unlimited PR checks · 25 rescans / day",
      "Kubernetes security scanning",
      "Exposure Management",
      "Build-break CI gates",
      "3 cloud accounts"
    ]
  },
  {
    name: "Pro",
    description: "For growing organizations",
    popular: true,
    price: { annual: "₹39,600", monthly: "₹45,000" },
    priceSuffix: { annual: "/mo", monthly: "/mo" },
    priceNote: { annual: "billed annually (₹4,75,200/yr)", monthly: "billed monthly" },
    seats: "10 members",
    seatNote: "₹1,500/mo per extra seat",
    buttonLabel: "Try free for 14 days",
    buttonNote: "No credit card · downgrades to Free",
    features: [
      "Everything in Basic, plus:",
      "200 repositories",
      "Unlimited AI auto-fixes",
      "Advanced K8s & IAM posture — RBAC, policies",
      "AI Security monitoring (AI-SPM)",
      "AI Assistant",
      "Mobile app security",
      "Jira integration",
      "SBOM generation",
      "10 cloud accounts"
    ]
  },
  {
    name: "Advanced",
    description: "For organizations with advanced security needs",
    price: { annual: "₹83,600", monthly: "₹95,000" },
    priceSuffix: { annual: "/mo", monthly: "/mo" },
    priceNote: { annual: "billed annually (₹10,03,200/yr)", monthly: "billed monthly" },
    seats: "10 members",
    seatNote: "₹2,000/mo per extra seat",
    buttonLabel: "Try free for 14 days",
    buttonNote: "No credit card · downgrades to Free",
    features: [
      "Everything in Pro, plus:",
      "API Security (runtime API observability)",
      "Data Security (DSPM)",
      "500 repositories",
      "20 cloud accounts"
    ]
  },
  {
    name: "Enterprise",
    description: "For large-scale security",
    price: { annual: "Custom", monthly: "Custom" },
    priceNote: { annual: "tailored contract", monthly: "tailored contract" },
    seats: "Unlimited members",
    seatTail: "— flat rate, known upfront",
    buttonLabel: "Contact sales",
    buttonNote: "Guided proof of concept available",
    features: [
      "Everything in Advanced, plus:",
      "Unlimited repositories & cloud accounts",
      "Multi-tenant architecture",
      "RBAC, SSO (SAML) & audit logs",
      "99.9% uptime SLA",
      "On-prem scanning & India data residency",
      "Dedicated support & custom integrations"
    ]
  }
];
