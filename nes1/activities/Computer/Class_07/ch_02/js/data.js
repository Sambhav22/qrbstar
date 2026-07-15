export const chapter = "Chapter - 2: Generation of Computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What was the primary component used for circuitry in first-generation computers?",
          optionA: "Vacuum tubes",
          optionB: "Transistors",
          optionC: "Integrated Circuits",
          correctAnswer: "A) Vacuum tubes",
        },
        {
          question:
            "Which generation of computers introduced the use of transistors?",
          optionA: "First Generation",
          optionB: "Second Generation",
          optionC: "Third Generation",
          correctAnswer: "B) Second Generation",
        },
        {
          question:
            "Integrated Circuits (ICs) were a hallmark of which computer generation?",
          optionA: "First Generation",
          optionB: "Second Generation",
          optionC: "Third Generation",
          correctAnswer: "C) Third Generation",
        },
        {
          question:
            "Which generation of computers saw the use of microprocessor-based systems?",
          optionA: "Second Generation",
          optionB: "Third Generation",
          optionC: "Fourth Generation",
          correctAnswer: "C) Fourth Generation",
        },
        {
          question: "What is a characteristic of fourth-generation computers?",
          optionA: "Use of vacuum tubes",
          optionB: "Large size and high cost",
          optionC: "Microprocessor-based systems",
          correctAnswer: "C) Microprocessor-based systems",
        },
        {
          question:
            "Which generation of computers is associated with artificial intelligence?",
          optionA: "Fourth Generation",
          optionB: "Fifth Generation",
          optionC: "Third Generation",
          correctAnswer: "B) Fifth Generation",
        },
        {
          question: "What is the primary focus of fifth-generation computers?",
          optionA: "Quantum computing",
          optionB: "Artificial intelligence",
          optionC: "Nanotechnology",
          correctAnswer: "B) Artificial intelligence",
        },
        {
          question:
            "What distinguishes third-generation computers from their predecessors?",
          optionA: "Use of vacuum tubes",
          optionB: "Integration of transistors",
          optionC: "Machine-level programming",
          correctAnswer: "B) Integration of transistors",
        },
        {
          question:
            "Which generation of computers had the goal of devices capable of natural language inputs and self-organization?",
          optionA: "Fourth Generation",
          optionB: "Fifth Generation",
          optionC: "Third Generation",
          correctAnswer: "B) Fifth Generation",
        },
        {
          question:
            "What technology marked the transition from second to third-generation computers?",
          optionA: "Vacuum tubes",
          optionB: "Transistors",
          optionC: "Integrated Circuits",
          correctAnswer: "C) Integrated Circuits",
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
            "The period of the first generation of computers spanned from _____ to _____.",
          options: ["1942", "1956", "1956", "1964", "1964", "1971"],
          correctAnswer: ["1942", "1956"],
        },
        {
          question:
            "The first generation computers used _____ for circuitry and magnetic drums for memory.",
          options: ["Transistors", "Vacuum tubes", "Integrated Circuits"],
          correctAnswer: "Vacuum tubes",
        },
        {
          question:
            "Transistors replaced _____ in the second generation of computers.",
          options: ["Vacuum tubes", "Integrated Circuits", "Microprocessors"],
          correctAnswer: "Vacuum tubes",
        },
        {
          question:
            "The third generation of computers utilized _____, which were known as chips.",
          options: ["Microprocessors", "Vacuum tubes", "Integrated Circuits"],
          correctAnswer: "Integrated Circuits",
        },
        {
          question:
            "The fourth generation computers are primarily _____ systems.",
          options: [
            "Microprocessor-based",
            "Vacuum tube",
            "Integrated Circuit",
          ],
          correctAnswer: "Microprocessor-based",
        },
        {
          question: "Fifth-generation computers are focused on _____.",
          options: [
            "Vacuum tubes",
            "Artificial intelligence",
            "Integrated Circuits",
          ],
          correctAnswer: "Artificial intelligence",
        },
        {
          question:
            "An integrated circuit with more than 1000 components is termed as _____.",
          options: ["LSI", "VLSI", "LSIC"],
          correctAnswer: "VLSI",
        },
        {
          question:
            "The aim of fifth-generation computers is to develop devices capable of _____.",
          options: [
            "Learning from humans",
            "Quantum computing",
            "Responding to natural language inputs",
          ],
          correctAnswer: "Responding to natural language inputs",
        },
        {
          question:
            "The use of _____ marked the transition from second to third-generation computers.",
          options: ["Vacuum tubes", "Transistors", "Integrated Circuits"],
          correctAnswer: "Integrated Circuits",
        },
        {
          question:
            "_____ are among the applications associated with fifth-generation computers.",
          options: ["Robots", "Nanotechnology", "Vacuum tubes"],
          correctAnswer: "Robots",
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
            "The first generation computers primarily used vacuum tubes for circuitry.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Transistors were utilized in the first generation of computers.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Integrated Circuits (ICs) were introduced in the third generation of computers.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Microprocessor-based systems characterize the second generation of computers.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Fifth-generation computers are primarily focused on vacuum tube technology.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An integrated circuit with more than 1000 components is termed as LSI.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The aim of fifth-generation computers is to develop devices capable of quantum computing.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The second generation of computers used high-level programming languages.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The third generation of computers consumed minimal electricity and produced little heat.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Fourth-generation computers were known for their small size and affordability.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
