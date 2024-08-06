
function sectionSkills(element: HTMLDivElement) {
    const skills_icons = [
        {
            "class": "devicon-python-plain",
            "desc": "Python",
        },
        {
            "class": "devicon-c-plain",
            "desc": "C",
        },
        {
            "class": "devicon-java-plain",
            "desc": "Java",
        },
        {
            "class": "devicon-linux-plain",
            "desc": "Linux",
        },
        {
            "class": "devicon-bash-plain",
            "desc": "Bash",
        },
        {
            "class": "devicon-azuresqldatabase-plain",
            "desc": "SQL",
        },
        {
            "class": "devicon-git-plain",
            "desc": "Git",
        },
        {
            "class": "devicon-neovim-plain",
            "desc": "NeoVim",
        },
        {
            "class": "devicon-tensorflow-original",
            "desc": "TensorFlow",
        },
        {
            "class": "devicon-pytorch-plain",
            "desc": "PyTorch",
        },
        {
            "class": "devicon-matplotlib-plain",
            "desc": "Matplotlib",
        },
        {
            "class": "devicon-scikitlearn-plain",
            "desc": "Scikit-Learn",
        },
        {
            "class": "devicon-jupyter-plain",
            "desc": "Jupyter",
        },
        {
            "class": "devicon-fastapi-plain",
            "desc": "FastAPI",
        },
        {
            "class": "devicon-html5-plain",
            "desc": "HTML",
        },
        {
            "class": "devicon-css3-plain",
            "desc": "CSS",
        },
        {
            "class": "devicon-javascript-plain",
            "desc": "JavaScript",
        },
        {
            "class": "devicon-postgresql-plain",
            "desc": "PostgreSQL",
        },
    ];

    const icons = skills_icons.map(icon => `
        <div class="icon-item">
            <i class="${icon.class}" title="${icon.desc}"></i>
        </div>
    `).join('');

    element.innerHTML = `
        <div class="icon-section">
            <div class="icon-container">
                ${icons}
            </div>
        </div>
    `;
}

export { sectionSkills }
