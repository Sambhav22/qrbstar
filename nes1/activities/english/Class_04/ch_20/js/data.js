export const chapter = "Chapter -20: The Talking Parrot";
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
          question: "What was Aunt Ruby's attitude towards the parrot?",
          optionA: "She was kind and loving",
          optionB: "She was unfriendly and teasing",
          optionC: "She was indifferent",
          correctAnswer: "She was unfriendly and teasing",
        }),
      shuffleOptions({
          question: "How did the parrot react when Aunt Ruby tried to kiss it?",
          optionA: "It enjoyed the affection",
          optionB: "It backed away with anger",
          optionC: "It kissed Aunt Ruby back",
          correctAnswer: "It backed away with anger",
        }),
      shuffleOptions({
          question:
            "Why did Aunt Ruby give up her efforts to show love to the parrot?",
          optionA: "Because the parrot was unresponsive",
          optionB: "Because the parrot showed affection towards her",
          optionC: "Because the parrot loved mangoes",
          correctAnswer: "Because the parrot was unresponsive",
        }),
      shuffleOptions({
          question:
            "What did the speaker do that allowed the parrot to escape?",
          optionA: "Left the cage door open",
          optionB: "Fed it ripe tomatoes",
          optionC: "Took it outside for a walk",
          correctAnswer: "Left the cage door open",
        }),
      shuffleOptions({
          question:
            "How did Aunt Ruby react when the parrot returned after escaping?",
          optionA: "She was overjoyed",
          optionB: "She was angry",
          optionC: "She was indifferent",
          correctAnswer: "She was overjoyed",
        }),
      shuffleOptions({
          question:
            "What did the grandfather suggest as a replacement for the parrot?",
          optionA: "Another bird",
          optionB: "A bowl of goldfish",
          optionC: "A gramophone",
          correctAnswer: "A gramophone",
        }),
      shuffleOptions({
          question:
            "What did the parrot do when Aunt Ruby called out to it upon its return?",
          optionA: "It ignored her",
          optionB: "It flew away",
          optionC: "It perched on a rose bush and teased her",
          correctAnswer: "It perched on a rose bush and teased her",
        }),
      shuffleOptions({
          question:
            "What was the parrot's behavior towards Aunt Ruby after its escape?",
          optionA: "It became friendlier",
          optionB: "It remained indifferent",
          optionC: "It teased her whenever it saw her",
          correctAnswer: "It teased her whenever it saw her",
        }),
      shuffleOptions({
          question: "What delicacy did the speaker feed the parrot?",
          optionA: "Green chillies",
          optionB: "Ripe tomatoes",
          optionC: "Mangoes",
          correctAnswer: "Mangoes",
        }),
      shuffleOptions({
          question:
            "What did Aunt Ruby say when the parrot returned and perched on the verandah railing?",
          optionA: "She scolded it",
          optionB: "She praised it",
          optionC: "She ignored it",
          correctAnswer: "She praised it",
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
          question: "Aunt Ruby try to teach ________ the parrot?",
          optionA: "Singing",
          optionB: "Dancing",
          optionC: "Talking",
          correctAnswer: "Talking",
        }),
      shuffleOptions({
          question:
            "Parrot refuse to do _________ despite Aunt Ruby's efforts?",
          optionA: "Singing",
          optionB: "Dancing",
          optionC: "Kissing",
          correctAnswer: "Kissing",
        }),
      shuffleOptions({
          question: "What did the parrot do to Aunt Ruby's spectacles?",
          optionA: "Polished them",
          optionB: "Knocked them off",
          optionC: "Wore them",
          correctAnswer: "Knocked them off",
        }),
      shuffleOptions({
          question: "What did the parrot eventually learn to say?",
          optionA: "You're no beauty! Can't talk, can't sing, can't dance!",
          optionB: "Good morning!",
          optionC: "I love you!",
          correctAnswer:
            "You're no beauty! Can't talk, can't sing, can't dance!",
        }),
      shuffleOptions({
          question: "What delicacies did the parrot enjoy eating?",
          optionA: "Green chillies and ripe tomatoes",
          optionB: "Sweets and cakes",
          optionC: "Nuts and seeds",
          correctAnswer: "Green chillies and ripe tomatoes",
        }),
      shuffleOptions({
          question:
            "What did the parrot do when it saw Aunt Ruby after escaping?",
          optionA: "Flew back to her and hugged her",
          optionB: "Called out insulting remarks",
          optionC: "Ignored her completely",
          correctAnswer: "Called out insulting remarks",
        }),
      shuffleOptions({
          question: "Where did the parrot eventually end up after escaping?",
          optionA: "In the mango orchard",
          optionB: "In the neighbor's garden",
          optionC: "In the marketplace",
          correctAnswer: "In the mango orchard",
        }),
      shuffleOptions({
          question: "What did Aunt Ruby want to buy after the parrot escaped?",
          optionA: "Another parrot",
          optionB: "Goldfish",
          optionC: "A gramophone",
          correctAnswer: "Another parrot",
        }),
      shuffleOptions({
          question:
            "What did the parrot do whenever it saw Aunt Ruby after escaping?",
          optionA: "Flew away in fear",
          optionB: "Called out insulting remarks",
          optionC: "Sang melodious tunes",
          correctAnswer: "Called out insulting remarks",
        }),
      shuffleOptions({
          question: "What did the parrot eventually become for Aunt Ruby?",
          optionA: "A cherished pet",
          optionB: "A friendly companion",
          optionC: "A regular visitor mocking her",
          correctAnswer: "A regular visitor mocking her",
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
          question: "Aunt Ruby successfully taught the parrot to talk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The parrot enjoyed receiving green chillies and ripe tomatoes as treats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The parrot knocked Aunt Ruby's spectacles off her nose intentionally.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Ruby wanted to buy a gramophone after the parrot escaped.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The parrot only insulted Aunt Ruby after it escaped from its cage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The parrot eventually became a cherished companion for Aunt Ruby.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The parrot was initially bought by Aunt Ruby's grandparents.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Ruby wanted to buy goldfish as a replacement for the parrot.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The parrot's insults towards Aunt Ruby became less frequent over time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The parrot eventually learned to sing melodious tunes in addition to talking.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
