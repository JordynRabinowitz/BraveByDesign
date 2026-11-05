/**
 * EDUC 347 course connections drafted from the FALL 2026 syllabus reading list.
 * These are the project's own applications of the listed readings to fictional
 * teaching dilemmas. They are NOT quotations from the articles. Before handing
 * in, compare the analyses with the assigned full readings and lecture notes.
 *
 * The APA entries use the metadata supplied in Professor Gyles's syllabus;
 * confirm volume/page/title details and add DOIs where the original works list them.
 */
export const REFERENCES = [
  {
    id: 'aguirre', author: 'Aguirre & del Rosario Zavala (2013)',
    html: 'Aguirre, J. M., &amp; del Rosario Zavala, M. (2013). Making culturally responsive mathematics teaching explicit: A lesson analysis tool. <em>Pedagogies: An International Journal, 8</em>(2), 163–190.',
  },
  {
    id: 'hannegan', author: 'Hannegan-Martinez (2019)',
    html: 'Hannegan-Martinez, S. (2019). From punk love to compa love: A pedagogical paradigm to intervene on trauma. <em>The Urban Review, 51</em>(4), 659–675.',
  },
  {
    id: 'hansen', author: 'Hansen-Thomas et al. (2021)',
    html: 'Hansen-Thomas, H., Stewart, M. A., Flint, P., &amp; Dollar, T. (2021). Co-learning in the high school English class through translanguaging: Emergent bilingual newcomers and monolingual teachers. <em>Journal of Language, Identity &amp; Education, 20</em>(3), 151–166.',
  },
  {
    id: 'nea', author: 'National Education Association (2020)',
    html: 'National Education Association. (2020). <em>10 principles for talking about race in school.</em> <a href="https://www.nea.org/professional-excellence/student-engagement/tools-tips/10-principles-talking-about-race-school" target="_blank" rel="noopener noreferrer">https://www.nea.org/professional-excellence/student-engagement/tools-tips/10-principles-talking-about-race-school</a>',
  },
  {
    id: 'safir', author: 'Safir & Dugan (2021)',
    html: 'Safir, S., &amp; Dugan, J. (2021). <em>Street data: A next-generation model for equity, pedagogy, and school transformation.</em> Corwin.',
  },
  {
    id: 'sapon', author: 'Sapon-Shevin (2019)',
    html: 'Sapon-Shevin, M. (2019). Strategies and resources for creating LGBTQ-inclusive classrooms. <em>Teachers College Record, 121</em>(13), 1–22.',
  },
  {
    id: 'splc', author: 'Southern Poverty Law Center (2019)',
    html: 'Southern Poverty Law Center. (2019). <em>Hate at school.</em> <a href="https://www.learningforjustice.org/magazine/publications/hate-at-school-report" target="_blank" rel="noopener noreferrer">https://www.learningforjustice.org/magazine/publications/hate-at-school-report</a>',
  },
  {
    id: 'staats', author: 'Staats (2016)',
    html: 'Staats, C. (2016). Understanding implicit bias: What educators should know. <em>American Educator, 39</em>(4), 29–33.',
  },
  {
    id: 'ai', author: 'OpenAI (2026)',
    html: 'OpenAI. (2026). <em>ChatGPT</em> [Large language model]. <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">https://chatgpt.com/</a>',
    ai: true,
  },
];

