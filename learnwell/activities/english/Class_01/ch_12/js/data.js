export const chapter = "Chapter - 12: Bedtime";
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
        question: "Who says 'Caw, caw'?",
        optionA: "Parrot",
        optionB: "Pigeon",
        optionC: "Crow",
        correctAnswer: "Crow",
      }),
      shuffleOptions({
        question: "When does the sun rise?",
        optionA: "Morning",
        optionB: "Evening",
        optionC: "Night",
        correctAnswer: "Morning",
      }),
      shuffleOptions({
        question: "Where do birds go in the evening?",
        optionA: "Market",
        optionB: "Nest",
        optionC: "Tree",
        correctAnswer: "Nest",
      }),
      shuffleOptions({
        question: "What should little children do in the evening?",
        optionA: "Play games",
        optionB: "Watch TV",
        optionC: "Go to bed",
        correctAnswer: "Go to bed",
      }),
      shuffleOptions({
        question: "What shines in the night sky?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Clouds",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "What is our national animal?",
        optionA: "Elephant",
        optionB: "Tiger",
        optionC: "Lion",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "What season does it rain in?",
        optionA: "Summer",
        optionB: "Rainy",
        optionC: "Winter",
        correctAnswer: "Rainy",
      }),
      shuffleOptions({
        question: "What happens in the evening?",
        optionA: "Sun rises",
        optionB: "Sun sinks",
        optionC: "Rain falls",
        correctAnswer: "Sun sinks",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun sets in the ______.",
        optionA: "evening",
        optionB: "morning",
        optionC: "night",
        correctAnswer: "evening",
      }),
      shuffleOptions({
        question: "Children should go to ______ at night.",
        optionA: "park",
        optionB: "bed",
        optionC: "school",
        correctAnswer: "bed",
      }),
      shuffleOptions({
        question: "Birds go back to their ______ in the evening.",
        optionA: "cage",
        optionB: "nest",
        optionC: "tree",
        correctAnswer: "nest",
      }),
      shuffleOptions({
        question: "The crow flies ______ in the sky.",
        optionA: "overhead",
        optionB: "underground",
        optionC: "outside",
        correctAnswer: "overhead",
      }),
      shuffleOptions({
        question: "We must be ______ every day.",
        optionA: "angry",
        optionB: "lazy",
        optionC: "regular",
        correctAnswer: "regular",
      }),
      shuffleOptions({
        question: "The sun rises in the ______.",
        optionA: "morning",
        optionB: "evening",
        optionC: "night",
        correctAnswer: "morning",
      }),
      shuffleOptions({
        question: "'Caw, caw' is the sound of a ______.",
        optionA: "parrot",
        optionB: "crow",
        optionC: "sparrow",
        correctAnswer: "crow",
      }),
      shuffleOptions({
        question: "Some animals ______ during winter.",
        optionA: "fly",
        optionB: "hibernate",
        optionC: "play",
        correctAnswer: "hibernate",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "It rains in the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crow barks at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We go to bed in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon shines in the night sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The birds shout at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "It is good to sleep late at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The crow flies overhead in the evening.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The national animal is the lion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;