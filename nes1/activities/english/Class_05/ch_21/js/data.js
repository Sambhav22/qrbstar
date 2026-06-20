export const chapter = "Chapter -21: Return of the child";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "What is Cyrus II of Persia better known as?",
          optionA: "Cyrus the Brave",
          optionB: "Cyrus the Great",
          optionC: "Cyrus the Wise",
          correctAnswer: "Cyrus the Great",
        }),
      shuffleOptions({
          question: "Who was Cyrus II's grandfather?",
          optionA: "Cambyses I",
          optionB: "Astyages",
          optionC: "Mandane",
          correctAnswer: "Astyages",
        }),
      shuffleOptions({
          question:
            "What did Astyages see in his dream that led to a decision about Cyrus II?",
          optionA: "A lion hunting in the forest",
          optionB: "A kite and a crow with a pink cloth",
          optionC: "A river flowing through the mountains",
          correctAnswer: "A kite and a crow with a pink cloth",
        }),
      shuffleOptions({
          question:
            "How did Astyages react when told about the dream's interpretation?",
          optionA: "He rejoiced",
          optionB: "He was indifferent",
          optionC: "He ordered the killing of Cyrus II",
          correctAnswer: "He ordered the killing of Cyrus II",
        }),
      shuffleOptions({
          question: "Who was ordered to kill the infant Cyrus II?",
          optionA: "Mithridates",
          optionB: "Herpagus",
          optionC: "Cambyses I",
          correctAnswer: "Herpagus",
        }),
      shuffleOptions({
          question:
            "How did Herpagus handle the situation after receiving the order to kill Cyrus II?",
          optionA: "He killed Cyrus II",
          optionB: "He handed the child to Mithridates",
          optionC: "He disobeyed the order and revealed the truth",
          correctAnswer: "He handed the child to Mithridates",
        }),
      shuffleOptions({
          question:
            "What happened when Cyrus II was summoned to Astyages' court after ten years?",
          optionA: "He was killed",
          optionB: "He was embraced by Astyages",
          optionC: "He was ignored",
          correctAnswer: "He was embraced by Astyages",
        }),
      shuffleOptions({
          question: "Why did Astyages punish Herpagus?",
          optionA: "For not killing Cyrus II",
          optionB: "For revealing the truth",
          optionC: "For disobeying orders",
          correctAnswer: "For disobeying orders",
        }),
      shuffleOptions({
          question:
            "In what year did Cyrus II declare himself the king of the whole of Persia?",
          optionA: "560 BC",
          optionB: "550 or 549 BC",
          optionC: "500 BC",
          correctAnswer: "550 or 549 BC",
        }),
      shuffleOptions({
          question: "What did Cyrus II achieve in about 20 years' time?",
          optionA: "The overthrow of Astyages",
          optionB: "The largest kingdom on earth",
          optionC: "Recognition as a wise ruler",
          correctAnswer: "The largest kingdom on earth",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Cyrus II of Persia is better known as ____________.",
          optionA: "Cyrus the Conqueror",
          optionB: "Cyrus the Great",
          optionC: "Cyrus the Wise",
          correctAnswer: "Cyrus the Great",
        }),
      shuffleOptions({
          question:
            "Cyrus II's mother, Mandane, was the daughter of King ____________.",
          optionA: "Cambyses I",
          optionB: "Astyages",
          optionC: "Cyrus I",
          correctAnswer: "Astyages",
        }),
      shuffleOptions({
          question:
            "Astyages, Cyrus II's grandfather, ruled over a very large territory in Persia with an ____________ hand.",
          optionA: "Open",
          optionB: "Iron",
          optionC: "Gentle",
          correctAnswer: "Iron",
        }),
      shuffleOptions({
          question:
            "Astyages had great faith in ____________ and consulted astrologers in his court.",
          optionA: "Astronomy",
          optionB: "Mathematics",
          optionC: "Astrology",
          correctAnswer: "Astrology",
        }),
      shuffleOptions({
          question:
            "According to Astyages' dream, a crow flew away with a kite and dropped it at a ____________ cloth.",
          optionA: "Blue",
          optionB: "Black",
          optionC: "White",
          correctAnswer: "Black",
        }),
      shuffleOptions({
          question:
            "Astyages ordered his army commander, ____________, to go and kill the infant Cyrus II.",
          optionA: "Mithridates",
          optionB: "Herodotus",
          optionC: "Herpagus",
          correctAnswer: "Herpagus",
        }),
      shuffleOptions({
          question:
            "After ten years, Cyrus II was summoned to Astyages' court, and he embraced him ____________.",
          optionA: "Affectionately",
          optionB: "Angrily",
          optionC: "Indifferently",
          correctAnswer: "Affectionately",
        }),
      shuffleOptions({
          question:
            "Cyrus II declared himself the king of the whole of Persia in ____________ or 549 BC.",
          optionA: "560 BC",
          optionB: "550",
          optionC: "540 BC",
          correctAnswer: "550 or 549 BC",
        }),
      shuffleOptions({
          question:
            "In about 20 years, Persia became the largest kingdom on earth, extending from ____________ to Pakistan.",
          optionA: "Greece and Egypt",
          optionB: "Turkey and Azerbaijan",
          optionC: "Italy and Spain",
          correctAnswer: "Turkey and Azerbaijan",
        }),
      shuffleOptions({
          question:
            "Cyrus II is known as one of the one hundred most influential personalities in ____________.",
          optionA: "Persian history",
          optionB: "Ancient literature",
          optionC: "History",
          correctAnswer: "History",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Cyrus II of Persia is also known as Cyrus the Great.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Astyages, the grandfather of Cyrus II, ruled over a small territory in Persia.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Astyages had great faith in astronomy and consulted astronomers in his court.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In Astyages' dream, a crow dropped the kite at a white cloth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Herpagus, the army commander, obeyed Astyages' order and killed the infant Cyrus II.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Cyrus II was embraced by Astyages when summoned to his court after ten years.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Cyrus II declared himself the king of Persia in 560 BC.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Persia became the largest kingdom on earth within 20 years under Cyrus II's rule.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Cyrus II recognized the overlordship of his grandfather Astyages throughout his reign.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Cyrus II is considered one of the one hundred most influential personalities in Persian history.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
