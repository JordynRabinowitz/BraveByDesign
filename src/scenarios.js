/**
 * A bank of fictional school moments. One of two is drawn for each hotspot per playthrough.
 * Every value is an illustrative reflection prompt—not a validated measurement.
 */

export const METRICS = [
  { key: 'belonging', label: 'Belonging', icon: '♥', color: 'rose' },
  { key: 'voice', label: 'Student voice', icon: '✳', color: 'lilac' },
  { key: 'safety', label: 'Trust & safety', icon: '✦', color: 'teal' },
  { key: 'access', label: 'Equitable access', icon: '◆', color: 'gold' },
];

export const SCENARIOS = [
  {
    id: 'joke',
    object: 'The whiteboard',
    key: 'SPEAK UP',
    number: '01',
    title: '“It was just a joke.”',
    situation: 'During group work, a student makes an antisemitic joke. A few classmates laugh. Another student goes quiet and looks uncomfortable.',
    question: 'What do you do in the moment?',
    choices: [
      {
        text: 'Pause the activity, name the comment as harmful, restate expectations, and check in privately afterward.',
        impact: { belonging: 13, voice: 6, safety: 15, access: 2 },
        heading: 'Address harm without spotlighting a student.',
        feedback: 'Interrupting the behavior sets a clear boundary. A private check-in offers support without requiring a targeted student to teach the class about antisemitism. Follow your school’s reporting expectations when applicable.',
        takeaway: 'Interrupt harmful language, reinforce expectations, and support students privately.',
      },
      {
        text: 'Keep the lesson moving. You can talk to the student who made the joke later.',
        impact: { belonging: -9, voice: -5, safety: -11, access: 0 },
        heading: 'Private follow-up is important—but so is the moment.',
        feedback: 'Addressing the incident later may help, but silence during the joke can signal that the language is tolerated. A concise, calm intervention can establish a boundary without derailing the lesson.',
        takeaway: 'Follow-up matters, but do not leave public harm unaddressed.',
      },
      {
        text: 'Ask the uncomfortable student to explain to everyone why the joke was offensive.',
        impact: { belonging: -11, voice: -12, safety: -9, access: -3 },
        heading: 'Do not put the burden on the targeted student.',
        feedback: 'This may put a student on the spot and make participation feel unsafe. The teacher can name the problem and guide the response without asking anyone to disclose their identity or experience.',
        takeaway: 'Never require targeted students to justify why discrimination is harmful.',
      },
    ],
  },
  {
    id: 'curriculum',
    object: 'The bulletin board',
    key: 'INVITE',
    number: '02',
    title: 'Who sees themselves here?',
    situation: 'A student notices that your classroom examples and displays repeatedly center one holiday tradition. They quietly ask if other backgrounds will be included.',
    question: 'How could you respond?',
    choices: [
      {
        text: 'Thank them, review your materials, and invite optional input while incorporating more varied examples.',
        impact: { belonging: 12, voice: 12, safety: 4, access: 14 },
        heading: 'Make space without making a student represent a group.',
        feedback: 'You can broaden representation while giving students a choice about what, if anything, they share. Providing anonymous feedback options may help students speak up more comfortably.',
        takeaway: 'Build representation into materials and give students an optional voice.',
      },
      {
        text: 'Explain that the examples were easy to find and the lesson is not about culture.',
        impact: { belonging: -8, voice: -10, safety: -2, access: -8 },
        heading: 'The content may be neutral, but the experience is not.',
        feedback: 'Even small choices in examples can signal who belongs. Acknowledging the concern and making a practical change can matter more than defending the original decision.',
        takeaway: 'Check whose experiences your materials center, even in math class.',
      },
      {
        text: 'Ask the student to make an entire new display about their own culture.',
        impact: { belonging: -2, voice: -5, safety: -3, access: -7 },
        heading: 'Inclusion should not become extra unpaid work.',
        feedback: 'The student may enjoy contributing, but they should not have to fix the classroom’s representation or speak for a community. Offer an optional invitation, not an assignment or expectation.',
        takeaway: 'Teachers own the responsibility for inclusive curriculum design.',
      },
    ],
  },
  {
    id: 'graffiti',
    object: 'The hallway door',
    key: 'PROTECT',
    number: '03',
    title: 'A symbol in the hallway',
    situation: 'A student tells you that someone drew a swastika in the school bathroom. They say it makes them feel unsafe at school.',
    question: 'What should happen next?',
    choices: [
      {
        text: 'Listen, thank the student, report and document through school procedures, seek timely removal, and arrange support.',
        impact: { belonging: 13, voice: 8, safety: 18, access: 4 },
        heading: 'Treat the report seriously and act promptly.',
        feedback: 'Acknowledge the student’s concern, protect their privacy, and follow your school’s incident-reporting and safety procedures. Do not promise confidentiality you cannot guarantee. A broader educational response may be appropriate with school leadership.',
        takeaway: 'Support the student, document and report, and follow safety procedures.',
      },
      {
        text: 'Ask the student not to worry about it and quietly erase it yourself.',
        impact: { belonging: -11, voice: -8, safety: -14, access: 0 },
        heading: 'Removing a symbol alone is not enough.',
        feedback: 'The student has raised a safety concern. Without documenting and reporting the incident according to school procedures, the underlying harm may go unaddressed.',
        takeaway: 'Do not dismiss hate incidents or bypass school reporting procedures.',
      },
      {
        text: 'Immediately announce the incident to the class and name the student who reported it.',
        impact: { belonging: -12, voice: -13, safety: -15, access: -4 },
        heading: 'Respond without exposing the reporting student.',
        feedback: 'Publicly identifying a student can increase risk and discourage future reporting. Protect privacy, coordinate with school staff, and choose any classroom discussion carefully.',
        takeaway: 'Protect the privacy and dignity of students who report harm.',
      },
    ],
  },
  {
    id: 'groupwork',
    object: 'The student desks',
    key: 'INCLUDE',
    number: '04',
    title: 'A voice missing from the group',
    situation: 'During a collaborative math task, a multilingual learner has an idea but rarely gets a turn. Two group members are doing most of the talking and writing.',
    question: 'How do you change the group dynamic?',
    choices: [
      {
        text: 'Give groups rotating roles, sentence stems, and ways to contribute by speaking, writing, or showing a model.',
        impact: { belonging: 9, voice: 17, safety: 5, access: 15 },
        heading: 'Structure participation so everyone can contribute.',
        feedback: 'Roles and multiple ways to demonstrate thinking reduce barriers without lowering the math demand. Check in with the group and the student rather than assuming silence means a lack of understanding.',
        takeaway: 'Design group roles and flexible ways for students to show thinking.',
      },
      {
        text: 'Leave the group alone because the assignment is getting finished.',
        impact: { belonging: -6, voice: -13, safety: -3, access: -10 },
        heading: 'Finished work does not mean shared learning.',
        feedback: 'A group can produce correct work while leaving classmates out of the reasoning. Observe who gets to contribute, then adjust routines to distribute participation.',
        takeaway: 'Measure collaboration by participation and thinking, not only completion.',
      },
      {
        text: 'Require the student to present the entire answer aloud immediately.',
        impact: { belonging: -5, voice: -7, safety: -9, access: -8 },
        heading: 'Visibility is not the same as access.',
        feedback: 'Unplanned public pressure can reduce confidence. Offer preparation time, language supports, and choices for how students share their understanding.',
        takeaway: 'Offer supported, meaningful participation rather than surprise pressure.',
      },
    ],
  },
  {
    id: 'names', title: 'A name that matters',
    situation: 'A teacher repeatedly shortens a student’s name without asking. The student has corrected them twice and now stops responding during attendance.',
    question: 'What is a constructive next step?',
    choices: [
      { text: 'Correct the name, apologize briefly, practice it, and ask privately how the student would like to be addressed.', impact: { belonging: 12, voice: 10, safety: 6, access: 3 }, heading: 'Names are part of belonging.', feedback: 'A direct correction makes respect visible without asking the student to comfort the adult. Continue practicing and model the correct name consistently.', takeaway: 'Use students’ chosen names correctly and repair mistakes without making them perform emotional labor.' },
      { text: 'Keep using the shorter version since it is easier for everyone to say.', impact: { belonging: -12, voice: -8, safety: -7, access: -2 }, heading: 'Convenience should not determine someone’s name.', feedback: 'Repeating an unwanted nickname after correction communicates that the student’s identity is less important than convenience.', takeaway: 'Do not treat names as optional when students have already corrected you.' },
      { text: 'Pause class and ask the student to explain the cultural origins of their name.', impact: { belonging: -5, voice: -7, safety: -6, access: -1 }, heading: 'Curiosity does not require public disclosure.', feedback: 'A student should not need to give a public explanation to receive basic respect. Ask privately if clarification is needed.', takeaway: 'Avoid spotlighting a student to justify a basic expectation of respect.' },
    ],
  },
  {
    id: 'holidays', title: 'An invitation that excludes',
    situation: 'Your end-of-unit celebration includes only activities tied to a single religious holiday. A student asks whether they can participate without taking part in the holiday theme.',
    question: 'How could you make the event more inclusive?',
    choices: [
      { text: 'Offer secular choices and make participation optional, then plan future activities that do not assume shared beliefs.', impact: { belonging: 11, voice: 9, safety: 6, access: 13 }, heading: 'Choice should be real and dignified.', feedback: 'Students can participate in the community without being required to join a religious observance. Design options without treating anyone as an exception.', takeaway: 'Build classroom celebrations that do not assume everyone shares a tradition.' },
      { text: 'Explain that most students enjoy the holiday, so everyone can join in for the sake of fun.', impact: { belonging: -11, voice: -8, safety: -5, access: -9 }, heading: 'Majority preference does not settle inclusion.', feedback: 'Pressure to join can alienate students who do not share the observance, even when the teacher intends a positive experience.', takeaway: 'A celebration can be optional and inclusive without requiring conformity.' },
      { text: 'Excuse the student from class without offering an alternative activity.', impact: { belonging: -7, voice: -5, safety: -3, access: -8 }, heading: 'Exemption is not the same as belonging.', feedback: 'Offering nothing but isolation may solve the immediate requirement without improving access to the classroom community.', takeaway: 'Offer meaningful alternatives rather than isolating students who opt out.' },
    ],
  },
  {
    id: 'mistake', title: 'When an answer gets laughed at',
    situation: 'During a math discussion, a student shares an incorrect strategy. Several classmates laugh and the student says they will not share ideas again.',
    question: 'How do you preserve participation and learning?',
    choices: [
      { text: 'Stop the laughter, name the norm about respecting ideas, and use the strategy to discuss what works and what could change.', impact: { belonging: 10, voice: 15, safety: 10, access: 7 }, heading: 'Mistakes can be a resource for thinking.', feedback: 'Protect the student’s dignity while showing that reasoning matters more than immediate correctness. You can check in afterward and offer another way to participate.', takeaway: 'Normalize mistakes without normalizing ridicule.' },
      { text: 'Move on quickly to the correct answer so the student is not embarrassed any further.', impact: { belonging: -4, voice: -8, safety: -6, access: -6 }, heading: 'Moving on may leave the norm unchallenged.', feedback: 'A quick transition may feel protective, but classmates have not heard that laughing at peers is unacceptable.', takeaway: 'Address ridicule explicitly even when the lesson needs to continue.' },
      { text: 'Ask the student to try the problem again immediately at the board in front of everyone.', impact: { belonging: -7, voice: -10, safety: -9, access: -4 }, heading: 'Public pressure is not always a repair.', feedback: 'Demanding another public attempt right away can intensify embarrassment. Offer support and choice before inviting more sharing.', takeaway: 'Return agency to students after a difficult public moment.' },
    ],
  },
  {
    id: 'slur', title: 'A message on the wall',
    situation: 'A student points out an anti-immigrant slur written on a restroom wall. They ask whether the school is going to do anything about it.',
    question: 'What should your immediate response prioritize?',
    choices: [
      { text: 'Acknowledge the harm, follow incident-reporting and documentation procedures, seek prompt removal, and offer support.', impact: { belonging: 12, voice: 7, safety: 16, access: 5 }, heading: 'Take the report seriously.', feedback: 'Treat identity-based messages as safety and belonging concerns. Coordinate with school leadership, maintain privacy, and follow local procedures.', takeaway: 'Respond to hate incidents with support, reporting, and timely action.' },
      { text: 'Tell the student to ignore it because the writer probably wanted attention.', impact: { belonging: -12, voice: -11, safety: -15, access: -3 }, heading: 'Intent does not erase harm.', feedback: 'Minimizing the incident can discourage reporting and leave a student feeling unprotected.', takeaway: 'Do not minimize identity-based harassment based on speculation about intent.' },
      { text: 'Ask the student to post a photograph to the class group chat to identify who wrote it.', impact: { belonging: -7, voice: -6, safety: -12, access: -5 }, heading: 'Do not amplify the message.', feedback: 'Sharing hateful content broadly may expose more students and can compromise school response procedures.', takeaway: 'Document responsibly through school procedures, not public sharing.' },
    ],
  },
  {
    id: 'rumor', title: 'A harmful rumor by the lockers',
    situation: 'You overhear students repeating a stereotype about Jewish families while others listen silently. It is passing from student to student in the hallway.',
    question: 'What response is most useful?',
    choices: [
      { text: 'Interrupt the stereotype, state that it is inaccurate and harmful, redirect students, and follow up or report as appropriate.', impact: { belonging: 10, voice: 5, safety: 14, access: 4 }, heading: 'Interrupt and clarify.', feedback: 'A concise, calm response signals that stereotypes are not acceptable. Later follow-up can address misinformation and repeated behavior.', takeaway: 'Challenge stereotypes without relying on affected students to educate peers.' },
      { text: 'Avoid responding because you are not their classroom teacher.', impact: { belonging: -8, voice: -6, safety: -10, access: 0 }, heading: 'Hallways are school spaces, too.', feedback: 'Students learn from adult responses throughout the school, not only inside a classroom.', takeaway: 'Belonging is everyone’s responsibility across school spaces.' },
      { text: 'Ask a Jewish student nearby to explain why the stereotype is wrong.', impact: { belonging: -10, voice: -12, safety: -9, access: -3 }, heading: 'Do not assign a student the role of spokesperson.', feedback: 'This can expose a student’s identity or put unwanted pressure on them. The educator should address the stereotype.', takeaway: 'Correct misinformation without putting targeted students on the spot.' },
    ],
  },
  {
    id: 'bystander', title: '“Everyone was laughing.”',
    situation: 'At the lockers, students tease a classmate about the way they speak English. Some students participate; several others watch.',
    question: 'How might you interrupt the situation?',
    choices: [
      { text: 'Stop the teasing, check the student’s needs privately, and follow up with those involved while teaching respectful bystander choices.', impact: { belonging: 12, voice: 9, safety: 12, access: 8 }, heading: 'Protect now, teach for later.', feedback: 'An immediate boundary addresses the harm. Follow-up can help students recognize options for intervening safely rather than joining in.', takeaway: 'Support the targeted student and build safer bystander routines.' },
      { text: 'Suggest that the student learn to take a joke to fit in.', impact: { belonging: -12, voice: -12, safety: -11, access: -7 }, heading: 'Belonging cannot depend on tolerating ridicule.', feedback: 'Telling a targeted student to accept teasing can normalize exclusion and discourage help-seeking.', takeaway: 'Never make students responsible for tolerating harassment.' },
      { text: 'Ask everyone involved to apologize on the spot, without checking what happened.', impact: { belonging: -4, voice: -5, safety: -6, access: -2 }, heading: 'Forced apologies alone are not enough.', feedback: 'A rushed apology may not address the behavior or what the student needs. Follow up and use your school’s procedures.', takeaway: 'Pair accountability with understanding and meaningful follow-up.' },
    ],
  },
  {
    id: 'books', title: 'Who gets to be the main character?',
    situation: 'A student notices that the books on a featured library shelf rarely show families or identities like theirs and asks whether other stories are available.',
    question: 'What could you do with this feedback?',
    choices: [
      { text: 'Listen, help locate additional books, and work with library staff to review whose perspectives are represented.', impact: { belonging: 12, voice: 10, safety: 4, access: 12 }, heading: 'Representation affects access.', feedback: 'Treat the comment as useful feedback and broaden choices without requiring the student to explain or represent an entire identity group.', takeaway: 'Regularly review what stories and voices students can encounter.' },
      { text: 'Explain that the current display is already popular and does not need to change.', impact: { belonging: -8, voice: -11, safety: -2, access: -7 }, heading: 'Popularity is not the only measure of access.', feedback: 'A successful display can still miss important perspectives. The request is an opportunity to broaden student choice.', takeaway: 'Respond to requests for representation with curiosity rather than defensiveness.' },
      { text: 'Tell the student to bring in books from home if they want different stories.', impact: { belonging: -5, voice: -5, safety: -2, access: -10 }, heading: 'Access should not depend on home resources.', feedback: 'Not all students have spare books or the means to purchase them. School collections should be a shared responsibility.', takeaway: 'Do not make students supply the resources needed to feel represented.' },
    ],
  },
  {
    id: 'source', title: 'An unreliable resource',
    situation: 'During a library research project, a student finds a website repeating a harmful stereotype about a community and asks if they may use it as a source.',
    question: 'What supports both learning and safety?',
    choices: [
      { text: 'Explain the concern, model checking authorship and evidence, and help find credible sources without repeating the stereotype unnecessarily.', impact: { belonging: 7, voice: 9, safety: 10, access: 13 }, heading: 'Teach source evaluation explicitly.', feedback: 'Students benefit from concrete source-checking steps while learning that misinformation can harm people. Keep the discussion focused on evidence and impact.', takeaway: 'Pair media literacy with care when addressing harmful misinformation.' },
      { text: 'Tell the student to use whatever result appears first on the search page.', impact: { belonging: -6, voice: -5, safety: -7, access: -12 }, heading: 'Search rank is not source quality.', feedback: 'Students need guidance to distinguish evidence from unsupported claims and bias.', takeaway: 'Teach a repeatable process for checking credibility.' },
      { text: 'Scold the student publicly for even opening the page.', impact: { belonging: -8, voice: -11, safety: -6, access: -5 }, heading: 'Questions can be a starting point.', feedback: 'The student asked for help. Public humiliation may discourage future questions and hide the misinformation instead of addressing it.', takeaway: 'Keep the door open to questions while setting boundaries around harmful content.' },
    ],
  },
  {
    id: 'quiet_voice', title: 'A quieter way to contribute',
    situation: 'In a small-group library activity, a student tells you they have ideas but feel uncomfortable speaking in a large group.',
    question: 'How do you make their thinking visible without pressure?',
    choices: [
      { text: 'Offer a written or visual contribution first, paired rehearsal, and an optional path to share aloud.', impact: { belonging: 10, voice: 14, safety: 6, access: 15 }, heading: 'Participation can take many forms.', feedback: 'Meaningful choice gives students pathways into the same learning goal without requiring immediate public speaking.', takeaway: 'Design multiple ways to participate and build confidence over time.' },
      { text: 'Count only verbal contributions as participation so everyone is held to the same expectation.', impact: { belonging: -7, voice: -11, safety: -4, access: -14 }, heading: 'Identical formats are not always equitable.', feedback: 'A single participation format can mask understanding and create avoidable barriers.', takeaway: 'Assess the thinking you want to see, not only one mode of expression.' },
      { text: 'Skip asking the student for input because speaking seems uncomfortable.', impact: { belonging: -4, voice: -10, safety: -1, access: -8 }, heading: 'Protection can become exclusion.', feedback: 'The student has ideas to contribute. Offer supported options instead of removing their voice from the work.', takeaway: 'Support choice without withdrawing meaningful opportunities.' },
    ],
  },
  {
    id: 'accessibility', title: 'An inaccessible group task',
    situation: 'At the library tables, a group is assigned to read a dense passage and prepare a response. Some students are struggling to access the text before the discussion begins.',
    question: 'What might you adjust?',
    choices: [
      { text: 'Keep the key thinking goal while adding a readable version, audio option, visuals, and roles that distribute the discussion.', impact: { belonging: 8, voice: 12, safety: 3, access: 17 }, heading: 'Keep the challenge; remove barriers.', feedback: 'Flexible access to materials supports participation while students still engage with the central question and reasoning.', takeaway: 'Different pathways can lead to the same rigorous learning goal.' },
      { text: 'Give the struggling students unrelated easy work while the group continues.', impact: { belonging: -6, voice: -7, safety: -2, access: -12 }, heading: 'Reduced access is not meaningful differentiation.', feedback: 'Unrelated work may remove students from the shared intellectual task. Consider scaffolds that preserve the goal.', takeaway: 'Adjust supports without excluding students from core thinking.' },
      { text: 'Insist everyone read the original passage aloud in turn without preparation.', impact: { belonging: -7, voice: -9, safety: -6, access: -14 }, heading: 'One pathway creates avoidable barriers.', feedback: 'Public, unprepared reading can add pressure without helping students access the content.', takeaway: 'Match supports to the objective rather than enforcing a single format.' },
    ],
  },
];


