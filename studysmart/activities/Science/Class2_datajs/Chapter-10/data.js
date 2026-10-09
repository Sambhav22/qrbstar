export const chapter = "Chapter - 10: Seasons";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we call the change in weather throughout the year?",
        "optionA": "Day and night",
        "optionB": "Seasons",
        "optionC": "Months",
        "correctAnswer": "Seasons"
      },
      {
        "question": "Which of these tells us about the weather today?",
        "optionA": "Calendar",
        "optionB": "Temperature",
        "optionC": "Weather",
        "correctAnswer": "Weather"
      },
      {
        "question": "What kind of clothes do we wear in winter?",
        "optionA": "Cotton clothes",
        "optionB": "Woollen clothes",
        "optionC": "Raincoats",
        "correctAnswer": "Woollen clothes"
      },
      {
        "question": "Which season is known for falling leaves?",
        "optionA": "Summer",
        "optionB": "Autumn",
        "optionC": "Rainy",
        "correctAnswer": "Autumn"
      },
      {
        "question": "What helps us keep cool in summer?",
        "optionA": "Jackets",
        "optionB": "Fans",
        "optionC": "Umbrellas",
        "correctAnswer": "Fans"
      },
      {
        "question": "When do we see puddles?",
        "optionA": "Summer",
        "optionB": "Winter",
        "optionC": "Rainy season",
        "correctAnswer": "Rainy season"
      },
      {
        "question": "In which season do we like to stay inside and play games?",
        "optionA": "Summer",
        "optionB": "Winter",
        "optionC": "Autumn",
        "correctAnswer": "Winter"
      },
      {
        "question": "What kind of food do we enjoy in summer?",
        "optionA": "Hot soup",
        "optionB": "Ice-cream",
        "optionC": "Hot milk",
        "correctAnswer": "Ice-cream"
      },
      {
        "question": "Which of these is NOT a season?",
        "optionA": "Spring",
        "optionB": "Autumn",
        "optionC": "Morning",
        "correctAnswer": "Morning"
      },
      {
        "question": "What is included in weather?",
        "optionA": "Homework",
        "optionB": "Wind",
        "optionC": "Time",
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
        "question": "The cycle of weather is divided into ___.",
        "optionA": "Two parts",
        "optionB": "Three parts",
        "optionC": "Four parts",
        "correctAnswer": "Four parts"
      },
      {
        "question": "___ is the season when the sun shines brightly.",
        "optionA": "Rainy",
        "optionB": "Summer",
        "optionC": "Autumn",
        "correctAnswer": "Summer"
      },
      {
        "question": "In winter, we drink ___.",
        "optionA": "Cold water",
        "optionB": "Hot milk",
        "optionC": "Lemon juice",
        "correctAnswer": "Hot milk"
      },
      {
        "question": "We use ___ during the rainy season.",
        "optionA": "Sunglasses",
        "optionB": "Raincoats",
        "optionC": "Fans",
        "correctAnswer": "Raincoats"
      },
      {
        "question": "Leaves fall off trees during the ___ season.",
        "optionA": "Autumn",
        "optionB": "Summer",
        "optionC": "Winter",
        "correctAnswer": "Autumn"
      },
      {
        "question": "Weather tells us if it is ___.",
        "optionA": "Morning or night",
        "optionB": "Hot or cold",
        "optionC": "Clean or dirty",
        "correctAnswer": "Hot or cold"
      },
      {
        "question": "We see ___ during rainfall.",
        "optionA": "Snow",
        "optionB": "Puddles",
        "optionC": "Flowers",
        "correctAnswer": "Puddles"
      },
      {
        "question": "In the rainy season, ___ grow well.",
        "optionA": "Trees",
        "optionB": "Leaves",
        "optionC": "Plants",
        "correctAnswer": "Plants"
      },
      {
        "question": "In winter, we wear clothes like ___.",
        "optionA": "T-shirts",
        "optionB": "Sweaters",
        "optionC": "Shorts",
        "correctAnswer": "Sweaters"
      },
      {
        "question": "The ___ helps us understand the temperature and rain.",
        "optionA": "Weather",
        "optionB": "Season",
        "optionC": "Time",
        "correctAnswer": "Weather"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The weather stays the same all year.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We wear sweaters in the summer.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "It rains during the autumn season.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rainy season helps plants grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Autumn is hot and sunny.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Winter is a cold season.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We see sunshine during the rainy season only.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ice-cream is eaten more in winter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We use air-conditioners during the summer.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The four seasons are summer, rainy, winter, and autumn.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
