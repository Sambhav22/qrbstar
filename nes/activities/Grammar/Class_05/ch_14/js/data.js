export const chapter = "Chapter - 14: Application of Past Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the correct word order for a negative sentence in Simple Past Tense?",
          optionA: "Subject + did + Verb I Form + Object",
          optionB: "Subject + Verb in II Form + not + Object",
          optionC: "Subject + Verb I Form + Object + did",
          correctAnswer: "Subject + Verb in II Form + not + Object",
        },
        {
          question:
            "When do we use Simple Past or Past Indefinite Tense to indicate an action that completed in the past?",
          optionA: "When the action is habitual",
          optionB: "When the action is ongoing",
          optionC: "When the action completed in the past",
          correctAnswer: "When the action completed in the past",
        },
        {
          question:
            'Which rule is correct for using "was" and "were" in Past Continuous Tense?',
          optionA: '"Was" is used with all subjects',
          optionB: '"Were" is used with all subjects',
          optionC: '"Was" is used with you and all plural subjects',
          correctAnswer: '"Was" is used with you and all plural subjects',
        },
        {
          question:
            "In Past Perfect Tense, what is the correct structure for an affirmative sentence?",
          optionA: "Subject + had + Verb in III Form + Object",
          optionB: "Subject + Verb in III Form + not + Object",
          optionC: "Subject + had + been + Verb in I Form + Object",
          correctAnswer: "Subject + had + Verb in III Form + Object",
        },
        {
          question: "When do we use Past Perfect Tense?",
          optionA: "To show a habitual action in the past",
          optionB: "To show an ongoing action in the past",
          optionC:
            "To show an action that began and completed in the past in comparison to another action",
          correctAnswer:
            "To show an action that began and completed in the past in comparison to another action",
        },
        {
          question:
            "What is the correct structure for a negative sentence in Past Perfect Continuous Tense?",
          optionA:
            "Subject + had + been + Verb in I Form + not + Object + Time Phrase",
          optionB:
            "Subject + had + not + been + Verb in I Form + Object + Time Phrase",
          optionC:
            "Subject + had + been + Verb in I Form + Object + Time Phrase",
          correctAnswer:
            "Subject + had + not + been + Verb in I Form + Object + Time Phrase",
        },
        {
          question:
            'In Past Perfect Continuous Tense, what do time phrases "for" and "since" indicate?',
          optionA: "Future actions",
          optionB: "Present actions",
          optionC: "Duration or starting point of an action in the past",
          correctAnswer: "Duration or starting point of an action in the past",
        },
        {
          question:
            "What is the correct interrogative structure for Past Perfect Continuous Tense?",
          optionA:
            "Word + had + Subject + been + Verb in I Form -ing + Object + Time Phrase",
          optionB:
            "Had + Subject + been + Verb in I Form -ing + Object + Time Phrase",
          optionC:
            "Subject + had + been + Verb in I Form -ing + Object + Time Phrase",
          correctAnswer:
            "Had + Subject + been + Verb in I Form -ing + Object + Time Phrase",
        },
        {
          question:
            'In which tense would you use the sentence "He had parked his car there."?',
          optionA: "Past Continuous Tense",
          optionB: "Past Perfect Tense",
          optionC: "Past Perfect Continuous Tense",
          correctAnswer: "Past Perfect Tense",
        },
        {
          question: "What does Past Perfect Continuous Tense indicate?",
          optionA: "An action completed in the past",
          optionB: "An action in continuity from a given time in the past",
          optionC: "An ongoing habitual action in the past",
          correctAnswer:
            "An action in continuity from a given time in the past",
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
            "In Simple Past or Past Indefinite Tense, the affirmative sentence structure is Subject + Verb in II Form + Object. For example, 'He ________ a book.'",
          options: ["buys", "buy", "bought"],
          correctAnswer: "bought",
        },
        {
          question:
            "In Past Continuous Tense, the negative sentence structure is Subject + ________ + not + Verb in I Form + -ing + Object. For example, 'He was ________ something in the bag.'",
          options: ["did", "was", "were"],
          correctAnswer: "was",
        },
        {
          question:
            "In Past Perfect Tense, the interrogative sentence structure is ________ + Subject + Verb in III Form + Object? For example, '________ you applied for the post of a clerk?'",
          options: ["Did", "Was", "Had"],
          correctAnswer: "Did",
        },
        {
          question:
            "Past Perfect Continuous Tense is used to show an action in continuity from a given time in the past. The time phrases used are ________ and ________.",
          options: ["since, until", "for, since", "after, before"],
          correctAnswer: "for, since",
        },
        {
          question:
            "The correct structure for a negative sentence in Past Perfect Continuous Tense is Subject + had + been + Verb in I Form + not + Object + Time Phrase. For example, 'Navin had ________ playing for two hours.'",
          options: ["did", "had", "been"],
          correctAnswer: "been",
        },
        {
          question:
            "In Simple Past Tense, the word order for an interrogative sentence is ________ + Subject + Verb I Form + Object? For example, '________ he buy a book?'",
          options: ["Did", "Had", "Was"],
          correctAnswer: "Did",
        },
        {
          question:
            "Past Perfect Continuous Tense is used to show an action in continuity from a given time in the past. The time phrases are used just like ________ Perfect Continuous Tense.",
          options: ["Present", "Past", "Future"],
          correctAnswer: "Past",
        },
        {
          question:
            "In Past Perfect Tense, the affirmative sentence structure is Subject + had + ________ + Object. For example, 'You had applied for the post of a clerk.'",
          options: ["been", "being", "be"],
          correctAnswer: "been",
        },
        {
          question:
            "In Past Continuous Tense, the rule is to use 'were' with ________ and all Plural Subjects.",
          options: ["I", "You", "He"],
          correctAnswer: "You",
        },
        {
          question:
            "In which tense would you use the sentence 'He had parked his car there.'?",
          options: [
            "Past Continuous Tense",
            "Past Perfect Tense",
            "Past Perfect Continuous Tense",
          ],
          correctAnswer: "Past Perfect Tense",
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
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Past Continuous Tense is used to indicate an action that completed in the past.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Past Perfect Tense is used to show an action in continuity from a given time in the past.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Past Perfect Continuous Tense is used to show an action that began and completed in the past in comparison to another action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Past Continuous Tense, 'Was' is used with all subjects.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Past Perfect Continuous Tense, 'Have' is used with all Singular Subjects.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Tense is used to show a habitual action in the past.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Continuous Tense can only express temporary situations.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Present Perfect Continuous Tense indicates an action in continuity from a given time.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Present Perfect Tense, 'Has' is used with all Singular Subjects.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
