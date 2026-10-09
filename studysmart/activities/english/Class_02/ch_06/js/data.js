export const chapter = "Chapter - 6: The Rainbow";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What sail across the sky?",
        "optionA": "Clouds",
        "correctAnswer": "Clouds",
        "optionB": "Birds",
        "optionC": "Boats"
      },
      {
        "question": "Where do boats sail?",
        "optionA": "Rivers",
        "correctAnswer": "Rivers",
        "optionB": "Sky",
        "optionC": "Roads"
      },
      {
        "question": "Where do ships sail?",
        "optionA": "Hills",
        "optionB": "Seas",
        "correctAnswer": "Seas",
        "optionC": "Trees"
      },
      {
        "question": "What is prettier than boats and ships?",
        "optionA": "Houses",
        "optionB": "Cars",
        "optionC": "Clouds",
        "correctAnswer": "Clouds"
      },
      {
        "question": "What bridges heaven?",
        "optionA": "Road",
        "optionB": "Rainbow (bow)",
        "correctAnswer": "Rainbow (bow)",
        "optionC": "River"
      },
      {
        "question": "What overtops the trees?",
        "optionA": "Boat",
        "optionB": "Ship",
        "optionC": "Rainbow",
        "correctAnswer": "Rainbow"
      },
      {
        "question": "What builds a road from earth to sky?",
        "optionA": "Bridge",
        "optionB": "Rainbow",
        "correctAnswer": "Rainbow",
        "optionC": "Cloud"
      },
      {
        "question": "What makes us happy and satisfied?",
        "optionA": "Toys",
        "optionB": "Nature",
        "correctAnswer": "Nature",
        "optionC": "Food"
      },
      {
        "question": "What does the rainbow look like?",
        "optionA": "A bow",
        "correctAnswer": "A bow",
        "optionB": "A box",
        "optionC": "A line"
      },
      {
        "question": "What do bridges do?",
        "optionA": "Break",
        "optionB": "Fly",
        "optionC": "Connect",
        "correctAnswer": "Connect"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Boats sail on the ______.",
        "optionA": "sky",
        "optionB": "rivers",
        "correctAnswer": "rivers",
        "optionC": "hills"
      },
      {
        "question": "Ships sail on the ______.",
        "optionA": "roads",
        "optionB": "trees",
        "optionC": "seas",
        "correctAnswer": "seas"
      },
      {
        "question": "Clouds sail across the ______.",
        "optionA": "river",
        "optionB": "sky",
        "correctAnswer": "sky",
        "optionC": "house"
      },
      {
        "question": "The rainbow bridges ______.",
        "optionA": "heaven",
        "correctAnswer": "heaven",
        "optionB": "earth",
        "optionC": "school"
      },
      {
        "question": "The rainbow overtops the ______.",
        "optionA": "trees",
        "correctAnswer": "trees",
        "optionB": "buildings",
        "optionC": "roads"
      },
      {
        "question": "The rainbow builds a ______ from earth to sky.",
        "optionA": "road",
        "correctAnswer": "road",
        "optionB": "house",
        "optionC": "car"
      },
      {
        "question": "Nature is very ______.",
        "optionA": "ugly",
        "optionB": "dirty",
        "optionC": "beautiful",
        "correctAnswer": "beautiful"
      },
      {
        "question": "Nature makes us feel ______.",
        "optionA": "sad",
        "optionB": "happy",
        "correctAnswer": "happy",
        "optionC": "angry"
      },
      {
        "question": "The rainbow is very ______.",
        "optionA": "pretty",
        "correctAnswer": "pretty",
        "optionB": "small",
        "optionC": "weak"
      },
      {
        "question": "Clouds are ______ than boats and ships.",
        "optionA": "slower",
        "optionB": "smaller",
        "optionC": "prettier",
        "correctAnswer": "prettier"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Boats sail on the rivers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Ships sail on the seas.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Clouds sail across the sky.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rainbow bridges heaven.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rainbow overtops the trees.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Nature makes us happy and satisfied.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rainbow builds a road from earth to sky.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Clouds sail on the rivers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The rainbow is very pretty.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Ships sail on roads.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
