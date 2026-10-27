import { SCENARIOS, SLOTS, METRICS, ROOMS } from './scenarios.js';

export const START_SCORE = 50;
export const TOTAL_MOMENTS = SLOTS.length;
const byScenarioId = new Map(SCENARIOS.map(s => [s.id, s]));

export function scenarioForSlot(slotId, selections = {}) {
  const slot = SLOTS.find(s => s.id === slotId);
  const chosenId = selections[slotId];
  return slot && slot.scenarioIds.includes(chosenId) ? byScenarioId.get(chosenId) : undefined;
}

export function isValidOrder(value, n = 3) {
  return Array.isArray(value) && value.length === n && new Set(value).size === n && value.every(i => Number.isInteger(i) && i >= 0 && i < n);
}

export function shuffle(items, rng = Math.random) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** An entirely new set of moments on replay, avoiding last run's scenario at each location. */
export function createRun(previousSelections = {}, rng = Math.random) {
  const selections = {}, orders = {};
  for (const slot of SLOTS) {
    const other = slot.scenarioIds.filter(id => id !== previousSelections[slot.id]);
    const candidates = other.length ? other : slot.scenarioIds;
    const chosenId = candidates[Math.floor(rng() * candidates.length)];
    selections[slot.id] = chosenId;
    const choices = byScenarioId.get(chosenId)?.choices ?? [];
    orders[slot.id] = shuffle(choices.map((_, index) => index), rng);
  }
  return { selections, orders, answers: {}, currentRoom: 'classroom' };
}

/** Verify saved state, even if the scenario bank was edited. */
export function validateRun(saved) {
  if (!saved || typeof saved !== 'object') return false;
  if (!ROOMS.some(room => room.id === saved.currentRoom)) return false;
  if (!saved.selections || !saved.orders || !saved.answers || typeof saved.answers !== 'object') return false;
  return SLOTS.every(slot => {
    const scenario = scenarioForSlot(slot.id, saved.selections);
    const answer = saved.answers[slot.id];
    return scenario && isValidOrder(saved.orders[slot.id], scenario.choices.length)
      && (answer === undefined || (Number.isInteger(answer) && Boolean(scenario.choices[answer])));
  });
}

/** Answers are keyed by hotspot rather than scenario. Revisions never stack. */
export function calculateScores(answers = {}, selections = {}) {
  const totals = Object.fromEntries(METRICS.map(m => [m.key, START_SCORE]));
  for (const slot of SLOTS) {
    const scenario = scenarioForSlot(slot.id, selections);
    const choice = scenario?.choices[answers[slot.id]];
    if (!choice || !Number.isInteger(answers[slot.id])) continue;
    for (const metric of METRICS) totals[metric.key] += choice.impact[metric.key] ?? 0;
  }
  for (const metric of METRICS) totals[metric.key] = Math.max(0, Math.min(100, totals[metric.key]));
  return totals;
}

export function getProgress(answers = {}, selections = {}) {
  return SLOTS.filter(slot => {
    const scenario = scenarioForSlot(slot.id, selections);
    return scenario && Number.isInteger(answers[slot.id]) && Boolean(scenario.choices[answers[slot.id]]);
  }).length;
}

export function getRoomProgress(room, answers = {}, selections = {}) {
  const slots = SLOTS.filter(slot => slot.room === room);
  return { completed: slots.filter(slot => {
    const scenario = scenarioForSlot(slot.id, selections);
    return scenario && Number.isInteger(answers[slot.id]) && Boolean(scenario.choices[answers[slot.id]]);
  }).length, total: slots.length };
}
