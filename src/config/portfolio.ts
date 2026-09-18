// ============================================================
// PORTFOLIO CONFIG — this is the only file you need to edit
// to make this site yours. Every field is typed; if you break
// the shape, `npm run build` will tell you exactly where.
//
// Hiding sections: leave `projects`, `experiences`,
// `skillCategories`, or both `education` + `certifications`
// empty ([]) and the section (and its navbar link) disappears.
//
// Analytics: set VITE_CLARITY_ID in your environment instead
// of editing code — see .env.example.
// ============================================================
import type { PortfolioConfig } from "./types";

export const portfolioConfig: PortfolioConfig = {
  meta: {
    title: "Kaio Dev",
  },

  person: {
    name: "Kaio Vinícios",
    role: "Desenvolvedor Fullstack",
    tagline:
      "Construindo experiências digitais bem pensadas com código limpo e tecnologias modernas. Apaixonado por criar software que faça a diferença.",
    about: [
      "Sou Desenvolvedor Full Stack, com foco em back-end com Django REST Framework e front-end com React e TypeScript, atuando no desenvolvimento de aplicações web completas, seguras e bem estruturadas.",
      "Quando não estou programando, você me encontrará explorando novas tecnologias, contribuindo para projetos de código aberto ou compartilhando conhecimento por meio de redação técnica. Acredito no aprendizado contínuo e na escrita de código limpo e de fácil manutenção.",
    ],
  },

  links: {
    email: "kvsgpro@outlook.com",
    github: "https://github.com/KaioVinicios",
    linkedin: "https://www.linkedin.com/in/kaiovinicios/",
    whatsapp: "5579988853741",
    x: "https://x.com/KaioVinicios__",
  },

  techStack: [
    "React",
    "TypeScript",
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Google Cloud",
    "Docker",
    "Git",
    "Shadcn UI",
    "Tailwind CSS",
    "Framer Motion",
    "Selenium",
    "Playwright",
    "C#",
    "Stripe",
  ],

  projects: [
    {
      title: "Rosetta Landing Page",
      description:
        "Uma página inicial para uma empresa que presta serviços de apoio aos clientes em seus negócios.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion", "Vite", "EmailJS"],
      github: "https://github.com/RosettaSolutions/RosettaLandingPage",
      live: "https://rosetta-solutions.com",
    },
    {
      title: "CryptoVault",
      description:
        "Um SAAS voltado para armazenamento de arquivos com criptografia avançada e recursos em blockchain.",
      tech: ["React", "TypeScript", "Django REST", "Python", "Tailwind CSS", "Shadcn UI", "PostgreSQL", "WEB3", "Docker", "Stripe"],
      github: "https://github.com/RosettaSolutions/CryptoVaultFrontEnd",
      live: "https://cryptovault.rosetta-solutions.com",
    },
    {
      title: "Solução para Atos Capital",
      description:
        "Um dashboard para a empresa Atos Capital, que permite a visualização de dados de clientes além de uma integração DB | IA | WhatsApp para consultas personalizadas.",
      tech: ["React", "TypeScript", "Django REST", "Python", "Git", "Docker", "PostgreSQL", "Swagger", "Microsoft SQL Server", "Gemini API", "N8N", "Waha"],
      github: "https://github.com/KaioVinicios/AtosCapitalBackend",
      detail: "Há mais informações e imagens sobre esse projeto no meu LinkedIn > Experiência.",
    },
    {
      title: "SafeNumber",
      description:
        "Solução criada para resolver um problema de segurança da Amadeus & Santos Advogados Associados, que permite a validação de números, contando com um painel administrativo para gerenciar os números internos e verificar relatórios de números maliciosos.",
      tech: ["Django REST", "Python", "React", "TypeScript", "Tailwind CSS", "Docker", "PostgreSQL", "Swagger"],
      live: "https://safe-number.com/amadeus-santos-advogados",
      detail: "Esse card não conta com link de GitHub pois se trata de uma solução privada.",
    },
    {
      title: "ObraSpec API",
      description:
        "API realizada para JotaNunes construtora, que permite a criação de modo padronizável e escalável de requistos de obras, como também a geração automática de documentos.",
      tech: ["Django REST", "Python", "Git", "Docker", "PostgreSQL", "Swagger"],
      github: "https://github.com/Squad15-JotaNunes/ObraSpecAPI",
    },
    {
      title: "Apoio Fiel",
      description:
        "API criada e dedicada a uma ONG, visando auxiliar na gestão de doações e localização de animais de rua.",
      tech: ["Node.js", "Prisma", "Fastify", "TypeScript", "Docker", "Git", "Swagger"],
      github: "https://github.com/Apoio-Fiel",
    },
  ],

  experiences: [
    {
      role: "Desenvolvedor Full Stack",
      company: "Rosetta",
      period: "08/2025 — Atualmente",
      description:
        "Atuo como responsável pelo desenvolvimento técnico dos projetos, conciliando demandas de clientes com a construção de um produto próprio em fase avançada de desenvolvimento, sempre seguindo boas práticas de engenharia de software.",
      achievements: [
        "Desenvolvimento full stack utilizando React e Django REST",
        "Modelagem de banco de dados PostgreSQL",
        "Desenvolvimento de APIs REST",
        "Desenvolvimento de interfaces de usuário responsivas",
        "Testes unitários",
        "Implementação de soluções em produção",
      ],
    },
    {
      role: "Desenvolvedor RPA",
      company: "Influir",
      period: "03/2024 - 11/2024",
      description:
        "Fui responsável por analisar processos existentes, validar a aderência das automações ao fluxo real de negócio e desenvolver soluções automatizadas que reduzissem tempo de execução, identificassem falhas de processo e aumentassem a confiabilidade operacional.",
      achievements: [
        "Desenvolvimento de automações em Python, C# e JavaScript",
        "Implantação de soluções automatizadas",
        "Testes de automações",
      ],
    },
  ],

  education: [
    {
      title: "Bacharel em Ciência da Computação",
      institution: "Universidade Tiradentes",
      year: "01/2023 - 06/2027",
      description: "Foco em engenharia de software e fundamentos da computação. Graduação em andamento.",
    },
  ],

  certifications: [
    {
      title: "Supervised Machine Learning",
      institution: "Stanford Online",
      year: "2025",
      credentialUrl: "https://coursera.org/verify/CINSH6B1ZJGL",
    },
    {
      title: "GC Computing Foundations",
      institution: "Google Cloud",
      year: "2023",
      credentialUrl: "https://www.skills.google/public_profiles/52f8e364-5cbe-4e24-a81c-9d6b8643f6c1/",
    },
    {
      title: "Docker",
      institution: "Alura",
      year: "2024",
      credentialUrl: "https://cursos.alura.com.br/certificate/8a7c8cee-5820-4b10-aae6-bcee91ab232e",
    },
    {
      title: "Ver todas",
      institution: "Visualize o repositório completo",
      year: "Desde 2023",
      credentialUrl: "https://drive.google.com/drive/folders/16LoR8Few6JyMRGGk_yrQxGPqp__5FqkG?hl=pt-br",
    },
  ],

  skillCategories: [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Shadcn UI", "Radix UI", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Django", "Python", "TypeScript", "JavaScript", "Django Rest Framework", "Node.js", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "Prisma", "Django ORM"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Google Cloud", "Docker", "Git", "GitHub", "Cloudflare", "Vercel", "Linux", "Supabase", "Stripe", "Postman", "Vultr", "Grafana"],
    },
  ],

  labels: {
    nav: {
      brand: "Portfólio",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      certificates: "Certificações",
      skills: "Skills",
      contact: "Contato",
    },
    contactMenu: {
      email: "E-mail",
      copy: "Copiar e-mail",
      copied: "E-mail copiado",
      viewSection: "Ver seção de contato",
    },
    hero: {
      viewProjects: "Ver Projetos",
      linkedin: "LinkedIn",
    },
    about: {
      eyebrow: "Sobre mim",
      heading: "Um pouco sobre mim",
      stackLabel: "Stack que utilizo",
    },
    experience: {
      eyebrow: "Experiência",
      heading: "Onde trabalhei",
    },
    projects: {
      eyebrow: "Projetos",
      heading: "Trabalhos selecionados",
      codeButton: "Code",
      liveButton: "Live",
      githubCta: "Todo o código está no GitHub",
    },
    certificates: {
      eyebrow: "Certificações",
      heading: "Educação & Certificados",
      educationSubheading: "Educação",
      certificationsSubheading: "Certificados",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Tecnologias que uso",
    },
    contact: {
      eyebrow: "Contato",
      heading: "Vamos trabalhar juntos",
      pitch:
        "Estou atualmente aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato.",
      emailButton: "Entre em contato",
      divider: "ou",
    },
    footer: {
      rights: "Todos direitos reservados.",
      madeWith: "Feito com React & Tailwind",
    },
  },
};
