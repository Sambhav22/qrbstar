export const chapter = "Chapter - 2: Separating Substances ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the key characteristic of a mixture?",
          optionA: "Fixed composition",
          optionB: "Variable composition",
          optionC: "Always a liquid",
          correctAnswer: "B",
        },
        {
          question: "Which of the following is an example of a pure substance?",
          optionA: "Air",
          optionB: "Distilled water",
          optionC: "Saltwater",
          correctAnswer: "B",
        },
        {
          question: "Why do we need to separate components of a mixture?",
          optionA: "To make the mixture more colorful",
          optionB: "To remove impurities and obtain pure substances",
          optionC: "To increase the volume of the mixture",
          correctAnswer: "B",
        },
        {
          question:
            "What method is used to separate solid constituents of a mixture based on their size?",
          optionA: "Filtration",
          optionB: "Hand Picking",
          optionC: "Threshing",
          correctAnswer: "A",
        },
        {
          question: "What is the purpose of winnowing?",
          optionA: "To separate heavier and lighter components using wind",
          optionB: "To remove impurities by hand",
          optionC: "To separate solid constituents based on size",
          correctAnswer: "A",
        },
        {
          question:
            "Which method is suitable for separating a solid-liquid mixture when the solid is heavier than the liquid?",
          optionA: "Winnowing",
          optionB: "Filtration",
          optionC: "Sedimentation and Decantation",
          correctAnswer: "C",
        },
        {
          question:
            "What is the process used to obtain common salt from seawater?",
          optionA: "Filtration",
          optionB: "Distillation",
          optionC: "Evaporation",
          correctAnswer: "C",
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
            "A mixture is defined as a combination of two or more elements or compounds with __________ composition.",
          optionA: "Fixed",
          optionB: "Variable",
          optionC: "Uniform",
          correctAnswer: "B",
        },
        {
          question:
            "Pure substances consist of only one type of components and are either __________ or __________.",
          optionA: "Compounds, mixtures",
          optionB: "Elements, compounds",
          optionC: "Mixtures, elements",
          correctAnswer: "B",
        },
        {
          question:
            "We separate the components of a mixture to remove undesirable or harmful components, remove impurities, and __________.",
          optionA: "Increase the volume",
          optionB: "Obtain pure samples",
          optionC: "Enhance color",
          correctAnswer: "B",
        },
        {
          question:
            "__________ is a method used to separate impurities by manually picking them based on color, size, and shape.",
          optionA: "Filtration",
          optionB: "Hand Picking",
          optionC: "Threshing",
          correctAnswer: "B",
        },
        {
          question:
            "The traditional method of threshing involves spreading harvested crop on the ground and using __________ to walk over it.",
          optionA: "Humans",
          optionB: "Motorized machines",
          optionC: "Animals like buffaloes, bullocks, or camels",
          correctAnswer: "C",
        },
        {
          question:
            "Winnowing is a process used to separate components of a mixture by utilizing the __________.",
          optionA: "Force of gravity",
          optionB: "Wind or blowing air",
          optionC: "Magnetic field",
          correctAnswer: "B",
        },
        {
          question:
            "Sieving is employed to separate solid constituents based on their __________.",
          optionA: "Color",
          optionB: "Size",
          optionC: "Shape",
          correctAnswer: "B",
        },
        {
          question:
            "Sedimentation and Decantation are methods used to separate a solid-liquid mixture where the solid is __________ than the liquid.",
          optionA: "Lighter",
          optionB: "Heavier",
          optionC: "Equal in weight",
          correctAnswer: "B",
        },
        {
          question:
            "The process of passing a liquid through a filter to remove undissolved substances is known as __________.",
          optionA: "Filtration",
          optionB: "Distillation",
          optionC: "Evaporation",
          correctAnswer: "A",
        },
        {
          question:
            "Distillation is used in some countries, like Saudi Arabia, to obtain pure water from __________.",
          optionA: "Underground sources",
          optionB: "Rivers",
          optionC: "Seawater",
          correctAnswer: "C",
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
          question: "A mixture always has a fixed composition.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question: "Pure substances can be either elements or compounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
        {
          question:
            "Components of a mixture can be separated by physical means.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
        {
          question:
            "Distillation is a method used for separating solid impurities from a liquid.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "Sieving is a process used to separate solid constituents based on their color.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "Sedimentation and Decantation are methods used for separating solid-liquid mixtures.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
        {
          question:
            "Filtration is the process of passing a gas through a filter to remove impurities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "Winnowing is a method used for separating heavier and lighter components of a mixture by blowing air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
        {
          question:
            "Evaporation is a process where liquids convert into solid form.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question: "The Palaeolithic Age is also known as the Old Stone Age.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
      ],
    ],
  };
}

export var activityData;
