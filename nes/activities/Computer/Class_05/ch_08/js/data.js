export const chapter = "Chapter - 8: More About Scratch";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of Sensing blocks in Scratch?",
          optionA: "To create conditional statements",
          optionB: "To sense user input through keyboard or mouse",
          optionC: "To store data in variables",
          correctAnswer: "To sense user input through keyboard or mouse",
        },
        {
          question:
            "Which Sensing block prompts the user to type input using the keyboard?",
          optionA: "If then block",
          optionB: "ask block",
          optionC: "Conditional block",
          correctAnswer: "ask block",
        },
        {
          question: "How does the If then block in Scratch work?",
          optionA:
            "It runs the blocks inside if the condition is true; otherwise, it runs the blocks inside else.",
          optionB: "It checks if a chosen key is pressed.",
          optionC: "It prompts the user to type input using the keyboard.",
          correctAnswer:
            "It runs the blocks inside if the condition is true; otherwise, it runs the blocks inside else.",
        },
        {
          question: "What is the role of Variables in Scratch programming?",
          optionA: "To create conditions",
          optionB: "To store input data in computer memory",
          optionC: "To execute scripts based on user input",
          correctAnswer: "To store input data in computer memory",
        },
        {
          question:
            "In Scratch, how is input data stored in a computer's memory?",
          optionA: "In the form of numbers, text, date, or pictures",
          optionB: "In conditional blocks",
          optionC: "In Sensing blocks",
          correctAnswer: "In the form of numbers, text, date, or pictures",
        },
        {
          question:
            "Which type of block is used when a task depends on certain conditions in Scratch?",
          optionA: "Motion block",
          optionB: "Sensing block",
          optionC: "Conditional block",
          correctAnswer: "Conditional block",
        },
        {
          question: "What does the If then ... else block do in Scratch?",
          optionA: "It prompts the user to type input.",
          optionB:
            "It runs the blocks inside if the condition is true; otherwise, it runs the blocks inside else.",
          optionC: "It checks if the scripts touch the mouse pointer.",
          correctAnswer:
            "It runs the blocks inside if the condition is true; otherwise, it runs the blocks inside else.",
        },
        {
          question:
            "How does the input box behave in Scratch when using the ask block from Sensing?",
          optionA:
            "It waits for the user to press the Enter key without typing anything.",
          optionB: "It waits for the user to type input before proceeding.",
          optionC: "It executes other blocks immediately.",
          correctAnswer:
            "It waits for the user to type input before proceeding.",
        },
        {
          question: "What does a Variable in Scratch programming represent?",
          optionA: "Fixed value",
          optionB: "Conditional statement",
          optionC: "Data that can be modified and doesn't have a fixed value",
          correctAnswer:
            "Data that can be modified and doesn't have a fixed value",
        },
        {
          question:
            "In creating a simple game in Scratch, which condition makes the sprite turn anticlockwise in the If then ... else block?",
          optionA: "Mouse pointing the sprite",
          optionB: "Any key pressed",
          optionC: "Availability of apples in the kitchen",
          correctAnswer: "Any key pressed",
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
            "Children! You are already familiar with Scratch. In your previous class, you learnt about different types and shapes of blocks. Now in this chapter, you will learn a few more blocks which are Sensing, Variables and Conditional blocks.",
          optionA: "Motion",
          optionB: "Conditional",
          optionC: "Sound",
          correctAnswer: "Conditional",
        },
        {
          question:
            "The Sensing block that prompts the user to type input using the keyboard is _________.",
          optionA: "mouse down?",
          optionB: "ask",
          optionC: "key space pressed?",
          correctAnswer: "ask",
        },
        {
          question:
            "To add a sensing block to a script, you should click on the Sensing blocks category and drag the ________ block to the coding area.",
          optionA: "mouse down?",
          optionB: "sensing",
          optionC: "ask",
          correctAnswer: "ask",
        },
        {
          question:
            "In Scratch, input is stored in the form of numbers, text, date, or pictures in ________.",
          optionA: "Variables",
          optionB: "Sensing",
          optionC: "Conditional",
          correctAnswer: "Variables",
        },
        {
          question:
            "In the Motion block, the value of the number of steps is not fixed and can be modified according to the ________.",
          optionA: "Sensing",
          optionB: "Script",
          optionC: "Conditional",
          correctAnswer: "Script",
        },
        {
          question:
            "Conditional blocks in Scratch are used when a task depends on certain ________.",
          optionA: "Sensing",
          optionB: "Variables",
          optionC: "Conditions",
          correctAnswer: "Conditions",
        },
        {
          question:
            "If, then ... else block in Scratch has two parts: ________.",
          optionA: "If and Only If",
          optionB: "If and Else",
          optionC: "Then and Else",
          correctAnswer: "Then and Else",
        },
        {
          question:
            "The task of eating an apple in the example given depends on the condition of ________.",
          optionA: "Mouse pointer",
          optionB: "Availability of apples",
          optionC: "Number of steps",
          correctAnswer: "Availability of apples",
        },
        {
          question:
            "To create a simple game in Scratch, you should choose ________ as the sprite and Neon Tunnel as the backdrop.",
          optionA: "Polar bear",
          optionB: "Button 5",
          optionC: "Sensing",
          correctAnswer: "Button 5",
        },
        {
          question:
            "In the game script, the sprite turns clockwise non-stop when the condition ________ is not fulfilled.",
          optionA: "Mouse pointer",
          optionB: "Any key pressed",
          optionC: "Sensing",
          correctAnswer: "Any key pressed",
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
            "Children will learn about Sensing, Variables, and Conditional blocks in Scratch.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
        {
          question:
            "The Sensing block prompts the user to type input using the keyboard.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
        {
          question: "Variables in Scratch have fixed values.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "false",
        },
        {
          question:
            "Conditional blocks are used in Scratch when a task depends on certain conditions.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
        {
          question:
            "The Motion block in Scratch has a fixed number of steps by default.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "false",
        },
        {
          question:
            "The task of eating an apple in the given example depends on the availability of apples.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
        {
          question:
            "The If then ... else block in Scratch has three parts: If, Then, and Else.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "false",
        },
        {
          question: "India's road network is the largest in the world.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "false",
        },
        {
          question:
            "The Golden Quadrilateral connects the major metropolitan cities with a length of 5,846 kilometers.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
        {
          question:
            "The first successful aeroplane was built in 1903 by the Wright brothers.",
          optionA: "true",
          optionB: "false",
          correctAnswer: "true",
        },
      ],
    ],
  };
}

export var activityData;
