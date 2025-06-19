import React, { useState } from 'react';
import {
  FiEdit, FiBell, FiClock, FiMapPin, FiPackage, FiTruck
} from 'react-icons/fi';
import { FaLeaf, FaQrcode } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import './NGODashboardd.css';

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState('available');
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Pickup for Sandwiches approved!', time: '2h ago' },
    { id: 2, type: 'warning', message: 'Pickup for Pasta canceled!', time: '1d ago' },
  ]);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState({
    profile: {
      name: user?.organizationName || user?.name || "NGO User",
      location: user?.location || 'Unknown Location',
      members: 10,
    },
    availableFood: [
      {
        id: 1,
        restaurant: 'Delhi Dhaba',
        name: 'Rice Packs',
        type: 'Prepared',
        quantity: 10,
        expiry: '2 hours',
        distance: '1.5 km',
        image: 'rice.jpg',
      },
    ],
    pickups: [
      {
        id: 101,
        foodId: 1,
        restaurant: 'Delhi Dhaba',
        foodName: 'Rice Packs',
        quantity: 10,
        status: 'approved',
        pickupDate: '2025-06-18',
        qrCode: 'qr-101',
      },
    ],
  });

  const requestPickup = (foodId) => {
    const food = data.availableFood.find(item => item.id === foodId);
    const newPickup = {
      id: Date.now(),
      foodId,
      restaurant: food.restaurant,
      foodName: food.name,
      quantity: food.quantity,
      status: 'pending',
      pickupDate: new Date().toISOString().split('T')[0],
      qrCode: `qr-${Date.now()}`
    };
    setData({
      ...data,
      availableFood: data.availableFood.filter(item => item.id !== foodId),
      pickups: [newPickup, ...data.pickups],
    });
    setNotifications([
      { id: Date.now(), type: 'info', message: `Requested ${food.name}`, time: 'Just now' },
      ...notifications
    ]);
  };

  return (
    <div className="ngo-dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Welcome, {data.profile.name}</h1>
          <p><FiMapPin /> {data.profile.location} • {data.profile.members} members</p>
        </div>
        <div>
          <FiEdit title="Edit Profile" className="icon-btn" />
          <FiBell className="icon-btn" />
        </div>
      </header>

      <nav className="dashboard-tabs">
        <button onClick={() => setActiveTab('available')} className={activeTab === 'available' ? 'active' : ''}>Available Food</button>
        <button onClick={() => setActiveTab('pickups')} className={activeTab === 'pickups' ? 'active' : ''}>My Pickups</button>
        <button onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>Notifications</button>
      </nav>

      <main>
        {activeTab === 'available' && (
          <div className="food-grid">
            {data.availableFood.map(food => (
              <div key={food.id} className="food-card">
                <img src={`/images/${food.image}`} alt={food.name} />
                <h3>{food.name}</h3>
                <p><FiPackage /> {food.quantity} servings</p>
                <p><FiClock /> Expires in {food.expiry}</p>
                <p><FiMapPin /> {food.distance}</p>
                <button onClick={() => requestPickup(food.id)}><FiTruck /> Request</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pickups' && (
          <table className="pickup-table">
            <thead>
              <tr><th>Food</th><th>From</th><th>Status</th><th>QR</th></tr>
            </thead>
            <tbody>
              {data.pickups.map(pickup => (
                <tr key={pickup.id}>
                  <td>{pickup.foodName}</td>
                  <td>{pickup.restaurant}</td>
                  <td>{pickup.status}</td>
                  <td>
                    {pickup.status === 'approved' && (
                      <button onClick={() => { setSelectedPickup(pickup); setShowQRModal(true); }}>
                        <FaQrcode />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'notifications' && (
          <ul className="notifications">
            {notifications.map(note => (
              <li key={note.id} className={note.type}>{note.message} <span>{note.time}</span></li>
            ))}
          </ul>
        )}
      </main>

      {showQRModal && selectedPickup && (
        <div className="qr-modal">
          <div className="qr-content">
            <button className="close" onClick={() => setShowQRModal(false)}>&times;</button>
            <h2>QR Code for {selectedPickup.foodName}</h2>
            <QRCode value={selectedPickup.qrCode} size={200} />
            <p><FaLeaf /> Est. CO₂ Saved: {selectedPickup.quantity * 2.5} kg</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NGODashboard;
