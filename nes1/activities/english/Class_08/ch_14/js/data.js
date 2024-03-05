export const chapter = "Chapter - 14: It's Diwali Tonight ";
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
        question: "What is the occasion being celebrated in the text?",
        optionA: "Christmas",
        optionB: "Diwali",
        optionC: "New Year",
        correctAnswer: "Diwali",
     }),
      shuffleOptions({
        question: "How is the atmosphere described in the text?",
        optionA: "Dark and gloomy",
        optionB: "Bright with light",
        optionC: "Cloudy and overcast",
        correctAnswer: "Bright with light",
     }),
      shuffleOptions({
        question: "What have people done to guide others to their front door?",
        optionA: "Hung decorations",
        optionB: "Lit lamps",
        optionC: "Put up a sign",
        correctAnswer: "Lit lamps",
     }),
      shuffleOptions({
        question:
          "What have people done on the floor as part of the celebration?",
        optionA: "Sprinkled colored powders to make pictures",
        optionB: "Vacuumed the floor",
        optionC: "Painted the floor",
        correctAnswer: "Sprinkled colored powders to make pictures",
     }),
      shuffleOptions({
        question: "What kind of gifts are exchanged during this celebration?",
        optionA: "Clothes",
        optionB: "Sweets",
        optionC: "Toys",
        correctAnswer: "Sweets",
     }),
      shuffleOptions({
        question: "What is the central theme of the text?",
        optionA: "Halloween",
        optionB: "Diwali preparations and celebrations",
        optionC: "Thanksgiving",
        correctAnswer: "Diwali preparations and celebrations",
     }),
      shuffleOptions({
        question: "What is used to create pictures on the floor during Diwali?",
        optionA: "Colored pencils",
        optionB: "Rangoli",
        optionC: "Stickers",
        correctAnswer: "Rangoli",
     }),
      shuffleOptions({
        question: "What is the common sentiment among the people in the text?",
        optionA: "Sadness",
        optionB: "Joy",
        optionC: "Anger",
        correctAnswer: "Joy",
     }),
      shuffleOptions({
        question: "What is the significance of lighting lamps in the text?",
        optionA: "To save electricity",
        optionB: "To guide the way to the front door",
        optionC: "For decoration",
        correctAnswer: "To guide the way to the front door",
     }),
      shuffleOptions({
        question: "When is Diwali being celebrated in the text?",
        optionA: "In the morning",
        optionB: "In the afternoon",
        optionC: "At night",
        correctAnswer: "At night",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Everything's ready to greet the ________.",
        options: ["morning", "new year", "Christmas"],
        correctAnswer: "new year",
     }),
      shuffleOptions({
        question: "Everything is bright with ________.",
        options: ["darkness", "light", "colors"],
        correctAnswer: "light",
     }),
      shuffleOptions({
        question: "Everyone's dressed up and full of ________.",
        options: ["sorrow", "fear", "joy"],
        correctAnswer: "joy",
     }),
      shuffleOptions({
        question: "It's ________ tonight!",
        options: ["Halloween", "Diwali", "Christmas"],
        correctAnswer: "Diwali",
     }),
      shuffleOptions({
        question:
          "We've lit the lamps to show the ________ up to our front door.",
        options: ["path", "way", "darkness"],
        correctAnswer: "path",
     }),
      shuffleOptions({
        question:
          "We've sprinkled colored powders to make ________ on the floor.",
        options: ["pictures", "drawings", "sculptures"],
        correctAnswer: "pictures",
     }),
      shuffleOptions({
        question: "We've given each other gifts of ________.",
        options: ["toys", "sweets", "flowers"],
        correctAnswer: "sweets",
     }),
      shuffleOptions({
        question: "There's a lot of delicious things to ________.",
        options: ["see", "hear", "eat"],
        correctAnswer: "eat",
     }),
      shuffleOptions({
        question: "Everything's ready to greet the ________.",
        options: ["morning", "new year", "Christmas"],
        correctAnswer: "new year",
     }),
      shuffleOptions({
        question: "Everything is bright with ________.",
        options: ["darkness", "light", "colors"],
        correctAnswer: "light",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mount Everest is the tallest mountain in the world.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question: "The Nile River is the longest river on Earth.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question: "The Earth orbits the Moon.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question: "The Great Wall of China can be seen from space.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question:
          "Mars is known as the Red Planet because of its reddish appearance.",
        optionA: "True",
        optionB: "False",
        answer: "True",
     }),
      shuffleOptions({
        question: "The Eiffel Tower is located in London.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question: "A human has four lungs.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question: "Gold is a liquid at room temperature.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question: "The Sun is a planet.",
        optionA: "True",
        optionB: "False",
        answer: "False",
     }),
      shuffleOptions({
        question: "Water boils at 100 degrees Fahrenheit.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      }),
    ]),
  }
}

export var activityData;
