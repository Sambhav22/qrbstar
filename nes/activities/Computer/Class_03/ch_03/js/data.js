export const chapter = "Chapter - 3: Exploring More Apps";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "Which of the following features is NOT included in the Clock application on Windows?",
          optionA: "Timer",
          optionB: "Calculator",
          optionC: "Stopwatch",
          correctAnswer: "B) Calculator",
        },
        {
          question:
            "How can you access the Clock application on a Windows computer?",
          optionA: "Start button > All apps > Clock",
          optionB: "Start button > Settings > Clock",
          optionC: "Start button > Clock icon on desktop",
          correctAnswer: "A) Start button > All apps > Clock",
        },
        {
          question:
            "What is the purpose of the 'Focus' feature in the Clock application?",
          optionA: "To show world times",
          optionB: "To perform arithmetic operations",
          optionC: "To help focus on a specific task",
          correctAnswer: "C) To help focus on a specific task",
        },
        {
          question: "How can you delete an alarm in the Clock application?",
          optionA: "Click the alarm > select 'Edit' > Delete",
          optionB:
            "Click the alarm > click the delete icon in the Edit alarm window",
          optionC: "Select the alarm > right-click > Delete",
          correctAnswer:
            "B) Click the alarm > click the delete icon in the Edit alarm window",
        },
        {
          question:
            "What does the World Clock feature in the Clock application do?",
          optionA: "Runs multiple stopwatches",
          optionB: "Displays the user's local time on a world map",
          optionC: "Performs arithmetic operations",
          correctAnswer: "B) Displays the user's local time on a world map",
        },
        {
          question: "How can you open the Calculator application in Windows?",
          optionA: "Start button > All apps > Calculator",
          optionB: "Start button > Clock > Calculator",
          optionC: "Start button > Settings > Calculator",
          correctAnswer: "A) Start button > All apps > Calculator",
        },
        {
          question: "What operations can the Calculator perform?",
          optionA: "Addition, subtraction, multiplication, division",
          optionB: "Time management, distractions reduction",
          optionC: "World clock, alarms, stopwatches",
          correctAnswer: "A) Addition, subtraction, multiplication, division",
        },
        {
          question:
            "Where would you find the option to set a new alarm in the Clock application?",
          optionA: "Plus (+) at the top right corner",
          optionB: "Minus (-) at the bottom left corner",
          optionC: "Plus (+) at the bottom right corner",
          correctAnswer: "A) Plus (+) at the top right corner",
        },
        {
          question: "How can you start a stopwatch in the Clock application?",
          optionA: "Click on 'Stopwatch' and select 'Start'",
          optionB: "Click on 'Timer' and select 'Start'",
          optionC: "Click on 'Start' button when the stopwatch appears",
          correctAnswer:
            "C) Click on 'Start' button when the stopwatch appears",
        },
        {
          question: "What does the Calculator application help you perform?",
          optionA: "Manage time zones",
          optionB: "Perform arithmetic operations",
          optionC: "Set multiple alarms simultaneously",
          correctAnswer: "B) Perform arithmetic operations",
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
            "To start the Clock application on a Windows computer, one needs to click on the Start button, then navigate to ___________.",
          optionA: "All apps",
          optionB: "Clock",
          optionC: "Timer",
          correctAnswer: "A",
        },
        {
          question:
            "The Clock application includes five key features: Focus sessions, Timer, Alarm, Stopwatch, and ___________.",
          optionA: "World clock",
          optionB: "Calculator",
          optionC: "Calendar",
          correctAnswer: "A",
        },
        {
          question:
            "Setting an alarm involves clicking on the plus (+) icon at the ___________ of the screen in the Clock application.",
          optionA: "top left",
          optionB: "top right",
          optionC: "bottom right",
          correctAnswer: "B",
        },
        {
          question:
            "The World Clock feature in the Clock application displays the user's local time on a ___________.",
          optionA: "grid",
          optionB: "world map",
          optionC: "list",
          correctAnswer: "B",
        },
        {
          question:
            "The Calculator application in Windows allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and ___________.",
          optionA: "division",
          optionB: "square root",
          optionC: "percentages",
          correctAnswer: "A",
        },
        {
          question:
            "Clicking on the ___________ in the Clock application allows users to delete a selected alarm.",
          optionA: "edit button",
          optionB: "delete icon",
          optionC: "save option",
          correctAnswer: "B",
        },
        {
          question:
            "The Stopwatch feature in the Clock application enables users to record ___________ by clicking on the start button.",
          optionA: "laps",
          optionB: "alarms",
          optionC: "reminders",
          correctAnswer: "A",
        },
        {
          question:
            "The Clock application's Focus feature aids in reducing ___________ to stay focused on a specific task.",
          optionA: "distractions",
          optionB: "screen brightness",
          optionC: "sound volume",
          correctAnswer: "A",
        },
        {
          question:
            "The Clock application allows users to save a number of alarms that appear in the form of a ___________.",
          optionA: "vertical list",
          optionB: "horizontal list",
          optionC: "grid",
          correctAnswer: "B",
        },
        {
          question:
            "The Calculator application can be accessed by clicking on the Start button and navigating to ___________.",
          optionA: "Calculator",
          optionB: "All apps",
          optionC: "Settings",
          correctAnswer: "A",
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
            "The Clock application on Windows includes features like Focus sessions, Timer, and Alarm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The World Clock feature in the Clock application displays the user's local time on a map.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Calculator application in Windows only performs addition and subtraction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Stopwatch feature in the Clock application allows multiple stopwatches to run simultaneously.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Focus feature in the Clock application helps to reduce distractions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "An alarm in the Clock application can only be set for a single day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Calculator application in Windows can perform multiplication and division.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The World Clock feature in the Clock application shows the user's local time on a world map.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Stopwatch feature in the Clock application can record lap times.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Clock application allows users to delete saved alarms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
