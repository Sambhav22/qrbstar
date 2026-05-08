export const chapter = "Chapter - 3: Water";
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
            "What is the chief source of water according to the passage?",
          optionA: "Oceans",
          optionB: "Rain",
          optionC: "Rivers",
          correctAnswer: "Rain",
         }),
      shuffleOptions({
          question:
            "What is the process by which rainwater returns to the oceans, seas, and lakes?",
          optionA: "Vaporization",
          optionB: "Condensation",
          optionC: "Water Cycle",
          correctAnswer: "Water Cycle",
         }),
      shuffleOptions({
          question:
            "Why does the narrator forget to turn off the pump in the text?",
          optionA: "Cooking",
          optionB: "Bathing",
          optionC: "Washing",
          correctAnswer: "Washing",
         }),
      shuffleOptions({
          question:
            "What percentage of the Earth's surface is covered with water?",
          optionA: "51%",
          optionB: "61%",
          optionC: "71%",
          correctAnswer: "71%",
         }),
      shuffleOptions({
          question:
            "What is the importance of using water efficiently, according to the text?",
          optionA: "To save electricity",
          optionB: "To preserve water for future generations",
          optionC: "To maintain clean air",
          correctAnswer: "To preserve water for future generations",
         }),
      shuffleOptions({
          question: "What is the taste of water, as mentioned in the text?",
          optionA: "Sweet",
          optionB: "Tasteless",
          optionC: "Salty",
          correctAnswer: "Tasteless",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a use of water?",
          optionA: "Cooking",
          optionB: "Producing electricity",
          optionC: "Creating fire",
          correctAnswer: "Creating fire",
         }),
      shuffleOptions({
          question:
            "What is the government's target regarding clean drinking water, as mentioned in the text?",
          optionA: "By 2030",
          optionB: "By 2022",
          optionC: "By 2024",
          correctAnswer: "By 2024",
         }),
      shuffleOptions({
          question:
            "What is the primary reason for the narrator's concern about leaving the pump on?",
          optionA: "High electricity bills",
          optionB: "Wasting water",
          optionC: "Damaging the pump",
          correctAnswer: "Wasting water",
         }),
      shuffleOptions({
          question:
            "What is the primary source of water for people in many Indian villages, according to the text?",
          optionA: "Taps",
          optionB: "Rivers",
          optionC: "Local authorities",
          correctAnswer: "Local authorities",
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
            "The narrator forgot to turn off the pump while water was falling from the tank on the roof because they were just about to turn it off after ________.",
          optionA: "Cooking",
          optionB: "Bathing",
          optionC: "Washing",
          correctAnswer: "Washing",
         }),
      shuffleOptions({
          question:
            "Water is a tasteless, odourless, and colourless substance. About ________% of the Earth's surface is covered with water.",
          optionA: "51%",
          optionB: "61%",
          optionC: "71%",
          correctAnswer: "71%",
         }),
      shuffleOptions({
          question:
            "The process by which rainwater returns to oceans, seas, and lakes is known as the ________.",
          optionA: "Vaporization",
          optionB: "Condensation",
          optionC: "Water Cycle",
          correctAnswer: "Water Cycle",
         }),
      shuffleOptions({
          question:
            "We should use water efficiently because fresh and clean water is ________ on the Earth.",
          optionA: "Abundant",
          optionB: "Limited",
          optionC: "Infinite",
          correctAnswer: "Limited",
         }),
      shuffleOptions({
          question:
            "Water is used as a medium of transport; ships and boats move on water to carry goods and people from one place to another. This is an example of water's ________ use.",
          optionA: "Direct",
          optionB: "Indirect",
          optionC: "Inefficient",
          correctAnswer: "Indirect",
         }),
      shuffleOptions({
          question:
            "The chief source of water mentioned in the passage is ________.",
          optionA: "Oceans",
          optionB: "Rain",
          optionC: "Rivers",
          correctAnswer: "Rain",
         }),
      shuffleOptions({
          question:
            "Government has set a target to provide clean drinking water to all by the year ________.",
          optionA: "2030",
          optionB: "2022",
          optionC: "2024",
          correctAnswer: "2024",
         }),
      shuffleOptions({
          question:
            "People are advised to keep taps closed when not in use, install alarms on water tanks, and use water meters to check water usage to ________ water.",
          optionA: "Conserve",
          optionB: "Waste",
          optionC: "Pollute",
          correctAnswer: "Conserve",
         }),
      shuffleOptions({
          question:
            "The narrator expresses concern about leaving the pump on because it leads to ________ water.",
          optionA: "Efficient",
          optionB: "Wasted",
          optionC: "Abundant",
          correctAnswer: "Wasted",
         }),
      shuffleOptions({
          question:
            "The primary source of water for many Indian villages, as mentioned in the text, is supplied by ________.",
          optionA: "Taps",
          optionB: "Rivers",
          optionC: "Local authorities",
          correctAnswer: "Local authorities",
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
            "The narrator forgot to turn off the pump while water was falling from the tank on the roof because they were just about to turn it off after washing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Water is a tasteless, odourless, and colourless substance. About 71% of the Earth's surface is covered with water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The process by which rainwater returns to oceans, seas, and lakes is known as Vaporization.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "We should use water efficiently because fresh and clean water is abundant on the Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Water is used as a medium of transport; ships and boats move on water to carry goods and people from one place to another. This is an example of water's indirect use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The chief source of water mentioned in the passage is Rivers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Government has set a target to provide clean drinking water to all by the year 2024.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "People are advised to keep taps closed when not in use, install alarms on water tanks, and use water meters to check water usage to conserve water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The narrator expresses concern about leaving the pump on because it leads to efficient water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The primary source of water for many Indian villages, as mentioned in the text, is supplied by Rivers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
