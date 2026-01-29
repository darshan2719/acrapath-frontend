import api from './api';

// Mock data for development (remove when backend is ready)
const mockJobs = [
  {
    _id: '1',
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'Full Time',
    salary: '$80k - $120k',
    description: 'We are looking for a talented Frontend Developer to join our team.',
    postedDate: '2 days ago',
    requirements: ['3+ years React experience', 'JavaScript/TypeScript', 'CSS/Tailwind'],
    responsibilities: ['Build user interfaces', 'Collaborate with designers', 'Write clean code'],
    skills: ['React', 'JavaScript', 'CSS', 'Git']
  },
  {
    _id: '2',
    title: 'Backend Developer',
    company: 'StartUp Inc',
    location: 'New York',
    type: 'Full Time',
    salary: '$90k - $130k',
    description: 'Join our team to build scalable backend systems.',
    postedDate: '5 days ago',
    requirements: ['Node.js experience', 'Database knowledge', 'API design'],
    responsibilities: ['Design APIs', 'Database management', 'Server optimization'],
    skills: ['Node.js', 'MongoDB', 'Express', 'REST APIs']
  },
  {
    _id: '3',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    location: 'San Francisco',
    type: 'Contract',
    salary: '$100k - $150k',
    description: 'Looking for an experienced full stack developer for exciting projects.',
    postedDate: '1 week ago',
    requirements: ['MERN stack', '5+ years experience', 'Team player'],
    responsibilities: ['Full stack development', 'Code reviews', 'Mentoring juniors'],
    skills: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    _id: '4',
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Part Time',
    salary: '$50k - $80k',
    description: 'Create beautiful and intuitive user experiences.',
    postedDate: '3 days ago',
    requirements: ['Figma/Adobe XD', 'Portfolio required', 'User research'],
    responsibilities: ['Design mockups', 'User testing', 'Collaborate with developers'],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    _id: '5',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'On-site',
    type: 'Part Time',
    salary: '$90k - $95k',
    description: 'Develop Cloud solutions for our e-commerce platform.',
    postedDate: '3 days ago',
    requirements: ['Figma/Adobe XD', 'Portfolio required', 'User research'],
    responsibilities: ['Design mockups', 'User testing', 'Collaborate with developers'],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  }
];

export const jobService = {
  getAllJobs: async (filters = {}) => {
    try {
      // Try to get from backend
      const response = await api.get('/jobs', { params: filters });
      return response.data;
    } catch (error) {
      // If backend not available, return mock data
      console.log('Backend not available, using mock data');
      
      // Simple filtering on mock data
      let filteredJobs = [...mockJobs];
      
      if (filters.search) {
        filteredJobs = filteredJobs.filter(job => 
          job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.location) {
        filteredJobs = filteredJobs.filter(job => 
          job.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      
      if (filters.type) {
        filteredJobs = filteredJobs.filter(job => 
          job.type.toLowerCase() === filters.type.toLowerCase()
        );
      }
      
      return { jobs: filteredJobs, total: filteredJobs.length };
    }
  },

  getJobById: async (id) => {
    try {
      const response = await api.get(`/jobs/${id}`);
      return response.data;
    } catch (error) {
      // Return mock data
      console.log('Backend not available, using mock data');
      const job = mockJobs.find(j => j._id === id);
      if (!job) throw new Error('Job not found');
      return job;
    }
  },

  createJob: async (jobData) => {
    const response = await api.post('/jobs', jobData);
    return response.data;
  },

  applyForJob: async (jobId, applicationData) => {
    try {
      const response = await api.post(`/jobs/${jobId}/apply`, applicationData);
      return response.data;
    } catch (error) {
      // Simulate success for demo
      console.log('Backend not available, simulating success');
      return { message: 'Application submitted successfully' };
    }
  },
};