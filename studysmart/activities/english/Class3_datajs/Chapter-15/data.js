export const chapter = "Chapter - 15: The Little Fir Tree";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the magician stop near the fir tree?",
        "optionA": "It was raining heavily",
        "correctAnswer": "It was raining heavily",
        "optionB": "It was very sunny",
        "optionC": "He was tired"
      },
      {
        "question": "What did the fir tree give to the magician?",
        "optionA": "Food",
        "optionB": "Shelter",
        "correctAnswer": "Shelter",
        "optionC": "Water"
      },
      {
        "question": "What did the fir tree wish for first?",
        "optionA": "Gold leaves",
        "optionB": "Glass leaves",
        "optionC": "Green leaves",
        "correctAnswer": "Green leaves"
      },
      {
        "question": "What happened after the tree got green leaves?",
        "optionA": "They fell",
        "optionB": "A goat ate them",
        "correctAnswer": "A goat ate them",
        "optionC": "They broke"
      },
      {
        "question": "Why did the tree want gold leaves?",
        "optionA": "To look beautiful",
        "correctAnswer": "To look beautiful",
        "optionB": "To hide",
        "optionC": "To grow tall"
      },
      {
        "question": "What happened to the gold leaves?",
        "optionA": "They broke",
        "optionB": "They turned green",
        "optionC": "A thief stole them",
        "correctAnswer": "A thief stole them"
      },
      {
        "question": "Why did the tree wish for glass leaves?",
        "optionA": "To shine",
        "optionB": "So no one could eat or steal them",
        "correctAnswer": "So no one could eat or steal them",
        "optionC": "To grow faster"
      },
      {
        "question": "What happened to the glass leaves?",
        "optionA": "They melted",
        "optionB": "They broke in strong winds",
        "correctAnswer": "They broke in strong winds",
        "optionC": "They grew bigger"
      },
      {
        "question": "What did the fir tree finally wish for?",
        "optionA": "Needle-like leaves",
        "correctAnswer": "Needle-like leaves",
        "optionB": "Gold leaves",
        "optionC": "Glass leaves"
      },
      {
        "question": "How did the fir tree feel at the end?",
        "optionA": "Sad",
        "optionB": "Happy and satisfied",
        "correctAnswer": "Happy and satisfied",
        "optionC": "Angry"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The magician was walking in a ______.",
        "optionA": "park",
        "optionB": "forest",
        "correctAnswer": "forest",
        "optionC": "road"
      },
      {
        "question": "The fir tree had ______ leaves in the beginning.",
        "optionA": "soft",
        "optionB": "needle-like",
        "correctAnswer": "needle-like",
        "optionC": "big"
      },
      {
        "question": "The tree felt ______ because birds did not sit on it.",
        "optionA": "happy",
        "optionB": "excited",
        "optionC": "unhappy",
        "correctAnswer": "unhappy"
      },
      {
        "question": "The green leaves were very ______.",
        "optionA": "hard",
        "optionB": "soft",
        "correctAnswer": "soft",
        "optionC": "dry"
      },
      {
        "question": "The goat came and ______ all the leaves.",
        "optionA": "broke",
        "optionB": "ate",
        "correctAnswer": "ate",
        "optionC": "cut"
      },
      {
        "question": "The gold leaves made the tree feel ______.",
        "optionA": "proud",
        "correctAnswer": "proud",
        "optionB": "afraid",
        "optionC": "weak"
      },
      {
        "question": "The thief left the tree completely ______.",
        "optionA": "green",
        "optionB": "bare",
        "correctAnswer": "bare",
        "optionC": "tall"
      },
      {
        "question": "The glass leaves shone in the ______.",
        "optionA": "moonlight",
        "optionB": "sunlight",
        "correctAnswer": "sunlight",
        "optionC": "darkness"
      },
      {
        "question": "Strong ______ broke the glass leaves.",
        "optionA": "rain",
        "optionB": "heat",
        "optionC": "winds",
        "correctAnswer": "winds"
      },
      {
        "question": "The tree realised its ______.",
        "optionA": "strength",
        "optionB": "foolishness",
        "correctAnswer": "foolishness",
        "optionC": "height"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The fir tree was happy with its leaves at first.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The magician gave the tree four wishes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The green leaves stayed safe for a long time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The goat protected the leaves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The thief took away the gold leaves.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The glass leaves were very strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The wind was very gentle.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tree cried because of its bad luck.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tree never got its old leaves back.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tree became happy in the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
