export const chapter = "Chapter - 1: Historical Development Of Computers ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was the primary function of the abacus?",
          optionA: "Division and multiplication",
          optionB: "Arithmetic calculations",
          optionC: "Square and cube roots",
          correctAnswer: "B",
        },
        {
          question: "Who is credited with inventing the Analytical Engine?",
          optionA: "John Napier",
          optionB: "Blaise Pascal",
          optionC: "Charles Babbage",
          correctAnswer: "C",
        },
        {
          question: "What was the main purpose of Jacquard Loom?",
          optionA: "Textile manufacturing",
          optionB: "Arithmetic calculations",
          optionC: "Mechanical engineering",
          correctAnswer: "A",
        },
        {
          question:
            "Which machine was known as the first commercially successful calculating machine?",
          optionA: "Analytical Engine",
          optionB: "Arithmometer",
          optionC: "Difference Engine",
          correctAnswer: "B",
        },
        {
          question: "Who invented the Difference Engine?",
          optionA: "John Napier",
          optionB: "Charles Babbage",
          optionC: "John Mauchly",
          correctAnswer: "B",
        },
        {
          question:
            "Which device introduced the concept of punch cards for information storage?",
          optionA: "Arithmometer",
          optionB: "Analytical Engine",
          optionC: "Tabulating Machine",
          correctAnswer: "C",
        },
        {
          question:
            "Which computer was the first to use punch tape for programming and output generation?",
          optionA: "Z1",
          optionB: "ENIAC",
          optionC: "Harvard Mark 1",
          correctAnswer: "A",
        },
        {
          question:
            "Who invented the first electronic digital computing device?",
          optionA: "Konrad Zuse",
          optionB: "John Atanasoff",
          optionC: "Howard Aiken",
          correctAnswer: "B",
        },
        {
          question: "What was the predecessor to EDVAC?",
          optionA: "UNIVAC",
          optionB: "ENIAC",
          optionC: "EDSAC",
          correctAnswer: "B",
        },
        {
          question: "What did UNIVAC stand for?",
          optionA: "Universal Automatic Computer",
          optionB: "Electronic Discrete Variable Automatic Computer",
          optionC: "Electronic Numerical Integrator And Computer",
          correctAnswer: "C",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "The word 'computer' was initially used in the 16th century for a person who used to ____________.",
          options: {
            a: "design machinery",
            b: "perform calculations",
            c: "manage data",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The abacus, believed to be the first computer, was invented around ____________ years ago.",
          options: {
            a: "2,000",
            b: "5,000",
            c: "8,000",
          },
          correctAnswer: "b",
        },
        {
          question:
            "John Napier's invention, Napier's Bones, enabled calculations of ____________ and ____________.",
          options: {
            a: "square roots",
            b: "cube roots",
            c: "both square and cube roots",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Pascaline, invented by Blaise Pascal, could perform ____________ and ____________.",
          options: {
            a: "addition; subtraction",
            b: "multiplication; division",
            c: "multiplication; addition",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Jacquard Loom, controlled by punched cards, marked the beginning of ____________.",
          options: {
            a: "mechanical engineering",
            b: "information storage",
            c: "textile manufacturing",
          },
          correctAnswer: "c",
        },
        {
          question:
            "The Difference Engine, designed by Charles Babbage in 1822, was meant to solve tables of ____________.",
          options: {
            a: "logarithms",
            b: "trigonometric functions",
            c: "square roots",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Z1, the first programmable computer created by Konrad Zuse, utilized ____________ for programming and output generation.",
          options: {
            a: "punch tape",
            b: "punched cards",
            c: "vacuum tubes",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The Atanasoff-Berry Computer (ABC) was the first ____________ digital computing device.",
          options: {
            a: "mechanical",
            b: "electronic",
            c: "programmable",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Harvard Mark 1, also known as IBM Automatic Sequence Controlled Calculator (ASCC), was the first ____________ computer.",
          options: {
            a: "mechanical",
            b: "electronic",
            c: "hybrid",
          },
          correctAnswer: "a",
        },
        {
          question:
            "UNIVAC, invented by John Mauchly and John Presper Eckert, was the first successful ____________ computer.",
          options: {
            a: "analog",
            b: "digital",
            c: "hybrid",
          },
          correctAnswer: "b",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The abacus, invented around 5,000 years ago, is considered the first computer.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Pascaline, invented by Blaise Pascal, could perform multiplication, division, and addition.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Jacquard Loom introduced the concept of punched cards for information storage.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Z1, the first programmable computer, used punched cards for programming and output generation.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Atanasoff-Berry Computer (ABC) was a mechanical computing device.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Harvard Mark 1, also known as IBM ASCC, was an electronic computer.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question: "UNIVAC was the first analog computer developed.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Difference Engine, designed by Charles Babbage, was intended to solve trigonometric functions.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Analytical Engine, developed by Charles Babbage, was programmable using punch tape.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The Tabulating Machine, invented in 1890, used punch cards for statistical data.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
      ],
    ],
  };
}

export var activityData;
