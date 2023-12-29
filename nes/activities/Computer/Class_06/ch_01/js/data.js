export const chapter = "Chapter - 1: Computer Peripherals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the three essential components required for computer processes?",
        optionA: "Software, CPU, RAM",
        optionB: "Input Devices, Output Devices, CPU",
        optionC: "Monitor, Keyboard, Mouse",
        correctAnswer: "Input Devices, Output Devices, CPU",
      },
      {
        question:
          "Which device is used to identify specific items with machine-readable formats?",
        optionA: "OCR",
        optionB: "Barcode Reader",
        optionC: "Magnetic Ink Character Reader",
        correctAnswer: "Barcode Reader",
      },
      {
        question: "What does OMR stand for, and what is its primary function?",
        optionA: "Optical Mark Reader - Reads digital images",
        optionB: "Optical Mark Recognition - Recognizes specific shapes",
        optionC: "Optical Mark Reader - Detects marks on paper",
        correctAnswer: "Optical Mark Reader - Detects marks on paper",
      },
      {
        question:
          "Which device is commonly used to read characters on cheques printed in magnetic ink?",
        optionA: "Card Reader",
        optionB: "MICH",
        optionC: "Trackball",
        correctAnswer: "MICH",
      },
      {
        question:
          "Which input device is mainly used in air-traffic control rooms and computer video games?",
        optionA: "Graphic Tablet",
        optionB: "Touch Screen",
        optionC: "Trackball",
        correctAnswer: "Trackball",
      },
      {
        question: "What does an output device do?",
        optionA: "Converts computer information for user understanding",
        optionB: "Processes data for the CPU",
        optionC: "Reads and captures data quickly",
        correctAnswer: "Converts computer information for user understanding",
      },
      {
        question: "What determines the quality of a printer?",
        optionA: "Technology and speed",
        optionB: "Cost and quality of printing",
        optionC: "Resolution",
        correctAnswer: "Resolution",
      },
      {
        question: "Which is an example of a non-impact printer?",
        optionA: "Dot Matrix Printer",
        optionB: "Laser Printer",
        optionC: "Daisy Wheel Printer",
        correctAnswer: "Laser Printer",
      },
      {
        question: "What is the main function of a plotter?",
        optionA: "Produce high-quality graphics",
        optionB: "Print textual information",
        optionC: "Store data for future use",
        correctAnswer: "Produce high-quality graphics",
      },
      {
        question: "What is the main function of system software?",
        optionA: "Perform dedicated tasks",
        optionB: "Control computer operations",
        optionC: "Enhance hardware efficiency",
        correctAnswer: "Enhance hardware efficiency",
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
          "__________, Central Processing Unit (CPU), and Output Devices are the three essential components required for computer processes.",
        optionA: "Software",
        optionB: "Input Devices",
        optionC: "Storage Devices",
        correctAnswer: "Input Devices",
      },
      {
        question:
          "An __________ is used to detect pen/pencil marks of pre-specified shape on a sheet of paper.",
        optionA: "Optical Mark Reader (OMR)",
        optionB: "Magnetic Ink Character Reader (MICH)",
        optionC: "Barcode Reader",
        correctAnswer: "Optical Mark Reader (OMR)",
      },
      {
        question:
          "A ________ is used to read special characters printed on documents like cheques using special magnetic ink.",
        optionA: "Card Reader",
        optionB: "Magnetic Ink Character Reader (MICH)",
        optionC: "Trackball",
        correctAnswer: "Magnetic Ink Character Reader (MICH)",
      },
      {
        question:
          "A ________ is an electronic visual display that the user can control through simple or multi-touch gestures.",
        optionA: "Touchpad",
        optionB: "Touch Screen",
        optionC: "Graphic Tablet",
        correctAnswer: "Touch Screen",
      },
      {
        question:
          "An output device is an electro-mechanical device that converts computer information into a form that a user can ___________.",
        optionA: "Process",
        optionB: "Understand",
        optionC: "Store",
        correctAnswer: "Understand",
      },
      {
        question: "The quality of a printer is determined by its ___________.",
        optionA: "Cost",
        optionB: "Resolution",
        optionC: "Speed",
        correctAnswer: "Resolution",
      },
      {
        question:
          "A ________ is an output device used to produce high-quality graphics, charts, and diagrams.",
        optionA: "Printer",
        optionB: "Plotter",
        optionC: "LCD Projector",
        correctAnswer: "Plotter",
      },
      {
        question:
          "________ are also known as secondary, auxiliary, permanent, and mass storage devices.",
        optionA: "SSD (Solid State Drive)",
        optionB: "Hard Disk",
        optionC: "Storage Devices",
        correctAnswer: "Storage Devices",
      },
      {
        question:
          "The main function of the Central Processing Unit (CPU) is to execute instructions stored in a computer program and process ________ according to given instructions.",
        optionA: "Software",
        optionB: "Data",
        optionC: "Output",
        correctAnswer: "Data",
      },
      {
        question:
          "________ refers to a set of programs written for the proper functioning of the computer system, managing various tasks and controlling different operations.",
        optionA: "Application Software",
        optionB: "System Software",
        optionC: "Operating System",
        correctAnswer: "System Software",
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
          "The CPU is responsible for inputting data and generating output in a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "An Optical Mark Reader (OMR) detects pen/pencil marks on paper and is commonly used for objective-type tests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "true",
      },
      {
        question:
          "A Touch Screen requires a physical keyboard for user interaction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "Resolution does not play a role in determining the quality of a printer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "System Software manages various tasks and controls different operations of a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "true",
      },
      {
        question:
          "Output devices convert computer information into forms that users can't understand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "Data processing is not a primary function of the Central Processing Unit (CPU).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "Application Software enhances the efficiency of hardware components in a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "Storage Devices are primarily used for processing data in a computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "false",
      },
      {
        question:
          "Input Devices play a crucial role in providing data and instructions to the Central Processing Unit (CPU) for processing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "true",
      },
    ],
  };
}

export var activityData;
