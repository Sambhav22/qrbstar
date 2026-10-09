export const chapter = "Chapter - 16: The Best Player";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who played the match in the poem?",
        "optionA": "Elephants and Insects",
        "correctAnswer": "Elephants and Insects",
        "optionB": "Lions and Tigers",
        "optionC": "Birds and Fish"
      },
      {
        "question": "What did the elephants do to prepare the ground?",
        "optionA": "Cleaned it",
        "optionB": "Trampled it",
        "correctAnswer": "Trampled it",
        "optionC": "Watered it"
      },
      {
        "question": "What was the score at half-time?",
        "optionA": "10–5",
        "optionB": "5–10",
        "optionC": "15–5",
        "correctAnswer": "15–5"
      },
      {
        "question": "Who was brought in as a substitute?",
        "optionA": "Ant",
        "optionB": "Centipede",
        "correctAnswer": "Centipede",
        "optionC": "Beetle"
      },
      {
        "question": "In which half was the centipede brought in?",
        "optionA": "First half",
        "optionB": "Second half",
        "correctAnswer": "Second half",
        "optionC": "Final round"
      },
      {
        "question": "How did the centipede move during the match?",
        "optionA": "On all his legs",
        "correctAnswer": "On all his legs",
        "optionB": "On two legs",
        "optionC": "By flying"
      },
      {
        "question": "What were the elephants feeling at the end?",
        "optionA": "Happy",
        "optionB": "Angry",
        "optionC": "Mystified",
        "correctAnswer": "Mystified"
      },
      {
        "question": "What did the insects win?",
        "optionA": "Medal",
        "optionB": "Trophy box",
        "optionC": "Cup",
        "correctAnswer": "Cup"
      },
      {
        "question": "What skill did the centipede show in the match?",
        "optionA": "Jumping",
        "optionB": "Shooting",
        "correctAnswer": "Shooting",
        "optionC": "Running slowly"
      },
      {
        "question": "Why did the insects delay bringing the centipede?",
        "optionA": "He needed time to prepare his boots",
        "correctAnswer": "He needed time to prepare his boots",
        "optionB": "He was tired",
        "optionC": "He was not present"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The elephants ______ the ground in the jungle.",
        "optionA": "cleaned",
        "optionB": "trampled",
        "correctAnswer": "trampled",
        "optionC": "washed"
      },
      {
        "question": "The insects brought a ______ in the second half.",
        "optionA": "coach",
        "optionB": "referee",
        "optionC": "substitute",
        "correctAnswer": "substitute"
      },
      {
        "question": "The centipede ran on all his ______.",
        "optionA": "hands",
        "optionB": "legs",
        "correctAnswer": "legs",
        "optionC": "wings"
      },
      {
        "question": "The match took place in a ______.",
        "optionA": "jungle",
        "correctAnswer": "jungle",
        "optionB": "city",
        "optionC": "school"
      },
      {
        "question": "The elephants were ______ by the insects’ strategy.",
        "optionA": "excited",
        "optionB": "mystified",
        "correctAnswer": "mystified",
        "optionC": "bored"
      },
      {
        "question": "The insects ______ the match in the end.",
        "optionA": "lost",
        "optionB": "left",
        "optionC": "won",
        "correctAnswer": "won"
      },
      {
        "question": "The centipede needed time to ______ his boots.",
        "optionA": "clean",
        "optionB": "sort",
        "correctAnswer": "sort",
        "optionC": "throw"
      },
      {
        "question": "The insects carried off the ______.",
        "optionA": "ball",
        "optionB": "bat",
        "optionC": "cup",
        "correctAnswer": "cup"
      },
      {
        "question": "The score at half-time was ______.",
        "optionA": "15–5",
        "correctAnswer": "15–5",
        "optionB": "5–15",
        "optionC": "10–10"
      },
      {
        "question": "The centipede could ______ very well.",
        "optionA": "jump",
        "optionB": "shoot",
        "correctAnswer": "shoot",
        "optionC": "sleep"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The elephants won the match.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The insects used a smart strategy to win.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The centipede was brought in the first half.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The elephants cleared a patch to play.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The centipede had many legs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The insects lost the match.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The elephants understood the insects’ plan easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The insects brought their best player later.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The match was played in a jungle.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The centipede needed no preparation time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
