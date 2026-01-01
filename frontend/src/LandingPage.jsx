import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Wrench, 
  Eye, 
  Brain, 
  GitBranch, 
  Building, 
  CheckCircle, 
  Target, 
  Package, 
  Github, 
  Workflow, 
  Cloud, 
  Container, 
  Code, 
  Box,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Zap,
  Lock,
  TrendingUp
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { features, scanners, integrations, faqs, stats, pricingTiers } from './mock';

const iconMap = {
  Shield, Wrench, Eye, Brain, GitBranch, Building, CheckCircle, Target, Package,
  Github, Workflow, Cloud, Container, Code, Box
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Custom hook for counter animation
const useCounterAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ''));
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * numericEnd));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, countRef };
};

// Counter component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const { count, countRef } = useCounterAnimation(value);
  return <span ref={countRef}>{count}{suffix}</span>;
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  // Initialize scroll animations
  useScrollAnimation();

  const handleDemoRequest = (e) => {
    e.preventDefault();
    console.log('Demo requested for:', demoEmail);
    alert(`Demo request submitted for ${demoEmail}! We'll contact you shortly.`);
    setDemoEmail('');
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_370487bb-a611-47f2-9179-b06c587317e9/artifacts/2hfezs95_Screenshot%202026-01-02%20at%2012.12.31%E2%80%AFAM.png" 
                alt="HTSOne Logo" 
                className="logo-svg"
              />
            </div>
            
            <nav className="desktop-nav">
              <a href="#features" className="nav-link">Features</a>
              <a href="#integrations" className="nav-link">Integrations</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </nav>

            <div className="header-actions">
              <Button variant="outline" className="sign-in-btn" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <a href="#features" className="mobile-nav-link">Features</a>
              <a href="#integrations" className="mobile-nav-link">Integrations</a>
              <a href="#pricing" className="mobile-nav-link">Pricing</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <Badge className="hero-badge">
              <Zap size={14} />
              <span>11 Security Scanners Unified</span>
            </Badge>
            <h1 className="hero-title">
              Unified Application Security Posture Management
            </h1>
            <p className="hero-description">
              Scan, detect, and automatically fix vulnerabilities across your entire codebase with 11 integrated security scanners in one intelligent platform.
            </p>
            <div className="hero-actions">
              <Button size="lg" className="hero-primary-btn">
                Request Demo
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="hero-secondary-btn">
                Watch Video
              </Button>
            </div>
            {/* Stats moved to dedicated section below */}
          </div>
          <div className="hero-image">
            <div className="image-glow-wrapper">
              <img 
                src="https://customer-assets.emergentagent.com/job_securescan-hub-1/artifacts/lvlu9sql_Dashboard%20%5BMain%20Dashboard%5D.jpg" 
                alt="SecureASPM Dashboard - Security Posture Management"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - By the Numbers */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid-large">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={index} className={`stat-card-large animate-on-scroll delay-${index + 1}`}>
                  <Icon size={40} className="stat-card-icon" />
                  <div className="stat-card-value">
                    <AnimatedCounter value={stat.value} suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''} />
                  </div>
                  <div className="stat-card-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Features</Badge>
            <h2 className="section-title">Everything You Need for Complete Security</h2>
            <p className="section-description">
              Comprehensive security scanning, automated remediation, and intelligent insights in one unified platform
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={feature.id} className={`feature-card animate-on-scroll delay-${(index % 4) + 1}`}>
                  <CardHeader>
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="feature-title">{feature.title}</CardTitle>
                    <CardDescription className="feature-description">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="feature-highlights">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="highlight-item">
                          <CheckCircle size={16} className="highlight-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Scanners Section */}
      <section className="scanners-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">11 Security Scanners</Badge>
            <h2 className="section-title">Unified Visibility Across All Security Tools + SBOM</h2>
            <p className="section-description">
              Cross-scanner correlation and smart deduplication eliminate redundant findings
            </p>
          </div>

          <div className="scanners-grid-improved">
            {scanners.map((scanner, index) => (
              <div key={index} className={`scanner-card-improved animate-on-scroll delay-${(index % 5) + 1}`}>
                <Lock size={24} className="scanner-icon" />
                <div>
                  <div className="scanner-name">{scanner.name}</div>
                  <div className="scanner-description">{scanner.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Integrations Section */}
      <section id="integrations" className="integrations-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Integrations</Badge>
            <h2 className="section-title">Seamless DevOps Integration</h2>
            <p className="section-description">
              Native integration with your favorite tools and workflows
            </p>
          </div>

          <div className="integrations-grid-improved">
            {integrations.map((integration, index) => {
              const Icon = iconMap[integration.logo];
              return (
                <div key={index} className={`integration-card-improved animate-on-scroll delay-${(index % 4) + 1}`}>
                  <Icon size={36} className="integration-icon" />
                  <span className="integration-name">{integration.name}</span>
                </div>
              );
            })}
          </div>

          {/* Social Proof - Trust Indicators */}
          <div className="trust-section animate-on-scroll">
            <p className="trust-text">Trusted by security teams at fast-growing companies</p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={20} />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="trust-badge">
                <CheckCircle size={20} />
                <span>GDPR Ready</span>
              </div>
              <div className="trust-badge">
                <Lock size={20} />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Pricing</Badge>
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-description">
              Flexible pricing for teams of all sizes
            </p>
          </div>

          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`pricing-card ${tier.popular ? 'popular' : ''} animate-on-scroll delay-${index + 1}`}>
                {tier.popular && (
                  <div className="popular-badge">
                    <TrendingUp size={14} />
                    <span>Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="pricing-title">{tier.name}</CardTitle>
                  <CardDescription className="pricing-description">
                    {tier.description}
                  </CardDescription>
                  <div className="pricing-price">
                    {tier.name === 'Enterprise' ? (
                      <span className="price-custom">Custom Pricing</span>
                    ) : tier.name === 'Professional' ? (
                      <span className="price-contact">Contact Sales</span>
                    ) : (
                      <span className="price-contact">Contact Sales</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="pricing-features">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="pricing-feature-item">
                        <CheckCircle size={16} className="pricing-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="pricing-btn" variant={tier.popular ? "default" : "outline"}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-container-narrow">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">FAQ</Badge>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="faq-accordion animate-on-scroll">
            {faqs.map((faq) => (
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
            <h2 className="cta-title">Ready to Secure Your Applications?</h2>
            <p className="cta-description">
              Join hundreds of teams who trust HTSOne for comprehensive application security
            </p>
            <form onSubmit={handleDemoRequest} className="cta-form">
              <input 
                type="email" 
                placeholder="Enter your work email"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                required
                className="cta-input"
              />
              <Button type="submit" size="lg" className="cta-btn-primary">
                Get Started
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                  src="https://customer-assets.emergentagent.com/job_370487bb-a611-47f2-9179-b06c587317e9/artifacts/2hfezs95_Screenshot%202026-01-02%20at%2012.12.31%E2%80%AFAM.png" 
                  alt="HTSOne Logo" 
                  className="footer-logo-svg"
                />
              </div>
              <p className="footer-tagline">
                Unified Application Security Posture Management for modern DevOps teams
              </p>
              <p className="company-legal-name">
                A product by Horizontal Thinkers Cyber Security Private Limited
              </p>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Horizontal Thinkers Cyber Security Private Limited. All rights reserved. HTSOne is a registered trademark.
            </p>
            <div className="footer-social">
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
              <a href="#github" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
