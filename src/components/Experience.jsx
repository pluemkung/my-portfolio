import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import './Experience.css';

const Experience = ({ content }) => {
  const options = { triggerOnce: true, threshold: 0.1 };
  const { ref: headerRef, inView: headerInView } = useInView(options);
  const { ref: contentRef, inView: contentInView } = useInView(options);

  if (!content) return null;

  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">
        
        <div ref={headerRef} className={`section-header reveal ${headerInView ? 'reveal-visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-text">{content.badge}</span>
          </div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}> {content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>

        <div ref={contentRef} className={`exp-timeline reveal ${contentInView ? 'reveal-visible' : ''}`}>
          <div className="exp-spine"></div>
          
          {content.items.map((item, index) => (
            <div className="exp-item" key={index} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="exp-dot-wrapper">
                <div className="exp-dot"></div>
              </div>

              {/* ใช้โครงสร้างเดียวกับ Education เพื่อให้ปุ่มอยู่ฝั่งขวา */}
              <div className="edu-card exp-card">
                <div className="edu-card-flex">
                  <div className="edu-content-left">
                    <span className="exp-duration">{item.duration}</span>
                    <h3 className="exp-role">{item.role}</h3>
                    <h4 className="exp-company">{item.company}</h4>
                    <p className="exp-desc">{item.description}</p>
                    
                    <div className="exp-skills">
                      {item.skills && item.skills.map((skill, idx) => (
                        <span className="exp-skill-tag" key={idx}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* 🌟 ปุ่มแผนที่ฝั่งขวา */}
                  <div className="edu-actions-right">
                    {item.mapLink && (
                      <a href={item.mapLink} target="_blank" rel="noreferrer" className="edu-btn-action">
                        <MapPin size={16} />
                        <span className="btn-label">{content.mapsBtn}</span>
                      </a>
                    )}
                  </div>
                </div>

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