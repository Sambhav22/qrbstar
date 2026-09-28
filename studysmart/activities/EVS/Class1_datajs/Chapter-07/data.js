export const chapter = "Chapter - 7: Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we drink every day to stay healthy?",
        "optionA": "Milk",
        "optionB": "Water",
        "optionC": "Oil",
        "correctAnswer": "Water"
      },
      {
        "question": "Which living thing needs water to grow?",
        "optionA": "Plants",
        "optionB": "Toys",
        "optionC": "Books",
        "correctAnswer": "Plants"
      },
      {
        "question": "Which of these is a source of water?",
        "optionA": "Pencil",
        "optionB": "Table",
        "optionC": "River",
        "correctAnswer": "River"
      },
      {
        "question": "What helps us keep our body clean?",
        "optionA": "Dust",
        "optionB": "Water",
        "optionC": "Ink",
        "correctAnswer": "Water"
      },
      {
        "question": "Where do we get water in our homes?",
        "optionA": "Window",
        "optionB": "Tap",
        "optionC": "Door",
        "correctAnswer": "Tap"
      },
      {
        "question": "What should we drink to stay healthy?",
        "optionA": "Mud water",
        "optionB": "Dirty water",
        "optionC": "Pure water",
        "correctAnswer": "Pure water"
      },
      {
        "question": "What may make us sick if we drink it?",
        "optionA": "Impure water",
        "optionB": "Clean water",
        "optionC": "Boiled water",
        "correctAnswer": "Impure water"
      },
      {
        "question": "Which of these helps cook food?",
        "optionA": "Water",
        "optionB": "Sand",
        "optionC": "Paper",
        "correctAnswer": "Water"
      },
      {
        "question": "What should we do after using water from a tap?",
        "optionA": "Leave it open",
        "optionB": "Close the tap",
        "optionC": "Break the tap",
        "correctAnswer": "Close the tap"
      },
      {
        "question": "Who needs water to live?",
        "optionA": "Only plants",
        "optionB": "Only animals",
        "optionC": "All living things",
        "correctAnswer": "All living things"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We drink ______ every day.",
        "optionA": "juice",
        "optionB": "water",
        "optionC": "oil",
        "correctAnswer": "water"
      },
      {
        "question": "______ is the main source of water.",
        "optionA": "Paper",
        "optionB": "Stone",
        "optionC": "Rain",
        "correctAnswer": "Rain"
      },
      {
        "question": "We use water for ______ food.",
        "optionA": "cooking",
        "optionB": "cutting",
        "optionC": "drawing",
        "correctAnswer": "cooking"
      },
      {
        "question": "Plants need water to ______.",
        "optionA": "grow",
        "optionB": "jump",
        "optionC": "sleep",
        "correctAnswer": "grow"
      },
      {
        "question": "Dirty water is called ______ water.",
        "optionA": "pure",
        "optionB": "impure",
        "optionC": "sweet",
        "correctAnswer": "impure"
      },
      {
        "question": "We wash our ______ with water.",
        "optionA": "pencils",
        "optionB": "books",
        "optionC": "clothes",
        "correctAnswer": "clothes"
      },
      {
        "question": "Boiling or filtering water makes it ______ for drinking.",
        "optionA": "salty",
        "optionB": "dirty",
        "optionC": "safe",
        "correctAnswer": "safe"
      },
      {
        "question": "We should ______ the tap when not in use.",
        "optionA": "close",
        "optionB": "break",
        "optionC": "paint",
        "correctAnswer": "close"
      },
      {
        "question": "Water helps us stay ______ and clean.",
        "optionA": "tired",
        "optionB": "healthy",
        "optionC": "angry",
        "correctAnswer": "healthy"
      },
      {
        "question": "We should ______ water and not waste it.",
        "optionA": "save",
        "optionB": "throw",
        "optionC": "waste",
        "correctAnswer": "save"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Plants need water to grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Pure water is safe to drink.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Impure water may have germs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should waste water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Water helps us wash clothes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rain is a source of water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Only people need water to live.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should close the tap after using water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Boiling water can make it safe to drink.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water is useful for cooking food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
