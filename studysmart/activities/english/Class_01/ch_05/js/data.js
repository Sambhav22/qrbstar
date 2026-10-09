export const chapter = "Chapter - 5: Months";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which day comes after Sunday?",
        "optionA": "Saturday",
        "optionB": "Monday",
        "correctAnswer": "Monday",
        "optionC": "Friday"
      },
      {
        "question": "Which month comes after January?",
        "optionA": "March",
        "optionB": "February",
        "correctAnswer": "February",
        "optionC": "April"
      },
      {
        "question": "Which day comes before Wednesday?",
        "optionA": "Tuesday",
        "correctAnswer": "Tuesday",
        "optionB": "Thursday",
        "optionC": "Monday"
      },
      {
        "question": "Which month comes before July?",
        "optionA": "June",
        "correctAnswer": "June",
        "optionB": "May",
        "optionC": "August"
      },
      {
        "question": "Which month comes after August?",
        "optionA": "July",
        "optionB": "October",
        "optionC": "September",
        "correctAnswer": "September"
      },
      {
        "question": "Which day comes after Thursday?",
        "optionA": "Wednesday",
        "optionB": "Friday",
        "correctAnswer": "Friday",
        "optionC": "Sunday"
      },
      {
        "question": "Which month comes before December?",
        "optionA": "October",
        "optionB": "September",
        "optionC": "November",
        "correctAnswer": "November"
      },
      {
        "question": "Which day comes before Monday?",
        "optionA": "Sunday",
        "correctAnswer": "Sunday",
        "optionB": "Tuesday",
        "optionC": "Friday"
      },
      {
        "question": "Which month comes after March?",
        "optionA": "June",
        "optionB": "May",
        "optionC": "April",
        "correctAnswer": "April"
      },
      {
        "question": "Which day comes after Friday?",
        "optionA": "Thursday",
        "optionB": "Saturday",
        "correctAnswer": "Saturday",
        "optionC": "Sunday"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The first day of the week is ______.",
        "optionA": "Monday",
        "optionB": "Sunday",
        "correctAnswer": "Sunday",
        "optionC": "Friday"
      },
      {
        "question": "The last day of the week is ______.",
        "optionA": "Saturday",
        "correctAnswer": "Saturday",
        "optionB": "Sunday",
        "optionC": "Friday"
      },
      {
        "question": "______ comes after Tuesday.",
        "optionA": "Monday",
        "optionB": "Wednesday",
        "correctAnswer": "Wednesday",
        "optionC": "Friday"
      },
      {
        "question": "______ comes before Thursday.",
        "optionA": "Tuesday",
        "optionB": "Friday",
        "optionC": "Wednesday",
        "correctAnswer": "Wednesday"
      },
      {
        "question": "______ comes after June.",
        "optionA": "May",
        "optionB": "July",
        "correctAnswer": "July",
        "optionC": "August"
      },
      {
        "question": "______ comes before April.",
        "optionA": "March",
        "correctAnswer": "March",
        "optionB": "May",
        "optionC": "February"
      },
      {
        "question": "______ comes after October.",
        "optionA": "September",
        "optionB": "December",
        "optionC": "November",
        "correctAnswer": "November"
      },
      {
        "question": "______ comes before February.",
        "optionA": "March",
        "optionB": "January",
        "correctAnswer": "January",
        "optionC": "April"
      },
      {
        "question": "______ comes after November.",
        "optionA": "October",
        "optionB": "December",
        "correctAnswer": "December",
        "optionC": "January"
      },
      {
        "question": "______ comes before August.",
        "optionA": "July",
        "correctAnswer": "July",
        "optionB": "June",
        "optionC": "September"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "There are seven days in a week.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "February is a month.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sunday comes after Monday.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "April comes after March.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "June comes before July.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Saturday comes before Sunday.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "August comes after September.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "October comes after September.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "January comes before February.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tuesday comes after Wednesday.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
