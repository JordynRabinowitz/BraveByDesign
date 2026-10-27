import { METRICS, ROOMS, SLOTS, TRAVEL } from './scenarios.js';
import { calculateScores, createRun, getProgress, getRoomProgress, scenarioForSlot, TOTAL_MOMENTS, validateRun } from './game.js';

/** BraveByDesign v2 — three illustrated spaces and one alternate scenario per hotspot.
 * Scores are illustrative reflection prompts, not validated assessments.
 */
const STORAGE_KEY = 'bravebydesign-2d-multiroom-v2';
const $ = (id) => document.getElementById(id);
const scenarioDialog = $('scenarioDialog');
const finishDialog = $('finishDialog');
const SCENE_BASE = import.meta.env.BASE_URL;
let state = loadRun();
let activeSlotId = null;

function loadRun() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    if (validateRun(saved)) return saved;
  } catch { /* storage can be unavailable or contain older data */ }
  return createRun();
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* still playable */ }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function answered(slot) {
  const scenario = scenarioForSlot(slot.id, state.selections);
  return Number.isInteger(state.answers[slot.id]) && Boolean(scenario?.choices[state.answers[slot.id]]);
}
function renderRoom() {
  const room = ROOMS.find(r => r.id === state.currentRoom) ?? ROOMS[0];
  $('sceneTitle').textContent = room.title;
  $('sceneSubtitle').textContent = room.subtitle;
  $('scene').setAttribute('aria-label', `${room.name}: ${room.description}. Explore the interactive objects.`);
  $('sceneImage').src = `${SCENE_BASE}rooms/${room.art}`;
  $('sceneImage').alt = `Illustrated ${room.name.toLowerCase()} with ${room.description.toLowerCase()}`;
  $('roomTabs').innerHTML = ROOMS.map(r => {
    const progress = getRoomProgress(r.id, state.answers, state.selections);
    return `<button type="button" data-room="${r.id}" class="room-tab ${room.id === r.id ? 'active' : ''}" aria-current="${room.id === r.id ? 'location' : 'false'}"><span>${escapeHTML(r.name)}</span><small>${progress.completed}/${progress.total}</small></button>`;
  }).join('');
  const roomSlots = SLOTS.filter(s => s.room === room.id);
  $('hotspots').innerHTML = [
    ...roomSlots.map(s => hotspotMarkup(s, false)),
    ...TRAVEL.filter(t => t.room === room.id).map(t => hotspotMarkup(t, true)),
  ].join('');
  $('objectList').innerHTML = roomSlots.map(s => `<button type="button" class="object-chip ${answered(s) ? 'completed' : ''}" data-slot="${s.id}">${answered(s) ? '✓' : '✦'} ${escapeHTML(s.label)}</button>`).join('');
}
function hotspotMarkup(item, travel) {
  const isDone = !travel && answered(item);
  const attributes = travel ? `data-travel="${item.to}"` : `data-slot="${item.id}"`;
  const label = travel ? item.label : item.label;
  return `<button type="button" class="hotspot ${travel ? 'hotspot-travel' : ''} ${isDone ? 'completed' : ''}" style="left:${item.x}%;top:${item.y}%" ${attributes} aria-label="${travel ? 'Go to ' : 'Explore '}${escapeHTML(label)}"><span class="hotspot-pulse"><span class="hotspot-icon" aria-hidden="true">${travel ? '➜' : isDone ? '✓' : '✦'}</span></span><span class="hotspot-label">${escapeHTML(label)}</span></button>`;
}
function render() {
  const progress = getProgress(state.answers, state.selections);
  const values = calculateScores(state.answers, state.selections);
  renderRoom();
  $('sceneProgressText').textContent = `${progress} of ${TOTAL_MOMENTS} moments explored`;
  $('missionProgressLabel').textContent = `${progress} of ${TOTAL_MOMENTS} keys found`;
  $('missionProgressBar').style.width = `${progress / TOTAL_MOMENTS * 100}%`;
  $('keyList').innerHTML = SLOTS.map(slot => `<span class="key-item ${answered(slot) ? 'found' : ''}" title="${escapeHTML(slot.label)}">${answered(slot) ? '✓' : '◇'} <span>${escapeHTML(slot.key)}</span></span>`).join('');
  $('scores').innerHTML = METRICS.map(m => `<div class="score-item"><div class="score-top"><span><span class="score-icon ${m.color}">${m.icon}</span>${escapeHTML(m.label)}</span><strong>${values[m.key]}<small>/100</small></strong></div><div class="score-track"><span class="score-fill ${m.color}" style="width:${values[m.key]}%"></span></div></div>`).join('');
  $('exitButton').disabled = progress !== TOTAL_MOMENTS;
  $('exitButton').innerHTML = progress === TOTAL_MOMENTS ? '✦ Open the final door <span aria-hidden="true">→</span>' : '🔒 Unlock the final door <span aria-hidden="true">→</span>';
}
function travelTo(roomId) {
  if (!ROOMS.some(room => room.id === roomId)) return;
  state.currentRoom = roomId;
  save();
  render();
  $('sceneTitle').focus?.();
}
function showScenario(slotId) {
  const slot = SLOTS.find(s => s.id === slotId);
  if (!slot) return;
  activeSlotId = slotId;
  renderScenario();
  if (!scenarioDialog.open) scenarioDialog.showModal();
}
function renderScenario() {
  const slot = SLOTS.find(s => s.id === activeSlotId);
  const scenario = scenarioForSlot(activeSlotId, state.selections);
  if (!slot || !scenario) return;
  const answer = state.answers[slot.id];
  const chosen = Number.isInteger(answer) && scenario.choices[answer];
  $('dialogContent').innerHTML = `
    <div class="modal-top"><span class="mini-eyebrow">${escapeHTML(ROOMS.find(r => r.id === slot.room)?.name ?? '')} / ${escapeHTML(slot.label)}</span><button type="button" class="icon-close" data-action="close" aria-label="Close scenario">✕</button></div>
    <div class="scenario-badge">${chosen ? '✓ KEY COLLECTED' : '✦ A MOMENT TO RESPOND'}</div>
    <h2 id="dialogTitle">${escapeHTML(scenario.title)}</h2>
    <p class="scenario-situation">${escapeHTML(scenario.situation)}</p>
    <div class="scenario-question">${escapeHTML(scenario.question)}</div>
    <div class="choices">${state.orders[slot.id].map((originalIndex, shownIndex) => {
      const choice = scenario.choices[originalIndex];
      return `<button type="button" class="choice-button ${answer === originalIndex ? 'selected' : ''}" data-choice="${originalIndex}"><span class="choice-letter">${String.fromCharCode(65 + shownIndex)}</span><span>${escapeHTML(choice.text)}</span><span class="choice-arrow" aria-hidden="true">→</span></button>`;
    }).join('')}</div>
    ${chosen ? feedbackMarkup(scenario, answer) : '<p class="choice-hint">Choose how you might respond. You can revisit a decision and compare approaches.</p>'}
  `;
}
function feedbackMarkup(scenario, answerIndex) {
  const choice = scenario.choices[answerIndex];
  const strength = answerIndex === 0;
  const impacts = METRICS.filter(m => (choice.impact[m.key] ?? 0) !== 0).map(m => {
    const score = choice.impact[m.key];
    return `<span class="impact-pill ${score > 0 ? 'positive' : 'negative'}">${escapeHTML(m.label)} ${score > 0 ? '+' : ''}${score}</span>`;
  }).join('');
  return `<section class="feedback ${strength ? 'feedback-positive' : ''}" aria-live="polite"><div class="feedback-eyebrow">${strength ? '✦ A STRONG RESPONSE' : '✧ CONSIDER THE IMPACT'}</div><h3>${escapeHTML(choice.heading)}</h3><p>${escapeHTML(choice.feedback)}</p><div class="impact-pills">${impacts}</div><p class="feedback-takeaway"><strong>Takeaway:</strong> ${escapeHTML(choice.takeaway)}</p><div class="feedback-actions"><button class="primary-button" type="button" data-action="close">Continue exploring →</button><span>Try a different response above to compare.</span></div></section>`;
}
function chooseAnswer(originalIndex) {
  const scenario = scenarioForSlot(activeSlotId, state.selections);
  if (!scenario || !Number.isInteger(originalIndex) || !scenario.choices[originalIndex]) return;
  state.answers[activeSlotId] = originalIndex;
  save(); render(); renderScenario();
  const feedback = scenarioDialog.querySelector('.feedback');
  feedback?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function showFinish() {
  if (getProgress(state.answers, state.selections) !== TOTAL_MOMENTS) return;
  const totals = calculateScores(state.answers, state.selections);
  const avg = Math.round(Object.values(totals).reduce((x,y) => x+y,0) / METRICS.length);
  const takeaways = SLOTS.map(slot => {
    const scenario = scenarioForSlot(slot.id, state.selections);
    return `<p><span>✓</span>${escapeHTML(scenario.choices[state.answers[slot.id]].takeaway)}</p>`;
  }).join('');
  $('finishContent').innerHTML = `<div class="modal-top"><span class="mini-eyebrow">THE FINAL DOOR</span><button type="button" class="icon-close" data-action="finish-close" aria-label="Close completion screen">✕</button></div><div class="finish-stars" aria-hidden="true">✧ ✳ ✧</div><span class="scenario-badge">ALL SEVEN KEYS COLLECTED</span><h2 id="finishTitle">A braver school is<br /><em>built by choices.</em></h2><p class="finish-intro">You explored seven moments across three spaces. There is no single score that defines an inclusive school. What matters is listening, addressing harm, and following through.</p><div class="finish-summary"><div><strong>${avg}<span>/100</span></strong><small>illustrative climate average</small></div><div><strong>7<span>/7</span></strong><small>moments considered</small></div></div><div class="finish-list"><h3>Ideas to carry into your school</h3>${takeaways}</div><div class="reflection"><strong>Reflection prompt</strong><p>What is one decision you would adapt for your classroom? What can educators do before harm happens to build trust and belonging?</p></div><div class="finish-actions"><button class="primary-button" type="button" data-action="replay">↻ Play again with new situations</button><button class="ghost-button" type="button" data-action="finish-close">Return to the school</button></div>`;
  finishDialog.showModal();
}
function newRun({ confirm = true } = {}) {
  if (confirm && !window.confirm('Start a new playthrough? This will replace your choices and draw alternate situations.')) return;
  state = createRun(state.selections);
  activeSlotId = null;
  if (scenarioDialog.open) scenarioDialog.close();
  if (finishDialog.open) finishDialog.close();
  save(); render();
}

$('roomTabs').addEventListener('click', e => {
  const btn = e.target.closest('[data-room]');
  if (btn) travelTo(btn.dataset.room);
});
$('scene').addEventListener('click', e => {
  const travel = e.target.closest('[data-travel]');
  if (travel) { travelTo(travel.dataset.travel); return; }
  const slot = e.target.closest('[data-slot]');
  if (slot) showScenario(slot.dataset.slot);
});
$('objectList').addEventListener('click', e => {
  const btn = e.target.closest('[data-slot]');
  if (btn) showScenario(btn.dataset.slot);
});
$('dialogContent').addEventListener('click', e => {
  const answer = e.target.closest('[data-choice]');
  if (answer) { chooseAnswer(Number(answer.dataset.choice)); return; }
  if (e.target.closest('[data-action="close"]')) scenarioDialog.close();
});
$('finishContent').addEventListener('click', e => {
  if (e.target.closest('[data-action="replay"]')) { newRun({ confirm: false }); return; }
  if (e.target.closest('[data-action="finish-close"]')) finishDialog.close();
});
$('exitButton').addEventListener('click', showFinish);
$('resetButton').addEventListener('click', () => newRun());
render();
