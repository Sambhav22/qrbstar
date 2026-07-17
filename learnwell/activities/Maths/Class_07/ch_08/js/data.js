export const chapter = "Chapter - 8: Ratio, Proportion and Unitary Method";
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
        question: "The ratio of 2 hours to 30 minutes is:",
        optionA: "1 : 2",
        optionB: "4 : 1",
        optionC: "2 : 1",
        correctAnswer: "4 : 1",
      }),
      shuffleOptions({
        question: "Which term in the ratio a : b is called the antecedent?",
        optionA: "a",
        optionB: "b",
        optionC: "both",
        correctAnswer: "a",
      }),
      shuffleOptions({
        question: "If 12 : x = 3 : 1, then x equals:",
        optionA: "6",
        optionB: "4",
        optionC: "3",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "The mean proportional between 16 and 64 is:",
        optionA: "8",
        optionB: "26",
        optionC: "32",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "A quantity increases in the ratio 5 : 8. The multiplying factor is: 5",
        optionA: "8 8",
        optionB: "5  3",
        optionC: "5",
        correctAnswer: "5  3",
      }),
      shuffleOptions({
        question: "If a : b :: c : d, then product of extremes equals:",
        optionA: "product of means",
        optionB: "product of antecedents",
        optionC: "product of consequents",
        correctAnswer: "product of means",
      }),
      shuffleOptions({
        question: "Ratio of 450 g to 1.5 kg is:",
        optionA: "1 : 2",
        optionB: "5 : 14",
        optionC: "3 : 10",
        correctAnswer: "3 : 10",
      }),
      shuffleOptions({
        question: "In continued proportion a : b :: b : c, the value of c is:",
        optionA: "ab b2",
        optionB: "a  a2",
        optionC: "b",
        correctAnswer: "a  a2",
      }),
      shuffleOptions({
        question: "The fourth proportional to 4, 12, 18 is:",
        optionA: "48",
        optionB: "54",
        optionC: "24",
        correctAnswer: "54",
      }),
      shuffleOptions({
        question: "A car travels 240 km in 4 hours. Its speed is:",
        optionA: "50 km/h",
        optionB: "60 km/h",
        optionC: "40 km/h",
        correctAnswer: "60 km/h",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ratio compares two quantities by ______.",
        optionA: "subtraction",
        optionB: "division",
        optionC: "multiplication",
        correctAnswer: "division",
      }),
      shuffleOptions({
        question: "A ratio has ______ units.",
        optionA: "one",
        optionB: "no",
        optionC: "two",
        correctAnswer: "no",
      }),
      shuffleOptions({
        question: "To compare two ratios, we convert them into ______ fractions.",
        optionA: "mixed",
        optionB: "improper",
        optionC: "equivalent",
        correctAnswer: "equivalent",
      }),
      shuffleOptions({
        question: "The ratio of 75 minutes to 1 hour is ______.",
        optionA: "3 : 2",
        optionB: "5 : 4",
        optionC: "2 : 3",
        correctAnswer: "5 : 4",
      }),
      shuffleOptions({
        question: "The mean proportional between 9 and 36 is ______.",
        optionA: "12",
        optionB: "14",
        optionC: "18",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "In a : b :: c : d, the extremes are ______.",
        optionA: "b and c",
        optionB: "a and d",
        optionC: "a and b",
        correctAnswer: "a and d",
      }),
      shuffleOptions({
        question: "Decreasing a quantity in the ratio 7 : 3 means multiplying by ______. 7",
        optionA: "3 3",
        optionB: "7  1",
        optionC: "7",
        correctAnswer: "7  1",
      }),
      shuffleOptions({
        question: "0.8 kg to 400 g expressed as a ratio becomes ______.",
        optionA: "4 : 1",
        optionB: "1 : 2",
        optionC: "2 : 1",
        correctAnswer: "2 : 1",
      }),
      shuffleOptions({
        question: "If 2A = 3B, then A : B equals ______.",
        optionA: "3 : 6",
        optionB: "3 : 2",
        optionC: "4 : 6",
        correctAnswer: "3 : 2",
      }),
      shuffleOptions({
        question: "In the unitary method, to find a smaller quantity, we ______.",
        optionA: "multiply",
        optionB: "divide",
        optionC: "subtract",
        correctAnswer: "divide",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ratio can compare quantities of different kinds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ratio 4 : 10 in lowest terms is 2 : 5.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a proportion, product of means equals product of extremes.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5, 15, 45 are in continued proportion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A ratio changes when both terms are multiplied by the same number.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fourth proportional to 3, 6, 15 is 30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "12 g to 3 kg can be written as 1 : 250.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a : b :: b : c, c is the mean proportional.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A ratio has units only when comparing time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If 10 workers take 12 days, then 15 workers will take fewer days.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
    ]),
  };
}
