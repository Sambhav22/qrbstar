export const chapter = "Chapter -11: Ekalavya ";
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
        question: "Who expresses interest in learning archery?",
        optionA: "Drona",
        optionB: "Ekalavya",
        optionC: "The tribal prince",
        correctAnswer: "Ekalavya",
     }),
      shuffleOptions({
        question:
          "Why does Drona refuse to teach the person who wants to learn archery?",
        optionA: "Lack of skill",
        optionB: "Not a prince",
        optionC: "Already has a teacher",
        correctAnswer: "Not a prince",
     }),
      shuffleOptions({
        question: "Where is Drona located?",
        optionA: "Hastinapur",
        optionB: "Tribal village",
        optionC: "Mud statue",
        correctAnswer: "Hastinapur",
     }),
      shuffleOptions({
        question: "What does the person consider as their guru?",
        optionA: "Drona",
        optionB: "Mud statue",
        optionC: "Ekalavya",
        correctAnswer: "Mud statue",
     }),
      shuffleOptions({
        question:
          "What is the reason given for Drona not teaching the tribal prince?",
        optionA: "Lack of interest",
        optionB: "Princes of Hastinapur",
        optionC: "Poor boy",
        correctAnswer: "Princes of Hastinapur",
     }),
      shuffleOptions({
        question:
          "What does Ekalavya offer as a fee to Drona for learning archery?",
        optionA: "Money",
        optionB: "His bow and arrows",
        optionC: "Thumb of his right hand",
        correctAnswer: "Thumb of his right hand",
     }),
      shuffleOptions({
        question: "How does Ekalavya consider Drona as his teacher?",
        optionA: "By attending formal classes",
        optionB: "Practicing before Drona's image",
        optionC: "By winning archery competitions",
        correctAnswer: "Practicing before Drona's image",
     }),
      shuffleOptions({
        question: "Who does Ekalavya claim is a better archer than Arjuna?",
        optionA: "Drona",
        optionB: "Himself",
        optionC: "The tribal prince",
        correctAnswer: "Himself",
     }),
      shuffleOptions({
        question:
          "What is Ekalavya's response when asked for his fee by Drona?",
        optionA: "Refuses to pay",
        optionB: "Agrees and pays with money",
        optionC: "Agrees and sacrifices his thumb",
        correctAnswer: "Agrees and sacrifices his thumb",
     }),
      shuffleOptions({
        question: "What motivates Ekalavya to become a skilled archer?",
        optionA: "To impress the princes",
        optionB: "To save the princes from danger",
        optionC: "To challenge Arjuna",
        correctAnswer: "To save the princes from danger",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "__________ expresses interest in learning archery.",
        optionA: "Drona",
        optionB: "Ekalavya",
        optionC: "The tribal prince",
        correctAnswer: "Ekalavya",
     }),
      shuffleOptions({
        question:
          "Drona refuses to teach the person who wants to learn archery because he is not a __________.",
        optionA: "Lack of skill",
        optionB: "Not a prince",
        optionC: "Already has a teacher",
        correctAnswer: "Not a prince",
     }),
      shuffleOptions({
        question: "Drona is located in __________.",
        optionA: "Hastinapur",
        optionB: "Tribal village",
        optionC: "Mud statue",
        correctAnswer: "Hastinapur",
     }),
      shuffleOptions({
        question: "The person considers the __________ as their guru.",
        optionA: "Drona",
        optionB: "Mud statue",
        optionC: "Ekalavya",
        correctAnswer: "Mud statue",
     }),
      shuffleOptions({
        question:
          "Ekalavya offers the __________ as a fee to Drona for learning archery.",
        optionA: "Money",
        optionB: "His bow and arrows",
        optionC: "Thumb of his right hand",
        correctAnswer: "Thumb of his right hand",
     }),
      shuffleOptions({
        question:
          "Ekalavya considers Drona as his teacher by practicing before __________.",
        optionA: "Attending formal classes",
        optionB: "Praying to the gods",
        optionC: "Drona's image",
        correctAnswer: "Drona's image",
     }),
      shuffleOptions({
        question: "Ekalavya claims to be a better archer than __________.",
        optionA: "Drona",
        optionB: "Himself",
        optionC: "The tribal prince",
        correctAnswer: "Himself",
     }),
      shuffleOptions({
        question:
          "Ekalavya responds to Drona's request for a fee by sacrificing __________.",
        optionA: "Money",
        optionB: "His bow and arrows",
        optionC: "His thumb of the right hand",
        correctAnswer: "His thumb of the right hand",
     }),
      shuffleOptions({
        question:
          "Ekalavya is motivated to become a skilled archer to save the princes from __________.",
        optionA: "Danger",
        optionB: "Boredom",
        optionC: "Hunger",
        correctAnswer: "Danger",
     }),
      shuffleOptions({
        question:
          "Drona refuses to teach the tribal prince because he teaches only the __________ of Hastinapur.",
        optionA: "Common people",
        optionB: "Princes",
        optionC: "Warriors",
        correctAnswer: "Princes",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Drona agrees to teach the tribal prince.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ekalavya offers money as a fee to Drona for learning archery.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The person considers Ekalavya as their guru.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The tribal prince is already a skilled archer.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Drona is located in a tribal village.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Ekalavya claims to be a better archer than Drona.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ekalavya's motivation to become a skilled archer is to impress the princes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The people who initially ran away felt proud when they discovered the truth about the 'lion'.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Drona teaches only the common people of Hastinapur.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Ekalavya sacrifices his thumb willingly as a fee to Drona.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
