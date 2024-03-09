export const chapter = "Chapter -18: Agreedable Behaviour";
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
          question: "What kind of animals did the trader have?",
          optionA: "A dog and a cat",
          optionB: "An ass and a lapdog",
          optionC: "A horse and a donkey",
          correctAnswer: "An ass and a lapdog",
        }),
      shuffleOptions({
          question: "What was the trader's lapdog known for?",
          optionA: "Carrying loads",
          optionB: "Doing funny acts",
          optionC: "Guarding the house",
          correctAnswer: "Doing funny acts",
        }),
      shuffleOptions({
          question: "What made the ass discontent?",
          optionA: "The master's diet",
          optionB: "The master's affection for the dog",
          optionC: "The dog's frolics",
          correctAnswer: "The master's affection for the dog",
        }),
      shuffleOptions({
          question: "What did the ass decide to do to win the master's favor?",
          optionA: "Learn new tricks",
          optionB: "Act like the lapdog",
          optionC: "Ignore the dog",
          correctAnswer: "Act like the lapdog",
        }),
      shuffleOptions({
          question:
            "What did the ass do when he found the master at the dinner table?",
          optionA: "Ate from the master's plate",
          optionB:
            "Kicked up his front feet and tried to lick the master's face",
          optionC: "Ignored the master",
          correctAnswer:
            "Kicked up his front feet and tried to lick the master's face",
        }),
      shuffleOptions({
          question:
            "What was the result of the ass's behavior at the dinner table?",
          optionA: "The master praised him",
          optionB: "The dishes crashed to the ground",
          optionC: "The master laughed",
          correctAnswer: "The dishes crashed to the ground",
        }),
      shuffleOptions({
          question: "How did the master react to the ass's strange behavior?",
          optionA: "He laughed",
          optionB: "He was alarmed",
          optionC: "He ignored it",
          correctAnswer: "He was alarmed",
        }),
      shuffleOptions({
          question:
            "What did the servant do when he heard the distress call from the master?",
          optionA: "He beat the ass soundly",
          optionB: "He praised the ass",
          optionC: "He ignored the situation",
          correctAnswer: "He beat the ass soundly",
        }),
      shuffleOptions({
          question: "What lesson can be learned from the story?",
          optionA: "Different people need to behave differently",
          optionB: "Animals are smarter than humans",
          optionC: "Jealousy leads to good behavior",
          correctAnswer: "Different people need to behave differently",
        }),
      shuffleOptions({
          question: "What did the ass realize at the end of the story?",
          optionA: "He needed to be more like the lapdog",
          optionB: "He should have stayed in the stable",
          optionC: "He should have eaten the master's dinner",
          correctAnswer: "He needed to be more like the lapdog",
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
          question: "The trader had an ________ to carry his loads.",
          optionA: "elephant",
          optionB: "ass",
          optionC: "ox",
          correctAnswer: "ass",
        }),
      shuffleOptions({
          question: "The lapdog was the master's ________.",
          optionA: "best friend",
          optionB: "favourite",
          optionC: "assistant",
          correctAnswer: "favourite",
        }),
      shuffleOptions({
          question:
            "The ass felt discontent because the master seemed to like the ________ more.",
          optionA: "cat",
          optionB: "dog",
          optionC: "horse",
          correctAnswer: "dog",
        }),
      shuffleOptions({
          question:
            "The ass decided to act like the ________ to win the master's favours.",
          optionA: "horse",
          optionB: "cat",
          optionC: "lapdog",
          correctAnswer: "lapdog",
        }),
      shuffleOptions({
          question:
            "The ass found the master feeding the dog from his own ________ at the dinner table.",
          optionA: "plate",
          optionB: "bowl",
          optionC: "trough",
          correctAnswer: "plate",
        }),
      shuffleOptions({
          question:
            "The ass eagerly kicked up his front feet and tried to lick his master's ________.",
          optionA: "hands",
          optionB: "face",
          optionC: "feet",
          correctAnswer: "face",
        }),
      shuffleOptions({
          question:
            "The ass's behavior at the dinner table resulted in all the dishes crashing to the ________.",
          optionA: "floor",
          optionB: "table",
          optionC: "ceiling",
          correctAnswer: "ground",
        }),
      shuffleOptions({
          question:
            "The master was alarmed with the ass's strange ________ at the dinner table.",
          optionA: "laughing",
          optionB: "behavior",
          optionC: "dancing",
          correctAnswer: "behavior",
        }),
      shuffleOptions({
          question:
            "The servant beat the ass soundly while leading him back to the ________.",
          optionA: "garden",
          optionB: "stable",
          optionC: "house",
          correctAnswer: "stable",
        }),
      shuffleOptions({
          question: "Different people need to behave ________.",
          optionA: "similarly",
          optionB: "differently",
          optionC: "strangely",
          correctAnswer: "differently",
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
          question: "The trader had a cat to carry his loads.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The lapdog was the trader's least favourite pet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ass felt content because the master liked him more than the dog.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ass decided to act like the horse to win the master's favours.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The master found the ass eating from his own plate at the dinner table.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ass tried to lick his master's feet at the dinner table.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The master laughed at the ass's strange behavior at the dinner table.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The servant praised the ass for his strange behavior.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Different people need to behave similarly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The ass realized he needed to be more like the cat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
