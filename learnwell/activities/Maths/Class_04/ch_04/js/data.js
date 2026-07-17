export const chapter = "Chapter - 4: Multiplication";
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
        question: "What is the value of 7 × 800?",
        optionA: "5,600",
        optionB: "560",
        optionC: "56,000",
        correctAnswer: "5,600",
      }),
      shuffleOptions({
        question: "Which property is shown by 45 × 1 = 45?",
        optionA: "Zero property",
        optionB: "Property of One",
        optionC: "Commutative property",
        correctAnswer: "Property of One",
      }),
      shuffleOptions({
        question: "What is 9 × (20 + 3)?",
        optionA: "180",
        optionB: "207",
        optionC: "203",
        correctAnswer: "207",
      }),
      shuffleOptions({
        question: "What is the product of 600 × 40?",
        optionA: "2,400",
        optionB: "24,000",
        optionC: "240,000",
        correctAnswer: "24,000",
      }),
      shuffleOptions({
        question: "Which of the following is a correct distributive form of 8 × 47?",
        optionA: "(8 × 40) + (8 × 7)",
        optionB: "(8 × 40) + (8 × 8)",
        optionC: "(8 × 50) + (8 × 7)",
        correctAnswer: "(8 × 40) + (8 × 7)",
      }),
      shuffleOptions({
        question: "What is 325 × 2?",
        optionA: "550",
        optionB: "650",
        optionC: "600",
        correctAnswer: "650",
      }),
      shuffleOptions({
        question: "Which number rounds to 90 when rounded to nearest ten?",
        optionA: "86",
        optionB: "92",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "3,000 × 5 equals:",
        optionA: "1,500",
        optionB: "15,000",
        optionC: "150",
        correctAnswer: "15,000",
      }),
      shuffleOptions({
        question: "Which property is used?",
        optionA: "Associative",
        optionB: "Commutative",
        optionC: "Zero property",
        correctAnswer: "Commutative",
      }),
      shuffleOptions({
        question: "What is 9 × 90?",
        optionA: "810",
        optionB: "900",
        optionC: "790",
        correctAnswer: "810",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "4,526 × 10 = ______",
        optionA: "45,260",
        optionB: "4,526",
        optionC: "452,600",
        correctAnswer: "45,260",
      }),
      shuffleOptions({
        question: "Multiplying any number by 0 always gives ______.",
        optionA: "0",
        optionB: "the same number",
        optionC: "double the number",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "7 × (100 + 5) = ______",
        optionA: "735",
        optionB: "750",
        optionC: "705",
        correctAnswer: "735",
      }),
      shuffleOptions({
        question: "1 × 8,345 = ______",
        optionA: "8,345",
        optionB: "0",
        optionC: "1",
        correctAnswer: "8,345",
      }),
      shuffleOptions({
        question: "92 rounded to nearest 10 is ______.",
        optionA: "100",
        optionB: "90",
        optionC: "80",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "(6 × 30) + (6 × 2) is equal to ______.",
        optionA: "192",
        optionB: "180",
        optionC: "112",
        correctAnswer: "192",
      }),
      shuffleOptions({
        question: "2,400 × 2 = ______",
        optionA: "4,800",
        optionB: "2,400",
        optionC: "4,200",
        correctAnswer: "4,800",
      }),
      shuffleOptions({
        question: "8 × 1,000 = ______",
        optionA: "800",
        optionB: "8,000",
        optionC: "80,000",
        correctAnswer: "8,000",
      }),
      shuffleOptions({
        question: "35 × 20 = ______",
        optionA: "700",
        optionB: "350",
        optionC: "7,000",
        correctAnswer: "700",
      }),
      shuffleOptions({
        question: "The property used in 3 × (4 + 6) is ______.",
        optionA: "Zero property",
        optionB: "Distributive property",
        optionC: "Associative property",
        correctAnswer: "Distributive property",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "4,000 × 0 = 0",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rounding 76 to the nearest ten gives 70.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "50 × 9 = 450",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multiplication by 1 does not change the number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "90 × 100 = 9,000",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "64 × 2 is the same as 2 × 64.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8 × (3 + 1) = (8 × 3) + (8 × 1)",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "7 × 900 = 63,000",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Estimation gives an exact answer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 × 500 = 1,500",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
