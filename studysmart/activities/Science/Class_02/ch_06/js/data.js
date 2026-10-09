export const chapter = "Chapter - 6: Our Incredible Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps us think?",
        "optionA": "Eyes",
        "optionB": "Brain",
        "optionC": "Nose",
        "correctAnswer": "Brain"
      },
      {
        "question": "What part of the body helps us feel things?",
        "optionA": "Skin",
        "optionB": "Teeth",
        "optionC": "Tongue",
        "correctAnswer": "Skin"
      },
      {
        "question": "We blink our eyes to:",
        "optionA": "See better",
        "optionB": "Sleep",
        "optionC": "Keep them clean",
        "correctAnswer": "Keep them clean"
      },
      {
        "question": "Our bones help us:",
        "optionA": "Taste food",
        "optionB": "Give shape to our body",
        "optionC": "Smell",
        "correctAnswer": "Give shape to our body"
      },
      {
        "question": "What helps us to talk?",
        "optionA": "Eyes",
        "optionB": "Tongue",
        "optionC": "Ears",
        "correctAnswer": "Tongue"
      },
      {
        "question": "What connects our head to the body?",
        "optionA": "Neck",
        "optionB": "Legs",
        "optionC": "Hands",
        "correctAnswer": "Neck"
      },
      {
        "question": "What helps us to chew food?",
        "optionA": "Nose",
        "optionB": "Teeth",
        "optionC": "Ears",
        "correctAnswer": "Teeth"
      },
      {
        "question": "What should we drink to make bones strong?",
        "optionA": "Water",
        "optionB": "Juice",
        "optionC": "Milk",
        "correctAnswer": "Milk"
      },
      {
        "question": "What helps us to hear sounds?",
        "optionA": "Mouth",
        "optionB": "Ears",
        "optionC": "Neck",
        "correctAnswer": "Ears"
      },
      {
        "question": "What is found on our head?",
        "optionA": "Hair",
        "optionB": "Teeth",
        "optionC": "Bones",
        "correctAnswer": "Hair"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We have ___ ears.",
        "optionA": "Three",
        "optionB": "One",
        "optionC": "Two",
        "correctAnswer": "Two"
      },
      {
        "question": "The ___ helps us smell things.",
        "optionA": "Eye",
        "optionB": "Nose",
        "optionC": "Ear",
        "correctAnswer": "Nose"
      },
      {
        "question": "The ___ helps us taste sweet, sour, and bitter.",
        "optionA": "Teeth",
        "optionB": "Tongue",
        "optionC": "Nose",
        "correctAnswer": "Tongue"
      },
      {
        "question": "The ___ gives shape to our body.",
        "optionA": "Brain",
        "optionB": "Bones",
        "optionC": "Skin",
        "correctAnswer": "Bones"
      },
      {
        "question": "The ___ helps us eat and talk.",
        "optionA": "Mouth",
        "optionB": "Ears",
        "optionC": "Hands",
        "correctAnswer": "Mouth"
      },
      {
        "question": "Our ___ help us hold things.",
        "optionA": "Legs",
        "optionB": "Hands",
        "optionC": "Ears",
        "correctAnswer": "Hands"
      },
      {
        "question": "Our ___ help us run and jump.",
        "optionA": "Teeth",
        "optionB": "Legs",
        "optionC": "Neck",
        "correctAnswer": "Legs"
      },
      {
        "question": "The brain is in our ___.",
        "optionA": "Neck",
        "optionB": "Head",
        "optionC": "Chest",
        "correctAnswer": "Head"
      },
      {
        "question": "We use our ___ every day.",
        "optionA": "Car",
        "optionB": "Toys",
        "optionC": "Body",
        "correctAnswer": "Body"
      },
      {
        "question": "We should brush our teeth ___ a day.",
        "optionA": "Once",
        "optionB": "Twice",
        "optionC": "Thrice",
        "correctAnswer": "Twice"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Our skin helps us hear.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Our eyes help us see colours and shapes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We can taste food with our ears.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Muscles help us move our bones.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The nose helps us to smell and breathe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should put sharp things in our ears.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The neck connects the hand to the body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We have many teeth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The tongue helps us speak and taste.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We use our hands to chew food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
