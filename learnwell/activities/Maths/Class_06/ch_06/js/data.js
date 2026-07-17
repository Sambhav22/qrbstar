export const chapter = "Chapter - 6: Decimals";
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
        question: "Which decimal has the greatest value?",
        optionA: "3.56",
        optionB: "3.506",
        optionC: "3.6",
        correctAnswer: "3.6",
      }),
      shuffleOptions({
        question: "The place value of 4 in 12. Forty-five hundredths is: 4",
        optionA: "10 4",
        optionB: "100 4",
        optionC: "1000",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "The expanded form of 7.302 is:",
        optionA: "7 + 0.3 + 0.002",
        optionB: "7 + 0.03 + 0.02",
        optionC: "7 + 3 + 2",
        correctAnswer: "7 + 0.3 + 0.002",
      }),
      shuffleOptions({
        question: "0.507 is equal to: 507",
        optionA: "100 507",
        optionB: "1000  500",
        optionC: "7",
        correctAnswer: "1000  500",
      }),
      shuffleOptions({
        question: "Which pair shows like decimals?",
        optionA: "2.45 & 6.1",
        optionB: "3.201 & 5.890",
        optionC: "7.02 & 1.50",
        correctAnswer: "3.201 & 5.890",
      }),
      shuffleOptions({
        question: "Which number lies between 4.3 and 4.4?",
        optionA: "4.39",
        optionB: "4.41",
        optionC: "4.29",
        correctAnswer: "4.39",
      }),
      shuffleOptions({
        question: "2 kg 40 g written in kg is:",
        optionA: "2.004",
        optionB: "2.4",
        optionC: "2.04",
        correctAnswer: "2.04",
      }),
      shuffleOptions({
        question: "0.96 compared with 0.906:",
        optionA: "0.96 < 0.906",
        optionB: "0.96 = 0.906",
        optionC: "0.96 > 0.906",
        correctAnswer: "0.96 > 0.906",
      }),
      shuffleOptions({
        question: "Which decimal is equivalent to 5.1?",
        optionA: "5.1000",
        optionB: "5.010",
        optionC: "5.0001",
        correctAnswer: "5.1000",
      }),
      shuffleOptions({
        question: "37 cm expressed in metres is:",
        optionA: "0.37",
        optionB: "0.037",
        optionC: "0.0037",
        correctAnswer: "0.37",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The decimal 0.824 has ______ decimal places.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "three",
      }),
      shuffleOptions({
        question: "0.56 = 56 ÷ ______.",
        optionA: "10",
        optionB: "1000",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "In 9.308, the digit 3 is in the ______ place.",
        optionA: "tenths",
        optionB: "hundredths",
        optionC: "thousandths",
        correctAnswer: "tenths",
      }),
      shuffleOptions({
        question: "12 g is equal to ______ kg.",
        optionA: "0.0012",
        optionB: "0.12",
        optionC: "0.012",
        correctAnswer: "0.012",
      }),
      shuffleOptions({
        question: "0.250 and 0.25 have the ______ value.",
        optionA: "greater",
        optionB: "same",
        optionC: "smaller",
        correctAnswer: "same",
      }),
      shuffleOptions({
        question: "Thousandths place comes ______ hundredths place.",
        optionA: "before",
        optionB: "after",
        optionC: "equal to",
        correctAnswer: "after",
      }),
      shuffleOptions({
        question: "8.03 has ______ tenths.",
        optionA: "0",
        optionB: "3",
        optionC: "1.1",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "4 L 80 ml = ______ L.",
        optionA: "4.8",
        optionB: "4.080",
        optionC: "4.08",
        correctAnswer: "4.08",
      }),
      shuffleOptions({
        question: "The decimal 0.006 has the digit 6 in the ______ place.",
        optionA: "hundredths",
        optionB: "thousandths",
        optionC: "ten-thousandths",
        correctAnswer: "thousandths",
      }),
      shuffleOptions({
        question: "1.700 is an ______ decimal of 1.7.",
        optionA: "unlike",
        optionB: "equivalent",
        optionC: "greater",
        correctAnswer: "equivalent",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "7.02 is greater than 7.2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Zeros on the right of a decimal do not change its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 0.593, 9 is in the tenths place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 g = 0.003 kg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.56 and 0.560 are like decimals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2.403 has two decimal places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0.89 is less than 0.809.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "5 L 250 ml = 5.025 L.",
        optionA: "True",
        optionB: "False  1",
        correctAnswer: "False  1",
      }),
      shuffleOptions({
        question: "0.1 is equal to . 100",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adding decimals requires aligning decimal points.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
