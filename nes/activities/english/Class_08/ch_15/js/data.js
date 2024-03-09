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
          optionA: "A) He is wealthy",
          optionB: "B) He lives on a small allowance from his aunt",
          optionC: "C) He earns a substantial income",
          correctAnswer: "B) He lives on a small allowance from his aunt",
        }),
      shuffleOptions({
          question:
            "Which profession did Hughie try first, but it did not work out?",
          optionA: "A) Tea merchant",
          optionB: "B) Stock Exchange",
          optionC: "C) Selling dry sherry",
          correctAnswer: "B) Stock Exchange",
        }),
      shuffleOptions({
          question:
            "What is the amount Hughie receives annually from his old aunt?",
          optionA: "A) £100",
          optionB: "B) £200",
          optionC: "C) £500",
          correctAnswer: "B) £200",
        }),
      shuffleOptions({
          question: "Who is Alan Trevor?",
          optionA: "A) A stockbroker",
          optionB: "B) A painter",
          optionC: "C) A tea merchant",
          correctAnswer: "B) A painter",
        }),
      shuffleOptions({
          question:
            "How much does Alan receive for the portrait he is working on?",
          optionA: "A) £1,000",
          optionB: "B) £2,000",
          optionC: "C) 1,000 guineas",
          correctAnswer: "C) 1,000 guineas",
        }),
      shuffleOptions({
          question:
            "How much does Hughie give to the beggar model in the studio?",
          optionA: "A) A shilling",
          optionB: "B) A sovereign",
          optionC: "C) Five pounds",
          correctAnswer: "B) A sovereign",
        }),
      shuffleOptions({
          question: "Who is the mysterious beggar model actually?",
          optionA: "A) Alan Trevor",
          optionB: "B) Baron Hausberg",
          optionC: "C) Hughie's uncle",
          correctAnswer: "B) Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "How does Hughie feel when he realizes the beggar was Baron Hausberg?",
          optionA: "A) Angry",
          optionB: "B) Happy",
          optionC: "C) Surprised and unhappy",
          correctAnswer: "C) Surprised and unhappy",
        }),
      shuffleOptions({
          question:
            "What is the amount of the cheque Baron Hausberg gives as a wedding present?",
          optionA: "A) £5,000",
          optionB: "B) £10,000",
          optionC: "C) £20,000",
          correctAnswer: "B) £10,000",
        }),
      shuffleOptions({
          question: "How does the story conclude for Hughie and Laura?",
          optionA: "A) They break up",
          optionB: "B) They get married with Baron Hausberg's blessing",
          optionC: "C) They elope",
          correctAnswer: "B) They get married with Baron Hausberg's blessing",
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
          optionA: "A) 100",
          optionB: "B) 200",
          optionC: "C) 500",
          correctAnswer: "B) 200",
        }),
      shuffleOptions({
          question:
            "Hughie tried various professions, including working at the Stock Exchange for six months, where he experienced more __________ than profit.",
          optionA: "A) Success",
          optionB: "B) Loss",
          optionC: "C) Challenges",
          correctAnswer: "B) Loss",
        }),
      shuffleOptions({
          question:
            "Alan Trevor is a skilled __________, and his paintings are highly sought after.",
          optionA: "A) Musician",
          optionB: "B) Painter",
          optionC: "C) Chef",
          correctAnswer: "B) Painter",
        }),
      shuffleOptions({
          question:
            "The model in Alan's studio is a wizened old man with a coarse brown cloak, holding out a battered hat for __________.",
          optionA: "A) Food",
          optionB: "B) Alms",
          optionC: "C) Water",
          correctAnswer: "B) Alms",
        }),
      shuffleOptions({
          question:
            "Alan charges __________ guineas for the portrait he is working on.",
          optionA: "A) 500",
          optionB: "B) 1000",
          optionC: "C) 2000",
          correctAnswer: "C) 2000",
        }),
      shuffleOptions({
          question:
            "The amount Hughie gives to the beggar model in the studio is a __________.",
          optionA: "A) Shilling",
          optionB: "B) Pound",
          optionC: "C) Sovereign",
          correctAnswer: "C) Sovereign",
        }),
      shuffleOptions({
          question:
            "The mysterious beggar model in the studio turns out to be __________.",
          optionA: "A) Alan Trevor",
          optionB: "B) Hughie's uncle",
          optionC: "C) Baron Hausberg",
          correctAnswer: "C) Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "Baron Hausberg gives Hughie a cheque as a wedding present, and the amount is __________ pounds.",
          optionA: "A) 5000",
          optionB: "B) 10000",
          optionC: "C) 20000",
          correctAnswer: "B) 10000",
        }),
      shuffleOptions({
          question:
            "Hughie is surprised when he learns that the old beggar model is __________, a wealthy man.",
          optionA: "A) Alan Trevor",
          optionB: "B) Baron Hausberg",
          optionC: "C) Hughie's uncle",
          correctAnswer: "B) Baron Hausberg",
        }),
      shuffleOptions({
          question:
            "The story concludes with Hughie and Laura getting married with the blessing of __________.",
          optionA: "A) Alan Trevor",
          optionB: "B) Hughie's aunt",
          optionC: "C) Baron Hausberg",
          correctAnswer: "C) Baron Hausberg",
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
