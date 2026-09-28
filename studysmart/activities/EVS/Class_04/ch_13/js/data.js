export const chapter = "Chapter - 13: The Sky Above Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What makes the sky look blue during the day?",
        "optionA": "Moon",
        "optionB": "Sunlight",
        "optionC": "Stars",
        "correctAnswer": "Sunlight"
      },
      {
        "question": "What do we see shining in the sky at night?",
        "optionA": "Moon and stars",
        "optionB": "Sun",
        "optionC": "Rainbow",
        "correctAnswer": "Moon and stars"
      },
      {
        "question": "What does the Sun give us every day?",
        "optionA": "Wind",
        "optionB": "Heat and light",
        "optionC": "Rain",
        "correctAnswer": "Heat and light"
      },
      {
        "question": "When are shadows the shortest?",
        "optionA": "Morning",
        "optionB": "Noon",
        "optionC": "Evening",
        "correctAnswer": "Noon"
      },
      {
        "question": "What happens when clouds cover the Sun?",
        "optionA": "Sky looks grey",
        "optionB": "Sky looks green",
        "optionC": "Sky disappears",
        "correctAnswer": "Sky looks grey"
      },
      {
        "question": "What do we use to make shadows indoors?",
        "optionA": "Fan",
        "optionB": "Book",
        "optionC": "Torch or lamp",
        "correctAnswer": "Torch or lamp"
      },
      {
        "question": "What is the Moon called when it is fully round?",
        "optionA": "Full Moon",
        "optionB": "New Moon",
        "optionC": "Half Moon",
        "correctAnswer": "Full Moon"
      },
      {
        "question": "What happens to the Moon after the Full Moon?",
        "optionA": "It grows bigger",
        "optionB": "It starts shrinking",
        "optionC": "It disappears forever",
        "correctAnswer": "It starts shrinking"
      },
      {
        "question": "What do we call the changing shapes of the Moon?",
        "optionA": "Colours",
        "optionB": "Lights",
        "optionC": "Phases",
        "correctAnswer": "Phases"
      },
      {
        "question": "What is seen flying in the sky?",
        "optionA": "Fish",
        "optionB": "Birds",
        "optionC": "Stones",
        "correctAnswer": "Birds"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Sun rises in the _______.",
        "optionA": "west",
        "optionB": "east",
        "optionC": "north",
        "correctAnswer": "east"
      },
      {
        "question": "The sky looks _______ at night.",
        "optionA": "dark",
        "optionB": "bright",
        "optionC": "green",
        "correctAnswer": "dark"
      },
      {
        "question": "Shadows are _______ in the morning.",
        "optionA": "short",
        "optionB": "long",
        "optionC": "round",
        "correctAnswer": "long"
      },
      {
        "question": "Shadows fall on the _______ side of light.",
        "optionA": "same",
        "optionB": "front",
        "optionC": "opposite",
        "correctAnswer": "opposite"
      },
      {
        "question": "The Moon reflects the _______ light.",
        "optionA": "star’s",
        "optionB": "Sun’s",
        "optionC": "lamp’s",
        "correctAnswer": "Sun’s"
      },
      {
        "question": "A _______ is a clock that uses shadows.",
        "optionA": "calendar",
        "optionB": "watch",
        "optionC": "sundial",
        "correctAnswer": "sundial"
      },
      {
        "question": "The Moon helps decide the _______ of festivals.",
        "optionA": "colours",
        "optionB": "dates",
        "optionC": "shapes",
        "correctAnswer": "dates"
      },
      {
        "question": "A small curved shape of the Moon is called _______.",
        "optionA": "crescent",
        "optionB": "circle",
        "optionC": "square",
        "correctAnswer": "crescent"
      },
      {
        "question": "The Sun helps _______ wet clothes.",
        "optionA": "wash",
        "optionB": "dry",
        "optionC": "cut",
        "correctAnswer": "dry"
      },
      {
        "question": "The sky is very _______.",
        "optionA": "small",
        "optionB": "big",
        "optionC": "narrow",
        "correctAnswer": "big"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The sky changes its look during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Sun gives us heat and light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Shadows are formed when light is blocked.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Moon has its own light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sundials were used in olden times.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Moon changes its shape every night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Full Moon is completely round.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "New Moon can be clearly seen in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clouds can make the sky look grey.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Sun rises in the west.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
