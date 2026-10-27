import test from 'node:test';
import assert from 'node:assert/strict';
import { METRICS, ROOMS, SCENARIOS, SLOTS } from '../src/scenarios.js';
import { START_SCORE, TOTAL_MOMENTS, calculateScores, createRun, getProgress, getRoomProgress, scenarioForSlot, validateRun } from '../src/game.js';

test('all 14 scenarios are unique and each slot has two different valid options', () => {
  assert.equal(SCENARIOS.length, 14);
  assert.equal(new Set(SCENARIOS.map(s => s.id)).size, SCENARIOS.length);
  assert.equal(SLOTS.length, 7);
  assert.equal(ROOMS.length, 3);
  for (const slot of SLOTS) {
    assert.equal(slot.scenarioIds.length, 2);
    for (const id of slot.scenarioIds) {
      assert.ok(SCENARIOS.find(s => s.id === id));
    }
  }
  for (const scene of SCENARIOS) {
    assert.equal(scene.choices.length, 3);
    for (const choice of scene.choices) {
      for (const metric of METRICS) assert.equal(typeof choice.impact[metric.key], 'number');
      assert.ok(choice.feedback && choice.takeaway);
    }
  }
});

test('new runs have all scene selections, shuffled choices and seven available keys', () => {
  const run = createRun({}, () => 0);
  assert.ok(validateRun(run));
  assert.equal(getProgress(run.answers, run.selections), 0);
  assert.equal(TOTAL_MOMENTS, 7);
  for (const slot of SLOTS) {
    assert.ok(scenarioForSlot(slot.id, run.selections));
    assert.deepEqual([...run.orders[slot.id]].sort(), [0, 1, 2]);
  }
  assert.deepEqual(calculateScores(run.answers, run.selections), { belonging: START_SCORE, voice: START_SCORE, safety: START_SCORE, access: START_SCORE });
});

test('replay draws a different scenario at every location', () => {
  const first = createRun({}, () => 0);
  const second = createRun(first.selections, () => 0);
  assert.ok(validateRun(second));
  for (const slot of SLOTS) assert.notEqual(first.selections[slot.id], second.selections[slot.id]);
});

test('collecting all keys unlocks reflection with correct room progress', () => {
  const run = createRun({}, () => 0);
  run.answers = Object.fromEntries(SLOTS.map(s => [s.id, 0]));
  assert.equal(getProgress(run.answers, run.selections), 7);
  assert.deepEqual(getRoomProgress('classroom', run.answers, run.selections), { completed: 3, total: 3 });
  assert.deepEqual(getRoomProgress('hallway', run.answers, run.selections), { completed: 2, total: 2 });
  assert.deepEqual(getRoomProgress('library', run.answers, run.selections), { completed: 2, total: 2 });
  assert.ok(validateRun(run));
});

test('revisiting decisions does not stack points', () => {
  const run = createRun({}, () => 0);
  const scene = scenarioForSlot('whiteboard', run.selections);
  assert.equal(calculateScores({ whiteboard: 0 }, run.selections).safety, 50 + scene.choices[0].impact.safety);
  assert.equal(calculateScores({ whiteboard: 1 }, run.selections).safety, 50 + scene.choices[1].impact.safety);
  assert.equal(calculateScores({ whiteboard: 0 }, run.selections).safety, 50 + scene.choices[0].impact.safety);
});

test('reloaded run keeps scenario choices, progress and the room', () => {
  const run = createRun({}, () => 0);
  run.answers.whiteboard = 2;
  run.currentRoom = 'hallway';
  const loaded = JSON.parse(JSON.stringify(run));
  assert.equal(validateRun(loaded), true);
  assert.equal(loaded.currentRoom, 'hallway');
  assert.equal(getProgress(loaded.answers, loaded.selections), 1);
});

test('invalid or corrupt saves are rejected', () => {
  const run = createRun({}, () => 0);
  assert.equal(validateRun({}), false);
  assert.equal(validateRun({ ...run, currentRoom: 'gym' }), false);
  assert.equal(validateRun({ ...run, orders: { ...run.orders, whiteboard: [0, 0, 0] } }), false);
  assert.equal(validateRun({ ...run, answers: { whiteboard: 99 } }), false);
});
