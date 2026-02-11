import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaUsers, 
  FaGlobe, 
  FaHeart,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Active Job Seekers' },
    { number: '500+', label: 'Partner Companies' },
    { number: '10,000+', label: 'Jobs Posted Monthly' },
    { number: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: <FaBullseye />,
      title: 'Mission-Driven',
      description: 'We exist to connect talent with opportunity and help people build fulfilling careers',
      color: '#667eea'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technology to make job searching smarter and more efficient',
      color: '#f093fb'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Transparency',
      description: 'We believe in honest communication and building lasting relationships',
      color: '#4facfe'
    },
    {
      icon: <FaHeart />,
      title: 'People-Centered',
      description: 'Every decision we make puts job seekers and employers at the heart',
      color: '#43e97b'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      bio: 'Former Google recruiter with 15 years in talent acquisition',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      bio: 'Tech leader from Amazon, passionate about scalable systems',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: '👩‍🔬',
      bio: 'Product expert focused on user experience and growth',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kumar',
      role: 'Head of Sales',
      image: '👨‍💼',
      bio: 'Building relationships with top employers worldwide',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Acrapath was founded with a vision to revolutionize job searching'
    },
    {
      year: '2021',
      title: 'First 1,000 Jobs',
      description: 'Reached milestone of 1,000 successful job placements'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $10M to expand platform and reach'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Launched in 15 countries across 3 continents'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Introduced AI-powered job matching and recommendations'
    }
  ];

  const awards = [
    { icon: '🏆', title: 'Best Job Platform 2023', org: 'Tech Awards' },
    { icon: '⭐', title: 'Top Startup of the Year', org: 'Startup Magazine' },
    { icon: '🌟', title: 'Innovation Award', org: 'HR Tech Summit' },
    { icon: '💡', title: 'Best UX Design', org: 'Design Excellence' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Connecting Talent with Opportunity</h1>
          <p className="hero-subtitle">
            We're on a mission to help millions of people find meaningful work and build successful careers
          </p>
          <div className="hero-cta">
            <Link to="/jobs" className="btn-primary btn-large">
              Browse Jobs
            </Link>
            <Link to="/contact" className="btn-secondary btn-large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Acrapath was born from a simple observation: job searching was broken. 
                Talented people were struggling to find the right opportunities, and great 
                companies were missing out on amazing candidates.
              </p>
              <p>
                In 2020, our founders decided to change that. We built a platform that uses 
                smart technology to match the right people with the right jobs. Today, we're 
                proud to help thousands of people advance their careers every month.
              </p>
              <p>
                But we're just getting started. Our vision is to become the world's most 
                trusted career platform, where every professional can find their dream job 
                and every company can build their dream team.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <FaRocket className="story-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p className="section-subtitle">Key milestones in our growth</p>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">The people behind Acrapath</p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href={member.linkedin} className="social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.twitter} className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@acrapath.com`} className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <h2>Awards & Recognition</h2>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon">{award.icon}</div>
                <h3>{award.title}</h3>
                <p>{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Trusted By</h2>
          <p className="section-subtitle">Leading companies that trust Acrapath</p>
          
          <div className="partners-logos">
            <div className="partner-logo">🔷 Microsoft</div>
            <div className="partner-logo">🔴 Netflix</div>
            <div className="partner-logo">🟢 Spotify</div>
            <div className="partner-logo">🔵 Meta</div>
            <div className="partner-logo">🟡 Google</div>
            <div className="partner-logo">🟠 Amazon</div>
            <div className="partner-logo">🟣 Adobe</div>
            <div className="partner-logo">⚫ Apple</div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Mission</h2>
            <p>
              We're always looking for talented people who share our passion for 
              connecting people with opportunity
            </p>
            <div className="join-stats">
              <div className="join-stat">
                <FaUsers />
                <span>Remote-first culture</span>
              </div>
              <div className="join-stat">
                <FaGlobe />
                <span>20+ countries</span>
              </div>
              <div className="join-stat">
                <FaStar />
                <span>4.8 Glassdoor rating</span>
              </div>
            </div>
            <Link to="/careers" className="btn-primary btn-large">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Let's Talk</h2>
          <p>Have questions? Want to partner with us? We'd love to hear from you</p>
          <div className="contact-methods">
            <div className="contact-method">
              <FaEnvelope />
              <div>
                <strong>Email Us</strong>
                <p>hello@acrapath.com</p>
              </div>
            </div>
            <div className="contact-method">
              <FaUsers />
              <div>
                <strong>Join Our Community</strong>
                <p>50k+ members on social</p>
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn-secondary btn-large">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;