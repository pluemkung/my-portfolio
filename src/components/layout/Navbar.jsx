import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ lang, setLang, isDarkMode, setIsDarkMode, content }) => {
  const mainNavItems = ['about', 'skills', 'projects', 'education', 'experience'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // 🟢 ฟังก์ชัน Scroll แบบคำนวณระยะ Offset ให้พอดีกับดีไซน์ Pill
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      const offset = 1; // ระยะเผื่อ Navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // ⚡ เปลี่ยนสถานะ Scrolled สำหรับเปลี่ยนดีไซน์ Navbar
      setIsScrolled(window.scrollY > 40);

      // ⚡ ตรวจจับ Active Section เพื่อใส่คลาสไฮไลท์
      const sections = mainNavItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(mainNavItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        
        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {mainNavItems.map((item) => (
            content.nav[item] && (
              <li key={item}> 
                <button 
                  onClick={() => scrollToSection(item)}
                  className={activeSection === item ? 'active-nav-item' : ''}
                >
                  {content.nav[item]}
                </button>
              </li>
            )
          ))}
        </ul>

        <div className="nav-divider"></div>

        {/* Controls */}
        <div className="nav-controls">
          <button className="control-btn lang-btn" onClick={() => setLang(lang === 'th' ? 'en' : 'th')}>
            {lang === 'th' ? 'TH' : 'EN'}
          </button>
          <button className="control-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          
          {/* Contact Button */}
          <button onClick={() => scrollToSection('contact')} className="zzz-nav-btn">
            {content.nav.contact}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;