export const chapter = "Chapter - 11: Direct and Inverse Variation";
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
        question: "Which of the following best describes direct variation?",
        optionA: "One quantity increases while the other decreases",
        optionB: "Both quantities increase or decrease together",
        optionC: "The product of quantities remains constant",
        correctAnswer: "Both quantities increase or decrease together",
      }),
      shuffleOptions({
        question: "If the quantity of goods purchased increases, the total cost will",
        optionA: "decrease",
        optionB: "remain same",
        optionC: "increase",
        correctAnswer: "increase",
      }),
      shuffleOptions({
        question: "In inverse variation, which of the following remains constant?",
        optionA: "Sum of quantities",
        optionB: "Difference of quantities",
        optionC: "Product of quantities",
        correctAnswer: "Product of quantities",
      }),
      shuffleOptions({
        question: "Which pair of quantities shows inverse variation?",
        optionA: "Length of rod and its mass",
        optionB: "Number of workers and time taken for same work",
        optionC: "Distance travelled and petrol consumed",
        correctAnswer: "Number of workers and time taken for same work",
      }),
      shuffleOptions({
        question: "If x varies directly with y, then",
        optionA: "xy = constant",
        optionB: "x − y = constant",
        optionC: "x ÷ y = constant",
        correctAnswer: "x ÷ y = constant",
      }),
      shuffleOptions({
        question: "If the number of taps filling a tank increases, the time taken will",
        optionA: "increase",
        optionB: "decrease",
        optionC: "remain unchanged",
        correctAnswer: "decrease",
      }),
      shuffleOptions({
        question: "Which situation shows direct variation?",
        optionA: "Speed and time for fixed distance",
        optionB: "Cost and quantity purchased",
        optionC: "Number of persons and share of food",
        correctAnswer: "Cost and quantity purchased",
      }),
      shuffleOptions({
        question: "If one quantity becomes three times in direct variation, the other quantity becomes",
        optionA: "one-third",
        optionB: "three times",
        optionC: "nine times",
        correctAnswer: "three times",
      }),
      shuffleOptions({
        question: "In inverse variation, if one quantity decreases, the other",
        optionA: "also decreases",
        optionB: "increases",
        optionC: "becomes zero",
        correctAnswer: "increases",
      }),
      shuffleOptions({
        question: "Which of the following is an example of inverse variation in daily life?",
        optionA: "Buying more items costs more",
        optionB: "More students sharing food means less food per student",
        optionC: "Longer rod has more mass",
        correctAnswer: "More students sharing food means less food per student",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Distance travelled varies ______ with time when speed is constant.",
        optionA: "inversely",
        optionB: "directly",
        optionC: "irregularly",
        correctAnswer: "directly",
      }),
      shuffleOptions({
        question: "Two quantities whose ratio remains constant are in ______ variation.",
        optionA: "inverse",
        optionB: "direct",
        optionC: "mixed",
        correctAnswer: "direct",
      }),
      shuffleOptions({
        question: "If xy = constant, x and y vary ______ with each other.",
        optionA: "directly",
        optionB: "inversely",
        optionC: "equally",
        correctAnswer: "inversely",
      }),
      shuffleOptions({
        question: "More workers will complete the same work in ______ time.",
        optionA: "more",
        optionB: "less",
        optionC: "equal",
        correctAnswer: "less",
      }),
      shuffleOptions({
        question: "In inverse variation, when one quantity increases, the other quantity ______.",
        optionA: "increases",
        optionB: "decreases",
        optionC: "remains same",
        correctAnswer: "decreases",
      }),
      shuffleOptions({
        question: "Length of a metal rod and its mass vary ______ with each other.",
        optionA: "inversely",
        optionB: "directly",
        optionC: "randomly",
        correctAnswer: "directly",
      }),
      shuffleOptions({
        question: "The constant that relates two varying quantities is called the ______ of variation.",
        optionA: "factor",
        optionB: "variable",
        optionC: "constant",
        correctAnswer: "constant",
      }),
      shuffleOptions({
        question: "Time taken to complete work varies inversely with the number of ______.",
        optionA: "days",
        optionB: "workers",
        optionC: "hours",
        correctAnswer: "workers",
      }),
      shuffleOptions({
        question: "In direct variation, if one quantity is doubled, the other quantity is also ______.",
        optionA: "halved",
        optionB: "doubled",
        optionC: "unchanged",
        correctAnswer: "doubled",
      }),
      shuffleOptions({
        question: "Pipes filling a tank and time taken to fill it show ______ variation.",
        optionA: "direct",
        optionB: "inverse",
        optionC: "no",
        correctAnswer: "inverse",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In direct variation, both quantities change in the same direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cost of items decreases when the quantity purchased increases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In inverse variation, the product of the two quantities remains constant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speed and time for a fixed distance are inversely related.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Length of a rod and its mass show inverse variation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "More taps will take more time to fill a tank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Time varies directly with work when the rate of work is constant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Number of workers and time taken for the same work are directly related.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Direct variation can be represented by x ÷ y = constant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In inverse variation, increase in one quantity causes decrease in the other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
