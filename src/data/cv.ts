import type { Lang } from "@/lib/preferences";

export type SectionNavItem = {
  num: string;
  id: string;
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  summary: string;
  stack: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  org: string;
  detail: string;
};

export type ToolkitItem = {
  group: string;
  items: string;
};

export type CvCopy = {
  degreeLine: string;
  locationLine: string;
  navAriaLabel: string;
  langAriaLabel: string;
  themeToLight: string;
  themeToDark: string;
  themeAriaLight: string;
  themeAriaDark: string;
  emailLabel: string;
  sections: SectionNavItem[];
  sectionTitles: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
  };
  bio: string;
  thesisLabel: string;
  thesisSummary: string;
  interestsLabel: string;
  interests: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  toolkit: ToolkitItem[];
  languagesLabel: string;
  languagesValue: string;
};

export const CV_DATA: Record<Lang, CvCopy> = {
  en: {
    degreeLine: "M.Sc. CS · PUC Minas",
    locationLine: "Belo Horizonte, BR",
    navAriaLabel: "Curriculum sections",
    langAriaLabel: "Language selection",
    themeToLight: "Light",
    themeToDark: "Dark",
    themeAriaLight: "Switch to light mode",
    themeAriaDark: "Switch to dark mode",
    emailLabel: "email ↗",
    sections: [
      { num: "01", id: "about", label: "About & Research" },
      { num: "02", id: "experience", label: "Experience" },
      { num: "03", id: "education", label: "Education" },
      { num: "04", id: "projects", label: "Projects" },
      { num: "05", id: "skills", label: "Toolkit" },
    ],
    sectionTitles: {
      about: "About & Research",
      experience: "Experience",
      education: "Education",
      projects: "Selected Projects",
      skills: "Toolkit & Environment",
    },
    bio: "Computer Science Master's student at Pontifícia Universidade Católica de Minas Gerais (PUC Minas), researching user behavior on social networks through the lens of Natural Language Processing, Graph Theory, and Machine Learning. Previously completed an academic exchange in Data Science Analytics at EPITA in Paris and worked in data engineering and backend systems.",
    thesisLabel: "Ongoing M.Sc. Thesis",
    thesisSummary:
      "Investigating large-scale co-commenter networks across YouTube video comment sessions — combining memory-bounded block-wise projection, statistical backboning, Leiden community detection, and semantic topic modeling without materializing dense user-pair graphs in RAM.",
    interestsLabel: "Interests",
    interests: [
      "Online Behavior",
      "Graph Theory",
      "Graph Neural Networks",
      "NLP & Discourse",
      "Machine Learning",
    ],
    experience: [
      {
        period: "09/2024 – 11/2024",
        role: "Data Analyst",
        org: "Deep ESG",
        summary:
          "Contributed to migrating databases from PostgreSQL to Parquet files; developed and maintained Python notebooks using Pandas and PySpark on Google Cloud Platform to integrate ERP data into existing data pipelines.",
        stack: "Python · PySpark · Pandas · PostgreSQL · Google Cloud Platform · Git",
      },
      {
        period: "03/2021 – 11/2022",
        role: "Backend Software Engineer",
        org: "Sisloc Softwares",
        summary:
          "Rewrote and optimized legacy SQL Server queries, reducing execution time; maintained and refactored legacy Delphi codebases, fixing critical bugs and implementing new features under agile methodologies.",
        stack: "SQL Server · Delphi · Agile Methodologies",
      },
    ],
    education: [
      {
        period: "03/2025 – now",
        degree: "M.Sc. in Computer Science",
        org: "PUC Minas",
        detail: "Pontifícia Universidade Católica de Minas Gerais — Social Networks, Graph Theory, NLP, Machine Learning.",
      },
      {
        period: "07/2019 – 12/2024",
        degree: "B.Sc. in Computer Science",
        org: "PUC Minas",
        detail: "Pontifícia Universidade Católica de Minas Gerais.",
      },
      {
        period: "09/2023 – 02/2024",
        degree: "Data Science Analytics (Exchange)",
        org: "EPITA · Paris",
        detail: "EPITA — School of Engineering and Computer Science (Paris).",
      },
    ],
    toolkit: [
      {
        group: "Languages",
        items: "Python, JavaScript / TypeScript, SQL, Java, C / C++, Lua",
      },
      {
        group: "ML & NLP",
        items: "PyTorch, TensorFlow, Keras, Scikit-Learn, Sentence Transformers, BERTopic, NLTK, OCTIS",
      },
      {
        group: "Graphs & Data",
        items: "NetworkX, PySpark, Pandas, UMAP, HDBSCAN, Plotly, Matplotlib",
      },
      {
        group: "Infra & DB",
        items: "PostgreSQL, SQL Server, Parquet, Google Cloud Platform, FastAPI, Streamlit, Airflow, Git",
      },
      {
        group: "Environment",
        items: "Linux, Neovim, Wezterm, i3-wm, polybar, zsh, rofi",
      },
    ],
    languagesLabel: "Languages",
    languagesValue: "Portuguese (native), English, Intermediate Spanish, Basic French",
  },
  pt: {
    degreeLine: "Mestrado CC · PUC Minas",
    locationLine: "Belo Horizonte, MG",
    navAriaLabel: "Seções do currículo",
    langAriaLabel: "Seleção de idioma",
    themeToLight: "Claro",
    themeToDark: "Escuro",
    themeAriaLight: "Mudar para modo claro",
    themeAriaDark: "Mudar para modo escuro",
    emailLabel: "e-mail ↗",
    sections: [
      { num: "01", id: "about", label: "Sobre & Pesquisa" },
      { num: "02", id: "experience", label: "Experiência" },
      { num: "03", id: "education", label: "Educação" },
      { num: "04", id: "projects", label: "Projetos" },
      { num: "05", id: "skills", label: "Ferramentas" },
    ],
    sectionTitles: {
      about: "Sobre & Pesquisa",
      experience: "Experiência",
      education: "Educação",
      projects: "Projetos Selecionados",
      skills: "Ferramentas & Ambiente",
    },
    bio: "Mestrando em Ciência da Computação na Pontifícia Universidade Católica de Minas Gerais (PUC Minas), pesquisando comportamento de usuários em redes sociais por meio de Processamento de Linguagem Natural, Teoria dos Grafos e Machine Learning. Realizou intercâmbio acadêmico em Data Science Analytics na EPITA em Paris e atuou com engenharia de dados e sistemas backend.",
    thesisLabel: "Dissertação de Mestrado em Andamento",
    thesisSummary:
      "Investigando redes de co-comentadores em larga escala em sessões de comentários do YouTube — combinando projeção em blocos com uso limitado de memória, extração de backbone, detecção de comunidades com Leiden e modelagem semântica de tópicos sem materializar grafos densos em memória.",
    interestsLabel: "Interesses",
    interests: [
      "Comportamento Online",
      "Teoria dos Grafos",
      "Graph Neural Networks",
      "PLN & Discurso",
      "Machine Learning",
    ],
    experience: [
      {
        period: "09/2024 – 11/2024",
        role: "Analista de Dados",
        org: "Deep ESG",
        summary:
          "Contribuiu para a migração de bancos de dados PostgreSQL para arquivos Parquet; desenvolveu e manteve notebooks Python com Pandas e PySpark no Google Cloud Platform para integrar dados de ERP aos pipelines existentes.",
        stack: "Python · PySpark · Pandas · PostgreSQL · Google Cloud Platform · Git",
      },
      {
        period: "03/2021 – 11/2022",
        role: "Engenheiro de Software Backend",
        org: "Sisloc Softwares",
        summary:
          "Reescreveu e otimizou consultas SQL Server legadas, reduzindo o tempo de execução; manteve e refatorou bases de código Delphi legadas, corrigindo bugs críticos e implementando novos recursos sob metodologias ágeis.",
        stack: "SQL Server · Delphi · Metodologias Ágeis",
      },
    ],
    education: [
      {
        period: "03/2025 – atual",
        degree: "Mestrado em Ciência da Computação",
        org: "PUC Minas",
        detail: "Pontifícia Universidade Católica de Minas Gerais — Redes Sociais, Teoria dos Grafos, PLN, Machine Learning.",
      },
      {
        period: "07/2019 – 12/2024",
        degree: "Bacharelado em Ciência da Computação",
        org: "PUC Minas",
        detail: "Pontifícia Universidade Católica de Minas Gerais.",
      },
      {
        period: "09/2023 – 02/2024",
        degree: "Data Science Analytics (Intercâmbio)",
        org: "EPITA · Paris",
        detail: "EPITA — School of Engineering and Computer Science (Paris).",
      },
    ],
    toolkit: [
      {
        group: "Linguagens",
        items: "Python, JavaScript / TypeScript, SQL, Java, C / C++, Lua",
      },
      {
        group: "ML & PLN",
        items: "PyTorch, TensorFlow, Keras, Scikit-Learn, Sentence Transformers, BERTopic, NLTK, OCTIS",
      },
      {
        group: "Grafos & Dados",
        items: "NetworkX, PySpark, Pandas, UMAP, HDBSCAN, Plotly, Matplotlib",
      },
      {
        group: "Infra & BD",
        items: "PostgreSQL, SQL Server, Parquet, Google Cloud Platform, FastAPI, Streamlit, Airflow, Git",
      },
      {
        group: "Ambiente",
        items: "Linux, Neovim, Wezterm, i3-wm, polybar, zsh, rofi",
      },
    ],
    languagesLabel: "Idiomas",
    languagesValue: "Português (nativo), Inglês, Espanhol intermediário, Francês básico",
  },
};
