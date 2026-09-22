import React from 'react';
import './Home.css';
import photo from './Nikhil.jpeg';   // ✅ Component folder me hai

const Home = () => {
  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="hero-container">
        {/* LEFT — Text */}
        <div className="hero-text">
          <span className="hero-badge">👋 Hello, I'm</span>

          <h1 className="hero-name">
            Nikhil <span className="gradient-text">Chouhan</span>
          </h1>

          <h2 className="hero-role">
            <span>Full Stack Developer</span>
          </h2>

          <p className="hero-desc">
            I build modern, fast and beautiful web applications using
            React, Node.js and MongoDB. Passionate about clean UI
            and smooth user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>Hire Me</span>
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/nikhilchouhan1234"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-image">
          <div className="image-glow"></div>
          <div className="image-wrapper">
            <img src={photo} alt="Nikhil Chouhan" />
          </div>

          <div className="float-card float-1">
            <span className="dot"></span> Available for work
          </div>
          <div className="float-card float-2">
            💻 2+ Years Experience
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <span></span>
      </a>
    </section>
  );
};

export default Home;