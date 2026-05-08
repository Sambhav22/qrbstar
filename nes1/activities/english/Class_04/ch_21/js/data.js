export const chapter = "Chapter -21: Little Abdul Learns";
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
          question: "What fascinated Little Abdul about birds?",
          optionA: "Their ability to swim",
          optionB: "Their majestic flight",
          optionC: "Their colorful feathers",
          correctAnswer: "Their majestic flight",
        }),
      shuffleOptions({
          question:
            "How did Little Abdul's science teacher initially explain avian flight?",
          optionA: "Through diagrams and explanations in the classroom",
          optionB:
            "By taking the students to the seashore to observe flying birds",
          optionC: "By demonstrating with live birds in the classroom",
          correctAnswer: "Through diagrams and explanations in the classroom",
        }),
      shuffleOptions({
          question:
            "Why did Little Abdul find it difficult to understand avian flight initially?",
          optionA: "Because the topic was too easy for him",
          optionB: "Because the teacher's explanations were unclear",
          optionC: "Because he was not interested in birds",
          correctAnswer: "Because the teacher's explanations were unclear",
        }),
      shuffleOptions({
          question:
            "What helped Little Abdul grasp the concept of avian flight better?",
          optionA: "Reading about birds in textbooks",
          optionB: "Watching flying birds at the seashore",
          optionC: "Listening to his cousin's explanations",
          correctAnswer: "Watching flying birds at the seashore",
        }),
      shuffleOptions({
          question:
            "Why did birds fold their legs back according to Little Abdul's teacher?",
          optionA: "To fly faster",
          optionB: "To avoid predators",
          optionC: "To sail through the air unhindered",
          correctAnswer: "To sail through the air unhindered",
        }),
      shuffleOptions({
          question: "What was Little Abdul's father's profession?",
          optionA: "A scientist",
          optionB: "A ferryman",
          optionC: "A farmer",
          correctAnswer: "A ferryman",
        }),
      shuffleOptions({
          question:
            "Why did no one want to give a loan to Little Abdul's father?",
          optionA: "Because he was rich",
          optionB: "Because he was a bad person",
          optionC: "Because of his poor financial state",
          correctAnswer: "Because of his poor financial state",
        }),
      shuffleOptions({
          question:
            "What did Little Abdul's cousin, Jallaluddin, do when he didn't know the answer to a question?",
          optionA: "He tried to find answers from newspapers and books",
          optionB: "He ignored the question",
          optionC: "He made up an answer",
          correctAnswer: "He tried to find answers from newspapers and books",
        }),
      shuffleOptions({
          question:
            "What did Little Abdul learn from his science teacher about why white ants don't eat teak?",
          optionA: "Because it is too hard for them to chew",
          optionB: "Because it is bitter in taste",
          optionC: "Because it emits a repellent odor",
          correctAnswer: "Because it is bitter in taste",
        }),
      shuffleOptions({
          question:
            "What lesson did Little Abdul learn from the bitter taste of teak?",
          optionA: "To avoid eating wood",
          optionB: "To develop qualities that make him immune to harm",
          optionC: "To always listen to his science teacher",
          correctAnswer: "To develop qualities that make him immune to harm",
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
          question: "Little Abdul had a passion for ________.",
          optionA: "cars",
          optionB: "birds",
          optionC: "boats",
          correctAnswer: "birds",
        }),
      shuffleOptions({
          question:
            "Little Abdul's science teacher's name was ________ Subramania.",
          optionA: "Siva",
          optionB: "Rajesh",
          optionC: "Krishna",
          correctAnswer: "Siva",
        }),
      shuffleOptions({
          question: "The topic in class one day was ________.",
          optionA: "mathematics",
          optionB: "birds",
          optionC: "history",
          correctAnswer: "birds",
        }),
      shuffleOptions({
          question:
            "Little Abdul found it hard to grasp the concept of avian flight initially because the teacher's explanations were ________.",
          optionA: "clear",
          optionB: "unclear",
          optionC: "funny",
          correctAnswer: "unclear",
        }),
      shuffleOptions({
          question: "Little Abdul's father was a poor ________.",
          optionA: "businessman",
          optionB: "farmer",
          optionC: "ferryman",
          correctAnswer: "ferryman",
        }),
      shuffleOptions({
          question:
            "No one wanted to give a loan to Little Abdul's father because of his poor ________.",
          optionA: "health",
          optionB: "financial state",
          optionC: "education",
          correctAnswer: "financial state",
        }),
      shuffleOptions({
          question:
            "Little Abdul's cousin, Jallaluddin, tried to find answers from ________ and books at his disposal.",
          optionA: "movies",
          optionB: "newspapers",
          optionC: "television",
          correctAnswer: "newspapers",
        }),
      shuffleOptions({
          question:
            "Little Abdul learned from his science teacher that teak wood is bitter in ________.",
          optionA: "color",
          optionB: "taste",
          optionC: "texture",
          correctAnswer: "taste",
        }),
      shuffleOptions({
          question:
            "According to Little Abdul's science teacher, teak wood's bitterness teaches a lesson about developing qualities that make one immune to ________.",
          optionA: "failure",
          optionB: "happiness",
          optionC: "harm",
          correctAnswer: "harm",
        }),
      shuffleOptions({
          question:
            "Little Abdul learned to cultivate a keen sense of ________ from studying A.P.J. Abdul Kalam's life.",
          optionA: "humor",
          optionB: "observation",
          optionC: "creativity",
          correctAnswer: "observation",
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
            "Abdul Kalam was primarily interested in studying birds because of their majestic flight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Abdul Kalam's father was a wealthy businessman.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Abdul Kalam's father faced difficulties in getting a loan to rebuild his boat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Abdul Kalam's cousin, Jallaluddin, always had answers to Abdul's questions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Jallaluddin was highly educated and had access to numerous resources for finding answers to Abdul's questions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Abdul Kalam's teachers were always able to satisfy his curiosity and desire for learning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Jallaluddin knew why white ants don't eat teak wood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Teak wood is resistant to white ants because it has a bitter taste.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Abdul Kalam's science teacher encouraged him to taste teak wood to understand why white ants don't eat it.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The lesson Abdul Kalam learned from the bitter taste of teak wood was to develop qualities that make him immune to harm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
