export const chapter = "Chapter - 12: Time";
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
        question: "How many small divisions are there between two numbers on a clock?",
        optionA: "3",
        optionB: "5",
        optionC: "10",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which hand of the clock moves the fastest?",
        optionA: "Hour hand",
        optionB: "Minute hand",
        optionC: "Second hand",
        correctAnswer: "Second hand",
      }),
      shuffleOptions({
        question: "Which hand shows the hours?",
        optionA: "Short hand",
        optionB: "Long hand",
        optionC: "Longest hand",
        correctAnswer: "Short hand",
      }),
      shuffleOptions({
        question: "How long does the second hand take to complete one full round?",
        optionA: "1 minute",
        optionB: "5 minutes",
        optionC: "12 minutes",
        correctAnswer: "1 minute",
      }),
      shuffleOptions({
        question: "Which is the first day of the week?",
        optionA: "Monday",
        optionB: "Sunday",
        optionC: "Wednesday",
        correctAnswer: "Sunday",
      }),
      shuffleOptions({
        question: "How many months are there in a year?",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "February has 29 days in a ______.",
        optionA: "long year",
        optionB: "winter year",
        optionC: "leap year",
        correctAnswer: "leap year",
      }),
      shuffleOptions({
        question: "Grishma season is also called the ______ season.",
        optionA: "rainy",
        optionB: "summer",
        optionC: "winter",
        correctAnswer: "summer",
      }),
      shuffleOptions({
        question: "The minute hand takes how many minutes to move from one number to the next?",
        optionA: "1 minute",
        optionB: "5 minutes",
        optionC: "10 minutes",
        correctAnswer: "5 minutes",
      }),
      shuffleOptions({
        question: "Which season comes after Varsha?",
        optionA: "Sharada",
        optionB: "Shishira",
        optionC: "Vasanta",
        correctAnswer: "Sharada",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The face of a clock is called the ______.",
        optionA: "dial",
        optionB: "table",
        optionC: "screen",
        correctAnswer: "dial",
      }),
      shuffleOptions({
        question: "The longest hand of the clock is the ______.",
        optionA: "minute hand",
        optionB: "second hand",
        optionC: "hour hand",
        correctAnswer: "second hand",
      }),
      shuffleOptions({
        question: "One day has ______ hours.",
        optionA: "12",
        optionB: "18",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "The month after April is ______.",
        optionA: "May",
        optionB: "June",
        optionC: "February",
        correctAnswer: "May",
      }),
      shuffleOptions({
        question: "The seventh day of the week is ______.",
        optionA: "Friday",
        optionB: "Saturday",
        optionC: "Sunday",
        correctAnswer: "Saturday",
      }),
      shuffleOptions({
        question: "The season with rain is ______.",
        optionA: "Varsha",
        optionB: "Shishira",
        optionC: "Hemanta",
        correctAnswer: "Varsha",
      }),
      shuffleOptions({
        question: "The month before November is ______.",
        optionA: "October",
        optionB: "July",
        optionC: "March",
        correctAnswer: "October",
      }),
      shuffleOptions({
        question: "Flowers bloom in the ______ season.",
        optionA: "Grishma",
        optionB: "Vasanta",
        optionC: "Hemanta",
        correctAnswer: "Vasanta",
      }),
      shuffleOptions({
        question: "The minute hand shows ______.",
        optionA: "hours",
        optionB: "minutes",
        optionC: "seconds",
        correctAnswer: "minutes",
      }),
      shuffleOptions({
        question: "The shortest month of the year is ______.",
        optionA: "August",
        optionB: "February",
        optionC: "May",
        correctAnswer: "February",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The hour hand is shorter than the minute hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The second hand moves slower than the minute hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sunday is the first day of the week.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A year has 12 months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "February always has 31 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Varsha is the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are 60 minutes in one hour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The minute hand takes one hour to complete one full round.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sharada comes before Grishma.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The season Shishira is a cold winter season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
