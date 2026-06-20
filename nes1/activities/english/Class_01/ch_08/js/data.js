export const chapter = "Chapter - 8";
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
        question: "Who bakes our biscuits?",
        optionA: "Farmer",
        optionB: "Baker",
        optionC: "Electrician",
        correctAnswer: "Baker",
     }),
      shuffleOptions({
        question: "Who fixes leaky pipes?",
        optionA: "Plumber",
        optionB: "Painter",
        optionC: "Tailor",
        correctAnswer: "Plumber",
     }),
      shuffleOptions({
        question: "Who prints the news?",
        optionA: "Miner",
        optionB: "Printer",
        optionC: "Mechanic",
        correctAnswer: "Printer",
     }),
      shuffleOptions({
        question: "Who drills for oil?",
        optionA: "Driller",
        optionB: "Gardener",
        optionC: "Cobbler",
        correctAnswer: "Driller",
     }),
      shuffleOptions({
        question: "Who sews our garments?",
        optionA: "Barber",
        optionB: "Tailor",
        optionC: "Upholsterer",
        correctAnswer: "Tailor",
     }),
      shuffleOptions({
        question: "Who plants flower-beds and weeds with care?",
        optionA: "Electrician",
        optionB: "Gardener",
        optionC: "Butcher",
        correctAnswer: "Gardener",
     }),
      shuffleOptions({
        question: "Who makes furniture?",
        optionA: "Carpenter",
        optionB: "Dealer",
        optionC: "Mechanic",
        correctAnswer: "Carpenter",
     }),
      shuffleOptions({
        question: "Who chops our meat?",
        optionA: "Farmer",
        optionB: "Butcher",
        optionC: "Painter",
        correctAnswer: "Butcher",
     }),
      shuffleOptions({
        question: "Who sells wares?",
        optionA: "Miner",
        optionB: "Tailor",
        optionC: "Dealer",
        correctAnswer: "Dealer",
     }),
      shuffleOptions({
        question: "Who cuts our hair?",
        optionA: "Barber",
        optionB: "Plumber",
        optionC: "Upholsterer",
        correctAnswer: "Barber",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The _______ bakes our biscuits.",
        optionA: "Farmer",
        optionB: "Baker",
        optionC: "Electrician",
        correctAnswer: "Baker",
     }),
      shuffleOptions({
        question: "The cobbler mends our _______.",
        optionA: "Shoes",
        optionB: "Shirts",
        optionC: "Pots",
        correctAnswer: "Shoes",
     }),
      shuffleOptions({
        question: "The plumber fixes _______ pipes.",
        optionA: "Leaky",
        optionB: "Electrical",
        optionC: "Wooden",
        correctAnswer: "Leaky",
     }),
      shuffleOptions({
        question: "The printer prints the _______.",
        optionA: "Books",
        optionB: "News",
        optionC: "Maps",
        correctAnswer: "News",
     }),
      shuffleOptions({
        question: "The miner digs for _______.",
        optionA: "Gold",
        optionB: "Silver",
        optionC: "Diamonds",
        correctAnswer: "Silver",
     }),
      shuffleOptions({
        question: "The farmer tills the _______.",
        optionA: "Water",
        optionB: "Air",
        optionC: "Soil",
        correctAnswer: "Soil",
     }),
      shuffleOptions({
        question: "The electrician fixes _______.",
        optionA: "Cars",
        optionB: "Lights",
        optionC: "Furniture",
        correctAnswer: "Lights",
     }),
      shuffleOptions({
        question: "The driller drills for _______.",
        optionA: "Water",
        optionB: "Oil",
        optionC: "Gold",
        correctAnswer: "Oil",
     }),
      shuffleOptions({
        question: "The painter paints our _______ and doors.",
        optionA: "Cars",
        optionB: "Walls",
        optionC: "Windows",
        correctAnswer: "Walls",
     }),
      shuffleOptions({
        question: "The tailor sews our _______.",
        optionA: "Shoes",
        optionB: "Garments",
        optionC: "Hats",
        correctAnswer: "Garments",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The baker bakes our biscuits.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cobbler mends our hats.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The plumber fixes leaky pipes.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The printer prints the weather forecast.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The miner digs for gold.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer tills the soil.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The electrician fixes lights.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The driller drills for water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The painter paints our walls and doors.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The tailor sews our shoes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
