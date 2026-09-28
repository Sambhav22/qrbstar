export const chapter = "Chapter - 2: My Friends";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do friends share with each other?",
        "optionA": "Secrets",
        "optionB": "Stones",
        "optionC": "Shoes",
        "correctAnswer": "Secrets"
      },
      {
        "question": "Who were sharing colours at the art table in the story?",
        "optionA": "Aarav and Meena",
        "optionB": "Riya and Rahul",
        "optionC": "Aman and Rohan",
        "correctAnswer": "Aarav and Meena"
      },
      {
        "question": "What do friends help with?",
        "optionA": "Sleeping",
        "optionB": "Homework",
        "optionC": "Hiding",
        "correctAnswer": "Homework"
      },
      {
        "question": "What do friends do when we feel sad?",
        "optionA": "Ignore us",
        "optionB": "Laugh at us",
        "optionC": "Cheer us up",
        "correctAnswer": "Cheer us up"
      },
      {
        "question": "What do we run and jump while doing with friends?",
        "optionA": "Playing games",
        "optionB": "Reading books",
        "optionC": "Writing homework",
        "correctAnswer": "Playing games"
      },
      {
        "question": "What do children sometimes act out after reading?",
        "optionA": "Stories",
        "optionB": "Songs",
        "optionC": "Poems",
        "correctAnswer": "Stories"
      },
      {
        "question": "What do we draw with friends?",
        "optionA": "Shoes and bags",
        "optionB": "Animals and houses",
        "optionC": "Chairs and tables",
        "correctAnswer": "Animals and houses"
      },
      {
        "question": "What do we mix while painting together?",
        "optionA": "Sand",
        "optionB": "Water",
        "optionC": "Colours",
        "correctAnswer": "Colours"
      },
      {
        "question": "What can new friends become later?",
        "optionA": "Class monitors",
        "optionB": "Best friends",
        "optionC": "Teachers",
        "correctAnswer": "Best friends"
      },
      {
        "question": "What do friends make every activity?",
        "optionA": "More fun",
        "optionB": "More difficult",
        "optionC": "More boring",
        "correctAnswer": "More fun"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Friends make us ______ and feel good.",
        "optionA": "cry",
        "optionB": "smile",
        "optionC": "sleep",
        "correctAnswer": "smile"
      },
      {
        "question": "Friends help us with our ______.",
        "optionA": "homework",
        "optionB": "games",
        "optionC": "lunch",
        "correctAnswer": "homework"
      },
      {
        "question": "We run and jump while ______ with friends.",
        "optionA": "playing",
        "optionB": "reading",
        "optionC": "drawing",
        "correctAnswer": "playing"
      },
      {
        "question": "We read storybooks, comics and ______ together.",
        "optionA": "charts",
        "optionB": "maps",
        "optionC": "rhymes",
        "correctAnswer": "rhymes"
      },
      {
        "question": "Drawing with friends is ______ and exciting.",
        "optionA": "slow",
        "optionB": "boring",
        "optionC": "creative",
        "correctAnswer": "creative"
      },
      {
        "question": "We mix colours while ______.",
        "optionA": "running",
        "optionB": "painting",
        "optionC": "writing",
        "correctAnswer": "painting"
      },
      {
        "question": "We say ______ to make new friends.",
        "optionA": "hello",
        "optionB": "goodbye",
        "optionC": "thank you",
        "correctAnswer": "hello"
      },
      {
        "question": "Sharing toys helps us make ______ friends.",
        "optionA": "new",
        "optionB": "angry",
        "optionC": "old",
        "correctAnswer": "new"
      },
      {
        "question": "Teamwork means working in a ______.",
        "optionA": "class",
        "optionB": "room",
        "optionC": "group",
        "correctAnswer": "group"
      },
      {
        "question": "Teamwork makes us feel proud and ______.",
        "optionA": "weak",
        "optionB": "strong",
        "optionC": "tired",
        "correctAnswer": "strong"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Friends play and learn together.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Friends share toys and snacks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Reading with friends helps us learn new things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Drawing with friends can give us new ideas.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Painting together lets us use our imagination.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Friends always make our lives boring.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Friends help each other while working in a team.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We can make new friends by smiling and talking.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Teamwork means working alone.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Friends make our lives happier.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
