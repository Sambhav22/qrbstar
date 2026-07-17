export const chapter = "Chapter - 5: More on Mouse";
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
        question: "Which device helps us control the movement of the pointer on the screen?",
        optionA: "Keyboard",
        optionB: "Mouse",
        optionC: "CPU",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "Which part of the computer does the mouse connect to with a wire?",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Printer",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "Which part of the mouse is used to move a page up and down?",
        optionA: "Left button",
        optionB: "Scroll wheel",
        optionC: "Right button",
        correctAnswer: "Scroll wheel",
      }),
      shuffleOptions({
        question: "Which type of mouse uses a light sensor to detect movement?",
        optionA: "Optical mouse",
        optionB: "Mechanical mouse",
        optionC: "Wireless mouse",
        correctAnswer: "Optical mouse",
      }),
      shuffleOptions({
        question: "Which mouse works without any wire?",
        optionA: "Wireless mouse",
        optionB: "Trackball mouse",
        optionC: "Mechanical mouse",
        correctAnswer: "Wireless mouse",
      }),
      shuffleOptions({
        question: "What is the small arrow that moves on the monitor called?",
        optionA: "Cursor",
        optionB: "Symbol",
        optionC: "Icon",
        correctAnswer: "Cursor",
      }),
      shuffleOptions({
        question: "Which mouse is especially used while playing games?",
        optionA: "Optical mouse",
        optionB: "Trackball mouse",
        optionC: "Wireless mouse",
        correctAnswer: "Trackball mouse",
      }),
      shuffleOptions({
        question: "What should we place the mouse on while using it?",
        optionA: "Mouse pad",
        optionB: "Book",
        optionC: "Keyboard",
        correctAnswer: "Mouse pad",
      }),
      shuffleOptions({
        question: "Which button is used to show a list of commands on the screen?",
        optionA: "Right button",
        optionB: "Left button",
        optionC: "Scroll wheel",
        correctAnswer: "Right button",
      }),
      shuffleOptions({
        question: "Which mouse has a ball that moves when you move the pointer?",
        optionA: "Mechanical mouse",
        optionB: "Optical mouse",
        optionC: "Wireless mouse",
        correctAnswer: "Mechanical mouse",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A mouse is an ______ device.",
        optionA: "Input",
        optionB: "Output",
        optionC: "Storage",
        correctAnswer: "Input",
      }),
      shuffleOptions({
        question: "The arrow on the monitor is called a ______.",
        optionA: "Pointer",
        optionB: "File",
        optionC: "Folder",
        correctAnswer: "Pointer",
      }),
      shuffleOptions({
        question: "The mouse is also known as a ______ device.",
        optionA: "Pointing",
        optionB: "Printing",
        optionC: "Display",
        correctAnswer: "Pointing",
      }),
      shuffleOptions({
        question: "The ______ button is used mainly for selecting objects.",
        optionA: "Left",
        optionB: "Right",
        optionC: "Scroll",
        correctAnswer: "Left",
      }),
      shuffleOptions({
        question: "The ______ mouse has no wire attached to it.",
        optionA: "Wireless",
        optionB: "Optical",
        optionC: "Trackball",
        correctAnswer: "Wireless",
      }),
      shuffleOptions({
        question: "The ______ mouse works with a light sensor.",
        optionA: "Optical",
        optionB: "Mechanical",
        optionC: "Gaming",
        correctAnswer: "Optical",
      }),
      shuffleOptions({
        question: "The ______ is used to move the page up and down.",
        optionA: "Scroll wheel",
        optionB: "Right button",
        optionC: "Left button",
        correctAnswer: "Scroll wheel",
      }),
      shuffleOptions({
        question: "The ______ mouse is used by gamers.",
        optionA: "Trackball",
        optionB: "Wireless",
        optionC: "Optical",
        correctAnswer: "Trackball",
      }),
      shuffleOptions({
        question: "The ______ button shows a menu on the screen.",
        optionA: "Right",
        optionB: "Left",
        optionC: "Scroll",
        correctAnswer: "Right",
      }),
      shuffleOptions({
        question: "The ______ helps move an item from one position to another.",
        optionA: "Drag and drop",
        optionB: "Click",
        optionC: "Scroll",
        correctAnswer: "Drag and drop",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A mouse is a pointing device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The right button is used for scrolling pages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Optical mouse has a ball underneath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wireless mouse works without any cable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trackball mouse is mainly used for playing games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The scroll wheel moves a page up or down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Double click is done with the right button.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drag and drop helps to move an item from one place to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The pointer moves when we move the mouse on the mouse pad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse is used to print pages from the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
