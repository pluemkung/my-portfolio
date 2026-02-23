import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = ({ content }) => {
  // 🟢 ตั้งค่า Option เดียวกับหน้า About เพื่อให้จังหวะ Scroll เหมือนกัน
  const options = { triggerOnce: false, threshold: 0.1, rootMargin: '100px 0px' };

  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: pRef, inView: pIn } = useInView(options);

  if (!content) return null;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* หัวข้อ Section: ใช้ระบบ Reveal แบบหน้า About */}
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}>{content.titleHighlight}</span>
          </h2>
          {content.subtitle && <p className="section-subtitle">{content.subtitle}</p>}
        </div>

        {/* 🟢 Grid ผลงาน: ทยอยเฟดโผล่ทีละใบด้วยระบบ Delay */}
        <div className="projects-grid" ref={pRef}>
          {content.items.map((project, index) => (
            <div 
              key={index} 
              className={`matsuri-card project-item reveal delay-${(index % 3) + 1} ${pIn ? 'reveal-visible' : ''}`}
            >
              {/* ส่วนรูปภาพโปรเจกต์ */}
              <div className="project-image-wrapper">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-thumbnail" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="icon-placeholder">📷</span>
                  </div>
                )}
              </div>

              <div className="project-inner">
                {/* ดึงค่า DOC_TYPE และ ID มาโชว์ */}
                <div className="project-meta">
                  <span className={`prj-tag tag-${project.docType?.toLowerCase() || 'engineer'}`}>
                    DOC_TYPE: {project.docType || 'ENGINEER'}
                  </span>
                  <span className="prj-id">ID: {String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href={project.linkUrl} className="explore-btn" target="_blank" rel="noreferrer">
                    OPEN_DATA <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;