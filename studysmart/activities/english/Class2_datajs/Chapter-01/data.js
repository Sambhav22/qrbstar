export const chapter = "Chapter - 1: Safety First";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does the child do before crossing the road?",
        "optionA": "Runs fast",
        "optionB": "Closes eyes",
        "optionC": "Looks up and down the street",
        "correctAnswer": "Looks up and down the street"
      },
      {
        "question": "What does the child listen for on the road?",
        "optionA": "Music",
        "optionB": "Horn or bell",
        "correctAnswer": "Horn or bell",
        "optionC": "Talking"
      },
      {
        "question": "What may happen if the child runs suddenly on the road?",
        "optionA": "He may be hit",
        "correctAnswer": "He may be hit",
        "optionB": "He may fall asleep",
        "optionC": "He may laugh"
      },
      {
        "question": "When does the child decide to cross the road?",
        "optionA": "When vehicles are coming",
        "optionB": "When the road is clear",
        "correctAnswer": "When the road is clear",
        "optionC": "When it is crowded"
      },
      {
        "question": "What kind of road is safe to cross?",
        "optionA": "Busy road",
        "optionB": "Clear road",
        "correctAnswer": "Clear road",
        "optionC": "Dirty road"
      },
      {
        "question": "What is NOT mentioned near the road?",
        "optionA": "Car",
        "optionB": "Motor-bus",
        "optionC": "Train",
        "correctAnswer": "Train"
      },
      {
        "question": "Where does the child want to go?",
        "optionA": "Same side",
        "optionB": "Other side",
        "correctAnswer": "Other side",
        "optionC": "Inside house"
      },
      {
        "question": "What is moving on the road?",
        "optionA": "Traffic",
        "correctAnswer": "Traffic",
        "optionB": "Books",
        "optionC": "Clothes"
      },
      {
        "question": "What does the child check before crossing?",
        "optionA": "Weather",
        "optionB": "Traffic near him",
        "correctAnswer": "Traffic near him",
        "optionC": "Time"
      },
      {
        "question": "What helps the child cross safely?",
        "optionA": "Running fast",
        "optionB": "Shouting",
        "optionC": "Being careful and checking road",
        "correctAnswer": "Being careful and checking road"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Up the street I look to see if any ______ is near me.",
        "optionA": "water",
        "optionB": "tree",
        "optionC": "traffic",
        "correctAnswer": "traffic"
      },
      {
        "question": "Down the street I look as ______.",
        "optionA": "fast",
        "optionB": "well",
        "correctAnswer": "well",
        "optionC": "slow"
      },
      {
        "question": "And listen for a ______ or bell.",
        "optionA": "horn",
        "correctAnswer": "horn",
        "optionB": "whistle",
        "optionC": "drum"
      },
      {
        "question": "If I run out I may be ______.",
        "optionA": "safe",
        "optionB": "hit",
        "correctAnswer": "hit",
        "optionC": "happy"
      },
      {
        "question": "But now the road is nice and ______.",
        "optionA": "clear",
        "correctAnswer": "clear",
        "optionB": "dirty",
        "optionC": "narrow"
      },
      {
        "question": "No car or motor-bus is ______.",
        "optionA": "near",
        "correctAnswer": "near",
        "optionB": "far",
        "optionC": "big"
      },
      {
        "question": "I’ll run across the ______ so wide.",
        "optionA": "park",
        "optionB": "house",
        "optionC": "road",
        "correctAnswer": "road"
      },
      {
        "question": "And so get safely to the ______ side.",
        "optionA": "same",
        "optionB": "wrong",
        "optionC": "other",
        "correctAnswer": "other"
      },
      {
        "question": "We must be ______ on the road.",
        "optionA": "careless",
        "optionB": "careful",
        "correctAnswer": "careful",
        "optionC": "loud"
      },
      {
        "question": "There are many ______ on the road.",
        "optionA": "animals",
        "optionB": "vehicles",
        "correctAnswer": "vehicles",
        "optionC": "toys"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The child looks up the street before crossing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child only looks in one direction.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The child listens for a horn or bell.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child runs when something is coming.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The road is safe when it is clear.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem talks about playing on the road.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The child crosses the road when no vehicles are near.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Traffic means animals on the road.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The child reaches the other side safely.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "We should not be careful on the road.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
