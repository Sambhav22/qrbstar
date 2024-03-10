export const chapter = "Chapter - 15: Pottery-Wonderful Fun! ";
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
          question: "What is Ria making with clay moulds?",
          optionA: "Toys",
          optionB: "Gullak",
          optionC: "Pottery",
          correctAnswer: "Gullak",
         }),
      shuffleOptions({
          question: "What does Ria do after shaping the gullak with clay?",
          optionA: "Paints it",
          optionB: "Puts it in the sun to dry",
          optionC: "Bakes it in a furnace",
          correctAnswer: "Puts it in the sun to dry",
         }),
      shuffleOptions({
          question: "What is the art of making pots from clay called?",
          optionA: "Sculpture",
          optionB: "Pottery",
          optionC: "Molding",
          correctAnswer: "Pottery",
         }),
      shuffleOptions({
          question: "What do potters use to give shape to clay?",
          optionA: "Oven",
          optionB: "Potter's wheel",
          optionC: "Sculpting tools",
          correctAnswer: "Potter's wheel",
         }),
      shuffleOptions({
          question: "What is the first step in making a pot?",
          optionA: "Decorating",
          optionB: "Digging the ground for clay",
          optionC: "Baking in a furnace",
          correctAnswer: "Digging the ground for clay",
         }),
      shuffleOptions({
          question: "What is the purpose of baking the pot in a furnace?",
          optionA: "To dry it",
          optionB: "To make it colorful",
          optionC: "To give it strength",
          correctAnswer: "To give it strength",
         }),
      shuffleOptions({
          question: "What are some uses of the vessels created by potters?",
          optionA: "Playing instruments",
          optionB: "Storing food, water, and grains",
          optionC: "Decorating walls",
          correctAnswer: "Storing food, water, and grains",
         }),
      shuffleOptions({
          question: "What is commonly made by potters during festivals?",
          optionA: "Sculptures",
          optionB: "Diyas and earthen lamps",
          optionC: "Jewelry",
          correctAnswer: "Diyas and earthen lamps",
         }),
      shuffleOptions({
          question: "What is Diwali known for in relation to clay items?",
          optionA: "Baking clay items",
          optionB: "Decorating with clay jewelry",
          optionC: "Lighting houses with diyas",
          correctAnswer: "Lighting houses with diyas",
         }),
      shuffleOptions({
          question: "What variety of clay items can be found in markets?",
          optionA: "Only pots",
          optionB: "Only wall hangings",
          optionC: "Jewelry, urns, pots, wall hangings, etc.",
          correctAnswer: "Jewelry, urns, pots, wall hangings, etc.",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Ria is making a gullak with ________ moulds.",
          optionA: "Wood",
          optionB: "Metal",
          optionC: "Clay",
          correctAnswer: "Clay",
         }),
      shuffleOptions({
          question:
            "To make a pot, potters dig the ground and take out the _________.",
          optionA: "Sand",
          optionB: "Water",
          optionC: "Clay",
          correctAnswer: "Clay",
         }),
      shuffleOptions({
          question: "Potters use a ________ to give shape to clay.",
          optionA: "Brush",
          optionB: "Hammer",
          optionC: "Potter's wheel",
          correctAnswer: "Potter's wheel",
         }),
      shuffleOptions({
          question:
            "After shaping the gullak with clay, Ria puts it in the sun to ________.",
          optionA: "Bake",
          optionB: "Dry",
          optionC: "Paint",
          correctAnswer: "Dry",
         }),
      shuffleOptions({
          question:
            "The vessels created by potters are used for storing food, water, and _________.",
          optionA: "Air",
          optionB: "Grains",
          optionC: "Light",
          correctAnswer: "Grains",
         }),
      shuffleOptions({
          question: "Diyas and earthen lamps are commonly made by ________.",
          optionA: "Artists",
          optionB: "Potters",
          optionC: "Sculptors",
          correctAnswer: "Potters",
         }),
      shuffleOptions({
          question: "The art of making pots from clay is called ________.",
          optionA: "Sculpting",
          optionB: "Pottery",
          optionC: "Molding",
          correctAnswer: "Pottery",
         }),
      shuffleOptions({
          question: "Potters bake pots in a ________ to give them strength.",
          optionA: "Microwave",
          optionB: "Furnace",
          optionC: "Refrigerator",
          correctAnswer: "Furnace",
         }),
      shuffleOptions({
          question:
            "Markets are flooded with beautiful and decorated clay items such as clay jewelry, urns, pots, and wall ________.",
          optionA: "Paintings",
          optionB: "Hangings",
          optionC: "Decorations",
          correctAnswer: "Hangings",
         }),
      shuffleOptions({
          question: "On Diwali, we light up our houses with ________.",
          optionA: "Candles",
          optionB: "Lamps",
          optionC: "Diyas",
          correctAnswer: "Diyas",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Ria is making a gullak with clay moulds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Potters use a brush to give shape to clay.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Diyas and earthen lamps are not made by potters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Potters bake pots in a microwave to give them strength.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Markets are flooded with a variety of clay items such as clay jewelry, urns, pots, and wall hangings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Potters dig the ground and take out the sand to make a pot.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The art of making pots from clay is called molding.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Potters create vessels for playing musical instruments.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Earthen pots were made in olden times to collect water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "On Diwali, we light up our houses with lamps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
