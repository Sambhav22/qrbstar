export const chapter = "Chapter - 16: Nala and Damyanti ";
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
          "Who was the powerful king ruling in Berar in the ancient period?",
        optionA: "Nala",
        optionB: "Bhima",
        optionC: "Damyanti",
        correctAnswer: "Bhima",
     }),
      shuffleOptions({
        question: "What made Damyanti stand out among her handmaids?",
        optionA: "Her intelligence",
        optionB: "Her kindness",
        optionC: "Her beauty",
        correctAnswer: "Her beauty",
     }),
      shuffleOptions({
        question: "Whom did Damyanti want to seek as her marital alliance?",
        optionA: "Gods",
        optionB: "Kings and princes",
        optionC: "Nala",
        correctAnswer: "Nala",
     }),
      shuffleOptions({
        question: "How did Nala first learn about Damyanti?",
        optionA: "He saw her at a temple",
        optionB: "He received a message from her",
        optionC: "He heard about her from a messenger",
        correctAnswer: "He heard about her from a messenger",
     }),
      shuffleOptions({
        question: "What attracted Nala to the swan in the garden?",
        optionA: "Its beautiful feathers",
        optionB: "Its ability to speak",
        optionC: "Its golden wings",
        correctAnswer: "Its golden wings",
     }),
      shuffleOptions({
        question: "What message did Nala send with the swan to Damyanti?",
        optionA: "He wanted to marry someone else",
        optionB: "He was not interested in her",
        optionC: "He loved her and wanted to marry her",
        correctAnswer: "He loved her and wanted to marry her",
     }),
      shuffleOptions({
        question: "What is a Swayamvara?",
        optionA: "A festival",
        optionB: "A marriage ceremony",
        optionC: "An assembly where a princess chooses her groom",
        correctAnswer: "An assembly where a princess chooses her groom",
     }),
      shuffleOptions({
        question: "How did Damyanti identify the real Nala among the suitors?",
        optionA: "By his appearance in a picture",
        optionB: "By the garland he wore",
        optionC: "By observing their behavior and signs",
        correctAnswer: "By observing their behavior and signs",
     }),
      shuffleOptions({
        question: "Why did Damyanti choose the real Nala at the Swayamvara?",
        optionA: "He was the most handsome suitor",
        optionB: "He was a god in disguise",
        optionC: "He cast a shadow and blinked",
        correctAnswer: "He cast a shadow and blinked",
     }),
      shuffleOptions({
        question: "What did the gods do when Damyanti chose the real Nala?",
        optionA: "They cursed her for her choice",
        optionB: "They blessed the couple and revealed their identity",
        optionC: "They tried to deceive her by taking Nala's form",
        correctAnswer: "They blessed the couple and revealed their identity",
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
          "There once ruled a powerful king named Bhima in _______________.",
        options: ["A) Nishada", "B) Berar", "C) Nala"],
        correctAnswer: "B) Berar",
     }),
      shuffleOptions({
        question:
          "Damyanti wanted to seek Nala, the king of _______________, for a marital alliance.",
        options: ["A) Nishada", "B) Berar", "C) Bhima"],
        correctAnswer: "A) Nishada",
     }),
      shuffleOptions({
        question:
          "Nala was charmed by the description of Damyanti brought by a _______________.",
        options: ["A) peacock", "B) messenger", "C) swan"],
        correctAnswer: "B) messenger",
     }),
      shuffleOptions({
        question:
          "Nala was attracted to the beautiful milky swan that possessed shining wings in the splash of _______________.",
        options: ["A) silver", "B) gold", "C) bronze"],
        correctAnswer: "B) gold",
     }),
      shuffleOptions({
        question:
          "The swan offered to pass across a message for Nala, and Nala asked it to go to _______________.",
        options: ["A) a distant land", "B) a secret place", "C) Damyanti"],
        correctAnswer: "C) Damyanti",
     }),
      shuffleOptions({
        question:
          "Damyanti wanted Nala to seek her at the _______________ scheduled for the next month.",
        options: ["A) palace", "B) temple", "C) Swayamvara"],
        correctAnswer: "C) Swayamvara",
     }),
      shuffleOptions({
        question:
          "The Swayamvara was an assembly where the girl walked in front of the suitors with a _______________ in her hands.",
        options: ["A) sword", "B) garland", "C) crown"],
        correctAnswer: "B) garland",
     }),
      shuffleOptions({
        question:
          "To possess Damyanti, the gods assumed _______________ to deceive her.",
        options: [
          "A) the form of Nala",
          "B) the form of swans",
          "C) the form of gods",
        ],
        correctAnswer: "A) the form of Nala",
     }),
      shuffleOptions({
        question:
          "Damyanti identified the real Nala because the gods never _______________.",
        options: ["A) winked", "B) smiled", "C) danced"],
        correctAnswer: "A) winked",
     }),
      shuffleOptions({
        question:
          "The gods blessed the couple and informed Damyanti that they had come to _______________ her love for Nala.",
        options: ["A) test", "B) examine", "C) celebrate"],
        correctAnswer: "A) test",
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
