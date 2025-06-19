import React, { useState, useEffect } from 'react';
import './RestaurantDashboard.css';

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [foodInventory, setFoodInventory] = useState([]);
  const [stats, setStats] = useState({
    listedToday: 0,
    pickedUp: 0,
    totalImpact: 0,
  });

  // ✅ Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const organizationName = user.organizationName || "Your Restaurant";

  useEffect(() => {
    const mockInventory = [
      { id: 1, name: 'Pasta Dishes', quantity: 15, type: 'prepared', expiry: '2025-06-20', status: 'available' },
      { id: 2, name: 'Bread Rolls', quantity: 24, type: 'bakery', expiry: '2025-06-19', status: 'reserved' },
    ];
    setFoodInventory(mockInventory);
    setStats({
      listedToday: mockInventory.length,
      pickedUp: 12,
      totalImpact: 42.5,
    });
  }, []);

  const handleAddFood = () => {
    const newItem = {
      id: foodInventory.length + 1,
      name: `New Item ${foodInventory.length + 1}`,
      quantity: 1,
      type: 'prepared',
      expiry: '2025-06-25',
      status: 'available',
    };
    setFoodInventory([...foodInventory, newItem]);
    setStats({
      ...stats,
      listedToday: stats.listedToday + 1,
    });
  };

  return (
    <div className="restaurant-dashboard">
      {/* ✅ Top Header */}
      <header className="dashboard-header">
        <div className="logo">ZeroWasteBites</div>
        <div className="restaurant-name">{organizationName}</div>
        <div className="user-controls">
          <button className="notification-btn">
            <i className="fas fa-bell"></i>
            <span className="badge">2</span>
          </button>
          <div className="user-dropdown">
            <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <nav className="side-nav">
          {["dashboard", "inventory", "requests", "analytics", "settings"].map((tab) => (
            <button
              key={tab}
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <i className={`fas fa-${tab === 'dashboard' ? 'tachometer-alt' : tab}`}></i>
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'dashboard' && (
          <div className="dashboard-view">
            <h2>Welcome, {organizationName}</h2>

            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-utensils"></i></div>
                <div className="stat-info">
                  <h3>Listed Today</h3>
                  <p>{stats.listedToday} items</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-check-circle"></i></div>
                <div className="stat-info">
                  <h3>Picked Up</h3>
                  <p>{stats.pickedUp} items</p>
                </div>
              </div>
              <div className="stat-card highlight">
                <div className="stat-icon"><i className="fas fa-leaf"></i></div>
                <div className="stat-info">
                  <h3>Total Impact</h3>
                  <p>{stats.totalImpact} kg CO₂ saved</p>
                </div>
              </div>
            </div>

            <div className="action-cards">
              <div className="action-card" onClick={handleAddFood}>
                <i className="fas fa-plus-circle"></i>
                <h3>Add Food</h3>
                <p>List surplus food items</p>
              </div>
              <div className="action-card">
                <i className="fas fa-history"></i>
                <h3>History</h3>
                <p>View past donations</p>
              </div>
              <div className="action-card">
                <i className="fas fa-award"></i>
                <h3>Impact</h3>
                <p>See your contribution</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="inventory-view">
            <h2>Food Inventory</h2>
            <button className="primary-btn" onClick={handleAddFood}>
              <i className="fas fa-plus"></i> Add Food
            </button>
            <div className="inventory-table">
              <div className="table-header">
                <div className="header-item">Item</div>
                <div className="header-item">Quantity</div>
                <div className="header-item">Type</div>
                <div className="header-item">Expiry</div>
                <div className="header-item">Status</div>
                <div className="header-item">Actions</div>
              </div>
              {foodInventory.map((item) => (
                <div key={item.id} className="table-row">
                  <div className="row-item">{item.name}</div>
                  <div className="row-item">{item.quantity}</div>
                  <div className="row-item">{item.type}</div>
                  <div className="row-item">{item.expiry}</div>
                  <div className="row-item">
                    <span className={`status-badge ${item.status}`}>{item.status}</span>
                  </div>
                  <div className="row-item actions">
                    <button className="action-btn"><i className="fas fa-edit"></i></button>
                    <button className="action-btn"><i className="fas fa-trash"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="requests-view">
            <h2>Pickup Requests</h2>
            <p>Manage your pickup requests here.</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-view">
            <h2>Analytics</h2>
            <p>View your impact analytics here.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-view">
            <h2>Restaurant Settings</h2>
            <p>Configure your restaurant profile and preferences.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default RestaurantDashboard;
