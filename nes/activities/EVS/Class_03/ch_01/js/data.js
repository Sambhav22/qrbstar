export const chapter = "Chapter - 1: Amazing Plants";
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
            "What is the main reason Kavya stops Diya from plucking a flower?",
          optionA: "The flower is rare",
          optionB: "Plants are living things",
          optionC: "Diya didn't like the flower",
          correctAnswer: "Plants are living things",
         }),
      shuffleOptions({
          question:
            "In which direction does the sunflower plant bloom according to Kavya?",
          optionA: "Away from the sun",
          optionB: "Towards the sun",
          optionC: "Sideways to the sun",
          correctAnswer: "Towards the sun",
         }),
      shuffleOptions({
          question: "Why did Diya decide not to harm any plant in the future?",
          optionA: "Kavya scolded her",
          optionB: "The plants were too small",
          optionC: "She realized her fault",
          correctAnswer: "She realized her fault",
         }),
      shuffleOptions({
          question: "What is the importance of plants in the environment?",
          optionA: "They absorb oxygen",
          optionB: "They release carbon dioxide",
          optionC: "They release oxygen and absorb carbon dioxide",
          correctAnswer: "They release oxygen and absorb carbon dioxide",
         }),
      shuffleOptions({
          question: "What is the characteristic feature of trees?",
          optionA: "Small size",
          optionB: "Many branches and strong trunk",
          optionC: "Soft stems",
          correctAnswer: "Many branches and strong trunk",
         }),
      shuffleOptions({
          question: "How are shrubs different from trees?",
          optionA: "Shrubs have thin stems",
          optionB: "Shrubs are smaller and have hard stems",
          optionC: "Trees have soft stems",
          correctAnswer: "Shrubs are smaller and have hard stems",
         }),
      shuffleOptions({
          question: "What is the main characteristic of herbs?",
          optionA: "Woody stems",
          optionB: "Green and soft stems",
          optionC: "Hard and thin stems",
          correctAnswer: "Green and soft stems",
         }),
      shuffleOptions({
          question:
            "Which type of plant needs support to grow and cannot stand on its own?",
          optionA: "Shrubs",
          optionB: "Herbs",
          optionC: "Climbers",
          correctAnswer: "Climbers",
         }),
      shuffleOptions({
          question:
            "What type of plant crawls along the ground and cannot stand erect?",
          optionA: "Trees",
          optionB: "Climbers",
          optionC: "Creepers",
          correctAnswer: "Creepers",
         }),
      shuffleOptions({
          question:
            "In which environments do plants like deodar, pine, and fir grow according to the text?",
          optionA: "Deserts",
          optionB: "Mountains",
          optionC: "Under the sea",
          correctAnswer: "Mountains",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "What is the main reason Kavya stops Diya from plucking a flower?",
          optionA: "The flower is rare",
          optionB: "Plants are living things",
          optionC: "Diya didn't like the flower",
          correctAnswer: "Plants are living things",
         }),
      shuffleOptions({
          question:
            "In which direction does the sunflower plant bloom according to Kavya?",
          optionA: "Away from the sun",
          optionB: "Towards the sun",
          optionC: "Sideways to the sun",
          correctAnswer: "Towards the sun",
         }),
      shuffleOptions({
          question: "Why did Diya decide not to harm any plant in the future?",
          optionA: "Kavya scolded her",
          optionB: "The plants were too small",
          optionC: "She realized her fault",
          correctAnswer: "She realized her fault",
         }),
      shuffleOptions({
          question: "What is the importance of plants in the environment?",
          optionA: "They absorb oxygen",
          optionB: "They release carbon dioxide",
          optionC: "They release oxygen and absorb carbon dioxide",
          correctAnswer: "They release oxygen and absorb carbon dioxide",
         }),
      shuffleOptions({
          question: "What is the characteristic feature of trees?",
          optionA: "Small size",
          optionB: "Many branches and strong trunk",
          optionC: "Soft stems",
          correctAnswer: "Many branches and strong trunk",
         }),
      shuffleOptions({
          question: "How are shrubs different from trees?",
          optionA: "Shrubs have thin stems",
          optionB: "Shrubs are smaller and have hard stems",
          optionC: "Trees have soft stems",
          correctAnswer: "Shrubs are smaller and have hard stems",
         }),
      shuffleOptions({
          question: "What is the main characteristic of herbs?",
          optionA: "Woody stems",
          optionB: "Green and soft stems",
          optionC: "Hard and thin stems",
          correctAnswer: "Green and soft stems",
         }),
      shuffleOptions({
          question:
            "Which type of plant needs support to grow and cannot stand on its own?",
          optionA: "Shrubs",
          optionB: "Herbs",
          optionC: "Climbers",
          correctAnswer: "Climbers",
         }),
      shuffleOptions({
          question:
            "What type of plant crawls along the ground and cannot stand erect?",
          optionA: "Trees",
          optionB: "Climbers",
          optionC: "Creepers",
          correctAnswer: "Creepers",
         }),
      shuffleOptions({
          question:
            "In which environments do plants like deodar, pine, and fir grow according to the text?",
          optionA: "Deserts",
          optionB: "Mountains",
          optionC: "Under the sea",
          correctAnswer: "Mountains",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Plants respond to air, water, and light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Shrubs have soft and green stems.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Climbers can stand on their own without any support.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Deserts receive a high amount of rainfall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Plants release oxygen into the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Creepers have strong stems and can stand erect.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Venus flytrap is a non-green plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Trees have thin branches and a weak trunk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Herbs are generally smaller than shrubs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Plants need sunlight, water, and soil for their growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
