export const chapter = "Chapter - 5: More on HTML";
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
        question: "Which tag is used to list items without following any sequence?",
        optionA: "<ul>",
        optionB: "<ol>",
        optionC: "<dt>",
        correctAnswer: "<ul>",
      }),
      shuffleOptions({
        question: "Which attribute allows you to begin an ordered list from a specific number?",
        optionA: "type",
        optionB: "start",
        optionC: "begin",
        correctAnswer: "start",
      }),
      shuffleOptions({
        question: "Which bullet style creates a small filled circle?",
        optionA: "square",
        optionB: "circle",
        optionC: "disc",
        correctAnswer: "disc",
      }),
      shuffleOptions({
        question: "In a table, which tag is used to display a heading cell?",
        optionA: "<td>",
        optionB: "<th>",
        optionC: "<tr>",
        correctAnswer: "<th>",
      }),
      shuffleOptions({
        question: "Which tag is used to show the description inside a definition list?",
        optionA: "<dt>",
        optionB: "<dd>",
        optionC: "<li>",
        correctAnswer: "<dd>",
      }),
      shuffleOptions({
        question: "Which attribute sets the distance between the table cell border and the text inside it?",
        optionA: "border",
        optionB: "cellpadding",
        optionC: "cellspacing",
        correctAnswer: "cellpadding",
      }),
      shuffleOptions({
        question: "Which attribute changes the colour of the table border?",
        optionA: "shading",
        optionB: "bordercolor",
        optionC: "hue",
        correctAnswer: "bordercolor",
      }),
      shuffleOptions({
        question: "Which tag places the enclosed content in the middle of the webpage?",
        optionA: "<center>",
        optionB: "<align>",
        optionC: "<middle>",
        correctAnswer: "<center>",
      }),
      shuffleOptions({
        question: "Which tag shows a moving text on the screen?",
        optionA: "<move>",
        optionB: "<scroll>",
        optionC: "<marquee>",
        correctAnswer: "<marquee>",
      }),
      shuffleOptions({
        question: "Which attribute is required in the <img> tag to display a stored image?",
        optionA: "src",
        optionB: "path",
        optionC: "link",
        correctAnswer: "src",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In an unordered list, bullets such as disc, circle and ______ can be used.",
        optionA: "square",
        optionB: "triangle",
        optionC: "arrow",
        correctAnswer: "square",
      }),
      shuffleOptions({
        question: "A definition list begins with the ______ tag.",
        optionA: "<dl>",
        optionB: "<dt>",
        optionC: "<dd>",
        correctAnswer: "<dl>",
      }),
      shuffleOptions({
        question: "In a table, each row is created using the ______ tag.",
        optionA: "<tr>",
        optionB: "<th>",
        optionC: "<li>",
        correctAnswer: "<tr>",
      }),
      shuffleOptions({
        question: "The ______ attribute helps in aligning the whole table on a webpage.",
        optionA: "place",
        optionB: "align",
        optionC: "set",
        correctAnswer: "align",
      }),
      shuffleOptions({
        question: "A list that uses numbers or alphabets is called an ______ list.",
        optionA: "ordered",
        optionB: "mixed",
        optionC: "random",
        correctAnswer: "ordered",
      }),
      shuffleOptions({
        question: "A description in a definition list is written inside the ______ tag.",
        optionA: "<dt>",
        optionB: "<dd>",
        optionC: "<ul>",
        correctAnswer: "<dd>",
      }),
      shuffleOptions({
        question: "The spacing between two table cells is set using the ______ attribute.",
        optionA: "cellspacing",
        optionB: "padding",
        optionC: "border",
        correctAnswer: "cellspacing",
      }),
      shuffleOptions({
        question: "The background colour of a table is set using the ______ attribute.",
        optionA: "bgcolor",
        optionB: "back",
        optionC: "shade",
        correctAnswer: "bgcolor",
      }),
      shuffleOptions({
        question: "To display an image, the file address is written inside the ______ attribute of the <img> tag.",
        optionA: "link",
        optionB: "src",
        optionC: "target",
        correctAnswer: "src",
      }),
      shuffleOptions({
        question: "The tag used to list items one below the other in a bullet format is ______.",
        optionA: "<ul>",
        optionB: "<li>",
        optionC: "<dl>",
        correctAnswer: "<ul>",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The <ol> tag can display numbering in alphabets as well as roman numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The <li> tag does not require a closing tag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tables in HTML help in comparing information easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The border attribute set to 0 hides the table border.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The definition term is written using the <dd> tag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The bg colour attribute can be used with the <table> tag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cell spacing increases the space between the content and the cell boundary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The <title> tag displays text inside the table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The align attribute helps position the table on the webpage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ordered lists always start from 1 and cannot be changed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
