import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFileAlt, 
  FaVideo, 
  FaBook, 
  FaLightbulb, 
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaDownload,
  FaClock,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const Resources = () => {
  const categories = [
    {
      icon: <FaFileAlt />,
      title: 'Resume Templates',
      description: 'Professional templates to help you stand out',
      count: '25+',
      color: '#667eea'
    },
    {
      icon: <FaVideo />,
      title: 'Interview Prep',
      description: 'Video guides and tips from experts',
      count: '50+',
      color: '#f093fb'
    },
    {
      icon: <FaBook />,
      title: 'Career Guides',
      description: 'In-depth guides for career growth',
      count: '100+',
      color: '#4facfe'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Skill Courses',
      description: 'Free courses to boost your skills',
      count: '75+',
      color: '#43e97b'
    }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'How to Write a Winning Resume in 2024',
      type: 'Guide',
      description: 'Complete guide to creating a resume that gets you interviews',
      author: 'Sarah Johnson',
      readTime: '10 min read',
      downloads: 5420,
      rating: 4.8,
      image: '📄',
      category: 'Resume'
    },
    {
      id: 2,
      title: 'Ace Your Technical Interview',
      type: 'Video',
      description: 'Master coding interviews with real examples and solutions',
      author: 'Michael Chen',
      readTime: '45 min',
      downloads: 3280,
      rating: 4.9,
      image: '🎥',
      category: 'Interview'
    },
    {
      id: 3,
      title: 'Salary Negotiation Masterclass',
      type: 'Course',
      description: 'Learn proven strategies to negotiate your best offer',
      author: 'Emily Rodriguez',
      readTime: '2 hours',
      downloads: 2150,
      rating: 4.7,
      image: '💰',
      category: 'Negotiation'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 In-Demand Skills for 2024',
      excerpt: 'Discover which skills employers are looking for this year',
      author: 'Career Team',
      date: 'Jan 15, 2024',
      readTime: '5 min',
      image: '📊'
    },
    {
      id: 2,
      title: 'Remote Work: Best Practices',
      excerpt: 'How to stay productive and connected while working remotely',
      author: 'Remote Expert',
      date: 'Jan 10, 2024',
      readTime: '7 min',
      image: '🏠'
    },
    {
      id: 3,
      title: 'Career Change at 30: A Complete Guide',
      excerpt: 'Making a successful career transition in your 30s',
      author: 'Career Coach',
      date: 'Jan 5, 2024',
      readTime: '12 min',
      image: '🔄'
    },
    {
      id: 4,
      title: 'Building Your Personal Brand',
      excerpt: 'Stand out in the job market with a strong personal brand',
      author: 'Branding Expert',
      date: 'Dec 28, 2023',
      readTime: '8 min',
      image: '✨'
    }
  ];

  const tools = [
    {
      name: 'Resume Builder',
      description: 'Create professional resumes in minutes',
      icon: '📝',
      link: '/tools/resume-builder'
    },
    {
      name: 'Salary Calculator',
      description: 'Know your market value',
      icon: '💵',
      link: '/tools/salary-calculator'
    },
    {
      name: 'Cover Letter Generator',
      description: 'AI-powered cover letters',
      icon: '✉️',
      link: '/tools/cover-letter'
    },
    {
      name: 'Interview Simulator',
      description: 'Practice with AI interviewer',
      icon: '🎤',
      link: '/tools/interview-prep'
    }
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <h1>Career Resources Hub</h1>
          <p>Everything you need to succeed in your career journey</p>
          
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search resources, guides, courses..." 
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="resources-categories">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="category-count">{category.count} resources</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="featured-resources">
        <div className="container">
          <div className="section-header">
            <h2>Featured Resources</h2>
            <Link to="/resources/all" className="btn-secondary">
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredResources.map(resource => (
              <div key={resource.id} className="resource-card featured">
                <div className="resource-image">{resource.image}</div>
                <div className="resource-content">
                  <div className="resource-meta">
                    <span className="resource-type">{resource.type}</span>
                    <span className="resource-category">{resource.category}</span>
                  </div>
                  
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  
                  <div className="resource-stats">
                    <span><FaClock /> {resource.readTime}</span>
                    <span><FaDownload /> {resource.downloads.toLocaleString()}</span>
                    <span><FaStar /> {resource.rating}</span>
                  </div>
                  
                  <div className="resource-footer">
                    <span className="author">By {resource.author}</span>
                    <Link to={`/resources/${resource.id}`} className="btn-primary">
                      Access Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tools */}
      <section className="career-tools">
        <div className="container">
          <h2>Career Tools</h2>
          <p className="section-subtitle">Free tools to accelerate your job search</p>
          
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <Link to={tool.link} key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span className="tool-link">
                  Try it now <FaArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Blog Posts</h2>
            <Link to="/blog" className="btn-secondary">
              All Articles <FaArrowRight />
            </Link>
          </div>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">{post.image}</div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="webinars-section">
        <div className="container">
          <h2>Upcoming Webinars & Events</h2>
          
          <div className="webinars-list">
            <div className="webinar-card">
              <div className="webinar-date">
                <span className="month">FEB</span>
                <span className="day">15</span>
              </div>
              <div className="webinar-details">
                <h3>Resume Review Workshop</h3>
                <p>Get your resume reviewed by industry experts</p>
                <div className="webinar-info">
                  <span><FaClock /> 6:00 PM EST</span>
                  <span><FaUsers /> 245 registered</span>
                </div>
              </div>
              <button className="btn-primary">Register Free</button>
            </div>

            <div className="webinar-card">
              <div className="webinar-date">
                <span className="month">FEB</span>
                <span className="day">22</span>
              </div>
              <div className="webinar-details">
                <h3>Tech Career Panel Discussion</h3>
                <p>Learn from senior tech professionals</p>
                <div className="webinar-info">
                  <span><FaClock /> 7:00 PM EST</span>
                  <span><FaUsers /> 412 registered</span>
                </div>
              </div>
              <button className="btn-primary">Register Free</button>
            </div>

            <div className="webinar-card">
              <div className="webinar-date">
                <span className="month">MAR</span>
                <span className="day">05</span>
              </div>
              <div className="webinar-details">
                <h3>Negotiation Tactics Masterclass</h3>
                <p>Master the art of salary negotiation</p>
                <div className="webinar-info">
                  <span><FaClock /> 6:30 PM EST</span>
                  <span><FaUsers /> 189 registered</span>
                </div>
              </div>
              <button className="btn-primary">Register Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <FaLightbulb />
            </div>
            <div className="newsletter-text">
              <h2>Get Weekly Career Tips</h2>
              <p>Join 50,000+ professionals receiving career advice in their inbox</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;