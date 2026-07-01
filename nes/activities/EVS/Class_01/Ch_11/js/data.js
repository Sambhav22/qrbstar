export const chapter = "Chapter - 11: Water ";
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
          question: "What is the main source of water mentioned in the text?",
          optionA: "River",
          optionB: "Well",
          optionC: "Rain",
          correctAnswer: "Rain",
         }),
      shuffleOptions({
          question:
            "What are the basic needs for which humans, plants, and animals require water?",
          optionA: "Bathing and cooking",
          optionB: "Drinking, bathing, and cooking",
          optionC:
            "Drinking, bathing, cooking, washing, cleaning, and recreation",
          correctAnswer:
            "Drinking, bathing, cooking, washing, cleaning, and recreation",
         }),
      shuffleOptions({
          question:
            "Where do we get most of our water from, according to the text?",
          optionA: "River",
          optionB: "Well",
          optionC: "Rain",
          correctAnswer: "Rain",
         }),
      shuffleOptions({
          question:
            "Apart from rain, what are the other sources of water mentioned in the text?",
          optionA: "River, well, pond, tap",
          optionB: "Lake, ocean, pond, tap",
          optionC: "River, lake, ocean, well",
          correctAnswer: "River, well, pond, tap",
         }),
      shuffleOptions({
          question: "What is NOT mentioned as a use of water in the text?",
          optionA: "Cooking",
          optionB: "Recreation",
          optionC: "Building",
          correctAnswer: "Building",
         }),
      shuffleOptions({
          question:
            "What does the text suggest about the importance of water for living organisms?",
          optionA: "Only humans need water to live",
          optionB: "Humans, plants, and animals all need water to live",
          optionC: "Only plants need water to live",
          correctAnswer: "Humans, plants, and animals all need water to live",
         }),
      shuffleOptions({
          question:
            "What activity related to water is mentioned with the phrase 'enjoying in the rain'?",
          optionA: "Bathing",
          optionB: "Drinking",
          optionC: "Recreation",
          correctAnswer: "Recreation",
         }),
      shuffleOptions({
          question: "According to the text, what are some uses of water?",
          optionA: "Drinking, cooking, washing",
          optionB: "Drinking, bathing, cooking, washing, cleaning, recreation",
          optionC: "Bathing, cleaning, recreation",
          correctAnswer:
            "Drinking, bathing, cooking, washing, cleaning, recreation",
         }),
      shuffleOptions({
          question:
            "Which of the following is mentioned as a secondary source of water in the text?",
          optionA: "River",
          optionB: "Well",
          optionC: "Tap",
          correctAnswer: "Tap",
         }),
      shuffleOptions({
          question:
            "What is described as the basic need in the first sentence of the text?",
          optionA: "Air",
          optionB: "Food",
          optionC: "Water",
          correctAnswer: "Water",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Water is our __________ need. We need water to live.",
          optionA: "Essential",
          optionB: "Basic",
          optionC: "Luxurious",
          correctAnswer: "Basic",
         }),
      shuffleOptions({
          question: "Humans, plants, and animals all need water to __________.",
          optionA: "Survive",
          optionB: "Thrive",
          optionC: "Hibernate",
          correctAnswer: "Survive",
         }),
      shuffleOptions({
          question:
            "We use water for drinking, bathing, cooking, washing, cleaning, and __________.",
          optionA: "Transportation",
          optionB: "Recreation",
          optionC: "Meditation",
          correctAnswer: "Recreation",
         }),
      shuffleOptions({
          question:
            "Rain is the __________ source of water. We get most of the water from it.",
          optionA: "Secondary",
          optionB: "Tertiary",
          optionC: "Main",
          correctAnswer: "Main",
         }),
      shuffleOptions({
          question:
            "Apart from rain, we get water from river, well, pond, and __________.",
          optionA: "Ocean",
          optionB: "Lake",
          optionC: "Tap",
          correctAnswer: "Tap",
         }),
      shuffleOptions({
          question:
            "Let's move and take a look at children __________ in the rain.",
          optionA: "Swimming",
          optionB: "Playing",
          optionC: "Studying",
          correctAnswer: "Playing",
         }),
      shuffleOptions({
          question:
            "__________ is described as the main need in the first sentence of the text.",
          optionA: "Air",
          optionB: "Food",
          optionC: "Water",
          correctAnswer: "Water",
         }),
      shuffleOptions({
          question:
            "Rain is the primary source of __________ according to the text.",
          optionA: "Air",
          optionB: "Food",
          optionC: "Water",
          correctAnswer: "Water",
         }),
      shuffleOptions({
          question:
            "We use water for various purposes, including bathing, cooking, washing, and __________.",
          optionA: "Sleeping",
          optionB: "Cleaning",
          optionC: "Hiking",
          correctAnswer: "Cleaning",
         }),
      shuffleOptions({
          question:
            "Apart from rain, we get most of our water from __________ sources.",
          optionA: "Natural",
          optionB: "Artificial",
          optionC: "Man-made",
          correctAnswer: "Natural",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Water is our basic need.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Rain is the secondary source of water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "All living things need water to survive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "We use water for cooking, washing, and recreation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Tap is not mentioned as a source of water in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rain covers around 50% of the earth's surface.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Plants do not need water to live.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Recreation is not mentioned as a use of water in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Children are mentioned enjoying in the snow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "River is described as the main source of water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
