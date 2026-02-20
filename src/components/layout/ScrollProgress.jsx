import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScrollProgress = () => {
    const currentScroll = window.scrollY; // ระยะที่เลื่อนลงมา
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // ระยะเลื่อนทั้งหมดที่ทำได้
    
    if (scrollHeight > 0) {
      const percentage = (currentScroll / scrollHeight) * 100;
      setScrollWidth(percentage);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      >
        {/* แสดงตัวเลขเปอร์เซ็นต์เล็กๆ ไว้ที่ปลายแถบ
        <span className="scroll-percentage">{Math.round(scrollWidth)}%</span> */}
      </div>
    </div>
  );
};

export default ScrollProgress;