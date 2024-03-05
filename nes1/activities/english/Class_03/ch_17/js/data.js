export const chapter = "Chapter - 17: Proposal to Marriage";
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
        question: "What does the tiger first notice about the young girl?",
        optionA: "Her fear",
        optionB: "Her beauty",
        optionC: "Her firewood",
        correctAnswer: "Her beauty",
     }),
      shuffleOptions({
        question:
          "What does the tiger want to do when he first sees the young girl?",
        optionA: "Kill her",
        optionB: "Propose to her",
        optionC: "Run away",
        correctAnswer: "Propose to her",
     }),
      shuffleOptions({
        question:
          "Why does the girl run away from the tiger when he approaches her?",
        optionA: "She is scared of being eaten.",
        optionB: "She is scared of marriage.",
        optionC: "She is gathering more firewood.",
        correctAnswer: "She is scared of being eaten.",
     }),
      shuffleOptions({
        question:
          "What is the man's initial reaction when the tiger asks to marry his daughter?",
        optionA: "He agrees immediately.",
        optionB: "He runs away.",
        optionC: "He is frightened but thinks for a while.",
        correctAnswer: "He is frightened but thinks for a while.",
     }),
      shuffleOptions({
        question:
          "What does the man suggest as a solution to the problem of the tiger's sharp nails and teeth?",
        optionA: "To run away with his daughter",
        optionB: "To clip the tiger's nails and pull out his teeth",
        optionC: "To invite the tiger for dinner",
        correctAnswer: "To clip the tiger's nails and pull out his teeth",
     }),
      shuffleOptions({
        question:
          "How does the tiger react to the man's suggestion to clip his nails and pull out his teeth?",
        optionA: "He refuses to do it.",
        optionB: "He agrees willingly.",
        optionC: "He suggests an alternative solution.",
        correctAnswer: "He agrees willingly.",
     }),
      shuffleOptions({
        question:
          "Who ultimately beats the tiger and chases him back to the forest?",
        optionA: "The young girl",
        optionB: "The tiger's family",
        optionC: "The girl's father",
        correctAnswer: "The girl's father",
     }),
      shuffleOptions({
        question:
          "What is the tiger's condition after having his nails clipped and teeth pulled out?",
        optionA: "Happy and excited",
        optionB: "Angry and aggressive",
        optionC: "Fearful and weak",
        correctAnswer: "Happy and excited",
     }),
      shuffleOptions({
        question: "How does the story end for the tiger?",
        optionA: "He marries the girl and lives happily.",
        optionB: "He is eaten by the man.",
        optionC: "He is chased back to the forest.",
        correctAnswer: "He is chased back to the forest.",
     }),
      shuffleOptions({
        question: "What is the overall tone of this story?",
        optionA: "Tragic",
        optionB: "Humorous",
        optionC: "Romantic",
        correctAnswer: "Humorous",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tiger is ________ in the jungle.",
        options: ["running", "sleeping", "roaming"],
        correctAnswer: "roaming",
     }),
      shuffleOptions({
        question:
          "Tiger: (to himself) What a pretty day it is! I got a lavish meal in the ________. I can enjoy myself.",
        options: ["evening", "morning", "afternoon"],
        correctAnswer: "morning",
     }),
      shuffleOptions({
        question: "The greenery really looks ________.",
        options: ["ugly", "nice", "scary"],
        correctAnswer: "nice",
     }),
      shuffleOptions({
        question: "These flowers are really ________.",
        options: ["colorful", "ugly", "pretty"],
        correctAnswer: "pretty",
     }),
      shuffleOptions({
        question: "The tiger notices a young girl. She is gathering ________.",
        options: ["food", "firewood", "flowers"],
        correctAnswer: "firewood",
     }),
      shuffleOptions({
        question:
          "Tiger: (to himself) I am not hungry, so I don't need to ________ her.",
        options: ["chase", "kill", "marry"],
        correctAnswer: "kill",
     }),
      shuffleOptions({
        question:
          "But let me see from near what she is doing. (looks at her from behind a ________)",
        options: ["rock", "tree", "bush"],
        correctAnswer: "tree",
     }),
      shuffleOptions({
        question:
          "She is very beautiful. I think she can be my ________. Let me propose to her.",
        options: ["friend", "wife", "neighbor"],
        correctAnswer: "wife",
     }),
      shuffleOptions({
        question:
          "Tiger: (calls from behind) Stop, girl, stop. I don't want to ________ you. I want to marry you.",
        options: ["harm", "see", "kill"],
        correctAnswer: "kill",
     }),
      shuffleOptions({
        question:
          "Man: Tiger, you are so handsome. You will make a good husband for her.",
        options: ["ugly", "strong", "handsome"],
        correctAnswer: "handsome",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Confucius had several pupils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Lu was known for his aggressive nature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Wei was known for his good brain and kind heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Wei's anger caused him health issues.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Lu and Wei never had any disagreements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Confucius advised Wei to abandon his studies and return to his village.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Wei had 40 teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "According to Confucius, teeth are the first to decay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Wei's anger led to a fit of temper one thousand times in a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Confucius encouraged Wei to learn the lesson of patience.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
