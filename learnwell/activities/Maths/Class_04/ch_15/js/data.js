export const chapter = "Chapter - 15: Patterns";
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
        question: "What comes next in the pattern: 4, 14, 24, 34, …?",
        optionA: "38",
        optionB: "44",
        optionC: "54",
        correctAnswer: "44",
      }),
      shuffleOptions({
        question: "Which number represents the code for the letter H?",
        optionA: "7",
        optionB: "8",
        optionC: "9",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "In a halving sequence, what comes after 32?",
        optionA: "12",
        optionB: "16",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "What is the result of 35 × 35, using the multiplication pattern?",
        optionA: "1025",
        optionB: "1225",
        optionC: "3525",
        correctAnswer: "1225",
      }),
      shuffleOptions({
        question: "What letter corresponds to the number 20 in the number code?",
        optionA: "R",
        optionB: "S",
        optionC: "T",
        correctAnswer: "T",
      }),
      shuffleOptions({
        question: "What comes next: 64, 54, 44, 34, …?",
        optionA: "24",
        optionB: "14",
        optionC: "30",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "If a figure is rotated 90° clockwise, which direction does it face?",
        optionA: "Left",
        optionB: "Right",
        optionC: "Up",
        correctAnswer: "Right",
      }),
      shuffleOptions({
        question: "What comes next: 2, 6, 10, 14, …?",
        optionA: "18",
        optionB: "20",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "What is the code for the word MEET?",
        optionA: "13 5 5 20",
        optionB: "14 5 5 21",
        optionC: "13 6 6 20",
        correctAnswer: "13 5 5 20",
      }),
      shuffleOptions({
        question: "What is the product of 1111 × 1111 in the pattern?",
        optionA: "12321",
        optionB: "1234321",
        optionC: "1234331",
        correctAnswer: "1234321",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number after 320 in the halving pattern is ______.",
        optionA: "180",
        optionB: "160",
        optionC: "80",
        correctAnswer: "160",
      }),
      shuffleOptions({
        question: "The code for the letter O is ______.",
        optionA: "14",
        optionB: "15",
        optionC: "16",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "In a number tower, 9 + 6 = ______.",
        optionA: "14",
        optionB: "15",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "The next number in the pattern 10, 20, 30, 40 is ______.",
        optionA: "60",
        optionB: "70",
        optionC: "50",
        correctAnswer: "50",
      }),
      shuffleOptions({
        question: "The product 15 × 15 ends with ______.",
        optionA: "35",
        optionB: "15",
        optionC: "25",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "The reverse alphabet code of A is ______.",
        optionA: "Z",
        optionB: "Y",
        optionC: "X",
        correctAnswer: "Z",
      }),
      shuffleOptions({
        question: "In the sequence 111 × 111 = ______, the middle digit is the sum of digits.",
        optionA: "13231",
        optionB: "12321",
        optionC: "11231",
        correctAnswer: "12321",
      }),
      shuffleOptions({
        question: "When a shape is rotated 180°, it appears ______.",
        optionA: "Upside down",
        optionB: "Same",
        optionC: "Tilted",
        correctAnswer: "Upside down",
      }),
      shuffleOptions({
        question: "The next term in the pattern 160, 80, 40, ______ is:",
        optionA: "20",
        optionB: "10",
        optionC: "30",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "The code for G is ______.",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "7",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The series 512 → 256 → 128 → 64 follows a halving pattern.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In an addition tower, the top number is obtained by multiplying the two numbers below.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "25 × 25 = 625 according to the multiplication pattern.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 90° anticlockwise rotation moves the figure to the left.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The code for Z is 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The series 96, 86, 76, 66 decreases by 10 each step.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The product 111 × 111 is 12321.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The reverse alphabet code turns B → Y.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The pattern 1, 11, 111 uses repeated digits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A full 360° rotation brings a shape back to its original position.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
