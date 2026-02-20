import React, { useState } from 'react';
import Navbar from "./components/layout/Navbar";
import BackgroundGlow from "./components/animations/BackgroundGlow";
import About from "./components/About";
import { th } from "./data/th";
import { en } from "./data/en";
import './index.css';
import Hero from './components/Hero';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState('th');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // ตัวแปร content จะเปลี่ยนตาม lang อัตโนมัติเมื่อมีการกดปุ่มสลับภาษา
  const content = lang === 'th' ? th : en;

  return (
    <div className={isDarkMode ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
      <ScrollProgress />
      <BackgroundGlow />
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        content={content}
      />
      <main>
        {/* ใช้ content.hero เพื่อให้ตรงกับโครงสร้างไฟล์ th.js / en.js ของคุณ */}
        {content.hero && <Hero content={content.hero} />}
        {content.about && <About content={content.about} />}
        {content.skills && <Skills content={content.skills} />}
        {content.projects && <Projects content={content.projects} />}
        {content.education && <Education content={content.education} />}
        {content.experience && <Experience content={content.experience} />}
        {content.contact && <Contact content={content.contact} />}
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;