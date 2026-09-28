export const chapter = "Chapter - 4: Happy School";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does a school explorer use to write observations?",
        "optionA": "Bag",
        "optionB": "Bottle",
        "optionC": "Notebook",
        "correctAnswer": "Notebook"
      },
      {
        "question": "Which team ensures lights and fans are used only when needed?",
        "optionA": "Waste Warriors",
        "optionB": "Electricity Savers",
        "optionC": "Traffic Trackers",
        "correctAnswer": "Electricity Savers"
      },
      {
        "question": "What helps to keep classrooms cool naturally?",
        "optionA": "Trees and open windows",
        "optionB": "Closed doors",
        "optionC": "Lights",
        "correctAnswer": "Trees and open windows"
      },
      {
        "question": "What do Green Guardians enjoy observing in the garden?",
        "optionA": "Birds and butterflies",
        "optionB": "Cars",
        "optionC": "Books",
        "correctAnswer": "Birds and butterflies"
      },
      {
        "question": "What do Water Watchers help to clean in school?",
        "optionA": "Floors",
        "optionB": "Water coolers",
        "optionC": "Walls",
        "correctAnswer": "Water coolers"
      },
      {
        "question": "Who guides the members in an Explorer Team?",
        "optionA": "Driver",
        "optionB": "Leader",
        "optionC": "Guard",
        "correctAnswer": "Leader"
      },
      {
        "question": "What do Waste Warriors teach students?",
        "optionA": "Painting",
        "optionB": "Singing",
        "optionC": "Recycling and proper waste use",
        "correctAnswer": "Recycling and proper waste use"
      },
      {
        "question": "What is placed near school gates to guide people?",
        "optionA": "Benches",
        "optionB": "Dustbins",
        "optionC": "Traffic signs",
        "correctAnswer": "Traffic signs"
      },
      {
        "question": "What activity helps students learn waste segregation?",
        "optionA": "Running race",
        "optionB": "Segregation game",
        "optionC": "Reading",
        "correctAnswer": "Segregation game"
      },
      {
        "question": "What do trees provide in the school campus?",
        "optionA": "Shade and clean air",
        "optionB": "Noise",
        "optionC": "Smoke",
        "correctAnswer": "Shade and clean air"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Explorer Teams share their findings during ________.",
        "optionA": "lunch",
        "optionB": "assembly",
        "optionC": "games",
        "correctAnswer": "assembly"
      },
      {
        "question": "Turning off switches helps save ________.",
        "optionA": "water",
        "optionB": "electricity",
        "optionC": "paper",
        "correctAnswer": "electricity"
      },
      {
        "question": "Green bins are used for ________ waste.",
        "optionA": "wet",
        "optionB": "dry",
        "optionC": "plastic",
        "correctAnswer": "wet"
      },
      {
        "question": "Waste Warriors encourage students to ________ items.",
        "optionA": "reuse",
        "optionB": "throw",
        "optionC": "waste",
        "correctAnswer": "reuse"
      },
      {
        "question": "Traffic Trackers observe the movement of ________.",
        "optionA": "books",
        "optionB": "vehicles",
        "optionC": "food",
        "correctAnswer": "vehicles"
      },
      {
        "question": "Rainwater can be ________ and saved.",
        "optionA": "wasted",
        "optionB": "ignored",
        "optionC": "collected",
        "correctAnswer": "collected"
      },
      {
        "question": "Fire extinguishers help to ________ fire.",
        "optionA": "start",
        "optionB": "spread",
        "optionC": "stop",
        "correctAnswer": "stop"
      },
      {
        "question": "Clean bins help prevent bad ________.",
        "optionA": "smell",
        "optionB": "colour",
        "optionC": "light",
        "correctAnswer": "smell"
      },
      {
        "question": "Compost is made from fallen ________.",
        "optionA": "plastic",
        "optionB": "leaves",
        "optionC": "glass",
        "correctAnswer": "leaves"
      },
      {
        "question": "A school becomes happy with ________ and respect.",
        "optionA": "fights",
        "optionB": "teamwork",
        "optionC": "shouting",
        "correctAnswer": "teamwork"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Explorer Teams have a leader to guide members.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "White roofs reflect sunlight and keep rooms cooler.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water Watchers ignore leaking taps.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Waste Warriors help in separating wet and dry waste.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Trees provide food and shelter to birds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Traffic rules are not important near schools.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fire drills help students prepare for emergencies.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Reusing things helps save resources.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Throwing waste anywhere keeps the school clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Every small action helps make the school better.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
