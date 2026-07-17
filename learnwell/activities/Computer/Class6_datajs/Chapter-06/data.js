export const chapter = "Chapter - 6: Working with Excel";
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
        question: "Which key combination is used to make the contents of a cell bold?",
        optionA: "Ctrl + I",
        optionB: "Ctrl + B",
        optionC: "Ctrl + U",
        correctAnswer: "Ctrl + B",
      }),
      shuffleOptions({
        question: "Which tab provides options to insert a chart in Excel?",
        optionA: "Home",
        optionB: "Insert",
        optionC: "Page Layout",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "Which button helps to merge several cells into one and centre the text?",
        optionA: "Merge & Centre",
        optionB: "Split Cells",
        optionC: "Join Cells",
        correctAnswer: "Merge & Centre",
      }),
      shuffleOptions({
        question: "Which button is used to fill background colour in selected cells?",
        optionA: "Font Colour",
        optionB: "Fill Colour",
        optionC: "Border",
        correctAnswer: "Fill Colour",
      }),
      shuffleOptions({
        question: "Which tab appears automatically when a chart is selected?",
        optionA: "Design",
        optionB: "Home",
        optionC: "Layout",
        correctAnswer: "Design",
      }),
      shuffleOptions({
        question: "Which alignment button arranges the text along the right margin?",
        optionA: "Left Alignment",
        optionB: "Centre Alignment",
        optionC: "Right Alignment",
        correctAnswer: "Right Alignment",
      }),
      shuffleOptions({
        question: "What is the shortcut key to underline selected text?",
        optionA: "Ctrl + I",
        optionB: "Ctrl + U",
        optionC: "Ctrl + B",
        correctAnswer: "Ctrl + U",
      }),
      shuffleOptions({
        question: "Which element of Excel displays the name of the active workbook?",
        optionA: "Formula bar",
        optionB: "Title bar",
        optionC: "Status bar",
        correctAnswer: "Title bar",
      }),
      shuffleOptions({
        question: "Which command is used to save a workbook?",
        optionA: "Ctrl + S",
        optionB: "Ctrl + O",
        optionC: "Ctrl + C",
        correctAnswer: "Ctrl + S",
      }),
      shuffleOptions({
        question: "Which group on the Home tab allows changes to font style and size?",
        optionA: "Font Group",
        optionB: "Alignment Group",
        optionC: "Clipboard Group",
        correctAnswer: "Font Group",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The files created in Excel have the ______ extension.",
        optionA: ".docx",
        optionB: ".xlsx",
        optionC: ".pptx",
        correctAnswer: ".xlsx",
      }),
      shuffleOptions({
        question: "A spreadsheet is an organised arrangement of ______, columns and cells.",
        optionA: "tables",
        optionB: "rows",
        optionC: "charts",
        correctAnswer: "rows",
      }),
      shuffleOptions({
        question: "The ______ button is used to change the text colour.",
        optionA: "Font Colour",
        optionB: "Fill Colour",
        optionC: "Border",
        correctAnswer: "Font Colour",
      }),
      shuffleOptions({
        question: "______ improves the appearance of data and makes it readable.",
        optionA: "Formatting",
        optionB: "Sorting",
        optionC: "Calculation",
        correctAnswer: "Formatting",
      }),
      shuffleOptions({
        question: "The button used to add borders around cells is the ______ button.",
        optionA: "Border",
        optionB: "Font Size",
        optionC: "Align",
        correctAnswer: "Border",
      }),
      shuffleOptions({
        question: "The alignment options are found under the ______ tab.",
        optionA: "Insert",
        optionB: "Home",
        optionC: "Layout",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Charts are ______ representations of numerical data.",
        optionA: "graphical",
        optionB: "textual",
        optionC: "verbal",
        correctAnswer: "graphical",
      }),
      shuffleOptions({
        question: "The Orientation button changes the text ______ within a cell.",
        optionA: "angle",
        optionB: "size",
        optionC: "colour",
        correctAnswer: "angle",
      }),
      shuffleOptions({
        question: "To increase font size, click the ______ button in the Font group.",
        optionA: "Increase Font Size",
        optionB: "Font Colour",
        optionC: "Border",
        correctAnswer: "Increase Font Size",
      }),
      shuffleOptions({
        question: "To make the contents Italic, we press ______.",
        optionA: "Ctrl + I",
        optionB: "Ctrl + B",
        optionC: "Ctrl + N",
        correctAnswer: "Ctrl + I",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Formatting cannot be done in Excel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ctrl + S is the shortcut to save a workbook.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Border button is found on the Insert tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Orientation button is used to change the angle of text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Fill Colour button changes the background colour of a cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Charts can only be created without any data selection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Alignment helps to arrange text within cell margins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The shortcut Ctrl + I is used to make text bold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Merge & Centre combines several cells into one cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Excel files are saved with the extension .docx.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
