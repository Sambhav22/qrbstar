export const chapter = "Chapter - 13: A Little Blue Bird";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did the blue birds live?",
        "optionA": "In a big tree",
        "correctAnswer": "In a big tree",
        "optionB": "In a cave",
        "optionC": "In a house"
      },
      {
        "question": "How many nestlings came out of the eggs?",
        "optionA": "Two",
        "optionB": "Three",
        "correctAnswer": "Three",
        "optionC": "Four"
      },
      {
        "question": "What did the nestlings do to get ready for flying?",
        "optionA": "Slept",
        "optionB": "Sat quietly",
        "optionC": "Flapped their wings",
        "correctAnswer": "Flapped their wings"
      },
      {
        "question": "What was Singy afraid of?",
        "optionA": "Darkness",
        "optionB": "Rain",
        "optionC": "Falling from the sky",
        "correctAnswer": "Falling from the sky"
      },
      {
        "question": "Who told Singy that the noise was “nothing”?",
        "optionA": "Father bird",
        "optionB": "Mother bird",
        "correctAnswer": "Mother bird",
        "optionC": "Another bird"
      },
      {
        "question": "What did Singy hear at night?",
        "optionA": "Loud noise",
        "correctAnswer": "Loud noise",
        "optionB": "Music",
        "optionC": "Rain"
      },
      {
        "question": "What did Singy think about “nothing”?",
        "optionA": "It was nothing",
        "optionB": "It was something new",
        "correctAnswer": "It was something new",
        "optionC": "It was a sound"
      },
      {
        "question": "Where did Singy go to find “nothing”?",
        "optionA": "Ground",
        "correctAnswer": "Ground",
        "optionB": "Sky",
        "optionC": "Tree"
      },
      {
        "question": "What did Singy see on the ground?",
        "optionA": "Animals",
        "optionB": "Birds flying easily",
        "correctAnswer": "Birds flying easily",
        "optionC": "Trees"
      },
      {
        "question": "When did Singy return to the nest?",
        "optionA": "Morning",
        "optionB": "Afternoon",
        "optionC": "Evening (sunset)",
        "correctAnswer": "Evening (sunset)"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The birds lived in a __________ tree.",
        "optionA": "big",
        "correctAnswer": "big",
        "optionB": "small",
        "optionC": "dry"
      },
      {
        "question": "The nestlings were growing up __________.",
        "optionA": "slowly",
        "optionB": "fast",
        "correctAnswer": "fast",
        "optionC": "quietly"
      },
      {
        "question": "Singy remained in the __________.",
        "optionA": "sky",
        "optionB": "ground",
        "optionC": "nest",
        "correctAnswer": "nest"
      },
      {
        "question": "There was a loud __________ at night.",
        "optionA": "sound",
        "optionB": "noise",
        "correctAnswer": "noise",
        "optionC": "voice"
      },
      {
        "question": "Singy wanted to find out __________.",
        "optionA": "food",
        "optionB": "nest",
        "optionC": "nothing",
        "correctAnswer": "nothing"
      },
      {
        "question": "He moved on the ground by __________.",
        "optionA": "running",
        "optionB": "flying",
        "optionC": "hopping",
        "correctAnswer": "hopping"
      },
      {
        "question": "He spread his __________ to fly.",
        "optionA": "legs",
        "optionB": "wings",
        "correctAnswer": "wings",
        "optionC": "hands"
      },
      {
        "question": "He pushed himself __________.",
        "optionA": "forward",
        "correctAnswer": "forward",
        "optionB": "backward",
        "optionC": "downward"
      },
      {
        "question": "His joy was __________.",
        "optionA": "small",
        "optionB": "boundless",
        "correctAnswer": "boundless",
        "optionC": "little"
      },
      {
        "question": "He returned to his __________.",
        "optionA": "nest",
        "correctAnswer": "nest",
        "optionB": "home",
        "optionC": "tree"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The nest was warm and comfortable.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All three nestlings learnt to fly at the same time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Singy was not afraid of flying.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The mother bird forced Singy to fly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Singy did not understand the meaning of “nothing”.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Singy jumped down from the nest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Singy saw other birds flying easily.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Singy could not fly at all.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Singy’s parents were happy when he returned.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Singy learned to fly after trying several times.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
