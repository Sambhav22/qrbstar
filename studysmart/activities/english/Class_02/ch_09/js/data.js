export const chapter = "Chapter - 9: The Story of Lamppost";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did Frank’s house stand?",
        "optionA": "In the middle of the town",
        "optionB": "At the edge of the town",
        "correctAnswer": "At the edge of the town",
        "optionC": "Near the school"
      },
      {
        "question": "Why did the old woman fall on the road?",
        "optionA": "Because it was dark",
        "correctAnswer": "Because it was dark",
        "optionB": "Because she was running",
        "optionC": "Because it was raining"
      },
      {
        "question": "What did Frank bring from his house?",
        "optionA": "A lamp",
        "correctAnswer": "A lamp",
        "optionB": "A torch",
        "optionC": "A candle"
      },
      {
        "question": "Who attacked the little boy?",
        "optionA": "A dog",
        "optionB": "A jackal",
        "correctAnswer": "A jackal",
        "optionC": "A tiger"
      },
      {
        "question": "Where did Frank hide when he saw the boy?",
        "optionA": "Behind a wall",
        "optionB": "Inside a house",
        "optionC": "Behind a tree",
        "correctAnswer": "Behind a tree"
      },
      {
        "question": "Why did Frank think of putting a lamp?",
        "optionA": "To decorate the street",
        "optionB": "To play at night",
        "optionC": "To help people see in the dark",
        "correctAnswer": "To help people see in the dark"
      },
      {
        "question": "What did Frank throw to save the boy?",
        "optionA": "Water",
        "optionB": "Stones",
        "correctAnswer": "Stones",
        "optionC": "Food"
      },
      {
        "question": "What did people say about the lamp at first?",
        "optionA": "It was useful",
        "optionB": "It was too bright",
        "optionC": "It was a waste of oil",
        "correctAnswer": "It was a waste of oil"
      },
      {
        "question": "What happened after the lamp was put?",
        "optionA": "People stopped going out",
        "optionB": "People could see clearly in the dark",
        "correctAnswer": "People could see clearly in the dark",
        "optionC": "Animals came more often"
      },
      {
        "question": "What did the municipality do after seeing Frank’s idea?",
        "optionA": "Erected lamps on streets",
        "correctAnswer": "Erected lamps on streets",
        "optionB": "Removed the lamp",
        "optionC": "Closed the road"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Frank lived near the ______.",
        "optionA": "forest",
        "correctAnswer": "forest",
        "optionB": "market",
        "optionC": "river"
      },
      {
        "question": "The old woman ______ and fell.",
        "optionA": "jumped",
        "optionB": "tripped",
        "correctAnswer": "tripped",
        "optionC": "ran"
      },
      {
        "question": "The boy was ______ in the street.",
        "optionA": "sleeping",
        "optionB": "running",
        "correctAnswer": "running",
        "optionC": "eating"
      },
      {
        "question": "The jackal tried to ______ the boy away.",
        "optionA": "help",
        "optionB": "push",
        "optionC": "carry",
        "correctAnswer": "carry"
      },
      {
        "question": "Frank got help from other ______.",
        "optionA": "animals",
        "optionB": "people",
        "correctAnswer": "people",
        "optionC": "children"
      },
      {
        "question": "He saw a ______ near the square.",
        "optionA": "pole",
        "correctAnswer": "pole",
        "optionB": "bench",
        "optionC": "shop"
      },
      {
        "question": "Frank tied the lamp on the ______.",
        "optionA": "tree",
        "optionB": "pole",
        "correctAnswer": "pole",
        "optionC": "roof"
      },
      {
        "question": "The lamp gave ______ to people.",
        "optionA": "light",
        "correctAnswer": "light",
        "optionB": "sound",
        "optionC": "heat"
      },
      {
        "question": "No bad ______ happened after that.",
        "optionA": "games",
        "optionB": "incidents",
        "correctAnswer": "incidents",
        "optionC": "talks"
      },
      {
        "question": "The idea helped the whole ______.",
        "optionA": "school",
        "optionB": "forest",
        "optionC": "town",
        "correctAnswer": "town"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "There were no bulbs long ago.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Frank ignored the old woman.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A jackal attacked the little boy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Frank hid behind a tree.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Frank ran away from the scene.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Frank kept filling oil in the lamp every evening.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People first supported Frank’s idea.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lamp helped people see in the dark.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "No bad incidents took place after the lamp was put.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Lamps were later put up in the streets by the municipality.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
