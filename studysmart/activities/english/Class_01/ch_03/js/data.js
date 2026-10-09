export const chapter = "Chapter - 3: Sounds";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which word has the ‘a’ sound?",
        "optionA": "bell",
        "optionB": "man",
        "correctAnswer": "man",
        "optionC": "mug"
      },
      {
        "question": "Which word shows the ‘e’ sound?",
        "optionA": "net",
        "correctAnswer": "net",
        "optionB": "dog",
        "optionC": "toy"
      },
      {
        "question": "Which word has the ‘i’ sound?",
        "optionA": "hip",
        "correctAnswer": "hip",
        "optionB": "hat",
        "optionC": "hot"
      },
      {
        "question": "Which word has the ‘o’ sound?",
        "optionA": "fin",
        "optionB": "fun",
        "optionC": "fog",
        "correctAnswer": "fog"
      },
      {
        "question": "Which word has the ‘u’ sound?",
        "optionA": "tap",
        "optionB": "top",
        "optionC": "tub",
        "correctAnswer": "tub"
      },
      {
        "question": "Which of the following is a vowel?",
        "optionA": "k",
        "optionB": "u",
        "correctAnswer": "u",
        "optionC": "t"
      },
      {
        "question": "Which word has the ‘e’ sound?",
        "optionA": "my",
        "optionB": "me",
        "correctAnswer": "me",
        "optionC": "mug"
      },
      {
        "question": "Which word has the ‘i’ sound?",
        "optionA": "kite",
        "correctAnswer": "kite",
        "optionB": "cat",
        "optionC": "cup"
      },
      {
        "question": "Which word has the ‘o’ sound?",
        "optionA": "tea",
        "optionB": "tie",
        "optionC": "toy",
        "correctAnswer": "toy"
      },
      {
        "question": "Which word has the ‘u’ sound?",
        "optionA": "mass",
        "optionB": "mouse",
        "correctAnswer": "mouse",
        "optionC": "mess"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The word m__n has the ‘a’ sound.",
        "optionA": "e",
        "optionB": "a",
        "correctAnswer": "a",
        "optionC": "i"
      },
      {
        "question": "The word d__n has the ‘e’ sound.",
        "optionA": "a",
        "optionB": "e",
        "correctAnswer": "e",
        "optionC": "u"
      },
      {
        "question": "The word k__d has the ‘i’ sound.",
        "optionA": "i",
        "correctAnswer": "i",
        "optionB": "o",
        "optionC": "a"
      },
      {
        "question": "The word h__t has the ‘o’ sound.",
        "optionA": "u",
        "optionB": "e",
        "optionC": "o",
        "correctAnswer": "o"
      },
      {
        "question": "The word t__b has the ‘u’ sound.",
        "optionA": "a",
        "optionB": "i",
        "optionC": "u",
        "correctAnswer": "u"
      },
      {
        "question": "The word b__ll has the ‘e’ sound.",
        "optionA": "a",
        "optionB": "e",
        "correctAnswer": "e",
        "optionC": "i"
      },
      {
        "question": "The word r__ng has the ‘i’ sound.",
        "optionA": "a",
        "optionB": "i",
        "correctAnswer": "i",
        "optionC": "o"
      },
      {
        "question": "The word f__g has the ‘o’ sound.",
        "optionA": "o",
        "correctAnswer": "o",
        "optionB": "u",
        "optionC": "a"
      },
      {
        "question": "The word f__n has the ‘u’ sound.",
        "optionA": "e",
        "optionB": "a",
        "optionC": "u",
        "correctAnswer": "u"
      },
      {
        "question": "The word n__t has the ‘e’ sound.",
        "optionA": "e",
        "correctAnswer": "e",
        "optionB": "o",
        "optionC": "a"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The word “ant” has the ‘a’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “bell” has the ‘a’ sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The word “ring” has the ‘i’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “dog” has the ‘u’ sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The word “mug” has the ‘u’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “net” has the ‘e’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “kite” has the ‘i’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “toy” has the ‘o’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The word “fun” has the ‘a’ sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The word “mouse” has the ‘u’ sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
