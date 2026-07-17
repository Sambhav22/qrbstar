export const chapter = "Chapter - 9: Introducing QBASIC";
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
        question: "Who developed the BASIC programming language?",
        optionA: "Charles Babbage",
        optionB: "John G. Kemeny and Thomas E. Kurtz",
        optionC: "Bill Gates",
        correctAnswer: "John G. Kemeny and Thomas E. Kurtz",
      }),
      shuffleOptions({
        question: "What does BASIC stand for?",
        optionA: "Beginner’s All-Purpose Symbolic Instruction Code",
        optionB: "Binary Arithmetic System Instruction Code",
        optionC: "Basic Algorithmic System Integration Code",
        correctAnswer: "Beginner’s All-Purpose Symbolic Instruction Code",
      }),
      shuffleOptions({
        question: "QBASIC runs mainly on which operating system?",
        optionA: "Linux",
        optionB: "Windows 11",
        optionC: "DOS",
        correctAnswer: "DOS",
      }),
      shuffleOptions({
        question: "Which statement is used to assign a value to a variable in QBASIC?",
        optionA: "INPUT",
        optionB: "LET",
        optionC: "REM",
        correctAnswer: "LET",
      }),
      shuffleOptions({
        question: "Which statement clears the output screen?",
        optionA: "REM",
        optionB: "STOP",
        optionC: "CLS",
        correctAnswer: "CLS",
      }),
      shuffleOptions({
        question: "Which menu is used to run a program in QBASIC?",
        optionA: "Run",
        optionB: "File",
        optionC: "Edit",
        correctAnswer: "Run",
      }),
      shuffleOptions({
        question: "Which shortcut key activates the File menu?",
        optionA: "Alt + F",
        optionB: "Shift + F5",
        optionC: "Ctrl + F",
        correctAnswer: "Alt + F",
      }),
      shuffleOptions({
        question: "What type of language is BASIC?",
        optionA: "Machine Language",
        optionB: "High-level language",
        optionC: "Assembly language",
        correctAnswer: "High-level language",
      }),
      shuffleOptions({
        question: "The file extension used by QBASIC programs is—",
        optionA: ".bas",
        optionB: ".exe",
        optionC: ".doc",
        correctAnswer: ".bas",
      }),
      shuffleOptions({
        question: "Which statement displays the output on the screen?",
        optionA: "END",
        optionB: "INPUT",
        optionC: "PRINT",
        correctAnswer: "PRINT",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "BASIC was developed in the year ______.",
        optionA: "1964",
        optionB: "1966",
        optionC: "1970",
        correctAnswer: "1964",
      }),
      shuffleOptions({
        question: "QBASIC was developed by ______.",
        optionA: "Microsoft",
        optionB: "Apple",
        optionC: "IBM",
        correctAnswer: "Microsoft",
      }),
      shuffleOptions({
        question: "A ____ is a person who makes computer programs.",
        optionA: "Editor",
        optionB: "Typist",
        optionC: "Programmer",
        correctAnswer: "Programmer",
      }),
      shuffleOptions({
        question: "The ____ statement adds comments to a program.",
        optionA: "REM",
        optionB: "PRINT",
        optionC: "INPUT",
        correctAnswer: "REM",
      }),
      shuffleOptions({
        question: "The ____ statement ends the program.",
        optionA: "STOP",
        optionB: "END",
        optionC: "HALT",
        correctAnswer: "END",
      }),
      shuffleOptions({
        question: "To clear the screen, the ____ command is used.",
        optionA: "CLS",
        optionB: "CLEAR",
        optionC: "ERASE",
        correctAnswer: "CLS",
      }),
      shuffleOptions({
        question: "To take input from the user, QBASIC uses the ____ statement.",
        optionA: "PRINT",
        optionB: "LET",
        optionC: "INPUT",
        correctAnswer: "INPUT",
      }),
      shuffleOptions({
        question: "A set of instructions given to the computer is called a ____.",
        optionA: "Program",
        optionB: "Command",
        optionC: "File",
        correctAnswer: "Program",
      }),
      shuffleOptions({
        question: "The ____ menu has Cut, Copy and Paste options.",
        optionA: "File",
        optionB: "Run",
        optionC: "Edit",
        correctAnswer: "Edit",
      }),
      shuffleOptions({
        question: "The software used to run QBASIC on Windows 10 is ____.",
        optionA: "DOSBox",
        optionB: "PowerPoint",
        optionC: "Excel",
        correctAnswer: "DOSBox",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "BASIC is a high-level programming language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "QBASIC can run directly on Windows 10 without any emulator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "LET statement is used to assign values to variables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "REM statement is used to clear the screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CLS statement clears the output screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "SHIFT + F5 is used to execute a program.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "END statement can be used more than once in a program.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "QBASIC was developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An emulator allows a computer system to behave like another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "BASIC was developed by Bill Gates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
