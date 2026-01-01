// Mock data for ASPM Landing Page

export const features = [
  {
    id: 1,
    title: "Unified Security Scanning",
    description: "11 integrated security scanners in one platform - SAST, SCA, DAST, Container, IaC, Secrets, Mobile, PII, API, SBOM, and CBOM scanning",
    icon: "Shield",
    highlights: [
      "Cross-Scanner Correlation",
      "Smart Deduplication",
      "Unified Visibility"
    ]
  },
  {
    id: 2,
    title: "Automated Remediation",
    description: "Automatically creates PRs with secure dependency versions across npm, PyPI, Maven, Gradle, Go, Cargo, RubyGems, NuGet, Composer",
    icon: "Wrench",
    highlights: [
      "Auto-Fix Dependencies",
      "Multi-Ecosystem Support",
      "Single PR for Multiple Scanners"
    ]
  },
  {
    id: 3,
    title: "Exposure Management",
    description: "Detects when private repos go public with auto-revert capability and real-time fork & clone monitoring",
    icon: "Eye",
    highlights: [
      "Repository Exposure Tracking",
      "Auto-Revert Capability",
      "Fork & Clone Monitoring"
    ]
  },
  {
    id: 4,
    title: "AI-Powered Security",
    description: "AI-enhanced false positive detection, natural language vulnerability queries, and smart risk prioritization",
    icon: "Brain",
    highlights: [
      "False Positive Detection",
      "Security Chatbot",
      "Smart Prioritization"
    ]
  },
  {
    id: 5,
    title: "DevOps Integration",
    description: "Deep webhook integration with GitHub & GitLab, PR security gates, Jira ticketing, and AWS EventBridge triggers",
    icon: "GitBranch",
    highlights: [
      "Native GitHub & GitLab",
      "PR Security Gates",
      "Jira & AWS Integration"
    ]
  },
  {
    id: 6,
    title: "Enterprise Ready",
    description: "Multi-tenant architecture, RBAC, license compliance, DPDPA compliance, and SBOM generation for supply chain security",
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
  { name: "GitHub", logo: "Github", color: "#181717" },
  { name: "GitLab", logo: "GitBranch", color: "#FC6D26" },
  { name: "Jira", logo: "Workflow", color: "#0052CC" },
  { name: "AWS EventBridge", logo: "Cloud", color: "#FF9900" },
  { name: "npm", logo: "Package", color: "#CB3837" },
  { name: "PyPI", logo: "Code", color: "#3776AB" },
  { name: "Maven", logo: "Box", color: "#C71A36" },
  { name: "Docker", logo: "Container", color: "#2496ED" }
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
    question: "How many security scanners are integrated?",
    answer: "We integrate 10+ security scanners including SAST, SCA, DAST, Container, IaC, Secrets, Mobile (APK/AAB/IPA), PII, API, and CBOM scanning. All findings are correlated and deduplicated in a unified dashboard."
  },
  {
    id: 2,
    question: "What programming languages and package managers are supported?",
    answer: "We support npm, PyPI, Maven, Gradle, Go, Cargo, RubyGems, NuGet, and Composer. Our auto-fix feature works across all these ecosystems to automatically remediate vulnerabilities."
  },
  {
    id: 3,
    question: "How does the auto-remediation work?",
    answer: "Our KonHeal engine automatically creates pull requests with secure dependency versions. It analyzes vulnerabilities across multiple scanners and creates a single unified PR that addresses issues from different sources."
  },
  {
    id: 4,
    question: "Can you integrate with our existing DevOps pipeline?",
    answer: "Yes! We have native integrations with GitHub, GitLab, Jira, and AWS EventBridge. Our PR security gates scan code changes before merge, and we can automatically create Jira tickets for vulnerabilities."
  },
  {
    id: 5,
    question: "What makes your AI security features different?",
    answer: "Our AI reduces false positives through intelligent analysis, provides a natural language chatbot for vulnerability queries, and automatically prioritizes risks based on your codebase context and threat landscape."
  },
  {
    id: 6,
    question: "Is this suitable for enterprise organizations?",
    answer: "Absolutely. We offer multi-tenant architecture, role-based access control (RBAC), license compliance checking, DPDPA compliance tracking, and SBOM generation for supply chain security."
  }
];

export const stats = [
  { label: "Security Scanners", value: "10+", icon: "Shield" },
  { label: "Supported Ecosystems", value: "9", icon: "Package" },
  { label: "Auto-Fix Success Rate", value: "95%", icon: "CheckCircle" },
  { label: "False Positive Reduction", value: "80%", icon: "Target" }
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
