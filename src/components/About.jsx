import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* หัวข้อสไตล์ ZZZ (มี Slash สีส้มนำหน้า) */}
        <div className="section-header">
          <span className="slash">/</span>
          <h2 className="th-title">เกี่ยวกับฉัน</h2>
          <span className="en-title">About Me</span>
        </div>

        <div className="about-content">
          {/* ฝั่งซ้าย: ข้อความแนะนำตัว */}
          <div className="about-text-box">
            <p className="greeting">
              สวัสดีครับ! ผม <span className="highlight-name">นัทธกิตติ์</span>
            </p>
            <p className="description">
              ผมเป็นนักพัฒนาเว็บไซต์ (Web Developer) ที่หลงใหลในการสร้างสรรค์แอปพลิเคชันบนเว็บที่รวดเร็ว ตอบสนองได้ดี และใช้งานง่าย 
              ผมชอบแก้ปัญหาที่ท้าทายด้วยการเขียนโค้ด และพร้อมที่จะนำไอเดียใหม่ๆ มาเปลี่ยนเป็นผลงานที่จับต้องได้จริง!
            </p>
            
            {/* ป้ายแสดงทักษะแบบเฉียง (ZZZ Tech Badges) */}
            <div className="tech-stack">
              <span className="tech-badge">
                <span className="badge-icon">⚛️</span> React
              </span>
              <span className="tech-badge">
                <span className="badge-icon">🟨</span> JavaScript
              </span>
              <span className="tech-badge">
                <span className="badge-icon">🌐</span> HTML/CSS
              </span>
            </div>
          </div>

          {/* ฝั่งขวา: กรอบรูปโปรไฟล์ */}
          <div className="about-visual">
            <div className="image-frame">
              {/* ตรงนี้คุณสามารถเปลี่ยนเป็น <img src="..." /> รูปตัวเองได้ในอนาคต */}
              <div className="image-placeholder">
                NK
              </div>
              
              {/* เส้นตกแต่งกรอบรูปให้ดูไซเบอร์ */}
              <div className="deco-line top-left"></div>
              <div className="deco-line bottom-right"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;