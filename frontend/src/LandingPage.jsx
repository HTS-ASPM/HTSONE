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
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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
              <span>🤖 Meet Your New Team Member</span>
            </Badge>
            <h1 className="hero-title">
              Your AI Security Engineer
            </h1>
            <p className="hero-description">
              HTSOne works alongside your developers — scanning every commit, triaging threats, and fixing vulnerabilities automatically. Like hiring a senior security engineer who never sleeps.
            </p>
            <div className="hero-actions">
              <Button size="lg" className="hero-primary-btn" onClick={() => document.querySelector('.cta-section').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Hire HTSOne
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="hero-secondary-btn" onClick={() => document.querySelector('.cta-section').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Get Started
              </Button>
            </div>
            
            {/* Stats as inline badges */}
            <div className="hero-stats-badges">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat-badge">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-glow-wrapper">
              <img 
                src="https://customer-assets.emergentagent.com/job_securescan-hub-1/artifacts/lvlu9sql_Dashboard%20%5BMain%20Dashboard%5D.jpg" 
                alt="HTSOne AI Security Engineer Dashboard"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Capabilities</Badge>
            <h2 className="section-title">What Your AI Security Engineer Does</h2>
            <p className="section-description">
              HTSOne handles security work like a senior engineer — from scanning to fixing, so your team can focus on building
            </p>
          </div>

          {/* Bento Grid Features */}
          <div className="features-bento-grid">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              const colorClasses = ['purple', 'cyan', 'green', 'orange', 'pink', 'blue'];
              const colorClass = colorClasses[index % colorClasses.length];
              const isHero = index === 0;
              
              return (
                <div 
                  key={feature.id} 
                  className={`feature-bento-card ${colorClass} ${isHero ? 'hero-card' : ''} animate-on-scroll delay-${(index % 4) + 1}`}
                >
                  <div className="feature-bento-inner">
                    <div className={`feature-icon-wrapper ${colorClass}`}>
                      <Icon size={isHero ? 32 : 28} />
                    </div>
                    <h3 className="feature-bento-title">{feature.title}</h3>
                    <p className="feature-bento-description">{feature.description}</p>
                    <ul className="feature-bento-highlights">
                      {feature.highlights.slice(0, isHero ? 4 : 3).map((highlight, idx) => (
                        <li key={idx} className="feature-bento-item">
                          <CheckCircle size={16} className={`check-icon ${colorClass}`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`feature-glow ${colorClass}`}></div>
                  </div>
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

      {/* Scanners Section - Orbital Layout */}
      <section className="scanners-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Specializations</Badge>
            <h2 className="section-title">One Engineer. 11 Specializations.</h2>
            <p className="section-description">
              Expert-level knowledge across every security domain — from static analysis to runtime protection
            </p>
          </div>

          {/* Orbital Scanner Layout */}
          <div className="scanners-orbital-container animate-on-scroll">
            {/* Central Hub */}
            <div className="orbital-center">
              <div className="orbital-hub">
                <Shield size={36} className="orbital-hub-icon" />
                <span className="orbital-hub-text">HTSOne</span>
              </div>
              <div className="orbital-pulse"></div>
              <div className="orbital-pulse delay-1"></div>
              <div className="orbital-pulse delay-2"></div>
            </div>

            {/* Inner Orbit - 5 scanners */}
            <div className="orbital-ring inner-ring">
              {scanners.slice(0, 5).map((scanner, index) => {
                const colors = ['purple', 'cyan', 'green', 'orange', 'pink'];
                const colorClass = colors[index];
                const angle = (index * 72) - 90; // 360/5 = 72 degrees apart
                return (
                  <div 
                    key={index} 
                    className={`orbital-scanner ${colorClass}`}
                    style={{ '--angle': `${angle}deg` }}
                  >
                    <div className="orbital-connector"></div>
                    <div className={`orbital-scanner-node ${colorClass}`}>
                      <Lock size={20} />
                    </div>
                    <div className="orbital-scanner-label">
                      <span className={`orbital-scanner-name ${colorClass}`}>{scanner.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outer Orbit - 6 scanners */}
            <div className="orbital-ring outer-ring">
              {scanners.slice(5, 11).map((scanner, index) => {
                const colors = ['blue', 'purple', 'cyan', 'green', 'orange', 'pink'];
                const colorClass = colors[index];
                const angle = (index * 60) - 60; // 360/6 = 60 degrees apart
                return (
                  <div 
                    key={index + 5} 
                    className={`orbital-scanner ${colorClass}`}
                    style={{ '--angle': `${angle}deg` }}
                  >
                    <div className="orbital-connector"></div>
                    <div className={`orbital-scanner-node ${colorClass}`}>
                      <Lock size={20} />
                    </div>
                    <div className="orbital-scanner-label">
                      <span className={`orbital-scanner-name ${colorClass}`}>{scanner.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Orbit Lines */}
            <div className="orbit-line inner"></div>
            <div className="orbit-line outer"></div>
          </div>

          {/* Mobile Fallback - Simple Grid */}
          <div className="scanners-mobile-grid">
            {scanners.map((scanner, index) => {
              const colors = ['purple', 'cyan', 'green', 'orange', 'pink', 'blue'];
              const colorClass = colors[index % colors.length];
              return (
                <div key={index} className={`scanner-mobile-item ${colorClass}`}>
                  <div className={`scanner-mobile-icon ${colorClass}`}>
                    <Lock size={18} />
                  </div>
                  <span className={`scanner-mobile-name ${colorClass}`}>{scanner.name}</span>
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

      {/* Integrations Section */}
      <section id="integrations" className="integrations-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <Badge className="section-badge">Integrations</Badge>
            <h2 className="section-title">Works Where You Work</h2>
            <p className="section-description">
              HTSOne lives in your existing workflow — showing up where decisions are made
            </p>
          </div>

          {/* Infinite Marquee */}
          <div className="marquee-container">
            <div className="marquee-track">
              {/* First set of integrations */}
              {integrations.map((integration, index) => {
                return (
                  <div key={`first-${index}`} className="marquee-item" data-color={index}>
                    <div className="marquee-icon-wrapper">
                      <img 
                        src={integration.logoUrl} 
                        alt={`${integration.name} logo`}
                        className="marquee-logo"
                      />
                    </div>
                    <span className="marquee-name">{integration.name}</span>
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {integrations.map((integration, index) => {
                return (
                  <div key={`second-${index}`} className="marquee-item" data-color={index}>
                    <div className="marquee-icon-wrapper">
                      <img 
                        src={integration.logoUrl} 
                        alt={`${integration.name} logo`}
                        className="marquee-logo"
                      />
                    </div>
                    <span className="marquee-name">{integration.name}</span>
                  </div>
                );
              })}
            </div>
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
            <h2 className="section-title">Hire Your AI Security Engineer</h2>
            <p className="section-description">
              Flexible plans for teams of all sizes. No recruiting. No onboarding. No burnout.
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
            <h2 className="cta-title">Ready to Hire Your AI Security Engineer?</h2>
            <p className="cta-description">
              Join hundreds of teams who've added HTSOne to their roster. No interviews. No equity. Just results.
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
                Your AI Security Engineer
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
