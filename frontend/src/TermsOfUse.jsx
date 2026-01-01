import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from './components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_securescan-hub-1/artifacts/jkdrhfkn_Picture%202.png" 
                alt="HTSOne Logo" 
                className="logo-svg"
              />
              <span className="logo-text">HTSOne</span>
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
          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last Updated: December 31, 2025</p>

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Horizontal Thinkers Cyber Security Private Limited ("Company," "we," "our," or "us"). These Terms of Use 
              ("Terms") govern your access to and use of our Application Security Posture Management (ASPM) platform, 
              HTSOne™, website, and related services (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these 
              Terms, do not use our Services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Services</h2>
            <p>
              Horizontal Thinkers Cyber Security Private Limited provides a comprehensive ASPM platform under the trademark HTSOne™ that includes:
            </p>
            <ul>
              <li>Unified security scanning across multiple vulnerability detection tools</li>
              <li>Automated vulnerability remediation capabilities</li>
              <li>Repository exposure management</li>
              <li>DevOps integration with GitHub, GitLab, Jira, and AWS</li>
              <li>AI-powered security analytics and chatbot</li>
              <li>Enterprise-grade security posture management</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Account Registration and Security</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              To use our Services, you must create an account. You agree to provide accurate, current, and complete 
              information during registration and to update such information to keep it accurate, current, and complete.
            </p>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under 
              your account. You must immediately notify us of any unauthorized access or security breach.
            </p>

            <h3>3.3 Account Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant 
              that you meet this age requirement.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Acceptable Use Policy</h2>
            <h3>4.1 Permitted Use</h3>
            <p>You may use our Services only for lawful purposes and in accordance with these Terms.</p>

            <h3>4.2 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Use the Services to transmit viruses, malware, or other harmful code</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Copy, modify, or create derivative works of the Services</li>
              <li>Use the Services to scan or test systems you do not own or have authorization to test</li>
              <li>Resell or redistribute the Services without our written permission</li>
              <li>Remove or alter any proprietary notices from the Services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Our Intellectual Property</h3>
            <p>
              The Services, including all content, features, functionality, software, and technology, are owned by 
              Horizontal Thinkers Cyber Security Private Limited and are protected by copyright, trademark, patent, and other 
              intellectual property laws. HTSOne™ is a registered trademark of Horizontal Thinkers Cyber Security Private Limited.
            </p>

            <h3>5.2 Your Content</h3>
            <p>
              You retain all rights to the content you upload to our Services ("Your Content"). By uploading Your Content, 
              you grant us a limited license to access, process, and analyze Your Content solely to provide the Services 
              to you.
            </p>

            <h3>5.3 Feedback</h3>
            <p>
              If you provide feedback, suggestions, or ideas about our Services, you grant us the right to use such 
              feedback without any obligation to compensate you.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Subscription and Payment</h2>
            <h3>6.1 Subscription Plans</h3>
            <p>
              We offer various subscription plans with different features and pricing. Details of available plans 
              are provided on our website.
            </p>

            <h3>6.2 Payment Terms</h3>
            <p>
              Subscription fees are charged in advance on a recurring basis (monthly or annually). You authorize us 
              to charge your payment method for all fees due.
            </p>

            <h3>6.3 Price Changes</h3>
            <p>
              We reserve the right to modify our pricing. We will provide you with reasonable notice of any price 
              changes and the opportunity to cancel if you do not agree to the new pricing.
            </p>

            <h3>6.4 Refunds</h3>
            <p>
              Refunds are provided at our sole discretion. Generally, subscription fees are non-refundable.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Data Processing and Privacy</h2>
            <p>
              Our collection and use of personal information is described in our Privacy Policy. By using our Services, 
              you consent to our data practices as described in the Privacy Policy.
            </p>
            <h3>7.1 Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your data. However, we cannot guarantee 
              absolute security and are not responsible for unauthorized access resulting from circumstances beyond 
              our reasonable control.
            </p>

            <h3>7.2 Data Processing</h3>
            <p>
              We process scan data and vulnerability information solely to provide security analysis services. 
              We do not store your source code; we only analyze it and store the resulting security findings.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Service Level and Availability</h2>
            <p>
              While we strive to provide reliable Services, we do not guarantee that the Services will be uninterrupted, 
              timely, secure, or error-free. We may perform scheduled maintenance that may temporarily affect availability.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Integrations</h2>
            <p>
              Our Services integrate with third-party platforms such as GitHub, GitLab, Jira, and AWS. Your use of 
              these integrations is subject to the respective third-party terms and conditions. We are not responsible 
              for third-party services or their availability.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Termination</h2>
            <h3>10.1 Termination by You</h3>
            <p>
              You may terminate your account at any time by following the cancellation procedures on our platform or 
              contacting our support team.
            </p>

            <h3>10.2 Termination by Us</h3>
            <p>
              We reserve the right to suspend or terminate your access to the Services immediately, without prior notice, 
              if you breach these Terms or engage in conduct that we determine is harmful to other users, us, or third parties.
            </p>

            <h3>10.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Services will cease immediately. We may delete your account data 
              in accordance with our data retention policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Disclaimers and Limitations of Liability</h2>
            <h3>11.1 Disclaimer of Warranties</h3>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that:
            </p>
            <ul>
              <li>The Services will meet your specific requirements</li>
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>All vulnerabilities in your code will be detected</li>
            </ul>

            <h3>11.2 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HORIZONTAL THINKERS CYBER SECURITY PRIVATE LIMITED BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
              LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL 
              NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Horizontal Thinkers Cyber Security Private Limited and its officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including 
              reasonable attorneys' fees, arising out of or related to:
            </p>
            <ul>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your Content</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Governing Law and Dispute Resolution</h2>
            <h3>13.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
              its conflict of law provisions.
            </p>

            <h3>13.2 Dispute Resolution</h3>
            <p>
              Any disputes arising out of or related to these Terms or the Services shall be resolved through binding 
              arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be 
              conducted in [City, India].
            </p>

            <h3>13.3 Class Action Waiver</h3>
            <p>
              You agree to resolve disputes with us on an individual basis and waive your right to participate in any 
              class action or representative proceeding.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting 
              the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services 
              after changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Miscellaneous</h2>
            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
              Horizontal Thinkers Cyber Security Private Limited regarding the Services.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue 
              in full force and effect.
            </p>

            <h3>15.3 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right 
              or provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your account without our prior written consent. We may 
              assign these Terms without restriction.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Contact Information</h2>
            <p>If you have any questions about these Terms of Use, please contact us:</p>
            <ul className="contact-info">
              <li><strong>Company:</strong> Horizontal Thinkers Cyber Security Private Limited</li>
              <li><strong>Product:</strong> HTSOne™</li>
              <li><strong>Email:</strong> legal@horizontalthinkers.com</li>
              <li><strong>Address:</strong> [Your Company Address]</li>
              <li><strong>Phone:</strong> [Your Contact Number]</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <div className="footer-container">
          <p>© 2025 Horizontal Thinkers Cyber Security Private Limited. All rights reserved. HTSOne is a registered trademark.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
