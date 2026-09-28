export const chapter = "Chapter - 7: Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we drink every day to stay healthy?",
        "options": {
          "A": "Milk",
          "B": "Water",
          "C": "Oil"
        },
        "answer": "B"
      },
      {
        "question": "Which living thing needs water to grow?",
        "options": {
          "A": "Plants",
          "B": "Toys",
          "C": "Books"
        },
        "answer": "A"
      },
      {
        "question": "Which of these is a source of water?",
        "options": {
          "A": "Pencil",
          "B": "Table",
          "C": "River"
        },
        "answer": "C"
      },
      {
        "question": "What helps us keep our body clean?",
        "options": {
          "A": "Dust",
          "B": "Water",
          "C": "Ink"
        },
        "answer": "B"
      },
      {
        "question": "Where do we get water in our homes?",
        "options": {
          "A": "Window",
          "B": "Tap",
          "C": "Door"
        },
        "answer": "B"
      },
      {
        "question": "What should we drink to stay healthy?",
        "options": {
          "A": "Mud water",
          "B": "Dirty water",
          "C": "Pure water"
        },
        "answer": "C"
      },
      {
        "question": "What may make us sick if we drink it?",
        "options": {
          "A": "Impure water",
          "B": "Clean water",
          "C": "Boiled water"
        },
        "answer": "A"
      },
      {
        "question": "Which of these helps cook food?",
        "options": {
          "A": "Water",
          "B": "Sand",
          "C": "Paper"
        },
        "answer": "A"
      },
      {
        "question": "What should we do after using water from a tap?",
        "options": {
          "A": "Leave it open",
          "B": "Close the tap",
          "C": "Break the tap"
        },
        "answer": "B"
      },
      {
        "question": "Who needs water to live?",
        "options": {
          "A": "Only plants",
          "B": "Only animals",
          "C": "All living things"
        },
        "answer": "C"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We drink ______ every day.",
        "options": {
          "A": "juice",
          "B": "water",
          "C": "oil"
        },
        "answer": "B"
      },
      {
        "question": "______ is the main source of water.",
        "options": {
          "A": "Paper",
          "B": "Stone",
          "C": "Rain"
        },
        "answer": "C"
      },
      {
        "question": "We use water for ______ food.",
        "options": {
          "A": "cooking",
          "B": "cutting",
          "C": "drawing"
        },
        "answer": "A"
      },
      {
        "question": "Plants need water to ______.",
        "options": {
          "A": "grow",
          "B": "jump",
          "C": "sleep"
        },
        "answer": "A"
      },
      {
        "question": "Dirty water is called ______ water.",
        "options": {
          "A": "pure",
          "B": "impure",
          "C": "sweet"
        },
        "answer": "B"
      },
      {
        "question": "We wash our ______ with water.",
        "options": {
          "A": "pencils",
          "B": "books",
          "C": "clothes"
        },
        "answer": "C"
      },
      {
        "question": "Boiling or filtering water makes it ______ for drinking.",
        "options": {
          "A": "salty",
          "B": "dirty",
          "C": "safe"
        },
        "answer": "C"
      },
      {
        "question": "We should ______ the tap when not in use.",
        "options": {
          "A": "close",
          "B": "break",
          "C": "paint"
        },
        "answer": "A"
      },
      {
        "question": "Water helps us stay ______ and clean.",
        "options": {
          "A": "tired",
          "B": "healthy",
          "C": "angry"
        },
        "answer": "B"
      },
      {
        "question": "We should ______ water and not waste it.",
        "options": {
          "A": "save",
          "B": "throw",
          "C": "waste"
        },
        "answer": "A"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Plants need water to grow.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Pure water is safe to drink.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Impure water may have germs.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "We should waste water.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Water helps us wash clothes.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Rain is a source of water.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Only people need water to live.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "We should close the tap after using water.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Boiling water can make it safe to drink.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Water is useful for cooking food.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
