export const chapter = "Chapter - 21: Return of the Child ";
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
        question: "Who is Cyrus II better known as?",
        optionA: "Cyrus the Great",
        optionB: "Cyrus the Conqueror",
        optionC: "Cyrus the Wise",
        correctAnswer: "Cyrus the Great",
     }),
      shuffleOptions({
        question: "Who was Cyrus II's grandfather?",
        optionA: "King Cambyses I",
        optionB: "King Astyages",
        optionC: "Herpagus",
        correctAnswer: "King Astyages",
     }),
      shuffleOptions({
        question: "What was the dream that King Astyages had about Cyrus II?",
        optionA: "A crow flying with a kite",
        optionB: "A crow resting on a silken pink cloth",
        optionC: "A kite dropping on a black cloth",
        correctAnswer: "A crow flying with a kite",
     }),
      shuffleOptions({
        question: "Why did Astyages order Herpagus to kill the infant Cyrus?",
        optionA: "He wanted to protect his daughter",
        optionB: "He believed the dream's prediction",
        optionC: "He wanted to test Herpagus's loyalty",
        correctAnswer: "He believed the dream's prediction",
     }),
      shuffleOptions({
        question:
          "Who was entrusted with raising Cyrus instead of killing him?",
        optionA: "Cambyses I",
        optionB: "Herpagus",
        optionC: "Mithridates",
        correctAnswer: "Mithridates",
     }),
      shuffleOptions({
        question:
          "How did Astyages react when he met Cyrus for the first time?",
        optionA: "He ordered his immediate execution",
        optionB: "He kissed him affectionately",
        optionC: "He ignored his presence",
        correctAnswer: "He kissed him affectionately",
     }),
      shuffleOptions({
        question:
          "After his father's death, Cyrus ascended the throne of which place?",
        optionA: "Persia",
        optionB: "Anshan",
        optionC: "Astyages' kingdom",
        correctAnswer: "Anshan",
     }),
      shuffleOptions({
        question:
          "How did Cyrus ultimately become the king of the whole of Persia?",
        optionA: "Through a peaceful agreement",
        optionB: "By defeating his grandfather in battle",
        optionC: "By being appointed by his father",
        correctAnswer: "By defeating his grandfather in battle",
     }),
      shuffleOptions({
        question:
          "What territories did Cyrus's empire extend to in about 20 years?",
        optionA: "Turkey and Azerbaijan",
        optionB: "Turkey and Kazakhstan",
        optionC: "Kazakhstan and Pakistan",
        correctAnswer: "Kazakhstan and Pakistan",
     }),
      shuffleOptions({
        question:
          "Why is Cyrus II known as one of the one hundred most influential personalities in history?",
        optionA: "For his extensive empire",
        optionB: "For his qualities of head and heart",
        optionC: "For his military conquests",
        correctAnswer: "For his qualities of head and heart",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cyrus II of Persia is better known as Cyrus ___________.",
        options: ["the Great", "the Conqueror", "the Wise"],
        correctAnswer: "the Great",
     }),
      shuffleOptions({
        question:
          "Astyages, upon learning the truth about Cyrus, did not harm the boy and instead took him in his lap and kissed him affectionately, declaring, 'Even if I were destined to be overthrown by him, so ___________.'",
        options: ["be it", "never", "shall it"],
        correctAnswer: "be it",
     }),
      shuffleOptions({
        question:
          "Astyages saw a strange dream involving a kite and a crow, and the astrologers predicted that his own grandson, Cyrus II, would overthrow him from the ___________.",
        options: ["throne", "court", "kingdom"],
        correctAnswer: "throne",
     }),
      shuffleOptions({
        question:
          "Cyrus started his campaign to expand his territory and influence by first overthrowing the overlordship, and he defeated his grandfather, ___________.",
        options: ["Astyages", "Cambyses", "Herpagus"],
        correctAnswer: "Astyages",
     }),
      shuffleOptions({
        question:
          "In about 20 years' time, Persia became the largest kingdom on the earth, extending from Turkey and Azerbaijan in the west to Kazakhstan, Kyrgyzstan, and Pakistan in the ___________.",
        options: ["south", "east", "north"],
        correctAnswer: "east",
     }),
      shuffleOptions({
        question:
          "Astyages, Cyrus's grandfather, had great faith in ___________.",
        options: ["astronomy", "astrology", "geology"],
        correctAnswer: "astrology",
     }),
      shuffleOptions({
        question:
          "Herpagus, morally unable to kill the infant, handed Cyrus over to a herdsman named ___________.",
        options: ["Astyages", "Cambyses", "Mithridates"],
        correctAnswer: "Mithridates",
     }),
      shuffleOptions({
        question:
          "After his father's death, Cyrus ascended the throne of ___________.",
        options: ["Persia", "Anshan", "Astyages' kingdom"],
        correctAnswer: "Anshan",
     }),
      shuffleOptions({
        question:
          "Cyrus had royal physical features and conduct that did not match the humble surroundings in which he was being brought up, leading the neighbors to doubt if he was really the son of the ___________.",
        options: ["herdsman", "king", "astrologer"],
        correctAnswer: "herdsman",
     }),
      shuffleOptions({
        question:
          "To prevent the fulfillment of the astrologers' prediction, Astyages ordered one of his army commanders, Herpagus, to go and ___________ the infant Cyrus.",
        options: ["crown", "educate", "kill"],
        correctAnswer: "kill",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cyrus II of Persia is better known as Cyrus the Great.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Astyages, Cyrus's grandfather, had great faith in astronomy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Astyages ordered Herpagus to go and kill the infant Cyrus to prevent the fulfillment of the astrologers' prediction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Herpagus, morally unable to kill the infant, handed Cyrus over to a herdsman named Mithridates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Astyages took the young Cyrus in his lap and kissed him affectionately when they finally met.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "After his father's death, Cyrus ascended the throne of Persia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Cyrus started his campaign to expand his territory and influence by forming an alliance with his grandfather, Astyages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "In about 20 years' time, Persia became the largest kingdom on the earth, extending from Spain to India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Cyrus II is primarily known for his military conquests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Astyages initially punished Herpagus for disobeying his order to kill Cyrus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
