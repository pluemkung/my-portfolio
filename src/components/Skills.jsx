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
            <span className="highlight" style={{color: 'var(--spark-1)'}}>{content.titleHighlight}</span>
          </h2>
          {content.subtitle && <p className="section-subtitle">{content.subtitle}</p>}
        </div>

        {/* 🟢 Grid ทักษะ: ลดพื้นที่ว่าง จัดระเบียบใหม่ */}
        <div className="skills-grid" ref={sRef}>
          {content.categories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`matsuri-card compact-skill-card reveal delay-${catIndex + 1} ${sIn ? 'reveal-visible' : ''}`}
            >
              {/* ย้าย Icon มาอยู่ข้างๆ Title เพื่อประหยัดพื้นที่แนวตั้ง */}
              <div className="skill-card-head">
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{category.icon}</span>
                </div>
                <div className="skill-title-group">
                  <h3 className="skill-cat-title">{category.title}</h3>
                  <p className="skill-cat-desc">{category.description}</p>
                </div>
              </div>

              {/* Tag ทักษะทรง Pill ประหยัดพื้นที่ */}
              <div className="skill-tags-container">
                {category.items.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    <span className="spark-dot"></span> {skill}
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