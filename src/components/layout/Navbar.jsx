import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ lang, setLang, isDarkMode, setIsDarkMode, content }) => {
  const mainNavItems = ['about', 'skills', 'projects', 'education', 'experience'];
  
  // State ควบคุมเมนูมือถือ
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 🟢 State ไว้เก็บว่าตอนนี้อยู่หน้าไหน
  const [activeSection, setActiveSection] = useState('');

  // 🟢 ระบบตรวจจับว่าเลื่อนจอถึงไหนแล้ว (ฉบับอัปเกรด Performance หายกระตุกชัวร์)
  useEffect(() => {
    let ticking = false; // ⚡ ตัวแปรคอยเบรกไม่ให้ React คำนวณซ้ำซ้อนรัวเกินไป

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // ใช้ลอจิกคำนวณระยะเดิมของคุณเป๊ะๆ เลยครับ ไม่ขยับแน่นอน
          const sections = mainNavItems.map(item => document.getElementById(item));
          const scrollPosition = window.scrollY + 150; // ชดเชยความสูงของ Navbar

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(mainNavItems[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // ⚡ เติม passive: true เพื่อบอกเบราว์เซอร์ให้เลื่อนจอไปได้เลย ไม่ต้องรอสคริปต์
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mainNavItems]);

  return (
    <div className="nav-container glass-nav-container">
      <nav className="navbar">
        
        {/* ปุ่ม ☰ สำหรับเปิด/ปิดเมนูบนมือถือ */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </div>

        {/* ใส่ Class 'active' เมื่อกดเปิดเมนูบนมือถือ */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {mainNavItems.map((item) => (
            /* ⚡ เติม content.nav[item] && ดักไว้ เพื่อกันเมนูล่องหนตอนเปลี่ยนภาษาครับ */
            content.nav[item] && (
              <li key={item} onClick={() => setIsMobileMenuOpen(false)}> 
                <a 
                  href={`#${item}`} 
                  // 🟢 ถ้าเมนูนี้ตรงกับหน้าที่อยู่ ให้ใส่คลาส active-nav-item เพื่อตีกรอบ
                  className={activeSection === item ? 'active-nav-item' : ''}
                >
                  {content.nav[item]}
                </a>
              </li>
            )
          ))}
        </ul>

        <div className="nav-divider"></div>

        <div className="nav-controls">
          {/* ผมเติมคลาส lang-btn เข้ามาตรงนี้นิดนึงครับ เพื่อเอาไปล็อคความกว้าง */}
          <button className="control-btn lang-btn" onClick={() => setLang(lang === 'th' ? 'en' : 'th')}>
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