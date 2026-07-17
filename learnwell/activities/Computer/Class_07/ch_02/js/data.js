export const chapter = "Chapter - 2: Creating programs in QBASIC";
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
        question: "Which company created the QBASIC programming language?",
        optionA: "IBM",
        optionB: "Microsoft",
        optionC: "Intel",
        correctAnswer: "Microsoft",
      }),
      shuffleOptions({
        question: "Which statement is used to take input from the user in QBASIC?",
        optionA: "PRINT",
        optionB: "INPUT",
        optionC: "REM",
        correctAnswer: "INPUT",
      }),
      shuffleOptions({
        question: "Which command clears the text or output from the screen?",
        optionA: "REMOVE",
        optionB: "CLS",
        optionC: "ERASE",
        correctAnswer: "CLS",
      }),
      shuffleOptions({
        question: "Which statement is used to stop the program completely?",
        optionA: "END",
        optionB: "STOP",
        optionC: "EXIT",
        correctAnswer: "END",
      }),
      shuffleOptions({
        question: "Which part of a QBASIC program holds values temporarily?",
        optionA: "Constant",
        optionB: "Variable",
        optionC: "Statement",
        correctAnswer: "Variable",
      }),
      shuffleOptions({
        question: "Which type of value is enclosed in double quotes?",
        optionA: "Numeric",
        optionB: "String",
        optionC: "Logical",
        correctAnswer: "String",
      }),
      shuffleOptions({
        question: "Which loop continues until the condition becomes false?",
        optionA: "FOR…NEXT",
        optionB: "WHILE…WEND",
        optionC: "DO…LOOP",
        correctAnswer: "WHILE…WEND",
      }),
      shuffleOptions({
        question: "What does the word Syntax refer to in QBASIC?",
        optionA: "Order of execution",
        optionB: "Rule of writing statements",
        optionC: "Loop structure",
        correctAnswer: "Rule of writing statements",
      }),
      shuffleOptions({
        question: "Which statement is used to give comments inside a program?",
        optionA: "INPUT",
        optionB: "REM",
        optionC: "PRINT",
        correctAnswer: "REM",
      }),
      shuffleOptions({
        question: "Which statement is used for unconditional jumping in QBASIC?",
        optionA: "GOTO",
        optionB: "IF",
        optionC: "EXIT",
        correctAnswer: "GOTO",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A label in QBASIC always ends with a ______.",
        optionA: "semicolon",
        optionB: "colon",
        optionC: "comma",
        correctAnswer: "colon",
      }),
      shuffleOptions({
        question: "The ______ statement assigns a value to a variable.",
        optionA: "REM",
        optionB: "LET",
        optionC: "INPUT",
        correctAnswer: "LET",
      }),
      shuffleOptions({
        question: "A QBASIC file is saved with the extension ______.",
        optionA: ".EXE",
        optionB: ".BAS",
        optionC: ".TXT",
        correctAnswer: ".BAS",
      }),
      shuffleOptions({
        question: "The ______ key is used to execute a program in QBASIC.",
        optionA: "F5",
        optionB: "F7",
        optionC: "F9",
        correctAnswer: "F5",
      }),
      shuffleOptions({
        question: "A variable ending with the symbol $ is known as a ______ variable.",
        optionA: "numeric",
        optionB: "string",
        optionC: "control",
        correctAnswer: "string",
      }),
      shuffleOptions({
        question: "The ______ statement helps in decision making.",
        optionA: "IF",
        optionB: "GOTO",
        optionC: "PRINT",
        correctAnswer: "IF",
      }),
      shuffleOptions({
        question: "The process of repeating statements is called ______.",
        optionA: "Iteration",
        optionB: "Branching",
        optionC: "Jumping",
        correctAnswer: "Iteration",
      }),
      shuffleOptions({
        question: "The statement used to leave a FOR…NEXT loop before completion is ______.",
        optionA: "BREAK",
        optionB: "EXIT",
        optionC: "STOP",
        correctAnswer: "EXIT",
      }),
      shuffleOptions({
        question: "The ______ statement displays the result or message on the screen.",
        optionA: "INPUT",
        optionB: "PRINT",
        optionC: "CLS",
        correctAnswer: "PRINT",
      }),
      shuffleOptions({
        question: "The ______ statement helps in moving the control to another part of the program.",
        optionA: "GOTO",
        optionB: "IF",
        optionC: "REM",
        correctAnswer: "GOTO",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "QBASIC was introduced in 1991.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Constants can change their values during execution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A string constant must be written inside double quotes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Numeric constants may have decimal values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "EXIT statement works in both FOR…NEXT and WHILE…WEND loops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "IF…THEN…ELSE is used for decision making in QBASIC.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CLS statement is used to give remarks in a program.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In conditional GOTO, the label to be executed depends on a variable’s value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The PRINT statement is used to take input from the user.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The syntax of a QBASIC statement defines its grammatical structure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
