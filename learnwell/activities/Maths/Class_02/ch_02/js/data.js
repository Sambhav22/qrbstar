export const chapter = "Chapter - 2: 3-Digit Numbers";
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
        question: "Which is the smallest three-digit number?",
        optionA: "101",
        optionB: "100",
        optionC: "110",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Which is the largest three-digit number?",
        optionA: "900",
        optionB: "999",
        optionC: "1000",
        correctAnswer: "999",
      }),
      shuffleOptions({
        question: "What is the place value of 4 in 241?",
        optionA: "4",
        optionB: "40",
        optionC: "400",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "What is the face value of 3 in 385?",
        optionA: "3",
        optionB: "30",
        optionC: "300",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "804 in expanded form is ____.",
        optionA: "800 + 4",
        optionB: "8 + 4",
        optionC: "80 + 4",
        correctAnswer: "800 + 4",
      }),
      shuffleOptions({
        question: "What comes after 599?",
        optionA: "598",
        optionB: "600",
        optionC: "601",
        correctAnswer: "600",
      }),
      shuffleOptions({
        question: "Compare 475 __ 457. Which sign is correct?",
        optionA: ">",
        optionB: "<",
        optionC: "=",
        correctAnswer: ">",
      }),
      shuffleOptions({
        question: "Which number comes before 700?",
        optionA: "699",
        optionB: "701",
        optionC: "698",
        correctAnswer: "699",
      }),
      shuffleOptions({
        question: "The place value of 3 in 934 is ____.",
        optionA: "30",
        optionB: "300",
        optionC: "3",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "10 hundreds make ____.",
        optionA: "10",
        optionB: "100",
        optionC: "1000",
        correctAnswer: "1000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Place value of 2 in 728 is ____.",
        optionA: "200",
        optionB: "2",
        optionC: "20",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "In 100, 1 is at the _____ place.",
        optionA: "Ones",
        optionB: "Hundreds",
        optionC: "Tens",
        correctAnswer: "Hundreds",
      }),
      shuffleOptions({
        question: "Face value of 6 in 562 is ____.",
        optionA: "6",
        optionB: "60",
        optionC: "600",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "999 + 1 = ____.",
        optionA: "100",
        optionB: "999",
        optionC: "1000",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "604 = ____ + ____ + ____.",
        optionA: "600 + 0 + 4",
        optionB: "60 + 0 + 4",
        optionC: "600 + 4 + 0",
        correctAnswer: "600 + 0 + 4",
      }),
      shuffleOptions({
        question: "In 375, 7 is at the _____ place.",
        optionA: "Hundreds",
        optionB: "Tens",
        optionC: "Ones",
        correctAnswer: "Tens",
      }),
      shuffleOptions({
        question: "The number before 500 is ____.",
        optionA: "501",
        optionB: "499",
        optionC: "498",
        correctAnswer: "499",
      }),
      shuffleOptions({
        question: "Short form of 200 + 70 + 8 is ____.",
        optionA: "278",
        optionB: "728",
        optionC: "287",
        correctAnswer: "278",
      }),
      shuffleOptions({
        question: "The place value of 4 in 489 is ____.",
        optionA: "4",
        optionB: "400",
        optionC: "40",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "Three hundred and two = ____.",
        optionA: "320",
        optionB: "302",
        optionC: "230",
        correctAnswer: "302",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "100 is the smallest three-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "999 is the largest three-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The place value of 0 is always 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Face value changes with place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "786 = 700 + 80 + 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "128 is less than 47.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "163 is greater than 135.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "172 is less than 179.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number with more digits is greater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1000 is a four-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
