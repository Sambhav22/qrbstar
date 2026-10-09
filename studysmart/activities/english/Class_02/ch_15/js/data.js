export const chapter = "Chapter - 15: A Tea Bag";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wrote the poem “A Tea Bag”?",
        "optionA": "Petu Dixon",
        "correctAnswer": "Petu Dixon",
        "optionB": "Riya",
        "optionC": "Mohan"
      },
      {
        "question": "What does the tea bag want to be?",
        "optionA": "A toy",
        "optionB": "A tea bag",
        "correctAnswer": "A tea bag",
        "optionC": "A cat"
      },
      {
        "question": "Where does the tea bag want to stay all day?",
        "optionA": "School",
        "optionB": "Home",
        "correctAnswer": "Home",
        "optionC": "Park"
      },
      {
        "question": "Who does the tea bag want to talk to?",
        "optionA": "Friends",
        "optionB": "Teachers",
        "optionC": "Other tea bags",
        "correctAnswer": "Other tea bags"
      },
      {
        "question": "What kind of life does the tea bag think it has?",
        "optionA": "Busy life",
        "optionB": "Sad life",
        "optionC": "Happy life",
        "correctAnswer": "Happy life"
      },
      {
        "question": "What does the tea bag lie in?",
        "optionA": "A cup",
        "optionB": "A little box",
        "correctAnswer": "A little box",
        "optionC": "A plate"
      },
      {
        "question": "What does the tea bag not want to wash?",
        "optionA": "Face",
        "correctAnswer": "Face",
        "optionB": "Hands",
        "optionC": "Hair"
      },
      {
        "question": "What does the tea bag not want to change?",
        "optionA": "Shirt",
        "optionB": "Shoes",
        "optionC": "Socks",
        "correctAnswer": "Socks"
      },
      {
        "question": "What work does the tea bag avoid?",
        "optionA": "Playing",
        "optionB": "Doing exams",
        "correctAnswer": "Doing exams",
        "optionC": "Sleeping"
      },
      {
        "question": "What does the tea bag do once in its life?",
        "optionA": "Make tea",
        "correctAnswer": "Make tea",
        "optionB": "Cook food",
        "optionC": "Wash clothes"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "I’d like to be a ______.",
        "optionA": "boy",
        "optionB": "tea bag",
        "correctAnswer": "tea bag",
        "optionC": "bird"
      },
      {
        "question": "And stay at ______ all day.",
        "optionA": "school",
        "optionB": "home",
        "correctAnswer": "home",
        "optionC": "park"
      },
      {
        "question": "And talk to other ______.",
        "optionA": "children",
        "optionB": "animals",
        "optionC": "tea bags",
        "correctAnswer": "tea bags"
      },
      {
        "question": "And lie in a little ______.",
        "optionA": "cup",
        "optionB": "box",
        "correctAnswer": "box",
        "optionC": "bag"
      },
      {
        "question": "And never have to wash my ______.",
        "optionA": "face",
        "correctAnswer": "face",
        "optionB": "hands",
        "optionC": "feet"
      },
      {
        "question": "Or change my dirty ______.",
        "optionA": "socks",
        "correctAnswer": "socks",
        "optionB": "shirt",
        "optionC": "shoes"
      },
      {
        "question": "I wouldn’t have to do ______.",
        "optionA": "games",
        "optionB": "exams",
        "correctAnswer": "exams",
        "optionC": "drawing"
      },
      {
        "question": "Or sweep the ______.",
        "optionA": "table",
        "optionB": "wall",
        "optionC": "floor",
        "correctAnswer": "floor"
      },
      {
        "question": "Or feed the ______.",
        "optionA": "dogs",
        "optionB": "cats",
        "correctAnswer": "cats",
        "optionC": "birds"
      },
      {
        "question": "I’d make a cup of ______.",
        "optionA": "milk",
        "optionB": "tea",
        "correctAnswer": "tea",
        "optionC": "juice"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The tea bag talks to other tea bags.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tea bag wants to work all day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tea bag stays at home all day.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tea bag lies in a little box.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tea bag washes its face daily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tea bag enjoys doing exams.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tea bag sweeps the floor.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tea bag feeds the cats.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tea bag has a happy life.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tea bag makes tea only once.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
