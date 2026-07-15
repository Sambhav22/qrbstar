export const chapter = "Chapter - 5: The King as Servant";
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
        question: "What is the main issue discussed in the text?",
        optionA: "Forest preservation",
        optionB: "The spread of a terrible disease",
        optionC: "Hunting techniques",
        correctAnswer: "The spread of a terrible disease",
     }),
      shuffleOptions({
        question:
          "Who is suggested as the one responsible for finding a solution to the disease?",
        optionA: "The shepherd",
        optionB: "The bear",
        optionC: "The zebra",
        correctAnswer: "The bear",
     }),
      shuffleOptions({
        question:
          "What is the proposed solution to rid the forest of the disease?",
        optionA: "Sacrifice the one who committed the most sins",
        optionB: "Sacrifice the weakest animal",
        optionC: "Sacrifice the largest animal",
        correctAnswer: "Sacrifice the one who committed the most sins",
     }),
      shuffleOptions({
        question:
          "Which animal confesses to having killed sheep and the shepherd?",
        optionA: "The bear",
        optionB: "The zebra",
        optionC: "The lion",
        correctAnswer: "The lion",
     }),
      shuffleOptions({
        question: "Why does the lion believe he has committed a sin?",
        optionA: "For eating ants",
        optionB: "For devouring deer",
        optionC: "For killing the shepherd",
        correctAnswer: "For killing the shepherd",
     }),
      shuffleOptions({
        question:
          "Who defends the lion's actions and argues that it is not a sin?",
        optionA: "The zebra",
        optionB: "The donkey",
        optionC: "The bear",
        correctAnswer: "The donkey",
     }),
      shuffleOptions({
        question:
          "Which animal admits to stealing eggs and consuming young birds?",
        optionA: "The lion",
        optionB: "The bear",
        optionC: "The zebra",
        correctAnswer: "The zebra",
     }),
      shuffleOptions({
        question: "What does the zebra believe is the gravest sin?",
        optionA: "Killing the shepherd",
        optionB: "Swooping down on snakes",
        optionC: "Stealing eggs",
        correctAnswer: "Swooping down on snakes",
     }),
      shuffleOptions({
        question: "What sin does the donkey confess to committing?",
        optionA: "Eating sugarcanes",
        optionB: "Killing the shepherd",
        optionC: "Destroying nests",
        correctAnswer: "Eating sugarcanes",
     }),
      shuffleOptions({
        question: "Why is the donkey ultimately chosen to be sacrificed?",
        optionA: "For confessing to a grave sin",
        optionB: "For not confessing any sins",
        optionC: "For being the weakest animal",
        correctAnswer: "For not confessing any sins",
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
          "My lord! It appears that one of us has committed a horrible _______. If we sacrifice him, the disease can be eradicated.",
        optionA: "crime",
        optionB: "sin",
        optionC: "act",
        correctAnswer: "sin",
     }),
      shuffleOptions({
        question:
          "I confess that I have committed ________ sins. I have often killed sheep and even the shepherd.",
        optionA: "terrible",
        optionB: "numerous",
        optionC: "grave",
        correctAnswer: "grave",
     }),
      shuffleOptions({
        question:
          "My lord! You have the complete right to hunt animals and people of your choice. Even the shepherd belongs to the race that thinks themselves our _______.",
        optionA: "masters",
        optionB: "enemies",
        optionC: "friends",
        correctAnswer: "masters",
     }),
      shuffleOptions({
        question:
          "Bear, it is nothing like a sin. Sin is mine because I have killed mice and rabbits for food and game. It cannot be called a sin. Sin is mine when I eat up even small ________.",
        optionA: "birds",
        optionB: "creatures",
        optionC: "nestlings",
        correctAnswer: "nestlings",
     }),
      shuffleOptions({
        question:
          "I steal eggs and gulp down young _________. I think my sin is greater than yours.",
        optionA: "rabbits",
        optionB: "sheep",
        optionC: "birds",
        correctAnswer: "birds",
     }),
      shuffleOptions({
        question:
          "I have killed even the animals of our carnivorous race, so my sin should be _________.",
        optionA: "graver",
        optionB: "lighter",
        optionC: "justified",
        correctAnswer: "graver",
     }),
      shuffleOptions({
        question:
          "This is no sin, dear. I not only eat eggs, but also destroy nests. Many birds die due to my ________.",
        optionA: "kindness",
        optionB: "actions",
        optionC: "enjoyment",
        correctAnswer: "actions",
     }),
      shuffleOptions({
        question:
          "Sin is committed by me when I swoop down on the innocent _________.",
        optionA: "rabbits",
        optionB: "snakes",
        optionC: "zebras",
        correctAnswer: "snakes",
     }),
      shuffleOptions({
        question:
          "Donkey, I can see that you have not confessed your ________ as yet.",
        optionA: "sins",
        optionB: "actions",
        optionC: "guilt",
        correctAnswer: "sins",
     }),
      shuffleOptions({
        question:
          "Sir, I have never killed an animal, I eat only grass. Once I committed a small sin when I entered the farmer's field and ate up his ________.",
        optionA: "crops",
        optionB: "animals",
        optionC: "sugarcanes",
        correctAnswer: "sugarcanes",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Elephants can fly.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Water is composed of two atoms.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Bananas are a type of berry.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mount Everest is the tallest mountain on Earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Atlantic Ocean is the largest ocean in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Jupiter is the smallest planet in our solar system.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Gold is a liquid at room temperature.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mercury is the closest planet to the sun.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
