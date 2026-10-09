export const chapter = "Chapter - 10: The Months";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which month brings snow and makes our feet and fingers glow?",
        "optionA": "February",
        "optionB": "March",
        "optionC": "January",
        "correctAnswer": "January"
      },
      {
        "question": "Which month brings rain and thaws the frozen lake?",
        "optionA": "April",
        "optionB": "February",
        "correctAnswer": "February",
        "optionC": "June"
      },
      {
        "question": "Which month brings breezes loud and shrill?",
        "optionA": "July",
        "optionB": "May",
        "optionC": "March",
        "correctAnswer": "March"
      },
      {
        "question": "Which month brings the primrose sweet?",
        "optionA": "April",
        "correctAnswer": "April",
        "optionB": "August",
        "optionC": "October"
      },
      {
        "question": "Which month brings flocks of pretty lambs?",
        "optionA": "June",
        "optionB": "May",
        "correctAnswer": "May",
        "optionC": "July"
      },
      {
        "question": "Which month fills children’s hands with posies?",
        "optionA": "September",
        "optionB": "June",
        "correctAnswer": "June",
        "optionC": "November"
      },
      {
        "question": "Which month brings cooling showers?",
        "optionA": "January",
        "optionB": "August",
        "optionC": "July",
        "correctAnswer": "July"
      },
      {
        "question": "Which month brings the sheaves of corn?",
        "optionA": "August",
        "correctAnswer": "August",
        "optionB": "April",
        "optionC": "December"
      },
      {
        "question": "Which month is pleasant for gathering nuts?",
        "optionA": "October",
        "correctAnswer": "October",
        "optionB": "March",
        "optionC": "February"
      },
      {
        "question": "Which month brings sleet and Christmas treat?",
        "optionA": "November",
        "optionB": "December",
        "correctAnswer": "December",
        "optionC": "September"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "January brings the ______.",
        "optionA": "rain",
        "optionB": "snow",
        "correctAnswer": "snow",
        "optionC": "wind"
      },
      {
        "question": "February ______ the frozen lake again.",
        "optionA": "freezes",
        "optionB": "thaws",
        "correctAnswer": "thaws",
        "optionC": "dries"
      },
      {
        "question": "March brings breezes loud and ______.",
        "optionA": "shrill",
        "correctAnswer": "shrill",
        "optionB": "soft",
        "optionC": "slow"
      },
      {
        "question": "April scatters ______ at our feet.",
        "optionA": "daisies",
        "correctAnswer": "daisies",
        "optionB": "leaves",
        "optionC": "nuts"
      },
      {
        "question": "May brings flocks of pretty ______.",
        "optionA": "birds",
        "optionB": "lambs",
        "correctAnswer": "lambs",
        "optionC": "fish"
      },
      {
        "question": "July brings cooling ______.",
        "optionA": "winds",
        "optionB": "snow",
        "optionC": "showers",
        "correctAnswer": "showers"
      },
      {
        "question": "August brings the sheaves of ______.",
        "optionA": "rice",
        "optionB": "wheat",
        "optionC": "corn",
        "correctAnswer": "corn"
      },
      {
        "question": "September brings the ______.",
        "optionA": "snow",
        "optionB": "fruit",
        "correctAnswer": "fruit",
        "optionC": "fire"
      },
      {
        "question": "November brings the ______.",
        "optionA": "rain",
        "optionB": "blast",
        "correctAnswer": "blast",
        "optionC": "heat"
      },
      {
        "question": "December brings the ______.",
        "optionA": "sleet",
        "correctAnswer": "sleet",
        "optionB": "sun",
        "optionC": "dust"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "January brings snow.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "February freezes the lake again.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "March stirs the dancing daffodil.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "April brings nuts.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "May brings lambs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "June brings flowers like roses and lilies.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "July brings snow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "August is the month of harvest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "November brings sleet.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "December brings Christmas treat.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
