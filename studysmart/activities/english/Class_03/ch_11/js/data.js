export const chapter = "Chapter - 11: The Right Trick";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where were the dog and the rabbit sitting?",
        "optionA": "Under a tree",
        "correctAnswer": "Under a tree",
        "optionB": "Near a river",
        "optionC": "Inside a cave"
      },
      {
        "question": "Who said that a new tiger had come to the jungle?",
        "optionA": "The rabbit",
        "optionB": "The dog",
        "correctAnswer": "The dog",
        "optionC": "The tiger"
      },
      {
        "question": "What did the rabbit think about the tiger at first?",
        "optionA": "It hunts small animals",
        "optionB": "It hunts rabbits",
        "optionC": "It does not hunt rabbits",
        "correctAnswer": "It does not hunt rabbits"
      },
      {
        "question": "What did the dog say about the tiger?",
        "optionA": "It was weak",
        "optionB": "It was smart",
        "correctAnswer": "It was smart",
        "optionC": "It was slow"
      },
      {
        "question": "What did the rabbit ask the dog to teach him?",
        "optionA": "How to run",
        "optionB": "How to hide",
        "optionC": "One trick",
        "correctAnswer": "One trick"
      },
      {
        "question": "Why did the dog refuse to teach the rabbit?",
        "optionA": "He was busy",
        "optionB": "He was afraid",
        "optionC": "He thought tricks were for smart animals",
        "correctAnswer": "He thought tricks were for smart animals"
      },
      {
        "question": "What did the rabbit decide to do?",
        "optionA": "Learn many tricks",
        "optionB": "Brush up his only trick",
        "correctAnswer": "Brush up his only trick",
        "optionC": "Run away"
      },
      {
        "question": "What warning did the rabbit give?",
        "optionA": "The tiger is here",
        "correctAnswer": "The tiger is here",
        "optionB": "The dog is coming",
        "optionC": "The jungle is dangerous"
      },
      {
        "question": "What did the rabbit do when the tiger came?",
        "optionA": "Ran away",
        "optionB": "Hid behind bushes",
        "optionC": "Climbed up the tree",
        "correctAnswer": "Climbed up the tree"
      },
      {
        "question": "What helped the rabbit save himself?",
        "optionA": "Climbing the tree",
        "correctAnswer": "Climbing the tree",
        "optionB": "Running fast",
        "optionC": "Hiding behind bushes"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Once upon a time, there lived a dog and a ______ in a jungle.",
        "optionA": "tiger",
        "optionB": "rabbit",
        "correctAnswer": "rabbit",
        "optionC": "lion"
      },
      {
        "question": "The dog said that a new ______ had come to the jungle.",
        "optionA": "lion",
        "optionB": "tiger",
        "correctAnswer": "tiger",
        "optionC": "elephant"
      },
      {
        "question": "The tiger preyed on ______ animals like the dog and the rabbit.",
        "optionA": "small",
        "correctAnswer": "small",
        "optionB": "big",
        "optionC": "strong"
      },
      {
        "question": "The rabbit was very ______ after hearing about the tiger.",
        "optionA": "happy",
        "optionB": "terrified",
        "correctAnswer": "terrified",
        "optionC": "excited"
      },
      {
        "question": "The dog said he knew a lot of ______.",
        "optionA": "games",
        "optionB": "stories",
        "optionC": "tricks",
        "correctAnswer": "tricks"
      },
      {
        "question": "The rabbit knew only ______ trick.",
        "optionA": "one",
        "correctAnswer": "one",
        "optionB": "two",
        "optionC": "three"
      },
      {
        "question": "The rabbit climbed up the tree ______.",
        "optionA": "slowly",
        "optionB": "quickly",
        "correctAnswer": "quickly",
        "optionC": "quietly"
      },
      {
        "question": "The dog jumped over the ______.",
        "optionA": "trees",
        "optionB": "bushes",
        "correctAnswer": "bushes",
        "optionC": "river"
      },
      {
        "question": "The dog hid behind the ______.",
        "optionA": "bushes",
        "correctAnswer": "bushes",
        "optionB": "stones",
        "optionC": "hills"
      },
      {
        "question": "The tiger caught the dog for his ______.",
        "optionA": "dinner",
        "optionB": "food",
        "optionC": "lunch",
        "correctAnswer": "lunch"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The dog and the rabbit lived in a jungle.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rabbit believed that the tiger would hunt him.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The dog knew many tricks.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rabbit asked the dog to teach him a trick.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog agreed to teach the rabbit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The rabbit climbed the tree when the tiger came.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog stayed in one place quietly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The dog used many tricks to save himself.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tiger caught the rabbit.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The rabbit was able to save himself.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
