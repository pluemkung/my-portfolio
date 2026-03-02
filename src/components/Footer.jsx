import React from 'react';
import { Cpu } from 'lucide-react';
import './Footer.css';

const Footer = ({ content }) => {
  if (!content) return null;

  return (
    <footer className="footer-main">
      {/* 1. แถบวิ่ง Marquee */}
      <div className="footer-marquee-mini">
        <div className="animate-marquee-fast">
          {Array(15).fill(content.marquee).map((text, i) => (
            <div key={i} className="marquee-text-mini flex items-center gap-2">
              <Cpu size={12} /> {text}
            </div>
          ))}
        </div>
      </div>

      {/* 2. เนื้อหาหลักวางตรงกลาง */}
      <div className="footer-center-wrap">
        <div className="footer-top-info">
          <div className="mini-dot"></div>
          <p>
            {new Date().getFullYear()} <strong>Natthakit Moonwong</strong> 
            <span style={{ opacity: 0.5 }}> — {content.mission}</span>
          </p>
        </div>
        
        {/* ส่วนเสริมจิ๋วๆ ด้านล่างเพื่อให้ดูเป็นระเบียบ */}
        <div style={{ fontSize: '8px', opacity: 0.3, letterSpacing: '2px', textTransform: 'uppercase' }}>
          Portfolio Protocol v2.6
        </div>
      </div>
    </footer>
  );
};

export default Footer;