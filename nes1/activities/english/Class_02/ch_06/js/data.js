export const chapter = "Chapter - 6: The Tiger in the Cage";
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
        question: "What is trapped in the cage?",
        optionA: "Fox",
        optionB: "Tiger",
        optionC: "Man",
        correctAnswer: "Tiger",
     }),
      shuffleOptions({
        question: "How does the tiger feel in the cage?",
        optionA: "Happy",
        optionB: "Hungry",
        optionC: "Sleepy",
        correctAnswer: "Hungry",
     }),
      shuffleOptions({
        question: "Who does the tiger believe will help him?",
        optionA: "Fox",
        optionB: "Man",
        optionC: "Another tiger",
        correctAnswer: "Man",
     }),
      shuffleOptions({
        question: "What does the tiger ask the young man to do?",
        optionA: "Hunt for him",
        optionB: "Set him free",
        optionC: "Feed him",
        correctAnswer: "Set him free",
     }),
      shuffleOptions({
        question: "Why does the young man refuse to help the tiger?",
        optionA: "He is afraid of tigers",
        optionB: "He is not strong enough",
        optionC: "He fears being eaten",
        correctAnswer: "He fears being eaten",
     }),
      shuffleOptions({
        question: "What does the tiger promise after being set free?",
        optionA: "To hunt for the man",
        optionB: "Not to harm the man",
        optionC: "To share his food with the man",
        correctAnswer: "Not to harm the man",
     }),
      shuffleOptions({
        question:
          "What does the tiger request the man to do to satisfy his hunger?",
        optionA: "Feed him",
        optionB: "Hunt an animal",
        optionC: "Share his food",
        correctAnswer: "Hunt an animal",
     }),
      shuffleOptions({
        question: "How does the man respond to the tiger's request to eat him?",
        optionA: "Agrees immediately",
        optionB: "Refuses outright",
        optionC: "Asks the fox for advice",
        correctAnswer: "Refuses outright",
     }),
      shuffleOptions({
        question: "Why does the man eventually agree to help the tiger?",
        optionA: "The tiger convinces him with kind words",
        optionB: "The man is also hungry",
        optionC: "The fox advises him to help",
        correctAnswer: "The fox advises him to help",
     }),
      shuffleOptions({
        question: "How does the story end for the tiger?",
        optionA: "He is set free and keeps his promise",
        optionB: "He is trapped in the cage again",
        optionC: "He eats the man despite the promise",
        correctAnswer: "He is trapped in the cage again",
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
          "Once a tiger was trapped in a ___________. I don't know how I can be free. I am hungry too.",
        optionA: "Forest",
        optionB: "Cage",
        optionC: "River",
        correctAnswer: "Cage",
     }),
      shuffleOptions({
        question:
          "Hello, young man, set me ___________. Help me, please. I'm sorry. I can't do that. You have to just lift the ___________.",
        optionA: "Hunt",
        optionB: "Free",
        optionC: "Trap",
        correctAnswer: "Free; Trap",
     }),
      shuffleOptions({
        question:
          "If I set you free, you are sure to ___________ me. I'll be thankful to you for this kind deed. I promise not to eat you.",
        optionA: "Help",
        optionB: "Feed",
        optionC: "Eat",
        correctAnswer: "Eat",
     }),
      shuffleOptions({
        question:
          "It is hard to trust you. Still, I'll ___________ you. I'm hungry. If I don't eat something, I'll die.",
        optionA: "Feed",
        optionB: "Hunt",
        optionC: "Help",
        correctAnswer: "Help",
     }),
      shuffleOptions({
        question:
          "Go and ___________ some animal to satisfy your hunger. Why not you? You'll make a tasty lunch.",
        optionA: "Feed",
        optionB: "Hunt",
        optionC: "Free",
        correctAnswer: "Hunt",
     }),
      shuffleOptions({
        question:
          "You promised not to eat me. You freed me. It's no use freeing me if I die of ___________. Let me eat you.",
        optionA: "Thirst",
        optionB: "Hunger",
        optionC: "Fear",
        correctAnswer: "Hunger",
     }),
      shuffleOptions({
        question:
          "Listen, fox, I set him free from this ___________, but he wants to eat me now. I cannot believe that this tiger was in this cage.",
        optionA: "Forest",
        optionB: "River",
        optionC: "Cage",
        correctAnswer: "Cage",
     }),
      shuffleOptions({
        question:
          "The cage is small, and the tiger is ___________. I was right there in it. Let me see. I was in it like this, and the door was shut like this, wasn't it?",
        optionA: "Large",
        optionB: "Fast",
        optionC: "Quick",
        correctAnswer: "Large",
     }),
      shuffleOptions({
        question:
          "Young man, you can go now. The tiger is caged once again. He can ___________ you no more.",
        optionA: "Harm",
        optionB: "Help",
        optionC: "Hunt",
        correctAnswer: "Harm",
     }),
      shuffleOptions({
        question:
          "Free me, young man, I promise not to ___________ you. Only a fool will trust you now. Thank you, fox.",
        optionA: "Feed",
        optionB: "Help",
        optionC: "Harm",
        correctAnswer: "Harm",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tiger was trapped in a cage.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The young man refused to help the tiger because he was not strong enough.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The tiger promised not to harm the young man after being set free.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The man eventually agreed to help the tiger because he was also hungry.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The tiger asked the man to hunt an animal to satisfy its hunger.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The tiger wanted to eat the man even after being set free.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cage in which the tiger was trapped was large.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The young man trusted the tiger and set it free.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The tiger was caged once again at the end of the story.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The fox thanked the man for setting the tiger free.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
