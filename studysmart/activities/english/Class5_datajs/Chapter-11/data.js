export const chapter = "Chapter - 11: Wynken, Blynken and Nod";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who sailed in a wooden shoe at night?",
        "optionA": "Wynken, Blynken and Nod",
        "correctAnswer": "Wynken, Blynken and Nod",
        "optionB": "Three sailors",
        "optionC": "Fishermen"
      },
      {
        "question": "Where did the three sail?",
        "optionA": "Into a sea of dew",
        "correctAnswer": "Into a sea of dew",
        "optionB": "Into a desert",
        "optionC": "Into a forest"
      },
      {
        "question": "Who asked the three where they were going?",
        "optionA": "The stars",
        "optionB": "The wind",
        "optionC": "The old moon",
        "correctAnswer": "The old moon"
      },
      {
        "question": "What did the three wish to do in the sea?",
        "optionA": "Play games",
        "optionB": "Catch herring-fish",
        "correctAnswer": "Catch herring-fish",
        "optionC": "Swim"
      },
      {
        "question": "What kind of nets did they have?",
        "optionA": "Silver and gold nets",
        "correctAnswer": "Silver and gold nets",
        "optionB": "Iron nets",
        "optionC": "Wooden nets"
      },
      {
        "question": "What did the old moon do during their journey?",
        "optionA": "Laughed and sang a song",
        "correctAnswer": "Laughed and sang a song",
        "optionB": "Slept",
        "optionC": "Disappeared"
      },
      {
        "question": "What sped them all night long?",
        "optionA": "The stars",
        "optionB": "The wind",
        "correctAnswer": "The wind",
        "optionC": "The sea"
      },
      {
        "question": "What did the wind do to the waves?",
        "optionA": "Broke them",
        "optionB": "Ruffled them",
        "correctAnswer": "Ruffled them",
        "optionC": "Stopped them"
      },
      {
        "question": "What were the little stars compared to in the poem?",
        "optionA": "Birds",
        "optionB": "Boats",
        "optionC": "Herring-fish",
        "correctAnswer": "Herring-fish"
      },
      {
        "question": "What did the stars tell the three fishermen?",
        "optionA": "To cast their nets without fear",
        "correctAnswer": "To cast their nets without fear",
        "optionB": "To stop fishing",
        "optionC": "To return home"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Wynken, Blynken and Nod sailed in a ______ shoe.",
        "optionA": "wooden",
        "correctAnswer": "wooden",
        "optionB": "metal",
        "optionC": "plastic"
      },
      {
        "question": "They sailed on a river of ______ light.",
        "optionA": "golden",
        "optionB": "crystal",
        "correctAnswer": "crystal",
        "optionC": "dim"
      },
      {
        "question": "They went into a sea of ______.",
        "optionA": "water",
        "optionB": "sand",
        "optionC": "dew",
        "correctAnswer": "dew"
      },
      {
        "question": "The old moon laughed and sang a ______.",
        "optionA": "story",
        "optionB": "song",
        "correctAnswer": "song",
        "optionC": "poem"
      },
      {
        "question": "The wind sped them all ______ long.",
        "optionA": "day",
        "optionB": "evening",
        "optionC": "night",
        "correctAnswer": "night"
      },
      {
        "question": "The wind ______ the waves of dew.",
        "optionA": "ruffled",
        "correctAnswer": "ruffled",
        "optionB": "cleaned",
        "optionC": "dried"
      },
      {
        "question": "The little ______ were the herring-fish.",
        "optionA": "clouds",
        "optionB": "stars",
        "correctAnswer": "stars",
        "optionC": "birds"
      },
      {
        "question": "The sea was described as ______.",
        "optionA": "beautiful",
        "correctAnswer": "beautiful",
        "optionB": "dirty",
        "optionC": "rough"
      },
      {
        "question": "The stars told them to cast their ______.",
        "optionA": "ropes",
        "optionB": "nets",
        "correctAnswer": "nets",
        "optionC": "hands"
      },
      {
        "question": "The three were called ______.",
        "optionA": "kings",
        "optionB": "sailors",
        "optionC": "fishermen three",
        "correctAnswer": "fishermen three"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Wynken, Blynken and Nod sailed during the night.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "They sailed in a wooden shoe.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The old moon ignored them.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The wind helped them move forward.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The waves were calm and still.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The stars were described as herring-fish.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The three were afraid to fish.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The moon sang a song.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The sea was described as a sea of dew.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The stars stopped them from fishing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
