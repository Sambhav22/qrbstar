export const chapter = "Chapter - 9: Peter and Pussboots";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was Peter in the story?",
        "optionA": "The eldest brother",
        "optionB": "The youngest brother",
        "correctAnswer": "The youngest brother",
        "optionC": "A king"
      },
      {
        "question": "What did Peter receive from his father?",
        "optionA": "A house",
        "optionB": "A mill",
        "optionC": "A cat",
        "correctAnswer": "A cat"
      },
      {
        "question": "What did the cat ask Peter to buy?",
        "optionA": "A crown",
        "optionB": "Shoes and a bag",
        "correctAnswer": "Shoes and a bag",
        "optionC": "Food"
      },
      {
        "question": "What did Pussboots catch in the forest?",
        "optionA": "Birds",
        "optionB": "Rabbits",
        "correctAnswer": "Rabbits",
        "optionC": "Fish"
      },
      {
        "question": "Who was given rabbits as a gift?",
        "optionA": "The king",
        "correctAnswer": "The king",
        "optionB": "The ogre",
        "optionC": "The princess"
      },
      {
        "question": "How did Pussboots introduce Peter to the king?",
        "optionA": "As Prince Artis of Carraba",
        "correctAnswer": "As Prince Artis of Carraba",
        "optionB": "As a farmer",
        "optionC": "As a soldier"
      },
      {
        "question": "What kind of creature was the ogre?",
        "optionA": "Kind giant",
        "optionB": "Cruel giant",
        "correctAnswer": "Cruel giant",
        "optionC": "Small animal"
      },
      {
        "question": "What special power did the ogre have?",
        "optionA": "Flying",
        "optionB": "Changing into any creature",
        "correctAnswer": "Changing into any creature",
        "optionC": "Turning invisible"
      },
      {
        "question": "What did the ogre turn into when tricked?",
        "optionA": "Lion",
        "optionB": "Dog",
        "optionC": "Mouse",
        "correctAnswer": "Mouse"
      },
      {
        "question": "What happened to Peter at the end of the story?",
        "optionA": "He became poor",
        "optionB": "He married the princess",
        "correctAnswer": "He married the princess",
        "optionC": "He left the kingdom"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Peter was worried about how he would ______ the cat.",
        "optionA": "sell",
        "optionB": "train",
        "optionC": "feed",
        "correctAnswer": "feed"
      },
      {
        "question": "The cat was named ______.",
        "optionA": "Snowball",
        "optionB": "Kitty",
        "optionC": "Pussboots",
        "correctAnswer": "Pussboots"
      },
      {
        "question": "Pussboots used a ______ to catch rabbits.",
        "optionA": "net",
        "optionB": "bag",
        "correctAnswer": "bag",
        "optionC": "rope"
      },
      {
        "question": "The bag was filled with lettuce and ______.",
        "optionA": "fruits",
        "optionB": "grains",
        "correctAnswer": "grains",
        "optionC": "leaves"
      },
      {
        "question": "The king loved eating ______.",
        "optionA": "rabbits",
        "correctAnswer": "rabbits",
        "optionB": "apples",
        "optionC": "bread"
      },
      {
        "question": "Pussboots said Peter was the Prince of ______.",
        "optionA": "Carraba",
        "correctAnswer": "Carraba",
        "optionB": "England",
        "optionC": "Rome"
      },
      {
        "question": "The ogre lived in a ______.",
        "optionA": "hut",
        "optionB": "fort",
        "correctAnswer": "fort",
        "optionC": "village"
      },
      {
        "question": "The ogre turned into a small ______.",
        "optionA": "mouse",
        "correctAnswer": "mouse",
        "optionB": "bird",
        "optionC": "insect"
      },
      {
        "question": "Peter entered the water as if he was ______.",
        "optionA": "swimming",
        "optionB": "playing",
        "optionC": "drowning",
        "correctAnswer": "drowning"
      },
      {
        "question": "Pussboots loved eating ______.",
        "optionA": "milk",
        "optionB": "ice cream",
        "correctAnswer": "ice cream",
        "optionC": "rice"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Peter had two brothers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The elder brothers gave Peter the house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Pussboots could speak like a human.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Pussboots caught animals in the forest.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The king disliked the gifts.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The ogre was a kind person.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Pussboots tricked the ogre into becoming small.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The king helped Peter by inviting him.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Peter became rich and happy in the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Pussboots was not helpful to Peter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
