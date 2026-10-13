// Endpoint coverage copy for the landing page. Updated 1 Oct 2026 to match
// agent 0.7.1 — the earlier approved copy described npm/pip only, no CVE
// blocking, no AI visibility and no automatic updates. Review before publishing.
export const endpointCoverage = [
  {
    "question": "Which package workflows are protected?",
    "answer": "Install-time protection covers npm, npx, yarn, pnpm, bun and Deno; pip, uv and Poetry; Ruby (gem, Bundler), .NET (NuGet), Go, Rust (cargo), Java (Maven, Gradle) and PHP (Composer). Every package is checked against known malware, your vulnerability policy and package reputation before it downloads, and unknown packages that run code at install have their contents inspected. Running code directly, piped shell installers and conda packages are outside this coverage."
  },
  {
    "question": "What about packages already on a device?",
    "answer": "A scan on install, and every six hours after, lists the dependencies of projects in JavaScript, Python, Ruby, .NET, Go, Rust, Java and PHP, plus globally installed tools. Everything is re-checked whenever new security data arrives. Malware and known vulnerabilities appear in separate views, with the device, project folder, tool and time. Installed malware is reported for removal; known-bad copies in package download caches are set aside so builds cannot reuse them."
  },
  {
    "question": "Do vulnerability findings block installation?",
    "answer": "Your policy decides. Choose a severity threshold, then block or only report per language — Java defaults to report-only. Developers blocked on a version they need can request a time-limited exception from their terminal, and administrators approve or decline it in the console. Known malware is always blocked and can never be excepted."
  },
  {
    "question": "Is Shadow AI included in this agent?",
    "answer": "Yes, when an administrator turns it on. The agent reports which AI assistants and MCP servers are configured on each device — Claude Desktop, Claude Code, Cursor and VS Code — and can observe or refuse flagged tools on chosen local servers. Prompts, responses, tool arguments and source code are never reported."
  },
  {
    "question": "Which systems can we evaluate?",
    "answer": "Request a guided evaluation. The current release is validated on Windows 11 and Ubuntu 24.04; macOS builds are available, with validation on a physical Mac and installer signing still pending. Agent updates are administrator-controlled from the console, including rolling back to an earlier version."
  }
];
