export const chapter = "Chapter - 19: A Salute to Trees";
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
        question: "What is the primary subject of the poem?",
        optionA: "Flowers",
        optionB: "Trees",
        optionC: "Boats",
        correctAnswer: "Trees",
     }),
      shuffleOptions({
        question: "Why are some trees mentioned as being useful in the poem?",
        optionA: "Because they look beautiful",
        optionB: "Because they provide shade",
        optionC: "Because they have various practical purposes",
        correctAnswer: "Because they have various practical purposes",
     }),
      shuffleOptions({
        question: "What are some trees used for in the poem?",
        optionA: "Playing music",
        optionB: "Making art",
        optionC: "Providing shelter against the storm",
        correctAnswer: "Providing shelter against the storm",
     }),
      shuffleOptions({
        question:
          "According to the poem, why are some trees used to keep the fireplace warm?",
        optionA: "Because they are colorful",
        optionB: "Because they are tall",
        optionC: "Because they provide firewood",
        correctAnswer: "Because they provide firewood",
     }),
      shuffleOptions({
        question:
          "What is the purpose of some trees mentioned in relation to a boat ride?",
        optionA: "They are used for fishing",
        optionB: "They are used as oars",
        optionC: "They are used as shade by the riverside",
        correctAnswer: "They are used as oars",
     }),
      shuffleOptions({
        question:
          "What type of trees are mentioned for their strength in the poem?",
        optionA: "Trees with colorful leaves",
        optionB: "Trees with strong roots",
        optionC: "Trees with sweet fruits",
        correctAnswer: "Trees with strong roots",
     }),
      shuffleOptions({
        question:
          "According to the poem, why are some trees used for the roof?",
        optionA: "Because they are tall",
        optionB: "Because they have beautiful leaves",
        optionC: "Because they provide materials for roofing",
        correctAnswer: "Because they provide materials for roofing",
     }),
      shuffleOptions({
        question:
          "What have trees offered to man since the world began, according to the poem?",
        optionA: "Clothing",
        optionB: "Food",
        optionC: "Gifts",
        correctAnswer: "Gifts",
     }),
      shuffleOptions({
        question: "Which part of the tree is mentioned for its sweetness?",
        optionA: "Leaves",
        optionB: "Fruits",
        optionC: "Roots",
        correctAnswer: "Fruits",
     }),
      shuffleOptions({
        question:
          "According to the poem, what are some trees used for in a stream?",
        optionA: "Swimming",
        optionB: "Drinking water",
        optionC: "Boat rides",
        correctAnswer: "Boat rides",
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
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "root", "branches"],
        correctAnswer: "root",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or __________. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "fruit", "bark"],
        correctAnswer: "fruit",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the __________ of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["height", "color", "strength"],
        correctAnswer: "strength",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for shelter against the __________, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["rain", "sun", "storm"],
        correctAnswer: "storm",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace __________. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["cold", "warm", "dry"],
        correctAnswer: "warm",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["soil", "flower", "beam"],
        correctAnswer: "beam",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for a boat ride in a __________. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["desert", "river", "mountain"],
        correctAnswer: "river",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["roof", "soil", "fruit"],
        correctAnswer: "fruit",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["bark", "soil", "beam"],
        correctAnswer: "beam",
     }),
      shuffleOptions({
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of __________. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "soil", "flower"],
        correctAnswer: "flower",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A rectangle has three sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Water boils at 100 degrees Celsius at sea level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Earth revolves around the Moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "An octopus has five tentacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Gold is a liquid at room temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Great Wall of China can be seen from space with the naked eye.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The sun rises in the west and sets in the east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Jupiter is the largest planet in our solar system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Bees hibernate during the winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Nile River is the longest river in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
