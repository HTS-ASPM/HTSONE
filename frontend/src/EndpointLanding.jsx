import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Laptop,
  Lock,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { endpointCoverage } from "./endpointCoverage";
import "./EndpointLanding.css";

const views = ["Malware", "Vulnerabilities", "Fleet health"];

// The developer-endpoint area: story copy, an illustrative console (not live
// device data), a privacy line, and the agent-coverage questions.
export default function EndpointLanding() {
  const [view, setView] = useState(0);
  const [showException, setShowException] = useState(false);
  return (
    <div className="endpoint-landing">
      <div className="ep-story">
        <div className="ep-copy">
          <p className="ep-eyebrow">Developer endpoint protection</p>
          <h3>Stop malicious packages before they install.</h3>
          <p className="ep-description">
            Check known threats and inspect suspicious package contents before
            supported installs proceed. Discover malicious and vulnerable
            dependencies already on disk, with the affected device and evidence
            in one HTSOne console.
          </p>
          <ul className="ep-benefits">
            <li>
              <Check /> Protect installs across JavaScript, Python, Ruby, .NET,
              Go, Rust, Java and PHP.
            </li>
            <li>
              <Check /> Review malware separately from CVEs and available fixes.
            </li>
            <li>
              <Check /> Track device health, stale agents, and tamper signals.
            </li>
          </ul>
          <a className="ep-demo" href="https://platform.htsone.ai/contact-sales">
            Request an endpoint demo <ArrowUpRight />
          </a>
        </div>

        <figure className="ep-figure">
          <div className="ep-console">
            <div className="ep-console-head">
              <Laptop /> Endpoint Security
              <span className="ep-preview-label">Preview</span>
            </div>
            <div className="ep-views" role="group" aria-label="Console views">
              {views.map((name, index) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={view === index}
                  onClick={() => setView(index)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="ep-console-body">
              {view === 0 && (
                <div>
                  <p className="ep-eyebrow">Malicious packages · All assets</p>
                  <div className="ep-finding">
                    <ShieldCheck />
                    <div>
                      <strong>sample-package · npm</strong>
                      <small>workstation-01 · Install attempt</small>
                      <span className="ep-status">Blocked before install</span>
                    </div>
                  </div>
                  <div className="ep-finding">
                    <ShieldAlert />
                    <div>
                      <strong>sample-dependency · PyPI</strong>
                      <small>buildbox-02 · Discovered on disk</small>
                      <span className="ep-status ep-attention">
                        Found installed · Review removal
                      </span>
                    </div>
                  </div>
                  <p className="ep-note">
                    See what was prevented and what still needs attention.
                  </p>
                </div>
              )}
              {view === 1 && (
                <div>
                  <p className="ep-eyebrow">Vulnerability policy · Per language</p>
                  <table className="ep-table">
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Policy</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>sample-engine · pip</strong>
                          <small>High severity · Above threshold</small>
                        </td>
                        <td>
                          <small>Block</small>
                        </td>
                        <td>
                          <span className="ep-status">Blocked by policy</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>sample-core · Maven</strong>
                          <small>High severity · Java default</small>
                        </td>
                        <td>
                          <small>Report only</small>
                        </td>
                        <td>
                          <span className="ep-status ep-attention">Reported</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>sample-cli · npm</strong>
                          <small>Developer exception requested</small>
                        </td>
                        <td>
                          <small>Block</small>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="ep-review"
                            aria-expanded={showException}
                            onClick={() => setShowException((open) => !open)}
                          >
                            Review request
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {showException && (
                    <p className="ep-review-detail">
                      Time-limited exception requested from the terminal. Approve
                      or decline it in the console — known malware is always
                      blocked and can never be excepted.
                    </p>
                  )}
                  <p className="ep-note">
                    Your policy sets the severity threshold, blocking or
                    reporting per language.
                  </p>
                </div>
              )}
              {view === 2 && (
                <div>
                  <div className="ep-device">
                    <span className="ep-device-icon">
                      <Laptop />
                    </span>
                    <div>
                      <strong>workstation-01</strong>
                      <small>Windows 11 · Agent up to date</small>
                    </div>
                  </div>
                  <div className="ep-fleet-row">
                    <div>
                      <strong>Device health</strong>
                      <small>Reporting on schedule</small>
                    </div>
                    <span className="ep-status ep-active">Healthy</span>
                  </div>
                  <div className="ep-fleet-row">
                    <div>
                      <strong>Stale agent</strong>
                      <small>buildbox-02 · Missed check-ins</small>
                    </div>
                    <span className="ep-status ep-attention">Needs attention</span>
                  </div>
                  <div className="ep-fleet-row">
                    <div>
                      <strong>Tamper signals</strong>
                      <small>None detected across the fleet</small>
                    </div>
                    <span className="ep-status ep-active">Clear</span>
                  </div>
                  <p className="ep-note">
                    Agent updates are administrator-controlled from the console,
                    including rolling back to an earlier version.
                  </p>
                </div>
              )}
            </div>
            <div className="ep-console-foot">
              <Lock /> Local malware decisions · Fleet-wide evidence
            </div>
          </div>
          <figcaption>Illustrative product view · Not live device data</figcaption>
        </figure>
      </div>

      <div className="ep-privacy">
        <ShieldCheck />
        <p>
          Shadow AI visibility is off until an administrator turns it on, and
          prompts, responses, tool arguments and source code are never reported.
        </p>
      </div>

      <div className="ep-faq">
        <h4>
          Endpoint coverage.
          <br />
          <span>Clear answers.</span>
        </h4>
        <div>
          {endpointCoverage.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question} <ChevronDown />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
