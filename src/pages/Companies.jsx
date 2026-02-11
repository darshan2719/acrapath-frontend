import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaStar, FaUsers, FaArrowRight, FaSearch, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  // Mock data - Replace with API call
  const companiesData = [
    {
      id: 1,
      name: 'Tech Innovators Inc.',
      logo: '🚀',
      industry: 'Technology',
      location: 'San Francisco, CA',
      size: '1000-5000',
      rating: 4.8,
      openJobs: 45,
      description: 'Leading technology company specializing in AI and cloud solutions',
      benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Stock Options'],
      verified: true
    },
    {
      id: 2,
      name: 'Creative Studios',
      logo: '🎨',
      industry: 'Design',
      location: 'New York, NY',
      size: '100-500',
      rating: 4.6,
      openJobs: 12,
      description: 'Award-winning design agency creating stunning digital experiences',
      benefits: ['Flexible Hours', 'Unlimited PTO', 'Learning Budget'],
      verified: true
    },
    {
      id: 3,
      name: 'Global Finance Corp',
      logo: '💰',
      industry: 'Finance',
      location: 'Chicago, IL',
      size: '5000+',
      rating: 4.5,
      openJobs: 78,
      description: 'International financial services company with global presence',
      benefits: ['Bonus Structure', 'Gym Membership', 'Commuter Benefits'],
      verified: true
    },
    {
      id: 4,
      name: 'HealthCare Plus',
      logo: '⚕️',
      industry: 'Healthcare',
      location: 'Boston, MA',
      size: '500-1000',
      rating: 4.7,
      openJobs: 34,
      description: 'Healthcare technology company improving patient outcomes',
      benefits: ['Health Insurance', 'Life Insurance', 'Retirement Plan'],
      verified: true
    },
    {
      id: 5,
      name: 'EduTech Solutions',
      logo: '📚',
      industry: 'Education',
      location: 'Austin, TX',
      size: '100-500',
      rating: 4.9,
      openJobs: 23,
      description: 'EdTech platform transforming online learning',
      benefits: ['Professional Development', 'Remote Work', 'Tuition Reimbursement'],
      verified: true
    },
    {
      id: 6,
      name: 'Marketing Masters',
      logo: '📱',
      industry: 'Marketing',
      location: 'Los Angeles, CA',
      size: '100-500',
      rating: 4.4,
      openJobs: 18,
      description: 'Digital marketing agency helping brands grow online',
      benefits: ['Flexible Schedule', 'Creative Freedom', 'Team Events'],
      verified: false
    }
  ];

  useEffect(() => {
    // In production, fetch from API
    setCompanies(companiesData);
  }, []);

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = !selectedIndustry || company.industry === selectedIndustry;
    const matchesSize = !selectedSize || company.size === selectedSize;
    
    return matchesSearch && matchesIndustry && matchesSize;
  });

  const industries = ['Technology', 'Design', 'Finance', 'Healthcare', 'Education', 'Marketing'];
  const companySizes = ['1-50', '50-100', '100-500', '500-1000', '1000-5000', '5000+'];

  const featuredCompanies = companies.slice(0, 3);

  return (
    <div className="companies-page">
      {/* Hero Section */}
      <section className="companies-hero">
        <div className="container">
          <h1>Discover Top Companies</h1>
          <p>Explore leading companies hiring on Acrapath</p>
          
          {/* Search Bar */}
          <div className="companies-search">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="companies-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Companies</p>
            </div>
            <div className="stat">
              <h3>10,000+</h3>
              <p>Open Positions</p>
            </div>
            <div className="stat">
              <h3>4.7★</h3>
              <p>Avg Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="companies-filters-section">
        <div className="container">
          <div className="filters-bar">
            <select 
              value={selectedIndustry} 
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="filter-select"
            >
              <option value="">All Industries</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>

            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="filter-select"
            >
              <option value="">Company Size</option>
              {companySizes.map(size => (
                <option key={size} value={size}>{size} employees</option>
              ))}
            </select>

            <button className="btn-secondary" onClick={() => {
              setSelectedIndustry('');
              setSelectedSize('');
              setSearchQuery('');
            }}>
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="featured-companies-section">
        <div className="container">
          <h2>Featured Companies</h2>
          <div className="featured-companies-grid">
            {featuredCompanies.map(company => (
              <div key={company.id} className="featured-company-card">
                <div className="company-banner"></div>
                <div className="company-content">
                  <div className="company-logo-large">{company.logo}</div>
                  <div className="company-header">
                    <div>
                      <h3>{company.name}</h3>
                      {company.verified && (
                        <span className="verified-badge">
                          <FaCheckCircle /> Verified
                        </span>
                      )}
                    </div>
                    <div className="company-rating">
                      <FaStar /> {company.rating}
                    </div>
                  </div>
                  <p className="company-description">{company.description}</p>
                  <div className="company-meta">
                    <span><FaMapMarkerAlt /> {company.location}</span>
                    <span><FaUsers /> {company.size}</span>
                    <span><FaBriefcase /> {company.openJobs} jobs</span>
                  </div>
                  <div className="company-benefits">
                    {company.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="benefit-tag">{benefit}</span>
                    ))}
                  </div>
                  <Link to={`/companies/${company.id}`} className="btn-primary">
                    View Company <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Companies */}
      <section className="all-companies-section">
        <div className="container">
          <h2>All Companies ({filteredCompanies.length})</h2>
          
          {filteredCompanies.length === 0 ? (
            <div className="no-results">
              <FaBuilding className="no-results-icon" />
              <h3>No companies found</h3>
              <p>Try adjusting your filters</p>
            </div>
          ) : (
            <div className="companies-grid">
              {filteredCompanies.map(company => (
                <div key={company.id} className="company-card">
                  <div className="company-card-header">
                    <div className="company-logo">{company.logo}</div>
                    <div>
                      <h3>{company.name}</h3>
                      <span className="industry-badge">{company.industry}</span>
                    </div>
                  </div>
                  
                  <p className="company-desc">{company.description}</p>
                  
                  <div className="company-info">
                    <span><FaMapMarkerAlt /> {company.location}</span>
                    <span><FaUsers /> {company.size}</span>
                  </div>
                  
                  <div className="company-footer">
                    <div>
                      <span className="rating"><FaStar /> {company.rating}</span>
                      <span className="jobs-count">{company.openJobs} open jobs</span>
                    </div>
                    <Link to={`/companies/${company.id}`} className="btn-view">
                      View <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="companies-cta">
        <div className="container">
          <h2>Is Your Company Hiring?</h2>
          <p>Join hundreds of companies finding top talent on Acrapath</p>
          <div className="cta-buttons">
            <Link to="/employer/register" className="btn-primary btn-large">
              Post a Job
            </Link>
            <Link to="/employer/pricing" className="btn-secondary btn-large">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;