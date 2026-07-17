export const chapter = "Chapter - 5: Subtraction";
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
        question: "What is the symbol used for subtraction?",
        optionA: "+",
        optionB: "–",
        optionC: "×",
        correctAnswer: "–",
      }),
      shuffleOptions({
        question: "In 45 − 32 = 13, what is 13 called?",
        optionA: "Minuend",
        optionB: "Subtrahend",
        optionC: "Difference",
        correctAnswer: "Difference",
      }),
      shuffleOptions({
        question: "Which number is the minuend in 45 − 32 = 13?",
        optionA: "32",
        optionB: "45",
        optionC: "13",
        correctAnswer: "45",
      }),
      shuffleOptions({
        question: "If you subtract 0 from any number, the result is —",
        optionA: "0",
        optionB: "Same number",
        optionC: "1",
        correctAnswer: "Same number",
      }),
      shuffleOptions({
        question: "What is the result called when one number is subtracted from another?",
        optionA: "Sum",
        optionB: "Product",
        optionC: "Difference",
        correctAnswer: "Difference",
      }),
      shuffleOptions({
        question: "When 1 is subtracted from 98, we get —",
        optionA: "99",
        optionB: "97",
        optionC: "96",
        correctAnswer: "97",
      }),
      shuffleOptions({
        question: "Subtraction means —",
        optionA: "Counting on",
        optionB: "Taking away",
        optionC: "Adding more",
        correctAnswer: "Taking away",
      }),
      shuffleOptions({
        question: "In subtraction, the number which is subtracted is called —",
        optionA: "Difference",
        optionB: "Subtrahend",
        optionC: "Product",
        correctAnswer: "Subtrahend",
      }),
      shuffleOptions({
        question: "If a number is subtracted from itself, the result is —",
        optionA: "Zero",
        optionB: "One",
        optionC: "Same number",
        correctAnswer: "Zero",
      }),
      shuffleOptions({
        question: "286 − 132 = ?",
        optionA: "144",
        optionB: "154",
        optionC: "164",
        correctAnswer: "154",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "55 − 1 = ______",
        optionA: "55",
        optionB: "54",
        optionC: "53",
        correctAnswer: "54",
      }),
      shuffleOptions({
        question: "62 − 0 = ______",
        optionA: "0",
        optionB: "62",
        optionC: "1",
        correctAnswer: "62",
      }),
      shuffleOptions({
        question: "23 − 23 = ______",
        optionA: "0",
        optionB: "23",
        optionC: "1",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "When we subtract one number from the same number, the answer is ______.",
        optionA: "1",
        optionB: "0",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "792 − 548 = ______",
        optionA: "244",
        optionB: "344",
        optionC: "254",
        correctAnswer: "244",
      }),
      shuffleOptions({
        question: "638 − 356 = ______",
        optionA: "282",
        optionB: "283",
        optionC: "284",
        correctAnswer: "282",
      }),
      shuffleOptions({
        question: "752 − 398 = ______",
        optionA: "354",
        optionB: "364",
        optionC: "344",
        correctAnswer: "354",
      }),
      shuffleOptions({
        question: "805 − 256 = ______",
        optionA: "549",
        optionB: "539",
        optionC: "559",
        correctAnswer: "549",
      }),
      shuffleOptions({
        question: "484 − 244 = ______",
        optionA: "140",
        optionB: "240",
        optionC: "340",
        correctAnswer: "240",
      }),
      shuffleOptions({
        question: "358 − 223 = ______",
        optionA: "135",
        optionB: "125",
        optionC: "145",
        correctAnswer: "135",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sign (–) is used for subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When 0 is subtracted from any number, the result is 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The result of subtraction is called the difference.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If one is subtracted from any number, the result is the next number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "23 − 23 = 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In subtraction, we always subtract hundreds from hundreds, tens from tens, and ones from ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subtraction means to add numbers together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "286 − 132 = 154.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When we borrow, we reduce the next higher place by 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "805 − 256 = 559.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
