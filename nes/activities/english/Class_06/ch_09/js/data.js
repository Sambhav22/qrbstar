export const chapter = "Chapter - 9: The Secret of Casket";
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
        question: "What was Ah-ling's initial plan regarding her wealth?",
        optionA: "She wanted to keep it for herself.",
        optionB: "She distributed it among her four sons.",
        optionC: "She donated it to a charity.",
        correctAnswer: "She distributed it among her four sons.",
     }),
      shuffleOptions({
        question:
          "Why did Ah-ling feel distressed after some time of living with her sons?",
        optionA: "She missed her old home.",
        optionB: "Her sons were not taking care of her.",
        optionC: "She had lost her wealth.",
        correctAnswer: "Her sons were not taking care of her.",
     }),
      shuffleOptions({
        question:
          "Who offered Ah-ling a piece of advice to improve her situation?",
        optionA: "Her eldest son",
        optionB: "Her friend Jing-mei",
        optionC: "Her youngest son",
        correctAnswer: "Her friend Jing-mei",
     }),
      shuffleOptions({
        question:
          "What was the content of the ornamental chest Ah-ling brought home?",
        optionA: "Valuable gems",
        optionB: "Ordinary pebbles",
        optionC: "Money",
        correctAnswer: "Ordinary pebbles",
     }),
      shuffleOptions({
        question:
          "What change did Ah-ling notice in her sons and daughters-in-law after she obtained the casket?",
        optionA: "They started ignoring her.",
        optionB: "They became more caring and attentive.",
        optionC: "They became greedy for wealth.",
        correctAnswer: "They became more caring and attentive.",
     }),
      shuffleOptions({
        question:
          "How long did Ah-ling stay with each of her sons as per her initial arrangement?",
        optionA: "Six months",
        optionB: "Three months",
        optionC: "One year",
        correctAnswer: "Three months",
     }),
      shuffleOptions({
        question: "Why did Ah-ling never extend her stay with any of her sons?",
        optionA: "She didn't want to show favoritism.",
        optionB: "She preferred living alone.",
        optionC: "She had a personal reason.",
        correctAnswer: "She didn't want to show favoritism.",
     }),
      shuffleOptions({
        question:
          "What did Ah-ling's friend Jing-mei give to her sons after Ah-ling's passing?",
        optionA: "A note with instructions",
        optionB: "The key to the casket",
        optionC: "A portion of Ah-ling's wealth",
        correctAnswer: "The key to the casket",
     }),
      shuffleOptions({
        question:
          "What did the casket actually contain when the sons opened it with the key?",
        optionA: "Valuable gems",
        optionB: "A heartfelt letter from their mother",
        optionC: "Ordinary pebbles",
        correctAnswer: "Ordinary pebbles",
     }),
      shuffleOptions({
        question:
          "What was the message in the note left by Ah-ling in the casket?",
        optionA: "Money is everything in life.",
        optionB: "True character is revealed by one's actions.",
        optionC: "Seek wealth above all else.",
        correctAnswer: "True character is revealed by one's actions.",
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
          "Ah-ling distributed her entire wealth among her ________ sons.",
        optionA: "four",
        optionB: "two",
        optionC: "five",
        correctAnswer: "four",
     }),
      shuffleOptions({
        question:
          "Ah-ling felt that her sons were becoming less and less ________ in welcoming her.",
        optionA: "generous",
        optionB: "cordial",
        optionC: "understanding",
        correctAnswer: "cordial",
     }),
      shuffleOptions({
        question:
          "Ah-ling's friend, Jing-mei, offered her a piece of advice to improve her ________.",
        optionA: "wealth",
        optionB: "situation",
        optionC: "health",
        correctAnswer: "situation",
     }),
      shuffleOptions({
        question:
          "When Ah-ling returned with the ornamental chest, her clothes were covered in ________.",
        optionA: "dust",
        optionB: "mud",
        optionC: "flowers",
        correctAnswer: "mud",
     }),
      shuffleOptions({
        question:
          "Ah-ling's sons tried to open the casket in her ________, but it was securely locked.",
        optionA: "presence",
        optionB: "absence",
        optionC: "sleep",
        correctAnswer: "absence",
     }),
      shuffleOptions({
        question:
          "Ah-ling lived for ________ more years after the incident with the casket.",
        optionA: "three",
        optionB: "five",
        optionC: "nine",
        correctAnswer: "nine",
     }),
      shuffleOptions({
        question:
          "Jing-mei handed over the key to the casket to Ah-ling's ________ son.",
        optionA: "eldest",
        optionB: "youngest",
        optionC: "middle",
        correctAnswer: "eldest",
     }),
      shuffleOptions({
        question:
          "When the casket was opened, the contents were revealed to be ________.",
        optionA: "valuable gems",
        optionB: "ordinary pebbles",
        optionC: "gold coins",
        correctAnswer: "ordinary pebbles",
     }),
      shuffleOptions({
        question:
          "Ah-ling's message in the note emphasized the importance of one's ________.",
        optionA: "material wealth",
        optionB: "true character",
        optionC: "family ties",
        correctAnswer: "true character",
     }),
      shuffleOptions({
        question: "The text concludes with the arrival of ________.",
        optionA: "Amy's friend",
        optionB: "Amy's brother",
        optionC: "Amy's father",
        correctAnswer: "Amy's father",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ah-ling distributed her entire wealth among her four sons.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Ah-ling's sons were increasingly welcoming as time passed.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Ah-ling's friend, Jing-mei, offered her valuable advice.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The ornamental chest Ah-ling brought home was filled with valuable gems.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ah-ling's sons successfully opened the casket in her absence.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ah-ling lived for five more years after the incident with the casket.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Jing-mei handed over the key to the casket to Ah-ling's youngest son.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "When the casket was opened, it contained valuable gems.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ah-ling's message in the note emphasized the importance of one's material wealth.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The text concludes with the arrival of Amy's friend.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
