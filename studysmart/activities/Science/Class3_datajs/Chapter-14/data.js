export const chapter = "Chapter - 14: The solar system";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we see in the sky at night?",
        "optionA": "Sun",
        "optionB": "Moon and stars",
        "correctAnswer": "Moon and stars",
        "optionC": "Rain"
      },
      {
        "question": "What hides the Moon and stars during the day?",
        "optionA": "Clouds",
        "optionB": "Earth",
        "optionC": "Bright sunlight",
        "correctAnswer": "Bright sunlight"
      },
      {
        "question": "What gives us heat and light?",
        "optionA": "Moon",
        "optionB": "Fire",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "Which planet do we live on?",
        "optionA": "Mars",
        "optionB": "Earth",
        "correctAnswer": "Earth",
        "optionC": "Venus"
      },
      {
        "question": "Which of the following is a star?",
        "optionA": "Earth",
        "optionB": "Moon",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "Which planet is closest to the Sun?",
        "optionA": "Venus",
        "optionB": "Earth",
        "optionC": "Mercury",
        "correctAnswer": "Mercury"
      },
      {
        "question": "Which planet is now called a dwarf planet?",
        "optionA": "Mars",
        "optionB": "Pluto",
        "correctAnswer": "Pluto",
        "optionC": "Neptune"
      },
      {
        "question": "What causes day and night?",
        "optionA": "Sunlight",
        "optionB": "Moonlight",
        "optionC": "Rotation of the Earth",
        "correctAnswer": "Rotation of the Earth"
      },
      {
        "question": "What is the Moon made of?",
        "optionA": "Gas",
        "optionB": "Glass",
        "optionC": "Rock",
        "correctAnswer": "Rock"
      },
      {
        "question": "Who uses telescopes to study the sky?",
        "optionA": "Teachers",
        "optionB": "Engineers",
        "optionC": "Astronomers",
        "correctAnswer": "Astronomers"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The __________ and stars become visible at night.",
        "optionA": "Clouds",
        "optionB": "Moon",
        "correctAnswer": "Moon",
        "optionC": "Trees"
      },
      {
        "question": "The __________ gives us light and heat.",
        "optionA": "Moon",
        "optionB": "Earth",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "Earth is the __________ planet from the Sun.",
        "optionA": "First",
        "optionB": "Second",
        "optionC": "Third",
        "correctAnswer": "Third"
      },
      {
        "question": "The Sun is a ball of hot glowing __________.",
        "optionA": "Water",
        "optionB": "Stones",
        "optionC": "Gases",
        "correctAnswer": "Gases"
      },
      {
        "question": "Planets move around the Sun in paths called __________.",
        "optionA": "Circles",
        "optionB": "Orbits",
        "correctAnswer": "Orbits",
        "optionC": "Rings"
      },
      {
        "question": "The Moon changes its __________ every night.",
        "optionA": "Colour",
        "optionB": "Size",
        "optionC": "Shape",
        "correctAnswer": "Shape"
      },
      {
        "question": "The spinning of Earth on its axis is called __________.",
        "optionA": "Revolution",
        "optionB": "Rotation",
        "correctAnswer": "Rotation",
        "optionC": "Movement"
      },
      {
        "question": "The Earth moves around the Sun in a path called __________.",
        "optionA": "Rotation",
        "optionB": "Circle",
        "optionC": "Revolution",
        "correctAnswer": "Revolution"
      },
      {
        "question": "The study of stars and space is called __________.",
        "optionA": "Biology",
        "optionB": "Chemistry",
        "optionC": "Astronomy",
        "correctAnswer": "Astronomy"
      },
      {
        "question": "The Moon does not have its own __________.",
        "optionA": "Water",
        "optionB": "Light",
        "correctAnswer": "Light",
        "optionC": "Heat"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "We can see the Moon and stars during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Earth is the center of the solar system.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Moon reflects sunlight.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Pluto is a dwarf planet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Stars are balls of hot glowing gases.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The Sun is closer to Earth than other stars.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All planets are the same size and shape.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rotation of Earth causes seasons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Earth moves from west to east.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Astronomers study the Moon, planets, and stars.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
