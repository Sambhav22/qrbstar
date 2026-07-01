export const chapter = "Chapter - 13: Let's Travel";
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
            "What mode of transport is the narrator using to go to Disneyland?",
          optionA: "Train",
          optionB: "Aeroplane",
          optionC: "Car",
          correctAnswer: "Aeroplane",
 }),
      shuffleOptions({
          question: "Who is the narrator going to Disneyland with?",
          optionA: "Friends",
          optionB: "Parents",
          optionC: "Siblings",
          correctAnswer: "Parents",
 }),
      shuffleOptions({
          question:
            "What did early men use before the invention of vehicles for transportation?",
          optionA: "Aeroplanes",
          optionB: "Boats",
          optionC: "Walking",
          correctAnswer: "Walking",
 }),
      shuffleOptions({
          question:
            "What is the most commonly used means of land transport mentioned in the text?",
          optionA: "Car",
          optionB: "Train",
          optionC: "Scooter",
          correctAnswer: "Train",
 }),
      shuffleOptions({
          question:
            "What is the fastest and expensive means of transport mentioned?",
          optionA: "Car",
          optionB: "Aeroplane",
          optionC: "Train",
          correctAnswer: "Aeroplane",
 }),
      shuffleOptions({
          question:
            "What is the oldest and cheapest means of transport mentioned in the text?",
          optionA: "Car",
          optionB: "Ship",
          optionC: "Train",
          correctAnswer: "Ship",
 }),
      shuffleOptions({
          question:
            "What is the place called where an aeroplane takes off and lands?",
          optionA: "Harbor",
          optionB: "Airport",
          optionC: "Port",
          correctAnswer: "Airport",
 }),
      shuffleOptions({
          question:
            "What animal is known as the 'ship of the desert' and used as a means of transport in Rajasthan?",
          optionA: "Horse",
          optionB: "Elephant",
          optionC: "Camel",
          correctAnswer: "Camel",
 }),
      shuffleOptions({
          question:
            "In Ladakh, what means of transport is used due to the presence of ponds, rivers, lakes, and valleys?",
          optionA: "Car",
          optionB: "Camel",
          optionC: "Wooden trolley on ropes",
          correctAnswer: "Wooden trolley on ropes",
 }),
      shuffleOptions({
          question:
            "What environmental issue is mentioned as a drawback of transportation in the text?",
          optionA: "Noise pollution",
          optionB: "Light pollution",
          optionC: "Air pollution",
          correctAnswer: "Air pollution",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "From an _________ aeroplane takes off and lands",
          optionA: "Airport",
          optionB: "Harbor",
          optionC: "Station",
          correctAnswer: "Airport",
 }),
      shuffleOptions({
          question: "_________ takes us across big seas and oceans",
          optionA: "Train",
          optionB: "Ship",
          optionC: "Car",
          correctAnswer: "Ship",
 }),
      shuffleOptions({
          question: "_________ is a desert area",
          optionA: "Ladakh",
          optionB: "Kerala",
          optionC: "Rajasthan",
          correctAnswer: "Rajasthan",
 }),
      shuffleOptions({
          question: "The _________ is known as the ship of the desert",
          optionA: "Horse",
          optionB: "Elephant",
          optionC: "Camel",
          correctAnswer: "Camel",
 }),
      shuffleOptions({
          question:
            "In Ladakh, a wooden trolley moved on ropes is used as a means of transport due to the presence of ponds, rivers, lakes, and ________.",
          optionA: "Mountains",
          optionB: "Valleys",
          optionC: "Deserts",
          correctAnswer: "Valleys",
 }),
      shuffleOptions({
          question:
            "Rajasthan, a desert area, uses the ________ as a means of transport, known as the ship of the desert.",
          optionA: "Elephant",
          optionB: "Horse",
          optionC: "Camel",
          correctAnswer: "Camel",
 }),
      shuffleOptions({
          question:
            "Delhi, being a proper land area, utilizes various vehicles for both road transport and ________.",
          optionA: "Water transport",
          optionB: "Air transport",
          optionC: "Rail transport",
          correctAnswer: "Rail transport",
 }),
      shuffleOptions({
          question:
            "Kerala, with its coastal plain, commonly uses boats as a means of transport in areas with ________.",
          optionA: "Mountains",
          optionB: "Deserts",
          optionC: "Water",
          correctAnswer: "Water",
 }),
      shuffleOptions({
          question:
            "The drawback of transport mentioned in the text includes the creation of extra pressure on the environment in terms of ________.",
          optionA: "Noise pollution",
          optionB: "Light pollution",
          optionC: "Air pollution",
          correctAnswer: "Air pollution",
 }),
      shuffleOptions({
          question:
            "Vehicles ease the life of people, but excessive usage may lead to the exhaustion of ________.",
          optionA: "Food",
          optionB: "Fuel",
          optionC: "Water",
          correctAnswer: "Fuel",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Land transport includes road and rail options.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Aeroplane is considered the cheapest means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Water transport involves the use of helicopters and jets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Camels are commonly used as a means of transport in Ladakh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Delhi utilizes various vehicles for both road and air transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Boats are commonly used as a means of transport in Rajasthan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Excessive usage of vehicles leads to water pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Air transport is the fastest and most expensive means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Submarines are used for land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "The drawback of transport mentioned in the text is noise pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
