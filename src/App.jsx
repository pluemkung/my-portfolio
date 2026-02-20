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


function App() {
  const [lang, setLang] = useState('th');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
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
        {content.hero && <Hero content={content.hero} />}

        {content.about && <About content={content.about} />}

        {/* หน้าอื่นๆ ต่อไป... */}
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;