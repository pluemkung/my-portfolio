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
    resumeBtn: "Download Resume",
    resumeUrl: "/resume.pdf",
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
        items: ["Java", "Python", "C", "SQL", "PHP"]
      },
      {
        title: "Software & Web",
        icon: "💻",
        description: "Web development and programming.",
        items: ["React", "JavaScript", "HTML5 & CSS", "Node.js",]
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
    transcriptBtn: "Transcript", // English
    mapsBtn: "View Maps",
    items: [
      {
        level: "Bachelor's / Associate's Degree in Computer Electronics Technology",
        school: "King Mongkut's University of Technology North Bangkok",
        year: "2567 - Present",
        description: "Continuing studies in Computer Electronics Technology.",
        logo: "/images/KMUTNB.png",
        transcript: "/documents/KMUTNB_Transcript.pdf",
        mapLink: "https://maps.app.goo.gl/TaUkY4QNFKbkYPb2A"
      },
      {
        level: "Associate's Degree in Electronics",
        school: "Talung Cement Thai Anusorn Technical College",
        year: "2565 - 2566",
        description: "Associate's Degree in Electronics.",
        logo: "/images/TTL.png",
        // transcript: "#", 
        mapLink: "https://maps.app.goo.gl/Uzc6EcCJZPcRP8vs9"
      },
      {
        level: "High School Diploma in Electronics",
        school: "Talung Cement Thai Anusorn Technical College",
        year: "2562 - 2564",
        description: "High School Diploma in Electronics.",
        logo: "/images/TTL.png",
        // transcript: "#", 
        mapLink: "https://maps.app.goo.gl/Uzc6EcCJZPcRP8vs9"
      }
    ]
  },
  experience: {
    badge: "EXPERIENCE",
    titleStart: "Work",
    titleHighlight: "Experience",
    subtitle: "My professional journey and internship experiences in specialized technology fields.",
    mapsBtn: "View Maps",
    items: [
      {
        duration: "Semester 2 / 2022",
        role: "Internship (Graphene Synthesis Innovation)",
        company: "National Science and Technology Development Agency (NSTDA)",
        description: "Conducted research at the Graphene Synthesis Innovation Laboratory, focusing on advanced material research processes and high-tech synthesis technologies.",
        skills: ["Research", "Laboratory", "Graphene Synthesis", "Innovation"],
        mapLink: "https://maps.app.goo.gl/xj9udKzhHwcUCwbm7"
      },
      {
        duration: "Semester 5 / 2021",
        role: "Internship (EDP Coating Process)",
        company: "Thalan-Zinc Limited Partnership",
        description: "Studied and practiced Electro Deposition Painting (EDP) processes within an industrial manufacturing system.",
        skills: ["EDP Process", "Metal Coating", "Industrial Engineering", "Quality Control"],
        mapLink: "https://maps.app.goo.gl/3pKhvHxsENPtAmhk9"
      }
    ]
  },
  contact: {
    badge: "CONTACT",
    titleStart: "Contact",
    titleHighlight: "Me",
    subtitle: "Feel free to reach out for collaboration or inquiries.",
    emailLabel: "Direct Email",
    email: "pluemkub1313@gmail.com",
    phoneLabel: "Contact Number",
    phone: "063-758-8253",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.33609982581163!2d100.51718492328534!3d13.821583513967107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9cbb3aa17b%3A0xa3e1141bc9c31250!2zMTc4IOC4i-C4reC4oiDguKHguKvguLLguKjguLLguKUg4LmB4LiC4Lin4LiH4Lin4LiH4Lio4LmM4Liq4Lin4LmI4Liy4LiHIOC4muC4suC4h-C4i-C4t-C5iOC4rSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTA4MDA!5e0!3m2!1sth!2sth!4v1772431926738!5m2!1sth!2sth",
    formTitle: "Send me a message",
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Type your message here...",
      send: "Send Message"
    }
  },
  footer: {
    marquee: "LIFE // TIME // DREAMS // ",
    mission: "DESIGNED FOR MISSION_OBJECTIVE",
    stable: "STABLE CONNECTION"
  }
};