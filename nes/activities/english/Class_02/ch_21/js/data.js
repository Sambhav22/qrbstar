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
        optionA: "A) More power",
        optionB: "B) More gold",
        optionC: "C) Longer life",
        correctAnswer: "B) More gold",
     }),
      shuffleOptions({
        question: "What did King Midas touch first with his newfound ability?",
        optionA: "A) The curtains",
        optionB: "B) The table",
        optionC: "C) The windows",
        correctAnswer: "B) The table",
     }),
      shuffleOptions({
        question:
          "What was the consequence of King Midas's wish when he tried to drink water?",
        optionA: "A) The water turned into gold",
        optionB: "B) The glass shattered",
        optionC: "C) The water disappeared",
        correctAnswer: "A) The water turned into gold",
     }),
      shuffleOptions({
        question: "Who did King Midas fear would turn into gold?",
        optionA: "A) His son",
        optionB: "B) His wife",
        optionC: "C) His daughter",
        correctAnswer: "C) His daughter",
     }),
      shuffleOptions({
        question: "How did King Midas react when his daughter approached him?",
        optionA: "A) He embraced her",
        optionB: "B) He asked her to stay away",
        optionC: "C) He gave her a gift",
        correctAnswer: "B) He asked her to stay away",
     }),
      shuffleOptions({
        question:
          "What happened to King Midas's daughter when she touched him?",
        optionA: "A) She turned into gold",
        optionB: "B) She disappeared",
        optionC: "C) Nothing happened",
        correctAnswer: "A) She turned into gold",
     }),
      shuffleOptions({
        question:
          "How did King Midas feel after his daughter turned into gold?",
        optionA: "A) Joyful",
        optionB: "B) Regretful",
        optionC: "C) Indifferent",
        correctAnswer: "B) Regretful",
     }),
      shuffleOptions({
        question:
          "What did King Midas ask the angel to do when he realized his mistake?",
        optionA: "A) Grant him more wishes",
        optionB: "B) Take away the boon",
        optionC: "C) Turn everything back to normal",
        correctAnswer: "B) Take away the boon",
     }),
      shuffleOptions({
        question: "What lesson did the angel teach King Midas?",
        optionA: "A) Happiness comes from power",
        optionB: "B) Greed is always harmful",
        optionC: "C) Boons should be cherished",
        correctAnswer: "B) Greed is always harmful",
     }),
      shuffleOptions({
        question: "How did the story end for King Midas?",
        optionA: "A) He remained greedy",
        optionB: "B) He lost everything",
        optionC: "C) He was happy and satisfied",
        correctAnswer: "C) He was happy and satisfied",
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
        optionA: "A) Happiest",
        optionB: "B) Richest",
        optionC: "C) Wisest",
        correctAnswer: "B) Richest",
     }),
      shuffleOptions({
        question:
          "The old saint who visited King Midas was actually an __________.",
        optionA: "A) Elf",
        optionB: "B) Angel",
        optionC: "C) Sorcerer",
        correctAnswer: "B) Angel",
     }),
      shuffleOptions({
        question:
          "Midas asked for the ability to turn everything he touched into __________.",
        optionA: "A) Silver",
        optionB: "B) Gold",
        optionC: "C) Diamonds",
        correctAnswer: "B) Gold",
     }),
      shuffleOptions({
        question:
          "The first thing Midas touched with his new ability was a __________.",
        optionA: "A) Chair",
        optionB: "B) Table",
        optionC: "C) Crown",
        correctAnswer: "B) Table",
     }),
      shuffleOptions({
        question:
          "Midas's daughter turned into a __________ when she touched him.",
        optionA: "A) Silver statue",
        optionB: "B) Gold statue",
        optionC: "C) Diamond statue",
        correctAnswer: "B) Gold statue",
     }),
      shuffleOptions({
        question:
          "The angel warned Midas that his wish for more gold might not bring him __________.",
        optionA: "A) Happiness",
        optionB: "B) Power",
        optionC: "C) Fame",
        correctAnswer: "A) Happiness",
     }),
      shuffleOptions({
        question:
          "Midas regretted his wish when he realized he couldn't enjoy __________.",
        optionA: "A) Delicious food",
        optionB: "B) Quenching his thirst",
        optionC: "C) Spending time with his daughter",
        correctAnswer: "B) Quenching his thirst",
     }),
      shuffleOptions({
        question:
          "The angel appeared again and took away the __________ from Midas.",
        optionA: "A) Curse",
        optionB: "B) Boon",
        optionC: "C) Power",
        correctAnswer: "B) Boon",
     }),
      shuffleOptions({
        question:
          "After the angel's intervention, everything in Midas's palace returned to __________.",
        optionA: "A) Silver",
        optionB: "B) Gold",
        optionC: "C) Normal",
        correctAnswer: "C) Normal",
     }),
      shuffleOptions({
        question:
          "In the end, King Midas was happily eating his lunch with his daughter in his __________.",
        optionA: "A) Garden",
        optionB: "B) Lap",
        optionC: "C) Throne",
        correctAnswer: "B) Lap",
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
