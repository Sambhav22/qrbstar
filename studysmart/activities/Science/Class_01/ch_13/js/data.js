export const chapter = "Chapter - 13: In the Sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps us know if it is day or night?",
        "optionA": "Rivers",
        "optionB": "Trees",
        "optionC": "The sky",
        "correctAnswer": "The sky"
      },
      {
        "question": "What is the Sun described as in the chapter?",
        "optionA": "A ball of fire",
        "optionB": "A bright lamp",
        "optionC": "A glowing star near Earth",
        "correctAnswer": "A ball of fire"
      },
      {
        "question": "What moves across the sky and changes shapes?",
        "optionA": "Birds",
        "optionB": "Clouds",
        "optionC": "Planes",
        "correctAnswer": "Clouds"
      },
      {
        "question": "What do we see twinkling far away in the night sky?",
        "optionA": "Stars",
        "optionB": "Clouds",
        "optionC": "Moonlight",
        "correctAnswer": "Stars"
      },
      {
        "question": "What does the Sun help plants do?",
        "optionA": "Sleep",
        "optionB": "Grow",
        "optionC": "Fly",
        "correctAnswer": "Grow"
      },
      {
        "question": "What colour is the Moon described as in the chapter?",
        "optionA": "Blue",
        "optionB": "White",
        "optionC": "Red",
        "correctAnswer": "White"
      },
      {
        "question": "What do grey clouds sometimes bring?",
        "optionA": "Wind",
        "optionB": "Snow",
        "optionC": "Rain",
        "correctAnswer": "Rain"
      },
      {
        "question": "What happens to the sky when the Sun goes down?",
        "optionA": "It becomes dark",
        "optionB": "It becomes green",
        "optionC": "It becomes yellow",
        "correctAnswer": "It becomes dark"
      },
      {
        "question": "What do some stars form when they make shapes in the sky?",
        "optionA": "Shadows",
        "optionB": "Clouds",
        "optionC": "Constellations",
        "correctAnswer": "Constellations"
      },
      {
        "question": "What can we learn by watching the sky?",
        "optionA": "Nature",
        "optionB": "Driving",
        "optionC": "Cooking",
        "correctAnswer": "Nature"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Sun rises in the ______.",
        "optionA": "morning",
        "optionB": "night",
        "optionC": "evening",
        "correctAnswer": "morning"
      },
      {
        "question": "The Sun sets in the ______.",
        "optionA": "evening",
        "optionB": "morning",
        "optionC": "noon",
        "correctAnswer": "evening"
      },
      {
        "question": "The sky looks ______ during the day.",
        "optionA": "red",
        "optionB": "blue",
        "optionC": "brown",
        "correctAnswer": "blue"
      },
      {
        "question": "Clouds are made of tiny drops of ______.",
        "optionA": "sand",
        "optionB": "water",
        "optionC": "soil",
        "correctAnswer": "water"
      },
      {
        "question": "Stars are very ______ from us.",
        "optionA": "large",
        "optionB": "near",
        "optionC": "far away",
        "correctAnswer": "far away"
      },
      {
        "question": "The Moon reflects the light of the ______.",
        "optionA": "clouds",
        "optionB": "stars",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "The Moon changes its ______ every night.",
        "optionA": "colour",
        "optionB": "shape",
        "optionC": "size",
        "correctAnswer": "shape"
      },
      {
        "question": "The sky becomes ______ when the Sun goes down.",
        "optionA": "dark",
        "optionB": "bright",
        "optionC": "white",
        "correctAnswer": "dark"
      },
      {
        "question": "The Sun gives us light and ______.",
        "optionA": "wind",
        "optionB": "rain",
        "optionC": "warmth",
        "correctAnswer": "warmth"
      },
      {
        "question": "Some clouds turn ______ and bring rain.",
        "optionA": "green",
        "optionB": "grey",
        "optionC": "blue",
        "correctAnswer": "grey"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The sky can change colours during the day and night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Sun keeps us warm.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Clouds stay in one shape all the time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Moon reflects the light of the Sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Stars are tiny twinkling lights far away.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The sky always looks the same.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Sun helps plants grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Some stars make shapes called constellations.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The night sky becomes dark after the Sun sets.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Clouds are made of drops of water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
