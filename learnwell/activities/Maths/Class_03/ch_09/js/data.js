export const chapter = "Chapter - 9: Measurement of Weight";
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
        question: "Which unit is used to measure the weight of very tiny things like a pill?",
        optionA: "Kilogram",
        optionB: "Milligram",
        optionC: "Gram",
        correctAnswer: "Milligram",
      }),
      shuffleOptions({
        question: "Which device is commonly used to measure the weight of objects?",
        optionA: "Balance",
        optionB: "Thermometer",
        optionC: "Ruler",
        correctAnswer: "Balance",
      }),
      shuffleOptions({
        question: "What is the standard unit of measuring weight?",
        optionA: "Gram",
        optionB: "Kilogram",
        optionC: "Milligram",
        correctAnswer: "Kilogram",
      }),
      shuffleOptions({
        question: "Which of the following is the heaviest measurement?",
        optionA: "500 g",
        optionB: "1 kg 50 g",
        optionC: "2 kg",
        correctAnswer: "2 kg",
      }),
      shuffleOptions({
        question: "Which weight would be suitable for measuring a sack of wheat?",
        optionA: "mg",
        optionB: "g",
        optionC: "kg",
        correctAnswer: "kg",
      }),
      shuffleOptions({
        question: "Which is the correct conversion of 3 kg into grams?",
        optionA: "300 g",
        optionB: "3000 g",
        optionC: "30 g",
        correctAnswer: "3000 g",
      }),
      shuffleOptions({
        question: "Which is heavier between 250 g and 500 g?",
        optionA: "250 g",
        optionB: "Both are equal",
        optionC: "500 g",
        correctAnswer: "500 g",
      }),
      shuffleOptions({
        question: "What should we do to convert kilograms into grams?",
        optionA: "Divide by 1000",
        optionB: "Multiply by 1000",
        optionC: "Add 100",
        correctAnswer: "Multiply by 1000",
      }),
      shuffleOptions({
        question: "Which object is most likely to weigh in grams?",
        optionA: "A pencil box",
        optionB: "A car",
        optionC: "A feather",
        correctAnswer: "A pencil box",
      }),
      shuffleOptions({
        question: "Which is the correct comparison?",
        optionA: "1 kg = 100 g",
        optionB: "1 kg = 1000 g",
        optionC: "1 kg = 10 g",
        correctAnswer: "1 kg = 1000 g",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A feather is usually measured in ______.",
        optionA: "g",
        optionB: "mg",
        optionC: "kg",
        correctAnswer: "mg",
      }),
      shuffleOptions({
        question: "To convert 2000 g into kilograms, we ______ by 1000.",
        optionA: "multiply",
        optionB: "divide",
        optionC: "subtract",
        correctAnswer: "divide",
      }),
      shuffleOptions({
        question: "A balance has ______ pans.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "1500 g is equal to 1 kg ______ g.",
        optionA: "150 g",
        optionB: "500 g",
        optionC: "50 g",
        correctAnswer: "500 g",
      }),
      shuffleOptions({
        question: "Very small weights are measured in ______.",
        optionA: "mg",
        optionB: "kg",
        optionC: "g",
        correctAnswer: "mg",
      }),
      shuffleOptions({
        question: "6000 g is equal to ______ kg.",
        optionA: "6 kg",
        optionB: "60 kg",
        optionC: "600 kg",
        correctAnswer: "6 kg",
      }),
      shuffleOptions({
        question: "To convert kilograms into grams, we ______ by 1000.",
        optionA: "divide",
        optionB: "multiply",
        optionC: "add",
        correctAnswer: "multiply",
      }),
      shuffleOptions({
        question: "A gold ring is weighed in ______.",
        optionA: "kg",
        optionB: "g",
        optionC: "mg",
        correctAnswer: "mg",
      }),
      shuffleOptions({
        question: "850 g is ______ than 1 kg.",
        optionA: "heavier",
        optionB: "lighter",
        optionC: "equal",
        correctAnswer: "lighter",
      }),
      shuffleOptions({
        question: "1 g = ______ milligrams.",
        optionA: "1000 mg",
        optionB: "100 mg",
        optionC: "10 mg",
        correctAnswer: "1000 mg",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The weight of a man is generally measured in kilograms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "500 g + 500 g makes 1 kg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A balance is used to measure length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 kilogram is equal to 100 grams.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "4000 g is equal to 4 kg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Milligrams are used to measure the weight of very heavy objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "750 g is less than 1 kg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "To convert grams into kilograms, we divide by 1000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sack of wheat is measured in grams.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2 kg 500 g is equal to 2500 g.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
