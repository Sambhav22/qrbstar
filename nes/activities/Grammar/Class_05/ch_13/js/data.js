export const chapter = "Chapter - 13: Application of Present Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the three main kinds of tenses mentioned in the text?",
          optionA: "Past, Present, Continuous",
          optionB: "Present, Past, Perfect",
          optionC: "Present, Past, Future",
          correctAnswer: "Present, Past, Future",
        },
        {
          question: "Which of the following is not a classification of tenses?",
          optionA: "Indefinite",
          optionB: "Progressive",
          optionC: "Universal",
          correctAnswer: "Universal",
        },
        {
          question:
            "In Simple Present Tense, what word is used with singular subjects like he, she, and it?",
          optionA: "do",
          optionB: "does",
          optionC: "did",
          correctAnswer: "does",
        },
        {
          question:
            "What is the correct word order for forming a negative sentence in Simple Present Tense?",
          optionA: "Subject + does + Verb I Form",
          optionB: "Subject + do + not + Verb I Form",
          optionC: "Subject + do + Verb I Form",
          correctAnswer: "Subject + do + not + Verb I Form",
        },
        {
          question:
            "When is the Present Indefinite Tense used to show a habitual action?",
          optionA: "When it is a universal truth",
          optionB: "When it is a future event",
          optionC: "When it is a daily practice",
          correctAnswer: "When it is a daily practice",
        },
        {
          question:
            "Which auxiliary verb is used with the subject 'I' in Present Continuous Tense?",
          optionA: "am",
          optionB: "is",
          optionC: "are",
          correctAnswer: "am",
        },
        {
          question:
            "In Present Continuous Tense, what form does the verb take when used with subjects?",
          optionA: "Verb + ing",
          optionB: "Verb + s/es",
          optionC: "Verb + ed",
          correctAnswer: "Verb + ing",
        },
        {
          question: "When is Present Continuous Tense used to show an action?",
          optionA: "To indicate a universal truth",
          optionB: "To express a temporary situation",
          optionC: "To depict a habitual action",
          correctAnswer: "To express a temporary situation",
        },
        {
          question:
            "Which auxiliary verb is used with all Singular Subjects in Present Perfect Tense?",
          optionA: "have",
          optionB: "has",
          optionC: "had",
          correctAnswer: "has",
        },
        {
          question: "What does Present Perfect Continuous Tense indicate?",
          optionA: "An action completed in the past",
          optionB: "An action in continuity from a given time",
          optionC: "A future event",
          correctAnswer: "An action in continuity from a given time",
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
            "In Simple Present Tense, the first form of the verb is used with _____.",
          options: ["he, she, it", "I, you", "we, they"],
          correctAnswer: "I, you",
        },
        {
          question:
            "Present Indefinite Tense is used to show a habitual action or a universal truth, such as 'The sun ____ in the morning.'",
          options: ["shines", "shone", "will shine"],
          correctAnswer: "shines",
        },
        {
          question:
            "Present Continuous Tense is used to show continuity of an action, like 'He is ____ a new machine these days.'",
          options: ["repaired", "repairing", "repairs"],
          correctAnswer: "repairing",
        },
        {
          question:
            "Present Perfect Tense is used to show an action that began in the past and still continues, for example, 'He ____ the job fully.'",
          options: ["finishing", "has finished", "finished"],
          correctAnswer: "has finished",
        },
        {
          question:
            "Present Perfect Continuous Tense indicates an action in continuity from a given time. 'I ____ suffering from fever since last night.'",
          options: ["has been", "have been", "had been"],
          correctAnswer: "have been",
        },
        {
          question:
            "In Present Continuous Tense, 'Am' is used with the subject ____. ",
          options: ["I", "you", "he"],
          correctAnswer: "I",
        },
        {
          question:
            "Present Perfect Tense is used to show an action which began in the past and has an effect in the ____. ",
          options: ["present", "future", "past"],
          correctAnswer: "present",
        },
        {
          question:
            "Present Perfect Continuous Tense requires a time phrase with ____. ",
          options: ["after", "for", "in"],
          correctAnswer: "for",
        },
        {
          question:
            "The auxiliary verb 'does' is used in negative sentences with ____. ",
          options: ["I, you", "he, she, it", "we, they"],
          correctAnswer: "I, you",
        },
        {
          question:
            "Present Continuous Tense can show a temporary situation, like 'She is ____ a red skirt.'",
          options: ["wear", "wearing", "worn"],
          correctAnswer: "wearing",
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
            "Simple Present Tense is only used to express actions happening in the present moment.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Continuous Tense is used to describe habitual actions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Present Perfect Tense, 'has' is used with all plural subjects.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Continuous Tense indicates an action completed in the past.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Present Indefinite Tense is used to show a temporary situation.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Present Continuous Tense, 'am' is used with all singular subjects.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Present Perfect Tense is always used to describe actions that happened in the recent past.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Continuous Tense is used to show an action in continuity from a given time.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Simple Present Tense, 'does' is used with all singular subjects.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Present Continuous Tense can be used to express a universal truth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
