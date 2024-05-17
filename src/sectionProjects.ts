function sectionProjects(element: HTMLDivElement) {
    element.innerHTML = `
        <h2>Projects</h2>
        <ul>
            <li><strong>NLP Sentiment Analysis</strong><br>
                Sentiment Analysis using a Fully Connected Neural Network
                and a Recurrent Neural Network<br>Neural Networks, RNN, Tensorflow, Pandas, Matplotlib, Natural
                Language Processing<br>
                <a href="https://github.com/ThiiagoAC7/nlp-sentiment-analysis">GitHub Repo</a>
            </li>
            <li><strong>Data Analysis of Amazon Deforestation Datasets</strong><br>
                Data Analysis of different Amazon
                Deforestation and Climate datasets<br>Plotly, Matplotlib, Pandas, Data Science<br>
                <a href="https://github.com/ThiiagoAC7/data-viz-amazon-deflorestation">GitHub Repo</a>
            </li>
            <li><strong>AI Image Generated Dataset</strong><br>
                Creation of a Raccoon Dataset using AI-generated
                images, then used to retrain and compare YOLO v8 models<br>Stable Diffusion, Image Generation, Text
                Generation, YOLO v8, Computer Vision<br>
                <a href="https://github.com/ThiiagoAC7/comp-viz-study/tree/master/final-project">GitHub Repo</a>
            </li>
        </ul>
    `
}

export { sectionProjects }
