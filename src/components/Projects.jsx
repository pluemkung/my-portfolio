import React from 'react';
import './Projects.css';

const Projects = ({ content }) => {
  if (!content) return null;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* --- หัวข้อ Section --- */}
        <div className="section-header">
          <div className="hero-badge" style={{ marginBottom: '15px' }}>
            <span className="badge-star">✦</span>
            <span className="badge-text">{content.badge}</span>
          </div>
          <h2 className="section-title">
            {content.titleStart}<span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        {/* --- Grid โปรเจกต์ --- */}
        <div className="projects-grid">
          {content.items.map((project, index) => (
            <div className="project-card" key={index}>
              {/* ส่วนรูปภาพโปรเจกต์ (กล่องจำลองใส่สีเทาโปร่งแสงไว้ก่อน) */}
              <div className="project-image-placeholder">
                <span className="image-icon">📷</span>
                {/* ถ้ามีรูปจริงในอนาคต สามารถใช้ <img src={project.image} alt={project.title} /> แทนได้ครับ */}
              </div>
              
              {/* ส่วนเนื้อหา */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
                
                {/* ปุ่มลิงก์ */}
                <a href={project.linkUrl} className="project-link" target="_blank" rel="noreferrer">
                  {project.linkText} <span className="arrow">↗</span>
                </a>
              </div>
              
              {/* ของตกแต่ง UI มุมการ์ด */}
              <div className="card-ui-corner top-right"></div>
              <div className="card-ui-corner bottom-left"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;