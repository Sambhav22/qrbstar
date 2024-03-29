export const chapter = "Chapter - 2: Somebody's Mother ";
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
        question: "What is the central theme of the poem?",
        optionA: "Winter's day",
        optionB: "Helping others",
        optionC: "Laughter and shout",
        correctAnswer: "Helping others",
     }),
      shuffleOptions({
        question: "How does the poem describe the woman's physical condition?",
        optionA: "Young and energetic",
        optionB: "Old, ragged, and bent",
        optionC: "Joyful and carefree",
        correctAnswer: "Old, ragged, and bent",
     }),
      shuffleOptions({
        question: "What is the woman waiting for at the street crossing?",
        optionA: "A bus",
        optionB: "Someone to greet her",
        optionC: "Assistance to cross the street",
        correctAnswer: "Assistance to cross the street",
     }),
      shuffleOptions({
        question: "Why did the children pass by the woman without helping her?",
        optionA: "They were in a hurry to go home",
        optionB: "They were unkind and selfish",
        optionC: "They didn't notice her",
        correctAnswer: "They were in a hurry to go home",
     }),
      shuffleOptions({
        question: "Who eventually offers to help the woman cross the street?",
        optionA: "A passerby",
        optionB: "A group of children",
        optionC: "A young boy from the group",
        correctAnswer: "A young boy from the group",
     }),
      shuffleOptions({
        question: "What does the boy say to the woman before helping her?",
        optionA: "I'll get you some food.",
        optionB: "I'll help you across, if you wish to go.",
        optionC: "You're in my way.",
        correctAnswer: "I'll help you across, if you wish to go.",
     }),
      shuffleOptions({
        question: "How does the woman feel when the boy offers to help her?",
        optionA: "Proud and grateful",
        optionB: "Angry and annoyed",
        optionC: "Indifferent and uninterested",
        correctAnswer: "Proud and grateful",
     }),
      shuffleOptions({
        question: "What does the boy reflect upon after helping the woman?",
        optionA: "How he can get a reward",
        optionB: "His own strength and kindness",
        optionC: "How to find his friends",
        correctAnswer: "His own strength and kindness",
     }),
      shuffleOptions({
        question: "What lesson can be drawn from this poem?",
        optionA: "Elderly people should never go out in winter.",
        optionB: "Kindness and compassion toward others are important.",
        optionC: "It's best to ignore people in need.",
        correctAnswer: "Kindness and compassion toward others are important.",
     }),
      shuffleOptions({
        question: "Who is the focus of the poem's final stanza?",
        optionA: "The woman",
        optionB: "The boy",
        optionC: "Somebody's mother",
        correctAnswer: "The boy",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The woman in the poem was old and _______________.",
        optionA: "fragile",
        optionB: "ragged",
        optionC: "youthful",
        correctAnswer: "ragged",
     }),
      shuffleOptions({
        question:
          "The woman was bent with the chill of the __________________.",
        optionA: "summer's day",
        optionB: "winter's day",
        optionC: "rainy day",
        correctAnswer: "winter's day",
     }),
      shuffleOptions({
        question: "The street was wet with a recent _______________.",
        optionA: "rain",
        optionB: "snow",
        optionC: "fog",
        correctAnswer: "snow",
     }),
      shuffleOptions({
        question: "The woman's feet were aged and _______________.",
        optionA: "slow",
        optionB: "nimble",
        optionC: "warm",
        correctAnswer: "slow",
     }),
      shuffleOptions({
        question: "The woman stood at the crossing, waiting _______________.",
        optionA: "anxiously",
        optionB: "patiently",
        optionC: "hurriedly",
        correctAnswer: "patiently",
     }),
      shuffleOptions({
        question:
          "Down the street with laughter and shout, came the boys like a flock of _______________.",
        optionA: "birds",
        optionB: "sheep",
        optionC: "horses",
        correctAnswer: "sheep",
     }),
      shuffleOptions({
        question:
          "The woman was hesitant to stir, fearing the _______________ in the slippery street.",
        optionA: "sunshine",
        optionB: "carriage wheels",
        optionC: "flowers",
        correctAnswer: "carriage wheels",
     }),
      shuffleOptions({
        question:
          "The boy paused beside her and whispered low, 'I'll help you across if you wish to _______________.",
        optionA: "leave",
        optionB: "stay",
        optionC: "go",
        correctAnswer: "go",
     }),
      shuffleOptions({
        question:
          "The boy guided the trembling feet along, proud that his own were _______________.",
        optionA: "uncertain",
        optionB: "weak",
        optionC: "firm and strong",
        correctAnswer: "firm and strong",
     }),
      shuffleOptions({
        question:
          "The woman bowed her head in her home that night, and the prayer she said was: 'God be kind to the noble _______________.",
        optionA: "girl",
        optionB: "son",
        optionC: "neighbor",
        correctAnswer: "son",
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
          "The speaker in the text walks with the confidence of having oil wells pumping in their living room.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker is willing to allow hateful words to bring them down.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text expresses a sense of resilience and determination in the face of adversity.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker's attitude is submissive and defeated throughout the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker suggests that they are a symbol of hope and empowerment.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text primarily focuses on the theme of sorrow and despair.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker's laughter is described as a sign of having gold mines.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker's haughtiness offends others, as mentioned in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text conveys the idea that the speaker seeks revenge against their oppressors.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker is described as a symbol of hope and resilience.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
