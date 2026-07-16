export const chapter = "Chapter - 4: The Greedy Dog";
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
        question: "Where did the dog go first?",
        optionA: "market",
        optionB: "butcher's shop",
        optionC: "bakery",
        correctAnswer: "butcher's shop",
      }),
      shuffleOptions({
        question: "What did the dog want to do with the bone?",
        optionA: "eat it",
        optionB: "bury it",
        optionC: "chew it",
        correctAnswer: "chew it",
      }),
      shuffleOptions({
        question: "What did the dog walk on?",
        optionA: "ground",
        optionB: "bridge",
        optionC: "road",
        correctAnswer: "bridge",
      }),
      shuffleOptions({
        question: "What did the dog see in the stream?",
        optionA: "himself",
        optionB: "fish",
        optionC: "stone",
        correctAnswer: "himself",
      }),
      shuffleOptions({
        question: "What did the dog do to scare the other dog?",
        optionA: "growled",
        optionB: "barked",
        optionC: "ran",
        correctAnswer: "barked",
      }),
      shuffleOptions({
        question: "What happened when the dog barked?",
        optionA: "he fell",
        optionB: "he ran",
        optionC: "bone fell",
        correctAnswer: "bone fell",
      }),
      shuffleOptions({
        question: "Where did the bone fall?",
        optionA: "stream",
        optionB: "road",
        optionC: "shop",
        correctAnswer: "stream",
      }),
      shuffleOptions({
        question: "What was the dog's mistake?",
        optionA: "he was good",
        optionB: "he was hungry",
        optionC: "he was greedy",
        correctAnswer: "he was greedy",
      }),
      shuffleOptions({
        question: "What was the dog's feeling at the end?",
        optionA: "happy",
        optionB: "sad",
        optionC: "angry",
        correctAnswer: "sad",
      }),
      shuffleOptions({
        question: "What vanished from the stream?",
        optionA: "water",
        optionB: "reflection",
        optionC: "stone",
        correctAnswer: "reflection",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The dog got a ______ from the butcher's shop.",
        optionA: "bone",
        optionB: "toy",
        optionC: "stick",
        correctAnswer: "bone",
      }),
      shuffleOptions({
        question: "There was a ______ on the stream.",
        optionA: "road",
        optionB: "bridge",
        optionC: "stone",
        correctAnswer: "bridge",
      }),
      shuffleOptions({
        question: "The dog saw his ______ in the water.",
        optionA: "friend",
        optionB: "reflection",
        optionC: "shadow",
        correctAnswer: "reflection",
      }),
      shuffleOptions({
        question: "He opened his mouth to ______.",
        optionA: "drink",
        optionB: "eat",
        optionC: "bark",
        correctAnswer: "bark",
      }),
      shuffleOptions({
        question: "The bone made a ______ when it fell.",
        optionA: "splash",
        optionB: "crack",
        optionC: "ring",
        correctAnswer: "splash",
      }),
      shuffleOptions({
        question: "The dog thought the other dog was ______.",
        optionA: "kind",
        optionB: "bad",
        optionC: "smart",
        correctAnswer: "bad",
      }),
      shuffleOptions({
        question: "The dog was ______ and foolish.",
        optionA: "greedy",
        optionB: "kind",
        optionC: "wise",
        correctAnswer: "greedy",
      }),
      shuffleOptions({
        question: "The dog walked back ______.",
        optionA: "angrily",
        optionB: "sadly",
        optionC: "happily",
        correctAnswer: "sadly",
      }),
      shuffleOptions({
        question: "The dog wanted the ______ bone too.",
        optionA: "other",
        optionB: "first",
        optionC: "red",
        correctAnswer: "other",
      }),
      shuffleOptions({
        question: "The reflection was not another dog, but it was ______.",
        optionA: "his own",
        optionB: "real",
        optionC: "a toy",
        correctAnswer: "his own",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The dog got a bone from a sweet shop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dog saw a real dog in the water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dog crossed a wooden bridge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bone stayed in the dog's mouth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dog saw a cat in the water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dog barked at the reflection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bone fell into the water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dog was happy with one bone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The reflection stared at the dog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dog felt sad at the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;