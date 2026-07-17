export const chapter = "Chapter - 5: Formatting in Word";
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
        question: "Which tab in Word contains the Font and Paragraph groups?",
        optionA: "Insert",
        optionB: "Home",
        optionC: "View",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Which command is used to increase the font size of selected text?",
        optionA: "Shrink Font",
        optionB: "Grow Font",
        optionC: "Bold",
        correctAnswer: "Grow Font",
      }),
      shuffleOptions({
        question: "Which option makes the text slant towards the right side?",
        optionA: "Bold",
        optionB: "Italic",
        optionC: "Underline",
        correctAnswer: "Italic",
      }),
      shuffleOptions({
        question: "Which alignment makes text equal on both sides of the page?",
        optionA: "Left",
        optionB: "Justify",
        optionC: "Right",
        correctAnswer: "Justify",
      }),
      shuffleOptions({
        question: "What is the default font in a new Word document?",
        optionA: "Arial",
        optionB: "Calibri",
        optionC: "Verdana",
        correctAnswer: "Calibri",
      }),
      shuffleOptions({
        question: "Which key must you press after typing a custom font size in the Font Size box?",
        optionA: "Spacebar",
        optionB: "Enter",
        optionC: "Tab",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "Which feature lets you preview text appearance before applying a change?",
        optionA: "Print Preview",
        optionB: "Live Preview",
        optionC: "Read View",
        correctAnswer: "Live Preview",
      }),
      shuffleOptions({
        question: "Which button is used to underline text?",
        optionA: "B",
        optionB: "I",
        optionC: "U",
        correctAnswer: "U",
      }),
      shuffleOptions({
        question: "Which alignment is mostly used for headings or titles?",
        optionA: "Left",
        optionB: "Centre",
        optionC: "Justify",
        correctAnswer: "Centre",
      }),
      shuffleOptions({
        question: "Formatting in Word helps to—",
        optionA: "Beautify the text",
        optionB: "Delete the text",
        optionC: "Hide the text",
        correctAnswer: "Beautify the text",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of changing the appearance of text is called ______.",
        optionA: "Formatting",
        optionB: "Aligning",
        optionC: "Inserting",
        correctAnswer: "Formatting",
      }),
      shuffleOptions({
        question: "The ____ group contains the Bold, Italic and Underline buttons.",
        optionA: "Font",
        optionB: "Paragraph",
        optionC: "Insert",
        correctAnswer: "Font",
      }),
      shuffleOptions({
        question: "Text can be aligned in ____ ways.",
        optionA: "Four",
        optionB: "Three",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "____ alignment is used mostly for titles.",
        optionA: "Centre",
        optionB: "Right",
        optionC: "Left",
        correctAnswer: "Centre",
      }),
      shuffleOptions({
        question: "The ____ command is used to reduce the font size.",
        optionA: "Grow Font",
        optionB: "Shrink Font",
        optionC: "Italic",
        correctAnswer: "Shrink Font",
      }),
      shuffleOptions({
        question: "The Underline button is represented by the letter ____.",
        optionA: "U",
        optionB: "B",
        optionC: "I",
        correctAnswer: "U",
      }),
      shuffleOptions({
        question: "____ refers to the positioning of text on a page.",
        optionA: "Alignment",
        optionB: "Colouring",
        optionC: "Highlighting",
        correctAnswer: "Alignment",
      }),
      shuffleOptions({
        question: "____ helps in marking important text with colour.",
        optionA: "Highlighting",
        optionB: "Aligning",
        optionC: "Shading",
        correctAnswer: "Highlighting",
      }),
      shuffleOptions({
        question: "The default font in Word is ____.",
        optionA: "Calibri",
        optionB: "Times New Roman",
        optionC: "Verdana",
        correctAnswer: "Calibri",
      }),
      shuffleOptions({
        question: "The ____ tab provides tools to change font type, size and colour.",
        optionA: "Home",
        optionB: "Insert",
        optionC: "Design",
        correctAnswer: "Home",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Formatting helps to make a document look attractive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Italic style makes the text slant to the right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bold makes the text darker than the rest of the text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Justify alignment keeps text equal on both sides of the page.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Font Colour button is found on the Home tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Highlighting is used to erase selected text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Calibri is the default font in Word.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grow Font command is used to increase the font size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Centre alignment is mostly used for paragraphs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Formatting options are available in the Home tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
