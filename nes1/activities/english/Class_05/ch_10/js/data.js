export const chapter = "Chapter - 10: Little Boy Blue  ";
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
          "What was the main source of income for the poor widow and her son?",
        optionA: "Selling handmade crafts",
        optionB: "Gleaning in the fields for grain",
        optionC: "Fishing in the river",
        correctAnswer: "Gleaning in the fields for grain",
     }),
      shuffleOptions({
        question:
          "How did the Squire's daughter, Madge, describe the boy who came to ask for work?",
        optionA: "Dressed in green with curly hair",
        optionB: "Dressed in blue with big blue eyes and fair golden curls",
        optionC: "Dressed in brown with a big straw hat",
        correctAnswer:
          "Dressed in blue with big blue eyes and fair golden curls",
     }),
      shuffleOptions({
        question: "What job did the Squire give to the boy, Little Boy Blue?",
        optionA: "Working in the fields with the reapers",
        optionB: "Shepherd to watch over the sheep and cows",
        optionC: "Gardening in the Squire's garden",
        correctAnswer: "Shepherd to watch over the sheep and cows",
     }),
      shuffleOptions({
        question:
          "Why did Little Boy Blue need to go to work even after his mother's accident?",
        optionA: "His mother asked him to go to work.",
        optionB: "He wanted to earn money for himself.",
        optionC: "He needed to earn money to buy food for his mother.",
        correctAnswer: "He needed to earn money to buy food for his mother.",
     }),
      shuffleOptions({
        question:
          "What caused the cows and sheep to stray into the fields and meadows?",
        optionA: "Little Boy Blue let them loose intentionally.",
        optionB: "The Squire ordered them to graze in the fields.",
        optionC: "Little Boy Blue fell asleep.",
        correctAnswer: "Little Boy Blue fell asleep.",
     }),
      shuffleOptions({
        question:
          "What did Little Boy Blue do when he realized the sheep and cows had strayed?",
        optionA: "He blew his silver horn to call them back.",
        optionB: "He ran to get help from the Squire.",
        optionC: "He continued to sleep, unaware of the situation.",
        correctAnswer: "He continued to sleep, unaware of the situation.",
     }),
      shuffleOptions({
        question:
          "How did the Squire react when he found out about the livestock straying into the fields?",
        optionA: "He praised Little Boy Blue for his hard work.",
        optionB: "He forgave Little Boy Blue and offered assistance.",
        optionC:
          "He scolded Little Boy Blue and told him to leave the property.",
        correctAnswer:
          "He scolded Little Boy Blue and told him to leave the property.",
     }),
      shuffleOptions({
        question: "Why did Little Boy Blue fall asleep on the job?",
        optionA: "He was lazy and didn't care about his responsibilities.",
        optionB: "He was exhausted from working hard all night.",
        optionC: "He was bored and wanted to take a nap.",
        correctAnswer: "He was exhausted from working hard all night.",
     }),
      shuffleOptions({
        question:
          "What convinced the Squire and Madge to forgive Little Boy Blue for falling asleep?",
        optionA: "The promise of extra wages",
        optionB: "The boy's heartfelt explanation and his mother's situation",
        optionC: "The Squire's daughter, Madge, pleaded on his behalf",
        correctAnswer:
          "The boy's heartfelt explanation and his mother's situation",
     }),
      shuffleOptions({
        question:
          "How did the Squire and Madge help Little Boy Blue and his mother?",
        optionA: "They offered to adopt him and provide a new home.",
        optionB: "They gave the boy a new job as a gardener.",
        optionC:
          "They provided money, services, and assistance until his mother recovered.",
        correctAnswer:
          "They provided money, services, and assistance until his mother recovered.",
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
          "What was the main source of income for the poor widow and her son? They earned a living by ____________ in the fields, gleaning the stalks of grain that had been missed by the reapers.",
        options: ["fishing", "farming", "gleaning"],
        correctAnswer: "gleaning",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue was dressed in a pretty blue dress and had big ____________ and fair golden curls.",
        options: ["brown eyes", "green eyes", "blue eyes"],
        correctAnswer: "blue eyes",
     }),
      shuffleOptions({
        question:
          "The Squire gave Little Boy Blue the job of being a ____________, responsible for keeping the sheep out of the meadows and the cows away from the cornfield.",
        options: ["gardener", "blacksmith", "shepherd"],
        correctAnswer: "shepherd",
     }),
      shuffleOptions({
        question:
          "The widow fell sick, and her son wanted to work to earn money for her, so he went to see the ____________ for employment.",
        options: ["doctor", "farmer", "Squire"],
        correctAnswer: "Squire",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue's mother broke her leg when she slipped on a stile while he was away working, and he went to fetch a ____________.",
        options: ["doctor", "priest", "teacher"],
        correctAnswer: "doctor",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue did not want to leave his mother all alone, but she encouraged him to go to work and assured him that she would ____________ during his absence.",
        options: ["rest quietly", "follow him", "go with him"],
        correctAnswer: "rest quietly",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue fell asleep while tending to the sheep and cows, which allowed them to stray into the fields and meadows. The Squire was ____________ when he found out.",
        options: ["delighted", "disappointed", "surprised"],
        correctAnswer: "disappointed",
     }),
      shuffleOptions({
        question:
          "The Squire's daughter, Madge, was moved by the child's tears and asked why he fell asleep. Little Boy Blue explained that he had been awake all night nursing his ____________.",
        options: ["friend", "pet", "mother"],
        correctAnswer: "mother",
     }),
      shuffleOptions({
        question:
          "The Squire and Madge walked to Little Boy Blue's home to assist his mother. The Squire had a long talk with the poor widow and provided her with ____________ and the services of a maid until she recovered.",
        options: ["money", "food", "clothing"],
        correctAnswer: "money",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue always said his mother's accident had brought him good luck, but it was his own loving heart and devotion to his mother that truly brought him ____________.",
        options: ["happiness", "fortune", "success"],
        correctAnswer: "fortune",
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
          "Little Boy Blue and his mother earned their living by gleaning in the fields.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue's mother fell sick, and he decided to work for the Squire to earn money.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue's mother's leg was broken in a boat accident.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue was responsible for keeping the sheep out of the meadows and the cows away from the cornfield.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Squire's daughter, Madge, was angry with Little Boy Blue for falling asleep on the job.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue's mother encouraged him to leave her alone while she rested during his absence.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue deliberately allowed the cows and sheep to stray into the fields and meadows.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue's mother was initially reluctant to let him go work for the Squire.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Squire and Madge walked to Little Boy Blue's home to assist his mother. The Squire had a long talk with the poor widow and provided her with money and services until she recovered.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Little Boy Blue always said his mother's accident had brought him good luck, but it was his own loving heart and devotion to his mother that truly brought him fortune.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
