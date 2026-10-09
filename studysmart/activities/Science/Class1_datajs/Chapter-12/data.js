export const chapter = "Chapter - 12: Materials";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which of the following is used to make drawings?",
        "optionA": "Metal",
        "optionB": "Plastic",
        "optionC": "Paper",
        "correctAnswer": "Paper"
      },
      {
        "question": "Which material is used to make pots?",
        "optionA": "Cloth",
        "optionB": "Metal",
        "optionC": "Wood",
        "correctAnswer": "Metal"
      },
      {
        "question": "What kind of material is used to make clothes?",
        "optionA": "Cloth",
        "optionB": "Wood",
        "optionC": "Paper",
        "correctAnswer": "Cloth"
      },
      {
        "question": "What do we use every day?",
        "optionA": "Mountains",
        "optionB": "Toys, clothes, houses",
        "optionC": "Animals",
        "correctAnswer": "Toys, clothes, houses"
      },
      {
        "question": "Which of these can soak water?",
        "optionA": "Plastic",
        "optionB": "Glass",
        "optionC": "Sponge",
        "correctAnswer": "Sponge"
      },
      {
        "question": "Which object is made of plastic?",
        "optionA": "Spoon",
        "optionB": "Bottle",
        "optionC": "Table",
        "correctAnswer": "Bottle"
      },
      {
        "question": "What type of material is sandpaper?",
        "optionA": "Smooth",
        "optionB": "Rough",
        "optionC": "Soft",
        "correctAnswer": "Rough"
      },
      {
        "question": "Which of the following materials is soft?",
        "optionA": "Rock",
        "optionB": "Glass",
        "optionC": "Pillow",
        "correctAnswer": "Pillow"
      },
      {
        "question": "Which of the following keeps water out?",
        "optionA": "Sponge",
        "optionB": "Plastic",
        "optionC": "Paper",
        "correctAnswer": "Plastic"
      },
      {
        "question": "A book is made of:",
        "optionA": "Cloth",
        "optionB": "Metal",
        "optionC": "Paper",
        "correctAnswer": "Paper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "___ is used to make shirts.",
        "optionA": "Plastic",
        "optionB": "Cloth",
        "optionC": "Paper",
        "correctAnswer": "Cloth"
      },
      {
        "question": "___ is smooth to touch.",
        "optionA": "Glass",
        "optionB": "Sandpaper",
        "optionC": "Sponge",
        "correctAnswer": "Glass"
      },
      {
        "question": "___ is soft and fluffy.",
        "optionA": "Rock",
        "optionB": "Pillow",
        "optionC": "Metal",
        "correctAnswer": "Pillow"
      },
      {
        "question": "We use different ___ to make things.",
        "optionA": "Shapes",
        "optionB": "Colours",
        "optionC": "Materials",
        "correctAnswer": "Materials"
      },
      {
        "question": "___ is used to make drawings.",
        "optionA": "Metal",
        "optionB": "Paper",
        "optionC": "Cloth",
        "correctAnswer": "Paper"
      },
      {
        "question": "Spoons are made of ___.",
        "optionA": "Wood",
        "optionB": "Plastic",
        "optionC": "Metal",
        "correctAnswer": "Metal"
      },
      {
        "question": "___ is a rough material.",
        "optionA": "Glass",
        "optionB": "Sandpaper",
        "optionC": "Paper",
        "correctAnswer": "Sandpaper"
      },
      {
        "question": "___ things are used in making tables.",
        "optionA": "Plastic",
        "optionB": "Wood",
        "optionC": "Cloth",
        "correctAnswer": "Wood"
      },
      {
        "question": "We see many ___ around us every day.",
        "optionA": "Foods",
        "optionB": "Animals",
        "optionC": "Things",
        "correctAnswer": "Things"
      },
      {
        "question": "A ___ can soak water easily.",
        "optionA": "Spoon",
        "optionB": "Sponge",
        "optionC": "Rock",
        "correctAnswer": "Sponge"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Wood is used to make clothes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Metal is used to make pots and spoons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "All things around us are made of the same material.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Plastic is used to make toys and bottles.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A book is made of cloth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We do not use any material in our daily life.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A rock is a soft object.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A pillow is soft and used for sleeping.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Some things are smooth and some are rough.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Sandpaper is smooth to touch.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
