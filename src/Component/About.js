import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML',       level: 78 },
    { name: 'CSS',        level: 80 },
    { name: 'React',      level: 95 },
    { name: 'Node.js',    level: 88 },
    { name: 'JavaScript', level: 92 },
  ];

  const stats = [
    { number: '25+',  label: 'Projects Done' },
    { number: '6 Monts',   label: 'Internship duraction' },
    { number: '15+',  label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-blob about-blob-1"></div>
      <div className="about-blob about-blob-2"></div>
      <div className="about-blob about-blob-3"></div>

      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">✦ About Me</span>
          <h2 className="about-title">
            I Build <span className="about-gradient">Great Websites</span>
          </h2>
          <p className="about-subtitle">
            Modern, fast and beautiful web experiences — perfect on every device.
          </p>
        </div>

        <div className="about-grid">
          {/* Left — Story */}
          <div className="about-story">
            <h3>Who Am I?</h3>
            <p>
              Hi, I'm <strong>Nikhil Chouhan</strong> — a passionate
              <span className="highlight"> Full Stack Developer</span>.
              I build great, fast and user-friendly websites
              that run smoothly on every device.
            </p>
            <p>
              With React, Node.js and MongoDB, I focus on both clean UI
              and a powerful backend. In every project,
              my goal is simple: <em>happy client, happy user.</em>
            </p>
            <p>
              New ideas, modern design and best practices — that's my
              identity. Let's build something amazing together! 🚀
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="hi-icon">🎨</span>
                <div>
                  <h4>Modern Design</h4>
                  <p>Clean & attractive UI</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">⚡</span>
                <div>
                  <h4>Fast Performance</h4>
                  <p>Optimized & smooth</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📱</span>
                <div>
                  <h4>Responsive</h4>
                  <p>Perfect on every device</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Skills */}
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="about-cta">
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;