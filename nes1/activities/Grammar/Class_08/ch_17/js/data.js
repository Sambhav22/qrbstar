export const chapter = "Chapter - 17: Active and Passive Voice ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "When the subject is the doer of the action, what voice is the verb said to be in?",
          optionA: "Passive Voice",
          optionB: "Active Voice",
          optionC: "Indirect Voice",
          correctAnswer: "B) Active Voice",
        },
        {
          question: "In passive voice, what is placed before the new object?",
          optionA: "At",
          optionB: "To",
          optionC: "By",
          correctAnswer: "C) By",
        },
        {
          question:
            "What tense is used for sentences like 'She answers the questions well'?",
          optionA: "Present Indefinite Tense",
          optionB: "Past Indefinite Tense",
          optionC: "Future Indefinite Tense",
          correctAnswer: "A) Present Indefinite Tense",
        },
        {
          question:
            "How is the past participle form of the verb preceded in the present perfect tense in passive voice?",
          optionA: "has been/have been",
          optionB: "was/were",
          optionC: "is being/are being/am being",
          correctAnswer: "A) has been/have been",
        },
        {
          question:
            "What is the passive voice of the sentence 'The dog is not carrying a piece of bone in its mouth'?",
          optionA: "The dog is not carried a piece of bone in its mouth.",
          optionB:
            "A piece of bone is not being carried by the dog in its mouth.",
          optionC: "The dog is not carry a piece of bone in its mouth.",
          correctAnswer:
            "B) A piece of bone is not being carried by the dog in its mouth.",
        },
        {
          question: "Which tense cannot be changed into passive voice?",
          optionA: "Future Continuous Tense",
          optionB: "Present Continuous Tense",
          optionC: "Past Continuous Tense",
          correctAnswer: "A) Future Continuous Tense",
        },
        {
          question:
            "How is the passive voice of 'He had been elected the chairman by the members' formed?",
          optionA: "had been",
          optionB: "was being",
          optionC: "will have been",
          correctAnswer: "A) had been",
        },
        {
          question:
            "What is the passive voice of 'Should you not abide by the rules'?",
          optionA: "Should the rules not be abided by you?",
          optionB: "Should you not be abided by the rules?",
          optionC: "Should the rules not be abide by you?",
          correctAnswer: "A) Should the rules not be abided by you?",
        },
        {
          question:
            "How is the passive voice of 'This load can be carried by the worker easily' formed?",
          optionA: "The worker can be carried this load easily.",
          optionB: "Can this load be carried by the worker easily?",
          optionC: "This load can be carried by the worker easily.",
          correctAnswer: "C) This load can be carried by the worker easily.",
        },
        {
          question:
            "How is the passive voice of 'You are requested to open the door' formed?",
          optionA: "The door is requested to be opened by you.",
          optionB: "You are requested the door to be opened.",
          optionC: "The door is requested to be opened to you.",
          correctAnswer: "A) The door is requested to be opened by you.",
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
            "When the Subject is the doer of the action, the Verb is said to be in the _______ Voice.",
          optionA: "Passive",
          optionB: "Active",
          optionC: "Neutral",
          correctAnswer: "B) Active",
        },
        {
          question:
            "When the Subject receives the action 'that' is the action is attributed to the Subject, it is said to be in _______ Voice.",
          optionA: "Active",
          optionB: "Passive",
          optionC: "Indirect",
          correctAnswer: "B) Passive",
        },
        {
          question:
            "Rules for Changing Active Voice into Passive Voice: 'By' is placed before the new _______.",
          optionA: "Subject",
          optionB: "Object",
          optionC: "Predicate",
          correctAnswer: "B) Object",
        },
        {
          question:
            "In the Present Indefinite Tense, the Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "is/are/am",
          optionB: "was/were",
          optionC: "will be/shall be",
          correctAnswer: "A) is/are/am",
        },
        {
          question:
            "Present Continuous Tense: The Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "is being/are being/am being",
          optionB: "was being/were being",
          optionC: "will be/shall be",
          correctAnswer: "A) is being/are being/am being",
        },
        {
          question:
            "Present Perfect Tense: The Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "has been/have been",
          optionB: "was/were",
          optionC: "will be/shall be",
          correctAnswer: "A) has been/have been",
        },
        {
          question:
            "Past Continuous Tense: The Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "is being/are being/am being",
          optionB: "was being/were being",
          optionC: "will be/shall be",
          correctAnswer: "B) was being/were being",
        },
        {
          question:
            "Past Perfect Tense: The Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "has been/have been",
          optionB: "had been",
          optionC: "will have been/shall have been",
          correctAnswer: "B) had been",
        },
        {
          question:
            "Future Perfect Tense: The Verb is changed into the Past Participle form, preceded by _______.",
          optionA: "is being/are being/am being",
          optionB: "had been",
          optionC: "will have been/shall have been",
          correctAnswer: "C) will have been/shall have been",
        },
        {
          question:
            "Imperative Sentences: Its Passive Voice is begun from 'let' followed by the Object and _______.",
          optionA: "present tense verb",
          optionB: "be + verb (Past Participle form)",
          optionC: "infinitive verb",
          correctAnswer: "B) be + verb (Past Participle form)",
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
            "The verb is said to be in the Active Voice when the subject is the doer of the action.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "In the Passive Voice, the subject receives the action.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "'By' is placed after the new object when changing from Active Voice to Passive Voice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the Present Indefinite Tense, the verb is changed into the Past Participle form, preceded by 'is/are/am'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Present Continuous Tense is not changed into Passive Voice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Past Continuous Tense is changed into Passive Voice by using 'was being/were being'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Present Perfect Tense is changed into Passive Voice by using 'has been/have been'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Future Perfect Tense cannot be changed into Passive Voice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Imperative Sentences in Passive Voice begin with 'let' followed by the object and the present tense verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "'To be + verb (Past Participle form)' is used in Passive Voice for sentences with Modal Auxiliaries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
