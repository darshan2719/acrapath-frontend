import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <span className="company">{job.company}</span>
      </div>
      
      <div className="job-info">
        <span><FaMapMarkerAlt /> {job.location}</span>
        <span><FaBriefcase /> {job.type}</span>
        <span><FaClock /> {job.postedDate}</span>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-footer">
        <div className="salary">{job.salary}</div>
        <Link to={`/jobs/${job._id}`} className="btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;