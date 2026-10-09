export const chapter = "Chapter - 1: Mary’s Lamb";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What did Mary have?",
        "optionA": "A dog",
        "optionB": "A lamb",
        "correctAnswer": "A lamb",
        "optionC": "A cat"
      },
      {
        "question": "What was the colour of the lamb’s fleece?",
        "optionA": "Black",
        "optionB": "Brown",
        "optionC": "White",
        "correctAnswer": "White"
      },
      {
        "question": "Where did the lamb follow Mary?",
        "optionA": "To the park",
        "optionB": "To the school",
        "correctAnswer": "To the school",
        "optionC": "To the market"
      },
      {
        "question": "Who turned the lamb out of the school?",
        "optionA": "Mary",
        "optionB": "The children",
        "optionC": "The teacher",
        "correctAnswer": "The teacher"
      },
      {
        "question": "How did the children react when they saw the lamb?",
        "optionA": "They cried",
        "optionB": "They laughed and played",
        "correctAnswer": "They laughed and played",
        "optionC": "They ran away"
      },
      {
        "question": "What did the lamb do when Mary appeared?",
        "optionA": "It ran to her",
        "correctAnswer": "It ran to her",
        "optionB": "It slept",
        "optionC": "It hid"
      },
      {
        "question": "Where did the lamb lay its head?",
        "optionA": "On Mary’s arm",
        "correctAnswer": "On Mary’s arm",
        "optionB": "On the ground",
        "optionC": "On the table"
      },
      {
        "question": "What did the children ask about the lamb?",
        "optionA": "Why it ran",
        "optionB": "Why it loved Mary",
        "correctAnswer": "Why it loved Mary",
        "optionC": "Why it ate food"
      },
      {
        "question": "What did the teacher say about Mary?",
        "optionA": "She loved the lamb",
        "correctAnswer": "She loved the lamb",
        "optionB": "She ignored the lamb",
        "optionC": "She feared the lamb"
      },
      {
        "question": "What should we do to make animals follow us?",
        "optionA": "Be strict",
        "optionB": "Be loud",
        "optionC": "Be kind",
        "correctAnswer": "Be kind"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Mary had a little ______.",
        "optionA": "lamb",
        "correctAnswer": "lamb",
        "optionB": "dog",
        "optionC": "cat"
      },
      {
        "question": "Its fleece was white as ______.",
        "optionA": "milk",
        "optionB": "snow",
        "correctAnswer": "snow",
        "optionC": "cotton"
      },
      {
        "question": "The lamb followed Mary ______.",
        "optionA": "sometimes",
        "optionB": "everywhere",
        "correctAnswer": "everywhere",
        "optionC": "nowhere"
      },
      {
        "question": "The lamb went with Mary to ______.",
        "optionA": "home",
        "optionB": "park",
        "optionC": "school",
        "correctAnswer": "school"
      },
      {
        "question": "The teacher turned the lamb ______.",
        "optionA": "in",
        "optionB": "out",
        "correctAnswer": "out",
        "optionC": "back"
      },
      {
        "question": "The lamb waited ______ near the school.",
        "optionA": "patiently",
        "correctAnswer": "patiently",
        "optionB": "angrily",
        "optionC": "loudly"
      },
      {
        "question": "The eager ______ cried.",
        "optionA": "teachers",
        "optionB": "children",
        "correctAnswer": "children",
        "optionC": "parents"
      },
      {
        "question": "The lamb laid its head on Mary’s ______.",
        "optionA": "shoulder",
        "optionB": "lap",
        "optionC": "arm",
        "correctAnswer": "arm"
      },
      {
        "question": "Mary would keep the lamb from all ______.",
        "optionA": "food",
        "optionB": "harm",
        "correctAnswer": "harm",
        "optionC": "rain"
      },
      {
        "question": "If you are always ______, animals will follow you.",
        "optionA": "rude",
        "optionB": "kind",
        "correctAnswer": "kind",
        "optionC": "careless"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The lamb followed Mary to school.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The teacher allowed the lamb to stay inside the class.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lamb waited near the school.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The lamb was afraid of Mary.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The children were eager to see the lamb.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mary loved the lamb.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The lamb ran away and did not return.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lamb laid its head on Mary’s arm.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Animals understand kindness and love.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem is about a girl and her lamb.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
