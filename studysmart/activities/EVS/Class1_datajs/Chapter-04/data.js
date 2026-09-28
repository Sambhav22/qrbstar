export const chapter = "Chapter - 4: My Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which body part helps us breathe air?",
        "options": {
          "A": "Hands",
          "B": "Nose",
          "C": "Hair"
        },
        "answer": "B"
      },
      {
        "question": "Which body part protects our heart?",
        "options": {
          "A": "Chest",
          "B": "Legs",
          "C": "Teeth"
        },
        "answer": "A"
      },
      {
        "question": "Which body part digests the food we eat?",
        "options": {
          "A": "Stomach",
          "B": "Eyes",
          "C": "Nose"
        },
        "answer": "A"
      },
      {
        "question": "Which body part helps us listen to sounds?",
        "options": {
          "A": "Nose",
          "B": "Teeth",
          "C": "Ears"
        },
        "answer": "C"
      },
      {
        "question": "Which body part helps us watch television?",
        "options": {
          "A": "Hands",
          "B": "Eyes",
          "C": "Feet"
        },
        "answer": "B"
      },
      {
        "question": "Which habit keeps our body clean?",
        "options": {
          "A": "Not bathing",
          "B": "Taking a bath daily",
          "C": "Playing all day"
        },
        "answer": "B"
      },
      {
        "question": "Which habit keeps our teeth healthy?",
        "options": {
          "A": "Brushing teeth twice a day",
          "B": "Eating without brushing",
          "C": "Never brushing"
        },
        "answer": "A"
      },
      {
        "question": "Which clothes should we wear to stay clean?",
        "options": {
          "A": "Torn clothes",
          "B": "Dirty clothes",
          "C": "Clean clothes"
        },
        "answer": "C"
      },
      {
        "question": "Which part of the body helps us smell flowers?",
        "options": {
          "A": "Nose",
          "B": "Eyes",
          "C": "Ears"
        },
        "answer": "A"
      },
      {
        "question": "Which habit helps keep our hands clean?",
        "options": {
          "A": "Keeping nails long",
          "B": "Cutting nails regularly",
          "C": "Not washing hands"
        },
        "answer": "B"
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
        "options": {
          "A": "nose",
          "B": "chest",
          "C": "ears"
        },
        "answer": "B"
      },
      {
        "question": "The ______ digests the food we eat.",
        "options": {
          "A": "stomach",
          "B": "legs",
          "C": "hair"
        },
        "answer": "A"
      },
      {
        "question": "We ______ fresh air through our nose.",
        "options": {
          "A": "clap",
          "B": "run",
          "C": "breathe"
        },
        "answer": "C"
      },
      {
        "question": "We hear sounds with our ______.",
        "options": {
          "A": "teeth",
          "B": "eyes",
          "C": "ears"
        },
        "answer": "C"
      },
      {
        "question": "We see the world with our ______.",
        "options": {
          "A": "eyes",
          "B": "nose",
          "C": "legs"
        },
        "answer": "A"
      },
      {
        "question": "We should brush our teeth ______ a day.",
        "options": {
          "A": "once a month",
          "B": "twice",
          "C": "never"
        },
        "answer": "B"
      },
      {
        "question": "We should take a bath ______.",
        "options": {
          "A": "never",
          "B": "yearly",
          "C": "daily"
        },
        "answer": "C"
      },
      {
        "question": "We should wear ______ clothes.",
        "options": {
          "A": "dirty",
          "B": "clean",
          "C": "wet"
        },
        "answer": "B"
      },
      {
        "question": "We should keep our nails ______.",
        "options": {
          "A": "short and clean",
          "B": "long and dirty",
          "C": "broken"
        },
        "answer": "A"
      },
      {
        "question": "Clean habits keep our body ______.",
        "options": {
          "A": "healthy",
          "B": "dirty",
          "C": "tired"
        },
        "answer": "A"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Our chest protects the kidneys.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "We breathe through our nose.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Ears help us listen to music.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Eyes help us to breathe.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Taking a bath keeps our body clean.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Wearing clean clothes keeps us healthy.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Dirty nails are good for health.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Brushing teeth keeps them healthy.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Clean habits help us stay healthy.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
