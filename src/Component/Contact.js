import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 97708 33439',
      link: 'tel:+919770833439',
      color: 'cyan',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'nikhilchouhan02006@gmail.com',
      link: 'mailto:nikhilchouhan02006@gmail.com',
      color: 'pink',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'India',
      link: '#',
      color: 'lime',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-blob contact-blob-1"></div>
      <div className="contact-blob contact-blob-2"></div>
      <div className="contact-blob contact-blob-3"></div>

      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">✦ Get In Touch</span>
          <h2 className="contact-title">
            Contact <span className="contact-gradient">Me</span>
          </h2>
          <p className="contact-subtitle">
            Got a project idea? Or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you want to talk directly or through social media — here are my contact details.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a
                  href={info.link}
                  className={`contact-card contact-${info.color}`}
                  key={index}
                >
                  <div className="contact-card-icon">{info.icon}</div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://github.com/nikhilchouhan1234"
              target="_blank"
              rel="noopener noreferrer"
              className="github-card"
            >
              <div className="github-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="github-text">
                <span className="github-label">GitHub</span>
                <span className="github-value">@nikhilchouhan1234</span>
              </div>
              <span className="github-arrow">→</span>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/nikhilchouhan1234"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3 className="contact-form-title">Send a Message</h3>

            {submitted && (
              <div className="form-success">
                ✅ Message sent! I'll reply soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nikhil Chouhan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <span className="submit-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;