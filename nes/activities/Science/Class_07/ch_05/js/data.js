export const chapter = "Chapter - 5: Physical and Chemical Changes ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What defines physical changes?",
          optionA: "Changes in chemical composition",
          optionB: "Changes in volume, density, temperature, etc.",
          optionC: "Changes in color and odor",
          correctAnswer: "B) Changes in volume, density, temperature, etc.",
        },
        {
          question:
            "Which of the following is an example of a reversible physical change?",
          optionA: "Burning of paper",
          optionB: "Melting of ice",
          optionC: "Rusting of iron",
          correctAnswer: "B) Melting of ice",
        },
        {
          question: "Characteristics of physical changes include:",
          optionA: "Formation of new substances",
          optionB: "Irreversibility",
          optionC: "Change in chemical composition",
          correctAnswer: "C) Change in chemical composition",
        },
        {
          question: "What is a chemical change?",
          optionA: "Change in state or appearance",
          optionB: "Change in physical properties",
          optionC: "Change into a substance with different properties",
          correctAnswer: "C) Change into a substance with different properties",
        },
        {
          question: "Which of the following is a chemical change?",
          optionA: "Melting of ice",
          optionB: "Digestion of food",
          optionC: "Stretching a spring",
          correctAnswer: "B) Digestion of food",
        },
        {
          question: "What is the characteristic of a chemical change?",
          optionA: "Reversibility",
          optionB: "Formation of new substances",
          optionC: "Short span of time",
          correctAnswer: "B) Formation of new substances",
        },
        {
          question: "What is rusting?",
          optionA: "Reversible physical change",
          optionB: "Chemical change",
          optionC: "Physical change",
          correctAnswer: "B) Chemical change",
        },
        {
          question: "How is rusting prevented in iron objects?",
          optionA: "Applying oil",
          optionB: "Stretching",
          optionC: "Melting",
          correctAnswer: "A) Applying oil",
        },
        {
          question: "Which of the following is a type of chemical reaction?",
          optionA: "Combustion",
          optionB: "Galvanisation",
          optionC: "Crystallisation",
          correctAnswer: "A) Combustion",
        },
        {
          question: "What is crystallisation?",
          optionA: "Change in physical properties",
          optionB: "Slow cooling of a saturated solution",
          optionC: "Formation of rust",
          correctAnswer: "B) Slow cooling of a saturated solution",
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
            "Physical changes involve a change in the __________ properties of a substance.",
          options: {
            A: "Chemical",
            B: "Biological",
            C: "Physical",
          },
          correctAnswer: "C) Physical",
        },
        {
          question:
            "During freezing, melting, and boiling, the __________ of matter changes.",
          options: {
            A: "Chemical composition",
            B: "Color",
            C: "State",
          },
          correctAnswer: "C) State",
        },
        {
          question:
            "Melting of ice is an example of a __________ physical change.",
          options: {
            A: "Reversible",
            B: "Irreversible",
            C: "Temporary",
          },
          correctAnswer: "A) Reversible",
        },
        {
          question:
            "In chemical changes, two or more different substances interact to form __________.",
          options: {
            A: "New elements",
            B: "New compounds",
            C: "New physical states",
          },
          correctAnswer: "B) New compounds",
        },
        {
          question:
            "During a chemical change, a sheet of paper burned converts into __________.",
          options: {
            A: "Pieces",
            B: "Ash",
            C: "Water",
          },
          correctAnswer: "B) Ash",
        },
        {
          question:
            "Spoiling of food items is an example of a __________ change.",
          options: {
            A: "Physical",
            B: "Biological",
            C: "Chemical",
          },
          correctAnswer: "C) Chemical",
        },
        {
          question:
            "The process by which two or more substances react to produce new substances is called a __________.",
          options: {
            A: "Physical reaction",
            B: "Chemical reaction",
            C: "Biological reaction",
          },
          correctAnswer: "B) Chemical reaction",
        },
        {
          question:
            "Combustion is a type of chemical reaction that produces __________.",
          options: {
            A: "Water and salt",
            B: "Heat and light",
            C: "Gas and oil",
          },
          correctAnswer: "B) Heat and light",
        },
        {
          question:
            "Galvanisation involves depositing a layer of __________ on iron.",
          options: {
            A: "Copper",
            B: "Zinc",
            C: "Aluminum",
          },
          correctAnswer: "B) Zinc",
        },
        {
          question:
            "Crystallisation requires slow cooling of a __________ solution.",
          options: {
            A: "Diluted",
            B: "Saturated",
            C: "Heated",
          },
          correctAnswer: "B) Saturated",
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
            "Physical changes involve a change in the chemical composition of a substance.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "During chemical changes, the composition of matter remains unchanged.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question: "Melting of ice is an irreversible physical change.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question: "During chemical changes, new substances are formed.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "Galvanisation involves depositing a layer of copper on iron.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Crystallisation requires rapid cooling of a saturated solution.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Combustion is a chemical reaction that produces heat and light.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question: "During rusting, the chemical formula of rust is Fe3O4.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Neutralisation reactions result in the formation of salt and water.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "Decomposition is a physical change where one compound is broken into simple substances.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
      ],
    ],
  };
}

export var activityData;
