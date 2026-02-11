import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { 
  FaBriefcase, 
  FaUser, 
  FaBell, 
  FaChevronDown, 
  FaBars, 
  FaTimes,
  FaSearch,
  FaBuilding,
  FaFileAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaSignOutAlt,
  FaCog,
  FaBookmark,
  FaChartLine
} from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsJobsDropdownOpen(false);
      setIsProfileDropdownOpen(false);
    };
    
    if (isJobsDropdownOpen || isProfileDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isJobsDropdownOpen, isProfileDropdownOpen]);

  const handleDropdownClick = (e, setDropdown) => {
    e.stopPropagation();
    setDropdown(prev => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-text">Acrapath</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {/* Jobs Dropdown */}
          <li className="nav-item dropdown">
            <button 
              className={`nav-link dropdown-toggle ${isActive('/jobs') ? 'active' : ''}`}
              onClick={(e) => handleDropdownClick(e, setIsJobsDropdownOpen)}
            >
              <FaBriefcase /> Jobs <FaChevronDown className="chevron" />
            </button>
            
            {isJobsDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/jobs" className="dropdown-item">
                  <FaSearch />
                  <div>
                    <strong>Browse Jobs</strong>
                    <small>Find your dream job</small>
                  </div>
                </Link>
                <Link to="/jobs?type=remote" className="dropdown-item">
                  <FaBriefcase />
                  <div>
                    <strong>Remote Jobs</strong>
                    <small>Work from anywhere</small>
                  </div>
                </Link>
                <Link to="/jobs?category=tech" className="dropdown-item">
                  <FaChartLine />
                  <div>
                    <strong>Tech Jobs</strong>
                    <small>Latest in technology</small>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/saved-jobs" className="dropdown-item">
                  <FaBookmark />
                  <div>
                    <strong>Saved Jobs</strong>
                    <small>Your bookmarks</small>
                  </div>
                </Link>
              </div>
            )}
          </li>

          {/* Companies */}
          <li className="nav-item">
            <Link 
              to="/companies" 
              className={`nav-link ${isActive('/companies') ? 'active' : ''}`}
            >
              <FaBuilding /> Companies
            </Link>
          </li>

          {/* Resources */}
          <li className="nav-item">
            <Link 
              to="/resources" 
              className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
            >
              <FaFileAlt /> Resources
            </Link>
          </li>

          {/* About */}
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              <FaQuestionCircle /> About
            </Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {user ? (
            <>
              {/* Notifications */}
              <button className="icon-button notification-btn">
                <FaBell />
                <span className="notification-badge">3</span>
              </button>

              {/* Messages */}
              <button className="icon-button">
                <FaEnvelope />
              </button>

              {/* Profile Dropdown */}
              <div className="profile-dropdown">
                <button 
                  className="profile-button"
                  onClick={(e) => handleDropdownClick(e, setIsProfileDropdownOpen)}
                >
                  <div className="profile-avatar">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="profile-info">
                    <span className="profile-name">{user.name || 'User'}</span>
                    <span className="profile-role">{user.role || 'Job Seeker'}</span>
                  </div>
                  <FaChevronDown className="chevron" />
                </button>

                {isProfileDropdownOpen && (
                  <div className="dropdown-menu profile-menu">
                    <div className="profile-header">
                      <div className="profile-avatar-large">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div>
                        <strong>{user.name}</strong>
                        <small>{user.email}</small>
                      </div>
                    </div>
                    
                    <div className="dropdown-divider"></div>
                    
                    <Link to="/dashboard" className="dropdown-item">
                      <FaChartLine />
                      <div>
                        <strong>Dashboard</strong>
                        <small>View your stats</small>
                      </div>
                    </Link>
                    
                    <Link to="/profile" className="dropdown-item">
                      <FaUser />
                      <div>
                        <strong>My Profile</strong>
                        <small>Manage your account</small>
                      </div>
                    </Link>
                    
                    <Link to="/applications" className="dropdown-item">
                      <FaFileAlt />
                      <div>
                        <strong>Applications</strong>
                        <small>Track your progress</small>
                      </div>
                    </Link>
                    
                    <Link to="/settings" className="dropdown-item">
                      <FaCog />
                      <div>
                        <strong>Settings</strong>
                        <small>Preferences & privacy</small>
                      </div>
                    </Link>
                    
                    <div className="dropdown-divider"></div>
                    
                    <button onClick={logout} className="dropdown-item logout-btn">
                      <FaSignOutAlt />
                      <div>
                        <strong>Logout</strong>
                        <small>Sign out of account</small>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Sign Up
              </Link>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {user && (
              <div className="mobile-profile">
                <div className="profile-avatar">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                </div>
              </div>
            )}

            <div className="mobile-nav-links">
              <Link to="/jobs" className="mobile-nav-item">
                <FaBriefcase /> Browse Jobs
              </Link>
              <Link to="/companies" className="mobile-nav-item">
                <FaBuilding /> Companies
              </Link>
              <Link to="/resources" className="mobile-nav-item">
                <FaFileAlt /> Resources
              </Link>
              <Link to="/about" className="mobile-nav-item">
                <FaQuestionCircle /> About
              </Link>

              {user && (
                <>
                  <div className="mobile-divider"></div>
                  <Link to="/dashboard" className="mobile-nav-item">
                    <FaChartLine /> Dashboard
                  </Link>
                  <Link to="/profile" className="mobile-nav-item">
                    <FaUser /> My Profile
                  </Link>
                  <Link to="/applications" className="mobile-nav-item">
                    <FaFileAlt /> Applications
                  </Link>
                  <Link to="/settings" className="mobile-nav-item">
                    <FaCog /> Settings
                  </Link>
                  <button onClick={logout} className="mobile-nav-item logout">
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              )}

              {!user && (
                <>
                  <div className="mobile-divider"></div>
                  <Link to="/login" className="mobile-nav-item">
                    Login
                  </Link>
                  <Link to="/register" className="mobile-nav-item primary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;