export const chapter = "Chapter - 1: Large Numbers";
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
        question: "Which is the smallest 6-digit number?",
        optionA: "10000",
        optionB: "100000",
        optionC: "99999",
        correctAnswer: "100000",
      }),
      shuffleOptions({
        question: "What is the place value of 4 in the number 7,48,352?",
        optionA: "4,000",
        optionB: "40,000",
        optionC: "400",
        correctAnswer: "40,000",
      }),
      shuffleOptions({
        question: "Which number comes immediately after 9,99,999?",
        optionA: "9,99,900",
        optionB: "10,00,000",
        optionC: "1,00,000",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "What is the face value of 7 in the number 3,72,456?",
        optionA: "7",
        optionB: "70",
        optionC: "700",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "How many digits are there in the number 1,00,000?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which of the following is the greatest 7-digit number?",
        optionA: "9,99,000",
        optionB: "1,00,000",
        optionC: "99,99,999",
        correctAnswer: "99,99,999",
      }),
      shuffleOptions({
        question: "What is the successor of 5,49,999?",
        optionA: "5,49,900",
        optionB: "5,50,000",
        optionC: "5,49,500",
        correctAnswer: "5,50,000",
      }),
      shuffleOptions({
        question: "What is the value of 3 lakhs + 50 thousand in standard form?",
        optionA: "3,05,000",
        optionB: "3,50,000",
        optionC: "35,000",
        correctAnswer: "3,50,000",
      }),
      shuffleOptions({
        question: "Which period contains the digits of ones, tens, and hundreds?",
        optionA: "Lakhs period",
        optionB: "Thousands period",
        optionC: "Ones period",
        correctAnswer: "Ones period",
      }),
      shuffleOptions({
        question: "What is 78,500 rounded off to the nearest thousand?",
        optionA: "78,000",
        optionB: "79,000",
        optionC: "80,000",
        correctAnswer: "79,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "92,480 = 9 ten-thousands + ___ thousands.",
        optionA: "4",
        optionB: "2",
        optionC: "8",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The predecessor of 50,000 is ____.",
        optionA: "49,000",
        optionB: "49,999",
        optionC: "50,001",
        correctAnswer: "49,999",
      }),
      shuffleOptions({
        question: "4,20,506 has ___ lakhs.",
        optionA: "4",
        optionB: "2",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "67 rounded to the nearest ten is ____.",
        optionA: "60",
        optionB: "70",
        optionC: "65",
        correctAnswer: "70",
      }),
      shuffleOptions({
        question: "The place value of 5 in 85,213 is ____.",
        optionA: "500",
        optionB: "50,000",
        optionC: "5",
        correctAnswer: "50,000",
      }),
      shuffleOptions({
        question: "30,000 + 900 + 8 = ____.",
        optionA: "30,908",
        optionB: "39,008",
        correctAnswer: "30,908",
      }),
      shuffleOptions({
        question: "8,40,100 has ___ hundreds.",
        optionA: "100",
        optionB: "10",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "The successor of 1,29,999 is ____.",
        optionA: "1,29,100",
        optionB: "1,30,000",
        optionC: "1,29,900",
        correctAnswer: "1,30,000",
      }),
      shuffleOptions({
        question: "5,06,020 in words ends with “six thousand ____”.",
        optionA: "Two",
        optionB: "Twenty",
        optionC: "Twelve",
        correctAnswer: "Twenty",
      }),
      shuffleOptions({
        question: "1,000 rounded to the nearest ten is ____.",
        optionA: "100",
        optionB: "1,000",
        optionC: "990",
        correctAnswer: "1,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number having more digits is always greater than a number with fewer digits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The face value of 3 in any number is always 30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2,49,999 is less than 2,50,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "80,000 rounded to the nearest thousand becomes 90,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The predecessor of 10,000 is 9,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In the number 5,43,210, the digit 3 is in the thousands place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "456 rounded to the nearest hundred becomes 500.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The place value of 0 can sometimes be non-zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "9,00,500 is greater than 8,99,999.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1000 is the smallest 4-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
