export const chapter = "Chapter - 1: Plant More Trees ";
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
          question: "What do trees provide us with?",
          optionA: "Food, water, and shelter",
          optionB: "Food, oxygen, paper, and wood",
          optionC: "Rocks, metals, and electricity",
          correctAnswer: "Food, oxygen, paper, and wood",
         }),
      shuffleOptions({
          question:
            "What is Ramu Kaka doing to make the school garden look green?",
          optionA: "Painting the plants",
          optionB: "Planting more and more trees",
          optionC: "Removing plants from the garden",
          correctAnswer: "Planting more and more trees",
         }),
      shuffleOptions({
          question: "What are small-sized plants with green stems called?",
          optionA: "Trees",
          optionB: "Shrubs",
          optionC: "Herbs",
          correctAnswer: "Herbs",
         }),
      shuffleOptions({
          question: "What should we avoid doing to care for the garden?",
          optionA: "Watering the plants too much",
          optionB:
            "Walking on grass harshly, plucking leaves or flowers, and scratching tree trunks",
          optionC: "Building structures in the garden",
          correctAnswer:
            "Walking on grass harshly, plucking leaves or flowers, and scratching tree trunks",
         }),
      shuffleOptions({
          question: "What is the term used for big and strong plants?",
          optionA: "Shrubs",
          optionB: "Herbs",
          optionC: "Trees",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question:
            "Which of the following is not mentioned as something trees give us?",
          optionA: "Oxygen",
          optionB: "Medicine",
          optionC: "Plastic",
          correctAnswer: "Plastic",
         }),
      shuffleOptions({
          question: "What do small-sized plants with woody stems called?",
          optionA: "Trees",
          optionB: "Shrubs",
          optionC: "Herbs",
          correctAnswer: "Shrubs",
         }),
      shuffleOptions({
          question:
            "Why is it important not to scratch on tree trunks according to the text?",
          optionA: "It damages the tree's outer layer",
          optionB: "It helps the tree grow faster",
          optionC: "It makes the trunk more colorful",
          correctAnswer: "It damages the tree's outer layer",
         }),
      shuffleOptions({
          question:
            "What does the text mention as an activity that should not be done to care for the garden?",
          optionA: "Singing loudly near the plants",
          optionB: "Plucking leaves or flowers",
          optionC: "Watering the plants too much",
          correctAnswer: "Plucking leaves or flowers",
         }),
      shuffleOptions({
          question:
            "What are the small and big plants in the garden called, respectively?",
          optionA: "Shrubs and trees",
          optionB: "Trees and herbs",
          optionC: "Shrubs and herbs",
          correctAnswer: "Shrubs and trees",
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
            "Trees provide us with _________, oxygen, paper, medicines, wood for furniture, and shelter to birds and animals.",
          optionA: "Water",
          optionB: "Food",
          optionC: "Rocks",
          correctAnswer: "Food",
         }),
      shuffleOptions({
          question:
            "To make the school garden look green, Ramu Kaka is planting more and more _________.",
          optionA: "Flowers",
          optionB: "Shrubs",
          optionC: "Trees",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question: "Big and strong plants are called _________.",
          optionA: "Herbs",
          optionB: "Trees",
          optionC: "Shrubs",
          correctAnswer: "Trees",
         }),
      shuffleOptions({
          question: "Small-sized plants with woody stems are called _________.",
          optionA: "Trees",
          optionB: "Shrubs",
          optionC: "Herbs",
          correctAnswer: "Shrubs",
         }),
      shuffleOptions({
          question:
            "Very small-sized plants with green stems are called _________.",
          optionA: "Shrubs",
          optionB: "Herbs",
          optionC: "Trees",
          correctAnswer: "Herbs",
         }),
      shuffleOptions({
          question:
            "To care for the garden, one should not walk on grass _________.",
          optionA: "Softly",
          optionB: "Harshly",
          optionC: "Barefoot",
          correctAnswer: "Harshly",
         }),
      shuffleOptions({
          question:
            "Ramu Kaka is planting more and more trees to make the school garden look _________.",
          optionA: "Blue",
          optionB: "Green",
          optionC: "Red",
          correctAnswer: "Green",
         }),
      shuffleOptions({
          question: "Small-sized plants with ________ stems are called shrubs.",
          optionA: "Green",
          optionB: "Woody",
          optionC: "Strong",
          correctAnswer: "Woody",
         }),
      shuffleOptions({
          question:
            "Don't pluck leaves or flowers to care for the garden and avoid ________ the tree trunks.",
          optionA: "Scratching",
          optionB: "Painting",
          optionC: "Climbing",
          correctAnswer: "Scratching",
         }),
      shuffleOptions({
          question: "Trees give shelter to ________ and animals.",
          optionA: "Insects",
          optionB: "Birds",
          optionC: "Fish",
          correctAnswer: "Birds",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Very small-sized plants with woody stems are called herbs",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Big and strong plants are called shrubs",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Trees give us fruits",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Trees provide us with oxygen",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Shrubs have very small stems",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Plants do not require sunlight for photosynthesis",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Herbs are big and strong plants",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Trees give shelter to birds and animals",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Walking on grass harshly helps in the growth of plants",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Plucking leaves or flowers is beneficial for the garden",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
