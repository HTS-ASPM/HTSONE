// Mock data for ASPM Landing Page

export const features = [
  {
    id: 1,
    title: "Sees Everything",
    description: "Your AI engineer monitors 11 security domains - SAST, SCA, DAST, Container, IaC, Secrets, Mobile, PII, API, SBOM, and CBOM scanning",
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
  { name: "CBOM", description: "Crypto Bill of Materials" }
];

export const integrations = [
  { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/white", color: "#181717" },
  { name: "GitLab", logoUrl: "https://cdn.simpleicons.org/gitlab/white", color: "#FC6D26" },
  { name: "Azure DevOps", logoUrl: "https://cdn.simpleicons.org/azuredevops/white", color: "#0078D4" },
  { name: "Jira", logoUrl: "https://cdn.simpleicons.org/jira/white", color: "#0052CC" },
  { name: "Amazon AWS", logoUrl: "https://cdn.simpleicons.org/amazonaws/white", color: "#FF9900" }
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
    content: "Integration with our GitHub workflow was seamless. PR security gates have prevented multiple vulnerabilities from reaching production. Best ASPM solution we've evaluated.",
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

export const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    features: [
      "Up to 10 repositories",
      "5 integrated scanners",
      "Basic auto-remediation",
      "Email support"
    ]
  },
  {
    name: "Professional",
    description: "For growing organizations",
    features: [
      "Up to 100 repositories",
      "10+ integrated scanners",
      "Advanced auto-remediation",
      "Priority support",
      "Jira integration",
      "Custom SLA tracking"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large-scale security",
    features: [
      "Unlimited repositories",
      "All scanners & features",
      "Multi-tenant architecture",
      "Dedicated support",
      "RBAC & compliance",
      "Custom integrations",
      "SBOM generation"
    ]
  }
];
