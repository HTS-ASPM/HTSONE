import React, { useState, useEffect } from "react";
import {
  GitBranch,
  CheckCircle,
  Github,
  Workflow,
  Cloud,
  Box,
  ArrowUpRight,
  ArrowRight,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import { integrations, pricingTiers } from "./mock";
import { productFaqs } from "./capabilities";
import NativePlatform, { NativeHeroVisual } from "./NativePlatform";
import { BRAND_LOGO_MASK } from "@/lib/brand";
import "./LandingPage.css";
import { useLocation } from "react-router-dom";
import ContactSalesDialog from "./ContactSalesDialog";
import "./LandingRefinement.css";

// The product app lives on its own origin. Auth is a top-level navigation to
// it — never an in-page XHR — so the Keycloak flow starts from
// platform.htsone.ai, the origin that owns the PKCE state and is allow-listed
// for the token exchange. /login there sends the visitor straight to Keycloak
// (rather than the platform landing page) and lands them in the app afterward.
const LOGIN_URL = "https://platform.htsone.ai/login";
const SIGNUP_URL = "https://platform.htsone.ai/signup";
const CONTACT_SALES_URL = "https://platform.htsone.ai/contact-sales";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [salesPlan, setSalesPlan] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/pricing") return;
    let cancelled = false;
    const scrollToPricing = () => {
      if (!cancelled) document.getElementById("pricing")?.scrollIntoView({ block: "start", behavior: "instant" });
    };
    const frame = requestAnimationFrame(scrollToPricing);
    // Re-align once fonts settle so a direct visit lands at the correct section.
    void document.fonts?.ready.then(scrollToPricing);
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, [location.pathname]);
  // Clean up any session expiry markers silently — no popup, just land on the page
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (sessionStorage.getItem("session_expired")) {
      sessionStorage.removeItem("session_expired");
    }
    if (urlParams.get("expired")) {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    // Use the shared brand mark without affecting the product UI.
    <div
      id="top"
      className="landing-page native-landing"
      style={{ "--brand-logo-mask": BRAND_LOGO_MASK }}
    >
      <a href="#main-content" className="landing-skip-link">
        Skip to content
      </a>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <a className="logo-section" href="#top" aria-label="HTSOne home">
              <span className="logo-svg" role="img" aria-label="HTSOne Logo" />
            </a>

            <nav className="desktop-nav" aria-label="Main navigation">
              <a href="#features" className="nav-link">
                Platform
              </a>
              <a href="#integrations" className="nav-link">
                Integrations
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </nav>

            <div className="header-actions">
              <Button variant="outline" className="sign-in-btn" asChild>
                <a href={LOGIN_URL}>Sign in</a>
              </Button>
              <Button className="get-started-btn" asChild>
                <a href={SIGNUP_URL}>
                  Get started <ArrowUpRight size={15} />
                </a>
              </Button>
              <button
                type="button"
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="landing-mobile-nav"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              id="landing-mobile-nav"
              className="mobile-menu"
              aria-label="Mobile navigation"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#features" className="mobile-nav-link">
                Platform
              </a>
              <a href="#integrations" className="mobile-nav-link">
                Integrations
              </a>
              <a href="#pricing" className="mobile-nav-link">
                Pricing
              </a>
              <a href="#faq" className="mobile-nav-link">
                FAQ
              </a>
              <a href={LOGIN_URL} className="mobile-nav-link">
                Sign in
              </a>
            </nav>
          )}
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-container">
            <div className="hero-content">
              <Badge className="hero-badge">
                <span className="status-dot" /> Security across your entire
                stack <ArrowRight size={13} />
              </Badge>
              <h1 id="hero-heading" className="hero-title">
                Find what puts
                <br />
                <span>your data at risk.</span>
              </h1>
              <p className="hero-description">
                Native security for your applications, cloud, AI, data, and
                APIs. Find the risks that matter. Move forward with evidence and
                AI-assisted fixes.
              </p>
              <div className="hero-actions">
                <Button size="lg" className="hero-primary-btn" asChild>
                  <a href={SIGNUP_URL}>
                    Get started <ArrowUpRight size={18} />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hero-secondary-btn"
                  asChild
                >
                  <a href="#features">
                    Explore the platform <ArrowRight size={17} />
                  </a>
                </Button>
              </div>
              <p className="hero-note">
                <CheckCircle size={13} /> Native security engines <span /> AI-assisted fixes
              </p>
            </div>

            <NativeHeroVisual />
          </div>
        </section>

        <NativePlatform />

        <section id="integrations" className="integrations-section">
          <div className="section-container integrations-layout">
            <div className="native-integration-list">
              <span className="native-eyebrow">DEVELOPER WORKFLOW</span>
              {integrations.map((integration, index) => {
                const Icon = [Github, GitBranch, Box, Workflow, Cloud][index];
                return (
                  <div key={integration.name}>
                    <Icon size={23} />
                    <strong>{integration.name}</strong>
                    <span>
                      {
                        [
                          "Repositories & pull requests",
                          "Repositories & pull requests",
                          "Development integration",
                          "Issue tracking",
                          "EventBridge events",
                        ][index]
                      }
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="section-header">
              <Badge className="section-badge">Fits right in</Badge>
              <h2 className="section-title">
                Take action where
                <br />
                your team works.
              </h2>
              <p className="section-description">
                Keep your tools. Skip the context switching. HTSOne brings
                security checks, actionable tickets, and fixes into your
                existing development workflow.
              </p>
              <ul className="integration-benefits">
                <li>
                  <CheckCircle size={17} /> Native GitHub and GitLab integration
                </li>
                <li>
                  <CheckCircle size={17} /> Security gates in your pull requests
                </li>
                <li>
                  <CheckCircle size={17} /> Jira ticketing and AWS EventBridge
                </li>
              </ul>
              <Button className="hero-secondary-btn" asChild>
                <a href={SIGNUP_URL}>
                  Connect your first repository <ArrowUpRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <div className="section-container">
            <div className="section-header">
              <Badge className="section-badge">Plans</Badge>
              <h2 className="section-title">
                Better security. A plan that fits.
              </h2>
              <p className="section-description max-w-screen-2xl">
                Choose the security capabilities your team needs. Contact us to
                discuss the right plan for your organization.
              </p>
            </div>

            <div className="pricing-grid">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`pricing-card ${tier.popular ? "popular" : ""}`}
                >
                  {tier.popular && (
                    <div className="popular-badge">
                      <TrendingUp size={14} />
                      <span>Recommended</span>
                    </div>
                  )}
                  <CardHeader className="pricing-header">
                    <CardTitle className="pricing-title">{tier.name}</CardTitle>
                    <CardDescription className="pricing-description text-white">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pricing-card-body">
                    <ul className="pricing-features">
                      {tier.features.map((feature, idx) => {
                        const isLead = feature.startsWith("Everything in") || feature.startsWith("Included in") || feature === "By agreement:";
                        return (
                          <li
                            key={idx}
                            className={`pricing-feature-item ${isLead ? "pricing-feature-lead" : ""}`}
                          >
                            {isLead ? (
                              <span>{feature}</span>
                            ) : (
                              <>
                                <CheckCircle
                                  size={16}
                                  className="pricing-check-icon"
                                />
                                <span>{feature}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    <Button
                      className="pricing-btn"
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => setSalesPlan(tier.name)}
                    >
                      {tier.buttonLabel ?? "Contact sales"}
                    </Button>
                    {tier.buttonNote && (
                      <p className="pricing-btn-note">{tier.buttonNote}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="pricing-scope-note">
              AI usage allowances are confirmed with your plan. Enterprise extras are available where supported and included in your agreement.
            </p>
          </div>
        </section>

        {/* Visual Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="section-container-narrow">
            <div className="section-header">
              <Badge className="section-badge">FAQ</Badge>
              <h2 className="section-title">Good questions. Clear answers.</h2>
            </div>

            <Accordion type="single" collapsible className="faq-accordion">
              {productFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="faq-question">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Find the risk. Know your next move.</h2>
              <p className="cta-description">
                Uncover risks across your applications, cloud, AI, data, and APIs.
                Investigate with context and take action with HTSOne.
              </p>
              <div className="cta-form">
                <Button size="lg" className="cta-btn-primary" asChild>
                  <a href={SIGNUP_URL}>
                    Get Started
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span
                  className="footer-logo-svg"
                  role="img"
                  aria-label="HTSOne Logo"
                />
              </div>
              <p className="footer-tagline">Security across your entire stack.</p>
              <p className="company-legal-name">
                A product by Horizontal Thinkers Private Limited
              </p>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#features">Platform</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Use</a>
                </li>
                <li>
                  <a href={CONTACT_SALES_URL} onClick={(event) => { event.preventDefault(); setSalesPlan(""); }}>Contact Sales</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Horizontal Thinkers Private Limited. All rights reserved. HTSOne is a registered
              trademark.
            </p>
          </div>
        </div>
      </footer>
      {salesPlan !== null && <ContactSalesDialog plan={salesPlan} onClose={() => setSalesPlan(null)} />}
    </div>
  );
};

export default LandingPage;
