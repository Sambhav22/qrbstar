export const chapter = "Chapter - 4: Introducing Excel";
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
        question: "Which bar in Excel displays the content or formula of the active cell?",
        optionA: "Title bar",
        optionB: "Formula bar",
        optionC: "Status bar",
        correctAnswer: "Formula bar",
      }),
      shuffleOptions({
        question: "Which part of the Excel window contains groups of commands arranged in tabs?",
        optionA: "Ribbon",
        optionB: "Name box",
        optionC: "Status bar",
        correctAnswer: "Ribbon",
      }),
      shuffleOptions({
        question: "Which bar shows the name of the current workbook at the top of the window?",
        optionA: "Formula bar",
        optionB: "Title bar",
        optionC: "Quick Access Toolbar",
        correctAnswer: "Title bar",
      }),
      shuffleOptions({
        question: "Which feature of Excel helps you view more than one workbook at the same time?",
        optionA: "Arrange Windows",
        optionB: "Sort and Filter",
        optionC: "Format Painter",
        correctAnswer: "Arrange Windows",
      }),
      shuffleOptions({
        question: "Which key combination is used to open an already existing workbook?",
        optionA: "Ctrl + N",
        optionB: "Ctrl + O",
        optionC: "Ctrl + S",
        correctAnswer: "Ctrl + O",
      }),
      shuffleOptions({
        question: "Which command helps in saving the current workbook with a new name?",
        optionA: "Save As",
        optionB: "Save",
        optionC: "Open",
        correctAnswer: "Save As",
      }),
      shuffleOptions({
        question: "Which tab opens the Backstage View in Excel?",
        optionA: "File",
        optionB: "View",
        optionC: "Home",
        correctAnswer: "File",
      }),
      shuffleOptions({
        question: "Which part of the Excel window shows the address of the active cell?",
        optionA: "Name box",
        optionB: "Formula bar",
        optionC: "Status bar",
        correctAnswer: "Name box",
      }),
      shuffleOptions({
        question: "Which part of Excel allows you to access commands like Save, Undo, and Redo quickly?",
        optionA: "Quick Access Toolbar",
        optionB: "Ribbon",
        optionC: "Status bar",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "The area where data is entered and organised in Excel is called—",
        optionA: "Worksheet",
        optionB: "Workbook",
        optionC: "Spreadsheet tab",
        correctAnswer: "Worksheet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ bar displays the data or formula of the active cell.",
        optionA: "Formula",
        optionB: "Title",
        optionC: "Status",
        correctAnswer: "Formula",
      }),
      shuffleOptions({
        question: "The area where you work in Excel is known as a ______.",
        optionA: "Workbook",
        optionB: "Worksheet",
        optionC: "File",
        correctAnswer: "Worksheet",
      }),
      shuffleOptions({
        question: "The ______ is located at the bottom of the Excel window and shows information about operations.",
        optionA: "Status bar",
        optionB: "Title bar",
        optionC: "Formula bar",
        correctAnswer: "Status bar",
      }),
      shuffleOptions({
        question: "The Quick Access Toolbar includes ______, Undo, and Redo commands.",
        optionA: "Save",
        optionB: "Print",
        optionC: "Cut",
        correctAnswer: "Save",
      }),
      shuffleOptions({
        question: "To create a new workbook, click on ______ → New → Blank Workbook.",
        optionA: "File",
        optionB: "Home",
        optionC: "Insert",
        correctAnswer: "File",
      }),
      shuffleOptions({
        question: "The shortcut key to save a workbook is ______.",
        optionA: "Ctrl + S",
        optionB: "Ctrl + O",
        optionC: "Ctrl + N",
        correctAnswer: "Ctrl + S",
      }),
      shuffleOptions({
        question: "Each column in Excel is denoted by ______.",
        optionA: "Letters",
        optionB: "Numbers",
        optionC: "Symbols",
        correctAnswer: "Letters",
      }),
      shuffleOptions({
        question: "The shortcut key to open a saved workbook is ______.",
        optionA: "Ctrl + O",
        optionB: "Ctrl + S",
        optionC: "Ctrl + C",
        correctAnswer: "Ctrl + O",
      }),
      shuffleOptions({
        question: "A workbook is a collection of ______.",
        optionA: "Worksheets",
        optionB: "Charts",
        optionC: "Columns",
        correctAnswer: "Worksheets",
      }),
      shuffleOptions({
        question: "The command used to create a copy of a workbook is ______.",
        optionA: "Save As",
        optionB: "Save",
        optionC: "Open",
        correctAnswer: "Save As",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Quick Access Toolbar is found at the bottom of the Excel window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ribbon is placed below the title bar and contains several tabs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A worksheet contains rows and columns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The green-bordered cell is known as the active cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Excel files are called worksheets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The formula bar displays the address of the active cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can view multiple workbooks at once using the Arrange Windows option.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The status bar shows information about an operation in progress.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pressing Ctrl + O saves the workbook.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The File tab in Excel opens the Backstage View.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
