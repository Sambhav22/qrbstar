export const chapter = "Chapter -16: Goldilocks and Three Bears";
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
          question: "What was the name of the little girl in the story?",
          optionA: "Rose",
          optionB: "Goldilocks",
          optionC: "Lily",
          correctAnswer: "Goldilocks",
        }),
      shuffleOptions({
          question: "What did Goldilocks play with in the garden?",
          optionA: "Butterflies",
          optionB: "Bluebells",
          optionC: "Ladybugs",
          correctAnswer: "Bluebells",
        }),
      shuffleOptions({
          question: "How many beds did Goldilocks find in the bedroom?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question: "Which chair did Goldilocks break?",
          optionA: "Biggest one",
          optionB: "Middle-sized one",
          optionC: "Smallest one",
          correctAnswer: "Smallest one",
        }),
      shuffleOptions({
          question: "Who discovered that their porridge had been eaten?",
          optionA: "Father Bear",
          optionB: "Mother Bear",
          optionC: "Baby Bear",
          correctAnswer: "Father Bear",
        }),
      shuffleOptions({
          question: "Which bed did Goldilocks find too hard?",
          optionA: "Biggest one",
          optionB: "Middle-sized one",
          optionC: "Smallest one",
          correctAnswer: "Biggest one",
        }),
      shuffleOptions({
          question: "What did Goldilocks do when she saw the three bears?",
          optionA: "She laughed at them",
          optionB: "She screamed and ran away",
          optionC: "She invited them for tea",
          correctAnswer: "She screamed and ran away",
        }),
      shuffleOptions({
          question: "Who noticed that Goldilocks had broken the chair?",
          optionA: "Father Bear",
          optionB: "Mother Bear",
          optionC: "Baby Bear",
          correctAnswer: "Baby Bear",
        }),
      shuffleOptions({
          question:
            "Where did Goldilocks run to after leaving the bears' house?",
          optionA: "To her grandmother's house",
          optionB: "To the edge of the wood",
          optionC: "To the town square",
          correctAnswer: "To the edge of the wood",
        }),
      shuffleOptions({
          question:
            "What did Goldilocks promise her mother at the end of the story?",
          optionA: "To always listen to her mother",
          optionB: "To never go into the wood again",
          optionC: "To be careful around bears",
          correctAnswer: "To never go into the wood again",
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
          question: "What was the name of the little girl in the story?",
          optionA: "Lily",
          optionB: "Goldilocks",
          optionC: "Rose",
          correctAnswer: "Goldilocks",
        }),
      shuffleOptions({
          question: "What did Goldilocks play with in the garden?",
          optionA: "Butterflies",
          optionB: "Bluebells",
          optionC: "Ladybugs",
          correctAnswer: "Bluebells",
        }),
      shuffleOptions({
          question: "How many chairs did Goldilocks find in the cottage?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question: "Which chair did Goldilocks find too hard to sit on?",
          optionA: "Biggest one",
          optionB: "Middle-sized one",
          optionC: "Smallest one",
          correctAnswer: "Biggest one",
        }),
      shuffleOptions({
          question: "Who discovered that their porridge had been eaten?",
          optionA: "Father Bear",
          optionB: "Mother Bear",
          optionC: "Baby Bear",
          correctAnswer: "Father Bear",
        }),
      shuffleOptions({
          question: "Which bed did Goldilocks find too soft to sleep on?",
          optionA: "Biggest one",
          optionB: "Middle-sized one",
          optionC: "Smallest one",
          correctAnswer: "Middle-sized one",
        }),
      shuffleOptions({
          question: "What did Goldilocks do when she saw the three bears?",
          optionA: "She laughed at them",
          optionB: "She screamed and ran away",
          optionC: "She invited them for tea",
          correctAnswer: "She screamed and ran away",
        }),
      shuffleOptions({
          question: "Who noticed that Goldilocks had broken a chair?",
          optionA: "Father Bear",
          optionB: "Mother Bear",
          optionC: "Baby Bear",
          correctAnswer: "Baby Bear",
        }),
      shuffleOptions({
          question:
            "Where did Goldilocks run to after leaving the bears' house?",
          optionA: "To her grandmother's house",
          optionB: "To the edge of the wood",
          optionC: "To the town square",
          correctAnswer: "To the edge of the wood",
        }),
      shuffleOptions({
          question:
            "What did Goldilocks promise her mother at the end of the story?",
          optionA: "To always listen to her mother",
          optionB: "To never go into the wood again",
          optionC: "To be careful around bears",
          correctAnswer: "To never go into the wood again",
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
          question: "Goldilocks played in the garden every evening.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Goldilocks found the smallest bowl of porridge too hot.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Goldilocks felt comfortable sitting on the biggest chair.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The three bears were surprised to find their porridge eaten.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Goldilocks found the smallest bed too hard to sleep on.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Goldilocks invited the three bears to join her for breakfast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Baby Bear's chair broke when Goldilocks sat on it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Goldilocks ran to her grandmother's house after leaving the bears' house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Goldilocks promised her mother to never go into the wood again.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Goldilocks thought the bears' house was wonderful and decided to stay.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
