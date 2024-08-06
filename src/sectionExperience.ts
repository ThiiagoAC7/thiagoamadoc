function sectionExperience(element: HTMLDivElement) {

    const experiences = [
        {
            "title" : "Backend Software Engineer",
            "subtitle" : "Internship / Trainee at Sisloc Softwares",
            "date" : "03/2021 - 11/2022",
            "technologies" : "Delphi, SQL Server",
            "description" : "Software Development using Agile Methodologies for a Legacy Systems: Implementing new features and maintaining/optimizing existing code."
        },
    ]

    const content = experiences.map(exp => `
        <li>
            <div class="li-title">
                <strong>${exp.title}</strong>
            </div>
            <div class="li-subtitle">
                ${exp.subtitle}<br>
                ${exp.date}<br>
                ${exp.description}<br>
                <i>Technologies: ${exp.technologies}</i>
            </div>
        </li>
    `).join('');

    element.innerHTML = `
        <h2>Experience</h2>
        <div class="content">
            <ul>
                ${content}
            </ul>
        </div>
    `;
}

export { sectionExperience }
