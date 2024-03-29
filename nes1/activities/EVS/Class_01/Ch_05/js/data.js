export const chapter = "Chapter - 5: Our Basic Needs ";
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
          question: "What are the basic needs essential for human survival?",
          optionA: "Car/ornaments/AC",
          optionB: "Food/clothes/shelter",
          optionC: "Computer/refrigerator/furniture",
          correctAnswer: "Food/clothes/shelter",
 }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a basic need for human survival?",
          optionA: "Water",
          optionB: "Sunlight",
          optionC: "Car",
          correctAnswer: "Car",
 }),
      shuffleOptions({
          question:
            "What are the additional materialistic things mentioned that make human life easy and comfortable?",
          optionA: "Air/water/sunlight",
          optionB: "Computer/refrigerator/furniture",
          optionC: "Food/clothes/shelter",
          correctAnswer: "Computer/refrigerator/furniture",
 }),
      shuffleOptions({
          question:
            "According to the text, what is considered an essential element for human survival?",
          optionA: "Car",
          optionB: "Air",
          optionC: "Ornaments",
          correctAnswer: "Air",
 }),
      shuffleOptions({
          question:
            "Which of the following is not listed as a basic need for survival?",
          optionA: "Sunlight",
          optionB: "Computer",
          optionC: "Water",
          correctAnswer: "Computer",
 }),
      shuffleOptions({
          question:
            "What are the elements that, together, make human life easy and comfortable?",
          optionA: "Food/clothes/shelter",
          optionB: "Car/ornaments/AC",
          optionC: "Computer/refrigerator/furniture",
          correctAnswer: "Computer/refrigerator/furniture",
 }),
      shuffleOptions({
          question:
            "Among the additional materialistic things, what is mentioned as a source of light and warmth?",
          optionA: "Water",
          optionB: "Sunlight",
          optionC: "Refrigerator",
          correctAnswer: "Sunlight",
 }),
      shuffleOptions({
          question:
            "Which of the following is not explicitly mentioned in the text as a basic need?",
          optionA: "Clothes",
          optionB: "Furniture",
          optionC: "Car",
          correctAnswer: "Car",
 }),
      shuffleOptions({
          question:
            "What is described as something humans need apart from the basic needs for survival?",
          optionA: "Air",
          optionB: "Computer",
          optionC: "Ornaments",
          correctAnswer: "Ornaments",
 }),
      shuffleOptions({
          question:
            "What is NOT listed as a basic need for survival in the text?",
          optionA: "Water",
          optionB: "Computer",
          optionC: "Food",
          correctAnswer: "Computer",
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
            "We need certain things to survive. These things are known as our basic ________. Without them, we cannot survive or live.",
          optionA: "desires",
          optionB: "luxuries",
          optionC: "needs",
          correctAnswer: "needs",
 }),
      shuffleOptions({
          question:
            "Let's take a look at these ________: food, clothes, shelter, air, water, sunlight.",
          optionA: "essentials",
          optionB: "luxuries",
          optionC: "distractions",
          correctAnswer: "essentials",
 }),
      shuffleOptions({
          question:
            "Apart from these, there are certain other materialistic things that humans ________. Let's take a look at them: car, ornaments, ________, computer, refrigerator, furniture.",
          optionA: "crave",
          optionB: "require",
          optionC: "discard",
          correctAnswer: "require",
 }),
      shuffleOptions({
          question:
            "Together, these additional materialistic things make human life ________ and comfortable.",
          optionA: "challenging",
          optionB: "difficult",
          optionC: "easy",
          correctAnswer: "easy",
 }),
      shuffleOptions({
          question:
            "________ are considered essential for human survival, providing a source of light and warmth.",
          optionA: "Cars",
          optionB: "Ornaments",
          optionC: "Sunlight",
          correctAnswer: "Sunlight",
 }),
      shuffleOptions({
          question:
            "Among the additional materialistic things, ________ is mentioned as a basic need for human survival.",
          optionA: "Refrigerator",
          optionB: "Water",
          optionC: "AC",
          correctAnswer: "Water",
 }),
      shuffleOptions({
          question:
            "Humans need ________ apart from the basic needs for survival.",
          optionA: "Air",
          optionB: "Desires",
          optionC: "Electronics",
          correctAnswer: "Desires",
 }),
      shuffleOptions({
          question:
            "________ is NOT listed as a basic need for survival in the text.",
          optionA: "Furniture",
          optionB: "Computer",
          optionC: "Car",
          correctAnswer: "Car",
 }),
      shuffleOptions({
          question: "We can live in ________.",
          optionA: "Water",
          optionB: "Shelter",
          optionC: "None",
          correctAnswer: "Shelter",
 }),
      shuffleOptions({
          question:
            "________ are mentioned as something humans need apart from the basic needs for survival.",
          optionA: "Cars",
          optionB: "Computers",
          optionC: "Ornaments",
          correctAnswer: "Ornaments",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "There are six basic needs for human survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Sunlight is considered essential for human survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Cars are listed as one of the basic needs for human survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Materialistic things like computer and refrigerator make human life difficult.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Water is NOT mentioned as a basic need for survival in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Desires are considered as one of the basic needs for survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Air is mentioned as an essential element for human survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Refrigerator is explicitly mentioned as a basic need for survival.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Humans can live without shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Ornaments are mentioned as something humans need apart from basic survival needs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
