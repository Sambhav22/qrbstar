export const chapter = "Chapter -22: The Clever Bat";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "What animal is the central character of the story?",
          optionA: "Cat",
          optionB: "Bat",
          optionC: "Weasel",
          correctAnswer: "Bat",
        }),
      shuffleOptions({
          question: "What is the main characteristic of a bat's body?",
          optionA: "Feathers",
          optionB: "Wings without feathers",
          optionC: "Fur",
          correctAnswer: "Wings without feathers",
        }),
      shuffleOptions({
          question: "What reason does the bat give the cat to spare his life?",
          optionA: "He is a mouse",
          optionB: "He is a bird",
          optionC: "He is a bat",
          correctAnswer: "He is a bird",
        }),
      shuffleOptions({
          question: "Who catches the bat after he escapes from the cat?",
          optionA: "Cat",
          optionB: "Dog",
          optionC: "Weasel",
          correctAnswer: "Weasel",
        }),
      shuffleOptions({
          question: "How many times does the bat trick his captors?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Thrice",
          correctAnswer: "Twice",
        }),
      shuffleOptions({
          question: "What does the weasel initially mistake the bat for?",
          optionA: "Bird",
          optionB: "Mouse",
          optionC: "Cat",
          correctAnswer: "Bird",
        }),
      shuffleOptions({
          question:
            "What reason does the bat give the weasel to spare his life?",
          optionA: "He is a bird",
          optionB: "He is a mouse",
          optionC: "He is a bat",
          correctAnswer: "He is a mouse",
        }),
      shuffleOptions({
          question: "What is the main lesson from the story?",
          optionA: "Bats are clever",
          optionB: "Cats are easily fooled",
          optionC: "Adaptation to situations",
          correctAnswer: "Adaptation to situations",
        }),
      shuffleOptions({
          question: "How does the bat save himself from the weasel?",
          optionA: "By flying away",
          optionB: "By pretending to be a bird",
          optionC: "By pretending to be a mouse",
          correctAnswer: "By pretending to be a mouse",
        }),
      shuffleOptions({
          question: "What is the ultimate fate of the bat?",
          optionA: "Eaten by the cat",
          optionB: "Eaten by the weasel",
          optionC: "Escapes",
          correctAnswer: "Escapes",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Bats catch their prey at _________.",
          optionA: "day",
          optionB: "night",
          optionC: "dawn",
          correctAnswer: "night",
        }),
      shuffleOptions({
          question: "Bats have wings but without _________.",
          optionA: "fur",
          optionB: "feathers",
          optionC: "scales",
          correctAnswer: "feathers",
        }),
      shuffleOptions({
          question:
            "In some parts of the world, bats are also eaten as _________.",
          optionA: "pets",
          optionB: "food",
          optionC: "companions",
          correctAnswer: "food",
        }),
      shuffleOptions({
          question: "The bat begged the cat for its _________.",
          optionA: "paws",
          optionB: "wings",
          optionC: "life",
          correctAnswer: "life",
        }),
      shuffleOptions({
          question: "The cat mistook the bat for a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "weasel",
          correctAnswer: "mouse",
        }),
      shuffleOptions({
          question: "The bat tricked the weasel by claiming to be a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "cat",
          correctAnswer: "mouse",
        }),
      shuffleOptions({
          question: "The bat claimed to be a bird to the _________.",
          optionA: "weasel",
          optionB: "cat",
          optionC: "dog",
          correctAnswer: "cat",
        }),
      shuffleOptions({
          question:
            "The cat spared the bat's life because it thought the bat was a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "weasel",
          correctAnswer: "bird",
        }),
      shuffleOptions({
          question: "The weasel believed the bat to be a _________.",
          optionA: "cat",
          optionB: "bird",
          optionC: "mouse",
          correctAnswer: "mouse",
        }),
      shuffleOptions({
          question: "The bat used _________ to save its life twice.",
          optionA: "tricks",
          optionB: "force",
          optionC: "intelligence",
          correctAnswer: "tricks",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Bats catch their prey during the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Bats have feathers on their wings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Bats are never eaten as food in any part of the world.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The cat wanted to eat the bat because it thought the bat was a mouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The weasel believed the bat to be a bird.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The cat spared the bat's life because it didn't like birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The weasel hated mice because they smell bad.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The bat used force to save its life twice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The cat believed the bat to be a mouse because of its appearance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The weasel spared the bat's life because it didn't like birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
