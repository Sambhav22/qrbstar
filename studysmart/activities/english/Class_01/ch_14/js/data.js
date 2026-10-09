export const chapter = "Chapter - 14: I Am for You";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who brings goodies you like?",
        "optionA": "Vendor",
        "correctAnswer": "Vendor",
        "optionB": "Farmer",
        "optionC": "Driver"
      },
      {
        "question": "Who teaches you so you can grow well?",
        "optionA": "Teacher",
        "correctAnswer": "Teacher",
        "optionB": "Soldier",
        "optionC": "Mechanic"
      },
      {
        "question": "Who keeps your machines working?",
        "optionA": "Shopkeeper",
        "optionB": "Mechanic",
        "correctAnswer": "Mechanic",
        "optionC": "Driver"
      },
      {
        "question": "Who sells you the things you need?",
        "optionA": "Policeman",
        "optionB": "Shopkeeper",
        "correctAnswer": "Shopkeeper",
        "optionC": "Farmer"
      },
      {
        "question": "Who catches the thief so you can be happy?",
        "optionA": "Teacher",
        "optionB": "Vendor",
        "optionC": "Policeman",
        "correctAnswer": "Policeman"
      },
      {
        "question": "Who grows crops so you can get food?",
        "optionA": "Driver",
        "optionB": "Farmer",
        "correctAnswer": "Farmer",
        "optionC": "Mechanic"
      },
      {
        "question": "Who helps by taking children to school?",
        "optionA": "Soldier",
        "optionB": "Vendor",
        "optionC": "Driver",
        "correctAnswer": "Driver"
      },
      {
        "question": "Who helps us live in peace by guarding the country?",
        "optionA": "Soldier",
        "correctAnswer": "Soldier",
        "optionB": "Shopkeeper",
        "optionC": "Teacher"
      },
      {
        "question": "Who helps in fixing machines?",
        "optionA": "Mechanic",
        "correctAnswer": "Mechanic",
        "optionB": "Farmer",
        "optionC": "Driver"
      },
      {
        "question": "Who brings tasty things called goodies?",
        "optionA": "Policeman",
        "optionB": "Vendor",
        "correctAnswer": "Vendor",
        "optionC": "Teacher"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A ______ guards the country so you can live in peace.",
        "optionA": "Soldier",
        "correctAnswer": "Soldier",
        "optionB": "Driver",
        "optionC": "Vendor"
      },
      {
        "question": "A ______ catches the thief so you can be happy.",
        "optionA": "Farmer",
        "optionB": "Policeman",
        "correctAnswer": "Policeman",
        "optionC": "Teacher"
      },
      {
        "question": "A ______ takes you to school.",
        "optionA": "Mechanic",
        "optionB": "Shopkeeper",
        "optionC": "Driver",
        "correctAnswer": "Driver"
      },
      {
        "question": "A ______ brings goodies you like.",
        "optionA": "Farmer",
        "optionB": "Soldier",
        "optionC": "Vendor",
        "correctAnswer": "Vendor"
      },
      {
        "question": "A ______ keeps your machines working.",
        "optionA": "Mechanic",
        "correctAnswer": "Mechanic",
        "optionB": "Driver",
        "optionC": "Teacher"
      },
      {
        "question": "A ______ teaches you so you can grow well.",
        "optionA": "Vendor",
        "optionB": "Teacher",
        "correctAnswer": "Teacher",
        "optionC": "Policeman"
      },
      {
        "question": "A ______ grows crops so you can get food.",
        "optionA": "Shopkeeper",
        "optionB": "Driver",
        "optionC": "Farmer",
        "correctAnswer": "Farmer"
      },
      {
        "question": "A ______ sells you the things you need.",
        "optionA": "Mechanic",
        "optionB": "Shopkeeper",
        "correctAnswer": "Shopkeeper",
        "optionC": "Soldier"
      },
      {
        "question": "Workers who help us are called our ______.",
        "optionA": "Helpers",
        "correctAnswer": "Helpers",
        "optionB": "Friends",
        "optionC": "Players"
      },
      {
        "question": "A vendor brings ______ you like.",
        "optionA": "goodies",
        "correctAnswer": "goodies",
        "optionB": "books",
        "optionC": "tools"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "A soldier guards the country so we can live in peace.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A driver catches thieves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A teacher teaches you so you can grow well.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A mechanic keeps your machines working.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A vendor brings goodies you like.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A farmer grows crops so we get food.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A shopkeeper sells the things we need.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A policeman takes you to school.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Helpers are people who work for us.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A teacher sells things you need.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
