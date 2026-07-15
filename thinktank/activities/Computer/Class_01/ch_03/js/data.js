export const chapter = "Chapter - 3: Operating a Computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the first step to switch ON a computer?",
        options: {
          A: "Turn on the monitor",
          B: "Switch on the UPS",
          C: "Activate the main power supply button",
        },
        answer: "C",
      },
      {
        question: "What does Step 3 in switching ON the computer indicate?",
        options: {
          A: "Turning on the monitor",
          B: "Starting the computer system",
          C: "Activating the UPS",
        },
        answer: "B",
      },
      {
        question: "What does the term 'booting up' refer to?",
        options: {
          A: "Turning off the computer",
          B: "Starting the main screen",
          C: "Starting the computer system and loading the operating system",
        },
        answer: "C",
      },
      {
        question: "What should you do to begin the shutdown process?",
        options: {
          A: "Click on the Start icon button",
          B: "Turn off the UPS",
          C: "Switch off the monitor button",
        },
        answer: "A",
      },
      {
        question:
          "What is the next step after clicking on the Start icon button to initiate the shutdown process?",
        options: {
          A: "Shut down the computer",
          B: "Click on the Power O button",
          C: "Turn off the monitor",
        },
        answer: "B",
      },
      {
        question: "What appears after clicking on the Power O button?",
        options: {
          A: "A submenu",
          B: "Shut down pictures",
          C: "The Start menu",
        },
        answer: "A",
      },
      {
        question:
          "What action should be taken after selecting 'Shut down' in the submenu during the shutdown process?",
        options: {
          A: "Turn off the computer",
          B: "Wait for the screen to go blank",
          C: "Close all open applications",
        },
        answer: "A",
      },
      {
        question:
          "What should be switched off after shutting down the computer?",
        options: {
          A: "Main power supply button",
          B: "Monitor button",
          C: "UPS",
        },
        answer: "A",
      },
      {
        question:
          "What happens when the monitor button is turned off during shutdown?",
        options: {
          A: "The computer shuts down instantly",
          B: "The screen goes blank",
          C: "The computer continues running",
        },
        answer: "B",
      },
      {
        question: "What is the last step in switching OFF a computer?",
        options: {
          A: "Turning off the UPS",
          B: "Shutting down the operating system",
          C: "Switching off the main power supply button",
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
          "To switch ON a computer, the first step is to activate the ____________ button.",
        options: {
          A: "CPU power",
          B: "monitor",
          C: "main power supply",
        },
        answer: "C",
      },
      {
        question:
          "Step 2 in switching ON the computer involves turning on the ____________.",
        options: {
          A: "monitor",
          B: "UPS",
          C: "keyboard",
        },
        answer: "B",
      },
      {
        question:
          "After switching on the power button on the CPU, a light indicates that the computer system is ____________.",
        options: {
          A: "loading",
          B: "booting",
          C: "ON",
        },
        answer: "C",
      },
      {
        question:
          "The process of showing the main screen after switching ON the computer is called ____________.",
        options: {
          A: "power-up",
          B: "booting up",
          C: "display initiation",
        },
        answer: "B",
      },
      {
        question:
          "To initiate the shutdown process, click on the ____________ icon button.",
        options: {
          A: "Start",
          B: "Power O",
          C: "Restart",
        },
        answer: "A",
      },
      {
        question:
          "After clicking on the Start icon button, the next step is to click on the ____________ button in the submenu.",
        options: {
          A: "Sleep",
          B: "Shut down",
          C: "Restart",
        },
        answer: "B",
      },
      {
        question:
          "Clicking on the Shut down button causes the pictures to disappear from the screen, and the computer will ____________.",
        options: {
          A: "sleep",
          B: "hibernate",
          C: "shut down",
        },
        answer: "C",
      },
      {
        question:
          "After shutting down the computer, it's essential to switch off the ____________ button.",
        options: {
          A: "CPU power",
          B: "monitor",
          C: "main power supply",
        },
        answer: "C",
      },
      {
        question:
          "When the monitor button is turned off during shutdown, the screen will ____________.",
        options: {
          A: "display a message",
          B: "go blank",
          C: "remain unchanged",
        },
        answer: "B",
      },
      {
        question:
          "The last step in switching OFF a computer involves switching off the ____________.",
        options: {
          A: "UPS",
          B: "monitor",
          C: "main power supply",
        },
        answer: "C",
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
          "The first step to switch ON a computer is to activate the main power supply button.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "Switching on the power button on the CPU indicates that the computer system is OFF.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option2",
      },
      {
        question:
          "Booting up refers to the process of displaying the main screen after turning ON the computer.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "Clicking on the Power O button initiates the shutdown process.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "The monitor button should be switched off before shutting down the computer.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "Shutting down the computer involves turning off the UPS before the main power supply button.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option2",
      },
      {
        question:
          "The main power supply button should be switched on after shutting down the computer.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option2",
      },
      {
        question:
          "Turning off the monitor button during shutdown keeps the screen unchanged.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "Booting up is the process of loading the operating system after switching ON the computer.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option1",
      },
      {
        question:
          "The last step in switching OFF a computer involves turning off the monitor button.",
        options: {
          Option1: "True",
          Option2: "False",
        },
        answer: "Option2",
      },
    ],
  };
}

export var activityData;
