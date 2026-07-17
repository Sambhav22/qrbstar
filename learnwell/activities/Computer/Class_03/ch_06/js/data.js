export const chapter = "Chapter - 6: Let’s Work in Word";
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
        question: "Which part of the Word window shows the document’s name?",
        optionA: "Ribbon",
        optionB: "Title Bar",
        optionC: "Status Bar",
        correctAnswer: "Title Bar",
      }),
      shuffleOptions({
        question: "Which toolbar contains shortcuts like Save, Undo and Redo?",
        optionA: "Quick Access Toolbar",
        optionB: "Ribbon",
        optionC: "Status Bar",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "Which tab do you click to open Backstage view?",
        optionA: "Insert",
        optionB: "File",
        optionC: "Home",
        correctAnswer: "File",
      }),
      shuffleOptions({
        question: "Which key combination is used to print a document?",
        optionA: "Ctrl + C",
        optionB: "Ctrl + P",
        optionC: "Ctrl + S",
        correctAnswer: "Ctrl + P",
      }),
      shuffleOptions({
        question: "Which bar helps you move up and down through a document?",
        optionA: "Scroll Bar",
        optionB: "Status Bar",
        optionC: "Title Bar",
        correctAnswer: "Scroll Bar",
      }),
      shuffleOptions({
        question: "What appears when you first open Word?",
        optionA: "Start screen",
        optionB: "Save dialog",
        optionC: "Print pane",
        correctAnswer: "Start screen",
      }),
      shuffleOptions({
        question: "Which bar is found at the bottom of the Word window?",
        optionA: "Ribbon",
        optionB: "Status Bar",
        optionC: "Title Bar",
        correctAnswer: "Status Bar",
      }),
      shuffleOptions({
        question: "Which part of Word shows page number and word count?",
        optionA: "Status Bar",
        optionB: "Ribbon",
        optionC: "Ruler",
        correctAnswer: "Status Bar",
      }),
      shuffleOptions({
        question: "Which command is used to create a copy of a document?",
        optionA: "Save",
        optionB: "Save As",
        optionC: "Open",
        correctAnswer: "Save As",
      }),
      shuffleOptions({
        question: "Which shortcut key closes the Word application?",
        optionA: "Ctrl + W",
        optionB: "Alt + F4",
        optionC: "Ctrl + P",
        correctAnswer: "Alt + F4",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The blinking vertical line in the document area is called the ________.",
        optionA: "cursor",
        optionB: "pointer",
        optionC: "marker",
        correctAnswer: "cursor",
      }),
      shuffleOptions({
        question: "The ________ helps to set margins in a document.",
        optionA: "ruler",
        optionB: "status bar",
        optionC: "scroll bar",
        correctAnswer: "ruler",
      }),
      shuffleOptions({
        question: "The ________ tab is used to print or open a document.",
        optionA: "File",
        optionB: "Home",
        optionC: "Insert",
        correctAnswer: "File",
      }),
      shuffleOptions({
        question: "The ________ bar is present at the bottom of the Word window.",
        optionA: "status",
        optionB: "title",
        optionC: "ribbon",
        correctAnswer: "status",
      }),
      shuffleOptions({
        question: "The ________ key is pressed to begin a new paragraph.",
        optionA: "Enter",
        optionB: "Shift",
        optionC: "Caps Lock",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "We use the ________ command to create a new document.",
        optionA: "New",
        optionB: "Save",
        optionC: "Open",
        correctAnswer: "New",
      }),
      shuffleOptions({
        question: "The ________ toolbar is found at the top-left corner of the Word window.",
        optionA: "Quick Access",
        optionB: "Title",
        optionC: "Ribbon",
        correctAnswer: "Quick Access",
      }),
      shuffleOptions({
        question: "The ________ bar allows you to move up and down a page.",
        optionA: "scroll",
        optionB: "title",
        optionC: "status",
        correctAnswer: "scroll",
      }),
      shuffleOptions({
        question: "To exit Word, press ________.",
        optionA: "Alt + F4",
        optionB: "Ctrl + S",
        optionC: "Ctrl + P",
        correctAnswer: "Alt + F4",
      }),
      shuffleOptions({
        question: "Word is a ________ processing application.",
        optionA: "word",
        optionB: "data",
        optionC: "drawing",
        correctAnswer: "word",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Word is a word-processing application.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ribbon is located above the Title Bar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ruler helps to adjust document margins precisely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Status Bar is used to show page number and word count.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Quick Access Toolbar contains Save, Undo and Redo icons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Save As command is used to create a copy of an existing document.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pressing Alt + F4 closes Word.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Scroll Bar is used to type text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Cursor shows where text will appear when you type.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Word can be used to create letters, poems and reports.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
