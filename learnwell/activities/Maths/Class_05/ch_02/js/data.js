export const chapter = "Chapter - 2: Roman Numerals";
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
        question: "What is the value of the Roman symbol D?",
        optionA: "100",
        optionB: "500",
        optionC: "1000",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "Which Roman numeral correctly represents the number 9?",
        optionA: "XI",
        optionB: "IX",
        optionC: "VI",
        correctAnswer: "IX",
      }),
      shuffleOptions({
        question: "Which symbol is allowed to be subtracted from L according to Roman rules?",
        optionA: "X",
        optionB: "C",
        optionC: "V",
        correctAnswer: "X",
      }),
      shuffleOptions({
        question: "What does the Roman numeral LXXX stand for?",
        optionA: "60",
        optionB: "80",
        optionC: "100",
        correctAnswer: "80",
      }),
      shuffleOptions({
        question: "What is the value of CM in Hindu-Arabic numerals?",
        optionA: "400",
        optionB: "900",
        optionC: "1100",
        correctAnswer: "900",
      }),
      shuffleOptions({
        question: "Which of the following symbols cannot be repeated?",
        optionA: "C",
        optionB: "M",
        optionC: "L",
        correctAnswer: "L",
      }),
      shuffleOptions({
        question: "What is the Hindu-Arabic number for MD?",
        optionA: "1400",
        optionB: "1500",
        optionC: "1600",
        correctAnswer: "1500",
      }),
      shuffleOptions({
        question: "What is the value of the Roman numeral XIX?",
        optionA: "18",
        optionB: "19",
        optionC: "21",
        correctAnswer: "19",
      }),
      shuffleOptions({
        question: "According to Roman numeral rules, which rule applies when a smaller symbol is written between two larger symbols?",
        optionA: "Rule 1",
        optionB: "Rule 3",
        optionC: "Rule 4",
        correctAnswer: "Rule 4",
      }),
      shuffleOptions({
        question: "What number is represented by the Roman numeral XXIV?",
        optionA: "24",
        optionB: "34",
        optionC: "42",
        correctAnswer: "24",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "III = ___",
        optionA: "4",
        optionB: "2",
        optionC: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A bar over X makes its value equal to ______.",
        optionA: "10,000",
        optionB: "5,000",
        optionC: "1,000",
        correctAnswer: "10,000",
      }),
      shuffleOptions({
        question: "In LIX, the value of IX is ______.",
        optionA: "11",
        optionB: "9",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "C + C = ____",
        optionA: "CC",
        optionB: "XC",
        optionC: "CM",
        correctAnswer: "CC",
      }),
      shuffleOptions({
        question: "The symbol ______ can be subtracted only from L and C.",
        optionA: "I",
        optionB: "X",
        optionC: "V",
        correctAnswer: "X",
      }),
      shuffleOptions({
        question: "D + L = ____",
        optionA: "DL",
        optionB: "LD",
        optionC: "DXL",
        correctAnswer: "DL",
      }),
      shuffleOptions({
        question: "The expression (10 – 1) is written in Roman numerals as ______.",
        optionA: "XI",
        optionB: "IX",
        optionC: "IXX",
        correctAnswer: "IX",
      }),
      shuffleOptions({
        question: "LXX + X = ____",
        optionA: "LXXX",
        optionB: "LXXI",
        optionC: "LXXXI",
        correctAnswer: "LXXX",
      }),
      shuffleOptions({
        question: "Roman numeral for 40 is ______.",
        optionA: "XL",
        optionB: "LX",
        optionC: "XLL",
        correctAnswer: "XL",
      }),
      shuffleOptions({
        question: "When combined, C + XC gives ______.",
        optionA: "CXC",
        optionB: "CC",
        optionC: "CXX",
        correctAnswer: "CXC",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The symbol V can be repeated three times in Roman numerals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The symbol I can be subtracted from X.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roman numerals include a symbol for zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Roman symbol C represents the value 500.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "XIX means 10 + (10 − 1).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbols V, L, and D cannot be written to the left for subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Writing MMM equals the number 3000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Roman numeral IX is greater than XI.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Roman numerals use the place-value system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "According to rules, V, L, and D are symbols that cannot be repeated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
