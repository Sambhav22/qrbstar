export const chapter = "Chapter - 10: Division";
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
        question: "Neha put 6 candles on 3 cakes. How many candles were there on each cake?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "If each plate can hold 3 sandwiches, how many plates are needed for 12 sandwiches?",
        optionA: "3",
        optionB: "4",
        optionC: "6",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "Preeti had 12 apples. She gave 4 apples each to three children. How many apples did each child get?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "Kesar and Keshav shared 18 crackers equally. How many crackers did each one get?",
        optionA: "7",
        optionB: "9",
        optionC: "6",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "If 15 toffees are packed equally into 3 packets, how many toffees will be there in each packet?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "20 plants are planted in 5 equal rows. How many plants are there in each row?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "6 flags are distributed equally among 2 schools. How many flags does each school get?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "21 flowers are put equally into 3 vases. How many flowers are there in each vase?",
        optionA: "6",
        optionB: "7",
        optionC: "8",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "32 cars are arranged in 4 equal rows. How many cars are there in each row?",
        optionA: "6",
        optionB: "7",
        optionC: "8",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "9 toys are equally distributed among 3 children. How many toys does each child get?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Division is the process of ______ sharing.",
        optionA: "random",
        optionB: "equal",
        optionC: "uneven",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "12 ÷ 4 = ______",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "In 12 ÷ 3 = 4, 3 is called the ______.",
        optionA: "quotient",
        optionB: "divisor",
        optionC: "dividend",
        correctAnswer: "divisor",
      }),
      shuffleOptions({
        question: "The answer we get after division is called the ______.",
        optionA: "divisor",
        optionB: "quotient",
        optionC: "dividend",
        correctAnswer: "quotient",
      }),
      shuffleOptions({
        question: "In 6 ÷ 3 = 2, 6 is the ______.",
        optionA: "dividend",
        optionB: "divisor",
        optionC: "quotient",
        correctAnswer: "dividend",
      }),
      shuffleOptions({
        question: "The sign of division is ______.",
        optionA: "×",
        optionB: "÷",
        optionC: "=",
        correctAnswer: "÷",
      }),
      shuffleOptions({
        question: "10 ÷ 2 = ______",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Division is also known as ______ subtraction.",
        optionA: "repeated",
        optionB: "single",
        optionC: "different",
        correctAnswer: "repeated",
      }),
      shuffleOptions({
        question: "When we share equally, we know the number of ______.",
        optionA: "groups",
        optionB: "things",
        optionC: "lines",
        correctAnswer: "groups",
      }),
      shuffleOptions({
        question: "8 ÷ 4 = ______",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Division means equal sharing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol for division is ÷.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 12 ÷ 4 = 3, 4 is called the quotient.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Repeated subtraction is another way of doing division.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Division and multiplication are the same operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "On the number line, we take backward jumps to show division.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "15 ÷ 3 = 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The answer we get after dividing is called the quotient.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Division can be used to make equal groups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Division is used for unequal grouping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
