export const chapter = "Chapter - 20: The Cartoon";
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
          "What was the author's reason for being at the railway station?",
        optionA: "To catch a train to Ayodhya",
        optionB: "To watch monkeys performing tricks",
        optionC: "To meet the businessman",
        correctAnswer: "To watch monkeys performing tricks",
     }),
      shuffleOptions({
        question:
          "What was the primary source of entertainment for the author while waiting for the train?",
        optionA: "Watching the passengers",
        optionB: "Observing the fruit vendor",
        optionC: "Watching monkeys on the platform",
        correctAnswer: "Watching monkeys on the platform",
     }),
      shuffleOptions({
        question: "Why did the businessman lose his cap to a monkey?",
        optionA: "The monkey wanted to wear it",
        optionB: "The businessman dropped it",
        optionC: "The monkey snatched it",
        correctAnswer: "The monkey snatched it",
     }),
      shuffleOptions({
        question:
          "How did the businessman react when he realized the monkey had taken his cap?",
        optionA: "He laughed it off",
        optionB: "He offered bananas to the monkey",
        optionC: "He shouted and was embarrassed",
        correctAnswer: "He shouted and was embarrassed",
     }),
      shuffleOptions({
        question:
          "What did the fruit vendor request from the businessman in return for rescuing his cap?",
        optionA: "Money for the bananas",
        optionB: "A free train ticket",
        optionC: "An apology",
        correctAnswer: "Money for the bananas",
     }),
      shuffleOptions({
        question:
          "How did the businessman react to the fruit vendor's request for more money?",
        optionA: "He gave him an additional anna",
        optionB: "He laughed and agreed",
        optionC: "He refused and was angry",
        correctAnswer: "He refused and was angry",
     }),
      shuffleOptions({
        question:
          "What was the outcome of the incident involving the businessman and the monkey?",
        optionA: "The businessman got his cap back without offering anything.",
        optionB: "The businessman gave the fruit vendor a large sum of money.",
        optionC:
          "The businessman felt embarrassed and offered bananas to the monkey.",
        correctAnswer:
          "The businessman got his cap back without offering anything.",
     }),
      shuffleOptions({
        question:
          "What emotion did the author feel towards the businessman's behavior?",
        optionA: "Sympathy",
        optionB: "Amusement",
        optionC: "Anger",
        correctAnswer: "Anger",
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
          "The author was on his way from the ancient city of Ayodhya to _______ during his pilgrimage.",
        options: ["Varanasi", "Lucknow", "Delhi"],
        correctAnswer: "Lucknow",
     }),
      shuffleOptions({
        question:
          "Thousands of monkeys were present at the railway station, known for their capacity for ______________.",
        options: ["performing magic tricks", "fighting demons", "having fun"],
        correctAnswer: "having fun",
     }),
      shuffleOptions({
        question:
          "The author arrived at the station ________ before the train's departure.",
        options: ["fifteen minutes", "half an hour", "an hour"],
        correctAnswer: "half an hour",
     }),
      shuffleOptions({
        question:
          "The monkey mothers were hugging their little ones while collecting ______________ from the platform.",
        options: ["mangoes", "stones", "coconuts"],
        correctAnswer: "stones",
     }),
      shuffleOptions({
        question:
          "The author found the torrid atmosphere of the compartment ______________.",
        options: ["comfortable", "unbearable", "exciting"],
        correctAnswer: "unbearable",
     }),
      shuffleOptions({
        question:
          "The businessman shouted at the coolie to come, but the coolie couldn't hear as he was still far ________.",
        options: ["from the platform", "from the train", "away"],
        correctAnswer: "away",
     }),
      shuffleOptions({
        question:
          "The businessman was upset when a monkey snatched his ___________.",
        options: ["suitcase", "hat", "cap"],
        correctAnswer: "cap",
     }),
      shuffleOptions({
        question:
          "The people at the station responded with ______________ when they saw the monkey's actions.",
        options: ["sympathy", "laughter", "anger"],
        correctAnswer: "laughter",
     }),
      shuffleOptions({
        question:
          "The fruit vendor offered to rescue the businessman's cap in exchange for ______________.",
        options: ["money", "bananas", "a train ticket"],
        correctAnswer: "bananas",
     }),
      shuffleOptions({
        question:
          "The author took revenge on the businessman by drawing a ______________ of him.",
        options: ["picture", "caricature", "portrait"],
        correctAnswer: "caricature",
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
          "Parrots and lovebirds were commonly kept as pets in North India in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot in the story refused to talk despite Aunt Ruby's efforts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby gave up her efforts to show love to the parrot after it knocked off her spectacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The responsibility of feeding the parrot fell upon Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aunt Ruby's tantrums were pleasant to watch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator was responsible for leaving the cage door open, allowing the parrot to escape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The parrot enjoyed green chillies and ripe tomatoes as treats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Ruby was upset when the parrot escaped but was easily distracted with the promise of a new parrot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The parrot never learned to talk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The parrot became a regular visitor to the garden and verandah, singing praises to Aunt Ruby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
