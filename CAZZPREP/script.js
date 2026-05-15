

/* ═══════════════════════════════════════════════════════════════
   PARTICLES ANIMATION
═══════════════════════════════════════════════════════════════ */
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    container.appendChild(particle);
  }
}

createParticles();

/* ═══════════════════════════════════════════════════════════════
   SCROLL TO HOME SECTION
═══════════════════════════════════════════════════════════════ */
function scrollToHome() {
  const homeSection = document.getElementById('home');
  homeSection.classList.add('visible');
  homeSection.scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════════════
   COURSE DATA
═══════════════════════════════════════════════════════════════ */
const courseData = {
  "School of Computer Science Engineering": {
    "CSE": {
        "Semester 1": ["Mathematics-I", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
        "Semester 2": ["Mathematics-II", "Physics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
      "Semester 3": ["Digital Logic Design", "Data Structure & Algorithms", "Computer Organization & Architecture", "Mathematics-III (Probability and Statistics)", "Environmental Sciences", "Economics for Engineers (Humanities-II)"],
      "Semester 4": ["Database Management System", "Object Oriented Programming", "Machine Learning", "Discrete Mathematics", "Formal Language & Automata Theory", "Introduction to Industrial Management (Humanities-III)"],
      "Semester 5": ["Compiler design", "Operating Systems", "Design & Analysis of Algorithms", "Artificial Intelligence", "Human Computer Interaction", "Computer Graphics", "Operations Research", "Multimedia Systems", "Introduction to Philosophical Thoughts", "Project Management and Entrepreneurship (Humanities-IV)"],
      "Semester 6": ["Cloud Computing", "Software Engineering", "Computer Networks", "Introduction to Cyber Security & Blockchain Technology", "Advanced Algorithms", "Distributed Systems", "Image Processing", "Parallel and Distributed Algorithms", "Data Mining", "Pattern Recognition", "Numerical Methods", "Human Resource Development and Organizational Behavior", "Soft Skill & Interpersonal Communication"],
        "Semester 7": ["Quantum Computing", "Software Engineering", "Neural Networks and Deep Learning", "Soft Computing", "Signals and Networks", "Cryptography & Network Security", "Speech and Natural Language Processing", "Internet of Things"],
        "Semester 8": ["Big Data Analysis", "Cyber Law and Ethics", "Mobile Computing", "Ad-hoc and Sensor Network"]
    },
    "CSE-DS": {
        "Semester 1": ["Mathematics-I", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
        "Semester 2": ["Mathematics-II","Physics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
      "Semester 3": ["Principles of Communication Engineering", "Digital Electronics", "Statistics for Data Science", "Data Structure and Algorithms", "Discrete Mathematics", "Probability Theory"],
      "Semester 4": ["Linear Algebra", "Computer Organization and Architecture", "Data Base Management System", "Design and Analysis of Algorithm", "Economics for Engineers"],
        "Semester 5": ["Operating System", "Object Oriented Programming", "Artificial Intelligence", "Formal Language and Automata Theory", "Data Mining", "Human Values and Professional Ethics"],
        "Semester 6": ["Data Analysis and Visualization", "Machine Learning", "Computer Networks", "Mobile Computing", "Information Security and Privacy", "Computer Graphics", "Cloud & Edge Computing", "Data Warehousing", "Big Data Analytics", "Soft Computing", "Software Engineering", "Soft Skill and Interpersonal Communication", "Operation Research", "Human Resource Management", "Organizational Behaviour"],
        "Semester 7": ["Information Theory and Coding", "Advanced Computer Architecture", "Digital Image Processing", "Internet Technology", "Internet of Things", "Information Retrieval", "E-Commerce and ERP", "Block chain Technology", "Bioinformatics", "Cyber Law and Cyber Security", "Optimization Technique", "Microprocessor and Microcontroller", "Project Management and Entrepreneurship"],
        "Semester 8": ["Artificial Neural Network", "Natural Language Processing", "Web Mining", "Quantum Computing", "Embedded Systems", "Business Analytics", "Human Computer Interaction", "Cryptography and Network Security", "Economic Policies in India", "Compiler Design", "Research Methodology", "Remote Sensing and GIS"]
    },
    "CSE-AIML": {
        "Semester 1": ["Mathematics-I", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
        "Semester 2": ["Mathematics-II","Physics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
      "Semester 3": ["Digital Electronics", "Data Structure and Algorithms", "Computer Organization & Architecture", "Linear Algebra", "Economics for Engineers"],
      "Semester 4": ["Probability and Statistics", "Object Oriented Programming & Java", "Formal Language and Automata Theory", "Design and Analysis of Algorithm", "Signals and Systems"],
      "Semester 5": ["Discrete Mathematics", "Operating System", "Database Management Systems", "Machine Learning Foundations", "Computer Networks", "Artificial Intelligence"],
      "Semester 6": ["Machine Learning Applications", "Deep Learning", "Human Values and Professional Ethics", "Soft Computing", "Cloud Computing", "Pattern Recognition", "Graph Theory", "Big Data Analytics", "Data Mining", "Distributed System", "Digital Signal Processing", "Advanced Computer Architecture", "Human Computer Interaction", "Artificial Neural Network", "Cryptography and Network Security"],
        "Semester 7": ["Social Network Analysis", "Computer Vision", "Software Engineering", "Data Warehousing", "Ecommerce and ERP", "Information Theory and Coding", "Data Visualization", "Mobile Computing", "Internet of Things", "Bio Informatics", "Robotics", "Compiler Design", "Principles of Management"],
        "Semester 8": ["Natural Language Processing", "Ethical Issues in AI", "Digital Image Processing", "Applications of AI in Biomedical Engineering", "Operation Research", "Economic Policies in India", "Microelectronics and VLSI", "Quantum Computing", "Organizational Behaviour", "Human Resource Management", "Research Methodology", "Soft skill and Interpersonal Communication"]
    },
    "CSE-CS": {
        "Semester 1": ["Mathematics-I", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
        "Semester 2": ["Mathematics-II","Physics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
      "Semester 3": ["Digital Electronics", "Data Structure and Algorithms", "Computer Organization & Architecture", "Linear Algebra", "Economics for Engineers"],
      "Semester 4": ["Discrete Mathematics", "Object Oriented Programming", "Operating System", "Formal Language and Automata Theory", "Biology"],
      "Semester 5": ["Probability and Statistics", "Database Management System", "Design and Analysis of Algorithm", "Data Communication and Networks", "Cryptography", "Malware Analysis"],
      "Semester 6": ["Network Security", "Ethical Hacking", "Artificial Intelligence", "Human Values and Professional Ethics", "Computer Graphics", "Internet Technology", "IoT Application and Design", "Graph Theory", "Cyber Law and Cyber Crime", "Embedded System", "Human Resource Management", "Economic Policies in India"],
        "Semester 7": ["Cloud Computing", "Software Engineering", "Steganography and Watermarking", "Digital Forensics", "Block chain and Cryptocurrency", "Social Network Analysis", "Advanced Computer Architecture", "Big Data Analytics", "Natural Language Processing", "Soft skill and Interpersonal Communication", "Digital Signal Processing", "Machine Learning", "Project Management and Entrepreneurship"],
        "Semester 8": ["Quantum Computing", "Information Theory and Coding", "Cyber Security in Block chain Technology", "Bio Informatics", "Security Assessment and Risk Analysis", "Mobile Computing", "Deep Learning", "Digital Image Processing", "Operations Research", "Remote Sensing and GIS", "Ecommerce and ERP", "Business Analytics", "Numerical Methods", "Multimedia Technology", "Introduction to Arts and Aesthetics", "Research Methodology"]
    },
        "IT": {
            "Semester 1": ["Mathematics-I", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
            "Semester 2": ["Mathematics-II","Physics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
        "Semester 3": ["Digital Electronics", "Data Structure & Algorithms", "Object Oriented Programming", "Mathematics-III (Probability & Statistics)", "Economics for Engineers (Humanities-II)"],
        "Semester 4": ["Discrete Mathematics", "Computer Organization & Architecture", "Formal Language & Automata Theory", "Design & Analysis of Algorithms", "Operating System", "Biology"],
        "Semester 5": ["Multimedia Technology", "Database Management Systems", "Computer Networks", "Introduction to Industrial Management (Humanities III)", " Information System and Coding Theory","Artificial Intelligence "," Computer Graphics"],
        "Semester 6": ["Machine Learning", "Software Engineering", "Cloud Computing", "Compiler Design", "Parallel and Distributed Algorithms", "Data Mining", "Human Computer Interaction", "Pattern Recognition", "E-Commerce and ERP", "Micro-electronics and VLSI Design"],
            "Semester 7": ["Quantum Computing", "Internet of Things", "Deep Learning & Neural Network", "Ad-Hoc and Sensor Networks", "Operations Research", "Introduction to Philosophical Thoughts", "Soft Skill & Interpersonal Communication", "Project Management and Entrepreneurship"],
            "Semester 8": ["Big Data Analysis", "Cyber Law and Ethics", "Speech and Natural Language Processing", "Cyber Physical System", "Cryptography & Network Security", "Mobile Computing", "Bioinformatics", "Robotics"]
        }
  },
"School of Non Computer Science Engineering": {
  "Mechanical": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Fluid Mechanics"],
    "Semester 4": ["Machine Design"],
    "Semester 5": ["Heat Transfer"],
    "Semester 6": ["Dynamics"],
    "Semester 7": ["CAD"],
    "Semester 8": ["CAM"]
  },
  "Civil": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Structural Analysis"],
    "Semester 4": ["Geotechnical Engineering"],
    "Semester 5": ["Transportation Engineering"],
    "Semester 6": ["Hydrology"],
    "Semester 7": ["Construction Management"],
    "Semester 8": ["Environmental Engineering"]
  },
  "Electrical": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  },
  "ECE": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  },
  "Chemical": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  },
  "Biotech": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  },
  "AEIE": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  },"FT": {
    "Semester 1": ["Physics-I", "Mathematics-I", "Basic Elec. & Electro. Engg.", "Biology for Engineers"],
    "Semester 2": ["Mathematics-II", "Chemistry-I", "Programming for Problem Solving", "Values, Ethics and Indian Knowledge System", "English Language and Technical Communication"],
    "Semester 3": ["Signals and Systems"],
    "Semester 4": ["Control Systems"],
    "Semester 5": ["Power Systems"],
    "Semester 6": ["Digital Electronics"],
    "Semester 7": ["Microprocessors"],
    "Semester 8": ["Renewable Energy"]
  }
  }
};

/* 
═══════════════════════════════════════════════════════════════
  PAPERS DATABASE - ADD YOUR GOOGLE DRIVE FILE IDs HERE
═══════════════════════════════════════════════════════════════
*/

const papers = [
  // ═══ CSE - Semester 2 ═══
  { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1whTjMY0szsN_3h1WNak6YgaPpcu2sK8X" 
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1PJ9wVSThZtHChYOC5jIhSqYUaRuh7RiC" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },{ 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "11JxdulZsF0jgTAwwZKE30CtVXYQr2LeA"
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "113CbrT6r_j2JVPbgejcRxJNWiqa6fM7d"
  }, { 
    subject: "Chemistry-I", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "14EheF3K_m-yQ3waRTHYsaDhcJXAy_ujA"
  },{ 
    subject: "Chemistry-I", 
    year: "2023", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "1OmnqzdI9h-0SCzG1R40OPqyWkT97CBAl"
  },{ 
    subject: "Programming for Problem Solving", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "1bFZ1wlQmN-0X3HQXQkD6we7ojG6tEiAA"
  },{ 
    subject: "Programming for Problem Solving", 
    year: "2023", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "1g875D10xGIGUu-NO3U9gKuJt4HjodXA1"
  },{ 
    subject: "Values, Ethics and Indian Knowledge System", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "1WQ9ONPNwogOLsAodJ03mY9OS1LK_mYaq"
  },{ 
    subject: "English Language and Technical Communication", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["CSE","CSE-DS","CSE-AIML","CSE-CS","IT"], 
    school: "School of Computer Science Engineering",
    fileId: "13EhuV3vHLwmD4_811yOIE-Njb2x74mMw"
  },
  //=======CORE Branches=========
   { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"],
    school: "School of Non Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 1", 
    branch: "ECE", 
    school: "School of Non Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-I", 
    year: "2026", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "12UtL6Ska9PUtv1KFHKCh7bwGwabugqwW" 
  },{ 
    subject: "Mathematics-I", 
    year: "2023", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1W_Knn86ZBGRCnk2Q07hqBkvHyNH7-Mj_" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 1", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },{ 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "11JxdulZsF0jgTAwwZKE30CtVXYQr2LeA"
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "113CbrT6r_j2JVPbgejcRxJNWiqa6fM7d"
  }, { 
    subject: "Chemistry-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "14EheF3K_m-yQ3waRTHYsaDhcJXAy_ujA"
  },{ 
    subject: "Chemistry-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1OmnqzdI9h-0SCzG1R40OPqyWkT97CBAl"
  },{ 
    subject: "Programming for Problem Solving", 
    year: "2025", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1bFZ1wlQmN-0X3HQXQkD6we7ojG6tEiAA"
  },{ 
    subject: "Programming for Problem Solving", 
    year: "2023", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1g875D10xGIGUu-NO3U9gKuJt4HjodXA1"
  },{ 
    subject: "Values, Ethics and Indian Knowledge System", 
    year: "2025", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "1WQ9ONPNwogOLsAodJ03mY9OS1LK_mYaq"
  },{ 
    subject: "English Language and Technical Communication", 
    year: "2025", 
    semester: "Semester 2", 
    branch: ["ECE","AEIE","Mechanical","Civil","Electrical","Chemical","Biotech","FT"], 
    school: "School of Non Computer Science Engineering",
    fileId: "13EhuV3vHLwmD4_811yOIE-Njb2x74mMw"
  },
  //CSE-AIML Semester 2 _____
  { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1whTjMY0szsN_3h1WNak6YgaPpcu2sK8X" 
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1PJ9wVSThZtHChYOC5jIhSqYUaRuh7RiC" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },

  //CSE-DS Semester 2 _____
  { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1whTjMY0szsN_3h1WNak6YgaPpcu2sK8X" 
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1PJ9wVSThZtHChYOC5jIhSqYUaRuh7RiC" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },

  //CSE-CS Semester 2 _____
  { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1whTjMY0szsN_3h1WNak6YgaPpcu2sK8X" 
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1PJ9wVSThZtHChYOC5jIhSqYUaRuh7RiC" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },

  //IT Semester 2 _____
  { 
    subject: "Physics-I", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "19Plyx30CK2PVrSJVnubZ8DcQOSESMm4y" 
  },{ 
    subject: "Physics-I", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1zgN9dGha_vxVUR1o4LtFVUGffV_aUgtH" 
  },
  { 
    subject: "Mathematics-II", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1whTjMY0szsN_3h1WNak6YgaPpcu2sK8X" 
  },{ 
    subject: "Mathematics-II", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1PJ9wVSThZtHChYOC5jIhSqYUaRuh7RiC" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2023", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1C-megLeZQljgIcvpyjNM6pw9MdTSaVd1" 
  },{ 
    subject: "Basic Elec. & Electro. Engg.", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1uk37OnekciGgfLoWbjIseBdP52GHp6Hm" 
  },
  { 
    subject: "Biology for Engineers", 
    year: "2025", 
    semester: "Semester 2", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1V4wiZAGv4YGphJNDiu2yCt_BFgAvGt7v" 
  },
  // ========SEMESTER 4========
  { 
    subject: "Discrete Mathematics", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1dzViifo6c21IF31dRQF1n6dE-_CSanRe" 
  },
  { 
    subject: "Discrete Mathematics", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1o6vgtcWg7OemmIrNwDrl2aPXm2iT_8Tc" 
  },
  { 
    subject: "Object Oriented Programming", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1IqwrdNgO1LemWbOq93dfVOBB3-xqD7tH" 
  },
  { 
    subject: "Object Oriented Programming", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "15850S3KMySWCLj19PE_tdA1Pu1T4yFc1" 
  },
  { 
    subject: "Linear Algebra", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1teX5Hxv4a5epTLZQLhpmQgwiDkxjvRBS" 
  },
  { 
    subject: "Linear Algebra", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1wgjggqJYrxUp4u052ZnztL9D3-O9rb3C" 
  },
  { 
    subject: "Economics for Engineers", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "13_ObjCc0pHYwsHqfulclINAiNw8s9AR8" 
  },
  { 
    subject: "Economics for Engineers", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1UHkLYIsUppXLrOfbUn9teWkMxXxJBZnf" 
  },
  { 
    subject: "Data Base Management System", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1g3Tb31V6ijR2Rtg1oR3FDKhY0_rE4xGP" 
  },{
    subject: "Data Base Management System", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1_dUjcaNmkp3naYaRYxIb-qH6Fe9Mjni6" 
  },
  
  {
    subject: "Design and Analysis of Algorithm", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1-H9_Pi3qTIepM72Nr-raHhM8ZH5LVkEr" 
  },
  {
    subject: "Design and Analysis of Algorithm", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1oatXSPIlexUA1CLgpG0BUr2wzoaZTbJ7" 
  },
  
  {
    subject: "Computer Organization and Architecture", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1V4KbGGROmzWSI33Wss5yao3YDx-FYT7u" 
  },
  {
    subject: "Computer Organization and Architecture", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1cx3KDSXRUseSiSLpADbmD82iSQ9UlK3B" 
  },{
    subject: "Design and Analysis of Algorithm", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1GaA9UrWzqx8gK9QzlzkLfzWi09NycE5R"

  },{
    subject: "Design and Analysis of Algorithm", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1QyTPKfKr07rOD0whUu4NOAzjSlNnCyqg"

  },{
    subject: "Formal Language and Automata Theory", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1-TLY1cFBEchOIAr5cb_MBSjtYIyVvQk0"

  },{
    subject: "Formal Language and Automata Theory", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1UH61qPIxYrpD9QvyNHoCtVFZ5gtjY59A"

  },{
    subject: "Object Oriented Programming & Java", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "130mWt7kL0H3AjeT0TCrp7w7jGywp70qy"

  },{
    subject: "Object Oriented Programming & Java", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "102aehtcS_BVL1Jx_MxbYtQmeOgIEhtlD"

  },{
    subject: "Probability and Statistics", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1AYw8_Sv-DBzteG3TRZx2cx-dIcwN8BgJ"

  },{
    subject: "Probability and Statistics", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1tsTNW7MRqja6NciNyxectulS9KKnlvAx"

  },{
    subject: "Signals and Systems", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1IGD9oay_KP1BVuY12-j0s_DatRPDYI_Q"

  },{
    subject: "Signals and Systems", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1epOSrI_N-qBc1nD38HJVEScC2x5D5tR2"

  },{
    subject: "Biology", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1eTMnSc83wnlQdimGlFcy6lUFNOAu6mgz"

  },{
    subject: "Biology", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1-Dv-ZV9MuOWkgZYs40ka_3N7XsZDdrA0"

  },{
    subject: "Discrete Mathematics", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1avlmeaezT8oCs51u_GzrZpn7sFet8Lu4"

  },{
    subject: "Discrete Mathematics", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "11cGyl_avDTRe2udP3kzYlO9aU5IK72g9"

  },{
    subject: "Formal Language and Automata Theory", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1yYseKhDVnzrKsOwFiIrJggZHVHY6YHIY"

  },{
    subject: "Formal Language and Automata Theory", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1BLtv0Gv5qZbltTdwv_inEBQhZLOYhI5l"

  },{
    subject: "Object Oriented Programming", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1gYVAff6cvrxaohSFhzTl0pbt0IH6THW0"

  },{
    subject: "Object Oriented Programming", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1MjBmlDx3CbLGeCZvkFHfTbCf2v6Jv64p"

  },{
    subject: "Operating System", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1c5Jk6Db0tagTO3HHpAop6-ZuRSmVIYT5"

  },{
    subject: "Operating System", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1ZjVKoe6rgZQysab9AgxnZ1k7mdjNwTS2"

  },{
    subject: "Biology", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "17ae-o97C-la_bLVr6aZcNiVefQorz1xe"

  },{
    subject: "Biology", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1BbI1igIrwHLwPB4vvAXAIPdxua86fwND"

  },{
    subject: "Computer Organization & Architecture", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1EzFeT6s1OWTidZ4xR0IVa_qDjo29KsGf"

  },{
    subject: "Computer Organization & Architecture", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1OeNJfs_HHzJpFc4sVPjvOsxomG3HjYP9"

  },{
    subject: "Design & Analysis of Algorithms", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1gm73CpuTej3TG8zpaHQEeIxqETH8SfFo"

  },{
    subject: "Design & Analysis of Algorithms", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1Sr6K2tO3yjVxAGwybDtwuCVa9ItIeHJ1"

  },{
    subject: "Discrete Mathematics", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1iAh_KahyXa10M5rnwSAUAKiju41_yj6s"

  },{
    subject: "Discrete Mathematics", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1jIHsNbnpeeH0wJU0bIaUNXNR8Nr5JoLu"

  },{
    subject: "Formal Language & Automata Theory", 
    year: "2025", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1zVb-LJq62I6YfZoDyVd6hQtNqFObDDOf"

  },{
    subject: "Formal Language & Automata Theory", 
    year: "2023", 
    semester: "Semester 4", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1r70hRv4be1g67uHF2InHg99Ly4K0rXNd"

  },


  //=======SEMESTER 6========

  {
    subject: "Computer Networks", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "15o9KkbLOkhnfqDpYe0Ytp2UlQB59Bd4h"

  },{
    subject: "Computer Networks", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "10jQ7RPI7Qh11GDpVJKKxNjBmYTFnRA_k"

  },{
    subject: "Data Mining", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1FBzaFdIE2Oz_ZJvKXtAGdunWnW-0XIkQ"

  },{
    subject: "Data Mining", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "12dOt5MblLOxjT9g7iFYG7l4FLV38KoQq"

  },{
    subject: "Image Processing", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1M6VKfUVPkasNsqCCVMB5DyMYL_lmGfij"

  },{
    subject: "Image Processing", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "17ehp-LJG8v9t5rf9W2N5zMoag1A8NZNH"

  },{
    subject: "Introduction to Cyber Security & Blockchain Technology", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1MQHk8DiU1vo_Z_2LquBXhkipQXq7Ppi4"

  },{
    subject: "Introduction to Cyber Security & Blockchain Technology", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1kgQCyUOA_zD0ryzyP4qqphymQsSwztM7"

  },{
    subject: "Numerical Methods", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1O5y0vWUtS2WtAlWqq7g7F31X8vEu3Uy8"

  },{
    subject: "Numerical Methods", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1tvIItwECZbLgch80zajfwptFt-tndVyv"

  },{
    subject: "Software Engineering", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1eXeMOBPoIcLLFwQtT2DMyZmJyzM6_kJf"

  },{
    subject: "Software Engineering", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1yEMFkvzp_m_OE15PRFvvNvs4gDng9Vy5"

  },{
    subject: "Computer Networks", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1l6rvmob2Yq6oUNa2GF7EMWnem13_7l3N"

  },
  {
    subject: "Computer Networks", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1lP0IRI_NKLQnvQsYzHPDsKHJkVqT8KA8"

  },{
    subject: "Data Analysis and Visualization", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "14v4-DMpXCztdGOHK0WKGgd2FsAxDI70m"

  },{
    subject: "Data Analysis and Visualization", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "11E_5izD2kcF_6G7cXoJPXKT7CZfOa63b"

  },{
    subject: "Information Security and Privacy", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1iERVJTZui56CNkQMXYdaGFBLQiovhKdE"

  },{
    subject: "Information Security and Privacy", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1Hrc_vxAvf0AnirtaZ9RHlYcY9eVAJ4OV"

  },{
    subject: "Machine Learning", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1vZYSSLJbA-a_tt3owSfbjJ0KFkzU3qF2"

  },{
    subject: "Machine Learning", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "106fXvUSU9NXrwT_Louo28lESlh6tirzb"

  },{
    subject: "Soft Skill and Interpersonal Communication", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1ihzCiuNUD7tCVemE05E9zLlaHbYYKn4I"

  },{
    subject: "Soft Skill and Interpersonal Communication", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1TBJUYyJ-xpXUXlsn9K1bpr8GmaQCyQAQ"

  },{
    subject: "Software Engineering", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1WnuHLn4-wzMOwqwcWrNrV2SpcYPZhbKN"

  },{
    subject: "Software Engineering", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1J9maU11Gn7xZGkKKeWYaWripd4vGJjEd"

  },{
    subject: "Cryptography and Network Security", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1CnEXESTdAo7J6VhjvG-oEPUu1pkhMf79"

  },{
    subject: "Cryptography and Network Security", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "19K_2dBPTOiDPja3CtDfftrs4cupXM3z-"

  },{
    subject: "Data Mining", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1Z80UJItrHvdEFOhSzDnxEG-IyQEDLzP5"

  },{
    subject: "Data Mining", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1G0Bl-3zZ3djKCK-nu8g_vaKUS2vjxTSp"

  },{
    subject: "Deep Learning", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1wyoFqUXAnqaH1ft7c8i6Cghu3R7SEwIt"

  },{
    subject: "Deep Learning", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1ynKoB_NISPQdAWN0Wqsi8JH9JicxKTcb"

  },{
    subject: "Human Values and Professional Ethics", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1dhO7-4ooRjQQqe3dSVV9oFTXCrSkhaoj"

  },{
    subject: "Human Values and Professional Ethics", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1mOKyYSnGpEQBzJb7bUurbZx4EWHkADHQ"

  },{
    subject: "Machine Learning Applications", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1R2MRC9blcfZaQbspN2R0XafSuPBfxRNq"

  },{
    subject: "Machine Learning Applications", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1QOZpiucPLGp6KC3Rnc-kmwsSJk0Ae2Mz"

  },{
    subject: "Soft Computing", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1nukk6Jl7AAiDoukOAERktEnpSPR9C_Xf"

  },{
    subject: "Soft Computing", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1RfApjPIz-f-7A5MLxNvPJdm_jtgaOcfM"

  },{
    subject: "Artificial Intelligence", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1UAtBknkhu5SvthKCQTT4COasVXiVrspC"

  },{
    subject: "Artificial Intelligence", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1uQsGDQ_SO_wXLydIqPReGoAucD2qn3hX"

  },{
    subject: "Cyber Law and Cyber Crime", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1WgPjOEtxXItG6O4MdVNsOKyYUZslIsUn"

  },{
    subject: "Cyber Law and Cyber Crime", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "13VcK1f98NVtdFsvGtxmKCJFohIcWDnN5"

  },{
    subject: "Ethical Hacking", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1e0G-xTmK7OndHwpXIyIAf43CC5dutNb8"

  },{
    subject: "Ethical Hacking", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1EpRi7OpaeStejqs-1twG9MdrGrRojgYU"

  },{
    subject: "Human Values and Professional Ethics", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1rFWcpDqGKxwc8M-qFxG2N65tqcTVqDEK"

  },{
    subject: "Human Values and Professional Ethics", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "17OWjaDReTU6S_QyvItJ8-iFGU9av8D9O"

  },{
    subject: "Internet Technology", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1FljGffAsKDADiH5S91ISC9q8ooi89Fnq"

  },{
    subject: "Internet Technology", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1FvFLKLha_ysWka_INX5eCXV3LbdGEz0S"

  },{
    subject: "Network Security", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "14uQF2M1EcHLERiR9OhSlPyS1YqhadzHZ"

  },{
    subject: "Network Security", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "16vlLTmses7f6qDQjiNfiV-i-w3AywgeF"

  },{
    subject: "Cloud Computing", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "14w3u9pHWuH4AdkvXsVTOxH46Jz5Qgyt1"

  },{
    subject: "Compiler Design", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "17xd1c-DnoebmqV94sKqJJfl9M6hy5MPp"

  },{
    subject: "Data Mining", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1GFfc6R403Z_r54DAivnAOa9QhuxWF5OO"

  },{
    subject: "Data Mining", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1r2uw57CPtVEbYN30dqUEvZiG77VmtY3d"

  },{
    subject: "Machine Learning", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1fRtgtxxjHtnzo0hi2uTL_IyuR9x0J9oY"

  },{
    subject: "Machine Learning", 
    year: "2023", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1x7AOp2z8dqKidzA_k0YpRnn44C0paFyu"

  },{
    subject: "Software Engineering", 
    year: "2025", 
    semester: "Semester 6", 
    branch: "IT", 
    school: "School of Computer Science Engineering",
    fileId: "1truIj4sv0KdR5lNRwXZvr4pYZc8pudr6"

  },
  //=======SEMESTER 8========
  {
    subject: "Artificial Neural Network", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1B4GehcyLjBJIf_ppkufgkIlroakdXEVo"

  },{
    subject: "Business Analytics", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1se4UAsTLg-oNY6crUWojaa-lK4lHdMye"

  },{
    subject: "Research Methodology", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-DS", 
    school: "School of Computer Science Engineering",
    fileId: "1MKVnqs5QNbvOYusIXwaO9YzwoE_y6asI"

  },{
    subject: "Digital Image Processing", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1qV3O2adfRYQr3WwJP2TQvt9GHYW_sAFM"

  },{
    subject: "Operation Research", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1hRSF40RsGUbmM91ircKjxh_Hvg6n1F9n"

  },{
    subject: "Organizational Behaviour", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-AIML", 
    school: "School of Computer Science Engineering",
    fileId: "1suzfi-VSU4lsHZnOw0-uSsAGknyLw54X"

  },{
    subject: "Cyber Security in Block chain Technology", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1AKZtYNuJ9_bLPRKq0lDPhmVQ9QWEv2m8"

  },{
    subject: "Deep Learning", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1B3EkT9fI3lrmcdg_tpiRBMym2zPMBnVr"

  },{
    subject: "Ecommerce and ERP", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1HkAzn6CmdsCa-67RolgHdnH1YybZ3GjD"

  },{
    subject: "Multimedia Technology", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE-CS", 
    school: "School of Computer Science Engineering",
    fileId: "1Ms9-o5rApsMS48MD5Gd5XSJL6wISyZ_n"

  },{
    subject: "Soft Skill and Interpersonal Comm.", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1TQ1OgBt0Pn86QOSI_2Mwz5vaa-9j01JL"

  },{
    subject: "Web & Internet Technology", 
    year: "2025", 
    semester: "Semester 8", 
    branch: "CSE", 
    school: "School of Computer Science Engineering",
    fileId: "1i4q5SGcJS112EGYYR5YotvPZzS6E4Epl"

  },
  /* 
    ─────────────────────────────────────────────
    ADD MORE PAPERS BELOW IN THE SAME FORMAT
    ─────────────────────────────────────────────
  */
];

/* ═══════════════════════════════════════════════════════════════
   DROPDOWN LOGIC
═══════════════════════════════════════════════════════════════ */

const school = document.getElementById("school");
const branch = document.getElementById("branch");
const semester = document.getElementById("semester");
const subject = document.getElementById("subject");

function reset(select, text) {
  select.innerHTML = `<option value="">${text}</option>`;
}

school.addEventListener("change", () => {
  reset(branch, "Select Branch");
  reset(subject, "Select Subject");

  if (!courseData[school.value]) return;

  Object.keys(courseData[school.value]).forEach(b => {
    branch.innerHTML += `<option>${b}</option>`;
  });
});

/* =========================================
   DYNAMIC SUBJECT DROPDOWN
   (AUTO SHOWS ONLY AVAILABLE SUBJECTS)
========================================= */

function updateSubjects() {

  /* GET CURRENT VALUES */

  const selectedSchool = school.value;
  const selectedBranch = branch.value;
  const selectedSemester = semester.value;

  /* CLEAR OLD SUBJECTS */

  subject.innerHTML =
    '<option value="">Select Subject</option>';

  /* FILTER MATCHING PAPERS */

  let filtered = papers.filter(p => {

    /* SCHOOL CHECK */

    const schoolMatch =
      !selectedSchool ||
      p.school === selectedSchool;

    /* BRANCH CHECK */

    const branchMatch =
      !selectedBranch ||

      (
        Array.isArray(p.branch)
          ? p.branch.includes(selectedBranch)
          : p.branch === selectedBranch
      );

    /* SEMESTER CHECK */

    const semesterMatch =
      !selectedSemester ||
      p.semester === selectedSemester;

    return (
      schoolMatch &&
      branchMatch &&
      semesterMatch
    );
  });

  /* GET UNIQUE SUBJECTS */

  const subjects = [
    ...new Set(filtered.map(p => p.subject))
  ];

  /* ADD SUBJECTS TO DROPDOWN */

  subjects.forEach(sub => {

    const option =
      document.createElement("option");

    option.value = sub;
    option.textContent = sub;

    subject.appendChild(option);
  });
}

/* =========================================
   AUTO UPDATE SUBJECTS
========================================= */

school.addEventListener("change", updateSubjects);

branch.addEventListener("change", updateSubjects);

semester.addEventListener("change", updateSubjects);

/* ═══════════════════════════════════════════════════════════════
   PDF MODAL FUNCTIONS
═══════════════════════════════════════════════════════════════ */

function openPdfModal(paper) {
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");
  const title = document.getElementById("pdfTitle");
  
  title.textContent = `${paper.subject} - ${paper.year}`;
  
  if (paper.fileId) {
    viewer.src = `https://drive.google.com/file/d/${paper.fileId}/preview`;
  } else {
    viewer.src = "";
    setTimeout(() => {
      viewer.contentDocument.body.innerHTML = `
        <div class="no-file-message">
          <svg class="no-file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h3>PDF Not Available</h3>
          <p>This paper's file ID has not been added yet.</p>
        </div>
      `;
    }, 100);
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");
  
  modal.classList.remove("active");
  viewer.src = "";
  document.body.style.overflow = "auto";
}

function downloadPdf(fileId, filename) {
  if (!fileId) {
    alert("File ID not available for this paper yet.");
    return;
  }
  
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  link.target = '_blank';
  link.click();
}

/* ═══════════════════════════════════════════════════════════════
   RENDER PAPER CARDS
═══════════════════════════════════════════════════════════════ */

function renderPaperCard(paper) {
  const filename = `${paper.subject}_${paper.year}_${paper.semester}.pdf`.replace(/\s+/g, '_');
  
  return `
    <div class="paper-card">
      <div class="paper-header">
        <div class="paper-info">
          <h4>${paper.subject}</h4>
          <div class="paper-meta">
            <span class="meta-badge">${paper.branch}</span>
            <span class="meta-badge">${paper.semester}</span>
            <span class="meta-badge">${paper.year}</span>
          </div>
        </div>
        <div class="paper-actions">
          <button class="btn-action btn-view" onclick='openPdfModal(${JSON.stringify(paper).replace(/'/g, "&apos;")})'>
            <svg class="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            View
          </button>
          <button class="btn-action btn-download" onclick='downloadPdf("${paper.fileId}", "${filename}")'>
            <svg class="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   FIND PAPERS
═══════════════════════════════════════════════════════════════ */

function findPapers() {

  let result = papers;

  if (school.value)
    result = result.filter(p => p.school === school.value);

  if (branch.value)
    result = result.filter(p =>
      Array.isArray(p.branch)
        ? p.branch.includes(branch.value)
        : p.branch === branch.value
    );

  if (semester.value)
    result = result.filter(p => p.semester === semester.value);

  if (subject.value)
    result = result.filter(p => p.subject === subject.value);

  displayResults(result);
}

function displayResults(result) {
  const grid = document.getElementById("paperGrid");
  const title = document.getElementById("resultsTitle");
  const section = document.getElementById("results");

  grid.innerHTML = "";

  if (result.length === 0) {
    title.innerText = "No papers found";
    grid.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-gray);">
        <p>Try adjusting your filters or search for different subjects.</p>
      </div>
    `;
  } else {
    title.innerText = `${result.length} paper(s) found`;
    result.forEach(p => {
      grid.innerHTML += renderPaperCard(p);
    });
  }

  section.classList.add("visible");
}
/* =========================================
   CSE / IT NOTICE
========================================= */

function updateCseNotice() {

  const cseNotice =
    document.getElementById("cseNotice");

  /* SHOW NOTICE FOR CSE OR IT */

  if (
    branch.value === "CSE" ||
    branch.value === "IT"
  ) {

    cseNotice.style.display = "block";

  }

  /* HIDE FOR OTHER BRANCHES */

  else {

    cseNotice.style.display = "none";
  }
}

/* RUN WHEN BRANCH CHANGES */

branch.addEventListener(
  "change",
  updateCseNotice
);

// Close modal when clicking outside
document.getElementById("pdfModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closePdfModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closePdfModal();
  }
});
