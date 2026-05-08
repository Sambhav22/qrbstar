export const chapter = "Chapter - 2: The Table and the Chair ";
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
        question: "What is the Table's complaint in the poem?",
        optionA: "It's suffering from the cold.",
        optionB: "It's suffering from the heat and chilblains.",
        optionC: "It wants to take a walk.",
        correctAnswer: "It's suffering from the heat and chilblains.",
     }),
      shuffleOptions({
        question: "What does the Table suggest to the Chair?",
        optionA: "They should have a little talk.",
        optionB: "They should stay inside.",
        optionC: "They should invite others over.",
        correctAnswer: "They should have a little talk.",
     }),
      shuffleOptions({
        question:
          "How does the Chair respond to the Table's suggestion to take a walk?",
        optionA: "The Chair agrees immediately.",
        optionB: "The Chair says it's not able to walk.",
        optionC: "The Chair wants to go for a walk.",
        correctAnswer: "The Chair says it's not able to walk.",
     }),
      shuffleOptions({
        question: "What does the Table suggest to convince the Chair to walk?",
        optionA: "It says they should exercise more.",
        optionB: "It points out they both have legs.",
        optionC: "It says they should invite friends over.",
        correctAnswer: "It points out they both have legs.",
     }),
      shuffleOptions({
        question: "What do the Table and the Chair decide to do?",
        optionA: "They decide to have a little talk.",
        optionB: "They decide to stay inside.",
        optionC: "They decide to take a walk.",
        correctAnswer: "They decide to take a walk.",
     }),
      shuffleOptions({
        question: "How do they move when they walk?",
        optionA: "Gracefully.",
        optionB: "Slowly with a bumpy sound.",
        optionC: "Quickly with elegance.",
        correctAnswer: "Slowly with a bumpy sound.",
     }),
      shuffleOptions({
        question:
          "How do people react when they see the Table and the Chair walking?",
        optionA: "They laugh at them.",
        optionB: "They are surprised and happy.",
        optionC: "They ignore them.",
        correctAnswer: "They are surprised and happy.",
     }),
      shuffleOptions({
        question: "Why does the Table want to take a walk?",
        optionA: "To show off its legs.",
        optionB: "To enjoy the town's scenery.",
        optionC: "To relieve its suffering from the heat and chilblains.",
        correctAnswer: "To relieve its suffering from the heat and chilblains.",
     }),
      shuffleOptions({
        question: "What does the Chair say about their ability to walk?",
        optionA: "They can walk anytime.",
        optionB: "They are too old to walk.",
        optionC: "They are not able to walk.",
        correctAnswer: "They are not able to walk.",
     }),
      shuffleOptions({
        question:
          "How does the poem describe the sound of the Table and Chair when they walk?",
        optionA: "Graceful and silent.",
        optionB: "Noisy and disturbing.",
        optionC: "With a cheerful bumpy sound.",
        correctAnswer: "With a cheerful bumpy sound.",
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
          'Said the Table to the Chair, \n"You can hardly be aware \nHow I suffer from the ____.',
        optionA: "cold",
        optionB: "heat",
        optionC: "darkness",
        correctAnswer: "heat",
     }),
      shuffleOptions({
        question:
          "And from chilblains on my feet! \nIf we took a little walk, \nWe might have a little ____!",
        optionA: "run",
        optionB: "rest",
        optionC: "talk",
        correctAnswer: "talk",
     }),
      shuffleOptions({
        question: "Pray let us take the ____!",
        optionA: "stairs",
        optionB: "floor",
        optionC: "air",
        correctAnswer: "air",
     }),
      shuffleOptions({
        question:
          'Said the Chair unto the Table, \n"Now you know we are not able! \nHow foolishly you ____,',
        optionA: "speak",
        optionB: "walk",
        optionC: "eat",
        correctAnswer: "walk",
     }),
      shuffleOptions({
        question: "When you know we cannot ____!",
        optionA: "talk",
        optionB: "run",
        optionC: "walk",
        correctAnswer: "walk",
     }),
      shuffleOptions({
        question: 'Said the Table with a sigh, \n"It can do no harm to ___.',
        optionA: "fly",
        optionB: "try",
        optionC: "cry",
        correctAnswer: "try",
     }),
      shuffleOptions({
        question: "I've as many legs as you, \nWhy can't we walk on ____?",
        optionA: "three",
        optionB: "four",
        optionC: "two",
        correctAnswer: "two",
     }),
      shuffleOptions({
        question: "So they both went slowly down, \nAnd walked about the ____",
        optionA: "forest",
        optionB: "town",
        optionC: "beach",
        correctAnswer: "town",
     }),
      shuffleOptions({
        question: "With a cheerful bumpy ____",
        optionA: "jump",
        optionB: "sound",
        optionC: "song",
        correctAnswer: "sound",
     }),
      shuffleOptions({
        question:
          "See, the Table and the Chair \nHave come out to take the ____!",
        optionA: "rain",
        optionB: "wind",
        optionC: "air",
        correctAnswer: "air",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Coffee is made from tea leaves.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The capital of France is Paris.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Water boils at 100 degrees Celsius at standard atmospheric pressure.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Earth orbits the Moon.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Oxygen is the most abundant element in the Earth's atmosphere.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Great Wall of China is visible from space with the naked eye.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Penguins can fly.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Earth has two moons.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Gold is a liquid at room temperature.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Amazon River is the longest river in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
