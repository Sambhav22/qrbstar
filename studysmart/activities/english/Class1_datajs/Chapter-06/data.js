export const chapter = "Chapter - 6: Number";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does singular mean?",
        "optionA": "Many",
        "optionB": "One",
        "correctAnswer": "One",
        "optionC": "None"
      },
      {
        "question": "What does plural mean?",
        "optionA": "One",
        "optionB": "Nothing",
        "optionC": "More than one",
        "correctAnswer": "More than one"
      },
      {
        "question": "Which of the following is a plural word?",
        "optionA": "Girl",
        "optionB": "Girls",
        "correctAnswer": "Girls",
        "optionC": "Lady"
      },
      {
        "question": "Which word shows only one?",
        "optionA": "Monkey",
        "correctAnswer": "Monkey",
        "optionB": "Monkeys",
        "optionC": "Boxes"
      },
      {
        "question": "Which is the plural of “toy”?",
        "optionA": "Toy",
        "optionB": "Toys",
        "correctAnswer": "Toys",
        "optionC": "Toyes"
      },
      {
        "question": "Which of the following is singular?",
        "optionA": "Books",
        "optionB": "Boxes",
        "optionC": "Book",
        "correctAnswer": "Book"
      },
      {
        "question": "Which is the plural of “box”?",
        "optionA": "Box",
        "optionB": "Boxes",
        "correctAnswer": "Boxes",
        "optionC": "Boxs"
      },
      {
        "question": "Which word shows more than one?",
        "optionA": "Pencils",
        "correctAnswer": "Pencils",
        "optionB": "Pencil",
        "optionC": "Lady"
      },
      {
        "question": "Which is the plural of “girl”?",
        "optionA": "Girl",
        "optionB": "Girls",
        "correctAnswer": "Girls",
        "optionC": "Girles"
      },
      {
        "question": "Which of the following is singular?",
        "optionA": "Lady",
        "correctAnswer": "Lady",
        "optionB": "Ladies",
        "optionC": "Girls"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Singular means ______.",
        "optionA": "one",
        "correctAnswer": "one",
        "optionB": "many",
        "optionC": "none"
      },
      {
        "question": "Plural means ______ than one.",
        "optionA": "less",
        "optionB": "more",
        "correctAnswer": "more",
        "optionC": "equal"
      },
      {
        "question": "Most plural nouns have ______ added to them.",
        "optionA": "es",
        "optionB": "ing",
        "optionC": "s",
        "correctAnswer": "s"
      },
      {
        "question": "A noun is a ______ word.",
        "optionA": "doing",
        "optionB": "naming",
        "correctAnswer": "naming",
        "optionC": "describing"
      },
      {
        "question": "A noun can show a person, place, ______ or thing.",
        "optionA": "action",
        "optionB": "animal",
        "correctAnswer": "animal",
        "optionC": "color"
      },
      {
        "question": "A horse has ______ legs.",
        "optionA": "four",
        "correctAnswer": "four",
        "optionB": "two",
        "optionC": "three"
      },
      {
        "question": "A bird has ______ legs.",
        "optionA": "four",
        "optionB": "one",
        "optionC": "two",
        "correctAnswer": "two"
      },
      {
        "question": "The children are wearing ______ dresses.",
        "optionA": "blue",
        "optionB": "red",
        "correctAnswer": "red",
        "optionC": "green"
      },
      {
        "question": "This tree has a lot of ______.",
        "optionA": "mangoes",
        "correctAnswer": "mangoes",
        "optionB": "apples",
        "optionC": "bananas"
      },
      {
        "question": "Some boys have ______.",
        "optionA": "books",
        "optionB": "bats",
        "correctAnswer": "bats",
        "optionC": "pens"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Singular means one.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Plural means more than one.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books is a singular word.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Monkey is a singular word.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Boxes is a plural word.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A horse has four legs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A bird has four legs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A noun is a naming word.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tree has mangoes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Girls means one girl.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
