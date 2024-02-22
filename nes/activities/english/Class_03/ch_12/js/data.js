export const chapter = "Chapter - 12: True Friendship";
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
        question: "Who were childhood friends in the story?",
        optionA: "Krishna and Arjuna",
        optionB: "Krishna and Sudama",
        optionC: "Krishna and Rama",
        correctAnswer: "Krishna and Sudama",
     }),
      shuffleOptions({
        question: "What did Sudama become in his adulthood?",
        optionA: "A king",
        optionB: "A poor priest",
        optionC: "A warrior",
        correctAnswer: "A poor priest",
     }),
      shuffleOptions({
        question: "What was the source of income for Sudama?",
        optionA: "Working as a teacher",
        optionB: "Alms from people",
        optionC: "Farming",
        correctAnswer: "Alms from people",
     }),
      shuffleOptions({
        question: "Why did Sudama's wife encourage him to go to Krishna?",
        optionA: "To challenge Krishna",
        optionB: "To seek help from Krishna",
        optionC: "To invite Krishna for a meal",
        correctAnswer: "To seek help from Krishna",
     }),
      shuffleOptions({
        question:
          "What did Sudama take as a gift for Krishna when he visited him?",
        optionA: "Diamonds and jewels",
        optionB: "Rice snacks",
        optionC: "A golden crown",
        correctAnswer: "Rice snacks",
     }),
      shuffleOptions({
        question:
          "How did the doorman at Krishna's palace initially react to Sudama's request?",
        optionA: "He immediately let Sudama in to meet Krishna.",
        optionB: "He refused to let Sudama in, thinking he was crazy.",
        optionC: "He asked for a bribe before allowing Sudama to see Krishna.",
        correctAnswer: "He refused to let Sudama in, thinking he was crazy.",
     }),
      shuffleOptions({
        question:
          "How did Krishna react when he heard that Sudama had come to see him?",
        optionA: "He ignored Sudama's visit.",
        optionB: "He was surprised and immediately went to meet Sudama.",
        optionC: "He sent a message to meet him later.",
        correctAnswer: "He was surprised and immediately went to meet Sudama.",
     }),
      shuffleOptions({
        question: "How did Krishna treat Sudama when he visited him?",
        optionA: "He scolded Sudama for coming empty-handed.",
        optionB:
          "He served Sudama in the best way he could and treated him with respect.",
        optionC: "He asked Sudama to leave immediately.",
        correctAnswer:
          "He served Sudama in the best way he could and treated him with respect.",
     }),
      shuffleOptions({
        question:
          "What happened to Sudama's life and his family when he returned to his village after visiting Krishna?",
        optionA: "He found his family had disappeared.",
        optionB:
          "He saw that a grand mansion had replaced his hut, and his family was dressed well.",
        optionC: "His family had fallen sick.",
        correctAnswer:
          "He saw that a grand mansion had replaced his hut, and his family was dressed well.",
     }),
      shuffleOptions({
        question: "What does the story illustrate?",
        optionA: "The importance of riches and power",
        optionB: "The consequences of not seeking help from friends",
        optionC: "The value of true friendship and selflessness",
        correctAnswer: "The value of true friendship and selflessness",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Krishna and Sudama were childhood ____________.",
        options: ["enemies", "friends", "strangers"],
        correctAnswer: "friends",
     }),
      shuffleOptions({
        question: "Sudama became a ____________ in his adulthood.",
        options: ["king", "priest", "warrior"],
        correctAnswer: "priest",
     }),
      shuffleOptions({
        question:
          "The source of income for Sudama was what he got from people as ____________.",
        options: ["gifts", "alms", "loans"],
        correctAnswer: "alms",
     }),
      shuffleOptions({
        question:
          "Sudama's wife encouraged him to go to Krishna and seek ____________.",
        options: ["adventure", "help", "forgiveness"],
        correctAnswer: "help",
     }),
      shuffleOptions({
        question:
          "Sudama was hesitant to go to Krishna because he didn't have anything to take as a ____________ for Krishna.",
        options: ["gift", "token", "message"],
        correctAnswer: "gift",
     }),
      shuffleOptions({
        question: "Sudama's wife gave him ____________ to take to Krishna.",
        options: ["diamonds", "gold coins", "rice snacks"],
        correctAnswer: "rice snacks",
     }),
      shuffleOptions({
        question:
          "Sudama asked the doorman to pass the message that ____________ has come to see Krishna.",
        options: ["a stranger", "a messenger", "Sudama"],
        correctAnswer: "Sudama",
     }),
      shuffleOptions({
        question:
          "When Krishna heard that Sudama had come to see him, he was surprised and immediately ran to the ____________.",
        options: ["market", "gates", "forest"],
        correctAnswer: "gates",
     }),
      shuffleOptions({
        question:
          "Sudama stayed with Krishna for a few days and then took his ____________.",
        options: ["wealth", "time", "leave"],
        correctAnswer: "leave",
     }),
      shuffleOptions({
        question:
          "When Sudama returned to his village, he was amazed to see that a grand mansion had replaced his ____________.",
        options: ["carriage", "hut", "boat"],
        correctAnswer: "hut",
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
          "Children gathered in the neighborhood park in the morning for evening games.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The children played various games in the park, including cricket, football, and kho-kho.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Dolly's doll could perform multiple actions using a remote.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Dolly's doll could run on its own without using a remote.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When Dolly pressed the remote button, the doll started to sing.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The children were sad to see the doll's actions.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Dolly's doll was tired and hungry after performing various actions.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The children cried when the doll began to sing before going to sleep.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The children clapped and raised a loud noise in excitement.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The children played hide-n-seek in the park.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
