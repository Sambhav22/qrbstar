export const chapter = "Chapter - 10: Helping Hand";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who said, “Good evening, Papa”?",
        "optionA": "Mummy",
        "optionB": "Mr. Sharma",
        "optionC": "Manya and Manav",
        "correctAnswer": "Manya and Manav"
      },
      {
        "question": "What did Mr. Sharma call his children?",
        "optionA": "Naughty children",
        "optionB": "Lovely children",
        "correctAnswer": "Lovely children",
        "optionC": "Small children"
      },
      {
        "question": "Why was Manya upset with Manav?",
        "optionA": "He broke her toy",
        "optionB": "He wanted to kick her teddy bear",
        "correctAnswer": "He wanted to kick her teddy bear",
        "optionC": "He took her book"
      },
      {
        "question": "What did Mr. Sharma say good boys should do?",
        "optionA": "Share their toys and things",
        "correctAnswer": "Share their toys and things",
        "optionB": "Fight",
        "optionC": "Sleep early"
      },
      {
        "question": "Where did Mr. Sharma go that day?",
        "optionA": "School",
        "optionB": "Market",
        "optionC": "Village",
        "correctAnswer": "Village"
      },
      {
        "question": "What did Manya say about the car?",
        "optionA": "It was clean",
        "optionB": "It was dirty",
        "correctAnswer": "It was dirty",
        "optionC": "It was new"
      },
      {
        "question": "What did Manav offer to do for Papa?",
        "optionA": "Drive the car",
        "optionB": "Wash clothes",
        "optionC": "Clean the car",
        "correctAnswer": "Clean the car"
      },
      {
        "question": "What did Manya ask Manav to bring from the store?",
        "optionA": "Bucket",
        "optionB": "Water pipe",
        "correctAnswer": "Water pipe",
        "optionC": "Soap"
      },
      {
        "question": "Who had all the keys?",
        "optionA": "Papa",
        "optionB": "Mummy",
        "correctAnswer": "Mummy",
        "optionC": "Manav"
      },
      {
        "question": "What happened to the car after washing?",
        "optionA": "It was shining",
        "correctAnswer": "It was shining",
        "optionB": "It broke",
        "optionC": "It was lost"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Mr. Sharma returned from the ______.",
        "optionA": "park",
        "optionB": "shop",
        "optionC": "office",
        "correctAnswer": "office"
      },
      {
        "question": "The children heard the car ______.",
        "optionA": "bell",
        "optionB": "horn",
        "correctAnswer": "horn",
        "optionC": "sound"
      },
      {
        "question": "Manya said Manav is not a ______ boy.",
        "optionA": "good",
        "correctAnswer": "good",
        "optionB": "bad",
        "optionC": "small"
      },
      {
        "question": "Manav wanted to ______ with the teddy bear.",
        "optionA": "sleep",
        "optionB": "play",
        "correctAnswer": "play",
        "optionC": "throw"
      },
      {
        "question": "Papa said, “You should ______ your toys.”",
        "optionA": "share",
        "correctAnswer": "share",
        "optionB": "hide",
        "optionC": "break"
      },
      {
        "question": "Manya brought the bucket and mug from the ______.",
        "optionA": "kitchen",
        "optionB": "washroom",
        "correctAnswer": "washroom",
        "optionC": "garden"
      },
      {
        "question": "Manav asked for the ______ of the lock.",
        "optionA": "door",
        "optionB": "handle",
        "optionC": "key",
        "correctAnswer": "key"
      },
      {
        "question": "Manav brought a piece of ______.",
        "optionA": "paper",
        "optionB": "wood",
        "optionC": "cloth",
        "correctAnswer": "cloth"
      },
      {
        "question": "They used a ______ to wash the car.",
        "optionA": "sponge",
        "correctAnswer": "sponge",
        "optionB": "book",
        "optionC": "chair"
      },
      {
        "question": "In the end, the car looked ______.",
        "optionA": "dirty",
        "optionB": "shining",
        "correctAnswer": "shining",
        "optionC": "broken"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Manya and Manav were playing when Papa came.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children said “Good morning” to Papa.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Manav wanted to play with the teddy bear.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Mr. Sharma told them not to share things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Papa’s car was clean when he arrived.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Manya and Manav cleaned the car together.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manav brought the bucket from the washroom.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mummy also joined in cleaning the car.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The children did not help their father.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The car was shining after washing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
