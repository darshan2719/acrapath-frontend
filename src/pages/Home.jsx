import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaRocket, FaUsers, FaChartLine, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [stats, setStats] = useState({
    jobs: 0,
    companies: 0,
    candidates: 0,
    placements: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targetStats = {
      jobs: 10000,
      companies: 500,
      candidates: 50000,
      placements: 8000
    };

    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        jobs: Math.floor(targetStats.jobs * progress),
        companies: Math.floor(targetStats.companies * progress),
        candidates: Math.floor(targetStats.candidates * progress),
        placements: Math.floor(targetStats.placements * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to jobs page with search params
    window.location.href = `/jobs?search=${searchQuery}&location=${location}`;
  };

  const categories = [
    { name: 'Technology', icon: '💻', count: '2,500+ jobs' },
    { name: 'Marketing', icon: '📱', count: '1,200+ jobs' },
    { name: 'Design', icon: '🎨', count: '800+ jobs' },
    { name: 'Finance', icon: '💰', count: '1,500+ jobs' },
    { name: 'Healthcare', icon: '⚕️', count: '900+ jobs' },
    { name: 'Education', icon: '📚', count: '600+ jobs' },
    { name: 'Sales', icon: '📊', count: '1,100+ jobs' },
    { name: 'Engineering', icon: '⚙️', count: '1,800+ jobs' }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      type: 'Full Time',
      salary: '$120k - $180k',
      logo: '🚀',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartUp Hub',
      location: 'Remote',
      type: 'Full Time',
      salary: '$100k - $150k',
      logo: '💡',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Creative Studios',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80k - $120k',
      logo: '🎨',
      posted: '3 days ago'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      image: '👩‍💻',
      text: 'Acrapath helped me land my dream job at Google! The platform is intuitive and the job recommendations were spot-on.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      company: 'Amazon',
      image: '👨‍💼',
      text: 'As an employer, Acrapath has been invaluable. We found the perfect candidates quickly and efficiently.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: '👩‍🔬',
      text: 'The application tracking feature is fantastic! I could manage all my applications in one place.'
    }
  ];

  const topCompanies = [
    '🔷 Microsoft', '🔴 Netflix', '🟢 Spotify', '🔵 Meta',
    '🟡 Google', '🟠 Amazon', '🟣 Adobe', '⚫ Apple'
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job Today</h1>
          <p className="hero-subtitle">
            Connect with top companies and discover opportunities that match your skills
          </p>

          {/* Search Bar */}
          <form className="hero-search" onSubmit={handleSearch}>
            <div className="search-input-group">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="search-input-group">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                placeholder="City or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="search-input"
              />
            </div>

            <button type="submit" className="btn-primary btn-search">
              Search Jobs
            </button>
          </form>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.jobs.toLocaleString()}+</span>
              <span className="stat-label">Active Jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.companies.toLocaleString()}+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.candidates.toLocaleString()}+</span>
              <span className="stat-label">Candidates</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.placements.toLocaleString()}+</span>
              <span className="stat-label">Successful Placements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">Explore opportunities across various industries</p>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={`/jobs?category=${category.name}`} key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Jobs</h2>
              <p className="section-subtitle">Hand-picked opportunities from top companies</p>
            </div>
            <Link to="/jobs" className="btn-secondary">
              View All Jobs <FaArrowRight />
            </Link>
          </div>

          <div className="featured-jobs-grid">
            {featuredJobs.map((job) => (
              <div key={job.id} className="featured-job-card">
                <div className="job-card-header">
                  <div className="company-logo">{job.logo}</div>
                  <span className="job-badge">{job.type}</span>
                </div>
                
                <h3 className="job-title">{job.title}</h3>
                <p className="company-name">{job.company}</p>
                
                <div className="job-details">
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span><FaBriefcase /> {job.type}</span>
                </div>
                
                <div className="job-card-footer">
                  <span className="salary">{job.salary}</span>
                  <Link to={`/jobs/${job.id}`} className="btn-apply">
                    Apply Now
                  </Link>
                </div>
                
                <div className="job-posted">{job.posted}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Acrapath Works</h2>
          <p className="section-subtitle">Your journey to success in 3 simple steps</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🔍</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and build your professional profile with your skills, experience, and preferences</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📝</div>
              <h3>Apply to Jobs</h3>
              <p>Browse thousands of jobs and apply to the ones that match your career goals</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🎯</div>
              <h3>Get Hired</h3>
              <p>Track your applications and connect with employers to land your dream job</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Acrapath?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Easy Job Search</h3>
              <p>Advanced filters help you find jobs that perfectly match your skills and preferences</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBriefcase />
              </div>
              <h3>Apply Instantly</h3>
              <p>One-click applications with your saved profile. No repetitive form filling</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Track Applications</h3>
              <p>Monitor all your applications in one dashboard and never miss an update</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Top Companies</h3>
              <p>Connect with leading employers across various industries worldwide</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Personalized Matches</h3>
              <p>Get job recommendations tailored to your profile and career aspirations</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Verified Employers</h3>
              <p>All companies are verified to ensure authentic job postings and safe applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="top-companies">
        <div className="container">
          <h2 className="section-title">Trusted by Leading Companies</h2>
          <p className="section-subtitle">Join thousands of professionals working at top organizations</p>
          
          <div className="companies-marquee">
            <div className="companies-track">
              {[...topCompanies, ...topCompanies].map((company, index) => (
                <div key={index} className="company-item">
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Hear from professionals who found their dream jobs</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-image">{testimonial.image}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take the Next Step?</h2>
            <p>Join thousands of job seekers finding their perfect match every day</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn-primary btn-large">
                Get Started Free
              </Link>
              <Link to="/jobs" className="btn-secondary btn-large">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-box">
              <h3>100+</h3>
              <p>Countries</p>
            </div>
            <div className="stat-box">
              <h3>4.8★</h3>
              <p>User Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;