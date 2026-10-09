export const chapter = "Chapter - 8: The Miser’s Gold";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was the main character in the story?",
        "optionA": "A farmer",
        "optionB": "A miserly man",
        "correctAnswer": "A miserly man",
        "optionC": "A king"
      },
      {
        "question": "Where did the miser hide his gold coins?",
        "optionA": "In a box",
        "optionB": "In a cupboard",
        "optionC": "In a pit in the courtyard",
        "correctAnswer": "In a pit in the courtyard"
      },
      {
        "question": "What did the miser do every morning?",
        "optionA": "Sold his gold",
        "optionB": "Counted his gold coins",
        "correctAnswer": "Counted his gold coins",
        "optionC": "Gave gold to others"
      },
      {
        "question": "Who secretly watched the miser hiding his gold?",
        "optionA": "His servant",
        "optionB": "His friend",
        "optionC": "His neighbour",
        "correctAnswer": "His neighbour"
      },
      {
        "question": "When did the neighbour steal the gold coins?",
        "optionA": "In the morning",
        "optionB": "At night",
        "correctAnswer": "At night",
        "optionC": "In the afternoon"
      },
      {
        "question": "What did the neighbour put in place of the gold coins?",
        "optionA": "Pebbles",
        "correctAnswer": "Pebbles",
        "optionB": "Sand",
        "optionC": "Wood"
      },
      {
        "question": "What did the miser do when he saw pebbles in the pit?",
        "optionA": "Started wailing loudly",
        "correctAnswer": "Started wailing loudly",
        "optionB": "Laughed",
        "optionC": "Went away quietly"
      },
      {
        "question": "Who came to see why the miser was crying?",
        "optionA": "Friends",
        "optionB": "Neighbours",
        "correctAnswer": "Neighbours",
        "optionC": "Police"
      },
      {
        "question": "What advice did the old neighbour give the miser?",
        "optionA": "Hide gold better",
        "optionB": "Spend gold wisely",
        "correctAnswer": "Spend gold wisely",
        "optionC": "Sell gold"
      },
      {
        "question": "What lesson does the story teach us?",
        "optionA": "Use things wisely",
        "correctAnswer": "Use things wisely",
        "optionB": "Save everything",
        "optionC": "Hide money"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The miser was very ______.",
        "optionA": "miserly",
        "correctAnswer": "miserly",
        "optionB": "generous",
        "optionC": "kind"
      },
      {
        "question": "He lived in a ______ house.",
        "optionA": "small",
        "optionB": "large",
        "correctAnswer": "large",
        "optionC": "broken"
      },
      {
        "question": "He hid his gold coins in a ______.",
        "optionA": "box",
        "optionB": "pit",
        "correctAnswer": "pit",
        "optionC": "bag"
      },
      {
        "question": "He covered the pit with ______.",
        "optionA": "leaves",
        "optionB": "cloth",
        "optionC": "earth",
        "correctAnswer": "earth"
      },
      {
        "question": "Seeing his gold coins made him feel ______.",
        "optionA": "sad",
        "optionB": "delighted",
        "correctAnswer": "delighted",
        "optionC": "angry"
      },
      {
        "question": "The neighbour ______ into the courtyard at night.",
        "optionA": "broke in",
        "correctAnswer": "broke in",
        "optionB": "walked",
        "optionC": "jumped"
      },
      {
        "question": "The miser saw ______ instead of gold coins.",
        "optionA": "sand",
        "optionB": "pebbles",
        "correctAnswer": "pebbles",
        "optionC": "dust"
      },
      {
        "question": "The miser started ______ loudly.",
        "optionA": "laughing",
        "optionB": "wailing",
        "correctAnswer": "wailing",
        "optionC": "shouting"
      },
      {
        "question": "The old neighbour said gold is useless if we do not ______ it.",
        "optionA": "hide",
        "optionB": "count",
        "optionC": "spend",
        "correctAnswer": "spend"
      },
      {
        "question": "Pebbles are ______ stones.",
        "optionA": "big",
        "optionB": "small",
        "correctAnswer": "small",
        "optionC": "heavy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The miser wanted to spend his gold coins.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The miser hid his gold in a pit in the courtyard.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The neighbour knew about the hidden gold.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The neighbour stole the gold during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The pit was filled with gold coins the next day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The miser was happy when he saw pebbles.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The neighbours gathered after hearing his cries.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The old neighbour advised him wisely.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The miser used his gold properly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The story teaches that unused things are useless.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
