import React from 'react';
import { useInView } from 'react-intersection-observer';
// 🟢 1. Import ไอคอนมาไว้ที่ไฟล์นี้แทน ปลอดภัยกว่า!
import { Code2, MonitorSmartphone, Cpu, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = ({ content }) => {
  const options = { triggerOnce: true, threshold: 0.1, rootMargin: '100px 0px' };
  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: sRef, inView: sIn } = useInView(options);

  if (!content) return null;

  // 🟢 2. สร้างวุ้นแปลภาษา: ถ้าข้อมูลส่งชื่อนี้มา ให้โชว์ไอคอนอะไร
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 strokeWidth={1.5} size={24} />;
      case 'Monitor': return <MonitorSmartphone strokeWidth={1.5} size={24} />;
      case 'Cpu': return <Cpu strokeWidth={1.5} size={24} />;
      case 'Wrench': return <Wrench strokeWidth={1.5} size={24} />;
      default: return <span>{iconName}</span>; // ถ้าหาไม่เจอ ให้โชว์ของเดิมไปก่อน
    }
  };

  return (
    <section id="skills" className="skills-section glass-effect">
      <div className="skills-container">
        
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{color: 'var(--spark-1)'}}> {content.titleHighlight}</span>
          </h2>
          {content.subtitle && <p className="section-subtitle">{content.subtitle}</p>}
        </div>

        <div className="skills-grid" ref={sRef}>
          {content.categories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`matsuri-card cyber-skill-card reveal glass-effect delay-${(catIndex % 4) + 1} ${sIn ? 'reveal-visible' : ''}`}
            >
              <div className="skill-card-head">
                <div className="skill-icon-box">
                  {/* 🟢 3. เรียกใช้วุ้นแปลภาษาตรงนี้ */}
                  <span className="skill-icon">{renderIcon(category.icon)}</span>
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