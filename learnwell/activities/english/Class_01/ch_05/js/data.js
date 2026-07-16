export const chapter = "Chapter - 5: The Lost Rabbit";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What were the children playing?",
        optionA: "Cricket",
        optionB: "Football",
        optionC: "Hide and Seek",
        correctAnswer: "Football",
      }),
      shuffleOptions({
        question: "Who picked up the rabbit?",
        optionA: "Radha",
        optionB: "Rajni",
        optionC: "Pulkit",
        correctAnswer: "Pulkit",
      }),
      shuffleOptions({
        question: "What colour was the rabbit?",
        optionA: "Black",
        optionB: "Brown",
        optionC: "White",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "Who wanted to keep the rabbit as a pet?",
        optionA: "Rajni",
        optionB: "Shakti",
        optionC: "Surbhi",
        correctAnswer: "Rajni",
      }),
      shuffleOptions({
        question: "Who said, 'Be careful, it can be a snake'?",
        optionA: "Pawan",
        optionB: "Pulkit",
        optionC: "Shakti",
        correctAnswer: "Pawan",
      }),
      shuffleOptions({
        question: "What were the children doing with the ball?",
        optionA: "Sleeping",
        optionB: "Running",
        optionC: "Drawing",
        correctAnswer: "Running",
      }),
      shuffleOptions({
        question: "What did Radha say after touching the rabbit?",
        optionA: "It is soft",
        optionB: "It is cold",
        optionC: "It is wet",
        correctAnswer: "It is soft",
      }),
      shuffleOptions({
        question: "What is the rabbit's home called?",
        optionA: "Nest",
        optionB: "Shed",
        optionC: "Burrow",
        correctAnswer: "Burrow",
      }),
      shuffleOptions({
        question: "Who followed Rajni to her house?",
        optionA: "Parents",
        optionB: "Friends",
        optionC: "Teachers",
        correctAnswer: "Friends",
      }),
      shuffleOptions({
        question: "Where was the rabbit found?",
        optionA: "In the bush",
        optionB: "In the grass",
        optionC: "In a box",
        correctAnswer: "In the grass",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Children were playing in the ______.",
        optionA: "school",
        optionB: "grass",
        optionC: "room",
        correctAnswer: "grass",
      }),
      shuffleOptions({
        question: "The rabbit was ______ in colour.",
        optionA: "brown",
        optionB: "black",
        optionC: "white",
        correctAnswer: "white",
      }),
      shuffleOptions({
        question: "Pulkit picked the rabbit ______.",
        optionA: "quickly",
        optionB: "up",
        optionC: "slowly",
        correctAnswer: "up",
      }),
      shuffleOptions({
        question: "The children were shrieking in ______.",
        optionA: "fear",
        optionB: "joy",
        optionC: "pain",
        correctAnswer: "joy",
      }),
      shuffleOptions({
        question: "Its home is called a ______, said Shakti.",
        optionA: "nest",
        optionB: "shed",
        optionC: "burrow",
        correctAnswer: "burrow",
      }),
      shuffleOptions({
        question: "It cannot be a ______, said Radha.",
        optionA: "frog",
        optionB: "rabbit",
        optionC: "snake",
        correctAnswer: "snake",
      }),
      shuffleOptions({
        question: "The rabbit was very ______ to touch.",
        optionA: "soft",
        optionB: "hard",
        optionC: "rough",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "The children looked for the rabbit's ______.",
        optionA: "food",
        optionB: "mother",
        optionC: "burrow",
        correctAnswer: "burrow",
      }),
      shuffleOptions({
        question: "Rajni wanted to have the rabbit as a ______.",
        optionA: "toy",
        optionB: "pet",
        optionC: "doll",
        correctAnswer: "pet",
      }),
      shuffleOptions({
        question: "The other children ______ Rajni.",
        optionA: "stopped",
        optionB: "followed",
        optionC: "scolded",
        correctAnswer: "followed",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The rabbit was black.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The children found the rabbit in the grass.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pulkit was afraid to go near the rabbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rabbit's mother had already taken it back.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rajni took the rabbit to the zoo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shakti told the others that a rabbit's home is a burrow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The children played in the garden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Radha said the rabbit was soft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The children gave the rabbit food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rajni walked to her house with the rabbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;