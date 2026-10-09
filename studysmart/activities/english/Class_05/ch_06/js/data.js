export const chapter = "Chapter - 6: The Cow";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wrote the poem “The Cow”?",
        "optionA": "William Wordsworth",
        "optionB": "Robert Louis Stevenson",
        "correctAnswer": "Robert Louis Stevenson",
        "optionC": "Ruskin Bond"
      },
      {
        "question": "What does the cow give the poet?",
        "optionA": "Milk",
        "optionB": "Cream",
        "correctAnswer": "Cream",
        "optionC": "Butter"
      },
      {
        "question": "How does the cow move around?",
        "optionA": "Running",
        "optionB": "Jumping",
        "optionC": "Lowing",
        "correctAnswer": "Lowing"
      },
      {
        "question": "Where does the cow stay most of the time?",
        "optionA": "In a house",
        "optionB": "In a cage",
        "optionC": "In the open air",
        "correctAnswer": "In the open air"
      },
      {
        "question": "What does the cow eat in the meadow?",
        "optionA": "Fruits",
        "optionB": "Flowers",
        "correctAnswer": "Flowers",
        "optionC": "Grains"
      },
      {
        "question": "Why does the poet love the cow?",
        "optionA": "Because it gives cream and is friendly",
        "correctAnswer": "Because it gives cream and is friendly",
        "optionB": "Because it runs fast",
        "optionC": "Because it is big"
      },
      {
        "question": "What happens to the cow when winds pass?",
        "optionA": "It sleeps",
        "optionB": "It is blown by winds",
        "correctAnswer": "It is blown by winds",
        "optionC": "It hides"
      },
      {
        "question": "What makes the cow wet?",
        "optionA": "River water",
        "optionB": "Showers",
        "correctAnswer": "Showers",
        "optionC": "Milk"
      },
      {
        "question": "What kind of air does the cow live in?",
        "optionA": "Pleasant open air",
        "correctAnswer": "Pleasant open air",
        "optionB": "Dirty air",
        "optionC": "Hot air"
      },
      {
        "question": "What kind of animal is the cow in the poem?",
        "optionA": "Wild",
        "optionB": "Friendly",
        "correctAnswer": "Friendly",
        "optionC": "Dangerous"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The cow gives me ______ with all her might.",
        "optionA": "cream",
        "correctAnswer": "cream",
        "optionB": "milk",
        "optionC": "butter"
      },
      {
        "question": "The cow wanders ______ here and there.",
        "optionA": "running",
        "optionB": "lowing",
        "correctAnswer": "lowing",
        "optionC": "flying"
      },
      {
        "question": "The cow stays in the pleasant ______ air.",
        "optionA": "dark",
        "optionB": "open",
        "correctAnswer": "open",
        "optionC": "closed"
      },
      {
        "question": "The cow is blown by all the ______ that pass.",
        "optionA": "clouds",
        "optionB": "birds",
        "optionC": "winds",
        "correctAnswer": "winds"
      },
      {
        "question": "The cow is wet with all the ______.",
        "optionA": "rains",
        "optionB": "showers",
        "correctAnswer": "showers",
        "optionC": "rivers"
      },
      {
        "question": "The cow walks among the meadow ______.",
        "optionA": "grass",
        "correctAnswer": "grass",
        "optionB": "sand",
        "optionC": "stones"
      },
      {
        "question": "The cow eats the meadow ______.",
        "optionA": "flowers",
        "correctAnswer": "flowers",
        "optionB": "leaves",
        "optionC": "fruits"
      },
      {
        "question": "The poet loves the cow with all his ______.",
        "optionA": "mind",
        "optionB": "heart",
        "correctAnswer": "heart",
        "optionC": "hands"
      },
      {
        "question": "The cow cannot ______ from its path.",
        "optionA": "run",
        "optionB": "jump",
        "optionC": "stray",
        "correctAnswer": "stray"
      },
      {
        "question": "The cow is described as red and ______.",
        "optionA": "black",
        "optionB": "white",
        "correctAnswer": "white",
        "optionC": "brown"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The cow is a friendly animal.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cow gives cream to the poet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cow stays only inside a house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The cow wanders lowing here and there.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cow eats meadow flowers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cow is never affected by weather.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The cow is blown by winds.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The cow is wet with showers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet dislikes the cow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The cow lives in pleasant open air.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
