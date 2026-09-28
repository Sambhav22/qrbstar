export const chapter = "Chapter - 12: Weather and Climate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What tells us how the air feels and looks outside at a certain time?",
        "optionA": "Climate",
        "optionB": "Season",
        "optionC": "Weather",
        "correctAnswer": "Weather"
      },
      {
        "question": "In which season do children like swimming and eating mangoes?",
        "optionA": "Winter",
        "optionB": "Summer",
        "optionC": "Autumn",
        "correctAnswer": "Summer"
      },
      {
        "question": "Which season makes plants look fresh and green?",
        "optionA": "Winter",
        "optionB": "Monsoon",
        "optionC": "Summer",
        "correctAnswer": "Monsoon"
      },
      {
        "question": "In which season do children like collecting fallen leaves?",
        "optionA": "Autumn",
        "optionB": "Spring",
        "optionC": "Monsoon",
        "correctAnswer": "Autumn"
      },
      {
        "question": "In which season do people wear woollen clothes?",
        "optionA": "Winter",
        "optionB": "Summer",
        "optionC": "Spring",
        "correctAnswer": "Winter"
      },
      {
        "question": "In which season do flowers bloom and gardens look colourful?",
        "optionA": "Monsoon",
        "optionB": "Autumn",
        "optionC": "Spring",
        "correctAnswer": "Spring"
      },
      {
        "question": "During which season do children enjoy jumping in puddles?",
        "optionA": "Winter",
        "optionB": "Summer",
        "optionC": "Monsoon",
        "correctAnswer": "Monsoon"
      },
      {
        "question": "In which season do children like flying kites?",
        "optionA": "Spring",
        "optionB": "Autumn",
        "optionC": "Winter",
        "correctAnswer": "Autumn"
      },
      {
        "question": "In which season do people enjoy drinking lemonade?",
        "optionA": "Summer",
        "optionB": "Winter",
        "optionC": "Monsoon",
        "correctAnswer": "Summer"
      },
      {
        "question": "In which season do birds sing and butterflies are seen in gardens?",
        "optionA": "Spring",
        "optionB": "Autumn",
        "optionC": "Winter",
        "correctAnswer": "Spring"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The usual weather of a place over a long time is called ______.",
        "optionA": "weather",
        "optionB": "climate",
        "optionC": "season",
        "correctAnswer": "climate"
      },
      {
        "question": "Weather can change from hour to ______.",
        "optionA": "hour",
        "optionB": "year",
        "optionC": "month",
        "correctAnswer": "hour"
      },
      {
        "question": "In monsoon people use a ______ to stay dry.",
        "optionA": "sweater",
        "optionB": "cap",
        "optionC": "umbrella",
        "correctAnswer": "umbrella"
      },
      {
        "question": "In autumn leaves change their colour to ______.",
        "optionA": "blue",
        "optionB": "brown",
        "optionC": "white",
        "correctAnswer": "brown"
      },
      {
        "question": "In winter people wear ______ clothes.",
        "optionA": "cotton",
        "optionB": "woollen",
        "optionC": "raincoat",
        "correctAnswer": "woollen"
      },
      {
        "question": "In summer children like drinking ______.",
        "optionA": "lemonade",
        "optionB": "soup",
        "optionC": "coffee",
        "correctAnswer": "lemonade"
      },
      {
        "question": "In monsoon children like sailing ______ boats.",
        "optionA": "wooden",
        "optionB": "plastic",
        "optionC": "paper",
        "correctAnswer": "paper"
      },
      {
        "question": "In spring new ______ appear on trees.",
        "optionA": "flowers",
        "optionB": "leaves",
        "optionC": "stones",
        "correctAnswer": "leaves"
      },
      {
        "question": "In winter people sometimes sit near a ______ to keep warm.",
        "optionA": "fan",
        "optionB": "heater",
        "optionC": "cooler",
        "correctAnswer": "heater"
      },
      {
        "question": "Gardens look ______ in spring when flowers bloom.",
        "optionA": "colourful",
        "optionB": "empty",
        "optionC": "dark",
        "correctAnswer": "colourful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Weather can not change from day to day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Summer is the coldest season.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Monsoon is the rainy season.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "In autumn some trees shed their leaves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "In winter people drink cold drinks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Spring is the season when flowers bloom.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Children like jumping in puddles during monsoon.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "In summer people wear woollen clothes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds sing in spring.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Climate means the usual weather of a place over many years.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
