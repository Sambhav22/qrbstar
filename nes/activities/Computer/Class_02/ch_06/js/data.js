export const chapter = "Chapter - 6: More on Tux Paint ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "How can you start Tux Paint in a windowed mode?",
        optionA: "Click on the Stamp tool",
        optionB: "Click on the Open button",
        optionC: "Click on Tux Paint (Windowed) in the Tux Paint folder",
        correctAnswer: "Click on Tux Paint (Windowed) in the Tux Paint folder",
      },
      {
        question:
          "Which tool is used to paste images in drawings in Tux Paint?",
        optionA: "Shapes tool",
        optionB: "Text tool",
        optionC: "Stamp tool",
        correctAnswer: "Stamp tool",
      },
      {
        question: "What is the purpose of the Shapes tool in Tux Paint?",
        optionA: "Pasting images",
        optionB: "Drawing simple shapes",
        optionC: "Typing letters and numbers",
        correctAnswer: "Drawing simple shapes",
      },
      {
        question:
          "How do you use the Text tool in Tux Paint to type text on the canvas?",
        optionA: "Click on the Shapes tool",
        optionB: "Select a color from the Colors",
        optionC:
          "Click on the Text tool, select a color, click on the canvas, type text",
        correctAnswer:
          "Click on the Text tool, select a color, click on the canvas, type text",
      },
      {
        question: "Which tool is used to erase parts of drawings in Tux Paint?",
        optionA: "Stamp tool",
        optionB: "Magic tool",
        optionC: "Eraser tool",
        correctAnswer: "Eraser tool",
      },
      {
        question: "What does the Magic tool do in Tux Paint?",
        optionA: "Erases drawings",
        optionB: "Adds special effects",
        optionC: "Draws simple shapes",
        correctAnswer: "Adds special effects",
      },
      {
        question: "What action does the 'Undo' button perform in Tux Paint?",
        optionA: "Saves the drawing",
        optionB: "Cancels the last drawing action",
        optionC: "Opens a new drawing",
        correctAnswer: "Cancels the last drawing action",
      },
      {
        question: "What is the function of the 'Redo' button in Tux Paint?",
        optionA: "Erases the drawing",
        optionB: "Repeats the last drawing action",
        optionC: "Opens an already saved drawing",
        correctAnswer: "Repeats the last drawing action",
      },
      {
        question:
          "How can you save a drawing in Tux Paint while keeping the already saved version intact?",
        optionA: "Clicking on 'v'",
        optionB: "Clicking on '\"I-'",
        optionC: "Clicking on the Save button directly",
        correctAnswer: "Clicking on '\"I-'",
      },
      {
        question: "How do you open an already saved drawing in Tux Paint?",
        optionA: "Click on the Shapes tool",
        optionB: "Click on the Open button and select the drawing",
        optionC: "Click on the Magic tool",
        correctAnswer: "Click on the Open button and select the drawing",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "To start Tux Paint in windowed mode, one needs to click on the Tux Paint folder after clicking the ___ button.",
        optionA: "Start",
        optionB: "Tools",
        optionC: "Save",
        correctAnswer: "Start",
      },
      {
        question:
          "The ___ tool in Tux Paint allows users to paste images in drawings.",
        optionA: "Shapes",
        optionB: "Stamp",
        optionC: "Text",
        correctAnswer: "Stamp",
      },
      {
        question: "The ___ tool enables drawing simple shapes in Tux Paint.",
        optionA: "Stamp",
        optionB: "Shapes",
        optionC: "Text",
        correctAnswer: "Shapes",
      },
      {
        question:
          "The Text tool in Tux Paint is used to type letters and numbers on the ___.",
        optionA: "Colors",
        optionB: "Selector",
        optionC: "Drawing canvas",
        correctAnswer: "Drawing canvas",
      },
      {
        question:
          "The ___ tool is utilized for erasing parts of drawings in Tux Paint.",
        optionA: "Stamp",
        optionB: "Magic",
        optionC: "Eraser",
        correctAnswer: "Eraser",
      },
      {
        question: "The Magic tool in Tux Paint adds ___ to drawings.",
        optionA: "Shapes",
        optionB: "Effects",
        optionC: "Colors",
        correctAnswer: "Effects",
      },
      {
        question:
          "Clicking on the 'Undo' button in Tux Paint ___ the last drawing action.",
        optionA: "Saves",
        optionB: "Repeats",
        optionC: "Cancels",
        correctAnswer: "Cancels",
      },
      {
        question:
          "The 'Redo' button in Tux Paint repeats the ___ drawing action.",
        optionA: "First",
        optionB: "Last",
        optionC: "Current",
        correctAnswer: "Last",
      },
      {
        question:
          "To save a drawing while retaining the previous version in Tux Paint, one needs to click on ___.",
        optionA: "'v'",
        optionB: "'\"I-'",
        optionC: "Save",
        correctAnswer: "'\"I-'",
      },
      {
        question:
          "Opening an already saved drawing in Tux Paint involves clicking on the ___ button and selecting the drawing.",
        optionA: "Save",
        optionB: "Open",
        optionC: "Tools",
        correctAnswer: "Open",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "In order to start Tux Paint in windowed mode, clicking on the Tux Paint (Windowed) in the Tux Paint folder is necessary.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Shapes tool in Tux Paint is primarily used for pasting images into drawings.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The Text tool in Tux Paint is capable of drawing simple shapes.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The Eraser tool in Tux Paint is used for adding special effects to drawings.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The 'Undo' button in Tux Paint repeats the last drawing action.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The 'Redo' button in Tux Paint cancels the last drawing action.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "Clicking 'Save' in Tux Paint directly saves the current drawing without any prompts.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The 'Open' button in Tux Paint is solely used to close the current drawing.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question: "The Magic tool in Tux Paint erases drawings.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "Members of a family usually don't celebrate festivals, birthdays, or special occasions together.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
    ],
  };
}

export var activityData;
