export const chapter = "Chapter - 2: Our Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which body part helps us eat and talk?",
        "optionA": "Nose",
        "optionB": "Mouth",
        "optionC": "Ear",
        "correctAnswer": "Mouth"
      },
      {
        "question": "Which body part joins the head to the body?",
        "optionA": "Neck",
        "optionB": "Arm",
        "optionC": "Leg",
        "correctAnswer": "Neck"
      },
      {
        "question": "Which body part helps us lift and throw things?",
        "optionA": "Arms",
        "optionB": "Eyes",
        "optionC": "Nose",
        "correctAnswer": "Arms"
      },
      {
        "question": "Which body part helps us stand and jump?",
        "optionA": "Tongue",
        "optionB": "Ears",
        "optionC": "Legs",
        "correctAnswer": "Legs"
      },
      {
        "question": "Which organ pumps blood to different parts of the body?",
        "optionA": "Brain",
        "optionB": "Heart",
        "optionC": "Stomach",
        "correctAnswer": "Heart"
      },
      {
        "question": "Which organ helps us think and learn?",
        "optionA": "Heart",
        "optionB": "Brain",
        "optionC": "Arm",
        "correctAnswer": "Brain"
      },
      {
        "question": "Which sense organ helps us smell flowers?",
        "optionA": "Nose",
        "optionB": "Skin",
        "optionC": "Tongue",
        "correctAnswer": "Nose"
      },
      {
        "question": "Which sense organ helps us hear sounds?",
        "optionA": "Ears",
        "optionB": "Nose",
        "optionC": "Eyes",
        "correctAnswer": "Ears"
      },
      {
        "question": "Which sense organ helps us see things around us?",
        "optionA": "Skin",
        "optionB": "Tongue",
        "optionC": "Eyes",
        "correctAnswer": "Eyes"
      },
      {
        "question": "Which sense organ helps us feel things?",
        "optionA": "Skin",
        "optionB": "Eyes",
        "optionC": "Nose",
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
        "question": "The ______ helps us see the world.",
        "optionA": "nose",
        "optionB": "ears",
        "optionC": "eyes",
        "correctAnswer": "eyes"
      },
      {
        "question": "The ______ help us hear sounds around us.",
        "optionA": "ears",
        "optionB": "tongue",
        "optionC": "skin",
        "correctAnswer": "ears"
      },
      {
        "question": "The ______ helps us smell different things.",
        "optionA": "nose",
        "optionB": "eyes",
        "optionC": "mouth",
        "correctAnswer": "nose"
      },
      {
        "question": "The ______ helps us taste food.",
        "optionA": "nose",
        "optionB": "tongue",
        "optionC": "ears",
        "correctAnswer": "tongue"
      },
      {
        "question": "The ______ helps us feel things.",
        "optionA": "skin",
        "optionB": "tongue",
        "optionC": "eyes",
        "correctAnswer": "skin"
      },
      {
        "question": "The ______ helps us think and remember.",
        "optionA": "heart",
        "optionB": "brain",
        "optionC": "leg",
        "correctAnswer": "brain"
      },
      {
        "question": "The ______ pumps blood in our body.",
        "optionA": "heart",
        "optionB": "arm",
        "optionC": "eye",
        "correctAnswer": "heart"
      },
      {
        "question": "The ______ help us walk and run.",
        "optionA": "nose",
        "optionB": "ears",
        "optionC": "legs",
        "correctAnswer": "legs"
      },
      {
        "question": "The ______ help us hold and wave things.",
        "optionA": "eyes",
        "optionB": "arms",
        "optionC": "skin",
        "correctAnswer": "arms"
      },
      {
        "question": "The ______ helps us eat and smile.",
        "optionA": "mouth",
        "optionB": "ear",
        "optionC": "nose",
        "correctAnswer": "mouth"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Our body has many different parts that help us do many things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The brain helps us think and learn.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The heart pumps blood to different parts of the body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The nose helps us taste food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The tongue helps us taste different foods.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The skin helps us feel things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Legs help us stand, walk, run, and jump.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Arms help us lift and throw things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Eyes help us hear sounds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should take care of our body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
