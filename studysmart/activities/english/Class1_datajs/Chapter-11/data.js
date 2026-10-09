export const chapter = "Chapter - 11: A Song";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who will sing a song?",
        "optionA": "A teacher",
        "optionB": "A singer",
        "correctAnswer": "A singer",
        "optionC": "A child"
      },
      {
        "question": "What will the singer sing?",
        "optionA": "A poem",
        "optionB": "A song",
        "correctAnswer": "A song",
        "optionC": "A story"
      },
      {
        "question": "How is the song described in the poem?",
        "optionA": "Not very long",
        "correctAnswer": "Not very long",
        "optionB": "Very long",
        "optionC": "Very loud"
      },
      {
        "question": "What does the speaker think about the song?",
        "optionA": "It is ugly",
        "optionB": "It is pretty",
        "correctAnswer": "It is pretty",
        "optionC": "It is boring"
      },
      {
        "question": "Where should you put your hand?",
        "optionA": "In your bag",
        "optionB": "In your pocket",
        "optionC": "In your purse",
        "correctAnswer": "In your purse"
      },
      {
        "question": "What should you give the poor singer?",
        "optionA": "A toy",
        "optionB": "A penny",
        "correctAnswer": "A penny",
        "optionC": "A book"
      },
      {
        "question": "What kind of singer is mentioned in the poem?",
        "optionA": "Rich",
        "optionB": "Happy",
        "optionC": "Poor",
        "correctAnswer": "Poor"
      },
      {
        "question": "What does the word “though” mean in the poem?",
        "optionA": "And",
        "optionB": "But",
        "correctAnswer": "But",
        "optionC": "So"
      },
      {
        "question": "What does “pretty” mean?",
        "optionA": "Beautiful",
        "correctAnswer": "Beautiful",
        "optionB": "Dirty",
        "optionC": "Small"
      },
      {
        "question": "What does the poem encourage us to do?",
        "optionA": "Help the singer",
        "correctAnswer": "Help the singer",
        "optionB": "Ignore others",
        "optionC": "Run away"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "I’ll ______ you a song.",
        "optionA": "sing",
        "correctAnswer": "sing",
        "optionB": "tell",
        "optionC": "write"
      },
      {
        "question": "Though not very ______.",
        "optionA": "short",
        "optionB": "long",
        "correctAnswer": "long",
        "optionC": "big"
      },
      {
        "question": "Yet I think it is as ______ as any.",
        "optionA": "pretty",
        "correctAnswer": "pretty",
        "optionB": "loud",
        "optionC": "bad"
      },
      {
        "question": "Put your ______ in your purse.",
        "optionA": "hand",
        "correctAnswer": "hand",
        "optionB": "book",
        "optionC": "pen"
      },
      {
        "question": "You’ll never ______ worse.",
        "optionA": "go",
        "optionB": "do",
        "optionC": "be",
        "correctAnswer": "be"
      },
      {
        "question": "And ______ the poor singer a penny.",
        "optionA": "send",
        "optionB": "take",
        "optionC": "give",
        "correctAnswer": "give"
      },
      {
        "question": "The singer is ______.",
        "optionA": "rich",
        "optionB": "poor",
        "correctAnswer": "poor",
        "optionC": "strong"
      },
      {
        "question": "The song is not very ______.",
        "optionA": "long",
        "correctAnswer": "long",
        "optionB": "short",
        "optionC": "small"
      },
      {
        "question": "The purse is used to keep ______.",
        "optionA": "toys",
        "optionB": "money",
        "correctAnswer": "money",
        "optionC": "food"
      },
      {
        "question": "The song is as ______ as any.",
        "optionA": "dull",
        "optionB": "pretty",
        "correctAnswer": "pretty",
        "optionC": "noisy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poem is about a song.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The song is very long.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The song is pretty.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The singer is rich.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should give a penny to the singer.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "“Though” means but.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A purse is used to keep money.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem tells us to help others.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The singer is poor.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "We should not help the singer.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
