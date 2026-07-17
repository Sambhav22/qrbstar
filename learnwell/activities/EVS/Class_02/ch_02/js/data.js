export const chapter = "Chapter - 2: Food for Us";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What gives us energy to work and play?",
        optionA: "Food",
        optionB: "Clothes",
        optionC: "Toys",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "How many times do we take food in a day?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Which meal do we take in the morning?",
        optionA: "Lunch",
        optionB: "Dinner",
        optionC: "Breakfast",
        correctAnswer: "Breakfast",
      }),
      shuffleOptions({
        question: "From which source do we get milk?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Air",
        correctAnswer: "Animals",
      }),
      shuffleOptions({
        question: "Which of these is a body-building food?",
        optionA: "Egg",
        optionB: "Apple",
        optionC: "Rice",
        correctAnswer: "Egg",
      }),
      shuffleOptions({
        question: "Which of these foods keeps us safe from illness?",
        optionA: "Protective food",
        optionB: "Energy-giving food",
        optionC: "Street food",
        correctAnswer: "Protective food",
      }),
      shuffleOptions({
        question: "Which food gives us strength to run and play?",
        optionA: "Rice",
        optionB: "Onion",
        optionC: "Mango",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "From where do we get fruits and vegetables?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Shops",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "Which of these is a non-vegetarian food?",
        optionA: "Meat",
        optionB: "Honey",
        optionC: "Milk",
        correctAnswer: "Meat",
      }),
      shuffleOptions({
        question: "What should we do with people who are hungry?",
        optionA: "Ignore them",
        optionB: "Share our food",
        optionC: "Waste food",
        correctAnswer: "Share our food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food gives us ______ to work.",
        optionA: "sleep",
        optionB: "energy",
        optionC: "rest",
        correctAnswer: "energy",
      }),
      shuffleOptions({
        question: "We get our food from ______ and ______.",
        optionA: "plants, animals",
        optionB: "rivers, shops",
        optionC: "air, water",
        correctAnswer: "plants, animals",
      }),
      shuffleOptions({
        question: "We take ______ at night.",
        optionA: "lunch",
        optionB: "dinner",
        optionC: "breakfast",
        correctAnswer: "dinner",
      }),
      shuffleOptions({
        question: "Fruits and vegetables are ______ foods.",
        optionA: "protective",
        optionB: "body-building",
        optionC: "junk",
        correctAnswer: "protective",
      }),
      shuffleOptions({
        question: "Rice and sugar are ______ foods.",
        optionA: "energy-giving",
        optionB: "protective",
        optionC: "none",
        correctAnswer: "energy-giving",
      }),
      shuffleOptions({
        question: "Milk and pulses help us to ______.",
        optionA: "fall ill",
        optionB: "grow",
        optionC: "rest",
        correctAnswer: "grow",
      }),
      shuffleOptions({
        question: "We should eat food at ______ times every day.",
        optionA: "fixed",
        optionB: "odd",
        optionC: "late",
        correctAnswer: "fixed",
      }),
      shuffleOptions({
        question: "Meat and eggs are ______ food items.",
        optionA: "vegetarian",
        optionB: "non-vegetarian",
        optionC: "plant",
        correctAnswer: "non-vegetarian",
      }),
      shuffleOptions({
        question: "Honey comes from ______.",
        optionA: "bees",
        optionB: "trees",
        optionC: "cows",
        correctAnswer: "bees",
      }),
      shuffleOptions({
        question: "Protective food keeps our body ______.",
        optionA: "fit",
        optionB: "lazy",
        optionC: "tired",
        correctAnswer: "fit",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food helps us to grow and stay healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can live without food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We take breakfast at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rice gives us energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants give us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Meat and eggs are non-vegetarian foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vegetables keep us fit and protect from illness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Food from plants includes cereals and pulses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should waste food whenever we want.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sharing food with others is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
