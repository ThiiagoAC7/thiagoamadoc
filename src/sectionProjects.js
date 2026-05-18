function sectionProjects(element) {
  const projects = [
    {
      title: "Identifying and Analyzing Communities in YouTube Comment Sections",
      subtitle:
        "An academic research project exploring the interaction patterns and community dynamics in YouTube comment sections, focusing on content creators targeting younger audiences. Developed an analysis system combining community detection with the Louvain Algorithm, NLP techniques including Topic Modeling and Sentiment Analysis, and clustering approaches for pattern identification.",
      technologies: "Python, NetworkX, NLTK, Pandas, Matplotlib, Scikit-Learn",
      github: "https://github.com/ThiiagoAC7/crawling_youtube",
    },
    {
      title: "Semantic-Driven BERTopic: Comparative Analysis of Embedding Techniques",
      subtitle:
        "An academic project implementing a semantic-driven topic modeling pipeline combining Sentence Transformers with UMAP dimensionality reduction and HDBSCAN clustering, integrated with the OCTIS evaluation framework. Applied a comparative methodology across embedding techniques (SimCSE, GTE-multilingual, MPNet) with a coherence-driven topic merging step to refine cluster outputs.",
      technologies:
        "PyTorch, Sentence Transformers, SimCSE, UMAP, HDBSCAN, BERTopic, OCTIS, scikit-optimize",
      github: "https://github.com/ThiiagoAC7/intro-dl/tree/main/final_project",
    },
    {
      title: "Context-Aware Implicit Hate Speech Detection",
      subtitle:
        "A project translating implicit hate speech datasets (IHC, SBIC, DynaHate) from English to Portuguese through machine translation, with quality assessment via COMETKIWI and SBERT metrics. Adapted and benchmarked the SHAREDCON contrastive learning method, which clusters implicit speech based on shared semantics, for Portuguese-language detection.",
      technologies:
        "Sentence Transformers, SBERT, COMETKIWI, Contrastive Learning, Machine Translation, NLP",
      github: "https://github.com/ThiiagoAC7/ml-final-proj",
    },
    {
      title: "ML Application: Data Ingestion, Quality Control, and Prediction",
      subtitle:
        "A ML Powered application with focus on the operational side. Airflow for automated Data Ingestions, Data Cleaning and Predictions",
      technologies: "Data Science, FastAPI, Streamlit, PostgreSQL, Airflow",
      github: "https://github.com/radtklau/dsp23-project/tree/main",
    },
    {
      title: "NLP Sentiment Analysis",
      subtitle:
        "Sentiment Analysis using a Fully Connected Neural Network and a Recurrent Neural Network",
      technologies: "TensorFlow, Keras, NLTK, Scikit-Learn",
      github: "https://github.com/ThiiagoAC7/nlp-sentiment-analysis",
    },
    {
      title: "Data Analysis of Amazon Deforestation Datasets",
      subtitle: "Data Analysis of different Amazon Deforestation and Climate datasets",
      technologies: "Plotly, Matplotlib, Pandas, Data Science",
      github: "https://github.com/ThiiagoAC7/data-viz-amazon-deflorestation",
    },
    {
      title: "AI Image Generated Dataset",
      subtitle:
        "Creation of a Raccoon Dataset using AI-generated images, then used to retrain and compare YOLO v8 models",
      technologies: "Stable Diffusion, Image Generation, Text Generation, YOLO v8, Computer Vision",
      github: "https://github.com/ThiiagoAC7/comp-viz-study/tree/master/final-project",
    },
    {
      title: "Computer Graphics Algorithms",
      subtitle:
        "Simple TKInter GUI and Python implementation of computer graphics algorithms (2D transformations, DDA and Bresenham Line Drawing, Circle drawing Bresenham, Cohen-Sutherland and Liang-Barsky line Clipping)",
      technologies: "Python, TKInter",
      github: "https://github.com/ThiiagoAC7/tp1-comp-grafica",
    },
    {
      title: "Deterministic Finite Automaton Minimization Algorithm",
      subtitle:
        "Implementation of the O(n^2) and O(n log n) DFA minimization algorithms in Python, following Blum(1996) and Hopcroft(1971)",
      technologies: "Python, JFlap, LaTeX",
      github: "https://github.com/ThiiagoAC7/ftc-minimizing-afd",
    },
    {
      title: "NeoVim Config",
      subtitle: "My current neovim config",
      technologies: "Neovim, Lua",
      github: "https://github.com/thiiagoac7/nvim",
    },
    {
      title: "Wezterm Session Manager",
      subtitle:
        "Fork of the original wezterm-session-manager with improvements to workspace saving, loading from saved workspaces, workspace deletion, and other enhancements.",
      technologies: "Lua, Wezterm",
      github: "https://github.com/ThiiagoAC7/wezterm-session-manager",
    },
    {
      title: "Linux Configuration Files (.dotfiles)",
      subtitle: "My current .dotfiles",
      technologies: "Linux, i3-wm, polybar, zsh, wezterm, rofi",
      github: "https://github.com/thiiagoac7/.config",
    },

    // {
    //     title: "Leetcoding",
    //     subtitle: "Leetcode exercises - learning new languages and practicing algorithms",
    //     technologies: "C, C++, Rust",
    //     github: "https://github.com/thiiagoac7/leetcoding"
    // },
  ];

  const content = projects
    .map(
      (project) => `
        <li>
            <strong>${project.title}</strong>
            <div class="project-desc">${project.subtitle}</div>
            <div class="project-tech"><em>${project.technologies}</em></div>
            <div class="project-link"><a href="${project.github}">GitHub Repo</a></div>
        </li>
    `,
    )
    .join("");

  element.innerHTML = `
        <h2>Projects</h2>
        <ul>
            ${content}
        </ul>
    `;
}

export { sectionProjects };
