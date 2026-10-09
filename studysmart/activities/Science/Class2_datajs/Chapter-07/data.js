export const chapter = "Chapter - 7: Staying Safe";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is the main reason we should follow safety rules?",
        "optionA": "To get dirty",
        "optionB": "To stay safe and avoid getting hurt",
        "optionC": "To play more games",
        "correctAnswer": "To stay safe and avoid getting hurt"
      },
      {
        "question": "Which of the following is safe behavior at home?",
        "optionA": "Playing with knives",
        "optionB": "Touching a hot iron",
        "optionC": "Keeping toys away from stairs",
        "correctAnswer": "Keeping toys away from stairs"
      },
      {
        "question": "Where should children not play?",
        "optionA": "On the road",
        "optionB": "In the park",
        "optionC": "In the garden",
        "correctAnswer": "On the road"
      },
      {
        "question": "What should you do if someone pushes you while playing?",
        "optionA": "Push them back",
        "optionB": "Tell a grown-up",
        "optionC": "Run away",
        "correctAnswer": "Tell a grown-up"
      },
      {
        "question": "What helps kids who cannot swim well?",
        "optionA": "Shoes",
        "optionB": "Floaties",
        "optionC": "Towels",
        "correctAnswer": "Floaties"
      },
      {
        "question": "What should you never do near the swimming pool?",
        "optionA": "Sit",
        "optionB": "Run",
        "optionC": "Walk slowly",
        "correctAnswer": "Run"
      },
      {
        "question": "What should you do before crossing a road?",
        "optionA": "Run fast",
        "optionB": "Look left, right, then left again",
        "optionC": "Jump over",
        "correctAnswer": "Look left, right, then left again"
      },
      {
        "question": "What helps keep us safe on the road?",
        "optionA": "Running",
        "optionB": "Holding a grown-up’s hand",
        "optionC": "Shouting",
        "correctAnswer": "Holding a grown-up’s hand"
      },
      {
        "question": "Which action is unsafe in school?",
        "optionA": "Walking in hallways",
        "optionB": "Jumping on desks",
        "optionC": "Telling a teacher",
        "correctAnswer": "Jumping on desks"
      },
      {
        "question": "If you see something dangerous at school, you should:",
        "optionA": "Ignore it",
        "optionB": "Laugh at it",
        "optionC": "Tell a teacher",
        "correctAnswer": "Tell a teacher"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We should never climb on ___.",
        "optionA": "Trees",
        "optionB": "furniture",
        "optionC": "stairs",
        "correctAnswer": "furniture"
      },
      {
        "question": "___ is a place where we can play safely.",
        "optionA": "Road",
        "optionB": "Kitchen",
        "optionC": "Park",
        "correctAnswer": "Park"
      },
      {
        "question": "When swimming, we should always be with a ___.",
        "optionA": "Friend",
        "optionB": "grown-up",
        "optionC": "baby",
        "correctAnswer": "grown-up"
      },
      {
        "question": "Always cross the road at the ___ crossing.",
        "optionA": "zebra",
        "optionB": "tiger",
        "optionC": "cheetah",
        "correctAnswer": "zebra"
      },
      {
        "question": "We must not play near ___.",
        "optionA": "Flowers",
        "optionB": "roads",
        "optionC": "walls",
        "correctAnswer": "roads"
      },
      {
        "question": "Running near the pool is ___.",
        "optionA": "Safe",
        "optionB": "Fun",
        "optionC": "dangerous",
        "correctAnswer": "dangerous"
      },
      {
        "question": "We should keep our toys away from the ___.",
        "optionA": "Table",
        "optionB": "stairs",
        "optionC": "carpet",
        "correctAnswer": "stairs"
      },
      {
        "question": "In school, we must not ___ others on the stairs.",
        "optionA": "Help",
        "optionB": "push",
        "optionC": "hug",
        "correctAnswer": "push"
      },
      {
        "question": "Always ___ if you see something unsafe in school.",
        "optionA": "hide it",
        "optionB": "run away",
        "optionC": "tell a teacher",
        "correctAnswer": "tell a teacher"
      },
      {
        "question": "Looking both sides before crossing helps us stay ___.",
        "optionA": "Late",
        "optionB": "safe",
        "optionC": "scared",
        "correctAnswer": "safe"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "We should always be careful to avoid getting hurt.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "It is safe to play with sharp objects like blades.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should keep toys near the stairs while playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "It is important to share toys and take turns while playing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Swimming without a grown-up is okay if you have floaties.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We must always run in the hallways at school.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Always walk on the sidewalk when on the road.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Telling a teacher about something unsafe is a good action.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Jumping on desks and chairs in school is safe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should always look left, right, and then left again before crossing the road.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
