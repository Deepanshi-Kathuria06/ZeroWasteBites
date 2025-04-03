import React, { useState } from 'react';
import './FoodDonationApp.css';

const FoodDonationApp = () => {
  const [isRequesterView, setIsRequesterView] = useState(false);

  const toggleView = () => {
    setIsRequesterView(!isRequesterView);
  };

  return (
    <div className="app-container">
      {/* Left Section - Form */}
      <div className="form-section">
        {isRequesterView ? (
          <RequesterForm toggleView={toggleView} />
        ) : (
          <DonorForm toggleView={toggleView} />
        )}
      </div>

      {/* Right Section - Media */}
      <div className="media-section">
        <div className="media-content">
          <div className="image-upload-preview">
            {!isRequesterView && (
              <div className="upload-placeholder">
                <div className="upload-icon">📷</div>
                <p>Food Image Preview</p>
              </div>
            )}
          </div>
          <h2>
            {isRequesterView
              ? "Get the Food You Need"
              : "Share Your Excess, Fight Hunger"}
          </h2>
          <p>
            {isRequesterView
              ? "Request food donations from local donors and reduce food waste in your community."
              : "Your donation can help feed those in need while reducing food waste."}
          </p>
        </div>
        <div className="view-switch" onClick={toggleView}>
          {isRequesterView
            ? 'Want to donate food instead?'
            : 'Need to request food?'}
        </div>
      </div>
    </div>
  );
};

// Donor Food Registration Form
const DonorForm = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    foodType: '',
    quantity: '',
    pickupTime: '',
    pickupLocation: '',
    expiryDate: '',
    foodCategory: 'vegetarian',
    additionalNotes: ''
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="form-content">
      <div className="form-header">
        <h1>Food Donation Registration</h1>
        <p>Help reduce food waste by sharing your excess food</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Organization/Individual Name</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Enter your name or organization"
            required
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Food Type</label>
            <input
              type="text"
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              placeholder="e.g., Fresh vegetables, Packaged meals"
              required
            />
          </div>

          <div className="input-group">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 5 kg, 10 servings"
              required
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Pickup Time</label>
            <input
              type="datetime-local"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Full address for pickup"
            required
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Food Category</label>
            <select
              name="foodCategory"
              value={formData.foodCategory}
              onChange={handleChange}
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
            </select>
          </div>

          <div className="input-group">
            <label>Upload Food Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any special instructions or details"
            rows="3"
          />
        </div>

        <button type="submit" className="submit-button">
          Register Donation
        </button>
      </form>
    </div>
  );
};

// Requester Food Request Form
const RequesterForm = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    foodType: '',
    quantity: '',
    foodCategory: 'vegetarian',
    additionalMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Requester form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="form-content">
      <div className="form-header">
        <h1>Food Request Form</h1>
        <p>Request food donations from local donors</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your complete address"
            required
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Contact number"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Food Type Needed</label>
            <input
              type="text"
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              placeholder="e.g., Fresh produce, Packaged food"
              required
            />
          </div>

          <div className="input-group">
            <label>Quantity Needed</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., For 5 people, 3 kg"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Food Category Preference</label>
          <select
            name="foodCategory"
            value={formData.foodCategory}
            onChange={handleChange}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten Free</option>
            <option value="any">Any</option>
          </select>
        </div>

        <div className="input-group">
          <label>Additional Message</label>
          <textarea
            name="additionalMessage"
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder="Any special requirements or details"
            rows="3"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default FoodDonationApp;