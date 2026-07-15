export const chapter = "Chapter - 3: The Forest Bride ";
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
        question: "What did the farmer instruct his three sons to do?",
        optionA: "Find a job",
        optionB: "Go in search of brides",
        optionC: "Explore the forest",
        correctAnswer: "Go in search of brides",
     }),
      shuffleOptions({
        question:
          "Which direction did the eldest son's tree branch point when he chopped it down?",
        optionA: "North",
        optionB: "South",
        optionC: "East",
        correctAnswer: "North",
     }),
      shuffleOptions({
        question: "Where did the second son's tree branch point?",
        optionA: "North",
        optionB: "South",
        optionC: "East",
        correctAnswer: "South",
     }),
      shuffleOptions({
        question: "Where did the youngest son, Veikko's, tree branch point?",
        optionA: "North",
        optionB: "South",
        optionC: "The forest",
        correctAnswer: "The forest",
     }),
      shuffleOptions({
        question:
          "What did Veikko find in the forest when he ventured in that direction?",
        optionA: "A hut with a princess inside",
        optionB: "An empty hut with only a mouse",
        optionC: "A hidden treasure",
        correctAnswer: "An empty hut with only a mouse",
     }),
      shuffleOptions({
        question:
          "How did the little mouse convince Veikko to choose her as his sweetheart?",
        optionA: "She offered him a gift",
        optionB: "She sang a song",
        optionC: "She promised to make him rich",
        correctAnswer: "She sang a song",
     }),
      shuffleOptions({
        question:
          "What skill did the farmer test the three brothers' sweethearts on after the bread-baking test?",
        optionA: "Singing",
        optionB: "Dancing",
        optionC: "Weaving",
        correctAnswer: "Weaving",
     }),
      shuffleOptions({
        question:
          "What did the little mouse use to create a sample of her weaving?",
        optionA: "Cotton and linen",
        optionB: "Flax",
        optionC: "Straw",
        correctAnswer: "Flax",
     }),
      shuffleOptions({
        question:
          "How did the little mouse transform for the meeting with Veikko's father?",
        optionA: "She turned into a beautiful princess",
        optionB: "She became a giant mouse",
        optionC: "She remained the same",
        correctAnswer: "She turned into a beautiful princess",
     }),
      shuffleOptions({
        question: "Why did the little mouse turn into a princess?",
        optionA: "The farmer's spell was broken when his sons laughed at her",
        optionB: "She was always a princess in disguise",
        optionC: "Veikko wished for it",
        correctAnswer:
          "The farmer's spell was broken when his sons laughed at her",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What did the farmer instruct his three sons to do?",
        options: {
          a: "Find a job",
          b: "Go in search of brides",
          c: "Explore the forest",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "The eldest son's tree branch fell pointing __________.",
        options: {
          a: "East",
          b: "North",
          c: "South",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "The second son's tree branch fell pointing __________.",
        options: {
          a: "East",
          b: "North",
          c: "South",
        correctAnswer: "c",
     }),
      shuffleOptions({
        question: "The youngest son's name was __________.",
        options: {
          a: "Vinnie",
          b: "Veikko",
          c: "Viktor",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "Veikko started off with a brave front but after he had gone some distance in the forest, his courage began to __________.",
        options: {
          a: "Grow",
          b: "Ebb",
          c: "Soar",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "Suddenly he noticed a little __________ in the forest.",
        options: {
          a: "Bear",
          b: "Hut",
          c: "River",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "To be sure, there was a little __________ sitting on the table.",
        options: {
          a: "Squirrel",
          b: "Mouse",
          c: "Bird",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "Veikko's elder brothers went off gaily and presented themselves to the two farmers whose __________ they admired.",
        options: {
          a: "Horses",
          b: "Daughters",
          c: "Cows",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "The eldest brother's sweetheart had a loaf of __________.",
        options: {
          a: "Wheat bread",
          b: "Rye bread",
          c: "Barley bread",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "When Veikko presented his loaf of beautiful wheat bread, his father exclaimed, 'What! __________ bread!'",
        options: {
          a: "Barley",
          b: "Rye",
          c: "White",
        correctAnswer: "c",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The farmer instructed his three sons to find brides.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question: "The eldest son's tree branch pointed to the south.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "The second son's tree branch pointed to the north.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Veikko's tree branch pointed toward a farm with a pretty girl.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Veikko's brothers laughed at him for having a mouse as a sweetheart.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "The little mouse was not willing to become Veikko's sweetheart.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "The little mouse could bake a loaf of wheat bread for Veikko.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "The farmer wanted the sweethearts to bake a cake, not bread.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "Veikko's sweetheart turned into a princess when she met his father.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question: "Veikko's brothers were envious of his choice of sweetheart.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
      }),
    ]),
  }
}

export var activityData;
