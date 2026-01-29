import React, { useState, useEffect } from 'react';
import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';
import { jobService } from '../services/jobService';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      const data = await jobService.getAllJobs(filters);
      setJobs(data.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jobs-page">
      <JobFilters onFilterChange={setFilters} />
      
      <div className="jobs-grid">
        {loading ? (
          <p>Loading jobs...</p>
        ) : jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job._id} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;