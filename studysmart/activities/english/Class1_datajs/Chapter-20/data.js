export const chapter = "Chapter - 20: The Honeybee and the Parrot";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was collecting nectar near the river?",
        "optionA": "The parrot",
        "optionB": "The honeybee",
        "correctAnswer": "The honeybee",
        "optionC": "The hunter"
      },
      {
        "question": "Where did the honeybee fall?",
        "optionA": "On the tree",
        "optionB": "In the water",
        "correctAnswer": "In the water",
        "optionC": "On the ground"
      },
      {
        "question": "Why could the honeybee not fly?",
        "optionA": "She was tired",
        "optionB": "She was hungry",
        "optionC": "Her wings became wet",
        "correctAnswer": "Her wings became wet"
      },
      {
        "question": "Who saw the honeybee in trouble?",
        "optionA": "The hunter",
        "optionB": "The parrot",
        "correctAnswer": "The parrot",
        "optionC": "The boy"
      },
      {
        "question": "What did the parrot pluck to help the honeybee?",
        "optionA": "A leaf",
        "correctAnswer": "A leaf",
        "optionB": "A flower",
        "optionC": "A fruit"
      },
      {
        "question": "Where was the parrot sitting?",
        "optionA": "On a tree",
        "correctAnswer": "On a tree",
        "optionB": "Near the river",
        "optionC": "On the ground"
      },
      {
        "question": "Who came after a few days?",
        "optionA": "A farmer",
        "optionB": "A hunter",
        "correctAnswer": "A hunter",
        "optionC": "A teacher"
      },
      {
        "question": "What was the hunter looking for?",
        "optionA": "Fish",
        "optionB": "Bees",
        "optionC": "Birds",
        "correctAnswer": "Birds"
      },
      {
        "question": "At whom did the hunter take aim?",
        "optionA": "The honeybee",
        "optionB": "The parrot",
        "correctAnswer": "The parrot",
        "optionC": "The tree"
      },
      {
        "question": "What did the honeybee do to save the parrot?",
        "optionA": "She flew away",
        "optionB": "She stung the hunter",
        "correctAnswer": "She stung the hunter",
        "optionC": "She hid"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The honeybee was collecting ______ near the river.",
        "optionA": "water",
        "optionB": "nectar",
        "correctAnswer": "nectar",
        "optionC": "leaves"
      },
      {
        "question": "The honeybee fell into the ______.",
        "optionA": "water",
        "correctAnswer": "water",
        "optionB": "tree",
        "optionC": "nest"
      },
      {
        "question": "Her wings became ______.",
        "optionA": "dry",
        "optionB": "wet",
        "correctAnswer": "wet",
        "optionC": "strong"
      },
      {
        "question": "The parrot felt ______ on the honeybee.",
        "optionA": "anger",
        "optionB": "fear",
        "optionC": "pity",
        "correctAnswer": "pity"
      },
      {
        "question": "The parrot threw a ______ near the honeybee.",
        "optionA": "flower",
        "optionB": "leaf",
        "correctAnswer": "leaf",
        "optionC": "fruit"
      },
      {
        "question": "The honeybee climbed up the ______.",
        "optionA": "leaf",
        "correctAnswer": "leaf",
        "optionB": "branch",
        "optionC": "stone"
      },
      {
        "question": "A ______ came with a gun.",
        "optionA": "hunter",
        "correctAnswer": "hunter",
        "optionB": "farmer",
        "optionC": "teacher"
      },
      {
        "question": "The hunter was looking for ______.",
        "optionA": "animals",
        "optionB": "birds",
        "correctAnswer": "birds",
        "optionC": "fish"
      },
      {
        "question": "The honeybee stung the hunter’s ______.",
        "optionA": "leg",
        "optionB": "head",
        "optionC": "hand",
        "correctAnswer": "hand"
      },
      {
        "question": "The parrot thanked the ______.",
        "optionA": "hunter",
        "optionB": "honeybee",
        "correctAnswer": "honeybee",
        "optionC": "boy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The honeybee was collecting nectar near the river.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The honeybee fell into the water.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The parrot ignored the honeybee.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The parrot threw a leaf to help.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The honeybee could fly immediately after falling.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A hunter came after a few days.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The hunter wanted to shoot the parrot.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The honeybee helped the hunter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The honeybee stung the hunter.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The honeybee and the parrot helped each other.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
