function sectionExperience(element: HTMLDivElement) {

    const experiences = [
        {
            "title": "Data Analyst",
            "subtitle": "Deep ESG",
            "date": "09/2024 - 11/2024",
            "technologies": "Python, PySpark, Pandas, Google Cloud, Git, Github, Jupyter",
            "description": `Contributed to the migration of databases from PostgreSQL to Parquet 
                            files.
                            Developed Python scripts using Pandas and PySpark to integrate ERP data 
                            into existing data pipelines.`
        },
        {
            "title" : "Backend Software Engineer",
            "subtitle" : "Internship / Trainee at Sisloc Softwares",
            "date" : "03/2021 - 11/2022",
            "technologies" : "Delphi, SQL Server",
            "description" : `Software Development using Agile Methodologies for a Legacy Systems: Implemented new 
                             features and maintained/optimized existing code.`
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
