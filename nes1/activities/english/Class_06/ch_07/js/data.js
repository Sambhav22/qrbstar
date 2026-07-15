export const chapter = "Chapter - 7: Vocation ";
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
        question:
          "What time does the gong sound in the morning mentioned in the text?",
        optionA: "Nine",
        optionB: "Ten",
        optionC: "Eleven",
        correctAnswer: "Ten",
     }),
      shuffleOptions({
        question: "What does the hawker in the text cry out?",
        optionA: "Apples, juicy apples!",
        optionB: "Bangles, crystal bangles!",
        optionC: "Books, colorful books!",
        correctAnswer: "Bangles, crystal bangles!",
     }),
      shuffleOptions({
        question: "What is the hawker's daily routine like?",
        optionA: "He has a strict schedule.",
        optionB: "He can go wherever he wants.",
        optionC: "He must follow a specific route.",
        correctAnswer: "He can go wherever he wants.",
     }),
      shuffleOptions({
        question:
          "In the text, what activity does the narrator wish they were doing?",
        optionA: "Selling books",
        optionB: "Gardening",
        optionC: "Being a watchman",
        correctAnswer: "Gardening",
     }),
      shuffleOptions({
        question: "What time does the narrator return from school in the text?",
        optionA: "Three in the afternoon",
        optionB: "Four in the afternoon",
        optionC: "Five in the evening",
        correctAnswer: "Four in the afternoon",
     }),
      shuffleOptions({
        question:
          "What is the gardener doing when the narrator sees him through the gate?",
        optionA: "Painting the house",
        optionB: "Digging the ground",
        optionC: "Planting flowers",
        correctAnswer: "Digging the ground",
     }),
      shuffleOptions({
        question: "How does the gardener's work affect him?",
        optionA: "He is always clean.",
        optionB: "He enjoys getting wet.",
        optionC: "He gets dirty and dusty.",
        correctAnswer: "He gets dirty and dusty.",
     }),
      shuffleOptions({
        question: "What is the watchman's duty in the text?",
        optionA: "Guarding a treasure",
        optionB: "Chasing away birds",
        optionC: "Walking the streets all night",
        correctAnswer: "Walking the streets all night",
     }),
      shuffleOptions({
        question: "What does the watchman carry while doing his job?",
        optionA: "A red eye",
        optionB: "A shadow",
        optionC: "A lantern",
        correctAnswer: "A lantern",
     }),
      shuffleOptions({
        question: "How does the narrator feel about being a watchman?",
        optionA: "Excited",
        optionB: "Indifferent",
        optionC: "Afraid of the dark",
        correctAnswer: "Excited",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "When the gong sounds ten in the morning, I meet the hawker crying, 'Bangles, crystal ________!'",
        optionA: "jewels",
        optionB: "trinkets",
        optionC: "bangles",
        correctAnswer: "bangles",
     }),
      shuffleOptions({
        question:
          "There is nothing to hurry the hawker on; there is no road he must take, no place he must go to, no time when he must come ________.",
        optionA: "back",
        optionB: "home",
        optionC: "out",
        correctAnswer: "home",
     }),
      shuffleOptions({
        question:
          "When I come back from school at four in the afternoon, I can see through the gate of that house, the gardener ________ the ground.",
        optionA: "watering",
        optionB: "digging",
        optionC: "planting",
        correctAnswer: "digging",
     }),
      shuffleOptions({
        question:
          "He does what he likes with his spade, he soils his clothes with ________, and nobody takes him to task.",
        optionA: "water",
        optionB: "mud",
        optionC: "dust",
        correctAnswer: "dust",
     }),
      shuffleOptions({
        question:
          "Just as it gets dark in the evening, my mother sends me to ________.",
        optionA: "school",
        optionB: "bed",
        optionC: "play",
        correctAnswer: "bed",
     }),
      shuffleOptions({
        question:
          "The watchman walks up and down the dark and lonely lane with one red eye in the street-lamp's ________.",
        optionA: "body",
        optionB: "head",
        optionC: "light",
        correctAnswer: "head",
     }),
      shuffleOptions({
        question:
          "The watchman swings his ________ and walks with his shadow at his side.",
        optionA: "broom",
        optionB: "key",
        optionC: "lantern",
        correctAnswer: "lantern",
     }),
      shuffleOptions({
        question:
          "The watchman never once goes to bed in his life, and I wish I were a watchman, walking the streets all ________.",
        optionA: "day",
        optionB: "night",
        optionC: "year",
        correctAnswer: "night",
     }),
      shuffleOptions({
        question: "The gardener in the text is seen digging the ________.",
        optionA: "field",
        optionB: "soil",
        optionC: "plants",
        correctAnswer: "soil",
     }),
      shuffleOptions({
        question:
          "The hawker cries out 'Bangles, crystal bangles!' in the ________.",
        optionA: "morning",
        optionB: "afternoon",
        optionC: "evening",
        correctAnswer: "morning",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "The hawker cries out 'Bangles, crystal bangles!' in the evening.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The gardener's clothes get dirty when he works in the garden.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The watchman goes to bed in the daytime.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The narrator wishes to be a hawker to sell books.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator wishes to be a gardener to dig the garden without interruption.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The narrator comes back from school at three in the afternoon.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The street-lamp has two red eyes in its head.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The hawker must follow a specific route when selling bangles.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The watchman carries a lantern to chase away shadows.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The narrator is excited about becoming a watchman.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
