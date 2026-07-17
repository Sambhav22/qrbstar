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
        question: "How many small divisions are there on a clock face?",
        optionA: "24",
        optionB: "12",
        optionC: "60",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "When the minute hand is at 3, the time is read as:",
        optionA: "Quarter past the hour",
        optionB: "Quarter to the hour",
        optionC: "Half past the hour",
        correctAnswer: "Quarter past the hour",
      }),
      shuffleOptions({
        question: "The hour hand completes how many rounds in one day?",
        optionA: "1",
        optionB: "2",
        optionC: "24",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The minute hand takes how long to complete one round of the clock?",
        optionA: "1 minute",
        optionB: "1 hour",
        optionC: "12 hours",
        correctAnswer: "1 hour",
      }),
      shuffleOptions({
        question: "The time between midnight and noon is called:",
        optionA: "p.m.",
        optionB: "a.m.",
        optionC: "night time",
        correctAnswer: "a.m.",
      }),
      shuffleOptions({
        question: "0910 hours in 12-hour clock format is:",
        optionA: "9:10 p.m.",
        optionB: "9:10 a.m.",
        optionC: "21:10",
        correctAnswer: "9:10 a.m.",
      }),
      shuffleOptions({
        question: "The second hand moves from one small division to the next in:",
        optionA: "1 second",
        optionB: "5 seconds",
        optionC: "10 seconds",
        correctAnswer: "1 second",
      }),
      shuffleOptions({
        question: "A leap year has how many days?",
        optionA: "365",
        optionB: "366",
        optionC: "360",
        correctAnswer: "366",
      }),
      shuffleOptions({
        question: "4:30 can be read as:",
        optionA: "Quarter past 4",
        optionB: "Half past 4",
        optionC: "Quarter to 5",
        correctAnswer: "Half past 4",
      }),
      shuffleOptions({
        question: "The longest hand on a clock is the:",
        optionA: "Hour hand",
        optionB: "Minute hand",
        optionC: "Second hand",
        correctAnswer: "Minute hand",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The time 7:45 can also be read as 15 minutes ______ 8.",
        optionA: "past",
        optionB: "to",
        optionC: "before",
        correctAnswer: "to",
      }),
      shuffleOptions({
        question: "February has ______ days in a leap year.",
        optionA: "28",
        optionB: "29",
        optionC: "31",
        correctAnswer: "29",
      }),
      shuffleOptions({
        question: "1 hour is equal to ______ minutes.",
        optionA: "60",
        optionB: "30",
        optionC: "100",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "24-hour clock time does not use ______.",
        optionA: "digits",
        optionB: "a.m./p.m.",
        optionC: "hours",
        correctAnswer: "a.m./p.m.",
      }),
      shuffleOptions({
        question: "8:15 is also called ______ past 8.",
        optionA: "half",
        optionB: "quarter",
        optionC: "ten minutes",
        correctAnswer: "quarter",
      }),
      shuffleOptions({
        question: "A day has ______ hours.",
        optionA: "10",
        optionB: "12",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "120 seconds = ______ minutes.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The hour hand is the ______ hand on the clock.",
        optionA: "shortest",
        optionB: "longest",
        optionC: "fastest",
        correctAnswer: "shortest",
      }),
      shuffleOptions({
        question: "Digital watches commonly use the ______ system.",
        optionA: "24-hour clock",
        optionB: "10-hour clock",
        optionC: "48-hour clock",
        correctAnswer: "24-hour clock",
      }),
      shuffleOptions({
        question: "4:50 p.m. in 24-hour clock format is ______ hours.",
        optionA: "1250",
        optionB: "1650",
        optionC: "0450",
        correctAnswer: "1650",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Quarter past 4 means the time is 4:45.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The second hand moves slower than the hour hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "12 noon is written with a.m. in time notation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1430 hours is equal to 2:30 p.m.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 minute equals 60 seconds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hour hand completes 24 rounds in a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Half past 9 means the time is 9:30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a leap year, February has 29 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2210 hours is equal to 10:10 p.m.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The minute hand is longer than the hour hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
