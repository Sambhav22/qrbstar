export const chapter = "Chapter - 10: Metric Measures";
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
        question: "Which unit is the smallest for measuring length?",
        optionA: "Centimetre",
        optionB: "Millimetre",
        optionC: "Decimetre",
        correctAnswer: "Millimetre",
      }),
      shuffleOptions({
        question: "Which unit is most suitable to measure the capacity of a water bottle?",
        optionA: "Litre",
        optionB: "Millilitre",
        optionC: "Kilolitre",
        correctAnswer: "Millilitre",
      }),
      shuffleOptions({
        question: "Which unit is the basic unit of weight?",
        optionA: "Gram",
        optionB: "Kilogram",
        optionC: "Milligram",
        correctAnswer: "Gram",
      }),
      shuffleOptions({
        question: "What should we do to convert metres into centimetres?",
        optionA: "Divide",
        optionB: "Multiply",
        optionC: "Subtract",
        correctAnswer: "Multiply",
      }),
      shuffleOptions({
        question: "Which unit is the standard unit of capacity?",
        optionA: "Litre",
        optionB: "Decilitre",
        optionC: "Centilitre",
        correctAnswer: "Litre",
      }),
      shuffleOptions({
        question: "Which of the following is equal to 1000 g?",
        optionA: "1 kg",
        optionB: "10 dag",
        optionC: "100 mg",
        correctAnswer: "1 kg",
      }),
      shuffleOptions({
        question: "Which unit should be used to measure long distances like between two cities?",
        optionA: "Kilometre",
        optionB: "Metre",
        optionC: "Centimetre",
        correctAnswer: "Kilometre",
      }),
      shuffleOptions({
        question: "Which unit is used to measure very small liquid amounts like medicine drops?",
        optionA: "Litre",
        optionB: "Millilitre",
        optionC: "Kilolitre",
        correctAnswer: "Millilitre",
      }),
      shuffleOptions({
        question: "Which unit comes just smaller than a metre in the metric table?",
        optionA: "Decimetre",
        optionB: "Kilometre",
        optionC: "Millimetre",
        correctAnswer: "Decimetre",
      }),
      shuffleOptions({
        question: "Which unit of weight is used for gold ornaments?",
        optionA: "Kilogram",
        optionB: "Gram",
        optionC: "Milligram",
        correctAnswer: "Milligram",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 l is equal to ______ ml.",
        optionA: "100",
        optionB: "1000",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "1 cm is equal to ______ mm.",
        optionA: "10 mm",
        optionB: "100 mm",
        optionC: "1 mm",
        correctAnswer: "10 mm",
      }),
      shuffleOptions({
        question: "3 kg is equal to ______ g.",
        optionA: "300 g",
        optionB: "3000 g",
        optionC: "30 g",
        correctAnswer: "3000 g",
      }),
      shuffleOptions({
        question: "5 m is equal to ______ cm.",
        optionA: "50 cm",
        optionB: "500 cm",
        optionC: "5000 cm",
        correctAnswer: "500 cm",
      }),
      shuffleOptions({
        question: "2500 ml is equal to 2 l ______ ml.",
        optionA: "500 ml",
        optionB: "250 ml",
        optionC: "50 ml",
        correctAnswer: "500 ml",
      }),
      shuffleOptions({
        question: "80 cm equals 0 m ______ cm.",
        optionA: "8 cm",
        optionB: "80 cm",
        optionC: "0 m 80 cm",
        correctAnswer: "0 m 80 cm",
      }),
      shuffleOptions({
        question: "7000 g is equal to ______ kg.",
        optionA: "7 kg",
        optionB: "70 kg",
        optionC: "700 kg",
        correctAnswer: "7 kg",
      }),
      shuffleOptions({
        question: "150 ml is equal to ______ cl.",
        optionA: "15 cl",
        optionB: "150 cl",
        optionC: "1.5 cl",
        correctAnswer: "15 cl",
      }),
      shuffleOptions({
        question: "6 l 300 ml is equal to ______ ml.",
        optionA: "630 ml",
        optionB: "6300 ml",
        optionC: "603 ml",
        correctAnswer: "6300 ml",
      }),
      shuffleOptions({
        question: "45 mm is equal to ______ cm.",
        optionA: "4.5 cm",
        optionB: "4 cm 5 mm",
        optionC: "0.45 cm",
        correctAnswer: "4.5 cm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 decimetre is equal to 10 centimetres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 hectolitre is smaller than 1 litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To convert a smaller unit into a bigger unit, we divide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1000 ml is equal to 1 litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Milligram is the basic unit of weight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Litre is the standard unit to measure liquids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 km is equal to 100 m.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Centimetre is bigger than metre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 g = 1000 mg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Millilitre is the smallest unit of capacity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
