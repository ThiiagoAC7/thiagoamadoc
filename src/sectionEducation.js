function sectionEducation(element) {
    const educations = [
        {
            name: "Pontifícia Universidade Católica de Minas Gerais",
            degree: "Computer Science",
            major: "Master's Degree",
            start: "03/2025",
            end: ""
        },
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
            <strong>${education.name}</strong>
            <div class="edu-detail">${education.degree} - ${education.major}</div>
            <div class="edu-date">${education.start}${education.end ? ' - ' + education.end : ''}</div>
        </li>
    `).join('')

    element.innerHTML = `
        <h2>Education</h2>
        <ul>
            ${content}
        </ul>
    `
}

export { sectionEducation }
