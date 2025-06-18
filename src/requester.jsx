import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUserCircle, FaHistory, FaPlusCircle, FaHandsHelping,
  FaLeaf, FaChartLine, FaRecycle, FaTrophy,
  FaBell, FaCog, FaSignOutAlt, FaHeart,
  FaMapMarkerAlt, FaCalendarAlt, FaWeightHanging,
  FaCheck, FaTimes, FaClock, FaUserFriends
} from 'react-icons/fa';
import { GiMeal, GiEarthAmerica } from 'react-icons/gi';
import { MdFoodBank, MdDeliveryDining } from 'react-icons/md';
import './Dashboard.css';

const RequesterDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userPoints, setUserPoints] = useState(180);
  const [userLevel, setUserLevel] = useState(2);
  const [notifications, setNotifications] = useState(5);
  const navigate = useNavigate();

  // Sample data for requester
  const requests = [
    { 
      id: 1, 
      date: '2023-06-10', 
      foodType: 'Fresh Fruits', 
      quantity: '15kg', 
      status: 'Accepted',
      donor: 'Green Grocers',
      estimatedDelivery: 'Tomorrow, 2-4pm',
      impact: 'Will provide 35 meals'
    },
    { 
      id: 2, 
      date: '2023-06-05', 
      foodType: 'Bakery Items', 
      quantity: '20 loaves', 
      status: 'Pending',
      donor: 'Urban Bakery',
      estimatedDelivery: 'Waiting for confirmation',
      impact: 'Will provide 40 meals'
    },
    { 
      id: 3, 
      date: '2023-05-28', 
      foodType: 'Packaged Meals', 
      quantity: '30 servings', 
      status: 'Rejected',
      donor: 'City Catering',
      estimatedDelivery: 'N/A',
      impact: 'Would have provided 30 meals',
      reason: 'No delivery available in your area'
    }
  ];

  const availableDonors = [
    { 
      id: 1, 
      name: 'Green Grocers', 
      type: 'Supermarket', 
      distance: '1.2km',
      rating: '4.8/5',
      lastActive: '2 hours ago',
      preferredItems: 'Produce, Dairy, Bakery'
    },
    { 
      id: 2, 
      name: 'Urban Bakery', 
      type: 'Bakery', 
      distance: '2.5km',
      rating: '4.5/5',
      lastActive: 'Today',
      preferredItems: 'Bread, Pastries'
    },
    { 
      id: 3, 
      name: 'Community Kitchen', 
      type: 'Restaurant', 
      distance: '3.1km',
      rating: '4.9/5',
      lastActive: '1 hour ago',
      preferredItems: 'Prepared meals'
    }
  ];

  const impactStats = [
    { metric: 'Total Requests', value: '24', icon: <FaHandsHelping /> },
    { metric: 'Meals Received', value: '450+', icon: <GiMeal /> },
    { metric: 'Food Received', value: '180kg', icon: <FaRecycle /> },
    { metric: 'Success Rate', value: '78%', icon: <FaChartLine /> }
  ];

  // Enhanced Profile Data for Requester
  const personalInfo = {
    fullName: "Community Hope Shelter",
    email: "hope.shelter@community.org",
    phone: "+1 (555) 123-7890",
    location: "123 Charity Ave, Eco City",
    organizationType: "Non-profit Shelter",
    beneficiaries: "50+ daily",
    bio: "Providing meals for homeless and low-income families since 2015. We rely on food donations to serve our community."
  };

  const accountSettings = {
    accountType: "Verified Organization",
    notificationPref: "Email & SMS Alerts",
    communicationPref: "Immediate request updates",
    privacySettings: "Organization details public",
    pickupPreferences: "Any time after 10am",
    foodPreferences: "All types accepted"
  };

  const achievements = [
    {
      name: "Reliable Partner",
      icon: <FaTrophy />,
      level: "Gold",
      dateEarned: "May 2023",
      description: "Consistently rated 5 stars by donors"
    },
    {
      name: "Community Builder",
      icon: <FaHeart />,
      level: "Silver",
      dateEarned: "March 2023",
      description: "Connected with 20+ local donors"
    },
    {
      name: "Food Rescuer",
      icon: <FaLeaf />,
      level: "Platinum",
      dateEarned: "January 2023",
      description: "Received 500+ kg of food donations"
    }
  ];

  const requestStatistics = {
    totalRequests: 24,
    mealsReceived: "450+",
    foodReceived: "180kg",
    successRate: "78%",
    avgResponseTime: "4.2 hours",
    topDonor: "Green Grocers (8 donations)",
    joinedDate: "October 2022"
  };

  // Simulate points increase
  useEffect(() => {
    const interval = setInterval(() => {
      setUserPoints(prev => {
        const newPoints = prev + Math.floor(Math.random() * 3);
        setUserLevel(Math.floor(newPoints / 100) + 1);
        return newPoints;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  // Simulate notification updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 30000);
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
            Connecting those in need with surplus food
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
              <h3>Hope Shelter</h3>
              <p>Community Partner Level {userLevel}</p>
            </div>
            <div className="points-display">
              <span className="points">{userPoints}</span>
              <span className="points-label">Community Points</span>
            </div>
          </div>
          
          <div className="sidebar-nav">
            <div 
              className={`sidebar-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUserCircle className="sidebar-icon" />
              <span>Organization Profile</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              <FaHandsHelping className="sidebar-icon" />
              <span>My Requests</span>
              <span className="badge">{requests.length}</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => navigate('/join')}
            >
              <FaPlusCircle className="sidebar-icon" />
              <span>Create Request</span>
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'donors' ? 'active' : ''}`}
              onClick={() => setActiveTab('donors')}
            >
              <FaUserFriends className="sidebar-icon" />
              <span>Available Donors</span>
              <span className="badge">{availableDonors.length}</span>
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
                <h2><FaUserCircle /> Organization Profile</h2>
                <button className="edit-btn">Edit Profile</button>
              </div>
              
              <div className="profile-grid">
                <div className="profile-card">
                  <h3>Organization Information</h3>
                  <div className="info-group">
                    <div className="info-item">
                      <span className="info-label">Organization Name:</span>
                      <span className="info-value">{personalInfo.fullName}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email:</span>
                      <span className="info-value">{personalInfo.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone:</span>
                      <span className="info-value">{personalInfo.phone}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location:</span>
                      <span className="info-value">{personalInfo.location}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Organization Type:</span>
                      <span className="info-value">{personalInfo.organizationType}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Daily Beneficiaries:</span>
                      <span className="info-value">{personalInfo.beneficiaries}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">About Us:</span>
                      <span className="info-value">{personalInfo.bio}</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-card">
                  <h3>Account Settings</h3>
                  <div className="info-group">
                    <div className="info-item">
                      <span className="info-label">Account Type:</span>
                      <span className="info-value">{accountSettings.accountType}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Notification Preferences:</span>
                      <span className="info-value">{accountSettings.notificationPref}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Communication Preferences:</span>
                      <span className="info-value">{accountSettings.communicationPref}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Privacy Settings:</span>
                      <span className="info-value">{accountSettings.privacySettings}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Pickup Preferences:</span>
                      <span className="info-value">{accountSettings.pickupPreferences}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Food Preferences:</span>
                      <span className="info-value">{accountSettings.foodPreferences}</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-card achievements">
                  <h3>Your Achievements</h3>
                  <div className="badges-container">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="badge-item">
                        <div className={`badge-icon ${achievement.level.toLowerCase()}`}>
                          {achievement.icon}
                        </div>
                        <div className="badge-info">
                          <h4>{achievement.name}</h4>
                          <span className="badge-level">{achievement.level}</span>
                          <p className="badge-date">Earned: {achievement.dateEarned}</p>
                          <p className="badge-desc">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="profile-card stats">
                  <h3>Request Statistics</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.totalRequests}</div>
                      <div className="stat-label">Total Requests</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.mealsReceived}</div>
                      <div className="stat-label">Meals Received</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.foodReceived}</div>
                      <div className="stat-label">Food Received</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.successRate}</div>
                      <div className="stat-label">Success Rate</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.avgResponseTime}</div>
                      <div className="stat-label">Avg Response Time</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.topDonor}</div>
                      <div className="stat-label">Top Donor</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{requestStatistics.joinedDate}</div>
                      <div className="stat-label">Member Since</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="requests-section">
              <div className="section-header">
                <h2><FaHandsHelping /> My Food Requests</h2>
                <div className="filter-controls">
                  <select className="filter-select">
                    <option>All Requests</option>
                    <option>Accepted</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Search requests..." 
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="requests-list">
                {requests.map(request => (
                  <div key={request.id} className="request-card">
                    <div className="request-header">
                      <h3>{request.foodType}</h3>
                      <div className={`status-badge ${request.status.toLowerCase()}`}>
                        {request.status === 'Accepted' && <FaCheck className="status-icon" />}
                        {request.status === 'Rejected' && <FaTimes className="status-icon" />}
                        {request.status === 'Pending' && <FaClock className="status-icon" />}
                        {request.status}
                      </div>
                    </div>
                    
                    <div className="request-details">
                      <div className="detail-item">
                        <FaCalendarAlt className="detail-icon" />
                        <span className="detail-label">Request Date:</span>
                        <span className="detail-value">{request.date}</span>
                      </div>
                      <div className="detail-item">
                        <FaWeightHanging className="detail-icon" />
                        <span className="detail-label">Quantity:</span>
                        <span className="detail-value">{request.quantity}</span>
                      </div>
                      <div className="detail-item">
                        <FaUserFriends className="detail-icon" />
                        <span className="detail-label">Donor:</span>
                        <span className="detail-value">{request.donor}</span>
                      </div>
                      <div className="detail-item">
                        <MdDeliveryDining className="detail-icon" />
                        <span className="detail-label">Estimated Delivery:</span>
                        <span className="detail-value">{request.estimatedDelivery}</span>
                      </div>
                      <div className="detail-item">
                        <GiMeal className="detail-icon" />
                        <span className="detail-label">Impact:</span>
                        <span className="detail-value">{request.impact}</span>
                      </div>
                      {request.status === 'Rejected' && request.reason && (
                        <div className="detail-item">
                          <FaTimes className="detail-icon" />
                          <span className="detail-label">Reason:</span>
                          <span className="detail-value">{request.reason}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="request-actions">
                      {request.status === 'Pending' && (
                        <button className="cancel-btn">
                          Cancel Request
                        </button>
                      )}
                      {request.status === 'Accepted' && (
                        <button className="track-btn">
                          Track Delivery
                        </button>
                      )}
                      <button className="details-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pagination-controls">
                <button className="pagination-btn">Previous</button>
                <span className="page-indicator">Page 1 of 1</span>
                <button className="pagination-btn">Next</button>
              </div>
            </div>
          )}

          {activeTab === 'donors' && (
            <div className="donors-section">
              <div className="section-header">
                <h2><FaUserFriends /> Available Donors</h2>
                <div className="filter-controls">
                  <select className="filter-select">
                    <option>All Donors</option>
                    <option>Supermarkets</option>
                    <option>Restaurants</option>
                    <option>Bakeries</option>
                    <option>Individuals</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Search donors..." 
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="donors-list">
                {availableDonors.map(donor => (
                  <div key={donor.id} className="donor-card">
                    <div className="donor-header">
                      <div className="donor-avatar">
                        <FaUserCircle />
                      </div>
                      <div className="donor-info">
                        <h3>{donor.name}</h3>
                        <span className="donor-type">{donor.type}</span>
                      </div>
                      <div className="donor-rating">
                        {donor.rating}
                      </div>
                    </div>
                    
                    <div className="donor-details">
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span className="detail-label">Distance:</span>
                        <span className="detail-value">{donor.distance}</span>
                      </div>
                      <div className="detail-item">
                        <FaClock className="detail-icon" />
                        <span className="detail-label">Last Active:</span>
                        <span className="detail-value">{donor.lastActive}</span>
                      </div>
                      <div className="detail-item">
                        <MdFoodBank className="detail-icon" />
                        <span className="detail-label">Preferred Items:</span>
                        <span className="detail-value">{donor.preferredItems}</span>
                      </div>
                    </div>
                    
                    <div className="donor-actions">
                      <button className="request-btn">
                        Request Donation
                      </button>
                      <button className="message-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="donor-stats">
                <div className="stats-card">
                  <h4>Donor Insights</h4>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-value">{availableDonors.length}</div>
                      <div className="stat-label">Active Donors</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">2.3km</div>
                      <div className="stat-label">Avg Distance</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">4.7/5</div>
                      <div className="stat-label">Avg Rating</div>
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

export default RequesterDashboard;