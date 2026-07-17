export const chapter = "Chapter - 11: Time";
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
        question: "Which hand of the clock moves the fastest?",
        optionA: "Hour hand",
        optionB: "Minute hand",
        optionC: "Second hand",
        correctAnswer: "Second hand",
      }),
      shuffleOptions({
        question: "How many minutes make one hour?",
        optionA: "30",
        optionB: "60",
        optionC: "90",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "What is the time when it is half past 4?",
        optionA: "4:15",
        optionB: "4:30",
        optionC: "4:45",
        correctAnswer: "4:30",
      }),
      shuffleOptions({
        question: "How many days are there in a week?",
        optionA: "5",
        optionB: "7",
        optionC: "10",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "What is 3:15 called?",
        optionA: "Quarter past 3",
        optionB: "Quarter to 3",
        optionC: "Half past 3",
        correctAnswer: "Quarter past 3",
      }),
      shuffleOptions({
        question: "How many hours are there in 2 days?",
        optionA: "24 hours",
        optionB: "36 hours",
        optionC: "48 hours",
        correctAnswer: "48 hours",
      }),
      shuffleOptions({
        question: "The minute hand moves ______ minutes from one number to the next.",
        optionA: "2",
        optionB: "5",
        optionC: "10",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "How many days does the month of August have?",
        optionA: "28",
        optionB: "30",
        optionC: "31",
        correctAnswer: "31",
      }),
      shuffleOptions({
        question: "What is 7:45 called?",
        optionA: "Quarter to 8",
        optionB: "Quarter past 7",
        optionC: "Half past 7",
        correctAnswer: "Quarter to 8",
      }),
      shuffleOptions({
        question: "Which month comes after March?",
        optionA: "January",
        optionB: "April",
        optionC: "May",
        correctAnswer: "April",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "60 seconds make ______.",
        optionA: "half an hour",
        optionB: "one minute",
        optionC: "one day",
        correctAnswer: "one minute",
      }),
      shuffleOptions({
        question: "30 minutes is equal to ______.",
        optionA: "half an hour",
        optionB: "one hour",
        optionC: "one week",
        correctAnswer: "half an hour",
      }),
      shuffleOptions({
        question: "The hour hand completes one round in ______.",
        optionA: "24 hours",
        optionB: "6 hours",
        optionC: "12 hours",
        correctAnswer: "12 hours",
      }),
      shuffleOptions({
        question: "February has 28 days in a ______.",
        optionA: "normal year",
        optionB: "leap year",
        optionC: "century",
        correctAnswer: "normal year",
      }),
      shuffleOptions({
        question: "The minute hand takes ______ to complete one full circle.",
        optionA: "30 minutes",
        optionB: "60 minutes",
        optionC: "90 minutes",
        correctAnswer: "60 minutes",
      }),
      shuffleOptions({
        question: "1 day is equal to ______ hours.",
        optionA: "20",
        optionB: "22",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "A leap year has ______ days.",
        optionA: "366",
        optionB: "365",
        optionC: "360",
        correctAnswer: "366",
      }),
      shuffleOptions({
        question: "Half past 9 is written as ______.",
        optionA: "9:15",
        optionB: "9:30",
        optionC: "9:45",
        correctAnswer: "9:30",
      }),
      shuffleOptions({
        question: "7 days make one ______.",
        optionA: "month",
        optionB: "week",
        optionC: "year",
        correctAnswer: "week",
      }),
      shuffleOptions({
        question: "365 days make one ______.",
        optionA: "month",
        optionB: "week",
        optionC: "year",
        correctAnswer: "year",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The hour hand moves faster than the minute hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 hour = 60 minutes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "February always has 29 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Quarter past 8 means 8:15.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6:30 is called half past 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are 52 weeks in a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 week = 10 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The minute hand moves through 5 minutes between two numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "24 hours make 1 day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A year always has 366 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
