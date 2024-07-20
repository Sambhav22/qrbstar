export const chapter = "Chapter - 1: Curie the Rabbit";
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
        question: "What was Curie's favorite activity in the jungle?",
        optionA: "Eating bananas",
        optionB: "Digging holes",
        optionC: "Climbing trees",
        correctAnswer: "Digging holes",
     }),
      shuffleOptions({
        question: "Why did Hathi the elephant trumpet loudly one day?",
        optionA: "He was excited",
        optionB: "His foot got trapped in a hole",
        optionC: "He found tasty carrots",
        correctAnswer: "His foot got trapped in a hole",
     }),
      shuffleOptions({
        question: "Who was the king of the forest?",
        optionA: "Hathi the elephant",
        optionB: "Sheru the lion",
        optionC: "Curie the rabbit",
        correctAnswer: "Sheru the lion",
     }),
      shuffleOptions({
        question:
          "How did Curie respond when Sheru admonished him for digging holes?",
        optionA: "Laughed loudly",
        optionB: "Pleaded with folded hands",
        optionC: "Ignored Sheru",
        correctAnswer: "Pleaded with folded hands",
     }),
      shuffleOptions({
        question: "Where did Curie's hole open after he dug for a long time?",
        optionA: "Another jungle farm",
        optionB: "A cave in the palace",
        optionC: "The top of a hill",
        correctAnswer: "A cave in the palace",
     }),
      shuffleOptions({
        question: "What did Sheru order Curie to do as a punishment?",
        optionA: "Eat more carrots",
        optionB: "Dig more holes",
        optionC: "Fill up the hole he dug",
        correctAnswer: "Fill up the hole he dug",
     }),
      shuffleOptions({
        question: "How did Curie feel about filling up the hole as punishment?",
        optionA: "Excited",
        optionB: "Scared",
        optionC: "Happy",
        correctAnswer: "Scared",
     }),
      shuffleOptions({
        question:
          "What was the reaction of the jungle animals when they heard about Curie's mischievous act?",
        optionA: "They laughed",
        optionB: "They mocked him",
        optionC: "They ignored him",
        correctAnswer: "They mocked him",
     }),
      shuffleOptions({
        question:
          "Why did Hathi Dada advise Curie to be careful while walking?",
        optionA: "Because Curie was too slow",
        optionB: "Because Curie liked to jump",
        optionC: "Because of the holes Curie dug",
        correctAnswer: "Because of the holes Curie dug",
     }),
      shuffleOptions({
        question:
          "What did Curie promise Sheru after digging into the palace cave?",
        optionA: "To dig more holes",
        optionB: "To never dig again",
        optionC: "To bring him more carrots",
        correctAnswer: "To never dig again",
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
          "Curie, the little rabbit, was always hopping and jumping, never sitting at ___________.",
        optionA: "rest",
        optionB: "play",
        optionC: "ease",
        correctAnswer: "rest",
     }),
      shuffleOptions({
        question:
          "Hathi the elephant trumpeted loudly when his foot got trapped in a ___________.",
        optionA: "hill",
        optionB: "hole",
        optionC: "cave",
        correctAnswer: "hole",
     }),
      shuffleOptions({
        question:
          "Sheru, the lion, admonished Curie for digging holes around the jungle and reminded him to be careful while ___________.",
        optionA: "eating",
        optionB: "walking",
        optionC: "sleeping",
        correctAnswer: "walking",
     }),
      shuffleOptions({
        question:
          "After Hathi's foot got trapped, other animals couldn't help him because he was too ___________.",
        optionA: "small",
        optionB: "fast",
        optionC: "big",
        correctAnswer: "big",
     }),
      shuffleOptions({
        question:
          "Sheru ordered Curie to fill up the hole he dug as a ___________.",
        optionA: "reward",
        optionB: "punishment",
        optionC: "challenge",
        correctAnswer: "punishment",
     }),
      shuffleOptions({
        question:
          "Curie, the mischievous rabbit, dug right into the ___________ cave.",
        optionA: "jungle",
        optionB: "palace",
        optionC: "mountain",
        correctAnswer: "palace",
     }),
      shuffleOptions({
        question:
          "When Sheru growled at Curie for digging into the palace, Curie pleaded for ___________.",
        optionA: "forgiveness",
        optionB: "permission",
        optionC: "revenge",
        correctAnswer: "forgiveness",
     }),
      shuffleOptions({
        question:
          "The jungle animals mocked Curie, the rabbit, for being a ___________ worker.",
        optionA: "lazy",
        optionB: "hardworking",
        optionC: "clever",
        correctAnswer: "hardworking",
     }),
      shuffleOptions({
        question:
          "Curie promised Sheru that he would not ___________ holes again.",
        optionA: "dig",
        optionB: "fill",
        optionC: "hide",
        correctAnswer: "dig",
     }),
      shuffleOptions({
        question:
          "The news of Curie's mischievous act spread in the jungle, and all the animals were now mocking the ___________ rabbit.",
        optionA: "clever",
        optionB: "lazy",
        optionC: "mischievous",
        correctAnswer: "mischievous",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Curie, the rabbit, knew how to sit at rest.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Hathi the elephant rescued himself when his foot got trapped in a hole.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Sheru, the lion, is a member of the jungle farm.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Curie, with folded hands, laughed at Sheru's admonishment.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The jungle animals couldn't help Hathi because he was too small.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Sheru ordered Curie to dig more holes as a punishment.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Curie's hole opened into a cave in the palace.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The jungle animals mocked Curie for being a lazy worker.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Curie promised Sheru that he would not dig any more holes.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The news of Curie's mischievous act spread, and all the jungle animals praised his hard work.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
