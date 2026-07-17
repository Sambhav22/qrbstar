export const chapter = "Chapter - 14: Speed, Distance and Time";
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
        question: "A car travels 132 km in 3 hours. What is its speed?",
        optionA: "40 km/h",
        optionB: "44 km/h",
        optionC: "50 km/h",
        correctAnswer: "44 km/h",
      }),
      shuffleOptions({
        question: "How many seconds are there in 2 hours?",
        optionA: "3600 sec",
        optionB: "7200 sec",
        optionC: "1800 sec",
        correctAnswer: "7200 sec",
      }),
      shuffleOptions({
        question: "A runner covers 80 m in 10 seconds. What is his speed?",
        optionA: "6 m/sec",
        optionB: "12 m/sec",
        optionC: "8 m/sec",
        correctAnswer: "8 m/sec",
      }),
      shuffleOptions({
        question: "What is the speed of an object moving at 5 m/sec in km/h?",
        optionA: "12 km/h",
        optionB: "18 km/h",
        optionC: "20 km/h",
        correctAnswer: "18 km/h",
      }),
      shuffleOptions({
        question: "A jeep covers 180 km in 4 hours. What is its speed?",
        optionA: "40 km/h",
        optionB: "45 km/h",
        optionC: "50 km/h",
        correctAnswer: "45 km/h",
      }),
      shuffleOptions({
        question: "What is obtained when total distance is divided by total time?",
        optionA: "Highest speed",
        optionB: "Average speed",
        optionC: "Instant speed",
        correctAnswer: "Average speed",
      }),
      shuffleOptions({
        question: "A bird runs at a speed of 20 m/sec. How far will it run in 5 seconds?",
        optionA: "50 m",
        optionB: "100 m",
        correctAnswer: "100 m",
      }),
      shuffleOptions({
        question: "How many minutes are there in 72 seconds?",
        optionA: "1.2 minutes",
        optionB: "0.5 minutes",
        optionC: "2.2 minutes",
        correctAnswer: "1.2 minutes",
      }),
      shuffleOptions({
        question: "What does speed depend on?",
        optionA: "Only time",
        optionB: "Both distance and time",
        optionC: "Neither",
        correctAnswer: "Both distance and time",
      }),
      shuffleOptions({
        question: "A cyclist travels 24 km in 2 hours. What is his speed?",
        optionA: "10 km/h",
        optionB: "12 km/h",
        optionC: "20 km/h",
        correctAnswer: "12 km/h",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "3000 m is equal to ______.",
        optionA: "3 km",
        optionB: "30 km",
        optionC: "0.3 km",
        correctAnswer: "3 km",
      }),
      shuffleOptions({
        question: "Speed × Time = ______.",
        optionA: "Distance",
        optionB: "Minutes",
        optionC: "Seconds",
        correctAnswer: "Distance",
      }),
      shuffleOptions({
        question: "If speed is 20 km/h, in 3 hours the object travels ______ km.",
        optionA: "40",
        optionB: "60",
        optionC: "100",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "1 minute is equal to ______ seconds.",
        optionA: "30",
        optionB: "60",
        optionC: "90",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "14 m/sec is equal to ______ km/h.",
        optionA: "30",
        optionB: "50.4",
        optionC: "70",
        correctAnswer: "50.4",
      }),
      shuffleOptions({
        question: "Speed tells us how ______ something moves.",
        optionA: "fast",
        optionB: "heavy",
        optionC: "long",
        correctAnswer: "fast",
      }),
      shuffleOptions({
        question: "Time can be found using the formula: time = distance ÷ ______.",
        optionA: "speed",
        optionB: "hours",
        optionC: "length",
        correctAnswer: "speed",
      }),
      shuffleOptions({
        question: "A person cycles 24 km in 2 hours. His speed is ______ km/h.",
        optionA: "10",
        optionB: "12",
        optionC: "20",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "If time decreases for the same distance, speed ______.",
        optionA: "increases",
        optionB: "decreases",
        optionC: "remains zero",
        correctAnswer: "increases",
      }),
      shuffleOptions({
        question: "Half an hour is equal to ______ minutes.",
        optionA: "10",
        optionB: "20",
        optionC: "30",
        correctAnswer: "30",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A higher speed means more distance covered in the same time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2 m/sec is equal to 7.2 km/h.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If distance is zero, speed must also be zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Time = Distance × Speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Average speed is always greater than the highest speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "m/sec is a smaller unit of speed compared to km/h.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "50 km/h equals 5000 m/min.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Faster objects take less time to cover the same distance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speed can be zero even when time is not zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The chapter explains how to convert km/h into m/sec and m/sec into km/h.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
