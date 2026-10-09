export const chapter = "Chapter - 15: The Wait Is Over";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the librarian put his ear to the door?",
        "optionA": "To knock",
        "optionB": "To listen carefully",
        "correctAnswer": "To listen carefully",
        "optionC": "To open it"
      },
      {
        "question": "What surprised the librarian the most?",
        "optionA": "Loud sounds",
        "optionB": "Talking books",
        "correctAnswer": "Talking books",
        "optionC": "Broken shelves"
      },
      {
        "question": "Why were the books unhappy?",
        "optionA": "They were old",
        "optionB": "They were torn",
        "optionC": "No one came to read them",
        "correctAnswer": "No one came to read them"
      },
      {
        "question": "What did the fourth voice say about modern times?",
        "optionA": "People read more books",
        "optionB": "Libraries are crowded",
        "optionC": "People use mobiles for information",
        "correctAnswer": "People use mobiles for information"
      },
      {
        "question": "Why did the librarian feel the library was boring?",
        "optionA": "It had no books",
        "optionB": "No readers visited it",
        "correctAnswer": "No readers visited it",
        "optionC": "It was small"
      },
      {
        "question": "Why did the boy visit the library?",
        "optionA": "To play",
        "optionB": "To clear his confusion",
        "correctAnswer": "To clear his confusion",
        "optionC": "To meet friends"
      },
      {
        "question": "What did the librarian ask the boy to do first?",
        "optionA": "Enter his name in the register",
        "correctAnswer": "Enter his name in the register",
        "optionB": "Borrow a book",
        "optionC": "Sit quietly"
      },
      {
        "question": "Where were the books about great people kept?",
        "optionA": "First shelf",
        "optionB": "Second shelf",
        "correctAnswer": "Second shelf",
        "optionC": "Third shelf"
      },
      {
        "question": "What did the boy request before leaving?",
        "optionA": "A membership form",
        "correctAnswer": "A membership form",
        "optionB": "A pen",
        "optionC": "A notebook"
      },
      {
        "question": "What did the boy promise at the end?",
        "optionA": "To return books quickly",
        "optionB": "To bring more friends",
        "correctAnswer": "To bring more friends",
        "optionC": "To study daily"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The librarian was about to open the ______.",
        "optionA": "lock",
        "correctAnswer": "lock",
        "optionB": "window",
        "optionC": "gate"
      },
      {
        "question": "He heard voices from ______ the library.",
        "optionA": "outside",
        "optionB": "inside",
        "correctAnswer": "inside",
        "optionC": "above"
      },
      {
        "question": "The voices were ______ and not clear.",
        "optionA": "loud",
        "optionB": "sweet",
        "optionC": "indistinct",
        "correctAnswer": "indistinct"
      },
      {
        "question": "Books were kept in ______.",
        "optionA": "bags",
        "optionB": "bookshelves",
        "correctAnswer": "bookshelves",
        "optionC": "boxes"
      },
      {
        "question": "The books felt ______ because no one came to read them.",
        "optionA": "happy",
        "optionB": "boring",
        "correctAnswer": "boring",
        "optionC": "excited"
      },
      {
        "question": "People can find information using a ______.",
        "optionA": "radio",
        "optionB": "newspaper",
        "optionC": "mobile",
        "correctAnswer": "mobile"
      },
      {
        "question": "The boy was ______ due to different answers online.",
        "optionA": "happy",
        "optionB": "confused",
        "correctAnswer": "confused",
        "optionC": "relaxed"
      },
      {
        "question": "His grandfather advised him to check a ______.",
        "optionA": "video",
        "optionB": "book",
        "correctAnswer": "book",
        "optionC": "website"
      },
      {
        "question": "The librarian asked the boy to enter his name in the ______.",
        "optionA": "register",
        "correctAnswer": "register",
        "optionB": "notebook",
        "optionC": "diary"
      },
      {
        "question": "The boy left with a ______ in his hand.",
        "optionA": "book",
        "optionB": "form",
        "correctAnswer": "form",
        "optionC": "pen"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The librarian thought there might be thieves inside the library.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The voices heard by the librarian were clear.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The books complained that no one came to read them.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "According to the books, mobiles can give both information and wisdom.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The library had many visitors before the boy came.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boy came to the library on his grandfather’s advice.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The librarian refused to help the boy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boy wanted to learn about great people.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The boy could borrow a book without becoming a member.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boy decided to bring his friends to the library.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
