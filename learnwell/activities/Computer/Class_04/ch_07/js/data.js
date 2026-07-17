export const chapter = "Chapter - 7: Introducing MSW Logo";
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
        question: "Who introduced the Logo language?",
        optionA: "Bill Gates",
        optionB: "Seymour Papert",
        optionC: "Charles Babbage",
        correctAnswer: "Seymour Papert",
      }),
      shuffleOptions({
        question: "Which window of MSW Logo is used to type commands?",
        optionA: "Main Screen",
        optionB: "Commander Window",
        optionC: "Menu Bar",
        correctAnswer: "Commander Window",
      }),
      shuffleOptions({
        question: "The turtle’s pointed upper part is called ______.",
        optionA: "Tail",
        optionB: "Head",
        optionC: "Beak",
        correctAnswer: "Head",
      }),
      shuffleOptions({
        question: "Which button clears all drawings and sends the turtle to its home position?",
        optionA: "Reset Button",
        optionB: "Pause Button",
        optionC: "Step Button",
        correctAnswer: "Reset Button",
      }),
      shuffleOptions({
        question: "What does the RT command do?",
        optionA: "Turns the turtle right",
        optionB: "Turns the turtle left",
        optionC: "Moves the turtle backward",
        correctAnswer: "Turns the turtle right",
      }),
      shuffleOptions({
        question: "Which button is used to check and remove errors?",
        optionA: "Trace Button",
        optionB: "Execute Button",
        optionC: "Halt Button",
        correctAnswer: "Trace Button",
      }),
      shuffleOptions({
        question: "The CS command is used to ______.",
        optionA: "Clear the screen",
        optionB: "Turn the turtle",
        optionC: "Show the turtle",
        correctAnswer: "Clear the screen",
      }),
      shuffleOptions({
        question: "Which of these buttons shows current settings in MSW Logo?",
        optionA: "Status Button",
        optionB: "Reset Button",
        optionC: "Step Button",
        correctAnswer: "Status Button",
      }),
      shuffleOptions({
        question: "The short form of SHOWTURTLE command is ______.",
        optionA: "ST",
        optionB: "SH",
        optionC: "SW",
        correctAnswer: "ST",
      }),
      shuffleOptions({
        question: "What is the full form of Logo?",
        optionA: "Language of Graphic Oriented",
        optionB: "Logical Operation Generator",
        optionC: "Language of General Objects",
        correctAnswer: "Language of Graphic Oriented",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The triangle on the main screen is called the ______.",
        optionA: "cursor",
        optionB: "turtle",
        optionC: "arrow",
        correctAnswer: "turtle",
      }),
      shuffleOptions({
        question: "The main screen is also known as the ______.",
        optionA: "graphic screen",
        optionB: "drawing window",
        optionC: "design area",
        correctAnswer: "graphic screen",
      }),
      shuffleOptions({
        question: "The short form of FORWARD command is ______.",
        optionA: "FD",
        optionB: "FW",
        optionC: "FR",
        correctAnswer: "FD",
      }),
      shuffleOptions({
        question: "The ____ command moves the turtle backward.",
        optionA: "BACKWARD",
        optionB: "RIGHT",
        optionC: "FORWARD",
        correctAnswer: "BACKWARD",
      }),
      shuffleOptions({
        question: "Commands and instructions in Logo are called ______.",
        optionA: "primitives",
        optionB: "buttons",
        optionC: "menus",
        correctAnswer: "primitives",
      }),
      shuffleOptions({
        question: "The ____ button is used to run the typed commands.",
        optionA: "Execute",
        optionB: "Pause",
        optionC: "Step",
        correctAnswer: "Execute",
      }),
      shuffleOptions({
        question: "The ____ button temporarily stops the execution of commands.",
        optionA: "Pause",
        optionB: "Halt",
        optionC: "Reset",
        correctAnswer: "Pause",
      }),
      shuffleOptions({
        question: "The short form of LEFT command is ______.",
        optionA: "LT",
        optionB: "LF",
        optionC: "LH",
        correctAnswer: "LT",
      }),
      shuffleOptions({
        question: "The ____ command hides the turtle on the screen.",
        optionA: "HT",
        optionB: "ST",
        optionC: "CS",
        correctAnswer: "HT",
      }),
      shuffleOptions({
        question: "MSW Logo window is divided into ____ parts.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "two",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Logo is a simple computer language used to draw figures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Commander Window has two sections – Command Input Box and Recall List Box.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The FORWARD command moves the turtle backward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The LEFT command turns the turtle in the anticlockwise direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The HIDETURTLE command shows the turtle on the screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The HOME command clears the drawing and returns the turtle to centre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Reset button erases drawings and sends the turtle home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "MSW Logo is based on the Logo language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Step button shows current settings in MSW Logo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Logo was introduced by Professor Seymour Papert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
