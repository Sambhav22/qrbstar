export const chapter = "Chapter - 14: Means of Transport ";
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
          question: "What is the purpose of vehicles mentioned in the text?",
          optionA: "Entertainment",
          optionB: "Means of transport",
          optionC: "Decoration",
          correctAnswer: "Means of transport",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a means of transport?",
          optionA: "Bicycle",
          optionB: "Aeroplane",
          optionC: "Refrigerator",
          correctAnswer: "Refrigerator",
         }),
      shuffleOptions({
          question: "What is Jammu Tawi Express mentioned as in the text?",
          optionA: "Car",
          optionB: "Aeroplane",
          optionC: "Train",
          correctAnswer: "Train",
         }),
      shuffleOptions({
          question:
            "What is the fastest and cheapest means of land transport mentioned in the text?",
          optionA: "Bicycle",
          optionB: "Aeroplane",
          optionC: "Train",
          correctAnswer: "Train",
         }),
      shuffleOptions({
          question:
            "What do trains carry from one place to another according to the text?",
          optionA: "Passengers",
          optionB: "Goods",
          optionC: "Both a and b",
          correctAnswer: "Both a and b",
         }),
      shuffleOptions({
          question:
            "Which of the following is mentioned as a means of transport in the text?",
          optionA: "Refrigerator",
          optionB: "Scooter",
          optionC: "Television",
          correctAnswer: "Scooter",
         }),
      shuffleOptions({
          question: "What is the scene described in the text?",
          optionA: "Beach",
          optionB: "Railway station",
          optionC: "Airport",
          correctAnswer: "Railway station",
         }),
      shuffleOptions({
          question:
            "What is being boarded onto the Jammu Tawi Express in the text?",
          optionA: "Passengers",
          optionB: "Goods",
          optionC: "Animals",
          correctAnswer: "Passengers",
         }),
      shuffleOptions({
          question: "According to the text, what are trains used for?",
          optionA: "Short distances",
          optionB: "Long distances",
          optionC: "Only for carrying goods",
          correctAnswer: "Long distances",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT a means of land transport mentioned in the text?",
          optionA: "Bus",
          optionB: "Submarine",
          optionC: "Aeroplane",
          correctAnswer: "Aeroplane",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "If we wish to go somewhere, we need certain __________.",
          optionA: "Tools",
          optionB: "Vehicles",
          optionC: "Appliances",
          correctAnswer: "Vehicles",
         }),
      shuffleOptions({
          question:
            "Trains are the fastest and __________ means of land transport.",
          optionA: "Expensive",
          optionB: "Slowest",
          optionC: "Cheapest",
          correctAnswer: "Cheapest",
         }),
      shuffleOptions({
          question: "Jammu Tawi Express is on the __________.",
          optionA: "Highway",
          optionB: "Platform",
          optionC: "Runway",
          correctAnswer: "Platform",
         }),
      shuffleOptions({
          question: "__________ are used to carry our goods.",
          optionA: "Scooters",
          optionB: "Trains",
          optionC: "Bicycles",
          correctAnswer: "Trains",
         }),
      shuffleOptions({
          question: "The scene described in the text is at a __________.",
          optionA: "Beach",
          optionB: "Park",
          optionC: "Railway station",
          correctAnswer: "Railway station",
         }),
      shuffleOptions({
          question:
            "Some means of transport mentioned in the text are bicycle, aeroplane, and __________.",
          optionA: "Ship",
          optionB: "Bus",
          optionC: "Television",
          correctAnswer: "Ship",
         }),
      shuffleOptions({
          question: "The Jammu Tawi Express is a type of __________.",
          optionA: "Car",
          optionB: "Train",
          optionC: "Bus",
          correctAnswer: "Train",
         }),
      shuffleOptions({
          question: "Trains are used to travel __________ distances.",
          optionA: "Short",
          optionB: "Medium",
          optionC: "Long",
          correctAnswer: "Long",
         }),
      shuffleOptions({
          question:
            "We use means of transport to carry our goods and __________.",
          optionA: "Animals",
          optionB: "Passengers",
          optionC: "Furniture",
          correctAnswer: "Passengers",
         }),
      shuffleOptions({
          question:
            "__________ are mentioned as a means of land transport in the text.",
          optionA: "Submarines",
          optionB: "Aeroplanes",
          optionC: "Buses",
          correctAnswer: "Buses",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Trains are the slowest means of land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Submarines are mentioned as a means of land transport in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Aeroplanes are only used for short distances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Jammu Tawi Express is a type of bus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Scooters can be used as a means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Bicycles have wheels to move.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Trains are only used for carrying goods, not passengers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The Jammu Tawi Express is on a beach.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Ships are mentioned as a means of transport in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Trains are the most expensive means of land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
