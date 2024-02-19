export const chapter = "Chapter - 16: Simple Continuous Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the correct word order for an affirmative sentence in the Present Continuous Tense?",
          optionA: "Subject + Verb in I Form -ing + Object",
          optionB: "Subject + is/are/am + Object + Verb in I Form -ing",
          optionC: "Subject + is/are/am + Verb in I Form -ing + Object",
          correctAnswer: "Subject + is/are/am + Verb in I Form -ing + Object",
        },
        {
          question:
            "Which form of 'to be' is used with the subject 'I' in the Present Continuous Tense?",
          optionA: "Are",
          optionB: "Is",
          optionC: "Am",
          correctAnswer: "Am",
        },
        {
          question:
            "In negative sentences in the Present Continuous Tense, where is 'not' placed?",
          optionA: "After the subject",
          optionB: "After the verb",
          optionC: "After is/are/am",
          correctAnswer: "After is/are/am",
        },
        {
          question:
            "What is the correct structure for negative sentences in the Present Continuous Tense?",
          optionA: "Subject + is/are/am + Verb in I Form -ing + not + Object",
          optionB: "Subject + not + is/are/am + Verb in I Form -ing + Object",
          optionC: "Subject + is/are/am + Object + Verb in I Form -ing + not",
          correctAnswer:
            "Subject + is/are/am + not + Verb in I Form -ing + Object",
        },
        {
          question:
            "Which form of 'to be' is used with all plural subjects in the Present Continuous Tense?",
          optionA: "Am",
          optionB: "Is",
          optionC: "Are",
          correctAnswer: "Are",
        },
        {
          question:
            "Choose the correct interrogative sentence in the Present Continuous Tense.",
          optionA: "Are you plucking flowers here?",
          optionB: "You are plucking flowers here?",
          optionC: "Are flowers being plucked here by you?",
          correctAnswer: "Are you plucking flowers here?",
        },
        {
          question:
            "What is the correct word order for interrogative sentences in the Present Continuous Tense?",
          optionA: "Is/are/am + Verb in I Form -ing + Subject + Object?",
          optionB:
            "Interrogative Word + is/are/am + Subject + Verb in I Form -ing + Object?",
          optionC: "Subject + Object + is/are/am + Verb in I Form -ing?",
          correctAnswer:
            "Interrogative Word + is/are/am + Subject + Verb in I Form -ing + Object?",
        },
        {
          question: "Which sentence is in the Present Continuous Tense?",
          optionA: "He speaks five languages.",
          optionB: "They will visit us tomorrow.",
          optionC: "She is dancing in the room.",
          correctAnswer: "She is dancing in the room.",
        },
        {
          question:
            "What is the correct affirmative sentence in the Present Continuous Tense?",
          optionA: "I not am talking to you.",
          optionB: "I am talking to you.",
          optionC: "I am not talking to you.",
          correctAnswer: "I am talking to you.",
        },
        {
          question: "When is 'is' used in the Present Continuous Tense?",
          optionA: "With all singular subjects.",
          optionB: "With you and all plural subjects.",
          optionC: "With the subject 'I'.",
          correctAnswer: "With all singular subjects.",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "___________ is used with the Subject 'I'.",
          options: ["Is", "Are", "Am"],
          correctAnswer: "Am",
        },
        {
          question: "___________ is used with you and all Plural Subjects.",
          options: ["Is", "Are", "Am"],
          correctAnswer: "Are",
        },
        {
          question: "___________ is used with all Singular Subjects.",
          options: ["Is", "Are", "Am"],
          correctAnswer: "Is",
        },
        {
          question: "Not is used after ___________ in Negative sentences.",
          options: ["Is", "Are", "Am"],
          correctAnswer: "Is",
        },
        {
          question: "His friends are not coming from ___________.",
          options: ["Here", "There", "Abroad"],
          correctAnswer: "Abroad",
        },
        {
          question: "I am not reading ___________.",
          options: ["A story book", "Some books", "Any book"],
          correctAnswer: "A story book",
        },
        {
          question:
            "In an Interrogative sentence, ___________ is used in the beginning of the sentence.",
          options: ["Is", "Are", "Am"],
          correctAnswer: "Are",
        },
        {
          question: "Am I ___________ now?",
          options: ["Reading", "Shaving", "Cooking"],
          correctAnswer: "Shaving",
        },
        {
          question: "When are you going to send ___________?",
          options: ["This mail", "These emails", "Those letters"],
          correctAnswer: "This mail",
        },
        {
          question:
            "___________ is used with the Subject 'I' in Interrogative sentences.",
          options: ["Are", "Is", "Am"],
          correctAnswer: "Am",
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
            "Subject 'I' is paired with 'Am' in the Present Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "'Are' is used with all Plural Subjects in the Present Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "'Is' is used with all Singular Subjects in the Present Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In negative sentences, 'Not' is placed after the subject in the Present Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "'Will' is used with all subjects in Simple Future Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "'Shall' is used with 'I' and 'we' in Simple Future Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In negative sentences in Simple Future Tense, 'Not' is placed before the verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "'Will' and 'shall' are used at the end of interrogative sentences in Simple Future Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Simple Future Tense is also known as Present Perfect Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "All subjects take 'Will' in affirmative sentences in Simple Future Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
