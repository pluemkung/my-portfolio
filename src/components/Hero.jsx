import React from 'react';
import './Hero.css';

const Hero = ({ content = {} }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        
        {/* ฝั่งข้อความ */}
        <div className="hero-text">
          <h2>{content?.greeting || '// เกี่ยวกับฉัน'}</h2>
          
          <h1 className="name-title">
            {content?.name || 'Natthakit Moonwong'}
          </h1>
          
          <h3 className="role-text">{content?.role || 'นักศึกษาอิเล็กทรอนิกส์คอมพิวเตอร์เทคโนโลยี'}</h3>
          <p className="hero-desc">
            {content?.description || 'สนใจการสร้างเทคโนโลยีทุกรูปแบบตั้งแต่ฮาร์ดแวร์ อิเล็กทรอนิกส์ ไปจนถึงเว็บแอปและซอฟต์แวร์'}
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="zzz-btn-primary">
              {content?.viewProjects || 'GET IN TOUCH ->'}
            </a>
            <a href="#contact" className="zzz-btn-outline">
              {content?.contactMe || 'VIEW PROJECTS'}
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