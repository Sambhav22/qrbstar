export const chapter = "Chapter - 11: Let’s Travel Around";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps people travel from one place to another?",
        "options": {
          "A": "Transport",
          "B": "Clothes",
          "C": "Toys"
        },
        "answer": "A"
      },
      {
        "question": "Which vehicle moves on tracks?",
        "options": {
          "A": "Train",
          "B": "Boat",
          "C": "Helicopter"
        },
        "answer": "A"
      },
      {
        "question": "Which vehicle floats on water?",
        "options": {
          "A": "Bus",
          "B": "Ship",
          "C": "Bicycle"
        },
        "answer": "B"
      },
      {
        "question": "Which vehicle helps to put out a fire?",
        "options": {
          "A": "School bus",
          "B": "Fire truck",
          "C": "Train"
        },
        "answer": "B"
      },
      {
        "question": "Which vehicle keeps the city clean by collecting waste?",
        "options": {
          "A": "Bicycle",
          "B": "Car",
          "C": "Garbage truck"
        },
        "answer": "C"
      },
      {
        "question": "Which transport moves high in the sky?",
        "options": {
          "A": "Water transport",
          "B": "Land transport",
          "C": "Air transport"
        },
        "answer": "C"
      },
      {
        "question": "Which vehicle helps keep us safe?",
        "options": {
          "A": "Ship",
          "B": "Police car",
          "C": "Aeroplane"
        },
        "answer": "B"
      },
      {
        "question": "Which vehicle takes sick people quickly to the hospital?",
        "options": {
          "A": "Ambulance",
          "B": "Bus",
          "C": "Truck"
        },
        "answer": "A"
      },
      {
        "question": "Which transport moves on rivers, lakes, and seas?",
        "options": {
          "A": "Air transport",
          "B": "Land transport",
          "C": "Water transport"
        },
        "answer": "C"
      },
      {
        "question": "Which transport moves on roads?",
        "options": {
          "A": "Land transport",
          "B": "Water transport",
          "C": "Air transport"
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
        "question": "Transport helps people ______ from one place to another.",
        "options": {
          "A": "cook",
          "B": "sleep",
          "C": "travel"
        },
        "answer": "C"
      },
      {
        "question": "Boats and ships move on ______.",
        "options": {
          "A": "sky",
          "B": "road",
          "C": "water"
        },
        "answer": "C"
      },
      {
        "question": "Aeroplanes fly in the ______.",
        "options": {
          "A": "river",
          "B": "sky",
          "C": "road"
        },
        "answer": "B"
      },
      {
        "question": "Garbage trucks collect ______ from the city.",
        "options": {
          "A": "food",
          "B": "waste",
          "C": "clothes"
        },
        "answer": "B"
      },
      {
        "question": "A ______ helps to put out a fire.",
        "options": {
          "A": "fire truck",
          "B": "bus",
          "C": "bicycle"
        },
        "answer": "A"
      },
      {
        "question": "An ______ takes sick people to the hospital.",
        "options": {
          "A": "ambulance",
          "B": "aeroplane",
          "C": "ship"
        },
        "answer": "A"
      },
      {
        "question": "Cars and buses are means of ______ transport.",
        "options": {
          "A": "air",
          "B": "land",
          "C": "water"
        },
        "answer": "B"
      },
      {
        "question": "Helicopters are ______ transport.",
        "options": {
          "A": "water",
          "B": "land",
          "C": "air"
        },
        "answer": "C"
      },
      {
        "question": "Transport helps us save ______.",
        "options": {
          "A": "toys",
          "B": "time",
          "C": "books"
        },
        "answer": "B"
      },
      {
        "question": "A vehicle is something used for ______.",
        "options": {
          "A": "travelling",
          "B": "sleeping",
          "C": "cooking"
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
        "question": "Boats float on water.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Aeroplanes fly in the sky.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Scooters are land transport vehicles.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Garbage trucks keep our city clean.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Helicopters are air transport.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Cars move on roads.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Ships travel on water.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Fire trucks help to put out fire.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Police cars help keep us safe.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Transport helps people carry goods and travel.",
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
