export const chapter = "Chapter - 6: Fun with Paint ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary purpose of Paint program?",
        optionA: "To play games",
        optionB: "To draw and paint on the computer",
        optionC: "To write documents",
        correctAnswer: "To draw and paint on the computer",
      },
      {
        question:
          "Which section of the Paint window contains tools for drawing and coloring?",
        optionA: "Ribbon",
        optionB: "Shapes Group",
        optionC: "Colours Group",
        correctAnswer: "Ribbon",
      },
      {
        question: "What tool is used to erase any part of a drawing?",
        optionA: "Pencil Tool",
        optionB: "Fill With Colour Tool",
        optionC: "Rubber Tool",
        correctAnswer: "Rubber Tool",
      },
      {
        question: "How can you start the Paint program?",
        optionA: "Click on the File tab",
        optionB: "Click on the Start button, then Paint",
        optionC: "Click on the Shapes group",
        correctAnswer: "Click on the Start button, then Paint",
      },
      {
        question:
          "Which tool is used to fill an enclosed area with a selected color?",
        optionA: "Pencil Tool",
        optionB: "Fill With Colour Tool",
        optionC: "Text Tool",
        correctAnswer: "Fill With Colour Tool",
      },
      {
        question:
          "What group in the Paint window provides a variety of shapes tools?",
        optionA: "Ribbon",
        optionB: "Shapes Group",
        optionC: "Colours Group",
        correctAnswer: "Shapes Group",
      },
      {
        question: "How can you zoom in on a part of a drawing?",
        optionA: "Using the Text tool",
        optionB: "Using the Magnifier tool",
        optionC: "Using the Rubber tool",
        correctAnswer: "Using the Magnifier tool",
      },
      {
        question: "Which step is essential to save a drawing in Paint?",
        optionA: "Selecting the Pencil Tool",
        optionB: "Clicking on the File tab and choosing Save",
        optionC: "Choosing a shape from the Shapes Group",
        correctAnswer: "Clicking on the File tab and choosing Save",
      },
      {
        question: "What is the purpose of the Brushes tool in Paint?",
        optionA: "To select colors",
        optionB: "To draw free-form lines",
        optionC: "To provide various coloring options",
        correctAnswer: "To provide various coloring options",
      },
      {
        question: "What is the first step to use the Text tool in Paint?",
        optionA: "Click anywhere in the drawing area",
        optionB: "Select the Text tool",
        optionC: "Choose a color from the Colours group",
        correctAnswer: "Select the Text tool",
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
          "To start Paint, follow these steps: Click on the _______ button. Then click All apps. The list of all applications will appear in alphabetical order.",
        optionA: "Play",
        optionB: "Start",
        optionC: "File",
        correctAnswer: "Start",
      },
      {
        question:
          "The Paint window consists of the Drawing Area, Ribbon, Colours Group, Paint Tools, Shapes Group, and ___________.",
        optionA: "Tools Panel",
        optionB: "Brushes Tool",
        optionC: "Magnifier Tool",
        correctAnswer: "Tools Panel",
      },
      {
        question:
          "The ___________ tool is used to erase any part of your drawing.",
        optionA: "Pencil",
        optionB: "Fill with Colour",
        optionC: "Rubber",
        correctAnswer: "Rubber",
      },
      {
        question:
          "The primary purpose of Paint program is to draw and paint on the ________.",
        optionA: "Paper",
        optionB: "Screen",
        optionC: "Keyboard",
        correctAnswer: "Screen",
      },
      {
        question:
          "The ___________ tool is used to pick a color from the picture and use it for drawing.",
        optionA: "Magnifier",
        optionB: "Colour Picker",
        optionC: "Pencil",
        correctAnswer: "Colour Picker",
      },
      {
        question:
          "The _________ group in Paint provides a variety of shapes tools.",
        optionA: "Ribbon",
        optionB: "Shapes Group",
        optionC: "Colours Group",
        correctAnswer: "Shapes Group",
      },
      {
        question:
          "The tool used for zooming in on a part of a drawing is the _________.",
        optionA: "Text Tool",
        optionB: "Magnifier Tool",
        optionC: "Rubber Tool",
        correctAnswer: "Magnifier Tool",
      },
      {
        question:
          "To save a drawing in Paint, click on the ________ tab and select the Save or Save As option.",
        optionA: "File",
        optionB: "Edit",
        optionC: "View",
        correctAnswer: "File",
      },
      {
        question:
          "The Brushes tool in Paint provides various ________ options to be used in your drawing.",
        optionA: "Drawing",
        optionB: "Colouring",
        optionC: "Pencil",
        correctAnswer: "Colouring",
      },
      {
        question:
          "The first step to use the Text tool in Paint is to _________.",
        optionA: "Click anywhere in the drawing area",
        optionB: "Select the Text tool",
        optionC: "Choose a color from the Colours group",
        correctAnswer: "Select the Text tool",
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
          "The Paint program allows users to draw pictures and paint them on the computer screen.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Ribbon in Paint contains tools and options for drawing and coloring.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Fill with Colour tool in Paint is used to erase any part of a drawing.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The purpose of the Brushes tool in Paint is to provide various coloring options.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Shapes Group in Paint provides tools for drawing various shapes like lines, rectangles, and triangles.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Magnifier tool in Paint is used to zoom in on a part of the drawing.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The Text tool in Paint is used to pick colors from the picture and use them for drawing.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "To start Paint, one needs to click on the Shapes group from the menu.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Incorrect",
      },
      {
        question:
          "The Rubber tool in Paint is used to erase any part of the drawing.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
      {
        question:
          "The File tab in Paint is used for saving or printing drawings.",
        optionA: "Correct",
        optionB: "Incorrect",
        correctAnswer: "Correct",
      },
    ],
  };
}

export var activityData;
