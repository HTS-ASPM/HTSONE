import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Checkbox } from './components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // TODO: Implement actual login logic
    alert('Login functionality will be implemented with backend integration.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRequestDemo = (e) => {
    e.preventDefault();
    setShowContactForm(true);
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c167b592-b19b-46df-9900-1a9d381f91c8',
          subject: 'HTSOne Demo Request from Login Page',
          from_name: contactFormData.name,
          email: contactFormData.email,
          company: contactFormData.company,
          message: contactFormData.message,
          source: 'Login Page'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Our team will contact you shortly.' });
        setContactFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      {/* Header - Same as Landing Page */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_370487bb-a611-47f2-9179-b06c587317e9/artifacts/2hfezs95_Screenshot%202026-01-02%20at%2012.12.31%E2%80%AFAM.png" 
                alt="HTSOne Logo" 
                className="logo-svg"
              />
            </div>
            
            <div className="header-actions">
              <Button variant="outline" className="sign-in-btn" onClick={() => navigate('/')}>
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Content */}
      <div className="login-content">
        <div className="login-container">
          {/* Left Side - Branding */}
          <div className="login-branding">
            <div className="branding-content">
              <h1 className="branding-title">Welcome to HTSOne</h1>
              <p className="branding-description">
                Your AI Security Engineer that works 24/7, trusted by enterprise security teams worldwide.
              </p>
              <div className="branding-features">
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>11 Security Specializations</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>Fixes While You Sleep</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>Thinks Like a Senior Engineer</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>Scales With You</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="login-form-wrapper">
            <Card className="login-card">
              <CardHeader>
                <CardTitle className="login-card-title">Sign In</CardTitle>
                <CardDescription className="login-card-description">
                  Access your security dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <Label htmlFor="email" className="form-label">
                      Email Address
                    </Label>
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="password" className="form-label">
                      Password
                    </Label>
                    <div className="input-wrapper">
                      <Lock size={18} className="input-icon" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-options">
                    <div className="remember-me">
                      <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, rememberMe: checked }))
                        }
                      />
                      <Label htmlFor="rememberMe" className="remember-label">
                        Remember me
                      </Label>
                    </div>
                    <a href="#forgot-password" className="forgot-password">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="login-button">
                    Sign In
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="login-footer">
                <p className="footer-text">
                  Don't have an account?{' '}
                  <a href="/#pricing" className="signup-link">
                    Request Demo
                  </a>
                </p>
              </CardFooter>
            </Card>

            {/* Additional Info */}
            <div className="login-info">
              <p className="info-text">
                By signing in, you agree to our{' '}
                <a href="/terms" className="info-link">Terms of Use</a> and{' '}
                <a href="/privacy" className="info-link">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
