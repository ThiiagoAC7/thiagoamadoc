function sectionExperience(element) {
    const experiences = [
        {
            title: "Data Analyst",
            subtitle: "Deep ESG",
            date: "09/2024 - 11/2024",
            technologies: "Python, PySpark, Pandas, Google Cloud, Git, Github, Jupyter",
            description: "Contributed to the migration of databases from PostgreSQL to Parquet files. Developed Python scripts using Pandas and PySpark to integrate ERP data into existing data pipelines."
        },
        {
            title: "Backend Software Engineer",
            subtitle: "Internship / Trainee at Sisloc Softwares",
            date: "03/2021 - 11/2022",
            technologies: "Delphi, SQL Server",
            description: "Software Development using Agile Methodologies for Legacy Systems: Implemented new features and maintained/optimized existing code."
        },
    ]

    const content = experiences.map(exp => `
        <li>
            <strong>${exp.title}</strong> - ${exp.subtitle}
            <div class="exp-date">${exp.date}</div>
            <div class="exp-desc">${exp.description}</div>
            <div class="exp-tech"><em>Technologies: ${exp.technologies}</em></div>
        </li>
    `).join('')

    element.innerHTML = `
        <h2>Experience</h2>
        <ul>
            ${content}
        </ul>
    `
}

export { sectionExperience }
