function sectionProjects(element: HTMLDivElement) {
    element.innerHTML = `
        <h2>Projects</h2>
        <div class="content">
            <ul>
                <li>
                    <div class="li-title">
                        <strong> NLP Sentiment Analysis</strong>
                    </div>
                    <div class="li-subtitle">
                        sentiment Analysis using a Fully Connected Neural Network
                        and a Recurrent Neural Network<br>
                        <i>TensorFlow, Keras, NLTK, Scikit-Learn</i><br>
                        <a href="https://github.com/ThiiagoAC7/nlp-sentiment-analysis">GitHub Repo</a>
                    </div>
                </li>
                <li>
                    <div class="li-title">
                        <strong>Data Analysis of Amazon Deforestation Datasets</strong>
                    </div>
                    <div class="li-subtitle">
                        data Analysis of different Amazon
                        Deforestation and Climate datasets<br>
                        <i>Plotly, Matplotlib, Pandas, Data Science</i><br>
                        <a href="https://github.com/ThiiagoAC7/data-viz-amazon-deflorestation">GitHub Repo</a>
                    </div>
                </li>
                <li>
                    <div class="li-title">
                        <strong>AI Image Generated Dataset</strong><br>
                    </div>
                    <div class="li-subtitle">
                        creation of a Raccoon Dataset using AI-generated
                        images, then used to retrain and compare YOLO v8 models<br>
                        <i>Stable Diffusion, Image Generation, Text Generation, YOLO v8, Computer Vision</i><br>
                        <a href="https://github.com/ThiiagoAC7/comp-viz-study/tree/master/final-project">GitHub Repo</a>
                    </div>
                </li>
                <li>
                    <div class="li-title">
                        <strong>NeoVim Config</strong>
                    </div>
                    <div class="li-subtitle">
                        my current neovim config (constantly updated)<br>
                        <i>neovim, lua</i><br>
                        <a href="https://github.com/thiiagoac7/nvim">github repo</a>
                    </div>
                </li>
                <li>
                    <div class="li-title">
                        <strong>Linux Configuration Files (.dotfiles)</strong>
                    </div>
                    <div class="li-subtitle">
                        my current .dotfiles (constantly updated)<br>
                        <i>linux, i3-wm, polybar, zsh, wezterm, rofi</i><br>
                        <a href="https://github.com/thiiagoac7/config">github repo</a>
                    </div>
                </li>
            </ul>
        </div>
    `
}

export { sectionProjects }
