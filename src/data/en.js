export const en = {
  nav: {
    about: 'ABOUT',
    skills: 'SKILLS',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    contact: 'CONTACT'
  },
  hero: {
    greeting: "Creative Technologist • Thailand",
    name: "Natthakit Moonwong",
    role: "Electronics Computer Technology Student",
    description: "Interested in creating all types of technology from hardware and electronics to web apps and software. I enjoy experimenting, learning, and turning ideas into reality.",
    phone: "063-758-8253",
    email: "natthakit.moonwong@gmail.com",
    viewProjects: "PROJECTS",
    contactMe: "CONTACT"
  },
  about: {
    badge: "ABOUT ME",
    titleStart: "Get to know ",
    titleHighlight: "Me",
    desc1: "Hello! I'm Natthakit Moonwong, a Computer Electronics Technology student passionate about creating tangible and practical technology. I enjoy continuously learning and developing my skills, whether it's writing code (Software) or designing circuits (Hardware).",
    desc2: "Currently, I am focusing on my final project regarding Parallel Pure Sine Wave Inverters, alongside developing my Web Development skills. My goal is to become a developer who can seamlessly bridge the gap between the hardware world and online systems.",
    highlights: [
      { title: "🎓 Education", desc: "Computer Electronics Technology" },
      { title: "⚡ Current Focus", desc: "Parallel Pure Sine Wave Inverters & Web Apps" },
      { title: "🎯 Career Goal", desc: "Creative Technologist / IoT Developer" }
    ]
  },
  skills: {
    badge: "EXPERTISE",
    titleStart: "My ",
    titleHighlight: "Skills",
    subtitle: "Combining hardware electronics knowledge with modern software technologies.",
    categories: [
      {
        title: "Languages",
        icon: "🌐",
        description: "Programming and development languages.",
        items: ["Java", "Python", "C", "SQL" , "PHP"]
      },
      {
        title: "Software & Web",
        icon: "💻",
        description: "Web development and programming.",
        items: ["React", "JavaScript", "HTML5 & CSS", "Node.js", ]
      },
      {
        title: "Hardware & Electronics",
        icon: "🔌",
        description: "Circuit systems, microcontrollers, and power electronics.",
        items: ["Microcontrollers", "IoT Systems", "Power Electronics", "Circuit Design"]
      },
      {
        title: "Tools & Workflow",
        icon: "🛠️",
        description: "Development tools and project management.",
        items: ["Git & GitHub", "VS Code", "SolidWorks", "Arduino IDE", "Blender"]
      }
      
    ]
  },
  projects: {
    badge: "MY WORK",
    titleStart: "My ",
    titleHighlight: "Projects",
    subtitle: "A showcase of my featured projects combining hardware design and software development.",
    docType: "Type",
    noImage: "NO IMAGE DATA",
    openBtn: "OPEN DATA",
    rewardsTitle: "Achievements",
    noRewards: "- No achievements yet...",
    closeBtn: "CLOSE PANEL",
    items: [
      {
        title: "Business Expense Tracker", // เปลี่ยนชื่อแอปตามต้องการได้เลยครับ
        docType: "SOFTWARE", // เปลี่ยนประเภทเป็น SOFTWARE หรือ MOBILE APP
        images: [
          "/images/project1.png" 
        ],
        description: "Mini project: Developed a business expense tracking app using Flutter to help entrepreneurs manage their accounts and view summaries easily on mobile devices.",
        tech: ["Flutter", "Dart", "Mobile Development", "UI/UX"], // ถ้าใช้ Database อย่าง Firebase หรือ SQLite เพิ่มเข้าไปได้เลยครับ
        achievements: [
          "Developed cross-platform support for Android using Flutter",
          "System can calculate and summarize account balances in real-time"
        ],
        link: "#" // ถ้ามีลิงก์ GitHub หรือวิดีโอสาธิตการใช้งาน เอาลิงก์มาวางแทน "#" ได้เลยครับ
      },
    ]
  },
  education: {
    badge: "ACADEMIC",
    titleStart: "My ",
    titleHighlight: "Education",
    subtitle: "My journey of learning and developing technical skills.",
    items: [
      {
        level: "Bachelor's / Associate's Degree in Computer Electronics Technology",
        school: "Your University Name",
        year: "2566 - Present",
        description: "Focusing on embedded systems and developing Parallel Pure Sine Wave Inverters projects.",
        logo: "/images/uni-logo.png" // ใส่ Path รูปตรามหาวิทยาลัยตรงนี้ครับ
      },
      {
        level: "High School / Vocational Diploma",
        school: "Your Previous School Name",
        year: "2563 - 2566",
        description: "Basic knowledge in electrical and electronics fundamentals.",
        logo: "/images/school-logo.png" // ใส่ Path รูปตราโรงเรียนเก่าตรงนี้ครับ
      }
    ]
  },
  experience: {
    badge: "CAREER",
    titleStart: "My ",
    titleHighlight: "Experience",
    subtitle: "My professional journey and projects.",
    items: [
      {
        role: "Engineering Intern",
        company: "Your Company Name",
        duration: "June 2568 - August 2568",
        description: "Assisted in designing and testing power control circuits, collaborating with engineering teams to solve field issues.",
        skills: ["Circuit Testing", "Power Electronics", "Soldering"]
      },
      {
        role: "Freelance Web Developer",
        company: "Freelance",
        duration: "2567 - Present",
        description: "Designed and developed landing pages for small businesses, focusing on modern UI and mobile responsiveness.",
        skills: ["React", "CSS Grid", "Responsive Design"]
      }
    ]
  },
    contact: {
    badge: "GET IN TOUCH",
    titleStart: "My Contact",
    titleHighlight: "Information",
    subtitle: "I'm open to feedback and collaboration opportunities.",
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