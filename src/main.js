import 'aframe';
import './style.css';
import { scenarios } from './scenarios.js';

const $ = (selector) => document.querySelector(selector);
const chapters = ['build', 'respond', 'repair'];
const completed = new Set();
let activeChapter = null;
let activeChoice = null;
let opener = null;

const intro = $('#intro');
const panel = $('#scenario-panel');
const about = $('#about-panel');
const scrim = $('#scrim');

function updateScrim() {
  scrim.hidden = panel.hidden && about.hidden;
  document.body.classList.toggle('modal-open', !scrim.hidden);
}

function closeOverlays() {
  panel.hidden = true;
  about.hidden = true;
  activeChapter = null;
  updateScrim();
  if (opener instanceof HTMLElement) opener.focus();
}

function showChapter(id, trigger = null) {
  const scenario = scenarios[id];
  if (!scenario) return;
  opener = trigger || $('#begin-button');
  activeChapter = id;
  activeChoice = null;
  intro.hidden = true;
  about.hidden = true;
  panel.hidden = false;
  $('#scenario-category').textContent = scenario.step;
  $('#scenario-title').textContent = scenario.title;
  $('#scenario-story').textContent = scenario.story;
  $('#scenario-feedback').hidden = true;
  $('#scenario-feedback').replaceChildren();
  $('#scenario-research').replaceChildren();
  const optionsNode = $('#scenario-options');
  optionsNode.replaceChildren();

  const question = document.createElement('h3');
  question.className = 'scenario-question';
  question.textContent = scenario.prompt;
  optionsNode.append(question);

  scenario.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.textContent = `${index + 1}. ${option.label}`;
    button.addEventListener('click', () => pickChoice(index));
    optionsNode.append(button);
  });

  if (scenario.contentNote) {
    const note = document.createElement('p');
    note.className = 'content-note';
    note.textContent = scenario.contentNote;
    $('#scenario-research').append(note);
  }

  const details = document.createElement('details');
  details.className = 'research-details';
  const summary = document.createElement('summary');
  summary.textContent = 'Teaching philosophy & course connection';
  const lens = document.createElement('p');
  lens.textContent = scenario.lens;
  const research = document.createElement('p');
  research.className = 'citation-placeholder';
  research.textContent = scenario.research;
  details.append(summary, lens, research);
  $('#scenario-research').append(details);
  updateScrim();
  $('#close-panel').focus();
}

function pickChoice(index) {
  if (!activeChapter) return;
  activeChoice = index;
  const scenario = scenarios[activeChapter];
  const buttons = document.querySelectorAll('#scenario-options .option');
  buttons.forEach((button, i) => {
    button.classList.toggle('selected', i === index);
    button.setAttribute('aria-pressed', String(i === index));
  });

  const box = $('#scenario-feedback');
  box.replaceChildren();
  const label = document.createElement('span');
  label.className = 'eyebrow';
  label.textContent = 'CONSIDER THE IMPACT';
  const text = document.createElement('p');
  text.textContent = scenario.options[index].impact;
  const reflectionLabel = document.createElement('strong');
  reflectionLabel.textContent = 'Reflect';
  const reflection = document.createElement('p');
  reflection.textContent = scenario.reflection;
  box.append(label, text, reflectionLabel, reflection);
  box.hidden = false;
  completed.add(activeChapter);
  updateNav();
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateNav() {
  document.querySelectorAll('.chapter-button').forEach((button) => {
    const id = button.dataset.open;
    button.classList.toggle('completed', completed.has(id));
    button.setAttribute('aria-label', `${id} chapter${completed.has(id) ? ', explored' : ''}`);
  });
  $('#progress-indicator').textContent = `${completed.size} OF 3 EXPLORED`;
}

$('#begin-button').addEventListener('click', () => {
  intro.hidden = true;
  showChapter('build', $('#begin-button'));
});
$('#close-panel').addEventListener('click', closeOverlays);
$('#panel-done').addEventListener('click', closeOverlays);
$('#about-button').addEventListener('click', (event) => {
  opener = event.currentTarget;
  panel.hidden = true;
  intro.hidden = true;
  about.hidden = false;
  updateScrim();
  $('#close-about').focus();
});
$('#close-about').addEventListener('click', closeOverlays);
$('#reset-button').addEventListener('click', () => {
  completed.clear();
  updateNav();
  closeOverlays();
});
$('#scrim').addEventListener('click', closeOverlays);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && (!panel.hidden || !about.hidden)) closeOverlays();
});

document.querySelectorAll('[data-open]').forEach((button) => {
  button.addEventListener('click', () => showChapter(button.dataset.open, button));
});

// A-Frame scene elements are hydrated by the A-Frame library, but click handlers
// can be attached immediately to their declared DOM elements.
document.querySelectorAll('.hotspot').forEach((entity) => {
  entity.addEventListener('click', () => showChapter(entity.dataset.station));
});

// In case the optional status markup changes, keep it in one predictable place.
const progress = document.createElement('span');
progress.id = 'progress-indicator';
progress.className = 'progress-indicator';
progress.textContent = '0 OF 3 EXPLORED';
$('.world-label').append(progress);
updateNav();
