import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = ({ content }) => {
  const options = { triggerOnce: true, threshold: 0.1 };
  const { ref: headerRef, inView: headerInView } = useInView(options);
  const { ref: gridRef, inView: gridInView } = useInView(options);

  if (!content) return null;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div ref={headerRef} className={`section-header reveal ${headerInView ? 'reveal-visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-text">{content.badge}</span>
          </div>
          <h2 className="section-title">
            {content.titleStart}
            <span className="highlight"> {content.titleHighlight}</span>
          </h2>
        </div>

        <div ref={gridRef} className={`contact-main-grid reveal ${gridInView ? 'reveal-visible' : ''}`}>

          <div className="contact-left-side">
            <div className="info-top-row">
              <div className="contact-info-card">
                <div className="card-icon">📧</div>
                <div className="card-text">
                  {/* 🌟 เปลี่ยนจากข้อความนิ่งๆ เป็นตัวแปรภาษา */}
                  <span className="label">{content.emailLabel}</span>
                  <p>{content.email}</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="card-icon">📱</div>
                <div className="card-text">
                  {/* 🌟 เปลี่ยนจากข้อความนิ่งๆ เป็นตัวแปรภาษา */}
                  <span className="label">{content.phoneLabel}</span>
                  <p>{content.phone}</p>
                </div>
              </div>
            </div>

            {/* ส่วนแผนที่คงเดิม */}
            <div className="contact-map-wrapper">
              <div className="map-glass-frame">
                <iframe
                  title="Location Map"
                  src={content.mapUrl}
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-right-side">
            <form className="contact-form-card">
              <h3 className="form-title">
                {content.formTitle}
              </h3>
              <div className="input-field">
                <input type="text" placeholder={content.placeholders.name} required />
              </div>
              <div className="input-field">
                <input type="email" placeholder={content.placeholders.email} required />
              </div>
              <div className="input-field">
                <textarea placeholder={content.placeholders.message} rows="5" required></textarea>
              </div>

              <button type="submit" className="glass-modal-btn submit-btn">
                {content.placeholders.send} <span className="arrow">↗</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;