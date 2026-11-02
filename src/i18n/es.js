export const es = {
  meta: {
    title: 'Jose Luis Rativa Medina | Ingeniero de IA',
  },
  nav: {
    home: 'Inicio',
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  banner: {
    tagline: 'Bienvenido a mi portafolio',
    greeting: 'Hola, soy Jose Luis',
    roles: ['Ingeniero de IA', 'Ingeniero de Software', 'GenAI & Agentic AI'],
    profile: 'Ingeniero de IA e Ingeniero de Software con experiencia práctica construyendo y desplegando sistemas de IA Generativa y Agéntica: RAG, destilación de LLMs, memoria conversacional y agentes de voz en tiempo real. Sólida formación en ingeniería de software con TypeScript, React, Node.js y Python, y experiencia en investigación en modelos generativos, visión por computador y seguridad IoT.',
    ctaContact: 'Trabajemos juntos',
    ctaCv: 'Descargar CV',
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Mi trayectoria profesional hasta hoy.',
    items: {
      ary: {
        role: 'Ingeniero de IA (Practicante)',
        location: 'Palaiseau, Francia',
        bullets: [
          'Participé en el diseño y desarrollo de extremo a extremo de agentes conversacionales de voz, desde la arquitectura hasta el despliegue, integrando reconocimiento y síntesis de voz en tiempo real para interacciones naturales y de baja latencia.',
          'Diseñé e implementé arquitecturas RAG y componentes de memoria conversacional, permitiendo a los agentes aprovechar las bases de conocimiento de los clientes y mantener el contexto en conversaciones largas y de múltiples turnos.',
          'Apliqué destilación de conocimiento de Mistral Large a un modelo estudiante Qwen 0.5B para clasificación de intención de usuario, seguida de cuantización y optimización con WebLLM/WebGPU para inferencia ligera en el cliente.',
          'Desarrollé un modelo ONNX ligero de lip-sync mediante destilación desde MuseTalk, con una arquitectura convolucional compacta y reemplazando el VAE de MuseTalk por TAESD para reducir memoria y cómputo en el despliegue con WebGPU.',
        ],
      },
      unal: {
        role: 'Ingeniero de Software',
        location: 'Remoto',
        bullets: [
          'Participé en la arquitectura y el desarrollo de una plataforma web de preinscripción de estudiantes a la prueba nacional Saber Pro (Icfes), soportando un proceso de evaluación académica confiable y escalable.',
          'Participé en la arquitectura y el diseño de un sistema de autoevaluación para programas de pregrado y posgrado, que permite evaluar y hacer seguimiento a los programas académicos.',
          'Diseñé esquemas de bases de datos y realicé mantenimiento continuo de sistemas de información, garantizando la integridad de los datos, la confiabilidad y la continuidad operativa.',
        ],
      },
    },
  },
  education: {
    title: 'Educación',
    subtitle: 'Donde construí mis bases en ingeniería, datos e IA.',
    coursework: 'Cursos relevantes',
    items: {
      tsp: {
        degree: 'Máster en Ingeniería — Énfasis en Datos e IA',
        location: 'Évry, Francia',
        courses: ['Visión por Computador', 'Deep Learning', 'Probabilidad para Machine Learning', 'Aprendizaje por Refuerzo', 'Modelos Generativos a Gran Escala para PLN y Voz', 'Gestión de Datos Relacionales y Distribuidos', 'Procesos Estocásticos', 'Ética y Derecho en IA y Ciencia de Datos'],
      },
      unal: {
        degree: 'Ingeniería de Sistemas y Computación',
        location: 'Bogotá, Colombia',
        courses: ['Cálculo', 'Álgebra Lineal', 'Ingeniería de Software', 'Arquitectura de Software', 'Sistemas Inteligentes', 'Programación Orientada a Objetos', 'Estructuras de Datos', 'Compiladores y Lenguajes de Programación', 'Algoritmos', 'Gestión de Proyectos'],
      },
    },
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Tecnologías y herramientas que uso para llevar ideas de la investigación a producción.',
    categories: {
      programming: 'Programación',
      ai: 'IA / ML',
      web: 'Web',
      data: 'Datos',
      cloud: 'Cloud y herramientas',
      aidev: 'Desarrollo asistido por IA',
      os: 'Sistemas operativos',
    },
    languages: 'Idiomas',
    languagesList: ['Español — Nativo', 'Inglés — C1', 'Francés — C1'],
    certification: 'Certificación',
    soft: 'Habilidades blandas',
    softList: ['Resolución de problemas', 'Pensamiento analítico', 'Comunicación efectiva', 'Trabajo en equipo', 'Adaptabilidad'],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Una selección de proyectos de investigación, académicos y personales.',
    tabs: {
      ai: 'IA e Investigación',
      web: 'Web',
      languages: 'Lenguajes de programación',
    },
    items: {
      diffusion3d: {
        name: 'Reconstrucción 3D con Difusión',
        description: 'Aplicación de modelos generativos de difusión para reconstruir objetos 3D a partir de cortes 2D.',
      },
      segmentation3d: {
        name: 'Segmentación Humana 3D',
        description: 'Métodos de deep learning para la segmentación de siluetas humanas en escenas 3D.',
      },
      iotIdentity: {
        name: 'Identidad para IoT con Privacidad',
        description: 'Arquitectura descentralizada de identidad y control de acceso de extremo a extremo para entornos IoT, construida sobre Hyperledger Fabric.',
      },
      tiendaun: {
        name: 'TiendaUn',
        description: 'Arquitectura de microservicios orientada a eventos para la tienda en línea de la Universidad Nacional de Colombia.',
      },
      chazam: {
        name: 'Chazam',
        description: 'Aplicación web que permite a los estudiantes de la Universidad Nacional ubicar las “chazas” del campus, opinar sobre sus productos y filtrarlas por categoría.',
      },
      waffles: {
        name: 'Waffles Toppings & More',
        description: 'Sitio web para promocionar un emprendimiento de waffles fundado en 2022 en Chicago y dar a conocer sus productos.',
      },
      conectarte: {
        name: 'ConectArte',
        description: 'Plataforma donde músicos, fotógrafos, pintores y otros artistas dan a conocer su trabajo y son contratados para eventos.',
      },
      croissant: {
        name: 'Croissant ++',
        description: 'Lenguaje de programación de propósito general con sintaxis sencilla en francés, pensado para introducir a niños francófonos a la programación.',
      },
      translator: {
        name: 'Small Basic → Python 3',
        description: 'Traductor de código fuente construido con ANTLR4 que convierte código Small Basic a Python 3.',
      },
    },
  },
  contact: {
    title: 'Contáctame',
    subtitle: 'Abierto a oportunidades en IA e ingeniería de software. ¡Escríbeme!',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    message: 'Mensaje',
    send: 'Enviar',
    sending: 'Enviando...',
    success: 'Mensaje enviado con éxito. ¡Te responderé pronto!',
    error: 'Algo salió mal. Inténtalo de nuevo o escríbeme directamente por correo.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
