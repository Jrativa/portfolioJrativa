export const en = {
  meta: {
    title: 'Jose Luis Rativa Medina | AI Engineer',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  banner: {
    tagline: 'Welcome to my website',
    greeting: "Hi, I'm Jose Luis",
    roles: ['AI Engineer', 'Software Engineer', 'GenAI & Agentic AI'],
    profile: 'AI Engineer and Software Engineer with hands-on experience building and deploying Generative AI and Agentic AI systems, including RAG, LLM distillation, conversational memory and real-time voice agents. Strong software engineering background in TypeScript, React, Node.js and Python, with research experience in generative models, computer vision and IoT security.',
    ctaContact: "Let's work together",
    ctaCv: 'Download CV',
  },
  experience: {
    title: 'Experience',
    subtitle: 'My professional journey so far.',
    items: {
      ary: {
        role: 'AI Engineer Intern',
        location: 'Palaiseau, France',
        bullets: [
          'Contributed to the end-to-end design and development of voice-based conversational agents, from architecture through deployment, integrating real-time speech recognition and synthesis for natural, low-latency voice interactions.',
          'Designed and implemented RAG architectures and conversational memory components, enabling agents to leverage clients’ knowledge bases and keep contextual continuity across long, multi-turn interactions.',
          'Applied knowledge distillation from Mistral Large to a Qwen 0.5B student model for user-intent classification, followed by quantization and WebLLM/WebGPU optimization for lightweight client-side inference.',
          'Developed a lightweight ONNX lip-sync model through knowledge distillation from MuseTalk, using a compact convolutional architecture and replacing MuseTalk’s VAE with TAESD to cut memory and compute requirements for WebGPU deployment.',
        ],
      },
      unal: {
        role: 'Software Engineer',
        location: 'Remote',
        bullets: [
          'Contributed to the architecture and development of a web platform for student pre-registration for Colombia’s national Saber Pro exam (Icfes), supporting a reliable and scalable academic assessment workflow.',
          'Contributed to the architecture and design of a self-assessment system for undergraduate and graduate programs, enabling the evaluation and monitoring of academic programs.',
          'Designed database schemas and performed ongoing maintenance of information systems, ensuring data integrity, reliability and operational continuity.',
        ],
      },
    },
  },
  education: {
    title: 'Education',
    subtitle: 'Where I built my foundations in engineering, data and AI.',
    coursework: 'Relevant coursework',
    items: {
      tsp: {
        degree: 'Master’s Degree in Engineering — Data & AI track',
        location: 'Évry, France',
        courses: ['Computer Vision', 'Deep Learning', 'Probability for Machine Learning', 'Reinforcement Learning', 'Large-scale Generative Models for NLP & Speech', 'Relational & Distributed Data Management', 'Stochastic Processes', 'Ethics & Law in AI and Data Science'],
      },
      unal: {
        degree: 'BSc in Systems and Computer Engineering',
        location: 'Bogotá, Colombia',
        courses: ['Calculus', 'Linear Algebra', 'Software Engineering', 'Software Architecture', 'Intelligent Systems', 'Object-Oriented Programming', 'Data Structures', 'Compilers & Programming Languages', 'Algorithms', 'Project Management'],
      },
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I use to take ideas from research to production.',
    categories: {
      programming: 'Programming',
      ai: 'AI / ML',
      web: 'Web',
      data: 'Data',
      cloud: 'Cloud & Tools',
      aidev: 'AI-augmented development',
      os: 'Operating systems',
    },
    languages: 'Languages',
    languagesList: ['Spanish — Native', 'English — C1', 'French — C1'],
    certification: 'Certification',
    soft: 'Soft skills',
    softList: ['Problem solving', 'Analytical thinking', 'Effective communication', 'Teamwork', 'Adaptability'],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of research, academic and personal projects.',
    tabs: {
      ai: 'AI & Research',
      web: 'Web',
      languages: 'Programming languages',
    },
    items: {
      diffusion3d: {
        name: '3D Reconstruction via Diffusion',
        description: 'Applied generative diffusion models to reconstruct 3D objects from 2D slices.',
      },
      segmentation3d: {
        name: '3D Human Segmentation',
        description: 'Deep learning methods for human silhouette segmentation in 3D scenes.',
      },
      iotIdentity: {
        name: 'Privacy-Preserving Identity for IoT',
        description: 'End-to-end decentralized identity and access-control architecture for IoT environments built on Hyperledger Fabric.',
      },
      tiendaun: {
        name: 'TiendaUn',
        description: 'Event-driven microservices architecture for the online store of the National University of Colombia.',
      },
      chazam: {
        name: 'Chazam',
        description: 'Web app that lets National University students locate campus “chazas”, review their products and filter them by category.',
      },
      waffles: {
        name: 'Waffles Toppings & More',
        description: 'Website to promote a Chicago-based waffle business founded in 2022 and showcase its products.',
      },
      conectarte: {
        name: 'ConectArte',
        description: 'Platform where musicians, photographers, painters and other artists showcase their work and get hired for events.',
      },
      croissant: {
        name: 'Croissant ++',
        description: 'General-purpose programming language with a simple French syntax, designed to introduce French-speaking children to programming.',
      },
      translator: {
        name: 'Small Basic → Python 3',
        description: 'Source-to-source translator built with ANTLR4 that converts Small Basic code into Python 3.',
      },
    },
  },
  contact: {
    title: 'Get in touch',
    subtitle: 'Open to AI and software engineering opportunities. Drop me a message!',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    success: 'Message sent successfully. I will get back to you soon!',
    error: 'Something went wrong. Please try again or email me directly.',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};
