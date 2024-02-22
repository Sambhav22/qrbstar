export const chapter = "Chapter - 13: Life: It's Fun";
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
        question: "What is described as a joy in the text?",
        optionA: "Life",
        optionB: "Birth",
        optionC: "Pleasure",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question: "How should life be treated according to the text?",
        optionA: "As a burden",
        optionB: "Like a treasure",
        optionC: "With indifference",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question: "What is compared to a treasure in the text?",
        optionA: "Birth",
        optionB: "Life",
        optionC: "Pleasure",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "What should one do in the sun's warmth according to the text?",
        optionA: "Bask",
        optionB: "Hide",
        optionC: "Shiver",
        correctAnswer: "A",
     }),
      shuffleOptions({
        question: "What is described as 'a poetry' in the text?",
        optionA: "Nature's marvels",
        optionB: "The flight of birds",
        optionC: "Twinkling stars",
        correctAnswer: "A",
     }),
      shuffleOptions({
        question:
          "What dispels the gloom of the darkness of the night in the text?",
        optionA: "Radiant moon",
        optionB: "Twinkling stars",
        optionC: "Flight of birds",
        correctAnswer: "A",
     }),
      shuffleOptions({
        question: "How should one relate to others according to the text?",
        optionA: "As foes",
        optionB: "As friends",
        optionC: "With indifference",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question: "Who are referred to as 'His own creatures' in the text?",
        optionA: "Humans only",
        optionB: "Beasts and birds only",
        optionC: "Everyone - men, beasts, and birds",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question: "What should not be squandered, according to the text?",
        optionA: "Time",
        optionB: "Money",
        optionC: "Energy",
        correctAnswer: "A",
     }),
      shuffleOptions({
        question:
          "What is encouraged in the text instead of judging others' worth?",
        optionA: "Treating everyone as foes",
        optionB: "Relating with everyone as friends",
        optionC: "Avoiding interaction with others",
        correctAnswer: "B",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birth is a _______________ joy.",
        options: ["great", "wonderful", "joyful"],
        correctAnswer: "wonderful",
     }),
      shuffleOptions({
        question: "Life is a _______________ pleasure.",
        options: ["beautiful", "delightful", "pleasurable"],
        correctAnswer: "pleasurable",
     }),
      shuffleOptions({
        question: "Treat life like a _______________ treasure.",
        options: ["hidden", "precious", "mysterious"],
        correctAnswer: "precious",
     }),
      shuffleOptions({
        question: "Bask in the sun's _______________ warmth.",
        options: ["gentle", "soothing", "radiant"],
        correctAnswer: "radiant",
     }),
      shuffleOptions({
        question: "Inhale the aroma of _______________ Earth.",
        options: ["fertile", "fragrant", "vibrant"],
        correctAnswer: "fragrant",
     }),
      shuffleOptions({
        question: "Feast your eyes on Nature's _______________ marvels.",
        options: ["breathtaking", "awe-inspiring", "majestic"],
        correctAnswer: "awe-inspiring",
     }),
      shuffleOptions({
        question: "The flight of the birds in the _______________ sky.",
        options: ["limitless", "boundless", "infinite"],
        correctAnswer: "boundless",
     }),
      shuffleOptions({
        question: "The twinkling stars so _______________.",
        options: ["brilliant", "shimmering", "dazzling"],
        correctAnswer: "dazzling",
     }),
      shuffleOptions({
        question: "The radiant moon dispelling the _______________ gloom.",
        options: ["endless", "intense", "pervading"],
        correctAnswer: "pervading",
     }),
      shuffleOptions({
        question: "Squander not time so _______________ precious.",
        options: ["extremely", "exceptionally", "incredibly"],
        correctAnswer: "incredibly",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The disease mentioned in the text is caused by a virus.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Maintaining cleanliness is not essential for preventing diseases.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text recommends eating snacks from the market for a healthy diet.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Physical exercise can include activities like running and playing games.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "It is essential to wash your hands with soap when entering the house from outside.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that sleeping late and rising late is beneficial for health.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Snacks are considered good for health because they are tasty to eat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Maintaining hygiene can help keep diseases away.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "According to the text, thinking is a method to take a rest for the brain.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
