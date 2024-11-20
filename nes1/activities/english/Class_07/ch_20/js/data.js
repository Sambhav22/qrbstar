export const chapter = "Chapter -20: Shakuntala";
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
          question:
            "What is the name of the young king who ruled in the land in the earliest times?",
          optionA: "Bharat",
          optionB: "Dushyanta",
          optionC: "Kanva",
          correctAnswer: "Dushyanta",
        }),
      shuffleOptions({
          question:
            "In which place did Dushyanta find a soothing hermitage in the forest?",
          optionA: "A dense jungle",
          optionB: "A rocky mountain",
          optionC: "A pleasant grove",
          correctAnswer: "A pleasant grove",
        }),
      shuffleOptions({
          question:
            "Who was the great hermit living in the hermitage that Dushyanta stumbled upon?",
          optionA: "Sage Durvasa",
          optionB: "Sage Kanva",
          optionC: "Sage Bharat",
          correctAnswer: "Sage Kanva",
        }),
      shuffleOptions({
          question: "What is the name of the adopted daughter of Sage Kanva?",
          optionA: "Sita",
          optionB: "Draupadi",
          optionC: "Shakuntala",
          correctAnswer: "Shakuntala",
        }),
      shuffleOptions({
          question:
            "What did Dushyanta give to Shakuntala as a proof of their marriage?",
          optionA: "Diamond necklace",
          optionB: "Gold ring",
          optionC: "Silver bracelet",
          correctAnswer: "Gold ring",
        }),
      shuffleOptions({
          question: "What curse did Sage Durvasa pronounce on Shakuntala?",
          optionA: "She will forget her name",
          optionB: "She will lose her way in the forest",
          optionC: "The one she loves will forget her until he sees the ring",
          correctAnswer:
            "The one she loves will forget her until he sees the ring",
        }),
      shuffleOptions({
          question:
            "How did Dushyanta finally recognize Shakuntala as his wife?",
          optionA: "Through a dream",
          optionB: "A fisherman found the lost ring",
          optionC: "Sage Kanva informed him",
          correctAnswer: "A fisherman found the lost ring",
        }),
      shuffleOptions({
          question:
            "What did Dushyanta feel when he realized his mistake regarding Shakuntala?",
          optionA: "Happiness",
          optionB: "Regret and sorrow",
          optionC: "Indifference",
          correctAnswer: "Regret and sorrow",
        }),
      shuffleOptions({
          question: "Who rose to be the king after Dushyanta in the story?",
          optionA: "Sage Durvasa",
          optionB: "Shakuntala",
          optionC: "Bharat",
          correctAnswer: "Bharat",
        }),
      shuffleOptions({
          question:
            "Which famous king descended from the dynasty started by Bharat in the story?",
          optionA: "Rama",
          optionB: "Yudhishthira",
          optionC: "Krishna",
          correctAnswer: "Yudhishthira",
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
          question:
            "In the earliest times, a young king named __________ ruled in this land.",
          optionA: "Kanva",
          optionB: "Dushyanta",
          optionC: "Bharat",
          correctAnswer: "Dushyanta",
        }),
      shuffleOptions({
          question:
            "Dushyanta stumbled upon a pleasant grove amid which he found a soothing __________.",
          optionA: "Castle",
          optionB: "Hermitage",
          optionC: "Temple",
          correctAnswer: "Hermitage",
        }),
      shuffleOptions({
          question: "The great hermit living in the hermitage was __________.",
          optionA: "Sage Durvasa",
          optionB: "Sage Kanva",
          optionC: "Sage Bharat",
          correctAnswer: "Sage Kanva",
        }),
      shuffleOptions({
          question: "The adopted daughter of Sage Kanva was named __________.",
          optionA: "Sita",
          optionB: "Draupadi",
          optionC: "Shakuntala",
          correctAnswer: "Shakuntala",
        }),
      shuffleOptions({
          question:
            "Dushyanta gave Shakuntala a gold ring as a proof of their __________.",
          optionA: "Friendship",
          optionB: "Marriage",
          optionC: "Alliance",
          correctAnswer: "Marriage",
        }),
      shuffleOptions({
          question:
            "Sage Durvasa pronounced a curse that the one Shakuntala loves will forget her until he sees __________.",
          optionA: "A flower",
          optionB: "A bird",
          optionC: "The ring",
          correctAnswer: "The ring",
        }),
      shuffleOptions({
          question:
            "A fisherman found the lost ring when he cut open a __________.",
          optionA: "Pumpkin",
          optionB: "Fish",
          optionC: "The river",
          correctAnswer: "Fish",
        }),
      shuffleOptions({
          question:
            "Shakuntala failed to convince Dushyanta of their marriage when she was brought in __________ with him.",
          optionA: "Battle",
          optionB: "Dialogue",
          optionC: "Audience",
          correctAnswer: "Audience",
        }),
      shuffleOptions({
          question:
            "The dynasty started by Bharat went on to produce several worthy kings, including __________.",
          optionA: "Rama",
          optionB: "Yudhishthira",
          optionC: "Krishna",
          correctAnswer: "Yudhishthira",
        }),
      shuffleOptions({
          question:
            "Which famous king descended from the dynasty started by Bharat in the story?",
          optionA: "Sage Durvasa",
          optionB: "Shakuntala",
          optionC: "Bharat",
          correctAnswer: "Bharat",
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
          question:
            "Dushyanta found a pleasant grove amid which he found a soothing hermitage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Shakuntala was the biological daughter of Sage Kanva.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Dushyanta gave Shakuntala a silver bracelet as a proof of their marriage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sage Durvasa cursed Shakuntala that she would forget her name.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "A fisherman found the lost ring when he cut open a pumpkin.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Dushyanta recognized Shakuntala as his wife when she was brought in audience with him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Bharat, the son of Dushyanta and Shakuntala, rose to be a great sage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sage Durvasa's curse on Shakuntala brought agony to her life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Dushyanta felt regret and sorrow when he realized his mistake regarding Shakuntala.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The dynasty started by Bharat went on to produce several worthy kings, including Krishna.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
