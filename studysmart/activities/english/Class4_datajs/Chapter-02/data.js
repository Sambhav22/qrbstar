export const chapter = "Chapter - 2: The Nervous Spider";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did Derry feel confused when he saw the fly?",
        "optionA": "He was not hungry",
        "optionB": "He did not want to kill her",
        "correctAnswer": "He did not want to kill her",
        "optionC": "He was afraid of flies"
      },
      {
        "question": "What sound did Derry hear before waking up?",
        "optionA": "Thunder",
        "optionB": "Loud voices",
        "optionC": "Rustling of leaves",
        "correctAnswer": "Rustling of leaves"
      },
      {
        "question": "Why was the fly unable to escape?",
        "optionA": "She was tired",
        "optionB": "She was stuck in the web",
        "correctAnswer": "She was stuck in the web",
        "optionC": "She had no wings"
      },
      {
        "question": "What surprised Derry the most about the fly?",
        "optionA": "She could speak spider language",
        "correctAnswer": "She could speak spider language",
        "optionB": "She was big",
        "optionC": "She was fast"
      },
      {
        "question": "How did Magry behave towards Derry?",
        "optionA": "He helped him",
        "optionB": "He ignored him",
        "optionC": "He mocked him",
        "correctAnswer": "He mocked him"
      },
      {
        "question": "What did Derry want to find?",
        "optionA": "A bigger web",
        "optionB": "Another fly",
        "optionC": "A way to live without killing insects",
        "correctAnswer": "A way to live without killing insects"
      },
      {
        "question": "What did the fly say about her home?",
        "optionA": "Spiders and flies lived in harmony",
        "correctAnswer": "Spiders and flies lived in harmony",
        "optionB": "It was peaceful",
        "optionC": "It was dangerous"
      },
      {
        "question": "What did Derry try eating for the first time?",
        "optionA": "Leaves",
        "optionB": "Plant bud",
        "correctAnswer": "Plant bud",
        "optionC": "Seeds"
      },
      {
        "question": "How did Derry feel after eating plant food?",
        "optionA": "Delighted",
        "correctAnswer": "Delighted",
        "optionB": "Angry",
        "optionC": "Weak"
      },
      {
        "question": "What did Derry do after learning the new way?",
        "optionA": "Ate the fly",
        "optionB": "Freed the fly",
        "correctAnswer": "Freed the fly",
        "optionC": "Ignored the fly"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Derry was waiting for some ______ to get caught in the web.",
        "optionA": "ants",
        "optionB": "bees",
        "optionC": "flies",
        "correctAnswer": "flies"
      },
      {
        "question": "The fly was trying to ______ from the web.",
        "optionA": "sleep",
        "optionB": "escape",
        "correctAnswer": "escape",
        "optionC": "hide"
      },
      {
        "question": "Derry spoke to himself in a ______ voice.",
        "optionA": "loud",
        "optionB": "soft",
        "correctAnswer": "soft",
        "optionC": "angry"
      },
      {
        "question": "Magry came and ______ at Derry.",
        "optionA": "laughed",
        "correctAnswer": "laughed",
        "optionB": "cried",
        "optionC": "shouted"
      },
      {
        "question": "The fly asked Derry to let her ______.",
        "optionA": "stay",
        "optionB": "go",
        "correctAnswer": "go",
        "optionC": "eat"
      },
      {
        "question": "The fly came from the other end of the ______.",
        "optionA": "forest",
        "correctAnswer": "forest",
        "optionB": "river",
        "optionC": "sky"
      },
      {
        "question": "Derry ate a plant ______ to check the fly’s idea.",
        "optionA": "leaf",
        "optionB": "root",
        "optionC": "bud",
        "correctAnswer": "bud"
      },
      {
        "question": "He also drank plant ______.",
        "optionA": "juice",
        "optionB": "sap",
        "correctAnswer": "sap",
        "optionC": "milk"
      },
      {
        "question": "Derry felt very ______ after eating plant food.",
        "optionA": "sad",
        "optionB": "afraid",
        "optionC": "delighted",
        "correctAnswer": "delighted"
      },
      {
        "question": "Derry decided to live without ______ insects.",
        "optionA": "killing",
        "correctAnswer": "killing",
        "optionB": "helping",
        "optionC": "chasing"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Derry was sleeping when the fly got stuck in the web.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fly easily escaped from the web.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Magry encouraged Derry to be kind.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Derry wanted to find a better way to live.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fly could not speak at all.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fly said spiders and flies can live peacefully.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Derry found plant food unpleasant.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Derry was happy after trying plant food.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Derry decided to continue eating insects only.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Derry finally let the fly go free.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
