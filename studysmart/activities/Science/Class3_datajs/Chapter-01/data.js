export const chapter = "Chapter - 1: Life on Earth";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which of these is not a living thing?",
        "optionA": "Fish",
        "optionB": "Tree",
        "optionC": "Ball",
        "correctAnswer": "Ball"
      },
      {
        "question": "What do plants need to make food?",
        "optionA": "Soil only",
        "optionB": "Sunlight, water, and air",
        "correctAnswer": "Sunlight, water, and air",
        "optionC": "Insects"
      },
      {
        "question": "Which living thing can grow into a tall tree?",
        "optionA": "Stone",
        "optionB": "Seed",
        "correctAnswer": "Seed",
        "optionC": "Leaf"
      },
      {
        "question": "Which part of the body helps humans breathe?",
        "optionA": "Eyes",
        "optionB": "Legs",
        "optionC": "Lungs",
        "correctAnswer": "Lungs"
      },
      {
        "question": "A baby animal grows into:",
        "optionA": "A toy",
        "optionB": "An adult animal",
        "correctAnswer": "An adult animal",
        "optionC": "A new kind of plant"
      },
      {
        "question": "Ants are able to sense changes using:",
        "optionA": "Wings",
        "optionB": "Legs",
        "optionC": "Feelers",
        "correctAnswer": "Feelers"
      },
      {
        "question": "Which of these shows movement in animals?",
        "optionA": "Leaf turning yellow",
        "optionB": "Fish swimming",
        "correctAnswer": "Fish swimming",
        "optionC": "Flower blooming"
      },
      {
        "question": "What helps plants breathe?",
        "optionA": "Roots",
        "optionB": "Petals",
        "optionC": "Tiny holes in leaves",
        "correctAnswer": "Tiny holes in leaves"
      },
      {
        "question": "What helps us stay healthy and remove waste from our bodies?",
        "optionA": "Breathing",
        "optionB": "Excretion",
        "correctAnswer": "Excretion",
        "optionC": "Sleeping"
      },
      {
        "question": "What is reproduction in animals?",
        "optionA": "Moving from one place to another",
        "optionB": "Growing into adults",
        "optionC": "Making new animals like themselves",
        "correctAnswer": "Making new animals like themselves"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "__________ things cannot breathe or grow.",
        "optionA": "Living",
        "optionB": "Non-living",
        "correctAnswer": "Non-living",
        "optionC": "Moving"
      },
      {
        "question": "Living things need __________ to stay alive.",
        "optionA": "Games",
        "optionB": "Food",
        "correctAnswer": "Food",
        "optionC": "Clothes"
      },
      {
        "question": "Plants turn towards __________ to make their food.",
        "optionA": "Air",
        "optionB": "Light",
        "correctAnswer": "Light",
        "optionC": "Soil"
      },
      {
        "question": "Fish use their __________ to swim.",
        "optionA": "Wings",
        "optionB": "Legs",
        "optionC": "Fins",
        "correctAnswer": "Fins"
      },
      {
        "question": "__________ is the process of removing waste from the body.",
        "optionA": "Growth",
        "optionB": "Excretion",
        "correctAnswer": "Excretion",
        "optionC": "Nutrition"
      },
      {
        "question": "Animals get energy from __________.",
        "optionA": "Water",
        "optionB": "Food",
        "correctAnswer": "Food",
        "optionC": "Toys"
      },
      {
        "question": "Plants make food through the process of __________.",
        "optionA": "Breathing",
        "optionB": "Digestion",
        "optionC": "Photosynthesis",
        "correctAnswer": "Photosynthesis"
      },
      {
        "question": "__________ is the process of using oxygen to get energy from food.",
        "optionA": "Sensitivity",
        "optionB": "Respiration",
        "correctAnswer": "Respiration",
        "optionC": "Reproduction"
      },
      {
        "question": "Birds lay __________ to reproduce.",
        "optionA": "Eggs",
        "correctAnswer": "Eggs",
        "optionB": "Stones",
        "optionC": "Seeds"
      },
      {
        "question": "Tiny ants can carry things much __________ than themselves.",
        "optionA": "Lighter",
        "optionB": "Smaller",
        "optionC": "Heavier",
        "correctAnswer": "Heavier"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Non-living things can move on their own.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Photosynthesis happens only in animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Plants do not need air to survive.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "All living things grow, move, and breathe.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Humans breathe using their lungs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Insects cannot sense their surroundings.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Living things can feel pain or touch.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All animals give birth to babies.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A rock is an example of a living thing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Growth means getting smaller over time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
