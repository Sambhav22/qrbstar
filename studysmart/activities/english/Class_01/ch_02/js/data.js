export const chapter = "Chapter - 2: Making Words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which letter is for apple?",
        "optionA": "a",
        "correctAnswer": "a",
        "optionB": "b",
        "optionC": "c"
      },
      {
        "question": "Which letter is for elephant?",
        "optionA": "d",
        "optionB": "e",
        "correctAnswer": "e",
        "optionC": "f"
      },
      {
        "question": "Which letter is for mango?",
        "optionA": "m",
        "correctAnswer": "m",
        "optionB": "n",
        "optionC": "o"
      },
      {
        "question": "Which letter is for tiger?",
        "optionA": "s",
        "optionB": "u",
        "optionC": "t",
        "correctAnswer": "t"
      },
      {
        "question": "Which letter is for umbrella?",
        "optionA": "t",
        "optionB": "u",
        "correctAnswer": "u",
        "optionC": "v"
      },
      {
        "question": "Which letter is for parrot?",
        "optionA": "o",
        "optionB": "p",
        "correctAnswer": "p",
        "optionC": "q"
      },
      {
        "question": "Which letter is for queen?",
        "optionA": "q",
        "correctAnswer": "q",
        "optionB": "p",
        "optionC": "r"
      },
      {
        "question": "Which letter is for rabbit?",
        "optionA": "t",
        "optionB": "s",
        "optionC": "r",
        "correctAnswer": "r"
      },
      {
        "question": "Which letter is for zebra?",
        "optionA": "x",
        "optionB": "y",
        "optionC": "z",
        "correctAnswer": "z"
      },
      {
        "question": "Which letter is for ink?",
        "optionA": "h",
        "optionB": "i",
        "correctAnswer": "i",
        "optionC": "j"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "‘a’ is for ______.",
        "optionA": "apple",
        "correctAnswer": "apple",
        "optionB": "ant",
        "optionC": "axe"
      },
      {
        "question": "‘b’ is for ______.",
        "optionA": "bat",
        "correctAnswer": "bat",
        "optionB": "ball",
        "optionC": "bag"
      },
      {
        "question": "‘c’ is for ______.",
        "optionA": "cat",
        "optionB": "car",
        "correctAnswer": "car",
        "optionC": "cup"
      },
      {
        "question": "‘d’ is for ______.",
        "optionA": "drum",
        "optionB": "duck",
        "optionC": "dog",
        "correctAnswer": "dog"
      },
      {
        "question": "‘g’ is for ______.",
        "optionA": "grapes",
        "correctAnswer": "grapes",
        "optionB": "goat",
        "optionC": "grass"
      },
      {
        "question": "‘k’ is for ______.",
        "optionA": "key",
        "optionB": "kite",
        "correctAnswer": "kite",
        "optionC": "king"
      },
      {
        "question": "‘l’ is for ______.",
        "optionA": "lamp",
        "optionB": "leaf",
        "optionC": "lion",
        "correctAnswer": "lion"
      },
      {
        "question": "‘o’ is for ______.",
        "optionA": "orange",
        "correctAnswer": "orange",
        "optionB": "owl",
        "optionC": "ox"
      },
      {
        "question": "‘v’ is for ______.",
        "optionA": "vase",
        "optionB": "van",
        "correctAnswer": "van",
        "optionC": "violin"
      },
      {
        "question": "‘y’ is for ______.",
        "optionA": "yellow",
        "optionB": "yarn",
        "optionC": "yak",
        "correctAnswer": "yak"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Letters make words.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Words make language.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘f’ is for ball.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "‘h’ is for hen.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘j’ is for jug.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘n’ is for horse.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "‘s’ is for sun.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘w’ is for watch.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘x’ is for apple.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "‘y’ is for yak.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
