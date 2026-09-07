import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Code2,
  Cloud,
  Sparkles,
  Database,
  Braces,
  GitPullRequest,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./NativePlatform.css";
import PillarVisual from "./PillarVisuals";
import SecurityLandscape from "./SecurityLandscape";

const icons = [Code2, Cloud, Sparkles, Database, Braces];
const shortNames = ["Applications", "Cloud", "AI", "Data", "APIs"];

const flowContent = [
  {
    group: "APPLICATION ASSETS",
    engine: "Application scanning",
    inputs: [
      "Source code",
      "Dependencies",
      "Containers",
      "Infrastructure as code",
      "Mobile applications",
    ],
    outputs: [
      "Security findings",
      "AI-assisted triage",
      "Fix proposals",
      "PR security gates",
      "Application posture",
    ],
  },
  {
    group: "CLOUD ENVIRONMENT",
    engine: "Cloud scanning",
    inputs: [
      "Cloud resources",
      "IAM & permissions",
      "Kubernetes",
      "Network configuration",
      "Storage configuration",
    ],
    outputs: [
      "Misconfigurations",
      "Exposure context",
      "Attack paths",
      "Compliance posture",
      "Investigation evidence",
    ],
  },
  {
    group: "YOUR AI ESTATE",
    engine: "AI discovery & posture",
    inputs: ["Source code", "Cloud", "Runtime", "Data", "Agents & MCP"],
    outputs: [
      "AI asset inventory",
      "Asset provenance",
      "Exposure context",
      "AI bill of materials",
      "Governance review",
    ],
  },
  {
    group: "YOUR DATA LANDSCAPE",
    engine: "Data discovery & posture",
    inputs: [
      "Data stores",
      "Repository data",
      "Schemas",
      "Access settings",
      "Encryption posture",
    ],
    outputs: [
      "Data classification",
      "Sensitive locations",
      "Exposure context",
      "Data flows",
      "Framework mappings",
    ],
  },
  {
    group: "OBSERVED API ACTIVITY",
    engine: "API discovery & analysis",
    inputs: [
      "API traffic",
      "Requests",
      "Responses",
      "Endpoints",
      "Runtime context",
    ],
    outputs: [
      "API inventory",
      "Sensitive data",
      "Risky endpoints",
      "Security findings",
      "Transport context",
    ],
  },
];
const platformFlow = {
  group: "YOUR ENVIRONMENT",
  engine: "Native security engines",
  inputs: [
    "Applications",
    "Cloud infrastructure",
    "AI models & agents",
    "Data stores",
    "APIs",
  ],
  outputs: [
    "Discover security risks",
    "Investigate with AI",
    "Review proposed fixes",
    "Apply security gates",
    "Understand your posture",
  ],
};

