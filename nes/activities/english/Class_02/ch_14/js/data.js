export const chapter = "Chapter -14: Do the Right ";
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
        question: "What is the central theme of the text?",
        optionA: "Loyalty",
        optionB: "Courage",
        optionC: "Doing what is right",
        correctAnswer: "Doing what is right",
     }),
      shuffleOptions({
        question:
          "According to the text, what should one stand by and fight for?",
        optionA: "Wealth",
        optionB: "Truth",
        optionC: "Power",
        correctAnswer: "Truth",
     }),
      shuffleOptions({
        question: "How does the text define a true person?",
        optionA: "By their wealth",
        optionB: "By doing their best and aiming for the right",
        optionC: "By their popularity",
        correctAnswer: "By doing their best and aiming for the right",
     }),
      shuffleOptions({
        question: "What is emphasized as the ultimate goal in the text?",
        optionA: "Winning battles",
        optionB: "Doing one's best",
        optionC: "Acquiring wealth",
        correctAnswer: "Doing one's best",
     }),
      shuffleOptions({
        question:
          "What quality is associated with a good man's name in the text?",
        optionA: "Popularity",
        optionB: "Wealth",
        optionC: "Doing the right thing",
        correctAnswer: "Doing the right thing",
     }),
      shuffleOptions({
        question:
          "According to the text, what is encouraged to be done boldly?",
        optionA: "Wrong actions",
        optionB: "Standing by the truth",
        optionC: "Avoiding conflicts",
        correctAnswer: "Standing by the truth",
     }),
      shuffleOptions({
        question: "What does the text suggest is the measure of a true person?",
        optionA: "Success",
        optionB: "Doing one's best and aiming for the right",
        optionC: "Conformity",
        correctAnswer: "Doing one's best and aiming for the right",
     }),
      shuffleOptions({
        question:
          "What phrase is repeated throughout the text as a call to action?",
        optionA: '"Stand by"',
        optionB: '"Boldly fight"',
        optionC: '"Try to do the right"',
        correctAnswer: '"Try to do the right"',
     }),
      shuffleOptions({
        question: "What is the text's attitude towards doing what is right?",
        optionA: "Discourages it",
        optionB: "Encourages it",
        optionC: "Neutral",
        correctAnswer: "Encourages it",
     }),
      shuffleOptions({
        question:
          "In the context of the text, what is the significance of winning a good man's name?",
        optionA: "Gaining popularity",
        optionB: "Earning respect through doing what is right",
        optionC: "Acquiring wealth",
        correctAnswer: "Earning respect through doing what is right",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Let's try to do the __________, boys.",
        optionA: "Wrong",
        optionB: "Left",
        optionC: "Right",
        correctAnswer: "Right",
     }),
      shuffleOptions({
        question: "Because it is the __________.",
        optionA: "Bright",
        optionB: "Light",
        optionC: "Right",
        correctAnswer: "Right",
     }),
      shuffleOptions({
        question: "Let's nobly stand by what is __________.",
        optionA: "False",
        optionB: "True",
        optionC: "Blue",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "And for it boldly __________.",
        optionA: "Fly",
        optionB: "Try",
        optionC: "Cry",
        correctAnswer: "Try",
     }),
      shuffleOptions({
        question: "For he is true who does his __________.",
        optionA: "Worst",
        optionB: "Best",
        optionC: "Rest",
        correctAnswer: "Best",
     }),
      shuffleOptions({
        question: "And makes the __________, his aim.",
        optionA: "Wrong",
        optionB: "Right",
        optionC: "Night",
        correctAnswer: "Right",
     }),
      shuffleOptions({
        question: "Then try to do the __________, boys.",
        optionA: "Left",
        optionB: "Right",
        optionC: "Fight",
        correctAnswer: "Right",
     }),
      shuffleOptions({
        question: "And win a good __________ name.",
        optionA: "Man's",
        optionB: "Woman's",
        optionC: "Child's",
        correctAnswer: "Man's",
     }),
      shuffleOptions({
        question: "What is the central __________ of the text?",
        optionA: "Team",
        optionB: "Theme",
        optionC: "Dream",
        correctAnswer: "Theme",
     }),
      shuffleOptions({
        question: "__________ is true who does his best.",
        optionA: "She",
        optionB: "He",
        optionC: "We",
        correctAnswer: "He",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The central theme of the text is loyalty.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "One should stand by and fight for power according to the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "A true person is defined by their popularity in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The ultimate goal in the text is acquiring wealth.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Popularity is associated with a good man's name in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Avoiding conflicts is encouraged to be done boldly in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Success is the measure of a true person according to the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: '"Boldly fight" is a repeated phrase throughout the text.',
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The text discourages doing what is right.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Earning respect through doing what is right is the significance of winning a good man's name in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
