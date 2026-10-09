export const chapter = "Chapter - 12: Soil Erosion and Conversation";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What causes soil to move from one place to another?",
        "optionA": "Lightning",
        "optionB": "Earthquake",
        "optionC": "Wind and water",
        "correctAnswer": "Wind and water"
      },
      {
        "question": "What is the process of protecting soil called?",
        "optionA": "Soil erosion",
        "optionB": "Soil conservation",
        "correctAnswer": "Soil conservation",
        "optionC": "Soil pollution"
      },
      {
        "question": "Which of the following is formed from the breaking of rocks?",
        "optionA": "Paper",
        "optionB": "Soil",
        "correctAnswer": "Soil",
        "optionC": "Plastic"
      },
      {
        "question": "What makes soil rich and helps plants grow?",
        "optionA": "Mud",
        "optionB": "Humus",
        "correctAnswer": "Humus",
        "optionC": "Salt"
      },
      {
        "question": "Which particle is not part of soil?",
        "optionA": "Sand",
        "optionB": "Clay",
        "optionC": "Metal",
        "correctAnswer": "Metal"
      },
      {
        "question": "Which type of erosion is common in dry and sandy areas?",
        "optionA": "Water erosion",
        "optionB": "Wind erosion",
        "correctAnswer": "Wind erosion",
        "optionC": "Ice erosion"
      },
      {
        "question": "What is a major cause of water erosion?",
        "optionA": "Strong wind",
        "optionB": "Heavy rainfall",
        "correctAnswer": "Heavy rainfall",
        "optionC": "Sunlight"
      },
      {
        "question": "Which method is used to save soil on slopes?",
        "optionA": "Terrace farming",
        "correctAnswer": "Terrace farming",
        "optionB": "Ploughing",
        "optionC": "Burning"
      },
      {
        "question": "What holds soil tightly and prevents erosion?",
        "optionA": "Animals",
        "optionB": "Tree roots",
        "correctAnswer": "Tree roots",
        "optionC": "Rocks"
      },
      {
        "question": "What is afforestation?",
        "optionA": "Cutting trees",
        "optionB": "Planting trees",
        "correctAnswer": "Planting trees",
        "optionC": "Burning trees"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "______ helps in holding the soil in place and prevents erosion.",
        "optionA": "Wind",
        "optionB": "Trees",
        "correctAnswer": "Trees",
        "optionC": "Water"
      },
      {
        "question": "Soil is formed from the breaking down of ______.",
        "optionA": "Metal",
        "optionB": "Rocks",
        "correctAnswer": "Rocks",
        "optionC": "Cement"
      },
      {
        "question": "Water erosion usually occurs on ______.",
        "optionA": "Flat land",
        "optionB": "Slopes",
        "correctAnswer": "Slopes",
        "optionC": "Forests"
      },
      {
        "question": "Humus is made from dead ______.",
        "optionA": "Plants and animals",
        "correctAnswer": "Plants and animals",
        "optionB": "Insects and rocks",
        "optionC": "Soil and water"
      },
      {
        "question": "In terrace farming, farmers cut ______ on hills.",
        "optionA": "Holes",
        "optionB": "Steps",
        "correctAnswer": "Steps",
        "optionC": "Roads"
      },
      {
        "question": "Dams are built to stop water from flowing too ______.",
        "optionA": "Slowly",
        "optionB": "Fast",
        "correctAnswer": "Fast",
        "optionC": "High"
      },
      {
        "question": "______ is caused by wind blowing away loose soil.",
        "optionA": "Water erosion",
        "optionB": "Wind erosion",
        "correctAnswer": "Wind erosion",
        "optionC": "Air pollution"
      },
      {
        "question": "Soil is important for growing ______.",
        "optionA": "Trees",
        "optionB": "Animals",
        "optionC": "Food",
        "correctAnswer": "Food"
      },
      {
        "question": "______ helps improve the quality of soil by adding nutrients.",
        "optionA": "Plastic",
        "optionB": "Humus",
        "correctAnswer": "Humus",
        "optionC": "Sand"
      },
      {
        "question": "Lack of plants and trees leads to ______ erosion.",
        "optionA": "Less",
        "optionB": "More",
        "correctAnswer": "More",
        "optionC": "No"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Soil erosion helps in the growth of plants.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Afforestation helps in soil conservation.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Humus makes the soil less fertile.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Soil takes only a few days to form.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Wind erosion mostly happens in areas full of trees.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Terrace farming increases soil erosion.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Soil is useful only for building houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Dams help in preventing water erosion.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Roots of trees help in holding the soil.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Soil erosion can affect food availability.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
