export const chapter = "Chapter - 1: Loving Family";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was standing at her door?",
        optionA: "Kannu",
        optionB: "Preeti",
        optionC: "Mummy",
        correctAnswer: "Preeti",
      }),
      shuffleOptions({
        question: "What did Preeti say to Kannu?",
        optionA: "Goodbye",
        optionB: "Hello",
        optionC: "Wait",
        correctAnswer: "Hello",
      }),
      shuffleOptions({
        question: "Who is very old but active?",
        optionA: "Mummy",
        optionB: "Kannu",
        optionC: "Granny",
        correctAnswer: "Granny",
      }),
      shuffleOptions({
        question: "What does Granny play with Preeti?",
        optionA: "Ludo",
        optionB: "Ball",
        optionC: "Chess",
        correctAnswer: "Ludo",
      }),
      shuffleOptions({
        question: "Who was sleeping in Preeti's house?",
        optionA: "Her dog",
        optionB: "Her brother",
        optionC: "Her teacher",
        correctAnswer: "Her brother",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Preeti saw a new girl in the ______.",
        optionA: "park",
        optionB: "school",
        optionC: "street",
        correctAnswer: "street",
      }),
      shuffleOptions({
        question: "Kannu and Preeti went to ______ room.",
        optionA: "Kannu's",
        optionB: "Granny's",
        optionC: "Preeti's",
        correctAnswer: "Preeti's",
      }),
      shuffleOptions({
        question: "Granny tells Preeti _______.",
        optionA: "jokes",
        optionB: "stories",
        optionC: "poems",
        correctAnswer: "stories",
      }),
      shuffleOptions({
        question: "Preeti said, 'This is my home, and yours is _____?'",
        optionA: "just next door",
        optionB: "far",
        optionC: "near school",
        correctAnswer: "just next door",
      }),
      shuffleOptions({
        question: "Preeti introduced Kannu to her _______.",
        optionA: "sister",
        optionB: "mummy",
        optionC: "teacher",
        correctAnswer: "mummy",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Preeti and Kannu became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kannu lives very far from Preeti's home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Granny is old and does not play with Preeti.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mummy told the girls to go and play in the room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Preeti's little brother was playing outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;