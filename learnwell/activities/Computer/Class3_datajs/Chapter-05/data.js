export const chapter = "Chapter - 5: Introduction to MS Office";
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
        question: "Which application is mainly used for typing and formatting text?",
        optionA: "Excel",
        optionB: "Word",
        optionC: "Access",
        correctAnswer: "Word",
      }),
      shuffleOptions({
        question: "Which program helps in creating tables and performing calculations?",
        optionA: "Excel",
        optionB: "PowerPoint",
        optionC: "Outlook",
        correctAnswer: "Excel",
      }),
      shuffleOptions({
        question: "Which MS Office program allows making slides with text and pictures?",
        optionA: "Word",
        optionB: "PowerPoint",
        optionC: "Excel",
        correctAnswer: "PowerPoint",
      }),
      shuffleOptions({
        question: "Which software is used to send and receive emails?",
        optionA: "PowerPoint",
        optionB: "Outlook",
        optionC: "Word",
        correctAnswer: "Outlook",
      }),
      shuffleOptions({
        question: "Which program helps to create and store large volumes of information?",
        optionA: "Access",
        optionB: "Word",
        optionC: "Excel",
        correctAnswer: "Access",
      }),
      shuffleOptions({
        question: "Which of the following is an example of a spreadsheet program?",
        optionA: "Word",
        optionB: "Excel",
        optionC: "Outlook",
        correctAnswer: "Excel",
      }),
      shuffleOptions({
        question: "Which of the following file extensions is used by PowerPoint?",
        optionA: ".pptx",
        optionB: ".docx",
        optionC: ".xlsx",
        correctAnswer: ".pptx",
      }),
      shuffleOptions({
        question: "Outlook also contains a personal information manager that includes a—",
        optionA: "Calendar",
        optionB: "Toolbar",
        optionC: "Browser",
        correctAnswer: "Calendar",
      }),
      shuffleOptions({
        question: "Which of these applications is a part of Microsoft Office Suite?",
        optionA: "Paint",
        optionB: "Excel",
        optionC: "Notepad",
        correctAnswer: "Excel",
      }),
      shuffleOptions({
        question: "Access is a type of—",
        optionA: "Word Processor",
        optionB: "Database Management System",
        optionC: "Email Program",
        correctAnswer: "Database Management System",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Microsoft Word is a _____ program.",
        optionA: "spreadsheet",
        optionB: "word processing",
        optionC: "drawing",
        correctAnswer: "word processing",
      }),
      shuffleOptions({
        question: "Excel is used to create _____ and charts.",
        optionA: "tables",
        optionB: "letters",
        optionC: "slides",
        correctAnswer: "tables",
      }),
      shuffleOptions({
        question: "PowerPoint is used to make _____ .",
        optionA: "presentations",
        optionB: "documents",
        optionC: "databases",
        correctAnswer: "presentations",
      }),
      shuffleOptions({
        question: "Outlook is an _____ program.",
        optionA: "email",
        optionB: "music",
        optionC: "picture",
        correctAnswer: "email",
      }),
      shuffleOptions({
        question: "Access is a _____ database management system.",
        optionA: "relational",
        optionB: "random",
        optionC: "open",
        correctAnswer: "relational",
      }),
      shuffleOptions({
        question: "Word files are saved with the extension _____ .",
        optionA: ".docx",
        optionB: ".pptx",
        optionC: ".xlsx",
        correctAnswer: ".docx",
      }),
      shuffleOptions({
        question: "Excel files are saved with the extension _____ .",
        optionA: ".xlsx",
        optionB: ".docx",
        optionC: ".pptx",
        correctAnswer: ".xlsx",
      }),
      shuffleOptions({
        question: "PowerPoint files are saved with the extension _____ .",
        optionA: ".pptx",
        optionB: ".xls",
        optionC: ".txt",
        correctAnswer: ".pptx",
      }),
      shuffleOptions({
        question: "Outlook includes a personal information manager with a _____ .",
        optionA: "Calendar",
        optionB: "Dictionary",
        optionC: "Camera",
        correctAnswer: "Calendar",
      }),
      shuffleOptions({
        question: "The complete set of these applications is known as Microsoft _____ .",
        optionA: "Office",
        optionB: "Browser",
        optionC: "Paint",
        correctAnswer: "Office",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Word is used to create presentations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Excel is used for making calculations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "PowerPoint is used to prepare presentations with images and sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Outlook is used to manage emails and contacts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Access is used to play computer games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Word files are saved with the extension .docx.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Excel files are saved with the extension .pptx.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "PowerPoint helps in creating animated slides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Access stores data in the form of records.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Outlook is not a part of Microsoft Office Suite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