function MovingFlow({ area = -1, active = true }) {
  const content = area < 0 ? platformFlow : flowContent[area];
  const flowLines = (mobile) => {
    const left = content.inputs.map((_, i) =>
      mobile
        ? `M 116 ${89 + i * 51} C 116 387, 210 342, 210 394`
        : `M 292 ${112 + i * 67} C 358 ${112 + i * 67}, 363 246, 420 246`,
    );
    const right = content.outputs.map((_, i) =>
      mobile
        ? `M 210 468 C 210 510, 306 496, 306 ${550 + i * 51}`
        : `M 640 246 C 694 246, 709 ${112 + i * 67}, 764 ${112 + i * 67}`,
    );
    return [...left, ...right].map((d, i) => (
      <g key={i}>
        <path d={d} className="flow-route" />
        {active && (
          <circle
            r={mobile ? 3 : 3.5}
            className={`flow-particle ${i < 5 ? "particle-in" : "particle-out"}`}
          >
            <animateMotion
              dur={`${3.5 + (i % 5) * 0.35}s`}
              begin={`${-(i % 5) * 0.7}s`}
              repeatCount="indefinite"
              path={d}
            />
          </circle>
        )}
      </g>
    ));
  };
  return (
    <figure
      className="moving-flow"
      aria-label={`${content.engine}: illustrated flow from assets to security context`}
    >
      <div className="flow-toolbar">
        <span>
          <span className="flow-toolbar-dot" />{" "}
          {area < 0 ? "THE HTSONE SECURITY FLOW" : content.engine.toUpperCase()}
        </span>
      </div>
      <svg
        className="flow-wide"
        viewBox="0 0 1060 480"
        role="img"
        aria-label={`HTSOne ${content.engine}. Inputs: ${content.inputs.join(", ")}. Outputs: ${content.outputs.join(", ")}.`}
      >
        <rect
          x="16"
          y="25"
          width="329"
          height="423"
          rx="24"
          className="flow-zone input-zone"
        />
        <rect
          x="715"
          y="25"
          width="329"
          height="423"
          rx="24"
          className="flow-zone output-zone"
        />
        <circle cx="45" cy="54" r="4" fill="#9a78db" />
        <text x="59" y="58" className="flow-group-name input-name">
          {content.group}
        </text>
        <circle cx="744" cy="54" r="4" fill="#68b79e" />
        <text x="758" y="58" className="flow-group-name output-name">
          CONTEXT TO ACT
        </text>
        {flowLines(false)}
        {content.inputs.map((label, i) => (
          <g key={label}>
            <rect
              x="49"
              y={88 + i * 67}
              width="243"
              height="48"
              rx="14"
              className="flow-leaf input-leaf"
            />
            <circle cx="69" cy={112 + i * 67} r="3" fill="#b19adf" />
            <text x="87" y={117 + i * 67} className="flow-leaf-text input-name">
              {label}
            </text>
          </g>
        ))}
        {content.outputs.map((label, i) => (
          <g key={label}>
            <rect
              x="764"
              y={88 + i * 67}
              width="247"
              height="48"
              rx="14"
              className="flow-leaf output-leaf"
            />
            <circle cx="784" cy={112 + i * 67} r="3" fill="#88c6b0" />
            <text
              x="802"
              y={117 + i * 67}
              className="flow-leaf-text output-name"
            >
              {label}
            </text>
          </g>
        ))}
        <circle cx="530" cy="246" r="108" className="flow-halo" />
        <circle cx="530" cy="246" r="87" className="flow-halo inner-halo" />
        <rect
          x="420"
          y="194"
          width="220"
          height="104"
          rx="19"
          className="flow-engine"
        />
        <text x="530" y="235" textAnchor="middle" className="flow-brand">
          HTSOne
        </text>
        <text x="530" y="260" textAnchor="middle" className="flow-engine-label">
          {content.engine}
        </text>
        <text x="530" y="280" textAnchor="middle" className="flow-engine-note">
          BUILT IN
        </text>
        <text x="530" y="408" textAnchor="middle" className="flow-footnote">
          Find risk. Understand it. Take the next step.
        </text>
      </svg>
      <svg
        className="flow-narrow"
        viewBox="0 0 420 850"
        role="img"
        aria-label={`HTSOne ${content.engine}: assets connect to native scanning and security context.`}
      >
        <rect
          x="17"
          y="17"
          width="254"
          height="332"
          rx="22"
          className="flow-zone input-zone"
        />
        <rect
          x="150"
          y="500"
          width="254"
          height="332"
          rx="22"
          className="flow-zone output-zone"
        />
        <text x="35" y="45" className="flow-group-name input-name">
          {content.group}
        </text>
        <text x="172" y="527" className="flow-group-name output-name">
          CONTEXT TO ACT
        </text>
        {flowLines(true)}
        {content.inputs.map((label, i) => (
          <g key={label}>
            <rect
              x="35"
              y={66 + i * 51}
              width="216"
              height="43"
              rx="12"
              className="flow-leaf input-leaf"
            />
            <text x="49" y={93 + i * 51} className="flow-leaf-text input-name">
              {label}
            </text>
          </g>
        ))}
        {content.outputs.map((label, i) => (
          <g key={label}>
            <rect
              x="168"
              y={545 + i * 51}
              width="218"
              height="43"
              rx="12"
              className="flow-leaf output-leaf"
            />
            <text
              x="182"
              y={572 + i * 51}
              className="flow-leaf-text output-name"
            >
              {label}
            </text>
          </g>
        ))}
        <circle cx="210" cy="429" r="73" className="flow-halo" />
        <rect
          x="96"
          y="384"
          width="228"
          height="91"
          rx="17"
          className="flow-engine"
        />
        <text x="210" y="421" textAnchor="middle" className="flow-brand">
          HTSOne
        </text>
        <text x="210" y="447" textAnchor="middle" className="flow-engine-label">
          {content.engine}
        </text>
        <text x="210" y="464" textAnchor="middle" className="flow-engine-note">
          BUILT IN
        </text>
      </svg>
      <figcaption>
        <span>Illustrated capability flow</span>
        <span>Discovery · Evidence · Action</span>
      </figcaption>
    </figure>
  );
}

