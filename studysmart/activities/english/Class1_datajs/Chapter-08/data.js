export const chapter = "Chapter - 8: School Time";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wakes Deep up in the morning?",
        "optionA": "Grandpa",
        "correctAnswer": "Grandpa",
        "optionB": "Mother",
        "optionC": "Teacher"
      },
      {
        "question": "Who says “Good morning, Grandpa”?",
        "optionA": "Shreya",
        "optionB": "Deep",
        "correctAnswer": "Deep",
        "optionC": "Papa"
      },
      {
        "question": "Who tells Deep to hurry up?",
        "optionA": "Granny",
        "optionB": "Grandpa",
        "optionC": "Mother",
        "correctAnswer": "Mother"
      },
      {
        "question": "Who says that Deep is always late?",
        "optionA": "Mother",
        "optionB": "Granny",
        "optionC": "Shreya",
        "correctAnswer": "Shreya"
      },
      {
        "question": "What does Deep say about his school bus?",
        "optionA": "He never missed it",
        "correctAnswer": "He never missed it",
        "optionB": "He missed it",
        "optionC": "He lost it"
      },
      {
        "question": "Where is Papa doing yoga?",
        "optionA": "In the room",
        "optionB": "In the backyard",
        "correctAnswer": "In the backyard",
        "optionC": "In the school"
      },
      {
        "question": "Who tells Deep about Papa?",
        "optionA": "Mother",
        "optionB": "Granny",
        "correctAnswer": "Granny",
        "optionC": "Shreya"
      },
      {
        "question": "How much time does Deep say he will take to get ready?",
        "optionA": "Ten minutes",
        "correctAnswer": "Ten minutes",
        "optionB": "Five minutes",
        "optionC": "Fifteen minutes"
      },
      {
        "question": "Where do Shreya and Deep stand with other students?",
        "optionA": "In a classroom",
        "optionB": "In a queue",
        "correctAnswer": "In a queue",
        "optionC": "In a playground"
      },
      {
        "question": "What are the children waiting for?",
        "optionA": "A car",
        "optionB": "A train",
        "optionC": "A school bus",
        "correctAnswer": "A school bus"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Deep says “Good morning” to his ______.",
        "optionA": "teacher",
        "optionB": "mummy",
        "correctAnswer": "mummy",
        "optionC": "friend"
      },
      {
        "question": "Grandpa enters Deep’s ______.",
        "optionA": "classroom",
        "optionB": "room",
        "correctAnswer": "room",
        "optionC": "kitchen"
      },
      {
        "question": "Shreya says Deep is ______ late.",
        "optionA": "sometimes",
        "optionB": "never",
        "optionC": "always",
        "correctAnswer": "always"
      },
      {
        "question": "Papa is doing ______ in the backyard.",
        "optionA": "running",
        "optionB": "yoga",
        "correctAnswer": "yoga",
        "optionC": "reading"
      },
      {
        "question": "Mother tells Deep to ______ up.",
        "optionA": "hurry",
        "correctAnswer": "hurry",
        "optionB": "sit",
        "optionC": "sleep"
      },
      {
        "question": "Deep will be ready in ______ minutes.",
        "optionA": "five",
        "optionB": "ten",
        "correctAnswer": "ten",
        "optionC": "two"
      },
      {
        "question": "Deep has never ______ his school bus.",
        "optionA": "seen",
        "optionB": "liked",
        "optionC": "missed",
        "correctAnswer": "missed"
      },
      {
        "question": "Shreya is already ______ for school.",
        "optionA": "late",
        "optionB": "ready",
        "correctAnswer": "ready",
        "optionC": "tired"
      },
      {
        "question": "The children stand in a ______.",
        "optionA": "queue",
        "correctAnswer": "queue",
        "optionB": "room",
        "optionC": "line"
      },
      {
        "question": "The backyard is behind the ______.",
        "optionA": "school",
        "optionB": "house",
        "correctAnswer": "house",
        "optionC": "road"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Deep was already ready for school.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Grandpa came into Deep’s room.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Shreya said Deep is always on time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mother told Deep to hurry up.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Papa was doing yoga in the backyard.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Deep said he missed his school bus.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Deep takes ten minutes to get ready.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Shreya and Deep go to school together.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children wait for a train.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Students stand in a queue for the bus.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
