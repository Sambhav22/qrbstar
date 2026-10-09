export const chapter = "Chapter - 9: Air, Water and Weather";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps clouds move across the sky?",
        "optionA": "Sunlight",
        "optionB": "Wind",
        "correctAnswer": "Wind",
        "optionC": "Trees"
      },
      {
        "question": "What is all around us but we cannot see it?",
        "optionA": "Rain",
        "optionB": "Sun",
        "optionC": "Air",
        "correctAnswer": "Air"
      },
      {
        "question": "What protects Earth from the Sun’s heat?",
        "optionA": "Water",
        "optionB": "Mountains",
        "optionC": "Atmosphere",
        "correctAnswer": "Atmosphere"
      },
      {
        "question": "What is wind?",
        "optionA": "Water in motion",
        "optionB": "Sunlight",
        "optionC": "Moving air",
        "correctAnswer": "Moving air"
      },
      {
        "question": "What causes air pollution?",
        "optionA": "Playing in the park",
        "optionB": "Using bicycles",
        "optionC": "Burning waste",
        "correctAnswer": "Burning waste"
      },
      {
        "question": "What is water in its gas form called?",
        "optionA": "Ice",
        "optionB": "Steam",
        "correctAnswer": "Steam",
        "optionC": "Rain"
      },
      {
        "question": "What happens when steam cools down?",
        "optionA": "It becomes ice",
        "optionB": "It disappears",
        "optionC": "It becomes water",
        "correctAnswer": "It becomes water"
      },
      {
        "question": "What turns water into vapour?",
        "optionA": "Wind",
        "optionB": "Sun’s heat",
        "correctAnswer": "Sun’s heat",
        "optionC": "Moonlight"
      },
      {
        "question": "What do we call the daily change in the air and sky?",
        "optionA": "Weather",
        "correctAnswer": "Weather",
        "optionB": "Season",
        "optionC": "Pollution"
      },
      {
        "question": "What helps clothes to dry?",
        "optionA": "Rain",
        "optionB": "Ice",
        "optionC": "Wind",
        "correctAnswer": "Wind"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "______ is the moving air.",
        "optionA": "Rain",
        "optionB": "Vapour",
        "optionC": "Wind",
        "correctAnswer": "Wind"
      },
      {
        "question": "The ______ is a layer of air around the Earth.",
        "optionA": "Weather",
        "optionB": "Atmosphere",
        "correctAnswer": "Atmosphere",
        "optionC": "Pollution"
      },
      {
        "question": "______ from factories causes air pollution.",
        "optionA": "Water",
        "optionB": "Wind",
        "optionC": "Smoke",
        "correctAnswer": "Smoke"
      },
      {
        "question": "Water becomes ______ when it is heated.",
        "optionA": "Ice",
        "optionB": "Steam",
        "correctAnswer": "Steam",
        "optionC": "Snow"
      },
      {
        "question": "When water cools down, it turns into ______.",
        "optionA": "Steam",
        "optionB": "Wind",
        "optionC": "Water",
        "correctAnswer": "Water"
      },
      {
        "question": "The sun heats water in lakes, rivers, and oceans to form ______.",
        "optionA": "Ice",
        "optionB": "Vapour",
        "correctAnswer": "Vapour",
        "optionC": "Rain"
      },
      {
        "question": "Clouds become heavy and give us ______.",
        "optionA": "Snow",
        "optionB": "Air",
        "optionC": "Rain",
        "correctAnswer": "Rain"
      },
      {
        "question": "Water in the form of ice is in ______ state.",
        "optionA": "Solid",
        "correctAnswer": "Solid",
        "optionB": "Liquid",
        "optionC": "Gas"
      },
      {
        "question": "Air helps us to carry ______ and sounds.",
        "optionA": "Wind",
        "optionB": "Clouds",
        "optionC": "Smells",
        "correctAnswer": "Smells"
      },
      {
        "question": "Weather can change many times in ______.",
        "optionA": "A week",
        "optionB": "A month",
        "optionC": "A day",
        "correctAnswer": "A day"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Wind is moving air.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The atmosphere is a layer of water around Earth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Steam is the solid form of water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sun’s heat helps to start the water cycle.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Rain is part of the water cycle.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Clean air is good for our health.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Water can only exist in one form.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The weather always stays the same.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The wind helps to dry clothes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Smoke from burning waste makes air clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
