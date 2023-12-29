export const chapter = "Chapter - 1: Computer Fundamentals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which part of a computer system cannot be seen or touched, yet is essential to play music?",
        optionA: "Monitor",
        optionB: "Keyboard",
        optionC: "Software",
        correctAnswer: "Software",
      },
      {
        question: "What is the primary function of a keyboard?",
        optionA: "Displaying output",
        optionB: "Storing data",
        optionC: "Entering data and instructions",
        correctAnswer: "Entering data and instructions",
      },
      {
        question:
          "Which device is primarily used for capturing photographs and videos?",
        optionA: "Mouse",
        optionB: "Scanner",
        optionC: "Web Camera",
        correctAnswer: "Web Camera",
      },
      {
        question:
          "Which output device is used for printing the computer's output onto paper?",
        optionA: "Monitor",
        optionB: "Printer",
        optionC: "Speakers",
        correctAnswer: "Printer",
      },
      {
        question: "What is the primary function of a hard disk?",
        optionA: "Storing applications",
        optionB: "Displaying data",
        optionC: "Storing large amounts of data at high speeds",
        correctAnswer: "Storing large amounts of data at high speeds",
      },
      {
        question:
          "Which software type controls the overall functionality of a computer?",
        optionA: "System Software",
        optionB: "Application Software",
        optionC: "Operating System",
        correctAnswer: "System Software",
      },
      {
        question: "Which is an example of an operating system?",
        optionA: "Photoshop",
        optionB: "Microsoft Windows",
        optionC: "Adobe Illustrator",
        correctAnswer: "Microsoft Windows",
      },
      {
        question: "What is the function of application software?",
        optionA: "Control overall computer functionality",
        optionB: "Perform specific tasks",
        optionC: "Enable hardware connection",
        correctAnswer: "Perform specific tasks",
      },
      {
        question:
          "Which type of storage device can store up to 4.7 GB of data?",
        optionA: "CD",
        optionB: "Pen Drive",
        optionC: "DVD",
        correctAnswer: "DVD",
      },
      {
        question: "What is the primary purpose of a joystick?",
        optionA: "Enter data",
        optionB: "Play games",
        optionC: "Record sounds",
        correctAnswer: "Play games",
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
          "The physical parts of a computer that can be touched and seen are classified as __________.",
        optionA: "Hardware",
        optionB: "Software",
        optionC: "Firmware",
        correctAnswer: "Hardware",
      },
      {
        question:
          "A pointing device used for selecting icons and opening programs on a computer is called a __________.",
        optionA: "Mouse",
        optionB: "Scanner",
        optionC: "Keyboard",
        correctAnswer: "Mouse",
      },
      {
        question:
          "The main storage device present inside the CPU box that can store a vast amount of data at high speed is the __________.",
        optionA: "CD",
        optionB: "Hard Disk",
        optionC: "Pen Drive",
        correctAnswer: "Hard Disk",
      },
      {
        question:
          "System software controls the overall functionality of the computer and includes the __________.",
        optionA: "Operating System",
        optionB: "Application Software",
        optionC: "Firmware",
        correctAnswer: "Operating System",
      },
      {
        question:
          "The device used to print computer output onto paper is the __________.",
        optionA: "Monitor",
        optionB: "Printer",
        optionC: "Speakers",
        correctAnswer: "Printer",
      },
      {
        question:
          "A type of software that performs specific tasks such as painting or playing games is known as __________ software.",
        optionA: "System",
        optionB: "Application",
        optionC: "Operating",
        correctAnswer: "Application",
      },
      {
        question:
          "The component used to capture photographs and videos is called a __________.",
        optionA: "Scanner",
        optionB: "Web Camera",
        optionC: "Joystick",
        correctAnswer: "Web Camera",
      },
      {
        question:
          "The device primarily responsible for displaying the results of tasks performed by a computer is the __________.",
        optionA: "Printer",
        optionB: "Monitor",
        optionC: "Speakers",
        correctAnswer: "Monitor",
      },
      {
        question:
          "Components used to store data, instructions, and information for future use are termed as __________ devices.",
        optionA: "Output",
        optionB: "Storage",
        optionC: "Input",
        correctAnswer: "Storage",
      },
      {
        question:
          "Input devices are used to enter data or instructions into the computer system, and one such common input device is the __________.",
        optionA: "Keyboard",
        optionB: "Mouse",
        optionC: "Scanner",
        correctAnswer: "Keyboard",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "CD stands for Compact Disc.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A scanner is primarily used to capture photographs and videos.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Speakers are used for displaying the results of tasks performed by a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The mouse is an input device used to enter data and instructions into a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Hard Disk is the main storage device that can store a vast amount of data at high speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "System software controls the overall functionality of a computer and includes the Operating System.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Web Cameras are used to draw pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Printers are primarily used to print computer output onto paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Planets in the Solar System move around the Sun in their fixed Moons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Keyboards are considered output devices in a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
