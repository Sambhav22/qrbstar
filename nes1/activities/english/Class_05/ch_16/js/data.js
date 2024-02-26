export const chapter = "Chapter - 16: A Visit to Bank ";
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
        question: "Why did the author feel rattled when entering the bank?",
        optionA: "The bank clerks were rude to him.",
        optionB: "The cashier was impolite.",
        optionC: "Everything about the bank rattled him.",
        correctAnswer: "Everything about the bank rattled him.",
     }),
      shuffleOptions({
        question:
          "What was the author's initial purpose for visiting the bank?",
        optionA: "To withdraw all his money",
        optionB: "To open a bank account",
        optionC: "To complain about the bank's service",
        correctAnswer: "To open a bank account.",
     }),
      shuffleOptions({
        question: "Why did the author ask to see the manager alone?",
        optionA: "He wanted to make a secret deposit.",
        optionB: "He was a detective and had confidential information.",
        optionC: "It seemed like the right thing to do.",
        correctAnswer: "He was a detective and had confidential information.",
     }),
      shuffleOptions({
        question:
          "How much money did the author initially intend to deposit in the bank?",
        optionA: "Fifty-six dollars",
        optionB: "Fifty dollars",
        optionC: "Six dollars",
        correctAnswer: "Fifty-six dollars.",
     }),
      shuffleOptions({
        question:
          "What mistake did the author make while filling out the check?",
        optionA: "He misspelled his name.",
        optionB: "He wrote fifty-six instead of six dollars.",
        optionC: "He left the payee field blank.",
        correctAnswer: "He wrote fifty-six instead of six dollars.",
     }),
      shuffleOptions({
        question:
          "What did the author request when asked how he wanted to receive his money after withdrawing it from the bank?",
        optionA: "In fifties",
        optionB: "In twenties",
        optionC: "In ones",
        correctAnswer: "In fifties.",
     }),
      shuffleOptions({
        question:
          "What was the reaction of the bank staff when the author withdrew all his money?",
        optionA: "They were indifferent.",
        optionB: "They were upset.",
        optionC: "They laughed loudly.",
        correctAnswer: "They laughed loudly.",
     }),
      shuffleOptions({
        question: "What does the author do with his savings now?",
        optionA: "He invests it in various financial instruments.",
        optionB: "He keeps it in cash in his trousers pocket.",
        optionC: "He stores it in a safe deposit box.",
        correctAnswer: "He keeps it in cash in his trousers pocket.",
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
          "When the author goes into a bank, he feels ________________.",
        options: ["A) Confident", "B) Rattled", "C) Comfortable"],
        correctAnswer: "B) Rattled",
     }),
      shuffleOptions({
        question:
          "The author's salary had been raised to ________________ dollars a month.",
        options: ["A) Forty", "B) Fifty-six", "C) Sixty"],
        correctAnswer: "B) Fifty-six",
     }),
      shuffleOptions({
        question:
          'The author went up to a booth marked "Accountant" and asked to see the ________________.',
        options: ["A) Manager", "B) Cashier", "C) Teller"],
        correctAnswer: "A) Manager",
     }),
      shuffleOptions({
        question:
          "The manager concluded that the author was a ________________.",
        options: ["A) Detective", "B) Millionaire", "C) Spy"],
        correctAnswer: "B) Millionaire",
     }),
      shuffleOptions({
        question:
          "The author proposed to deposit ________________ dollars now and fifty dollars a month regularly.",
        options: ["A) Six", "B) Fifty", "C) Fifty-six"],
        correctAnswer: "C) Fifty-six",
     }),
      shuffleOptions({
        question:
          'The author wrote "fifty-six" instead of ________________ on the check.',
        options: ["A) Six", "B) Sixty", "C) Sixteen"],
        correctAnswer: "A) Six",
     }),
      shuffleOptions({
        question:
          "The author requested to receive the withdrawn money in ________________.",
        options: ["A) Twenties", "B) Hundreds", "C) Fifties"],
        correctAnswer: "C) Fifties",
     }),
      shuffleOptions({
        question:
          "The people in the bank had the impression that the author was a ________________.",
        options: ["A) Detective", "B) Millionaire", "C) Spy"],
        correctAnswer: "B) Millionaire",
     }),
      shuffleOptions({
        question:
          'The clerk asked the author, "Are you drawing it all out again?" because the author mistakenly wrote ________________ on the check.',
        options: ["A) Fifty", "B) Fifty-six", "C) Six"],
        correctAnswer: "B) Fifty-six",
     }),
      shuffleOptions({
        question:
          "The author made a wretched attempt to look like a man with a fearfully quick ________________.",
        options: ["A) Temper", "B) Decision-making", "C) Smile"],
        correctAnswer: "A) Temper",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The author felt comfortable with banks in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The author's salary had been raised to fifty dollars a month.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The author wanted to consult the manager before opening an account.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The manager was alarmed when the author requested to see him alone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The author told the manager that he was a detective.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The manager thought the author was a son of a rich industrialist.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The author proposed to deposit fifty-six dollars initially and fifty dollars monthly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The author withdrew all his money from the bank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The author withdrew the money because something had insulted him while writing the check.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The clerk asked the author how he wanted to receive his money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
