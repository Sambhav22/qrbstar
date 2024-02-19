export const chapter = "Chapter - 17: Active and Passive Voice";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "In passive voice, what happens to the subject of a sentence from active voice?",
          optionA: "It remains the same",
          optionB: "It becomes the object",
          optionC: "It becomes the verb",
          correctAnswer: "It becomes the object",
        },
        {
          question:
            "What tense form is used when changing sentences from the present indefinite tense into passive voice?",
          optionA: "Present participle",
          optionB: "Past participle",
          optionC: "Future participle",
          correctAnswer: "Past participle",
        },
        {
          question:
            "Which auxiliary verb is used in passive voice when the future continuous tense is used in active voice?",
          optionA: "will be",
          optionB: "shall be",
          optionC: "is being",
          correctAnswer: "will be",
        },
        {
          question:
            "How is the verb changed in passive voice when converting sentences from the past continuous tense?",
          optionA: "Past participle form",
          optionB: "Present participle form",
          optionC: "Future participle form",
          correctAnswer: "Past participle form",
        },
        {
          question: "What tense cannot be changed into passive voice?",
          optionA: "Present perfect tense",
          optionB: "Future perfect tense",
          optionC: "Future continuous tense",
          correctAnswer: "Future continuous tense",
        },
        {
          question:
            "When a modal auxiliary is present in the active voice, what is added to create the passive voice?",
          optionA: "Is",
          optionB: "Be",
          optionC: "Has",
          correctAnswer: "Be",
        },
        {
          question:
            "Which of the following modal auxiliary changes to 'should be' in passive voice?",
          optionA: "Must",
          optionB: "Could",
          optionC: "Should",
          correctAnswer: "Should",
        },
        {
          question: "What is used before the new object in passive voice?",
          optionA: "By",
          optionB: "At",
          optionC: "With",
          correctAnswer: "By",
        },
        {
          question:
            "Which tense form is used in passive voice when changing sentences from the past perfect tense?",
          optionA: "Past participle",
          optionB: "Present participle",
          optionC: "Future participle",
          correctAnswer: "Past participle",
        },
        {
          question:
            "In passive voice, what happens to the object of a sentence from active voice?",
          optionA: "It remains the same",
          optionB: "It becomes the subject",
          optionC: "It becomes the verb",
          correctAnswer: "It becomes the subject",
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
            "1. While changing sentences of the present indefinite tense into passive voice, the verb is changed into the ______ form.",
          options: ["a) Present", "b) Past", "c) Future"],
          correctAnswer: "b) Past",
        },
        {
          question:
            "2. In passive voice, what is placed before the new object?",
          options: ["a) At", "b) With", "c) ______"],
          correctAnswer: "c) By",
        },
        {
          question:
            "3. When changing sentences from the past continuous tense into passive voice, the verb is changed into the ______ form.",
          options: [
            "a) Present participle",
            "b) Past participle",
            "c) Future participle",
          ],
          correctAnswer: "b) Past participle",
        },
        {
          question:
            "4. Which tense form is used in passive voice when converting sentences from the present perfect tense?",
          options: [
            "a) Present participle",
            "b) Past participle",
            "c) Future participle",
          ],
          correctAnswer: "b) Past participle",
        },
        {
          question:
            "5. When a modal auxiliary is present in the active voice, what is added to create the passive voice?",
          options: ["a) Is", "b) Be", "c) Has"],
          correctAnswer: "b) Be",
        },
        {
          question:
            "6. What happens to words showing distance, time, or position when changing from direct to indirect speech?",
          options: [
            "a) They remain unchanged.",
            "b) They are replaced by synonyms.",
            "c) They are changed according to the context.",
          ],
          correctAnswer: "c) They are changed according to the context.",
        },
        {
          question:
            "7. Which type of questions in direct speech are changed into statements in indirect speech?",
          options: [
            "a) Yes/No-type questions",
            "b) Wh-type questions",
            "c) Both A and B",
          ],
          correctAnswer: "c) Both A and B",
        },
        {
          question:
            "8. How are yes/no-type questions changed into indirect speech?",
          options: [
            "a) The conjunction 'that' is used.",
            "b) The question is changed into a statement with the conjunction 'if' or 'whether'.",
            "c) The question remains unchanged.",
          ],
          correctAnswer:
            "b) The question is changed into a statement with the conjunction 'if' or 'whether'.",
        },
        {
          question:
            "9. What happens to commands, advices, or requests in indirect speech?",
          options: [
            "a) They are changed into interrogative sentences.",
            "b) They are changed into infinitives.",
            "c) They are omitted.",
          ],
          correctAnswer: "b) They are changed into infinitives.",
        },
        {
          question:
            "10. When there is a request in the reported speech, what word is used to replace 'said to'?",
          options: ["a) Advised", "b) Requested", "c) Ordered"],
          correctAnswer: "b) Requested",
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
            "Changing sentences from the present indefinite tense into passive voice involves changing the verb into the past participle form.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In passive voice, the subject of a sentence from active voice becomes the object.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The tense of the reported speech changes when the reporting verb is in the present or future tense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Commands, advices, or requests in indirect speech are changed into interrogative sentences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When there is a request in the reported speech, the word 'said to' is replaced by 'requested'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Words showing distance, time, or position remain unchanged when changing from direct to indirect speech.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The tense of the reported speech changes when the reporting verb is in the past tense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Proposals and requests in indirect speech are expressed using the conjunction 'that' and 'should'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Historical facts, habitual facts, or proverbs do not require a change in the tense of the reported speech.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In passive voice, the object of a sentence from active voice becomes the subject.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
