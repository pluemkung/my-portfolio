import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  // 🟢 ใช้ useRef เพื่อสั่งอัปเดตตำแหน่งโดยตรง (ไม่ทำให้เว็บกระตุก)
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      if (cursor) {
        // ⚡ สั่งย้ายตำแหน่งผ่าน CSS Transform (ใช้การ์ดจอประมวลผล = ลื่น 100%)
        // -20px คือชดเชยให้วงแหวนอยู่กึ่งกลางปลายลูกศรเมาส์พอดี
        cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };

    const onMouseOver = (e) => {
      if (
        e.target.closest('a') || 
        e.target.closest('button') || 
        e.target.closest('.matsuri-card') || 
        e.target.closest('.glass-panel')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`zz-cursor-ring ${isHovering ? 'hover-active' : ''}`}
    ></div>
  );
};

export default CustomCursor;