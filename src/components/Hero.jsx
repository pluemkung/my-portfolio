import React from 'react';
import './Hero.css';

const Hero = ({ content }) => {
  // ป้องกัน Error หากไม่มีข้อมูลส่งมา
  if (!content) return null;

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          {/* ดึงข้อมูลภาษาตามที่เลือกไว้ใน App.jsx */}
          <div className="hero-badge">
            <span className="badge-star">★</span>
            <span className="badge-text">{content.greeting}</span>
          </div>

          <h1 className="name-title">
            {content.name}
          </h1>

          <h3 className="role-text">{content.role}</h3>
          <p className="hero-desc">{content.description}</p>

          {/* ข้อมูลติดต่อ (Phone / Email) */}
          <div style={{ marginBottom: '30px', display: 'flex', gap: '20px', opacity: 0.8 }}>
            <span className="contact-info">📞 {content.phone}</span>
            <span className="contact-info">✉ {content.email}</span>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="zzz-btn-primary">
              {content.viewProjects}
            </a>
            <a href="#contact" className="zzz-btn-outline">
              {content.contactMe}
            </a>
          </div>


        </div>

        <div className="hero-image-container">
          <div className="main-image-frame">
            <div className="image-placeholder">NK</div>
            <div className="tag-id">#ID_NATTHAKIT_2026</div>
          </div>
        </div>



      </div>

      {/* 🌊 ส่วนของ Wave Animation */}
      <div className="hero-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="var(--wave-1)" />
            <use href="#gentle-wave" x="48" y="3" fill="var(--wave-2)" />
            <use href="#gentle-wave" x="48" y="5" fill="var(--wave-3)" />
            <use href="#gentle-wave" x="48" y="7" fill="var(--wave-main)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;