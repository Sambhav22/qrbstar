export const chapter = "Chapter - 3: PARTS OF A PLANT";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the function of roots in a plant?",
          optionA: "Produce flowers",
          optionB: "Anchor the plant in the soil and absorb water and minerals",
          optionC: "Make food for the plant",
          correctAnswer:
            "B) Anchor the plant in the soil and absorb water and minerals",
        },
        {
          question:
            "Which part of the plant carries water and minerals to all its parts?",
          optionA: "Leaf",
          optionB: "Stem",
          optionC: "Fruit",
          correctAnswer: "B) Stem",
        },
        {
          question: "What is the main function of leaves in a plant?",
          optionA: "Anchor the plant",
          optionB: "Carry water and minerals",
          optionC: "Make food for the plant",
          correctAnswer: "C) Make food for the plant",
        },
        {
          question:
            "Which of the following is a type of leaf mentioned in the text?",
          optionA: "Rose leaf",
          optionB: "Croton leaf",
          optionC: "Banana leaf",
          correctAnswer: "B) Croton leaf",
        },
        {
          question: "What is the primary purpose of flowers in a plant?",
          optionA: "Absorb sunlight",
          optionB: "Make food",
          optionC: "Reproduction and seed formation",
          correctAnswer: "C) Reproduction and seed formation",
        },
        {
          question:
            "Which part of the plant develops from flowers and contains seeds?",
          optionA: "Leaf",
          optionB: "Fruit",
          optionC: "Stem",
          correctAnswer: "B) Fruit",
        },
        {
          question: "What is the common color of leaves mentioned in the text?",
          optionA: "Red",
          optionB: "Blue",
          optionC: "Green",
          correctAnswer: "C) Green",
        },
        {
          question: "What do most flowers bear or grow into?",
          optionA: "Leaves",
          optionB: "Fruits",
          optionC: "Seeds",
          correctAnswer: "C) Seeds",
        },
        {
          question: "From where do most plants grow?",
          optionA: "Stems",
          optionB: "Fruits",
          optionC: "Seeds",
          correctAnswer: "C) Seeds",
        },
        {
          question:
            "What conditions are needed for seeds to start growing into plants?",
          optionA: "Water, air, and sunlight in proper amount",
          optionB: "Soil and minerals",
          optionC: "Flowers and leaves",
          correctAnswer: "A) Water, air, and sunlight in proper amount",
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
            "Roots grow under the ___________. They anchor the plant in the soil.",
          optionA: "Leaves",
          optionB: "Water",
          optionC: "Soil",
          correctAnswer: "c) Soil",
        },
        {
          question:
            "The ________ is the part of a plant that bears branches, leaves, flowers, and fruits.",
          optionA: "Stem",
          optionB: "Leaf",
          optionC: "Flower",
          correctAnswer: "a) Stem",
        },
        {
          question:
            "Leaves are the part of the plant that makes _________ for it.",
          optionA: "Water",
          optionB: "Food",
          optionC: "Flowers",
          correctAnswer: "b) Food",
        },
        {
          question:
            "Flowers are the most beautiful and colourful part of a plant. Most of the flowers are sweet-smelling. They bear seeds or grow into _________.",
          optionA: "Leaves",
          optionB: "Fruits",
          optionC: "Stems",
          correctAnswer: "b) Fruits",
        },
        {
          question:
            "Fruits are the fleshy parts of a plant. They develop from ___________.",
          optionA: "Flowers",
          optionB: "Leaves",
          optionC: "Stems",
          correctAnswer: "a) Flowers",
        },
        {
          question:
            "Most plants grow from ________. A seed has a baby plant inside it.",
          optionA: "Soil",
          optionB: "Leaves",
          optionC: "Seeds",
          correctAnswer: "c) Seeds",
        },
        {
          question:
            "Seeds are sowed in _________. As soon as they get water, air, and sunlight in proper amount, they start growing into plants.",
          optionA: "Water",
          optionB: "Air",
          optionC: "Soil",
          correctAnswer: "c) Soil",
        },
        {
          question:
            "Plants grow from seeds. A seed has a baby plant inside it. Seeds are sowed in soil. As soon as they get water, air, and sunlight in proper amount, they start growing into ___________.",
          optionA: "Flowers",
          optionB: "Fruits",
          optionC: "Plants",
          correctAnswer: "c) Plants",
        },
        {
          question:
            "Flowers are the most beautiful and colourful part of a plant. Most of the flowers are sweet-smelling. They bear seeds or grow into __________.",
          optionA: "Water",
          optionB: "Leaves",
          optionC: "Fruits",
          correctAnswer: "c) Fruits",
        },
        {
          question:
            "Leaves are the part of the plant that makes food for it. They are generally green in colour. Some plants have coloured leaves also, such as maple leaf, croton leaf, and caladium leaf.",
          optionA: "Green",
          optionB: "Red",
          optionC: "Blue",
          correctAnswer: "a) Green",
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
            "Plants have different parts with distinct names and functions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Roots anchor the plant in the soil and absorb water and minerals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Leaves are primarily responsible for making food for the plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Flowers are a crucial part of a plant responsible for reproduction and seed formation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Fruits contain seeds and develop from flowers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Most plants grow from stems.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Seeds are sowed in water to start growing into plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A seed has a baby plant inside it, and seeds are sowed in soil.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Most flowers are not sweet-smelling.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Leaves are always green, and there are no plants with colored leaves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
