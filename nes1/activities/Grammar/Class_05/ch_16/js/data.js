export const chapter = "Chapter - 16: Modals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are Helping Verbs also known as?",
          optionA: "Main Verbs",
          optionB: "Modals",
          optionC: "Auxiliaries",
          correctAnswer: "Modals",
        },
        {
          question: "How many types of Modals are mentioned in the text?",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        },
        {
          question: "Which of the following is a Primary Auxiliary?",
          optionA: "Can",
          optionB: "Have",
          optionC: "Could",
          correctAnswer: "Have",
        },
        {
          question:
            "In which situation can Primary Auxiliaries function as Main Verbs?",
          optionA: "Only in questions",
          optionB: "Only in affirmative sentences",
          optionC: "Both in affirmative and negative sentences",
          correctAnswer: "Both in affirmative and negative sentences",
        },
        {
          question:
            "Which Modal Auxiliary can express obligation and probability?",
          optionA: "May",
          optionB: "Should",
          optionC: "Could",
          correctAnswer: "Should",
        },
        {
          question: "When is 'must' used according to the text?",
          optionA: "To express ability",
          optionB: "To give advice",
          optionC: "When something is necessary",
          correctAnswer: "When something is necessary",
        },
        {
          question: "What does 'can' express in the text?",
          optionA: "Ability",
          optionB: "Obligation",
          optionC: "Probability",
          correctAnswer: "Ability",
        },
        {
          question: "How is 'would' used to indicate habits?",
          optionA: "For the present",
          optionB: "For the past",
          optionC: "For the future",
          correctAnswer: "For the past",
        },
        {
          question:
            "When can 'can' or 'could' be used to make a polite request?",
          optionA: "When giving orders",
          optionB: "When expressing abilities",
          optionC: "When seeking assistance",
          correctAnswer: "When seeking assistance",
        },
        {
          question:
            "Which Modal Auxiliary is used to make an offer to someone?",
          optionA: "Must",
          optionB: "Will",
          optionC: "Could",
          correctAnswer: "Could",
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
            "Primary Auxiliaries are __________ in number. They are: Be, Have, and Do.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Three",
        },
        {
          question:
            "Modal Auxiliaries include important ones like can, could, dare, and __________.",
          options: ["Must", "Need", "Shall"],
          correctAnswer: "Shall",
        },
        {
          question:
            "In the sentence 'He is writing a letter,' 'is' is functioning as a __________.",
          options: ["Main Verb", "Helping Verb", "Modal Verb"],
          correctAnswer: "Helping Verb",
        },
        {
          question:
            "'Should' is used when giving advice or expressing the __________ in a particular situation.",
          options: ["Necessity", "Possibility", "Right thing to do"],
          correctAnswer: "Right thing to do",
        },
        {
          question:
            "'Must' is used when it is necessary for someone to do something, and its negative form is __________.",
          options: ["Cannot", "Shouldn't", "Mustn't"],
          correctAnswer: "Mustn't",
        },
        {
          question:
            "'Can' is used to express __________ or ability to do something.",
          options: ["Future actions", "Knowledge", "Obligation"],
          correctAnswer: "Knowledge",
        },
        {
          question:
            "'Would' is used to indicate habits, and 'will' is used for habits in the __________.",
          options: ["Present", "Past", "Future"],
          correctAnswer: "Present",
        },
        {
          question:
            "To make a polite request, we can use 'Can you' or '__________.'",
          options: ["Should you", "Would you", "Might you"],
          correctAnswer: "Would you",
        },
        {
          question:
            "In the sentence 'Everyday Sheel will do his homework at 7 o'clock,' 'will' indicates a habit in the __________.",
          options: ["Present", "Past", "Future"],
          correctAnswer: "Future",
        },
        {
          question:
            "'Should' and 'ought to' have little difference in meaning when talking about obligation and __________.",
          options: ["Possibility", "Probability", "Advice"],
          correctAnswer: "Advice",
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
            "Simple Past or Past Indefinite Tense is used to show a habitual action.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Past Continuous Tense is used to indicate an action that completed in the past.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Past Perfect Tense is used to show an action in continuity from a given time in the past.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Past Perfect Continuous Tense is used to show an action that began and completed in the past in comparison to another action.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Past Continuous Tense, 'Was' is used with all subjects.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Past Perfect Continuous Tense, 'Have' is used with all Singular Subjects.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Tense is used to show a habitual action in the past.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Present Continuous Tense can only express temporary situations.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Continuous Tense indicates an action in continuity from a given time.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In Present Perfect Tense, 'Has' is used with all Singular Subjects.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
