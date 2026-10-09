export const chapter = "Chapter - 19: The Little Candle";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who told the candle not to worry?",
        "optionA": "The sun",
        "optionB": "The night",
        "optionC": "The lantern",
        "correctAnswer": "The lantern"
      },
      {
        "question": "What did the candle think about herself?",
        "optionA": "She was big",
        "optionB": "She was small",
        "correctAnswer": "She was small",
        "optionC": "She was bright"
      },
      {
        "question": "What does the candle give?",
        "optionA": "Water",
        "optionB": "Light",
        "correctAnswer": "Light",
        "optionC": "Air"
      },
      {
        "question": "When does the candle help the most?",
        "optionA": "At night",
        "correctAnswer": "At night",
        "optionB": "In the morning",
        "optionC": "In the afternoon"
      },
      {
        "question": "What shines like gold?",
        "optionA": "The night",
        "optionB": "The day",
        "correctAnswer": "The day",
        "optionC": "The candle"
      },
      {
        "question": "What does the candle want to end?",
        "optionA": "Rain",
        "optionB": "Heat",
        "optionC": "Darkness",
        "correctAnswer": "Darkness"
      },
      {
        "question": "What goes away at night?",
        "optionA": "The moon",
        "optionB": "The sun",
        "correctAnswer": "The sun",
        "optionC": "The candle"
      },
      {
        "question": "What did the lantern say about the candle?",
        "optionA": "She gives light at night",
        "correctAnswer": "She gives light at night",
        "optionB": "She is useless",
        "optionC": "She is too big"
      },
      {
        "question": "How did the candle feel at the end?",
        "optionA": "Sad",
        "optionB": "Happy",
        "correctAnswer": "Happy",
        "optionC": "Angry"
      },
      {
        "question": "Where did the candle spread light?",
        "optionA": "Nowhere",
        "optionB": "Only in one place",
        "optionC": "Everywhere",
        "correctAnswer": "Everywhere"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The candle was feeling very ______.",
        "optionA": "happy",
        "optionB": "sad",
        "correctAnswer": "sad",
        "optionC": "angry"
      },
      {
        "question": "The lantern said the candle should not be ______.",
        "optionA": "worried",
        "correctAnswer": "worried",
        "optionB": "tired",
        "optionC": "sleepy"
      },
      {
        "question": "The sun rises during the ______.",
        "optionA": "night",
        "optionB": "day",
        "correctAnswer": "day",
        "optionC": "evening"
      },
      {
        "question": "The candle gives light at ______.",
        "optionA": "night",
        "correctAnswer": "night",
        "optionB": "noon",
        "optionC": "morning"
      },
      {
        "question": "The sun leaves ______ behind.",
        "optionA": "light",
        "optionB": "clouds",
        "optionC": "darkness",
        "correctAnswer": "darkness"
      },
      {
        "question": "The candle can end a little ______.",
        "optionA": "light",
        "optionB": "water",
        "optionC": "darkness",
        "correctAnswer": "darkness"
      },
      {
        "question": "On Diwali, candles were kept in a ______.",
        "optionA": "box",
        "optionB": "row",
        "correctAnswer": "row",
        "optionC": "bag"
      },
      {
        "question": "The candle and lantern were ______.",
        "optionA": "talking",
        "correctAnswer": "talking",
        "optionB": "running",
        "optionC": "sleeping"
      },
      {
        "question": "The candle wanted to light the ______.",
        "optionA": "house",
        "optionB": "world",
        "correctAnswer": "world",
        "optionC": "road"
      },
      {
        "question": "The candles spread ______ everywhere.",
        "optionA": "darkness",
        "optionB": "smoke",
        "optionC": "light",
        "correctAnswer": "light"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The candle was happy in the beginning.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lantern helped the candle understand her role.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The sun stays in the sky at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The candle can light only a little darkness.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The lantern said the candle is not useful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The candle became happy at the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Many candles were kept together on Diwali.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The candle did not want to help.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The sun ends darkness during the day.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The candle spreads darkness everywhere.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
