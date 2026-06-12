export const chapter = "Chapter - 7: Food We Eat ";
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
            "What is the primary purpose of food mentioned in the text?",
          optionA: "Entertainment",
          optionB: "Providing energy",
          optionC: "Enhancing sleep",
          correctAnswer: "Providing energy",
         }),
      shuffleOptions({
          question:
            "Where do we get fruits, vegetables, cereals, and pulses from?",
          optionA: "Animals",
          optionB: "Air",
          optionC: "Plants",
          correctAnswer: "Plants",
         }),
      shuffleOptions({
          question: "What do we obtain from animals according to the text?",
          optionA: "Fruits",
          optionB: "Vegetables",
          optionC: "Eggs, milk, and flesh",
          correctAnswer: "Eggs, milk, and flesh",
         }),
      shuffleOptions({
          question:
            "What is emphasized as essential for staying healthy in the text?",
          optionA: "Eating only one type of food",
          optionB: "Eating a variety of foods",
          optionC: "Consuming food at irregular times",
          correctAnswer: "Eating a variety of foods",
         }),
      shuffleOptions({
          question:
            "How many times a day does the text mention meals are taken?",
          optionA: "Four times",
          optionB: "Two times",
          optionC: "Three times",
          correctAnswer: "Three times",
         }),
      shuffleOptions({
          question: "When do we take lunch according to the text?",
          optionA: "Evening",
          optionB: "Noon",
          optionC: "Morning",
          correctAnswer: "Noon",
         }),
      shuffleOptions({
          question:
            "Which of the following is not mentioned as a type of food obtained from plants?",
          optionA: "Fruits",
          optionB: "Vegetables",
          optionC: "Eggs",
          correctAnswer: "Eggs",
         }),
      shuffleOptions({
          question:
            "What role does food play in relation to growth, according to the text?",
          optionA: "Hindrance to growth",
          optionB: "No impact on growth",
          optionC: "Essential for growth",
          correctAnswer: "Essential for growth",
         }),
      shuffleOptions({
          question: "What are the three main meal times mentioned in the text?",
          optionA: "Breakfast, lunch, and supper",
          optionB: "Brunch, lunch, and dinner",
          optionC: "Breakfast, lunch, and dinner",
          correctAnswer: "Breakfast, lunch, and dinner",
         }),
      shuffleOptions({
          question: "Which meal is associated with the morning in the text?",
          optionA: "Lunch",
          optionB: "Dinner",
          optionC: "Breakfast",
          correctAnswer: "Breakfast",
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
            "Food is one of our ____________ needs. It gives us energy to do work.",
          optionA: "Essential",
          optionB: "Optional",
          optionC: "Recreational",
          correctAnswer: "Essential",
         }),
      shuffleOptions({
          question:
            "Without ____________, we cannot live and grow. We get food from plants and animals.",
          optionA: "Water",
          optionB: "Air",
          optionC: "Food",
          correctAnswer: "Food",
         }),
      shuffleOptions({
          question:
            "We get ____________ from the plants, including fruits, vegetables, cereals, and pulses.",
          optionA: "Energy",
          optionB: "Nutrients",
          optionC: "Food",
          correctAnswer: "Food",
         }),
      shuffleOptions({
          question: "We get eggs, milk, and flesh from ____________.",
          optionA: "Birds",
          optionB: "Animals",
          optionC: "Insects",
          correctAnswer: "Animals",
         }),
      shuffleOptions({
          question:
            "Different types of foods help us to stay healthy and build a strong ____________.",
          optionA: "Heart",
          optionB: "Mind",
          optionC: "Body",
          correctAnswer: "Body",
         }),
      shuffleOptions({
          question: "So, we should eat a ____________ of foods.",
          optionA: "Limited",
          optionB: "Specific",
          optionC: "Variety",
          correctAnswer: "Variety",
         }),
      shuffleOptions({
          question:
            "We take meals at three different ____________. In the morning, we take breakfast.",
          optionA: "Days",
          optionB: "Places",
          optionC: "Times",
          correctAnswer: "Times",
         }),
      shuffleOptions({
          question: "At ____________, we take lunch.",
          optionA: "Morning",
          optionB: "Noon",
          optionC: "Night",
          correctAnswer: "Noon",
         }),
      shuffleOptions({
          question: "At night, we take ____________.",
          optionA: "Snacks",
          optionB: "Lunch",
          optionC: "Dinner",
          correctAnswer: "Dinner",
         }),
      shuffleOptions({
          question:
            "The three main meal times mentioned in the text are ____________, lunch, and dinner.",
          optionA: "Breakfast",
          optionB: "Brunch",
          optionC: "Supper",
          correctAnswer: "Breakfast",
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
            "Food is one of our basic needs. It gives us energy to do work.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "We get cereals and pulses from animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Different types of foods can help us build a strong body and stay healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "We should eat only one type of food for optimal health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "We take meals at four different times in a day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Lunch is typically taken in the morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Eggs, milk, and flesh are obtained from plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Eating a variety of foods is not important for staying healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Without food, we cannot live and grow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Supper is another term for dinner.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
