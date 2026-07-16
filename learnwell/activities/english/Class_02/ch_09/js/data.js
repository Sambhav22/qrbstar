export const chapter = "Chapter - 9: Being Thankful";
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
        question: "Who did Niti go to the garden with?",
        optionA: "Her mother",
        optionB: "Her friend",
        optionC: "Her grandfather",
        correctAnswer: "Her grandfather",
      }),
      shuffleOptions({
        question: "What did Niti see on the tree?",
        optionA: "Mangoes",
        optionB: "Guavas",
        optionC: "Apples",
        correctAnswer: "Guavas",
      }),
      shuffleOptions({
        question: "What did Niti say after getting the guava?",
        optionA: "Thank you, Dadu.",
        optionB: "Thank you, Tree.",
        optionC: "Both",
        correctAnswer: "Both",
      }),
      shuffleOptions({
        question: "Where did Niti and her grandfather plant the sapling?",
        optionA: "In the garden",
        optionB: "In front of the house",
        optionC: "In the park",
        correctAnswer: "In front of the house",
      }),
      shuffleOptions({
        question: "What did the children do around the sapling?",
        optionA: "Made a tent",
        optionB: "Made a boundary",
        optionC: "Painted it",
        correctAnswer: "Made a boundary",
      }),
      shuffleOptions({
        question: "What does the sun give us?",
        optionA: "Shade",
        optionB: "Sunlight",
        optionC: "Rain",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "What is the right way to thank a tree?",
        optionA: "Cut it down",
        optionB: "Water it once",
        optionC: "Plant more trees",
        correctAnswer: "Plant more trees",
      }),
      shuffleOptions({
        question: "Who clapped and shouted 'Hurray!'?",
        optionA: "Neighbours",
        optionB: "Children",
        optionC: "Teachers",
        correctAnswer: "Children",
      }),
      shuffleOptions({
        question: "What does the earth give us?",
        optionA: "Food",
        optionB: "Water",
        optionC: "A place to live",
        correctAnswer: "A place to live",
      }),
      shuffleOptions({
        question: "Where did they get the sapling from?",
        optionA: "From a park",
        optionB: "From the market",
        optionC: "From a nursery",
        correctAnswer: "From a nursery",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Niti went to the ______ with her grandfather.",
        optionA: "zoo",
        optionB: "garden",
        optionC: "house",
        correctAnswer: "garden",
      }),
      shuffleOptions({
        question: "Trees give us fruits and ______.",
        optionA: "water",
        optionB: "wood",
        optionC: "toys",
        correctAnswer: "wood",
      }),
      shuffleOptions({
        question: "The children made a ______ around the sapling.",
        optionA: "hole",
        optionB: "swing",
        optionC: "boundary",
        correctAnswer: "boundary",
      }),
      shuffleOptions({
        question: "The sun gives us ______.",
        optionA: "heat",
        optionB: "sunlight",
        optionC: "darkness",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Niti brought a jug of ______.",
        optionA: "juice",
        optionB: "water",
        optionC: "tea",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Niti saw a ______ tree in the garden.",
        optionA: "mango",
        optionB: "guava",
        optionC: "apple",
        correctAnswer: "guava",
      }),
      shuffleOptions({
        question: "The guava was ______.",
        optionA: "raw",
        optionB: "green",
        optionC: "ripe",
        correctAnswer: "ripe",
      }),
      shuffleOptions({
        question: "Grandfather said the tree cannot ______.",
        optionA: "walk",
        optionB: "listen",
        optionC: "speak",
        correctAnswer: "speak",
      }),
      shuffleOptions({
        question: "We can get saplings for free from the ______ department.",
        optionA: "police",
        optionB: "forest",
        optionC: "transport",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "The children used bricks and ______ to make the boundary.",
        optionA: "wood",
        optionB: "stones",
        optionC: "ropes",
        correctAnswer: "stones",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Niti said thank you to the tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The children made a tent around the sapling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees bring rain and check floods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Niti brought milk for the sapling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sapling is a big tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees give us vegetables, fruits, and wood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grandfather told Niti to cut more trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Planting one tree shows thanks to the sun, air, earth, and trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Niti did not want to plant a sapling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Children clapped and shouted 'Welcome!'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;