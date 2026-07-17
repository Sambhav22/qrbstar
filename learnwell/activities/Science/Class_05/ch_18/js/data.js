export const chapter = "Chapter - 18: Data Handling";
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
        question: "Which graph is used to compare two groups of data?",
        optionA: "Pie chart",
        optionB: "Double bar graph",
        optionC: "Line graph",
        correctAnswer: "Double bar graph",
      }),
      shuffleOptions({
        question: "What does a larger sector in a pie chart represent?",
        optionA: "Smaller value",
        optionB: "Equal value",
        optionC: "Larger value",
        correctAnswer: "Larger value",
      }),
      shuffleOptions({
        question: "How many degrees are there in a complete pie chart?",
        optionA: "360°",
        optionB: "180°",
        optionC: "90°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "What does the scale in a bar graph help us understand?",
        optionA: "Colour of bars",
        optionB: "Value represented by bar height",
        optionC: "Number of categories",
        correctAnswer: "Value represented by bar height",
      }),
      shuffleOptions({
        question: "A double bar graph always shows how many bars for each category?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "Which chart shows data as parts of a whole?",
        optionA: "Pie chart",
        optionB: "Bar graph",
        optionC: "Line graph",
        correctAnswer: "Pie chart",
      }),
      shuffleOptions({
        question: "What do we call a part of a pie chart?",
        optionA: "Bar",
        optionB: "Sector",
        optionC: "Column",
        correctAnswer: "Sector",
      }),
      shuffleOptions({
        question: "When two bars in a bar graph are equal in height, what does it mean?",
        optionA: "Values are same",
        optionB: "Values are different",
        optionC: "Values are unknown",
        correctAnswer: "Values are same",
      }),
      shuffleOptions({
        question: "Which graph uses rectangles of equal width to show data?",
        optionA: "Bar graph",
        optionB: "Pie chart",
        optionC: "Map",
        correctAnswer: "Bar graph",
      }),
      shuffleOptions({
        question: "If a bar is taller than another bar, what does it show?",
        optionA: "Smaller value",
        optionB: "Greater value",
        optionC: "Zero value",
        correctAnswer: "Greater value",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A pie chart is drawn inside a ______.",
        optionA: "circle",
        optionB: "square",
        optionC: "triangle",
        correctAnswer: "circle",
      }),
      shuffleOptions({
        question: "A double bar graph compares ______ groups of data.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "A sector represents a ______ of the total data.",
        optionA: "line",
        optionB: "bar",
        optionC: "fraction",
        correctAnswer: "fraction",
      }),
      shuffleOptions({
        question: "A bar graph displays data using ______ bars.",
        optionA: "equal-width",
        optionB: "circular",
        optionC: "dotted",
        correctAnswer: "equal-width",
      }),
      shuffleOptions({
        question: "A full pie chart measures ______ degrees.",
        optionA: "180",
        optionB: "90",
        optionC: "360",
        correctAnswer: "360",
      }),
      shuffleOptions({
        question: "Bars in a bar graph must have equal ______.",
        optionA: "width",
        optionB: "height",
        optionC: "colour",
        correctAnswer: "width",
      }),
      shuffleOptions({
        question: "A scale tells us how much each unit on the graph ______.",
        optionA: "tastes",
        optionB: "represents",
        optionC: "sounds",
        correctAnswer: "represents",
      }),
      shuffleOptions({
        question: "A pie chart is useful for comparing parts of a ______.",
        optionA: "whole",
        optionB: "triangle",
        optionC: "graph",
        correctAnswer: "whole",
      }),
      shuffleOptions({
        question: "A taller bar shows a ______ value.",
        optionA: "smaller",
        optionB: "greater",
        optionC: "equal",
        correctAnswer: "greater",
      }),
      shuffleOptions({
        question: "To draw a pie chart, data must be converted into ______.",
        optionA: "pictures",
        optionB: "fractions or angles",
        optionC: "stories",
        correctAnswer: "fractions or angles",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A pie chart shows data using bars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A double bar graph can compare boys’ and girls’ choices.",
        optionA: "True",
        optionB: "False 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 90° sector in a pie chart represents 4 of the whole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All bars in a bar graph must be of equal width.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A larger sector in a pie chart means a smaller value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A full circle in a pie chart is 360 degrees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Double bar graphs show only one bar per category.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A scale is not needed in drawing bar graphs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sector is a part of a pie chart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bar graphs help us compare data easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
