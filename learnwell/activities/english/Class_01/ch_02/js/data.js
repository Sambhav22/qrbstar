export const chapter = "Chapter - 2: Horseshoe";
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
        question: "What is a horseshoe made of?",
        optionA: "Plastic",
        optionB: "Iron",
        optionC: "Rubber",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "Who shoes the horse in the poem?",
        optionA: "Micky",
        optionB: "Robert Barnes",
        optionC: "A doctor",
        correctAnswer: "Robert Barnes",
      }),
      shuffleOptions({
        question: "A shoe is worn on the:",
        optionA: "Foot",
        optionB: "Head",
        optionC: "Hand",
        correctAnswer: "Foot",
      }),
      shuffleOptions({
        question: "What do you wear with a shoe?",
        optionA: "Socks",
        optionB: "Cap",
        optionC: "Tie",
        correctAnswer: "Socks",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Can you ______ this horse of mine?",
        optionA: "ride",
        optionB: "clean",
        optionC: "shoe",
        correctAnswer: "shoe",
      }),
      shuffleOptions({
        question: "A ______ is a curved piece of iron.",
        optionA: "belt",
        optionB: "horseshoe",
        optionC: "sandal",
        correctAnswer: "horseshoe",
      }),
      shuffleOptions({
        question: "The word 'shod' means the horse has a ______.",
        optionA: "rope",
        optionB: "coat",
        optionC: "shoe",
        correctAnswer: "shoe",
      }),
      shuffleOptions({
        question: "Yes, indeed, that I ______.",
        optionA: "will",
        optionB: "can",
        optionC: "do",
        correctAnswer: "can",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A horseshoe is worn on the head.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Robert Barnes could shoe the horse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Prod is used while shoeing the horse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the poem, the horse is not shod at the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;