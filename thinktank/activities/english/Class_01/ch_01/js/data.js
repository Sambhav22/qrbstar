export const chapter = "Chapter - 1: God Bless Me";
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
        question: "In the poem, what is the speaker wishing upon?",
        optionA: "The sun",
        optionB: "The moon",
        optionC: "The stars",
        correctAnswer: "The stars",
     }),
      shuffleOptions({
        question: "How does the poem begin?",
        optionA: "Moonlight, moonlight",
        optionB: "Star light, star bright",
        optionC: "Sunshine, sunshine",
        correctAnswer: "Star light, star bright",
     }),
      shuffleOptions({
        question: "According to the poem, when does the speaker make a wish?",
        optionA: "In the morning",
        optionB: "During the day",
        optionC: "At night",
        correctAnswer: "At night",
     }),
      shuffleOptions({
        question: "What does the speaker wish for in the poem?",
        optionA: "To see the moon",
        optionB: "To have a bright star",
        optionC: "To have their wish granted",
        correctAnswer: "To have their wish granted",
     }),
      shuffleOptions({
        question: "Who does the speaker ask God to bless in the poem?",
        optionA: "Only themselves",
        optionB: "The moon and themselves",
        optionC: "The stars and themselves",
        correctAnswer: "The moon and themselves",
     }),
      shuffleOptions({
        question: "What is the first line of the second stanza of the poem?",
        optionA: "I see the moon,",
        optionB: "I wish upon a star,",
        optionC: "The sun is setting,",
        correctAnswer: "I see the moon,",
     }),
      shuffleOptions({
        question: "According to the poem, what does the moon do?",
        optionA: "It makes wishes come true",
        optionB: "It blesses the speaker",
        optionC: "It sees the speaker",
        correctAnswer: "It sees the speaker",
     }),
      shuffleOptions({
        question: "What time of day is mentioned in the poem?",
        optionA: "Morning",
        optionB: "Noon",
        optionC: "Night",
        correctAnswer: "Night",
     }),
      shuffleOptions({
        question: "How many wishes does the speaker make in the poem?",
        optionA: "One wish",
        optionB: "Two wishes",
        optionC: "Three wishes",
        correctAnswer: "Two wishes",
     }),
      shuffleOptions({
        question: "What is the central theme of this poem?",
        optionA: "The beauty of the moon",
        optionB: "Making wishes upon stars",
        optionC: "Blessings and wishes",
        correctAnswer: "Blessings and wishes",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ___________ is the largest planet in our solar system.",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Jupiter",
        correctAnswer: "Jupiter",
     }),
      shuffleOptions({
        question:
          "The process of photosynthesis converts carbon dioxide and water into glucose and ___________.",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Hydrogen",
        correctAnswer: "Oxygen",
     }),
      shuffleOptions({
        question: "The currency of Japan is called the Japanese ___________.",
        optionA: "Yen",
        optionB: "Euro",
        optionC: "Dollar",
        correctAnswer: "Yen",
     }),
      shuffleOptions({
        question:
          "The United Nations was founded in ___________ after World War II.",
        optionA: "1945",
        optionB: "1955",
        optionC: "1965",
        correctAnswer: "1945",
     }),
      shuffleOptions({
        question:
          "The human brain consists of approximately 86 billion ___________.",
        optionA: "Neurons",
        optionB: "Cells",
        optionC: "Muscles",
        correctAnswer: "Neurons",
     }),
      shuffleOptions({
        question:
          "The Statue of Liberty was a gift from ___________ to the United States.",
        optionA: "France",
        optionB: "England",
        optionC: "Spain",
        correctAnswer: "France",
     }),
      shuffleOptions({
        question: "The ___________ is the world's largest mammal.",
        optionA: "Elephant",
        optionB: "Blue Whale",
        optionC: "Giraffe",
        correctAnswer: "Blue Whale",
     }),
      shuffleOptions({
        question: "The Eiffel Tower is located in the city of ___________.",
        optionA: "London",
        optionB: "Paris",
        optionC: "Rome",
        correctAnswer: "Paris",
     }),
      shuffleOptions({
        question: "The capital of Australia is ___________.",
        optionA: "Sydney",
        optionB: "Melbourne",
        optionC: "Canberra",
        correctAnswer: "Canberra",
     }),
      shuffleOptions({
        question: "Water boils at ___________ degrees Celsius at sea level.",
        optionA: "100",
        optionB: "0",
        optionC: "50",
        correctAnswer: "100",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Birds can breathe underwater.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Pluto is considered a planet in our solar system.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Cats are reptiles.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The capital of France is London.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Moon is made of cheese.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Humans can survive without oxygen.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mount Everest is located in Africa.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Water boils at room temperature.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
