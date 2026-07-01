export const chapter = "Chapter - 4: About Window 11";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What analogy is used to explain the role of the operating system in a computer?",
        options: [
          "A) A car and its driver",
          "B) A house and its foundation",
          "C) A book and its chapters",
        ],
        answer: "A) A car and its driver",
      },
      {
        question: "Which operating systems are mentioned in the text?",
        options: [
          "A) DOS, Linux, Windows 10",
          "B) Unix, Linux, Windows 11",
          "C) DOS, Microsoft Windows, Unix, Linux, Windows 11",
        ],
        answer: "C) DOS, Microsoft Windows, Unix, Linux, Windows 11",
      },
      {
        question: "What does the Taskbar contain in Windows 11?",
        options: [
          "A) Only Start menu",
          "B) Start menu, taskbar icons, notification area",
          "C) Start menu, time and date",
        ],
        answer: "B) Start menu, taskbar icons, notification area",
      },
      {
        question: "What is the purpose of the Notification Area in Windows 11?",
        options: [
          "A) Displaying current weather updates",
          "B) Notifying about tasks running on the computer",
          "C) Showing a list of recently opened files",
        ],
        answer: "B) Notifying about tasks running on the computer",
      },
      {
        question:
          "Which feature of Windows 11 distinguishes between desktop and tablet modes?",
        options: ["A) Microsoft Edge", "B) Task View", "C) Tablet Mode"],
        answer: "C) Tablet Mode",
      },
      {
        question:
          "How can you open an application using the Start menu in Windows 11?",
        options: [
          "A) Click Start button, then Recent Apps",
          "B) Click Start button, then All apps, choose the desired application",
          "C) Click Start button, then Settings",
        ],
        answer:
          "B) Click Start button, then All apps, choose the desired application",
      },
      {
        question: "How can you select discontinuous icons on the desktop?",
        options: [
          "A) Click on the first icon, hold Ctrl, click on the last icon",
          "B) Click on the first icon, hold Shift, click on the last icon",
          "C) Click on each icon separately",
        ],
        answer: "A) Click on the first icon, hold Ctrl, click on the last icon",
      },
      {
        question:
          "What action sorts icons on the desktop in alphabetical order?",
        options: [
          "A) Right-click, View, Arrange by name",
          "B) Right-click, Sort by Name",
          "C) Right-click, Arrange Icons, Sort Alphabetically",
        ],
        answer: "B) Right-click, Sort by Name",
      },
      {
        question: "How do you remove a shortcut icon from the desktop?",
        options: [
          "A) Drag it to the Recycle Bin",
          "B) Right-click, Delete icon",
          "C) Shift + Delete",
        ],
        answer: "B) Right-click, Delete icon",
      },
      {
        question: "What function does Cortana serve in Windows 11?",
        options: [
          "A) File management",
          "B) Voice-activated personal assistant",
          "C) System security",
        ],
        answer: "B) Voice-activated personal assistant",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Windows 11 is a ________ based operating system.",
        options: [
          "A) Text",
          "B) Graphical User Interface (GUI)",
          "C) Command-Line Interface (CLI)",
        ],
        answer: "B) Graphical User Interface (GUI)",
      },
      {
        question:
          "The screen that appears when the computer is ready to work is called ________.",
        options: ["A) Desktop", "B) Taskbar", "C) Start Menu"],
        answer: "A) Desktop",
      },
      {
        question: "The icons on the desktop represent ________ or ________.",
        options: [
          "A) Folders, documents",
          "B) Applications, files",
          "C) Settings, preferences",
        ],
        answer: "B) Applications, files",
      },
      {
        question:
          "The bar that runs along the bottom of the desktop is known as the ________.",
        options: ["A) Desktop Icon", "B) Start Menu", "C) Taskbar"],
        answer: "C) Taskbar",
      },
      {
        question:
          "The area on the right side of the taskbar that displays small icons notifying about running tasks is the ________.",
        options: ["A) Notification Area", "B) Start Menu", "C) Taskbar Icons"],
        answer: "A) Notification Area",
      },
      {
        question:
          "Windows 11 provides a customizable list of apps in the ________.",
        options: ["A) Notification Area", "B) Taskbar", "C) Start Menu"],
        answer: "C) Start Menu",
      },
      {
        question:
          "The new browser designed to provide a better web experience for Windows users in Windows 11 is called ________.",
        options: ["A) Firefox", "B) Microsoft Edge", "C) Chrome"],
        answer: "B) Microsoft Edge",
      },
      {
        question:
          "________ is a voice-activated personal assistant in Windows 11.",
        options: ["A) Siri", "B) Cortana", "C) Alexa"],
        answer: "B) Cortana",
      },
      {
        question:
          "The feature in Windows 11 that lets you run Android apps alongside Windows apps is called Windows Subsystem for ________.",
        options: ["A) iOS", "B) Android", "C) Windows"],
        answer: "B) Android",
      },
      {
        question:
          "To open an application in Windows 11, you use the ________ menu.",
        options: ["A) Start", "B) Taskbar", "C) Notification"],
        answer: "A) Start",
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
          "Windows 11 is a command-line interface (CLI) based operating system.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
      {
        question: "The desktop icons represent applications or files.",
        options: ["A) True", "B) False"],
        answer: "A) True",
      },
      {
        question:
          "The Taskbar contains the Start menu, taskbar icons, and the notification area.",
        options: ["A) True", "B) False"],
        answer: "A) True",
      },
      {
        question:
          "Cortana is a voice-activated personal assistant in Windows 11.",
        options: ["A) True", "B) False"],
        answer: "A) True",
      },
      {
        question:
          "The new browser in Windows 11 designed for a better web experience is called Mozilla Firefox.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
      {
        question:
          "The Notification Area in Windows 11 displays large icons representing running applications.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
      {
        question:
          "Windows 11 provides a fixed list of apps in the Start menu and does not allow customization.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
      {
        question:
          "The feature in Windows 11 allowing the running of Android apps alongside Windows apps is called Windows Subsystem for iOS.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
      {
        question:
          "You can rearrange desktop icons by right-clicking and choosing the 'Sort by Name' option.",
        options: ["A) True", "B) False"],
        answer: "A) True",
      },
      {
        question:
          "The Time and Date in Windows 11 are displayed in the left corner of the Taskbar.",
        options: ["A) True", "B) False"],
        answer: "B) False",
      },
    ],
  };
}

export var activityData;
