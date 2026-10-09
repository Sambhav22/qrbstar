export const chapter = "Chapter - 16: Mom and I";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who does everything for the child?",
        "optionA": "Teacher",
        "optionB": "Mother",
        "correctAnswer": "Mother",
        "optionC": "Friend"
      },
      {
        "question": "Who listens to the child’s stories?",
        "optionA": "Brother",
        "optionB": "Mother",
        "correctAnswer": "Mother",
        "optionC": "Father"
      },
      {
        "question": "What does the child want the mother to do?",
        "optionA": "Sleep",
        "optionB": "Cook",
        "optionC": "Sit and play",
        "correctAnswer": "Sit and play"
      },
      {
        "question": "What does the mother give when the child is sad?",
        "optionA": "Love",
        "correctAnswer": "Love",
        "optionB": "Toys",
        "optionC": "Books"
      },
      {
        "question": "What does the mother forget for her child?",
        "optionA": "Work",
        "optionB": "Needs and pains",
        "correctAnswer": "Needs and pains",
        "optionC": "Food"
      },
      {
        "question": "What does the child enjoy sharing with the mother?",
        "optionA": "Clothes",
        "optionB": "Books",
        "optionC": "Hugs and giggles",
        "correctAnswer": "Hugs and giggles"
      },
      {
        "question": "What does the mother always know?",
        "optionA": "Games",
        "optionB": "What the child needs",
        "correctAnswer": "What the child needs",
        "optionC": "Stories"
      },
      {
        "question": "What does the mother do when the child tells stories?",
        "optionA": "Ignores",
        "optionB": "Sleeps",
        "optionC": "Listens with a smile",
        "correctAnswer": "Listens with a smile"
      },
      {
        "question": "What is the greatest joy mentioned in the chapter?",
        "optionA": "Being with mother",
        "correctAnswer": "Being with mother",
        "optionB": "Playing games",
        "optionC": "Watching TV"
      },
      {
        "question": "What should a child do for the mother?",
        "optionA": "Ignore",
        "optionB": "Thank her",
        "correctAnswer": "Thank her",
        "optionC": "Leave her"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Mother listens with a ______ on her face.",
        "optionA": "smile",
        "correctAnswer": "smile",
        "optionB": "anger",
        "optionC": "fear"
      },
      {
        "question": "Mother cares for the child in ______ way.",
        "optionA": "some",
        "optionB": "every",
        "correctAnswer": "every",
        "optionC": "no"
      },
      {
        "question": "There can be no greater ______ than being with mother.",
        "optionA": "pain",
        "optionB": "fear",
        "optionC": "joy",
        "correctAnswer": "joy"
      },
      {
        "question": "Mother forgets her own ______ and pains.",
        "optionA": "toys",
        "optionB": "needs",
        "correctAnswer": "needs",
        "optionC": "books"
      },
      {
        "question": "The child wants mother to ______ with him.",
        "optionA": "run",
        "optionB": "sit",
        "correctAnswer": "sit",
        "optionC": "jump"
      },
      {
        "question": "The child shares ______ and giggles.",
        "optionA": "hugs",
        "correctAnswer": "hugs",
        "optionB": "food",
        "optionC": "clothes"
      },
      {
        "question": "Mother listens to the child’s ______.",
        "optionA": "games",
        "optionB": "songs",
        "optionC": "stories",
        "correctAnswer": "stories"
      },
      {
        "question": "Mother knows what the child ______.",
        "optionA": "eats",
        "optionB": "needs",
        "correctAnswer": "needs",
        "optionC": "plays"
      },
      {
        "question": "The child sees mother work throughout the ______.",
        "optionA": "day",
        "correctAnswer": "day",
        "optionB": "night",
        "optionC": "week"
      },
      {
        "question": "A child should ______ the mother.",
        "optionA": "thank",
        "correctAnswer": "thank",
        "optionB": "ignore",
        "optionC": "shout"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Mother works throughout the day.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mother does not listen to the child’s stories.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mother gives love when the child is sad.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child wants to play with the mother.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mother forgets her own needs for the child.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child does not enjoy mother’s hugs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mother knows what the child needs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem shows love between mother and child.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child ignores the mother.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Being with mother is a great joy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
