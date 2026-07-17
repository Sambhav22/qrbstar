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
        question: "Which Roman symbol represents 10?",
        optionA: "V",
        optionB: "X",
        optionC: "L",
        correctAnswer: "X",
      }),
      shuffleOptions({
        question: "How many times can I be repeated in Roman numerals?",
        optionA: "Four times",
        optionB: "Two times",
        optionC: "Three times",
        correctAnswer: "Three times",
      }),
      shuffleOptions({
        question: "Which numeral shows subtraction?",
        optionA: "VII",
        optionB: "IV",
        optionC: "XI",
        correctAnswer: "IV",
      }),
      shuffleOptions({
        question: "What is the value of L in Roman numerals?",
        optionA: "10",
        optionB: "50",
        optionC: "100",
        correctAnswer: "50",
      }),
      shuffleOptions({
        question: "Which symbol cannot be repeated?",
        optionA: "V",
        optionB: "I",
        optionC: "X",
        correctAnswer: "V",
      }),
      shuffleOptions({
        question: "What does the numeral XC represent?",
        optionA: "40",
        optionB: "90",
        optionC: "110",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "Which numeral is formed by adding 10 + 5?",
        optionA: "XX",
        optionB: "XV",
        optionC: "VII",
        correctAnswer: "XV",
      }),
      shuffleOptions({
        question: "What is the value of C?",
        optionA: "100",
        optionB: "10",
        optionC: "50",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Which numeral is greater?",
        optionA: "XL",
        optionB: "LX",
        optionC: "XX",
        correctAnswer: "LX",
      }),
      shuffleOptions({
        question: "Which numeral is written using the subtraction rule?",
        optionA: "XI",
        optionB: "VI",
        optionC: "IX",
        correctAnswer: "IX",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "______ is the Roman numeral for 5.",
        optionA: "V",
        optionB: "X",
        optionC: "L",
        correctAnswer: "V",
      }),
      shuffleOptions({
        question: "The value of ______ is 50.",
        optionA: "C",
        optionB: "L",
        optionC: "M",
        correctAnswer: "L",
      }),
      shuffleOptions({
        question: "The numeral ______ represents 100.",
        optionA: "C",
        optionB: "L",
        optionC: "D",
        correctAnswer: "C",
      }),
      shuffleOptions({
        question: "______ is equal to 80.",
        optionA: "LX",
        optionB: "LXXX",
        optionC: "XL",
        correctAnswer: "LXXX",
      }),
      shuffleOptions({
        question: "The symbol ______ can be subtracted only from V and X.",
        optionA: "C",
        optionB: "I",
        optionC: "L",
        correctAnswer: "I",
      }),
      shuffleOptions({
        question: "______ represents 9 in Roman numerals.",
        optionA: "VIII",
        optionB: "VI",
        optionC: "IX",
        correctAnswer: "IX",
      }),
      shuffleOptions({
        question: "In Roman numerals, ______ means 40.",
        optionA: "XL",
        optionB: "LX",
        optionC: "XX",
        correctAnswer: "XL",
      }),
      shuffleOptions({
        question: "The numeral ______ is formed by adding 10 + 10 + 10.",
        optionA: "XXX",
        optionB: "XX",
        optionC: "XV",
        correctAnswer: "XXX",
      }),
      shuffleOptions({
        question: "Roman numerals do not have the symbol for ______.",
        optionA: "5",
        optionB: "10",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "The numeral ______ represents 70.",
        optionA: "LXX",
        optionB: "LX",
        optionC: "LXXX",
        correctAnswer: "LXX",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Romans used letters of the English alphabet as symbols for numerals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The numeral C represents 500.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The numeral IX is formed using subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roman numeral LXX equals 70.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol V can be repeated three times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Romans did not have any symbol for zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The numeral XV is equal to 20.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The symbol I can be placed before X to show subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The numeral LX represents 80.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The numeral XX is greater than XV.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
