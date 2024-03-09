export const chapter = "Chapter -12: True Friendship";
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
          question: "Who were childhood friends in the story?",
          optionA: "Krishna and Arjuna",
          optionB: "Krishna and Sudama",
          optionC: "Krishna and Yudhishthira",
          correctAnswer: "Krishna and Sudama",
        }),
      shuffleOptions({
          question: "What was Sudama's occupation?",
          optionA: "King",
          optionB: "Priest",
          optionC: "Merchant",
          correctAnswer: "Priest",
        }),
      shuffleOptions({
          question: "What was the source of Sudama's income?",
          optionA: "Salary from the temple",
          optionB: "Business profits",
          optionC: "Alms from people",
          correctAnswer: "Alms from people",
        }),
      shuffleOptions({
          question:
            "What did Sudama's wife give him to take as a gift for Krishna?",
          optionA: "Rice snacks",
          optionB: "Sweets",
          optionC: "Fruits",
          correctAnswer: "Rice snacks",
        }),
      shuffleOptions({
          question:
            "How did Krishna react when he heard Sudama had come to see him?",
          optionA: "He ignored him",
          optionB: "He immediately went to meet him",
          optionC: "He sent a message to meet later",
          correctAnswer: "He immediately went to meet him",
        }),
      shuffleOptions({
          question:
            "What did Krishna do upon seeing Sudama in a pathetic condition?",
          optionA: "He ignored him",
          optionB: "He brought him in and served him well",
          optionC: "He asked him to leave",
          correctAnswer: "He brought him in and served him well",
        }),
      shuffleOptions({
          question: "How did Krishna treat Sudama?",
          optionA: "Unkindly",
          optionB: "Kindly and respectfully",
          optionC: "He didn't care about Sudama",
          correctAnswer: "Kindly and respectfully",
        }),
      shuffleOptions({
          question: "How did Sudama feel about asking Krishna for help?",
          optionA: "He felt embarrassed",
          optionB: "He asked for help immediately",
          optionC: "He didn't want any help",
          correctAnswer: "He felt embarrassed",
        }),
      shuffleOptions({
          question:
            "What happened to Sudama's hut when he returned to his village?",
          optionA: "It was destroyed",
          optionB: "It was renovated into a grand mansion",
          optionC: "It was unchanged",
          correctAnswer: "It was renovated into a grand mansion",
        }),
      shuffleOptions({
          question: "What lesson about friendship does the story illustrate?",
          optionA: "Friends always ask for help",
          optionB: "True friends help without being asked",
          optionC: "Friendship is not important",
          correctAnswer: "True friends help without being asked",
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
          question: "Krishna and Sudama were _______________ friends.",
          optionA: "best",
          optionB: "childhood",
          optionC: "newly acquainted",
          correctAnswer: "childhood",
        }),
      shuffleOptions({
          question:
            "Sudama's source of income was what he got from people as _______________.",
          optionA: "business profits",
          optionB: "alms",
          optionC: "salary",
          correctAnswer: "alms",
        }),
      shuffleOptions({
          question:
            "Sudama's wife gave him _______________ to take as a gift for Krishna.",
          optionA: "sweets",
          optionB: "fruits",
          optionC: "rice snacks",
          correctAnswer: "rice snacks",
        }),
      shuffleOptions({
          question:
            "Sudama reached the gates of Krishna's palace after a _______________ journey.",
          optionA: "short",
          optionB: "long",
          optionC: "tiring",
          correctAnswer: "long",
        }),
      shuffleOptions({
          question:
            "Upon seeing Sudama in a pathetic condition, Krishna brought him in and served him _______________.",
          optionA: "poorly",
          optionB: "well",
          optionC: "nothing",
          correctAnswer: "well",
        }),
      shuffleOptions({
          question: "Krishna treated Sudama very _______________.",
          optionA: "rudely",
          optionB: "kindly",
          optionC: "harshly",
          correctAnswer: "kindly",
        }),
      shuffleOptions({
          question:
            "Sudama felt _______________ about asking Krishna for help.",
          optionA: "happy",
          optionB: "embarrassed",
          optionC: "confident",
          correctAnswer: "embarrassed",
        }),
      shuffleOptions({
          question:
            "Upon returning to his village, Sudama's hut was renovated into a grand _______________.",
          optionA: "mansion",
          optionB: "cottage",
          optionC: "shack",
          correctAnswer: "mansion",
        }),
      shuffleOptions({
          question:
            "The story illustrates the lesson that true friends help without being _______________.",
          optionA: "asked",
          optionB: "required",
          optionC: "invited",
          correctAnswer: "asked",
        }),
      shuffleOptions({
          question:
            "Sudama's wife forced him to go to Krishna and seek _______________.",
          optionA: "advice",
          optionB: "help",
          optionC: "money",
          correctAnswer: "help",
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
          question: "Krishna and Sudama were distant friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sudama's source of income was from his job as a merchant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sudama's wife gave him sweets to take as a gift for Krishna.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sudama's journey to Krishna's palace was short.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Krishna treated Sudama poorly upon seeing him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Sudama felt confident about asking Krishna for help.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sudama's hut remained unchanged when he returned to his village.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The story illustrates the lesson that friends only help when asked.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Sudama's wife encouraged him to go to Krishna and seek advice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Krishna and Sudama were kings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
