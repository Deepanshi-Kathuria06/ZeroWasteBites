import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  FaLeaf, FaUtensils, FaHandsHelping, FaMobileAlt, 
  FaComments, FaChartLine, FaHeart, FaUsers,
  FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaSearch, FaCamera, FaExchangeAlt, FaChartPie
} from 'react-icons/fa';
import { GiFoodTruck, GiMeal } from 'react-icons/gi';
import { MdDeliveryDining, MdFoodBank } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const controls = useAnimation();
  const navigate = useNavigate();

  const MagneticButton = ({ children, className, onClick, pulse = false, to }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xOutput = useTransform(x, [-100, 100], [-10, 10]);
    const yOutput = useTransform(y, [-100, 100], [-10, 10]);
  
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      } else if (to) {
        navigate(to);
      }
    };
  
    return (
      <motion.button
        className={`magnetic-button ${className} ${pulse ? 'pulse' : ''}`}
        style={{ x: xOutput, y: yOutput }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width/2);
          y.set(e.clientY - rect.top - rect.height/2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        onClick={handleClick}
      >
        {children}
      </motion.button>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "ZeroWasteBites helped us redirect 200kg of food weekly to shelters in need.",
      author: "Maria's Catering",
      role: "Food Donor"
    },
    {
      quote: "As a small shelter, this platform has been a game-changer for our food supply.",
      author: "Hope Shelter",
      role: "Recipient"
    },
    {
      quote: "The easiest way to connect with organizations that need food donations.",
      author: "Urban Bistro",
      role: "Restaurant Owner"
    }
  ];

  const stats = [
    { value: "1,200+", label: "Meals Saved Daily", icon: <GiMeal /> },
    { value: "350+", label: "Active Partners", icon: <FaUsers /> },
    { value: "85%", label: "Reduction in Waste", icon: <FaLeaf /> },
    { value: "24/7", label: "Availability", icon: <FaClock /> }
  ];

  const steps = [
    {
      title: "1. Identify Surplus",
      description: "Restaurants and grocery stores identify surplus food that's still good to eat",
      icon: <FaSearch className="step-icon" />,
      position: "step-1"
    },
    {
      title: "2. Quick Listing",
      description: "Donors snap a photo and list available items in seconds",
      icon: <FaCamera className="step-icon" />,
      position: "step-2"
    },
    {
      title: "3. Smart Matching",
      description: "Our system matches donations with nearby shelters and food banks",
      icon: <FaExchangeAlt className="step-icon" />,
      position: "step-3"
    },
    {
      title: "4. Scheduled Pickup",
      description: "Volunteers or our partners arrange convenient pickup",
      icon: <MdDeliveryDining className="step-icon" />,
      position: "step-4"
    },
    {
      title: "5. Impact Tracking",
      description: "See your environmental and social impact in real-time",
      icon: <FaChartLine className="step-icon" />,
      position: "step-5"
    }
  ];

  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor your donations from listing to delivery with our live tracking system",
      icon: <FaChartLine className="feature-icon" />,
      color: "#4CAF50"
    },
    {
      title: "Smart Notifications",
      description: "Get alerts when food matching your needs becomes available nearby",
      icon: <FaMobileAlt className="feature-icon" />,
      color: "#2196F3"
    },
    {
      title: "Impact Analytics",
      description: "See how much you've contributed to reducing food waste and helping others",
      icon: <FaChartPie className="feature-icon" />,
      color: "#FFC107"
    },
    {
      title: "Secure Messaging",
      description: "Communicate directly with donors/recipients through our encrypted chat",
      icon: <FaComments className="feature-icon" />,
      color: "#F44336"
    },
    {
      title: "Volunteer Network",
      description: "Access our community of volunteers for food pickup and delivery",
      icon: <FaUsers className="feature-icon" />,
      color: "#9C27B0"
    },
    {
      title: "Food Safety Guides",
      description: "Access our comprehensive food handling and safety resources",
      icon: <MdFoodBank className="feature-icon" />,
      color: "#00BCD4"
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="logo"
        >
          <FaLeaf className="logo-icon" />
          Zero<span>Waste</span>Bites
        </motion.div>
        
        <nav className="nav">
          <ul className="nav-links">
            <motion.li 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a href="#home">Home</a>
            </motion.li>
            <motion.li 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a href="#how-it-works">How It Works</a>
            </motion.li>
            <motion.li 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#features">Features</a>
            </motion.li>
            <motion.li 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#testimonials">Testimonials</a>
            </motion.li>
            <motion.li 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </nav>
        
        <MagneticButton className="cta-button" to="/join">
          Join Now
        </MagneticButton>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bridging <span>Excess Food</span> and <span>Need</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ZeroWasteBites connects food donors with those in need, reducing food waste and fighting hunger in your community.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton className="cta-button pulse" to="/donate">Donate Food</MagneticButton>
            <MagneticButton className="secondary-button" to="/request">Request Food</MagneticButton>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="floating-elements">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="floating-element"
                animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <motion.div 
          className="section-header center-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Simple Process</h2>
          <p>From surplus to solution in just a few easy steps</p>
        </motion.div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`step-card ${step.position}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-icon-container">
                {step.icon}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <motion.div 
          className="section-header center-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Key Features</h2>
          <p>Powerful tools to make food donation seamless and effective</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="feature-icon-container"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <motion.div 
          className="section-header center-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>What Our Community Says</h2>
          <p>Hear from donors and recipients using our platform</p>
        </motion.div>
        
        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">"</div>
              <p>{testimonials[activeTestimonial].quote}</p>
              <div className="testimonial-author">
                <h4>{testimonials[activeTestimonial].author}</h4>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Green Background */}
      <section className="cta-section green-bg">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Make a Difference?</h2>
          <p>Join hundreds of others reducing food waste in your community</p>
          <div className="cta-buttons">
            <MagneticButton className="cta-button white-button pulse" to="/join">Sign Up Now</MagneticButton>
            <MagneticButton className="secondary-button white-outline" to="/about">Learn More</MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div 
          className="section-header center-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any questions</p>
        </motion.div>
        
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>123 Green Street, Eco City</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>contact@zerowastebites.org</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <MagneticButton type="submit" className="cta-button">Send Message</MagneticButton>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <FaLeaf className="logo-icon" />
                <h3>ZeroWasteBites</h3>
                <p>Bridging excess food and need</p>
              </div>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Food Safety</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ZeroWasteBites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;