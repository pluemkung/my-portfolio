import React from 'react';
import './About.css';

const About = ({ content }) => {
  // ป้องกัน Error กรณีส่ง content มาไม่ทัน
  if (!content) return null;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* --- ส่วนหัวข้อ --- */}
        <div className="section-header">
          <div className="hero-badge" style={{ marginBottom: '15px' }}>
            <span className="badge-star">✦</span>
            <span className="badge-text">{content.badge}</span>
          </div>
          <h2 className="section-title">
            {content.titleStart}<span className="highlight">{content.titleHighlight}</span>
          </h2>
        </div>

        {/* --- ส่วนเนื้อหา --- */}
        <div className="about-content">
          <div className="about-text-box">
            {/* ดึงข้อความจาก content */}
            <p className="about-desc">{content.desc1}</p>
            <p className="about-desc">{content.desc2}</p>
          </div>

          {/* --- กล่องไฮไลต์ (วนลูปสร้างอัตโนมัติจากไฟล์ Content) --- */}
          <div className="about-highlights">
            {content.highlights.map((item, index) => (
              <div className="highlight-box" key={index}>
                <h4 className="hl-title">{item.title}</h4>
                <p className="hl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;