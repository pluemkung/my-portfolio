import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = ({ content }) => {
  const options = { triggerOnce: false, threshold: 0.1, rootMargin: '100px 0px' };

  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: pRef, inView: pIn } = useInView(options);

  // 🟢 1. สร้าง State สำหรับเปิด/ปิด Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // ฟังก์ชันเปิด Modal (รับข้อมูลโปรเจกต์ที่โดนคลิกมาเก็บไว้)
  const openModal = (project) => {
    setSelectedProject(project);
    // ปิดการเลื่อนหน้าจอชั่วคราวตอนเปิด Modal
    document.body.style.overflow = 'hidden'; 
  };

  // ฟังก์ชันปิด Modal
  const closeModal = () => {
    setSelectedProject(null);
    // คืนค่าให้เลื่อนหน้าจอได้ปกติ
    document.body.style.overflow = 'auto'; 
  };

  if (!content) return null;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* หัวข้อ Section */}
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}> {content.titleHighlight}</span>
          </h2>
          {content.subtitle && <p className="section-subtitle">{content.subtitle}</p>}
        </div>

        {/* 🟢 Grid ผลงาน */}
        <div className="projects-grid" ref={pRef}>
          {content.items.map((project, index) => (
            <div key={index} className={`project-card reveal delay-${(index % 3) + 1} ${pIn ? 'reveal-visible' : ''}`}>
              
              <div className="project-img-wrapper">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-thumbnail" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="icon-placeholder">📷 NO_IMAGE_DATA</span>
                  </div>
                )}
                <div className="img-gradient-overlay"></div>
              </div>

              <div className="project-inner">
                <div className="project-meta">
                  <span className="prj-tag">DOC_TYPE: {project.docType || 'ENGINEER'}</span>
                  <span className="prj-id">ID: {String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech && project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  {/* ⚡ 2. เปลี่ยนจากแท็ก <a> เป็น <button> เพื่อเปิด Modal แทน */}
                  <button onClick={() => openModal(project)} className="explore-btn">
                    OPEN_DATA <span className="arrow">↗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* =========================================================
          🔥 MODAL GLASSMORPHISM (ฉบับย่อส่วน & คลีน)
      ========================================================= */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* 🟢 1. รูปภาพด้านบน (ปรับให้เตี้ยลง ไม่ล้นจอ) */}
            <div className="modal-img-container">
              {selectedProject.imageUrl ? (
                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              ) : (
                <div className="modal-no-img">NO_IMAGE_DATA</div>
              )}
              <div className="modal-scanline"></div>
            </div>

            <div className="modal-info-container">
              <div className="modal-meta">
                <span className="prj-tag">DOC_TYPE: {selectedProject.docType || 'ENGINEER'}</span>
              </div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>
              
              {/* 🟢 2. ช่องใส่ผลงาน/รางวัลที่ได้ (Achievements) */}
              <div className="modal-achievements">
                <h4>🏆 REWARDS & ACHIEVEMENTS</h4>
                <ul>
                  {selectedProject.achievements ? (
                    selectedProject.achievements.map((achieve, idx) => (
                      <li key={idx}>{achieve}</li>
                    ))
                  ) : (
                    <li>- รออัปเดตข้อมูลผลงานและรางวัลที่ได้รับ...</li>
                  )}
                </ul>
              </div>

              <div className="project-tech modal-tech">
                {selectedProject.tech && selectedProject.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* 🟢 3. ปุ่มปิดแบบมินิมอล (ลบกากบาททิ้ง ใช้ปุ่มนี้แทน) */}
              <div className="modal-actions">
                <button className="modal-close-action-btn" onClick={closeModal}>
                  CLOSE_PANEL
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;