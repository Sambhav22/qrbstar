export const chapter = "Chapter - 12: Air ";
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
            "What is one of the most important basic needs for living mentioned in the text?",
          optionA: "Water",
          optionB: "Air",
          optionC: "Food",
          correctAnswer: "Air",
         }),
      shuffleOptions({
          question: "According to the text, what are some of the uses of air?",
          optionA: "Cooking and swimming",
          optionB: "Breathing, burning, and pumping up balloons",
          optionC: "Sleeping and reading books",
          correctAnswer: "Breathing, burning, and pumping up balloons",
         }),
      shuffleOptions({
          question:
            "In the morning, Arya and her Grandpa are enjoying the pleasant air. What is mentioned as making the air fresh around them?",
          optionA: "Cars",
          optionB: "Trees",
          optionC: "Buildings",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question: "What is the fresh air mentioned in the text good for?",
          optionA: "Making ice cream",
          optionB: "Improving health",
          optionC: "Playing video games",
          correctAnswer: "Improving health",
         }),
      shuffleOptions({
          question:
            "Besides breathing, what other activity involving air is mentioned in the text?",
          optionA: "Dancing",
          optionB: "Singing",
          optionC: "Flying kites",
          correctAnswer: "Flying kites",
         }),
      shuffleOptions({
          question: "What is NOT mentioned as a use of air in the text?",
          optionA: "Pumping up balloons",
          optionB: "Growing of plants",
          optionC: "Cooking pizza",
          correctAnswer: "Cooking pizza",
         }),
      shuffleOptions({
          question:
            "What is Arya doing with her Grandpa in the morning according to the text?",
          optionA: "Watching TV",
          optionB: "Enjoying and feeling the air",
          optionC: "Playing video games",
          correctAnswer: "Enjoying and feeling the air",
         }),
      shuffleOptions({
          question:
            "What activity is NOT associated with the uses of air mentioned in the text?",
          optionA: "Pumping up tyres",
          optionB: "Swimming",
          optionC: "Reading books",
          correctAnswer: "Reading books",
         }),
      shuffleOptions({
          question:
            "According to the text, what makes the air fresh around Arya and her Grandpa in the morning?",
          optionA: "Flowers",
          optionB: "Trees",
          optionC: "Grass",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question:
            "What is mentioned as one of the uses of air in the context of enjoyment in the text?",
          optionA: "Playing chess",
          optionB: "Flying kites",
          optionC: "Solving puzzles",
          correctAnswer: "Flying kites",
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
            "Air is one of the most important basic needs which we require to ___________.",
          optionA: "Swim",
          optionB: "Live",
          optionC: "Sing",
          correctAnswer: "Live",
         }),
      shuffleOptions({
          question:
            "Arya and her Grandpa are enjoying the pleasant morning, feeling the air among many ___________.",
          optionA: "Rivers",
          optionB: "Trees",
          optionC: "Mountains",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question: "Trees make the air ___________.",
          optionA: "Polluted",
          optionB: "Fresh",
          optionC: "Hot",
          correctAnswer: "Fresh",
         }),
      shuffleOptions({
          question: "Fresh air is mentioned as being good for ___________.",
          optionA: "Making ice cream",
          optionB: "Improving health",
          optionC: "Playing video games",
          correctAnswer: "Improving health",
         }),
      shuffleOptions({
          question:
            "Arya and her Grandpa are enjoying and feeling the air in the ___________ morning.",
          optionA: "Sunny",
          optionB: "Pleasant",
          optionC: "Stormy",
          correctAnswer: "Pleasant",
         }),
      shuffleOptions({
          question:
            "Besides breathing, the text mentions using air for pumping up ___________.",
          optionA: "Bicycles",
          optionB: "Balloons",
          optionC: "Cars",
          correctAnswer: "Balloons",
         }),
      shuffleOptions({
          question:
            "Arya and her Grandpa are surrounded by many ___________ in the morning.",
          optionA: "Cars",
          optionB: "Birds",
          optionC: "Trees",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question: "The text mentions that trees make the air ___________.",
          optionA: "Humid",
          optionB: "Fresh",
          optionC: "Stale",
          correctAnswer: "Fresh",
         }),
      shuffleOptions({
          question:
            "Fresh air around Arya and her Grandpa is good for ___________.",
          optionA: "Making pizza",
          optionB: "Improving health",
          optionC: "Watching TV",
          correctAnswer: "Improving health",
         }),
      shuffleOptions({
          question:
            "Pumping up ___________ is NOT mentioned as a use of air in the text.",
          optionA: "Balloons",
          optionB: "Tyres",
          optionC: "Ice cream",
          correctAnswer: "Ice cream",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Air is one of the least important basic needs for living.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Arya and her Grandpa enjoy the morning air surrounded by rivers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Trees make the air polluted.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Fresh air is mentioned as harmful to health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Arya and her Grandpa enjoy the air in a stormy morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Air is only used for breathing in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Arya and her Grandpa are surrounded by mountains in the morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Trees make the air humid.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Fresh air around Arya and her Grandpa is harmful to health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Pumping up ice cream is mentioned as a use of air in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
