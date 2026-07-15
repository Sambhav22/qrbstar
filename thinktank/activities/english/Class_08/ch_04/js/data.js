export const chapter = "Chapter -04: The Fate";
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
          question:
            "Why did Ivan Dmitrich Aksionov leave his family to go to the fair?",
          optionA: "To meet a friend",
          optionB: "To sell and buy merchandise",
          optionC: "To visit relatives",
          correctAnswer: "To sell and buy merchandise",
        }),
      shuffleOptions({
          question:
            "What was found in Aksionov's bag during the search by the police officer?",
          optionA: "Money",
          optionB: "A blood-stained knife",
          optionC: "Stolen goods",
          correctAnswer: "A blood-stained knife",
        }),
      shuffleOptions({
          question:
            "What reason did the police officer give for suspecting Aksionov of murder?",
          optionA: "Witness accounts",
          optionB: "Footprints at the crime scene",
          optionC: "The presence of a blood-stained knife in his bag",
          correctAnswer: "The presence of a blood-stained knife in his bag",
        }),
      shuffleOptions({
          question: "How long was Aksionov imprisoned in Siberia?",
          optionA: "10 years",
          optionB: "20 years",
          optionC: "26 years",
          correctAnswer: "26 years",
        }),
      shuffleOptions({
          question:
            "What did Aksionov's fellow prisoners call him during his time in Siberia?",
          optionA: "Father",
          optionB: "Grandfather",
          optionC: "Old man",
          correctAnswer: "Grandfather",
        }),
      shuffleOptions({
          question:
            "What news did Makar Semyonich bring when he entered the prison?",
          optionA: "News about Aksionov's family",
          optionB: "News about Aksionov's hometown",
          optionC: "News about the outside world",
          correctAnswer: "News about Aksionov's hometown",
        }),
      shuffleOptions({
          question:
            "Why did Aksionov refuse to reveal the identity of the tunnel digger when questioned by the jailor?",
          optionA: "Fear of retaliation",
          optionB: "Loyalty to the other prisoners",
          optionC: "A belief in God's will",
          correctAnswer: "A belief in God's will",
        }),
      shuffleOptions({
          question:
            "What crime did Makar Semyonich confess to Aksionov in the prison cell?",
          optionA: "Theft",
          optionB: "Assault",
          optionC: "Murder",
          correctAnswer: "Murder",
        }),
      shuffleOptions({
          question: "How did Aksionov react to Semyonich's confession?",
          optionA: "He forgave Semyonich",
          optionB: "He reported Semyonich to the jailor",
          optionC: "He remained silent",
          correctAnswer: "He forgave Semyonich",
        }),
      shuffleOptions({
          question:
            "What emotion did Aksionov feel when he heard Semyonich sobbing in the prison cell?",
          optionA: "Anger",
          optionB: "Pity",
          optionC: "Indifference",
          correctAnswer: "Pity",
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
            "In Vladimir, Russia, there lived a young merchant named ____________ Aksionov.",
          optionA: "Ivan Dmitriev",
          optionB: "Alexei",
          optionC: "Mikhail",
          correctAnswer: "Ivan Dmitriev",
        }),
      shuffleOptions({
          question:
            "Aksionov was going to a fair to sell and buy _____________.",
          optionA: "Clothes",
          optionB: "Merchandise",
          optionC: "Livestock",
          correctAnswer: "Merchandise",
        }),
      shuffleOptions({
          question:
            "Aksionov met a merchant on his way to the fair, and they put up at the same ____________ for the night.",
          optionA: "Hotel",
          optionB: "Inn",
          optionC: "Hostel",
          correctAnswer: "Inn",
        }),
      shuffleOptions({
          question:
            "The police officer questioned Aksionov about the merchant found with his ____________ cut.",
          optionA: "Throat",
          optionB: "Arm",
          optionC: "Leg",
          correctAnswer: "Throat",
        }),
      shuffleOptions({
          question:
            "Aksionov was accused of murdering a merchant from ____________ and robbing him of twenty thousand rubles.",
          optionA: "Moscow",
          optionB: "Ryazan",
          optionC: "St. Petersburg",
          correctAnswer: "Ryazan",
        }),
      shuffleOptions({
          question:
            "Aksionov lived as a convict in Siberia for ____________ years.",
          optionA: "15",
          optionB: "20",
          optionC: "26",
          correctAnswer: "26",
        }),
      shuffleOptions({
          question:
            "Aksionov's fellow prisoners respected him and called him ____________.",
          optionA: "Father",
          optionB: "Grandfather",
          optionC: "Elder",
          correctAnswer: "Grandfather",
        }),
      shuffleOptions({
          question:
            "Makar Semyonich entered the prison, and Aksionov asked if he knew anything about the merchants Aksionov from ____________.",
          optionA: "Moscow",
          optionB: "Vladimir",
          optionC: "St. Petersburg",
          correctAnswer: "Vladimir",
        }),
      shuffleOptions({
          question:
            "Semyonich confessed to Aksionov that he killed the merchant and hid the ____________ among his things.",
          optionA: "Money",
          optionB: "Stolen goods",
          optionC: "Knife",
          correctAnswer: "Knife",
        }),
      shuffleOptions({
          question:
            "Aksionov forgave Semyonich, and when asked why he came to the prison cell, Semyonich said, 'Ivan Dmitrich, forgive me!' Aksionov replied, 'What for? It was I who was ____________.'",
          optionA: "Unjust",
          optionB: "Wronged",
          optionC: "Mistaken",
          correctAnswer: "Wronged",
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
            "Ivan Dmitrich Aksionov was a young merchant living in St. Petersburg.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aksionov went to the fair to meet a fellow merchant and have tea together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The police officer questioned Aksionov because he was suspected of stealing money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Aksionov spent 20 years as a convict in Siberia.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aksionov's fellow prisoners in Siberia called him 'Father.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Makar Semyonich brought news about Aksionov's family when he entered the prison.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Semyonich confessed to Aksionov that he stole money from the merchant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aksionov forgave Semyonich when he learned the truth about the merchant's murder.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The text mentions that Aksionov's wife and children visited him in prison.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aksionov chose to remain in prison even after learning the truth about Semyonich.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