export function NativeHeroVisual() {
  return (
    <div className="native-hero-visual">
      <div className="hero-domain-rail" aria-label="Five security areas">
        {shortNames.map((name, index) => {
          const Icon = icons[index];
          return (
            <a key={name} href={`#${productAreas[index].id}`}>
              <Icon size={17} strokeWidth={1.7} />
              {name}
            </a>
          );
        })}
        <span className="domain-rail-note">Native scanners. One platform.</span>
      </div>
      <SecurityLandscape />
      <div className="hero-stage-footer">
        <span>
          <ShieldCheck size={14} />
          Built-in detection
        </span>
        <span>
          <Sparkles size={14} />
          AI-assisted investigation
        </span>
        <span>
          <GitPullRequest size={14} />
          Reviewable fixes
        </span>
      </div>
    </div>
  );
}

const productAreas = [
  {
    id: "application-security",
    name: "Application Security",
    category: "ASPM",
    description:
      "Bring native scanning, application posture, and AI-assisted triage into one place. Review coverage, investigate prioritized findings, and move supported fixes into your development workflow.",
    benefits: [
      "See application risks, scan coverage, and priority actions.",
      "Review AI insights and prepare supported fixes or tickets.",
    ],
    technical:
      "Application Security Posture Management (ASPM) with built-in code, dependency, secrets, container, infrastructure, dynamic application, and mobile scanning. Includes SAST, SCA, DAST, SBOM, CryptoBOM, correlation, AI-assisted triage, and configurable dependency/container update proposals. Repository exposure tracking and eligible auto-revert are also available.",
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    category: "CSPM",
    description:
      "Review the posture of your cloud assets, investigate misconfigurations, and explore connected attack paths. Bring IAM, Kubernetes, and compliance context into your investigation.",
    benefits: [
      "Understand asset exposure and the findings behind it.",
      "Review identity permissions, attack paths, and compliance posture.",
    ],
    technical:
      "Cloud Security Posture Management (CSPM): cloud asset inventory, misconfigurations, IAM analysis, Kubernetes security, compliance posture, and attack path analysis. Coverage depends on your connected accounts and available scan data.",
  },
  {
    id: "ai-security",
    name: "AI Security",
    category: "AI-SPM",
    description:
      "Track AI security posture and changes across discovered components. Explore AI inventory, agents, and MCP, with discovery coverage and an AI bill of materials to support your review.",
    benefits: [
      "Review AI posture, changes, and discovery coverage.",
      "Investigate AI components, agents, MCP, and AI-BOM.",
    ],
    technical:
      "AI Security Posture Management (AI-SPM), AI inventory, risk overview, discovery coverage, agents and MCP visibility, and AI-BOM. Inventory and posture reflect the discovery data available to HTSOne.",
  },
  {
    id: "data-security",
    name: "Data Security",
    category: "DSPM",
    description:
      "Discover data stores and review how sensitive data is classified. Connect classification evidence with public access, encryption, and scan coverage to see where investigation is needed.",
    benefits: [
      "Review sensitive, public, and unencrypted data-store findings.",
      "Inspect classification evidence, data flows, and framework mappings.",
    ],
    technical:
      "Data Security Posture Management (DSPM) includes cloud data-store inventory, sensitivity classification, public/encryption posture, schema evidence and scan coverage. Repository data classification adds sensitive data locations, flows, risks, and framework mappings. Evidence and supported scanning depth vary by data source and permissions.",
  },
  {
    id: "api-security",
    name: "API Security",
    category: "API SECURITY",
    description:
      "Discover APIs from observed traffic and investigate endpoint risk with request, response, and sensitive-data context. Review inventory, runtime relationships, and security findings in a dedicated workspace.",
    benefits: [
      "Explore endpoint inventory, traffic, and runtime relationships.",
      "Prioritize endpoint findings with exposure and data context.",
    ],
    technical:
      "API inventory/catalog, traffic and events, runtime map, risky endpoints, misconfigurations, and security assessment findings. Runtime visibility reflects observed traffic in the selected time window.",
  },
];

