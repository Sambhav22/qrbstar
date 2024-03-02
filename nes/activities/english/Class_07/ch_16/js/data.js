export const chapter = "Chapter - 16: Bose and Chaki ";
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
        question:
          "Who was the Chief Presidency Magistrate of Calcutta who sentenced revolutionaries to death?",
        optionA: "Bhagat Singh",
        optionB: "Savarkar",
        optionC: "Kingsford",
        correctAnswer: "Kingsford",
     }),
      shuffleOptions({
        question:
          "What event marked the beginning of the earliest phase of revolutionaries in India?",
        optionA: "India's independence",
        optionB: "A bomb explosion",
        optionC: "Kingsford's sentencing",
        correctAnswer: "A bomb explosion",
     }),
      shuffleOptions({
        question:
          "What was the original target of the bomb attack by Bose and Chaki?",
        optionA: "Kingsford",
        optionB: "Kennedy",
        optionC: "A British officer",
        correctAnswer: "Kingsford",
     }),
      shuffleOptions({
        question: "What unfortunate incident happened during the bomb attack?",
        optionA: "The bomb failed to explode.",
        optionB:
          "The carriage carrying Kingsford was mistaken for another officer's.",
        optionC: "Bose and Chaki were arrested.",
        correctAnswer:
          "The carriage carrying Kingsford was mistaken for another officer's.",
     }),
      shuffleOptions({
        question: "How did Bose and Chaki escape after the bomb explosion?",
        optionA: "They were helped by local villagers.",
        optionB: "They ran 25 miles through the night.",
        optionC: "They hid in a nearby forest.",
        correctAnswer: "They ran 25 miles through the night.",
     }),
      shuffleOptions({
        question: "What happened to Khudi Ram Bose after his arrest?",
        optionA: "He was released.",
        optionB: "He was sentenced to life imprisonment.",
        optionC: "He was sentenced to death by hanging.",
        correctAnswer: "He was sentenced to death by hanging.",
     }),
      shuffleOptions({
        question: "Where did Prafull Kumar Chaki make the supreme sacrifice?",
        optionA: "In Muzaffarpur",
        optionB: "In Samastipur",
        optionC: "In Calcutta",
        correctAnswer: "In Samastipur",
     }),
      shuffleOptions({
        question: "How old was Khudi Ram Bose at the time of his hanging?",
        optionA: "25 years old",
        optionB: "20 years old",
        optionC: "17 years old",
        correctAnswer: "17 years old",
     }),
      shuffleOptions({
        question: "What was Khudi Ram Bose's last wish before his hanging?",
        optionA: "To be released",
        optionB: "To be cremated by Kalidas Bose",
        optionC: "To meet his family one last time",
        correctAnswer: "To be cremated by Kalidas Bose",
     }),
      shuffleOptions({
        question:
          "How did people react to Khudi Ram Bose's sacrifice after his cremation?",
        optionA: "They ignored it.",
        optionB: "They preserved his ashes as a precious memento.",
        optionC: "They protested against it.",
        correctAnswer: "They preserved his ashes as a precious memento.",
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
        question: "Bhima ruled in Berar during the ancient period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Damyanti's heart was set on marrying a king named Nala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Nala decided to visit Berar to meet Damyanti.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Nala was charmed by a swan in the royal gardens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The swan in the garden had shining silver wings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Damyanti was uninterested in any other suitor at the Swayamvara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The gods assumed Nala's form to compete for Damyanti's hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Damyanti identified the real Nala by their ability to cast shadows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The gods blessed the couple and revealed their true identity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Damyanti chose the gods as her groom at the Swayamvara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
