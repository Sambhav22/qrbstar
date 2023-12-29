export const chapter = "Chapter - 2: Working of a Computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are the three stages through which a computer operates?",
            options: {
              A: "In, Out, Process",
              B: "Input, Process, Output",
              C: "Enter, Work, Display",
            },
            answer: "B",
          },
          {
            question: "What is the primary function of the CPU?",
            options: {
              A: "Storing data",
              B: "Controlling all computer functions",
              C: "Displaying output",
            },
            answer: "B",
          },
          {
            question:
              "Which device is used to convert text or images into an electronic form?",
            options: {
              A: "Printer",
              B: "Scanner",
              C: "Monitor",
            },
            answer: "B",
          },
          {
            question: "What does the term 'soft copy' refer to?",
            options: {
              A: "The output displayed on a monitor",
              B: "A printed copy of a document",
              C: "The sounds produced by speakers",
            },
            answer: "A",
          },
          {
            question:
              "Which device records voice, music, and sounds into the computer?",
            options: {
              A: "Keyboard",
              B: "Microphone",
              C: "Mouse",
            },
            answer: "B",
          },
          {
            question: "What is the function of the Control Unit in the CPU?",
            options: {
              A: "Performs calculations",
              B: "Controls all computer functions",
              C: "Stores data temporarily",
            },
            answer: "B",
          },
          {
            question: "Which output device is known for producing a hard copy?",
            options: {
              A: "Monitor",
              B: "Printer",
              C: "Speakers",
            },
            answer: "B",
          },
          {
            question: "What is the purpose of a joystick as an input device?",
            options: {
              A: "Recording voice",
              B: "Playing computer games",
              C: "Scanning images",
            },
            answer: "B",
          },
          {
            question:
              "Which output device is analogous to a television screen?",
            options: {
              A: "Printer",
              B: "Scanner",
              C: "Monitor",
            },
            answer: "C",
          },
          {
            question: "What are the types of units inside the CPU?",
            options: {
              A: "Input, Output, Memory",
              B: "Arithmetic, Logic, Control",
              C: "ALU, CU, MU (Arithmetic Logic Unit, Control Unit, Memory Unit)",
            },
            answer: "C",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "The three stages through which a computer operates are ________, ________, and ________.",
            options: {
              A: "Enter, Process, Output",
              B: "Input, Process, Output",
              C: "In, Work, Display",
            },
            answer: "B",
          },
          {
            question:
              "________ is known as the brain of a computer and controls all its functions.",
            options: {
              A: "Keyboard",
              B: "CPU",
              C: "Monitor",
            },
            answer: "B",
          },
          {
            question:
              "________ is used to convert text or an image into its electronic representation.",
            options: {
              A: "Printer",
              B: "Scanner",
              C: "Mouse",
            },
            answer: "B",
          },
          {
            question:
              "The output produced by the monitor is commonly referred to as a ________ copy.",
            options: {
              A: "Soft",
              B: "Hard",
              C: "Loud",
            },
            answer: "A",
          },
          {
            question:
              "________ is an input device used for recording voice, music, and sounds into the computer.",
            options: {
              A: "Keyboard",
              B: "Microphone",
              C: "Mouse",
            },
            answer: "B",
          },
          {
            question:
              "The CPU consists of Arithmetic Logic Unit (ALU), Control Unit (CU), and ________ Unit (MU).",
            options: {
              A: "Memory",
              B: "Input",
              C: "Output",
            },
            answer: "A",
          },
          {
            question:
              "________ is the main output device that displays text and pictures.",
            options: {
              A: "Printer",
              B: "Monitor",
              C: "Speakers",
            },
            answer: "B",
          },
          {
            question:
              "________ is used to get a printed copy of our work on paper.",
            options: {
              A: "Monitor",
              B: "Printer",
              C: "Scanner",
            },
            answer: "B",
          },
          {
            question:
              "________ is an entertaining and inexpensive output device used to listen to music and sounds.",
            options: {
              A: "Printer",
              B: "Scanner",
              C: "Speakers",
            },
            answer: "C",
          },
          {
            question:
              "________ are the units inside the CPU that perform calculations, control functions, and store data temporarily.",
            options: {
              A: "Input, Output, Memory",
              B: "Arithmetic, Logic, Control",
              C: "ALU, CU, MU (Arithmetic Logic Unit, Control Unit, Memory Unit)",
            },
            answer: "C",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question:
              "The CPU of a computer consists of Arithmetic Logic Unit (ALU), Control Unit (CU), and Memory Unit (MU).",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A scanner is an output device used to convert text or images into electronic representations.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "The keyboard is one of the most common input devices used for typing letters, numbers, and special characters.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A printer is an input device used to record voice, music, and sounds into the computer.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Speakers are used as output devices to listen to music, sounds, and other audio.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "The main function of the Control Unit (CU) in a computer is to store data temporarily.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A mouse is an input device used to draw pictures and select objects on a computer.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A monitor is the primary output device used to display text and pictures.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Joystick is commonly used as an input device by computer game players.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Microphone is an input device used to convert text or images into electronic representations.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
        ],
      },
    ],
  };
}

export var activityData;
