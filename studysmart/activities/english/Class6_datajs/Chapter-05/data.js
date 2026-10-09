export const chapter = "Chapter - 5: What is What";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who lived on the banks of the turbid Amazon along with the Hedgehog and Tortoise?",
        "optionA": "Lion",
        "optionB": "Painted Jaguar",
        "correctAnswer": "Painted Jaguar",
        "optionC": "Elephant"
      },
      {
        "question": "What did Painted Jaguar ask the two animals?",
        "optionA": "What they eat",
        "optionB": "Where they live",
        "optionC": "Which one is Hedgehog and which is Tortoise",
        "correctAnswer": "Which one is Hedgehog and which is Tortoise"
      },
      {
        "question": "Where were the Hedgehog and Tortoise sitting when Jaguar found them?",
        "optionA": "On a rock",
        "optionB": "Under a fallen tree trunk",
        "correctAnswer": "Under a fallen tree trunk",
        "optionC": "Near a cave"
      },
      {
        "question": "What did Hedgehog do when Jaguar came near?",
        "optionA": "Curled into a ball",
        "correctAnswer": "Curled into a ball",
        "optionB": "Ran away",
        "optionC": "Jumped into water"
      },
      {
        "question": "What did Tortoise do to protect itself?",
        "optionA": "Hid in its shell",
        "correctAnswer": "Hid in its shell",
        "optionB": "Climbed a tree",
        "optionC": "Ran fast"
      },
      {
        "question": "What mistake did Jaguar make while attacking Hedgehog?",
        "optionA": "He dropped it in water",
        "optionB": "He scooped it with his paw",
        "correctAnswer": "He scooped it with his paw",
        "optionC": "He ran away"
      },
      {
        "question": "What happened to Jaguar’s paw?",
        "optionA": "It got wet",
        "optionB": "It got burned",
        "optionC": "It got full of prickles",
        "correctAnswer": "It got full of prickles"
      },
      {
        "question": "Where did the Tortoise go to escape?",
        "optionA": "Into the forest",
        "optionB": "Into the river (Amazon)",
        "correctAnswer": "Into the river (Amazon)",
        "optionC": "Into a hole"
      },
      {
        "question": "What did Jaguar do after getting confused?",
        "optionA": "Slept",
        "optionB": "Ran away",
        "optionC": "Went to his mother",
        "correctAnswer": "Went to his mother"
      },
      {
        "question": "How did Jaguar feel after listening to the animals repeatedly?",
        "optionA": "Happy",
        "optionB": "Confused (mixy)",
        "correctAnswer": "Confused (mixy)",
        "optionC": "Angry"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The story is set in the ______ times.",
        "optionA": "modern",
        "optionB": "High and Far-Off",
        "correctAnswer": "High and Far-Off",
        "optionC": "ancient city"
      },
      {
        "question": "The Hedgehog lived on the banks of the ______ Amazon.",
        "optionA": "turbid",
        "correctAnswer": "turbid",
        "optionB": "clear",
        "optionC": "dry"
      },
      {
        "question": "The Hedgehog curled itself into a ______.",
        "optionA": "line",
        "optionB": "ball",
        "correctAnswer": "ball",
        "optionC": "shape"
      },
      {
        "question": "The Tortoise pulled its head and feet into its ______.",
        "optionA": "body",
        "optionB": "shell",
        "correctAnswer": "shell",
        "optionC": "hole"
      },
      {
        "question": "Jaguar’s mother told him to drop the Hedgehog into the ______.",
        "optionA": "forest",
        "optionB": "sand",
        "optionC": "water",
        "correctAnswer": "water"
      },
      {
        "question": "Jaguar tried to scoop the Hedgehog with his ______.",
        "optionA": "teeth",
        "optionB": "tail",
        "optionC": "paw",
        "correctAnswer": "paw"
      },
      {
        "question": "Jaguar’s paw got filled with ______.",
        "optionA": "mud",
        "optionB": "prickles",
        "correctAnswer": "prickles",
        "optionC": "leaves"
      },
      {
        "question": "The Tortoise escaped by jumping into the ______.",
        "optionA": "jungle",
        "optionB": "river",
        "correctAnswer": "river",
        "optionC": "tree"
      },
      {
        "question": "Jaguar became more ______ after listening to confusing words.",
        "optionA": "mixy (confused)",
        "correctAnswer": "mixy (confused)",
        "optionB": "clear",
        "optionC": "calm"
      },
      {
        "question": "Jaguar went to his ______ after everything happened.",
        "optionA": "friend",
        "optionB": "mother",
        "correctAnswer": "mother",
        "optionC": "teacher"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Painted Jaguar lived on the banks of the turbid Amazon.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Hedgehog protected itself by curling into a ball.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tortoise ran away quickly on land to escape Jaguar.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Jaguar clearly understood his mother’s advice.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The animals confused Jaguar by changing his mother’s instructions.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jaguar’s paw was hurt because of prickles.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tortoise escaped by diving into the river.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jaguar believed everything the animals said.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Jaguar went to his mother after the incident.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jaguar was able to catch and eat both animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
