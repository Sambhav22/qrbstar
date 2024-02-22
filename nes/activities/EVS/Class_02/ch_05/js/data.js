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
          question: "What are the two main sources from which we get our food?",
          optionA: "Plants and Fungi",
          optionB: "Plants and Animals",
          optionC: "Animals and Bacteria",
          correctAnswer: "Plants and Animals",
         }),
      shuffleOptions({
          question: "Which of the following is considered a plant product?",
          optionA: "Milk",
          optionB: "Eggs",
          optionC: "Pulses",
          correctAnswer: "Pulses",
         }),
      shuffleOptions({
          question:
            "What are pulses, cereals, vegetables, and fruits collectively referred to as?",
          optionA: "Animal Products",
          optionB: "Plant Products",
          optionC: "Synthetic Products",
          correctAnswer: "Plant Products",
         }),
      shuffleOptions({
          question: "Which category of food provides energy to the body?",
          optionA: "Protective Foods",
          optionB: "Energy Giving Foods",
          optionC: "Body Building Foods",
          correctAnswer: "Energy Giving Foods",
         }),
      shuffleOptions({
          question: "What are milk, eggs, and meat considered as?",
          optionA: "Protective Foods",
          optionB: "Energy Giving Foods",
          optionC: "Animal Products",
          correctAnswer: "Animal Products",
         }),
      shuffleOptions({
          question: "In Kavya's thali, which three kinds of foods are present?",
          optionA: "Desserts, Snacks, and Beverages",
          optionB: "Protective, Energy Giving, and Body Building Foods",
          optionC: "Spices, Condiments, and Sauces",
          correctAnswer: "Protective, Energy Giving, and Body Building Foods",
         }),
      shuffleOptions({
          question: "According to the text, why should we take a proper diet?",
          optionA: "To gain weight",
          optionB: "To be healthy",
          optionC: "To build muscles",
          correctAnswer: "To be healthy",
         }),
      shuffleOptions({
          question:
            "How many times a day does the text suggest we should have food?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Thrice",
          correctAnswer: "Thrice",
         }),
      shuffleOptions({
          question: "When is breakfast recommended according to the text?",
          optionA: "Noon",
          optionB: "Night",
          optionC: "Morning",
          correctAnswer: "Morning",
         }),
      shuffleOptions({
          question:
            "What does the thali of Kavya contain that is helpful in strengthening the body and protecting from illness?",
          optionA: "Only Body Building Foods",
          optionB: "Only Energy Giving Foods",
          optionC: "Protective, Energy Giving, and Body Building Foods",
          correctAnswer: "Protective, Energy Giving, and Body Building Foods",
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
            "Food is our _________ need. It is a fuel that our body needs to function.",
          optionA: "Essential",
          optionB: "Basic",
          optionC: "Luxurious",
          correctAnswer: "Basic",
         }),
      shuffleOptions({
          question:
            "Pulses, cereals, vegetables, and fruits are the products which we get from ____________.",
          optionA: "Animals",
          optionB: "Plants",
          optionC: "Fungi",
          correctAnswer: "Plants",
         }),
      shuffleOptions({
          question:
            "Milk, eggs, and meat are the products which we get from ____________.",
          optionA: "Fish",
          optionB: "Birds",
          optionC: "Animals",
          correctAnswer: "Animals",
         }),
      shuffleOptions({
          question:
            "In Kavya's thali, there are all three kinds of food i.e., protective, energy-giving, and body-building foods. Such food items are helpful in strengthening our body and protecting us from ____________.",
          optionA: "Laziness",
          optionB: "Illness",
          optionC: "Stress",
          correctAnswer: "Illness",
         }),
      shuffleOptions({
          question: "To be healthy, we should take a proper ____________.",
          optionA: "Exercise",
          optionB: "Sleep",
          optionC: "Diet",
          correctAnswer: "Diet",
         }),
      shuffleOptions({
          question: "We should take food ____________ times in a day.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
         }),
      shuffleOptions({
          question: "Breakfast should be taken in ____________.",
          optionA: "The Evening",
          optionB: "The Morning",
          optionC: "The Night",
          correctAnswer: "The Morning",
         }),
      shuffleOptions({
          question: "Lunch should be taken in ____________.",
          optionA: "The Noon",
          optionB: "The Evening",
          optionC: "The Morning",
          correctAnswer: "The Noon",
         }),
      shuffleOptions({
          question: "Dinner should be taken at ____________.",
          optionA: "The Morning",
          optionB: "The Noon",
          optionC: "Night",
          correctAnswer: "Night",
         }),
      shuffleOptions({
          question:
            "In Kavya's thali, there are all three kinds of food i.e., protective, energy-giving, and body-building foods. These food items are helpful in strengthening our body and protect us from ____________.",
          optionA: "Happiness",
          optionB: "Sickness",
          optionC: "Excitement",
          correctAnswer: "Sickness",
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
            "Plants, animals, pulses, cereals, vegetables, and fruits are sources of food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Milk, eggs, and meat are examples of plant products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Kavya's thali contains only energy-giving foods.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Taking a proper diet helps in protecting the body from illness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "We should have food four times a day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Breakfast should be taken in the evening.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Lunch should be taken in the morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Dinner should be taken at night.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Protective, energy-giving, and body-building foods are essential for a healthy diet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Taking a proper diet helps in gaining weight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
