export const chapter = "Chapter - 10: In the sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do you see when you look up?",
        "optionA": "Floor",
        "optionB": "Sky",
        "optionC": "River",
        "correctAnswer": "Sky"
      },
      {
        "question": "What do we see in the sky at night?",
        "optionA": "Sun",
        "optionB": "Clouds",
        "optionC": "Stars and Moon",
        "correctAnswer": "Stars and Moon"
      },
      {
        "question": "What is the Earth like?",
        "optionA": "Flat",
        "optionB": "Round",
        "optionC": "Square",
        "correctAnswer": "Round"
      },
      {
        "question": "What gives us heat and light?",
        "optionA": "Stars",
        "optionB": "Moon",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "What helps plants grow?",
        "optionA": "Moon",
        "optionB": "Sun",
        "optionC": "Stars",
        "correctAnswer": "Sun"
      },
      {
        "question": "What flies in the sky?",
        "optionA": "Dogs",
        "optionB": "Birds",
        "optionC": "Fish",
        "correctAnswer": "Birds"
      },
      {
        "question": "Where does the Sun rise?",
        "optionA": "West",
        "optionB": "South",
        "optionC": "East",
        "correctAnswer": "East"
      },
      {
        "question": "What do we see twinkling at night?",
        "optionA": "Stars",
        "optionB": "Birds",
        "optionC": "Clouds",
        "correctAnswer": "Stars"
      },
      {
        "question": "What changes its shape every night?",
        "optionA": "Cloud",
        "optionB": "Moon",
        "optionC": "Star",
        "correctAnswer": "Moon"
      },
      {
        "question": "What causes day and night?",
        "optionA": "Sun rising",
        "optionB": "Moon shining",
        "optionC": "Spinning of the Earth",
        "correctAnswer": "Spinning of the Earth"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Moon is ___ and bright.",
        "optionA": "Big",
        "optionB": "Round",
        "optionC": "Small",
        "correctAnswer": "Round"
      },
      {
        "question": "___ float in the sky.",
        "optionA": "Stars",
        "optionB": "Clouds",
        "optionC": "Trees",
        "correctAnswer": "Clouds"
      },
      {
        "question": "The Earth moves around the ___.",
        "optionA": "Moon",
        "optionB": "Sky",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "We must not look directly at the ___.",
        "optionA": "Moon",
        "optionB": "Sun",
        "optionC": "Earth",
        "correctAnswer": "Sun"
      },
      {
        "question": "___ fly high up in the sky.",
        "optionA": "Buses",
        "optionB": "Planes",
        "optionC": "Cars",
        "correctAnswer": "Planes"
      },
      {
        "question": "The ___ does not have its own light.",
        "optionA": "Star",
        "optionB": "Moon",
        "optionC": "Sun",
        "correctAnswer": "Moon"
      },
      {
        "question": "___ is when the Sun is up.",
        "optionA": "Night",
        "optionB": "Day",
        "optionC": "Cloudy",
        "correctAnswer": "Day"
      },
      {
        "question": "At night, it is ___ and we sleep.",
        "optionA": "Bright",
        "optionB": "Noisy",
        "optionC": "Dark",
        "correctAnswer": "Dark"
      },
      {
        "question": "The sky is like a big ___ over us.",
        "optionA": "Balloon",
        "optionB": "Blanket",
        "optionC": "Roof",
        "correctAnswer": "Blanket"
      },
      {
        "question": "Some stars make ___ in the sky.",
        "optionA": "Clouds",
        "optionB": "Lines",
        "optionC": "Shapes",
        "correctAnswer": "Shapes"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The Moon gives us light from the Sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Earth is square in shape.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Sun rises in the west.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Stars twinkle in the sky at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The sky is below the Earth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Planes and birds fly in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We sleep during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clouds float in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Moon stays the same shape every night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The spinning of the Earth causes day and night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
