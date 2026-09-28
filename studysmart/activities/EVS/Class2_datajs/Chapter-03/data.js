export const chapter = "Chapter - 3: We Need Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which food helps our body grow and make muscles strong?",
        "optionA": "Milk",
        "optionB": "Chips",
        "optionC": "Ice cream",
        "correctAnswer": "Milk"
      },
      {
        "question": "Which of these foods gives us energy to run and play?",
        "optionA": "Spinach",
        "optionB": "Tomato",
        "optionC": "Bread",
        "correctAnswer": "Bread"
      },
      {
        "question": "Which food keeps our eyes, skin and hair healthy?",
        "optionA": "Butter",
        "optionB": "Sugar",
        "optionC": "Fruits and vegetables",
        "correctAnswer": "Fruits and vegetables"
      },
      {
        "question": "Which food is rich in proteins and helps repair our body?",
        "optionA": "Eggs",
        "optionB": "Banana",
        "optionC": "Apple",
        "correctAnswer": "Eggs"
      },
      {
        "question": "Which of these foods is an energy-giving food?",
        "optionA": "Carrot",
        "optionB": "Potato",
        "optionC": "Orange",
        "correctAnswer": "Potato"
      },
      {
        "question": "Which of the following is a protective food?",
        "optionA": "Bread",
        "optionB": "Spinach",
        "optionC": "Rice",
        "correctAnswer": "Spinach"
      },
      {
        "question": "Which of these foods is usually eaten without cooking?",
        "optionA": "Roti",
        "optionB": "Dal",
        "optionC": "Cucumber",
        "correctAnswer": "Cucumber"
      },
      {
        "question": "Which food must be cooked to make it soft and tasty?",
        "optionA": "Rice",
        "optionB": "Apple",
        "optionC": "Banana",
        "correctAnswer": "Rice"
      },
      {
        "question": "Which of these foods helps our body build strong muscles?",
        "optionA": "Paneer",
        "optionB": "Sugar",
        "optionC": "Butter",
        "correctAnswer": "Paneer"
      },
      {
        "question": "Which food helps our body stay healthy and free from diseases?",
        "optionA": "Chips",
        "optionB": "Fruits and vegetables",
        "optionC": "Candy",
        "correctAnswer": "Fruits and vegetables"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Body-building foods help us build strong ______.",
        "optionA": "muscles",
        "optionB": "hair",
        "optionC": "teeth",
        "correctAnswer": "muscles"
      },
      {
        "question": "Fruits and vegetables contain ______ that protect us from diseases.",
        "optionA": "fats",
        "optionB": "sugar",
        "optionC": "vitamins",
        "correctAnswer": "vitamins"
      },
      {
        "question": "Energy-giving foods help us ______, play and work.",
        "optionA": "cry",
        "optionB": "sleep",
        "optionC": "run",
        "correctAnswer": "run"
      },
      {
        "question": "Some foods need to be ______ to become soft and tasty.",
        "optionA": "cooked",
        "optionB": "painted",
        "optionC": "frozen",
        "correctAnswer": "cooked"
      },
      {
        "question": "Our body needs ______ to digest food and keep cool.",
        "optionA": "water",
        "optionB": "oil",
        "optionC": "salt",
        "correctAnswer": "water"
      },
      {
        "question": "Rice and bread give us ______ to do our daily activities.",
        "optionA": "sleep",
        "optionB": "energy",
        "optionC": "pain",
        "correctAnswer": "energy"
      },
      {
        "question": "Eating different kinds of food in the right amount is called a ______ diet.",
        "optionA": "oily",
        "optionB": "sweet",
        "optionC": "balanced",
        "correctAnswer": "balanced"
      },
      {
        "question": "We should chew our food ______ before swallowing.",
        "optionA": "quickly",
        "optionB": "slowly",
        "optionC": "loudly",
        "correctAnswer": "slowly"
      },
      {
        "question": "Fruits and vegetables keep our body ______.",
        "optionA": "sick",
        "optionB": "healthy",
        "optionC": "weak",
        "correctAnswer": "healthy"
      },
      {
        "question": "Washing hands before eating protects us from ______.",
        "optionA": "germs",
        "optionB": "sweets",
        "optionC": "fruits",
        "correctAnswer": "germs"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Milk and eggs help build strong muscles in our body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rice and bread give us energy to run and play.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fruits and vegetables help protect us from diseases.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cucumber and carrot are usually eaten raw.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rice is always eaten without cooking.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Water helps our body digest food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Eating a variety of foods keeps our body healthy and strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should waste food if we do not like it.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Washing hands before meals is a good food habit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Talking while eating is a good food habit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
