export const chapter = "Chapter - 5: The Magic Paintbrush";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did Ma Liang live?",
        "optionA": "India",
        "optionB": "China",
        "correctAnswer": "China",
        "optionC": "Japan"
      },
      {
        "question": "What did Ma Liang receive from the old man in his dream?",
        "optionA": "A magic paintbrush",
        "correctAnswer": "A magic paintbrush",
        "optionB": "A golden coin",
        "optionC": "A book"
      },
      {
        "question": "Where did Ma Liang find the paintbrush after waking up?",
        "optionA": "In the garden",
        "optionB": "On his desk",
        "correctAnswer": "On his desk",
        "optionC": "In the market"
      },
      {
        "question": "Why did Ma Liang walk around the village?",
        "optionA": "To play games",
        "optionB": "To find food",
        "optionC": "To help people in need",
        "correctAnswer": "To help people in need"
      },
      {
        "question": "Who was unhappy because his bullock had died?",
        "optionA": "Farmer",
        "optionB": "Cart driver",
        "correctAnswer": "Cart driver",
        "optionC": "Landlord"
      },
      {
        "question": "What did Ma Liang draw to help the cart driver?",
        "optionA": "A bullock",
        "correctAnswer": "A bullock",
        "optionB": "A horse",
        "optionC": "A cart"
      },
      {
        "question": "What did the landlord want to make using the paintbrush?",
        "optionA": "A house",
        "optionB": "A hill of gold",
        "correctAnswer": "A hill of gold",
        "optionC": "A river"
      },
      {
        "question": "Who abducted Ma Liang?",
        "optionA": "Soldiers",
        "optionB": "Villagers",
        "optionC": "Muscleman sent by landlord",
        "correctAnswer": "Muscleman sent by landlord"
      },
      {
        "question": "What did Ma Liang draw before drawing the gold hill?",
        "optionA": "A road",
        "optionB": "A river",
        "correctAnswer": "A river",
        "optionC": "A tree"
      },
      {
        "question": "What happened to the landlord in the end?",
        "optionA": "He was never seen again",
        "correctAnswer": "He was never seen again",
        "optionB": "He became rich",
        "optionC": "He went home"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Ma Liang was a ______ boy.",
        "optionA": "poor",
        "correctAnswer": "poor",
        "optionB": "rich",
        "optionC": "lazy"
      },
      {
        "question": "The old man gave Ma Liang a ______ paintbrush.",
        "optionA": "simple",
        "optionB": "magic",
        "correctAnswer": "magic",
        "optionC": "broken"
      },
      {
        "question": "Ma Liang woke up from his ______.",
        "optionA": "sleep",
        "optionB": "dream",
        "correctAnswer": "dream",
        "optionC": "walk"
      },
      {
        "question": "The paintbrush was ______ in colour.",
        "optionA": "black",
        "optionB": "blue",
        "optionC": "golden",
        "correctAnswer": "golden"
      },
      {
        "question": "The farmer’s plants were dying due to lack of ______.",
        "optionA": "sunlight",
        "optionB": "water",
        "correctAnswer": "water",
        "optionC": "soil"
      },
      {
        "question": "The landlord was very ______.",
        "optionA": "greedy",
        "correctAnswer": "greedy",
        "optionB": "kind",
        "optionC": "helpful"
      },
      {
        "question": "The river was full of ______.",
        "optionA": "sand",
        "optionB": "rocks",
        "optionC": "water",
        "correctAnswer": "water"
      },
      {
        "question": "Ma Liang drew a ______ for the landlord to cross the river.",
        "optionA": "bridge",
        "optionB": "boat",
        "correctAnswer": "boat",
        "optionC": "rope"
      },
      {
        "question": "A ______ storm sank the boat.",
        "optionA": "small",
        "optionB": "tremendous",
        "correctAnswer": "tremendous",
        "optionC": "light"
      },
      {
        "question": "Ma Liang continued helping ______ people.",
        "optionA": "needy",
        "correctAnswer": "needy",
        "optionB": "rich",
        "optionC": "strong"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Ma Liang was friendly and helpful to others.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The magic paintbrush worked for the landlord.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ma Liang helped people in distress.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The landlord was a kind man.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The landlord forced Ma Liang to give the paintbrush.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The gold hill appeared across the river.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The landlord crossed the river safely.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ma Liang drew a storm in the river.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People were troubled by the landlord.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Ma Liang stopped helping people after this incident.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
