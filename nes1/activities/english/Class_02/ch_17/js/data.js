export const chapter = "Chapter -17: Calling up a Friend  ";
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
        question: "Who is answering the phone call?",
        optionA: "Rajni",
        optionB: "Swati",
        optionC: "Soma",
        correctAnswer: "Soma",
     }),
      shuffleOptions({
        question: "What is Soma preparing for next week?",
        optionA: "Vacation",
        optionB: "Birthday party",
        optionC: "School event",
        correctAnswer: "Birthday party",
     }),
      shuffleOptions({
        question: "What did Rajni give Soma as a gift last year?",
        optionA: "Hair band",
        optionB: "Necklace",
        optionC: "Bracelet",
        correctAnswer: "Hair band",
     }),
      shuffleOptions({
        question:
          "Why does Rajni think Soma didn't like the gift from last year?",
        optionA: "Soma didn't wear it",
        optionB: "Soma lost it",
        optionC: "Soma didn't say thank you",
        correctAnswer: "Soma didn't wear it",
     }),
      shuffleOptions({
        question:
          "What did Soma's sister, Swati, do with the hair band from last year's gift?",
        optionA: "Wore it to school",
        optionB: "Lost it",
        optionC: "Gave it to Rajni",
        correctAnswer: "Wore it to school",
     }),
      shuffleOptions({
        question: "What does Soma say about Rajni's choice of colors?",
        optionA: "It needs improvement",
        optionB: "It is terrible",
        optionC: "She is proud of it",
        correctAnswer: "She is proud of it",
     }),
      shuffleOptions({
        question:
          "When is Soma planning to call Rajni to invite her to the birthday party?",
        optionA: "Tomorrow",
        optionB: "Next week",
        optionC: "Today",
        correctAnswer: "Tomorrow",
     }),
      shuffleOptions({
        question: "What does Rajni say about coming to the birthday party?",
        optionA: "She won't come",
        optionB: "She will come only if invited",
        optionC: "She will come anyway",
        correctAnswer: "She will come anyway",
     }),
      shuffleOptions({
        question:
          "What does Soma express towards Rajni at the end of the conversation?",
        optionA: "Anger",
        optionB: "Love",
        optionC: "Indifference",
        correctAnswer: "Love",
     }),
      shuffleOptions({
        question:
          "What did Rajni give Soma as a gift last year, according to Soma?",
        optionA: "Hair band",
        optionB: "Necklace",
        optionC: "Bracelet",
        correctAnswer: "Hair band",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "______ picks up the receiver.",
        optionA: "Rajni",
        optionB: "Swati",
        optionC: "Soma",
        correctAnswer: "Soma",
     }),
      shuffleOptions({
        question: "Soma is preparing for ______ next week.",
        optionA: "Vacation",
        optionB: "Birthday party",
        optionC: "School event",
        correctAnswer: "Birthday party",
     }),
      shuffleOptions({
        question: "Last year, Rajni gave Soma a ______ as a gift.",
        optionA: "Hair band",
        optionB: "Necklace",
        optionC: "Bracelet",
        correctAnswer: "Hair band",
     }),
      shuffleOptions({
        question:
          "Rajni thinks Soma didn't like the gift because Soma didn't ______ it.",
        optionA: "Wear",
        optionB: "Lose",
        optionC: "Thank",
        correctAnswer: "Wear",
     }),
      shuffleOptions({
        question: "Soma's sister, Swati, wore the hair band to ______.",
        optionA: "Vacation",
        optionB: "School",
        optionC: "Birthday party",
        correctAnswer: "School",
     }),
      shuffleOptions({
        question: "Soma is proud of Rajni's choice of ______.",
        optionA: "Colors",
        optionB: "Clothes",
        optionC: "Gifts",
        correctAnswer: "Colors",
     }),
      shuffleOptions({
        question:
          "Soma is planning to call Rajni to invite her to the ______ party.",
        optionA: "Vacation",
        optionB: "Birthday",
        optionC: "School",
        correctAnswer: "Birthday",
     }),
      shuffleOptions({
        question: "Rajni will come to the party ______ if invited or not.",
        optionA: "Anyway",
        optionB: "Only",
        optionC: "Never",
        correctAnswer: "Anyway",
     }),
      shuffleOptions({
        question:
          "At the end of the conversation, Soma expresses ______ towards Rajni.",
        optionA: "Anger",
        optionB: "Love",
        optionC: "Indifference",
        correctAnswer: "Love",
     }),
      shuffleOptions({
        question:
          "Rajni gave Soma a ______ as a gift last year, according to Soma.",
        optionA: "Hair band",
        optionB: "Necklace",
        optionC: "Bracelet",
        correctAnswer: "Hair band",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soma is preparing for a vacation next week.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rajni gave Soma a necklace as a gift last year.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Soma's sister, Swati, lost the hair band given by Rajni.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Rajni believes Soma didn't like the gift because she didn't say thank you.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Soma is proud of Rajni's choice of clothes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rajni will come to the birthday party only if invited.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "At the end of the conversation, Soma expresses anger towards Rajni.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Rajni gave Soma a hair band as a gift last year, and Soma wore it many times.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Soma is planning to call Rajni to invite her to a school event.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Rajni suggests that the man who imprisoned them in the zoo is wise.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
