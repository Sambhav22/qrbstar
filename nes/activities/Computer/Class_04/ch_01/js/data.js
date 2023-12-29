export const chapter = "Chapter - 1: History of Computers ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Which was the earliest known calculating device?",
          optionA: "Napier's Bones",
          optionB: "Pascaline",
          optionC: "Abacus",
          correctAnswer: "Abacus",
        },
        {
          question: "Who invented the device known as Napier's Bones?",
          optionA: "Sir John Napier",
          optionB: "William Oughtred",
          optionC: "Blaise Pascal",
          correctAnswer: "Sir John Napier",
        },
        {
          question:
            "The slide rule, invented by William Oughtred, was based on the principles of:",
          optionA: "Multiplication",
          optionB: "Logarithms",
          optionC: "Addition",
          correctAnswer: "Logarithms",
        },
        {
          question: "Which device was the first real mechanical calculator?",
          optionA: "Napier's Bones",
          optionB: "Pascaline",
          optionC: "Analytical Engine",
          correctAnswer: "Pascaline",
        },
        {
          question: "Who invented the 'Stepped Reckoner'?",
          optionA: "Blaise Pascal",
          optionB: "Sir John Napier",
          optionC: "Gottfried Wilhelm Leibniz",
          correctAnswer: "Gottfried Wilhelm Leibniz",
        },
        {
          question: "The Jacquard Loom was controlled by:",
          optionA: "Rotating wheels",
          optionB: "Punched cards",
          optionC: "Fluted drums",
          correctAnswer: "Punched cards",
        },
        {
          question: "Who invented the Analytical Engine?",
          optionA: "Charles Babbage",
          optionB: "William Oughtred",
          optionC: "Herman Hollerith",
          correctAnswer: "Charles Babbage",
        },
        {
          question:
            "The Tabulating Machine developed by Herman Hollerith was based on:",
          optionA: "Analog technology",
          optionB: "Punched cards",
          optionC: "Logarithms",
          correctAnswer: "Punched cards",
        },
        {
          question: "What does ENIAC stand for?",
          optionA: "Electronic Numerical Integrator And Computer",
          optionB: "Electronic Number Indicator And Calculator",
          optionC: "Electronic Network Interface And Control",
          correctAnswer: "Electronic Numerical Integrator And Computer",
        },
        {
          question: "Where was ENIAC constructed?",
          optionA: "Harvard University",
          optionB: "University of Pennsylvania",
          optionC: "MIT (Massachusetts Institute of Technology)",
          correctAnswer: "University of Pennsylvania",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "The ________ was the first calculating device, invented over 5,000 years ago by the Chinese.",
          options: {
            optionA: "Abacus",
            optionB: "Pascaline",
            optionC: "Slide Rule",
          },
          correctAnswer: "Abacus",
        },
        {
          question:
            "Napier's Bones, invented by Sir John Napier, used a set of rods made up of ________ to multiply numbers.",
          options: {
            optionA: "Wood",
            optionB: "Stones",
            optionC: "Bones",
          },
          correctAnswer: "Bones",
        },
        {
          question:
            "The slide rule, developed by William Oughtred, was based on the principles of ________.",
          options: {
            optionA: "Addition",
            optionB: "Logarithms",
            optionC: "Multiplication",
          },
          correctAnswer: "Logarithms",
        },
        {
          question:
            "Blaise Pascal invented the ________, considered as the first real mechanical calculator.",
          options: {
            optionA: "Abacus",
            optionB: "Pascaline",
            optionC: "Napier's Bones",
          },
          correctAnswer: "Pascaline",
        },
        {
          question:
            "Gottfried Wilhelm Leibniz invented the 'Stepped Reckoner' employing ________ arranged around their circumference.",
          options: {
            optionA: "Gears",
            optionB: "Fluted drums",
            optionC: "Rotating wheels",
          },
          correctAnswer: "Fluted drums",
        },
        {
          question: "The Jacquard Loom was controlled by ________.",
          options: {
            optionA: "Rotating gears",
            optionB: "Punched cards",
            optionC: "Sliding rods",
          },
          correctAnswer: "Punched cards",
        },
        {
          question:
            "Charles Babbage is known for inventing the ________, an early form of a computing device capable of difficult calculations.",
          options: {
            optionA: "Abacus",
            optionB: "Analytical Engine",
            optionC: "Slide Rule",
          },
          correctAnswer: "Analytical Engine",
        },
        {
          question:
            "The Tabulating Machine developed by Herman Hollerith was based on the use of ________.",
          options: {
            optionA: "Analog technology",
            optionB: "Punched cards",
            optionC: "Rotating cylinders",
          },
          correctAnswer: "Punched cards",
        },
        {
          question: "ENIAC, the first modern computer, stands for ________.",
          options: {
            optionA: "Electronic Numerical Integrator And Computer",
            optionB: "Electronic Network Interface And Control",
            optionC: "Electronic Number Indicator And Calculator",
          },
          correctAnswer: "Electronic Numerical Integrator And Computer",
        },
        {
          question: "The ENIAC was constructed at the ________.",
          options: {
            optionA: "Harvard University",
            optionB: "University of Pennsylvania",
            optionC: "MIT (Massachusetts Institute of Technology)",
          },
          correctAnswer: "University of Pennsylvania",
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
            "The Abacus was invented by the Chinese over 5,000 years ago.",
          options: {
            optionA: "Abacus",
            optionB: "Pascaline",
          },
          correctAnswer: "Abacus",
        },
        {
          question: "Napier's Bones were named after Sir Isaac Newton.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The slide rule, invented by William Oughtred, was based on the principles of addition.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "The Pascaline was the first mechanical calculator.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Gottfried Wilhelm Leibniz invented the 'Stepped Reckoner' employing rotating gears.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "The Jacquard Loom was controlled by punched cards.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "The Analytical Engine was invented by Charles Babbage.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Herman Hollerith developed the Tabulating Machine based on analog technology.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "ENIAC stands for Electronic Network Interface And Control.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "The ENIAC was constructed at Harvard University.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
