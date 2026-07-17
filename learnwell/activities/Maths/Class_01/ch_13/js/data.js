export const chapter = "Chapter - 13: Time";
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
        question: "What tells us the time of the day?",
        optionA: "Calendar",
        optionB: "Clock",
        optionC: "Scale",
        correctAnswer: "Clock",
      }),
      shuffleOptions({
        question: "Which hand of the clock is shorter?",
        optionA: "Minute hand",
        optionB: "Hour hand",
        optionC: "Second hand",
        correctAnswer: "Hour hand",
      }),
      shuffleOptions({
        question: "How many numbers are there on the face of a clock?",
        optionA: "10",
        optionB: "12",
        optionC: "15",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "Which day comes after Thursday?",
        optionA: "Friday",
        optionB: "Wednesday",
        optionC: "Saturday",
        correctAnswer: "Friday",
      }),
      shuffleOptions({
        question: "Which month comes after September?",
        optionA: "August",
        optionB: "October",
        optionC: "November",
        correctAnswer: "October",
      }),
      shuffleOptions({
        question: "What do we use to separate hours and minutes while writing time?",
        optionA: "Colon ( : )",
        optionB: "Comma",
        optionC: "Dash",
        correctAnswer: "Colon ( : )",
      }),
      shuffleOptions({
        question: "Which day is the first day of the week?",
        optionA: "Sunday",
        optionB: "Monday",
        optionC: "Saturday",
        correctAnswer: "Sunday",
      }),
      shuffleOptions({
        question: "When both hands of the clock are at 12, what is the time?",
        optionA: "6 o’clock",
        optionB: "12 o’clock",
        optionC: "3 o’clock",
        correctAnswer: "12 o’clock",
      }),
      shuffleOptions({
        question: "How many days make one week?",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Which month has 29 days in a leap year?",
        optionA: "February",
        optionB: "January",
        optionC: "March",
        correctAnswer: "February",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "When there is sunlight, it is ______.",
        optionA: "night",
        optionB: "day",
        optionC: "evening",
        correctAnswer: "day",
      }),
      shuffleOptions({
        question: "The long hand on the clock is the ______ hand.",
        optionA: "hour",
        optionB: "minute",
        optionC: "second",
        correctAnswer: "minute",
      }),
      shuffleOptions({
        question: "There are ______ days in a week.",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "A year has ______ months.",
        optionA: "10",
        optionB: "12",
        optionC: "11",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "The month after November is ______.",
        optionA: "December",
        optionB: "October",
        optionC: "August",
        correctAnswer: "December",
      }),
      shuffleOptions({
        question: "The short hand of the clock shows the ______.",
        optionA: "minutes",
        optionB: "hours",
        optionC: "seconds",
        correctAnswer: "hours",
      }),
      shuffleOptions({
        question: "Saturday comes just after ______.",
        optionA: "Sunday",
        optionB: "Friday",
        optionC: "Monday",
        correctAnswer: "Friday",
      }),
      shuffleOptions({
        question: "The month before March is ______.",
        optionA: "February",
        optionB: "April",
        optionC: "January",
        correctAnswer: "February",
      }),
      shuffleOptions({
        question: "When it is dark, it is ______.",
        optionA: "day",
        optionB: "night",
        optionC: "morning",
        correctAnswer: "night",
      }),
      shuffleOptions({
        question: "The ______ hand moves faster on a clock.",
        optionA: "minute",
        optionB: "hour",
        optionC: "red",
        correctAnswer: "minute",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The clock shows us the time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The minute hand is shorter than the hour hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are twelve numbers on a clock face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sunday is the last day of the week.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A week has seven days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "February always has 30 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The month after June is July.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A leap year has 366 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When there is sunlight, it is night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hour hand shows hours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
