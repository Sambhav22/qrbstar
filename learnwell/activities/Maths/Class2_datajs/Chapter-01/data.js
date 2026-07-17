export const chapter = "Chapter - 1: Revision";
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
        question: "Which number has 5 tens and 2 ones?",
        optionA: "25",
        optionB: "52",
        optionC: "51",
        correctAnswer: "52",
      }),
      shuffleOptions({
        question: "What is the number name of 68?",
        optionA: "Sixty-eight",
        optionB: "Sixty-six",
        optionC: "Eighty-six",
        correctAnswer: "Sixty-eight",
      }),
      shuffleOptions({
        question: "Which sign shows that two numbers are equal?",
        optionA: ">",
        optionB: "<",
        optionC: "=",
        correctAnswer: "=",
      }),
      shuffleOptions({
        question: "The number that comes before 90 is ____.",
        optionA: "91",
        optionB: "89",
        optionC: "88",
        correctAnswer: "89",
      }),
      shuffleOptions({
        question: "How many tens are there in 70?",
        optionA: "10",
        optionB: "7",
        optionC: "17",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Which number comes after 49?",
        optionA: "48",
        optionB: "50",
        optionC: "51",
        correctAnswer: "50",
      }),
      shuffleOptions({
        question: "Which number has 7 tens and 1 one?",
        optionA: "17",
        optionB: "71",
        optionC: "70",
        correctAnswer: "71",
      }),
      shuffleOptions({
        question: "Between 67 and 69 comes ____.",
        optionA: "68",
        optionB: "66",
        optionC: "70",
        correctAnswer: "68",
      }),
      shuffleOptions({
        question: "Which of the following is the smallest two-digit number?",
        optionA: "9",
        optionB: "10",
        optionC: "11",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "What does the sign ‘=’ mean?",
        optionA: "Greater",
        optionB: "Smaller",
        optionC: "Equal",
        correctAnswer: "Equal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number that comes after 35 is ____.",
        optionA: "34",
        optionB: "36",
        optionC: "37",
        correctAnswer: "36",
      }),
      shuffleOptions({
        question: "8 tens = ____.",
        optionA: "8",
        optionB: "80",
        optionC: "800",
        correctAnswer: "80",
      }),
      shuffleOptions({
        question: "45 = ____ tens + ____ ones.",
        optionA: "5, 4",
        optionB: "4, 5",
        optionC: "6, 5",
        correctAnswer: "4, 5",
      }),
      shuffleOptions({
        question: "The symbol for “less than” is ____.",
        optionA: "<",
        optionB: ">",
        optionC: "=",
        correctAnswer: "<",
      }),
      shuffleOptions({
        question: "The number name for 72 is ____.",
        optionA: "Seventy-two",
        optionB: "Seventy-three",
        optionC: "Seventy",
        correctAnswer: "Seventy-two",
      }),
      shuffleOptions({
        question: "99 comes ____ 100.",
        optionA: "after",
        optionB: "before",
        optionC: "between",
        correctAnswer: "before",
      }),
      shuffleOptions({
        question: "The largest one-digit number is ____.",
        optionA: "9",
        optionB: "8",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "The smallest two-digit number is ____.",
        optionA: "10",
        optionB: "11",
        optionC: "12",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The short form of 3 tens and 7 ones is ____.",
        optionA: "73",
        optionB: "37",
        optionC: "70",
        correctAnswer: "37",
      }),
      shuffleOptions({
        question: "Ten ones make ____ ten.",
        optionA: "one",
        optionB: "two",
        optionC: "zero",
        correctAnswer: "one",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "80 is greater than 70.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "45 is less than 54.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Equal sign shows both numbers are same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10 is a one-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "7 tens = 70.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "50 is smaller than 49.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The number after 99 is 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0 is the smallest number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "100 is a three-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5 tens = 55.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
