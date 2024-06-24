export const chapter = "Chapter - 2: Clean and Green All Around ";
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
            "What is one effective way to contribute to a clean and green environment?",
          optionA: "Increase the use of vehicles",
          optionB: "Plant more trees",
          optionC: "Litter in municipal vans",
          correctAnswer: "Plant more trees",
         }),
      shuffleOptions({
          question:
            "How can individuals help in reducing the risk of diseases like malaria, diarrhoea, and cholera in a slum area?",
          optionA: "Use more plastic",
          optionB: "Raise awareness about clean and green environments",
          optionC: "Ignore stagnant water",
          correctAnswer: "Raise awareness about clean and green environments",
         }),
      shuffleOptions({
          question:
            "Which action is NOT recommended for maintaining a clean environment?",
          optionA: "Reduce the use of vehicles",
          optionB: "Throwing household waste in municipal vans or bins",
          optionC: "Littering in public spaces",
          correctAnswer: "Littering in public spaces",
         }),
      shuffleOptions({
          question:
            "What should individuals do with stagnant water to contribute to a cleaner environment?",
          optionA: "Dispose of it",
          optionB: "Leave it as it is",
          optionC: "Use it for watering plants",
          correctAnswer: "Dispose of it",
         }),
      shuffleOptions({
          question:
            "What role does planting more trees play in maintaining a clean and green environment?",
          optionA: "Increases pollution",
          optionB: "Enhances beauty only",
          optionC: "Contributes to a healthy environment",
          correctAnswer: "Contributes to a healthy environment",
         }),
      shuffleOptions({
          question:
            "How can one properly dispose of household waste for a cleaner environment?",
          optionA: "Litter on the streets",
          optionB: "Throw it in municipal vans or bins",
          optionC: "Burn it in the backyard",
          correctAnswer: "Throw it in municipal vans or bins",
         }),
      shuffleOptions({
          question:
            "What action is suggested to check the drains and sewage system for a clean environment?",
          optionA: "Ignore them",
          optionB: "Maintain and check regularly",
          optionC: "Build more drains",
          correctAnswer: "Maintain and check regularly",
         }),
      shuffleOptions({
          question:
            "In the given context, what is the impact of a lack of cleanliness and greenery in a slum area?",
          optionA: "No impact on health",
          optionB: "Increased risk of diseases",
          optionC: "Improved living conditions",
          correctAnswer: "Increased risk of diseases",
         }),
      shuffleOptions({
          question:
            "Why is reducing the use of vehicles mentioned as a step towards a clean and green environment?",
          optionA: "Increases air pollution",
          optionB: "Saves money",
          optionC: "Enhances traffic congestion",
          correctAnswer: "Increases air pollution",
         }),
      shuffleOptions({
          question:
            "What is the primary message conveyed in the text regarding cleanliness and green surroundings?",
          optionA: "It is unnecessary for a healthy lifestyle",
          optionB: "It is crucial for disease prevention and a healthy life",
          optionC: "It is only relevant in affluent areas",
          correctAnswer:
            "It is crucial for disease prevention and a healthy life",
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
            "To keep our surroundings clean and green, we should __________ more trees.",
          optionA: "cut down",
          optionB: "plant",
          optionC: "ignore",
          correctAnswer: "plant",
         }),
      shuffleOptions({
          question:
            "__________ the use of vehicles is recommended for maintaining a clean environment.",
          optionA: "Increase",
          optionB: "Reduce",
          optionC: "Ignore",
          correctAnswer: "Reduce",
         }),
      shuffleOptions({
          question:
            "It is crucial to __________ household waste in municipal vans or bins for proper disposal.",
          optionA: "burn",
          optionB: "throw",
          optionC: "store",
          correctAnswer: "throw",
         }),
      shuffleOptions({
          question:
            "Individuals should __________ stagnant water to contribute to a cleaner environment.",
          optionA: "use",
          optionB: "dispose of",
          optionC: "ignore",
          correctAnswer: "dispose of",
         }),
      shuffleOptions({
          question:
            "Checking and maintaining the drains and sewage system is important for __________ environment.",
          optionA: "polluting",
          optionB: "clean",
          optionC: "overcrowded",
          correctAnswer: "clean",
         }),
      shuffleOptions({
          question:
            "In a slum area, lack of cleanliness and greenery increases the risk of diseases like malaria, diarrhoea, and __________.",
          optionA: "flu",
          optionB: "cholera",
          optionC: "allergies",
          correctAnswer: "cholera",
         }),
      shuffleOptions({
          question:
            "To contribute to a healthier lifestyle, individuals should raise awareness about __________ environments.",
          optionA: "dirty and polluted",
          optionB: "clean and green",
          optionC: "noisy and crowded",
          correctAnswer: "clean and green",
         }),
      shuffleOptions({
          question:
            "__________ more trees is mentioned as a way to enhance the beauty of the surroundings.",
          optionA: "Cutting down",
          optionB: "Ignoring",
          optionC: "Planting",
          correctAnswer: "Planting",
         }),
      shuffleOptions({
          question:
            "Reducing the use of vehicles is suggested to prevent the increase of __________ in the air.",
          optionA: "dust",
          optionB: "pollution",
          optionC: "freshness",
          correctAnswer: "pollution",
         }),
      shuffleOptions({
          question:
            "The primary message conveyed in the text is that cleanliness and green surroundings are __________ for disease prevention and a healthy life.",
          optionA: "unnecessary",
          optionB: "only relevant in affluent areas",
          optionC: "crucial",
          correctAnswer: "crucial",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Clean and green surroundings keep us fit and healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Planting more trees is not recommended for maintaining a clean environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Reducing the use of vehicles is suggested for a cleaner environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Throwing household waste in municipal vans or bins is a proper disposal method.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Ignoring stagnant water contributes to a cleaner environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Checking and maintaining drains and the sewage system is unnecessary for a clean environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Lack of cleanliness and greenery in a slum area increases the risk of diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Using more plastic is recommended for a healthier lifestyle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Planting more trees enhances the beauty of the surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The primary message conveyed in the text is that cleanliness and green surroundings are unnecessary for a healthy life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
