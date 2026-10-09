export const chapter = "Chapter - 1: Things around us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What are things around us made of?",
        "optionA": "Only wood",
        "optionB": "Different materials",
        "optionC": "Only paper",
        "correctAnswer": "Different materials"
      },
      {
        "question": "Which of the following is a non-living thing?",
        "optionA": "Dog",
        "optionB": "Plant",
        "optionC": "Table",
        "correctAnswer": "Table"
      },
      {
        "question": "Which of these is a natural thing?",
        "optionA": "Toy",
        "optionB": "Sun",
        "optionC": "Pen",
        "correctAnswer": "Sun"
      },
      {
        "question": "What do living things need to live?",
        "optionA": "Food, air, and water",
        "optionB": "Plastic and paper",
        "optionC": "Toys and books",
        "correctAnswer": "Food, air, and water"
      },
      {
        "question": "Which of the following grows and gives birth to young ones?",
        "optionA": "Rock",
        "optionB": "Human",
        "optionC": "Pencil",
        "correctAnswer": "Human"
      },
      {
        "question": "What kind of things do not breathe or move?",
        "optionA": "Living things",
        "optionB": "Birds",
        "optionC": "Non-living things",
        "correctAnswer": "Non-living things"
      },
      {
        "question": "What is recycling?",
        "optionA": "Throwing old things away",
        "optionB": "Using old things again",
        "optionC": "Burning rubbish",
        "correctAnswer": "Using old things again"
      },
      {
        "question": "Which of these can be recycled?",
        "optionA": "Air",
        "optionB": "Water",
        "optionC": "Paper",
        "correctAnswer": "Paper"
      },
      {
        "question": "Which one of the following is man-made?",
        "optionA": "Cloud",
        "optionB": "Tree",
        "optionC": "Teddy bear",
        "correctAnswer": "Teddy bear"
      },
      {
        "question": "What helps keep the Earth clean?",
        "optionA": "Playing",
        "optionB": "Recycling",
        "optionC": "Painting",
        "correctAnswer": "Recycling"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A ___ is a small thing.",
        "optionA": "Rock",
        "optionB": "Tree",
        "optionC": "Pebble",
        "correctAnswer": "Pebble"
      },
      {
        "question": "A ___ is used to sleep on and is soft.",
        "optionA": "Pillow",
        "optionB": "Book",
        "optionC": "Pen",
        "correctAnswer": "Pillow"
      },
      {
        "question": "___ things do not give birth to babies.",
        "optionA": "Living",
        "optionB": "Non-living",
        "optionC": "Natural",
        "correctAnswer": "Non-living"
      },
      {
        "question": "We can make new things from ___ things.",
        "optionA": "Fresh",
        "optionB": "Old",
        "optionC": "Big",
        "correctAnswer": "Old"
      },
      {
        "question": "Natural things are not made by ___.",
        "optionA": "Birds",
        "optionB": "Plants",
        "optionC": "People",
        "correctAnswer": "People"
      },
      {
        "question": "We use ___ things to make many useful items.",
        "optionA": "Natural",
        "optionB": "Soft",
        "optionC": "Big",
        "correctAnswer": "Natural"
      },
      {
        "question": "A ___ is an example of something hard.",
        "optionA": "Rock",
        "optionB": "Feather",
        "optionC": "Pillow",
        "correctAnswer": "Rock"
      },
      {
        "question": "Things made by man are called ___ things.",
        "optionA": "Hard",
        "optionB": "Man-made",
        "optionC": "Natural",
        "correctAnswer": "Man-made"
      },
      {
        "question": "___ can be found in both big and small forms.",
        "optionA": "Animals",
        "optionB": "Things",
        "optionC": "People",
        "correctAnswer": "Things"
      },
      {
        "question": "We should recycle to save the ___.",
        "optionA": "School",
        "optionB": "Environment",
        "optionC": "Toys",
        "correctAnswer": "Environment"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "All living things can move and feel.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A teddy bear is a natural thing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The moon and the sun are man-made things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Non-living things need water to live.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Recycling reduces the amount of rubbish.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Man-made things are found in nature.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A ball and a pen are examples of non-living things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Natural things are made by humans.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Recycling helps in keeping our environment clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A tree is a non-living thing because it cannot move.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
