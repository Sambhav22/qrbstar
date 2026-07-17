export const chapter = "Chapter - 4: Rational Numbers";
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
        question: "What is a rational number? p",
        optionA: "A number that can be written as q, where q ≠ 0",
        optionB: "A number with only positive values",
        optionC: "A whole number only",
        correctAnswer: "A number that can be written as q, where q ≠ 0",
      }),
      shuffleOptions({
        question: "Which of the following is a rational number? 8",
        optionA: "0 5",
        optionB: "7",
        optionC: "√2",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Which number is neither positive nor negative?",
        optionA: "–1",
        optionB: "1",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which of the following is a negative rational number? 3",
        optionA: "5 −7",
        optionB: "9  4",
        optionC: "1",
        correctAnswer: "9  4",
      }),
      shuffleOptions({
        question: "Which rational number is in standard form? 10",
        optionA: "20 2",
        optionB: "3  6",
        optionC: "9",
        correctAnswer: "3  6",
      }),
      shuffleOptions({
        question: "What is the condition for a rational number to be in standard form?",
        optionA: "Denominator must be negative",
        optionB: "Numerator and denominator must be co-prime and denominator positive",
        optionC: "Numerator must be zero",
        correctAnswer: "Numerator and denominator must be co-prime and denominator positive",
      }),
      shuffleOptions({
        question: "Which of the following represents zero as a rational number? 0",
        optionA: "5  5",
        optionB: "0 10",
        optionC: "1",
        correctAnswer: "5  5",
      }),
      shuffleOptions({
        question: "Which method is used to compare rational numbers easily?",
        optionA: "Guessing",
        optionB: "Cross multiplication",
        optionC: "Estimation",
        correctAnswer: "Cross multiplication",
      }),
      shuffleOptions({
        question: "How many rational numbers lie between any two rational numbers?",
        optionA: "One",
        optionB: "Two",
        optionC: "Infinite",
        correctAnswer: "Infinite",
      }),
      shuffleOptions({
        question: "Where are positive rational numbers represented on the number line?",
        optionA: "Left of zero",
        optionB: "Right of zero",
        optionC: "On zero",
        correctAnswer: "Right of zero",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A rational number is written in the form pq\\frac{p}{q}qp, where q is not equal to ______.",
        optionA: "1",
        optionB: "0",
        optionC: "p",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Zero is a ______ rational number.",
        optionA: "positive",
        optionB: "negative",
        optionC: "neither positive nor negative",
        correctAnswer: "neither positive nor negative",
      }),
      shuffleOptions({
        question: "Every integer is a ______ number.",
        optionA: "irrational",
        optionB: "rational",
        optionC: "whole only",
        correctAnswer: "rational",
      }),
      shuffleOptions({
        question: "Rational numbers equivalent to a given rational number are obtained by multiplying or dividing the numerator and denominator by the same ______ integer.",
        optionA: "zero",
        optionB: "negative",
        optionC: "non-zero",
        correctAnswer: "non-zero",
      }),
      shuffleOptions({
        question: "A rational number is in standard form when the denominator is ______.",
        optionA: "positive",
        optionB: "zero",
        optionC: "negative",
        correctAnswer: "positive",
      }),
      shuffleOptions({
        question: "Rational numbers on the right of zero on the number line are ______.",
        optionA: "negative",
        optionB: "positive",
        optionC: "whole",
        correctAnswer: "positive",
      }),
      shuffleOptions({
        question: "To reduce a rational number to standard form, we divide by the ______ of numerator and denominator.",
        optionA: "LCM",
        optionB: "product",
        optionC: "HCF",
        correctAnswer: "HCF",
      }),
      shuffleOptions({
        question: "The reciprocal of a rational number is obtained by interchanging its ______ and ______.",
        optionA: "signs and values",
        optionB: "numerator and denominator",
        optionC: "integers",
        correctAnswer: "numerator and denominator",
      }),
      shuffleOptions({
        question: "The additive inverse of a rational number is obtained by changing its ______.",
        optionA: "denominator",
        optionB: "sign",
        optionC: "value",
        correctAnswer: "sign",
      }),
      shuffleOptions({
        question: "The reciprocal of zero ______.",
        optionA: "is zero",
        optionB: "exists",
        optionC: "does not exist",
        correctAnswer: "does not exist",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Zero is a rational number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every rational number is an integer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A rational number can have a negative denominator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Equivalent rational numbers represent the same value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rational number in standard form has numerator and denominator with no common factor other than 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are only finite rational numbers between two rational numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Positive rational numbers lie to the right of zero on the number line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The reciprocal of 1 is 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subtraction of rational numbers can be done using additive inverse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every whole number is a rational number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
