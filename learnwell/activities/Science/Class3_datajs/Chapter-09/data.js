export const chapter = "Chapter - 9: Measurement";
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
        question: "Which tool helps a tailor measure cloth?",
        optionA: "Thermometer",
        optionB: "Measuring tape",
        optionC: "Clock",
        correctAnswer: "Measuring tape",
      }),
      shuffleOptions({
        question: "Which of these would you use to weigh vegetables?",
        optionA: "Ruler",
        optionB: "Beam balance",
        optionC: "Thermometer",
        correctAnswer: "Beam balance",
      }),
      shuffleOptions({
        question: "1 centimetre is equal to how many millimetres?",
        optionA: "10",
        optionB: "100",
        optionC: "1000",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "Which of these liquids will have the least capacity?",
        optionA: "Cup",
        optionB: "Jug",
        optionC: "Bucket",
        correctAnswer: "Cup",
      }),
      shuffleOptions({
        question: "The unit “ml” stands for —",
        optionA: "millilitre",
        optionB: "metrelitre",
        optionC: "micro litre",
        correctAnswer: "millilitre",
      }),
      shuffleOptions({
        question: "Which clock unit is smaller?",
        optionA: "Minute",
        optionB: "Second",
        optionC: "Hour",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "The temperature of a hot cup of tea will be —",
        optionA: "Higher than room temperature",
        optionB: "Lower than room temperature",
        optionC: "Equal to room temperature",
        correctAnswer: "Higher than room temperature",
      }),
      shuffleOptions({
        question: "Which of these would you use to measure the time taken in a race?",
        optionA: "Stopwatch",
        optionB: "Thermometer",
        optionC: "Scale",
        correctAnswer: "Stopwatch",
      }),
      shuffleOptions({
        question: "Which of the following will you use to find the distance between two cities?",
        optionA: "Metre",
        optionB: "Kilometre",
        optionC: "Centimetre",
        correctAnswer: "Kilometre",
      }),
      shuffleOptions({
        question: "A period of ten years is called —",
        optionA: "Decade",
        optionB: "Century",
        optionC: "Millennium",
        correctAnswer: "Decade",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "One ______ makes 60 seconds.",
        optionA: "minute",
        optionB: "hour",
        optionC: "day",
        correctAnswer: "minute",
      }),
      shuffleOptions({
        question: "______ is the unit used to measure the quantity of milk.",
        optionA: "Kilogram",
        optionB: "Litre",
        optionC: "Metre",
        correctAnswer: "Litre",
      }),
      shuffleOptions({
        question: "The measuring rod and ruler are used to measure ______.",
        optionA: "time",
        optionB: "length",
        optionC: "mass",
        correctAnswer: "length",
      }),
      shuffleOptions({
        question: "The weight of a book is about ______ grams.",
        optionA: "500",
        optionB: "1000",
        optionC: "50 000",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "A person’s body temperature is measured in ______ Celsius.",
        optionA: "27°",
        optionB: "37°",
        optionC: "47°",
        correctAnswer: "37°",
      }),
      shuffleOptions({
        question: "A bucket has a greater ______ than a cup.",
        optionA: "capacity",
        optionB: "length",
        optionC: "mass",
        correctAnswer: "capacity",
      }),
      shuffleOptions({
        question: "We use a ______ to measure how hot soup is.",
        optionA: "thermometer",
        optionB: "beam balance",
        optionC: "clock",
        correctAnswer: "thermometer",
      }),
      shuffleOptions({
        question: "The small unit for measuring length of an eraser is ______.",
        optionA: "centimetre",
        optionB: "metre",
        optionC: "kilometre",
        correctAnswer: "centimetre",
      }),
      shuffleOptions({
        question: "1000 metres = 1 ______.",
        optionA: "kilometre",
        optionB: "gram",
        optionC: "litre",
        correctAnswer: "kilometre",
      }),
      shuffleOptions({
        question: "1000 grams = 1 ______.",
        optionA: "kilogram",
        optionB: "milligram",
        optionC: "litre",
        correctAnswer: "kilogram",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 minute = 60 seconds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A beam balance shows the length of an object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Measuring cylinder is used for liquids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bucket’s capacity is smaller than a glass.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A ruler can measure the length of a pencil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We measure temperature in degrees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "One day = 12 hours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1000 millilitres = 1 litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People used sundials in olden times to measure time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A century = 10 years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
