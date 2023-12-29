export const chapter = "Chapter - 7: Introduction to MSWLogo";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is Logo primarily used for?",
          optionA: "Performing complex calculations",
          optionB: "Drawing figures and designs",
          optionC: "Writing sentences",
          correctAnswer: "Drawing figures and designs",
        },
        {
          question: "What is the function of the turtle in MSWLogo?",
          optionA: "It's the Logo's cursor",
          optionB: "It executes commands",
          optionC: "It displays error messages",
          correctAnswer: "It's the Logo's cursor",
        },
        {
          question:
            "Which window in MSWLogo is used for typing and executing commands?",
          optionA: "Main Screen",
          optionB: "Commander Window",
          optionC: "Input Box",
          correctAnswer: "Input Box",
        },
        {
          question: "What happens when the Halt button is pressed in MSWLogo?",
          optionA: "It starts the program execution",
          optionB: "It stops Logo from processing further",
          optionC: "It resets the Logo output screen",
          correctAnswer: "It stops Logo from processing further",
        },
        {
          question: "What does the Trace button do in MSWLogo?",
          optionA: "Executes the commands",
          optionB: "Turns on tracing for debugging",
          optionC: "Displays current settings",
          correctAnswer: "Turns on tracing for debugging",
        },
        {
          question: "How can you exit MSWLogo?",
          optionA: "Type BYE and press Enter key",
          optionB: "Click the Execute button",
          optionC: "Press the Halt button",
          correctAnswer: "Type BYE and press Enter key",
        },
        {
          question: "What are the functions of MSWLogo?",
          optionA: "Drawing only",
          optionB:
            "Drawing, logical operations, calculations, and writing sentences",
          optionC: "Logical operations only",
          correctAnswer:
            "Drawing, logical operations, calculations, and writing sentences",
        },
        {
          question:
            "Which part of the MSWLogo screen is responsible for executing typed commands?",
          optionA: "Commander Window",
          optionB: "Main Screen",
          optionC: "Input Box",
          correctAnswer: "Input Box",
        },
        {
          question: "What is the purpose of the Pause button in MSWLogo?",
          optionA: "Stops the execution for examining instructions",
          optionB: "Executes the program",
          optionC: "Displays current settings",
          correctAnswer: "Stops the execution for examining instructions",
        },
        {
          question: "What are Logo commands referred to as?",
          optionA: "Executives",
          optionB: "Primitives",
          optionC: "Directives",
          correctAnswer: "Primitives",
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
            "In MSWLogo, the pen used for drawing is called a _________.",
          optionA: "Pencil",
          optionB: "Brush",
          optionC: "Turtle",
          correctAnswer: "Turtle",
        },
        {
          question:
            "The MSWLogo screen consists of two main parts: the Main or Graphic Screen and the _________.",
          optionA: "Command Panel",
          optionB: "Commander Window",
          optionC: "Input Area",
          correctAnswer: "Commander Window",
        },
        {
          question:
            "The area where all the MSWLogo commands are typed and executed is known as the _________.",
          optionA: "Output Box",
          optionB: "Commander's Desk",
          optionC: "Input Box",
          correctAnswer: "Input Box",
        },
        {
          question:
            "The button used to immediately stop further processing in MSWLogo is the _________.",
          optionA: "Pause",
          optionB: "Halt",
          optionC: "Stop",
          correctAnswer: "Halt",
        },
        {
          question:
            "The function of the Trace button in MSWLogo is to facilitate _________.",
          optionA: "Execution",
          optionB: "Debugging",
          optionC: "Displaying Settings",
          correctAnswer: "Debugging",
        },
        {
          question:
            "To exit MSWLogo, typing _________ and pressing Enter is one method.",
          optionA: "EXIT",
          optionB: "QUIT",
          optionC: "BYE",
          correctAnswer: "BYE",
        },
        {
          question: "The Logo commands are commonly known as _________.",
          optionA: "Directives",
          optionB: "Primitives",
          optionC: "Procedures",
          correctAnswer: "Primitives",
        },
        {
          question: "The primary function of MSWLogo involves _________.",
          optionA: "Only Drawing",
          optionB: "Drawing, Logical Operations, and Calculations",
          optionC: "Only Calculations",
          correctAnswer: "Drawing, Logical Operations, and Calculations",
        },
        {
          question:
            "The Commander Window in MSWLogo is used primarily for _________.",
          optionA: "Drawing Figures",
          optionB: "Typing and Executing Commands",
          optionC: "Displaying Results",
          correctAnswer: "Typing and Executing Commands",
        },
        {
          question:
            "The MSWLogo cursor, also known as the _________, is responsible for drawing on the Logo screen.",
          optionA: "Pointer",
          optionB: "Turtle",
          optionC: "Marker",
          correctAnswer: "Turtle",
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
            "The MSWLogo pen used for drawing is referred to as a 'Brush'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Commander Window in MSWLogo is primarily used for displaying results.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "MSWLogo commands are commonly known as 'Procedures'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The primary function of MSWLogo is limited to performing calculations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Trace button in MSWLogo is used for executing commands.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Typing 'EXIT' and pressing Enter is the method to exit MSWLogo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Logo commands in MSWLogo are primarily referred to as 'Directives'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Commander Window in MSWLogo is used for typing and executing commands.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The MSWLogo cursor responsible for drawing is known as a 'Turtle'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Halt button in MSWLogo stops Logo from further processing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
