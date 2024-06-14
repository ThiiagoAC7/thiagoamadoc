function sectionEducation(element: HTMLDivElement) {
    element.innerHTML = `
        <h2>Education</h2>
        <div class="content">
            <ul>
                <li>
                    <div class="li-title">
                        <strong>Pontifícia Universidade Católica de Minas Gerais</strong>
                    </div>
                    <div class="li-subtitle">
                        Computer Science<br>
                        Bachelor's Degree<br>
                        2019-07 - 2024-12
                    </div>
                </li>
                <li>
                    <div class="li-title">
                        <strong>EPITA - School of Engineering and Computer Science</strong>
                    </div>
                    <div class="li-subtitle">
                        Data Science Analytics<br>
                        Bachelor's (Exchange Program)<br>
                        2023-10 - 2024-02
                    </div>
                </li>
            </ul>
        </div>
    `
}

export { sectionEducation }
