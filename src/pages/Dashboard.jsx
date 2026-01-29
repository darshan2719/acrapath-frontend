import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    appliedJobs: 0,
    savedJobs: 0,
    interviews: 0
  });

  useEffect(() => {
    // Fetch user stats here
    // For now using dummy data
    setStats({
      appliedJobs: 5,
      savedJobs: 12,
      interviews: 2
    });
  }, []);

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Welcome back, {user?.name}!</h1>
      
      <div className="features" style={{ marginTop: '40px' }}>
        <div className="feature">
          <h3>{stats.appliedJobs}</h3>
          <p>Applied Jobs</p>
          <Link to="/applications" className="btn-primary" style={{ marginTop: '15px' }}>
            View Applications
          </Link>
        </div>

        <div className="feature">
          <h3>{stats.savedJobs}</h3>
          <p>Saved Jobs</p>
          <Link to="/saved-jobs" className="btn-primary" style={{ marginTop: '15px' }}>
            View Saved
          </Link>
        </div>

        <div className="feature">
          <h3>{stats.interviews}</h3>
          <p>Interviews Scheduled</p>
          <button className="btn-primary" style={{ marginTop: '15px' }}>
            View Schedule
          </button>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <Link to="/jobs" className="btn-primary">Browse Jobs</Link>
          <Link to="/profile" className="btn-primary">Edit Profile</Link>
          <button className="btn-primary">Upload Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
