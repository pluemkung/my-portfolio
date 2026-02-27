import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = ({ content }) => {
  const options = { triggerOnce: false, threshold: 0.1, rootMargin: '100px 0px' };
  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: sRef, inView: sIn } = useInView(options);

  if (!content) return null;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* หัวข้อ Section */}
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}> {content.titleHighlight}</span>
          </h2>
          {content.subtitle && <p className="section-subtitle">{content.subtitle}</p>}
        </div>

        {/* 🟢 Grid ทักษะ */}
        <div className="skills-grid" ref={sRef}>
          {content.categories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              /* ⚡ ใช้ matsuri-card ดึงธีมกระจก และ cyber-skill-card จัดทรง */
              className={`matsuri-card cyber-skill-card reveal delay-${(catIndex % 4) + 1} ${sIn ? 'reveal-visible' : ''}`}
            >
              <div className="skill-card-head">
                <div className="skill-icon-box">
                  <span className="skill-icon">{category.icon}</span>
                </div>
                <h3 className="skill-cat-title">{category.title}</h3>
              </div>

              <div className="skill-tags-container">
                {category.items.map((skill, index) => (
                  <span key={index} className="tech-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;