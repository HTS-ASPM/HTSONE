import { BRAND_LOGO_URL } from "@/lib/brand";
import {
  Code2,
  Cloud,
  Database,
  Globe2,
  GitPullRequest,
  ShieldCheck,
  Sparkles,
  Braces,
  KeyRound,
  Server,
  Cpu,
  Bot,
} from "lucide-react";
import "./PillarVisuals.css";

function Node({ x, y, title, note, icon: Icon, tone = "blue", width = 160 }) {
  return (
    <g className={`pv-node pv-${tone}`} transform={`translate(${x},${y})`}>
      <rect width={width} height="83" rx="14" />
      <Icon x={15} y={17} width={21} height={21} strokeWidth={1.5} />
      <text x="46" y="31" className="pv-label">
        {title}
      </text>
      {note && (
        <text x="16" y="61" className="pv-note">
          {note}
        </text>
      )}
    </g>
  );
}
function Wire({ d, moving, color = "violet", delay = 0 }) {
  return (
    <g className={`pv-wire pv-${color}`}>
      <path d={d} />
      {moving && (
        <circle r="4" className="flow-particle">
          <animateMotion
            path={d}
            dur="4s"
            begin={`${-delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      )}
    </g>
  );
}
function Application({ moving }) {
  return (
    <>
      <text x="40" y="45" className="pv-kicker">
        01 / DETECT
      </text>
      <text x="328" y="45" className="pv-kicker">
        02 / UNDERSTAND
      </text>
      <text x="614" y="45" className="pv-kicker">
        03 / PROPOSE
      </text>
      <rect
        x="36"
        y="80"
        width="220"
        height="248"
        rx="18"
        className="pv-code-surface"
      />
      <Code2 x="56" y="101" width="22" height="22" />
      <text x="91" y="117" className="pv-label">
        Your application
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={58 + (i % 2) * 17}
          y={153 + i * 27}
          width={[151, 117, 139, 92][i]}
          height="7"
          rx="3"
          className={`pv-code-line line-${i}`}
        />
      ))}
      <rect
        x="53"
        y="269"
        width="185"
        height="36"
        rx="8"
        className="pv-warning-fill"
      />
      <text x="68" y="292" className="pv-small">
        Hardcoded secret in source
      </text>
      <Wire d="M 257 203 L 325 203" moving={moving} />
      <circle cx="405" cy="203" r="76" className="pv-orbit" />
      <circle cx="405" cy="203" r="59" className="pv-core" />
      <svg
        x="364"
        y="155"
        width="82"
        height="96"
        viewBox="100 20 570 650"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="HTSOne logo mark"
        overflow="hidden"
      >
        <image
          href={BRAND_LOGO_URL}
          width="1525"
          height="688"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </svg>
      <text x="405" y="309" textAnchor="middle" className="pv-note">
        Native scanning + AI context
      </text>
      <Wire d="M 481 203 L 560 203" moving={moving} color="green" delay={2} />
      <Node
        x={563}
        y={94}
        width={216}
        icon={GitPullRequest}
        title="Proposed change"
        note="Review before merging"
        tone="green"
      />
      <rect
        x="563"
        y="193"
        width="216"
        height="113"
        rx="13"
        className="pv-fix-surface"
      />
      <text x="579" y="219" className="pv-diff-before">
        − hardcoded value
      </text>
      <text x="579" y="254" className="pv-diff-after">
        + environment variable
      </text>
      <text x="579" y="285" className="pv-note">
        Example remediation
      </text>
    </>
  );
}
function CloudExposure({ moving }) {
  return (
    <>
      <rect
        x="228"
        y="27"
        width="562"
        height="315"
        rx="24"
        className="pv-cloud-boundary"
      />
      <text x="251" y="53" className="pv-kicker">
        CLOUD ENVIRONMENT
      </text>
      <Wire
        d="M 193 123 C 228 123 235 123 274 123"
        moving={moving}
        color="coral"
      />
      <Wire
        d="M 354 165 C 354 244 410 274 460 274"
        moving={moving}
        color="coral"
        delay={1}
      />
      <Wire
        d="M 620 274 C 705 274 703 221 703 165"
        moving={moving}
        color="coral"
        delay={2}
      />
      <Node
        x={33}
        y={81}
        title="Internet"
        note="External access"
        icon={Globe2}
        tone="coral"
      />
      <Node
        x={274}
        y={81}
        title="Workload"
        note="Publicly reachable"
        icon={Server}
      />
      <Node
        x={460}
        y={232}
        title="IAM role"
        note="Permission context"
        icon={KeyRound}
        tone="violet"
      />
      <Node
        x={623}
        y={81}
        title="Data store"
        note="Potential exposure"
        icon={Database}
        tone="green"
      />
      <path d="M 430 124 L 620 124" className="pv-context-line" />
      <text x="511" y="111" textAnchor="middle" className="pv-note">
        Asset relationships
      </text>
      <text x="38" y="264" className="pv-path-title">
        Follow the path.
      </text>
      <text x="38" y="289" className="pv-note">
        Investigate connected exposure.
      </text>
      <circle cx="281" cy="374" r="4" fill="#cf978d" />
      <text x="295" y="378" className="pv-note">
        Illustrative exposure path — review evidence and permissions
      </text>
    </>
  );
}
function AiDiscovery({ moving }) {
  const points = [
    { x: 43, y: 55, title: "Source code", icon: Code2 },
    { x: 43, y: 254, title: "Cloud", icon: Cloud },
    { x: 625, y: 55, title: "Agents & MCP", icon: Bot },
    { x: 625, y: 254, title: "Runtime", icon: Cpu },
  ];
  return (
    <>
      <ellipse cx="412" cy="199" rx="208" ry="158" className="pv-orbit" />
      <ellipse
        cx="412"
        cy="199"
        rx="137"
        ry="106"
        className="pv-orbit orbit-dotted"
      />
      {points.map((p, i) => (
        <Wire
          key={p.title}
          d={`M ${p.x < 400 ? p.x + 160 : p.x} ${p.y + 42} Q 412 ${p.y + 42} 412 199`}
          moving={moving}
          delay={i * 0.8}
        />
      ))}
      {points.map((p) => (
        <Node key={p.title} {...p} note="Discovery context" tone="violet" />
      ))}
      <circle cx="412" cy="199" r="82" className="pv-core" />
      <Sparkles x="393" y="150" width="38" height="38" />
      <text x="412" y="215" textAnchor="middle" className="pv-core-title">
        AI inventory
      </text>
      <text x="412" y="239" textAnchor="middle" className="pv-core-note">
        Models · Agents · MCP
      </text>
      <text x="412" y="29" textAnchor="middle" className="pv-kicker">
        DISCOVER YOUR AI ESTATE
      </text>
      <text x="412" y="385" textAnchor="middle" className="pv-note">
        Provenance · Exposure · AI-BOM · Governance review
      </text>
    </>
  );
}
function DataClassification({ moving }) {
  return (
    <>
      <text x="38" y="37" className="pv-kicker">
        DISCOVER
      </text>
      <text x="310" y="37" className="pv-kicker">
        CLASSIFY
      </text>
      <text x="607" y="37" className="pv-kicker">
        UNDERSTAND EXPOSURE
      </text>
      <path
        d="M 55 123 L 55 274 C 55 315 212 315 212 274 L 212 123"
        className="pv-database-body"
      />
      <ellipse
        cx="133.5"
        cy="123"
        rx="78.5"
        ry="23"
        className="pv-database-cap"
      />
      <path
        d="M 55 184 C 55 218 212 218 212 184 M 55 238 C 55 272 212 272 212 238"
        className="pv-database-ring"
      />
      <text x="133" y="169" textAnchor="middle" className="pv-label">
        Data sources
      </text>
      <text x="133" y="354" textAnchor="middle" className="pv-note">
        Stores · Schemas · Repositories
      </text>
      <Wire d="M 213 207 L 320 207" moving={moving} />
      <rect
        x="321"
        y="124"
        width="156"
        height="166"
        rx="25"
        className="pv-classifier"
      />
      <Database x="382" y="151" width="32" height="32" />
      <text x="399" y="218" textAnchor="middle" className="pv-label">
        Classification
      </text>
      <text x="399" y="243" textAnchor="middle" className="pv-note">
        HTSOne
      </text>
      {[91, 207, 323].map((y, i) => (
        <Wire
          key={y}
          d={`M 478 207 C 544 207 541 ${y} 604 ${y}`}
          moving={moving}
          color={i === 1 ? "violet" : "green"}
          delay={i}
        />
      ))}
      <Node
        x={604}
        y={50}
        width={183}
        title="Personal data"
        note="Locations & access"
        icon={Database}
        tone="green"
      />
      <Node
        x={604}
        y={166}
        width={183}
        title="Credentials"
        note="Sensitivity & exposure"
        icon={KeyRound}
        tone="violet"
      />
      <Node
        x={604}
        y={282}
        width={183}
        title="Financial data"
        note="Evidence & classification"
        icon={ShieldCheck}
        tone="green"
      />
    </>
  );
}
function ApiJourney({ moving }) {
  return (
    <>
      <Node
        x={35}
        y={143}
        width={156}
        title="Client"
        note="Observed API traffic"
        icon={Globe2}
      />
      <Node
        x={632}
        y={143}
        width={156}
        title="API service"
        note="Endpoint context"
        icon={Server}
        tone="green"
      />
      <Wire
        d="M 111 143 L 111 86 Q 111 69 133 69 L 687 69 Q 711 69 711 91 L 711 143"
        moving={moving}
      />
      <Wire
        d="M 711 227 L 711 313 Q 711 333 687 333 L 135 333 Q 111 333 111 309 L 111 227"
        moving={moving}
        color="coral"
        delay={2}
      />
      <rect
        x="285"
        y="48"
        width="265"
        height="40"
        rx="12"
        className="pv-request-pill"
      />
      <text x="418" y="73" textAnchor="middle" className="pv-label">
        Request → /api/v1/integrations
      </text>
      <rect
        x="289"
        y="136"
        width="257"
        height="111"
        rx="18"
        className="pv-inspection"
      />
      <Braces x="310" y="158" width="24" height="24" />
      <text x="350" y="176" className="pv-label">
        HTSOne API analysis
      </text>
      <text x="309" y="213" className="pv-note">
        Endpoint · Data · Transport
      </text>
      <path d="M 418 247 L 418 313" className="pv-context-line" />
      <rect
        x="266"
        y="312"
        width="304"
        height="42"
        rx="12"
        className="pv-response-pill"
      />
      <text x="418" y="338" textAnchor="middle" className="pv-small">
        ← Response: sensitive data over HTTP
      </text>
      <text x="418" y="389" textAnchor="middle" className="pv-note">
        Connect findings to the request that exposed them.
      </text>
    </>
  );
}
const visuals = [
  Application,
  CloudExposure,
  AiDiscovery,
  DataClassification,
  ApiJourney,
];
const labels = [
  "Application fix sequence",
  "Cloud exposure path",
  "AI discovery constellation",
  "Data classification flow",
  "API request and response journey",
];
export default function PillarVisual({ area, active }) {
  const Visual = visuals[area];
  return (
    <figure
      className={`moving-flow pillar-art pillar-art-${area}`}
      aria-label={labels[area]}
    >
      <div className="flow-toolbar">
        <span>
          <span className="flow-toolbar-dot" />
          {labels[area].toUpperCase()}
        </span>
      </div>
      <div
        className="pillar-art-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${labels[area]} diagram; scroll horizontally on small screens`}
      >
        <svg viewBox="0 0 820 410" role="img" aria-label={labels[area]}>
          <Visual moving={active} />
        </svg>
      </div>
      <figcaption>
        <span>Illustrated capability flow</span>
        <span className="pillar-scroll-hint">Scroll to explore →</span>
        <span className="pillar-desktop-note">
          Discovery · Evidence · Action
        </span>
      </figcaption>
    </figure>
  );
}
