import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobService } from '../services/jobService';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const data = await jobService.getJobById(id);
      setJob(data);
    } catch (error) {
      console.error('Error fetching job:', error);
      toast.error('Failed to load job details');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    if (!user) {
      toast.info('Please login to apply');
      navigate('/login');
      return;
    }

    try {
      await jobService.applyForJob(id, {});
      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Failed to apply. You may have already applied.');
    }
  };

  if (loading) {
    return <div className="loading">Loading job details...</div>;
  }

  if (!job) {
    return <div className="loading">Job not found</div>;
  }

  return (
    <div className="job-details-page">
      <div className="container">
        <div className="job-details-header">
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          
          <div className="job-meta">
            <span><FaMapMarkerAlt /> {job.location}</span>
            <span><FaBriefcase /> {job.type}</span>
            <span><FaClock /> Posted {job.postedDate}</span>
            <span><FaDollarSign /> {job.salary}</span>
          </div>
        </div>

        <div className="job-details-content">
          <section>
            <h3>Job Description</h3>
            <p>{job.description}</p>
          </section>

          <section>
            <h3>Requirements</h3>
            <ul>
              {job.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              )) || <li>No specific requirements listed</li>}
            </ul>
          </section>

          <section>
            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities?.map((resp, index) => (
                <li key={index}>{resp}</li>
              )) || <li>Details to be discussed during interview</li>}
            </ul>
          </section>

          <section>
            <h3>Skills</h3>
            <div className="skills-tags">
              {job.skills?.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              )) || <span>N/A</span>}
            </div>
          </section>

          <div className="apply-section">
            <button onClick={handleApply} className="btn-primary btn-large">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
