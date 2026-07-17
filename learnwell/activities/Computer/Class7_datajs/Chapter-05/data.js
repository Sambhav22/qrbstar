export const chapter = "Chapter - 5: Introduction to Access";
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
        question: "Which part of the Access window displays all tables, forms and queries?",
        optionA: "Ribbon",
        optionB: "Navigation Pane",
        optionC: "Status Bar",
        correctAnswer: "Navigation Pane",
      }),
      shuffleOptions({
        question: "Which bar in Access provides quick buttons for Save, Undo and Redo?",
        optionA: "Status Bar",
        optionB: "Quick Access Toolbar",
        optionC: "Title Bar",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "Which tab in Access is used to create tables, forms and queries?",
        optionA: "Create Tab",
        optionB: "Fields Tab",
        optionC: "Home Tab",
        correctAnswer: "Create Tab",
      }),
      shuffleOptions({
        question: "Which view displays field names, data types and descriptions of a table?",
        optionA: "Datasheet View",
        optionB: "Design View",
        optionC: "Form View",
        correctAnswer: "Design View",
      }),
      shuffleOptions({
        question: "Which field becomes the default primary key in a new Design View table?",
        optionA: "Code",
        optionB: "ID",
        optionC: "Number",
        correctAnswer: "ID",
      }),
      shuffleOptions({
        question: "Which area of the window provides information about ongoing operations?",
        optionA: "Title Bar",
        optionB: "Status Bar",
        optionC: "View Button",
        correctAnswer: "Status Bar",
      }),
      shuffleOptions({
        question: "Which tab must be clicked to open the Backstage View of Access?",
        optionA: "Home",
        optionB: "File Tab",
        optionC: "External Data",
        correctAnswer: "File Tab",
      }),
      shuffleOptions({
        question: "Which feature helps you make a database quickly without designing fields manually?",
        optionA: "Reports",
        optionB: "Templates",
        optionC: "Record Selector",
        correctAnswer: "Templates",
      }),
      shuffleOptions({
        question: "Which button allows switching between Datasheet View and Design View?",
        optionA: "View Button",
        optionB: "Home",
        optionC: "Navigation Pane",
        correctAnswer: "View Button",
      }),
      shuffleOptions({
        question: "Which tab contains tools to import data from other applications like Excel?",
        optionA: "External Data Tab",
        optionB: "Fields Tab",
        optionC: "Create Tab",
        correctAnswer: "External Data Tab",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A new table appears in ______ when it opens for the first time.",
        optionA: "Form View",
        optionB: "Datasheet View",
        optionC: "Layout View",
        correctAnswer: "Datasheet View",
      }),
      shuffleOptions({
        question: "Clicking the File tab opens the ______ of Access.",
        optionA: "Start Menu",
        optionB: "Backstage View",
        optionC: "Worksheet",
        correctAnswer: "Backstage View",
      }),
      shuffleOptions({
        question: "Large paragraphs of text are stored in the ______ data type.",
        optionA: "Short Text",
        optionB: "Long Text",
        optionC: "Hyperlink",
        correctAnswer: "Long Text",
      }),
      shuffleOptions({
        question: "The ______ Pane lists all available database objects.",
        optionA: "Navigation",
        optionB: "Status",
        optionC: "Title",
        correctAnswer: "Navigation",
      }),
      shuffleOptions({
        question: "The ______ bar displays the name of the opened database.",
        optionA: "Status Bar",
        optionB: "Title Bar",
        optionC: "Quick Access Toolbar",
        correctAnswer: "Title Bar",
      }),
      shuffleOptions({
        question: "The ______ tab allows you to create tables and forms.",
        optionA: "Create",
        optionB: "File",
        optionC: "Database Tools",
        correctAnswer: "Create",
      }),
      shuffleOptions({
        question: "The ______ command is used to store a newly created object.",
        optionA: "Edit",
        optionB: "Save",
        optionC: "Close",
        correctAnswer: "Save",
      }),
      shuffleOptions({
        question: "Logical Yes/No values are stored in the ______ data type.",
        optionA: "Currency",
        optionB: "Number",
        optionC: "Yes/No",
        correctAnswer: "Yes/No",
      }),
      shuffleOptions({
        question: "The default primary key created in Design View is named ______.",
        optionA: "ID",
        optionB: "Key",
        optionC: "PK",
        correctAnswer: "ID",
      }),
      shuffleOptions({
        question: "Website links can be stored using the ______ data type.",
        optionA: "Currency",
        optionB: "Hyperlink",
        optionC: "Large Number",
        correctAnswer: "Hyperlink",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Navigation Pane is used to view all tables, forms and queries in a database.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Design View is used to enter data directly into a table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Templates are pre-built databases created for specific purposes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Currency data type stores values with four decimal places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Quick Access Toolbar contains Save, Undo and Redo options.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A report is used to enter data graphically into a table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hyperlink data type can store up to 1 GB of data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Status Bar shows the current record number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A primary key uniquely identifies each record in a table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A query can retrieve data from more than one table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
