import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ lang, setLang, isDarkMode, setIsDarkMode, content }) => {
  const mainNavItems = ['about', 'skills', 'projects', 'education', 'experience', 'internship', 'interests'];
  // เพิ่ม State ควบคุมเมนูมือถือ
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        
        {/* ปุ่ม ☰ สำหรับเปิด/ปิดเมนูบนมือถือ */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </div>

        {/* ใส่ Class 'active' เมื่อกดเปิดเมนูบนมือถือ */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {mainNavItems.map((item) => (
            <li key={item} onClick={() => setIsMobileMenuOpen(false)}> {/* กดแล้วปิดเมนูอัตโนมัติ */}
              <a href={`#${item}`}>{content.nav[item]}</a>
            </li>
          ))}
        </ul>

        <div className="nav-divider"></div>

        <div className="nav-controls">
          <button className="control-btn" onClick={() => setLang(lang === 'th' ? 'en' : 'th')}>
            {lang === 'th' ? 'TH' : 'EN'}
          </button>
          <button className="control-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <a href="#contact" className="zzz-nav-btn">{content.nav.contact}</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;