import React from 'react';
import './Hero.css';

const Hero = ({ content }) => {
  if (!content) return null;

  // ฟังก์ชันช่วยเลื่อนหน้าจอแบบนุ่มนวล
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* --- ฝั่งข้อความ --- */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-star">★</span>
            <span className="badge-text">{content.greeting}</span>
          </div>

          <h1 className="name-title">{content.name}</h1>
          <h3 className="role-text">{content.role}</h3>
          <p className="hero-desc">{content.description}</p>

          <div className="contact-area" style={{ marginBottom: '20px' }}>
            <span className="contact-info">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              {content.phone}
            </span>

            <span className="contact-info">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              {content.email}
            </span>
          </div>

          <div className="hero-btns">
            <button
              onClick={() => scrollToSection('projects')}
              className="zzz-btn-primary"
            >
              {content.viewProjects}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="zzz-btn-outline"
            >
              {content.contactMe}
            </button>
          </div>
        </div>

        {/* --- ฝั่งรูปโปรไฟล์ (Neon Trace Effect) --- */}
        <div className="hero-image-container">
          <div className="main-image-frame">
            {/* 🟢 ตัวรูปภาพ (Path ตามที่คุณวางไฟล์ไว้) */}
            <img
              src="/images/profile.png"
              alt="Natthakit"
              className="profile-img"
            />
            {/* 🟢 เส้นไฟวิ่งรอบตัว */}
            <div className="border-trace"></div>
            
            <div className="tag-id">#ID_NATTHAKIT_2026</div>
          </div>
        </div>
      </div>

      {/* --- Wave Animation --- */}
      <div className="hero-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 40" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            {/* 🟢 คลื่นเหลือ 3 ลูก */}
            <use href="#gentle-wave" x="48" y="5" fill="var(--wave-2)" />
            <use href="#gentle-wave" x="48" y="10" fill="var(--wave-3)" />
            <use href="#gentle-wave" x="48" y="15" fill="var(--wave-main)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;