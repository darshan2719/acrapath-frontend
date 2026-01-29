import React, { useState } from 'react';

const JobFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="job-filters">
      <div className="filter-group">
        <input
          type="text"
          name="search"
          placeholder="Search jobs..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      
      <div className="filter-group">
        <select name="location" value={filters.location} onChange={handleChange}>
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="new-york">New York</option>
          <option value="san-francisco">San Francisco</option>
          <option value="london">London</option>
        </select>
      </div>
      
      <div className="filter-group">
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="">All Types</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>
      
      <div className="filter-group">
        <select name="salary" value={filters.salary} onChange={handleChange}>
          <option value="">All Salaries</option>
          <option value="0-50k">$0 - $50k</option>
          <option value="50k-100k">$50k - $100k</option>
          <option value="100k+">$100k+</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
