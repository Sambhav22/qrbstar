export const chapter = "Chapter -15: The Model Millionaire";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "What is Hughie's financial situation?",
          optionA: "He is wealthy",
          optionB: "He lives on a small allowance from his aunt",
          optionC: "He earns a substantial income",
          correctAnswer: "He lives on a small allowance from his aunt",
        }),
      shuffleOptions({
          question:
            "Which profession did Hughie try first, but it did not work out?",
          optionA: "Tea merchant",
          optionB: "Stock Exchange",
          optionC: "Selling dry sherry",
          correctAnswer: "Stock Exchange",
        }),
      shuffleOptions({
          question:
            "What is the amount Hughie receives annually from his old aunt?",
          optionA: "£100",
          optionB: "£200",
          optionC: "£500",
          correctAnswer: "£200",
        }),
      shuffleOptions({
          question: "Who is Alan Trevor?",
          optionA: "A stockbroker",
          optionB: "A painter",
          optionC: "A tea merchant",
          correctAnswer: "A painter",
        }),
      shuffleOptions({
          question:
            "How much does Alan receive for the portrait he is working on?",
          optionA: "£1,000",
          optionB: "£2,000",
          optionC: "1,000 guineas",
          correctAnswer: "1,000 guineas",
        }),
      shuffleOptions({
          question:
            "How much does Hughie give to the beggar model in the studio?",
          optionA: "A shilling",
          optionB: "A sovereign",
          optionC: "Five pounds",
          correctAnswer: "A sovereign",
        }),
      shuffleOptions({
          question: "Who is the mysterious beggar model actually?",
          optionA: "Alan Trevor",
          optionB: "Baron Hausberg",
          optionC: "Hughie's uncle",
          correctAnswer: "Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "How does Hughie feel when he realizes the beggar was Baron Hausberg?",
          optionA: "Angry",
          optionB: "Happy",
          optionC: "Surprised and unhappy",
          correctAnswer: "Surprised and unhappy",
        }),
      shuffleOptions({
          question:
            "What is the amount of the cheque Baron Hausberg gives as a wedding present?",
          optionA: "£5,000",
          optionB: "£10,000",
          optionC: "£20,000",
          correctAnswer: "£10,000",
        }),
      shuffleOptions({
          question: "How does the story conclude for Hughie and Laura?",
          optionA: "They break up",
          optionB: "They get married with Baron Hausberg's blessing",
          optionC: "They elope",
          correctAnswer: "They get married with Baron Hausberg's blessing",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Hughie lives on an annual allowance of __________ pounds provided by his old aunt.",
          optionA: "100",
          optionB: "200",
          optionC: "500",
          correctAnswer: "200",
        }),
      shuffleOptions({
          question:
            "Hughie tried various professions, including working at the Stock Exchange for six months, where he experienced more __________ than profit.",
          optionA: "Success",
          optionB: "Loss",
          optionC: "Challenges",
          correctAnswer: "Loss",
        }),
      shuffleOptions({
          question:
            "Alan Trevor is a skilled __________, and his paintings are highly sought after.",
          optionA: "Musician",
          optionB: "Painter",
          optionC: "Chef",
          correctAnswer: "Painter",
        }),
      shuffleOptions({
          question:
            "The model in Alan's studio is a wizened old man with a coarse brown cloak, holding out a battered hat for __________.",
          optionA: "Food",
          optionB: "Alms",
          optionC: "Water",
          correctAnswer: "Alms",
        }),
      shuffleOptions({
          question:
            "Alan charges __________ guineas for the portrait he is working on.",
          optionA: "500",
          optionB: "1000",
          optionC: "2000",
          correctAnswer: "2000",
        }),
      shuffleOptions({
          question:
            "The amount Hughie gives to the beggar model in the studio is a __________.",
          optionA: "Shilling",
          optionB: "Pound",
          optionC: "Sovereign",
          correctAnswer: "Sovereign",
        }),
      shuffleOptions({
          question:
            "The mysterious beggar model in the studio turns out to be __________.",
          optionA: "Alan Trevor",
          optionB: "Hughie's uncle",
          optionC: "Baron Hausberg",
          correctAnswer: "Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "Baron Hausberg gives Hughie a cheque as a wedding present, and the amount is __________ pounds.",
          optionA: "5000",
          optionB: "10000",
          optionC: "20000",
          correctAnswer: "10000",
        }),
      shuffleOptions({
          question:
            "Hughie is surprised when he learns that the old beggar model is __________, a wealthy man.",
          optionA: "Alan Trevor",
          optionB: "Baron Hausberg",
          optionC: "Hughie's uncle",
          correctAnswer: "Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "The story concludes with Hughie and Laura getting married with the blessing of __________.",
          optionA: "Alan Trevor",
          optionB: "Hughie's aunt",
          optionC: "Baron Hausberg",
          correctAnswer: "Baron Hausberg",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Hughie inherited a substantial amount of money from his family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Alan Trevor is a renowned musician.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Hughie's aunt provides him with an annual allowance of £200.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The mysterious beggar model in the studio turns out to be Baron Hausberg.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Alan charges 1000 guineas for the portrait he is working on.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The old beggar model in the studio is genuinely poor and in need of alms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Baron Hausberg gives Hughie a cheque as a wedding present, and the amount is £10,000.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Hughie initially thought that the model in the studio was Alan Trevor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Hughie and Laura break up in the end.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Alan Trevor is in fits of laughter when Hughie leaves his studio.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
