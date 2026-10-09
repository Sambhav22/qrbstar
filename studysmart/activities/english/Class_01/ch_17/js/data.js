export const chapter = "Chapter - 17: The House";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was resting under a tree?",
        "optionA": "Bulby",
        "optionB": "Tuti",
        "correctAnswer": "Tuti",
        "optionC": "Monkey"
      },
      {
        "question": "Who was building her nest?",
        "optionA": "Tuti",
        "optionB": "Bulby",
        "correctAnswer": "Bulby",
        "optionC": "Rabbit"
      },
      {
        "question": "What was Bulby making?",
        "optionA": "A shell",
        "optionB": "A cave",
        "optionC": "A nest",
        "correctAnswer": "A nest"
      },
      {
        "question": "Where was Bulby building her nest?",
        "optionA": "Under the ground",
        "optionB": "On a tree",
        "correctAnswer": "On a tree",
        "optionC": "In water"
      },
      {
        "question": "What did Tuti say about his shell?",
        "optionA": "It is strong",
        "correctAnswer": "It is strong",
        "optionB": "It is soft",
        "optionC": "It is small"
      },
      {
        "question": "What did Tuti think about Bulby’s nest at first?",
        "optionA": "Beautiful",
        "optionB": "Funny",
        "correctAnswer": "Funny",
        "optionC": "Big"
      },
      {
        "question": "What can break Bulby’s nest?",
        "optionA": "Rain",
        "optionB": "Sun",
        "optionC": "Strong wind",
        "correctAnswer": "Strong wind"
      },
      {
        "question": "What does Bulby’s house give?",
        "optionA": "Love and comfort",
        "correctAnswer": "Love and comfort",
        "optionB": "Only safety",
        "optionC": "Food"
      },
      {
        "question": "Who can live in Bulby’s house?",
        "optionA": "Only Bulby",
        "optionB": "Bulby and her babies",
        "correctAnswer": "Bulby and her babies",
        "optionC": "Only Tuti"
      },
      {
        "question": "What does Tuti decide at the end?",
        "optionA": "To sleep",
        "optionB": "To make a house",
        "correctAnswer": "To make a house",
        "optionC": "To fly"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Tuti was resting under a ______.",
        "optionA": "tree",
        "correctAnswer": "tree",
        "optionB": "rock",
        "optionC": "bush"
      },
      {
        "question": "Bulby makes her house with ______ twigs.",
        "optionA": "green",
        "optionB": "broken",
        "correctAnswer": "broken",
        "optionC": "long"
      },
      {
        "question": "Bulby lives ______ in her nest.",
        "optionA": "sadly",
        "optionB": "quickly",
        "optionC": "comfortably",
        "correctAnswer": "comfortably"
      },
      {
        "question": "A nest can keep ______.",
        "optionA": "stones",
        "optionB": "babies",
        "correctAnswer": "babies",
        "optionC": "water"
      },
      {
        "question": "Tuti’s shell is very ______.",
        "optionA": "strong",
        "correctAnswer": "strong",
        "optionB": "soft",
        "optionC": "light"
      },
      {
        "question": "Bulby’s house gives ______ and comfort.",
        "optionA": "fear",
        "optionB": "love",
        "correctAnswer": "love",
        "optionC": "sound"
      },
      {
        "question": "Tuti looks at his ______.",
        "optionA": "wings",
        "optionB": "shell",
        "correctAnswer": "shell",
        "optionC": "nest"
      },
      {
        "question": "Bulby calls her house a ______.",
        "optionA": "cave",
        "optionB": "hole",
        "optionC": "nest",
        "correctAnswer": "nest"
      },
      {
        "question": "Tuti wants to live with his ______.",
        "optionA": "friends",
        "optionB": "teacher",
        "optionC": "children",
        "correctAnswer": "children"
      },
      {
        "question": "Bulby is making a ______ for herself.",
        "optionA": "road",
        "optionB": "house",
        "correctAnswer": "house",
        "optionC": "tree"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Bulby builds her own house.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tuti is a bird.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A nest is made of broken twigs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tuti thinks the nest is funny at first.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A shell gives love and comfort.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bulby can live with her babies in the nest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tuti’s shell is very weak.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bulby explains about her nest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tuti learns something at the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Animals also need houses.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
