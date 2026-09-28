export const chapter = "Chapter - 12: Weather";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps plants grow well on sunny days?",
        "optionA": "Sunlight",
        "optionB": "Dust",
        "optionC": "Fog",
        "correctAnswer": "Sunlight"
      },
      {
        "question": "What do we drink on a sunny day to stay safe?",
        "optionA": "Hot milk",
        "optionB": "Cool water",
        "optionC": "Soup",
        "correctAnswer": "Cool water"
      },
      {
        "question": "What moves very fast on windy days?",
        "optionA": "Air",
        "optionB": "Sand",
        "optionC": "Water",
        "correctAnswer": "Air"
      },
      {
        "question": "What hides behind the clouds on cloudy days?",
        "optionA": "Stars",
        "optionB": "Moon",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "What do plants and trees look like after rain?",
        "optionA": "Fresh and green",
        "optionB": "Dry",
        "optionC": "Brown",
        "correctAnswer": "Fresh and green"
      },
      {
        "question": "What makes us feel cool on a hot day?",
        "optionA": "Rain",
        "optionB": "Wind blowing",
        "optionC": "Snow",
        "correctAnswer": "Wind blowing"
      },
      {
        "question": "What tells us what clothes to wear?",
        "optionA": "Trees",
        "optionB": "Weather",
        "optionC": "Animals",
        "correctAnswer": "Weather"
      },
      {
        "question": "What covers most of the sky on cloudy days?",
        "optionA": "Birds",
        "optionB": "Clouds",
        "optionC": "Leaves",
        "correctAnswer": "Clouds"
      },
      {
        "question": "What can fly away on windy days?",
        "optionA": "",
        "optionB": "Stones",
        "optionC": "Leaves and papers",
        "correctAnswer": "Leaves and papers"
      },
      {
        "question": "What makes the sky clear and bright?",
        "optionA": "Sunny weather",
        "optionB": "Rainy weather",
        "optionC": "Windy weather",
        "correctAnswer": "Sunny weather"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Plants get lots of ______ on sunny days.",
        "optionA": "dust",
        "optionB": "sunlight",
        "optionC": "smoke",
        "correctAnswer": "sunlight"
      },
      {
        "question": "We like to drink hot milk or ______ on cold days.",
        "optionA": "soup",
        "optionB": "juice",
        "optionC": "cold water",
        "correctAnswer": "soup"
      },
      {
        "question": "Weather changes because the ______, air and clouds keep moving.",
        "optionA": "moon",
        "optionB": "sun",
        "optionC": "stars",
        "correctAnswer": "sun"
      },
      {
        "question": "On windy days the air moves very ______.",
        "optionA": "quietly",
        "optionB": "slowly",
        "optionC": "fast",
        "correctAnswer": "fast"
      },
      {
        "question": "Plants and trees look ______ after rain.",
        "optionA": "weak",
        "optionB": "dry",
        "optionC": "fresh and green",
        "correctAnswer": "fresh and green"
      },
      {
        "question": "The sky is ______ and bright on sunny days.",
        "optionA": "clear",
        "optionB": "dark",
        "optionC": "foggy",
        "correctAnswer": "clear"
      },
      {
        "question": "Sometimes clouds bring ______.",
        "optionA": "sand",
        "optionB": "rain",
        "optionC": "dust",
        "correctAnswer": "rain"
      },
      {
        "question": "Weather tells us what ______ to wear.",
        "optionA": "books",
        "optionB": "clothes",
        "optionC": "toys",
        "correctAnswer": "clothes"
      },
      {
        "question": "Leaves and hats can ______ away in the wind.",
        "optionA": "fly",
        "optionB": "melt",
        "optionC": "sink",
        "correctAnswer": "fly"
      },
      {
        "question": "The sun hides behind clouds on ______ days.",
        "optionA": "cloudy",
        "optionB": "rainy",
        "optionC": "windy",
        "correctAnswer": "cloudy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Weather changes every day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Sunny days make the sky clear and bright.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Windy weather makes the air move fast.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We drink hot milk or soup on cold days.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants get sunlight on sunny days.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Clouds can hide the sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rainy weather brings water from clouds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Wind can make leaves fly away.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Weather tells us what to wear and when to play outside.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants and trees look fresh after rain.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
