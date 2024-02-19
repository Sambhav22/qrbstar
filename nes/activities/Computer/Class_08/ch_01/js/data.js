export const chapter = "Chapter - 1: Windows 11";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        "questions": [
          {
            "question": "What does the Task View feature in Windows 11 allow you to do?",
            "options": {
              "A": "Group apps into different desktops",
              "B": "Open a new window for multitasking",
              "C": "Adjust system settings"
            },
            "answer": "A"
          },
          {
            "question": "How can you add a new desktop in Windows 11?",
            "options": {
              "A": "Click the Task View button and select \"New Desktop\"",
              "B": "Click the Start button and select \"New Desktop\"",
              "C": "Press and hold the Alt key, then press the Tab key"
            },
            "answer": "A"
          },
          {
            "question": "What action allows you to move windows between different desktops in Windows 11?",
            "options": {
              "A": "Dragging the window to another desktop's thumbnail in Task View",
              "B": "Pressing the Windows key and Tab simultaneously",
              "C": "Clicking the minimize button multiple times"
            },
            "answer": "A"
          },
          {
            "question": "How can you remove a desktop in Windows 11?",
            "options": {
              "A": "Click on the taskbar",
              "B": "Hover over the desktop thumbnail and press Delete",
              "C": "Use the Alt + F4 keyboard shortcut"
            },
            "answer": "B"
          },
          {
            "question": "Which keyboard shortcut allows you to flip between open windows in Windows 11?",
            "options": {
              "A": "Ctrl + Tab",
              "B": "Alt + Tab",
              "C": "Shift + Tab"
            },
            "answer": "B"
          },
          {
            "question": "How can you minimize all open windows in Windows 11?",
            "options": {
              "A": "Click the bottom right corner of the taskbar",
              "B": "Use the Windows key + M",
              "C": "Shake the active window"
            },
            "answer": "A"
          },
          {
            "question": "What feature of Windows 11 allows you to arrange open windows in different layouts?",
            "options": {
              "A": "Snap Assist",
              "B": "Task View",
              "C": "Quick Access"
            },
            "answer": "A"
          },
          {
            "question": "How do you open the Widget panel in Windows 11?",
            "options": {
              "A": "Click the Widgets icon on the Taskbar",
              "B": "Press Windows key + W",
              "C": "Right-click on the desktop and select Widgets"
            },
            "answer": "A"
          },
          {
            "question": "Where can you find the Settings app in Windows 11?",
            "options": {
              "A": "Control Panel",
              "B": "Start menu",
              "C": "Taskbar"
            },
            "answer": "B"
          },
          {
            "question": "What does the Quick Access feature in File Explorer do in Windows 11?",
            "options": {
              "A": "Allows access to the internet",
              "B": "Displays frequently used folders",
              "C": "Provides quick settings for the system"
            },
            "answer": "B"
          }
        ]
      }
      

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question:
          "The study of history helps us understand different aspects of life and how they __________ over time.",
        optionA: "remained constant",
        optionB: "changed",
        optionC: "disappeared",
        correctAnswer: "B",
      },
      {
        question:
          "The modern period in India, also known as the colonial period, began in the __________ century when the British gained power.",
        optionA: "15th",
        optionB: "18th",
        optionC: "19th",
        correctAnswer: "B",
      },
      {
        question:
          "The British conducted surveys to determine revenue areas where they could impose __________ on land.",
        optionA: "taxes",
        optionB: "regulations",
        optionC: "restrictions",
        correctAnswer: "A",
      },
      {
        question:
          "Private records, such as diaries, travelogues, and letters, have often helped discover historical occurrences quite __________.",
        optionA: "inaccurately",
        optionB: "vividly",
        optionC: "correctly",
        correctAnswer: "C",
      },
      {
        question:
          "Buildings and monuments, like the Rashtrapati Bhavan and India Gate, are important sources of history that have been constructed during the __________ period.",
        optionA: "ancient",
        optionB: "medieval",
        optionC: "modern",
        correctAnswer: "C",
      },
      {
        question:
          "Folk traditions, including folk tales and songs, have preserved many historical occurrences and events over __________.",
        optionA: "generations",
        optionB: "centuries",
        optionC: "decades",
        correctAnswer: "A",
      },
      {
        question:
          "The modern period in India began in the 18th century, which is often considered from the year of __________ death, Aurangzeb.",
        optionA: "Akbar's",
        optionB: "Shah Jahan's",
        optionC: "Aurangzeb's",
        correctAnswer: "C",
      },
      {
        question:
          "The British exploited the river valley farmers by compelling them to produce crops like __________ for their trade.",
        optionA: "wheat",
        optionB: "indigo",
        optionC: "rice",
        correctAnswer: "B",
      },
      {
        question:
          "Primary sources, such as government surveys, buildings, and archaeological remains, directly indicate different historical __________.",
        optionA: "events",
        optionB: "interpretations",
        optionC: "ideologies",
        correctAnswer: "A",
      },
      {
        question:
          "The British published gazettes that included not only surveys but also records of events, providing insight into various aspects of contemporary __________.",
        optionA: "politics",
        optionB: "life",
        optionC: "culture",
        correctAnswer: "B",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Metal is a recyclable waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The modern period in India is also known as the colonial period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Private records, such as diaries and letters, have little historical value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Folk traditions, including folk tales and songs, have preserved historical occurrences over generations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The British exploited river valley farmers by compelling them to produce crops like rice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Buildings and monuments like the Rashtrapati Bhavan have no significance in studying history.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The modern period in India officially began in the 15th century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Government surveys and records are considered secondary sources of history.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Newspapers, magazines, and journals are not important sources of historical information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The study of history is primarily focused on analyzing the exploits of rulers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
