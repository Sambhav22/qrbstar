export const chapter = "Chapter - 1: Languages of Computer";
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
        question: "Who developed the C language in 1972?",
        optionA: "Charles Babbage",
        optionB: "Dennis Ritchie",
        optionC: "Bill Gates",
        correctAnswer: "Dennis Ritchie",
      }),
      shuffleOptions({
        question: "Which type of language was used in first-generation computers?",
        optionA: "High-level language",
        optionB: "Assembly language",
        optionC: "Machine language",
        correctAnswer: "Machine language",
      }),
      shuffleOptions({
        question: "Which language was used for writing Artificial Intelligence programs?",
        optionA: "LOGO",
        optionB: "LISP",
        optionC: "BASIC",
        correctAnswer: "LISP",
      }),
      shuffleOptions({
        question: "Which program translates an entire program at once?",
        optionA: "Interpreter",
        optionB: "Compiler",
        optionC: "Assembler",
        correctAnswer: "Compiler",
      }),
      shuffleOptions({
        question: "Who invented the LOGO language?",
        optionA: "Thomas Kurtz",
        optionB: "Seymour Papert",
        optionC: "John McCarthy",
        correctAnswer: "Seymour Papert",
      }),
      shuffleOptions({
        question: "Which language is mainly used for database work?",
        optionA: "LOGO",
        optionB: "C",
        optionC: "SQL",
        correctAnswer: "SQL",
      }),
      shuffleOptions({
        question: "Which generation of computers introduced high-level languages?",
        optionA: "First",
        optionB: "Second",
        optionC: "Third",
        correctAnswer: "Third",
      }),
      shuffleOptions({
        question: "Which program converts assembly language into machine language?",
        optionA: "Compiler",
        optionB: "Assembler",
        optionC: "Interpreter",
        correctAnswer: "Assembler",
      }),
      shuffleOptions({
        question: "Which company developed the Java language?",
        optionA: "Microsoft",
        optionB: "Sun Microsystems",
        optionC: "IBM",
        correctAnswer: "Sun Microsystems",
      }),
      shuffleOptions({
        question: "What do binary digits 0 and 1 represent?",
        optionA: "True and False",
        optionB: "ON and OFF",
        optionC: "Start and Stop",
        correctAnswer: "ON and OFF",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "High-level languages were introduced in the _________ generation of computers.",
        optionA: "Second",
        optionB: "Third",
        optionC: "Fourth",
        correctAnswer: "Third",
      }),
      shuffleOptions({
        question: "A program written in machine code contains a series of _________.",
        optionA: "Symbols",
        optionB: "Letters",
        optionC: "Binary digits",
        correctAnswer: "Binary digits",
      }),
      shuffleOptions({
        question: "A compiler translates the entire program at _________.",
        optionA: "A time",
        optionB: "Many times",
        optionC: "Line by line",
        correctAnswer: "A time",
      }),
      shuffleOptions({
        question: "Low-level languages are _________ dependent.",
        optionA: "User",
        optionB: "Machine",
        optionC: "System",
        correctAnswer: "Machine",
      }),
      shuffleOptions({
        question: "High-level languages are _________ to debug and maintain.",
        optionA: "Difficult",
        optionB: "Easy",
        optionC: "Impossible",
        correctAnswer: "Easy",
      }),
      shuffleOptions({
        question: "The device that converts assembly language to machine code is an _________.",
        optionA: "Assembler",
        optionB: "Compiler",
        optionC: "Interpreter",
        correctAnswer: "Assembler",
      }),
      shuffleOptions({
        question: "Machine language uses only _________.",
        optionA: "Letters",
        optionB: "Words",
        optionC: "0 and 1",
        correctAnswer: "0 and 1",
      }),
      shuffleOptions({
        question: "C language was used to write the _________ operating system.",
        optionA: "UNIX",
        optionB: "Windows",
        optionC: "Linux",
        correctAnswer: "UNIX",
      }),
      shuffleOptions({
        question: "Visual Basic belongs to _________ languages.",
        optionA: "Procedure-oriented",
        optionB: "Problem-oriented",
        optionC: "Low-level",
        correctAnswer: "Problem-oriented",
      }),
      shuffleOptions({
        question: "LOGO was invented in _________.",
        optionA: "1972",
        optionB: "1995",
        optionC: "1967",
        correctAnswer: "1967",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Machine language is user-friendly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "High-level languages require a translator to run.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "LOGO was developed in 1995.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "C language is a problem-oriented language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Assembly language uses mnemonic codes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Low-level languages were used in first and second generation computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Java was created by Seymour Papert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "LISP was invented by John McCarthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A compiler translates code line by line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "High-level languages are machine independent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
