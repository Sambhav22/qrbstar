export const chapter = "Chapter - 4: Characteristics of Living Things ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What distinguishes living things from non-living things?",
            options: [
              "Ability to move",
              "Presence of a life cycle",
              "Response to stimuli",
            ],
            answer: "Presence of a life cycle",
          },
          {
            question:
              "Which of the following is an example of a natural non-living thing?",
            options: ["Car", "Mountain", "Toy"],
            answer: "Mountain",
          },
          {
            question:
              "What is the basic structural and functional unit of life?",
            options: ["Tissue", "Organ", "Cell"],
            answer: "Cell",
          },
          {
            question:
              "Plants that manufacture their own food through photosynthesis are called:",
            options: ["Autotrophs", "Heterotrophs", "Multicellular organisms"],
            answer: "Autotrophs",
          },
          {
            question:
              "What is the primary product of respiration used by organisms for various activities?",
            options: ["Oxygen", "Carbon dioxide", "Energy"],
            answer: "Energy",
          },
          {
            question: "How do animals like earthworms primarily breathe?",
            options: ["Lungs", "Gills", "Skin"],
            answer: "Skin",
          },
          {
            question:
              "What is the process by which living organisms obtain and use the food they need?",
            options: ["Digestion", "Nutrition", "Photosynthesis"],
            answer: "Nutrition",
          },
          {
            question:
              "Which characteristic involves the reaction of living things to changes in their environment?",
            options: ["Respiration", "Reproduction", "Response to stimuli"],
            answer: "Response to stimuli",
          },
          {
            question: "What is the removal of waste from the body called?",
            options: ["Digestion", "Excretion", "Respiration"],
            answer: "Excretion",
          },
          {
            question:
              "How do living organisms contribute to the continuity of their race?",
            options: [
              "Through movement",
              "Through reproduction",
              "Through respiration",
            ],
            answer: "Through reproduction",
          },
        ],
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
            "Living things respire by burning food in the presence of ____________.",
          options: ["Nitrogen", "Oxygen", "Carbon dioxide"],
          correctAnswer: "Oxygen",
        },
        {
          question:
            "The basic structural and functional unit of life is the ____________.",
          options: ["Organ", "Cell", "Tissue"],
          correctAnswer: "Cell",
        },
        {
          question:
            "Plants manufacture their own food through the process of ____________.",
          options: ["Digestion", "Respiration", "Photosynthesis"],
          correctAnswer: "Photosynthesis",
        },
        {
          question:
            "Living organisms obtain energy through the process of ____________.",
          options: ["Digestion", "Respiration", "Reproduction"],
          correctAnswer: "Respiration",
        },
        {
          question:
            "The removal of waste from the body is known as ____________.",
          options: ["Digestion", "Excretion", "Photosynthesis"],
          correctAnswer: "Excretion",
        },
        {
          question:
            "Living things react to changes around them, responding to touch, light, heat, and ____________.",
          options: ["Sound", "Smell", "Taste"],
          correctAnswer: "Sound",
        },
        {
          question:
            "The process by which living organisms bring their young ones into the world is called ____________.",
          options: ["Respiration", "Reproduction", "Nutrition"],
          correctAnswer: "Reproduction",
        },
        {
          question:
            "Locomotion is the result of the movement of internal organs such as muscles and ____________.",
          options: ["Nerves", "Bones", "Skin"],
          correctAnswer: "Bones",
        },
        {
          question:
            "Living organisms have a definite pattern of life, including birth, growth, reproduction, and ____________.",
          options: ["Movement", "Respiration", "Death"],
          correctAnswer: "Death",
        },
        {
          question:
            "Viruses need to be inside living cells to grow and ____________.",
          options: ["Multiply", "Divide", "Hibernate"],
          correctAnswer: "Multiply",
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
            "Living things respire by burning food in the presence of oxygen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Harappan Civilization, also known as the Indus Valley Civilization, existed around 3700 years ago.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Plants that manufacture their own food through photosynthesis are called heterotrophs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Harappan seals, made from clay, soapstone, or copper, were primarily used for marking territory boundaries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Viruses can survive for long periods outside living bodies and do not require a host for multiplication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Great Bath in the Harappan citadel was used for religious ceremonies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "All living organisms need food to stay alive, grow, and protect against diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The basic structural and functional unit of life is the tissue.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "During respiration, plants use carbon dioxide and give out oxygen to the air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Chalcolithic Age is sometimes referred to as the Iron Age.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
