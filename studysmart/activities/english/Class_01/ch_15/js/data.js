export const chapter = "Chapter - 15: The Parted Friends";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was Jumbo?",
        "optionA": "A lion",
        "optionB": "An elephant",
        "correctAnswer": "An elephant",
        "optionC": "A dog"
      },
      {
        "question": "Why was Jumbo not eating well?",
        "optionA": "Kamini went away",
        "correctAnswer": "Kamini went away",
        "optionB": "He was sick",
        "optionC": "He was angry"
      },
      {
        "question": "Who was Kamini?",
        "optionA": "A teacher",
        "optionB": "The mahout’s daughter",
        "correctAnswer": "The mahout’s daughter",
        "optionC": "A doctor"
      },
      {
        "question": "How many days ago was Kamini married?",
        "optionA": "Two days",
        "optionB": "Ten days",
        "optionC": "Four days",
        "correctAnswer": "Four days"
      },
      {
        "question": "Where was the mahout sleeping?",
        "optionA": "In a hut",
        "correctAnswer": "In a hut",
        "optionB": "In a field",
        "optionC": "In a house"
      },
      {
        "question": "What did the mahout hear suddenly?",
        "optionA": "Jumbo crying",
        "optionB": "Jumbo trumpeting happily",
        "correctAnswer": "Jumbo trumpeting happily",
        "optionC": "Jumbo running"
      },
      {
        "question": "What did the mahout do after hearing the sound?",
        "optionA": "He rushed out quickly",
        "correctAnswer": "He rushed out quickly",
        "optionB": "He slept again",
        "optionC": "He called someone"
      },
      {
        "question": "Where was Kamini sitting?",
        "optionA": "On a chair",
        "optionB": "On Jumbo",
        "correctAnswer": "On Jumbo",
        "optionC": "On the ground"
      },
      {
        "question": "What did Jumbo do to show happiness?",
        "optionA": "Ran fast",
        "optionB": "Slept",
        "optionC": "Shook his trunk up and down",
        "correctAnswer": "Shook his trunk up and down"
      },
      {
        "question": "What did Kamini say to Jumbo?",
        "optionA": "She will stay forever",
        "optionB": "She cannot live there forever",
        "correctAnswer": "She cannot live there forever",
        "optionC": "She will not come again"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Jumbo was an ______.",
        "optionA": "lion",
        "optionB": "elephant",
        "correctAnswer": "elephant",
        "optionC": "tiger"
      },
      {
        "question": "Kamini was the ______ daughter.",
        "optionA": "mahout’s",
        "correctAnswer": "mahout’s",
        "optionB": "farmer’s",
        "optionC": "teacher’s"
      },
      {
        "question": "Jumbo did not eat his share of ______.",
        "optionA": "grass",
        "optionB": "bananas",
        "correctAnswer": "bananas",
        "optionC": "leaves"
      },
      {
        "question": "The mahout was sleeping in his ______.",
        "optionA": "field",
        "optionB": "room",
        "optionC": "hut",
        "correctAnswer": "hut"
      },
      {
        "question": "Jumbo was ______ without Kamini.",
        "optionA": "happy",
        "optionB": "sad",
        "correctAnswer": "sad",
        "optionC": "angry"
      },
      {
        "question": "Kamini was sitting on ______.",
        "optionA": "a chair",
        "optionB": "a table",
        "optionC": "Jumbo",
        "correctAnswer": "Jumbo"
      },
      {
        "question": "Jumbo was shaking his ______.",
        "optionA": "trunk",
        "correctAnswer": "trunk",
        "optionB": "tail",
        "optionC": "leg"
      },
      {
        "question": "Kamini touched Jumbo’s ______.",
        "optionA": "ear",
        "optionB": "trunk",
        "correctAnswer": "trunk",
        "optionC": "head"
      },
      {
        "question": "Kamini had a new ______.",
        "optionA": "school",
        "optionB": "house",
        "correctAnswer": "house",
        "optionC": "hut"
      },
      {
        "question": "Jumbo shook his ______ up and down.",
        "optionA": "head",
        "correctAnswer": "head",
        "optionB": "leg",
        "optionC": "tail"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Jumbo was not eating well since Kamini went away.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Kamini was the mahout’s daughter.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jumbo was happy without Kamini.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The mahout was sleeping in his hut.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The mahout ignored Jumbo’s sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Kamini came to meet Jumbo.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Jumbo showed happiness by shaking his trunk.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Kamini said she would live there forever.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Jumbo understood Kamini’s words.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Kamini was sad to see Jumbo.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
