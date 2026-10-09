export const chapter = "Chapter - 5: Food and Health";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which nutrient is known as a body-building food?",
        "optionA": "Carbohydrates",
        "optionB": "Proteins",
        "correctAnswer": "Proteins",
        "optionC": "Fats"
      },
      {
        "question": "Which food item is rich in carbohydrates?",
        "optionA": "Rice",
        "correctAnswer": "Rice",
        "optionB": "Butter",
        "optionC": "Nuts"
      },
      {
        "question": "Which vitamin helps in good eyesight?",
        "optionA": "Vitamin C",
        "optionB": "Vitamin A",
        "correctAnswer": "Vitamin A",
        "optionC": "Vitamin D"
      },
      {
        "question": "Which mineral helps the heart and muscles work properly?",
        "optionA": "Calcium",
        "optionB": "Iron",
        "optionC": "Potassium",
        "correctAnswer": "Potassium"
      },
      {
        "question": "Which nutrient provides more energy than carbohydrates?",
        "optionA": "Proteins",
        "optionB": "Vitamins",
        "optionC": "Fats",
        "correctAnswer": "Fats"
      },
      {
        "question": "Which of the following helps remove waste from the body?",
        "optionA": "Water",
        "correctAnswer": "Water",
        "optionB": "Roughage",
        "optionC": "Fat"
      },
      {
        "question": "Which disease is caused due to nutrient deficiency?",
        "optionA": "Malaria",
        "optionB": "Flu",
        "optionC": "Beri-beri",
        "correctAnswer": "Beri-beri"
      },
      {
        "question": "Which habit helps prevent the spread of germs?",
        "optionA": "Skipping meals",
        "optionB": "Washing hands",
        "correctAnswer": "Washing hands",
        "optionC": "Sleeping late"
      },
      {
        "question": "Which activity helps improve breathing and blood circulation?",
        "optionA": "Exercise",
        "correctAnswer": "Exercise",
        "optionB": "Rest",
        "optionC": "Eating"
      },
      {
        "question": "Which food group protects us from diseases?",
        "optionA": "Protective foods",
        "correctAnswer": "Protective foods",
        "optionB": "Energy-giving foods",
        "optionC": "Fat-rich foods"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The food we eat daily is called our ________.",
        "optionA": "meal",
        "optionB": "diet",
        "correctAnswer": "diet",
        "optionC": "nutrition"
      },
      {
        "question": "A ________ diet provides all nutrients in correct amounts.",
        "optionA": "heavy",
        "optionB": "oily",
        "optionC": "balanced",
        "correctAnswer": "balanced"
      },
      {
        "question": "Roughage is the ________ present in fruits and vegetables.",
        "optionA": "sugar",
        "optionB": "fibre",
        "correctAnswer": "fibre",
        "optionC": "fat"
      },
      {
        "question": "Vitamins and minerals are needed in ________ amounts.",
        "optionA": "large",
        "optionB": "small",
        "correctAnswer": "small",
        "optionC": "excess"
      },
      {
        "question": "________ helps keep the body temperature normal.",
        "optionA": "Water",
        "correctAnswer": "Water",
        "optionB": "Protein",
        "optionC": "Fat"
      },
      {
        "question": "Proteins help in repairing ________.",
        "optionA": "bones",
        "optionB": "tissues",
        "correctAnswer": "tissues",
        "optionC": "teeth"
      },
      {
        "question": "________ helps the body relax and regain strength.",
        "optionA": "Rest",
        "correctAnswer": "Rest",
        "optionB": "Exercise",
        "optionC": "Hygiene"
      },
      {
        "question": "Diseases that spread from one person to another are called ________ diseases.",
        "optionA": "non-communicable",
        "optionB": "communicable",
        "correctAnswer": "communicable",
        "optionC": "deficiency"
      },
      {
        "question": "Vitamin D helps build strong ________.",
        "optionA": "muscles",
        "optionB": "skin",
        "optionC": "bones",
        "correctAnswer": "bones"
      },
      {
        "question": "Keeping surroundings clean helps prevent ________.",
        "optionA": "hunger",
        "optionB": "diseases",
        "correctAnswer": "diseases",
        "optionC": "tiredness"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Carbohydrates are the main source of energy for our body.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Roughage gives energy to the body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Vitamins help protect us from diseases.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Water carries nutrients to all parts of the body.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Exercise keeps the body strong and healthy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Rest makes us feel tired and cranky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Communicable diseases do not spread from person to person.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hygiene includes bathing daily and wearing clean clothes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Fats are stored in the body and provide heat when needed.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Drinking clean water helps prevent diseases.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
