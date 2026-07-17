export const chapter = "Chapter - 5: Our Houses";
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
        question: "Which house is made of mud, bamboo and straw?",
        optionA: "Pucca house",
        optionB: "Kutcha house",
        optionC: "Bungalow",
        correctAnswer: "Kutcha house",
      }),
      shuffleOptions({
        question: "Which type of house is strong and mostly found in cities?",
        optionA: "Kutcha house",
        optionB: "Pucca house",
        optionC: "Hut",
        correctAnswer: "Pucca house",
      }),
      shuffleOptions({
        question: "Which house has many apartments in it?",
        optionA: "Hut",
        optionB: "Tent",
        optionC: "Multi-storey building",
        correctAnswer: "Multi-storey building",
      }),
      shuffleOptions({
        question: "Which house is built on water and can float?",
        optionA: "Caravan",
        optionB: "Houseboat",
        optionC: "Igloo",
        correctAnswer: "Houseboat",
      }),
      shuffleOptions({
        question: "Which person draws the design of a house?",
        optionA: "Mason",
        optionB: "Architect",
        optionC: "Carpenter",
        correctAnswer: "Architect",
      }),
      shuffleOptions({
        question: "Which person builds the walls of a house using bricks?",
        optionA: "Painter",
        optionB: "Plumber",
        optionC: "Mason",
        correctAnswer: "Mason",
      }),
      shuffleOptions({
        question: "Which house is used during camping?",
        optionA: "Tent",
        optionB: "Bungalow",
        optionC: "Hut",
        correctAnswer: "Tent",
      }),
      shuffleOptions({
        question: "Which house is made of blocks of ice?",
        optionA: "Houseboat",
        optionB: "Tent",
        optionC: "Igloo",
        correctAnswer: "Igloo",
      }),
      shuffleOptions({
        question: "Which person fixes taps and pipes?",
        optionA: "Electrician",
        optionB: "Plumber",
        optionC: "Carpenter",
        correctAnswer: "Plumber",
      }),
      shuffleOptions({
        question: "Which house has only one floor?",
        optionA: "Single-storey house",
        optionB: "Double-storey house",
        optionC: "Multi-storey building",
        correctAnswer: "Single-storey house",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A hut is an example of a ______ house.",
        optionA: "pucca",
        optionB: "kutcha",
        optionC: "multi-storey",
        correctAnswer: "kutcha",
      }),
      shuffleOptions({
        question: "A house protects us from heat, cold and ______.",
        optionA: "fog",
        optionB: "rain",
        optionC: "dust",
        correctAnswer: "rain",
      }),
      shuffleOptions({
        question: "A ______ has two floors.",
        optionA: "single-storey house",
        optionB: "double-storey house",
        optionC: "bungalow",
        correctAnswer: "double-storey house",
      }),
      shuffleOptions({
        question: "A carpenter makes doors, windows and ______.",
        optionA: "cupboards",
        optionB: "switches",
        optionC: "pipes",
        correctAnswer: "cupboards",
      }),
      shuffleOptions({
        question: "A house that floats on water is called a ______.",
        optionA: "tent",
        optionB: "houseboat",
        optionC: "caravan",
        correctAnswer: "houseboat",
      }),
      shuffleOptions({
        question: "A ______ paints the walls of the house.",
        optionA: "mason",
        optionB: "painter",
        optionC: "electrician",
        correctAnswer: "painter",
      }),
      shuffleOptions({
        question: "Trees should be planted around the house to make the air ______.",
        optionA: "dirty",
        optionB: "noisy",
        optionC: "clean",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "A ______ fixes electric wires and plugs.",
        optionA: "plumber",
        optionB: "electrician",
        optionC: "painter",
        correctAnswer: "electrician",
      }),
      shuffleOptions({
        question: "A house made of bricks and cement is called a ______ house.",
        optionA: "kutcha",
        optionB: "pucca",
        optionC: "temporary",
        correctAnswer: "pucca",
      }),
      shuffleOptions({
        question: "A ______ is a house on wheels.",
        optionA: "caravan",
        optionB: "hut",
        optionC: "igloo",
        correctAnswer: "caravan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pucca houses are weak and easily broken.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A bungalow is a large one-storey house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A tent is made of cloth and used for camping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mason paints the walls of the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Houseboats are found on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A multi-storey building has only one floor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees make the air clean around the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An architect builds a house using bricks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A caravan is a house on wheels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Igloos are found in very cold places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
