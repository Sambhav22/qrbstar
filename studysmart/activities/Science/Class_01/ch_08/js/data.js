export const chapter = "Chapter - 8: We need Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is the main source of water?",
        "optionA": "Handpump",
        "optionB": "Rain",
        "optionC": "Tap",
        "correctAnswer": "Rain"
      },
      {
        "question": "Where does rainwater go?",
        "optionA": "Only on roads",
        "optionB": "Rivers, lakes, oceans, and ground",
        "optionC": "Into the sky",
        "correctAnswer": "Rivers, lakes, oceans, and ground"
      },
      {
        "question": "What do we use water for?",
        "optionA": "Flying",
        "optionB": "Playing games",
        "optionC": "Bathing and cooking",
        "correctAnswer": "Bathing and cooking"
      },
      {
        "question": "Which of the following gives underground water?",
        "optionA": "Clouds",
        "optionB": "Well",
        "optionC": "Sun",
        "correctAnswer": "Well"
      },
      {
        "question": "What should we do with the tap while brushing?",
        "optionA": "Keep it open",
        "optionB": "Turn it off",
        "optionC": "Break it",
        "correctAnswer": "Turn it off"
      },
      {
        "question": "Where can we find water in nature?",
        "optionA": "Only in bottles",
        "optionB": "In toys",
        "optionC": "In clouds, rivers, and fruits",
        "correctAnswer": "In clouds, rivers, and fruits"
      },
      {
        "question": "Which of these helps us get water at home?",
        "optionA": "Tap",
        "optionB": "Tree",
        "optionC": "Fan",
        "correctAnswer": "Tap"
      },
      {
        "question": "Why should we drink clean water?",
        "optionA": "To waste it",
        "optionB": "To stay healthy",
        "optionC": "To feel dirty",
        "correctAnswer": "To stay healthy"
      },
      {
        "question": "What happens if we drink dirty water?",
        "optionA": "We may fall sick",
        "optionB": "We become strong",
        "optionC": "We sleep better",
        "correctAnswer": "We may fall sick"
      },
      {
        "question": "Which of these is a way to save water?",
        "optionA": "Keep tap running",
        "optionB": "Fix leaking taps",
        "optionC": "Waste it while playing",
        "correctAnswer": "Fix leaking taps"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We use water for drinking, bathing, and ___.",
        "optionA": "Flying",
        "optionB": "Cooking",
        "optionC": "Sleeping",
        "correctAnswer": "Cooking"
      },
      {
        "question": "Clean water helps us stay ___.",
        "optionA": "Healthy",
        "optionB": "Sick",
        "optionC": "Dirty",
        "correctAnswer": "Healthy"
      },
      {
        "question": "We should turn ___ the tap while brushing our teeth.",
        "optionA": "On",
        "optionB": "Off",
        "optionC": "Around",
        "correctAnswer": "Off"
      },
      {
        "question": "The main source of water is ___.",
        "optionA": "Tap",
        "optionB": "Lake",
        "optionC": "Rain",
        "correctAnswer": "Rain"
      },
      {
        "question": "Water is found in clouds, rivers, and ___.",
        "optionA": "Sand",
        "optionB": "Fruits",
        "optionC": "Rocks",
        "correctAnswer": "Fruits"
      },
      {
        "question": "We get underground water from wells and ___.",
        "optionA": "Fans",
        "optionB": "Trees",
        "optionC": "Handpumps",
        "correctAnswer": "Handpumps"
      },
      {
        "question": "Dirty water can make us ___.",
        "optionA": "Sick",
        "optionB": "Happy",
        "optionC": "Strong",
        "correctAnswer": "Sick"
      },
      {
        "question": "We use a ___ to get water at home.",
        "optionA": "Light",
        "optionB": "Tap",
        "optionC": "Chair",
        "correctAnswer": "Tap"
      },
      {
        "question": "Animals also need water to ___.",
        "optionA": "Fly",
        "optionB": "Drink",
        "optionC": "Run",
        "correctAnswer": "Drink"
      },
      {
        "question": "We should not ___ water.",
        "optionA": "Save",
        "optionB": "Waste",
        "optionC": "Clean",
        "correctAnswer": "Waste"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "We can find water in clouds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water is not found in fruits.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We can save water by fixing leaky taps.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water is used for watering plants.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We get water in our homes through taps.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should waste water while playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Taps give us rainwater directly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Water is not important for animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should wash fruits and vegetables with clean water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water is not needed for washing clothes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
