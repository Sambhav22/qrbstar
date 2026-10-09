export const chapter = "Chapter - 1: An Information Bureau";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who is called an “information bureau” in the poem?",
        "optionA": "Father",
        "optionB": "Mother",
        "correctAnswer": "Mother",
        "optionC": "Sister"
      },
      {
        "question": "Who says, “Where is my hat”?",
        "optionA": "Jack",
        "optionB": "Father",
        "correctAnswer": "Father",
        "optionC": "Dave"
      },
      {
        "question": "Who mislaid a book?",
        "optionA": "Dave",
        "optionB": "Sister",
        "optionC": "Jack",
        "correctAnswer": "Jack"
      },
      {
        "question": "Who said, “I’ve lost my specs”?",
        "optionA": "Grandpa",
        "optionB": "Grandma",
        "correctAnswer": "Grandma",
        "optionC": "Sister"
      },
      {
        "question": "Who asks about a tennis ball?",
        "optionA": "Dave",
        "correctAnswer": "Dave",
        "optionB": "Father",
        "optionC": "Jack"
      },
      {
        "question": "Who left the scarf in the hall?",
        "optionA": "Sister",
        "correctAnswer": "Sister",
        "optionB": "Mother",
        "optionC": "Grandma"
      },
      {
        "question": "Who needed gloves right away?",
        "optionA": "Father",
        "optionB": "Jack",
        "optionC": "Grandpa",
        "correctAnswer": "Grandpa"
      },
      {
        "question": "Why do family members go to Mother?",
        "optionA": "To play",
        "optionB": "To sleep",
        "optionC": "To ask questions",
        "correctAnswer": "To ask questions"
      },
      {
        "question": "What kind of person is Mother in the poem?",
        "optionA": "Lazy",
        "optionB": "Caring",
        "correctAnswer": "Caring",
        "optionC": "Angry"
      },
      {
        "question": "What does the poem mainly describe?",
        "optionA": "School life",
        "optionB": "A helpful mother",
        "correctAnswer": "A helpful mother",
        "optionC": "A playground"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The mother is the ______ centre of the house.",
        "optionA": "nerve",
        "correctAnswer": "nerve",
        "optionB": "weak",
        "optionC": "outer"
      },
      {
        "question": "Without mother, the house becomes ______.",
        "optionA": "clean",
        "optionB": "silent",
        "optionC": "topsy-turvy",
        "correctAnswer": "topsy-turvy"
      },
      {
        "question": "Everyone brings their ______ to Mother.",
        "optionA": "toys",
        "optionB": "questions",
        "correctAnswer": "questions",
        "optionC": "books"
      },
      {
        "question": "Mother is loving and very ______.",
        "optionA": "rude",
        "optionB": "kind",
        "correctAnswer": "kind",
        "optionC": "strict"
      },
      {
        "question": "Jack mislaid a ______.",
        "optionA": "pen",
        "optionB": "bag",
        "optionC": "book",
        "correctAnswer": "book"
      },
      {
        "question": "Grandma lost her ______.",
        "optionA": "specs",
        "correctAnswer": "specs",
        "optionB": "shoes",
        "optionC": "scarf"
      },
      {
        "question": "Sister left her scarf in the ______.",
        "optionA": "room",
        "optionB": "hall",
        "correctAnswer": "hall",
        "optionC": "kitchen"
      },
      {
        "question": "Mother helps everyone in the ______.",
        "optionA": "house",
        "correctAnswer": "house",
        "optionB": "school",
        "optionC": "park"
      },
      {
        "question": "Dave was looking for a ______ ball.",
        "optionA": "football",
        "optionB": "cricket",
        "optionC": "tennis",
        "correctAnswer": "tennis"
      },
      {
        "question": "Mother seems to ______ everything.",
        "optionA": "forget",
        "optionB": "know",
        "correctAnswer": "know",
        "optionC": "lose"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Mother is called an information bureau in the poem.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Father was looking for his hat.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jack found his book easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Grandma lost her glasses.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sister lost her gloves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Dave was looking for a tennis ball.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Grandpa needed his gloves right away.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mother does not know where things are.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Everyone goes to Mother for help.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem shows that Mother is helpful and caring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
