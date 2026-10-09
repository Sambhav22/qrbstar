export const chapter = "Chapter - 2: Plants around us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which part of the plant grows below the ground?",
        "optionA": "Stem",
        "optionB": "Flower",
        "optionC": "Root",
        "correctAnswer": "Root"
      },
      {
        "question": "What helps plants to grow tall?",
        "optionA": "Roots",
        "optionB": "Stem",
        "correctAnswer": "Stem",
        "optionC": "Leaves"
      },
      {
        "question": "Which plant grows in cold and windy places?",
        "optionA": "Cactus",
        "optionB": "Pine",
        "correctAnswer": "Pine",
        "optionC": "Water lily"
      },
      {
        "question": "What kind of root does grass have?",
        "optionA": "Tap root",
        "optionB": "Fibrous root",
        "correctAnswer": "Fibrous root",
        "optionC": "Aerial root"
      },
      {
        "question": "Which plant part holds the plant steady in the soil?",
        "optionA": "Leaf",
        "optionB": "Fruit",
        "optionC": "Root",
        "correctAnswer": "Root"
      },
      {
        "question": "What do forest plants love the most?",
        "optionA": "Snow",
        "optionB": "Rain and sunlight",
        "correctAnswer": "Rain and sunlight",
        "optionC": "Dry air"
      },
      {
        "question": "Which plant lives fully underwater?",
        "optionA": "Floating plant",
        "optionB": "Submerged plant",
        "correctAnswer": "Submerged plant",
        "optionC": "Fixed plant"
      },
      {
        "question": "Which of these is a land plant?",
        "optionA": "Lotus",
        "optionB": "Grass",
        "correctAnswer": "Grass",
        "optionC": "Duckweed"
      },
      {
        "question": "What is made from a flower?",
        "optionA": "Stem",
        "optionB": "Leaf",
        "optionC": "Fruit",
        "correctAnswer": "Fruit"
      },
      {
        "question": "What type of stem do trees have?",
        "optionA": "Soft and green",
        "optionB": "Hard and brown",
        "correctAnswer": "Hard and brown",
        "optionC": "Yellow and thin"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Submerged plants live __________.",
        "optionA": "On land",
        "optionB": "On trees",
        "optionC": "Underwater",
        "correctAnswer": "Underwater"
      },
      {
        "question": "__________ and __________ are examples of forest trees.",
        "optionA": "Sal, Teak",
        "correctAnswer": "Sal, Teak",
        "optionB": "Mango, Pine",
        "optionC": "Bamboo, Lotus"
      },
      {
        "question": "Plants grow in places where they feel __________.",
        "optionA": "Tired",
        "optionB": "Comfortable",
        "correctAnswer": "Comfortable",
        "optionC": "Cold"
      },
      {
        "question": "Water lilies are __________ plants.",
        "optionA": "Floating",
        "optionB": "Fixed",
        "correctAnswer": "Fixed",
        "optionC": "Desert"
      },
      {
        "question": "__________ roots go deep into the soil.",
        "optionA": "Tap",
        "correctAnswer": "Tap",
        "optionB": "Fibrous",
        "optionC": "Aerial"
      },
      {
        "question": "Plants take water and minerals through their __________.",
        "optionA": "Leaves",
        "optionB": "Stems",
        "optionC": "Roots",
        "correctAnswer": "Roots"
      },
      {
        "question": "The __________ carries food and water to all parts of the plant.",
        "optionA": "Leaf",
        "optionB": "Stem",
        "correctAnswer": "Stem",
        "optionC": "Flower"
      },
      {
        "question": "__________ plants float freely on water.",
        "optionA": "Desert",
        "optionB": "Floating",
        "correctAnswer": "Floating",
        "optionC": "Forest"
      },
      {
        "question": "Fruits contain __________.",
        "optionA": "Roots",
        "optionB": "Seeds",
        "correctAnswer": "Seeds",
        "optionC": "Stems"
      },
      {
        "question": "Desert plants have __________ to protect themselves.",
        "optionA": "Flowers",
        "optionB": "Thorns",
        "correctAnswer": "Thorns",
        "optionC": "Fruits"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Roots help the plant to stand straight.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All plants grow only in forests.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Aquatic plants grow in sand.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fibrous roots are thick and grow deep.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Submerged plants come out of water to bloom.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Leaves make food for the plant.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Pine trees are found in deserts.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The stem helps to carry water to the roots.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cactus stores water in its leaves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Forest plants grow close together.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
