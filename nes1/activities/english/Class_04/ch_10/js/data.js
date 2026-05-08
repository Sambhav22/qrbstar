export const chapter = "Chapter -10: The Burning Tail";
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
          question: "Who abducted Sita?",
          optionA: "Vibhishana",
          optionB: "Rama",
          optionC: "Ravana",
          correctAnswer: "Ravana",
        }),
      shuffleOptions({
          question: "Who searched for Sita after she was abducted?",
          optionA: "Rama and Lakshmana",
          optionB: "Hanumana and Vibhishana",
          optionC: "Sugreeva and his army",
          correctAnswer: "Rama and Lakshmana",
        }),
      shuffleOptions({
          question: "Who took permission from Rama to fly across the sea?",
          optionA: "Vibhishana",
          optionB: "Ravana",
          optionC: "Hanumana",
          correctAnswer: "Hanumana",
        }),
      shuffleOptions({
          question: "Where was Sita imprisoned?",
          optionA: "Ravana's palace",
          optionB: "Ashok Vatika",
          optionC: "Vibhishana's palace",
          correctAnswer: "Ashok Vatika",
        }),
      shuffleOptions({
          question: "Who welcomed Hanumana open-heartedly?",
          optionA: "Ravana",
          optionB: "Vibhishana",
          optionC: "Sita",
          correctAnswer: "Vibhishana",
        }),
      shuffleOptions({
          question: "What did Ravana offer to Sita?",
          optionA: "To make her the Queen Consort of his kingdom",
          optionB: "To make her his chief advisor",
          optionC: "To make her his personal servant",
          correctAnswer: "To make her the Queen Consort of his kingdom",
        }),
      shuffleOptions({
          question: "Who did Hanumana claim to be the messenger of?",
          optionA: "Vibhishana",
          optionB: "Sugreeva",
          optionC: "Rama",
          correctAnswer: "Rama",
        }),
      shuffleOptions({
          question: "How did Hanumana put out the fire on his tail?",
          optionA: "He plunged into the sea",
          optionB: "He blew it out",
          optionC: "He asked Vibhishana to help",
          correctAnswer: "He plunged into the sea",
        }),
      shuffleOptions({
          question: "What did Sita give Hanumana to show to Rama?",
          optionA: "A diadem",
          optionB: "A ring",
          optionC: "A necklace",
          correctAnswer: "A diadem",
        }),
      shuffleOptions({
          question: "What did Sita ask Hanumana to tell Rama?",
          optionA: "To come immediately to rescue her",
          optionB: "To take revenge on Ravana",
          optionC: "To rescue her within a month or she might not be alive",
          correctAnswer:
            "To rescue her within a month or she might not be alive",
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
            "Rama was in exile for _________ years with his brother Lakshamana and wife Sita.",
          optionA: "twelve",
          optionB: "fourteen",
          optionC: "sixteen",
          correctAnswer: "fourteen",
        }),
      shuffleOptions({
          question: "Ravana abducted _________.",
          optionA: "Sugreeva",
          optionB: "Hanumana",
          optionC: "Seeta",
          correctAnswer: "Seeta",
        }),
      shuffleOptions({
          question: "Hanumana could _________ to search for Sita.",
          optionA: "fly",
          optionB: "swim",
          optionC: "run",
          correctAnswer: "fly",
        }),
      shuffleOptions({
          question: "Lanka was located across the _________.",
          optionA: "river",
          optionB: "desert",
          optionC: "sea",
          correctAnswer: "sea",
        }),
      shuffleOptions({
          question: "Sita was imprisoned in _________.",
          optionA: "Ravana's palace",
          optionB: "Vibhishana's palace",
          optionC: "Ashok Vatika",
          correctAnswer: "Ashok Vatika",
        }),
      shuffleOptions({
          question:
            "Ravana wanted to make Sita the Queen Consort of his _________.",
          optionA: "silver kingdom",
          optionB: "golden kingdom",
          optionC: "mighty kingdom",
          correctAnswer: "golden kingdom",
        }),
      shuffleOptions({
          question: "Who welcomed Hanumana open-heartedly?",
          optionA: "Ravana",
          optionB: "Vibhishana",
          optionC: "Sita",
          correctAnswer: "Vibhishana",
        }),
      shuffleOptions({
          question: "Hanumana claimed to be the messenger of _________.",
          optionA: "Vibhishana",
          optionB: "Sugreeva",
          optionC: "Rama",
          correctAnswer: "Rama",
        }),
      shuffleOptions({
          question:
            "Hanumana put out the fire on his tail by plunging into the _________.",
          optionA: "forest",
          optionB: "mountain",
          optionC: "sea",
          correctAnswer: "sea",
        }),
      shuffleOptions({
          question: "Sita gave Hanumana her _________ to show to Rama.",
          optionA: "ring",
          optionB: "diadem",
          optionC: "necklace",
          correctAnswer: "diadem",
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
            "Rama was in exile for fourteen years with his brother Lakshamana and wife Sita.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Hanumana could swim across the sea to search for Sita.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sita was imprisoned in Vibhishana's palace.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Ravana wanted to make Sita the Queen Consort of his silver kingdom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Hanumana claimed to be the messenger of Sugreeva.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Hanumana put out the fire on his tail by plunging into the sea.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Sita gave Hanumana her necklace to show to Rama.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Ravana was pleased to see Hanumana in his royal court.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Hanumana's tail was set on fire by demons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Hanumana destroyed the whole of Lanka by setting it on fire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
