import React, { useState } from 'react';
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
  Star,
  Zap,
  Lock,
  TrendingUp
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { features, scanners, integrations, testimonials, faqs, stats, pricingTiers } from './mock';

const iconMap = {
  Shield, Wrench, Eye, Brain, GitBranch, Building, CheckCircle, Target, Package,
  Github, Workflow, Cloud, Container, Code, Box
};

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

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
            <div className="logo-section">
              <Shield className="logo-icon" />
              <span className="logo-text">SecureASPM</span>
            </div>
            
            <nav className="desktop-nav">
              <a href="#features" className="nav-link">Features</a>
              <a href="#integrations" className="nav-link">Integrations</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </nav>

            <div className="header-actions">
              <Button variant="outline" className="sign-in-btn">Sign In</Button>
              <Button className="demo-btn">Request Demo</Button>
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
              <span>10+ Security Scanners Unified</span>
            </Badge>
            <h1 className="hero-title">
              Unified Application Security Posture Management
            </h1>
            <p className="hero-description">
              One intelligent platform to scan, detect, and automatically fix vulnerabilities across your entire codebase. 
              SAST, SCA, DAST, Container, IaC, Secrets, and Mobile security - all in one place.
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
            <div className="hero-stats">
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div key={index} className="stat-item">
                    <Icon size={20} className="stat-icon" />
                    <div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86" 
              alt="Security Dashboard"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <Badge className="section-badge">Features</Badge>
            <h2 className="section-title">Everything You Need for Complete Security</h2>
            <p className="section-description">
              Comprehensive security scanning, automated remediation, and intelligent insights in one unified platform
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="feature-card">
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

      {/* Scanners Section */}
      <section className="scanners-section">
        <div className="section-container">
          <div className="section-header">
            <Badge className="section-badge">10+ Security Scanners</Badge>
            <h2 className="section-title">Unified Visibility Across All Security Tools</h2>
            <p className="section-description">
              Cross-scanner correlation and smart deduplication eliminate redundant findings
            </p>
          </div>

          <div className="scanners-grid">
            {scanners.map((scanner, index) => (
              <div key={index} className="scanner-card">
                <Lock size={20} className="scanner-icon" />
                <div>
                  <div className="scanner-name">{scanner.name}</div>
                  <div className="scanner-description">{scanner.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="integrations-section">
        <div className="section-container">
          <div className="section-header">
            <Badge className="section-badge">Integrations</Badge>
            <h2 className="section-title">Seamless DevOps Integration</h2>
            <p className="section-description">
              Native integration with your favorite tools and workflows
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => {
              const Icon = iconMap[integration.logo];
              return (
                <div key={index} className="integration-card">
                  <Icon size={32} className="integration-icon" />
                  <span className="integration-name">{integration.name}</span>
                </div>
              );
            })}
          </div>

          <div className="integration-image-container">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              alt="DevOps Integration"
              className="integration-img"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <Badge className="section-badge">Testimonials</Badge>
            <h2 className="section-title">Trusted by Security Teams Worldwide</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-icon" fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header">
            <Badge className="section-badge">Pricing</Badge>
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-description">
              Flexible pricing for teams of all sizes
            </p>
          </div>

          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
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
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-container-narrow">
          <div className="section-header">
            <Badge className="section-badge">FAQ</Badge>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="faq-accordion">
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
              Join hundreds of teams who trust SecureASPM for comprehensive application security
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
              <Button type="submit" size="lg" className="cta-btn">
                Request Demo
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
                <Shield size={24} />
                <span>SecureASPM</span>
              </div>
              <p className="footer-tagline">
                Unified Application Security Posture Management for modern DevOps teams
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
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#compliance">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 SecureASPM. All rights reserved.
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
