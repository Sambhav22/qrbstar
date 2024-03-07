export const chapter = "Chapter - 15: The Model Millionaire ";
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
        question: "What is Hughie's primary source of income?",
        optionA: "A successful profession",
        optionB: "An inheritance",
        optionC: "An old aunt's allowance",
        correctAnswer: "C) An old aunt's allowance",
     }),
      shuffleOptions({
        question: "Which profession did Hughie try but did not succeed in?",
        optionA: "Stock Exchange",
        optionB: "Tea merchant",
        optionC: "Dry sherry sales",
        correctAnswer: "B) Tea merchant",
     }),
      shuffleOptions({
        question:
          "What is the initial reaction of Hughie's friend Alan Trevor upon seeing him?",
        optionA: "He is annoyed to be interrupted.",
        optionB: "He is happy to see Hughie.",
        optionC: "He is indifferent to Hughie's presence.",
        correctAnswer: "B) He is happy to see Hughie.",
     }),
      shuffleOptions({
        question:
          "Why does Hughie's lover Laura's father refuse their engagement?",
        optionA: "He doesn't like Hughie.",
        optionB: "He thinks Hughie is poor.",
        optionC: "He wants Hughie to have 10,000 pounds.",
        correctAnswer: "C) He wants Hughie to have 10,000 pounds.",
     }),
      shuffleOptions({
        question:
          "How much does a model get for sitting, according to Alan Trevor?",
        optionA: "A pound an hour",
        optionB: "A guinea an hour",
        optionC: "A shilling an hour",
        correctAnswer: "C) A shilling an hour",
     }),
      shuffleOptions({
        question:
          "What gesture does Hughie make towards the old beggar in the studio?",
        optionA: "He ignores him.",
        optionB: "He offers him his old clothes.",
        optionC: "He gives him a sovereign.",
        correctAnswer: "C) He gives him a sovereign.",
     }),
      shuffleOptions({
        question:
          "What does Hughie discover about the old beggar from Alan Trevor?",
        optionA: "He is homeless and destitute.",
        optionB: "He is a millionaire.",
        optionC: "He is a famous artist.",
        correctAnswer: "B) He is a millionaire.",
     }),
      shuffleOptions({
        question:
          "How does Hughie react when he realizes he gave a sovereign to a millionaire?",
        optionA: "He feels happy for the beggar.",
        optionB: "He is angry at Alan for not telling him.",
        optionC: "He is embarrassed and upset.",
        correctAnswer: "C) He is embarrassed and upset.",
     }),
      shuffleOptions({
        question:
          "What does Baron Hausberg do for Hughie and Laura as a wedding present?",
        optionA: "He offers his congratulations.",
        optionB: "He delivers a heartfelt speech.",
        optionC: "He gives them a cheque for 10,000 pounds.",
        correctAnswer: "C) He gives them a cheque for 10,000 pounds.",
     }),
      shuffleOptions({
        question:
          "How does Alan Trevor describe model millionaires in the end?",
        optionA: "As ordinary individuals",
        optionB: "As rare but not unusual",
        optionC: "As exceptionally rare",
        correctAnswer: "C) As exceptionally rare",
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
          "Hughie lives on two hundred pounds a year that an old aunt has _______ him.",
        options: ["left", "given", "allowed"],
        correctAnswer: "allowed",
     }),
      shuffleOptions({
        question:
          "Hughie tried a variety of professions, including the Stock Exchange, but made more _______ than profit.",
        options: ["loss", "money", "success"],
        correctAnswer: "loss",
     }),
      shuffleOptions({
        question:
          "Alan Trevor is a _______ with his brush, and his pictures are eagerly sought after.",
        options: ["failure", "master", "teacher"],
        correctAnswer: "master",
     }),
      shuffleOptions({
        question:
          "Laura's father, a retired colonel, wants Hughie to have _______ pounds of his own before allowing their engagement.",
        options: ["a hundred", "ten thousand", "a million"],
        correctAnswer: "ten thousand",
     }),
      shuffleOptions({
        question: "Alan Trevor is painting a model _______ in the studio.",
        options: ["artist", "friend", "beggar"],
        correctAnswer: "beggar",
     }),
      shuffleOptions({
        question:
          "Alan tells Hughie that the old beggar in the studio is one of the _______ men in Europe.",
        options: ["poorest", "richest", "kindest"],
        correctAnswer: "richest",
     }),
      shuffleOptions({
        question: "Hughie gives the old beggar a _______.",
        options: ["coat", "hat", "sovereign"],
        correctAnswer: "sovereign",
     }),
      shuffleOptions({
        question: "Baron Hausberg commissions Alan to paint him as a _______.",
        options: ["soldier", "dandy", "beggar"],
        correctAnswer: "beggar",
     }),
      shuffleOptions({
        question:
          "Hughie is surprised when he receives a cheque for _______ pounds as a wedding present from Baron Hausberg.",
        options: ["1,000", "5,000", "10,000"],
        correctAnswer: "10,000",
     }),
      shuffleOptions({
        question: "Alan remarks that model millionaires are _______.",
        options: ["ordinary", "rare but not unusual", "exceptionally rare"],
        correctAnswer: "exceptionally rare",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hughie inherited a large fortune from his old aunt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Hughie had a successful career at the Stock Exchange.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Alan Trevor is a famous painter with highly sought-after paintings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Laura's father insisted that Hughie should have 10,000 pounds before their engagement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The old beggar in Alan's studio was actually a millionaire named Baron Hausberg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Hughie gave the old beggar a brand new coat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Alan was aware of Baron Hausberg's true identity from the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Baron Hausberg gave Hughie a cheque for 1,000 pounds as a wedding present.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Hughie was happy to learn about Baron Hausberg's true identity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Alan thought that model millionaires were quite common.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
