import React from 'react';
import './Skills.css';

const Skills = ({ content }) => {
  // ป้องกัน Error กรณีส่ง content มาไม่ทัน
  if (!content) return null;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
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

        {/* --- Grid การ์ดทักษะ --- */}
        <div className="skills-grid">
          {content.categories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <p className="skill-desc">{category.description}</p>
              
              {/* --- วนลูปสร้าง Tag ทักษะย่อย --- */}
              <div className="skill-tags-container">
                {category.items.map((item, idx) => (
                  <span className="skill-tag" key={idx}>
                    {item}
                  </span>
                ))}
              </div>
              
              {/* เส้นตกแต่งมุมล่างขวาสไตล์ UI */}
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;