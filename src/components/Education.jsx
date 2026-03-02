import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, MapPin } from 'lucide-react';
import './Education.css';

const Education = ({ content }) => {
  const options = { triggerOnce: true, threshold: 0.1 };
  const { ref: headerRef, inView: headerInView } = useInView(options);
  const { ref: timelineRef, inView: timelineInView } = useInView(options);

  if (!content || !content.items) return null;

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">

        <div ref={headerRef} className={`section-header reveal ${headerInView ? 'reveal-visible' : ''}`}>
          <div className="hero-badge"><span className="badge-text">{content.badge}</span></div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight" style={{ color: 'var(--spark-1)' }}> {content.titleHighlight}</span>
          </h2>
        </div>

        <div ref={timelineRef} className={`edu-timeline reveal ${timelineInView ? 'reveal-visible' : ''}`}>
          <div className="timeline-spine"></div>

          {content.items.map((item, index) => (
            <div className="edu-item" key={index} style={{ transitionDelay: `${index * 0.2}s` }}>

              <div className="logo-circle">
                <img src={item.logo} alt={item.school} className="edu-img" />
              </div>

              <div className="edu-card">
                <div className="edu-card-flex">
                  <div className="edu-content-left">
                    <span className="edu-year">{item.year}</span>
                    <h3 className="edu-level">{item.level}</h3>
                    <h4 className="edu-school">{item.school}</h4>
                    {item.description && <p className="edu-desc">{item.description}</p>}
                  </div>

                  <div className="edu-actions-right">
                    {item.transcript && (
                      <a href={item.transcript} target="_blank" rel="noreferrer" className="edu-btn-action" title="ผลการเรียน">
                        <FileText size={16} />
                        <span className="btn-label">{content.transcriptBtn}</span>
                      </a>
                    )}
                    {item.mapLink && (
                      <a href={item.mapLink} target="_blank" rel="noreferrer" className="edu-btn-action" title="ดูแผนที่">
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

export default Education;