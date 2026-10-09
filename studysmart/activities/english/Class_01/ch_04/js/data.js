export const chapter = "Chapter - 4: Articles ‘A’ and ‘An’";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was passing by when the kitten was alone?",
        "optionA": "A boy",
        "optionB": "A girl",
        "correctAnswer": "A girl",
        "optionC": "A teacher"
      },
      {
        "question": "What did the girl see on the road?",
        "optionA": "A dog",
        "optionB": "A bird",
        "optionC": "A kitten",
        "correctAnswer": "A kitten"
      },
      {
        "question": "What did the girl say about the kitten?",
        "optionA": "It is big",
        "optionB": "It is cute",
        "correctAnswer": "It is cute",
        "optionC": "It is small"
      },
      {
        "question": "What did the kitten do when the girl spoke to it?",
        "optionA": "Cried",
        "correctAnswer": "Cried",
        "optionB": "Laughed",
        "optionC": "Slept"
      },
      {
        "question": "What did the girl do after seeing the kitten cry?",
        "optionA": "Left it",
        "optionB": "Picked it up",
        "correctAnswer": "Picked it up",
        "optionC": "Ran away"
      },
      {
        "question": "What did the kitten say about its mother?",
        "optionA": "She is at home",
        "optionB": "She is sleeping",
        "optionC": "I don’t have a mother",
        "correctAnswer": "I don’t have a mother"
      },
      {
        "question": "What did the girl decide to do?",
        "optionA": "Leave the kitten",
        "optionB": "Take the kitten with her",
        "correctAnswer": "Take the kitten with her",
        "optionC": "Give it food only"
      },
      {
        "question": "What was the name of the girl?",
        "optionA": "Rina",
        "optionB": "Tapti",
        "correctAnswer": "Tapti",
        "optionC": "Meena"
      },
      {
        "question": "What name did the girl give to the kitten?",
        "optionA": "Charlie",
        "correctAnswer": "Charlie",
        "optionB": "Tommy",
        "optionC": "Bunny"
      },
      {
        "question": "How did they live in the end?",
        "optionA": "Sadly",
        "optionB": "Happily together",
        "correctAnswer": "Happily together",
        "optionC": "Alone"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The girl said, “How ______ a kitten!”",
        "optionA": "big",
        "optionB": "cute",
        "correctAnswer": "cute",
        "optionC": "small"
      },
      {
        "question": "The kitten did not know where to ______.",
        "optionA": "go",
        "correctAnswer": "go",
        "optionB": "eat",
        "optionC": "sleep"
      },
      {
        "question": "The girl ______ up the kitten.",
        "optionA": "pushed",
        "optionB": "dropped",
        "optionC": "picked",
        "correctAnswer": "picked"
      },
      {
        "question": "The kitten said, “I don’t have a ______.”",
        "optionA": "toy",
        "optionB": "house",
        "optionC": "mother",
        "correctAnswer": "mother"
      },
      {
        "question": "The girl said, “I shall take you with ______.”",
        "optionA": "him",
        "optionB": "me",
        "correctAnswer": "me",
        "optionC": "them"
      },
      {
        "question": "My name is ______.",
        "optionA": "Tapti",
        "correctAnswer": "Tapti",
        "optionB": "Riya",
        "optionC": "Sita"
      },
      {
        "question": "The kitten said, “______.”",
        "optionA": "Yes",
        "optionB": "Hello",
        "optionC": "No",
        "correctAnswer": "No"
      },
      {
        "question": "I shall call you ______.",
        "optionA": "Charlie",
        "correctAnswer": "Charlie",
        "optionB": "Bruno",
        "optionC": "Tiger"
      },
      {
        "question": "Tapti brought Charlie to her ______.",
        "optionA": "school",
        "optionB": "house",
        "correctAnswer": "house",
        "optionC": "park"
      },
      {
        "question": "They lived ______ happily.",
        "optionA": "alone",
        "optionB": "together",
        "correctAnswer": "together",
        "optionC": "outside"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The kitten’s mother died in an accident.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kitten knew where to go.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The girl saw the kitten.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The girl did not help the kitten.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The kitten laughed when the girl spoke.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The girl asked the kitten its name.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kitten already had a name.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The girl named the kitten Charlie.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tapti took the kitten to her house.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "They lived happily together.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
