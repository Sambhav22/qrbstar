export const chapter = "Chapter - 7: An Effective Presentation";
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
        question: "Which application is used to create electronic slide shows?",
        optionA: "MS Word",
        optionB: "MS PowerPoint",
        optionC: "MS Excel",
        correctAnswer: "MS PowerPoint",
      }),
      shuffleOptions({
        question: "PowerPoint files are saved with which extension?",
        optionA: ".docx",
        optionB: ".pptx",
        optionC: ".xlsx",
        correctAnswer: ".pptx",
      }),
      shuffleOptions({
        question: "Which tab helps you show the ruler in PowerPoint?",
        optionA: "Home",
        optionB: "Insert",
        optionC: "View",
        correctAnswer: "View",
      }),
      shuffleOptions({
        question: "Which tool is used to copy formatting from one text to another?",
        optionA: "Colour Picker",
        optionB: "Format Painter",
        optionC: "Slide Sorter",
        correctAnswer: "Format Painter",
      }),
      shuffleOptions({
        question: "Which option makes the selected text darker?",
        optionA: "Italic",
        optionB: "Bold",
        optionC: "Underline",
        correctAnswer: "Bold",
      }),
      shuffleOptions({
        question: "The Design tab is used to apply what?",
        optionA: "Themes and colour schemes",
        optionB: "Spelling check",
        optionC: "Tables",
        correctAnswer: "Themes and colour schemes",
      }),
      shuffleOptions({
        question: "SmartArt graphics are used to display what?",
        optionA: "Numerical data",
        optionB: "Graphical information",
        optionC: "Slide numbers",
        correctAnswer: "Graphical information",
      }),
      shuffleOptions({
        question: "Which key is used to start a slide show?",
        optionA: "F2",
        optionB: "F5",
        optionC: "F8",
        correctAnswer: "F5",
      }),
      shuffleOptions({
        question: "Which key is pressed to stop a running slide show?",
        optionA: "Esc",
        optionB: "Enter",
        optionC: "Ctrl",
        correctAnswer: "Esc",
      }),
      shuffleOptions({
        question: "PowerPoint was officially launched on which date?",
        optionA: "22 May 1990",
        optionB: "23 May 1990",
        optionC: "22 May 1989",
        correctAnswer: "22 May 1990",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ tab is used to change the background of slides.",
        optionA: "Design",
        optionB: "Home",
        optionC: "Insert",
        correctAnswer: "Design",
      }),
      shuffleOptions({
        question: "The ruler can be shown by clicking the checkbox in the ______ tab.",
        optionA: "View",
        optionB: "Insert",
        optionC: "File",
        correctAnswer: "View",
      }),
      shuffleOptions({
        question: "The Format Painter option is available in the ______ tab.",
        optionA: "view",
        optionB: "Design",
        optionC: "Home",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "The function key used to run the slide show is ______.",
        optionA: "F5",
        optionB: "F3",
        optionC: "F1",
        correctAnswer: "F5",
      }),
      shuffleOptions({
        question: "Audio files can be inserted through the ______ tab.",
        optionA: "View",
        optionB: "Home",
        optionC: "Insert",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "The Text Shadow button gives a ______ effect to text.",
        optionA: "shaded",
        optionB: "blinking",
        optionC: "blurred",
        correctAnswer: "shaded",
      }),
      shuffleOptions({
        question: "SmartArt provides ______ types of graphical layouts.",
        optionA: "ten",
        optionB: "six",
        optionC: "nine",
        correctAnswer: "nine",
      }),
      shuffleOptions({
        question: "The dialog box used to apply gradient or texture fill is ______.",
        optionA: "Format Shape",
        optionB: "Format Slide",
        optionC: "Font",
        correctAnswer: "Format Shape",
      }),
      shuffleOptions({
        question: "Colour schemes can be applied to all slides using the ______ option.",
        optionA: "Apply to All",
        optionB: "Copy All",
        optionC: "Paste All",
        correctAnswer: "Apply to All",
      }),
      shuffleOptions({
        question: "PowerPoint presentations can include both ______ and ______.",
        optionA: "text and paint",
        optionB: "audio and video",
        optionC: "slides and clipboards",
        correctAnswer: "audio and video",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "PowerPoint is used to create spreadsheets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Format Painter is used to copy text formatting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Themes can be applied to all slides of a presentation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Esc key is used to stop a slide show.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "SmartArt cannot be inserted in PowerPoint.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Design tab contains the Variants group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Audio files can be added from a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Text Shadow button is used to italicise text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "F5 key is used to begin a presentation from the first slide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "PowerPoint allows you to insert video clips into slides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
