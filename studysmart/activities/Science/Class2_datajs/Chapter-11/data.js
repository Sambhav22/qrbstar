export const chapter = "Chapter - 11: The Earth and the Sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which planet do we live on?",
        "optionA": "Mars",
        "optionB": "Earth",
        "optionC": "Moon",
        "correctAnswer": "Earth"
      },
      {
        "question": "What do we see during the day in the sky?",
        "optionA": "Moon",
        "optionB": "Stars",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "Which landform is flat and good for farming?",
        "optionA": "Mountain",
        "optionB": "Valley",
        "optionC": "Plain",
        "correctAnswer": "Plain"
      },
      {
        "question": "The Moon looks bright because it –",
        "optionA": "shines itself",
        "optionB": "reflects sunlight",
        "optionC": "has fire",
        "correctAnswer": "reflects sunlight"
      },
      {
        "question": "What changes shape in the sky?",
        "optionA": "Stars",
        "optionB": "Sun",
        "optionC": "Moon",
        "correctAnswer": "Moon"
      },
      {
        "question": "Which of the following is not a landform?",
        "optionA": "Hill",
        "optionB": "Star",
        "optionC": "Mountain",
        "correctAnswer": "Star"
      },
      {
        "question": "What helps us see everything during the day?",
        "optionA": "Moon",
        "optionB": "Sun",
        "optionC": "Stars",
        "correctAnswer": "Sun"
      },
      {
        "question": "What do we drink from the Earth?",
        "optionA": "Milk",
        "optionB": "Water",
        "optionC": "Oil",
        "correctAnswer": "Water"
      },
      {
        "question": "What looks like tiny dots in the sky?",
        "optionA": "Stars",
        "optionB": "Clouds",
        "optionC": "Planes",
        "correctAnswer": "Stars"
      },
      {
        "question": "What do we call shapes made by stars?",
        "optionA": "Galaxies",
        "optionB": "Constellations",
        "optionC": "Craters",
        "correctAnswer": "Constellations"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ___ is the only planet where we can live.",
        "optionA": "Moon",
        "optionB": "Earth",
        "optionC": "Mars",
        "correctAnswer": "Earth"
      },
      {
        "question": "___ need sunlight to grow.",
        "optionA": "Toys",
        "optionB": "Plants",
        "optionC": "Animals",
        "correctAnswer": "Plants"
      },
      {
        "question": "The Moon goes around the ___.",
        "optionA": "Sun",
        "optionB": "Earth",
        "optionC": "Stars",
        "correctAnswer": "Earth"
      },
      {
        "question": "Stars appear small because they are very ___.",
        "optionA": "Near",
        "optionB": "Far",
        "optionC": "Dark",
        "correctAnswer": "Far"
      },
      {
        "question": "The Earth spins around like a ___.",
        "optionA": "Clock",
        "optionB": "Top",
        "optionC": "Fan",
        "correctAnswer": "Top"
      },
      {
        "question": "We see the Moon and stars at ___.",
        "optionA": "Day",
        "optionB": "Night",
        "optionC": "Noon",
        "correctAnswer": "Night"
      },
      {
        "question": "The Sun is very ___.",
        "optionA": "Cold",
        "optionB": "Hot",
        "optionC": "Soft",
        "correctAnswer": "Hot"
      },
      {
        "question": "The Earth takes ___ day to spin once.",
        "optionA": "One",
        "optionB": "Two",
        "optionC": "Ten",
        "correctAnswer": "One"
      },
      {
        "question": "There is no ___ on the Moon.",
        "optionA": "Rock",
        "optionB": "Dust",
        "optionC": "Air",
        "correctAnswer": "Air"
      },
      {
        "question": "The Moon looks like a big, round ___.",
        "optionA": "Plate",
        "optionB": "Ball",
        "optionC": "Stone",
        "correctAnswer": "Ball"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Stars twinkle at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Earth is flat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Moon has its own light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Constellations are made by the Moon.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We see the Sun at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "People have gone to the Moon.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "There is water on the Moon.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hills and valleys are types of landforms.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The Moon never changes its shape.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Sun helps us see during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