// Keep the author's analysis distinguishable from a claim of having directly
// quoted or checked the full reading. These are research-alignment prompts.
export const RESEARCH = {
  joke: {
    theme: 'Interrupting hate and protecting identity', refs: ['splc', 'nea'],
    analysis: 'A classroom agreement has little force if hateful comments are ignored in real time. A teacher can stop the behavior clearly, then protect student privacy and coordinate follow-up. A discussion can explore respectful language without turning a targeted student into the lesson.',
    change: 'Before the next discussion, teach how to challenge an idea without ridiculing an identity; review how students report harm safely.',
  },
  curriculum: {
    theme: 'Intersectionality and representation', refs: ['staats', 'aguirre'],
    analysis: 'Recurring examples and displays send messages about whose lives are assumed to be the norm. In math, the examples we choose are part of the learning environment even when the objective is not explicitly cultural.',
    change: 'Audit a week of lesson examples and displays: whose experiences are present, who is absent, and who gets to choose?',
  },
  graffiti: {
    theme: 'Responding to antisemitism beyond the classroom', refs: ['splc'],
    analysis: 'A hate symbol in a shared school space affects students beyond the immediate location. The response should include student support, documentation, prompt reporting, removal through proper channels, and later prevention—not only cleaning the wall.',
    change: 'Know the school reporting pathway in advance and identify who coordinates communication, counseling, and follow-up.',
  },
  groupwork: {
    theme: 'Whose math reasoning gets heard?', refs: ['safir', 'aguirre'],
    analysis: 'Safir and Dugan (2021) offer a lens for asking whose experiences and ideas our classroom routines make visible. Aguirre and del Rosario Zavala (2013) connect equity to the design of math instruction. In this situation, a completed group product is not enough evidence that every student was able to reason or contribute. I would listen for whose strategies are discussed and whose ideas are recorded before adjusting group roles and supports.',
    change: 'During group work, note whose ideas are voiced, recorded, and used. Use that evidence to revise roles, language supports, and opportunities to show math thinking.',
  },
  names: {
    theme: 'Implicit assumptions and everyday respect', refs: ['staats'],
    analysis: 'Staats (2016) helps frame this as an opportunity to notice and interrupt assumptions rather than treating the repeated error as harmless. In this fictional example, the teacher keeps choosing a convenient version of a name despite corrections. I would respect the student’s stated preference and repair the mistake without requesting a public explanation. LGBTQIA+-specific practices are addressed separately in the pronoun scenario, which cites Sapon-Shevin (2019).',
    change: 'Ask privately how students want to be addressed, practice names accurately, and make corrections briefly without putting anyone on display.',
  },
  holidays: {
    theme: 'Examining whose traditions are treated as the default', refs: ['safir', 'staats'],
    analysis: 'This is my classroom application of two broader ideas, not a claim that either reading specifically studies holiday celebrations. Safir and Dugan (2021) encourage attention to students’ lived experiences of school routines, while Staats (2016) provides a lens for questioning unexamined assumptions. If I design a celebration around one religious tradition, I need to consider who has access to the activity without being pressured to participate in that observance.',
    change: 'Review planned activities for assumed religious or family traditions, offer equally meaningful options, and invite private or anonymous feedback.',
  },
  mistake: {
    theme: 'Math discussion that protects dignity', refs: ['aguirre', 'hannegan'],
    analysis: 'Aguirre and del Rosario Zavala (2013) provide a culturally responsive math teaching lens: whose strategies are treated as worth discussing? Hannegan-Martinez (2019) offers a broader lens on caring relationships and trauma. I would interrupt ridicule, keep the mathematical reasoning open for discussion, and let the student choose whether to contribute again immediately. This combines math rigor with attention to the relationship, rather than implying that either reading examined this exact situation.',
    change: 'Teach students how to challenge a math idea respectfully, make room to revise reasoning, and check in privately after public embarrassment.',
  },
  slur: {
    theme: 'Hate speech, protection, and accountability', refs: ['splc', 'nea'],
    analysis: 'A quick intervention can clarify that discriminatory language is not permitted. The teacher should not require the targeted student to explain the harm or agree to an immediate restorative conversation.',
    change: 'Plan a sequence for interrupting, checking safety, documenting, following policy, and preventing repetition.',
  },
  rumor: {
    theme: 'Disrupting identity-based stereotypes', refs: ['splc', 'staats'],
    analysis: 'Rumors and stereotypes can travel through informal spaces. Interrupting them matters, but follow-up must also examine which school routines make reporting or help-seeking easier or harder.',
    change: 'Review the pathways students have to report concerns without public exposure.',
  },
  bystander: {
    theme: 'Language-based harassment and bystander roles', refs: ['splc', 'hansen'],
    analysis: 'Mocking how someone speaks can silence their thinking and reduce access to learning. The teacher response needs both an immediate boundary and structures that make multilingual participation normal.',
    change: 'Teach specific, safe bystander responses and provide multiple pathways into academic discussion.',
  },
  books: {
    theme: 'Culturally sustaining materials', refs: ['sapon', 'staats'],
    analysis: 'A library collection is one of the school’s shared resources. Representation should be reviewed systematically rather than depending on whether an excluded student feels safe enough to ask.',
    change: 'Audit a sample of the available texts and build a process for student suggestions without requiring disclosure.',
  },
  source: {
    theme: 'Recognizing bias in sources and stereotypes', refs: ['staats', 'splc'],
    analysis: 'Staats (2016) gives a lens for discussing unexamined bias, and the Southern Poverty Law Center (2019) addresses identity-based hate in schools. Neither reading is a general source-evaluation guide. My application is to help students investigate who produced a claim, what evidence supports it, and what harm comes from presenting a stereotype as fact—without shaming the student who asked for help.',
    change: 'Teach a consistent author-evidence-context check and practice responding to harmful claims without repeating or validating them.',
  },
  quiet_voice: {
    theme: 'Student voice is more than speaking aloud', refs: ['safir'],
    analysis: 'I am applying Safir and Dugan (2021) as a lens for examining how students actually experience participation routines. An invitation to speak may look equal on paper while still favoring students comfortable responding immediately. Writing, visual contributions, and paired rehearsal can make ideas accessible without eliminating the opportunity to share with the larger group.',
    change: 'Offer multiple ways to contribute, then notice whether quieter students’ thinking is included in the group’s decisions over time.',
  },
  accessibility: {
    theme: 'Noticing barriers before students disengage', refs: ['safir', 'hannegan'],
    analysis: 'Safir and Dugan (2021) provide a way to examine whose experiences are overlooked by a classroom task, while Hannegan-Martinez (2019) offers a relational, healing-centered perspective on responding with dignity. These readings are not technical accessibility manuals. The audio, visuals, readable text, and flexible roles are instructional design choices I would use to preserve the common learning goal while removing avoidable barriers.',
    change: 'Ask what prevents access to the actual thinking goal and prepare alternate ways into the same text or task before class.',
  },
  math_home_language: {
    theme: 'Linguistic diversity in math', refs: ['hansen', 'aguirre'],
    analysis: 'The math objective is explaining transformations. A student who can explain a movement in Spanish may demonstrate conceptual understanding even while developing English terms. Using both languages as resources can support reasoning and precise vocabulary.',
    change: 'Provide visual movement models, bilingual or home-language opportunities, and a path from everyday wording to formal math language.',
  },
  math_language_partner: {
    theme: 'Translanguaging and mathematical meaning-making', refs: ['hansen', 'aguirre'],
    analysis: 'Math discussion should value drawings, gestures, everyday language, and formal terminology as ways to build and assess reasoning. Students still need precise math vocabulary; the teacher can help them develop it from ideas they already have.',
    change: 'Build in rehearsal, visuals, and sentence stems without letting language proficiency determine who contributes.',
  },
  pronouns: {
    theme: 'LGBTQIA+ inclusion and privacy', refs: ['sapon'],
    analysis: 'An affirming environment requires more than a poster. How students are addressed, whether they can choose when to disclose information, and whether adults respond consistently shape belonging.',
    change: 'Practice respectful, private check-ins and apply school policy without making identity a public classroom debate.',
  },
  inclusive_books: {
    theme: 'LGBTQIA+ representation and intersectional identities', refs: ['sapon', 'staats'],
    analysis: 'Including diverse families in ordinary materials makes recognition part of the curriculum rather than an exceptional event. Avoid assigning students the job of explaining their own identities or speaking for everyone.',
    change: 'Review book selections, family examples, and discussion norms before students have to request inclusion.',
  },
  overwhelmed: {
    theme: 'Trauma-informed and healing-centered teaching', refs: ['hannegan'],
    analysis: 'An unexpected event can leave a student temporarily unable to participate. Teachers need not know a private history to respond with predictable choices, dignity, and access to the original learning goal.',
    change: 'Plan a clear quiet-space routine, a non-public check-in, and a supported re-entry option.',
  },
  repair_after_correction: {
    theme: 'Adult accountability and repairing relationships', refs: ['hannegan', 'safir'],
    analysis: 'Hannegan-Martinez (2019) provides a healing-centered lens for relationships and dignity. Safir and Dugan (2021) offer a reason to listen to how students experience adults’ authority rather than judging the interaction only by whether a rule was followed. I would acknowledge my part in the difficult moment, listen privately, and make a supported path back into the learning available without dropping expectations.',
    change: 'After correcting a student, reflect on the impact of my tone and invite a private conversation and a practical re-entry plan when needed.',
  },
};

export const RUBRIC_MAP = [
  ['Brave and safe spaces', 'Whiteboard, restroom, student desks'],
  ['Socially just structures and power', 'Student desks, math and language, group table'],
  ['Holistic and student-centered support', 'Support corner, group table'],
  ['Discipline, space, time, resources, participation', 'Student desks, bulletin board, support corner'],
  ['Hate speech and antisemitism', 'Restroom, lockers, whiteboard'],
  ['Trauma-informed and healing practices', 'Support corner'],
  ['Linguistic diversity', 'Math and language, student desks'],
  ['LGBTQIA+ inclusion', 'Identity and books'],
];
