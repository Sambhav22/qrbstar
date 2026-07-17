export const chapter = "Chapter - 1: Knowing Our Numbers";
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
        question: "Which period comes just after the thousands period in the Indian System of Numeration?",
        optionA: "Lakhs",
        optionB: "Millions",
        optionC: "Crores",
        correctAnswer: "Lakhs",
      }),
      shuffleOptions({
        question: "What is the smallest 7-digit number?",
        optionA: "1,00,000",
        optionB: "20,000",
        optionC: "10,00,000",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "Which digit has the highest place value in the number 8,76,453?",
        optionA: "8",
        optionB: "7",
        optionC: "5",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "What is the difference between face value and place value of the digit 9 in 9,45,782?",
        optionA: "9",
        optionB: "9,00,000 – 9 = 8,99,991",
        optionC: "900",
        correctAnswer: "9,00,000 – 9 = 8,99,991",
      }),
      shuffleOptions({
        question: "What is the Roman numeral for 160?",
        optionA: "CLX",
        optionB: "CXL",
        optionC: "LXI",
        correctAnswer: "CLX",
      }),
      shuffleOptions({
        question: "Which system places commas after every three digits from the right?",
        optionA: "Indian System",
        optionB: "International System",
        optionC: "Both",
        correctAnswer: "International System",
      }),
      shuffleOptions({
        question: "Which of the following is the expanded form of 40305?",
        optionA: "40000 + 300 + 5",
        optionB: "40000 + 300 + 50",
        correctAnswer: "40000 + 300 + 5",
      }),
      shuffleOptions({
        question: "How many millilitres are present in 2 litres?",
        optionA: "200 ml",
        optionB: "2000 ml",
        optionC: "20,000 ml",
        correctAnswer: "2000 ml",
      }),
      shuffleOptions({
        question: "Which Roman numeral equals 90?",
        optionA: "XC",
        optionB: "VL",
        optionC: "LX",
        correctAnswer: "XC",
      }),
      shuffleOptions({
        question: "Which number is the predecessor of 3,00,000?",
        optionA: "2,99,999",
        optionB: "2,90,000",
        optionC: "3,00,001",
        correctAnswer: "2,99,999",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The face value of any digit is simply the ______ it represents.",
        optionA: "position",
        optionB: "digit itself",
        optionC: "value multiplied",
        correctAnswer: "digit itself",
      }),
      shuffleOptions({
        question: "In the number 45,32,678, the digit 3 is at the ______ place.",
        optionA: "ten-thousands",
        optionB: "thousands",
        optionC: "lakhs",
        correctAnswer: "ten-thousands",
      }),
      shuffleOptions({
        question: "One kilometre equals ______ centimetres.",
        optionA: "10,000",
        optionB: "1,00,000",
        optionC: "1,000",
        correctAnswer: "1,00,000",
      }),
      shuffleOptions({
        question: "The smallest 6-digit number is ______.",
        optionA: "1,00,000",
        optionB: "1,00,001",
        optionC: "2,000",
        correctAnswer: "1,00,000",
      }),
      shuffleOptions({
        question: "The Roman numeral ______ represents 400.",
        optionA: "CD",
        optionB: "CM",
        optionC: "XD",
        correctAnswer: "CD",
      }),
      shuffleOptions({
        question: "In the International System, the period after millions is ______.",
        optionA: "thousands",
        optionB: "billions",
        optionC: "lakhs",
        correctAnswer: "billions",
      }),
      shuffleOptions({
        question: "The place value of 7 in 7,25,439 is ______.",
        optionA: "7,00,000",
        optionB: "70,000",
        optionC: "7,000",
        correctAnswer: "7,00,000",
      }),
      shuffleOptions({
        question: "1 kg is equal to ______ milligrams.",
        optionA: "1,000",
        optionB: "10,000",
        optionC: "10,00,000",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "The expanded form of 50,210 includes the term ______.",
        optionA: "200",
        optionB: "10",
        optionC: "200 + 10",
        correctAnswer: "200 + 10",
      }),
      shuffleOptions({
        question: "When rounding 6,748 to the nearest hundred, the result is ______.",
        optionA: "6,700",
        optionB: "6,800",
        optionC: "7,000",
        correctAnswer: "6,800",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In the Indian System of Numeration, the first comma is placed after three digits from the right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol V can be repeated in Roman numerals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The face value of 0 is always 0, no matter where it appears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 metre equals 1000 millimetres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number with more digits is always greater than a number with fewer digits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In Roman numerals, I can be subtracted from V and X only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10,00,000 is one lakh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rounding 3,499 to the nearest thousand gives 3,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the International System, commas appear after every two digits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2 litres = 20,000 millilitres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
