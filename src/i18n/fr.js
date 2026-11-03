export const fr = {
  meta: {
    title: 'Jose Luis Rativa Medina | Ingénieur IA',
  },
  nav: {
    home: 'Accueil',
    experience: 'Expérience',
    education: 'Formation',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
  },
  banner: {
    tagline: 'Bienvenue sur mon site web',
    greeting: 'Bonjour, je suis Jose Luis',
    roles: ['Ingénieur IA', 'Ingénieur Logiciel', 'GenAI & Agentic AI'],
    profile: 'Ingénieur IA et Ingénieur Logiciel, avec une expérience concrète dans la conception et le déploiement de systèmes d’IA générative et agentique : RAG, distillation de LLM, mémoire conversationnelle et agents vocaux temps réel. Solide bagage en génie logiciel avec TypeScript, React, Node.js et Python, et une expérience de recherche en modèles génératifs, vision par ordinateur et sécurité IoT.',
    ctaContact: 'Travaillons ensemble',
    ctaCv: 'Télécharger le CV',
  },
  experience: {
    title: 'Expérience',
    subtitle: 'Mon parcours professionnel jusqu’à présent.',
    items: {
      ary: {
        role: 'Ingénieur IA (Stagiaire)',
        location: 'Palaiseau, France',
        bullets: [
          'Contribution à la conception et au développement de bout en bout d’agents conversationnels vocaux, de l’architecture au déploiement, en intégrant reconnaissance et synthèse vocales temps réel pour des interactions naturelles à faible latence.',
          'Conception et implémentation d’architectures RAG et de composants de mémoire conversationnelle, permettant aux agents d’exploiter les bases de connaissances des clients et de conserver le contexte sur de longues interactions multi-tours.',
          'Distillation de connaissances de Mistral Large vers un modèle étudiant Qwen 0.5B pour la classification d’intention utilisateur, suivie d’une quantification et d’une optimisation WebLLM/WebGPU pour une inférence légère côté client.',
          'Développement d’un modèle ONNX léger de lip-sync par distillation depuis MuseTalk, avec une architecture convolutionnelle compacte et le remplacement du VAE de MuseTalk par TAESD afin de réduire la mémoire et le calcul pour un déploiement WebGPU.',
        ],
      },
      unal: {
        role: 'Ingénieur Logiciel',
        location: 'À distance',
        bullets: [
          'Contribution à l’architecture et au développement d’une plateforme web de pré-inscription des étudiants à l’examen national Saber Pro (Icfes), assurant un processus d’évaluation académique fiable et évolutif.',
          'Contribution à l’architecture et à la conception d’un système d’auto-évaluation des programmes de licence et de master, permettant l’évaluation et le suivi des formations.',
          'Conception de schémas de bases de données et maintenance continue des systèmes d’information, garantissant l’intégrité des données, la fiabilité et la continuité opérationnelle.',
        ],
      },
    },
  },
  education: {
    title: 'Formation',
    subtitle: 'Là où j’ai construit mes bases en ingénierie, données et IA.',
    coursework: 'Cours pertinents',
    items: {
      tsp: {
        degree: 'Diplôme d’ingénieur (Master) — Parcours Data & IA',
        location: 'Évry, France',
        courses: ['Vision par ordinateur', 'Deep Learning', 'Probabilités pour le Machine Learning', 'Apprentissage par renforcement', 'Modèles génératifs à grande échelle pour le TAL et la parole', 'Gestion de données relationnelles et distribuées', 'Processus stochastiques', 'Éthique et droit de l’IA et de la science des données'],
      },
      unal: {
        degree: 'Licence en Ingénierie des Systèmes et Informatique',
        location: 'Bogotá, Colombie',
        courses: ['Analyse', 'Algèbre linéaire', 'Génie logiciel', 'Architecture logicielle', 'Systèmes intelligents', 'Programmation orientée objet', 'Structures de données', 'Compilation et langages de programmation', 'Algorithmique', 'Gestion de projet'],
      },
    },
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Les technologies et outils que j’utilise pour passer de la recherche à la production.',
    categories: {
      programming: 'Programmation',
      ai: 'IA / ML',
      web: 'Web',
      data: 'Données',
      cloud: 'Cloud et outils',
      aidev: 'Développement assisté par IA',
      os: 'Systèmes d’exploitation',
    },
    languages: 'Langues',
    languagesList: ['Espagnol — Langue maternelle', 'Anglais — C1', 'Français — C1'],
    certification: 'Certification',
    soft: 'Savoir-être',
    softList: ['Résolution de problèmes', 'Esprit analytique', 'Communication efficace', 'Travail en équipe', 'Adaptabilité'],
  },
  projects: {
    title: 'Projets',
    subtitle: 'Une sélection de projets de recherche, académiques et personnels.',
    tabs: {
      ai: 'IA & Recherche',
      web: 'Web',
      languages: 'Langages de programmation',
    },
    items: {
      diffusion3d: {
        name: 'Reconstruction 3D par diffusion',
        description: 'Application de modèles génératifs de diffusion pour reconstruire des objets 3D à partir de coupes 2D.',
      },
      segmentation3d: {
        name: 'Segmentation humaine 3D',
        description: 'Méthodes de deep learning pour la segmentation de silhouettes humaines dans des scènes 3D.',
      },
      iotIdentity: {
        name: 'Identité IoT respectueuse de la vie privée',
        description: 'Architecture décentralisée d’identité et de contrôle d’accès de bout en bout pour environnements IoT, basée sur Hyperledger Fabric.',
      },
      tiendaun: {
        name: 'TiendaUn',
        description: 'Architecture microservices orientée événements pour la boutique en ligne de l’Université Nationale de Colombie.',
      },
      chazam: {
        name: 'Chazam',
        description: 'Application web permettant aux étudiants de l’Université Nationale de localiser les « chazas » du campus, d’évaluer leurs produits et de les filtrer par catégorie.',
      },
      waffles: {
        name: 'Waffles Toppings & More',
        description: 'Site web pour promouvoir une entreprise de gaufres fondée en 2022 à Chicago et faire connaître ses produits.',
      },
      conectarte: {
        name: 'ConectArte',
        description: 'Plateforme où musiciens, photographes, peintres et autres artistes présentent leur travail et sont engagés pour des événements.',
      },
      croissant: {
        name: 'Croissant ++',
        description: 'Langage de programmation généraliste à la syntaxe simple en français, conçu pour initier les enfants francophones à la programmation.',
      },
      translator: {
        name: 'Small Basic → Python 3',
        description: 'Traducteur source-à-source construit avec ANTLR4 qui convertit du code Small Basic en Python 3.',
      },
    },
  },
  contact: {
    title: 'Me contacter',
    subtitle: 'Ouvert aux opportunités en IA et en génie logiciel. N’hésitez pas à m’écrire !',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Adresse e-mail',
    phone: 'Téléphone',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi...',
    success: 'Message envoyé avec succès. Je vous répondrai rapidement !',
    error: 'Une erreur est survenue. Réessayez ou écrivez-moi directement par e-mail.',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
};
