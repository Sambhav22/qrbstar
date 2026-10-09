export const chapter = "Chapter - 9: Father, Son and Kite";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wanted to fly a kite?",
        "optionA": "Father",
        "optionB": "Dhoom",
        "correctAnswer": "Dhoom",
        "optionC": "Teacher"
      },
      {
        "question": "Where were Dhoom and his father making the kite?",
        "optionA": "Terrace",
        "correctAnswer": "Terrace",
        "optionB": "Playground",
        "optionC": "Garden"
      },
      {
        "question": "What was the sky filled with?",
        "optionA": "Birds",
        "optionB": "Clouds",
        "optionC": "Colourful kites",
        "correctAnswer": "Colourful kites"
      },
      {
        "question": "What helps the kite to rise up in the sky?",
        "optionA": "Wind",
        "correctAnswer": "Wind",
        "optionB": "Paper",
        "optionC": "Stick"
      },
      {
        "question": "What did Dhoom do to the thread?",
        "optionA": "Held it tightly",
        "optionB": "Snapped it",
        "correctAnswer": "Snapped it",
        "optionC": "Ignored it"
      },
      {
        "question": "What happened to the kite after losing the thread?",
        "optionA": "It stayed still",
        "optionB": "It disappeared",
        "optionC": "It crashed down",
        "correctAnswer": "It crashed down"
      },
      {
        "question": "What shape are most kites?",
        "optionA": "Round",
        "optionB": "Triangle",
        "optionC": "Square or diamond-shaped",
        "correctAnswer": "Square or diamond-shaped"
      },
      {
        "question": "Where was the cave painting of a kite found?",
        "optionA": "India",
        "optionB": "Indonesia",
        "correctAnswer": "Indonesia",
        "optionC": "China"
      },
      {
        "question": "What helps guide the kite along with the thread?",
        "optionA": "Tail",
        "correctAnswer": "Tail",
        "optionB": "Stick",
        "optionC": "Paper"
      },
      {
        "question": "What does the wind represent in the story?",
        "optionA": "Fun",
        "optionB": "Opportunities",
        "correctAnswer": "Opportunities",
        "optionC": "Games"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The sky was __________ with colourful kites.",
        "optionA": "filled",
        "optionB": "dotted",
        "correctAnswer": "dotted",
        "optionC": "covered"
      },
      {
        "question": "The thread helps the kite to __________ in the sky.",
        "optionA": "fall",
        "optionB": "soar",
        "correctAnswer": "soar",
        "optionC": "break"
      },
      {
        "question": "The kite came down __________ after losing control.",
        "optionA": "gradually",
        "correctAnswer": "gradually",
        "optionB": "quickly",
        "optionC": "suddenly"
      },
      {
        "question": "The cave painting of a kite was found in __________.",
        "optionA": "Japan",
        "optionB": "Indonesia",
        "correctAnswer": "Indonesia",
        "optionC": "Nepal"
      },
      {
        "question": "The tail helps to __________ the kite.",
        "optionA": "guide",
        "correctAnswer": "guide",
        "optionB": "break",
        "optionC": "decorate"
      },
      {
        "question": "The kite finally __________ on the roof.",
        "optionA": "landed",
        "optionB": "stopped",
        "optionC": "crashed",
        "correctAnswer": "crashed"
      },
      {
        "question": "The father guides the child __________.",
        "optionA": "harshly",
        "optionB": "mildly",
        "correctAnswer": "mildly",
        "optionC": "angrily"
      },
      {
        "question": "Without the thread, the kite will __________.",
        "optionA": "stay up",
        "optionB": "move straight",
        "optionC": "fall down",
        "correctAnswer": "fall down"
      },
      {
        "question": "The kite moved left and right because it had no __________.",
        "optionA": "wind",
        "optionB": "guidance",
        "correctAnswer": "guidance",
        "optionC": "colour"
      },
      {
        "question": "Kite flying teaches us an important __________.",
        "optionA": "game",
        "optionB": "lesson",
        "correctAnswer": "lesson",
        "optionC": "rule"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The kite needs both wind and thread to fly properly.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The thread is not useful for the kite.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The kite remained steady after the thread was snapped.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The father compared the kite and thread to real life.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kite crashed on a roof.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tail helps in guiding the kite.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The kite came down slowly after losing control.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The wind represents opportunities in life.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The father does not support the child in the story.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The story gives a meaningful lesson about life.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
