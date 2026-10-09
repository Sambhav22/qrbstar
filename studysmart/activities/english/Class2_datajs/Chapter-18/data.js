export const chapter = "Chapter - 18: The Puffin";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where did the puffin live?",
        "optionA": "Forest",
        "optionB": "Desert",
        "optionC": "Island",
        "correctAnswer": "Island"
      },
      {
        "question": "What did the puffin eat earlier?",
        "optionA": "Fruits",
        "optionB": "Fishes",
        "correctAnswer": "Fishes",
        "optionC": "Bread"
      },
      {
        "question": "Why was the puffin unhappy?",
        "optionA": "He had no friends",
        "correctAnswer": "He had no friends",
        "optionB": "He was hungry",
        "optionC": "He was tired"
      },
      {
        "question": "Who came to the puffin?",
        "optionA": "Birds",
        "optionB": "Fishes",
        "correctAnswer": "Fishes",
        "optionC": "Animals"
      },
      {
        "question": "What did the fishes offer to the puffin?",
        "optionA": "Food",
        "optionB": "Friendship",
        "correctAnswer": "Friendship",
        "optionC": "Shelter"
      },
      {
        "question": "What did the puffin do when he felt lonely?",
        "optionA": "Slept",
        "optionB": "Ran",
        "optionC": "Cried",
        "correctAnswer": "Cried"
      },
      {
        "question": "What did the puffin stop eating?",
        "optionA": "Pancakes",
        "optionB": "Fruits",
        "optionC": "Fishes",
        "correctAnswer": "Fishes"
      },
      {
        "question": "What does the puffin eat now?",
        "optionA": "Pancakes",
        "correctAnswer": "Pancakes",
        "optionB": "Fish",
        "optionC": "Rice"
      },
      {
        "question": "What did the puffin gain in the end?",
        "optionA": "Friends",
        "correctAnswer": "Friends",
        "optionB": "Food",
        "optionC": "Money"
      },
      {
        "question": "What is the poem mainly about?",
        "optionA": "Food",
        "optionB": "Friendship",
        "correctAnswer": "Friendship",
        "optionC": "Travel"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The puffin lived on an ______.",
        "optionA": "tree",
        "optionB": "island",
        "correctAnswer": "island",
        "optionC": "hill"
      },
      {
        "question": "The puffin lived in the bright blue ______.",
        "optionA": "sea",
        "correctAnswer": "sea",
        "optionB": "sky",
        "optionC": "river"
      },
      {
        "question": "The puffin ate little ______.",
        "optionA": "fruits",
        "optionB": "fishes",
        "correctAnswer": "fishes",
        "optionC": "seeds"
      },
      {
        "question": "The puffin had nobody to ______ with.",
        "optionA": "talk",
        "optionB": "eat",
        "optionC": "play",
        "correctAnswer": "play"
      },
      {
        "question": "The puffin felt very ______.",
        "optionA": "happy",
        "optionB": "lonely",
        "correctAnswer": "lonely",
        "optionC": "strong"
      },
      {
        "question": "The fishes became his ______.",
        "optionA": "playmates",
        "correctAnswer": "playmates",
        "optionB": "enemies",
        "optionC": "teachers"
      },
      {
        "question": "The puffin now plays ______.",
        "optionA": "together",
        "correctAnswer": "together",
        "optionB": "alone",
        "optionC": "quickly"
      },
      {
        "question": "The puffin plays in all kinds of ______.",
        "optionA": "places",
        "optionB": "weather",
        "correctAnswer": "weather",
        "optionC": "time"
      },
      {
        "question": "The puffin eats ______ now.",
        "optionA": "fish",
        "optionB": "pancakes",
        "correctAnswer": "pancakes",
        "optionC": "rice"
      },
      {
        "question": "The puffin gave up eating ______.",
        "optionA": "fruits",
        "optionB": "bread",
        "optionC": "fishes",
        "correctAnswer": "fishes"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The puffin lived on an island.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The puffin had many friends at first.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The puffin felt lonely.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fishes ignored the puffin.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fishes became his playmates.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The puffin continued eating fishes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The puffin eats pancakes now.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The puffin became happy in the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The puffin lived in a desert.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poem teaches us about friendship.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
