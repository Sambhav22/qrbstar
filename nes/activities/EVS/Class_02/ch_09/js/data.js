export const chapter = "Chapter - 9: Plant Life ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the function of the root in a plant?",
          optionA: "Collects energy from the sun",
          optionB: "Takes water and minerals from the soil",
          optionC: "Bears fruits",
          correctAnswer: "Takes water and minerals from the soil",
        },
        {
          question: "What is the stem's role in a plant?",
          optionA: "Collects energy from the sun",
          optionB: "Bears fruits",
          optionC: "Carries water and nutrients to the rest of the plant",
          correctAnswer: "Carries water and nutrients to the rest of the plant",
        },
        {
          question: "What is the leaf considered in a plant?",
          optionA: "Part that grows under the ground",
          optionB: "Food factory of the plant",
          optionC: "Attached to the roots",
          correctAnswer: "Food factory of the plant",
        },
        {
          question:
            "Which part of the plant is known as the most pretty and bears fruits?",
          optionA: "Stem",
          optionB: "Leaf",
          optionC: "Flower",
          correctAnswer: "Flower",
        },
        {
          question: "What is the fruit in a plant?",
          optionA: "Part that grows under the ground",
          optionB: "Ripened part that is eatable and tasty",
          optionC: "Carries water and nutrients",
          correctAnswer: "Ripened part that is eatable and tasty",
        },
        {
          question:
            "What should we avoid doing to take care of plants according to the text?",
          optionA: "Water the plants regularly",
          optionB: "Pluck flowers or fruits unnecessarily",
          optionC: "Add manure and fertilizers",
          correctAnswer: "Pluck flowers or fruits unnecessarily",
        },
        {
          question: "What does the leaf do for the plant?",
          optionA: "Takes water and minerals from the soil",
          optionB: "Collects energy from the sun",
          optionC: "Bears fruits",
          correctAnswer: "Collects energy from the sun",
        },
        {
          question: "Which part of the plant grows under the ground?",
          optionA: "Stem",
          optionB: "Leaf",
          optionC: "Root",
          correctAnswer: "Root",
        },
        {
          question: "What is recommended to keep plants and soil healthy?",
          optionA: "Pluck flowers or fruits unnecessarily",
          optionB: "Water the plants irregularly",
          optionC: "Add manure and fertilizers",
          correctAnswer: "Add manure and fertilizers",
        },
        {
          question:
            "What is described as a beautiful part of the garden in the text?",
          optionA: "Plants",
          optionB: "Fruits",
          optionC: "Flowers",
          correctAnswer: "Flowers",
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
            "Plants are our ________ friends. They provide us with food and fresh air.",
          optionA: "Blue",
          optionB: "Green",
          optionC: "Red",
          correctAnswer: "Green",
        },
        {
          question:
            "The root is the part of the plant that grows ________ the ground. It takes water and minerals from the soil.",
          optionA: "Above",
          optionB: "Under",
          optionC: "Alongside",
          correctAnswer: "Under",
        },
        {
          question:
            "The stem is attached to the roots and carries water and nutrients to the ________ of the plant.",
          optionA: "Bottom",
          optionB: "Middle",
          optionC: "Rest",
          correctAnswer: "Rest",
        },
        {
          question:
            "The leaf is defined as the ________ factory of the plant. It collects energy from the sun and makes food for the plant.",
          optionA: "Food",
          optionB: "Energy",
          optionC: "Oxygen",
          correctAnswer: "Food",
        },
        {
          question:
            "The flower is known as the most ________ part of the plant. It bears fruits.",
          optionA: "Colorful",
          optionB: "Pretty",
          optionC: "Fragrant",
          correctAnswer: "Pretty",
        },
        {
          question:
            "The fruit is a ripened part of a plant that is ________ and tasty.",
          optionA: "Unpleasant",
          optionB: "Bitter",
          optionC: "Eatable",
          correctAnswer: "Eatable",
        },
        {
          question: "Plants make our world ________.",
          optionA: "Colorful",
          optionB: "Blue",
          optionC: "Green",
          correctAnswer: "Green",
        },
        {
          question: "We must take care of plants by watering them ________.",
          optionA: "Occasionally",
          optionB: "Regularly",
          optionC: "Rarely",
          correctAnswer: "Regularly",
        },
        {
          question: "Do not pluck flowers or fruits ________.",
          optionA: "Carefully",
          optionB: "Unnecessarily",
          optionC: "Gently",
          correctAnswer: "Unnecessarily",
        },
        {
          question:
            "To keep plants and soil healthy, it is recommended to add ________ and fertilizers.",
          optionA: "Sand",
          optionB: "Manure",
          optionC: "Stones",
          correctAnswer: "Manure",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Plants provide us with food and fresh air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The stem carries water and nutrients to the rest of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The leaf is considered the food factory of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Flowers are known as the most colorful part of the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fruits are ripened parts of a plant that are inedible.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Watering plants irregularly is recommended for their health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Plucking flowers or fruits unnecessarily is advised for plant care.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Leaves collect energy from the sun and make food for the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The root is the part of the plant that grows above the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Adding manure and fertilizers is recommended to keep plants and soil healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
