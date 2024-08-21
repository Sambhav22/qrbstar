export const chapter = "Chapter -18";
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
        question: "What is the primary setting of the story?",
        optionA: "A city school",
        optionB: "A jungle school",
        optionC: "A farm school",
        correctAnswer: "A jungle school",
     }),
      shuffleOptions({
        question: "Who is the teacher in the primary section?",
        optionA: "Ms. Dog",
        optionB: "Ms. Bear",
        optionC: "Ms. Cat",
        correctAnswer: "Ms. Bear",
     }),
      shuffleOptions({
        question: "What did Ms. Bear ask the students to write an essay on?",
        optionA: "Tigers and Lions",
        optionB: "Themselves",
        optionC: "The jungle",
        correctAnswer: "Themselves",
     }),
      shuffleOptions({
        question: "How does the cat describe itself?",
        optionA: "Small but strong",
        optionB: "Large and powerful",
        optionC: "Small but clever",
        correctAnswer: "Small but clever",
     }),
      shuffleOptions({
        question: "What is the cat's expertise as mentioned in the essay?",
        optionA: "Climbing trees",
        optionB: "Hunting rats",
        optionC: "Swimming",
        correctAnswer: "Hunting rats",
     }),
      shuffleOptions({
        question: "Why do some men keep the cat in their houses?",
        optionA: "To chase away dogs",
        optionB: "To eat mice",
        optionC: "To guard the house",
        correctAnswer: "To eat mice",
     }),
      shuffleOptions({
        question: "How does the cat outsmart dogs?",
        optionA: "By barking loudly",
        optionB: "By climbing trees and walls",
        optionC: "By wagging its tail",
        correctAnswer: "By climbing trees and walls",
     }),
      shuffleOptions({
        question: "What does the dog say about its popularity?",
        optionA: "It is the fastest animal",
        optionB: "It is the smartest animal",
        optionC: "It is the strongest animal",
        correctAnswer: "It is the smartest animal",
     }),
      shuffleOptions({
        question: "What does the dog mention as its role in human settlements?",
        optionA: "Guarding against thieves and wolves",
        optionB: "Hunting for food",
        optionC: "Entertaining children",
        correctAnswer: "Guarding against thieves and wolves",
     }),
      shuffleOptions({
        question: "How does the dog contribute to police and army operations?",
        optionA: "Sniffing out bombs and stolen things",
        optionB: "Chasing criminals",
        optionC: "Herding sheep",
        correctAnswer: "Sniffing out bombs and stolen things",
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
          "Ms. Bear teaches the __________ section in the jungle school.",
        optionA: "Secondary",
        optionB: "Primary",
        optionC: "Intermediate",
        correctAnswer: "Primary",
     }),
      shuffleOptions({
        question:
          "The Cat mentions that it is often considered a part of the __________ family.",
        optionA: "Dog",
        optionB: "Lion",
        optionC: "Cat",
        correctAnswer: "Cat",
     }),
      shuffleOptions({
        question:
          "The Cat is known for its ability to chase and catch __________.",
        optionA: "Birds",
        optionB: "Rats",
        optionC: "Fish",
        correctAnswer: "Rats",
     }),
      shuffleOptions({
        question:
          "The Cat is admired for its swiftness, especially when it __________.",
        optionA: "Climbs trees",
        optionB: "Sleeps",
        optionC: "Eats",
        correctAnswer: "Climbs trees",
     }),
      shuffleOptions({
        question:
          "Some people keep the Cat in their houses to control the population of __________.",
        optionA: "Dogs",
        optionB: "Lions",
        optionC: "Mice",
        correctAnswer: "Mice",
     }),
      shuffleOptions({
        question: "The Dog claims to be the __________ of animals.",
        optionA: "Fastest",
        optionB: "Smartest",
        optionC: "Strongest",
        correctAnswer: "Smartest",
     }),
      shuffleOptions({
        question:
          "The Dog mentions its role in guarding __________ from wolves and houses from thieves.",
        optionA: "Sheep",
        optionB: "Cows",
        optionC: "Pigs",
        correctAnswer: "Sheep",
     }),
      shuffleOptions({
        question:
          "The Dog can sniff out __________ in police and army operations.",
        optionA: "Food",
        optionB: "Bombs and stolen things",
        optionC: "Other animals",
        correctAnswer: "Bombs and stolen things",
     }),
      shuffleOptions({
        question: "According to the Dog, it can have short or long __________.",
        optionA: "Tails",
        optionB: "Ears",
        optionC: "Hair",
        correctAnswer: "Hair",
     }),
      shuffleOptions({
        question:
          "The Cat is described as having a small body and a __________ head.",
        optionA: "Round",
        optionB: "Square",
        optionC: "Triangle",
        correctAnswer: "Round",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ms. Bear teaches the primary section in the jungle school.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Cat is known for its ability to swim.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Dog claims to be the fastest of animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Cat is described as having a large body and a square head.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Some people keep the Cat in their houses to control the population of dogs.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Dog can sniff out bombs and stolen things in police and army operations.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Cat is an expert hunter and is best at chasing elephants.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Dog mentions its role in guarding houses from wolves and sheep.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Cat can easily be identified from its barking.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Dog can have short or long hair, according to its breed.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
