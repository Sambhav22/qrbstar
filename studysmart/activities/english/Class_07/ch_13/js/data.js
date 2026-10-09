export const chapter = "Chapter - 13: A Poison Tree";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wrote the poem “A Poison Tree”?",
        "optionA": "William Blake",
        "correctAnswer": "William Blake",
        "optionB": "William Wordsworth",
        "optionC": "Robert Frost"
      },
      {
        "question": "What emotion is mainly discussed in the poem?",
        "optionA": "Anger",
        "correctAnswer": "Anger",
        "optionB": "Happiness",
        "optionC": "Fear"
      },
      {
        "question": "What happens when anger is not expressed?",
        "optionA": "It disappears",
        "optionB": "It grows stronger",
        "correctAnswer": "It grows stronger",
        "optionC": "It weakens"
      },
      {
        "question": "What did the poet use to water his anger?",
        "optionA": "Joy",
        "optionB": "Tears and fears",
        "correctAnswer": "Tears and fears",
        "optionC": "Sunshine"
      },
      {
        "question": "What helped the anger grow further?",
        "optionA": "Silence",
        "optionB": "Friendship",
        "optionC": "Smiles and deceitful wiles F",
        "correctAnswer": "Smiles and deceitful wiles F"
      },
      {
        "question": "What did the anger finally become?",
        "optionA": "A flower",
        "optionB": "A bright apple",
        "correctAnswer": "A bright apple",
        "optionC": "A river"
      },
      {
        "question": "Why did the foe enter the garden?",
        "optionA": "To meet the poet",
        "optionB": "To rest",
        "optionC": "To steal the apple",
        "correctAnswer": "To steal the apple"
      },
      {
        "question": "When did the foe enter the garden?",
        "optionA": "Morning",
        "optionB": "Night",
        "correctAnswer": "Night",
        "optionC": "Afternoon"
      },
      {
        "question": "What does the word “foe” mean?",
        "optionA": "Friend",
        "optionB": "Enemy",
        "correctAnswer": "Enemy",
        "optionC": "Stranger"
      },
      {
        "question": "What is the tone of the poem?",
        "optionA": "Serious and warning",
        "correctAnswer": "Serious and warning",
        "optionB": "Humorous",
        "optionC": "Joyful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The poet told his anger to his ______.",
        "optionA": "foe",
        "optionB": "friend",
        "correctAnswer": "friend",
        "optionC": "teacher"
      },
      {
        "question": "When anger was told, it ______.",
        "optionA": "grew",
        "optionB": "ended",
        "correctAnswer": "ended",
        "optionC": "doubled"
      },
      {
        "question": "The poet did not tell his ______.",
        "optionA": "foe",
        "correctAnswer": "foe",
        "optionB": "friend",
        "optionC": "brother"
      },
      {
        "question": "The anger grew ______ and night.",
        "optionA": "slowly",
        "optionB": "evening",
        "optionC": "day",
        "correctAnswer": "day"
      },
      {
        "question": "The tree produced a ______ apple.",
        "optionA": "dull",
        "optionB": "bright",
        "correctAnswer": "bright",
        "optionC": "small"
      },
      {
        "question": "The poet used ______ to hide his feelings.",
        "optionA": "anger",
        "optionB": "smiles",
        "correctAnswer": "smiles",
        "optionC": "silence"
      },
      {
        "question": "The foe ______ the apple shining.",
        "optionA": "ignored",
        "optionB": "broke",
        "optionC": "saw",
        "correctAnswer": "saw"
      },
      {
        "question": "The foe knew the tree was ______.",
        "optionA": "his",
        "optionB": "theirs",
        "optionC": "mine",
        "correctAnswer": "mine"
      },
      {
        "question": "The foe came into the ______ secretly.",
        "optionA": "house",
        "optionB": "garden",
        "correctAnswer": "garden",
        "optionC": "forest"
      },
      {
        "question": "In the morning, the foe was lying ______.",
        "optionA": "outstretched",
        "correctAnswer": "outstretched",
        "optionB": "sitting",
        "optionC": "running"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poet shared his anger with his friend.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet expressed his anger to his foe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hidden anger becomes stronger over time.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet compared anger to a growing tree.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The apple in the poem is described as dull.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The foe entered the garden during the night.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet watered his anger with happiness.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The foe recognized that the tree belonged to the poet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem encourages hiding anger.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The foe was found beneath the tree in the morning.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
