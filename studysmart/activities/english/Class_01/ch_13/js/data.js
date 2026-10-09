export const chapter = "Chapter - 13: Corns in Pairs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What did the children ask their mother to make?",
        "optionA": "Rice",
        "optionB": "Sweet corn",
        "correctAnswer": "Sweet corn",
        "optionC": "Chapati"
      },
      {
        "question": "What did the mother decide to give instead?",
        "optionA": "Bread",
        "optionB": "Corn cob",
        "correctAnswer": "Corn cob",
        "optionC": "Milk"
      },
      {
        "question": "Where did the children go with their mother?",
        "optionA": "Park",
        "optionB": "School",
        "optionC": "Market",
        "correctAnswer": "Market"
      },
      {
        "question": "What did the children observe on the corn?",
        "optionA": "Dots",
        "optionB": "Straight rows",
        "correctAnswer": "Straight rows",
        "optionC": "Circles"
      },
      {
        "question": "What did the children do with the corn rows?",
        "optionA": "Counted them",
        "correctAnswer": "Counted them",
        "optionB": "Drew them",
        "optionC": "Cut them"
      },
      {
        "question": "What different numbers did the children get?",
        "optionA": "Same numbers",
        "optionB": "Different numbers",
        "correctAnswer": "Different numbers",
        "optionC": "No numbers"
      },
      {
        "question": "What did the mother ask about the table?",
        "optionA": "Table of 2",
        "correctAnswer": "Table of 2",
        "optionB": "Table of 3",
        "optionC": "Table of 5"
      },
      {
        "question": "What are corn rows always arranged in?",
        "optionA": "Groups",
        "optionB": "Lines",
        "optionC": "Pairs",
        "correctAnswer": "Pairs"
      },
      {
        "question": "What are corns made from?",
        "optionA": "Leaves",
        "optionB": "Flowers",
        "correctAnswer": "Flowers",
        "optionC": "Roots"
      },
      {
        "question": "What did the children say after eating corn?",
        "optionA": "Very bad",
        "optionB": "Very delicious",
        "correctAnswer": "Very delicious",
        "optionC": "Very cold"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Mother asked the children to eat ______.",
        "optionA": "sweet corn",
        "optionB": "corn cob",
        "correctAnswer": "corn cob",
        "optionC": "rice"
      },
      {
        "question": "The children went to the ______ to buy corn.",
        "optionA": "park",
        "optionB": "school",
        "optionC": "market",
        "correctAnswer": "market"
      },
      {
        "question": "Corns are arranged in ______ rows.",
        "optionA": "curved",
        "optionB": "straight",
        "correctAnswer": "straight",
        "optionC": "round"
      },
      {
        "question": "The rows of corn are always in ______.",
        "optionA": "pairs",
        "correctAnswer": "pairs",
        "optionB": "groups",
        "optionC": "lines"
      },
      {
        "question": "The children ______ the rows on the corn.",
        "optionA": "ignored",
        "optionB": "erased",
        "optionC": "counted",
        "correctAnswer": "counted"
      },
      {
        "question": "The number of rows is always in ______.",
        "optionA": "pairs",
        "correctAnswer": "pairs",
        "optionB": "threes",
        "optionC": "fives"
      },
      {
        "question": "Corns are made from ______.",
        "optionA": "seeds",
        "optionB": "flowers",
        "correctAnswer": "flowers",
        "optionC": "leaves"
      },
      {
        "question": "All rows fall in table of ______.",
        "optionA": "one",
        "optionB": "two",
        "correctAnswer": "two",
        "optionC": "three"
      },
      {
        "question": "The children learned the table of ______.",
        "optionA": "2",
        "correctAnswer": "2",
        "optionB": "5",
        "optionC": "10"
      },
      {
        "question": "The children said the corn was very ______.",
        "optionA": "sour",
        "optionB": "delicious",
        "correctAnswer": "delicious",
        "optionC": "hard"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The children asked for sweet corn.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The mother bought three bhuttas.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Corn rows are in straight lines.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rows of corn are in pairs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Corns are made from flowers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children counted the rows.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rows fall in table of 2.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children did not like the corn.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The mother asked about table of 2.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children said the corn was very delicious.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
