export const chapter = "Chapter - 4: Editing in Word";
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
        question: "Which key is used to move the insertion point to the next line?",
        optionA: "Spacebar",
        optionB: "Enter",
        optionC: "Shift",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "Which command helps to repeat the last action done in Word?",
        optionA: "Undo",
        optionB: "Redo",
        optionC: "Paste",
        correctAnswer: "Redo",
      }),
      shuffleOptions({
        question: "Which key deletes the text to the left of the cursor?",
        optionA: "Delete",
        optionB: "Enter",
        optionC: "Backspace",
        correctAnswer: "Backspace",
      }),
      shuffleOptions({
        question: "Which toolbar contains the Undo and Redo buttons?",
        optionA: "Ribbon",
        optionB: "Quick Access Toolbar",
        optionC: "Status Bar",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "Which key is used to add spaces between words?",
        optionA: "Tab",
        optionB: "Enter",
        optionC: "Spacebar",
        correctAnswer: "Spacebar",
      }),
      shuffleOptions({
        question: "Which command reverts the previous action?",
        optionA: "Redo",
        optionB: "Undo",
        optionC: "Delete",
        correctAnswer: "Undo",
      }),
      shuffleOptions({
        question: "What is the purpose of the Spelling and Grammar feature in Word?",
        optionA: "To insert tables",
        optionB: "To correct typing and grammar errors",
        optionC: "To design pictures",
        correctAnswer: "To correct typing and grammar errors",
      }),
      shuffleOptions({
        question: "Which shortcut key is used to copy selected text?",
        optionA: "Ctrl + X",
        optionB: "Ctrl + C",
        optionC: "Ctrl + V",
        correctAnswer: "Ctrl + C",
      }),
      shuffleOptions({
        question: "Which line appears under wrongly spelt words in Word?",
        optionA: "Blue straight line",
        optionB: "Red wavy line",
        optionC: "Green zigzag line",
        correctAnswer: "Red wavy line",
      }),
      shuffleOptions({
        question: "Which key deletes the text to the right of the insertion point?",
        optionA: "Backspace",
        optionB: "Delete",
        optionC: "Tab",
        correctAnswer: "Delete",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Undo command is used to ______ the last action.",
        optionA: "cancel",
        optionB: "repeat",
        optionC: "paste",
        correctAnswer: "cancel",
      }),
      shuffleOptions({
        question: "The Redo command works ______ the Undo command.",
        optionA: "opposite to",
        optionB: "same as",
        optionC: "before",
        correctAnswer: "opposite to",
      }),
      shuffleOptions({
        question: "The cursor in a Word document is called the ______.",
        optionA: "text pointer",
        optionB: "insertion point",
        optionC: "status bar",
        correctAnswer: "insertion point",
      }),
      shuffleOptions({
        question: "The Spelling and Grammar feature shows wrong spellings with a ______ line.",
        optionA: "red wavy",
        optionB: "blue straight",
        optionC: "green",
        correctAnswer: "red wavy",
      }),
      shuffleOptions({
        question: "To delete text to the left of the cursor, press the ______ key.",
        optionA: "Delete",
        optionB: "Enter",
        optionC: "Backspace",
        correctAnswer: "Backspace",
      }),
      shuffleOptions({
        question: "Press ______ to select the entire text in a document.",
        optionA: "Ctrl + A",
        optionB: "Ctrl + C",
        optionC: "Ctrl + V",
        correctAnswer: "Ctrl + A",
      }),
      shuffleOptions({
        question: "To move to the next paragraph, press the ______ key.",
        optionA: "Shift",
        optionB: "Enter",
        optionC: "Tab",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "Word is a ______ software.",
        optionA: "spreadsheet",
        optionB: "word processing",
        optionC: "drawing",
        correctAnswer: "word processing",
      }),
      shuffleOptions({
        question: "Grammatical errors are shown with ______ lines.",
        optionA: "blue",
        optionB: "red",
        optionC: "green",
        correctAnswer: "blue",
      }),
      shuffleOptions({
        question: "The Redo command is also known as the ______ command.",
        optionA: "repeat",
        optionB: "reverse",
        optionC: "replace",
        correctAnswer: "repeat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "MS Word is used to type and edit text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Backspace key deletes text to the right of the cursor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Undo and Redo commands are on the Quick Access Toolbar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spelling errors appear with blue lines under them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Enter key helps to start a new line or paragraph.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grammatical mistakes are shown with blue lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delete key removes text to the right of the cursor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Redo command repeats the last action.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ctrl + C is used to paste the selected text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The insertion point shows where the next text will appear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
