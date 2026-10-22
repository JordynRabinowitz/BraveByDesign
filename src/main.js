import './style.css';
import { scenarios } from './scenarios.js';

const $ = (selector) => document.querySelector(selector);
const chapters = ['build', 'respond', 'repair'];
const completed = new Set();
const selections = new Map(); // Latest choice per chapter; changing an answer replaces its effect.
const metrics = ['belonging', 'voice', 'trust', 'access'];
const metricLabels = { belonging: 'Belonging', voice: 'Student voice', trust: 'Trust & safety', access: 'Equitable access' };
const baseline = 50;

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

function renderClimate() {
  const scores = Object.fromEntries(metrics.map((key) => [key, baseline]));
  for (const [chapter, index] of selections) {
    const deltas = scenarios[chapter].options[index].effects;
    metrics.forEach((key) => {
      scores[key] = Math.max(0, Math.min(100, scores[key] + deltas[key]));
    });
  }
  metrics.forEach((key) => {
    const meter = document.querySelector(`[data-metric="${key}"]`);
    meter.querySelector('output').textContent = String(scores[key]);
    meter.querySelector('.meter-fill').style.width = `${scores[key]}%`;
    meter.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(scores[key]));
  });
  const status = $('#climate-status');
  if (!selections.size) {
    status.textContent = 'No decisions explored yet. Start with BUILD to see how the classroom changes.';
  } else {
    status.textContent = `${selections.size} of 3 decisions explored. Revisit any chapter to try a different approach and compare the potential impact.`;
  }
}

function explainEffects(effects) {
  const summary = document.createElement('div');
  summary.className = 'effect-list';
  summary.setAttribute('aria-label', 'Illustrative shifts from this choice');
  const heading = document.createElement('strong');
  heading.textContent = 'Potential climate shifts · illustrative only';
  summary.append(heading);
  const pills = document.createElement('div');
  pills.className = 'effect-pills';
  metrics.filter((key) => effects[key] !== 0).forEach((key) => {
    const delta = effects[key];
    const pill = document.createElement('span');
    pill.className = `effect-pill ${delta > 0 ? 'up' : 'down'}`;
    pill.textContent = `${metricLabels[key]} ${delta > 0 ? '+' : ''}${delta}`;
    pills.append(pill);
  });
  if (!pills.children.length) pills.textContent = 'No modeled shift for this choice.';
  summary.append(pills);
  return summary;
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
  box.append(label, text, explainEffects(scenario.options[index].effects), reflectionLabel, reflection);
  box.hidden = false;
  completed.add(activeChapter);
  selections.set(activeChapter, index);
  renderClimate();
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
  selections.clear();
  renderClimate();
  updateNav();
  closeOverlays();
});
$('#scrim').addEventListener('click', closeOverlays);
$('#climate-reset').addEventListener('click', () => {
  completed.clear();
  selections.clear();
  renderClimate();
  updateNav();
});

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
renderClimate();
