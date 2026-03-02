import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = ({ content }) => {
 const options = { triggerOnce: true, threshold: 0.1, rootMargin: '100px 0px' };

  const { ref: hRef, inView: hIn } = useInView(options);
  const { ref: tRef, inView: tIn } = useInView(options);
  const { ref: cRef, inView: cIn } = useInView(options);

  if (!content) return null;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div ref={hRef} className={`section-header reveal ${hIn ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}<span className="highlight" style={{color: 'var(--spark-1)'}}>{content.titleHighlight}</span>
          </h2>
        </div>

        <div className="about-content">
          <div ref={tRef} className={`matsuri-card reveal delay-1 ${tIn ? 'reveal-visible' : ''}`}>
            <p className="about-desc">{content.desc1}</p>
            <p className="about-desc">{content.desc2}</p>
            
            {/* 🌟 เพิ่มปุ่มโหลด Resume ตรงนี้ */}
            <div className="resume-btn-container">
              <a 
                href={content.resumeUrl} 
                download="Natthakit_Resume.pdf" /* ตั้งชื่อไฟล์ตอนโหลดลงเครื่อง */
                target="_blank" 
                rel="noreferrer"
                className="resume-download-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {content.resumeBtn}
              </a>
            </div>

          </div>

          <div ref={cRef} className="about-highlights">
            {content.highlights.map((item, index) => (
              <div 
                key={index} 
                className={`matsuri-card-mini reveal delay-${index + 2} ${cIn ? 'reveal-visible' : ''}`}
              >
                <h4 className="hl-title">{item.title}</h4>
                <p className="hl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;