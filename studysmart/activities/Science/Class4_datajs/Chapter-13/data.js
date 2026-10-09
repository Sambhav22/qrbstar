export const chapter = "Chapter - 13: The Universe";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What holds the solar system together?",
        "optionA": "Wind",
        "optionB": "Gravity",
        "correctAnswer": "Gravity",
        "optionC": "Rotation"
      },
      {
        "question": "What are stars made of?",
        "optionA": "Rocks and ice",
        "optionB": "Gases like hydrogen and helium",
        "correctAnswer": "Gases like hydrogen and helium",
        "optionC": "Soil and metal"
      },
      {
        "question": "Which object reflects sunlight and changes shape every day?",
        "optionA": "Sun",
        "optionB": "Moon",
        "correctAnswer": "Moon",
        "optionC": "Earth"
      },
      {
        "question": "Which of these is a human-made object orbiting Earth?",
        "optionA": "Comet",
        "optionB": "Satellite",
        "optionC": "Artificial Satellite",
        "correctAnswer": "Artificial Satellite"
      },
      {
        "question": "What causes day and night?",
        "optionA": "Earth’s revolution",
        "optionB": "Sun’s heat",
        "optionC": "Earth’s rotation",
        "correctAnswer": "Earth’s rotation"
      },
      {
        "question": "Which of the following is a group of stars that form a shape in the sky?",
        "optionA": "Galaxy",
        "optionB": "Solar system",
        "optionC": "Constellation",
        "correctAnswer": "Constellation"
      },
      {
        "question": "What causes the change in seasons?",
        "optionA": "Rotation of Earth",
        "optionB": "Moon’s movement",
        "optionC": "Revolution of Earth",
        "correctAnswer": "Revolution of Earth"
      },
      {
        "question": "What is the Earth known for?",
        "optionA": "Its craters",
        "optionB": "Its rings",
        "optionC": "Water, air, and land",
        "correctAnswer": "Water, air, and land"
      },
      {
        "question": "Planets get light from the —",
        "optionA": "Moon",
        "optionB": "Earth",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "How many days does the Earth take to complete one revolution?",
        "optionA": "365¼",
        "correctAnswer": "365¼",
        "optionB": "30",
        "optionC": "7"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ______ is the natural satellite of the Earth.",
        "optionA": "Sun",
        "optionB": "Moon",
        "correctAnswer": "Moon",
        "optionC": "Mars"
      },
      {
        "question": "The Earth’s rotation causes ______ and night.",
        "optionA": "Summer",
        "optionB": "Light",
        "optionC": "Day",
        "correctAnswer": "Day"
      },
      {
        "question": "A ______ is a group of stars that form a shape in the sky.",
        "optionA": "Planet",
        "optionB": "Constellation",
        "correctAnswer": "Constellation",
        "optionC": "Orbit"
      },
      {
        "question": "______ are huge balls of hot gases.",
        "optionA": "Planets",
        "optionB": "Moons",
        "optionC": "Stars",
        "correctAnswer": "Stars"
      },
      {
        "question": "The Earth takes 365¼ days to complete one ______ around the Sun.",
        "optionA": "Rotation",
        "optionB": "Orbit",
        "optionC": "Revolution",
        "correctAnswer": "Revolution"
      },
      {
        "question": "______ satellites are used for communication and weather forecasting.",
        "optionA": "Natural",
        "optionB": "Moon",
        "optionC": "Artificial",
        "correctAnswer": "Artificial"
      },
      {
        "question": "The Sun gives off ______ and heat.",
        "optionA": "Sound",
        "optionB": "Water",
        "optionC": "Light",
        "correctAnswer": "Light"
      },
      {
        "question": "Planets do not have light of their ______.",
        "optionA": "Own",
        "correctAnswer": "Own",
        "optionB": "Stars",
        "optionC": "Moons"
      },
      {
        "question": "The gravitational pull of the Moon causes ______.",
        "optionA": "Wind",
        "optionB": "Rain",
        "optionC": "Tides",
        "correctAnswer": "Tides"
      },
      {
        "question": "The planet ______ is our home and supports life.",
        "optionA": "Mars",
        "optionB": "Earth",
        "correctAnswer": "Earth",
        "optionC": "Jupiter"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The Sun is a star.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Stars are made up of soil and water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Moon shines with its own light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Earth is suitable for life because it has water, air, and land.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Artificial satellites are found naturally in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Moon causes tides on Earth.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The revolution of the Earth causes day and night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Constellations are groups of stars that form imaginary shapes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Rotation of the Earth takes one year.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Planets move around the Sun in fixed orbits.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
