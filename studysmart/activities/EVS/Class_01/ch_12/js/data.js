export const chapter = "Chapter - 12: Weather";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps plants grow well on sunny days?",
        "options": {
          "A": "Sunlight",
          "B": "Dust",
          "C": "Fog"
        },
        "answer": "A"
      },
      {
        "question": "What do we drink on a sunny day to stay safe?",
        "options": {
          "A": "Hot milk",
          "B": "Cool water",
          "C": "Soup"
        },
        "answer": "B"
      },
      {
        "question": "What moves very fast on windy days?",
        "options": {
          "A": "Air",
          "B": "Sand",
          "C": "Water"
        },
        "answer": "A"
      },
      {
        "question": "What hides behind the clouds on cloudy days?",
        "options": {
          "A": "Stars",
          "B": "Moon",
          "C": "Sun"
        },
        "answer": "C"
      },
      {
        "question": "What do plants and trees look like after rain?",
        "options": {
          "A": "Fresh and green",
          "B": "Dry",
          "C": "Brown"
        },
        "answer": "A"
      },
      {
        "question": "What makes us feel cool on a hot day?",
        "options": {
          "A": "Rain",
          "B": "Wind blowing",
          "C": "Snow"
        },
        "answer": "B"
      },
      {
        "question": "What tells us what clothes to wear?",
        "options": {
          "A": "Trees",
          "B": "Weather",
          "C": "Animals"
        },
        "answer": "B"
      },
      {
        "question": "What covers most of the sky on cloudy days?",
        "options": {
          "A": "Birds",
          "B": "Clouds",
          "C": "Leaves"
        },
        "answer": "B"
      },
      {
        "question": "What can fly away on windy days?",
        "options": {
          "A": "",
          "B": "Stones",
          "C": "Leaves and papers"
        },
        "answer": "C"
      },
      {
        "question": "What makes the sky clear and bright?",
        "options": {
          "A": "Sunny weather",
          "B": "Rainy weather",
          "C": "Windy weather"
        },
        "answer": "A"
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
        "options": {
          "A": "dust",
          "B": "sunlight",
          "C": "smoke"
        },
        "answer": "B"
      },
      {
        "question": "We like to drink hot milk or ______ on cold days.",
        "options": {
          "A": "soup",
          "B": "juice",
          "C": "cold water"
        },
        "answer": "A"
      },
      {
        "question": "Weather changes because the ______, air and clouds keep moving.",
        "options": {
          "A": "moon",
          "B": "sun",
          "C": "stars"
        },
        "answer": "B"
      },
      {
        "question": "On windy days the air moves very ______.",
        "options": {
          "A": "quietly",
          "B": "slowly",
          "C": "fast"
        },
        "answer": "C"
      },
      {
        "question": "Plants and trees look ______ after rain.",
        "options": {
          "A": "weak",
          "B": "dry",
          "C": "fresh and green"
        },
        "answer": "C"
      },
      {
        "question": "The sky is ______ and bright on sunny days.",
        "options": {
          "A": "clear",
          "B": "dark",
          "C": "foggy"
        },
        "answer": "A"
      },
      {
        "question": "Sometimes clouds bring ______.",
        "options": {
          "A": "sand",
          "B": "rain",
          "C": "dust"
        },
        "answer": "B"
      },
      {
        "question": "Weather tells us what ______ to wear.",
        "options": {
          "A": "books",
          "B": "clothes",
          "C": "toys"
        },
        "answer": "B"
      },
      {
        "question": "Leaves and hats can ______ away in the wind.",
        "options": {
          "A": "fly",
          "B": "melt",
          "C": "sink"
        },
        "answer": "A"
      },
      {
        "question": "The sun hides behind clouds on ______ days.",
        "options": {
          "A": "cloudy",
          "B": "rainy",
          "C": "windy"
        },
        "answer": "A"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Sunny days make the sky clear and bright.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Windy weather makes the air move fast.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "We drink hot milk or soup on cold days.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Plants get sunlight on sunny days.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Clouds can hide the sun.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Rainy weather brings water from clouds.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Wind can make leaves fly away.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Weather tells us what to wear and when to play outside.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Plants and trees look fresh after rain.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
