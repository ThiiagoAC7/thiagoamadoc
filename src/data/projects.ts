import type { Lang } from "@/lib/preferences";

export type ProjectEntry = {
  id: string;
  title: Record<Lang, string>;
  year: Record<Lang, string>;
  featured?: boolean;
  ongoing?: boolean;
  highlights: Record<Lang, string[]>;
  technologies: string[];
  github?: string;
};

export const PROJECTS: ProjectEntry[] = [
  {
    id: "co-commenter-networks",
    title: {
      en: "Characterizing Co-Commenter Behavior in Large Scale YouTube Video Comment Sessions",
      pt: "Characterizing Co-Commenter Behavior in Large Scale YouTube Video Comment Sessions",
    },
    year: { en: "2025–", pt: "2025–" },
    featured: true,
    ongoing: true,
    highlights: {
      en: [
        "Analysis of approximately 21M comments across 3,550 videos from 10 leading U.S. creators in 2024, with co-commenter networks of up to 11.7B edges.",
        "Memory-efficient, block-wise generation of user pairs without materializing the full projection in memory at once.",
        "Backbone extraction and community detection with the Leiden algorithm, followed by characterization of community discourse using BERTopic and Sentence Transformers.",
      ],
      pt: [
        "Análise de cerca de 21 milhões de comentários em 3.550 vídeos de 10 grandes criadores dos EUA em 2024, com redes de co-comentários de até 11,7 bilhões de arestas.",
        "Construção em blocos de pares de usuários, sem materializar toda a projeção na memória de uma só vez.",
        "Extração de backbone e detecção de comunidades com o algoritmo Leiden, seguida da caracterização do discurso das comunidades com BERTopic e Sentence Transformers.",
      ],
    },
    technologies: ["Python", "NetworkX", "NLTK", "Pandas", "Matplotlib", "Scikit-Learn", "BERTopic"],
  },
  {
    id: "semantic-bertopic",
    title: {
      en: "Semantic-Driven BERTopic: Comparative Analysis of Embedding Techniques",
      pt: "Análise Comparativa de Embeddings para o Modelo Semantic-Driven BERTopic",
    },
    year: { en: "2024", pt: "2024" },
    featured: true,
    highlights: {
      en: [
        "Academic project implementing a semantic-driven topic modeling pipeline combining Sentence Transformers with UMAP dimensionality reduction and HDBSCAN clustering, integrated with the OCTIS evaluation framework. Applied a comparative methodology across embedding techniques (SimCSE, GTE-multilingual, MPNet) with a coherence-driven topic merging step to refine cluster outputs.",
      ],
      pt: [
        "Projeto acadêmico implementando um pipeline de modelagem de tópicos guiado por semântica que combina Sentence Transformers com redução de dimensionalidade UMAP e clusterização HDBSCAN, integrado ao framework de avaliação OCTIS. Aplicou metodologia comparativa entre técnicas de embeddings (SimCSE, GTE-multilingual, MPNet), com etapa de fusão de tópicos orientada por coerência para refinar os clusters.",
      ],
    },
    technologies: [
      "PyTorch",
      "Sentence Transformers",
      "SimCSE",
      "UMAP",
      "HDBSCAN",
      "BERTopic",
      "OCTIS",
      "scikit-optimize",
    ],
    github: "https://github.com/ThiiagoAC7/intro-dl/tree/main/final_project",
  },
  {
    id: "implicit-hate-speech",
    title: {
      en: "Context-Aware Implicit Hate Speech Detection",
      pt: "Context-Aware Implicit Hate Speech Detection",
    },
    year: { en: "2024", pt: "2024" },
    featured: true,
    highlights: {
      en: [
        "Translated implicit hate speech datasets (IHC, SBIC, DynaHate) from English to Portuguese through machine translation, with quality assessment via COMETKIWI and SBERT metrics. Adapted and benchmarked the SHAREDCON contrastive learning method, which clusters implicit speech based on shared semantics, for Portuguese-language detection.",
      ],
      pt: [
        "Tradução automática de conjuntos de dados de discurso de ódio implícito (IHC, SBIC, DynaHate) do inglês para o português, com avaliação de qualidade via métricas COMETKIWI e SBERT. Adaptação e avaliação do método SHAREDCON de aprendizado contrastivo, que clusteriza discurso implícito com base em semântica compartilhada, para detecção em português.",
      ],
    },
    technologies: [
      "Sentence Transformers",
      "SBERT",
      "COMETKIWI",
      "Contrastive Learning",
      "Machine Translation",
      "NLP",
    ],
    github: "https://github.com/ThiiagoAC7/ml-final-proj",
  },
  {
    id: "youtube-communities-bsc",
    title: {
      en: "Identifying and Analyzing Communities in YouTube Comment Sections",
      pt: "Identificação e Análise de Comunidades em Seções de Comentários do YouTube",
    },
    year: { en: "2024", pt: "2024" },
    featured: true,
    highlights: {
      en: [
        "Academic research project exploring interaction patterns and community dynamics in YouTube comment sections, focusing on content creators targeting younger audiences. Built an analysis system combining community detection with the Louvain algorithm, NLP techniques including topic modeling and sentiment analysis, and clustering approaches.",
      ],
      pt: [
        "Projeto de pesquisa acadêmica explorando padrões de interação e dinâmica de comunidades em seções de comentários do YouTube, com foco em criadores voltados ao público jovem. Desenvolvimento de um sistema de análise combinando detecção de comunidades com o algoritmo de Louvain, técnicas de PLN incluindo modelagem de tópicos e análise de sentimento, e abordagens de clusterização.",
      ],
    },
    technologies: ["Python", "NetworkX", "NLTK", "Pandas", "Matplotlib", "Scikit-Learn"],
    github: "https://github.com/ThiiagoAC7/crawling_youtube",
  },
  {
    id: "linux-dotfiles",
    title: {
      en: "Linux Configuration Files (.dotfiles)",
      pt: "Arquivos de Configuração Linux (.dotfiles)",
    },
    year: { en: "Ongoing", pt: "Contínuo" },
    featured: true,
    highlights: {
      en: ["Personal Linux desktop configuration files across i3-wm, polybar, zsh, wezterm, and rofi."],
      pt: ["Arquivos pessoais de configuração do ambiente desktop Linux (i3-wm, polybar, zsh, wezterm, rofi)."],
    },
    technologies: ["Linux", "i3-wm", "polybar", "zsh", "wezterm", "rofi"],
    github: "https://github.com/thiiagoac7/.config",
  },
  {
    id: "ml-ops-ingestion",
    title: {
      en: "ML Application: Data Ingestion, Quality Control, and Prediction",
      pt: "Aplicação de ML: Ingestão de Dados, Controle de Qualidade e Predição",
    },
    year: { en: "2023", pt: "2023" },
    highlights: {
      en: [
        "ML-powered application focused on the operational side, using Airflow for automated data ingestion, data quality control, and scheduled model predictions.",
      ],
      pt: [
        "Aplicação baseada em Machine Learning com foco operacional, utilizando Airflow para ingestão automatizada de dados, controle de qualidade e predições agendadas.",
      ],
    },
    technologies: ["Data Science", "FastAPI", "Streamlit", "PostgreSQL", "Airflow"],
    github: "https://github.com/radtklau/dsp23-project/tree/main",
  },
  {
    id: "nlp-sentiment",
    title: {
      en: "NLP Sentiment Analysis",
      pt: "Análise de Sentimentos com PLN",
    },
    year: { en: "2023", pt: "2023" },
    highlights: {
      en: [
        "Sentiment analysis using a Fully Connected Neural Network and a Recurrent Neural Network.",
      ],
      pt: [
        "Análise de sentimentos utilizando Rede Neural Totalmente Conectada e Rede Neural Recorrente.",
      ],
    },
    technologies: ["TensorFlow", "Keras", "NLTK", "Scikit-Learn"],
    github: "https://github.com/ThiiagoAC7/nlp-sentiment-analysis",
  },
  {
    id: "amazon-deforestation",
    title: {
      en: "Data Analysis of Amazon Deforestation Datasets",
      pt: "Análise de Dados de Desmatamento na Amazônia",
    },
    year: { en: "2023", pt: "2023" },
    highlights: {
      en: [
        "Data analysis and visualization of different Amazon deforestation and climate datasets.",
      ],
      pt: [
        "Análise e visualização de dados de diferentes bases sobre desmatamento e clima na Amazônia.",
      ],
    },
    technologies: ["Plotly", "Matplotlib", "Pandas", "Data Science"],
    github: "https://github.com/ThiiagoAC7/data-viz-amazon-deflorestation",
  },
  {
    id: "ai-raccoon-yolo",
    title: {
      en: "AI Image Generated Dataset",
      pt: "Dataset de Imagens Geradas por IA",
    },
    year: { en: "2023", pt: "2023" },
    highlights: {
      en: [
        "Creation of a Raccoon dataset using AI-generated images, then used to retrain and compare YOLO v8 models.",
      ],
      pt: [
        "Criação de um conjunto de dados de guaxinins usando imagens geradas por IA, utilizado para retreinar e comparar modelos YOLO v8.",
      ],
    },
    technologies: ["Stable Diffusion", "Image Generation", "Text Generation", "YOLO v8", "Computer Vision"],
    github: "https://github.com/ThiiagoAC7/comp-viz-study/tree/master/final-project",
  },
  {
    id: "computer-graphics",
    title: {
      en: "Computer Graphics Algorithms",
      pt: "Algoritmos de Computação Gráfica",
    },
    year: { en: "2022", pt: "2022" },
    highlights: {
      en: [
        "TKInter GUI and Python implementation of computer graphics algorithms: 2D transformations, DDA and Bresenham line drawing, Bresenham circle drawing, and Cohen-Sutherland / Liang-Barsky line clipping.",
      ],
      pt: [
        "Interface gráfica em TKInter e implementação em Python de algoritmos de computação gráfica: transformações 2D, rasterização de retas (DDA e Bresenham), circunferência de Bresenham e recorte de linhas (Cohen-Sutherland e Liang-Barsky).",
      ],
    },
    technologies: ["Python", "TKInter"],
    github: "https://github.com/ThiiagoAC7/tp1-comp-grafica",
  },
  {
    id: "dfa-minimization",
    title: {
      en: "Deterministic Finite Automaton Minimization Algorithm",
      pt: "Algoritmo de Minimização de Autômatos Finitos Determinísticos",
    },
    year: { en: "2022", pt: "2022" },
    highlights: {
      en: [
        "Implementation of the O(n^2) and O(n log n) DFA minimization algorithms in Python, following Blum (1996) and Hopcroft (1971).",
      ],
      pt: [
        "Implementação dos algoritmos de minimização de AFD O(n^2) e O(n log n) em Python, seguindo Blum (1996) e Hopcroft (1971).",
      ],
    },
    technologies: ["Python", "JFlap", "LaTeX"],
    github: "https://github.com/ThiiagoAC7/ftc-minimizing-afd",
  },
  {
    id: "neovim-config",
    title: {
      en: "NeoVim Config",
      pt: "Configuração NeoVim",
    },
    year: { en: "Ongoing", pt: "Contínuo" },
    highlights: {
      en: ["Personal modular Neovim configuration."],
      pt: ["Configuração pessoal modular do Neovim."],
    },
    technologies: ["Neovim", "Lua"],
    github: "https://github.com/thiiagoac7/nvim",
  },
  {
    id: "wezterm-session-manager",
    title: {
      en: "Wezterm Session Manager",
      pt: "Wezterm Session Manager",
    },
    year: { en: "Ongoing", pt: "Contínuo" },
    highlights: {
      en: [
        "Fork of the original wezterm-session-manager with improvements to workspace saving, loading from saved workspaces, workspace deletion, and other workflow enhancements.",
      ],
      pt: [
        "Fork do wezterm-session-manager original com melhorias para salvamento, carregamento e exclusão de workspaces, além de outros aprimoramentos de fluxo de trabalho.",
      ],
    },
    technologies: ["Lua", "Wezterm"],
    github: "https://github.com/ThiiagoAC7/wezterm-session-manager",
  },
];
