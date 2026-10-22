// Scenario content lives separately from the 3D environment so it is easy to
// revise for course accuracy and add research references without touching art.
// These fictional situations are illustrative; they are not school policy.
export const scenarios = {
  build: {
    step: '01 / BUILD',
    title: 'Who gets to participate?',
    story: 'During an eighth-grade math discussion, the same three students answer every question. Several others rarely contribute. You are planning tomorrow\'s lesson. How would you redesign participation?',
    prompt: 'Choose a starting approach:',
    options: [
      { label: 'Continue to rely on volunteers; participation should be a personal choice.', impact: 'Choice is valuable, but relying only on volunteers can maintain unequal airtime. Consider making more ways to participate available, not forcing a single way of speaking.' },
      { label: 'Give think time, partner rehearsal, and more than one way to share reasoning.', impact: 'This can lower barriers to entry and make different forms of thinking visible. Still, check who actually participates and offer appropriate choices and language supports.' },
      { label: 'Call on every student without warning so everyone speaks equally.', impact: 'Equal turns are not the same as equitable participation. Surprise questioning may make it harder for some students to contribute meaningfully. What scaffolds or choice would help?' },
    ],
    reflection: 'Who benefits from your choice? Who might still face barriers? How could you find out?',
    lens: 'Classroom participation is shaped by structures teachers create, not only by student motivation. Consider student agency, wait time, linguistic access, and culturally sustaining participation practices.',
    research: 'Add a specific assigned reading or EDUC 347 lecture here, with a genuine APA in-text citation. Do not invent sources.',
  },
  respond: {
    step: '02 / RESPOND',
    title: 'When hate appears',
    story: 'A swastika has been found on a school bathroom wall. Students have already seen it, and one student says it was “probably just a joke.” You are a teacher who learns about the incident. The graffiti is not visually reproduced in this prototype.',
    prompt: 'What is the best first response?',
    options: [
      { label: 'Ignore it in class; discussing it will only give the person attention.', impact: 'Silence can leave students uncertain whether adults recognize or oppose the harm. A response should acknowledge antisemitism without speculating about who is responsible or making students relive the incident.' },
      { label: 'Follow school reporting procedures promptly, support impacted students privately, and coordinate an age-appropriate response.', impact: 'This combines immediate documentation and reporting with care for students. School leaders should coordinate removal, investigation, communication, and any discipline. Do not ask Jewish students to explain antisemitism or speak for their community.' },
      { label: 'Ask Jewish students to tell their classmates why the symbol is hurtful.', impact: 'This places the burden of education on targeted students and can make them feel exposed. The teacher has a responsibility to provide accurate context and address harm without requiring personal disclosure.' },
    ],
    reflection: 'How can you name antisemitism clearly while protecting students’ privacy and ensuring that responding to hate is not a one-day event?',
    lens: 'A brave classroom welcomes respectful disagreement but does not treat identity-targeted hate as an equally valid debate position. Safety, reporting, trauma-informed support, and follow-through matter.',
    research: 'Connect this scene to your actual Dr. Howard guest-lecture notes and your school’s incident-response policies. Confirm procedures rather than assuming them.',
    contentNote: 'This fictional scenario describes antisemitic graffiti. You may skip it and still explore the other chapters.',
  },
  repair: {
    step: '03 / REPAIR',
    title: 'What happens after harm?',
    story: 'After a hurtful remark during a group task, the teacher interrupts the behavior. A student who heard the remark seems withdrawn the next day. The class has moved on, but the relationship and sense of belonging may not have recovered.',
    prompt: 'What does responsible follow-through look like?',
    options: [
      { label: 'Assume the issue is resolved because the behavior stopped.', impact: 'Stopping an incident matters, but harm can persist. Check what support is wanted and look for patterns in the classroom, rather than assuming one intervention solves the problem.' },
      { label: 'Check in privately, document appropriately, uphold accountability, and consider voluntary repair when safe.', impact: 'This avoids forcing forgiveness or public disclosure. Repair is not an alternative to required reporting or consequences. Ongoing support and classroom-level prevention remain essential.' },
      { label: 'Hold a class-wide circle and ask the harmed student to explain their experience.', impact: 'Publicly asking a targeted student to describe harm can create more distress. Restorative activities must be voluntary, appropriately facilitated, and never a condition for belonging or safety.' },
    ],
    reflection: 'What would make your response both accountable and trauma-informed, especially if the student prefers not to speak?',
    lens: 'Trauma-informed teaching emphasizes predictability, agency, care, and a commitment not to retraumatize students. Accountability and restoration should not be confused with forced reconciliation.',
    research: 'Connect this scene to your actual Dr. Hannegan-Martinez lecture notes and assigned classroom-climate readings.',
  },
};
