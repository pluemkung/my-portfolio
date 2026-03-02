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
    resumeBtn: "เรซูเม่",
    resumeUrl: "/resume.pdf",
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
        icon: "Code2", // ⚡ ใส่แค่ชื่อเป็นตัวหนังสือพอครับ เว็บจะได้ไม่พัง
        items: ["Java", "Python", "C", "SQL", "PHP"]
      },
      {
        title: "ซอฟต์แวร์และเว็บไซต์",
        icon: "Monitor", // ⚡
        items: ["React", "JavaScript", "HTML5 & CSS", "Node.js"]
      },
      {
        title: "ฮาร์ดแวร์และอิเล็กทรอนิกส์",
        icon: "Cpu", // ⚡
        items: ["Microcontrollers", "IoT Systems", "Power Electronics", "Circuit Design"]
      },
      {
        title: "เครื่องมือและเฉพาะทาง",
        icon: "Wrench", // ⚡
        items: ["Git & GitHub", "VS Code", "SolidWorks", "Arduino IDE", "Blender"]
      }
    ]
  },
  projects: {
    badge: "MY WORK",
    titleStart: "ผลงาน",
    titleHighlight: "โปรเจกต์",
    subtitle: "รวมผลงานเด่นที่สะท้อนถึงการประยุกต์ใช้ความรู้ด้านฮาร์ดแวร์และซอฟต์แวร์",
    docType: "ประเภท",
    noImage: "NO IMAGE DATA",
    openBtn: "OPEN DATA",
    rewardsTitle: "รางวัลและความสำเร็จ",
    noRewards: "- อยู่ในระหว่างการรวบรวมข้อมูล...",
    closeBtn: "ปิด PANEL",
    items: [
      {
        title: "Business Expense Tracker", // เปลี่ยนชื่อแอปตามต้องการได้เลยครับ
        docType: "SOFTWARE", // เปลี่ยนประเภทเป็น SOFTWARE หรือ MOBILE APP
        images: [
          "/images/project1.png"
        ],
        description: "มินิโปรเจกต์: พัฒนาแอปพลิเคชันบันทึกรายรับ-รายจ่ายสำหรับธุรกิจด้วย Flutter เพื่อช่วยให้ผู้ประกอบการสามารถจัดการบัญชีและดูสรุปยอดได้อย่างสะดวกและรวดเร็วบนมือถือ",
        tech: ["Flutter", "Dart", "Mobile Development", "UI/UX"], // ถ้าใช้ Database อย่าง Firebase หรือ SQLite เพิ่มเข้าไปได้เลยครับ
        achievements: [
          "พัฒนาแบบ Cross-platform ให้รองรับ Android ผ่าน Flutter",
          "ระบบสามารถคำนวณและสรุปยอดบัญชีได้แบบ Real-time"
        ],
        // link: "#" // ถ้ามีลิงก์ GitHub หรือวิดีโอสาธิตการใช้งาน เอาลิงก์มาวางแทน "#" ได้เลยครับ
      },
    ]
  },
  education: {
    badge: "ACADEMIC",
    titleStart: "ประวัติ",
    titleHighlight: "การศึกษา",
    subtitle: "เส้นทางการเรียนรู้และการพัฒนาทักษะทางด้านเทคโนโลยีของผม",
    transcriptBtn: "ผลการเรียน", // ภาษาไทย
    mapsBtn: "ดูแผนที่",
    items: [
      {
        level: "ปริญญาตรี (กำลังศึกษา)",
        school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
        year: "2567 - ปัจจุบัน",
        description: "อุตสาหกรรมศาสตรบัณฑิต (ต่อเนื่อง) - เทคโนโลยีคอมพิวเตอร์อิเล็กทรอนิกส์",
        logo: "/images/KMUTNB.png",
        transcript: "/documents/KMUTNB_Transcript.pdf",
        mapLink: "https://maps.app.goo.gl/TaUkY4QNFKbkYPb2A"
      },
      {
        level: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
        school: "วิทยาลัยเทคนิคท่าหลวงซิเมนต์ไทยอนุสรณ์",
        year: "2565 - 2566",
        description: "เอิเล็กทรอนิกส์",
        logo: "/images/TTL.png",
        // transcript: "#", 
        mapLink: "https://maps.app.goo.gl/Uzc6EcCJZPcRP8vs9"
      },
      {
        level: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
        school: "วิทยาลัยเทคนิคท่าหลวงซิเมนต์ไทยอนุสรณ์",
        year: "2562 - 2564",
        description: "อิเล็กทรอนิกส์",
        logo: "/images/TTL.png",
        // transcript: "#", 
        mapLink: "https://maps.app.goo.gl/Uzc6EcCJZPcRP8vs9"
      }
    ]
  },
  experience: {
    badge: "CAREER",
    titleStart: "ประสบการณ์",
    titleHighlight: "การทำงาน",
    subtitle: "เส้นทางการทำงานและโปรเจกต์ที่ได้รับมอบหมายในระดับมืออาชีพ",
    mapsBtn: "ดูแผนที่",
    items: [
      {
        duration: "ภาคเรียนที่ 2 / 2565",
        role: "นักศึกษาฝึกงาน (Graphene Synthesis Innovation)",
        company: "สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)",
        description: "ปฏิบัติงานในห้องปฏิบัติการนวัตกรรมการสังเคราะห์กราฟีน เรียนรู้กระบวนการวิจัยและเทคโนโลยีวัสดุขั้นสูง",
        skills: ["Research", "Laboratory", "Graphene Synthesis", "Innovation"],
        mapLink: "https://maps.app.goo.gl/xj9udKzhHwcUCwbm7"
      },
      {
        duration: "ภาคเรียนที่ 5 / 2564",
        role: "นักศึกษาฝึกงาน (EDP Coating Process)",
        company: "ห้างหุ้นส่วนจำกัด ท่าลาน-ซิงค์",
        description: "เรียนรู้กระบวนการชุบโลหะด้วยวิธีไฟฟ้า (Electro Deposition Painting) ในระบบอุตสาหกรรม",
        skills: ["EDP Process", "Metal Coating", "Industrial Engineering", "Quality Control"],
        mapLink: "https://maps.app.goo.gl/3pKhvHxsENPtAmhk9"
      }
    ]
  },
  contact: {
    badge: "CONTACT",
    titleStart: "ช่องทาง",
    titleHighlight: "ติดต่อ",
    subtitle: "ยินดีรับฟังทุกข้อเสนอแนะ หรือความต้องการร่วมงานครับ",
    emailLabel: "อีเมลติดต่อ",
    email: "pluemkub1313@gmail.com",
    phoneLabel: "เบอร์โทรศัพท์",
    phone: "063-758-8253",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.33609982581163!2d100.51718492328534!3d13.821583513967107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9cbb3aa17b%3A0xa3e1141bc9c31250!2zMTc4IOC4i-C4reC4oiDguKHguKvguLLguKjguLLguKUg4LmB4LiC4Lin4LiH4Lin4LiH4Lio4LmM4Liq4Lin4LmI4Liy4LiHIOC4muC4suC4h-C4i-C4t-C5iOC4rSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTA4MDA!5e0!3m2!1sth!2sth!4v1772431926738!5m2!1sth!2sth",
    formTitle: "ส่งข้อความหาผม",
    placeholders: {
      name: "ชื่อของคุณ",
      email: "อีเมลติดต่อ",
      message: "พิมพ์ข้อความของคุณที่นี่...",
      send: "ส่งข้อความ"
    }
  },
  footer: {
  marquee: "ชีวิต // เวลา // ความฝัน // ",
  mission: "มุ่งมั่นพัฒนาอย่างไร้ขีดจำกัด",
  stable: "การเชื่อมต่อปกติ"
}
};