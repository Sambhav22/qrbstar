export const chapter = "Chapter - 2: Parts of a Plant";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are the main parts of a plant?",
          optionA: "Leaves, stems, roots",
          optionB: "Fruits, flowers, seeds",
          optionC: "Roots, stems, leaves, flowers, fruits, seeds",
          correctAnswer: "C",
        },
        {
          question:
            "Which part of a plant is responsible for absorbing water and minerals from the soil?",
          optionA: "Leaves",
          optionB: "Stem",
          optionC: "Roots",
          correctAnswer: "C",
        },
        {
          question: "What is the function of the stem in a plant?",
          optionA:
            "It supports the branches and bears leaves, flowers, and fruits.",
          optionB: "It absorbs water and minerals from the soil.",
          optionC: "It is the reproductive part of the plant.",
          correctAnswer: "A",
        },
        {
          question:
            "Which type of root system do plants like wheat, rice, and onion have?",
          optionA: "Taproot",
          optionB: "Fibrous root",
          optionC: "Both taproot and fibrous root",
          correctAnswer: "B",
        },
        {
          question: "What is the main function of leaves in a plant?",
          optionA: "To absorb water and minerals",
          optionB: "To support branches",
          optionC: "To make food for the plant",
          correctAnswer: "C",
        },
        {
          question:
            "Which part of a plant is considered the reproductive part?",
          optionA: "Leaves",
          optionB: "Flowers",
          optionC: "Fruits",
          correctAnswer: "B",
        },
        {
          question: "What is the primary purpose of a fruit in a plant?",
          optionA: "To store water",
          optionB: "To protect the seeds",
          optionC: "To make food for the plant",
          correctAnswer: "B",
        },
        {
          question: "Where is the main vein of a leaf located?",
          optionA: "On the edge of the leaf",
          optionB: "In the center of the leaf",
          optionC: "Spread evenly across the leaf surface",
          correctAnswer: "B",
        },
        {
          question:
            "Which part of the plant stores food in examples like potato, ginger, and sugarcane?",
          optionA: "Leaves",
          optionB: "Stem",
          optionC: "Roots",
          correctAnswer: "B",
        },
        {
          question: "What is the primary purpose of seeds in a plant?",
          optionA: "To provide support to the plant",
          optionB: "To store water",
          optionC: "To grow into a new plant",
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
            "The ____________ of a plant include roots, stems, leaves, flowers, fruits, and seeds.",
          optionA: "Organs",
          optionB: "Systems",
          optionC: "Structures",
          correctAnswer: "Systems",
        },
        {
          question:
            "__________ roots consist of many thin, branched, and bushy roots growing near the surface of the soil.",
          optionA: "Taproot",
          optionB: "Fibrous",
          optionC: "Adventitious",
          correctAnswer: "Fibrous",
        },
        {
          question:
            "The shoot system comprises stems, branches, leaves, flowers, and ____________.",
          optionA: "Roots",
          optionB: "Seeds",
          optionC: "Fruits",
          correctAnswer: "Fruits",
        },
        {
          question:
            "The primary function of leaves is to make food for the plant through the process of ____________.",
          optionA: "Photosynthesis",
          optionB: "Transpiration",
          optionC: "Respiration",
          correctAnswer: "Photosynthesis",
        },
        {
          question:
            "Flowers serve as the ____________ part of a plant, involved in reproduction.",
          optionA: "Nutritional",
          optionB: "Respiratory",
          optionC: "Reproductive",
          correctAnswer: "Reproductive",
        },
        {
          question:
            "Fruits have the main function of protecting ____________ and often store food material.",
          optionA: "Roots",
          optionB: "Leaves",
          optionC: "Seeds",
          correctAnswer: "Seeds",
        },
        {
          question:
            "The stem supports branches, carries water and minerals from the roots, and transports food made by the ____________.",
          optionA: "Flowers",
          optionB: "Fruits",
          optionC: "Leaves",
          correctAnswer: "Leaves",
        },
        {
          question:
            "__________ is the broad and flat surface of a leaf, and the center of the leaf is called the midrib.",
          optionA: "Leaflet",
          optionB: "Lamina",
          optionC: "Vein",
          correctAnswer: "Lamina",
        },
        {
          question:
            "Seeds contain a baby plant and stored ____________ for its initial growth.",
          optionA: "Nutrients",
          optionB: "Water",
          optionC: "Oxygen",
          correctAnswer: "Nutrients",
        },
        {
          question:
            "The shoot system grows ____________ the ground and includes stems, branches, leaves, flowers, and fruits.",
          optionA: "Above",
          optionB: "Below",
          optionC: "At",
          correctAnswer: "Above",
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
            "Plants have six main parts: roots, stem, leaves, flowers, fruits, and seeds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Taproot is a type of root system found in plants like wheat, rice, and onion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Leaves are the reproductive part of a plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fruits mainly serve the purpose of protecting seeds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Stems of some plants like potato, ginger, and sugarcane store food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Flowers give out oxygen which is important for all living beings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Seeds contain a baby plant and stored nutrients for its initial growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The shoot system of a plant includes roots, stem, and leaves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fibrous roots grow under the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Leaves make food for the plant through the process of transpiration.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
