export const chapter = "Chapter - 11: Unity is Strength";
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
        question: "Where did the two bullocks live?",
        optionA: "Zoo",
        optionB: "Jungle",
        optionC: "Forest",
        correctAnswer: "Forest",
      }),
      shuffleOptions({
        question: "Who wanted to eat the bullocks?",
        optionA: "Tiger",
        optionB: "Lion",
        optionC: "Bear",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What did the lion pretend to be?",
        optionA: "A king",
        optionB: "A helper",
        optionC: "A friend",
        correctAnswer: "A friend",
      }),
      shuffleOptions({
        question: "What did the lion say about the bullock?",
        optionA: "He is strong",
        optionB: "He is cowardly",
        optionC: "He is clever",
        correctAnswer: "He is cowardly",
      }),
      shuffleOptions({
        question: "Who believed the lion's lies?",
        optionA: "Both bullocks",
        optionB: "Only one",
        optionC: "No one",
        correctAnswer: "Both bullocks",
      }),
      shuffleOptions({
        question: "What happened when the bullocks became enemies?",
        optionA: "They ran away",
        optionB: "The lion attacked",
        optionC: "They sang a song",
        correctAnswer: "The lion attacked",
      }),
      shuffleOptions({
        question: "What made the lion win?",
        optionA: "Truth",
        optionB: "Kindness",
        optionC: "Lies",
        correctAnswer: "Lies",
      }),
      shuffleOptions({
        question: "What did the bullocks lose?",
        optionA: "Food",
        optionB: "Their home",
        optionC: "Friendship",
        correctAnswer: "Friendship",
      }),
      shuffleOptions({
        question: "The lion was happy because...",
        optionA: "He got new friends",
        optionB: "He got to eat them",
        optionC: "They helped him",
        correctAnswer: "He got to eat them",
      }),
      shuffleOptions({
        question: "What is the moral of the story?",
        optionA: "Never trust anyone",
        optionB: "Always eat together",
        optionC: "Unity is strength",
        correctAnswer: "Unity is strength",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The bullocks were ______ friends.",
        optionA: "bad",
        optionB: "good",
        optionC: "angry",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "The lion used ______ words.",
        optionA: "sweet",
        optionB: "true",
        optionC: "false",
        correctAnswer: "false",
      }),
      shuffleOptions({
        question: "The lion met the bullocks in the ______.",
        optionA: "park",
        optionB: "forest",
        optionC: "house",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "The bullocks did not ______ each other.",
        optionA: "hug",
        optionB: "help",
        optionC: "trust",
        correctAnswer: "help",
      }),
      shuffleOptions({
        question: "The lion killed them one by ______.",
        optionA: "one",
        optionB: "group",
        optionC: "mistake",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "The story tells us to stay ______.",
        optionA: "alone",
        optionB: "hungry",
        optionC: "united",
        correctAnswer: "united",
      }),
      shuffleOptions({
        question: "The bullocks were defeated because they were not ______ at last.",
        optionA: "clever",
        optionB: "friends",
        optionC: "fast",
        correctAnswer: "friends",
      }),
      shuffleOptions({
        question: "We should not believe ______.",
        optionA: "lies",
        optionB: "truth",
        optionC: "jokes",
        correctAnswer: "lies",
      }),
      shuffleOptions({
        question: "The lion used a clever ______.",
        optionA: "trick",
        optionB: "gift",
        optionC: "path",
        correctAnswer: "trick",
      }),
      shuffleOptions({
        question: "The bullocks were ______ in the beginning.",
        optionA: "enemies",
        optionB: "united",
        optionC: "scared",
        correctAnswer: "united",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The lion was afraid of the bullocks when they were united.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bullocks never helped each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion used truth to make them enemies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story took place in the forest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bullocks fought the lion together till the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion lied to both bullocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lion became their real friend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Both bullocks were safe in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Being divided made them weak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story teaches us to stay angry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;