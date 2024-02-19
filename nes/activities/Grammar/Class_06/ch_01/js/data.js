export const chapter = "Chapter - 1: Noun ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What type of noun is 'child'?",
          optionA: "Proper Noun",
          optionB: "Common Noun",
          optionC: "Collective Noun",
          correctAnswer: "Common Noun",
        },
        {
          question:
            "Which category includes names of specific persons, places, or things?",
          optionA: "Common Nouns",
          optionB: "Proper Nouns",
          optionC: "Material Nouns",
          correctAnswer: "Proper Nouns",
        },
        {
          question:
            "What is the name for a noun that represents a collection of persons, things, or animals spoken as a whole?",
          optionA: "Abstract Noun",
          optionB: "Common Noun",
          optionC: "Collective Noun",
          correctAnswer: "Collective Noun",
        },
        {
          question:
            "Which type of noun denotes the matter or substance of which things are made or found in the earth?",
          optionA: "Common Noun",
          optionB: "Abstract Noun",
          optionC: "Material Noun",
          correctAnswer: "Material Noun",
        },
        {
          question: "What does an abstract noun usually represent?",
          optionA: "A specific person, place, or thing",
          optionB: "A collection of items",
          optionC: "A quality, action, state, or concept",
          correctAnswer: "A quality, action, state, or concept",
        },
        {
          question:
            "In which sentence function does a noun serve as an adjective?",
          optionA: "As Subject of a Verb",
          optionB: "As Modifier of Another Noun",
          optionC: "As Complement",
          correctAnswer: "As Modifier of Another Noun",
        },
        {
          question: "What is the function of a noun as an indirect object?",
          optionA: "It is the receiver of the action.",
          optionB: "It modifies another noun.",
          optionC: "It receives the direct object.",
          correctAnswer: "It receives the direct object.",
        },
        {
          question:
            "In which sentence function does a noun serve as a complement?",
          optionA: "As Object of a Preposition",
          optionB: "As Complement",
          optionC: "As Direct Object of a Verb",
          correctAnswer: "As Complement",
        },
        {
          question: "What is the function of a noun as the subject of a verb?",
          optionA: "It modifies another noun.",
          optionB: "It is the receiver of the action.",
          optionC: "It performs the action.",
          correctAnswer: "It performs the action.",
        },
        {
          question: "Which of the following is an example of a proper noun?",
          optionA: "honesty",
          optionB: "library",
          optionC: "Raj",
          correctAnswer: "Raj",
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
            "__________, Central Processing Unit (CPU), and Output Devices are the three essential components required for computer processes.",
          options: {
            optionA: "Software",
            optionB: "Input Devices",
            optionC: "Storage Devices",
          },
          correctAnswer: "Input Devices",
        },
        {
          question:
            "An __________ is used to detect pen/pencil marks of pre-specified shape on a sheet of paper.",
          options: {
            optionA: "Optical Mark Reader (OMR)",
            optionB: "Magnetic Ink Character Reader (MICH)",
            optionC: "Barcode Reader",
          },
          correctAnswer: "Optical Mark Reader (OMR)",
        },
        {
          question:
            "A ________ is used to read special characters printed on documents like cheques using special magnetic ink.",
          options: {
            optionA: "Card Reader",
            optionB: "Magnetic Ink Character Reader (MICH)",
            optionC: "Trackball",
          },
          correctAnswer: "Magnetic Ink Character Reader (MICH)",
        },
        {
          question:
            "A ________ is an electronic visual display that the user can control through simple or multi-touch gestures.",
          options: {
            optionA: "Touchpad",
            optionB: "Touch Screen",
            optionC: "Graphic Tablet",
          },
          correctAnswer: "Touch Screen",
        },
        {
          question:
            "An output device is an electro-mechanical device that converts computer information into a form that a user can __________.",
          options: {
            optionA: "Process",
            optionB: "Understand",
            optionC: "Store",
          },
          correctAnswer: "Understand",
        },
        {
          question: "The quality of a printer is determined by its __________.",
          options: {
            optionA: "Cost",
            optionB: "Resolution",
            optionC: "Speed",
          },
          correctAnswer: "Resolution",
        },
        {
          question:
            "A ________ is an output device used to produce high-quality graphics, charts, and diagrams.",
          options: {
            optionA: "Printer",
            optionB: "Plotter",
            optionC: "LCD Projector",
          },
          correctAnswer: "Plotter",
        },
        {
          question:
            "________ are also known as secondary, auxiliary, permanent, and mass storage devices.",
          options: {
            optionA: "SSD (Solid State Drive)",
            optionB: "Hard Disk",
            optionC: "Storage Devices",
          },
          correctAnswer: "Storage Devices",
        },
        {
          question:
            "The main function of the Central Processing Unit (CPU) is to execute instructions stored in a computer program and process ________ according to given instructions.",
          options: {
            optionA: "Software",
            optionB: "Data",
            optionC: "Output",
          },
          correctAnswer: "Data",
        },
        {
          question:
            "________ refers to a set of programs written for the proper functioning of the computer system, managing various tasks and controlling different operations.",
          options: {
            optionA: "Application Software",
            optionB: "System Software",
            optionC: "Operating System",
          },
          correctAnswer: "System Software",
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
            "A Common Noun is a specific name given to a particular person, place, or thing.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Collective Nouns represent a single person, place, or thing.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Material Nouns denote the matter or substance of which things are made or found in the earth.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Abstract Nouns are usually the names of specific persons, places, or things.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "A Noun can only serve as the subject of a verb in a sentence.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "An indirect object of a verb receives the direct object.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "A noun can serve as a complement in a sentence.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "An output device converts computer information into a form that a user can process.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Resolution is a determining factor in the quality of a printer.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The main function of the Central Processing Unit (CPU) is to execute instructions and process data.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
