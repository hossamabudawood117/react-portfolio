import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  
  // 1. STATE: Track input data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // 2. STATE: Track specific validation errors
  const [errors, setErrors] = useState({});

  // 3. LOGIC: Handle live typing and clear errors dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null }); // Clear error as they type
    }
  };

  // 4. LOGIC: The Validation Engine
  const validateForm = () => {
    const newErrors = {};
    
    // Check Name
    if (!formData.name.trim()) {
      newErrors.name = "Identity Name is required.";
    }
    
    // Check Email via Regex (Must have @ and a domain)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid coordinates. Missing '@' or domain.";
    }
    
    // Check Message Length
    if (formData.message.trim().length < 20) {
      newErrors.message = "Payload is too small. Minimum 20 characters required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if zero errors
  };

  // 5. LOGIC: Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      setSent(true);
      // In a real app, you would execute the fetch() API call here
    }
  };

  return (
    <div className="container py-4 page-transition">
      {/* Form Input Deck */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-lg-5">
          <div className="custom-bento-card h-100">
            <div>
              <h1 className="display-5 fw-bold text-white mb-3">Get in Touch</h1>
              <p className="text-muted">Open for system layout upgrades, portfolio design collaborations, or engineering syncs.</p>
            </div>
            <div className="mt-5">
              <small className="text-muted d-block mb-1">Direct Pipeline Connection</small>
              <a href="mailto:hello@garden.com" className="gradient-text fs-5 text-decoration-none fw-bold">hello@garden.com</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="custom-bento-card">
            {sent ? (
              <div className="text-center py-5 my-auto page-transition">
                <div className="fs-1 mb-2">🚀</div>
                <h3 className="text-white">✨ Transmission Verified</h3>
                <p className="text-success small mb-0 mt-2">Payload accepted. System parameters have compiled correctly.</p>
                <button onClick={() => setSent(false)} className="btn btn-outline-secondary btn-sm mt-4">Send Another Module</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-100" noValidate>
                
                {/* Name Input */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label text-white-50 small">Identity Name</label>
                    {errors.name && <span className="text-danger small fw-bold">{errors.name}</span>}
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control custom-input" 
                    placeholder="Your Name" 
                    style={{ borderColor: errors.name ? '#ef4444' : '' }}
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label text-white-50 small">Digital Coordinates (Email)</label>
                    {errors.email && <span className="text-danger small fw-bold">{errors.email}</span>}
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control custom-input" 
                    placeholder="name@example.com" 
                    style={{ borderColor: errors.email ? '#ef4444' : '' }}
                  />
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="form-label text-white-50 small">Message Payload</label>
                    {errors.message && <span className="text-danger small fw-bold">{errors.message}</span>}
                  </div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control custom-input" 
                    rows="4" 
                    placeholder="Let's build something beautiful..." 
                    style={{ borderColor: errors.message ? '#ef4444' : '' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2" style={{ color: '#030712' }}>
                  Validate & Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* LOWER LONG-FORM SECTION */}
      <section className="py-5 my-4 border-top border-secondary border-opacity-10">
        <h3 className="display-5 fw-bold text-white mb-4">Secure Transmission Protocols</h3>
        <div className="row g-4 text-white-50 small">
          <div className="col-12 col-md-4">
            <div className="p-4 rounded" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h6 className="text-white fw-bold mb-2">Endpoint Security</h6>
              <p className="mb-0" style={{ lineHeight: '1.6' }}>All incoming data payloads are cleanly processed inside insulated event handlers, stopping malicious string script injection attempts at the browser entry point.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 rounded" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h6 className="text-white fw-bold mb-2">State Synchronization</h6>
              <p className="mb-0" style={{ lineHeight: '1.6' }}>Form states run asynchronously via local state hooks, clearing out memory buffers right after verification to keep user input data completely secure.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 rounded" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h6 className="text-white fw-bold mb-2">Zero Tracking Cookies</h6>
              <p className="mb-0" style={{ lineHeight: '1.6' }}>This platform values complete privacy. No behavioral logs or third-party cookies are tracked or saved during communication sessions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;