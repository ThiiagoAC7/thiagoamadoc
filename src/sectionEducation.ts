function sectionEducation(element: HTMLDivElement) {

    const educations = [
        {
            name: "Pontifícia Universidade Católica de Minas Gerais",
            degree: "Computer Science",
            major: "Bachelor's Degree",
            start: "07/2019",
            end: "12/2024"
        },
        {
            name: "EPITA - School of Engineering and Computer Science",
            degree: "Data Science Analytics",
            major: "Bachelor's (Exchange Program)",
            start: "09/2023",
            end: "02/2024"
        }
    
    ]

    const content = educations.map(education => `
        <li>
            <div class="li-title">
                <strong>${education.name}</strong>
            </div>
            <div class="li-subtitle">
                ${education.degree}<br>
                ${education.major}<br>
                ${education.start} - ${education.end}
            </div>
        </li>
    `).join('');

    element.innerHTML = `
        <h2>Education</h2>
        <div class="content">
            <ul>
                ${content}
            </ul>
        </div>
    `
}

export { sectionEducation }
