import './style.css'
import { sectionHeader } from './sectionHeader.ts'
import { sectionSummary } from './sectionSummary.ts'
import { sectionExperience } from './sectionExperience.ts'
import { sectionEducation } from './sectionEducation.ts'
import { sectionProjects } from './sectionProjects.ts'
import { modeSwitch } from './modeSwitch.ts'


function _selectElement(className: string): HTMLDivElement {
    return document.querySelector<HTMLDivElement>(`#${className}`)!;
}

const app = _selectElement('app')

app.innerHTML = `
  <div class="container">
    <i id="mode-switch" class="fas fa-moon"></i>
    <div id="header" class="header"></div>
    <div id="section-summary" class="section"></div>
    <div id="section-experience" class="section"></div>
    <div id="section-education" class="section"></div>
    <div id="section-projects" class="section"></div>
    <div id="section-skills" class="section"></div>
    <div id="section-languages" class="section"></div>
  </div>
`

const header = _selectElement('header')
const summary = _selectElement('section-summary')
const experience = _selectElement('section-experience')
const education = _selectElement('section-education')
const projects = _selectElement('section-projects')

modeSwitch()
sectionHeader(header)
sectionSummary(summary)
sectionExperience(experience)
sectionEducation(education)
sectionProjects(projects)
