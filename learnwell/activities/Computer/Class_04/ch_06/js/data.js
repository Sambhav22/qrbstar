export const chapter = "Chapter - 6: Introducing PowerPoint";
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
        question: "Who developed PowerPoint?",
        optionA: "Microsoft",
        optionB: "Apple",
        optionC: "Google",
        correctAnswer: "Microsoft",
      }),
      shuffleOptions({
        question: "Which key is used to start a slide show?",
        optionA: "F1",
        optionB: "F5",
        optionC: "Esc",
        correctAnswer: "F5",
      }),
      shuffleOptions({
        question: "Which part lets you zoom in or out of a slide?",
        optionA: "Zoom Tool",
        optionB: "Ribbon",
        optionC: "Status Bar",
        correctAnswer: "Zoom Tool",
      }),
      shuffleOptions({
        question: "Which option helps restore unsaved files?",
        optionA: "Save As",
        optionB: "Auto Recover",
        optionC: "Undo",
        correctAnswer: "Auto Recover",
      }),
      shuffleOptions({
        question: "The section that shows miniature versions of slides is—",
        optionA: "Slides Tab",
        optionB: "Notes Pane",
        optionC: "View Buttons",
        correctAnswer: "Slides Tab",
      }),
      shuffleOptions({
        question: "Which tab is used to insert images?",
        optionA: "Insert",
        optionB: "Home",
        optionC: "Design",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "Which button closes PowerPoint completely?",
        optionA: "Close (X)",
        optionB: "Start",
        optionC: "File",
        correctAnswer: "Close (X)",
      }),
      shuffleOptions({
        question: "The main work area for creating slides is called—",
        optionA: "Slide Pane",
        optionB: "Ribbon",
        optionC: "Outline View",
        correctAnswer: "Slide Pane",
      }),
      shuffleOptions({
        question: "Which toolbar gives quick access to common commands?",
        optionA: "Quick Access Toolbar",
        optionB: "Title Bar",
        optionC: "Slide Pane",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "Which tab contains the From Beginning option?",
        optionA: "Slide Show",
        optionB: "Insert",
        optionC: "File",
        correctAnswer: "Slide Show",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "PowerPoint is a _________ software.",
        optionA: "Presentation",
        optionB: "Database",
        optionC: "Spreadsheet",
        correctAnswer: "Presentation",
      }),
      shuffleOptions({
        question: "A collection of slides is called a _________.",
        optionA: "Presentation",
        optionB: "Workbook",
        optionC: "File",
        correctAnswer: "Presentation",
      }),
      shuffleOptions({
        question: "The view that displays slides one by one is called _________.",
        optionA: "Slide Show",
        optionB: "Outline",
        optionC: "Normal",
        correctAnswer: "Slide Show",
      }),
      shuffleOptions({
        question: "The shortcut key to save a file is _________.",
        optionA: "Ctrl + S",
        optionB: "Ctrl + P",
        optionC: "Alt + S",
        correctAnswer: "Ctrl + S",
      }),
      shuffleOptions({
        question: "The pane used to type speaker notes is called _________.",
        optionA: "Notes Pane",
        optionB: "Slides Pane",
        optionC: "Ribbon",
        correctAnswer: "Notes Pane",
      }),
      shuffleOptions({
        question: "A presentation can include text, pictures, charts and _________.",
        optionA: "Videos",
        optionB: "Formulas",
        optionC: "Tables only",
        correctAnswer: "Videos",
      }),
      shuffleOptions({
        question: "The Zoom Tool is located at the _________ corner of the window.",
        optionA: "Bottom-right",
        optionB: "Top-left",
        optionC: "Top-right",
        correctAnswer: "Bottom-right",
      }),
      shuffleOptions({
        question: "To create a copy of an existing file, use _________.",
        optionA: "Save As",
        optionB: "Save",
        optionC: "Open",
        correctAnswer: "Save As",
      }),
      shuffleOptions({
        question: "You can exit the slide show by pressing _________.",
        optionA: "Esc",
        optionB: "Enter",
        optionC: "F5",
        correctAnswer: "Esc",
      }),
      shuffleOptions({
        question: "The default blank design is known as _________.",
        optionA: "Slide Master",
        optionB: "Template",
        optionC: "Theme",
        correctAnswer: "Slide Master",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "PowerPoint can display slides with animations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The File tab is used to insert pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can zoom slides using the Zoom Tool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Notes Pane appears above the Slide Pane.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pressing F5 starts the slide show.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Save As creates a new copy of the presentation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ribbon is located below the Title Bar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Quick Access Toolbar contains only one button.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Esc key exits from Slide Show mode.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Auto Recover saves your presentation automatically.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
