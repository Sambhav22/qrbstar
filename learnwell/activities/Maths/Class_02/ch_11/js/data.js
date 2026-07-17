export const chapter = "Chapter - 11: Measurement of Capacity";
export const noOfActivities = 3;
export var activityData;

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
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Capacity tells us how much ______ a container can hold.",
        optionA: "liquid",
        optionB: "light",
        optionC: "air",
        correctAnswer: "liquid",
      }),
      shuffleOptions({
        question: "Which unit do we use for a very small amount of liquid?",
        optionA: "ml",
        optionB: "l",
        optionC: "kg",
        correctAnswer: "ml",
      }),
      shuffleOptions({
        question: "Which vessel will hold more?",
        optionA: "jug",
        optionB: "spoon",
        optionC: "small cup",
        correctAnswer: "jug",
      }),
      shuffleOptions({
        question: "1 litre is equal to 1000",
        optionA: "litre",
        optionB: "millilitres",
        optionC: "mitre",
        correctAnswer: "millilitres",
      }),
      shuffleOptions({
        question: "Which is a non-standard unit of capacity?",
        optionA: "cup",
        optionB: "litre",
        optionC: "millilitre",
        correctAnswer: "cup",
      }),
      shuffleOptions({
        question: "Which vessel is used to measure milk?",
        optionA: "litre measuring can",
        optionB: "bucket",
        optionC: "spoon",
        correctAnswer: "litre measuring can",
      }),
      shuffleOptions({
        question: "A small perfume bottle is usually measured in:",
        optionA: "litres",
        optionB: "ml",
        optionC: "grams",
        correctAnswer: "ml",
      }),
      shuffleOptions({
        question: "Bigger vessels have more",
        optionA: "capacity",
        optionB: "less",
        optionC: "equal",
        correctAnswer: "capacity",
      }),
      shuffleOptions({
        question: "500 ml + 300 ml =",
        optionA: "400 ml",
        optionB: "600 ml",
        optionC: "800 ml",
        correctAnswer: "800 ml",
      }),
      shuffleOptions({
        question: "Which of these is used to measure petrol?",
        optionA: "measuring container",
        optionB: "bowl",
        optionC: "box",
        correctAnswer: "measuring container",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A dropper contains liquid in ______.",
        optionA: "ml",
        optionB: "l",
        optionC: "g",
        correctAnswer: "ml",
      }),
      shuffleOptions({
        question: "Bigger vessels have ______ capacity than smaller ones.",
        optionA: "equal",
        optionB: "less",
        optionC: "more",
        correctAnswer: "more",
      }),
      shuffleOptions({
        question: "Milk is usually measured in ______.",
        optionA: "l",
        optionB: "ml",
        optionC: "kg",
        correctAnswer: "l",
      }),
      shuffleOptions({
        question: "A cup is a ______ unit of capacity.",
        optionA: "standard",
        optionB: "non-standard",
        optionC: "fixed",
        correctAnswer: "non-standard",
      }),
      shuffleOptions({
        question: "A measuring cylinder helps us measure ______ accurately.",
        optionA: "liquid capacity",
        optionB: "time",
        optionC: "distance",
        correctAnswer: "liquid capacity",
      }),
      shuffleOptions({
        question: "1 litre is equal to ______ millilitres.",
        optionA: "100",
        optionB: "1000",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "A big water drum is measured in ______.",
        optionA: "g",
        optionB: "ml",
        optionC: "l",
        correctAnswer: "l",
      }),
      shuffleOptions({
        question: "700 ml is ______ than 200 ml.",
        optionA: "greater",
        optionB: "equal",
        optionC: "less",
        correctAnswer: "greater",
      }),
      shuffleOptions({
        question: "A bottle showing “500 ml” has a capacity of ______.",
        optionA: "half litre",
        optionB: "one litre",
        optionC: "two litres",
        correctAnswer: "half litre",
      }),
      shuffleOptions({
        question: "A small ink bottle holds ______.",
        optionA: "ml",
        optionB: "l",
        optionC: "m",
        correctAnswer: "ml",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Litre is used to measure large quantities of liquid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Millilitre is bigger than litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cups and glasses are non-standard units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "50 ml is less than 200 ml.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 litre = 1000 millilitres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All cups have the same capacity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A jug cannot hold more liquid than a cup.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Addition of capacities is done by adding their numbers and units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water bottle capacity can be measured in litres or millilitres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A spoon can hold more liquid than a bucket.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
