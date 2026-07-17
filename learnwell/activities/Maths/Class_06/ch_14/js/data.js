export const chapter = "Chapter - 14: Data Handling";
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
        question: "What is the collection of numbers gathered to get information called?",
        optionA: "Graph",
        optionB: "Data",
        optionC: "Range",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "Which of the following represents an arranged form of data?",
        optionA: "Raw data",
        optionB: "Array",
        optionC: "Notes",
        correctAnswer: "Array",
      }),
      shuffleOptions({
        question: "The number of times a value appears in data is known as its:",
        optionA: "Tally",
        optionB: "Picture",
        optionC: "Frequency",
        correctAnswer: "Frequency",
      }),
      shuffleOptions({
        question: "Which mark shows a group of five tallies?",
        optionA: "|||||",
        optionB: "||||",
        correctAnswer: "||||",
      }),
      shuffleOptions({
        question: "What is used to represent data using pictures?",
        optionA: "Pictograph",
        optionB: "Bar graph",
        optionC: "Table",
        correctAnswer: "Pictograph",
      }),
      shuffleOptions({
        question: "Which graph uses equal-width bars spaced evenly?",
        optionA: "Pictograph",
        optionB: "Bar graph",
        optionC: "Pie chart",
        correctAnswer: "Bar graph",
      }),
      shuffleOptions({
        question: "What is the difference between the highest and lowest observation called?",
        optionA: "Range",
        optionB: "Frequency",
        optionC: "Array",
        correctAnswer: "Range",
      }),
      shuffleOptions({
        question: "In a pictograph, the meaning of each symbol is shown in the:",
        optionA: "Key/Scale",
        optionB: "Table",
        optionC: "Heading",
        correctAnswer: "Key/Scale",
      }),
      shuffleOptions({
        question: "Raw data is also known as:",
        optionA: "Primary data",
        optionB: "Secondary data",
        optionC: "Arranged data",
        correctAnswer: "Primary data",
      }),
      shuffleOptions({
        question: "Which data representation helps compare categories quickly?",
        optionA: "Paragraph",
        optionB: "Bar graph",
        optionC: "Story",
        correctAnswer: "Bar graph",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The raw data becomes an ______ when arranged in order.",
        optionA: "array",
        optionB: "image",
        optionC: "equation",
        correctAnswer: "array",
      }),
      shuffleOptions({
        question: "The ______ shows how many times an item occurs.",
        optionA: "title",
        optionB: "frequency",
        optionC: "bar",
        correctAnswer: "frequency",
      }),
      shuffleOptions({
        question: "A pictograph represents data using ______.",
        optionA: "words",
        optionB: "pictures/symbols",
        optionC: "numbers only",
        correctAnswer: "pictures/symbols",
      }),
      shuffleOptions({
        question: "A bar graph is drawn using bars of equal ______.",
        optionA: "letters",
        optionB: "width",
        optionC: "colours",
        correctAnswer: "width",
      }),
      shuffleOptions({
        question: "A tally mark group of five is shown by crossing the ______ mark.",
        optionA: "first",
        optionB: "fourth",
        optionC: "previous four tallies (fifth mark)",
        correctAnswer: "previous four tallies (fifth mark)",
      }),
      shuffleOptions({
        question: "A scale in a bar graph helps interpret the ______ of bars.",
        optionA: "names",
        optionB: "heights/values",
        optionC: "colours",
        correctAnswer: "heights/values",
      }),
      shuffleOptions({
        question: "Data that is collected for the first time is called ______ data.",
        optionA: "secondary",
        optionB: "primary",
        optionC: "repeated",
        correctAnswer: "primary",
      }),
      shuffleOptions({
        question: "The difference between highest and lowest observation is called ______.",
        optionA: "range",
        optionB: "tally",
        optionC: "label",
        correctAnswer: "range",
      }),
      shuffleOptions({
        question: "In a pictograph, half a symbol represents ______ of the full value.",
        optionA: "double",
        optionB: "half",
        optionC: "none",
        correctAnswer: "half",
      }),
      shuffleOptions({
        question: "A table showing tallies and frequencies is called a ______ table.",
        optionA: "sentence",
        optionB: "frequency distribution",
        optionC: "bar chart",
        correctAnswer: "frequency distribution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Raw data is already arranged in order.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A tally mark group is made after counting five items.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pictograph can have incomplete symbols.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bar graphs can be vertical or horizontal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frequency means the largest value in data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All bars in a bar graph must be equally spaced.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pictograph must include a key.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An array is formed by arranging data in descending or ascending order.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tabulation means drawing a bar graph.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Data helps us understand information more clearly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
