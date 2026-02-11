import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Get Job Alerts & Updates</h3>
              <p>Subscribe to our newsletter and never miss a great opportunity</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-group">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              <button type="submit" className="btn-primary">
                Subscribe <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <span className="logo-icon">💼</span>
                <span className="logo-text">Acrapath</span>
              </div>
              <p className="footer-description">
                Connecting talented professionals with their dream careers. 
                Your trusted partner in career growth and success.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <FaYoutube />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <FaGithub />
                </a>
              </div>

              {/* App Download Buttons */}
              <div className="app-downloads">
                <a href="#" className="app-button">
                  <FaApple />
                  <div>
                    <small>Download on</small>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="app-button">
                  <FaGooglePlay />
                  <div>
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* For Job Seekers */}
            <div className="footer-column">
              <h4 className="footer-title">For Job Seekers</h4>
              <ul className="footer-links">
                <li><Link to="/jobs">Browse Jobs</Link></li>
                <li><Link to="/jobs?type=remote">Remote Jobs</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/salary-guide">Salary Guide</Link></li>
                <li><Link to="/resume-builder">Resume Builder</Link></li>
                <li><Link to="/career-advice">Career Advice</Link></li>
                <li><Link to="/interview-tips">Interview Tips</Link></li>
                <li><Link to="/job-alerts">Job Alerts</Link></li>
              </ul>
            </div>

            {/* For Employers */}
            <div className="footer-column">
              <h4 className="footer-title">For Employers</h4>
              <ul className="footer-links">
                <li><Link to="/employer/post-job">Post a Job</Link></li>
                <li><Link to="/employer/pricing">Pricing Plans</Link></li>
                <li><Link to="/employer/dashboard">Employer Dashboard</Link></li>
                <li><Link to="/employer/browse-candidates">Browse Candidates</Link></li>
                <li><Link to="/employer/solutions">Recruitment Solutions</Link></li>
                <li><Link to="/employer/success-stories">Success Stories</Link></li>
                <li><Link to="/employer/support">Employer Support</Link></li>
                <li><Link to="/employer/blog">Employer Blog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/help-center">Help Center</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/guides">Career Guides</Link></li>
                <li><Link to="/webinars">Webinars</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/newsletter">Newsletter</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press & Media</Link></li>
                <li><Link to="/partners">Partners</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <strong>Address</strong>
                    <p>123 Business Street<br />San Francisco, CA 94105<br />United States</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (555) 123-4567<br />Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>support@acrapath.com<br />careers@acrapath.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} Acrapath. All rights reserved. 
                Made with <FaHeart className="heart-icon" /> by Acrapath Team
              </p>
            </div>
            
            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">🔒</span>
                <span>Secure & Trusted</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>ISO Certified</span>
              </div>
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>4.8 Rating</span>
              </div>
            </div>

            <div className="footer-legal">
              <Link to="/privacy">Privacy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms</Link>
              <span className="separator">•</span>
              <Link to="/accessibility">Accessibility</Link>
              <span className="separator">•</span>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Language & Currency Selector (Optional) */}
      <div className="footer-extras">
        <div className="container">
          <div className="footer-selectors">
            <select className="footer-select">
              <option>🌐 English</option>
              <option>🇪🇸 Español</option>
              <option>🇫🇷 Français</option>
              <option>🇩🇪 Deutsch</option>
              <option>🇨🇳 中文</option>
            </select>
            
            <select className="footer-select">
              <option>💵 USD</option>
              <option>💶 EUR</option>
              <option>💷 GBP</option>
              <option>💴 JPY</option>
              <option>₹ INR</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;