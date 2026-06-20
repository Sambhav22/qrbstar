export const chapter = "Chapter - 9: Games We Play";
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
            "What is one of the benefits of playing games mentioned in the text?",
          optionA: "Stay fit",
          optionB: "Learn new skills",
          optionC: "Read books",
          correctAnswer: "Stay fit",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as an indoor game in the text?",
          optionA: "Ludo",
          optionB: "Cards",
          optionC: "Cricket",
          correctAnswer: "Cricket",
         }),
      shuffleOptions({
          question:
            "What type of games are Ludo, cards, Scrabble, and chess mentioned as in the text?",
          optionA: "Outdoor games",
          optionB: "Indoor games",
          optionC: "Video games",
          correctAnswer: "Indoor games",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as an outdoor game in the text?",
          optionA: "Football",
          optionB: "Tennis",
          optionC: "Kho-kho",
          correctAnswer: "Tennis",
         }),
      shuffleOptions({
          question:
            "What is the text's main focus on when it comes to playing games?",
          optionA: "Learning new words",
          optionB: "Maintaining a social life",
          optionC: "Physical activity",
          correctAnswer: "Physical activity",
         }),
      shuffleOptions({
          question:
            "Which game mentioned in the text is typically played with a board and tiles?",
          optionA: "Cricket",
          optionB: "Ludo",
          optionC: "Tennis",
          correctAnswer: "Ludo",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a game played outdoors in the text?",
          optionA: "Cricket",
          optionB: "Football",
          optionC: "Scrabble",
          correctAnswer: "Scrabble",
         }),
      shuffleOptions({
          question:
            "What is the primary purpose of mentioning games in the text?",
          optionA: "To promote reading",
          optionB: "To encourage outdoor activities",
          optionC: "To highlight the role of games in physical well-being",
          correctAnswer:
            "To highlight the role of games in physical well-being",
         }),
      shuffleOptions({
          question:
            "In the context of the text, which type of games do people play to maintain their physical health?",
          optionA: "Board games",
          optionB: "Indoor games",
          optionC: "Outdoor games",
          correctAnswer: "Outdoor games",
         }),
      shuffleOptions({
          question:
            "What is the purpose of the list of games provided in the text, such as Ludo, cards, Scrabble, and chess?",
          optionA: "To mention popular sports",
          optionB: "To list indoor games",
          optionC: "To showcase video games",
          correctAnswer: "To list indoor games",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Games help us to __________ and be __________.",
          optionA: "Stay fit, sleep",
          optionB: "Learn, creative",
          optionC: "Exercise, healthy",
          correctAnswer: "Stay fit, be active",
         }),
      shuffleOptions({
          question:
            "We play many indoor games such as __________, cards, Scrabble, and chess.",
          optionA: "Ludo",
          optionB: "Football",
          optionC: "Basketball",
          correctAnswer: "Ludo",
         }),
      shuffleOptions({
          question: "These all are __________ games.",
          optionA: "Outdoor",
          optionB: "Indoor",
          optionC: "Virtual",
          correctAnswer: "Indoor",
         }),
      shuffleOptions({
          question:
            "We also play games such as cricket, football, tennis, and __________.",
          optionA: "Badminton",
          optionB: "Baseball",
          optionC: "Kho-kho",
          correctAnswer: "Kho-kho",
         }),
      shuffleOptions({
          question: "Games help us to stay physically __________.",
          optionA: "Tired",
          optionB: "Weak",
          optionC: "Active",
          correctAnswer: "Active",
         }),
      shuffleOptions({
          question:
            "Indoor games mentioned in the text include Ludo, cards, Scrabble, and __________.",
          optionA: "Football",
          optionB: "Chess",
          optionC: "Basketball",
          correctAnswer: "Chess",
         }),
      shuffleOptions({
          question:
            "Cricket, football, tennis, and kho-kho are examples of __________ games.",
          optionA: "Indoor",
          optionB: "Virtual",
          optionC: "Outdoor",
          correctAnswer: "Outdoor",
         }),
      shuffleOptions({
          question: "We also play games to stay __________ and __________.",
          optionA: "Unhealthy, weak",
          optionB: "Active, fit",
          optionC: "Bored, tired",
          correctAnswer: "Active, fit",
         }),
      shuffleOptions({
          question:
            "The text highlights the role of games in maintaining physical __________.",
          optionA: "Intelligence",
          optionB: "Health",
          optionC: "Wealth",
          correctAnswer: "Health",
         }),
      shuffleOptions({
          question:
            "Games such as cricket, football, and tennis are typically played __________.",
          optionA: "In the bedroom",
          optionB: "In the kitchen",
          optionC: "Outdoors",
          correctAnswer: "Outdoors",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Games help us to stay fit and be active.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "We play indoor games such as Ludo, cards, Scrabble, and chess.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "These indoor games are also called outdoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Cricket, football, tennis, and kho-kho are indoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Playing games helps us to stay unhealthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Chess is typically played with a board and tiles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "We also play games to stay bored and tired.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The primary purpose of mentioning games in the text is to promote reading.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "People play indoor games to maintain their physical health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Food chains follow a circular path.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
