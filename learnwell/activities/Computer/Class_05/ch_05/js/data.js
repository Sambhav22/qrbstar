export const chapter = "Chapter - 5: Working with Excel";
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
        question: "What is Excel mainly used for?",
        optionA: "Word processing",
        optionB: "Accounting operations",
        optionC: "Gaming",
        correctAnswer: "Accounting operations",
      }),
      shuffleOptions({
        question: "What is the smallest unit in a worksheet where data is entered?",
        optionA: "Row",
        optionB: "Cell",
        optionC: "Column",
        correctAnswer: "Cell",
      }),
      shuffleOptions({
        question: "Which key allows you to edit data directly inside a cell?",
        optionA: "F2",
        optionB: "F3",
        optionC: "F5",
        correctAnswer: "F2",
      }),
      shuffleOptions({
        question: "Which option is used to remove an unwanted worksheet from a workbook?",
        optionA: "Insert Sheet",
        optionB: "Delete Sheet",
        optionC: "Rename Sheet",
        correctAnswer: "Delete Sheet",
      }),
      shuffleOptions({
        question: "What do you call a group of adjoining cells selected together?",
        optionA: "Range",
        optionB: "Column",
        optionC: "Table",
        correctAnswer: "Range",
      }),
      shuffleOptions({
        question: "Which tab contains the option to insert a new worksheet?",
        optionA: "Home",
        optionB: "View",
        optionC: "File",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "What appears around a cell when it is selected?",
        optionA: "Border",
        optionB: "Arrow",
        optionC: "Box shadow",
        correctAnswer: "Border",
      }),
      shuffleOptions({
        question: "Which bar displays the contents typed into a cell?",
        optionA: "Formula bar",
        optionB: "Title bar",
        optionC: "Status bar",
        correctAnswer: "Formula bar",
      }),
      shuffleOptions({
        question: "Which shortcut key moves the worksheet to the right?",
        optionA: "Ctrl + Page Down",
        optionB: "Ctrl + Page Up",
        optionC: "Ctrl + Shift",
        correctAnswer: "Ctrl + Page Down",
      }),
      shuffleOptions({
        question: "What is the default name of the first worksheet in Excel?",
        optionA: "Sheet1",
        optionB: "Page1",
        optionC: "Book1",
        correctAnswer: "Sheet1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Each Excel file is known as a ________.",
        optionA: "Workbook",
        optionB: "Worksheet",
        optionC: "Range",
        correctAnswer: "Workbook",
      }),
      shuffleOptions({
        question: "The ________ key is used to delete content in a selected cell.",
        optionA: "Delete",
        optionB: "Enter",
        optionC: "Esc",
        correctAnswer: "Delete",
      }),
      shuffleOptions({
        question: "The ________ bar shows the data and formula entered in a cell.",
        optionA: "Formula",
        optionB: "Menu",
        optionC: "Title",
        correctAnswer: "Formula",
      }),
      shuffleOptions({
        question: "The ________ tab contains the Delete Sheet option.",
        optionA: "Home",
        optionB: "Insert",
        optionC: "View",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "The group of adjoining cells is called a ________.",
        optionA: "Range",
        optionB: "Row",
        optionC: "Column",
        correctAnswer: "Range",
      }),
      shuffleOptions({
        question: "The ________ shows the name of the selected cell.",
        optionA: "Cell reference box",
        optionB: "Ribbon",
        optionC: "Task bar",
        correctAnswer: "Cell reference box",
      }),
      shuffleOptions({
        question: "To move between worksheets on the left, use ________.",
        optionA: "Ctrl + Page Up",
        optionB: "Ctrl + Page Down",
        optionC: "Shift + Tab",
        correctAnswer: "Ctrl + Page Up",
      }),
      shuffleOptions({
        question: "Each worksheet contains rows and ________.",
        optionA: "Columns",
        optionB: "Cells",
        optionC: "Pages",
        correctAnswer: "Columns",
      }),
      shuffleOptions({
        question: "A worksheet can be ________ many times as needed.",
        optionA: "Renamed",
        optionB: "Deleted",
        optionC: "Closed",
        correctAnswer: "Renamed",
      }),
      shuffleOptions({
        question: "The Backspace key deletes only ________ cell at a time.",
        optionA: "One",
        optionB: "Two",
        optionC: "All",
        correctAnswer: "One",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Excel is developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A workbook may contain several worksheets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ribbon is a row of buttons above the work area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You can edit cell content using the formula bar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The F2 key is used to rename a worksheet.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cells are the basic building blocks of a worksheet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Delete key removes all data from the entire worksheet.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cell range refers to more than one adjoining cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The shortcut Ctrl + Page Down moves the worksheet to the right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You can insert, delete and rename worksheets in Excel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
