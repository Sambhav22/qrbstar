export const chapter = "Chapter - 7: Algorithm And Flowchart ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is an algorithm?",
          optionA:
            "A sequence of instructions in a specific order to solve a problem.",
          optionB: "A graphical representation of a program's logic.",
          optionC: "A set of symbols used in computer programming.",
          correctAnswer: "A",
        },
        {
          question: "What is the advantage of using a flowchart?",
          optionA: "It is a better way of communicating with output devices.",
          optionB: "It acts as a blueprint during program development.",
          optionC: "It replaces the need for programming languages.",
          correctAnswer: "B",
        },
        {
          question:
            "What shape is used to represent a decision box in a flowchart?",
          optionA: "Rectangle",
          optionB: "Oval",
          optionC: "Rhombus or diamond",
          correctAnswer: "C",
        },
        {
          question:
            "Which box in a flowchart is used to indicate the beginning and end of a process?",
          optionA: "Input/Output Box",
          optionB: "Process Box",
          optionC: "Terminal Box",
          correctAnswer: "C",
        },
        {
          question: "What does a process box in a flowchart represent?",
          optionA: "Input/Output operations",
          optionB: "Decision-making points",
          optionC: "Arithmetic and data processing",
          correctAnswer: "C",
        },
        {
          question: "What should be the last statement in an algorithm?",
          optionA: "Start",
          optionB: "Stop",
          optionC: "End",
          correctAnswer: "B",
        },
        {
          question: "What is the purpose of a connector box in a flowchart?",
          optionA: "To indicate the flow of instructions",
          optionB: "To connect symbols on different pages",
          optionC: "To represent input/output operations",
          correctAnswer: "B",
        },
        {
          question:
            "Which shape is used for an input/output box in a flowchart?",
          optionA: "Rectangle",
          optionB: "Parallelogram",
          optionC: "Oval",
          correctAnswer: "B",
        },
        {
          question:
            "What type of language are the statements in an algorithm typically written in?",
          optionA: "Programming language",
          optionB: "Complex language",
          optionC: "Simple English language",
          correctAnswer: "C",
        },
        {
          question: "What does a flow line symbolize in a flowchart?",
          optionA: "The decision-making process",
          optionB: "The flow of instructions between symbols",
          optionC: "The starting point of a program",
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
            "The primary purpose of a __________ in the Mughal royal court was to meet nobles and officers.",
          options: ["Diwan-i-Khas", "Diwan-i-Aam", "Diwan-i-Rasalat"],
          correctAnswer: "Diwan-i-Khas",
        },
        {
          question:
            "The department in the Mughal administration responsible for revenue, income, and expenditure was the ___________.",
          options: ["Wazir", "Mir Bakshi", "Sadr-i-Sadur"],
          correctAnswer: "Sadr-i-Sadur",
        },
        {
          question:
            "The primary source of income for a ruler during the Mughal period was from ___________.",
          options: ["Trade", "Land revenue", "Taxes on pilgrimage"],
          correctAnswer: "Land revenue",
        },
        {
          question:
            "The system developed by Todar Mal for fixing land revenue was known as ___________.",
          options: ["Todar Bandobast", "Akbari Bandobast", "Zabt System"],
          correctAnswer: "Todar Bandobast",
        },
        {
          question:
            "The key feature of the Mughal military administration called mansabdari was the implementation of a ___________.",
          options: ["Hereditary positions", "Fixed land grants", "Rank system"],
          correctAnswer: "Rank system",
        },
        {
          question:
            "The Mughal ruler controlled an army without being dependent on any mansabdar by exercising ___________.",
          options: ["Diplomacy", "Maintaining a navy", "Direct control"],
          correctAnswer: "Direct control",
        },
        {
          question:
            "The efficiency of the mansabdari system during Aurangzeb's time was compromised due to the ___________.",
          options: [
            "Military campaigns",
            "Suppression of non-Muslims",
            "Land revenue system",
          ],
          correctAnswer: "Suppression of non-Muslims",
        },
        {
          question:
            "After conquering the Rajputs, Akbar treated them ___________, honoring them with high posts.",
          options: [
            "With humiliation",
            "With exile",
            "Honourably and with high posts",
          ],
          correctAnswer: "Honourably and with high posts",
        },
        {
          question:
            "The department responsible for revenue, income, and expenditure in the Mughal administration was the ___________.",
          options: ["Wazir", "Sadr-i-Sadur", "Mir Bakshi"],
          correctAnswer: "Sadr-i-Sadur",
        },
        {
          question:
            "The Mughal ruler controlled an army without being dependent on any mansabdar by exercising ___________.",
          options: ["Diplomacy", "Maintaining a navy", "Direct control"],
          correctAnswer: "Direct control",
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
            "The flowchart uses boxes of different shapes to denote different types of instructions.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "A process box in a flowchart represents arithmetic and data processing.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The decision box in a flowchart indicates the starting point of the program.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "An algorithm is a graphical representation of a program's logic.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A connector box in a flowchart is used to indicate the flow of instructions.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Each statement in an algorithm must be given in a single line.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The purpose of a terminal box in a flowchart is to meet common people.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The shape of an input/output box in a flowchart is a rectangle.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Flow lines in a flowchart are used to connect symbols with each other.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "A good algorithm is written in complex language for precision.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
