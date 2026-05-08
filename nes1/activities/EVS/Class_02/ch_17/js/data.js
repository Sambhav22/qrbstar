export const chapter = "Chapter - 17: Weather and Seasons ";
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
          question: "What is weather?",
          optionA: "The state of atmosphere at a particular place and time",
          optionB: "The condition of the ocean",
          optionC: "The temperature of the Earth",
          correctAnswer:
            "The state of atmosphere at a particular place and time",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT a weather condition mentioned in the text?",
          optionA: "Foggy",
          optionB: "Snowy",
          optionC: "Hilly",
          correctAnswer: "Hilly",
         }),
      shuffleOptions({
          question:
            "How many seasons do we experience in a year, according to the text?",
          optionA: "Three",
          optionB: "Four",
          optionC: "Five",
          correctAnswer: "Five",
         }),
      shuffleOptions({
          question: "What is described as the weather in summer?",
          optionA: "Cold and chilly",
          optionB: "Warm and hot",
          optionC: "Humid and moist",
          correctAnswer: "Warm and hot",
         }),
      shuffleOptions({
          question:
            "What activities are mentioned as enjoyable during the spring season?",
          optionA: "Skiing and snowboarding",
          optionB: "Riding cycles and flying kites",
          optionC: "Building snowmen",
          correctAnswer: "Riding cycles and flying kites",
         }),
      shuffleOptions({
          question:
            "Which season is characterized by the shedding of leaves by trees?",
          optionA: "Summer",
          optionB: "Autumn",
          optionC: "Winter",
          correctAnswer: "Autumn",
         }),
      shuffleOptions({
          question: "What type of weather is associated with the rainy season?",
          optionA: "Cold and dry",
          optionB: "Warm and dry",
          optionC: "Humid and moist",
          correctAnswer: "Humid and moist",
         }),
      shuffleOptions({
          question: "What does the season wheel represent?",
          optionA: "Types of fruits",
          optionB: "Types of weather conditions",
          optionC: "Types of animals",
          correctAnswer: "Types of weather conditions",
         }),
      shuffleOptions({
          question: "How is the weather described in winter?",
          optionA: "Warm and hot",
          optionB: "Cold and chilly",
          optionC: "Humid and moist",
          correctAnswer: "Cold and chilly",
         }),
      shuffleOptions({
          question: "During which season do trees shed their leaves?",
          optionA: "Spring",
          optionB: "Summer",
          optionC: "Autumn",
          correctAnswer: "Autumn",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "We experience ________ seasons in a year",
          optionA: "Cold",
          optionB: "Five",
          optionC: "Autumn",
          correctAnswer: "Five",
         }),
      shuffleOptions({
          question: "In winter, the weather is _________",
          optionA: "Cold",
          optionB: "Autumn",
          optionC: "Rainfall",
          correctAnswer: "Cold",
         }),
      shuffleOptions({
          question:
            "In _________ the earth experiences less amount of sunlight",
          optionA: "Cold",
          optionB: "Autumn",
          optionC: "Rainfall",
          correctAnswer: "Autumn",
         }),
      shuffleOptions({
          question: "We experience ________ in rainy season",
          optionA: "Rainfall",
          optionB: "Cold",
          optionC: "Autumn",
          correctAnswer: "Rainfall",
         }),
      shuffleOptions({
          question:
            "In spring season, the weather remains very _________. Most flowers bloom, and everything looks beautiful.",
          optionA: "Hot",
          optionB: "Pleasant",
          optionC: "Humid",
          correctAnswer: "Pleasant",
         }),
      shuffleOptions({
          question:
            "In _________, the weather is warmer, and we feel hot throughout the day.",
          optionA: "Autumn",
          optionB: "Summer",
          optionC: "Rainy",
          correctAnswer: "Summer",
         }),
      shuffleOptions({
          question:
            "The state of the atmosphere at a particular place and time is known as _________.",
          optionA: "Climate",
          optionB: "Season",
          optionC: "Weather",
          correctAnswer: "Weather",
         }),
      shuffleOptions({
          question: "In summer, we feel ________ throughout the day.",
          optionA: "Cold",
          optionB: "Hot",
          optionC: "Rainy",
          correctAnswer: "Hot",
         }),
      shuffleOptions({
          question:
            "During autumn, the weather is neither so hot ________ so cold.",
          optionA: "Nor",
          optionB: "And",
          optionC: "Or",
          correctAnswer: "Nor",
         }),
      shuffleOptions({
          question: "The season wheel tells us about the types of ________.",
          optionA: "Animals",
          optionB: "Weather conditions",
          optionC: "Fruits",
          correctAnswer: "Weather conditions",
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
            "The state of the atmosphere at a particular place and time is known as weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Trees shed their leaves in the summer season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rainy season is characterized by dry and sunny weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "We experience five seasons in a year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "In winter, the weather is hot throughout the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The season wheel includes autumn as one of the seasons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "In spring season, flowers bloom, and everything looks beautiful.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Humid and moist weather is associated with the winter season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Autumn is characterized by neither hot nor cold weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The season wheel represents types of animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
