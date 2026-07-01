export const chapter = "Chapter - 5: Handling a Mouse";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What are the three main parts of a mouse?",
        options: {
          A: "Left click, right click, touchpad",
          B: "Left button, right button, scroll wheel",
          C: "Scroll wheel, touchpad, double-click",
        },
        answer: "B",
      },
      {
        question: "What does the scroll wheel on a mouse help you do?",
        options: {
          A: "Change colors on the screen",
          B: "Move or scroll the page up or down",
          C: "Open files and documents",
        },
        answer: "B",
      },
      {
        question:
          "Which part of the mouse is used for clicking and is on the left side?",
        options: {
          A: "Scroll wheel",
          B: "Right button",
          C: "Left button",
        },
        answer: "C",
      },
      {
        question: "What does the mouse pointer represent on a computer screen?",
        options: {
          A: "Cursor movement",
          B: "Typing speed",
          C: "Screen brightness",
        },
        answer: "A",
      },
      {
        question:
          "Which type of mouse is helpful for eliminating wires connected to the CPU cabinet?",
        options: {
          A: "Optical Mouse",
          B: "Wireless Mouse",
          C: "Trackball Mouse",
        },
        answer: "B",
      },
      {
        question: "How should a mouse be held properly?",
        options: {
          A: "With the thumb on the scroll wheel",
          B: "With the index finger on the right button",
          C: "With the palm resting on it and the thumb on the left side",
        },
        answer: "C",
      },
      {
        question: "What action helps select an icon on the computer screen?",
        options: {
          A: "Right-click",
          B: "Drag-and-Drop",
          C: "Single-click or left-click",
        },
        answer: "C",
      },
      {
        question: "What does a double-click action do on a computer?",
        options: {
          A: "Closes windows",
          B: "Opens files and documents",
          C: "Refreshes the screen",
        },
        answer: "B",
      },
      {
        question: "What is the purpose of a right-click on the mouse?",
        options: {
          A: "Displays a list of commands",
          B: "Deletes files instantly",
          C: "Increases font size",
        },
        answer: "A",
      },
      {
        question: "What does 'drag-and-drop' involve using a mouse?",
        options: {
          A: "Moving icons from one screen to another",
          B: "Changing the color of icons",
          C: "Changing the position of icons on the screen",
        },
        answer: "C",
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
          "The three parts of a mouse are the left button, right button, and ____________.",
        options: {
          A: "Touchpad",
          B: "Scroll wheel",
          C: "Double-click",
        },
        answer: "B",
      },
      {
        question:
          "The arrow head on the computer screen is called the mouse ____________.",
        options: {
          A: "Controller",
          B: "Cursor",
          C: "Scroller",
        },
        answer: "B",
      },
      {
        question:
          "An optical mouse has an optical sensor for its ____________.",
        options: {
          A: "Accuracy",
          B: "Movement",
          C: "Battery life",
        },
        answer: "B",
      },
      {
        question:
          "The technique for holding a mouse involves resting your palm on it while your thumb rests on the ____________ side of the mouse.",
        options: {
          A: "Right",
          B: "Left",
          C: "Middle",
        },
        answer: "B",
      },
      {
        question:
          "Left-clicking or single-clicking is performed by pressing the left mouse button once with your ____________ finger and releasing it.",
        options: {
          A: "Thumb",
          B: "Index",
          C: "Middle",
        },
        answer: "B",
      },
      {
        question:
          "Double-clicking involves pressing the left mouse button ____________ and releasing it quickly.",
        options: {
          A: "Once",
          B: "Twice",
          C: "Thrice",
        },
        answer: "B",
      },
      {
        question: "Right-clicking on a mouse displays a list of ____________.",
        options: {
          A: "Commands",
          B: "Colors",
          C: "Sizes",
        },
        answer: "A",
      },
      {
        question:
          "Drag-and-drop is used to change the ____________ of icons on the screen.",
        options: {
          A: "Color",
          B: "Size",
          C: "Position",
        },
        answer: "C",
      },
      {
        question:
          "To select an icon on the computer, we use ____________ to point to the icon and then click the left button.",
        options: {
          A: "Double-click",
          B: "Right-click",
          C: "Single-click or left-click",
        },
        answer: "C",
      },
      {
        question:
          "The scroll wheel on a mouse is used to move or scroll the page ____________ or ____________.",
        options: {
          A: "Left, right",
          B: "Up, down",
          C: "Diagonally, sideways",
        },
        answer: "B",
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
          "The left button of a mouse is used for clicking and is located on the left side.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question:
          "Drag-and-drop is a method used to change the position of icons on the computer screen.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question:
          "An optical mouse utilizes an optical sensor for its movement.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question: "Right-clicking on a mouse displays a list of colors.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "The scroll wheel on a mouse is used solely to change the font size on a computer screen.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "Double-clicking involves pressing the left mouse button three times in quick succession.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "Holding a mouse involves resting your palm on it while your thumb rests on the right side of the mouse.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "The arrow head on the computer screen is called the mouse controller.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "Wireless mice are beneficial for eliminating wires connected to the CPU cabinet.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question:
          "Single-clicking or left-clicking is performed by pressing the left mouse button once and releasing it.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
    ],
  };
}

export var activityData;
