import React from 'react';
import './Experience.css';

const Experience = ({ content }) => {
  if (!content) return null;

  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">
        
        <div className="section-header">
          <div className="hero-badge" style={{ marginBottom: '15px' }}>
            <span className="badge-star">✦</span>
            <span className="badge-text">{content.badge}</span>
          </div>
          <h2 className="section-title">
            {content.titleStart}<span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>

        <div className="exp-timeline">
          <div className="exp-spine"></div>
          
          {content.items.map((item, index) => (
            <div className="exp-item" key={index}>
              {/* จุดบ่งบอกช่วงเวลา */}
              <div className="exp-dot-wrapper">
                <div className="exp-dot"></div>
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <span className="exp-duration">{item.duration}</span>
                    <h3 className="exp-role">{item.role}</h3>
                    <h4 className="exp-company">{item.company}</h4>
                  </div>
                </div>
                
                <p className="exp-desc">{item.description}</p>
                
                {/* ทักษะที่ได้ใช้ในงานนั้นๆ */}
                <div className="exp-skills">
                  {item.skills.map((skill, idx) => (
                    <span className="exp-skill-tag" key={idx}>{skill}</span>
                  ))}
                </div>

                {/* ของตกแต่งมุมการ์ดสไตล์ Tech */}
                <div className="card-ui-corner bottom-right"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;