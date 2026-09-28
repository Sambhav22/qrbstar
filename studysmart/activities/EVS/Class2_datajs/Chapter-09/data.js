export const chapter = "Chapter - 9: Being Healthy";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps our body grow strong and ready for daily activities?",
        "optionA": "Eating healthy food",
        "optionB": "Sitting quietly",
        "optionC": "Drinking soda",
        "correctAnswer": "Eating healthy food"
      },
      {
        "question": "Which activity is mentioned as a joyful way to keep fit?",
        "optionA": "Sitting quietly",
        "optionB": "Watching TV",
        "optionC": "Running and jumping",
        "correctAnswer": "Running and jumping"
      },
      {
        "question": "Which activity teaches teamwork and fair play?",
        "optionA": "Reading",
        "optionB": "Sleeping",
        "optionC": "Playing sports",
        "correctAnswer": "Playing sports"
      },
      {
        "question": "What keeps our bones and muscles strong?",
        "optionA": "Exercise",
        "optionB": "Watching television",
        "optionC": "Sleeping all day",
        "correctAnswer": "Exercise"
      },
      {
        "question": "Which activity keeps us happy and energetic according to the chapter?",
        "optionA": "Dancing",
        "optionB": "Sitting quietly",
        "optionC": "Watching cartoons",
        "correctAnswer": "Dancing"
      },
      {
        "question": "What should we drink to keep our body cool?",
        "optionA": "Cold drinks",
        "optionB": "Soda",
        "optionC": "Clean water",
        "correctAnswer": "Clean water"
      },
      {
        "question": "What should we eat more often according to good food habits?",
        "optionA": "Junk food",
        "optionB": "Home-cooked meals",
        "optionC": "Candy",
        "correctAnswer": "Home-cooked meals"
      },
      {
        "question": "What should we keep straight while sitting and reading?",
        "optionA": "Hands",
        "optionB": "Back and neck",
        "optionC": "Feet",
        "correctAnswer": "Back and neck"
      },
      {
        "question": "Which habit helps us stay fit and cheerful?",
        "optionA": "Good food habits",
        "optionB": "Skipping meals",
        "optionC": "Eating junk food daily",
        "correctAnswer": "Good food habits"
      },
      {
        "question": "What helps our body get ready for a new day?",
        "optionA": "Sleeping well",
        "optionB": "Playing games all night",
        "optionC": "Watching TV late",
        "correctAnswer": "Sleeping well"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Eating fruits and vegetables gives us ______.",
        "optionA": "sickness",
        "optionB": "energy",
        "optionC": "laziness",
        "correctAnswer": "energy"
      },
      {
        "question": "Exercise makes our bones and ______ strong.",
        "optionA": "hair",
        "optionB": "muscles",
        "optionC": "teeth",
        "correctAnswer": "muscles"
      },
      {
        "question": "Running and jumping make our ______ stronger.",
        "optionA": "ears",
        "optionB": "eyes",
        "optionC": "legs",
        "correctAnswer": "legs"
      },
      {
        "question": "Playing sports teaches us ______.",
        "optionA": "sleeping",
        "optionB": "teamwork",
        "optionC": "shouting",
        "correctAnswer": "teamwork"
      },
      {
        "question": "Drinking ______ water helps keep our body cool.",
        "optionA": "salty",
        "optionB": "dirty",
        "optionC": "clean",
        "correctAnswer": "clean"
      },
      {
        "question": "Sitting, standing and walking the right way is called ______.",
        "optionA": "jumping",
        "optionB": "exercise",
        "optionC": "posture",
        "correctAnswer": "posture"
      },
      {
        "question": "Children need about ______ hours of sleep each night.",
        "optionA": "1–2",
        "optionB": "9–10",
        "optionC": "3–4",
        "correctAnswer": "9–10"
      },
      {
        "question": "Chewing food well is a good food ______.",
        "optionA": "habit",
        "optionB": "game",
        "optionC": "exercise",
        "correctAnswer": "habit"
      },
      {
        "question": "Exercise brings a sparkle to our ______.",
        "optionA": "mind",
        "optionB": "hair",
        "optionC": "clothes",
        "correctAnswer": "mind"
      },
      {
        "question": "Sleeping helps our body ______ and grow.",
        "optionA": "break",
        "optionB": "repair",
        "optionC": "shrink",
        "correctAnswer": "repair"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Eating healthy food helps keep us sick.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Running and jumping help make our legs stronger.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Playing sports can teach teamwork and patience.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should drink water from dirty or unknown sources.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Good posture helps keep our body straight and strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dancing is a kind of exercise.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Sleeping helps our body repair and get ready for a new day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Exercise keeps our heart happy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Junk food should be eaten more than home-cooked food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sleeping well helps us remember things and feel happy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
