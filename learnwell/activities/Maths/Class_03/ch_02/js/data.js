export const chapter = "Chapter - 2: Addition";
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
        question: "What do we call the numbers that are added?",
        optionA: "Tens",
        optionB: "Addends",
        optionC: "Groups",
        correctAnswer: "Addends",
      }),
      shuffleOptions({
        question: "What is the result of addition called?",
        optionA: "Difference",
        optionB: "Product",
        optionC: "Sum",
        correctAnswer: "Sum",
      }),
      shuffleOptions({
        question: "Adding 0 to any number gives:",
        optionA: "Successor",
        optionB: "Predecessor",
        optionC: "The number itself",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "Adding 1 to any number gives its:",
        optionA: "Successor",
        optionB: "Double",
        optionC: "Half",
        correctAnswer: "Successor",
      }),
      shuffleOptions({
        question: "5 ones + 9 ones =",
        optionA: "10 ones",
        optionB: "14 ones = 1 ten + 4 ones",
        optionC: "9 ones",
        correctAnswer: "14 ones = 1 ten + 4 ones",
      }),
      shuffleOptions({
        question: "The sum does not change even if the order of addends is changed. This describes:",
        optionA: "Associative property",
        optionB: "Commutative property",
        optionC: "Zero property",
        correctAnswer: "Commutative property",
      }),
      shuffleOptions({
        question: "10 tens make:",
        optionA: "10",
        optionB: "1 hundred",
        optionC: "1000",
        correctAnswer: "1 hundred",
      }),
      shuffleOptions({
        question: "In addition, we begin adding from the:",
        optionA: "Thousands place",
        optionB: "Ones place",
        optionC: "Hundreds place",
        correctAnswer: "Ones place",
      }),
      shuffleOptions({
        question: "When digits in a column add to more than 9, we:",
        optionA: "Skip the digit",
        optionB: "Carry over to the next place value",
        optionC: "Subtract the extra",
        correctAnswer: "Carry over to the next place value",
      }),
      shuffleOptions({
        question: "14 hundreds =",
        optionA: "1 thousand + 4 hundreds",
        optionB: "14 tens",
        optionC: "4 thousands",
        correctAnswer: "1 thousand + 4 hundreds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "200 + 1 gives the ______ of 200.",
        optionA: "predecessor",
        optionB: "successor",
        optionC: "double",
        correctAnswer: "successor",
      }),
      shuffleOptions({
        question: "The sum of a number and ______ is the number itself.",
        optionA: "1",
        optionB: "0",
        optionC: "10",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "5489 + 1 = ______.",
        optionA: "5490",
        optionB: "5480",
        optionC: "5400",
        correctAnswer: "5490",
      }),
      shuffleOptions({
        question: "14 ones = 1 ten + ______ ones.",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "(A + B) + C = A + (B + ______).",
        optionA: "A",
        optionB: "C",
        optionC: "B",
        correctAnswer: "B",
      }),
      shuffleOptions({
        question: "The digits in addition must be arranged according to their ______ value.",
        optionA: "colour",
        optionB: "place",
        optionC: "shape",
        correctAnswer: "place",
      }),
      shuffleOptions({
        question: "0 + 312 = ______.",
        optionA: "312",
        optionB: "0",
        optionC: "310",
        correctAnswer: "312",
      }),
      shuffleOptions({
        question: "13 tens = 1 hundred + ______ tens.",
        optionA: "2",
        optionB: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "Adding 7 thousands and 2 thousands gives ______ thousands.",
        optionA: "9",
        optionB: "6",
        optionC: "4",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Addends are the numbers that are ______.",
        optionA: "subtracted",
        optionB: "multiplied",
        optionC: "added",
        correctAnswer: "added",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adding 0 to a number changes its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In addition, the order of addends can be changed without changing the sum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Regrouping is needed when the sum in a column is more than 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Addition of 4-digit numbers is done in the same way as 3-digit numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum is the name given to the numbers that are added.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Carry-over is written below the digits of the same column.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "10 ones make 1 ten.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Changing the grouping of addends changes the sum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The successor of 4372 is 4373.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0 + 8264 = 8264.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
