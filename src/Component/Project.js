import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: 'Dance Academy',
      category: 'Web Design',
      description:
        'A modern dance academy website with class schedules, trainer profiles, and an online booking system.',
      tech: ['React', 'CSS', 'Node.js'],
      color: 'cyan',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'E-Commerce Furniture',
      category: 'E-Commerce',
      description:
        'An online furniture shopping website — with product listing, cart, checkout, and payment integration.',
      tech: ['React', 'MongoDB', 'Stripe'],
      color: 'pink',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Restaurant Website',
      category: 'Web App',
      description:
        'A restaurant website with menu display, online table booking, and a food ordering system.',
      tech: ['React', 'Node.js', 'Express'],
      color: 'lime',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="projects">
      {/* Background blobs */}
      <div className="proj-blob proj-blob-1"></div>
      <div className="proj-blob proj-blob-2"></div>
      <div className="proj-blob proj-blob-3"></div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="projects-badge">✦ My Work</span>
          <h2 className="projects-title">
            My <span className="projects-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A few selected projects through which I have showcased my skills.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card project-${project.color}`}
              key={index}
            >
              {/* Project Image */}
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay"></div>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Project <span className="arrow">→</span>
                </a>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-cta-wrap">
          <a href="#contact" className="projects-cta">
            <span>Have a Project? Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;