export const chapter = "Chapter - 15: The School Boy";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does the poet enjoy most in a summer morning?",
        "optionA": "Going to school",
        "optionB": "Playing indoors",
        "optionC": "Listening to birds and nature",
        "correctAnswer": "Listening to birds and nature"
      },
      {
        "question": "What sound is made by the huntsman?",
        "optionA": "Drum",
        "optionB": "Horn",
        "correctAnswer": "Horn",
        "optionC": "Bell"
      },
      {
        "question": "What happens to the child’s joy when he goes to school?",
        "optionA": "It increases",
        "optionB": "It disappears",
        "correctAnswer": "It disappears",
        "optionC": "It remains same"
      },
      {
        "question": "What kind of place is described as “bower”?",
        "optionA": "A classroom",
        "optionB": "A playground",
        "optionC": "A shady place under a tree",
        "correctAnswer": "A shady place under a tree"
      },
      {
        "question": "What does the child feel during school hours?",
        "optionA": "Fear and sadness",
        "correctAnswer": "Fear and sadness",
        "optionB": "Happiness",
        "optionC": "Excitement"
      },
      {
        "question": "What is the sky-lark known for?",
        "optionA": "Running fast",
        "optionB": "Singing while flying",
        "correctAnswer": "Singing while flying",
        "optionC": "Sitting quietly"
      },
      {
        "question": "What makes the day “dreary” for the child?",
        "optionA": "Rain",
        "optionB": "Games",
        "optionC": "School and study pressure",
        "correctAnswer": "School and study pressure"
      },
      {
        "question": "What happens to buds in the poem?",
        "optionA": "They bloom",
        "optionB": "They fall",
        "optionC": "They are nip’d",
        "correctAnswer": "They are nip’d"
      },
      {
        "question": "What destroys happiness according to the poem?",
        "optionA": "Care and sorrow",
        "correctAnswer": "Care and sorrow",
        "optionB": "Joy",
        "optionC": "Music"
      },
      {
        "question": "What appears during winter in the poem?",
        "optionA": "Fruits",
        "optionB": "Flowers",
        "optionC": "Blasts of cold air",
        "correctAnswer": "Blasts of cold air"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The poet loves to rise in a ______ morn.",
        "optionA": "winter",
        "optionB": "rainy",
        "optionC": "summer",
        "correctAnswer": "summer"
      },
      {
        "question": "The birds sing on every ______.",
        "optionA": "tree",
        "correctAnswer": "tree",
        "optionB": "road",
        "optionC": "house"
      },
      {
        "question": "The distant huntsman winds his ______.",
        "optionA": "bell",
        "optionB": "horn",
        "correctAnswer": "horn",
        "optionC": "flute"
      },
      {
        "question": "The little ones spend the day in sighing and ______.",
        "optionA": "joy",
        "optionB": "fun",
        "optionC": "dismay",
        "correctAnswer": "dismay"
      },
      {
        "question": "The child sits ______ with anxiety.",
        "optionA": "drooping",
        "correctAnswer": "drooping",
        "optionB": "laughing",
        "optionC": "jumping"
      },
      {
        "question": "The bird sits in a ______ and sings.",
        "optionA": "tree",
        "optionB": "cage",
        "correctAnswer": "cage",
        "optionC": "nest"
      },
      {
        "question": "The child forgets his ______ spring.",
        "optionA": "long",
        "optionB": "youthful",
        "correctAnswer": "youthful",
        "optionC": "cold"
      },
      {
        "question": "The tender plants are strip’d of their ______.",
        "optionA": "leaves",
        "optionB": "joy",
        "correctAnswer": "joy",
        "optionC": "roots"
      },
      {
        "question": "The year becomes ______ with fruits.",
        "optionA": "dry",
        "optionB": "hard",
        "optionC": "mellowing",
        "correctAnswer": "mellowing"
      },
      {
        "question": "The blasts of ______ appear in winter.",
        "optionA": "summer",
        "optionB": "rain",
        "optionC": "winter",
        "correctAnswer": "winter"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poet dislikes the beauty of nature.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The child enjoys studying in school.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The sky-lark sings while flying.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child feels anxious in school.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A bird can happily sing in a cage.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Buds and plants represent children.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sorrow and care bring happiness.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poem shows the importance of freedom.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child enjoys the “dreary shower”.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Winter blasts destroy joy and growth.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
