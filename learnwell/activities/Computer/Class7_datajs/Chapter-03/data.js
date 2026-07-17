export const chapter = "Chapter - 3: Formulae and Functions in Excel";
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
        question: "Which key combination is used to copy the content of a cell?",
        optionA: "Ctrl + V",
        optionB: "Ctrl + C",
        optionC: "Ctrl + X",
        correctAnswer: "Ctrl + C",
      }),
      shuffleOptions({
        question: "Which key combination is used to paste copied data?",
        optionA: "Ctrl + V",
        optionB: "Ctrl + S",
        optionC: "Ctrl + A",
        correctAnswer: "Ctrl + V",
      }),
      shuffleOptions({
        question: "Which operator is used for finding the power of a number?",
        optionA: "*",
        optionB: "^",
        optionC: "%",
        correctAnswer: "^",
      }),
      shuffleOptions({
        question: "Which sign must appear at the beginning of every formula in Excel?",
        optionA: "#",
        optionB: "=",
        optionC: "$",
        correctAnswer: "=",
      }),
      shuffleOptions({
        question: "Which symbol is used to join text values in Excel?",
        optionA: "&",
        optionB: "%",
        optionC: "*",
        correctAnswer: "&",
      }),
      shuffleOptions({
        question: "Which function helps you add a large number of cells quickly?",
        optionA: "SUM",
        optionB: "AVERAGE",
        optionC: "MAX",
        correctAnswer: "SUM",
      }),
      shuffleOptions({
        question: "Which function returns the largest value from a list of numbers?",
        optionA: "MIN",
        optionB: "MAX",
        optionC: "SUM",
        correctAnswer: "MAX",
      }),
      shuffleOptions({
        question: "Which type of reference uses a $ sign before both column and row?",
        optionA: "Relative",
        optionB: "Absolute",
        optionC: "Mixed",
        correctAnswer: "Absolute",
      }),
      shuffleOptions({
        question: "In which reference type do cell addresses change automatically when copied?",
        optionA: "Relative",
        optionB: "Absolute",
        optionC: "Mixed",
        correctAnswer: "Relative",
      }),
      shuffleOptions({
        question: "Which function is used to find the average of marks in a range?",
        optionA: "SUM",
        optionB: "AVERAGE",
        optionC: "TOTAL",
        correctAnswer: "AVERAGE",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A formula in Excel always begins with the ______ sign.",
        optionA: "+",
        optionB: "=",
        optionC: "#",
        correctAnswer: "=",
      }),
      shuffleOptions({
        question: "The symbol ‘&’ is used to ______ text strings.",
        optionA: "separate",
        optionB: "join",
        optionC: "delete",
        correctAnswer: "join",
      }),
      shuffleOptions({
        question: "In Absolute Reference, the cell address remains ______.",
        optionA: "changing",
        optionB: "fixed",
        optionC: "half-changed",
        correctAnswer: "fixed",
      }),
      shuffleOptions({
        question: "The ‘$’ symbol is used in ______ reference.",
        optionA: "relative",
        optionB: "absolute",
        optionC: "mixed",
        correctAnswer: "absolute",
      }),
      shuffleOptions({
        question: "The shortcut key to copy a cell value is ______.",
        optionA: "Ctrl + C",
        optionB: "Ctrl + V",
        optionC: "Ctrl + X",
        correctAnswer: "Ctrl + C",
      }),
      shuffleOptions({
        question: "The intersection of a row and a column is called a ______.",
        optionA: "range",
        optionB: "cell",
        optionC: "sheet",
        correctAnswer: "cell",
      }),
      shuffleOptions({
        question: "A group of continuous cells is called a ______.",
        optionA: "block",
        optionB: "range",
        optionC: "matrix",
        correctAnswer: "range",
      }),
      shuffleOptions({
        question: "The function used to find the average of input values is ______.",
        optionA: "AVERAGE",
        optionB: "MAX",
        optionC: "MIN",
        correctAnswer: "AVERAGE",
      }),
      shuffleOptions({
        question: "Functions are called ______ formulae.",
        optionA: "predefined",
        optionB: "temporary",
        optionC: "symbolic",
        correctAnswer: "predefined",
      }),
      shuffleOptions({
        question: "The function used to find the largest value in a range is ______.",
        optionA: "SUM",
        optionB: "MAX",
        optionC: "ADD",
        correctAnswer: "MAX",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Formula in Excel always starts with the equal sign.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Relative reference remains fixed when copied to another cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Absolute reference uses the $ sign to keep the cell address constant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mixed reference combines both relative and absolute references.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol ‘&’ is used for joining text values in Excel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "SUM function is used to calculate average marks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "MAX function is used to return the largest value from a set of numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "AVERAGE function is used to find the mean of given values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Excel is an electronic spreadsheet developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A formula can contain cell references, operators, and constants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
