export const chapter = "Chapter - 1: The Green Life";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What help leaves to make food?",
        "optionA": "Water",
        "optionB": "Roots",
        "optionC": "Chlorophyll",
        "correctAnswer": "Chlorophyll"
      },
      {
        "question": "What do plants give us?",
        "optionA": "Toys",
        "optionB": "Food and air",
        "optionC": "Clothes",
        "correctAnswer": "Food and air"
      },
      {
        "question": "Which one is a big plant?",
        "optionA": "Mint",
        "optionB": "Mango tree",
        "optionC": "Rose",
        "correctAnswer": "Mango tree"
      },
      {
        "question": "Which is a shrub?",
        "optionA": "Rose",
        "optionB": "Pumpkin",
        "optionC": "Money plant",
        "correctAnswer": "Rose"
      },
      {
        "question": "What part of a plant carries water and food?",
        "optionA": "Flower",
        "optionB": "Stem",
        "optionC": "Root",
        "correctAnswer": "Stem"
      },
      {
        "question": "What helps the plant grow new seeds?",
        "optionA": "Stem",
        "optionB": "Fruit",
        "optionC": "Flower",
        "correctAnswer": "Flower"
      },
      {
        "question": "What do plants need to grow?",
        "optionA": "Water and sunlight",
        "optionB": "Food from shops",
        "optionC": "Light and music",
        "correctAnswer": "Water and sunlight"
      },
      {
        "question": "Where do plants grow?",
        "optionA": "In houses",
        "optionB": "In books",
        "optionC": "In soil",
        "correctAnswer": "In soil"
      },
      {
        "question": "What holds the plant in the soil?",
        "optionA": "Stem",
        "optionB": "Roots",
        "optionC": "Leaves",
        "correctAnswer": "Roots"
      },
      {
        "question": "Which of these is a creeper?",
        "optionA": "Grapevine",
        "optionB": "Mint",
        "optionC": "Watermelon",
        "correctAnswer": "Watermelon"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Plants grow in the ___.",
        "optionA": "Air",
        "optionB": "Soil",
        "optionC": "Water",
        "correctAnswer": "Soil"
      },
      {
        "question": "Plants need sunlight and ___ to make food.",
        "optionA": "Milk",
        "optionB": "Juice",
        "optionC": "Water",
        "correctAnswer": "Water"
      },
      {
        "question": "A mango plant is a type of ___.",
        "optionA": "Herb",
        "optionB": "Shrub",
        "optionC": "Tree",
        "correctAnswer": "Tree"
      },
      {
        "question": "___ are small plants with soft stems.",
        "optionA": "Herbs",
        "optionB": "Trees",
        "optionC": "Climbers",
        "correctAnswer": "Herbs"
      },
      {
        "question": "A money plant is a ___.",
        "optionA": "Tree",
        "optionB": "Shrub",
        "optionC": "Climber",
        "correctAnswer": "Climber"
      },
      {
        "question": "The ___ holds the plant in the soil.",
        "optionA": "Root",
        "optionB": "Flower",
        "optionC": "Leaf",
        "correctAnswer": "Root"
      },
      {
        "question": "The ___ makes food for the plant.",
        "optionA": "Fruit",
        "optionB": "Root",
        "optionC": "Leaf",
        "correctAnswer": "Leaf"
      },
      {
        "question": "Grapevine and money plant are examples of ___.",
        "optionA": "Shrubs",
        "optionB": "Climbers",
        "optionC": "Creepers",
        "correctAnswer": "Climbers"
      },
      {
        "question": "___ and ___ are examples of creepers.",
        "optionA": "Watermelon and pumpkin",
        "optionB": "Rose and hibiscus",
        "optionC": "Mint and coriander",
        "correctAnswer": "Watermelon and pumpkin"
      },
      {
        "question": "___ climb on walls or sticks to grow.",
        "optionA": "Shrubs",
        "optionB": "Climbers",
        "optionC": "Creepers",
        "correctAnswer": "Climbers"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Leaves are green because they have chlorophyll.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants grow on the moon.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Trees are small plants with soft stems.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Plants give us food and air.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Herbs are big plants with hard trunks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Roots hold the plant in the soil.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Creepers climb on walls to grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Climbers need support to grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rose and hibiscus are trees.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Flowers help the plant grow new seeds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
