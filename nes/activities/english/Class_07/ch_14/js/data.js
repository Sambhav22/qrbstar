export const chapter = "Chapter - 14: The Choice ";
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
        question: "What did the man and woman call the dog in the story?",
        optionA: "Brown",
        optionB: "Wolf",
        optionC: "Klondike",
        correctAnswer: "Wolf",
     }),
      shuffleOptions({
        question: "Why did the man and woman initially name the dog 'Wolf'?",
        optionA: "Because he looked like a wolf",
        optionB: "Because he howled like a wolf",
        optionC: "Because he had wolf-like behavior",
        correctAnswer: "Because he looked like a wolf",
     }),
      shuffleOptions({
        question:
          "Why did the dog, initially named Wolf, come to the couple's mountain cottage?",
        optionA: "He was lost and looking for shelter",
        optionB: "He was searching for food",
        optionC: "He was attracted to their kindness",
        correctAnswer: "He was searching for food",
     }),
      shuffleOptions({
        question:
          "What did the man and woman do to try to make Wolf feel at home at their cottage?",
        optionA: "They tied him up and left him outside",
        optionB: "They offered him food and made love to him",
        optionC: "They ignored him and let him roam freely",
        correctAnswer: "They offered him food and made love to him",
     }),
      shuffleOptions({
        question:
          "Why did the man make a metal plate with his address for the dog?",
        optionA: "To restrain the dog from running away",
        optionB: "To claim ownership of the dog",
        optionC: "To use as a collar for the dog",
        correctAnswer: "To claim ownership of the dog",
     }),
      shuffleOptions({
        question:
          "Where did the dog, named Brown by the visitor, originally come from?",
        optionA: "California",
        optionB: "Oregon",
        optionC: "The Klondike",
        correctAnswer: "The Klondike",
     }),
      shuffleOptions({
        question:
          "What special ability did the dog display, which surprised the man and woman?",
        optionA: "He could speak",
        optionB: "He could bark",
        optionC: "He could perform tricks",
        correctAnswer: "He could bark",
     }),
      shuffleOptions({
        question:
          "How did the man, Skiff Miller, propose to decide whether the dog would stay with him or with the couple?",
        optionA: "He would ask the dog to choose by barking",
        optionB: "He would leave the dog and let him decide",
        optionC: "He would use a whistle to communicate with the dog",
        correctAnswer: "He would leave the dog and let him decide",
     }),
      shuffleOptions({
        question:
          "How did the dog, formerly known as Wolf, make his final choice?",
        optionA: "He stayed with the man, Skiff Miller",
        optionB: "He stayed with the woman, Madge",
        optionC: "He left both and ran away",
        correctAnswer: "He stayed with the man, Skiff Miller",
     }),
      shuffleOptions({
        question:
          "What was the ultimate decision of the dog, formerly known as Wolf?",
        optionA: "He chose to stay with the couple",
        optionB: "He chose to stay with Skiff Miller",
        optionC: "He ran away to live independently",
        correctAnswer: "He chose to stay with Skiff Miller",
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
          'The couple initially called the dog "_____" because he looked like a wolf.',
        options: ["Brown", "Klondike", "Wolf"],
        correctAnswer: "Wolf",
     }),
      shuffleOptions({
        question:
          "When the dog arrived at the mountain cottage, he was _____ and _____.",
        options: ["hungry", "tired", "happy"],
        correctAnswer: "hungry, tired",
     }),
      shuffleOptions({
        question:
          "The dog's behavior was unsociable, and he often _____ the man and woman with bared fangs.",
        options: ["greeted", "menaced", "ignored"],
        correctAnswer: "menaced",
     }),
      shuffleOptions({
        question:
          "To claim ownership of the dog, the man had a metal plate with his address _____ and strapped it around the dog's neck.",
        options: ["stamped", "painted", "written"],
        correctAnswer: "stamped",
     }),
      shuffleOptions({
        question:
          "The dog disappeared multiple times but always _____ north, back to the Klondike.",
        options: ["stayed", "fled", "wandered"],
        correctAnswer: "fled",
     }),
      shuffleOptions({
        question:
          "Skiff Miller, the visitor, arrived on a train traveling between California and Oregon, and he had covered over _____ miles of travel.",
        options: ["50", "100", "200"],
        correctAnswer: "200",
     }),
      shuffleOptions({
        question:
          "Wolf's final decision was to _____ with Skiff Miller, leaving the couple behind.",
        options: ["stay", "live independently", "run away"],
        correctAnswer: "stay",
     }),
      shuffleOptions({
        question:
          "The dog's name was eventually changed from Wolf to _____ by Skiff Miller.",
        options: ["Klondike", "Brown", "Wanderer"],
        correctAnswer: "Brown",
     }),
      shuffleOptions({
        question:
          "Wolf showed _____ behavior, wagging his tail and _____ his head when Skiff Miller arrived.",
        options: [
          "aggressive, lowering",
          "friendly, tilting",
          "anxious, shaking",
        ],
        correctAnswer: "friendly, tilting",
     }),
      shuffleOptions({
        question:
          "The couple considered buying the dog from Skiff Miller but decided to let Wolf _____ where he wanted to be.",
        options: ["choose", "remain", "roam"],
        correctAnswer: "choose",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The couple initially called the dog 'Brown'.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "The dog arrived at the mountain cottage well-fed and full of energy.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "The dog behaved in a friendly and sociable manner when he first arrived at the cottage.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "The man and woman made the dog feel at home by offering him food and showing affection.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question:
          "The man made a metal plate with his address to restrain the dog from running away.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "The dog always fled north every time he disappeared from the cottage.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question:
          "Skiff Miller arrived from the Klondike, a region in California.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "The dog barked explosively and joyously the first time he met Skiff Miller.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question:
          "Skiff Miller proposed to let the dog choose whether to stay with the couple or go with him.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question:
          "The dog, initially named Wolf, eventually chose to stay with the couple at the mountain cottage.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      }),
    ]),
  }
}

export var activityData;
