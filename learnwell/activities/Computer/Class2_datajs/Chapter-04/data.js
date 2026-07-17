export const chapter = "Chapter - 4: More on Keyboard";
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
        question: "What is a keyboard used for?",
        optionA: "Drawing pictures",
        optionB: "Typing letters, numbers and symbols",
        optionC: "Storing files",
        correctAnswer: "Typing letters, numbers and symbols",
      }),
      shuffleOptions({
        question: "How many alphabet keys are there on a keyboard?",
        optionA: "20",
        optionB: "26",
        optionC: "30",
        correctAnswer: "26",
      }),
      shuffleOptions({
        question: "Which key is the longest on the keyboard?",
        optionA: "Enter",
        optionB: "Space bar",
        optionC: "Shift",
        correctAnswer: "Space bar",
      }),
      shuffleOptions({
        question: "What is the small blinking line on the monitor called?",
        optionA: "Pointer",
        optionB: "Cursor",
        optionC: "Symbol",
        correctAnswer: "Cursor",
      }),
      shuffleOptions({
        question: "Which key is used to erase letters on the left of the cursor?",
        optionA: "Delete",
        optionB: "Backspace",
        optionC: "Caps Lock",
        correctAnswer: "Backspace",
      }),
      shuffleOptions({
        question: "Which key is used to type letters in capital form?",
        optionA: "Num Lock",
        optionB: "Caps Lock",
        optionC: "Space bar",
        correctAnswer: "Caps Lock",
      }),
      shuffleOptions({
        question: "Which key helps to type numbers using the numeric keypad?",
        optionA: "Enter",
        optionB: "Num Lock",
        optionC: "Tab",
        correctAnswer: "Num Lock",
      }),
      shuffleOptions({
        question: "Which key moves the cursor to a new line?",
        optionA: "Enter",
        optionB: "Shift",
        optionC: "Backspace",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "Which keys move the cursor in four directions?",
        optionA: "Function keys",
        optionB: "Arrow keys",
        optionC: "Number keys",
        correctAnswer: "Arrow keys",
      }),
      shuffleOptions({
        question: "Which key is used together with another key to type special symbols?",
        optionA: "Caps Lock",
        optionB: "Shift",
        optionC: "Delete",
        correctAnswer: "Shift",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The buttons on the keyboard are called ______.",
        optionA: "keys",
        optionB: "lights",
        optionC: "switches",
        correctAnswer: "keys",
      }),
      shuffleOptions({
        question: "Entering data through the keyboard is called ______.",
        optionA: "typing",
        optionB: "drawing",
        optionC: "writing",
        correctAnswer: "typing",
      }),
      shuffleOptions({
        question: "The keys from F1 to F12 are known as ______.",
        optionA: "function keys",
        optionB: "arrow keys",
        optionC: "number keys",
        correctAnswer: "function keys",
      }),
      shuffleOptions({
        question: "The ______ key gives blank space between two words.",
        optionA: "Space bar",
        optionB: "Tab",
        optionC: "Enter",
        correctAnswer: "Space bar",
      }),
      shuffleOptions({
        question: "The ______ key erases text on the right side of the cursor.",
        optionA: "Delete",
        optionB: "Backspace",
        optionC: "Shift",
        correctAnswer: "Delete",
      }),
      shuffleOptions({
        question: "The ______ key activates the numeric keypad.",
        optionA: "Num Lock",
        optionB: "Caps Lock",
        optionC: "Enter",
        correctAnswer: "Num Lock",
      }),
      shuffleOptions({
        question: "The small blinking line on the screen is called a ______.",
        optionA: "cursor",
        optionB: "dot",
        optionC: "box",
        correctAnswer: "cursor",
      }),
      shuffleOptions({
        question: "The ______ key is used in combination with other keys.",
        optionA: "Shift",
        optionB: "Delete",
        optionC: "Space bar",
        correctAnswer: "Shift",
      }),
      shuffleOptions({
        question: "There are ______ arrow keys on the keyboard.",
        optionA: "four",
        optionB: "six",
        optionC: "two",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "Pressing the ______ key starts a new paragraph or line.",
        optionA: "Enter",
        optionB: "Tab",
        optionC: "Caps Lock",
        correctAnswer: "Enter",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The keyboard is an input device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Num Lock key is used to activate the numeric keypad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Backspace key erases text on the right side of the cursor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Space bar key is the shortest key on the keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Caps Lock key helps to type letters in capital form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Function keys are located at the top of the keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Arrow keys move the cursor up, down, left and right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Delete key is used to erase text on the right side of the cursor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are four cursor control keys on the keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Enter key is used to move the cursor to the next line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
