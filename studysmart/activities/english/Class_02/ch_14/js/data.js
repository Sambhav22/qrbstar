export const chapter = "Chapter - 14: The Mouse Ghost";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was Beaky?",
        "optionA": "Friend",
        "optionB": "Wife",
        "correctAnswer": "Wife",
        "optionC": "Sister"
      },
      {
        "question": "Where did Squeaky and Beaky live?",
        "optionA": "In a cave",
        "optionB": "In a hole",
        "correctAnswer": "In a hole",
        "optionC": "In a nest"
      },
      {
        "question": "What did the mice steal from the cottage?",
        "optionA": "A pillow",
        "correctAnswer": "A pillow",
        "optionB": "A blanket",
        "optionC": "A mat"
      },
      {
        "question": "What did the mice draw on the pillow?",
        "optionA": "A face",
        "optionB": "A ghost",
        "correctAnswer": "A ghost",
        "optionC": "A tree"
      },
      {
        "question": "Why did the mice make a ghost?",
        "optionA": "To play",
        "optionB": "To sleep",
        "optionC": "To scare animals",
        "correctAnswer": "To scare animals"
      },
      {
        "question": "Where did the mice keep the ghost?",
        "optionA": "Inside the forest",
        "optionB": "Outside their hole",
        "correctAnswer": "Outside their hole",
        "optionC": "On a tree"
      },
      {
        "question": "What did the animals think about the ghost?",
        "optionA": "It was real",
        "correctAnswer": "It was real",
        "optionB": "It was funny",
        "optionC": "It was soft"
      },
      {
        "question": "What happened when the wind blew fast?",
        "optionA": "The tree fell",
        "optionB": "The mice ran away",
        "optionC": "The pillow flew away",
        "correctAnswer": "The pillow flew away"
      },
      {
        "question": "What did the animals realize later?",
        "optionA": "It was magic",
        "optionB": "It was cloth and cotton",
        "correctAnswer": "It was cloth and cotton",
        "optionC": "It was real"
      },
      {
        "question": "What did the cat ask the mouse?",
        "optionA": "Where are you going?",
        "optionB": "Will you do this mischief again?",
        "correctAnswer": "Will you do this mischief again?",
        "optionC": "Are you happy?"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Squeaky lived with his ______.",
        "optionA": "wife",
        "correctAnswer": "wife",
        "optionB": "friend",
        "optionC": "brother"
      },
      {
        "question": "They lived at the edge of the ______.",
        "optionA": "river",
        "optionB": "forest",
        "correctAnswer": "forest",
        "optionC": "village"
      },
      {
        "question": "The mice took the pillow from a ______.",
        "optionA": "shop",
        "optionB": "cottage",
        "correctAnswer": "cottage",
        "optionC": "school"
      },
      {
        "question": "The ghost was kept outside the ______.",
        "optionA": "house",
        "optionB": "tree",
        "optionC": "hole",
        "correctAnswer": "hole"
      },
      {
        "question": "The animals were ______ of the ghost.",
        "optionA": "happy",
        "optionB": "terrified",
        "correctAnswer": "terrified",
        "optionC": "calm"
      },
      {
        "question": "The pillow was made of cloth and ______.",
        "optionA": "cotton",
        "correctAnswer": "cotton",
        "optionB": "wood",
        "optionC": "sand"
      },
      {
        "question": "The mice were very ______.",
        "optionA": "big",
        "optionB": "tiny",
        "correctAnswer": "tiny",
        "optionC": "strong"
      },
      {
        "question": "The ghost helped the mice stay ______.",
        "optionA": "safe",
        "correctAnswer": "safe",
        "optionB": "hungry",
        "optionC": "tired"
      },
      {
        "question": "The animals saw the pillow after the ______.",
        "optionA": "rain",
        "optionB": "winter",
        "optionC": "wind",
        "correctAnswer": "wind"
      },
      {
        "question": "The mouse said ______ at the end.",
        "optionA": "hello",
        "optionB": "thank you",
        "optionC": "sorry",
        "correctAnswer": "sorry"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Squeaky lived with Beaky.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The mice stole a pillow from a cottage.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The ghost was made of wood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The animals were scared of the ghost.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The mice were big animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The pillow flew away because of fast wind.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The animals later understood the truth.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cat wanted to hunt the mouse.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The mouse promised not to do mischief again.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The ghost stayed at the hole forever.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
