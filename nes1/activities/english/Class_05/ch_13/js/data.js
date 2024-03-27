export const chapter = "Chapter -13: The Zigzag Children";
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
          question:
            "What is the characteristic behavior of the zigzag boy mentioned in the poem?",
          optionA: "He always knows where he puts his things.",
          optionB:
            "He goes this way and that and struggles to keep track of his belongings.",
          optionC: "He is organized and neat.",
          correctAnswer:
            "He goes this way and that and struggles to keep track of his belongings.",
        }),
      shuffleOptions({
          question: "How does the zigzag girl behave in the poem?",
          optionA: "She is always well-organized.",
          optionB: "She flutters here and there without a specific direction.",
          optionC: "She is meticulous in finding her belongings.",
          correctAnswer:
            "She flutters here and there without a specific direction.",
        }),
      shuffleOptions({
          question:
            "What is a common challenge faced by both the zigzag boy and girl?",
          optionA: "They always remember where they put their things.",
          optionB: "They often forget where they placed their belongings.",
          optionC: "They have a systematic approach to finding their items.",
          correctAnswer:
            "They often forget where they placed their belongings.",
        }),
      shuffleOptions({
          question: "What does the zigzag girl struggle to find in the poem?",
          optionA: "Her coat",
          optionB: "Her shoes",
          optionC: "Her brush",
          correctAnswer: "Her brush",
        }),
      shuffleOptions({
          question:
            "What quality is highlighted in the last two lines of the poem?",
          optionA: "Forgetfulness",
          optionB: "Neatness",
          optionC: "Organization",
          correctAnswer: "Organization",
        }),
      shuffleOptions({
          question:
            "According to the poem, what is the advantage of not being a zigzag child?",
          optionA: "Always forgetting where things are put away.",
          optionB: "Knowing where things are put away.",
          optionC: "Flutters here and there without a specific direction.",
          correctAnswer: "Knowing where things are put away.",
        }),
      shuffleOptions({
          question: "What is the central theme of the poem?",
          optionA: "Forgetfulness",
          optionB: "Neatness",
          optionC: "Being organized",
          correctAnswer: "Being organized",
        }),
      shuffleOptions({
          question:
            "How would you describe the zigzag boy's movement in the poem?",
          optionA: "Straight and precise",
          optionB: "Unpredictable and meandering",
          optionC: "Slow and deliberate",
          correctAnswer: "Unpredictable and meandering",
        }),
      shuffleOptions({
          question:
            "What does the zigzag girl struggle to find according to the poem?",
          optionA: "Her hat",
          optionB: "Her shoes",
          optionC: "Her brush",
          correctAnswer: "Her brush",
        }),
      shuffleOptions({
          question: "In the context of the poem, what does 'zigzag' symbolize?",
          optionA: "Precision",
          optionB: "Organized movement",
          optionC: "Unpredictability",
          correctAnswer: "Unpredictability",
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
          question: "I know a little zigzag __________.",
          optionA: "house",
          optionB: "boy",
          optionC: "path",
          correctAnswer: "boy",
        }),
      shuffleOptions({
          question:
            "The zigzag boy never knows just where he puts his coat or shoes or __________.",
          optionA: "socks",
          optionB: "hat",
          optionC: "gloves",
          correctAnswer: "hat",
        }),
      shuffleOptions({
          question:
            "I know a little zigzag __________, Who flutters here and there;",
          optionA: "child",
          optionB: "girl",
          optionC: "friend",
          correctAnswer: "girl",
        }),
      shuffleOptions({
          question:
            "The zigzag girl never knows just where to find her brush to fix her __________.",
          optionA: "nails",
          optionB: "hair",
          optionC: "dress",
          correctAnswer: "hair",
        }),
      shuffleOptions({
          question:
            "If you are not a zigzag child, you'll have no cause to say that you __________.",
          optionA: "remember",
          optionB: "forgot",
          optionC: "understand",
          correctAnswer: "forgot",
        }),
      shuffleOptions({
          question:
            "The zigzag boy goes this way and __________; he struggles to keep track of his belongings.",
          optionA: "that",
          optionB: "here",
          optionC: "there",
          correctAnswer: "that",
        }),
      shuffleOptions({
          question:
            "The zigzag girl flutters here and __________ without a specific direction.",
          optionA: "there",
          optionB: "everywhere",
          optionC: "nowhere",
          correctAnswer: "there",
        }),
      shuffleOptions({
          question:
            "She never knows just where to find her brush to fix her __________.",
          optionA: "clothes",
          optionB: "hair",
          optionC: "shoes",
          correctAnswer: "hair",
        }),
      shuffleOptions({
          question:
            "If you are not a zigzag child, you'll know where things are __________ away.",
          optionA: "put",
          optionB: "thrown",
          optionC: "hidden",
          correctAnswer: "put",
        }),
      shuffleOptions({
          question:
            "The zigzag boy and girl often forget where they placed their __________.",
          optionA: "toys",
          optionB: "belongings",
          optionC: "books",
          correctAnswer: "belongings",
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
          question: "The zigzag boy always knows where he puts his belongings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The zigzag girl is meticulous in finding her belongings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The zigzag boy and girl have a systematic approach to finding their items.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The zigzag girl struggles to find her shoes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "If you are not a zigzag child, you'll always remember where things are put away.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The zigzag boy goes in a straight and precise manner.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The zigzag girl flutters here and there with a specific direction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The zigzag girl struggles to find her hat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "If you are not a zigzag child, you'll forget where things are put away.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In the context of the poem, 'zigzag' symbolizes organized movement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
