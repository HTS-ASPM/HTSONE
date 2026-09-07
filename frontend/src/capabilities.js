// Product answers grounded in the supplied demo and available UI controls.
export const productFaqs = [
  {
    id: 1,
    question: "How does HTSOne find vulnerabilities?",
    answer:
      "HTSOne uses its own scanning engines across application security (ASPM), cloud security (CSPM), AI Security, data security (DSPM), and API Security. Investigate findings with source and asset context, use AI insights during triage, and prepare supported fixes or tickets from the platform.",
  },
  {
    id: 2,
    question: "How does AI help with triage?",
    answer:
      "AI insights add context to findings, help identify potential false positives, and provide fix recommendations. Your team can review the evidence, update finding status, and decide what needs action.",
  },
  {
    id: 3,
    question: "How do automatic fixes work?",
    answer:
      "Tinker provides configurable dependency and container autofix settings. It can prepare update pull requests for review. Individual findings also expose available autofix and ticket actions; support depends on the finding and configured workflow.",
  },
  {
    id: 4,
    question: "Which package ecosystems are supported?",
    answer:
      "The dependency workflow covers npm, PyPI, Maven, Gradle, Go, Cargo, RubyGems, NuGet, and Composer. Tinker includes settings for severity, version strategy, and handling transitive dependencies.",
  },
  {
    id: 5,
    question: "Can I connect my existing development workflow?",
    answer:
      "HTSOne includes GitHub and GitLab connections, pull request security gates, Jira ticketing, and AWS EventBridge integration. Configure the integrations and policies your team needs.",
  },
  {
    id: 6,
    question: "What happens when a private repository becomes public?",
    answer:
      "Exposure Management tracks visibility events alongside fork and clone activity. Auto-revert can be configured for eligible repositories, with exceptions and review controls. Repository provider restrictions still apply, including restrictions on making public forks private.",
  },
];
