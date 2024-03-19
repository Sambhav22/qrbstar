export const chapter = "Chapter -21: The Reflection  ";
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
        question: "What was located in one corner of the animal farm?",
        optionA: "Playground",
        optionB: "Water tank",
        optionC: "Food storage",
        correctAnswer: "Water tank",
     }),
      shuffleOptions({
        question: "Why were the animal babies not allowed to go to the tank?",
        optionA: "The tank was reserved for adult animals.",
        optionB: "It was a rule set by the farmer.",
        optionC: "The text does not provide a reason.",
        correctAnswer: "The text does not provide a reason.",
     }),
      shuffleOptions({
        question:
          "What did the mother dog tell her pup when it wanted to go to the tank?",
        optionA: '"You can go anytime you want."',
        optionB:
          '"You have to grow a little more before I can take you to the tank."',
        optionC: '"The tank is only for big dogs."',
        correctAnswer:
          '"You have to grow a little more before I can take you to the tank."',
     }),
      shuffleOptions({
        question:
          "What did the pup see in the water tank when he sneaked out to it?",
        optionA: "Other animals playing",
        optionB: "His reflection",
        optionC: "Hidden toys",
        correctAnswer: "His reflection",
     }),
      shuffleOptions({
        question: "Why did the pup think there was another pup in the water?",
        optionA: "His mother told him so.",
        optionB: "He saw another pup hiding in the tank.",
        optionC: "He misunderstood his own reflection.",
        correctAnswer: "He misunderstood his own reflection.",
     }),
      shuffleOptions({
        question: "What did the pup say to his reflection in the water?",
        optionA: '"You\'re my sibling."',
        optionB: '"Woof!"',
        optionC: '"Stay away!"',
        correctAnswer: '"Woof!"',
     }),
      shuffleOptions({
        question: "How did the reflection respond when the pup barked at it?",
        optionA: "It remained still.",
        optionB: "It imitated the pup.",
        optionC: "It disappeared.",
        correctAnswer: "It imitated the pup.",
     }),
      shuffleOptions({
        question: "What did the pup realize after jumping into the water?",
        optionA: "There were other pups hiding.",
        optionB: "His reflection was a magical creature.",
        optionC: "There was no other pup, and he was drowning.",
        correctAnswer: "There was no other pup, and he was drowning.",
     }),
      shuffleOptions({
        question: "Why did the pup bark for help?",
        optionA: "He wanted attention.",
        optionB: "He was stuck in the mud.",
        optionC: "He was drowning in water.",
        correctAnswer: "He was drowning in water.",
     }),
      shuffleOptions({
        question: "Who came to the pup's rescue when he barked for help?",
        optionA: "Another dog",
        optionB: "The farmer",
        optionC: "A friendly bird",
        correctAnswer: "The farmer",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Many animals lived on the ____________.",
        optionA: "Mountain",
        optionB: "Animal Farm",
        optionC: "Meadow",
        correctAnswer: "Animal Farm",
     }),
      shuffleOptions({
        question:
          "In one corner of the farm, there was a ____________ in which animals drank water and bathed.",
        optionA: "Playground",
        optionB: "Water tank",
        optionC: "Pond",
        correctAnswer: "Water tank",
     }),
      shuffleOptions({
        question:
          "The animal babies were not allowed to go to the ____________.",
        optionA: "Playground",
        optionB: "Water tank",
        optionC: "Meadow",
        correctAnswer: "Water tank",
     }),
      shuffleOptions({
        question:
          'The mother dog told her pup, "You must not go to the tank; you have to grow a little more before I can take you to the ____________."',
        optionA: "Playground",
        optionB: "Water tank",
        optionC: "Pond",
        correctAnswer: "Water tank",
     }),
      shuffleOptions({
        question:
          "The pup wanted to go to the tank because he also wanted to ____________.",
        optionA: "Play with other pups",
        optionB: "Drink water",
        optionC: "Take a bath",
        correctAnswer: "Take a bath",
     }),
      shuffleOptions({
        question:
          "The pup thought there was another pup in the water because he saw his ____________ in it.",
        optionA: "Mother",
        optionB: "Reflection",
        optionC: "Sibling",
        correctAnswer: "Reflection",
     }),
      shuffleOptions({
        question:
          'The pup said to his reflection, "__________!" He saw it imitate him.',
        optionA: "Meow",
        optionB: "Bark",
        optionC: "Woof",
        correctAnswer: "Woof",
     }),
      shuffleOptions({
        question:
          "Growing very angry, the pup jumped into the ____________. Only then he knew that there was no other pup in the water.",
        optionA: "Pond",
        optionB: "Playground",
        optionC: "Water",
        correctAnswer: "Water",
     }),
      shuffleOptions({
        question:
          "The pup barked for help when he realized he was ____________ in water.",
        optionA: "Playing",
        optionB: "Drowning",
        optionC: "Floating",
        correctAnswer: "Drowning",
     }),
      shuffleOptions({
        question:
          "Who came running and rescued the pup when he barked for help?",
        optionA: "Another dog",
        optionB: "The farmer",
        optionC: "A friendly bird",
        correctAnswer: "The farmer",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The water tank on the farm was only for adult animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The animal babies were allowed to go to the tank whenever they wanted.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The pup wanted to go to the tank because he wanted to play with other pups.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The pup thought there was another pup in the water because he saw his mother in it.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The reflection in the water imitated the pup's actions.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The pup realized there was another pup hiding in the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The pup barked at his reflection because it was a magical creature.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The pup jumped into the water and found out there was no other pup.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The pup barked for help because he was happily playing in the water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The farmer came running and rescued the pup when he barked for help.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
