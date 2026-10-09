export const chapter = "Chapter - 17: Life Then and Now";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "When did our country gain freedom?",
        "optionA": "1945",
        "optionB": "1947",
        "correctAnswer": "1947",
        "optionC": "1950"
      },
      {
        "question": "Where did people mostly live in olden times?",
        "optionA": "Flats",
        "optionB": "Huts",
        "correctAnswer": "Huts",
        "optionC": "Buildings"
      },
      {
        "question": "Which games did children play earlier?",
        "optionA": "Video games",
        "optionB": "Mobile games",
        "optionC": "Hide-and-seek and kho-kho",
        "correctAnswer": "Hide-and-seek and kho-kho"
      },
      {
        "question": "How did people travel when they wanted to meet others?",
        "optionA": "On foot or by bullock cart",
        "correctAnswer": "On foot or by bullock cart",
        "optionB": "By aeroplane",
        "optionC": "By metro"
      },
      {
        "question": "What did people do when they could not meet others?",
        "optionA": "Sent emails",
        "optionB": "Wrote letters",
        "correctAnswer": "Wrote letters",
        "optionC": "Made phone calls"
      },
      {
        "question": "What did old people share with young people?",
        "optionA": "Stories about history and culture",
        "correctAnswer": "Stories about history and culture",
        "optionB": "News",
        "optionC": "Movies"
      },
      {
        "question": "What do people use in modern times at home?",
        "optionA": "Stones",
        "optionB": "Gadgets",
        "correctAnswer": "Gadgets",
        "optionC": "Toys"
      },
      {
        "question": "How do people meet nowadays?",
        "optionA": "In playgrounds",
        "optionB": "On screen",
        "correctAnswer": "On screen",
        "optionC": "In fields"
      },
      {
        "question": "How do people feel these days?",
        "optionA": "Always happy",
        "optionB": "Angry",
        "optionC": "Lonely",
        "correctAnswer": "Lonely"
      },
      {
        "question": "What should we do to be happy?",
        "optionA": "Stay alone",
        "optionB": "Be with family and friends",
        "correctAnswer": "Be with family and friends",
        "optionC": "Use gadgets"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "People lived a ______ life in olden times.",
        "optionA": "rich",
        "optionB": "busy",
        "optionC": "simple",
        "correctAnswer": "simple"
      },
      {
        "question": "People mostly lived in ______.",
        "optionA": "flats",
        "optionB": "huts",
        "correctAnswer": "huts",
        "optionC": "hotels"
      },
      {
        "question": "They did not have ______ in their homes.",
        "optionA": "electricity",
        "correctAnswer": "electricity",
        "optionB": "water",
        "optionC": "food"
      },
      {
        "question": "Children played ______ games.",
        "optionA": "indoor",
        "optionB": "outdoor",
        "correctAnswer": "outdoor",
        "optionC": "computer"
      },
      {
        "question": "People travelled by ______ carts.",
        "optionA": "horse",
        "optionB": "engine",
        "optionC": "bullock",
        "correctAnswer": "bullock"
      },
      {
        "question": "When people could not meet, they wrote ______.",
        "optionA": "messages",
        "optionB": "letters",
        "correctAnswer": "letters",
        "optionC": "notes"
      },
      {
        "question": "Now people live in ______ houses.",
        "optionA": "pucca",
        "correctAnswer": "pucca",
        "optionB": "huts",
        "optionC": "tents"
      },
      {
        "question": "People play games on ______.",
        "optionA": "screen",
        "correctAnswer": "screen",
        "optionB": "ground",
        "optionC": "road"
      },
      {
        "question": "People do homework ______.",
        "optionA": "together",
        "optionB": "alone",
        "correctAnswer": "alone",
        "optionC": "outside"
      },
      {
        "question": "To feel happy, we should be with our ______.",
        "optionA": "gadgets",
        "optionB": "family and friends",
        "correctAnswer": "family and friends",
        "optionC": "screens"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "People wore simple clothes in olden times.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People had modern machines like TV in 1947.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Children played games together earlier.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Old people shared stories about great people.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People travelled by aeroplane in olden times.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "People wrote letters when they could not meet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Now people meet frequently with each other.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "People play games on screens nowadays.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People feel lonely these days.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Being with family and friends makes us happy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
