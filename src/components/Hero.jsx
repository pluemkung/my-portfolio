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
          <h2 className="fade-in">{content.greeting}</h2>
          
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
    </section>
  );
};

export default Hero;