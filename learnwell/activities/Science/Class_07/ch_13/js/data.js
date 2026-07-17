export const chapter = "Chapter - 13: Motion and Time";
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
        question: "What is the S.I. unit of speed?",
        optionA: "kilometre per hour",
        optionB: "metre per second",
        optionC: "metre per minute",
        correctAnswer: "metre per second",
      }),
      shuffleOptions({
        question: "Which instrument in a vehicle shows its speed?",
        optionA: "Odometer",
        optionB: "Speedometer",
        optionC: "Stopwatch",
        correctAnswer: "Speedometer",
      }),
      shuffleOptions({
        question: "Which instrument in a vehicle measures the distance travelled?",
        optionA: "Odometer",
        optionB: "Barometer",
        optionC: "Speedometer",
        correctAnswer: "Odometer",
      }),
      shuffleOptions({
        question: "What type of motion does an object have if it covers equal distances in equal intervals of time?",
        optionA: "Non-uniform motion",
        optionB: "Uniform motion",
        optionC: "Circular motion",
        correctAnswer: "Uniform motion",
      }),
      shuffleOptions({
        question: "What type of graph is obtained when an object moves with uniform speed?",
        optionA: "Curved line",
        optionB: "Zig-zag line",
        optionC: "Straight line",
        correctAnswer: "Straight line",
      }),
      shuffleOptions({
        question: "Which animal is the fastest land animal on Earth?",
        optionA: "Tiger",
        optionB: "Cheetah",
        optionC: "Horse",
        correctAnswer: "Cheetah",
      }),
      shuffleOptions({
        question: "Which device was used in ancient times to measure time using the Sun’s shadow?",
        optionA: "Candle clock",
        optionB: "Sundial",
        optionC: "Hourglass",
        correctAnswer: "Sundial",
      }),
      shuffleOptions({
        question: "What is the time taken by a simple pendulum to complete one oscillation called?",
        optionA: "Amplitude",
        optionB: "Time period",
        optionC: "Frequency",
        correctAnswer: "Time period",
      }),
      shuffleOptions({
        question: "Which factor affects the time period of a simple pendulum?",
        optionA: "Length of the string",
        optionB: "Mass of the bob",
        optionC: "Angle of swing",
        correctAnswer: "Length of the string",
      }),
      shuffleOptions({
        question: "Who first discovered that the time period of a pendulum depends only on its length?",
        optionA: "Isaac Newton",
        optionB: "Galileo Galilei",
        optionC: "Albert Einstein",
        correctAnswer: "Galileo Galilei",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A body is said to be in ______ when it changes its position with time.",
        optionA: "Motion",
        optionB: "Rest",
        optionC: "Vibration",
        correctAnswer: "Motion",
      }),
      shuffleOptions({
        question: "The distance travelled by an object in unit time is called its ______.",
        optionA: "Velocity",
        optionB: "Speed",
        optionC: "Acceleration",
        correctAnswer: "Speed",
      }),
      shuffleOptions({
        question: "The motion of a car covering unequal distances in equal intervals of time is called ______ motion.",
        optionA: "Uniform",
        optionB: "Non-uniform",
        optionC: "Circular",
        correctAnswer: "Non-uniform",
      }),
      shuffleOptions({
        question: "In a distance–time graph, distance is taken along the ______ axis.",
        optionA: "X-axis",
        optionB: "Y-axis",
        optionC: "Z-axis",
        correctAnswer: "Y-axis",
      }),
      shuffleOptions({
        question: "The instrument used to measure short time intervals accurately is a ______.",
        optionA: "Clock",
        optionB: "Stopwatch",
        optionC: "Pendulum",
        correctAnswer: "Stopwatch",
      }),
      shuffleOptions({
        question: "The largest sundial in the world is located at ______.",
        optionA: "Delhi",
        optionB: "Jaipur",
        optionC: "Varanasi",
        correctAnswer: "Jaipur",
      }),
      shuffleOptions({
        question: "The to-and-fro motion of a pendulum is called ______ motion.",
        optionA: "Periodic",
        optionB: "Random",
        optionC: "Non-periodic",
        correctAnswer: "Periodic",
      }),
      shuffleOptions({
        question: "The S.I. unit of time is ______.",
        optionA: "Hour",
        optionB: "Minute",
        optionC: "Second",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "The maximum displacement of a pendulum bob from its mean position is called its ______.",
        optionA: "Frequency",
        optionB: "Amplitude",
        optionC: "Velocity",
        correctAnswer: "Amplitude",
      }),
      shuffleOptions({
        question: "The number of seconds in one day is ______.",
        optionA: "86,400",
        optionB: "84,600",
        optionC: "60,000",
        correctAnswer: "86,400",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "An object is said to be at rest if it changes its position with time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Speed is measured in kilometre per second.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A straight line distance–time graph shows uniform motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Candle clock and hourglass were ancient time measuring devices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sundial works even during cloudy weather.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Time period of a pendulum depends on the mass of its bob.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Galileo discovered the principle of the pendulum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "One mean solar day is equal to 86,400 seconds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "X-axis represents distance and Y-axis represents time in a distance-time graph.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Motion that repeats itself at regular intervals is called periodic motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
