import "terminal.css/dist/terminal.min.css";
import "./style.css";
import { sectionHeader } from "./sectionHeader.js";
import { sectionSummary } from "./sectionSummary.js";
import { sectionExperience } from "./sectionExperience.js";
import { sectionEducation } from "./sectionEducation.js";
import { sectionProjects } from "./sectionProjects.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container">
    <div id="header"></div>
    <div id="section-summary" class="section"></div>
    <div id="section-projects" class="section"></div>
    <div id="section-education" class="section"></div>
    <div id="section-experience" class="section"></div>
  </div>
`;

sectionHeader(document.querySelector("#header"));
sectionSummary(document.querySelector("#section-summary"));
sectionEducation(document.querySelector("#section-education"));
sectionProjects(document.querySelector("#section-projects"));
sectionExperience(document.querySelector("#section-experience"));
