export const chapter = "Chapter - 7: Fun with Paint";
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
        question: "Which program is used to draw and colour pictures on a computer?",
        optionA: "Notepad",
        optionB: "Paint",
        optionC: "WordPad",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "Which key is used to view the drawing in full screen?",
        optionA: "F2",
        optionB: "F11",
        optionC: "F5",
        correctAnswer: "F11",
      }),
      shuffleOptions({
        question: "Which tool helps us to make ready-made shapes like circles and rectangles?",
        optionA: "Eraser tool",
        optionB: "Shapes tool",
        optionC: "Text tool",
        correctAnswer: "Shapes tool",
      }),
      shuffleOptions({
        question: "Which tool helps you draw with thick lines?",
        optionA: "Pencil tool",
        optionB: "Brushes tool",
        optionC: "Magnifier tool",
        correctAnswer: "Brushes tool",
      }),
      shuffleOptions({
        question: "Which tool can be used to remove mistakes in a drawing?",
        optionA: "Brush tool",
        optionB: "Eraser tool",
        optionC: "Shapes tool",
        correctAnswer: "Eraser tool",
      }),
      shuffleOptions({
        question: "Which group allows us to use different colours in Paint?",
        optionA: "Tools group",
        optionB: "Colours group",
        optionC: "Shapes group",
        correctAnswer: "Colours group",
      }),
      shuffleOptions({
        question: "What is the blank white space in Paint where we make drawings called?",
        optionA: "Drawing area",
        optionB: "Ribbon",
        optionC: "Toolbar",
        correctAnswer: "Drawing area",
      }),
      shuffleOptions({
        question: "Which tool is used to type letters or words in a drawing?",
        optionA: "Text tool",
        optionB: "Shapes tool",
        optionC: "Pencil tool",
        correctAnswer: "Text tool",
      }),
      shuffleOptions({
        question: "What are the two main components of the Paint window?",
        optionA: "Ribbon and Drawing area",
        optionB: "Title bar and Toolbar",
        optionC: "File menu and Ribbon",
        correctAnswer: "Ribbon and Drawing area",
      }),
      shuffleOptions({
        question: "Which tool is used to make any part of the picture look bigger?",
        optionA: "Magnifier tool",
        optionB: "Eraser tool",
        optionC: "Shapes tool",
        correctAnswer: "Magnifier tool",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ program is found in Windows Accessories.",
        optionA: "Paint",
        optionB: "WordPad",
        optionC: "Excel",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "The blank white space in Paint is called the ______.",
        optionA: "Drawing area",
        optionB: "Ribbon",
        optionC: "Title bar",
        correctAnswer: "Drawing area",
      }),
      shuffleOptions({
        question: "The ______ tool is used to draw straight, wavy or curved lines.",
        optionA: "Pencil",
        optionB: "Brush",
        optionC: "Shapes",
        correctAnswer: "Pencil",
      }),
      shuffleOptions({
        question: "The ______ tool is used to erase unwanted parts of a picture.",
        optionA: "Eraser",
        optionB: "Magnifier",
        optionC: "Text",
        correctAnswer: "Eraser",
      }),
      shuffleOptions({
        question: "The ______ tool helps to type text in the drawing area.",
        optionA: "Text",
        optionB: "Brush",
        optionC: "Shapes",
        correctAnswer: "Text",
      }),
      shuffleOptions({
        question: "The ______ tool is used to make thick drawings.",
        optionA: "Brushes",
        optionB: "Pencil",
        optionC: "Colours",
        correctAnswer: "Brushes",
      }),
      shuffleOptions({
        question: "The ______ tool is used to see a larger view of a picture.",
        optionA: "Magnifier",
        optionB: "Eraser",
        optionC: "Shapes",
        correctAnswer: "Magnifier",
      }),
      shuffleOptions({
        question: "The ______ group has many colours to choose from.",
        optionA: "Colours",
        optionB: "Shapes",
        optionC: "Tools",
        correctAnswer: "Colours",
      }),
      shuffleOptions({
        question: "The ______ tool can make ready-made figures like circles or ovals.",
        optionA: "Shapes",
        optionB: "Text",
        optionC: "Pencil",
        correctAnswer: "Shapes",
      }),
      shuffleOptions({
        question: "To view your drawing on full screen, press the ______ key.",
        optionA: "F11",
        optionB: "F9",
        optionC: "F10",
        correctAnswer: "F11",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Paint is used to draw and colour pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Text tool is used to draw pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Shapes tool is found in the Ribbon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Magnifier tool is used to make the picture smaller.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Eraser tool removes unwanted parts of a drawing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "F11 key is used to show the drawing in full screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Brushes tool is used to type text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Drawing area is the space where we create our pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ribbon contains different groups like Tools, Shapes, and Colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Paint is a program found in MS Word.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
