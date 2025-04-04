import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUserCircle, FaHistory, FaPlusCircle, FaHandsHelping,
  FaLeaf, FaChartLine, FaRecycle, FaTrophy,
  FaBell, FaCog, FaSignOutAlt, FaHeart,
  FaMapMarkerAlt, FaCalendarAlt, FaWeightHanging
} from 'react-icons/fa';
import { GiMeal, GiEarthAmerica } from 'react-icons/gi';
import { MdFoodBank, MdDeliveryDining } from 'react-icons/md';
import './Dashboard.css';

const DonorDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userPoints, setUserPoints] = useState(245);
  const [userLevel, setUserLevel] = useState(3);
  const [notifications, setNotifications] = useState(3);
  const navigate = useNavigate();

  // Sample data
  const donations = [
    { 
      id: 1, 
      date: '2023-05-15', 
      foodType: 'Fresh Vegetables', 
      quantity: '10kg', 
      status: 'Delivered',
      recipient: 'Hope Shelter',
      impact: '25 meals provided'
    },
    { 
      id: 2, 
      date: '2023-06-02', 
      foodType: 'Packaged Meals', 
      quantity: '25 servings', 
      status: 'Completed',
      recipient: 'Community Kitchen',
      impact: '50 meals provided'
    },
    { 
      id: 3, 
      date: '2023-06-15', 
      foodType: 'Bakery Items', 
      quantity: '15 loaves', 
      status: 'Scheduled',
      recipient: 'Youth Center',
      impact: '30 meals estimated'
    }
  ];

  const requests = [
    { 
      id: 1, 
      organization: 'Hope Shelter', 
      foodType: 'Fruits', 
      quantity: '5kg', 
      distance: '2.5km',
      urgency: 'High',
      deadline: 'Tomorrow'
    },
    { 
      id: 2, 
      organization: 'Community Kitchen', 
      foodType: 'Bakery Items', 
      quantity: '15 loaves', 
      distance: '1.8km',
      urgency: 'Medium',
      deadline: 'In 3 days'
    },
    { 
      id: 3, 
      organization: 'Senior Center', 
      foodType: 'Ready-to-eat Meals', 
      quantity: '20 servings', 
      distance: '3.2km',
      urgency: 'High',
      deadline: 'Today'
    }
  ];

  const impactStats = [
    { metric: 'Total Donations', value: '15', icon: <FaLeaf /> },
    { metric: 'Food Saved', value: '120kg', icon: <FaRecycle /> },
    { metric: 'Meals Provided', value: '300+', icon: <GiMeal /> },
    { metric: 'CO2 Reduced', value: '250kg', icon: <GiEarthAmerica /> }
  ];

  // Simulate points increase
  useEffect(() => {
    const interval = setInterval(() => {
      setUserPoints(prev => {
        const newPoints = prev + Math.floor(Math.random() * 5);
        setUserLevel(Math.floor(newPoints / 100) + 1);
        return newPoints;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donor-dashboard">
      {/* Header with User Controls */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo-container">
            <FaLeaf className="logo-icon" />
            <h1>ZeroWaste<span>Bites</span></h1>
          </div>
          <p className="tagline">
            Turning surplus into sustenance, one donation at a time
          </p>
        </div>
        
        <div className="header-right">
          <div className="notification-badge">
            <FaBell className="notification-icon" />
            {notifications > 0 && <span className="notification-count">{notifications}</span>}
          </div>
          <div className="user-controls">
            <button className="settings-btn">
              <FaCog />
            </button>
            <button className="logout-btn">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-container">
        {/* Sidebar Navigation */}
        <nav className="dashboard-sidebar">
          <div className="user-profile-card">
            <div className="avatar">
              <FaUserCircle />
            </div>
            <div className="user-info">
              <h3>Green Donor</h3>
              <p>Eco Warrior Level {userLevel}</p>
            </div>
            <div className="points-display">
              <span className="points">{userPoints}</span>
              <span className="points-label">Sustainability Points</span>
            </div>
          </div>
          
          <div className="sidebar-nav">
            <div 
              className={`sidebar-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUserCircle className="sidebar-icon" />
              <span>My Profile</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'donations' ? 'active' : ''}`}
              onClick={() => setActiveTab('donations')}
            >
              <FaHistory className="sidebar-icon" />
              <span>Past Donations</span>
              <span className="badge">{donations.length}</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => navigate('/join')}
            >
              <FaPlusCircle className="sidebar-icon" />
              <span>Create Donation</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              <FaHandsHelping className="sidebar-icon" />
              <span>View Requests</span>
              <span className="badge">{requests.length}</span>
            </div>
          </div>
          
          <div className="sustainability-card">
            <h4>Your Impact</h4>
            <div className="impact-stats">
              {impactStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-metric">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="dashboard-content">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="section-header">
                <h2><FaUserCircle /> My Profile</h2>
                <button className="edit-btn">Edit Profile</button>
              </div>
              
              <div className="profile-grid">
                <div className="profile-card">
                  <h3>Personal Information</h3>
                  <div className="info-group">
                    <div className="info-item">
                      <span className="info-label">Full Name:</span>
                      <span className="info-value">Green Donor</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email:</span>
                      <span className="info-value">donor@ecofriendly.com</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone:</span>
                      <span className="info-value">+1 (555) 123-4567</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location:</span>
                      <span className="info-value">Eco City</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-card">
                  <h3>Account Settings</h3>
                  <div className="info-group">
                    <div className="info-item">
                      <span className="info-label">Member Since:</span>
                      <span className="info-value">January 15, 2023</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Account Type:</span>
                      <span className="info-value">Food Donor</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Notification Preferences:</span>
                      <span className="info-value">Email & App</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-card achievements">
                  <h3>Your Achievements</h3>
                  <div className="badges-container">
                    <div className="badge-item">
                      <div className="badge-icon gold">
                        <FaTrophy />
                      </div>
                      <span>Eco Warrior</span>
                    </div>
                    <div className="badge-item">
                      <div className="badge-icon silver">
                        <FaLeaf />
                      </div>
                      <span>Food Saver</span>
                    </div>
                    <div className="badge-item">
                      <div className="badge-icon bronze">
                        <FaHeart />
                      </div>
                      <span>Community Hero</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-card stats">
                  <h3>Donation Statistics</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-value">15</div>
                      <div className="stat-label">Total Donations</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">120kg</div>
                      <div className="stat-label">Food Saved</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">300+</div>
                      <div className="stat-label">Meals Provided</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">85%</div>
                      <div className="stat-label">Completion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="donations-section">
              <div className="section-header">
                <h2><FaHistory /> Your Donation History</h2>
                <div className="filter-controls">
                  <select className="filter-select">
                    <option>All Donations</option>
                    <option>Completed</option>
                    <option>Scheduled</option>
                    <option>In Progress</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Search donations..." 
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="donations-list">
                {donations.map(donation => (
                  <div key={donation.id} className="donation-card">
                    <div className="donation-image">
                      <MdFoodBank />
                    </div>
                    <div className="donation-info">
                      <h3>{donation.foodType}</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <FaCalendarAlt className="info-icon" />
                          <span>{donation.date}</span>
                        </div>
                        <div className="info-item">
                          <FaWeightHanging className="info-icon" />
                          <span>{donation.quantity}</span>
                        </div>
                        <div className="info-item">
                          <FaUserCircle className="info-icon" />
                          <span>{donation.recipient}</span>
                        </div>
                        <div className="info-item">
                          <FaLeaf className="info-icon" />
                          <span>{donation.impact}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`status-badge ${donation.status.toLowerCase()}`}>
                      {donation.status}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pagination-controls">
                <button className="pagination-btn">Previous</button>
                <span className="page-indicator">Page 1 of 2</span>
                <button className="pagination-btn">Next</button>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="requests-section">
              <div className="section-header">
                <h2><FaHandsHelping /> Nearby Food Requests</h2>
                <div className="map-toggle">
                  <button className="map-btn">
                    <FaMapMarkerAlt /> View on Map
                  </button>
                </div>
              </div>
              
              <div className="requests-list">
                {requests.map(request => (
                  <div key={request.id} className="request-card">
                    <div className="request-header">
                      <h3>{request.organization}</h3>
                      <div className={`urgency-badge ${request.urgency.toLowerCase()}`}>
                        {request.urgency} Priority
                      </div>
                    </div>
                    
                    <div className="request-details">
                      <div className="detail-item">
                        <span className="detail-label">Food Needed:</span>
                        <span className="detail-value">{request.foodType}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Quantity:</span>
                        <span className="detail-value">{request.quantity}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Distance:</span>
                        <span className="detail-value">{request.distance}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Deadline:</span>
                        <span className="detail-value">{request.deadline}</span>
                      </div>
                    </div>
                    
                    <div className="request-actions">
                      <button className="fulfill-btn">
                        Fulfill Request
                      </button>
                      <button className="details-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="request-stats">
                <div className="stats-card">
                  <h4>Quick Stats</h4>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-value">{requests.length}</div>
                      <div className="stat-label">Active Requests</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">2.1km</div>
                      <div className="stat-label">Avg Distance</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">8.5kg</div>
                      <div className="stat-label">Avg Quantity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DonorDashboard;