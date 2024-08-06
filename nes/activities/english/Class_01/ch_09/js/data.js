export const chapter = "Chapter - 9: Mouse Goes for a Walk ";
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
        question: "What did the mouse enjoy doing in the morning and evening?",
        optionA: "Cooking",
        optionB: "Going for a walk",
        optionC: "Reading",
        correctAnswer: "Going for a walk",
     }),
      shuffleOptions({
        question: "Why couldn't the mouse go for a walk for a few days?",
        optionA: "It was raining",
        optionB: "He was sick",
        optionC: "A mouser was living outside his hole",
        correctAnswer: "A mouser was living outside his hole",
     }),
      shuffleOptions({
        question:
          "How did the mouse feel about not being able to go for a walk?",
        optionA: "Indifferent",
        optionB: "Excited",
        optionC: "Disappointed",
        correctAnswer: "Disappointed",
     }),
      shuffleOptions({
        question:
          "What did the mouse find when he looked out one day after sunset?",
        optionA: "Another mouse",
        optionB: "The mouser",
        optionC: "A delicious meal",
        correctAnswer: "The mouser",
     }),
      shuffleOptions({
        question:
          "When the mouse decided to go for a walk, what did his wife say?",
        optionA: "Don't go, it's too dark.",
        optionB: "Be careful, the mouser might be outside.",
        optionC: "Take the kids with you.",
        correctAnswer: "Be careful, the mouser might be outside.",
     }),
      shuffleOptions({
        question:
          "What did the mouse tell his wife when she expressed concern?",
        optionA: "I'm not going anymore.",
        optionB: "I have checked, she is not around.",
        optionC: "Let's all go for a walk together.",
        correctAnswer: "I have checked, she is not around.",
     }),
      shuffleOptions({
        question: "What happened when the mouse was enjoying his walk?",
        optionA: "It started raining",
        optionB: "He met a friend",
        optionC: "He noticed the mouser coming",
        correctAnswer: "He noticed the mouser coming",
     }),
      shuffleOptions({
        question: "How did the mouse react when he saw the mouser coming?",
        optionA: "He continued walking",
        optionB: "He ran to his hole",
        optionC: "He started chatting with the mouser",
        correctAnswer: "He ran to his hole",
     }),
      shuffleOptions({
        question: "What was the mouse's condition when he entered his hole?",
        optionA: "Hungry",
        optionB: "Excited",
        optionC: "Out of breath",
        correctAnswer: "Out of breath",
     }),
      shuffleOptions({
        question: "What did the mouse feel after escaping the mouser?",
        optionA: "Angry",
        optionB: "Relieved",
        optionC: "Hungry",
        correctAnswer: "Relieved",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "In a hole near the main street, there lived a __________ with his family - his wife and three kids.",
        optionA: "Cat",
        optionB: "Mouse",
        optionC: "Rabbit",
        correctAnswer: "Mouse",
     }),
      shuffleOptions({
        question:
          "The mouse was fond of going out for a walk in the __________ and evening.",
        optionA: "Afternoon",
        optionB: "Morning",
        optionC: "Night",
        correctAnswer: "Morning and evening",
     }),
      shuffleOptions({
        question:
          "The mouse couldn't go for a walk because a __________ had come to live just outside his hole.",
        optionA: "Bird",
        optionB: "Mouser",
        optionC: "Squirrel",
        correctAnswer: "Mouser",
     }),
      shuffleOptions({
        question: "The mouse's family included his wife and __________ kids.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "The mouse felt __________ when he couldn't go for a walk for many days.",
        optionA: "Excited",
        optionB: "Indifferent",
        optionC: "Disappointed",
        correctAnswer: "Disappointed",
     }),
      shuffleOptions({
        question:
          "One day, after the sun set, the mouse saw the mouser __________.",
        optionA: "Playing",
        optionB: "Sleeping",
        optionC: "Nowhere around",
        correctAnswer: "Nowhere around",
     }),
      shuffleOptions({
        question:
          "The mouse assured his wife that he had __________, so he was going for a walk.",
        optionA: "Checked the weather",
        optionB: "Checked the mouser",
        optionC: "Checked his watch",
        correctAnswer: "Checked the mouser",
     }),
      shuffleOptions({
        question:
          "The mouse turned and ran to his hole when he noticed the __________ coming.",
        optionA: "Rabbit",
        optionB: "Mouser",
        optionC: "Squirrel",
        correctAnswer: "Mouser",
     }),
      shuffleOptions({
        question:
          "The mouse's wife warned him not to go because the __________ might be outside.",
        optionA: "Rain",
        optionB: "Wind",
        optionC: "Mouser",
        correctAnswer: "Mouser",
     }),
      shuffleOptions({
        question:
          "The mouse escaped from the mouser and entered his hole __________.",
        optionA: "Happily",
        optionB: "Tired",
        optionC: "Out of breath",
        correctAnswer: "Out of breath",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The mouse lived near the main street with his family.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The mouse's family included his wife and two kids.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The mouse enjoyed going out for a walk in the morning only.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The mouse couldn't go for a walk because of a rabbit near his hole.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The mouse's wife encouraged him to go for a walk when he wanted to.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The mouse saw the mouser outside one day after sunset.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The mouse checked and confirmed that the mouser was not around before going for a walk.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The mouse ran to his hole when he noticed the mouser coming.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The mouse's wife warned him about the rain before he went for a walk.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The mouse felt disappointed when he couldn't go for a walk.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
