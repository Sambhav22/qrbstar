export const chapter = "Chapter - 1: Types of Computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary characteristic of Analog Computers?",
        optionA: "They store data in discrete numerical form.",
        optionB:
          "They process analog data and use continuous physical quantities.",
        optionC: "They are mainly used for scientific calculations.",
        correctAnswer:
          "They process analog data and use continuous physical quantities.",
      },
      {
        question:
          "Which type of computer combines the features of both digital and analog computers?",
        optionA: "Microcomputer",
        optionB: "Mainframe Computer",
        optionC: "Hybrid Computer",
        correctAnswer: "Hybrid Computer",
      },
      {
        question: "What is a characteristic feature of Microcomputers?",
        optionA: "They are mainly used in hospitals.",
        optionB: "They depend on a single microprocessor chip.",
        optionC: "They process data in continuous physical quantities.",
        correctAnswer: "They depend on a single microprocessor chip.",
      },
      {
        question:
          "In terms of functionality, what do Digital Computers primarily use to store data?",
        optionA: "Analog data",
        optionB: "Discrete numerical form",
        optionC: "Hybrid data",
        correctAnswer: "Discrete numerical form",
      },
      {
        question:
          "Which type of computer is specifically designed for applications requiring complex computational support and constant user interaction?",
        optionA: "Minicomputer",
        optionB: "Supercomputer",
        optionC: "Wearable Computer",
        correctAnswer: "Wearable Computer",
      },
      {
        question: "What is the main application area of Mainframe Computers?",
        optionA: "Weather forecasting",
        optionB: "Large organizations for critical tasks",
        optionC: "Scientific simulation",
        correctAnswer: "Large organizations for critical tasks",
      },
      {
        question:
          "What distinguishes Supercomputers from other types of computers?",
        optionA: "They are small and portable.",
        optionB: "They emphasize throughout computing.",
        optionC: "They use a single microprocessor chip.",
        correctAnswer: "They emphasize throughout computing.",
      },
      {
        question: "Which of the following is NOT a type of Microcomputer?",
        optionA: "Desktop",
        optionB: "Laptop",
        optionC: "Mainframe",
        correctAnswer: "Mainframe",
      },
      {
        question: "What is the common characteristic of Minicomputers?",
        optionA: "Small storage capacity",
        optionB: "Single-user support",
        optionC: "Ability to support more than one user at a time",
        correctAnswer: "Ability to support more than one user at a time",
      },
      {
        question:
          "In terms of size, what is a characteristic feature of Wearable Computers?",
        optionA: "Large and stationary",
        optionB: "Small and portable",
        optionC: "Similar to mainframe computers",
        correctAnswer: "Small and portable",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Analog computers are used to process _______ data.",
        optionA: "Numeric",
        optionB: "Discrete",
        optionC: "Analog",
        correctAnswer: "Analog",
      },
      {
        question:
          "Hybrid computers combine the features of _______ and _______ computers.",
        optionA: "Analog, Supercomputers",
        optionB: "Digital, Analog",
        optionC: "Microcomputers, Mainframe Computers",
        correctAnswer: "Digital, Analog",
      },
      {
        question:
          "Microcomputers are mainly used at _______, schools, offices, shops, and banks.",
        optionA: "Hospitals",
        optionB: "Homes",
        optionC: "Petrol pumps",
        correctAnswer: "Homes",
      },
      {
        question: "Laptops and notebooks are powered by rechargeable _______.",
        optionA: "Batteries",
        optionB: "Microprocessors",
        optionC: "Capacitors",
        correctAnswer: "Batteries",
      },
      {
        question:
          "Tablet PCs are equipped with a camera, microphone, and _______.",
        optionA: "Keyboard",
        optionB: "Touch screen",
        optionC: "Mouse",
        correctAnswer: "Touch screen",
      },
      {
        question:
          "PDAs refer to Personal Digital Assistants, which use _______ technology instead of a keyboard.",
        optionA: "Touch screen",
        optionB: "Voice recognition",
        optionC: "Stylus input",
        correctAnswer: "Touch screen",
      },
      {
        question:
          "Minicomputers are more powerful than _______ and can support more than one user at a time.",
        optionA: "Microcomputers",
        optionB: "Mainframe Computers",
        optionC: "Analog Computers",
        correctAnswer: "Microcomputers",
      },
      {
        question:
          "Mainframe computers are primarily used by large organizations to perform _______ tasks.",
        optionA: "Scientific",
        optionB: "Critical",
        optionC: "Networking",
        correctAnswer: "Critical",
      },
      {
        question:
          "Supercomputers are employed for specialized applications such as _______ and scientific simulation.",
        optionA: "Web browsing",
        optionB: "Word processing",
        optionC: "Weather forecasting",
        correctAnswer: "Weather forecasting",
      },
      {
        question:
          "Wearable computers provide constant computer and user interaction and are useful for applications requiring more complex _______ support.",
        optionA: "Arithmetic",
        optionB: "Computational",
        optionC: "Graphic design",
        correctAnswer: "Computational",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Analog computers are used to process digital data.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Hybrid computers combine the features of analog and digital computers.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Microcomputers are mainly used in hospitals and petrol pumps.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Laptops and notebooks are powered by non-rechargeable batteries.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Tablet PCs are equipped with a touch screen, camera, and microphone.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Minicomputers are less powerful than microcomputers.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Mainframe computers are primarily used for non-critical tasks.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Supercomputers are employed for applications such as weather forecasting and scientific simulation.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Wearable computers provide constant user interaction and are useful for applications requiring simple computational support.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The latitude of the North Pole is 90°N.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
