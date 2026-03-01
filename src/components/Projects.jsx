import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Projects.css';

const Projects = ({ content }) => {
  const options = { triggerOnce: true, threshold: 0.2 }; 
  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: pRef, inView: pIn } = useInView(options);

  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // 🌟 เพิ่ม State สำหรับเลื่อนภาพใน Popup
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // 🔍 เรดาร์ดักจับ Dark Mode
  useEffect(() => {
    const checkTheme = () => {
      if (sectionRef.current) {
        const isDarkModeActive = !!sectionRef.current.closest('.dark-mode') || 
                                 document.body.classList.contains('dark-mode') ||
                                 document.documentElement.classList.contains('dark-mode');
        setIsDark(isDarkModeActive);
      }
    };
    
    checkTheme();
    const interval = setInterval(checkTheme, 300);
    return () => clearInterval(interval);
  }, []);

  if (!content || !content.items) return null;

  const projects = content.items;
  const length = projects.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalImgIndex(0); // 🌟 รีเซ็ตภาพกลับไปรูปแรกเสมอเมื่อเปิด Popup ใหม่
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'card-center';
    if (index === (currentIndex - 1 + length) % length) return 'card-left';
    if (index === (currentIndex + 1) % length) return 'card-right';
    return 'card-hidden';
  };

  // 🌟 ดึงรูปภาพทั้งหมดของโปรเจกต์ที่เลือก
  const modalImages = selectedProject?.images || (selectedProject?.imageUrl ? [selectedProject.imageUrl] : []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        
        {/* --- Header --- */}
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}> {content.titleHighlight}</span>
          </h2>
        </div>

        {/* --- Carousel 3D --- */}
        <div className={`carousel-wrapper reveal ${pIn ? 'reveal-visible' : ''}`} ref={pRef}>
          <div className="carousel-controls">
            <button className="control-arrow" onClick={prevSlide}><ChevronLeft size={28} /></button>
            <button className="control-arrow" onClick={nextSlide}><ChevronRight size={28} /></button>
          </div>

          <div className="carousel-track">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-3d-card ${getCardClass(index)}`}
                onClick={() => {
                  if (getCardClass(index) === 'card-left') prevSlide();
                  if (getCardClass(index) === 'card-right') nextSlide();
                }}
              >
                <div className="project-img-wrapper">
                  <img src={project.images?.[0] || project.imageUrl} alt={project.title} className="project-thumbnail" />
                  <div className="img-gradient-overlay"></div>
                </div>

                <div className="project-inner">
                  <div className="project-meta">
                    <span className="prj-tag">{content.docType}: {project.docType}</span>
                    <span className="prj-id">ID: {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech?.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <button onClick={(e) => { e.stopPropagation(); openModal(project); }} className="explore-btn">
                      {content.openBtn} <span className="arrow">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          ✨ COMPACT MODAL (รองรับภาพทุกสัดส่วน + เลื่อนภาพ)
      ========================================= */}
      {selectedProject && createPortal(
        <div className={`glass-modal-overlay ${isDark ? 'dark-mode' : ''}`} onClick={closeModal}>
          <div className="glass-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="glass-modal-close" onClick={closeModal}><X size={20} /></button>

            {/* ฝั่งซ้าย: รองรับภาพทุกสัดส่วน + ปุ่มเลื่อนรูป */}
            <div className="glass-modal-left">
              
              <div className="glass-modal-blur-bg">
                <img src={modalImages[modalImgIndex]} alt="blur-bg" />
              </div>
              
              <img src={modalImages[modalImgIndex]} alt={selectedProject.title} className="glass-modal-main-img" />
              
              {/* 🌟 แสดงปุ่มเลื่อนซ้ายขวา ก็ต่อเมื่อมีรูปมากกว่า 1 รูป */}
              {modalImages.length > 1 && (
                <div className="glass-gallery-controls">
                  <button className="glass-gallery-btn" onClick={() => setModalImgIndex(p => (p - 1 + modalImages.length) % modalImages.length)}>
                    <ChevronLeft size={24}/>
                  </button>
                  <button className="glass-gallery-btn" onClick={() => setModalImgIndex(p => (p + 1) % modalImages.length)}>
                    <ChevronRight size={24}/>
                  </button>
                </div>
              )}

              <div className="glass-modal-tag-l">{selectedProject.docType}</div>
            </div>

            {/* ฝั่งขวา: ข้อมูลโปรเจกต์ */}
            <div className="glass-modal-right-info">
              <h2 className="glass-modal-title">{selectedProject.title}</h2>
              
              <div className="glass-modal-tags">
                {selectedProject.tech?.map((t, i) => (
                  <span key={i} className="glass-tag">{t}</span>
                ))}
              </div>

              <div className="glass-modal-scroll-area">
                <p className="glass-modal-desc">{selectedProject.description}</p>

                {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                  <div className="glass-modal-rewards">
                    <h4>✨ {content.rewardsTitle}</h4>
                    <ul>
                      {selectedProject.achievements.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="glass-modal-btn">
                  {content.linkText} <span className="arrow">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body 
      )}
    </section>
  );
};

export default Projects;