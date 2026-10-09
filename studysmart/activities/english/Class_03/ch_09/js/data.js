export const chapter = "Chapter - 9: The Baker Who Cheated";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who lived in the small town and did business together?",
        "optionA": "Farmer and baker",
        "correctAnswer": "Farmer and baker",
        "optionB": "Farmer and doctor",
        "optionC": "Teacher and baker"
      },
      {
        "question": "What did the farmer bring to the baker every day?",
        "optionA": "Butter",
        "correctAnswer": "Butter",
        "optionB": "Milk",
        "optionC": "Oil"
      },
      {
        "question": "What did the baker give the farmer in return?",
        "optionA": "Cake",
        "optionB": "Bread loaf",
        "correctAnswer": "Bread loaf",
        "optionC": "Biscuits"
      },
      {
        "question": "After many weeks, what did the baker decide to do?",
        "optionA": "Stop business",
        "optionB": "Go home",
        "optionC": "Weigh the butter",
        "correctAnswer": "Weigh the butter"
      },
      {
        "question": "What did the baker say when he found the butter less?",
        "optionA": "Thank you",
        "optionB": "You have been cheating me",
        "correctAnswer": "You have been cheating me",
        "optionC": "Come tomorrow"
      },
      {
        "question": "Where did the baker take the farmer?",
        "optionA": "School",
        "optionB": "Court",
        "correctAnswer": "Court",
        "optionC": "Market"
      },
      {
        "question": "Who asked, “Do you have a scale to weigh the butter?”",
        "optionA": "Farmer",
        "optionB": "Baker",
        "optionC": "Judge",
        "correctAnswer": "Judge"
      },
      {
        "question": "What problem did the baker have with his tools?",
        "optionA": "His weights were lost",
        "correctAnswer": "His weights were lost",
        "optionB": "His scale was broken",
        "optionC": "His shop was closed"
      },
      {
        "question": "What did the farmer use to weigh the butter?",
        "optionA": "Stone",
        "optionB": "Bread loaf",
        "correctAnswer": "Bread loaf",
        "optionC": "Box"
      },
      {
        "question": "What did the judge say about the farmer?",
        "optionA": "He is guilty",
        "optionB": "He is innocent",
        "correctAnswer": "He is innocent",
        "optionC": "He is wrong"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The farmer and baker did ______ with each other.",
        "optionA": "farming",
        "optionB": "fighting",
        "optionC": "business",
        "correctAnswer": "business"
      },
      {
        "question": "The farmer gave ______ kilogram of butter.",
        "optionA": "two",
        "optionB": "one",
        "correctAnswer": "one",
        "optionC": "three"
      },
      {
        "question": "The baker gave one kilogram of ______ loaf.",
        "optionA": "cake",
        "optionB": "bread",
        "correctAnswer": "bread",
        "optionC": "biscuit"
      },
      {
        "question": "The baker checked the butter ______ in a while.",
        "optionA": "once",
        "correctAnswer": "once",
        "optionB": "twice",
        "optionC": "never"
      },
      {
        "question": "The baker said the butter was ______ in quantity.",
        "optionA": "more",
        "optionB": "equal",
        "optionC": "less",
        "correctAnswer": "less"
      },
      {
        "question": "The baker took the farmer to the ______.",
        "optionA": "school",
        "optionB": "market",
        "optionC": "court",
        "correctAnswer": "court"
      },
      {
        "question": "The baker had lost his ______.",
        "optionA": "scale",
        "optionB": "weights",
        "correctAnswer": "weights",
        "optionC": "shop"
      },
      {
        "question": "The farmer used ______ as a weight.",
        "optionA": "bread loaf",
        "correctAnswer": "bread loaf",
        "optionB": "stone",
        "optionC": "milk"
      },
      {
        "question": "The judge said the baker cheated ______ purpose.",
        "optionA": "by",
        "optionB": "on",
        "correctAnswer": "on",
        "optionC": "for"
      },
      {
        "question": "The farmer was found ______.",
        "optionA": "guilty",
        "optionB": "innocent",
        "correctAnswer": "innocent",
        "optionC": "wrong"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The farmer and baker were doing business with each other.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The baker measured the butter every day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The farmer always gave one kilogram of butter.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The baker accused the farmer of cheating.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The farmer had proper weights to measure butter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The farmer used bread to weigh the butter.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The judge believed that the farmer cheated.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The baker had been cheating the farmer.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The judge fined the farmer.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The story teaches us to be honest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
