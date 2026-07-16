export const chapter = "Chapter - 16: Nikki Learns a Lesson";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What did Nikki see the man wearing?",
        optionA: "A cap",
        optionB: "A jacket",
        optionC: "A large hat",
        correctAnswer: "A large hat",
      }),
      shuffleOptions({
        question: "What kind of acts did Nikki often do?",
        optionA: "Helpful",
        optionB: "Naughty",
        optionC: "Brave",
        correctAnswer: "Naughty",
      }),
      shuffleOptions({
        question: "Nikki put on the hat and it covered his —",
        optionA: "Tail and nose",
        optionB: "Eyes and mouth",
        optionC: "Ears and hands",
        correctAnswer: "Eyes and mouth",
      }),
      shuffleOptions({
        question: "What happened before Nikki could throw the hat away?",
        optionA: "He ran away",
        optionB: "The man caught him",
        optionC: "He gave the hat to someone",
        correctAnswer: "The man caught him",
      }),
      shuffleOptions({
        question: "Where did the man put Nikki?",
        optionA: "In a cage",
        optionB: "In a basket",
        optionC: "In a bag",
        correctAnswer: "In a bag",
      }),
      shuffleOptions({
        question: "Who blew off the man's hat?",
        optionA: "Nikki",
        optionB: "Wind",
        optionC: "A bird",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "What did Nikki do when the man ran after the hat?",
        optionA: "Slept",
        optionB: "Escaped from the bag",
        optionC: "Cried loudly",
        correctAnswer: "Escaped from the bag",
      }),
      shuffleOptions({
        question: "Nikki ran away and climbed up a —",
        optionA: "Rock",
        optionB: "House",
        optionC: "Tree",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "What was the man's job?",
        optionA: "Gardener",
        optionB: "Monkey-catcher",
        optionC: "Postman",
        correctAnswer: "Monkey-catcher",
      }),
      shuffleOptions({
        question: "What did Nikki realise at the end?",
        optionA: "That hats are fun",
        optionB: "That luck won't help every time",
        optionC: "That he should eat bananas",
        correctAnswer: "That luck won't help every time",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nikki was a little ______.",
        optionA: "Dog",
        optionB: "Monkey",
        optionC: "Cat",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Nikki lived at the edge of the ______.",
        optionA: "River",
        optionB: "Forest",
        optionC: "Village",
        correctAnswer: "Forest",
      }),
      shuffleOptions({
        question: "Nikki ran off with the ______.",
        optionA: "Bag",
        optionB: "Hat",
        optionC: "Fruit",
        correctAnswer: "Hat",
      }),
      shuffleOptions({
        question: "The hat was too ______ for Nikki.",
        optionA: "Bright",
        optionB: "Big",
        optionC: "Small",
        correctAnswer: "Big",
      }),
      shuffleOptions({
        question: "Nikki said, 'This is ______ for me.'",
        optionA: "Fun",
        optionB: "Useless",
        optionC: "Good",
        correctAnswer: "Useless",
      }),
      shuffleOptions({
        question: "The monkey-catcher ______ caught Nikki.",
        optionA: "Happily",
        optionB: "Slowly",
        optionC: "Immediately",
        correctAnswer: "Immediately",
      }),
      shuffleOptions({
        question: "The wind started to ______.",
        optionA: "Rain",
        optionB: "Blow",
        optionC: "Shout",
        correctAnswer: "Blow",
      }),
      shuffleOptions({
        question: "Nikki was in great ______.",
        optionA: "Trouble",
        optionB: "Fun",
        optionC: "Joy",
        correctAnswer: "Trouble",
      }),
      shuffleOptions({
        question: "Nikki tried to ______ himself.",
        optionA: "Free",
        optionB: "Call",
        optionC: "Help",
        correctAnswer: "Free",
      }),
      shuffleOptions({
        question: "It was a new ______ for Nikki.",
        optionA: "Game",
        optionB: "Lesson",
        optionC: "Hat",
        correctAnswer: "Lesson",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nikki was a little monkey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nikki lived in a city apartment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The man Nikki saw was wearing a large hat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nikki knew the man was a monkey-catcher.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nikki liked the hat because it was colourful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hat covered Nikki's eyes and mouth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man put Nikki in a bag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wind helped Nikki by blowing off the bag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nikki escaped when the man ran after his hat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nikki learnt that luck is always with us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;