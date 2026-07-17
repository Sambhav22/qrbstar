export const chapter = "Chapter - 8: Ratio and Proportion";
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
        question: "What is the simplest form of the ratio 30 cm to 90 cm?",
        optionA: "1 : 2",
        optionB: "1 : 3",
        optionC: "3 : 1",
        correctAnswer: "1 : 3",
      }),
      shuffleOptions({
        question: "Which term in the ratio a : b is known as the consequent?",
        optionA: "a",
        optionB: "b",
        optionC: "both",
        correctAnswer: "b",
      }),
      shuffleOptions({
        question: "Which ratio is equivalent to 6 : 9?",
        optionA: "2 : 3",
        optionB: "4 : 6",
        optionC: "3 : 2",
        correctAnswer: "2 : 3",
      }),
      shuffleOptions({
        question: "If two ratios form a proportion, what must be equal?",
        optionA: "Their sums",
        optionB: "Their cross-products",
        optionC: "Their differences",
        correctAnswer: "Their cross-products",
      }),
      shuffleOptions({
        question: "What is the ratio of 500 g to 2 kg?",
        optionA: "1 : 4",
        optionB: "2 : 1",
        optionC: "4 : 1",
        correctAnswer: "1 : 4",
      }),
      shuffleOptions({
        question: "Which of the following is the mean proportional between 4 and 16?",
        optionA: "10",
        optionB: "12",
        optionC: "8",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "What is the ratio of 2 hours to 30 minutes?",
        optionA: "5 : 1",
        optionB: "3 : 1",
        optionC: "4 : 1",
        correctAnswer: "4 : 1",
      }),
      shuffleOptions({
        question: "Which ratio is greater?",
        optionA: "5 : 12",
        optionB: "7 : 18",
        correctAnswer: "5 : 12",
      }),
      shuffleOptions({
        question: "Which of the following is a continued proportion?",
        optionA: "2, 4, 10",
        optionB: "3, 9, 27",
        optionC: "5, 15, 40",
        correctAnswer: "3, 9, 27",
      }),
      shuffleOptions({
        question: "What is the third proportional of 5 and 20?",
        optionA: "80",
        optionB: "25",
        optionC: "100",
        correctAnswer: "80",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ratio of 250 ml to 1 litre is ______.",
        optionA: "1: 4",
        optionB: "4: 1",
        correctAnswer: "1: 4",
      }),
      shuffleOptions({
        question: "The two terms inside a proportion are called the ______.",
        optionA: "extremes",
        optionB: "means",
        optionC: "middles",
        correctAnswer: "means",
      }),
      shuffleOptions({
        question: "To get an equivalent ratio, we must multiply both terms by the same ______.",
        optionA: "number",
        optionB: "unit",
        optionC: "fraction",
        correctAnswer: "number",
      }),
      shuffleOptions({
        question: "A ratio compares two quantities by ______.",
        optionA: "addition",
        optionB: "division",
        optionC: "subtraction",
        correctAnswer: "division",
      }),
      shuffleOptions({
        question: "The ratio 18: 6 in fraction form is ______. 3",
        optionA: "1  1",
        optionB: "3 6",
        optionC: "18",
        correctAnswer: "1  1",
      }),
      shuffleOptions({
        question: "In a : b :: c : d, the extreme terms are ______.",
        optionA: "a and d",
        optionB: "b and c",
        optionC: "a and b",
        correctAnswer: "a and d",
      }),
      shuffleOptions({
        question: "A ratio always has ______ unit.",
        optionA: "no",
        optionB: "one",
        optionC: "two",
        correctAnswer: "no",
      }),
      shuffleOptions({
        question: "If 12, 36, and 108 are in continued proportion, then the middle term is the ______ proportional.",
        optionA: "third",
        optionB: "mean proportional",
        optionC: "first",
        correctAnswer: "mean proportional",
      }),
      shuffleOptions({
        question: "The ratio of 3 minutes to 180 seconds is ______.",
        optionA: "2 : 1",
        optionB: "1 : 1",
        optionC: "3 : 2",
        correctAnswer: "1 : 1",
      }),
      shuffleOptions({
        question: "To get less using the unitary method, we ______.",
        optionA: "add",
        optionB: "divide",
        optionC: "multiply",
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
        question: "The ratio of 400 g to 1 kg is 2: 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Equivalent ratios represent the same comparison.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The order of terms in a ratio does not matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ratios have no units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The numbers 5, 15, 45 are in continued proportion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If cross products are unequal, the ratios are not in proportion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ratio 7: 21 in simplest form is 1: 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To get more using the unitary method, we divide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mean proportional between 9 and 16 is 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ratio exists only when two quantities have the same unit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
