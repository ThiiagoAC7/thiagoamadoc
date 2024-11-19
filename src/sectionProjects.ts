

function sectionProjects(element: HTMLDivElement) {


    const projects = [

        {
            "title" : "ML Application: Data Ingestion, Quality Control, and Prediction",
            "subtitle" : "A ML Powered application with focus on the operational side. Airflow for automated Data Ingestions, Data Cleaning and Predictions",
            "technologies" : "Data Science, FastAPI, Streamlit, PostgreSQL, Airflow",
            "github" : "https://github.com/radtklau/dsp23-project/tree/main"
        },

        {
            "title" : "NLP Sentiment Analysis",
            "subtitle" : "sentiment Analysis using a Fully Connected Neural Network and a Recurrent Neural Network",
            "technologies" : "TensorFlow, Keras, NLTK, Scikit-Learn",
            "github" : "https://github.com/ThiiagoAC7/nlp-sentiment-analysis"
        },
        {
            "title" : "Data Analysis of Amazon Deforestation Datasets",
            "subtitle" : "data Analysis of different Amazon Deforestation and Climate datasets",
            "technologies" : "Plotly, Matplotlib, Pandas, Data Science",
            "github" : "https://github.com/ThiiagoAC7/data-viz-amazon-deflorestation"
        },
        {
            "title" : "AI Image Generated Dataset",
            "subtitle" : "creation of a Raccoon Dataset using AI-generated images, then used to retrain and compare YOLO v8 models",
            "technologies" : "Stable Diffusion, Image Generation, Text Generation, YOLO v8, Computer Vision",
            "github" : "https://github.com/ThiiagoAC7/comp-viz-study/tree/master/final-project"
        },
        {
            "title" : "NeoVim Config",
            "subtitle" : "my current neovim config",
            "technologies" : "neovim, lua",
            "github" : "https://github.com/thiiagoac7/nvim"
        },
        {
            "title" : "Linux Configuration Files (.dotfiles)",
            "subtitle" : "my current .dotfiles ",
            "technologies" : "linux, i3-wm, polybar, zsh, wezterm, rofi",
            "github" : "https://github.com/thiiagoac7/.config"
        },

        {
            "title" : "Computer Graphics Algorithms",
            "subtitle" : "Simple TKInter GUI and Python implementation of computer graphics algorithms (2D transformations, DDA and Bresenham Line Drawing, Circle drawing Bresenham, Cohen-Sutherland and Liang-Barsky line Clipping)",
            "technologies" : "Python, TKInter",
            "github" : "https://github.com/ThiiagoAC7/tp1-comp-grafica"
        },

        {
            "title" : "Deterministic Finite Automaton Minimization Algorithm",
            "subtitle" : "Implementation of the O(n^2) and O(n log n) DFA minimization algorithms in Python, following Blum(1996) and Hopcroft(1971)",
            "technologies" : "Python, JFlap, LaTex ",
            "github" : "https://github.com/ThiiagoAC7/ftc-minimizing-afd"
        },

        {
            "title" : "Leetcoding",
            "subtitle" : "Leetcode exercises - learning new languages and practicing algorithms",
            "technologies": "C, C++, Rust",
            "github" : "https://github.com/thiiagoac7/leetcoding"
        },

    ]

    const content = projects.map(project => `
        <li>
            <div class="li-title">
                <strong>${project.title}</strong>
            </div>
            <div class="li-subtitle">
                ${project.subtitle}<br>
                <i>${project.technologies}</i><br>
                <a href="${project.github}">GitHub Repo</a>
            </div>
        </li>
    `).join('');

    element.innerHTML = `
        <h2>Projects</h2>
        <div class="content">
            <ul>
                ${content}
            </ul>
        </div>
    `
}

export { sectionProjects }
