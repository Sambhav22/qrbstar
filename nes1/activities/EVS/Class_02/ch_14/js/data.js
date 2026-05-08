export const chapter = "Chapter - 14: Let's Go on a Tour ";
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
            "What are the three types of means of transport mentioned in the text?",
          optionA: "Land transport, Sea transport, Sky transport",
          optionB: "Ground transport, Water transport, Air transport",
          optionC: "Road transport, Ship transport, Airplane transport",
          correctAnswer: "Ground transport, Water transport, Air transport",
 }),
      shuffleOptions({
          question: "Which of the following is an example of land transport?",
          optionA: "Ship",
          optionB: "Submarine",
          optionC: "Car",
          correctAnswer: "Car",
 }),
      shuffleOptions({
          question:
            "What is the fastest means of transport according to the text?",
          optionA: "Land transport",
          optionB: "Water transport",
          optionC: "Air transport",
          correctAnswer: "Air transport",
 }),
      shuffleOptions({
          question: "Why is Road Safety Week conducted?",
          optionA: "To promote car racing",
          optionB: "To create awareness about traffic rules",
          optionC: "To encourage running on busy roads",
          correctAnswer: "To create awareness about traffic rules",
 }),
      shuffleOptions({
          question:
            "What should you be careful about while crossing the road, according to the text?",
          optionA: "Paying attention to warnings",
          optionB: "Running on a busy road",
          optionC: "Using sidewalks",
          correctAnswer: "Paying attention to warnings",
 }),
      shuffleOptions({
          question: "What is a means of water transport?",
          optionA: "Car",
          optionB: "Bicycle",
          optionC: "Ship",
          correctAnswer: "Ship",
 }),
      shuffleOptions({
          question: "Which means of transport runs on land?",
          optionA: "Ship",
          optionB: "Bicycle",
          optionC: "Submarine",
          correctAnswer: "Bicycle",
 }),
      shuffleOptions({
          question: "What is emphasized as the safest means of transport?",
          optionA: "Land transport",
          optionB: "Water transport",
          optionC: "Air transport",
          correctAnswer: "Air transport",
 }),
      shuffleOptions({
          question:
            "What is the primary purpose of using sidewalks, according to the text?",
          optionA: "To promote road safety",
          optionB: "To avoid running on busy roads",
          optionC: "To encourage bicycle riding",
          correctAnswer: "To avoid running on busy roads",
 }),
      shuffleOptions({
          question: "What is the main focus of Road Safety Week?",
          optionA: "Promoting running on busy roads",
          optionB: "Encouraging the use of bicycles",
          optionC: "Creating awareness about traffic rules",
          correctAnswer: "Creating awareness about traffic rules",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "To go on a tour, you need means of ________.",
          optionA: "travel",
          optionB: "transportation",
          optionC: "communication",
          correctAnswer: "transportation",
 }),
      shuffleOptions({
          question:
            "Land transport refers to the means of transport that run on ________.",
          optionA: "air",
          optionB: "water",
          optionC: "land",
          correctAnswer: "land",
 }),
      shuffleOptions({
          question: "Water transport includes vehicles that run on ________.",
          optionA: "roads",
          optionB: "water",
          optionC: "air",
          correctAnswer: "water",
 }),
      shuffleOptions({
          question:
            "Air transport is recognized as the ________ means of transport.",
          optionA: "slowest",
          optionB: "safest",
          optionC: "fastest",
          correctAnswer: "fastest",
 }),
      shuffleOptions({
          question:
            "Road Safety Week aims to create awareness about ________ rules.",
          optionA: "travel",
          optionB: "traffic",
          optionC: "pedestrian",
          correctAnswer: "traffic",
 }),
      shuffleOptions({
          question:
            "Always pay attention and listen to ________ while crossing the road.",
          optionA: "music",
          optionB: "warnings",
          optionC: "announcements",
          correctAnswer: "warnings",
 }),
      shuffleOptions({
          question: "Never run on a ________ road.",
          optionA: "deserted",
          optionB: "busy",
          optionC: "narrow",
          correctAnswer: "busy",
 }),
      shuffleOptions({
          question:
            "Land transport includes vehicles such as ________ and ________.",
          optionA: "ship / submarine",
          optionB: "car / bicycle",
          optionC: "airplane / helicopter",
          correctAnswer: "car / bicycle",
 }),
      shuffleOptions({
          question:
            "Air transport is known for being the ________ means of transport.",
          optionA: "noisiest",
          optionB: "cleanest",
          optionC: "busiest",
          correctAnswer: "cleanest",
 }),
      shuffleOptions({
          question: "Always use ________ to ensure pedestrian safety.",
          optionA: "crosswalks",
          optionB: "zebra crossings",
          optionC: "sidewalks",
          correctAnswer: "sidewalks",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Land transport is the slowest means of transportation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Water transport includes vehicles that run on air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Air transport is the safest means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Road Safety Week promotes car racing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Using crosswalks is recommended to ensure pedestrian safety.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Bicycles are a means of water transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Submarines travel through air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Airplanes are depicted as a means of land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Sidewalks should be used to avoid running on busy roads.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Air transport is recognized as the busiest means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
