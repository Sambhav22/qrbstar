export const chapter = "Chapter - 8: Introduction to Scratch";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is Scratch?",
          optionA: "A cooking software",
          optionB: "A gaming software",
          optionC: "A movie editing software",
          correctAnswer: "A gaming software",
        },
        {
          question: "Which of the following is NOT a tab in Scratch?",
          optionA: "Code Tab",
          optionB: "Picture Tab",
          optionC: "Sound Tab",
          correctAnswer: "Picture Tab",
        },
        {
          question: "What is a sprite in Scratch?",
          optionA: "A type of sound",
          optionB: "An object that performs instructions on the stage",
          optionC: "A coding block",
          correctAnswer: "An object that performs instructions on the stage",
        },
        {
          question: "What does the green flag in Scratch do?",
          optionA: "Adds a new sprite",
          optionB: "Stops the program",
          optionC: "Runs the Scratch program",
          correctAnswer: "Runs the Scratch program",
        },
        {
          question:
            "What area in Scratch is used to stack blocks to create a script?",
          optionA: "Stage Area",
          optionB: "Coding Area",
          optionC: "Menu Bar",
          correctAnswer: "Coding Area",
        },
        {
          question: "How can you add a new sprite in Scratch?",
          optionA: "Click on the green flag",
          optionB: "Click on Choose a Sprite from the Sprite Info Pane",
          optionC: "Select File and then New",
          correctAnswer: "Click on Choose a Sprite from the Sprite Info Pane",
        },
        {
          question: "Where can you change the backdrop in Scratch?",
          optionA: "Coding Area",
          optionB: "Costume Tab",
          optionC: "Choose a Backdrop from the Sprite Info Pane",
          correctAnswer: "Choose a Backdrop from the Sprite Info Pane",
        },
        {
          question: "What step allows you to save your Scratch project?",
          optionA: "Click on the green flag",
          optionB: "Select Save to your computer option from the File tab",
          optionC: "Click on the Close button",
          correctAnswer:
            "Select Save to your computer option from the File tab",
        },
        {
          question: "How can you exit Scratch?",
          optionA: "Click on the red button",
          optionB: "Close the Scratch window using the Close button",
          optionC: "There's no way to exit Scratch",
          correctAnswer: "Close the Scratch window using the Close button",
        },
        {
          question: "What does the Scratch window Title Bar contain?",
          optionA: "Only the project's name",
          optionB: "Control buttons and the project's name",
          optionC: "Menu options",
          correctAnswer: "Control buttons and the project's name",
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
            "To start Scratch, follow these steps: Click on the Start button, then click All apps. Scroll down the apps and click on ___________.",
          optionA: "Scratch",
          optionB: "Create",
          optionC: "Games",
          correctAnswer: "Scratch",
        },
        {
          question:
            "Scratch is a gaming software that helps in understanding and learning game creation with ___________.",
          optionA: "complexity",
          optionB: "difficulty",
          optionC: "ease",
          correctAnswer: "ease",
        },
        {
          question:
            "The Stage Area in Scratch displays the ___________ of the project, where the background is called backdrop and the actor is called sprite.",
          optionA: "progress",
          optionB: "output",
          optionC: "code",
          correctAnswer: "output",
        },
        {
          question:
            "Coding Area is where you stack blocks to create a ___________ that gives stepwise instructions to sprites.",
          optionA: "project",
          optionB: "script",
          optionC: "code",
          correctAnswer: "script",
        },
        {
          question:
            "___________ is an object in Scratch that performs the instructions on the stage.",
          optionA: "Sprite",
          optionB: "Code",
          optionC: "Tab",
          correctAnswer: "Sprite",
        },
        {
          question:
            "To add a new sprite in Scratch, click on ___________ from the Sprite Info Pane.",
          optionA: "Choose a Sprite",
          optionB: "Add Sprite",
          optionC: "New Sprite",
          correctAnswer: "Choose a Sprite",
        },
        {
          question:
            "The ___________ Tab in Scratch helps in making changes to the appearance of sprites and backdrops.",
          optionA: "Code",
          optionB: "Costume",
          optionC: "Sound",
          correctAnswer: "Costume",
        },
        {
          question:
            "The process of saving a project in Scratch involves selecting ___________ from the File tab and typing the File name.",
          optionA: "Save to Cloud",
          optionB: "Save to your computer",
          optionC: "Save and Exit",
          correctAnswer: "Save to your computer",
        },
        {
          question:
            "Exiting Scratch requires clicking on the ___________ in the title bar, which prompts to save if there are unsaved projects.",
          optionA: "Close",
          optionB: "Exit",
          optionC: "Stop",
          correctAnswer: "Close",
        },
        {
          question:
            "Scratch allows users to create various projects such as cartoons, quizzes, and ___________.",
          optionA: "videos",
          optionB: "stories",
          optionC: "drawings",
          correctAnswer: "stories",
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
            "The principal is responsible for teaching different subjects.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The sports teacher's primary role is to teach sports.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The dance teacher is responsible for teaching dance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The receptionist issues books to the students.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The librarian watches the school gate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The peon looks after the plants at the school.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The guard receives visitors and telephone calls.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The bus driver brings the students to the school.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The subject teachers teach different subjects.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "All other persons at school work under the principal's guidance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
