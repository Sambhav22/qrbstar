export const chapter = "Chapter - 9: Story Of Food";
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
          question: "What did people eat millions of years ago?",
          optionA: "Cooked vegetables",
          optionB: "Raw flesh of animals",
          optionC: "Processed food",
          correctAnswer: "Raw flesh of animals",
         }),
      shuffleOptions({
          question: "When did civilization occur, leading to farming for food?",
          optionA: "Millions of years ago",
          optionB: "In recent times",
          optionC: "After the discovery of fire",
          correctAnswer: "In recent times",
         }),
      shuffleOptions({
          question:
            "What is the primary purpose of food preservation and techniques?",
          optionA: "Enhance flavor",
          optionB: "Increase nutritional content",
          optionC: "Prolong shelf life",
          correctAnswer: "Prolong shelf life",
         }),
      shuffleOptions({
          question: "What does food provide for our body?",
          optionA: "Entertainment",
          optionB: "Energy and nutrients",
          optionC: "Medicinal benefits",
          correctAnswer: "Energy and nutrients",
         }),
      shuffleOptions({
          question:
            "Which nutrient is essential for the speedy growth of kids?",
          optionA: "Carbohydrates",
          optionB: "Fats",
          optionC: "Protein",
          correctAnswer: "Protein",
         }),
      shuffleOptions({
          question: "What is the purpose of carbohydrates in our diet?",
          optionA: "Promote growth",
          optionB: "Provide warmth and energy",
          optionC: "Build muscles",
          correctAnswer: "Provide warmth and energy",
         }),
      shuffleOptions({
          question: "Which food items are rich in vitamins and minerals?",
          optionA: "Ghee and potato",
          optionB: "Rice and wheat",
          optionC: "Fruits and vegetables",
          correctAnswer: "Fruits and vegetables",
         }),
      shuffleOptions({
          question:
            "What is a complete food for a 3-month-old baby according to the text?",
          optionA: "Mashed banana",
          optionB: "Semi-solid food",
          optionC: "Milk",
          correctAnswer: "Milk",
         }),
      shuffleOptions({
          question:
            "Why does Ananya's father need a diet with proteins, fats, minerals, and roughage?",
          optionA: "To lose weight",
          optionB: "To build muscles",
          optionC: "To gain energy for work",
          correctAnswer: "To gain energy for work",
         }),
      shuffleOptions({
          question: "Where do we get honey and ghee from?",
          optionA: "Plants",
          optionB: "Animals",
          optionC: "Both plants and animals",
          correctAnswer: "Animals",
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
            "People of millions of years ago ate the ________ of animals.",
          optionA: "Cooked vegetables",
          optionB: "Raw flesh",
          optionC: "Processed food",
          correctAnswer: "Raw flesh",
         }),
      shuffleOptions({
          question: "Civilization led to the cultivation of food on ________.",
          optionA: "Mountains",
          optionB: "Farms",
          optionC: "Deserts",
          correctAnswer: "Farms",
         }),
      shuffleOptions({
          question:
            "Food is essential for our body as it provides us with ________ and keeps us healthy and fit.",
          optionA: "Entertainment",
          optionB: "Energy",
          optionC: "Medicinal benefits",
          correctAnswer: "Energy",
         }),
      shuffleOptions({
          question:
            "One of the important nutrients for the speedy growth of kids is ________.",
          optionA: "Carbohydrates",
          optionB: "Fats",
          optionC: "Protein",
          correctAnswer: "Protein",
         }),
      shuffleOptions({
          question:
            "Food rich in carbohydrates gives us the necessary ________ to do physical work.",
          optionA: "Heat",
          optionB: "Both",
          optionC: "Energy",
          correctAnswer: "Energy",
         }),
      shuffleOptions({
          question:
            "Vitamins and minerals, also known as ________ nutrients, are found in foods like curd, fruits, fish, and vegetables.",
          optionA: "Protective",
          optionB: "Energy-giving",
          optionC: "Body-building",
          correctAnswer: "Protective",
         }),
      shuffleOptions({
          question:
            "Ananya's sister, who is 3 months old, takes ________ as a complete food.",
          optionA: "Mashed banana",
          optionB: "Semi-solid food",
          optionC: "Milk",
          correctAnswer: "Milk",
         }),
      shuffleOptions({
          question:
            "Ananya's father, at 37 years old, needs a diet containing essential nutrients like ________ for energy.",
          optionA: "Carbohydrates",
          optionB: "Proteins, fats, minerals, roughage",
          optionC: "Fruits and vegetables",
          correctAnswer: "Proteins, fats, minerals, roughage",
         }),
      shuffleOptions({
          question:
            "Food items like eggs, meat, milk, honey, and ghee are obtained from ________.",
          optionA: "Plants",
          optionB: "Animals",
          optionC: "Both plants and animals",
          correctAnswer: "Animals",
         }),
      shuffleOptions({
          question:
            "Fruits, vegetables, cereals, spices, tea, coffee, and pulses are examples of food obtained from ________.",
          optionA: "Deserts",
          optionB: "Oceans",
          optionC: "Plants",
          correctAnswer: "Plants",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Food rich in carbohydrates provides warmth and energy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Proteins are considered body-building nutrients.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Vitamins and minerals are known as energy-giving nutrients.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Ananya's 3-month-old sister takes solid food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Old age people prefer light and easily digestible food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Civilization led to the cultivation of food on mountains.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Fruits, vegetables, and cereals are obtained from animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Ananya's father, at 37 years old, needs a diet containing only carbohydrates.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Preservation techniques prolong the shelf life of food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Food is essential for our body to provide entertainment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
