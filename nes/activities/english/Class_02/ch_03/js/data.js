export const chapter = "Chapter - 3: Help in Housework";
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
        question:
          "What is Rajan's favorite food that he wants to help his mother bake?",
        optionA: "Pizza",
        optionB: "Cake",
        optionC: "Pasta",
        correctAnswer: "Cake",
     }),
      shuffleOptions({
        question: "Where did Rajan go to buy yeast and cherry for the cake?",
        optionA: "Grocery store",
        optionB: "Bakery",
        optionC: "Market",
        correctAnswer: "Market",
     }),
      shuffleOptions({
        question:
          "How much money did Rajan's mother give him for buying the cake ingredients?",
        optionA: "Fifty rupees",
        optionB: "Hundred rupees",
        optionC: "Seventy-five rupees",
        correctAnswer: "Hundred rupees",
     }),
      shuffleOptions({
        question:
          "What did Rajan's mother warn him about before he left to buy the ingredients?",
        optionA: "Watch out for animals",
        optionB: "Follow traffic rules",
        optionC: "Don't talk to strangers",
        correctAnswer: "Follow traffic rules",
     }),
      shuffleOptions({
        question:
          "In which room was Rajan lazily sitting before deciding to help his mother?",
        optionA: "Living room",
        optionB: "Kitchen",
        optionC: "Bedroom",
        correctAnswer: "Bedroom",
     }),
      shuffleOptions({
        question: "What did Rajan buy in addition to yeast and cherry?",
        optionA: "Ice cream",
        optionB: "Balloon",
        optionC: "Chocolate",
        correctAnswer: "Balloon",
     }),
      shuffleOptions({
        question: "How much did Rajan spend on buying yeast?",
        optionA: "Twenty rupees",
        optionB: "Thirty rupees",
        optionC: "Fifteen rupees",
        correctAnswer: "Thirty rupees",
     }),
      shuffleOptions({
        question: "Why did Rajan decide to help his mother in housework?",
        optionA: "He was bored",
        optionB: "All his friends were away",
        optionC: "He wanted to surprise his mother",
        correctAnswer: "All his friends were away",
     }),
      shuffleOptions({
        question:
          "What did Rajan's mother say he could help her with in the kitchen?",
        optionA: "Cook lunch",
        optionB: "Bake a cake",
        optionC: "Clean the dishes",
        correctAnswer: "Bake a cake",
     }),
      shuffleOptions({
        question:
          "What did Rajan's mother say while giving him a hundred-rupee note?",
        optionA: "Buy whatever you want.",
        optionB: "Don't spend it all.",
        optionC: "Be careful and follow the rules.",
        correctAnswer: "Be careful and follow the rules.",
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
          "Rajan's friends had gone away to __________ during the winter vacation.",
        optionA: "School",
        optionB: "Relatives",
        optionC: "Park",
        correctAnswer: "Relatives",
     }),
      shuffleOptions({
        question: "Rajan decided to help his mother bake a __________.",
        optionA: "Pizza",
        optionB: "Cake",
        optionC: "Pie",
        correctAnswer: "Cake",
     }),
      shuffleOptions({
        question: "Rajan's mother asked him to buy yeast from the __________.",
        optionA: "Grocery store",
        optionB: "Bakery",
        optionC: "Market",
        correctAnswer: "Bakery",
     }),
      shuffleOptions({
        question:
          "Rajan's mother gave him a __________ rupee note for shopping.",
        optionA: "Fifty",
        optionB: "Hundred",
        optionC: "Seventy-five",
        correctAnswer: "Hundred",
     }),
      shuffleOptions({
        question:
          "Rajan was counting in his mind how much money he had left as he rode back home with yeast, cherry, and a __________.",
        optionA: "Balloon",
        optionB: "Ice cream",
        optionC: "Chocolate",
        correctAnswer: "Balloon",
     }),
      shuffleOptions({
        question:
          "Rajan's mother warned him to follow __________ because of the traffic in the colony.",
        optionA: "Animal trails",
        optionB: "Traffic rules",
        optionC: "Friends' advice",
        correctAnswer: "Traffic rules",
     }),
      shuffleOptions({
        question: "Rajan spent __________ rupees on buying yeast.",
        optionA: "Twenty",
        optionB: "Thirty",
        optionC: "Fifteen",
        correctAnswer: "Thirty",
     }),
      shuffleOptions({
        question:
          "Rajan's mother suggested that he could help her __________ if he wanted.",
        optionA: "Clean the house",
        optionB: "Cook lunch",
        optionC: "Bake a cake",
        correctAnswer: "Bake a cake",
     }),
      shuffleOptions({
        question:
          "Rajan's friends were away, so he was __________ sitting in his room.",
        optionA: "Actively",
        optionB: "Lazily",
        optionC: "Eagerly",
        correctAnswer: "Lazily",
     }),
      shuffleOptions({
        question:
          "Rajan decided to buy __________ from the grocer along with yeast and cherry.",
        optionA: "Ice cream",
        optionB: "Balloon",
        optionC: "Cherry",
        correctAnswer: "Cherry",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Rajan's friends went away to spend winter vacation with relatives.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Rajan decided to help his mother bake a pizza.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Rajan's mother asked him to buy yeast from the grocery store.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rajan's mother gave him a fifty-rupee note for shopping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rajan rode back home with yeast, cherry, and a balloon.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Rajan's mother warned him to follow traffic rules due to the traffic in the colony.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Rajan spent thirty rupees on buying yeast.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Rajan's mother suggested he could help her clean the house.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Rajan was actively sitting in his room before deciding to help his mother.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Rajan decided to buy chocolate from the grocer along with yeast and cherry.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
