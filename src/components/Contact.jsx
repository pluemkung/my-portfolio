import React from 'react';
import './Contact.css';

const Contact = ({ content }) => {
  if (!content) return null;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
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

        <div className="contact-main-grid">
          {/* --- ฝั่งซ้าย: ข้อมูล และ แผนที่ --- */}
          <div className="contact-left-side">
            <div className="info-top-row">
              <div className="contact-info-card mini">
                <div className="card-icon">📧</div>
                <div className="card-text">
                  <span className="label">EMAIL</span>
                  <p>{content.email}</p>
                </div>
                <div className="card-ui-corner bottom-right"></div>
              </div>
              <div className="contact-info-card mini">
                <div className="card-icon">📱</div>
                <div className="card-text">
                  <span className="label">PHONE</span>
                  <p>{content.phone}</p>
                </div>
                <div className="card-ui-corner bottom-right"></div>
              </div>
            </div>
            
            <div className="contact-map-wrapper">
              <div className="map-glass-frame">
                <iframe 
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5032516464!2d100.5017651!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDMwJzA2LjQiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          {/* --- ฝั่งขวา: แบบฟอร์มส่งข้อความ --- */}
          <div className="contact-right-side">
            <form className="contact-form-card">
              <h3 className="form-title">{content.formTitle}</h3>
              <div className="input-field">
                <input type="text" placeholder={content.placeholders.name} required />
              </div>
              <div className="input-field">
                <input type="email" placeholder={content.placeholders.email} required />
              </div>
              <div className="input-field">
                <textarea placeholder={content.placeholders.message} rows="8" required></textarea>
              </div>
              <button type="submit" className="zzz-btn-primary submit-btn">
                {content.placeholders.send}
              </button>
              <div className="card-ui-corner top-right"></div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;