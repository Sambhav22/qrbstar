export const chapter = "Chapter - 5: Numbers Up To 20";
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
        question: "How many ones make one ten?",
        optionA: "5",
        optionB: "9",
        optionC: "10",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "Which number shows 1 ten and 2 ones?",
        optionA: "21",
        optionB: "12",
        optionC: "11",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "What comes between 14 and 16?",
        optionA: "15",
        optionB: "13",
        optionC: "17",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "The value of 1 in the tens place of 14 is ____.",
        optionA: "1 ten",
        optionB: "1 one",
        optionC: "10 ones",
        correctAnswer: "1 ten",
      }),
      shuffleOptions({
        question: "Which number is greater — 11 or 9?",
        optionA: "11",
        optionB: "9",
        optionC: "Both equal",
        correctAnswer: "11",
      }),
      shuffleOptions({
        question: "Which number comes before 13?",
        optionA: "12",
        optionB: "11",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "What is 10 + 6?",
        optionA: "15",
        optionB: "16",
        optionC: "14",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "Which number comes after 19?",
        optionA: "20",
        optionB: "18",
        optionC: "21",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "Which number shows 1 ten and 3 ones?",
        optionA: "31",
        optionB: "13",
        optionC: "3",
        correctAnswer: "13",
      }),
      shuffleOptions({
        question: "Which number is farthest from zero on the number line?",
        optionA: "20",
        optionB: "10",
        optionC: "5",
        correctAnswer: "20",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 ten + 8 ones = ______",
        optionA: "18",
        optionB: "19",
        optionC: "17",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "10 + 5 = ______",
        optionA: "14",
        optionB: "15",
        optionC: "16",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "The number name of 14 is ______.",
        optionA: "Fourteen",
        optionB: "Fortin",
        optionC: "Forteen",
        correctAnswer: "Fourteen",
      }),
      shuffleOptions({
        question: "The number before 20 is ______.",
        optionA: "19",
        optionB: "18",
        optionC: "21",
        correctAnswer: "19",
      }),
      shuffleOptions({
        question: "The place value of 6 in 16 is ______.",
        optionA: "6 ones",
        optionB: "6 tens",
        optionC: "60",
        correctAnswer: "6 ones",
      }),
      shuffleOptions({
        question: "The number after 11 is ______.",
        optionA: "12",
        optionB: "13",
        optionC: "10",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "1 ten + 4 ones = ______.",
        optionA: "14",
        optionB: "15",
        optionC: "16",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "10 + 8 = ______.",
        optionA: "17",
        optionB: "18",
        optionC: "19",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "The smallest two-digit number is ______.",
        optionA: "9",
        optionB: "10",
        optionC: "11",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The number name of 12 is ______.",
        optionA: "Twelv",
        optionB: "Twelve",
        optionC: "Twelwe",
        correctAnswer: "Twelve",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "10 is the largest number up to 20.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In 13, the digit 3 is in the ones place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 ten + 10 ones = 21.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "16 is greater than 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 19, 1 represents 1 ten.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "20 comes after 19.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "11 comes between 10 and 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The digit 0 has no value on its own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number line starts from 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 ten + 2 ones = 21.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
