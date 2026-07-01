export const chapter = "Chapter -10: Little Boy Blue";
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
            "What did the poor widow do to support herself and her son?",
          optionA: "Fishing in the river",
          optionB: "Gleaning in the fields",
          optionC: "Selling handmade crafts",
          correctAnswer: "Gleaning in the fields",
        }),
      shuffleOptions({
          question:
            "How did the Squire's daughter, Madge, come up with the name 'Little Boy Blue'?",
          optionA: "His eyes matched his dress",
          optionB: "He wore a blue hat",
          optionC: "He liked the color blue",
          correctAnswer: "His eyes matched his dress",
        }),
      shuffleOptions({
          question: "Why did Little Boy Blue ask the Squire for work?",
          optionA: "To buy toys for himself",
          optionB: "To earn money for his mother",
          optionC: "To have a job like the Squire",
          correctAnswer: "To earn money for his mother",
        }),
      shuffleOptions({
          question: "What task was assigned to Little Boy Blue by the Squire?",
          optionA: "Planting crops",
          optionB: "Watching over sheep and cows",
          optionC: "Cleaning the mansion",
          correctAnswer: "Watching over sheep and cows",
        }),
      shuffleOptions({
          question:
            "What unfortunate event happened to Little Boy Blue's mother?",
          optionA: "She fell sick",
          optionB: "She lost her job",
          optionC: "She had a broken leg",
          correctAnswer: "She had a broken leg",
        }),
      shuffleOptions({
          question:
            "How did Little Boy Blue manage to get help for his mother's broken leg?",
          optionA: "Called the neighbors",
          optionB: "Rowed a boat to get the doctor",
          optionC: "Went to the Squire for assistance",
          correctAnswer: "Rowed a boat to get the doctor",
        }),
      shuffleOptions({
          question: "Why did Little Boy Blue fall asleep while on duty?",
          optionA: "He was lazy",
          optionB: "He was tired from playing",
          optionC: "He hadn't slept the whole night",
          correctAnswer: "He hadn't slept the whole night",
        }),
      shuffleOptions({
          question:
            "What consequence did Little Boy Blue face for falling asleep?",
          optionA: "He was rewarded with a day off",
          optionB: "The Squire scolded him and sent him away",
          optionC: "Madge praised him for his dedication",
          correctAnswer: "The Squire scolded him and sent him away",
        }),
      shuffleOptions({
          question: "Why did Little Boy Blue weep when the Squire scolded him?",
          optionA: "He was scared of the Squire",
          optionB: "He felt guilty for betraying trust",
          optionC: "He was disappointed in Madge",
          correctAnswer: "He felt guilty for betraying trust",
        }),
      shuffleOptions({
          question:
            "How did the Squire and Madge eventually help Little Boy Blue and his mother?",
          optionA: "Gave them a new house",
          optionB: "Provided money and a maid for assistance",
          optionC: "Offered emotional support",
          correctAnswer: "Provided money and a maid for assistance",
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
            "The widow supported herself and her son by gleaning in the fields, collecting the stalks of grain _______________ by the reapers.",
          optionA: "unintentionally",
          optionB: "discarded",
          optionC: "harvested",
          correctAnswer: "discarded",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue was willing to work for the Squire to _______________ money for his sick mother.",
          optionA: "save",
          optionB: "earn",
          optionC: "borrow",
          correctAnswer: "earn",
        }),
      shuffleOptions({
          question:
            "Madge suggested the name 'Little Boy Blue' because his eyes matched his _______________.",
          optionA: "shoes",
          optionB: "hat",
          optionC: "dress",
          correctAnswer: "dress",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue was given the responsibility to watch over the _______________ and the cows.",
          optionA: "chickens",
          optionB: "sheep",
          optionC: "horses",
          correctAnswer: "sheep",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue rowed a boat to bring a _______________ to help his mother's broken leg.",
          optionA: "teacher",
          optionB: "doctor",
          optionC: "neighbor",
          correctAnswer: "doctor",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue faced consequences from the Squire for falling asleep while _______________ the sheep and cows.",
          optionA: "feeding",
          optionB: "counting",
          optionC: "watching",
          correctAnswer: "watching",
        }),
      shuffleOptions({
          question:
            "Madge was moved by Little Boy Blue's tears and asked him why he had fallen asleep, to which he explained that he hadn't slept the whole _______________.",
          optionA: "day",
          optionB: "night",
          optionC: "week",
          correctAnswer: "night",
        }),
      shuffleOptions({
          question:
            "The Squire and Madge eventually provided money and a maid to help the poor widow _______________.",
          optionA: "find a new job",
          optionB: "recover from illness",
          optionC: "relocate to a better place",
          correctAnswer: "recover from illness",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue's eyes closed, and he fell asleep against a haystack, neglecting his duty to _______________ the sheep and cows.",
          optionA: "entertain",
          optionB: "protect",
          optionC: "feed",
          correctAnswer: "protect",
        }),
      shuffleOptions({
          question:
            "According to the Play Angel in the story, the _______________ would have the entire feast.",
          optionA: "children",
          optionB: "Play Angel herself",
          optionC: "little birds",
          correctAnswer: "Play Angel herself",
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
          question: "The widow's son, Little Boy Blue, had green eyes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Madge suggested the name 'Little Boy Blue' because of his red hat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue's mother fell sick, and he decided to seek help from the Squire.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Squire assigned Little Boy Blue to work in the fields planting crops.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue rowed a boat to bring a teacher to help his mother's broken leg.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Squire scolded Little Boy Blue for falling asleep, and Madge praised him for his dedication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue's eyes closed, and he fell asleep against a haystack because he was lazy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Squire and Madge provided money and a maid to help Little Boy Blue relocate to a better place.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Little Boy Blue neglected his duty to entertain the sheep and cows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "According to the Play Angel in the story, the little birds would have the entire feast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
