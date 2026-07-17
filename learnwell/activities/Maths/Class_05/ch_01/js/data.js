export const chapter = "Chapter - 1: Large Numbers";
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
        question: "Which is the smallest 8-digit number?",
        optionA: "1,00,00,000",
        optionB: "10,00,000",
        optionC: "99,99,999",
        correctAnswer: "1,00,00,000",
      }),
      shuffleOptions({
        question: "In the number 6,82,40,319, the digit 8 is at which place?",
        optionA: "Ten lakhs place",
        optionB: "Lakhs place",
        optionC: "Crores place",
        correctAnswer: "Crores place",
      }),
      shuffleOptions({
        question: "Which number comes just before 75,00,000?",
        optionA: "74,99,999",
        optionB: "75,00,001",
        optionC: "75,10,000",
        correctAnswer: "74,99,999",
      }),
      shuffleOptions({
        question: "How many zeros does one crore have?",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "In the International system, 1,000,000 is read as:",
        optionA: "One million",
        optionB: "Ten million",
        optionC: "One hundred thousand",
        correctAnswer: "One million",
      }),
      shuffleOptions({
        question: "The place value of 7 in 9,70,45,120 is:",
        optionA: "7,00,000",
        optionB: "70,00,000",
        optionC: "7,00,00,000",
        correctAnswer: "7,00,00,000",
      }),
      shuffleOptions({
        question: "Which is the largest 7-digit number?",
        optionA: "9,99,999",
        optionB: "8,99,999",
        optionC: "5,99,999",
        correctAnswer: "9,99,999",
      }),
      shuffleOptions({
        question: "The smallest 9-digit number is:",
        optionA: "1,00,00,001",
        optionB: "10,00,00,000",
        optionC: "1,00,00,000",
        correctAnswer: "1,00,00,000",
      }),
      shuffleOptions({
        question: "In 5,40,18,200, the digit 2 is at the:",
        optionA: "Hundreds place",
        optionB: "Tens place",
        optionC: "Thousands place?",
        correctAnswer: "Hundreds place",
      }),
      shuffleOptions({
        question: "Which period comes after lakhs in the Indian system?",
        optionA: "Thousands",
        optionB: "Ones",
        optionC: "Crores",
        correctAnswer: "Crores",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number 9,00,00,000 has ______ zeros.",
        optionA: "6",
        optionB: "7",
        optionC: "8",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "In 4,31,27,089 the digit 4 is in the ______ place.",
        optionA: "Crores place",
        optionB: "Ten lakhs place",
        optionC: "Lakhs place?",
        correctAnswer: "Crores place",
      }),
      shuffleOptions({
        question: "The successor of 12,50,00,000 is ______.",
        optionA: "12,49,99,999",
        optionB: "12,50,00,001",
        optionC: "13,00,00,000",
        correctAnswer: "12,50,00,001",
      }),
      shuffleOptions({
        question: "In the International system, commas are placed after every ______ digits.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "50,00,000 is read as ______ lakh.",
        optionA: "Fifty",
        optionB: "Five",
        optionC: "Five hundred",
        correctAnswer: "Fifty",
      }),
      shuffleOptions({
        question: "The digit at the hundreds place in 81,54,209 is ______.",
        optionA: "2",
        optionB: "0",
        optionC: "9",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The smallest 7-digit number is ______.",
        optionA: "1,00,000",
        optionB: "10,00,000",
        optionC: "9,99,999",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "In 9,04,10,500 the digit 0 at the end has a place value of ______.",
        optionA: "0",
        optionB: "10",
        optionC: "100",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "1 million = ______ lakhs.",
        optionA: "1",
        optionB: "10",
        optionC: "100",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The predecessor of 3,00,00,001 is ______.",
        optionA: "3,00,00,000",
        optionB: "2,99,99,999",
        optionC: "2,99,00,001",
        correctAnswer: "3,00,00,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number 1,00,00,000 is read as one crore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the number 8,54,20,310 the digit 8 is in the lakhs place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The face value of a digit depends on its position in the number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "10 million equals one crore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The predecessor of any number is obtained by adding 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A 7-digit number always begins from the lakhs period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the International system, 100,000 is read as one hundred thousand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9,20,50,600 > 9,50,20,600.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0 has the same place value in every position.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The expanded form of 5,00,20,010 includes the term 20,000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
