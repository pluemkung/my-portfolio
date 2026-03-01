export const th = {
  nav: {
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    projects: 'โปรเจค',
    education: 'การศึกษา',
    experience: 'ประสบการณ์',
    contact: 'ติดต่อ'
  },
  hero: {
    greeting: "Creative Technologist • Thailand",
    name: "ณัฐกิตติ์ มูนวงษ์",
    role: "นักศึกษาอิเล็กทรอนิกส์คอมพิวเตอร์เทคโนโลยี", 
    description: "สนใจการสร้างเทคโนโลยีทุกรูปแบบตั้งแต่ฮาร์ดแวร์ อิเล็กทรอนิกส์ไปจนถึงเว็บแอปและซอฟต์แวร์ ชอบทดลอง เรียนรู้ และเปลี่ยนไอเดียให้กลายเป็นของจริง", 
    phone: "063-758-8253", 
    email: "natthakit.moonwong@gmail.com", 
    viewProjects: "โปรเจกต์",
    contactMe: "ติดต่อ"
  },
  about: {
    badge: "ABOUT ME",
    titleStart: "รู้จักกับ",
    titleHighlight: "ฉัน",
    desc1: "สวัสดีครับ ผม ณัฐกิตติ์ มูนวงษ์ นักศึกษาอิเล็กทรอนิกส์คอมพิวเตอร์เทคโนโลยี ที่มีความหลงใหลในการสร้างสรรค์เทคโนโลยีที่สามารถจับต้องและใช้งานได้จริง ผมสนุกกับการเรียนรู้และพัฒนาตัวเองอยู่เสมอ ไม่ว่าจะเป็นการเขียนโค้ด (Software) หรือการออกแบบและต่อวงจร (Hardware)",
    desc2: "ปัจจุบันผมกำลังโฟกัสกับการทำโปรเจกต์จบเกี่ยวกับ Parallel Pure Sine Wave Inverters ควบคู่ไปกับการพัฒนาทักษะด้าน Web Development เพื่อเตรียมพร้อมสำหรับการเป็นนักพัฒนาที่สามารถเชื่อมโยงโลกของฮาร์ดแวร์เข้ากับระบบออนไลน์ได้อย่างสมบูรณ์แบบ",
    highlights: [
      { title: "🎓 การศึกษา", desc: "เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์" },
      { title: "⚡ โฟกัสปัจจุบัน", desc: "ระบบโครงสร้างไฟฟ้ากำลังและการเขียนโปรแกรม" },
      { title: "🎯 เป้าหมาย", desc: "ประยุกต์และต่อยอดเทคโนโลยีให้ใช้งานได้จริงอย่างมีประสิทธิภาพ" }
    ]
  },
  skills: {
    badge: "EXPERTISE",
    titleStart: "ทักษะและ",
    titleHighlight: "ความเชี่ยวชาญ",
    subtitle: "ผสมผสานความรู้ด้านฮาร์ดแวร์อิเล็กทรอนิกส์ เข้ากับเทคโนโลยีซอฟต์แวร์สมัยใหม่",
    categories: [
      {
        title: "ภาษาโปรแกรม",
        icon: "🌐",
        items: ["Java", "Python", "C", "SQL" , "PHP"]
      },
      {
        title: "ซอฟต์แวร์และเว็บไซต์",
        icon: "💻",
        items: ["React", "JavaScript", "HTML5 & CSS", "Node.js", ]
      },
      {
        title: "ฮาร์ดแวร์และอิเล็กทรอนิกส์",
        icon: "🔌",
        items: ["Microcontrollers", "IoT Systems", "Power Electronics", "Circuit Design"]
      },
      {
        title: "เครื่องมือและเฉพาะทาง",
        icon: "🛠️",
        items: ["Git & GitHub", "VS Code", "SolidWorks", "Arduino IDE", "Blender"]
      },
      
    ]
  }, 
  projects: {
    badge: "MY WORK",
    titleStart: "ผลงาน",
    titleHighlight: "โปรเจกต์",
    subtitle: "รวมผลงานเด่นที่สะท้อนถึงการประยุกต์ใช้ความรู้ด้านฮาร์ดแวร์และซอฟต์แวร์",
    items: [
      {
        title: "Parallel Pure Sine Wave Inverters",
        docType: "HARDWARE",
        imageUrl: "/images/test3.png",
        description: "โปรเจกต์จบ: การออกแบบและพัฒนาอินเวอร์เตอร์แบบขนานที่จ่ายคลื่นไซน์บริสุทธิ์ เพื่อเพิ่มเสถียรภาพและประสิทธิภาพในการจ่ายพลังงานไฟฟ้า",
        tech: ["Power Electronics", "Microcontroller", "Circuit Design", "C++"],
        linkText: "ดูรายละเอียด",
        linkUrl: "#"
      },
      {
        title: "Personal Portfolio Website",
        docType: "WEB_DEV",
        imageUrl: "/images/test1.png",
        description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ออกแบบด้วยสไตล์ Tech & Glassmorphism รองรับ 2 ภาษา พัฒนาด้วย React และเทคโนโลยีเว็บสมัยใหม่",
        tech: ["React", "CSS3", "JavaScript", "Vite"],
        linkText: "ดูโค้ดบน GitHub",
        linkUrl: "#"
      },
      {
        title: "Smart Home IoT Controller",
        docType: "SYSTEM_LOG",
        imageUrl: "/images/test2.png",
        description: "ระบบควบคุมอุปกรณ์ไฟฟ้าในบ้านผ่านอินเทอร์เน็ต สามารถมอนิเตอร์สถานะการใช้พลังงานได้แบบ Real-time",
        tech: ["ESP32", "IoT", "Node.js", "React"],
        linkText: "ดูรายละเอียด",
        linkUrl: "#"
      }
    ]
  },
  education: {
    badge: "ACADEMIC",
    titleStart: "ประวัติ",
    titleHighlight: "การศึกษา",
    subtitle: "เส้นทางการเรียนรู้และการพัฒนาทักษะทางด้านเทคโนโลยีของผม",
    items: [
      {
        level: "ปริญญาตรี / ปวส. เทคโนโลยีอิเล็กทรอนิกส์คอมพิวเตอร์",
        school: "ชื่อมหาวิทยาลัยของคุณ",
        year: "2566 - ปัจจุบัน",
        description: "เน้นด้านระบบสมองกลฝังตัว (Embedded Systems) และการพัฒนาโปรเจกต์ Parallel Pure Sine Wave Inverters",
        logo: "/images/uni-logo.png" // ใส่ Path รูปตรามหาวิทยาลัยตรงนี้ครับ
      },
      {
        level: "มัธยมศึกษาตอนปลาย / ปวช.",
        school: "ชื่อโรงเรียนเก่าของคุณ",
        year: "2563 - 2566",
        description: "พื้นฐานด้านไฟฟ้าและอิเล็กทรอนิกส์เบื้องต้น",
        logo: "/images/school-logo.png" // ใส่ Path รูปตราโรงเรียนเก่าตรงนี้ครับ
      }
    ]
  },
  experience: {
    badge: "CAREER",
    titleStart: "ประสบการณ์",
    titleHighlight: "การทำงาน",
    subtitle: "เส้นทางการทำงานและโปรเจกต์ที่ได้รับมอบหมายในระดับมืออาชีพ",
    items: [
      {
        role: "นักศึกษาฝึกงานด้านวิศวกรรม",
        company: "ชื่อบริษัทหรือหน่วยงาน",
        duration: "มิ.ย. 2568 - ส.ค. 2568",
        description: "ช่วยออกแบบและทดสอบวงจรควบคุมกำลังไฟฟ้า ร่วมกับทีมวิศวกรในการแก้ปัญหาหน้างาน",
        skills: ["Circuit Testing", "Power Electronics", "Soldering"]
      },
      {
        role: "Freelance Web Developer",
        company: "งานอิสระ",
        duration: "2567 - ปัจจุบัน",
        description: "รับออกแบบและพัฒนา Landing Page สำหรับธุรกิจขนาดเล็ก โดยเน้นความทันสมัยและรองรับมือถือ",
        skills: ["React", "CSS Grid", "Responsive Design"]
      }
    ]
  },
  contact: {
    badge: "GET IN TOUCH",
    titleStart: "ช่องทางการ",
    titleHighlight: "ติดต่อ",
    subtitle: "ยินดีรับฟังข้อเสนอแนะหรือโอกาสในการร่วมงานครับ",
    email: "pluemkub1313@gmail.com",
    phone: "063-758-82533",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    github: "github.com/yourusername",
    formTitle: "ส่งข้อความหาผม",
    placeholders: {
      name: "ชื่อของคุณ",
      email: "อีเมลของคุณ",
      message: "ข้อความของคุณ",
      send: "ส่งข้อความ"
    }
  },
};