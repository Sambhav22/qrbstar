export const chapter = "Chapter - 3: Windows 11";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What year was Windows 11 released?",
          optionA: "2015",
          optionB: "2021",
          optionC: "2013",
          correctAnswer: "B",
        },
        {
          question:
            "Which version of Windows reintroduced a more traditional Start menu?",
          optionA: "Windows 8",
          optionB: "Windows 10",
          optionC: "Windows 11",
          correctAnswer: "C",
        },
        {
          question: "Where can you find the Notification Pane in Windows 11?",
          optionA: "Start menu",
          optionB: "Action Center",
          optionC: "Date and Time icon on the taskbar",
          correctAnswer: "C",
        },
        {
          question:
            "How can you dismiss notifications in the Notification Pane without opening them?",
          optionA: "Clicking the Date and Time icon",
          optionB: "Clicking the Close button in the upper right",
          optionC: "Clicking the Start button",
          correctAnswer: "B",
        },
        {
          question: "Which digital assistant is integrated into Windows 11?",
          optionA: "Siri",
          optionB: "Cortana",
          optionC: "Google Assistant",
          correctAnswer: "B",
        },
        {
          question: "Where can you find Cortana's icon in Windows 11?",
          optionA: "Start menu",
          optionB: "Taskbar (right of the search bar)",
          optionC: "Action Center",
          correctAnswer: "B",
        },
        {
          question: "What can Cortana do if your computer has a microphone?",
          optionA: "Set alarms",
          optionB: "Send emails",
          optionC: "Both A and B",
          correctAnswer: "C",
        },
        {
          question:
            "How can you activate Cortana's listening mode to issue commands?",
          optionA: "Click the Microphone button",
          optionB: "Click the Start button",
          optionC: "Click the Date and Time icon",
          correctAnswer: "A",
        },
        {
          question:
            "Which version of Windows separated the Action Center from the Notification Pane?",
          optionA: "Windows 10",
          optionB: "Windows 8.1",
          optionC: "Windows 11",
          correctAnswer: "C",
        },
        {
          question:
            "What action allows Cortana to perform tasks like getting directions or looking up facts?",
          optionA: "Typing commands",
          optionB: "Speaking commands",
          optionC: "Clicking icons",
          correctAnswer: "B",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Windows 11, released in ____, is a free upgrade for Windows 10 users.",
          optionA: "2010",
          optionB: "2021",
          optionC: "2015",
          correctAnswer: "2021",
        },
        {
          question:
            "The Notification Pane in Windows 11 can be accessed by clicking the Date and Time icon on the ____.",
          optionA: "Start menu",
          optionB: "Taskbar",
          optionC: "Action Center",
          correctAnswer: "Taskbar",
        },
        {
          question:
            "Cortana, the digital assistant in Windows 11, offers expanded functionality if your computer has a ____.",
          optionA: "Camera",
          optionB: "Microphone",
          optionC: "Printer",
          correctAnswer: "Microphone",
        },
        {
          question:
            "In Windows 11, the traditional Start menu was reintroduced, providing an easier way to find important ____.",
          optionA: "Files",
          optionB: "Apps",
          optionC: "Settings",
          correctAnswer: "Apps",
        },
        {
          question:
            "The Action Center in Windows 11 was separated from the ____.",
          optionA: "Start menu",
          optionB: "Notification Pane",
          optionC: "Taskbar",
          correctAnswer: "Notification Pane",
        },
        {
          question:
            "To issue commands to Cortana in Windows 11, users can activate the listening mode by clicking the ____ button.",
          optionA: "Start",
          optionB: "Microphone",
          optionC: "Date and Time",
          correctAnswer: "Microphone",
        },
        {
          question:
            "Windows 11 provides a common method for opening/closing a program and managing ____.",
          optionA: "Networks",
          optionB: "Files",
          optionC: "Background processes",
          correctAnswer: "Files",
        },
        {
          question:
            "The Start menu in Windows 11 allows users to pin frequently used apps for ____.",
          optionA: "Quick access",
          optionB: "Automatic updates",
          optionC: "Enhanced security",
          correctAnswer: "Quick access",
        },
        {
          question:
            "Cortana, integrated into Windows 11, displays the weather, calendar events, reminders, and ____.",
          optionA: "News articles",
          optionB: "Emails",
          optionC: "Social media updates",
          correctAnswer: "News articles",
        },
        {
          question:
            "The Date and Time icon on the taskbar in Windows 11 grants access to the ____.",
          optionA: "Cortana",
          optionB: "Notification Pane",
          optionC: "Action Center",
          correctAnswer: "Notification Pane",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Windows 11 was released in 2021.",
          optionA: "2021",
          optionB: "False",
          correctAnswer: "2021",
        },
        {
          question:
            "The Start menu in Windows 11 has reintroduced a more traditional layout.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cortana is the digital assistant integrated into Windows 11.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Action Center in Windows 11 is part of the Notification Pane.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Cortana in Windows 11 displays only calendar events and reminders.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The Date and Time icon in Windows 11 accesses the Action Center.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Start menu in Windows 11 allows users to pin frequently used apps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Notification Pane in Windows 11 can be accessed via the Start menu.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Windows 11 provides expanded functionality for Cortana if the computer has a camera.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Windows 11 offers a common method for managing background processes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
