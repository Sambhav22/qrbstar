export const chapter = "Chapter -21: The Greedy King   ";
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
        question: "What did King Midas want when the angel offered him a boon?",
        optionA: "More power",
        optionB: "More gold",
        optionC: "Longer life",
        correctAnswer: "More gold",
     }),
      shuffleOptions({
        question: "What did King Midas touch first with his newfound ability?",
        optionA: "The curtains",
        optionB: "The table",
        optionC: "The windows",
        correctAnswer: "The table",
     }),
      shuffleOptions({
        question:
          "What was the consequence of King Midas's wish when he tried to drink water?",
        optionA: "The water turned into gold",
        optionB: "The glass shattered",
        optionC: "The water disappeared",
        correctAnswer: "The water turned into gold",
     }),
      shuffleOptions({
        question: "Who did King Midas fear would turn into gold?",
        optionA: "His son",
        optionB: "His wife",
        optionC: "His daughter",
        correctAnswer: "His daughter",
     }),
      shuffleOptions({
        question: "How did King Midas react when his daughter approached him?",
        optionA: "He embraced her",
        optionB: "He asked her to stay away",
        optionC: "He gave her a gift",
        correctAnswer: "He asked her to stay away",
     }),
      shuffleOptions({
        question:
          "What happened to King Midas's daughter when she touched him?",
        optionA: "She turned into gold",
        optionB: "She disappeared",
        optionC: "Nothing happened",
        correctAnswer: "She turned into gold",
     }),
      shuffleOptions({
        question:
          "How did King Midas feel after his daughter turned into gold?",
        optionA: "Joyful",
        optionB: "Regretful",
        optionC: "Indifferent",
        correctAnswer: "Regretful",
     }),
      shuffleOptions({
        question:
          "What did King Midas ask the angel to do when he realized his mistake?",
        optionA: "Grant him more wishes",
        optionB: "Take away the boon",
        optionC: "Turn everything back to normal",
        correctAnswer: "Take away the boon",
     }),
      shuffleOptions({
        question: "What lesson did the angel teach King Midas?",
        optionA: "Happiness comes from power",
        optionB: "Greed is always harmful",
        optionC: "Boons should be cherished",
        correctAnswer: "Greed is always harmful",
     }),
      shuffleOptions({
        question: "How did the story end for King Midas?",
        optionA: "He remained greedy",
        optionB: "He lost everything",
        optionC: "He was happy and satisfied",
        correctAnswer: "He was happy and satisfied",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "King Midas was the __________ man in the world.",
        optionA: "Happiest",
        optionB: "Richest",
        optionC: "Wisest",
        correctAnswer: "Richest",
     }),
      shuffleOptions({
        question:
          "The old saint who visited King Midas was actually an __________.",
        optionA: "Elf",
        optionB: "Angel",
        optionC: "Sorcerer",
        correctAnswer: "Angel",
     }),
      shuffleOptions({
        question:
          "Midas asked for the ability to turn everything he touched into __________.",
        optionA: "Silver",
        optionB: "Gold",
        optionC: "Diamonds",
        correctAnswer: "Gold",
     }),
      shuffleOptions({
        question:
          "The first thing Midas touched with his new ability was a __________.",
        optionA: "Chair",
        optionB: "Table",
        optionC: "Crown",
        correctAnswer: "Table",
     }),
      shuffleOptions({
        question:
          "Midas's daughter turned into a __________ when she touched him.",
        optionA: "Silver statue",
        optionB: "Gold statue",
        optionC: "Diamond statue",
        correctAnswer: "Gold statue",
     }),
      shuffleOptions({
        question:
          "The angel warned Midas that his wish for more gold might not bring him __________.",
        optionA: "Happiness",
        optionB: "Power",
        optionC: "Fame",
        correctAnswer: "Happiness",
     }),
      shuffleOptions({
        question:
          "Midas regretted his wish when he realized he couldn't enjoy __________.",
        optionA: "Delicious food",
        optionB: "Quenching his thirst",
        optionC: "Spending time with his daughter",
        correctAnswer: "Quenching his thirst",
     }),
      shuffleOptions({
        question:
          "The angel appeared again and took away the __________ from Midas.",
        optionA: "Curse",
        optionB: "Boon",
        optionC: "Power",
        correctAnswer: "Boon",
     }),
      shuffleOptions({
        question:
          "After the angel's intervention, everything in Midas's palace returned to __________.",
        optionA: "Silver",
        optionB: "Gold",
        optionC: "Normal",
        correctAnswer: "Normal",
     }),
      shuffleOptions({
        question:
          "In the end, King Midas was happily eating his lunch with his daughter in his __________.",
        optionA: "Garden",
        optionB: "Lap",
        optionC: "Throne",
        correctAnswer: "Lap",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "King Midas was the happiest man in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The old man who visited King Midas was an angel.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Everything King Midas touched turned into silver.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Midas's daughter turned into a golden statue when she touched him.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The angel warned Midas about the consequences of his wish.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Midas regretted his wish when he couldn't quench his thirst.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The angel took away Midas's curse.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "After the angel's intervention, everything in Midas's palace remained gold.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "King Midas remained greedy even after the angel's warning.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "In the end, King Midas was happily eating his lunch with his daughter in his throne.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
