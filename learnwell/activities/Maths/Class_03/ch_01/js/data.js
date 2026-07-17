export const chapter = "Chapter - 1: 4-Digit Numbers";
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
        question: "Which place value comes immediately to the left of the tens place?",
        optionA: "Ones",
        optionB: "Hundreds",
        optionC: "Thousands",
        correctAnswer: "Hundreds",
      }),
      shuffleOptions({
        question: "What is the place value of 7 in the number 4762?",
        optionA: "7000",
        optionB: "700",
        optionC: "70",
        correctAnswer: "70",
      }),
      shuffleOptions({
        question: "Which number is formed by 5 thousands, 3 hundreds, 2 tens and 6 ones?",
        optionA: "5326",
        optionB: "5236",
        optionC: "3526",
        correctAnswer: "5326",
      }),
      shuffleOptions({
        question: "What do we get when we add 1 to the greatest 3-digit number?",
        optionA: "999",
        optionB: "1000",
        optionC: "900",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "Which of the following numbers is the predecessor of 4200?",
        optionA: "4199",
        optionB: "4201",
        optionC: "4210",
        correctAnswer: "4199",
      }),
      shuffleOptions({
        question: "Which number has the greatest digit in the thousands place?",
        optionA: "6405",
        optionB: "8952",
        optionC: "9021",
        correctAnswer: "9021",
      }),
      shuffleOptions({
        question: "Which representation shows 4 thousands + 0 hundreds + 8 tens + 3 ones?",
        optionA: "4083",
        optionB: "4803",
        correctAnswer: "4083",
      }),
      shuffleOptions({
        question: "What is the short form of 3000 + 500 + 10 + 4?",
        optionA: "3514",
        optionB: "3504",
        correctAnswer: "3514",
      }),
      shuffleOptions({
        question: "What number will come just after 5999?",
        optionA: "6000",
        optionB: "5998",
        optionC: "6900",
        correctAnswer: "6000",
      }),
      shuffleOptions({
        question: "Which number is the smallest?",
        optionA: "5080",
        optionB: "5800",
        optionC: "5008",
        correctAnswer: "5008",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "10 tens make ______.",
        optionA: "1 hundred",
        optionB: "1 thousand",
        correctAnswer: "1 hundred",
      }),
      shuffleOptions({
        question: "7000 + 200 + 40 + 5 is written in short form as ______.",
        optionA: "7245",
        optionB: "7425",
        optionC: "7254",
        correctAnswer: "7245",
      }),
      shuffleOptions({
        question: "The face value of any digit is the value of the digit ______.",
        optionA: "at its place",
        optionB: "itself regardless of place",
        optionC: "when multiplied",
        correctAnswer: "itself regardless of place",
      }),
      shuffleOptions({
        question: "1 thousand is equal to ______ hundreds.",
        optionA: "5",
        optionB: "10",
        optionC: "15",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The successor of 3489 is ______.",
        optionA: "3490",
        optionB: "3488",
        optionC: "3400",
        correctAnswer: "3490",
      }),
      shuffleOptions({
        question: "______ comes between 4601 and 4603.",
        optionA: "4600",
        optionB: "4602",
        optionC: "4612",
        correctAnswer: "4602",
      }),
      shuffleOptions({
        question: "9000 + 50 + 6 equals ______.",
        optionA: "9056",
        optionB: "9506",
        correctAnswer: "9056",
      }),
      shuffleOptions({
        question: "The smallest 4-digit number using the digits 4, 0, 6 and 2 is ______.",
        optionA: "2046",
        optionB: "2460",
        correctAnswer: "2046",
      }),
      shuffleOptions({
        question: "The place value of 3 in 5392 is ______.",
        optionA: "3",
        optionB: "30",
        optionC: "3000",
        correctAnswer: "3000",
      }),
      shuffleOptions({
        question: "6000 + 300 + ______ + 8 makes 6348.",
        optionA: "40",
        optionB: "4",
        optionC: "10",
        correctAnswer: "40",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The place value of 0 is always 0, no matter where it appears in a number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4820 is greater than 4802.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number 1000 is the greatest 4-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The successor of 7099 is 7100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the number 6349, the digit 6 is in the hundreds place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2341 written in ascending order of digits becomes 1234.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "10 hundreds make a thousand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 8793, the face value of 7 is 70.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "5000 + 400 + 3 is the expanded form of 5403.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The smallest 4-digit number is 1000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
