export const chapter = "Chapter - 10: The Speaking Cave";
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
        question: "What did the lion want to do in the cave?",
        optionA: "Sleep",
        optionB: "Hide and hunt",
        optionC: "Rest",
        correctAnswer: "Hide and hunt",
      }),
      shuffleOptions({
        question: "Why did the fox talk to the cave?",
        optionA: "To play",
        optionB: "To check if lion was inside",
        optionC: "To greet it",
        correctAnswer: "To check if lion was inside",
      }),
      shuffleOptions({
        question: "What was strange about the lion's footsteps?",
        optionA: "They were many",
        optionB: "They came out",
        optionC: "They were going inside",
        correctAnswer: "They were going inside",
      }),
      shuffleOptions({
        question: "Who was tricked in the end?",
        optionA: "Fox",
        optionB: "Lion",
        optionC: "Rabbit",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What did the cave not do?",
        optionA: "Shout",
        optionB: "Speak",
        optionC: "Welcome",
        correctAnswer: "Speak",
      }),
      shuffleOptions({
        question: "What did the fox call the cave?",
        optionA: "Friend",
        optionB: "House",
        optionC: "Cave",
        correctAnswer: "Cave",
      }),
      shuffleOptions({
        question: "What did the lion pretend to be?",
        optionA: "Rock",
        optionB: "Tree",
        optionC: "Cave",
        correctAnswer: "Cave",
      }),
      shuffleOptions({
        question: "What did the fox eat?",
        optionA: "Dog",
        optionB: "Rabbit",
        optionC: "Lion",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Who got saved in the story?",
        optionA: "Lion",
        optionB: "Fox",
        optionC: "Bird",
        correctAnswer: "Fox",
      }),
      shuffleOptions({
        question: "What is the main idea of the story?",
        optionA: "Be strong",
        optionB: "Be smart",
        optionC: "Be quiet",
        correctAnswer: "Be smart",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox used her ______ to find the truth.",
        optionA: "book",
        optionB: "idea",
        optionC: "food",
        correctAnswer: "idea",
      }),
      shuffleOptions({
        question: "The cave did not ______ back.",
        optionA: "speak",
        optionB: "cry",
        optionC: "jump",
        correctAnswer: "speak",
      }),
      shuffleOptions({
        question: "The lion was waiting to ______ the fox.",
        optionA: "hug",
        optionB: "eat",
        optionC: "chase",
        correctAnswer: "eat",
      }),
      shuffleOptions({
        question: "The fox saw only the ______ going inside.",
        optionA: "rabbit",
        optionB: "footsteps",
        optionC: "trees",
        correctAnswer: "footsteps",
      }),
      shuffleOptions({
        question: "The lion copied the voice of the ______.",
        optionA: "cave",
        optionB: "fox",
        optionC: "bird",
        correctAnswer: "cave",
      }),
      shuffleOptions({
        question: "The fox ran away to save her ______.",
        optionA: "lunch",
        optionB: "tail",
        optionC: "life",
        correctAnswer: "life",
      }),
      shuffleOptions({
        question: "The cave was quiet like a ______.",
        optionA: "bell",
        optionB: "stone",
        optionC: "lion",
        correctAnswer: "stone",
      }),
      shuffleOptions({
        question: "The lion thought the fox was ______.",
        optionA: "strong",
        optionB: "foolish",
        optionC: "wise",
        correctAnswer: "foolish",
      }),
      shuffleOptions({
        question: "The clever animal in the story was the ______.",
        optionA: "fox",
        optionB: "lion",
        optionC: "deer",
        correctAnswer: "fox",
      }),
      shuffleOptions({
        question: "The story is about a speaking ______.",
        optionA: "tree",
        optionB: "cave",
        optionC: "bird",
        correctAnswer: "cave",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox lived in the cave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lion was hiding in the cave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cave can speak to animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fox believed the cave could speak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion was very clever in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story has a happy ending for the fox.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox waited quietly inside the cave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion made a mistake by speaking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox asked cave to speak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cave had no animals inside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;