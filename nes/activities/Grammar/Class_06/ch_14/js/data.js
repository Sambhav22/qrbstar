export const chapter = "Chapter - 14: Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the three main tenses or times that a verb can show?",
          optionA: "Past, Present, Continuous",
          optionB: "Present, Future, Perfect",
          optionC: "Simple, Continuous, Perfect",
          correctAnswer: "Present, Future, Perfect",
        },
        {
          question:
            "In Simple Present or Present Indefinite Tense, what does the tense express?",
          optionA: "Future actions",
          optionB: "Habitual actions or general truths",
          optionC: "Actions that occurred in the past",
          correctAnswer: "Habitual actions or general truths",
        },
        {
          question:
            "Which tense is used to indicate an action that occurred in the past?",
          optionA: "Present Continuous Tense",
          optionB: "Past Continuous Tense",
          optionC: "Future Continuous Tense",
          correctAnswer: "Past Continuous Tense",
        },
        {
          question: "What does Present Continuous Tense indicate?",
          optionA: "Past actions",
          optionB: "Actions that will take place in the future",
          optionC: "Actions going on at the present time",
          correctAnswer: "Actions going on at the present time",
        },
        {
          question: "When is Past Perfect Tense used?",
          optionA: "To indicate an action that will take place in the future",
          optionB: "To show a completed action before another took place",
          optionC: "To express habitual actions",
          correctAnswer: "To show a completed action before another took place",
        },
        {
          question:
            "What is the main characteristic of Present Perfect Continuous Tense?",
          optionA:
            "Indicates actions that began in the past and are still continuing",
          optionB: "Expresses completed actions in the past",
          optionC: "Refers to future continuous actions",
          correctAnswer:
            "Indicates actions that began in the past and are still continuing",
        },
        {
          question:
            "Which tense is used to indicate a continuous action that will take place in the future?",
          optionA: "Future Continuous Tense",
          optionB: "Future Perfect Continuous Tense",
          optionC: "Present Perfect Continuous Tense",
          correctAnswer: "Future Perfect Continuous Tense",
        },
        {
          question:
            "What is the primary function of Past Perfect Continuous Tense?",
          optionA: "Indicates actions going on at the present time",
          optionB: "Expresses habitual actions in the past",
          optionC:
            "Indicates an action that continued in the past until another action overtook it",
          correctAnswer:
            "Indicates an action that continued in the past until another action overtook it",
        },
        {
          question:
            "When does Future Perfect Tense indicate an action will be finished?",
          optionA: "In the past",
          optionB: "At the present time",
          optionC: "By a certain time in the future",
          correctAnswer: "By a certain time in the future",
        },
        {
          question:
            "In which tense is a past action commented upon or interpreted in the present context?",
          optionA: "Simple Present Tense",
          optionB: "Present Perfect Tense",
          optionC: "Present Continuous Tense",
          correctAnswer: "Present Perfect Tense",
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
            '1. The Simple Present or Present Indefinite Tense expresses habitual actions or general truths. For example, "I __________ to school by bus."',
          options: ["a) go", "b) went", "c) going"],
          correctAnswer: "a) go",
        },
        {
          question:
            '2. The Simple Past or Past Indefinite Tense is used to indicate an action that occurred in the past. For example, "My mother __________ a cake."',
          options: ["a) baking", "b) baked", "c) bakes"],
          correctAnswer: "b) baked",
        },
        {
          question:
            '3. The Present Continuous Tense indicates an action that is going on at the present time. For example, "She __________ on the stage now."',
          options: ["a) dances", "b) danced", "c) is dancing"],
          correctAnswer: "c) is dancing",
        },
        {
          question:
            '4. The Past Continuous Tense is used to indicate an action that continued over a period of time in the past. For example, "My mother __________ a cake."',
          options: ["a) bakes", "b) baked", "c) baking"],
          correctAnswer: "b) baked",
        },
        {
          question:
            '5. The Future Continuous Tense indicates an action that will take place in the future and continue too. For example, "I __________ books on this subject."',
          options: ["a) sell", "b) will sell", "c) selling"],
          correctAnswer: "b) will sell",
        },
        {
          question:
            '6. The Present Perfect Tense indicates an action that took place in the past but has its impact in the present or is still relevant. For example, "I __________ this film."',
          options: ["a) have seen", "b) seen", "c) saw"],
          correctAnswer: "a) have seen",
        },
        {
          question:
            '7. The Past Perfect Tense is used to show a completed action before another took place. For example, "The train departed after all passengers __________ boarded."',
          options: ["a) have", "b) had", "c) having"],
          correctAnswer: "b) had",
        },
        {
          question:
            '8. The Future Perfect Tense is used to indicate an action which will be finished by a certain time in the future or before another event occurs in the future. For example, "I __________ the caged birds before the shopkeeper comes."',
          options: ["a) free", "b) freed", "c) will have freed"],
          correctAnswer: "c) will have freed",
        },
        {
          question:
            '9. The Present Perfect Continuous Tense indicates an action that began in the past and is still continuing and may continue in the future too. For example, "He __________ books for twenty years."',
          options: ["a) wrote", "b) writes", "c) has been writing"],
          correctAnswer: "c) has been writing",
        },
        {
          question:
            '10. The Past Perfect Continuous Tense indicates an action that continued in the past until another action overtook it. For example, "I __________ a painting for two hours when I decided to watch television."',
          options: ["a) made", "b) have been making", "c) had been making"],
          correctAnswer: "c) had been making",
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
            "1. The Simple Present or Present Indefinite Tense expresses habitual actions or general truths.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "2. The Present Continuous Tense indicates an action that is going on only in the past time.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "3. The Past Perfect Tense is used to show a completed action before another took place.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "4. The Future Perfect Continuous Tense indicates a continuous action that will take place in the past time.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "5. The Present Perfect Continuous Tense indicates an action that began in the past and is still continuing and may continue in the future too.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "6. The Past Continuous Tense is used to indicate an action that continued over a period of time in the present.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "7. The Simple Future or Future Indefinite Tense refers to an action that has already taken place.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "8. The Present Perfect Tense indicates an action that took place in the future but has its impact in the present or is still relevant.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "9. The Past Perfect Continuous Tense indicates an action that continued in the past until another action overtook it.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "10. The Future Continuous Tense indicates an action that will take place in the future and continue too.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
