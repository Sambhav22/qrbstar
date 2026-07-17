export const chapter = "Chapter - 6: Using the Mouse";
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
        question: "Which part of the computer has a long tail?",
        optionA: "Keyboard",
        optionB: "Mouse",
        optionC: "Monitor",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "What helps us to move the arrow on the screen?",
        optionA: "Mouse",
        optionB: "CPU",
        optionC: "Printer",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "Which finger should be placed on the left button of the mouse?",
        optionA: "Middle finger",
        optionB: "Index finger",
        optionC: "Thumb",
        correctAnswer: "Index finger",
      }),
      shuffleOptions({
        question: "What do we call pressing the mouse button?",
        optionA: "Typing",
        optionB: "Clicking",
        optionC: "Drawing",
        correctAnswer: "Clicking",
      }),
      shuffleOptions({
        question: "What is the mat on which the mouse is placed called?",
        optionA: "Mouse pad",
        optionB: "Paper pad",
        optionC: "Writing pad",
        correctAnswer: "Mouse pad",
      }),
      shuffleOptions({
        question: "Which mouse works with the help of light?",
        optionA: "Scroll mouse",
        optionB: "Optical mouse",
        optionC: "Wireless mouse",
        correctAnswer: "Optical mouse",
      }),
      shuffleOptions({
        question: "Which mouse does not have any wire?",
        optionA: "Wireless mouse",
        optionB: "Optical mouse",
        optionC: "Scroll mouse",
        correctAnswer: "Wireless mouse",
      }),
      shuffleOptions({
        question: "What is the small arrow seen on the screen known as?",
        optionA: "Pointer",
        optionB: "Arrow key",
        optionC: "Marker",
        correctAnswer: "Pointer",
      }),
      shuffleOptions({
        question: "What happens when we press the mouse button twice quickly?",
        optionA: "Scrolling",
        optionB: "Double-clicking",
        optionC: "Dragging",
        correctAnswer: "Double-clicking",
      }),
      shuffleOptions({
        question: "Which part of the mouse is used to move the page up and down?",
        optionA: "Scroll wheel",
        optionB: "Left button",
        optionC: "Right button",
        correctAnswer: "Scroll wheel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The mouse is a part of the ______.",
        optionA: "Keyboard",
        optionB: "Computer",
        optionC: "Monitor",
        correctAnswer: "Computer",
      }),
      shuffleOptions({
        question: "The mouse is placed on a ______.",
        optionA: "Mat",
        optionB: "Desk",
        optionC: "Mouse pad",
        correctAnswer: "Mouse pad",
      }),
      shuffleOptions({
        question: "A mouse helps us to ______ pictures.",
        optionA: "Draw",
        optionB: "Erase",
        optionC: "Copy",
        correctAnswer: "Draw",
      }),
      shuffleOptions({
        question: "The sound made by pressing a mouse button is called a ______.",
        optionA: "Click",
        optionB: "Tick",
        optionC: "Ring",
        correctAnswer: "Click",
      }),
      shuffleOptions({
        question: "A ______ mouse works with light.",
        optionA: "Scroll",
        optionB: "Optical",
        optionC: "Wireless",
        correctAnswer: "Optical",
      }),
      shuffleOptions({
        question: "A ______ mouse works without a wire.",
        optionA: "Wireless",
        optionB: "Optical",
        optionC: "Scroll",
        correctAnswer: "Wireless",
      }),
      shuffleOptions({
        question: "The arrow that moves on the screen is called the ______.",
        optionA: "Mouse pointer",
        optionB: "Cursor",
        optionC: "Clicker",
        correctAnswer: "Mouse pointer",
      }),
      shuffleOptions({
        question: "The index finger is placed on the ______ button.",
        optionA: "Right",
        optionB: "Left",
        optionC: "Middle",
        correctAnswer: "Left",
      }),
      shuffleOptions({
        question: "The middle finger is placed on the ______ button.",
        optionA: "Right",
        optionB: "Left",
        optionC: "Scroll",
        correctAnswer: "Right",
      }),
      shuffleOptions({
        question: "Pressing the mouse button two times quickly is called ______.",
        optionA: "Double-clicking",
        optionB: "Single-clicking",
        optionC: "Dragging",
        correctAnswer: "Double-clicking",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The mouse helps us to play games on the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse is a part of the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse pointer looks like a small arrow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mouse should be placed on the keyboard while using it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pressing the mouse button is called clicking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Double-clicking means pressing the mouse button twice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A wireless mouse has a wire attached to it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse pad helps the mouse to work smoothly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The scroll wheel helps to move the page up and down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse makes a sound called “click.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
