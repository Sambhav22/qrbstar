export const chapter = "Chapter - 20: Sakuntala";
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
          "What is the name of the young king who first met Shakuntala in the forest?",
        optionA: "Dushyanta",
        optionB: "Kanva",
        optionC: "Bharat",
        correctAnswer: "Dushyanta",
     }),
      shuffleOptions({
        question: "How did Dushyanta propose to Shakuntala?",
        optionA: "He sent her a letter",
        optionB: "He presented her with a ring",
        optionC: "He asked her father for permission",
        correctAnswer: "He presented her with a ring",
     }),
      shuffleOptions({
        question: "What caused Shakuntala to lose her memory in the story?",
        optionA: "She was cursed by Sage Durvasa",
        optionB: "She was involved in an accident",
        optionC: "She was ill and lost her memory naturally",
        correctAnswer: "She was cursed by Sage Durvasa",
     }),
      shuffleOptions({
        question:
          "Where did Shakuntala live after Dushyanta refused to recognize her as his wife?",
        optionA: "In the royal palace",
        optionB: "In her father Sage Kanva's hermitage",
        optionC: "In a distant village",
        correctAnswer: "In her father Sage Kanva's hermitage",
     }),
      shuffleOptions({
        question:
          "What did Dushyanta give Shakuntala as proof of their marriage?",
        optionA: "A necklace",
        optionB: "A gold ring with his name engraved on it",
        optionC: "A royal decree",
        correctAnswer: "A gold ring with his name engraved on it",
     }),
      shuffleOptions({
        question:
          "What event led Dushyanta to remember Shakuntala and regret his actions?",
        optionA: "The recovery of the lost ring",
        optionB: "Meeting Sage Kanva",
        optionC: "A dream he had",
        correctAnswer: "The recovery of the lost ring",
     }),
      shuffleOptions({
        question: "Who was Bharat in the story?",
        optionA: "Dushyanta's friend",
        optionB: "Shakuntala's brother",
        optionC: "Dushyanta and Shakuntala's son",
        correctAnswer: "Dushyanta and Shakuntala's son",
     }),
      shuffleOptions({
        question: "What did Shakuntala blame for the hardships she faced?",
        optionA: "Her own actions",
        optionB: "Sage Kanva",
        optionC: "Sage Durvasa's curse",
        correctAnswer: "Sage Durvasa's curse",
     }),
      shuffleOptions({
        question: "Who helped Dushyanta find Shakuntala in the end?",
        optionA: "Sage Durvasa",
        optionB: "A fisherman",
        optionC: "Bharat",
        correctAnswer: "A fisherman",
     }),
      shuffleOptions({
        question:
          "What significant event led to the naming of the country after Bharat?",
        optionA: "Dushyanta's coronation as king",
        optionB: "The birth of Yudhishthira",
        optionC: "Bharat's rise to become a great king",
        correctAnswer: "Bharat's rise to become a great king",
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
          "In the earliest times, a young king named ________ ruled in this land.",
        options: ["Shakuntala", "Dushyanta", "Kanva"],
        correctAnswer: "Dushyanta",
     }),
      shuffleOptions({
        question:
          "Dushyanta stumbled upon a pleasant hermitage amid which he found a soothing ________.",
        options: ["Forest", "River", "Groove"],
        correctAnswer: "Groove",
     }),
      shuffleOptions({
        question:
          "The young damsel who welcomed Dushyanta in the hermitage turned out to be the adopted daughter of ________.",
        options: ["Sage Durvasa", "Sage Kanva", "Sage Bharat"],
        correctAnswer: "Sage Kanva",
     }),
      shuffleOptions({
        question:
          "Shakuntala and Dushyanta fell in love, and Dushyanta proposed to her for ________.",
        options: ["A friendship", "A marriage", "A partnership"],
        correctAnswer: "A marriage",
     }),
      shuffleOptions({
        question:
          "Dushyanta gave Shakuntala a gold ring as proof of their ________.",
        options: ["Engagement", "Marriage", "Relationship"],
        correctAnswer: "Marriage",
     }),
      shuffleOptions({
        question: "Sage Durvasa's curse made Shakuntala lose her ________.",
        options: ["Memory", "Ring", "Voice"],
        correctAnswer: "Memory",
     }),
      shuffleOptions({
        question:
          "Shakuntala lived in her father Sage Kanva's ________ after Dushyanta refused to recognize her as his wife.",
        options: ["Royal palace", "Hermitage", "Distant village"],
        correctAnswer: "Hermitage",
     }),
      shuffleOptions({
        question:
          "Dushyanta regretted his actions and sought to find Shakuntala after recovering the lost ________.",
        options: ["Necklace", "Ring", "Crown"],
        correctAnswer: "Ring",
     }),
      shuffleOptions({
        question:
          "Bharat, Shakuntala and Dushyanta's son, later rose to become the ________ of a great nation.",
        options: ["King", "Sage", "Warrior"],
        correctAnswer: "King",
     }),
      shuffleOptions({
        question:
          "The story concludes with the naming of the country after ________.",
        options: ["Sage Durvasa", "Shakuntala", "Bharat"],
        correctAnswer: "Bharat",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Parrots and lovebirds were commonly kept as pets in North India in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot in the story refused to talk despite Aunt Ruby's efforts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby gave up her efforts to show love to the parrot after it knocked off her spectacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The responsibility of feeding the parrot fell upon Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aunt Ruby's tantrums were pleasant to watch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator was responsible for leaving the cage door open, allowing the parrot to escape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot enjoyed green chillies and ripe tomatoes as treats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby was upset when the parrot escaped but was easily distracted with the promise of a new parrot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The parrot never learned to talk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The parrot became a regular visitor to the garden and verandah, singing praises to Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
