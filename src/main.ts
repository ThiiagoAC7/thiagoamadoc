import './style.css'
import { sectionHeader } from './sectionHeader.ts'
import { sectionSummary } from './sectionSummary.ts'
import { sectionExperience } from './sectionExperience.ts'
import { sectionEducation } from './sectionEducation.ts'
import { sectionProjects } from './sectionProjects.ts'
import { sectionSkills } from './sectionSkills.ts'
import { modeSwitch } from './modeSwitch.ts'


function _selectElement(className: string): HTMLDivElement {
    return document.querySelector<HTMLDivElement>(`#${className}`)!;
}

const app = _selectElement('app')

document.body.classList.add('dark-mode'); // dark mode by default

app.innerHTML = `
  <div class="container">
    <i id="mode-switch" class="fas fa-sun"></i>
    <div id="header" class="header"></div>
    <div id="section-summary" class="section"></div>
    <div id="section-skills" class="section"></div>
    <div id="section-education" class="section"></div>
    <div id="section-experience" class="section"></div>
    <div id="section-projects" class="section"></div>
  </div>
`

const header = _selectElement('header')
const summary = _selectElement('section-summary')
const experience = _selectElement('section-experience')
const education = _selectElement('section-education')
const projects = _selectElement('section-projects')
const skills = _selectElement('section-skills')

modeSwitch()
sectionHeader(header)
sectionSummary(summary)
sectionExperience(experience)
sectionEducation(education)
sectionProjects(projects)
sectionSkills(skills)
