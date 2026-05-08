export const chapter = "Chapter -14: The Turnip";
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
          question: "Who were the two brothers in the story?",
          optionA: "Gautam and Hari",
          optionB: "Gautam and Harsh",
          optionC: "Hari and Harsh",
          correctAnswer: "Gautam and Harsh",
        }),
      shuffleOptions({
          question: "What did Gautam sow in his field?",
          optionA: "Wheat",
          optionB: "Rice",
          optionC: "Turnip-seeds",
          correctAnswer: "Turnip-seeds",
        }),
      shuffleOptions({
          question: "What did Gautam do with the giant turnip?",
          optionA: "Ate it himself",
          optionB: "Sold it",
          optionC: "Presented it to the king",
          correctAnswer: "Presented it to the king",
        }),
      shuffleOptions({
          question: "How did the king react upon seeing the giant turnip?",
          optionA: "He was angry",
          optionB: "He was amazed",
          optionC: "He was disappointed",
          correctAnswer: "He was amazed",
        }),
      shuffleOptions({
          question: "What did the king give to Gautam as a reward?",
          optionA: "A small piece of land",
          optionB: "Much gold and a large piece of land",
          optionC: "A small amount of gold",
          correctAnswer: "Much gold and a large piece of land",
        }),
      shuffleOptions({
          question: "What did Harsh bring as gifts to the king?",
          optionA: "Two Arabian horses and a box of precious stones",
          optionB: "A turnip and some vegetables",
          optionC: "A basket of apples and oranges",
          correctAnswer: "Two Arabian horses and a box of precious stones",
        }),
      shuffleOptions({
          question:
            "How did Harsh feel when the king gave him a turnip as a reward?",
          optionA: "Happy",
          optionB: "Angry",
          optionC: "Sad",
          correctAnswer: "Stunned",
        }),
      shuffleOptions({
          question:
            "What did Harsh have to do with the turnip given by the king?",
          optionA: "Eat it",
          optionB: "Throw it away",
          optionC: "Take it home",
          correctAnswer: "Take it home",
        }),
      shuffleOptions({
          question:
            "What was Gautam's condition after presenting the giant turnip to the king?",
          optionA: "He remained poor",
          optionB: "He became rich",
          optionC: "He became a servant",
          correctAnswer: "He became rich",
        }),
      shuffleOptions({
          question: "What was Harsh's reaction upon realizing the king's gift?",
          optionA: "He was pleased",
          optionB: "He was disappointed",
          optionC: "He was indifferent",
          correctAnswer: "He was disappointed",
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
            "Gautam decided to present the enormous turnip to ________.",
          optionA: "his brother",
          optionB: "the king",
          optionC: "his friend",
          correctAnswer: "the king",
        }),
      shuffleOptions({
          question:
            "The king felt ________ for Gautam and decided to raise him from poverty.",
          optionA: "anger",
          optionB: "compassion",
          optionC: "jealousy",
          correctAnswer: "compassion",
        }),
      shuffleOptions({
          question:
            "As a reward for presenting the turnip, the king bestowed on Gautam ________.",
          optionA: "a horse",
          optionB: "gold and land",
          optionC: "a box of precious stones",
          correctAnswer: "gold and land",
        }),
      shuffleOptions({
          question:
            "Upon hearing about Gautam's reward, Harsh felt ________ towards his brother.",
          optionA: "joy",
          optionB: "anger",
          optionC: "envy",
          correctAnswer: "envy",
        }),
      shuffleOptions({
          question:
            "Harsh decided to present ________ to the king in hopes of receiving even greater rewards.",
          optionA: "a painting",
          optionB: "two Arabian horses and a box of precious stones",
          optionC: "a poem",
          correctAnswer: "two Arabian horses and a box of precious stones",
        }),
      shuffleOptions({
          question:
            "The king was pleased with Harsh's gifts and promised to give him ________.",
          optionA: "a small piece of land",
          optionB: "a bag of gold",
          optionC: "a unique turnip",
          correctAnswer: "a unique turnip",
        }),
      shuffleOptions({
          question:
            "Harsh was stunned when he learned that the king's gift to him was ________.",
          optionA: "a horse",
          optionB: "a bag of gold",
          optionC: "a turnip",
          correctAnswer: "a turnip",
        }),
      shuffleOptions({
          question: "Harsh was obliged to take the turnip ________.",
          optionA: "to the market",
          optionB: "to the palace",
          optionC: "home",
          correctAnswer: "home",
        }),
      shuffleOptions({
          question:
            "The turnip became a symbol of ________ between the two brothers.",
          optionA: "rivalry",
          optionB: "unity",
          optionC: "harmony",
          correctAnswer: "rivalry",
        }),
      shuffleOptions({
          question: "Gautam's turnip brought him ________.",
          optionA: "misfortune",
          optionB: "poverty",
          optionC: "riches",
          correctAnswer: "riches",
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
          question: "Gautam decided to sell the enormous turnip to a merchant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The king was indifferent towards Gautam's gift.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Harsh presented a horse and a box of precious stones to the king.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Harsh was delighted when he learned about the king's gift to him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Gautam's turnip became a source of jealousy for Harsh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The king promised to give Harsh a bag of gold.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Harsh was obliged to take the turnip to the palace.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The turnip brought misfortune to Gautam.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Harsh's gifts to the king were unique and unprecedented.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The turnip symbolized harmony between the two brothers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
