export const chapter = "Chapter - 6: Auxiliaries and Modals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two main types of auxiliaries mentioned in the text?",
          optionA: "Principal and Modal Auxiliaries",
          optionB: "Primary and Modal Auxiliaries",
          optionC: "Main and Helping Auxiliaries",
          correctAnswer: "Primary and Modal Auxiliaries",
        },
        {
          question: "Which of the following is not a Primary Auxiliary?",
          optionA: "is",
          optionB: "can",
          optionC: "have",
          correctAnswer: "can",
        },
        {
          question: "How are Primary Auxiliaries used as Main Verbs?",
          optionA: "In the past tense",
          optionB: "To form different tenses",
          optionC: "Expressing mood or attitude",
          correctAnswer: "To form different tenses",
        },
        {
          question:
            "In the sentence, 'He will not listen to me,' what type of auxiliary is 'will'?",
          optionA: "Modal Auxiliary",
          optionB: "Primary Auxiliary",
          optionC: "Main Verb",
          correctAnswer: "Modal Auxiliary",
        },
        {
          question:
            "Which Modal Auxiliary is used to express a strong opinion or suggestion on an important matter?",
          optionA: "should",
          optionB: "must",
          optionC: "could",
          correctAnswer: "must",
        },
        {
          question:
            "What is the function of 'ought to' or 'should' according to the text?",
          optionA: "To express ability",
          optionB: "To give advice",
          optionC: "To seek permission",
          correctAnswer: "To give advice",
        },
        {
          question: "What is the negative form of 'must'?",
          optionA: "mustn't",
          optionB: "don't must",
          optionC: "not must",
          correctAnswer: "mustn't",
        },
        {
          question:
            "How is 'can' used in the sentence, 'He can speak five languages'?",
          optionA: "To show ability",
          optionB: "To seek permission",
          optionC: "To express necessity",
          correctAnswer: "To show ability",
        },
        {
          question:
            "Which Modal Auxiliary is used to express permission and is considered more polite?",
          optionA: "can",
          optionB: "could",
          optionC: "may",
          correctAnswer: "may",
        },
        {
          question:
            "In which context is 'used to' primarily used, according to the text?",
          optionA: "To express a past habit",
          optionB: "To indicate future plans",
          optionC: "To seek permission",
          correctAnswer: "To express a past habit",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Primary Auxiliaries consist of three main verbs: Verb-to be (is, are, am, was, were, will be, shall be), Verb-to have (has, have, had), and Verb-to do (do, does, did). These are used to form different ___________.",
          options: ["Sentences", "Tenses", "Verbs"],
          correctAnswer: "Tenses",
        },
        {
          question:
            "Primary Auxiliaries function as ___________ verbs, helping the main verbs to give a certain shade of meaning.",
          options: ["Independent", "Auxiliary", "Main"],
          correctAnswer: "Auxiliary",
        },
        {
          question:
            "Modal Auxiliaries are used to express the ___________ or attitude of the speaker.",
          options: ["Color", "Mood", "Tense"],
          correctAnswer: "Mood",
        },
        {
          question:
            "In future tense, 'shall' is used for the first person (I, We), and 'will' is used for all other subjects. For example, 'I ___________ buy a house next month.'",
          options: ["Will", "Shall", "Am"],
          correctAnswer: "Shall",
        },
        {
          question: "'Should' or 'Ought to' is used to give ___________.",
          options: ["Commands", "Advice", "Permission"],
          correctAnswer: "Advice",
        },
        {
          question:
            "'Must' shows compulsion or necessity. Its negative form is ___________.",
          options: ["Mustn't", "Don't must", "Not must"],
          correctAnswer: "Mustn't",
        },
        {
          question:
            "'Can' (negative 'can't' or 'cannot') is used to show ___________ or ability.",
          options: ["Possibility", "Impossibility", "Compulsion"],
          correctAnswer: "Possibility",
        },
        {
          question:
            "'May' or 'Might' is used to give and take ___________. In this sense, 'might' is more polite than 'may.'",
          options: ["Orders", "Permission", "Suggestions"],
          correctAnswer: "Permission",
        },
        {
          question: "'Used to' is used to express a ___________ habit.",
          options: ["Present", "Past", "Future"],
          correctAnswer: "Past",
        },
        {
          question:
            "'Dare' is used in interrogative and negative forms and means to have the courage to. For example, 'How ___________ he speak like this?'",
          options: ["Does", "Dare", "Will"],
          correctAnswer: "Dare",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Primary Auxiliaries consist of three main verbs: Verb-to be (is, are, am, was, were, will be, shall be), Verb-to have (has, have, had), and Verb-to do (do, does, did). These are used to form different tenses.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Modal Auxiliaries are used to express the mood or attitude of the speaker and are also known as Medals.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Future Tense, 'shall' is used for the First Person (I, We) and 'will' is used for all other subjects.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "'Would you like' is used to make an offer to someone.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "'Should' or 'Ought to' is used to give advice.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "'Must' shows compulsion or necessity. Its negative is 'mustn't'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "'Can' (negative 'can't' or 'cannot) is used to show possibility or ability.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "'May' or 'Might' is used to express wish.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "'Used to' is primarily used to indicate future plans.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "'Need' is a Modal Auxiliary used to express a past habit.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
