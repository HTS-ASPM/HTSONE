import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from './components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <Shield className="logo-icon" />
              <span className="logo-text">insigHTS One</span>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')} className="back-btn">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="legal-content">
        <div className="legal-container">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: December 31, 2025</p>

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Horizontal Thinkers Private Limited ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our Application Security Posture Management (ASPM) platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Account credentials</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Technical Information</h3>
            <p>When you use our platform, we automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and error reports</li>
            </ul>

            <h3>2.3 Security Scan Data</h3>
            <p>Our platform processes:</p>
            <ul>
              <li>Repository metadata and scan results</li>
              <li>Vulnerability findings and remediation data</li>
              <li>Code analysis results (we do not store your source code)</li>
              <li>Integration data from connected services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our ASPM services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, updates, and security alerts</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage trends and preferences</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Sharing and Disclosure</h2>
            <h3>4.1 Service Providers</h3>
            <p>
              We may share your information with third-party service providers who perform services on our behalf, 
              including cloud hosting, data analytics, payment processing, and customer support.
            </p>

            <h3>4.2 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred. 
              We will notify you before your information becomes subject to a different privacy policy.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

            <h3>4.4 Protection of Rights</h3>
            <p>
              We may disclose information when we believe it is necessary to protect our rights, protect your safety 
              or the safety of others, investigate fraud, or respond to a government request.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When we no longer need your information, 
              we will securely delete or anonymize it.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@horizontalthinkers.com
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, some features of our service may not function properly without cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices 
              of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that are different from the laws of your country. 
              We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children under 18. If you become aware that a child has provided us with 
              personal information, please contact us.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="contact-info">
              <li><strong>Company:</strong> Horizontal Thinkers Private Limited</li>
              <li><strong>Email:</strong> privacy@horizontalthinkers.com</li>
              <li><strong>Address:</strong> [Your Company Address]</li>
              <li><strong>Phone:</strong> [Your Contact Number]</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>14. Compliance</h2>
            <p>
              We are committed to compliance with applicable data protection laws, including GDPR, CCPA, and other 
              relevant privacy regulations. For jurisdiction-specific rights and information, please contact our 
              privacy team.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <div className="footer-container">
          <p>© 2025 Horizontal Thinkers Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
