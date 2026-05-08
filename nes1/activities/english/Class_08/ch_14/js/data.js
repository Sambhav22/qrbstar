export const chapter = "Chapter -14: It's Diwali Tonight";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "What is the occasion being celebrated in the text?",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "New Year",
          correctAnswer: "Diwali",
        }),
      shuffleOptions({
          question: "What has been done to show the way to the front door?",
          optionA: "Lighting lamps",
          optionB: "Hanging decorations",
          optionC: "Playing music",
          correctAnswer: "Lighting lamps",
        }),
      shuffleOptions({
          question: "What has been sprinkled to create pictures on the floor?",
          optionA: "Water",
          optionB: "Coloured powders",
          optionC: "Flower petals",
          correctAnswer: "Coloured powders",
        }),
      shuffleOptions({
          question: "What kind of gifts have been exchanged?",
          optionA: "Toys",
          optionB: "Sweets",
          optionC: "Clothes",
          correctAnswer: "Sweets",
        }),
      shuffleOptions({
          question:
            "What is described as being 'bright with light' in the text?",
          optionA: "The sky",
          optionB: "The lamps",
          optionC: "The moon",
          correctAnswer: "The lamps",
        }),
      shuffleOptions({
          question: "Which festival is mentioned as 'tonight' in the text?",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "New Year",
          correctAnswer: "Diwali",
        }),
      shuffleOptions({
          question: "What has been done to prepare for the new year?",
          optionA: "Decorating the house",
          optionB: "Lighting lamps",
          optionC: "Both A and B",
          correctAnswer: "Both A and B",
        }),
      shuffleOptions({
          question: "What is the atmosphere described as in the text?",
          optionA: "Sad",
          optionB: "Joyful",
          optionC: "Quiet",
          correctAnswer: "Joyful",
        }),
      shuffleOptions({
          question: "What is mentioned as being full of joy?",
          optionA: "The house",
          optionB: "The people",
          optionC: "The gifts",
          correctAnswer: "The people",
        }),
      shuffleOptions({
          question: "What has been done with the colored powders?",
          optionA: "Used for cooking",
          optionB: "Sprinkled on the floor to make pictures",
          optionC: "Thrown in the air for celebration",
          correctAnswer: "Sprinkled on the floor to make pictures",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Everything's ready to greet the new __________.",
          optionA: "day",
          optionB: "year",
          optionC: "season",
          correctAnswer: "year",
        }),
      shuffleOptions({
          question: "Everything's bright with __________.",
          optionA: "darkness",
          optionB: "light",
          optionC: "color",
          correctAnswer: "light",
        }),
      shuffleOptions({
          question: "Everyone's dressed up and full of __________.",
          optionA: "sorrow",
          optionB: "joy",
          optionC: "anger",
          correctAnswer: "joy",
        }),
      shuffleOptions({
          question: "It's __________ tonight!",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "Halloween",
          correctAnswer: "Diwali",
        }),
      shuffleOptions({
          question:
            "We've lit the lamps to show the way up to our __________ door.",
          optionA: "back",
          optionB: "front",
          optionC: "side",
          correctAnswer: "front",
        }),
      shuffleOptions({
          question:
            "We've sprinkled colored __________ to make pictures on the floor.",
          optionA: "flowers",
          optionB: "powders",
          optionC: "lights",
          correctAnswer: "powders",
        }),
      shuffleOptions({
          question: "We've given each other gifts of __________.",
          optionA: "toys",
          optionB: "sweets",
          optionC: "clothes",
          correctAnswer: "sweets",
        }),
      shuffleOptions({
          question: "There's a lot of delicious things to __________.",
          optionA: "see",
          optionB: "hear",
          optionC: "eat",
          correctAnswer: "eat",
        }),
      shuffleOptions({
          question: "Everything's ready to greet the new __________.",
          optionA: "day",
          optionB: "year",
          optionC: "month",
          correctAnswer: "year",
        }),
      shuffleOptions({
          question: "Everyone's dressed up and full of __________.",
          optionA: "sorrow",
          optionB: "joy",
          optionC: "fear",
          correctAnswer: "joy",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Walt Irvine and Madge called the dog Klondike because he looked like a wolf.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Wolf was initially playful when he first arrived at the mountain cottage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Skiff Miller suggested that Wolf's real name was Brown.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "To win Wolf's affection, Walt Irvine had a metal plate made, stamped with his phone number.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Wolf had an obsession that drove him south.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Skiff Miller made Wolf wear a collar with a metal plate, which had Irvine's address.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Skiff Miller suggested leaving it up to Madge to decide where he wanted to live.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Wolf followed Skiff Miller when he walked away after the decision, indicating his loyalty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Madge suggested that Wolf might prefer Canada to Alaska.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Wolf's final choice demonstrated his attachment and loyalty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
