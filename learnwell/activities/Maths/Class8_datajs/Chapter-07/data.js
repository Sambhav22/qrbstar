export const chapter = "Chapter - 7: Factorisation";
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
        question: "Which of the following is the factorisation of x2−25 ?",
        optionA: "(x−5)2",
        optionB: "(x+5)2",
        optionC: "(x−5)(x+5)",
        correctAnswer: "(x−5)(x+5)",
      }),
      shuffleOptions({
        question: "The HCF of 12x2y and 18xy2 is",
        optionA: "6x",
        optionB: "6xy",
        optionC: "12xy",
        correctAnswer: "6xy",
      }),
      shuffleOptions({
        question: "Which method is suitable for factorising 6x+126x + 126x+12?",
        optionA: "Grouping",
        optionB: "Identity",
        optionC: "Common factor",
        correctAnswer: "Common factor",
      }),
      shuffleOptions({
        question: "Which identity is used to factorise a2−b2 ?",
        optionA: "(a + b)²",
        optionB: "(a - b)²",
        optionC: "(a - b)(a + b)",
        correctAnswer: "(a - b)(a + b)",
      }),
      shuffleOptions({
        question: "The factorisation of x2+6x+9 is",
        optionA: "(x+3)2",
        optionB: "(x−3)2",
        optionC: "(x+9)(x−1)",
        correctAnswer: "(x+3)2",
      }),
      shuffleOptions({
        question: "Grouping of terms is possible only when the number of terms is",
        optionA: "odd",
        optionB: "even",
        optionC: "prime",
        correctAnswer: "even",
      }),
      shuffleOptions({
        question: "Which of the following has two equal factors?",
        optionA: "x2−16x",
        optionB: "x2+ 8x+16",
        optionC: "x2−8x+16x",
        correctAnswer: "x2+ 8x+16",
      }),
      shuffleOptions({
        question: "The factorisation of 4y2− 9 is",
        optionA: "(2y−3)(2y+3)",
        optionB: "(2y−3)2",
        optionC: "(y−3)(y+3)",
        correctAnswer: "(2y−3)(2y+3)",
      }),
      shuffleOptions({
        question: "Which expression cannot be factorised using identities?",
        optionA: "x2−49x",
        optionB: "x2+16x",
        optionC: "x2−9x",
        correctAnswer: "x2+16x",
      }),
      shuffleOptions({
        question: "The method of splitting the middle term is used for",
        optionA: "two-term expressions",
        optionB: "three-term expressions",
        optionC: "four-term expressions",
        correctAnswer: "three-term expressions",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "x2 - 36 = (x - __)(x + __)",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The process of writing an expression as a product of factors is called ______.",
        optionA: "expansion",
        optionB: "multiplication",
        optionC: "factorisation",
        correctAnswer: "factorisation",
      }),
      shuffleOptions({
        question: "(a+b)2 expands into ______ terms.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "three",
      }),
      shuffleOptions({
        question: "The HCF of 8a2b and 12ab2 is ______.",
        optionA: "4ab",
        optionB: "8ab",
        optionC: "12ab",
        correctAnswer: "4ab",
      }),
      shuffleOptions({
        question: "x2 + 10x + 25 = (x + __)2",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "In grouping of terms, factors are taken ______ from each group.",
        optionA: "separately",
        optionB: "commonly",
        optionC: "randomly",
        correctAnswer: "commonly",
      }),
      shuffleOptions({
        question: "The identity used for 9y2−25 is ______.",
        optionA: "(a+",
        optionB: "2",
        optionC: "(a−",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "x2 - 9 = (x - __)(x + __)",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "In splitting the middle term, the middle term is split into ______ parts.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "(2a+3)2 represents the square of ______.",
        optionA: "2a",
        optionB: "a+ 3",
        optionC: "2a+3",
        correctAnswer: "2a+3",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Factorisation is the reverse process of multiplication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "x2+25 can be factorised using identities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grouping of terms is possible only when the number of terms is even.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(a−b)2=a2−b2",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "(x+4) is a factor of x2+8x+16",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Common factor method is used when all terms have a common factor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "x2−49 has two unequal factors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Splitting the middle term is used for expressions having two terms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "(x−5)(x+5) is the factorisation of x2−25",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Irreducible factors can be factorised further.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
