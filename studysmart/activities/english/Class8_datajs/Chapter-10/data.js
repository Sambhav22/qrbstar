export const chapter = "Chapter - 10: Spring";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What keeps the seeds frozen during winter?",
        "optionA": "Rain",
        "optionB": "Frost",
        "correctAnswer": "Frost",
        "optionC": "Sun"
      },
      {
        "question": "What helps the sap to rise in plants during spring?",
        "optionA": "Cold air",
        "optionB": "Snow",
        "optionC": "Warm weather",
        "correctAnswer": "Warm weather"
      },
      {
        "question": "What do the “tips of tender green” indicate?",
        "optionA": "Death",
        "optionB": "Hidden life",
        "correctAnswer": "Hidden life",
        "optionC": "Dryness"
      },
      {
        "question": "What happens when the thaw-wind blows?",
        "optionA": "Snow melts",
        "correctAnswer": "Snow melts",
        "optionB": "Snow increases",
        "optionC": "Leaves fall"
      },
      {
        "question": "What do seeds and roots do in spring?",
        "optionA": "Put forth shoots",
        "correctAnswer": "Put forth shoots",
        "optionB": "Dry up",
        "optionC": "Disappear"
      },
      {
        "question": "What grows on the plain in spring?",
        "optionA": "Dry leaves",
        "optionB": "Young grass",
        "correctAnswer": "Young grass",
        "optionC": "Stones"
      },
      {
        "question": "What do birds do during spring?",
        "optionA": "Sleep",
        "optionB": "Sing and pair again",
        "correctAnswer": "Sing and pair again",
        "optionC": "Migrate away"
      },
      {
        "question": "What sprout in the lane during spring?",
        "optionA": "Flowers",
        "optionB": "Rocks",
        "optionC": "Ferns",
        "correctAnswer": "Ferns"
      },
      {
        "question": "What do young leaves do to trees?",
        "optionA": "Remove them",
        "optionB": "Clothe them",
        "correctAnswer": "Clothe them",
        "optionC": "Burn them"
      },
      {
        "question": "What do swallows do before nestlings sing?",
        "optionA": "Fly away",
        "optionB": "Sleep",
        "optionC": "Return from their journey",
        "correctAnswer": "Return from their journey"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Seeds remain ________ during winter.",
        "optionA": "warm",
        "optionB": "frost-locked",
        "correctAnswer": "frost-locked",
        "optionC": "dry"
      },
      {
        "question": "The sap begins to ________ in spring.",
        "optionA": "freeze",
        "optionB": "ascend",
        "correctAnswer": "ascend",
        "optionC": "stop"
      },
      {
        "question": "Young grass springs on the ________.",
        "optionA": "plain",
        "correctAnswer": "plain",
        "optionB": "hill",
        "optionC": "river"
      },
      {
        "question": "Birds sing and ________ again.",
        "optionA": "sleep",
        "optionB": "hide",
        "optionC": "pair",
        "correctAnswer": "pair"
      },
      {
        "question": "The thaw-wind helps to ________ the snow.",
        "optionA": "freeze",
        "optionB": "harden",
        "optionC": "melt",
        "correctAnswer": "melt"
      },
      {
        "question": "Seeds and roots are swollen with ________.",
        "optionA": "water",
        "optionB": "sap",
        "correctAnswer": "sap",
        "optionC": "soil"
      },
      {
        "question": "Curled-headed ferns ________ in the lane.",
        "optionA": "fall",
        "optionB": "sprout",
        "correctAnswer": "sprout",
        "optionC": "burn"
      },
      {
        "question": "Young leaves ________ early hedgerow trees.",
        "optionA": "clothe",
        "correctAnswer": "clothe",
        "optionB": "cover",
        "optionC": "break"
      },
      {
        "question": "The hidden life breaks forth from ________.",
        "optionA": "above",
        "optionB": "underneath",
        "correctAnswer": "underneath",
        "optionC": "outside"
      },
      {
        "question": "Swallows speed their journey along the ________.",
        "optionA": "trackless track",
        "correctAnswer": "trackless track",
        "optionB": "clear path",
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
        "question": "Seeds grow actively during winter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sap flows upward in plants during spring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The thaw-wind freezes the snow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Young grass grows on the plain in spring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Birds remain silent during spring.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ferns sprout in the lane during spring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Leaves fall off trees in spring.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Swallows return in spring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Seeds and roots put forth shoots in spring.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Spring brings life back to nature.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
