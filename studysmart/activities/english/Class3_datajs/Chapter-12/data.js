export const chapter = "Chapter - 12: Halfway Down";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where does the poet like to sit?",
        "optionA": "At the window",
        "optionB": "In the garden",
        "optionC": "On a stair halfway down",
        "correctAnswer": "On a stair halfway down"
      },
      {
        "question": "What is special about the stair?",
        "optionA": "It is very long",
        "optionB": "It is not like any other stair",
        "correctAnswer": "It is not like any other stair",
        "optionC": "It is broken"
      },
      {
        "question": "The poet is sitting:",
        "optionA": "between top and bottom",
        "correctAnswer": "between top and bottom",
        "optionB": "at the bottom",
        "optionC": "at the top"
      },
      {
        "question": "What kind of thoughts come to the poet?",
        "optionA": "Funny thoughts",
        "correctAnswer": "Funny thoughts",
        "optionB": "Sad thoughts",
        "optionC": "Angry thoughts"
      },
      {
        "question": "The poet always ______ at that stair.",
        "optionA": "runs",
        "optionB": "stops",
        "correctAnswer": "stops",
        "optionC": "jumps"
      },
      {
        "question": "The stair is described as:",
        "optionA": "an ordinary place",
        "optionB": "a confusing place",
        "optionC": "a special place",
        "correctAnswer": "a special place"
      },
      {
        "question": "The poet feels the place is:",
        "optionA": "clearly known",
        "optionB": "somewhere else",
        "correctAnswer": "somewhere else",
        "optionC": "only in town"
      },
      {
        "question": "The poem mainly talks about:",
        "optionA": "a classroom",
        "optionB": "a playground",
        "optionC": "a stair and thoughts",
        "correctAnswer": "a stair and thoughts"
      },
      {
        "question": "The poet is not sitting in:",
        "optionA": "the middle",
        "optionB": "a fixed place like nursery or town",
        "correctAnswer": "a fixed place like nursery or town",
        "optionC": "the stair"
      },
      {
        "question": "The poet goes there to:",
        "optionA": "sleep",
        "optionB": "think",
        "correctAnswer": "think",
        "optionC": "eat"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The poet sits ______ down the stairs.",
        "optionA": "slowly",
        "optionB": "halfway",
        "correctAnswer": "halfway",
        "optionC": "quickly"
      },
      {
        "question": "The stair is not like ______ stair.",
        "optionA": "any other",
        "correctAnswer": "any other",
        "optionB": "broken",
        "optionC": "wooden"
      },
      {
        "question": "The poet always ______ at that place.",
        "optionA": "stops",
        "correctAnswer": "stops",
        "optionB": "runs",
        "optionC": "shouts"
      },
      {
        "question": "The thoughts in the poet’s mind are ______.",
        "optionA": "funny",
        "correctAnswer": "funny",
        "optionB": "dull",
        "optionC": "loud"
      },
      {
        "question": "The place is not clearly ______.",
        "optionA": "big",
        "optionB": "clean",
        "optionC": "known",
        "correctAnswer": "known"
      },
      {
        "question": "The poet is not at the ______ or the bottom.",
        "optionA": "middle",
        "optionB": "top",
        "correctAnswer": "top",
        "optionC": "room"
      },
      {
        "question": "The stair feels like ______ else.",
        "optionA": "everywhere",
        "optionB": "nowhere",
        "optionC": "somewhere",
        "correctAnswer": "somewhere"
      },
      {
        "question": "The poet’s thoughts run round his ______.",
        "optionA": "head",
        "correctAnswer": "head",
        "optionB": "hands",
        "optionC": "legs"
      },
      {
        "question": "The stair is a place where the poet likes to ______.",
        "optionA": "think",
        "correctAnswer": "think",
        "optionB": "shout",
        "optionC": "play"
      },
      {
        "question": "The place is not in a ______ place like town or nursery.",
        "optionA": "dark",
        "optionB": "fixed",
        "correctAnswer": "fixed",
        "optionC": "noisy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poet sits halfway down the stairs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet is sitting at the top of the stairs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The stair is different from other stairs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet gets funny thoughts while sitting there.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The place is clearly in the nursery.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet always stops at that stair.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The stair is at the bottom of the house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The place feels like somewhere else to the poet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem talks about playing games.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet enjoys sitting on that stair.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
