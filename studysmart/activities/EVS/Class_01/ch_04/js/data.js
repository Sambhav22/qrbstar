export const chapter = "Chapter - 4: My Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which body part helps us breathe air?",
        "optionA": "Hands",
        "optionB": "Nose",
        "optionC": "Hair",
        "correctAnswer": "Nose"
      },
      {
        "question": "Which body part protects our heart?",
        "optionA": "Chest",
        "optionB": "Legs",
        "optionC": "Teeth",
        "correctAnswer": "Chest"
      },
      {
        "question": "Which body part digests the food we eat?",
        "optionA": "Stomach",
        "optionB": "Eyes",
        "optionC": "Nose",
        "correctAnswer": "Stomach"
      },
      {
        "question": "Which body part helps us listen to sounds?",
        "optionA": "Nose",
        "optionB": "Teeth",
        "optionC": "Ears",
        "correctAnswer": "Ears"
      },
      {
        "question": "Which body part helps us watch television?",
        "optionA": "Hands",
        "optionB": "Eyes",
        "optionC": "Feet",
        "correctAnswer": "Eyes"
      },
      {
        "question": "Which habit keeps our body clean?",
        "optionA": "Not bathing",
        "optionB": "Taking a bath daily",
        "optionC": "Playing all day",
        "correctAnswer": "Taking a bath daily"
      },
      {
        "question": "Which habit keeps our teeth healthy?",
        "optionA": "Brushing teeth twice a day",
        "optionB": "Eating without brushing",
        "optionC": "Never brushing",
        "correctAnswer": "Brushing teeth twice a day"
      },
      {
        "question": "Which clothes should we wear to stay clean?",
        "optionA": "Torn clothes",
        "optionB": "Dirty clothes",
        "optionC": "Clean clothes",
        "correctAnswer": "Clean clothes"
      },
      {
        "question": "Which part of the body helps us smell flowers?",
        "optionA": "Nose",
        "optionB": "Eyes",
        "optionC": "Ears",
        "correctAnswer": "Nose"
      },
      {
        "question": "Which habit helps keep our hands clean?",
        "optionA": "Keeping nails long",
        "optionB": "Cutting nails regularly",
        "optionC": "Not washing hands",
        "correctAnswer": "Cutting nails regularly"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ______ protects our heart.",
        "optionA": "nose",
        "optionB": "chest",
        "optionC": "ears",
        "correctAnswer": "chest"
      },
      {
        "question": "The ______ digests the food we eat.",
        "optionA": "stomach",
        "optionB": "legs",
        "optionC": "hair",
        "correctAnswer": "stomach"
      },
      {
        "question": "We ______ fresh air through our nose.",
        "optionA": "clap",
        "optionB": "run",
        "optionC": "breathe",
        "correctAnswer": "breathe"
      },
      {
        "question": "We hear sounds with our ______.",
        "optionA": "teeth",
        "optionB": "eyes",
        "optionC": "ears",
        "correctAnswer": "ears"
      },
      {
        "question": "We see the world with our ______.",
        "optionA": "eyes",
        "optionB": "nose",
        "optionC": "legs",
        "correctAnswer": "eyes"
      },
      {
        "question": "We should brush our teeth ______ a day.",
        "optionA": "once a month",
        "optionB": "twice",
        "optionC": "never",
        "correctAnswer": "twice"
      },
      {
        "question": "We should take a bath ______.",
        "optionA": "never",
        "optionB": "yearly",
        "optionC": "daily",
        "correctAnswer": "daily"
      },
      {
        "question": "We should wear ______ clothes.",
        "optionA": "dirty",
        "optionB": "clean",
        "optionC": "wet",
        "correctAnswer": "clean"
      },
      {
        "question": "We should keep our nails ______.",
        "optionA": "short and clean",
        "optionB": "long and dirty",
        "optionC": "broken",
        "correctAnswer": "short and clean"
      },
      {
        "question": "Clean habits keep our body ______.",
        "optionA": "healthy",
        "optionB": "dirty",
        "optionC": "tired",
        "correctAnswer": "healthy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Our stomach helps digest food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Our chest protects the kidneys.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We breathe through our nose.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Ears help us listen to music.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Eyes help us to breathe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Taking a bath keeps our body clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Wearing clean clothes keeps us healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dirty nails are good for health.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Brushing teeth keeps them healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Clean habits help us stay healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
