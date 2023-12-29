export const chapter = "Chapter - 7: Tux Paint ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "How do you start Tux Paint?",
            options: {
              a: "Click on New",
              b: "Click on Lines",
              c: "Click on Tux Paint",
            },
            answer: "c",
          },
          {
            question: "What appears after clicking on Tux Paint?",
            options: {
              a: "New file creation",
              b: "Main screen",
              c: "Drawing canvas",
            },
            answer: "b",
          },
          {
            question: "Which tool helps in creating a new drawing?",
            options: {
              a: "Paint",
              b: "Magic",
              c: "New",
            },
            answer: "c",
          },
          {
            question: "What does the paint tool allow users to do?",
            options: {
              a: "Create straight lines",
              b: "Draw using different brushes",
              c: "Apply colorful effects",
            },
            answer: "b",
          },
          {
            question: "What is the purpose of the lines tool?",
            options: {
              a: "Fill colors",
              b: "Draw straight lines",
              c: "Create magical effects",
            },
            answer: "b",
          },
          {
            question:
              "Which tool provides colorful effects like fill and blur?",
            options: {
              a: "New tool",
              b: "Paint tool",
              c: "Magic tool",
            },
            answer: "c",
          },
          {
            question: "How is a new file created using the new tool?",
            options: {
              a: "Click on a solid background color",
              b: "Select a brush size",
              c: "Click on Lines",
            },
            answer: "a",
          },
          {
            question: "What action does the save tool allow?",
            options: {
              a: "Exit Tux Paint",
              b: "Save current drawing",
              c: "Create a new file",
            },
            answer: "b",
          },
          {
            question:
              "What happens if you choose to quit Tux Paint without saving?",
            options: {
              a: "Drawing gets automatically saved",
              b: "Prompted to save the drawing",
              c: "No prompt, Tux Paint closes",
            },
            answer: "b",
          },
          {
            question: "How do you exit Tux Paint?",
            options: {
              a: "Click on Magic",
              b: "Click on Quit",
              c: "Click on Lines",
            },
            answer: "b",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "To start Tux Paint, click on Start rii button, then click All apps and scroll down the apps until you find ________.",
            options: {
              a: "New",
              b: "Tux Paint",
              c: "Paint tool",
            },
            answer: "b",
          },
          {
            question:
              "The title screen of Tux Paint will appear and after a few seconds, it will disappear, revealing the ________.",
            options: {
              a: "Drawing canvas",
              b: "Main screen",
              c: "Magic tool",
            },
            answer: "b",
          },
          {
            question:
              "The ________ tool in Tux Paint helps create a new drawing.",
            options: {
              a: "Lines",
              b: "New",
              c: "Magic",
            },
            answer: "b",
          },
          {
            question:
              "Using the paint tool requires selecting a color from the colors and choosing a size of ________ from the brushes.",
            options: {
              a: "Pencil",
              b: "Eraser",
              c: "Brush",
            },
            answer: "c",
          },
          {
            question:
              "The lines tool allows users to draw ________ lines on the drawing canvas.",
            options: {
              a: "Curvy",
              b: "Straight",
              c: "Dotted",
            },
            answer: "b",
          },
          {
            question:
              "The ________ tool provides various colorful effects like fill, blur, and bricks in Tux Paint.",
            options: {
              a: "New",
              b: "Magic",
              c: "Paint",
            },
            answer: "b",
          },
          {
            question:
              "Clicking on the new tool and then double-clicking on a solid background color or a starter image opens a ________ file.",
            options: {
              a: "Saved",
              b: "Blank",
              c: "Modified",
            },
            answer: "b",
          },
          {
            question:
              "The save tool in Tux Paint allows users to save their current drawing without specifying a ________ or location.",
            options: {
              a: "File name",
              b: "Size",
              c: "Color",
            },
            answer: "a",
          },
          {
            question:
              "If one chooses to quit Tux Paint without saving the current picture, they will be prompted to ________.",
            options: {
              a: "Reopen the picture",
              b: "Save the picture",
              c: "Discard changes",
            },
            answer: "b",
          },
          {
            question:
              "To exit Tux Paint, click on the ________ tool, and you'll be prompted whether you really want to quit.",
            options: {
              a: "Magic",
              b: "Paint",
              c: "Quit",
            },
            answer: "c",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "School buildings are typically very small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Students sit in the classroom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A classroom has a table and chair for the teacher.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The canteen is a place to offer books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The principal's office is a place where the principal sits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The playground is used for learning computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "A library is full of different books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "An auditorium is used for conducting functions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A music and dance room is where students play music and dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Students go to school every day to eat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
