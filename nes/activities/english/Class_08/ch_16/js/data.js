export const chapter = "Chapter - 16: The Laughing Hippopotamus ";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What is the name of the baby hippopotamus in the story?",
        optionA: "Keo",
        optionB: "Gouie",
        optionC: "Nikki",
        correctAnswer: "Keo",
     }),
      shuffleOptions({
        question:
          "Why do the black people in the region fear the hippopotamuses?",
        optionA: "Because they are aggressive and dangerous",
        optionB: "Because they are known to steal food",
        optionC: "Because they are believed to have magical powers",
        correctAnswer: "Because they are aggressive and dangerous",
     }),
      shuffleOptions({
        question: "What does Gouie do to try to capture the hippopotamuses?",
        optionA: "He builds a fence around their territory",
        optionB: "He digs a deep pit and covers it with branches and earth",
        optionC: "He tries to tame them with food",
        correctAnswer:
          "He digs a deep pit and covers it with branches and earth",
     }),
      shuffleOptions({
        question: "How does Keo end up in Gouie's pit?",
        optionA: "He falls in while playing",
        optionB: "Gouie lures him with food",
        optionC: "He is captured by Gouie's family",
        correctAnswer: "He falls in while playing",
     }),
      shuffleOptions({
        question:
          "What does Gouie propose to Keo as a condition for his release?",
        optionA: "To work as a laborer",
        optionB: "To become a slave for a year and a day",
        optionC: "To provide food in exchange for his freedom",
        correctAnswer: "To become a slave for a year and a day",
     }),
      shuffleOptions({
        question: "What special abilities are granted to Keo by Glinkomok?",
        optionA: "Increased intelligence and speech",
        optionB: "Superhuman strength and toughness",
        optionC: "The power to control the weather",
        correctAnswer: "Superhuman strength and toughness",
     }),
      shuffleOptions({
        question: "How does Keo ultimately escape from Gouie?",
        optionA: "He outwits Gouie with a clever plan",
        optionB: "He swims away using his newfound strength",
        optionC: "He convinces Gouie to let him go",
        correctAnswer: "He swims away using his newfound strength",
     }),
      shuffleOptions({
        question:
          "What does Gouie swear by to secure his own release from Keo?",
        optionA: "The tusks of his grandfather",
        optionB: "The bones of his grandfather",
        optionC: "The river's currents",
        correctAnswer: "The bones of his grandfather",
     }),
      shuffleOptions({
        question:
          "Why doesn't Gouie return to Keo in a year and a day as he promised?",
        optionA: "He forgets his promise",
        optionB: "He becomes prosperous in another country",
        optionC: "He loses his way in the jungle",
        correctAnswer: "He becomes prosperous in another country",
     }),
      shuffleOptions({
        question: "What is the ultimate outcome for Keo and Gouie's bargain?",
        optionA: "Gouie returns as promised and becomes Keo's slave",
        optionB: "Keo forgives Gouie and they become friends",
        optionC: "Gouie never returns, and Keo lives happily with his tribe",
        correctAnswer:
          "Gouie never returns, and Keo lives happily with his tribe",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "In protest against the British atrocities, the revolutionaries rose in revolt when the British atrocities reached _______________ limits.",
        options: ["A) unbearable", "B) unprecedented", "C) unexpected"],
        correctAnswer: "A) unbearable",
     }),
      shuffleOptions({
        question:
          "Kingsford, the Chief Presidency Magistrate of Calcutta, sentenced a number of revolutionaries to death because they were alleged to have written articles and pamphlets asking people to fight for the country's _______________.",
        options: ["A) independence", "B) freedom", "C) justice"],
        correctAnswer: "B) freedom",
     }),
      shuffleOptions({
        question:
          "The revolutionaries decided to do away with this unreasonable officer, so they deputed Khudi Ram Bose and Prafull Kumar Chaki for this _______________.",
        options: ["A) mission", "B) purpose", "C) sacrifice"],
        correctAnswer: "A) mission",
     }),
      shuffleOptions({
        question:
          "One thing we must appreciate is that they were fighting for freedom taking a huge risk to their lives and families, while they operated with _______________ facilities.",
        options: ["A) abundant", "B) scarce", "C) modern"],
        correctAnswer: "B) scarce",
     }),
      shuffleOptions({
        question:
          "Bose and Chaki decided to hurl a bomb at him as soon as his carriage drove out of the club. Unfortunately, they did not know that an identical carriage was also in the possession of another officer named _______________.",
        options: ["A) Kennedy", "B) Kingsford", "C) Savarkar"],
        correctAnswer: "A) Kennedy",
     }),
      shuffleOptions({
        question:
          "In the dark, the young revolutionaries could not make out who was traveling in the carriage. As soon as the carriage came out of the iron gate, the bomb was hurled _______________.",
        options: ["A) silently", "B) towards it", "C) intentionally"],
        correctAnswer: "B) towards it",
     }),
      shuffleOptions({
        question:
          "The two ladies in it sustained severe injuries. Kennedy's daughter succumbed to her injuries an hour later, while his wife died a few days later on _______________.",
        options: ["A) April 30", "B) May 2", "C) April 15"],
        correctAnswer: "B) May 2",
     }),
      shuffleOptions({
        question:
          "Khudi Ram Bose was arrested on 1 May, 1908, from the same village. A big unloaded pistol, a small loaded pistol, and 30 bullets were recovered from _______________.",
        options: ["A) him", "B) his accomplice", "C) the police"],
        correctAnswer: "A) him",
     }),
      shuffleOptions({
        question:
          "When he was being brought back to Muzaffarpur, the entire village walked to the railway station to catch a glimpse of this _______________ figure.",
        options: ["A) revered", "B) notorious", "C) famous"],
        correctAnswer: "A) revered",
     }),
      shuffleOptions({
        question:
          "With the holy Geeta in one hand and the slogans for his motherland on his tongue, the young Khudi Ram Bose, with curly hair covering his forehead and bright eyes, kissed the gallows before he beckoned the _______________ to do his duty.",
        options: ["A) police", "B) hangman", "C) officer"],
        correctAnswer: "B) hangman",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Keo, the baby hippopotamus, was born in the wild.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The black people in the region loved the hippopotamuses because they were friendly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gouie captured Keo by using a deep pit covered with branches and leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Keo fell into Gouie's pit while playing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Gouie released Keo unconditionally after capturing him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Glinkomok granted Keo superhuman intelligence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Keo escaped from Gouie by swimming away using his newfound strength.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Gouie swore by the tusks of his grandfather to secure his own release from Keo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gouie returned to Keo as promised after becoming prosperous in another country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The ultimate outcome for Keo and Gouie's bargain was that Gouie never returned, and Keo lived happily with his family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
