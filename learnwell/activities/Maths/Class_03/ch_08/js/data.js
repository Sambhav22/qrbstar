export const chapter = "Chapter - 8: Measurement of Length";
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
        question: "Which unit is used to measure the distance between two cities?",
        optionA: "Metres",
        optionB: "Centimetres",
        optionC: "Kilometres",
        correctAnswer: "Kilometres",
      }),
      shuffleOptions({
        question: "What is the standard unit of measuring length?",
        optionA: "Metre",
        optionB: "Kilometre",
        optionC: "Centimetre",
        correctAnswer: "Metre",
      }),
      shuffleOptions({
        question: "Which device is most suitable to measure the height of a pole?",
        optionA: "Ruler",
        optionB: "Measuring tape",
        optionC: "Pencil",
        correctAnswer: "Measuring tape",
      }),
      shuffleOptions({
        question: "How many centimetres make 1 metre?",
        optionA: "10",
        optionB: "1000",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Which unit is best to measure the length of a pencil?",
        optionA: "cm",
        optionB: "km",
        optionC: "m",
        correctAnswer: "cm",
      }),
      shuffleOptions({
        question: "What should be the starting point while measuring with a ruler?",
        optionA: "5 cm",
        optionB: "1 cm",
        optionC: "0 cm",
        correctAnswer: "0 cm",
      }),
      shuffleOptions({
        question: "Which unit is used to measure very long distances?",
        optionA: "km",
        optionB: "m",
        optionC: "cm",
        correctAnswer: "km",
      }),
      shuffleOptions({
        question: "How many metres are there in 2 km?",
        optionA: "200 m",
        optionB: "2000 m",
        optionC: "20,000 m",
        correctAnswer: "2000 m",
      }),
      shuffleOptions({
        question: "What will you use to measure the length of a classroom?",
        optionA: "Measuring tape",
        optionB: "Ruler",
        optionC: "Thermometer",
        correctAnswer: "Measuring tape",
      }),
      shuffleOptions({
        question: "The length of a tube light shown in the chapter is closest to:",
        optionA: "1 cm",
        optionB: "4 cm",
        optionC: "15 cm",
        correctAnswer: "4 cm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 km is equal to ______ metres.",
        optionA: "100",
        optionB: "1000",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "A scale usually has markings in ______.",
        optionA: "cm",
        optionB: "km",
        optionC: "m",
        correctAnswer: "cm",
      }),
      shuffleOptions({
        question: "The height of a child is commonly measured in ______.",
        optionA: "km",
        optionB: "m",
        optionC: "cm",
        correctAnswer: "cm",
      }),
      shuffleOptions({
        question: "250 cm is equal to ______.",
        optionA: "2 m 50 cm",
        optionB: "25 m",
        optionC: "2500 m",
        correctAnswer: "2 m 50 cm",
      }),
      shuffleOptions({
        question: "A saree’s length is usually measured in ______.",
        optionA: "metres",
        optionB: "centimetres",
        optionC: "kilometres",
        correctAnswer: "metres",
      }),
      shuffleOptions({
        question: "5 km is equal to ______ m.",
        optionA: "5000 m",
        optionB: "50 m",
        optionC: "500 m",
        correctAnswer: "5000 m",
      }),
      shuffleOptions({
        question: "A small eraser’s length is measured in ______.",
        optionA: "cm",
        optionB: "m",
        optionC: "km",
        correctAnswer: "cm",
      }),
      shuffleOptions({
        question: "When using a ruler, the object’s edge should be placed at ______.",
        optionA: "0 mark",
        optionB: "10 mark",
        optionC: "5 mark",
        correctAnswer: "0 mark",
      }),
      shuffleOptions({
        question: "The length of a table is best measured in ______.",
        optionA: "cm",
        optionB: "m",
        optionC: "km",
        correctAnswer: "m",
      }),
      shuffleOptions({
        question: "3 m 20 cm = ______ cm",
        optionA: "32 cm",
        optionB: "320 cm",
        optionC: "302 cm",
        correctAnswer: "320 cm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 metre is greater than 150 centimetres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "6 km is equal to 6000 metres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A measuring tape is better than a ruler for measuring long objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "75 cm is less than 1 metre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2 km 300 m is the same as 2300 m.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A metre rod is shorter than a ruler.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "800 cm is the same as 8 metres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Centimetre is a larger unit than metre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 m 5 cm equals 305 cm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The distance between mountains is measured in kilometres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
