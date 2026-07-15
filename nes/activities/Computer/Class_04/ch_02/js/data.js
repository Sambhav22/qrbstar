export const chapter = "Chapter - 2: Computer Generations";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What was the main electronic component used in the first generation computers (1942-1956)?",
        optionA: "Transistors",
        optionB: "Vacuum Tubes",
        optionC: "Integrated Circuits",
        correctAnswer: "B",
      },
      {
        question:
          "Which programming language was introduced during the second generation of computers (1956-1964)?",
        optionA: "Machine Language",
        optionB: "FORTRAN and COBOL",
        optionC: "Assembly Language",
        correctAnswer: "B",
      },
      {
        question:
          "What replaced vacuum tubes in the second generation computers for better efficiency?",
        optionA: "Transistors",
        optionB: "Integrated Circuits",
        optionC: "Microprocessors",
        correctAnswer: "A",
      },
      {
        question:
          "Which component significantly improved the speed and efficiency of third generation computers (1964-1971)?",
        optionA: "Microprocessor",
        optionB: "Transistors",
        optionC: "Integrated Circuits (ICs)",
        correctAnswer: "C",
      },
      {
        question:
          "What technological innovation characterizes the fourth generation computers (1971-Present)?",
        optionA: "Microprocessors",
        optionB: "Vacuum Tubes",
        optionC: "Integrated Circuits (ICs)",
        correctAnswer: "A",
      },
      {
        question:
          "Which type of computers falls under the fourth generation and includes personal computers?",
        optionA: "Mainframe Computers",
        optionB: "Minicomputers",
        optionC: "Microcomputers",
        correctAnswer: "C",
      },
      {
        question:
          "What is the main component used in fifth generation computing devices?",
        optionA: "Microprocessors",
        optionB: "Ultra Large Scale Integration (ULSI)",
        optionC: "Transistors",
        correctAnswer: "B",
      },
      {
        question:
          "Which of the following is an example of a supercomputer in the fifth generation?",
        optionA: "IBM 4341",
        optionB: "STAR 1000",
        optionC: "CRAY-1 series",
        correctAnswer: "C",
      },
      {
        question:
          "What applications are mentioned as being used in the present for fifth-generation computing devices?",
        optionA: "Machine Learning and Self-Organization",
        optionB: "Voice Recognition, Fingerprint Scanning, Iris Scanning",
        optionC: "Nanotechnology and Quantum Computing",
        correctAnswer: "B",
      },
      {
        question: "What is the primary goal of fifth-generation computers?",
        optionA: "Develop devices with large storage capacity",
        optionB:
          "Respond to natural language input and capable of learning and self-organization",
        optionC: "Use advanced cooling systems for improved efficiency",
        correctAnswer: "B",
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
          "In the ____________, the first developed computer, ENIAC, was large in size and consumed a lot of electricity.",
        optionA: "Second Generation",
        optionB: "Third Generation",
        optionC: "First Generation",
        correctAnswer: "C",
      },
      {
        question:
          "During the second generation (1956-1964), computer languages such as __________ were introduced.",
        optionA: "Python",
        optionB: "FORTRAN and COBOL",
        optionC: "Java",
        correctAnswer: "B",
      },
      {
        question:
          "The computers of the third generation (1964-1971) used __________ as the new component, which significantly improved speed and efficiency.",
        optionA: "Microprocessors",
        optionB: "Vacuum Tubes",
        optionC: "Integrated Circuits (ICs)",
        correctAnswer: "C",
      },
      {
        question:
          "The fourth generation computers, produced after 1971, used __________ and __________ circuits, leading to fast and accurate processing.",
        optionA: "Transistors, Vacuum Tubes",
        optionB: "Microprocessors, Integrated Circuits (ICs)",
        optionC: "Integrated Circuits (ICs), Transistors",
        correctAnswer: "B",
      },
      {
        question:
          "Microcomputers, also known as personal computers, fall under the __________ generation of computers.",
        optionA: "Third",
        optionB: "Fourth",
        optionC: "Fifth",
        correctAnswer: "B",
      },
      {
        question:
          "The fifth generation computing devices are based on __________ and include applications such as voice recognition and fingerprint scanning.",
        optionA: "Artificial Intelligence",
        optionB: "Quantum Computing",
        optionC: "Nanotechnology",
        correctAnswer: "A",
      },
      {
        question:
          "Supercomputers, exemplified by the CRAY-1 series, are associated with the __________ generation of computers.",
        optionA: "Third",
        optionB: "Fourth",
        optionC: "Fifth",
        correctAnswer: "C",
      },
      {
        question:
          "The primary goal of fifth-generation computers is to develop devices that respond to __________ and are capable of learning and self-organisation.",
        optionA: "Machine Language",
        optionB: "Natural Language Input",
        optionC: "Assembly Language",
        correctAnswer: "B",
      },
      {
        question:
          "The Himalayas play a crucial role in India's climate by preventing cold arctic winds due to their __________.",
        optionA: "Low Altitude",
        optionB: "Permanently Covered Snow",
        optionC: "Barrier Effect",
        correctAnswer: "C",
      },
      {
        question:
          "The fourth generation computers are known for their ability to perform calculations in __________, making the output more reliable.",
        optionA: "Microseconds",
        optionB: "Nanoseconds",
        optionC: "Picoseconds",
        correctAnswer: "C",
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
          "The first developed computer, ENIAC, was small in size and consumed minimal electricity.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "During the second generation of computers, languages such as FORTRAN and COBOL were introduced.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The third generation computers (1964-1971) used vacuum tubes as the main electronic component.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Microprocessors and Integrated Circuits (ICs) are key components of fourth-generation computers.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Personal computers, also known as microcomputers, are associated with the third generation of computers.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Supercomputers, such as the CRAY-1 series, are characteristic of the fifth generation of computers.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The primary goal of fifth-generation computers is to develop devices that respond to natural language input.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The Himalayas play a crucial role in India's climate by allowing cold arctic winds to reach the tropical landmass.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The sediment carried by Himalayan rivers contributes to the fertility of the Northern Plains.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The Himalayas are rich in renewable resources such as wind and solar energy.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
