export const chapter = "Chapter - 6: Auxiliaries and Modals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the function of Primary Auxiliaries in a sentence?",
          optionA: "To express modality",
          optionB: "To form different tenses and function as helping verbs",
          optionC: "To give advice and suggestions",
          correctAnswer:
            "B. To form different tenses and function as helping verbs",
        },
        {
          question:
            "In the sentence, 'Bhushan will act in that film,' what is the role of the word 'will'?",
          optionA: "Main Verb",
          optionB: "Modal Auxiliary",
          optionC: "Primary Auxiliary",
          correctAnswer: "B. Modal Auxiliary",
        },
        {
          question:
            "Which of the following sentences demonstrates the use of Primary Auxiliaries as Main Verbs?",
          optionA: "'I shall leave now.'",
          optionB: "'He does his homework on time.'",
          optionC: "'They were screaming out of fear.'",
          correctAnswer: "'He does his homework on time.'",
        },
        {
          question: "What is the negative form of 'must'?",
          optionA: "Mustn't",
          optionB: "Shouldn't",
          optionC: "Don't",
          correctAnswer: "A. Mustn't",
        },
        {
          question: "When giving advice, which modal auxiliary is used?",
          optionA: "Must",
          optionB: "Should/Ought to",
          optionC: "May/Might",
          correctAnswer: "B. Should/Ought to",
        },
        {
          question:
            "In the sentence, 'He is hungry, he can eat two plates full of rice,' what is the role of the word 'can'?",
          optionA: "Main Verb",
          optionB: "Modal Auxiliary",
          optionC: "Primary Auxiliary",
          correctAnswer: "B. Modal Auxiliary",
        },
        {
          question:
            "What is the purpose of using 'may' or 'might' in a sentence?",
          optionA: "To express a past habit",
          optionB: "To indicate modality and express possibility",
          optionC: "To form negative sentences",
          correctAnswer: "B. To indicate modality and express possibility",
        },
        {
          question:
            "In which tense is 'shall' used for the First Person (I, we) in Future Tense?",
          optionA: "Present Tense",
          optionB: "Past Tense",
          optionC: "Future Tense",
          correctAnswer: "C. Future Tense",
        },
        {
          question: "How is 'used to' used in sentences?",
          optionA: "To give advice",
          optionB: "To express remote possibility",
          optionC: "To express a past habit",
          correctAnswer: "C. To express a past habit",
        },
        {
          question:
            "What does the modal auxiliary 'dare' signify in interrogative and negative sentences?",
          optionA: "To express necessity",
          optionB: "To express the past habit",
          optionC: "To have the courage to",
          correctAnswer: "C. To have the courage to",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "The Verb 'to be' includes forms like ____, ____, and ____.",
          optionA: "is, am, have",
          optionB: "are, were, do",
          optionC: "has, had, does",
          correctAnswer: "A. is, am, have",
        },
        {
          question: "Primary Auxiliaries are used to form different ____. ",
          optionA: "subjects",
          optionB: "tenses",
          optionC: "objects",
          correctAnswer: "B. tenses",
        },
        {
          question:
            "In the sentence 'She does her work well,' the verb 'does' is a form of the Verb-to ____. ",
          optionA: "be",
          optionB: "have",
          optionC: "do",
          correctAnswer: "C. do",
        },
        {
          question: "Primary Auxiliaries also function as ____ when needed.",
          optionA: "Main Verbs",
          optionB: "Adjectives",
          optionC: "Adverbs",
          correctAnswer: "A. Main Verbs",
        },
        {
          question:
            "Modal Auxiliaries are special Verbs used to indicate ____. ",
          optionA: "time",
          optionB: "modality",
          optionC: "location",
          correctAnswer: "B. modality",
        },
        {
          question:
            "In Future Tense, 'shall' is used for the First Person (I, we), and 'will' is used for all other ____. ",
          optionA: "tenses",
          optionB: "subjects",
          optionC: "objects",
          correctAnswer: "B. subjects",
        },
        {
          question:
            "To give advice, the modal auxiliary 'should' or 'ought to' is used. You ____ display good manners. ",
          optionA: "may",
          optionB: "ought to",
          optionC: "can",
          correctAnswer: "B. ought to",
        },
        {
          question:
            "'Must' shows compulsion or necessity, and its negative is ____. ",
          optionA: "shouldn't",
          optionB: "don't",
          optionC: "mustn't",
          correctAnswer: "C. mustn't",
        },
        {
          question: "'Used to' is used to express a ____. ",
          optionA: "present habit",
          optionB: "future plan",
          optionC: "past habit",
          correctAnswer: "C. past habit",
        },
        {
          question:
            "'Dare' is used in interrogative and negative sentences, meaning to have the ____. ",
          optionA: "ability to",
          optionB: "courage to",
          optionC: "necessity to",
          correctAnswer: "B. courage to",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Primary Auxiliaries are only used as Main Verbs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Modal Auxiliaries are Verbs used to indicate time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Future Tense, 'shall' is used for the Second Person (you).",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "To give advice, the modal auxiliary 'can' is commonly used.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "'Must' shows compulsion or necessity, and its negative is 'shouldn't'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'Used to' is used to express present habits.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'Dare' is only used in affirmative sentences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'May' is used to express wishes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'Should' or 'ought to' is used to give advice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "'Will' is used for all subjects in Future Tense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
