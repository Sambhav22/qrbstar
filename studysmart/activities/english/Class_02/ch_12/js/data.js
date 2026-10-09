export const chapter = "Chapter - 12: The Dog in the Manger";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the dog go round the streets?",
        "optionA": "To play",
        "optionB": "To eat",
        "optionC": "To find a place to rest",
        "correctAnswer": "To find a place to rest"
      },
      {
        "question": "What did the dog find to sleep in?",
        "optionA": "A basket",
        "optionB": "A manger",
        "correctAnswer": "A manger",
        "optionC": "A box"
      },
      {
        "question": "What was the dog looking for because of the heat?",
        "optionA": "A warm place",
        "optionB": "A noisy place",
        "optionC": "A cool place",
        "correctAnswer": "A cool place"
      },
      {
        "question": "What did the dog do after lying on the hay?",
        "optionA": "Started eating",
        "optionB": "Fell asleep",
        "correctAnswer": "Fell asleep",
        "optionC": "Barked loudly"
      },
      {
        "question": "Why did the ox come to the manger?",
        "optionA": "To sleep",
        "optionB": "To eat hay",
        "correctAnswer": "To eat hay",
        "optionC": "To play"
      },
      {
        "question": "How did the ox speak to the dog at first?",
        "optionA": "Politely",
        "correctAnswer": "Politely",
        "optionB": "Rudely",
        "optionC": "Angrily"
      },
      {
        "question": "What did the dog say he wanted instead of food?",
        "optionA": "Sleep",
        "correctAnswer": "Sleep",
        "optionB": "Play",
        "optionC": "Water"
      },
      {
        "question": "What did the dog do when the ox came closer?",
        "optionA": "Ran away",
        "optionB": "Barked and bit him",
        "correctAnswer": "Barked and bit him",
        "optionC": "Slept quietly"
      },
      {
        "question": "Why was the ox disappointed?",
        "optionA": "He was tired",
        "optionB": "He lost his way",
        "optionC": "He could not eat his hay",
        "correctAnswer": "He could not eat his hay"
      },
      {
        "question": "Who finally helped the ox get his food?",
        "optionA": "The dog",
        "optionB": "The farmer",
        "correctAnswer": "The farmer",
        "optionC": "A boy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The dog wanted a ______ place to rest.",
        "optionA": "hot",
        "optionB": "cool",
        "correctAnswer": "cool",
        "optionC": "dirty"
      },
      {
        "question": "The dog lay on ______ hay.",
        "optionA": "rough",
        "optionB": "soft and wet",
        "correctAnswer": "soft and wet",
        "optionC": "dry"
      },
      {
        "question": "The ox had worked since ______.",
        "optionA": "evening",
        "optionB": "night",
        "optionC": "morning",
        "correctAnswer": "morning"
      },
      {
        "question": "The dog was having an afternoon ______.",
        "optionA": "nap",
        "correctAnswer": "nap",
        "optionB": "game",
        "optionC": "walk"
      },
      {
        "question": "The ox came to have his ______.",
        "optionA": "sleep",
        "optionB": "food",
        "correctAnswer": "food",
        "optionC": "bath"
      },
      {
        "question": "The ox was ______ and hungry.",
        "optionA": "fresh",
        "optionB": "tired",
        "correctAnswer": "tired",
        "optionC": "happy"
      },
      {
        "question": "The dog was ______ to go away.",
        "optionA": "unwilling",
        "correctAnswer": "unwilling",
        "optionB": "ready",
        "optionC": "eager"
      },
      {
        "question": "The dog barked ______ at the ox.",
        "optionA": "softly",
        "optionB": "slowly",
        "optionC": "loudly",
        "correctAnswer": "loudly"
      },
      {
        "question": "The ox gave up hope of eating ______.",
        "optionA": "grass",
        "optionB": "straw",
        "correctAnswer": "straw",
        "optionC": "leaves"
      },
      {
        "question": "The farmer ______ the dog away.",
        "optionA": "called",
        "optionB": "chased",
        "correctAnswer": "chased",
        "optionC": "fed"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The dog was looking for a place to sleep.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The manger belonged to the ox.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog allowed the ox to eat the hay.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The ox was tired after working in the field.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog was kind to the ox.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The dog bit the ox on the nose.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The ox stopped asking the dog and felt disappointed.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The farmer came and chased the dog away.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog left the manger on his own.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The ox finally got his food after the farmer came.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
