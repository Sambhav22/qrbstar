export const chapter = "Chapter - 2: Knowing Our Neighbourhood";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which place helps people send parcels and greeting cards during festivals?",
        "optionA": "Bank",
        "optionB": "Police station",
        "optionC": "Post office",
        "correctAnswer": "Post office"
      },
      {
        "question": "Which type of transport helps many people travel together?",
        "optionA": "Private car",
        "optionB": "Public transport",
        "optionC": "Motorcycle",
        "correctAnswer": "Public transport"
      },
      {
        "question": "Which vehicle is useful for short distances where buses do not go?",
        "optionA": "Auto-rickshaw",
        "optionB": "Train",
        "optionC": "Metro",
        "correctAnswer": "Auto-rickshaw"
      },
      {
        "question": "Which machine allows people to withdraw money without standing in a bank line?",
        "optionA": "ATM",
        "optionB": "Locker",
        "optionC": "Passbook",
        "correctAnswer": "ATM"
      },
      {
        "question": "Which device helps people send pictures and messages quickly to friends?",
        "optionA": "Drum",
        "optionB": "Mobile phone",
        "optionC": "Pigeon",
        "correctAnswer": "Mobile phone"
      },
      {
        "question": "Which place helps sick people get treatment?",
        "optionA": "School",
        "optionB": "Hospital",
        "optionC": "Bank",
        "correctAnswer": "Hospital"
      },
      {
        "question": "Which helper drives buses to help people travel?",
        "optionA": "Gardener",
        "optionB": "Electrician",
        "optionC": "Bus driver",
        "correctAnswer": "Bus driver"
      },
      {
        "question": "Which transport system helps people reach far places quickly in cities?",
        "optionA": "Cart",
        "optionB": "Bicycle",
        "optionC": "Metro",
        "correctAnswer": "Metro"
      },
      {
        "question": "Which place helps children learn and study?",
        "optionA": "School",
        "optionB": "Fire station",
        "optionC": "Police station",
        "correctAnswer": "School"
      },
      {
        "question": "Which community helper keeps streets and surroundings clean?",
        "optionA": "Sweeper",
        "optionB": "Teacher",
        "optionC": "Shopkeeper",
        "correctAnswer": "Sweeper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A __________ delivers letters to our homes.",
        "optionA": "driver",
        "optionB": "postman",
        "optionC": "teacher",
        "correctAnswer": "postman"
      },
      {
        "question": "People keep their money safe in a __________.",
        "optionA": "bank",
        "optionB": "hospital",
        "optionC": "school",
        "correctAnswer": "bank"
      },
      {
        "question": "Coins are made of __________.",
        "optionA": "metal",
        "optionB": "paper",
        "optionC": "plastic",
        "correctAnswer": "metal"
      },
      {
        "question": "A __________ records deposits and withdrawals in the bank.",
        "optionA": "ticket",
        "optionB": "notebook",
        "optionC": "passbook",
        "correctAnswer": "passbook"
      },
      {
        "question": "Mobile phones help people send __________ quickly to friends.",
        "optionA": "letters",
        "optionB": "pictures",
        "optionC": "books",
        "correctAnswer": "pictures"
      },
      {
        "question": "__________ transport carries many people together.",
        "optionA": "personal",
        "optionB": "private",
        "optionC": "public",
        "correctAnswer": "public"
      },
      {
        "question": "Notes are made of __________.",
        "optionA": "metal",
        "optionB": "paper",
        "optionC": "cloth",
        "correctAnswer": "paper"
      },
      {
        "question": "A __________ helps take care of plants and gardens.",
        "optionA": "gardener",
        "optionB": "doctor",
        "optionC": "driver",
        "correctAnswer": "gardener"
      },
      {
        "question": "A __________ is a plan for using and saving money.",
        "optionA": "budget",
        "optionB": "ticket",
        "optionC": "letter",
        "correctAnswer": "budget"
      },
      {
        "question": "Hospitals help __________ people get better.",
        "optionA": "rich",
        "optionB": "sick",
        "optionC": "busy",
        "correctAnswer": "sick"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Post offices help people send letters and parcels.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Public transport reduces traffic on roads.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Private vehicles are owned and used by families.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "ATMs can not be used to withdraw money anytime.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Coins and notes are used to buy things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Banks keep money safe using lockers and computers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Community helpers make our neighbourhood unsafe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mobile phones cannot be carried anywhere.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Budgeting helps families avoid overspending.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Sweepers help keep streets clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
