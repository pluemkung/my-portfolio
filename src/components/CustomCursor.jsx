import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // เก็บตำแหน่งเมาส์ (Target) และตำแหน่งวงกลม (Current)
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // จุดสีส้มตรงกลาง ให้ตามเมาส์ทันที 100% (ทำให้กดยังไงก็โดน)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // 🟢 เพิ่มลูกเล่น: เช็กว่ากำลังชี้ปุ่มหรือลิงก์อยู่ไหม
    const onMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.matsuri-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // ฟังก์ชันทำ Animation Loop (สมูทและไม่กินสเปค)
    const animate = () => {
      // สูตร Lerp (ยิ่งเลขน้อ ยยิ่งตามช้า/นุ่ม)
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.15;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.15;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    // ใส่ passive: true ให้เมาส์ลื่นขึ้น
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className={`cursor-outline ${isHovering ? 'hover-active' : ''}`} />
    </>
  );
};

export default CustomCursor;