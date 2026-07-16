export const chapter = "Chapter - 2: Lively Trees";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which tree is called the king of trees?",
        optionA: "Oak",
        optionB: "Fir",
        optionC: "Willow",
        correctAnswer: "Oak",
      }),
      shuffleOptions({
        question: "Which tree spreads along the wall?",
        optionA: "Fir",
        optionB: "Beech",
        optionC: "Peach",
        correctAnswer: "Peach",
      }),
      shuffleOptions({
        question: "Which tree gives pleasant shade?",
        optionA: "Poplar",
        optionB: "Sycamore",
        optionC: "Mango",
        correctAnswer: "Sycamore",
      }),
      shuffleOptions({
        question: "Which tree grows up straight and tall?",
        optionA: "Poplar",
        optionB: "Willow",
        optionC: "Peach",
        correctAnswer: "Poplar",
      }),
      shuffleOptions({
        question: "Which tree droops in watery glade?",
        optionA: "Willow",
        optionB: "Oak",
        optionC: "Neem",
        correctAnswer: "Willow",
      }),
      shuffleOptions({
        question: "Which tree lives amid the forest?",
        optionA: "Fir",
        optionB: "Beech",
        optionC: "Papaya",
        correctAnswer: "Beech",
      }),
      shuffleOptions({
        question: "Which tree gives useful timber?",
        optionA: "Fir",
        optionB: "Poplar",
        optionC: "Banyan",
        correctAnswer: "Fir",
      }),
      shuffleOptions({
        question: "The Aspen ______ in the breeze.",
        optionA: "droops",
        optionB: "quivers",
        optionC: "grows",
        correctAnswer: "quivers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Aspen ______ in the breeze.",
        optionA: "jumps",
        optionB: "quivers",
        optionC: "swings",
        correctAnswer: "quivers",
      }),
      shuffleOptions({
        question: "The Poplar grows up ______ and tall.",
        optionA: "straight",
        optionB: "crooked",
        optionC: "weak",
        correctAnswer: "straight",
      }),
      shuffleOptions({
        question: "The Fir tree gives useful ______.",
        optionA: "roots",
        optionB: "timber",
        optionC: "fruits",
        correctAnswer: "timber",
      }),
      shuffleOptions({
        question: "The Sycamore gives a ______ shade.",
        optionA: "cold",
        optionB: "pleasant",
        optionC: "rough",
        correctAnswer: "pleasant",
      }),
      shuffleOptions({
        question: "The Beech lives ______ the forest.",
        optionA: "amid",
        optionB: "above",
        optionC: "around",
        correctAnswer: "amid",
      }),
      shuffleOptions({
        question: "The Peach tree ______ along the wall.",
        optionA: "spreads",
        optionB: "stands",
        optionC: "falls",
        correctAnswer: "spreads",
      }),
      shuffleOptions({
        question: "The Oak is called the ______ of trees.",
        optionA: "queen",
        optionB: "king",
        optionC: "prince",
        correctAnswer: "king",
      }),
      shuffleOptions({
        question: "The Willow grows near ______.",
        optionA: "desert",
        optionB: "water",
        optionC: "rocks",
        correctAnswer: "water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Fir tree gives fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Beech tree grows in desert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Oak is the king of trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Aspen tree spreads along the wall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Poplar tree grows straight and tall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Willow droops in watery glade.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sycamore gives bitter shade.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Peach tree spreads along the wall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;