export const ROOMS = [
  { id: 'classroom', name: 'Classroom', title: 'Your classroom', subtitle: 'Notice the routines that help students belong.', description: 'Whiteboard, bulletin board, and group tables', art: 'classroom.svg' },
  { id: 'hallway', name: 'Hallway', title: 'The hallway', subtitle: 'A brave space extends beyond your classroom walls.', description: 'Bathroom entrance and lockers', art: 'hallway.svg' },
  { id: 'library', name: 'Library', title: 'The library', subtitle: 'Representation, access, and student voice show up here, too.', description: 'Book display and group tables', art: 'library.svg' },
];

// One scenario from each pair is chosen when a new playthrough begins.
// Percent positions correspond to illustrations (1200 x 720).
export const SLOTS = [
  { id: 'whiteboard', room: 'classroom', label: 'Whiteboard', key: 'SPEAK UP', x: 47, y: 40, scenarioIds: ['joke', 'names'] },
  { id: 'bulletin', room: 'classroom', label: 'Bulletin board', key: 'REPRESENT', x: 70, y: 38, scenarioIds: ['curriculum', 'holidays'] },
  { id: 'desks', room: 'classroom', label: 'Student desks', key: 'INCLUDE', x: 50, y: 77, scenarioIds: ['groupwork', 'mistake'] },
  { id: 'bathroom', room: 'hallway', label: 'Restroom', key: 'PROTECT', x: 61, y: 43, scenarioIds: ['graffiti', 'slur'] },
  { id: 'lockers', room: 'hallway', label: 'Lockers', key: 'INTERRUPT', x: 36, y: 45, scenarioIds: ['rumor', 'bystander'] },
  { id: 'bookshelf', room: 'library', label: 'Book display', key: 'QUESTION', x: 20, y: 46, scenarioIds: ['books', 'source'] },
  { id: 'table', room: 'library', label: 'Group table', key: 'LISTEN', x: 56, y: 79, scenarioIds: ['quiet_voice', 'accessibility'] },
];

export const TRAVEL = [
  { room: 'classroom', to: 'hallway', label: 'Enter hallway', x: 89, y: 42 },
  { room: 'hallway', to: 'classroom', label: 'Classroom', x: 12, y: 42 },
  { room: 'hallway', to: 'library', label: 'Enter library', x: 88, y: 42 },
  { room: 'library', to: 'hallway', label: 'Back to hallway', x: 88, y: 42 },
];
