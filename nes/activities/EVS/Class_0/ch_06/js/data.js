export const chapter = "Chapter - 6: Food ";
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
          question: "What is the farmer busy growing in the picture?",
          optionA: "Fruits and vegetables",
          optionB: "Food grains and spices",
          optionC: "Pulses and vegetables",
          correctAnswer: "b) Food grains and spices",
         }),
      shuffleOptions({
          question: "Why is food important according to the text?",
          optionA: "To grow",
          optionB: "To work and play",
          optionC: "Both a and b",
          correctAnswer: "c) Both a and b",
         }),
      shuffleOptions({
          question: "What does the text suggest about the consumption of food?",
          optionA: "Make food in excess",
          optionB: "Take food according to your diet",
          optionC: "Throw food anywhere",
          correctAnswer: "b) Take food according to your diet",
         }),
      shuffleOptions({
          question:
            "What does the text advise regarding food storage in the fridge?",
          optionA: "Store food for 3-4 days",
          optionB: "Do not store food",
          optionC: "Store food in excess",
          correctAnswer: "b) Do not store food for 3-4 days in the fridge",
         }),
      shuffleOptions({
          question:
            "What are the three main things the farmer grows, as mentioned in the text?",
          optionA: "Fruits, vegetables, and spices",
          optionB: "Vegetables, food grains, and pulses",
          optionC: "Fruits, food grains, and spices",
          correctAnswer: "c) Fruits, food grains, and spices",
         }),
      shuffleOptions({
          question:
            "According to the text, what is one way to help in growing?",
          optionA: "Eat less",
          optionB: "Consume more food",
          optionC: "Consume food according to your diet",
          correctAnswer: "c) Consume food according to your diet",
         }),
      shuffleOptions({
          question:
            "What should we avoid doing with food, as mentioned in the text?",
          optionA: "Store it for 3-4 days in the fridge",
          optionB: "Make it in excess",
          optionC: "Both a and b",
          correctAnswer: "c) Both a and b",
         }),
      shuffleOptions({
          question:
            "What is the primary purpose of the farmer's work, as per the text?",
          optionA: "To play",
          optionB: "To grow food for us",
          optionC: "To store food",
          correctAnswer: "b) To grow food for us",
         }),
      shuffleOptions({
          question: "Why does the text advise not to throw food anywhere?",
          optionA: "To avoid littering",
          optionB: "To save money",
          optionC: "To keep the fridge clean",
          correctAnswer: "a) To avoid littering",
         }),
      shuffleOptions({
          question: "What is the text emphasizing in relation to food waste?",
          optionA: "Make food in excess",
          optionB: "Do not throw food anywhere",
          optionC: "Store food for a week in the fridge",
          correctAnswer: "b) Do not throw food anywhere",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The farmer in the picture is busy growing _______ for us.",
          optionA: "Toys",
          optionB: "Food",
          optionC: "Cars",
          correctAnswer: "b) Food",
         }),
      shuffleOptions({
          question: "Food is very important. It helps us to _______.",
          optionA: "Swim",
          optionB: "Work and play",
          optionC: "Fly",
          correctAnswer: "b) Work and play",
         }),
      shuffleOptions({
          question:
            "According to the text, we should not make food in _______.",
          optionA: "Abundance",
          optionB: "Excess",
          optionC: "Deficiency",
          correctAnswer: "b) Excess",
         }),
      shuffleOptions({
          question:
            "To prevent food wastage, we should take food according to our _______.",
          optionA: "Horoscope",
          optionB: "Diet",
          optionC: "Favorite color",
          correctAnswer: "b) Diet",
         }),
      shuffleOptions({
          question: "The text advises us not to throw _______.",
          optionA: "Parties",
          optionB: "Food",
          optionC: "Books",
          correctAnswer: "b) Food",
         }),
      shuffleOptions({
          question:
            "How long should we avoid storing food in the fridge, according to the text?",
          optionA: "1-2 days",
          optionB: "3-4 days",
          optionC: "5-6 days",
          correctAnswer: "b) 3-4 days",
         }),
      shuffleOptions({
          question:
            "The farmer in the picture grows various types of food, including fruits, vegetables, food grains, spices, and _______.",
          optionA: "Rocks",
          optionB: "Water",
          optionC: "Pulses",
          correctAnswer: "c) Pulses",
         }),
      shuffleOptions({
          question:
            "The text emphasizes that food is important for us to _______.",
          optionA: "Sleep",
          optionB: "Dance",
          optionC: "Grow",
          correctAnswer: "c) Grow",
         }),
      shuffleOptions({
          question:
            "According to the text, we should not store food for 3-4 days in the _______.",
          optionA: "Closet",
          optionB: "Refrigerator",
          optionC: "Garden",
          correctAnswer: "b) Refrigerator",
         }),
      shuffleOptions({
          question:
            "The main occupation of the person in the picture is _______.",
          optionA: "Singing",
          optionB: "Farming",
          optionC: "Painting",
          correctAnswer: "b) Farming",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The farmer in the picture is growing food for us.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Food is not important for our growth and well-being.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "According to the text, we should make food in excess.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Taking food according to our diet is recommended to prevent wastage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Throwing food anywhere is acceptable behavior.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Storing food for 3-4 days in the fridge is advisable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The farmer in the picture grows rocks and water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Food is not essential for our growth but only for sleeping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "According to the text, storing food in the garden is recommended.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The main occupation of the person in the picture is singing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
