export const chapter = "Chapter - 2: Books";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What happens when we open a book according to the poem?",
        "optionA": "New ideas and people rise",
        "correctAnswer": "New ideas and people rise",
        "optionB": "We fall asleep",
        "optionC": "We leave the room"
      },
      {
        "question": "What happens to the room when we are deeply reading a book?",
        "optionA": "It becomes noisy",
        "optionB": "It melts away",
        "correctAnswer": "It melts away",
        "optionC": "It gets brighter"
      },
      {
        "question": "What does the poet compare a book to?",
        "optionA": "A toy",
        "optionB": "A house",
        "optionC": "A magic box",
        "correctAnswer": "A magic box"
      },
      {
        "question": "Where is our body when we are reading?",
        "optionA": "In the chair",
        "correctAnswer": "In the chair",
        "optionB": "In another land",
        "optionC": "Outside the room"
      },
      {
        "question": "What happens to our mind while reading?",
        "optionA": "It stays still",
        "optionB": "It travels elsewhere",
        "correctAnswer": "It travels elsewhere",
        "optionC": "It becomes tired"
      },
      {
        "question": "What do books hold inside them?",
        "optionA": "Only pictures",
        "optionB": "All things for their lovers",
        "correctAnswer": "All things for their lovers",
        "optionC": "Only stories"
      },
      {
        "question": "What kind of friend can we find in a book?",
        "optionA": "A real friend",
        "optionB": "A school friend",
        "optionC": "A chosen friend",
        "correctAnswer": "A chosen friend"
      },
      {
        "question": "What do books help us experience?",
        "optionA": "Only reality",
        "optionB": "Different lands and ages",
        "correctAnswer": "Different lands and ages",
        "optionC": "Only dreams"
      },
      {
        "question": "What feeling do books create in us?",
        "optionA": "Wonder",
        "correctAnswer": "Wonder",
        "optionB": "Fear",
        "optionC": "Anger"
      },
      {
        "question": "Who wrote the poem “Books”?",
        "optionA": "Rabindranath Tagore",
        "optionB": "Eleanor Farjeon",
        "correctAnswer": "Eleanor Farjeon",
        "optionC": "Ruskin Bond"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "New ideas and people rise in our ______.",
        "optionA": "fears",
        "optionB": "fancies",
        "correctAnswer": "fancies",
        "optionC": "doubts"
      },
      {
        "question": "The room we sit in ______ away.",
        "optionA": "freezes",
        "optionB": "breaks",
        "optionC": "melts",
        "correctAnswer": "melts"
      },
      {
        "question": "We sail along the ______.",
        "optionA": "road",
        "optionB": "page",
        "correctAnswer": "page",
        "optionC": "river"
      },
      {
        "question": "Here’s our body in the ______.",
        "optionA": "chair",
        "correctAnswer": "chair",
        "optionB": "ground",
        "optionC": "bed"
      },
      {
        "question": "But our ______ is over there.",
        "optionA": "mind",
        "correctAnswer": "mind",
        "optionB": "body",
        "optionC": "hand"
      },
      {
        "question": "Each book is a ______ box.",
        "optionA": "wooden",
        "optionB": "small",
        "optionC": "magic",
        "correctAnswer": "magic"
      },
      {
        "question": "A child ______ a book with a touch.",
        "optionA": "closes",
        "optionB": "unlocks",
        "correctAnswer": "unlocks",
        "optionC": "hides"
      },
      {
        "question": "Books hold all things for their ______.",
        "optionA": "lovers",
        "correctAnswer": "lovers",
        "optionB": "readers",
        "optionC": "writers"
      },
      {
        "question": "Books take us to another ______ or age.",
        "optionA": "land",
        "correctAnswer": "land",
        "optionB": "room",
        "optionC": "city"
      },
      {
        "question": "We find ourselves at ______ with someone.",
        "optionA": "work",
        "optionB": "rest",
        "optionC": "play",
        "correctAnswer": "play"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Books bring new ideas and people into our imagination.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The room remains the same when we read a book.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Books are described as magic boxes in the poem.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Our mind stays in the chair while reading.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Books can take us to different lands and ages.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A character in a book can become our chosen friend.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books contain nothing useful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Reading books stops our imagination.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A child can unlock a book easily.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Books are meant only for entertainment and not knowledge.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
