export const chapter = "Chapter - 6: Learning HTML";
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
        question: "Who founded HTML in the late 1990s?",
        optionA: "Bill gates",
        optionB: "Tim Berners-Lee",
        optionC: "Dennis Ritchie",
        correctAnswer: "Tim Berners-Lee",
      }),
      shuffleOptions({
        question: "Which tag is used to insert a line break in HTML?",
        optionA: "<br>",
        optionB: "<hr>",
        optionC: "<line>",
        correctAnswer: "<br>",
      }),
      shuffleOptions({
        question: "Which tag displays a horizontal line across the page?",
        optionA: "<hr>",
        optionB: "<line>",
        optionC: "<p>",
        correctAnswer: "<hr>",
      }),
      shuffleOptions({
        question: "Which section of an HTML document contains the title of the web page?",
        optionA: "<head>",
        optionB: "<body>",
        optionC: "<<title>",
        correctAnswer: "<<title>",
      }),
      shuffleOptions({
        question: "Which tag is used to make text appear bold?",
        optionA: "<i>",
        optionB: "<u>",
        optionC: "<b>",
        correctAnswer: "<b>",
      }),
      shuffleOptions({
        question: "What program can you use to create HTML code?",
        optionA: "Notepad",
        optionB: "MS Word",
        optionC: "Paint",
        correctAnswer: "Notepad",
      }),
      shuffleOptions({
        question: "Which tag is written at the beginning and end of every HTML page?",
        optionA: "<body>",
        optionB: "<html>",
        optionC: "<head>",
        correctAnswer: "<html>",
      }),
      shuffleOptions({
        question: "Which tag is used to display text in italics?",
        optionA: "<i>",
        optionB: "<italic>",
        optionC: "<t>",
        correctAnswer: "<i>",
      }),
      shuffleOptions({
        question: "Which tag is used to underline text in HTML?",
        optionA: "<u>",
        optionB: "<line>",
        optionC: "<mark>",
        correctAnswer: "<u>",
      }),
      shuffleOptions({
        question: "Which attribute is used to add a background image to a web page?",
        optionA: "bgcolour",
        optionB: "image",
        optionC: "background",
        correctAnswer: "background",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "HTML stands for ______.",
        optionA: "High Text Markup Language",
        optionB: "Hyper Text Markup Language",
        optionC: "Hyper Transfer Markup Language",
        correctAnswer: "Hyper Text Markup Language",
      }),
      shuffleOptions({
        question: "The contents of a web page are written within the ______ tag.",
        optionA: "<head>",
        optionB: "<body>",
        optionC: "<title>",
        correctAnswer: "<body>",
      }),
      shuffleOptions({
        question: "The tag <p> is used to create a ______.",
        optionA: "Paragraph",
        optionB: "Table",
        optionC: "Heading",
        correctAnswer: "Paragraph",
      }),
      shuffleOptions({
        question: "The <sup> tag displays text in ______ position.",
        optionA: "Normal",
        optionB: "Subscript",
        optionC: "Superscript",
        correctAnswer: "Superscript",
      }),
      shuffleOptions({
        question: "The <sub> tag displays text ______ the normal line.",
        optionA: "Below",
        optionB: "Above",
        optionC: "Beside",
        correctAnswer: "Below",
      }),
      shuffleOptions({
        question: "The <strike> tag is used to show ______ text.",
        optionA: "Bold",
        optionB: "Strikethrough",
        optionC: "Italic",
        correctAnswer: "Strikethrough",
      }),
      shuffleOptions({
        question: "The <font> tag can change colour, face, and ______ of the text.",
        optionA: "Size",
        optionB: "Width",
        optionC: "Border",
        correctAnswer: "Size",
      }),
      shuffleOptions({
        question: "To save an HTML file, use the extension ______.",
        optionA: ".html",
        optionB: ".txt",
        optionC: ".exe",
        correctAnswer: ".html",
      }),
      shuffleOptions({
        question: "You can insert comments in HTML using ______ symbols.",
        optionA: "()",
        optionB: "{}",
        optionC: "<!-- -->",
        correctAnswer: "<!-- -->",
      }),
      shuffleOptions({
        question: "The background colour of the body can be changed using the attribute ______.",
        optionA: "bgcolor",
        optionB: "colour",
        optionC: "shade",
        correctAnswer: "bgcolor",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "HTML is a case-sensitive language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The <br> tag requires a closing tag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "HTML documents can be created using Notepad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The <h1> tag is larger in size than <h6>.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The <i> tag makes text appear in italics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Comments in HTML affect the output of the page.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The <title> tag appears inside the <body> section.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A background image replaces a background colour when both are applied.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "HTML elements are represented by tags.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Attributes in HTML are written inside angle brackets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
