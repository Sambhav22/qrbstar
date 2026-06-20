export const chapter = "Chapter - 1: sentences ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary characteristic of an assertive sentence or statement?",
          optionA:
            "It expresses a fact, event, or condition in an affirmative or negative manner.",
          optionB: "It asks a question or makes a query.",
          optionC:
            "It expresses order, command, request, entreaty, advice, proposal, or suggestion.",
          correctAnswer:
            "A) It expresses a fact, event, or condition in an affirmative or negative manner.",
        },
        {
          question:
            "Which of the following is an example of a negative sentence or assertion?",
          optionA: "Do you know her?",
          optionB: "An old man is riding a horse.",
          optionC: "They were not telling a lie.",
          correctAnswer: "C) They were not telling a lie.",
        },
        {
          question:
            "What distinguishes interrogative sentences from other types of sentences?",
          optionA:
            "They express order, command, request, entreaty, advice, proposal, or suggestion.",
          optionB:
            "They begin with a helping verb and not with an interrogative word.",
          optionC: "They ask a question or make a query.",
          correctAnswer: "C) They ask a question or make a query.",
        },
        {
          question:
            "Which type of question can be answered with 'yes' or 'no'?",
          optionA: "Yes/No type Questions",
          optionB: "Question Word Questions",
          optionC: "Imperative Sentences",
          correctAnswer: "A) Yes/No type Questions",
        },
        {
          question:
            "What distinguishes question word questions from yes/no type questions?",
          optionA: "They begin with a helping verb.",
          optionB:
            "They need some information for an answer and begin with an interrogative word.",
          optionC:
            "They express order, command, request, entreaty, advice, proposal, or suggestion.",
          correctAnswer:
            "B) They need some information for an answer and begin with an interrogative word.",
        },
        {
          question:
            "What type of sentence expresses order, command, request, entreaty, advice, proposal, or suggestion?",
          optionA: "Imperative Sentences",
          optionB: "Exclamatory Sentences",
          optionC: "Optative Sentences",
          correctAnswer: "A) Imperative Sentences",
        },
        {
          question:
            "Which type of sentence expresses some sudden feeling or emotion?",
          optionA: "Optative Sentences",
          optionB: "Exclamatory Sentences",
          optionC: "Assertive Sentences",
          correctAnswer: "B) Exclamatory Sentences",
        },
        {
          question: "What is the purpose of exclamatory sentences?",
          optionA: "To express wish, prayer, boon, or curse.",
          optionB: "To ask a question or make a query.",
          optionC: "To express some sudden feeling or emotion.",
          correctAnswer: "C) To express some sudden feeling or emotion.",
        },
        {
          question: "How do optative sentences generally begin and end?",
          optionA:
            "They begin with an interrogative word and end with a question mark.",
          optionB:
            "They begin with a helping verb and end with an exclamation mark.",
          optionC:
            "They begin with the word 'may' and end in a mark of exclamation.",
          correctAnswer:
            "C) They begin with the word 'may' and end in a mark of exclamation.",
        },
        {
          question: "What is the primary function of optative sentences?",
          optionA:
            "To express order, command, request, entreaty, advice, proposal, or suggestion.",
          optionB: "To express wish, prayer, boon, or curse.",
          optionC: "To express some sudden feeling or emotion.",
          correctAnswer: "B) To express wish, prayer, boon, or curse.",
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
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
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
  };
}

export var activityData;
