export const chapter = "Chapter - 6: Safety is Important";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps us stay away from harm and danger?",
        "optionA": "Playing games",
        "optionB": "Safety rules",
        "optionC": "Watching TV",
        "correctAnswer": "Safety rules"
      },
      {
        "question": "What should we not touch with wet hands?",
        "optionA": "Pillow",
        "optionB": "Electric switch",
        "optionC": "Book",
        "correctAnswer": "Electric switch"
      },
      {
        "question": "Where should we walk when on the road?",
        "optionA": "In the middle of the road",
        "optionB": "On the zebra crossing",
        "optionC": "On the footpath",
        "correctAnswer": "On the footpath"
      },
      {
        "question": "What should we do before crossing the road?",
        "optionA": "Close our eyes",
        "optionB": "Look both ways",
        "optionC": "Run fast",
        "correctAnswer": "Look both ways"
      },
      {
        "question": "What does green traffic light mean?",
        "optionA": "Wait",
        "optionB": "Go",
        "optionC": "Stop",
        "correctAnswer": "Go"
      },
      {
        "question": "What should we not do in school?",
        "optionA": "Push others",
        "optionB": "Listen to teacher",
        "optionC": "Sit quietly",
        "correctAnswer": "Push others"
      },
      {
        "question": "What should we do on a swing in the playground?",
        "optionA": "Jump off",
        "optionB": "Push others",
        "optionC": "Wait for our turn",
        "correctAnswer": "Wait for our turn"
      },
      {
        "question": "What should you do if you fall while playing?",
        "optionA": "Laugh",
        "optionB": "Tell an adult",
        "optionC": "Cry only",
        "correctAnswer": "Tell an adult"
      },
      {
        "question": "What should you not do near the swimming pool?",
        "optionA": "Run around",
        "optionB": "Walk slowly",
        "optionC": "Wear slippers",
        "correctAnswer": "Walk slowly"
      },
      {
        "question": "What should you do in case of an emergency?",
        "optionA": "Hide",
        "optionB": "Stay calm and tell an adult",
        "optionC": "Play games",
        "correctAnswer": "Stay calm and tell an adult"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Safety helps us stay away from ___.",
        "optionA": "Toys",
        "optionB": "harm and danger",
        "optionC": "fun",
        "correctAnswer": "harm and danger"
      },
      {
        "question": "We should walk on the ___ while walking on the road.",
        "optionA": "Road",
        "optionB": "Zebra",
        "optionC": "footpath",
        "correctAnswer": "footpath"
      },
      {
        "question": "We must not touch electric switches with ___ hands.",
        "optionA": "Clean",
        "optionB": "Wet",
        "optionC": "Dry",
        "correctAnswer": "Wet"
      },
      {
        "question": "We must keep a ___ box at home.",
        "optionA": "Pencil",
        "optionB": "first-aid",
        "optionC": "toy",
        "correctAnswer": "first-aid"
      },
      {
        "question": "Red light means ___.",
        "optionA": "Go",
        "optionB": "Stop",
        "optionC": "Jump",
        "correctAnswer": "Stop"
      },
      {
        "question": "We should always swim with an ___.",
        "optionA": "Friend",
        "optionB": "adult",
        "optionC": "animal",
        "correctAnswer": "adult"
      },
      {
        "question": "We should not run around the ___ as we may slip.",
        "optionA": "Park",
        "optionB": "School",
        "optionC": "swimming pool",
        "correctAnswer": "swimming pool"
      },
      {
        "question": "In case of an emergency, stay ___ and call an adult.",
        "optionA": "Busy",
        "optionB": "calm",
        "optionC": "scared",
        "correctAnswer": "calm"
      },
      {
        "question": "At home, we must not touch ___ objects like knives.",
        "optionA": "Soft",
        "optionB": "sharp",
        "optionC": "round",
        "correctAnswer": "sharp"
      },
      {
        "question": "Always use the ___ crossing to cross the road.",
        "optionA": "Animal",
        "optionB": "zebra",
        "optionC": "tiger",
        "correctAnswer": "zebra"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "We should run and push on stairs at school.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Playing with fire is safe and fun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We must tell an adult if we fall while playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "First-aid box is used for playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The zebra crossing has black and white stripes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should hide during an emergency.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "It is okay to go near the swimming pool alone.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Traffic lights help us cross the road safely.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Bandages are used to write on the board.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should wait for our turn while playing on the swing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