const featureTitles = [
  "Make the next change a secure one.",
  "Get to the evidence behind the exposure.",
  "Bring your AI estate into view.",
  "Connect sensitive data to its exposure.",
  "See the risk in a real request.",
];
const featureEyebrows = [
  "FIND IT. UNDERSTAND IT. FIX IT.",
  "EXPOSURE WITH CONTEXT",
  "VISIBILITY BEYOND THE MODEL",
  "SENSITIVITY MEETS EXPOSURE",
  "FROM TRAFFIC TO FINDINGS",
];
const featureCaptions = [
  "From application assets to a reviewable next step.",
  "The finding. The exposure. The evidence.",
  "See where an AI component was discovered.",
  "Follow the questions that matter.",
  "Understand what an endpoint puts at risk.",
];

export default function NativePlatform() {
  const [active, setActive] = useState(() => {
    const index = productAreas.findIndex(
      (area) => `#${area.id}` === window.location.hash,
    );
    return index < 0 ? 1 : index;
  });
  const tabRefs = useRef([]);
  const featureSection = useRef(null);
  useEffect(() => {
    const followHash = () => {
      const index = productAreas.findIndex(
        (area) => `#${area.id}` === window.location.hash,
      );
      if (index >= 0) {
        setActive(index);
        featureSection.current?.scrollIntoView({ block: "start" });
      }
    };
    followHash();
    window.addEventListener("hashchange", followHash);
    return () => window.removeEventListener("hashchange", followHash);
  }, []);
  const select = (index) => {
    setActive(index);
    window.history.replaceState(
      window.history.state,
      "",
      `#${productAreas[index].id}`,
    );
  };
  const onTabKey = (event, index) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % productAreas.length;
    else if (event.key === "ArrowLeft")
      next = (index + productAreas.length - 1) % productAreas.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = productAreas.length - 1;
    else return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };
  return (
    <section
      ref={featureSection}
      id="features"
      className="native-platform"
      aria-labelledby="platform-heading"
    >
      <div className="platform-heading-row">
        <div>
          <span className="native-eyebrow">
            <span /> THE HTSONE PLATFORM
          </span>
          <h2 id="platform-heading">
            A wider view.
            <br />
            <span>A clearer next step.</span>
          </h2>
        </div>
        <p>
          Five security disciplines. Our own scanning engines.
          <br />
          Explore the product, one meaningful detail at a time.
        </p>
      </div>
      <div className="platform-tabs" role="tablist" aria-label="Security areas">
        {productAreas.map((area, index) => {
          const Icon = icons[index];
          return (
            <button
              key={area.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${area.id}`}
              aria-selected={active === index}
              aria-controls={area.id}
              tabIndex={active === index ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => onTabKey(event, index)}
            >
              <Icon size={19} strokeWidth={1.7} />
              <span>{area.name}</span>
            </button>
          );
        })}
      </div>
      {productAreas.map((area, index) => (
        <div
          key={area.id}
          id={area.id}
          role="tabpanel"
          aria-labelledby={`tab-${area.id}`}
          hidden={active !== index}
          tabIndex={0}
          className="platform-panel"
        >
          <div className="platform-story">
            <div>
              <span className="story-eyebrow">{featureEyebrows[index]}</span>
              <h3>{featureTitles[index]}</h3>
              <p>{area.description}</p>
            </div>
            <ul>
              {area.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={15} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={`platform-proof proof-${index}`}>
            <div className="proof-heading">
              <span>{featureCaptions[index]}</span>
            </div>
            <PillarVisual area={index} active={active === index} />
            <div className="proof-bottom">
              <span>ILLUSTRATED CAPABILITY</span>
              <span>
                {index === 3
                  ? "Discover → Classify → Investigate"
                  : "Detection with the context to act"}
              </span>
            </div>
          </div>
          <details className="platform-technical">
            <summary>
              Explore {area.category} coverage <ChevronDown size={16} />
            </summary>
            <p>{area.technical}</p>
          </details>
        </div>
      ))}
      <div className="platform-principle">
        <ShieldCheck size={21} />
        <p>
          <strong>Built to find risk. Designed to help you act.</strong>
          <span>
            Native scanning, evidence, and remediation in the same platform.
          </span>
        </p>
        <a href="#integrations">
          Fits your workflow <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
