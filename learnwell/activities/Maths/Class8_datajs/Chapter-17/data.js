export const chapter = "Chapter - 17: Data Handling and Probability";
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
        question: "Which term is used for the initial collection of numerical facts?",
        optionA: "Frequency",
        optionB: "Observation",
        optionC: "Raw data",
        correctAnswer: "Raw data",
      }),
      shuffleOptions({
        question: "What is the difference between the greatest and the least observations called?",
        optionA: "Class size",
        optionB: "Range",
        optionC: "Class mark",
        correctAnswer: "Range",
      }),
      shuffleOptions({
        question: "Which of the following represents grouped data graphically?",
        optionA: "Bar graph",
        optionB: "Histogram",
        optionC: "Pictograph",
        correctAnswer: "Histogram",
      }),
      shuffleOptions({
        question: "What is the mid-value of a class interval known as?",
        optionA: "Class size",
        optionB: "Class mark",
        optionC: "Range",
        correctAnswer: "Class mark",
      }),
      shuffleOptions({
        question: "Which graph is circular in shape?",
        optionA: "Bar graph",
        optionB: "Histogram",
        optionC: "Pie chart",
        correctAnswer: "Pie chart",
      }),
      shuffleOptions({
        question: "The sum of all central angles in a pie chart is",
        optionA: "180°",
        optionB: "270°",
        optionC: "360°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "Which experiment has outcomes that cannot be predicted in advance?",
        optionA: "Sure experiment",
        optionB: "Random experiment",
        optionC: "Fixed experiment",
        correctAnswer: "Random experiment",
      }),
      shuffleOptions({
        question: "How many possible outcomes are there when a coin is tossed once?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which of the following is a sure event?",
        optionA: "Getting head or tail when a coin is tossed",
        optionB: "Getting two heads in one toss",
        optionC: "Getting number 7 on a die",
        correctAnswer: "Getting head or tail when a coin is tossed",
      }),
      shuffleOptions({
        question: "Probability of an impossible event is",
        optionA: "1 1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "0",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Each numerical fact in a data is called an ______.",
        optionA: "event",
        optionB: "observation",
        optionC: "frequency",
        correctAnswer: "observation",
      }),
      shuffleOptions({
        question: "Data arranged into class intervals is called ______ data.",
        optionA: "raw",
        optionB: "grouped",
        optionC: "ungrouped",
        correctAnswer: "grouped",
      }),
      shuffleOptions({
        question: "The difference between upper and lower limits of a class interval is called ______.",
        optionA: "class mark",
        optionB: "range",
        optionC: "class size",
        correctAnswer: "class size",
      }),
      shuffleOptions({
        question: "In a histogram, there is ______ between consecutive bars.",
        optionA: "equal gap",
        optionB: "no gap",
        optionC: "wide gap",
        correctAnswer: "no gap",
      }),
      shuffleOptions({
        question: "A pie chart is also known as a ______ graph.",
        optionA: "bar",
        optionB: "circle",
        optionC: "line",
        correctAnswer: "circle",
      }),
      shuffleOptions({
        question: "The probability of a sure event is ______.",
        optionA: "0 1",
        optionB: "2",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Tossing a coin is an example of a ______ experiment.",
        optionA: "random",
        optionB: "fixed",
        optionC: "sure",
        correctAnswer: "random",
      }),
      shuffleOptions({
        question: "The lower limit of the class interval 30–40 is ______.",
        optionA: "40",
        optionB: "35",
        optionC: "30",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "The total number of outcomes when a die is thrown is ______.",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Probability always lies between ______ and ______.",
        optionA: "0 and 1",
        optionB: "1 and 2",
        optionC: "–1 and 1",
        correctAnswer: "0 and 1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Raw data is the initial collection of observations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Class mark is obtained by adding class limits only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bar graphs are usually used for ungrouped data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a histogram, bars do not touch each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pie charts show parts of a whole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Probability of an impossible event is 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Getting a tail when a coin is tossed is an event.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The range of data depends on all observations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The class size of interval 10–20 is 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Probability can be a negative number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
