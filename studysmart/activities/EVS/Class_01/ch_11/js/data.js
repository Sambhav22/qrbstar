export const chapter = "Chapter - 11: Let’s Travel Around";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps people travel from one place to another?",
        "optionA": "Transport",
        "optionB": "Clothes",
        "optionC": "Toys",
        "correctAnswer": "Transport"
      },
      {
        "question": "Which vehicle moves on tracks?",
        "optionA": "Train",
        "optionB": "Boat",
        "optionC": "Helicopter",
        "correctAnswer": "Train"
      },
      {
        "question": "Which vehicle floats on water?",
        "optionA": "Bus",
        "optionB": "Ship",
        "optionC": "Bicycle",
        "correctAnswer": "Ship"
      },
      {
        "question": "Which vehicle helps to put out a fire?",
        "optionA": "School bus",
        "optionB": "Fire truck",
        "optionC": "Train",
        "correctAnswer": "Fire truck"
      },
      {
        "question": "Which vehicle keeps the city clean by collecting waste?",
        "optionA": "Bicycle",
        "optionB": "Car",
        "optionC": "Garbage truck",
        "correctAnswer": "Garbage truck"
      },
      {
        "question": "Which transport moves high in the sky?",
        "optionA": "Water transport",
        "optionB": "Land transport",
        "optionC": "Air transport",
        "correctAnswer": "Air transport"
      },
      {
        "question": "Which vehicle helps keep us safe?",
        "optionA": "Ship",
        "optionB": "Police car",
        "optionC": "Aeroplane",
        "correctAnswer": "Police car"
      },
      {
        "question": "Which vehicle takes sick people quickly to the hospital?",
        "optionA": "Ambulance",
        "optionB": "Bus",
        "optionC": "Truck",
        "correctAnswer": "Ambulance"
      },
      {
        "question": "Which transport moves on rivers, lakes, and seas?",
        "optionA": "Air transport",
        "optionB": "Land transport",
        "optionC": "Water transport",
        "correctAnswer": "Water transport"
      },
      {
        "question": "Which transport moves on roads?",
        "optionA": "Land transport",
        "optionB": "Water transport",
        "optionC": "Air transport",
        "correctAnswer": "Land transport"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Transport helps people ______ from one place to another.",
        "optionA": "cook",
        "optionB": "sleep",
        "optionC": "travel",
        "correctAnswer": "travel"
      },
      {
        "question": "Boats and ships move on ______.",
        "optionA": "sky",
        "optionB": "road",
        "optionC": "water",
        "correctAnswer": "water"
      },
      {
        "question": "Aeroplanes fly in the ______.",
        "optionA": "river",
        "optionB": "sky",
        "optionC": "road",
        "correctAnswer": "sky"
      },
      {
        "question": "Garbage trucks collect ______ from the city.",
        "optionA": "food",
        "optionB": "waste",
        "optionC": "clothes",
        "correctAnswer": "waste"
      },
      {
        "question": "A ______ helps to put out a fire.",
        "optionA": "fire truck",
        "optionB": "bus",
        "optionC": "bicycle",
        "correctAnswer": "fire truck"
      },
      {
        "question": "An ______ takes sick people to the hospital.",
        "optionA": "ambulance",
        "optionB": "aeroplane",
        "optionC": "ship",
        "correctAnswer": "ambulance"
      },
      {
        "question": "Cars and buses are means of ______ transport.",
        "optionA": "air",
        "optionB": "land",
        "optionC": "water",
        "correctAnswer": "land"
      },
      {
        "question": "Helicopters are ______ transport.",
        "optionA": "water",
        "optionB": "land",
        "optionC": "air",
        "correctAnswer": "air"
      },
      {
        "question": "Transport helps us save ______.",
        "optionA": "toys",
        "optionB": "time",
        "optionC": "books",
        "correctAnswer": "time"
      },
      {
        "question": "A vehicle is something used for ______.",
        "optionA": "travelling",
        "optionB": "sleeping",
        "optionC": "cooking",
        "correctAnswer": "travelling"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Boats float on water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Aeroplanes fly in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Scooters are land transport vehicles.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Garbage trucks keep our city clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Helicopters are air transport.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cars move on roads.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Ships travel on water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fire trucks help to put out fire.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Police cars help keep us safe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Transport helps people carry goods and travel.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
