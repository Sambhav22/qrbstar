export const chapter = "Chapter - 13: The Return Gift";
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
        question: "Who wanted to teach Willy a lesson?",
        optionA: "Longy",
        optionB: "Frog",
        optionC: "Parrot",
        correctAnswer: "Longy",
      }),
      shuffleOptions({
        question: "What was served for lunch?",
        optionA: "Fishes",
        optionB: "Soup",
        optionC: "Fruits",
        correctAnswer: "Soup",
      }),
      shuffleOptions({
        question: "How was the soup served?",
        optionA: "In glass",
        optionB: "In cups",
        optionC: "In platters",
        correctAnswer: "In platters",
      }),
      shuffleOptions({
        question: "Who invited Willy for dinner?",
        optionA: "Parrot",
        optionB: "Longy",
        optionC: "Tiger",
        correctAnswer: "Longy",
      }),
      shuffleOptions({
        question: "What did Longy serve?",
        optionA: "Fishes",
        optionB: "Soup",
        optionC: "Bread",
        correctAnswer: "Fishes",
      }),
      shuffleOptions({
        question: "How did Longy eat the fishes?",
        optionA: "One by one",
        optionB: "All at once",
        optionC: "He did not eat",
        correctAnswer: "One by one",
      }),
      shuffleOptions({
        question: "What did Willy say about the soup?",
        optionA: "Cold",
        optionB: "Yummy",
        optionC: "Bitter",
        correctAnswer: "Yummy",
      }),
      shuffleOptions({
        question: "Where did Longy live?",
        optionA: "Near the cave",
        optionB: "Near the pond",
        optionC: "On tree",
        correctAnswer: "Near the pond",
      }),
      shuffleOptions({
        question: "Who was cleverer?",
        optionA: "Willy",
        optionB: "Longy",
        optionC: "None",
        correctAnswer: "Longy",
      }),
      shuffleOptions({
        question: "What did the story teach?",
        optionA: "Trick friends",
        optionB: "Be clever",
        optionC: "Don't fool others",
        correctAnswer: "Don't fool others",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Willy lives in a ______ cave.",
        optionA: "wooden",
        optionB: "big",
        optionC: "rock",
        correctAnswer: "rock",
      }),
      shuffleOptions({
        question: "Longy has a long ______.",
        optionA: "nose",
        optionB: "tongue",
        optionC: "beak",
        correctAnswer: "beak",
      }),
      shuffleOptions({
        question: "Soup was served in a ______ platter.",
        optionA: "flat",
        optionB: "deep",
        optionC: "round",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "Longy served fishes in ______ jars.",
        optionA: "wide",
        optionB: "short",
        optionC: "long-necked",
        correctAnswer: "long-necked",
      }),
      shuffleOptions({
        question: "Friends should not play ______.",
        optionA: "tricks",
        optionB: "games",
        optionC: "music",
        correctAnswer: "tricks",
      }),
      shuffleOptions({
        question: "Willy had a long ______.",
        optionA: "leg",
        optionB: "tail",
        optionC: "tongue",
        correctAnswer: "tongue",
      }),
      shuffleOptions({
        question: "The soup tasted good when ______.",
        optionA: "cold",
        optionB: "hot",
        optionC: "salty",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "Longy ate fishes one by ______.",
        optionA: "many",
        optionB: "spoon",
        optionC: "one",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "Willy could not get ______.",
        optionA: "water",
        optionB: "food",
        optionC: "gift",
        correctAnswer: "food",
      }),
      shuffleOptions({
        question: "Good friends eat ______.",
        optionA: "alone",
        optionB: "together",
        optionC: "later",
        correctAnswer: "together",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Willy had a short tongue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Longy invited Willy for lunch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Longy served food in a jar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Willy liked the soup.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Longy could drink soup easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Longy ate all the soup.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Willy played a trick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Longy was clever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The food was cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friends should eat together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;