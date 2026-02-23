import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = ({ content }) => {
  const options = { triggerOnce: false, threshold: 0.1, rootMargin: '100px 0px' };

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
          </div>

          <div ref={cRef} className="about-highlights">
            {content.highlights.map((item, index) => (
              <div 
                key={index} 
                className={`matsuri-card-mini reveal delay-${index + 2} ${cIn ? 'reveal-visible' : ''}`}
              >
                {/* <div className="matsuri-number" style={{color: 'var(--spark-1)', fontWeight: 'bold'}}>// 0{index + 1}</div> */}
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