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
    title: "Kaio Vinícios — Desenvolvedor Full Stack",
  },

  person: {
    name: "Kaio Vinícios",
    role: "Desenvolvedor Full Stack",
    tagline:
      "APIs REST em Python e Django REST Framework, interfaces em React e TypeScript. Software em produção para clientes reais desde 2023.",
    about: [
      "Desenvolvo aplicações web de ponta a ponta: da modelagem de dados e da arquitetura REST em Django REST Framework à interface em React com TypeScript.",
      "Foram dois anos no programa de projetos do Porto Digital — quatro entregas de seis meses para empresas privadas e uma ONG, duas selecionadas para o Demoday UNIT/Porto Digital. No estágio na Influir, substituí um web scraping que rodava cerca de 10 dias contínuos por uma automação em Selenium concluída em menos de 10 minutos: uma redução de aproximadamente 1.440× no tempo de processamento.",
      "Hoje construo sistemas sob demanda e produtos SaaS próprios em produção. Busco uma posição efetiva em um time de engenharia estruturado, somando a autonomia que já exerço a revisão técnica entre pares e ambientes de alta disponibilidade.",
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
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C#",
    "SQL",
    "PHP",
    "Django",
    "Django REST Framework",
    "Django ORM",
    "Node.js",
    "Fastify",
    "Prisma",
    "JWT",
    "OpenAPI / Swagger",
    "Stripe",
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Radix UI",
    "Framer Motion",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Vite",
    "Bun",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Neon",
    "Docker",
    "AWS",
    "Cloudflare",
    "Google Cloud",
    "Railway",
    "Git",
    "GitHub Actions",
    "Selenium",
    "Playwright",
    "Pandas",
    "pytest",
    "Sentry",
    "PostHog",
    "Web3",
    "AES-GCM",
    "HKDF",
    "ANTLR4",
    "Assembly x86",
    "Gemini API",
    "N8N",
    "Waha",
  ],

  projects: [
    {
      title: "BullLedger",
      description:
        "Tracker de investimentos para Brasil, Estados Unidos e Canadá, em beta aberto. Toda operação da carteira é registrada como movimento e os saldos são sempre derivados — o sistema é um livro de fatos auditável. Entrega ROI e retorno real ajustado pela inflação local, com custo médio ponderado ou FIFO conforme a jurisdição.",
      tech: ["Django REST", "Python", "PostgreSQL", "React", "TypeScript", "OpenAPI", "Docker"],
      live: "https://bull-ledger.voynan.com",
      detail:
        "Produto próprio, de código fechado. Cerca de 37 instrumentos financeiros consolidados em 5 arquétipos de ativo, com moeda em três níveis: nativa, base e de reporte.",
    },
    {
      title: "CryptoVault",
      description:
        "SaaS de armazenamento de arquivos com criptografia AES-GCM ponta a ponta e verificação de integridade em blockchain (Ethereum e Polygon). Os arquivos são cifrados antes do envio, de modo que o servidor nunca tem acesso ao conteúdo. Em produção.",
      tech: ["Django REST", "Python", "PostgreSQL", "React", "TypeScript", "Web3", "AES-GCM", "Docker", "Stripe"],
      github: "https://github.com/RosettaSolutions/CryptoVaultFrontEnd",
      live: "https://cryptovault.rosetta-solutions.com",
    },
    {
      title: "Voynan Landing Page",
      description:
        "Página institucional da Voynan, apresentando os três pilares da empresa: software sob demanda, produtos SaaS próprios e soluções open source para a comunidade.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Vite", "Bun", "PostHog"],
      github: "https://github.com/Voynan/landing-page",
      live: "https://voynan.com",
    },
    {
      title: "Solução para Atos Capital",
      description:
        "Dashboard interativo que substituiu os relatórios financeiros em PDF gerados e enviados manualmente todo dia. API REST com autenticação JWT e permissões por perfil, notificações via WhatsApp e uma camada de IA que gera insights sobre os dados financeiros.",
      tech: ["React", "TypeScript", "Django REST", "Python", "PostgreSQL", "Docker", "Swagger", "Microsoft SQL Server", "Gemini API", "N8N", "Waha", "Git"],
      github: "https://github.com/KaioVinicios/AtosCapitalBackend",
      detail: "Reconhecido como um dos melhores projetos do semestre no Demoday UNIT/Porto Digital.",
    },
    {
      title: "SafeNumber",
      description:
        "Plataforma de denúncia, coleta e análise de números maliciosos usados em golpes contra clientes. Encomendada pelo escritório Amadeus e Santos Advogados Associados e depois modularizada para atender qualquer empresa, escritório ou instituição. Em produção.",
      tech: ["Django REST", "Python", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Docker", "Swagger"],
      live: "https://safe-number.com/amadeus-santos-advogados",
      detail: "Esse card não conta com link de GitHub pois se trata de uma solução privada.",
    },
    {
      title: "Pascalito",
      description:
        "Compilador de uma linguagem educacional inspirada em Pascal, escrito em Java 21 com ANTLR4. Cobre as quatro fases clássicas — léxica, sintática, semântica e geração de código — com tabela de símbolos em escopos aninhados, código intermediário de três endereços e saída em assembly Intel x86.",
      tech: ["Java 21", "ANTLR4", "IR de 3 endereços", "Assembly x86"],
      github: "https://github.com/KaioVinicios/Pascalito",
      detail:
        "Projeto acadêmico, na v2. O passe de otimização faz constant folding e eliminação de código morto sobre a IR, e uma VM interna executa o código de três endereços para validá-lo antes da geração do assembly.",
    },
    {
      title: "ObraSpec API",
      description:
        "API para a construtora JotaNunes que padroniza e gera os documentos de especificação de obra entregues a condôminos, com três níveis de permissão e herança de especificações entre empreendimentos. A empresa incorporou a solução à própria operação.",
      tech: ["Django REST", "Python", "PostgreSQL", "Docker", "Swagger", "Git"],
      github: "https://github.com/Squad15-JotaNunes/ObraSpecAPI",
    },
    {
      title: "TeodoroAPI",
      description:
        "API de gestão de estoque para o programa Farmácia Pet: controle de entrada, saída e doação de medicamentos e insumos, com monitoramento de prazos de validade. StockMovement é a fonte da verdade em padrão de event sourcing — a quantidade em estoque é sempre propriedade computada, nunca contador atualizado à mão.",
      tech: ["Django REST", "Python", "PostgreSQL"],
      github: "https://github.com/KaioVinicios/TeodoroAPI",
      detail: "Em uso pela Secretaria Municipal do Meio Ambiente de Aracaju.",
    },
    {
      title: "Aegis",
      description:
        "Biblioteca Python open source de criptografia de arquivos em repouso, feita para quem não é criptógrafo: envelope encryption com chave nova por arquivo, streaming com memória constante — 10 GB consomem o mesmo que 10 KB — e formato versionado e autodescritivo.",
      tech: ["Python", "AES-GCM", "HKDF", "cryptography", "pytest", "GitHub Actions"],
      github: "https://github.com/Voynan/aegis",
      detail:
        "Em especificação: o formato de arquivo está congelado e as decisões registradas em ADRs antes da primeira linha de implementação.",
    },
    {
      title: "Apoio Fiel",
      description:
        "API REST para uma ONG: gestão de doações, controle de animais de rua e processos de adoção, documentada em Swagger. Selecionado para o Demoday UNIT/Porto Digital.",
      tech: ["Node.js", "TypeScript", "Fastify", "Prisma", "Docker", "Swagger", "Git"],
      github: "https://github.com/Apoio-Fiel",
    },
    {
      title: "Portfolio Website",
      description:
        "Este site. Portfólio de página única em que todo o conteúdo — textos, projetos, experiência e links — vive em um único arquivo de configuração tipado, de modo que outra pessoa possa forkar o repositório e torná-lo seu sem tocar em código de componente.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion"],
      github: "https://github.com/KaioVinicios/PortfolioWebsite",
      detail: "É a página que você está lendo.",
    },
  ],

  experiences: [
    {
      role: "Desenvolvedor Full Stack",
      company: "Voynan",
      period: "08/2025 — Atualmente",
      description:
        "Sistemas sob demanda para clientes e produtos SaaS próprios, com responsabilidade técnica de ponta a ponta: levantamento de requisitos, arquitetura REST, modelagem de dados, implementação e deploy. Entre os clientes atendidos estão o escritório Amadeus e Santos Advogados Associados e o Instituto CriptoNordeste de Ciência e Tecnologia.",
      achievements: [
        "APIs REST em Django REST Framework",
        "Autenticação JWT e permissões por perfil",
        "Modelagem de dados em PostgreSQL",
        "Interfaces em React e TypeScript",
        "Docker, AWS e GitHub Actions",
        "Produtos SaaS em produção",
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Porto Digital",
      period: "07/2023 — 06/2025",
      description:
        "Programa de projetos em parceria com a Universidade Tiradentes: quatro ciclos de seis meses desenvolvendo software para empresas privadas e uma ONG — Atos Capital, JotaNunes, Apoio Fiel e Scapets Brasil — cada um com cliente, escopo e entrega próprios.",
      achievements: [
        "Dashboard React no lugar de relatórios em PDF",
        "API REST com JWT e permissões por perfil",
        "Notificações via WhatsApp e camada de IA",
        "Geração automática de documentos de obra",
        "2 de 4 projetos no Demoday UNIT/Porto Digital",
      ],
    },
    {
      role: "Desenvolvedor RPA",
      company: "Influir",
      period: "Estágio · 02/2024 — 11/2024",
      description:
        "Automação de processos operacionais do Banese Card, a partir de fluxos complexos documentados em BPMN. Analisei processos existentes, validei a aderência das automações ao fluxo real de negócio e identifiquei gargalos.",
      achievements: [
        "1.440× mais rápido: de ~10 dias para <10 minutos",
        "Automações em Python, C# e JavaScript",
        "Selenium, Playwright e Pandas",
        "Leitura e revisão de fluxos BPMN",
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
  ],

  certificationsRepoUrl: "https://drive.google.com/drive/folders/16LoR8Few6JyMRGGk_yrQxGPqp__5FqkG?hl=pt-br",

  skillCategories: [
    {
      title: "Linguagens",
      skills: ["Python", "TypeScript", "JavaScript", "C#", "SQL", "PHP"],
    },
    {
      title: "Back-end",
      skills: ["Django", "Django REST Framework", "APIs REST", "JWT", "OpenAPI / Swagger", "Node.js", "Fastify", "Prisma", "Django ORM", "Stripe"],
    },
    {
      title: "Front-end",
      skills: ["React", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion", "Bootstrap", "Vite"],
    },
    {
      title: "Dados e infraestrutura",
      skills: ["PostgreSQL", "Neon", "Docker", "AWS", "Cloudflare", "Google Cloud", "Railway", "Git", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Práticas e automação",
      skills: ["Testes automatizados", "Selenium", "Playwright", "Pandas", "RPA", "Sentry", "PostHog", "Scrum", "ADRs"],
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
      heading: "O que eu construo",
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
      credentialHint: "Ver credencial",
      repoLink: "Ver repositório completo",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Tecnologias que uso",
    },
    contact: {
      eyebrow: "Contato",
      heading: "Vamos conversar",
      pitch:
        "Busco uma posição efetiva em um time de engenharia estruturado — remoto em qualquer lugar, presencial ou híbrido em Aracaju. Também atendo projetos sob demanda. Se fizer sentido conversar, é só chamar.",
      emailButton: "Entre em contato",
      divider: "ou",
    },
    footer: {
      rights: "Todos direitos reservados.",
    },
  },
};
