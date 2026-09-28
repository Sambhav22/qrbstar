export const chapter = "Chapter - 13: In the Sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which planet is closest to the Sun?",
        "optionA": "Venus",
        "optionB": "Mercury",
        "optionC": "Earth",
        "correctAnswer": "Mercury"
      },
      {
        "question": "Which planet is called the Red Planet?",
        "optionA": "Jupiter",
        "optionB": "Saturn",
        "optionC": "Mars",
        "correctAnswer": "Mars"
      },
      {
        "question": "Which planet is known as the brightest planet called the “Morning Star”?",
        "optionA": "Neptune",
        "optionB": "Venus",
        "optionC": "Uranus",
        "correctAnswer": "Venus"
      },
      {
        "question": "Which planet has beautiful rings around it?",
        "optionA": "Earth",
        "optionB": "Saturn",
        "optionC": "Mars",
        "correctAnswer": "Saturn"
      },
      {
        "question": "Which planet is the biggest in the solar system?",
        "optionA": "Jupiter",
        "optionB": "Mercury",
        "optionC": "Venus",
        "correctAnswer": "Jupiter"
      },
      {
        "question": "Which planet looks blue-green and spins sideways?",
        "optionA": "Mars",
        "optionB": "Earth",
        "optionC": "Uranus",
        "correctAnswer": "Uranus"
      },
      {
        "question": "Which planet is the farthest from the Sun?",
        "optionA": "Neptune",
        "optionB": "Jupiter",
        "optionC": "Venus",
        "correctAnswer": "Neptune"
      },
      {
        "question": "Which phase of the Moon looks like a thin curved banana?",
        "optionA": "Full Moon",
        "optionB": "New Moon",
        "optionC": "Crescent Moon",
        "correctAnswer": "Crescent Moon"
      },
      {
        "question": "Which Moon phase looks big and round like a glowing ball?",
        "optionA": "Crescent Moon",
        "optionB": "Full Moon",
        "optionC": "New Moon",
        "correctAnswer": "Full Moon"
      },
      {
        "question": "Which constellation looks like a cooking pan?",
        "optionA": "Big Dipper",
        "optionB": "Orion",
        "optionC": "Scorpio",
        "correctAnswer": "Big Dipper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Sun helps plants ______.",
        "optionA": "grow",
        "optionB": "sleep",
        "optionC": "move",
        "correctAnswer": "grow"
      },
      {
        "question": "Stars shine ______ above us.",
        "optionA": "low",
        "optionB": "near",
        "optionC": "high",
        "correctAnswer": "high"
      },
      {
        "question": "The Moon moves around the Earth in about ______ days.",
        "optionA": "20",
        "optionB": "29",
        "optionC": "10",
        "correctAnswer": "29"
      },
      {
        "question": "Planets move around the ______.",
        "optionA": "Moon",
        "optionB": "Sun",
        "optionC": "Earth",
        "correctAnswer": "Sun"
      },
      {
        "question": "Jupiter is the ______ planet in the solar system.",
        "optionA": "smallest",
        "optionB": "biggest",
        "optionC": "coldest",
        "correctAnswer": "biggest"
      },
      {
        "question": "Saturn has beautiful ______.",
        "optionA": "rings",
        "optionB": "lights",
        "optionC": "clouds",
        "correctAnswer": "rings"
      },
      {
        "question": "Uranus looks ______ in colour.",
        "optionA": "red",
        "optionB": "blue-green",
        "optionC": "yellow",
        "correctAnswer": "blue-green"
      },
      {
        "question": "Neptune is the ______ planet from the Sun.",
        "optionA": "closest",
        "optionB": "middle",
        "optionC": "farthest",
        "correctAnswer": "farthest"
      },
      {
        "question": "The Moon shines because it reflects the light of the ______.",
        "optionA": "Sun",
        "optionB": "stars",
        "optionC": "Earth",
        "correctAnswer": "Sun"
      },
      {
        "question": "Shapes made by stars are called ______.",
        "optionA": "shadows",
        "optionB": "constellations",
        "optionC": "clouds",
        "correctAnswer": "constellations"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Mercury is very hot because it is closest to the Sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Venus is called the Morning Star.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Jupiter is the smallest planet in the solar system.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Saturn has beautiful rings around it.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Moon reflects the light of the Sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Uranus spins sideways.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Mars looks blue in colour.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Neptune is the closest planet to the Sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Constellations are patterns made by stars in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Stars are huge balls of burning gases.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
