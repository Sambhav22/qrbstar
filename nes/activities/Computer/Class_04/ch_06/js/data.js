export const chapter = "Chapter - 6: Drawing in MSWLogo ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is a polygon in the context of Logo programming?",
          optionA: "A turtle command",
          optionB: "A closed figure with a specific number of edges",
          optionC: "A drawing tool",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following commands brings the turtle back to its original position?",
          optionA: "PENUP",
          optionB: "PENDOWN",
          optionC: "HOME",
          correctAnswer: "C",
        },
        {
          question: "What does the PENERASE command do in Logo programming?",
          optionA: "Picks up the eraser",
          optionB: "Draws a line",
          optionC: "Sets the color of the brush",
          correctAnswer: "A",
        },
        {
          question: "Which command is used to hide the turtle on the screen?",
          optionA: "HIDETURTLE",
          optionB: "SHOWTURTLE",
          optionC: "REPEAT",
          correctAnswer: "A",
        },
        {
          question:
            "What does the REPEAT command in Logo programming help to achieve?",
          optionA: "Change pen color",
          optionB: "Write instructions in one line instead of multiple times",
          optionC: "Hide the turtle",
          correctAnswer: "B",
        },
        {
          question:
            "What is the purpose of the SETPENCOLOR command in Logo programming?",
          optionA: "Change background color",
          optionB: "Set the color of the pen",
          optionC: "Hide the turtle",
          correctAnswer: "B",
        },
        {
          question:
            "How many primary colors does Logo use for setting pen color?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "B",
        },
        {
          question:
            "What command is used to flood or fill an area with the color of the brush in Logo?",
          optionA: "SETSCREENCOLOR",
          optionB: "SETFLOODCOLOR",
          optionC: "FILL",
          correctAnswer: "C",
        },
        {
          question:
            "Which command sets the color of the background of the screen in Logo?",
          optionA: "SETFC",
          optionB: "SETSCREENCOLOR",
          optionC: "SETPC",
          correctAnswer: "B",
        },
        {
          question: "How can you save a Logo picture for further use?",
          optionA: "Click on Save As in the menu bar",
          optionB: "Use the PENNORMAL command",
          optionC: "Execute the REPEAT command",
          correctAnswer: "A",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Polygon is the name for all the closed figures with a certain number of ____. ",
          optionA: "Angles",
          optionB: "Vertices",
          optionC: "Edges",
          correctAnswer: "Edges",
        },
        {
          question:
            "HOME is the original position of the turtle on the drawing screen. The HOME command brings the turtle back to its ____ position.",
          optionA: "Previous",
          optionB: "Home",
          optionC: "End",
          correctAnswer: "Home",
        },
        {
          question:
            "PENUP or PU command is used to move the turtle to any part of the screen, without drawing a ____. ",
          optionA: "Square",
          optionB: "Circle",
          optionC: "Line",
          correctAnswer: "Line",
        },
        {
          question:
            "PU command is always followed by the PENDOWN or PD command. On giving PENDOWN command, the turtle pen rests on the screen again and begins to ____. ",
          optionA: "Fly",
          optionB: "Walk",
          optionC: "Draw",
          correctAnswer: "Draw",
        },
        {
          question:
            "PEN ERASE or PE command drops the pen of the turtle and picks up the ____. ",
          optionA: "Pencil",
          optionB: "Brush",
          optionC: "Eraser",
          correctAnswer: "Eraser",
        },
        {
          question:
            "PENNORMAL command makes the turtle behave ____. After using PE, the turtle can draw anything.",
          optionA: "Crazy",
          optionB: "Normal",
          optionC: "Fast",
          correctAnswer: "Normal",
        },
        {
          question:
            "HIDETURTLE or HT command hides the turtle. You can no longer see it on the ____. ",
          optionA: "Floor",
          optionB: "Screen",
          optionC: "Wall",
          correctAnswer: "Screen",
        },
        {
          question:
            "SETPENCOLOR or SETPC command is used to give color to the ____. ",
          optionA: "Background",
          optionB: "Pen of the turtle",
          optionC: "Screen",
          correctAnswer: "Pen of the turtle",
        },
        {
          question:
            "Logo uses the three primary colors - Red, Green, and Blue in different combinations to give colors to the ____. ",
          optionA: "Turtle",
          optionB: "Background",
          optionC: "Pen",
          correctAnswer: "Pen",
        },
        {
          question:
            "SETSCREENCOLOR or SETSC command sets the color of the background of the ____. ",
          optionA: "Turtle",
          optionB: "Screen",
          optionC: "Pen",
          correctAnswer: "Screen",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The HOME command in Logo brings the turtle back to its original position.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The PENDOWN command in Logo is used to lift the turtle's pen from the screen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The PENERASE command in Logo is used to draw lines on the screen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The SETPENCOLOR command in Logo is used to change the color of the turtle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The REPEAT command in Logo is used to avoid repetition of the same commands.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The SETSC command in Logo sets the color of the pen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Andaman and Nicobar Islands are volcanic in origin.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Northern Circars is the southern part of the Eastern Coastal Plains.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The SETFLOODCOLOR command in Logo sets the color of the background.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The FILL command in Logo is used to flood an area with the color of the brush.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
