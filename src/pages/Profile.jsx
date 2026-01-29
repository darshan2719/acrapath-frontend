import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div className="form-container">
        <h2>My Profile</h2>
        
        <div style={{ marginTop: '30px' }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={user.name || 'N/A'} disabled />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={user.email || 'N/A'} disabled />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" value={user.role || 'N/A'} disabled />
          </div>

          <div className="form-group">
            <label>Member Since</label>
            <input 
              type="text" 
              value={user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'} 
              disabled 
            />
          </div>

          <button className="btn-primary" style={{ marginTop: '20px' }}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
