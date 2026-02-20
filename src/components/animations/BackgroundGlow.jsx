import React, { useMemo } from 'react';
import './BackgroundGlow.css';

const BackgroundGlow = () => {
  const sparks = useMemo(() => {
    // เพิ่มเป็น 40 เส้นให้เต็มจอมากขึ้น
    return [...Array(40)].map((_, i) => {
      const style = {
        // ขยายพื้นที่เกิดให้กว้างขึ้น (-20vw ถึง 120vw) เพื่อไม่ให้ขอบจอแหว่ง
        '--startX': `${Math.random() * 140 - 20}vw`,
        // สุ่มทิศทางการพุ่ง: ค่าบวกไปขวา ค่าลบไปซ้าย (-30vw ถึง 30vw)
        '--driftX': `${Math.random() * 60 - 30}vw`,
        '--duration': `${Math.random() * 5 + 4}s`, // ปรับให้ลอยนานขึ้นนิดนึง
        '--delay': `${Math.random() * -15}s`,
        '--scale': Math.random() * 0.6 + 0.4,
        '--color': Math.random() > 0.6 ? 'var(--spark-1)' : 'var(--spark-2)',
      };
      return <div key={i} className="fiery-shard" style={style} />;
    });
  }, []);

  return (
    <div className="dark-fire-container">
      <div className="dark-gradient-bg"></div>
      <div className="sparks-layer">
        {sparks}
      </div>
      <div className="noise-overlay"></div>
    </div>
  );
};

export default BackgroundGlow;