import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Thousands of jobs waiting for you</p>
        <Link to="/jobs" className="btn-large">Browse Jobs</Link>
      </section>
      
      <section className="features">
        <div className="feature">
          <h3>Easy Job Search</h3>
          <p>Find jobs that match your skills</p>
        </div>
        <div className="feature">
          <h3>Apply Instantly</h3>
          <p>One-click applications</p>
        </div>
        <div className="feature">
          <h3>Track Applications</h3>
          <p>Monitor your application status</p>
        </div>
      </section>
    </div>
  );
};

export default Home;