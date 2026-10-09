export const chapter = "Chapter - 6: Safety First";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do road signs help people to do?",
        "optionA": "Travel safely",
        "correctAnswer": "Travel safely",
        "optionB": "Play games",
        "optionC": "Decorate roads"
      },
      {
        "question": "Where should children play safely?",
        "optionA": "On the road",
        "optionB": "On the staircase",
        "optionC": "In a playground",
        "correctAnswer": "In a playground"
      },
      {
        "question": "What should be used to handle hot pans?",
        "optionA": "Cloth or duster",
        "correctAnswer": "Cloth or duster",
        "optionB": "Paper",
        "optionC": "Bare hands"
      },
      {
        "question": "Which clothes catch fire quickly?",
        "optionA": "Cotton",
        "optionB": "Wool",
        "optionC": "Synthetic",
        "correctAnswer": "Synthetic"
      },
      {
        "question": "What can faulty electric gadgets cause?",
        "optionA": "Shocks",
        "optionB": "Fire",
        "optionC": "Both shocks and fire",
        "correctAnswer": "Both shocks and fire"
      },
      {
        "question": "Why should we not play on terraces?",
        "optionA": "They are dirty",
        "optionB": "They are risky places",
        "correctAnswer": "They are risky places",
        "optionC": "They are small"
      },
      {
        "question": "What should be done first for a small burn?",
        "optionA": "Apply oil",
        "optionB": "Cover with cloth",
        "optionC": "Cool with cold water",
        "correctAnswer": "Cool with cold water"
      },
      {
        "question": "What spreads in case of a snake bite?",
        "optionA": "Blood",
        "optionB": "Venom",
        "correctAnswer": "Venom",
        "optionC": "Water"
      },
      {
        "question": "What is used to stop heavy bleeding temporarily?",
        "optionA": "Tourniquet",
        "correctAnswer": "Tourniquet",
        "optionB": "Sling",
        "optionC": "Bandage"
      },
      {
        "question": "Why should spilled oil be cleaned immediately?",
        "optionA": "To look clean",
        "optionB": "To avoid fire hazard",
        "correctAnswer": "To avoid fire hazard",
        "optionC": "To save time"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "First aid is the quick help given before a ______ arrives.",
        "optionA": "teacher",
        "optionB": "doctor",
        "correctAnswer": "doctor",
        "optionC": "nurse"
      },
      {
        "question": "White lines on the road for safe crossing are called ______.",
        "optionA": "speed breakers",
        "optionB": "zebra crossings",
        "correctAnswer": "zebra crossings",
        "optionC": "footpaths"
      },
      {
        "question": "Wet bathroom floors are ______ and dangerous.",
        "optionA": "smooth",
        "optionB": "hard",
        "optionC": "slippery",
        "correctAnswer": "slippery"
      },
      {
        "question": "Synthetic clothes catch fire very ______.",
        "optionA": "slowly",
        "optionB": "quickly",
        "correctAnswer": "quickly",
        "optionC": "never"
      },
      {
        "question": "A broken bone is called a ______.",
        "optionA": "fracture",
        "correctAnswer": "fracture",
        "optionB": "sprain",
        "optionC": "wound"
      },
      {
        "question": "Fire needs heat, fuel, and ______ to grow.",
        "optionA": "air",
        "correctAnswer": "air",
        "optionB": "water",
        "optionC": "sand"
      },
      {
        "question": "A tight cloth band tied above a wound is called a ______.",
        "optionA": "sling",
        "optionB": "tourniquet",
        "correctAnswer": "tourniquet",
        "optionC": "bandage"
      },
      {
        "question": "Gas leaks require opening doors and ______.",
        "optionA": "cupboards",
        "optionB": "drawers",
        "optionC": "windows",
        "correctAnswer": "windows"
      },
      {
        "question": "A first aid box should be kept at home, school, and ______.",
        "optionA": "park",
        "optionB": "car",
        "correctAnswer": "car",
        "optionC": "shop"
      },
      {
        "question": "Joints get injured in a ______ when twisted.",
        "optionA": "fracture",
        "optionB": "sprain",
        "correctAnswer": "sprain",
        "optionC": "cut"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Wet bathroom floors can cause slipping accidents.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Children should play on roads carefully.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cotton clothes are safer near fire than synthetic clothes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Electrical fires should be put out using water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "First aid helps prevent infection.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Snake bite patients should be taken quickly to a hospital.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Playing with knives and blades is safe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Faulty electric gadgets can cause accidents.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A sling is used to support a fractured bone.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Safety rules help reduce accidents.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
