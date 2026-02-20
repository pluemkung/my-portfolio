import React from 'react';
import './Skills.css';

const Skills = () => {
  // จัดกลุ่มทักษะเพื่อให้ดูเป็นระเบียบและอ่านง่าย
  const skillCategories = [
    {
      title: "Software & Web",
      icon: "💻",
      description: "การพัฒนาเว็บไซต์และโปรแกรมมิ่ง",
      skills: ["React", "JavaScript", "HTML5 & CSS3", "Node.js", "C / C++"]
    },
    {
      title: "Hardware & Electronics",
      icon: "🔌",
      description: "ระบบวงจร ไมโครคอนโทรลเลอร์ และพลังงาน",
      skills: ["Microcontrollers", "IoT Systems", "Power Electronics", "Inverter Design", "Circuit Design"]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      description: "เครื่องมือและการจัดการโปรเจกต์",
      skills: ["Git & GitHub", "VS Code", "Figma", "Troubleshooting"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* --- หัวข้อ Section --- */}
        <div className="section-header">
          <div className="hero-badge" style={{ marginBottom: '15px' }}>
            <span className="badge-star">✦</span>
            <span className="badge-text">EXPERTISE</span>
          </div>
          <h2 className="section-title">ทักษะและ<span className="highlight">ความเชี่ยวชาญ</span></h2>
          <p className="section-subtitle">
            ผสมผสานความรู้ด้านฮาร์ดแวร์อิเล็กทรอนิกส์ เข้ากับเทคโนโลยีซอฟต์แวร์สมัยใหม่
          </p>
        </div>

        {/* --- Grid การ์ดทักษะ --- */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <p className="skill-desc">{category.description}</p>
              
              <div className="skill-tags-container">
                {category.skills.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* เส้นตกแต่งมุมล่างขวา */}
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;