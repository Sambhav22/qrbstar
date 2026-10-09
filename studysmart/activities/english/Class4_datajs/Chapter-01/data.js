export const chapter = "Chapter - 1: I Slipped on a Banana Peel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did the poet slip first?",
        "optionA": "On a banana peel",
        "correctAnswer": "On a banana peel",
        "optionB": "On ice",
        "optionC": "On the stairs"
      },
      {
        "question": "What happened after the poet slipped on the banana peel?",
        "optionA": "He laughed",
        "optionB": "He hit his head",
        "correctAnswer": "He hit his head",
        "optionC": "He ran away"
      },
      {
        "question": "Where did the poet slip on ice?",
        "optionA": "On a road",
        "optionB": "On the grass",
        "optionC": "On a patch of ice",
        "correctAnswer": "On a patch of ice"
      },
      {
        "question": "What did the poet slip upon before tumbling?",
        "optionA": "A roller skate",
        "correctAnswer": "A roller skate",
        "optionB": "A chair",
        "optionC": "A table"
      },
      {
        "question": "Where did the poet land after slipping in the bathtub?",
        "optionA": "On his back",
        "optionB": "On his feet",
        "optionC": "On his face",
        "correctAnswer": "On his face"
      },
      {
        "question": "Where did the poet slip inside the house?",
        "optionA": "On the kitchen floor",
        "correctAnswer": "On the kitchen floor",
        "optionB": "On the roof",
        "optionC": "In the bedroom"
      },
      {
        "question": "What did the poet slip on in the basement?",
        "optionA": "Stairs",
        "correctAnswer": "Stairs",
        "optionB": "Wall",
        "optionC": "Door"
      },
      {
        "question": "What does the poet wish he could stop?",
        "optionA": "Slipping",
        "correctAnswer": "Slipping",
        "optionB": "Running",
        "optionC": "Jumping"
      },
      {
        "question": "What does the poet wear now to avoid slipping?",
        "optionA": "Slippers",
        "optionB": "Socks and shoes or boots or clogs or flippers",
        "correctAnswer": "Socks and shoes or boots or clogs or flippers",
        "optionC": "Sandals"
      },
      {
        "question": "What does the poet say he should not wear?",
        "optionA": "Shoes",
        "optionB": "Slippers",
        "correctAnswer": "Slippers",
        "optionC": "Boots"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "I slipped on a ______ peel.",
        "optionA": "apple",
        "optionB": "banana",
        "correctAnswer": "banana",
        "optionC": "mango"
      },
      {
        "question": "I fell and hit my ______.",
        "optionA": "hand",
        "optionB": "head",
        "correctAnswer": "head",
        "optionC": "leg"
      },
      {
        "question": "I slipped upon a patch of ______.",
        "optionA": "ice",
        "correctAnswer": "ice",
        "optionB": "water",
        "optionC": "sand"
      },
      {
        "question": "I slipped upon a roller ______.",
        "optionA": "shoe",
        "optionB": "skate",
        "correctAnswer": "skate",
        "optionC": "board"
      },
      {
        "question": "I landed on my ______.",
        "optionA": "face",
        "correctAnswer": "face",
        "optionB": "back",
        "optionC": "head"
      },
      {
        "question": "I slipped inside the ______.",
        "optionA": "room",
        "optionB": "bathtub",
        "correctAnswer": "bathtub",
        "optionC": "hall"
      },
      {
        "question": "I slipped upon the basement ______.",
        "optionA": "floor",
        "optionB": "wall",
        "optionC": "stairs",
        "correctAnswer": "stairs"
      },
      {
        "question": "I slipped on the kitchen ______.",
        "optionA": "chair",
        "optionB": "table",
        "optionC": "floor",
        "correctAnswer": "floor"
      },
      {
        "question": "I wish that I could stop myself from ______.",
        "optionA": "running",
        "optionB": "slipping",
        "correctAnswer": "slipping",
        "optionC": "jumping"
      },
      {
        "question": "I wear socks and ______.",
        "optionA": "caps",
        "optionB": "shoes",
        "correctAnswer": "shoes",
        "optionC": "gloves"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poet slipped on a banana peel.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet slipped on a patch of ice.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet slipped on a roller skate.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet landed on his face in the bathtub.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet slipped on the basement stairs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet slipped on the kitchen floor.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet wants to keep slipping.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet now wears proper footwear.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet thinks slippers help prevent slipping.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poem shows many slipping incidents.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
