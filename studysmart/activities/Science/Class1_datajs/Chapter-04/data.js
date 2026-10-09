export const chapter = "Chapter - 4: My body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which part of our body helps us to see?",
        "optionA": "Nose",
        "optionB": "Eyes",
        "optionC": "Ears",
        "correctAnswer": "Eyes"
      },
      {
        "question": "Which part helps us to run and jump?",
        "optionA": "Hands",
        "optionB": "Legs",
        "optionC": "Tongue",
        "correctAnswer": "Legs"
      },
      {
        "question": "What is inside our head that helps us to think?",
        "optionA": "Heart",
        "optionB": "Stomach",
        "optionC": "Brain",
        "correctAnswer": "Brain"
      },
      {
        "question": "Which part joins the head and the body?",
        "optionA": "Chest",
        "optionB": "Neck",
        "optionC": "Back",
        "correctAnswer": "Neck"
      },
      {
        "question": "Which part helps us to write and eat?",
        "optionA": "Feet",
        "optionB": "Hands",
        "optionC": "Nose",
        "correctAnswer": "Hands"
      },
      {
        "question": "Which body part helps us to smell flowers?",
        "optionA": "Skin",
        "optionB": "Tongue",
        "optionC": "Nose",
        "correctAnswer": "Nose"
      },
      {
        "question": "What do we use to hear music?",
        "optionA": "Eyes",
        "optionB": "Ears",
        "optionC": "Tongue",
        "correctAnswer": "Ears"
      },
      {
        "question": "Which part helps us to taste food?",
        "optionA": "Tongue",
        "optionB": "Nose",
        "optionC": "Ears",
        "correctAnswer": "Tongue"
      },
      {
        "question": "What protects the heart and lungs?",
        "optionA": "Neck",
        "optionB": "Legs",
        "optionC": "Chest",
        "correctAnswer": "Chest"
      },
      {
        "question": "What helps us to feel hot or cold things?",
        "optionA": "Nose",
        "optionB": "Tongue",
        "optionC": "Skin",
        "correctAnswer": "Skin"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Our __ helps us to think and learn.",
        "optionA": "Nose",
        "optionB": "Tongue",
        "optionC": "Brain",
        "correctAnswer": "Brain"
      },
      {
        "question": "We use our __ to hold and pick up things.",
        "optionA": "Hands",
        "optionB": "Feet",
        "optionC": "Nose",
        "correctAnswer": "Hands"
      },
      {
        "question": "The __ protects our heart and lungs.",
        "optionA": "Neck",
        "optionB": "Chest",
        "optionC": "Back",
        "correctAnswer": "Chest"
      },
      {
        "question": "We can __ music with our ears.",
        "optionA": "Hear",
        "optionB": "Smell",
        "optionC": "See",
        "correctAnswer": "Hear"
      },
      {
        "question": "Our __ helps us to taste food.",
        "optionA": "Nose",
        "optionB": "Tongue",
        "optionC": "Ear",
        "correctAnswer": "Tongue"
      },
      {
        "question": "We can smell things with our __.",
        "optionA": "Ears",
        "optionB": "Eyes",
        "optionC": "Nose",
        "correctAnswer": "Nose"
      },
      {
        "question": "We feel hot and cold things with our __.",
        "optionA": "Eyes",
        "optionB": "Skin",
        "optionC": "Tongue",
        "correctAnswer": "Skin"
      },
      {
        "question": "The neck joins the __ and the body.",
        "optionA": "Head",
        "optionB": "Feet",
        "optionC": "Hands",
        "correctAnswer": "Head"
      },
      {
        "question": "We should eat __ food to stay healthy.",
        "optionA": "Junk",
        "optionB": "Spicy",
        "optionC": "Healthy",
        "correctAnswer": "Healthy"
      },
      {
        "question": "To stay clean, we should take a __ every day.",
        "optionA": "Nap",
        "optionB": "Walk",
        "optionC": "Bath",
        "correctAnswer": "Bath"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The brain is inside our chest.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Our hands help us to write and eat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We use our legs to see things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ears help us to hear sounds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The stomach helps in digestion of food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Tongue helps us to smell flowers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should keep our body clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The skin helps us to hear music.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should not put anything inside our ears.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Feet help us to balance while walking.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
