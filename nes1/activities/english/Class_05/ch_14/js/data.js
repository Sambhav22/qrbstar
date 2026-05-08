export const chapter = "Chapter -14: The Five Gifts of Life";
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
          question: "What were the five gifts presented by the fairy?",
          optionA: "Beauty, Wisdom, Power, Joy, Knowledge",
          optionB: "Fame, Love, Riches, Pleasure, Health",
          optionC: "Success, Adventure, Wealth, Happiness, Wisdom",
          correctAnswer: "Fame, Love, Riches, Pleasure, Health",
        }),
      shuffleOptions({
          question: "What did the youth choose as his first gift?",
          optionA: "Fame",
          optionB: "Pleasure",
          optionC: "Love",
          correctAnswer: "Pleasure",
        }),
      shuffleOptions({
          question:
            "After experiencing the shortcomings of his first choice, what did the man choose in the second round of gifts?",
          optionA: "Health",
          optionB: "Riches",
          optionC: "Love",
          correctAnswer: "Love",
        }),
      shuffleOptions({
          question: "What did the man eventually feel about the gift of Love?",
          optionA: "Regret and sorrow",
          optionB: "Happiness and contentment",
          optionC: "Indifference and apathy",
          correctAnswer: "Regret and sorrow",
        }),
      shuffleOptions({
          question:
            "In the third round of choices, what did the man choose after considering his experiences?",
          optionA: "Fame",
          optionB: "Riches",
          optionC: "Pleasure",
          correctAnswer: "Fame",
        }),
      shuffleOptions({
          question: "What happened to the man's fame over time?",
          optionA: "It lasted forever, bringing eternal happiness",
          optionB: "It led to envy, detraction, calumny, and hate",
          optionC: "It brought immense wealth and success",
          correctAnswer: "It led to envy, detraction, calumny, and hate",
        }),
      shuffleOptions({
          question:
            "What did the fairy say about the remaining two gifts after the man's experience with fame?",
          optionA: "Only one is precious; choose wisely",
          optionB: "Both are valuable; choose freely",
          optionC: "None are worth choosing; abandon the gifts",
          correctAnswer: "Only one is precious; choose wisely",
        }),
      shuffleOptions({
          question:
            "What did the man choose in the fourth round of gifts, thinking it would make life worth living?",
          optionA: "Health",
          optionB: "Fame",
          optionC: "Wealth",
          correctAnswer: "Wealth",
        }),
      shuffleOptions({
          question: "How did the man's life turn out after choosing wealth?",
          optionA: "Prosperous and joyful",
          optionB: "Filled with luxury and contentment",
          optionC:
            "Shivering in poverty, clothed in rags, and gnawing on a dry loaf",
          correctAnswer:
            "Shivering in poverty, clothed in rags, and gnawing on a dry loaf",
        }),
      shuffleOptions({
          question:
            "What was missing from the gifts brought by the fairy in the final encounter?",
          optionA: "Love",
          optionB: "Pleasure",
          optionC: "Health",
          correctAnswer: "Health",
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
          question:
            "In the morning of life, a good fairy came with her basket, offering __________ as gifts.",
          optionA: "Wisdom, Joy, Success",
          optionB: "Fame, Love, Riches",
          optionC: "Pleasure, Health, Adventure",
          correctAnswer: "Fame, Love, Riches",
        }),
      shuffleOptions({
          question:
            "The youth eagerly chose __________ as his first gift, only to find it short-lived and disappointing.",
          optionA: "Fame",
          optionB: "Love",
          optionC: "Pleasure",
          correctAnswer: "Pleasure",
        }),
      shuffleOptions({
          question:
            "After the disappointment with Pleasure, the man chose __________ as his second gift.",
          optionA: "Health",
          optionB: "Love",
          optionC: "Riches",
          correctAnswer: "Love",
        }),
      shuffleOptions({
          question:
            "The man, reflecting on his life, cursed __________ after experiencing grief and loss.",
          optionA: "Love",
          optionB: "Fame",
          optionC: "Pleasure",
          correctAnswer: "Love",
        }),
      shuffleOptions({
          question:
            "In the third round of choices, the man chose __________, leading to envy, detraction, and hate.",
          optionA: "Health",
          optionB: "Riches",
          optionC: "Pleasure",
          correctAnswer: "Riches",
        }),
      shuffleOptions({
          question:
            "The fairy, speaking to the man, mentioned that only __________ is precious among the remaining gifts.",
          optionA: "Wealth",
          optionB: "Fame",
          optionC: "Health",
          correctAnswer: "Health",
        }),
      shuffleOptions({
          question:
            "In the fourth round, the man thought __________ would make life worth living.",
          optionA: "Fame",
          optionB: "Wealth",
          optionC: "Health",
          correctAnswer: "Wealth",
        }),
      shuffleOptions({
          question:
            "However, after three short years, the man found himself shivering in poverty, regretting his choice of __________.",
          optionA: "Health",
          optionB: "Wealth",
          optionC: "Fame",
          correctAnswer: "Wealth",
        }),
      shuffleOptions({
          question:
            "The fairy mentioned that she gave __________ to a little child who trusted her to choose.",
          optionA: "Love",
          optionB: "Pleasure",
          optionC: "Health",
          correctAnswer: "Health",
        }),
      shuffleOptions({
          question:
            "In the end, the man had to face prolonged sickness through his old age due to the absence of __________.",
          optionA: "Love",
          optionB: "Pleasure",
          optionC: "Health",
          correctAnswer: "Health",
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
          question:
            "Gautam decided to present the enormous turnip to the king.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The king felt anger for Gautam and decided to raise him from poverty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "As a reward for presenting the turnip, the king bestowed on Gautam a horse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Upon hearing about Gautam's reward, Harsh felt joy towards his brother.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Harsh decided to present a painting to the king in hopes of receiving even greater rewards.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The king was pleased with Harsh's gifts and promised to give him a bag of gold.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Harsh was stunned when he learned that the king's gift to him was a turnip.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Harsh was obliged to take the turnip to the palace.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The turnip became a symbol of unity between the two brothers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Gautam's turnip brought him misfortune.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
