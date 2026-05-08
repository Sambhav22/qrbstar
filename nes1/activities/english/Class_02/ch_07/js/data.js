export const chapter = "Chapter - 7: The Tricky Fox ";
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
        question: "What time was it when the fox set out to look for food?",
        optionA: "Morning",
        optionB: "Midnight",
        optionC: "Afternoon",
        correctAnswer: "Midnight",
     }),
      shuffleOptions({
        question: "What was the fox looking for in the field?",
        optionA: "Carrots",
        optionB: "Cucumbers",
        optionC: "Apples",
        correctAnswer: "Cucumbers",
     }),
      shuffleOptions({
        question: "Why did the fox hide behind the tree?",
        optionA: "It was playing a game",
        optionB: "It heard the sound of footsteps",
        optionC: "It was tired",
        correctAnswer: "It heard the sound of footsteps",
     }),
      shuffleOptions({
        question: "What did the farmer have in his hand when he saw the fox?",
        optionA: "A basket",
        optionB: "A long stick",
        optionC: "A shovel",
        correctAnswer: "A long stick",
     }),
      shuffleOptions({
        question:
          "Where did the fox fall when it tried to escape from the farmer?",
        optionA: "River",
        optionB: "Well",
        optionC: "Cave",
        correctAnswer: "Well",
     }),
      shuffleOptions({
        question:
          "What did the farmer say to the fox when he fell into the well?",
        optionA: "You are in trouble now!",
        optionB: "I will rescue you in the morning.",
        optionC: "You deserve to be in there.",
        correctAnswer: "I will rescue you in the morning.",
     }),
      shuffleOptions({
        question: "How deep was the well?",
        optionA: "Very deep",
        optionB: "Shallow",
        optionC: "Moderate depth",
        correctAnswer: "Shallow",
     }),
      shuffleOptions({
        question: "Who passed by the well in the morning?",
        optionA: "Rabbit",
        optionB: "Goat",
        optionC: "Deer",
        correctAnswer: "Goat",
     }),
      shuffleOptions({
        question: "What did the goat ask the fox when she saw him in the well?",
        optionA: "Can I have some cucumbers?",
        optionB: "How did you fall in there?",
        optionC: "How are you there inside, Mr. Fox?",
        correctAnswer: "How are you there inside, Mr. Fox?",
     }),
      shuffleOptions({
        question: "How did the fox escape from the well?",
        optionA: "Climbed the well's walls",
        optionB: "Used a rope",
        optionC: "Tricked the goat to jump out",
        correctAnswer: "Tricked the goat to jump out",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox set out of his lair to look for __________.",
        optionA: "Water",
        optionB: "Food",
        optionC: "Shelter",
        correctAnswer: "Food",
     }),
      shuffleOptions({
        question:
          "As the fox was about to take his first bite of cucumbers, he heard the sound of __________.",
        optionA: "Music",
        optionB: "Footsteps",
        optionC: "Rain",
        correctAnswer: "Footsteps",
     }),
      shuffleOptions({
        question: "The farmer chased the fox with a __________ in his hand.",
        optionA: "Basket",
        optionB: "Stick",
        optionC: "Shovel",
        correctAnswer: "Stick",
     }),
      shuffleOptions({
        question:
          "The fox fell into a __________ when trying to escape from the farmer.",
        optionA: "Cave",
        optionB: "River",
        optionC: "Well",
        correctAnswer: "Well",
     }),
      shuffleOptions({
        question:
          "The farmer promised to rescue the fox from the well in the __________.",
        optionA: "Evening",
        optionB: "Night",
        optionC: "Morning",
        correctAnswer: "Morning",
     }),
      shuffleOptions({
        question:
          "The well was not very __________, and it had a little water.",
        optionA: "Deep",
        optionB: "Shallow",
        optionC: "Dark",
        correctAnswer: "Shallow",
     }),
      shuffleOptions({
        question:
          'The goat asked the fox, "How are you there inside, Mr. __________?"',
        optionA: "Rabbit",
        optionB: "Deer",
        optionC: "Fox",
        correctAnswer: "Fox",
     }),
      shuffleOptions({
        question: "The fox tricked the __________ to jump into the well.",
        optionA: "Rabbit",
        optionB: "Goat",
        optionC: "Deer",
        correctAnswer: "Goat",
     }),
      shuffleOptions({
        question:
          "The goat was lucky because the farmer rescued her in the __________.",
        optionA: "Night",
        optionB: "Morning",
        optionC: "Afternoon",
        correctAnswer: "Morning",
     }),
      shuffleOptions({
        question:
          "The farmer thought he was mistaken, and it should have been a __________ in the well.",
        optionA: "Rabbit",
        optionB: "Fox",
        optionC: "Deer",
        correctAnswer: "Fox",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox set out of his lair to look for food.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer had a shovel in his hand when he chased the fox.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The fox fell into a river when trying to escape from the farmer.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The well the fox fell into was very deep.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The goat asked the fox how he fell into the well.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The fox tricked the rabbit to jump into the well.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer thought there was a deer in the well.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The well had a lot of water in it.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The goat was trapped in the well until the farmer rescued her.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer promised to rescue the fox in the evening.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
