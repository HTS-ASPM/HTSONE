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

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="login-header-container">
          <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_securescan-hub-1/artifacts/jkdrhfkn_Picture%202.png" 
              alt="HTSOne Logo" 
              className="logo-svg"
            />
            <span className="logo-text">HTSOne</span>
          </div>
          <Button variant="ghost" onClick={() => navigate('/')} className="back-to-home">
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Login Content */}
      <div className="login-content">
        <div className="login-container">
          {/* Left Side - Branding */}
          <div className="login-branding">
            <div className="branding-content">
              <Shield size={64} className="branding-icon" />
              <h1 className="branding-title">Welcome to HTSOne</h1>
              <p className="branding-description">
                Unified Application Security Posture Management platform trusted by enterprise security teams worldwide.
              </p>
              <div className="branding-features">
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>11 Security Scanners</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>Automated Remediation</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>AI-Powered Security</span>
                </div>
                <div className="branding-feature">
                  <div className="feature-icon">✓</div>
                  <span>Enterprise Ready</span>
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
                  <a href="#signup" className="signup-link">
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
