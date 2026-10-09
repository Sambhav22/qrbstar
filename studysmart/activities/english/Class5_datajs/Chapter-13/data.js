export const chapter = "Chapter - 13: Animal Tourism";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What had spread throughout the town?",
        "optionA": "Happiness",
        "optionB": "Panic",
        "correctAnswer": "Panic",
        "optionC": "Celebration"
      },
      {
        "question": "Who ordered the closure of schools?",
        "optionA": "The district magistrate",
        "correctAnswer": "The district magistrate",
        "optionB": "The teacher",
        "optionC": "The shopkeeper"
      },
      {
        "question": "Where was the leopard seen?",
        "optionA": "In the forest",
        "optionB": "In the main square",
        "correctAnswer": "In the main square",
        "optionC": "Near the river"
      },
      {
        "question": "What did the leopard hunt the previous evening?",
        "optionA": "A cow",
        "optionB": "A bird",
        "optionC": "A goat and a dog",
        "correctAnswer": "A goat and a dog"
      },
      {
        "question": "Where was Namya’s father sitting?",
        "optionA": "In the market",
        "optionB": "On the road",
        "optionC": "In the courtyard",
        "correctAnswer": "In the courtyard"
      },
      {
        "question": "What was Namya’s father reading?",
        "optionA": "A book",
        "optionB": "A newspaper",
        "correctAnswer": "A newspaper",
        "optionC": "A letter"
      },
      {
        "question": "What did Namya joke about the leopard?",
        "optionA": "It was on a tour",
        "correctAnswer": "It was on a tour",
        "optionB": "It was lost",
        "optionC": "It was dangerous"
      },
      {
        "question": "Why do wild animals enter towns?",
        "optionA": "For fun",
        "optionB": "Due to lack of food and space",
        "correctAnswer": "Due to lack of food and space",
        "optionC": "To meet people"
      },
      {
        "question": "What have humans built by cutting forests?",
        "optionA": "Roads, dams and factories",
        "correctAnswer": "Roads, dams and factories",
        "optionB": "Rivers",
        "optionC": "Mountains"
      },
      {
        "question": "Who trapped the leopard?",
        "optionA": "The villagers",
        "optionB": "The forest department",
        "correctAnswer": "The forest department",
        "optionC": "The police"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The town was full of ______.",
        "optionA": "joy",
        "optionB": "fear",
        "correctAnswer": "fear",
        "optionC": "games"
      },
      {
        "question": "People were advised not to ______ outside unnecessarily.",
        "optionA": "sleep",
        "optionB": "venture",
        "correctAnswer": "venture",
        "optionC": "run"
      },
      {
        "question": "The leopard had ______ away from the forest.",
        "optionA": "jumped",
        "optionB": "walked",
        "optionC": "strayed",
        "correctAnswer": "strayed"
      },
      {
        "question": "The markets were closed before it was ______.",
        "optionA": "morning",
        "optionB": "noon",
        "optionC": "dark",
        "correctAnswer": "dark"
      },
      {
        "question": "Namya woke up a little ______.",
        "optionA": "early",
        "optionB": "late",
        "correctAnswer": "late",
        "optionC": "quickly"
      },
      {
        "question": "His father kept a ______ near him.",
        "optionA": "stick",
        "correctAnswer": "stick",
        "optionB": "rope",
        "optionC": "stone"
      },
      {
        "question": "Humans have ______ the forest land.",
        "optionA": "encroached",
        "correctAnswer": "encroached",
        "optionB": "protected",
        "optionC": "cleaned"
      },
      {
        "question": "The jungle is being ______ by human activities.",
        "optionA": "grown",
        "optionB": "squeezed",
        "correctAnswer": "squeezed",
        "optionC": "decorated"
      },
      {
        "question": "Many animal species have become ______.",
        "optionA": "alive",
        "optionB": "bigger",
        "optionC": "extinct",
        "correctAnswer": "extinct"
      },
      {
        "question": "We should ______ forests to protect animals.",
        "optionA": "destroy",
        "optionB": "conserve",
        "correctAnswer": "conserve",
        "optionC": "ignore"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The town was calm and peaceful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The leopard attacked a man sleeping on the roof.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Namya went to school that day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The leopard could easily enter houses by jumping walls.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Humans have increased forest areas.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Forests were larger in earlier times.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The father explained that humans are responsible for the problem.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The leopard stayed in the town forever.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The forest department safely took the leopard back.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The problem will stop if forests continue to be destroyed.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
