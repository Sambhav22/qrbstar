export const chapter = "Chapter -14: Modals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary purpose of modals in English grammar?",
          optionA: "To express emotions",
          optionB: "To give verbs certain shades of meaning",
          optionC: "To indicate tense",
          correctAnswer: "To give verbs certain shades of meaning",
        },
        {
          question: "In which context is the modal 'can' used?",
          optionA: "Expressing obligation",
          optionB: "Indicating ability",
          optionC: "Giving permission",
          correctAnswer: "Indicating ability",
        },
        {
          question:
            "Which sentence correctly uses the modal 'should' to talk about a necessary action?",
          optionA: "You should eat more chocolates.",
          optionB: "We should not waste water.",
          optionC: "Should you go to the store?",
          correctAnswer: "We should not waste water.",
        },
        {
          question: "When is the modal 'may' used according to the text?",
          optionA: "To express obligation",
          optionB: "To indicate ability",
          optionC: "To give and take permission",
          correctAnswer: "To give and take permission",
        },
        {
          question: "What does the modal 'must' primarily convey?",
          optionA: "Suggestion",
          optionB: "Necessity",
          optionC: "Possibility",
          correctAnswer: "Necessity",
        },
        {
          question: "In which sentence is 'may' used to seek permission?",
          optionA: "You may visit the museum.",
          optionB: "May you enjoy the party!",
          optionC: "We may find the answer.",
          correctAnswer: "You may visit the museum.",
        },
        {
          question:
            "What is the main function of 'should' according to the text?",
          optionA: "Expressing possibility",
          optionB: "Talking about necessary actions",
          optionC: "Indicating past events",
          correctAnswer: "Talking about necessary actions",
        },
        {
          question: "When is 'must' used in the context of the text?",
          optionA: "To express regret",
          optionB: "Talking about something necessary to do",
          optionC: "Indicating uncertainty",
          correctAnswer: "Talking about something necessary to do",
        },
        {
          question: "Which sentence correctly uses 'can' to indicate ability?",
          optionA: "Can you lend me some money?",
          optionB: "Can it rain tomorrow?",
          optionC: "Can we avoid the traffic?",
          correctAnswer: "Can we avoid the traffic?",
        },
        {
          question: "What does the modal 'may' indicate in the given context?",
          optionA: "Ability",
          optionB: "Permission",
          optionC: "Necessity",
          correctAnswer: "Permission",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Modals are __________ verbs. They are used with verbs to give them certain shades of meaning.",
          optionA: "Action",
          optionB: "Helping",
          optionC: "Main",
          correctAnswer: "Helping",
        },
        {
          question: '"Can" is used to show __________ to do something.',
          optionA: "Inability",
          optionB: "Willingness",
          optionC: "Ability",
          correctAnswer: "Ability",
        },
        {
          question: '"You __________ drink more water."',
          optionA: "Should",
          optionB: "Can",
          optionC: "Must",
          correctAnswer: "Should",
        },
        {
          question: '"May I __________ your book?"',
          optionA: "Borrow",
          optionB: "Boring",
          optionC: "Borrowing",
          correctAnswer: "Borrow",
        },
        {
          question: '"You __________ follow the traffic rules."',
          optionA: "Can",
          optionB: "Should",
          optionC: "Must",
          correctAnswer: "Must",
        },
        {
          question: '"It is late, I __________ go now."',
          optionA: "Must",
          optionB: "May",
          optionC: "Can",
          correctAnswer: "Must",
        },
        {
          question: '"You __________ visit the museum."',
          optionA: "Shall",
          optionB: "Can",
          optionC: "May",
          correctAnswer: "Can",
        },
        {
          question: '"We __________ not waste water."',
          optionA: "Must",
          optionB: "Should",
          optionC: "Can",
          correctAnswer: "Should",
        },
        {
          question: '"May I __________ you?"',
          optionA: "Disturb",
          optionB: "Disturbing",
          optionC: "Disturbed",
          correctAnswer: "Disturb",
        },
        {
          question:
            "\"In Simple Present Tense, the first form of the verb is used with 'he,' 'she,' and 'it' __________.\"",
          optionA: "Always",
          optionB: "Never",
          optionC: "Only in questions",
          correctAnswer: "Never",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Modals are used with verbs to give them certain shades of meaning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: '"Can" is used to express obligation.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            '"Should" is primarily used to talk about unnecessary actions.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: '"May" is used to indicate ability.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            '"Must" is used to talk about something that is not necessary to do.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Simple Present Tense, the first form of the verb is always used with 'he,' 'she,' and 'it.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Simple Past Tense is used to express future events.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "\"Shall\" is used with 'I' and 'we' in Simple Future Tense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Present Continuous Tense sentences show the continuity of an action in the past.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Future Perfect Tense sentences tell us about an action to be completed in the past.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
