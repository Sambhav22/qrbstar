export const chapter = "Chapter - 17: Forms of Water";
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
            "What percentage of the Earth's surface is covered with water?",
          optionA: "51%",
          optionB: "61%",
          optionC: "71%",
          correctAnswer: "71%",
         }),
      shuffleOptions({
          question: "What are the three forms of water mentioned in the text?",
          optionA: "Solid, gas, and vapor",
          optionB: "Ice, liquid, and gas",
          optionC: "Ocean, river, and lake",
          correctAnswer: "Ice, liquid, and gas",
         }),
      shuffleOptions({
          question:
            "In which form is water present in the rivers, lakes, ponds, and seas?",
          optionA: "Solid",
          optionB: "Liquid",
          optionC: "Gaseous",
          correctAnswer: "Liquid",
         }),
      shuffleOptions({
          question: "What is the gaseous form of water mentioned in the text?",
          optionA: "Air",
          optionB: "Water Vapor",
          optionC: "Oxygen",
          correctAnswer: "Water Vapor",
         }),
      shuffleOptions({
          question:
            "What process is involved in making water potable in the purification steps?",
          optionA: "Distillation",
          optionB: "Filtration",
          optionC: "Evaporation",
          correctAnswer: "Filtration",
         }),
      shuffleOptions({
          question:
            "Which step involves passing chlorine through filtered water during the purification process?",
          optionA: "Sedimentation",
          optionB: "Filtration",
          optionC: "Chlorination",
          correctAnswer: "Chlorination",
         }),
      shuffleOptions({
          question:
            "What is the purpose of the water cycle mentioned in the text?",
          optionA: "To reduce water pollution",
          optionB: "To maintain the water balance on Earth",
          optionC: "To create potable water",
          correctAnswer: "To maintain the water balance on Earth",
         }),
      shuffleOptions({
          question:
            "What recommendation is given for water conservation in the text?",
          optionA: "Increase water usage in kitchens and toilets",
          optionB: "Use showers for bathing",
          optionC: "Turn off the tap if not in use",
          correctAnswer: "Turn off the tap if not in use",
         }),
      shuffleOptions({
          question:
            "What is the primary reason for water conservation mentioned in the text?",
          optionA: "To reduce water pollution",
          optionB: "To increase water availability",
          optionC:
            "Freshwater is limited and our need for consuming it is increasing",
          correctAnswer:
            "Freshwater is limited and our need for consuming it is increasing",
         }),
      shuffleOptions({
          question:
            "What is the final step mentioned in the water purification process to make water germ-free?",
          optionA: "Filtration",
          optionB: "Chlorination",
          optionC: "Sedimentation",
          correctAnswer: "Chlorination",
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
            "The three forms of water are ________, liquid, and gaseous.",
          optionA: "Solid",
          optionB: "Gas",
          optionC: "Plasma",
          correctAnswer: "Solid",
         }),
      shuffleOptions({
          question:
            "The solid form of water found in mountains and glaciers is known as ________.",
          optionA: "Vapor",
          optionB: "Liquid",
          optionC: "Ice",
          correctAnswer: "Ice",
         }),
      shuffleOptions({
          question:
            "In the water purification process, chlorine is used in the step known as ________.",
          optionA: "Filtration",
          optionB: "Sedimentation",
          optionC: "Chlorination",
          correctAnswer: "Chlorination",
         }),
      shuffleOptions({
          question:
            "Water vapor, present in the atmosphere, is in the ________ form.",
          optionA: "Solid",
          optionB: "Liquid",
          optionC: "Gaseous",
          correctAnswer: "Gaseous",
         }),
      shuffleOptions({
          question:
            "The water cycle involves the process of evaporation, condensation, and ________.",
          optionA: "Sublimation",
          optionB: "Precipitation",
          optionC: "Filtration",
          correctAnswer: "Precipitation",
         }),
      shuffleOptions({
          question:
            "The water purification step where water is left to stand in large tanks to settle down sand and dust particles is called ________.",
          optionA: "Filtration",
          optionB: "Chlorination",
          optionC: "Sedimentation",
          correctAnswer: "Sedimentation",
         }),
      shuffleOptions({
          question:
            "To conserve water, it is recommended to turn off the tap when ________.",
          optionA: "Cooking",
          optionB: "Not in use",
          optionC: "Taking a shower",
          correctAnswer: "Not in use",
         }),
      shuffleOptions({
          question: "The liquid form of water is found in ________.",
          optionA: "Mountains",
          optionB: "Oceans",
          optionC: "Glaciers",
          correctAnswer: "Oceans",
         }),
      shuffleOptions({
          question: "Water becomes potable after the process of ________.",
          optionA: "Precipitation",
          optionB: "Filtration",
          optionC: "Sublimation",
          correctAnswer: "Filtration",
         }),
      shuffleOptions({
          question: "Installing water meters is suggested to ________.",
          optionA: "Increase water usage",
          optionB: "Decrease water usage",
          optionC: "Monitor electricity usage",
          correctAnswer: "Decrease water usage",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Water is present in solid, liquid, and gaseous forms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Ice, found in mountains and glaciers, is the gaseous form of water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Chlorination is the process of passing chlorine through filtered water during purification.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Water vapor is the gaseous form of water present in the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The water cycle involves the processes of evaporation, condensation, and precipitation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Filtration is the step in water purification where water is left to stand in large tanks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Conserving water includes turning off the tap when it is not in use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The liquid form of water is primarily found in oceans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Water becomes potable after the process of sublimation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Installing water meters is recommended to increase water usage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
