export const chapter = "Chapter - 4: The Fate";
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
        question: "What is the name of the main character in the story?",
        optionA: "Ivan Dmitrich Aksionov",
        optionB: "Makar Semyonich",
        optionC: "Vladimir",
        correctAnswer: "Ivan Dmitrich Aksionov",
     }),
      shuffleOptions({
        question: "Where did Aksionov live in Russia?",
        optionA: "Moscow",
        optionB: "St. Petersburg",
        optionC: "Vladimir",
        correctAnswer: "Vladimir",
     }),
      shuffleOptions({
        question: "Why was Aksionov going to a fair in the summer?",
        optionA: "To visit his family",
        optionB: "To buy merchandise",
        optionC: "To go on a vacation",
        correctAnswer: "To buy merchandise",
     }),
      shuffleOptions({
        question:
          "What did the police officer find in Aksionov's bag that raised suspicion?",
        optionA: "A stolen watch",
        optionB: "A blood-stained knife",
        optionC: "A bag of stolen money",
        correctAnswer: "A blood-stained knife",
     }),
      shuffleOptions({
        question:
          "What was Aksionov's reaction when the officer accused him of murder and robbery?",
        optionA: "He confessed immediately",
        optionB: "He denied all allegations",
        optionC: "He remained silent",
        correctAnswer: "He denied all allegations",
     }),
      shuffleOptions({
        question: "How many years did Aksionov spend in Siberia as a convict?",
        optionA: "10 years",
        optionB: "20 years",
        optionC: "26 years",
        correctAnswer: "26 years",
     }),
      shuffleOptions({
        question:
          "What nickname did the other prisoners give to Aksionov in Siberia?",
        optionA: "Grandfather",
        optionB: "Old Timer",
        optionC: "Convict King",
        correctAnswer: "Grandfather",
     }),
      shuffleOptions({
        question: "Who eventually confesses to the murder of the merchant?",
        optionA: "Aksionov",
        optionB: "Makar Semyonich",
        optionC: "The police officer",
        correctAnswer: "Makar Semyonich",
     }),
      shuffleOptions({
        question:
          "How did Aksionov react when Makar Semyonich confessed to the murder?",
        optionA: "He forgave him",
        optionB: "He reported him to the jailor",
        optionC: "He refused to forgive him",
        correctAnswer: "He forgave him",
     }),
      shuffleOptions({
        question:
          "What changed in Aksionov's feelings and desires after Semyonich's confession?",
        optionA: "He wanted to escape from prison",
        optionB: "He longed to return home",
        optionC: "He sought revenge on Semyonich",
        correctAnswer: "He longed to return home",
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
          "In Vladimir, Russia, there lived a young merchant named ________ Aksionov.",
        options: ["Ivan Dmitrich", "Makar Semyonich", "Vladimir"],
        correctAnswer: "Ivan Dmitrich",
     }),
      shuffleOptions({
        question: "Aksionov was going to a fair to sell and buy ____________.",
        options: ["jewelry", "merchandise", "clothing"],
        correctAnswer: "merchandise",
     }),
      shuffleOptions({
        question:
          "Aksionov met a merchant on his way to the fair, and they put up at the same ____________ for the night.",
        options: ["hotel", "inn", "hostel"],
        correctAnswer: "inn",
     }),
      shuffleOptions({
        question:
          "The police officer accused Aksionov of murdering a merchant from ____________ and robbing him of twenty thousand rubles.",
        options: ["Moscow", "Ryazan", "St. Petersburg"],
        correctAnswer: "Ryazan",
     }),
      shuffleOptions({
        question: "Aksionov spent ____________ years as a convict in Siberia.",
        options: ["10", "20", "26"],
        correctAnswer: "26",
     }),
      shuffleOptions({
        question:
          "Aksionov's fellow prisoners in Siberia called him ____________.",
        options: ["Convict King", "Old Timer", "Grandfather"],
        correctAnswer: "Grandfather",
     }),
      shuffleOptions({
        question:
          "Makar Semyonich confessed to being the one who murdered the merchant and hid the ____________ among Aksionov's things.",
        options: ["stolen watch", "blood-stained knife", "bag of stolen money"],
        correctAnswer: "blood-stained knife",
     }),
      shuffleOptions({
        question:
          "Aksionov forgave ____________ after he confessed to the murder.",
        options: ["himself", "the police officer", "Makar Semyonich"],
        correctAnswer: "Makar Semyonich",
     }),
      shuffleOptions({
        question:
          "Aksionov longed to return ____________ after Semyonich's confession.",
        options: ["to prison", "to the fair", "home"],
        correctAnswer: "home",
     }),
      shuffleOptions({
        question:
          "Makar Semyonich had dug a tunnel to escape from the prison cell, and Aksionov chose not to ____________ on him.",
        options: ["report", "forgive", "confront"],
        correctAnswer: "report",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Aksionov was a merchant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Aksionov was going to a fair for a vacation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aksionov and the merchant he met stayed at different inns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The police officer found a blood-stained knife in Aksionov's bag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aksionov immediately confessed to the murder and robbery accusations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aksionov spent 15 years as a convict in Siberia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Aksionov's fellow prisoners called him 'Convict King.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Makar Semyonich confessed to being the one who murdered the merchant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Aksionov forgave Makar Semyonich after his confession.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aksionov longed to return to prison after Semyonich's confession.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
