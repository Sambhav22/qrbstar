export const chapter = "Chapter - 23: The Long Wail";
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
        question: "What was in the nest when the spotted cat first found it?",
        optionA: "Two lovely blue eggs",
        optionB: "Five tiny birds",
        optionC: "Nothing",
        correctAnswer: "Nothing",
     }),
      shuffleOptions({
        question:
          "How many weeks did the spotted cat wait before climbing up to the nest for the first time?",
        optionA: "One week",
        optionB: "Two weeks",
        optionC: "Three weeks",
        correctAnswer: "One week",
     }),
      shuffleOptions({
        question: "What did the spotted cat prefer over eggs?",
        optionA: "Eggs",
        optionB: "Young birds",
        optionC: "Mice and rats",
        correctAnswer: "Young birds",
     }),
      shuffleOptions({
        question: "How did the spotted cat occupy her time while waiting?",
        optionA: "Playing with the eggs",
        optionB: "Catching mice and rats",
        optionC: "Singing to herself",
        correctAnswer: "Catching mice and rats",
     }),
      shuffleOptions({
        question:
          "How many eggs were in the nest when the spotted cat checked it after waiting for another week?",
        optionA: "Two eggs",
        optionB: "Three eggs",
        optionC: "Five eggs",
        correctAnswer: "Five eggs",
     }),
      shuffleOptions({
        question:
          "Why did the spotted cat decide to wait longer after finding five eggs in the nest?",
        optionA: "She thought eggs were better than birds",
        optionB: "She wanted the eggs to hatch into young birds",
        optionC: "She didn't like eggs at all",
        correctAnswer: "She wanted the eggs to hatch into young birds",
     }),
      shuffleOptions({
        question:
          "Why did the spotted cat become very happy after the eggs hatched into five tiny birds?",
        optionA: "She loved the color of the birds",
        optionB: "She could finally eat them",
        optionC: "She was patient and it paid off",
        correctAnswer: "She was patient and it paid off",
     }),
      shuffleOptions({
        question:
          "What made the spotted cat decide to wait even longer before taking one of the young birds?",
        optionA: "The young birds were too loud",
        optionB: "The young birds were too thin",
        optionC: "She wasn't hungry yet",
        correctAnswer: "The young birds were too thin",
     }),
      shuffleOptions({
        question:
          "What was the father-bird doing to help the young birds grow fat?",
        optionA: "Feeding them worms",
        optionB: "Chasing away the spotted cat",
        optionC: "Singing them lullabies",
        correctAnswer: "Feeding them worms",
     }),
      shuffleOptions({
        question:
          "What was the spotted cat's reaction when she found the nest empty?",
        optionA: "She was happy and left the nest",
        optionB: "She was confused and waited longer",
        optionC: "She was angry and called the birds ungrateful",
        correctAnswer: "She was angry and called the birds ungrateful",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "When the spotted cat first found the nest, it was ________.",
        options: ["Empty", "Filled with mice", "Covered in leaves"],
        correctAnswer: "Empty",
     }),
      shuffleOptions({
        question:
          "The spotted cat was a patient cat, and ________ was before her.",
        options: ["Winter", "Summer", "Spring"],
        correctAnswer: "Summer",
     }),
      shuffleOptions({
        question:
          "The spotted cat decided to wait for young birds because she believed that ________ were better than eggs.",
        options: ["Mice", "Squirrels", "Young birds"],
        correctAnswer: "Young birds",
     }),
      shuffleOptions({
        question:
          "While waiting, the spotted cat passed the time by catching ________.",
        options: ["Butterflies", "Mice and rats", "Frogs"],
        correctAnswer: "Mice and rats",
     }),
      shuffleOptions({
        question:
          "After waiting for another week, the spotted cat found ________ eggs in the nest.",
        options: ["Two", "Three", "Five"],
        correctAnswer: "Five",
     }),
      shuffleOptions({
        question:
          "The spotted cat decided to wait longer for the eggs to hatch into young birds because she believed that ________ birds were much better.",
        options: ["Small", "Thin", "Fat"],
        correctAnswer: "Fat",
     }),
      shuffleOptions({
        question:
          "The father-bird helped the young birds grow fat by bringing them ________.",
        options: ["Worms", "Berries", "Seeds"],
        correctAnswer: "Worms",
     }),
      shuffleOptions({
        question:
          "The spotted cat became very happy when she saw the young birds in the nest because her patience had ________.",
        options: ["Disappeared", "Paid off", "Frustrated her"],
        correctAnswer: "Paid off",
     }),
      shuffleOptions({
        question:
          "When the spotted cat found the nest empty, she called the birds ________ and ________.",
        options: ["Grateful, happy", "Ungrateful, mean", "Friendly, generous"],
        correctAnswer: "Ungrateful, mean",
     }),
      shuffleOptions({
        question:
          "The spotted cat believed that it was a ________ to be patient.",
        options: ["Waste of time", "Good thing", "Boring activity"],
        correctAnswer: "Good thing",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The spotted cat found the nest empty when she first saw it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The spotted cat waited for a total of three weeks before checking the nest again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The spotted cat preferred eggs over young birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The spotted cat filled her time by catching butterflies while waiting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "There were three eggs in the nest when the spotted cat checked it for the second time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The father-bird helped the young birds grow fat by bringing them seeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The spotted cat was angry when she found the nest empty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The spotted cat believed that thin birds were better than fat ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The spotted cat was impatient and couldn't wait to eat the young birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The spotted cat's patience paid off in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
