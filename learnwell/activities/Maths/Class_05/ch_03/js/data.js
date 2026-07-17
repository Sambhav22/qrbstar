export const chapter = "Chapter - 3: Operations on Large Numbers";
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
        question: "What is the result when 4,52,100 is added to 5,48,000?",
        optionA: "10,00,100",
        optionB: "9,90,100",
        optionC: "10,10,000",
        correctAnswer: "10,00,100",
      }),
      shuffleOptions({
        question: "Which property states that numbers can be added in any order?",
        optionA: "Associative property",
        optionB: "Commutative property",
        optionC: "Additive property of 0",
        correctAnswer: "Commutative property",
      }),
      shuffleOptions({
        question: "What is the difference when 7,25,000 is reduced by 25,000?",
        optionA: "7,00,000",
        optionB: "6,90,000",
        optionC: "7,20,000",
        correctAnswer: "7,00,000",
      }),
      shuffleOptions({
        question: "What will be the product of 8,000 multiplied by 0?",
        optionA: "0",
        optionB: "8,000",
        optionC: "800",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "What is the quotient when 15,000 is divided by 1?",
        optionA: "150",
        optionB: "1",
        optionC: "15,000",
        correctAnswer: "15,000",
      }),
      shuffleOptions({
        question: "Which number remains unchanged when 0 is added to it?",
        optionA: "0",
        optionB: "The number itself",
        optionC: "1",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "What is the product of 9,000 multiplied by 20?",
        optionA: "1,80,000",
        optionB: "18,000",
        optionC: "90,000",
        correctAnswer: "1,80,000",
      }),
      shuffleOptions({
        question: "What is the quotient when 72,000 is divided by 9?",
        optionA: "800",
        optionB: "8,000",
        optionC: "20,000",
        correctAnswer: "8,000",
      }),
      shuffleOptions({
        question: "What is the result of subtracting 55,000 from 1,00,000?",
        optionA: "45,000",
        optionB: "35,000",
        optionC: "25,000",
        correctAnswer: "45,000",
      }),
      shuffleOptions({
        question: "Which mathematical operation is verified by using the rule “Quotient × Divisor + Remainder”?",
        optionA: "Multiplication",
        optionB: "Addition",
        optionC: "Division",
        correctAnswer: "Division",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "12,00,000 – 2,00,000 = ______",
        optionA: "8,00,000",
        optionB: "10,00,000",
        optionC: "9,50,000",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "4,500 × 100 = ______",
        optionA: "4,50,000",
        optionB: "45,000",
        optionC: "40,50,000",
        correctAnswer: "4,50,000",
      }),
      shuffleOptions({
        question: "6,42,000 + 8,000 = ______",
        optionA: "6,50,000",
        optionB: "6,48,000",
        optionC: "6,60,000",
        correctAnswer: "6,50,000",
      }),
      shuffleOptions({
        question: "The quotient when 0 is divided by any number is ______.",
        optionA: "8",
        optionB: "0",
        optionC: "not defined",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "25,600 ÷ 100 = ______",
        optionA: "256",
        optionB: "25,600",
        optionC: "2560",
        correctAnswer: "256",
      }),
      shuffleOptions({
        question: "The product of any number and 1 is ______.",
        optionA: "1",
        optionB: "0",
        optionC: "the number itself",
        correctAnswer: "the number itself",
      }),
      shuffleOptions({
        question: "4,500 + 500 = ______",
        optionA: "5,000",
        optionB: "4,900",
        optionC: "5,100",
        correctAnswer: "5,000",
      }),
      shuffleOptions({
        question: "3,00,000 – 1,00,000 = ______",
        optionA: "2,00,000",
        optionB: "1,00,000",
        optionC: "3,00,000",
        correctAnswer: "2,00,000",
      }),
      shuffleOptions({
        question: "900 × 30 = ______",
        optionA: "27,000",
        optionB: "2,700",
        optionC: "90,000",
        correctAnswer: "27,000",
      }),
      shuffleOptions({
        question: "When a number is divided by itself, the quotient is ______.",
        optionA: "0",
        optionB: "1",
        optionC: "the number",
        correctAnswer: "1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0 + 35,000 equals 35,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4,000 × 1 equals 4,001.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Division by 0 is possible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "65,000 – 5,000 equals 60,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10,000 × 10 has three zeros in the product.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1,00,000 – 90,000 equals 10,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "40,000 ÷ 10 equals 4,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multiplication can be seen as repeated addition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9,999 × 0 equals 9,999.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "500 × 200 equals 1,00,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
