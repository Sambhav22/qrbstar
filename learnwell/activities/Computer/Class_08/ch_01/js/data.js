export const chapter = "Chapter - 1: Number System";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which number system is used internally by computers to process data?",
        optionA: "Decimal",
        optionB: "Binary",
        optionC: "Hexadecimal",
        correctAnswer: "Binary",
      }),
      shuffleOptions({
        question: "Which number system uses the symbols 0 to 9 and A to F?",
        optionA: "Binary",
        optionB: "Octal",
        optionC: "Hexadecimal",
        correctAnswer: "Hexadecimal",
      }),
      shuffleOptions({
        question: "The base of the octal number system is ___.",
        optionA: "10",
        optionB: "8",
        optionC: "2",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "Which of these represents the OFF state in a computer?",
        optionA: "0",
        optionB: "1",
        optionC: "Both",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which number system has the largest base value among binary, octal and decimal?",
        optionA: "Binary",
        optionB: "Octal",
        optionC: "Decimal",
        correctAnswer: "Decimal",
      }),
      shuffleOptions({
        question: "Which number system is most suitable for machines using switching states?",
        optionA: "Decimal",
        optionB: "Binary",
        optionC: "Hexadecimal",
        correctAnswer: "Binary",
      }),
      shuffleOptions({
        question: "What is the result when binary 1111 is multiplied by 10?",
        optionA: "11110",
        optionB: "10011",
        optionC: "10101",
        correctAnswer: "11110",
      }),
      shuffleOptions({
        question: "Which number system is mainly used by human beings in daily life?",
        optionA: "Binary",
        optionB: "Decimal",
        optionC: "Octal",
        correctAnswer: "Decimal",
      }),
      shuffleOptions({
        question: "What is the base of the binary number system?",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "In a computer, 1 byte = how many bits?",
        optionA: "4",
        optionB: "8",
        optionC: "16",
        correctAnswer: "8",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Binary digits 0 and 1 represent the ______ and ______ states.",
        optionA: "ON, OFF",
        optionB: "OFF, ON",
        optionC: "Start, Stop",
        correctAnswer: "OFF, ON",
      }),
      shuffleOptions({
        question: "The decimal number system uses ______ digits.",
        optionA: "8",
        optionB: "9",
        optionC: "10",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "In binary addition, 1 + 1 = ______.",
        optionA: "1",
        optionB: "10",
        optionC: "0",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The hexadecimal number system has a base of ______.",
        optionA: "16",
        optionB: "10",
        optionC: "8",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "Octal number system digits range from ______ to ______.",
        optionA: "0, 7",
        optionB: "1, 8",
        optionC: "0, 8",
        correctAnswer: "0, 7",
      }),
      shuffleOptions({
        question: "The rightmost digit in a number is called ______.",
        optionA: "MSD",
        optionB: "LSD",
        optionC: "HSD",
        correctAnswer: "LSD",
      }),
      shuffleOptions({
        question: "Binary arithmetic uses only ______ two symbols.",
        optionA: "3",
        optionB: "2",
        optionC: "4",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The number to which another is added is called ______.",
        optionA: "Augend",
        optionB: "Addend",
        optionC: "Multiplier",
        correctAnswer: "Augend",
      }),
      shuffleOptions({
        question: "The hexadecimal value A represents decimal ______.",
        optionA: "9",
        optionB: "10",
        optionC: "11",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "A group of 4 bits is called a ______.",
        optionA: "Byte",
        optionB: "Nibble",
        optionC: "Word",
        correctAnswer: "Nibble",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Binary system uses base 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The octal number system is based on base 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hexadecimal numbers include letters A to F.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 byte = 16 bits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In binary subtraction, 0 – 1 requires a borrow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The decimal number system is used by all human beings from ancient times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In binary multiplication, 1 × 1 = 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Octal means eight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hexadecimal numbers are used as a shorthand for binary numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The leftmost digit of a number is called LSD.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
