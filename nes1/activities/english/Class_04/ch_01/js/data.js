export const chapter = "Chapter - 1: love for Birds";
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
          "What did Kornal do when she saw her Grandpa in the courtyard after coming back from school?",
        optionA: "She ran to her room.",
        optionB: "She greeted him in her tinkling voice.",
        optionC: "She started singing like a bulbul.",
        correctAnswer: "She greeted him in her tinkling voice.",
     }),
      shuffleOptions({
        question:
          "How did Kornal recognize that the bird she imitated was a bulbul?",
        optionA: "Her teacher told her.",
        optionB: "She had seen it on her way home.",
        optionC: "Grandpa identified it for her.",
        correctAnswer: "Her teacher told her.",
     }),
      shuffleOptions({
        question:
          "What is the difference between the call of a koel and a crow, according to Kornal?",
        optionA: "Koel's call is harsh, while a crow's call is sweet.",
        optionB: "Koel's call is sweet, while a crow's call is harsh.",
        optionC: "Both have the same call.",
        correctAnswer: "Koel's call is sweet, while a crow's call is harsh.",
     }),
      shuffleOptions({
        question:
          "How did Kornal feel when she saw the tree had been cut down after school?",
        optionA: "Happy and excited.",
        optionB: "Shocked and saddened.",
        optionC: "Angry and frustrated.",
        correctAnswer: "Shocked and saddened.",
     }),
      shuffleOptions({
        question:
          "What action did Grandpa take in response to the tree being cut down?",
        optionA: "He planted a new tree.",
        optionB: "He telephoned the police.",
        optionC: "He scolded Kornal for being too emotional.",
        correctAnswer: "He telephoned the police.",
     }),
      shuffleOptions({
        question:
          "What condition did Grandpa set for forgiving the culprits who cut down the tree?",
        optionA: "They had to pay a fine.",
        optionB: "They had to plant and care for five new plants.",
        optionC: "They had to go to jail.",
        correctAnswer: "They had to plant and care for five new plants.",
     }),
      shuffleOptions({
        question: "What did the police inspector warn the culprits?",
        optionA: "To never cut trees again.",
        optionB: "To be more careful next time.",
        optionC: "To avoid speaking with Grandpa.",
        correctAnswer: "To never cut trees again.",
     }),
      shuffleOptions({
        question:
          "How did Kornal feel after the culprits agreed to plant five new plants?",
        optionA: "Angry.",
        optionB: "Satisfied.",
        optionC: "Indifferent.",
        correctAnswer: "Satisfied.",
     }),
      shuffleOptions({
        question:
          "How many eggs were found shattered from the weaverbird's nest?",
        optionA: "None.",
        optionB: "All of them.",
        optionC: "Some of them.",
        correctAnswer: "All of them.",
     }),
      shuffleOptions({
        question:
          "Why did Kornal run to her house after seeing the fallen tree?",
        optionA: "She was excited to tell her Grandpa.",
        optionB: "She was sad and cried.",
        optionC: "She wanted to find the culprits.",
        correctAnswer: "She was sad and cried.",
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
          "Kornal found Grandpa sitting in the courtyard, ________ in the sun.",
        optionA: "laughing",
        optionB: "sleeping",
        optionC: "sunning",
        correctAnswer: "sunning",
     }),
      shuffleOptions({
        question:
          "Kornal imitated a bulbul's call and mentioned that she learned about it during her ________.",
        optionA: "school lunch",
        optionB: "games period",
        optionC: "homework time",
        correctAnswer: "games period",
     }),
      shuffleOptions({
        question:
          "According to Kornal, a koel has a sweet call while a crow ________ harshly.",
        optionA: "caws",
        optionB: "sings",
        optionC: "tweets",
        correctAnswer: "caws",
     }),
      shuffleOptions({
        question:
          "Kornal found a weaverbird and a koel sitting on a tree while coming back from school, and they both looked at her and ________.",
        optionA: "danced",
        optionB: "sang",
        optionC: "flew away",
        correctAnswer: "sang",
     }),
      shuffleOptions({
        question:
          "Kornal stopped at the tree for a few minutes after school to see the koel and the weaverbird before ________.",
        optionA: "going home",
        optionB: "eating a snack",
        optionC: "playing with friends",
        correctAnswer: "going home",
     }),
      shuffleOptions({
        question: "Kornal was shocked to find the tree had been ________.",
        optionA: "replanted",
        optionB: "watered",
        optionC: "cut down",
        correctAnswer: "cut down",
     }),
      shuffleOptions({
        question:
          "She saw the weaverbird's nest on the ground, and all the ________ had shattered.",
        optionA: "eggs",
        optionB: "branches",
        optionC: "leaves",
        correctAnswer: "eggs",
     }),
      shuffleOptions({
        question:
          "Grandpa assured Kornal that they would take action against the ________.",
        optionA: "birds",
        optionB: "culprits",
        optionC: "police",
        correctAnswer: "culprits",
     }),
      shuffleOptions({
        question:
          "Grandpa agreed to withdraw the complaint on the condition that the culprits plant ________ and look after them.",
        optionA: "two plants",
        optionB: "three plants",
        optionC: "five plants",
        correctAnswer: "five plants",
     }),
      shuffleOptions({
        question:
          "After the culprits agreed to plant five plants, Grandpa asked Kornal if she was ________.",
        optionA: "happy",
        optionB: "sad",
        optionC: "satisfied",
        correctAnswer: "satisfied",
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
          "Kornal imitated a bulbul's call to show Grandpa how it sounded.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Kornal saw a weaverbird and a koel sitting on a tree when she was returning from school.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Kornal stopped at the tree for a few minutes before going to school.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Kornal found the weaverbird's nest intact when she saw the tree had been cut down.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Grandpa telephoned the fire department after the tree was cut down.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The police inspector warned the culprits who cut down the tree.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Grandpa agreed to withdraw the complaint without any conditions.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Kornal was happy and satisfied with the outcome of the situation.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Kornal hooted like a crow while imitating birds.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Kornal's school had a policy to protect and preserve trees on its boundary.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
