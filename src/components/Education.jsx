import React from 'react';
import './Education.css';

const Education = ({ content }) => {
  if (!content) return null;

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">
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

        <div className="edu-timeline">
          <div className="timeline-spine"></div>
          {content.items.map((item, index) => (
            <div className="edu-item" key={index}>
              <div className="edu-logo-area">
                <div className="logo-circle">
                  {item.logo ? (
                    <img src={item.logo} alt={item.school} className="edu-img" />
                  ) : (
                    <span className="edu-icon-default">🎓</span>
                  )}
                </div>
              </div>
              <div className="edu-card">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-level">{item.level}</h3>
                <h4 className="edu-school">{item.school}</h4>
                <p className="edu-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;