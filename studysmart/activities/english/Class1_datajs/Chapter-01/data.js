export const chapter = "Chapter - 1: Simple Simon";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who met the pieman going to the fair?",
        "optionA": "Simple Simon",
        "correctAnswer": "Simple Simon",
        "optionB": "The pieman",
        "optionC": "A seller"
      },
      {
        "question": "Where was the pieman going?",
        "optionA": "To the fair",
        "correctAnswer": "To the fair",
        "optionB": "To school",
        "optionC": "To home"
      },
      {
        "question": "What did Simple Simon ask the pieman?",
        "optionA": "Show me your bag",
        "optionB": "Give me money",
        "optionC": "Let me taste your ware",
        "correctAnswer": "Let me taste your ware"
      },
      {
        "question": "What did the pieman ask from Simple Simon?",
        "optionA": "A toy",
        "optionB": "A penny",
        "correctAnswer": "A penny",
        "optionC": "A book"
      },
      {
        "question": "What did Simple Simon say about money?",
        "optionA": "I have some",
        "optionB": "I have many",
        "optionC": "I have not any",
        "correctAnswer": "I have not any"
      },
      {
        "question": "What do we need to buy things in the market?",
        "optionA": "Money",
        "correctAnswer": "Money",
        "optionB": "Air",
        "optionC": "Water"
      },
      {
        "question": "What is a pieman?",
        "optionA": "A buyer",
        "optionB": "A pie seller",
        "correctAnswer": "A pie seller",
        "optionC": "A teacher"
      },
      {
        "question": "What does the word “penny” mean?",
        "optionA": "Coin",
        "correctAnswer": "Coin",
        "optionB": "Food",
        "optionC": "Bag"
      },
      {
        "question": "What does “ware” mean?",
        "optionA": "A thing",
        "correctAnswer": "A thing",
        "optionB": "A place",
        "optionC": "A person"
      },
      {
        "question": "What does “indeed” mean?",
        "optionA": "Slowly",
        "optionB": "Never",
        "optionC": "In fact",
        "correctAnswer": "In fact"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Simple Simon met a ______.",
        "optionA": "teacher",
        "optionB": "pieman",
        "correctAnswer": "pieman",
        "optionC": "boy"
      },
      {
        "question": "The pieman was going to the ______.",
        "optionA": "fair",
        "correctAnswer": "fair",
        "optionB": "school",
        "optionC": "park"
      },
      {
        "question": "“Let me taste your ______.”",
        "optionA": "ware",
        "correctAnswer": "ware",
        "optionB": "bag",
        "optionC": "pen"
      },
      {
        "question": "“Show me your ______.”",
        "optionA": "toy",
        "optionB": "book",
        "optionC": "penny",
        "correctAnswer": "penny"
      },
      {
        "question": "Simple Simon said, “I have not ______.”",
        "optionA": "many",
        "optionB": "any",
        "correctAnswer": "any",
        "optionC": "some"
      },
      {
        "question": "We need ______ to buy things.",
        "optionA": "money",
        "correctAnswer": "money",
        "optionB": "air",
        "optionC": "oxygen"
      },
      {
        "question": "A pieman is a ______ seller.",
        "optionA": "toy",
        "optionB": "fruit",
        "optionC": "pie",
        "correctAnswer": "pie"
      },
      {
        "question": "A penny is a ______.",
        "optionA": "coin",
        "correctAnswer": "coin",
        "optionB": "fruit",
        "optionC": "book"
      },
      {
        "question": "Ware means a ______.",
        "optionA": "animal",
        "optionB": "thing",
        "correctAnswer": "thing",
        "optionC": "place"
      },
      {
        "question": "Indeed means ______.",
        "optionA": "in fact",
        "correctAnswer": "in fact",
        "optionB": "slowly",
        "optionC": "never"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Simple Simon met a pieman.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The pieman was going to the fair.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Simple Simon had a penny.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Simple Simon wanted to taste the ware.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The pieman asked for a penny.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A pieman is a pie seller.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A penny means a coin.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Ware means a thing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Indeed means in fact.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "We do not need money to buy things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
