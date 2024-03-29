export const chapter = "Chapter - 9: Plant Life ";
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
          question: "What is the function of the root in a plant?",
          optionA: "Collects energy from the sun",
          optionB: "Takes water and minerals from the soil",
          optionC: "Bears fruits",
          correctAnswer: "Takes water and minerals from the soil",
         }),
      shuffleOptions({
          question: "What is the stem's role in a plant?",
          optionA: "Collects energy from the sun",
          optionB: "Bears fruits",
          optionC: "Carries water and nutrients to the rest of the plant",
          correctAnswer: "Carries water and nutrients to the rest of the plant",
         }),
      shuffleOptions({
          question: "What is the leaf considered in a plant?",
          optionA: "Part that grows under the ground",
          optionB: "Food factory of the plant",
          optionC: "Attached to the roots",
          correctAnswer: "Food factory of the plant",
         }),
      shuffleOptions({
          question:
            "Which part of the plant is known as the most pretty and bears fruits?",
          optionA: "Stem",
          optionB: "Leaf",
          optionC: "Flower",
          correctAnswer: "Flower",
         }),
      shuffleOptions({
          question: "What is the fruit in a plant?",
          optionA: "Part that grows under the ground",
          optionB: "Ripened part that is eatable and tasty",
          optionC: "Carries water and nutrients",
          correctAnswer: "Ripened part that is eatable and tasty",
         }),
      shuffleOptions({
          question:
            "What should we avoid doing to take care of plants according to the text?",
          optionA: "Water the plants regularly",
          optionB: "Pluck flowers or fruits unnecessarily",
          optionC: "Add manure and fertilizers",
          correctAnswer: "Pluck flowers or fruits unnecessarily",
         }),
      shuffleOptions({
          question: "What does the leaf do for the plant?",
          optionA: "Takes water and minerals from the soil",
          optionB: "Collects energy from the sun",
          optionC: "Bears fruits",
          correctAnswer: "Collects energy from the sun",
         }),
      shuffleOptions({
          question: "Which part of the plant grows under the ground?",
          optionA: "Stem",
          optionB: "Leaf",
          optionC: "Root",
          correctAnswer: "Root",
         }),
      shuffleOptions({
          question: "What is recommended to keep plants and soil healthy?",
          optionA: "Pluck flowers or fruits unnecessarily",
          optionB: "Water the plants irregularly",
          optionC: "Add manure and fertilizers",
          correctAnswer: "Add manure and fertilizers",
         }),
      shuffleOptions({
          question:
            "What is described as a beautiful part of the garden in the text?",
          optionA: "Plants",
          optionB: "Fruits",
          optionC: "Flowers",
          correctAnswer: "Flowers",
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
            "Plants are our ________ friends. They provide us with food and fresh air.",
          optionA: "Blue",
          optionB: "Green",
          optionC: "Red",
          correctAnswer: "Green",
         }),
      shuffleOptions({
          question:
            "The root is the part of the plant that grows ________ the ground. It takes water and minerals from the soil.",
          optionA: "Above",
          optionB: "Under",
          optionC: "Alongside",
          correctAnswer: "Under",
         }),
      shuffleOptions({
          question:
            "The stem is attached to the roots and carries water and nutrients to the ________ of the plant.",
          optionA: "Bottom",
          optionB: "Middle",
          optionC: "Rest",
          correctAnswer: "Rest",
         }),
      shuffleOptions({
          question:
            "The leaf is defined as the ________ factory of the plant. It collects energy from the sun and makes food for the plant.",
          optionA: "Food",
          optionB: "Energy",
          optionC: "Oxygen",
          correctAnswer: "Food",
         }),
      shuffleOptions({
          question:
            "The flower is known as the most ________ part of the plant. It bears fruits.",
          optionA: "Colorful",
          optionB: "Pretty",
          optionC: "Fragrant",
          correctAnswer: "Pretty",
         }),
      shuffleOptions({
          question:
            "The fruit is a ripened part of a plant that is ________ and tasty.",
          optionA: "Unpleasant",
          optionB: "Bitter",
          optionC: "Eatable",
          correctAnswer: "Eatable",
         }),
      shuffleOptions({
          question: "Plants make our world ________.",
          optionA: "Colorful",
          optionB: "Blue",
          optionC: "Green",
          correctAnswer: "Green",
         }),
      shuffleOptions({
          question: "We must take care of plants by watering them ________.",
          optionA: "Occasionally",
          optionB: "Regularly",
          optionC: "Rarely",
          correctAnswer: "Regularly",
         }),
      shuffleOptions({
          question: "Do not pluck flowers or fruits ________.",
          optionA: "Carefully",
          optionB: "Unnecessarily",
          optionC: "Gently",
          correctAnswer: "Unnecessarily",
         }),
      shuffleOptions({
          question:
            "To keep plants and soil healthy, it is recommended to add ________ and fertilizers.",
          optionA: "Sand",
          optionB: "Manure",
          optionC: "Stones",
          correctAnswer: "Manure",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Plants provide us with food and fresh air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The stem carries water and nutrients to the rest of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The leaf is considered the food factory of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Flowers are known as the most colorful part of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Fruits are ripened parts of a plant that are inedible.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Watering plants irregularly is recommended for their health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Plucking flowers or fruits unnecessarily is advised for plant care.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Leaves collect energy from the sun and make food for the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The root is the part of the plant that grows above the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Adding manure and fertilizers is recommended to keep plants and soil healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
