export const chapter = "Chapter -14: Row Your Boat";
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
          question: "What happens if you spring a leak while rowing your boat?",
          optionA: "You might get your bottom wet",
          optionB: "You'll start to scream",
          optionC: "The boat will capsize",
          correctAnswer: "You might get your bottom wet",
        }),
      shuffleOptions({
          question:
            "According to the text, what should you not do while rowing the boat?",
          optionA: "Stand up and rock the boat",
          optionB: "Row faster",
          optionC: "Sing loudly",
          correctAnswer: "Stand up and rock the boat",
        }),
      shuffleOptions({
          question:
            "Where are you gently rowing your boat in the first stanza?",
          optionA: "Up the creek",
          optionB: "Down the stream",
          optionC: "Across the ocean",
          correctAnswer: "Up the creek",
        }),
      shuffleOptions({
          question:
            "What should you do when you hit the waterfall while rowing your boat?",
          optionA: "Start screaming",
          optionB: "Keep rowing gently",
          optionC: "Prepare for trouble",
          correctAnswer: "Start screaming",
        }),
      shuffleOptions({
          question: "What is described as a big mistake in the text?",
          optionA: "Not rowing the boat",
          optionB: "Rocking the boat",
          optionC: "Standing up in the boat",
          correctAnswer: "Rocking the boat",
        }),
      shuffleOptions({
          question:
            "What action might lead to getting wet while rowing your boat?",
          optionA: "Singing loudly",
          optionB: "Springing a leak",
          optionC: "Standing still",
          correctAnswer: "Springing a leak",
        }),
      shuffleOptions({
          question:
            "In which body of water are you gently rowing your boat in the second stanza?",
          optionA: "A creek",
          optionB: "A lake",
          optionC: "A stream",
          correctAnswer: "A lake",
        }),
      shuffleOptions({
          question:
            "What happens if you stand up and rock the boat according to the text?",
          optionA: "You'll capsize the boat",
          optionB: "You'll make it go faster",
          optionC: "You'll have more fun",
          correctAnswer: "You'll capsize the boat",
        }),
      shuffleOptions({
          question:
            "What should you do while rowing your boat down the stream?",
          optionA: "Stand up",
          optionB: "Row vigorously",
          optionC: "Row gently",
          correctAnswer: "Row gently",
        }),
      shuffleOptions({
          question:
            "What warning is given when rowing your boat down the stream?",
          optionA: "Beware of rocks",
          optionB: "Prepare for a rough ride",
          optionC: "Until you hit the waterfall",
          correctAnswer: "Until you hit the waterfall",
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
          question: "Row, row, row your boat, gently up the __________.",
          optionA: "creek",
          optionB: "lake",
          optionC: "stream",
          correctAnswer: "creek",
        }),
      shuffleOptions({
          question:
            "Don't stand up and _________ the boat, that's a big mistake.",
          optionA: "rock",
          optionB: "row",
          optionC: "flip",
          correctAnswer: "rock",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently round the ________.",
          optionA: "creek",
          optionB: "lake",
          optionC: "stream",
          correctAnswer: "lake",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently down the __________.",
          optionA: "creek",
          optionB: "lake",
          optionC: "stream",
          correctAnswer: "stream",
        }),
      shuffleOptions({
          question:
            "Until you hit the __________, then you'll start to scream.",
          optionA: "waterfall",
          optionB: "rock",
          optionC: "shore",
          correctAnswer: "waterfall",
        }),
      shuffleOptions({
          question: "If you spring a _________, you might get your bottom wet.",
          optionA: "song",
          optionB: "leak",
          optionC: "wave",
          correctAnswer: "leak",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently up the ________.",
          optionA: "creek",
          optionB: "river",
          optionC: "stream",
          correctAnswer: "creek",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently round the ________.",
          optionA: "pond",
          optionB: "lake",
          optionC: "river",
          correctAnswer: "lake",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently down the ________.",
          optionA: "creek",
          optionB: "river",
          optionC: "stream",
          correctAnswer: "stream",
        }),
      shuffleOptions({
          question:
            "Until you hit the waterfall, then you'll start to ________.",
          optionA: "sing",
          optionB: "row",
          optionC: "scream",
          correctAnswer: "scream",
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
          question: "Row, row, row your boat, gently up the creek.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "You might get your bottom wet if you spring a leak.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Don't stand up and rock the boat, that's a big mistake.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently down the stream.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Until you hit the waterfall, then you'll start to scream.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Rowing the boat faster is encouraged according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "It's safe to stand up in the boat while rowing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Row, row, row your boat, gently round the lake.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Springing a leak will make your boat capsize.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "You should row gently while rowing your boat down the stream.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
