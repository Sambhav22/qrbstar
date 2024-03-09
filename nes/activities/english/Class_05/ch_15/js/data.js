export const chapter = "Chapter - 15: The Aged Mother  ";
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
        question: "What was the governor's proclamation in the story?",
        optionA: "To harvest more crops",
        optionB: "To execute all the elderly people",
        optionC: "To build a new road in the province",
        correctAnswer: "To execute all the elderly people",
     }),
      shuffleOptions({
        question:
          "How did the poor farmer and his mother feel about each other?",
        optionA: "They had a strained relationship.",
        optionB: "They loved and respected each other.",
        optionC: "They didn't interact much.",
        correctAnswer: "They loved and respected each other.",
     }),
      shuffleOptions({
        question:
          "What was the name of the mountain where the aged were supposed to be abandoned?",
        optionA: "Obatsuyama",
        optionB: "Abandonama",
        optionC: "Elders' Summit",
        correctAnswer: "Obatsuyama",
     }),
      shuffleOptions({
        question:
          "How did the farmer mark the path as he climbed the mountain with his mother?",
        optionA: "By painting symbols on trees",
        optionB: "By dropping twigs along the way",
        optionC: "By singing a specific song",
        correctAnswer: "By dropping twigs along the way",
     }),
      shuffleOptions({
        question:
          "What was the farmer supposed to make for the governor's order of a 'rope of ashes'?",
        optionA: "A rope of twisted straw",
        optionB: "A rope made of stones",
        optionC: "A rope from the governor's hair",
        correctAnswer: "A rope of twisted straw",
     }),
      shuffleOptions({
        question: "How did the farmer create the 'rope of ashes'?",
        optionA: "He burned a rope made of straw on a windy night.",
        optionB: "He gathered ashes and twisted them into a rope.",
        optionC: "He used a rope made of stones and set it on fire.",
        correctAnswer: "He burned a rope made of straw on a windy night.",
     }),
      shuffleOptions({
        question:
          "What did the governor do when he learned the truth about the farmer's wisdom?",
        optionA: "He ordered the farmer to be executed.",
        optionB: "He praised the farmer and abolished the cruel law.",
        optionC: "He banished the farmer from the province.",
        correctAnswer: "He praised the farmer and abolished the cruel law.",
     }),
      shuffleOptions({
        question:
          "What saying did the governor recall after listening to the farmer's story?",
        optionA: "'With great power comes great responsibility.'",
        optionB: "'With the crown of snow, there cometh wisdom.'",
        optionC: "'The early bird catches the worm.'",
        correctAnswer: "'With the crown of snow, there cometh wisdom.'",
     }),
      shuffleOptions({
        question:
          "How did the governor change his stance after hearing the farmer's story?",
        optionA: "He became even more despotic.",
        optionB: "He decided to execute all the elderly people.",
        optionC: "He realized the need for wisdom in the province.",
        correctAnswer: "He realized the need for wisdom in the province.",
     }),
      shuffleOptions({
        question:
          "What was the ultimate outcome of the governor's actions in the story?",
        optionA: "The elderly were executed.",
        optionB: "The province remained the same.",
        optionC: "The elderly could lead a life full of dignity.",
        correctAnswer: "The elderly could lead a life full of dignity.",
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
          "The poor farmer and his aged, widowed mother lived at the foot of a mountain and owned a bit of land that supplied them with ___________.",
        options: ["riches", "happiness", "food"],
        correctAnswer: "food",
     }),
      shuffleOptions({
        question:
          "The despotic governor's proclamation ordered the immediate execution of ___________.",
        options: [
          "all the wealthy people",
          "all the aged people",
          "all the farmers",
        ],
        correctAnswer: "all the aged people",
     }),
      shuffleOptions({
        question:
          "The farmer's journey up the mountain was towards the high bare summit of ___________.",
        options: ["Abandonama", "Elders' Summit", "___________"],
        correctAnswer: "Abandonama",
     }),
      shuffleOptions({
        question:
          "The farmer marked the path as he climbed the mountain by dropping ___________ along the way.",
        options: ["rocks", "twigs", "leaves"],
        correctAnswer: "twigs",
     }),
      shuffleOptions({
        question:
          "To create the 'rope of ashes,' the farmer was instructed to make a rope of twisted ___________ and burn it on a windless night.",
        options: ["straw", "twigs", "cloth"],
        correctAnswer: "straw",
     }),
      shuffleOptions({
        question:
          "The governor was pleased with the farmer's wit in creating the 'rope of ashes' and demanded to know where he had obtained his ___________.",
        options: ["wealth", "intelligence", "wisdom"],
        correctAnswer: "wisdom",
     }),
      shuffleOptions({
        question:
          "The governor mentioned a well-known saying, 'With the crown of snow, there cometh ___________.'",
        options: ["hardship", "wealth", "wisdom"],
        correctAnswer: "wisdom",
     }),
      shuffleOptions({
        question:
          "What did the farmer use to guide him and his mother down the mountain?",
        options: [
          "The stars in the night sky",
          "The twigs they had dropped",
          "A map he had drawn",
        ],
        correctAnswer: "The twigs they had dropped",
     }),
      shuffleOptions({
        question:
          "What did the governor demand from his subjects in his unreasonable order?",
        options: ["A sack of gold", "A rope of ashes", "A bushel of rice"],
        correctAnswer: "A rope of ashes",
     }),
      shuffleOptions({
        question:
          "The governor abolished the cruel law, and as a result, the elderly in the province could lead a life full of ___________.",
        options: ["fear", "hardship", "dignity"],
        correctAnswer: "dignity",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poor farmer and his mother were wealthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor's proclamation demanded the execution of the elderly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer marked the path using stones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer made the 'rope of ashes' using straw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The governor was displeased with the farmer's wit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor mentioned a saying about the crown of snow and wisdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer used the stars to guide him down the mountain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The governor demanded a sack of gold from his subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The elderly in the province could lead a life full of fear after the governor's proclamation was abolished.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer's mother helped create the 'rope of ashes.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
