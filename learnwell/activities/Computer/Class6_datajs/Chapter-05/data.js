export const chapter = "Chapter - 5: Working with Word";
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
        question: "Which feature in MS Word is used to add a decorative outline around text?",
        optionA: "Shading",
        optionB: "Borders",
        optionC: "Header",
        correctAnswer: "Borders",
      }),
      shuffleOptions({
        question: "Which tab contains the group for paragraph formatting and indentation?",
        optionA: "Home",
        optionB: "Insert",
        optionC: "Design",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Which shortcut key combination is used to apply 1.5 line spacing in a document?",
        optionA: "Ctrl + 1",
        optionB: "Ctrl + 5",
        optionC: "Ctrl + 2",
        correctAnswer: "Ctrl + 5",
      }),
      shuffleOptions({
        question: "Which part of the page is used to display additional information like titles or page numbers?",
        optionA: "Header and Footer",
        optionB: "Page Layout",
        optionC: "Clipboard",
        correctAnswer: "Header and Footer",
      }),
      shuffleOptions({
        question: "Which tab allows you to insert footnotes and endnotes in a document?",
        optionA: "References",
        optionB: "Home",
        optionC: "Insert",
        correctAnswer: "References",
      }),
      shuffleOptions({
        question: "Which feature in Word allows you to add background colour to selected text?",
        optionA: "Shading",
        optionB: "Border",
        optionC: "Design",
        correctAnswer: "Shading",
      }),
      shuffleOptions({
        question: "What is the shortcut key for single line spacing in MS Word?",
        optionA: "Ctrl + 1",
        optionB: "Ctrl + 2",
        optionC: "Ctrl + 5",
        correctAnswer: "Ctrl + 1",
      }),
      shuffleOptions({
        question: "Which part of the document appears at the bottom of every page?",
        optionA: "Header",
        optionB: "Footer",
        optionC: "Endnote",
        correctAnswer: "Footer",
      }),
      shuffleOptions({
        question: "What does indentation control in a paragraph?",
        optionA: "Vertical placement",
        optionB: "Horizontal placement",
        optionC: "Line spacing",
        correctAnswer: "Horizontal placement",
      }),
      shuffleOptions({
        question: "Which tab contains options to insert Header and Footer?",
        optionA: "Insert",
        optionB: "Review",
        optionC: "Layout",
        correctAnswer: "Insert",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A Word document is saved with the extension ______.",
        optionA: ".docx",
        optionB: ".pptx",
        optionC: ".xlsx",
        correctAnswer: ".docx",
      }),
      shuffleOptions({
        question: "The space between two paragraphs is called ______ spacing.",
        optionA: "Line",
        optionB: "Paragraph",
        optionC: "Word",
        correctAnswer: "Paragraph",
      }),
      shuffleOptions({
        question: "The space between a line of text and the page margin is called ______.",
        optionA: "Alignment",
        optionB: "Spacing",
        optionC: "Indent",
        correctAnswer: "Indent",
      }),
      shuffleOptions({
        question: "To insert a header, click on the ______ tab.",
        optionA: "Insert",
        optionB: "Home",
        optionC: "Design",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "The feature used to add background colour to text is called ______.",
        optionA: "Shading",
        optionB: "Border",
        optionC: "Page Setup",
        correctAnswer: "Shading",
      }),
      shuffleOptions({
        question: "The feature that adds additional information at the end of each page is ______.",
        optionA: "Endnote",
        optionB: "Footnote",
        optionC: "Header",
        correctAnswer: "Footnote",
      }),
      shuffleOptions({
        question: "The upper part of a page is known as ______.",
        optionA: "Header",
        optionB: "Footer",
        optionC: "Title bar",
        correctAnswer: "Header",
      }),
      shuffleOptions({
        question: "The shortcut key for double line spacing is ______.",
        optionA: "Ctrl + 5",
        optionB: "Ctrl + 1",
        optionC: "Ctrl + 5",
        correctAnswer: "Ctrl + 5",
      }),
      shuffleOptions({
        question: "The right indentation moves the paragraph away from the ______ margin.",
        optionA: "Right",
        optionB: "Left",
        optionC: "Top",
        correctAnswer: "Right",
      }),
      shuffleOptions({
        question: "______ and ______ are used to provide extra information in a document.",
        optionA: "Footnote, Endnote",
        optionB: "Header, Footer",
        optionC: "Border, Shading",
        correctAnswer: "Footnote, Endnote",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Microsoft Word is a word processor used for typing and formatting text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Footnotes appear at the top of every page.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Indentation helps to control the horizontal placement of text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Borders and Shading are not used to make text attractive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ctrl + 1 is the not shortcut key for single line spacing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Headers appear at the bottom of a page.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Endnotes are inserted at the end of a document.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Paragraph dialog box is used to align text and adjust spacing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ctrl + 2 is not used to apply double line spacing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Line and paragraph spacing help make a document more readable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
