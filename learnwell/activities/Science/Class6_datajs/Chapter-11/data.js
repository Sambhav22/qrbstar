export const chapter = "Chapter - 11: Measurement and Motion";
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
        question: "What do we call the comparison of an unknown quantity with a known one?",
        optionA: "Mass",
        optionB: "Measurement",
        optionC: "Speed",
        correctAnswer: "Measurement",
      }),
      shuffleOptions({
        question: "Which scientist’s work explained the laws of motion?",
        optionA: "Galileo",
        optionB: "Sir Isaac Newton",
        optionC: "Albert Einstein",
        correctAnswer: "Sir Isaac Newton",
      }),
      shuffleOptions({
        question: "Which device is used to measure the distance travelled by a vehicle?",
        optionA: "Thermometer",
        optionB: "Odometer",
        optionC: "Barometer",
        correctAnswer: "Odometer",
      }),
      shuffleOptions({
        question: "What is the SI unit of length?",
        optionA: "Centimetre",
        optionB: "Metre",
        optionC: "Foot",
        correctAnswer: "Metre",
      }),
      shuffleOptions({
        question: "Which type of motion does a swing show?",
        optionA: "Circular",
        optionB: "Oscillatory",
        optionC: "Random",
        correctAnswer: "Oscillatory",
      }),
      shuffleOptions({
        question: "When is a body said to be at rest?",
        optionA: "When it changes position",
        optionB: "When it does not change position",
        optionC: "When it moves fast",
        correctAnswer: "When it does not change position",
      }),
      shuffleOptions({
        question: "Which material can be used to measure the length of a curved line?",
        optionA: "Paper",
        optionB: "Thread",
        optionC: "Glass",
        correctAnswer: "Thread",
      }),
      shuffleOptions({
        question: "Which motion is shown by a car taking a turn?",
        optionA: "Curvilinear",
        optionB: "Linear",
        optionC: "Random",
        correctAnswer: "Curvilinear",
      }),
      shuffleOptions({
        question: "Which motion is shown by the blades of a fan?",
        optionA: "Rotatory",
        optionB: "Oscillatory",
        optionC: "Rectilinear",
        correctAnswer: "Rotatory",
      }),
      shuffleOptions({
        question: "Which body-part length was used to define the earliest standard unit of length called the cubit?",
        optionA: "Hand",
        optionB: "Arm length",
        optionC: "Footstep",
        correctAnswer: "Arm length",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The known fixed quantity used for measurement is called a ______.",
        optionA: "unit",
        optionB: "device",
        optionC: "rule",
        correctAnswer: "unit",
      }),
      shuffleOptions({
        question: "The SI system of units was adopted in ______.",
        optionA: "1960",
        optionB: "1860",
        optionC: "1970",
        correctAnswer: "1960",
      }),
      shuffleOptions({
        question: "The length of a table is 2 ______.",
        optionA: "kilograms",
        optionB: "metres",
        optionC: "seconds",
        correctAnswer: "metres",
      }),
      shuffleOptions({
        question: "The motion of a pendulum is an example of ______ motion.",
        optionA: "oscillatory",
        optionB: "rectilinear",
        optionC: "random",
        correctAnswer: "oscillatory",
      }),
      shuffleOptions({
        question: "The motion of a bullet fired straight is an example of ______ motion.",
        optionA: "linear",
        optionB: "circular",
        optionC: "curved",
        correctAnswer: "linear",
      }),
      shuffleOptions({
        question: "The motion of flies in the air is called ______ motion.",
        optionA: "random",
        optionB: "rotatory",
        optionC: "curvilinear",
        correctAnswer: "random",
      }),
      shuffleOptions({
        question: "The distance between two cities is measured in ______.",
        optionA: "centimetres",
        optionB: "kilometres",
        optionC: "metres",
        correctAnswer: "kilometres",
      }),
      shuffleOptions({
        question: "A device used to measure mass is called a ______.",
        optionA: "balance",
        optionB: "thermometer",
        optionC: "clock",
        correctAnswer: "balance",
      }),
      shuffleOptions({
        question: "The SI unit of time is ______.",
        optionA: "second",
        optionB: "minute",
        optionC: "hour",
        correctAnswer: "second",
      }),
      shuffleOptions({
        question: "To measure the length of a curved line, we use a ______.",
        optionA: "thread",
        optionB: "scale",
        optionC: "ruler",
        correctAnswer: "thread",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The metric system was created by the French in 1790.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A handspan gives a standard and fixed measurement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "One metre = 100 centimetres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The thermometer is used to measure mass.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A car moving straight on a road shows linear motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The blades of a fan show rotatory motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A tree standing still is said to be at rest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Periodic motion repeats after equal intervals of time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The SI unit of mass is kilogram (kg).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A thread or divider can be used to measure a curved line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
