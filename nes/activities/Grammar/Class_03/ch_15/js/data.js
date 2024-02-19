export const chapter = "Chapter - 15: Simple Future Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What does Simple Future Tense describe?",
          optionA: "Past actions",
          optionB: "Present actions",
          optionC: "Future actions",
          correctAnswer: "Future actions",
        },
        {
          question: "Which term is synonymous with Simple Future Tense?",
          optionA: "Past Continuous Tense",
          optionB: "Future Indefinite Tense",
          optionC: "Present Perfect Tense",
          correctAnswer: "Future Indefinite Tense",
        },
        {
          question:
            "In affirmative sentences, what is the correct word order for the subject 'I'?",
          optionA: "Subject + shall + Verb in I Form + Object",
          optionB: "Subject + will + Verb in I Form + Object",
          optionC: "Subject + can + Verb in I Form + Object",
          correctAnswer: "Subject + shall + Verb in I Form + Object",
        },
        {
          question: "When is 'shall' used in affirmative sentences?",
          optionA: "With all subjects",
          optionB: "Only with 'I' and 'we'",
          optionC: "Only with 'you' and 'they'",
          correctAnswer: "Only with 'I' and 'we'",
        },
        {
          question:
            "What is the correct word order for negative sentences in Simple Future Tense?",
          optionA: "Subject + will/shall + not/never + Verb in I Form + Object",
          optionB: "Subject + Verb in I Form + will/shall + not/never + Object",
          optionC: "Subject + Verb in I Form + Object + will/shall + not/never",
          correctAnswer:
            "Subject + will/shall + not/never + Verb in I Form + Object",
        },
        {
          question:
            "Which word is used after 'will' or 'shall' in negative sentences?",
          optionA: "Always 'not'",
          optionB: "Never 'not'",
          optionC: "Occasionally 'never'",
          correctAnswer: "Always 'not'",
        },
        {
          question:
            "In the sentence 'I shall not go there,' what is the tense?",
          optionA: "Past Tense",
          optionB: "Present Tense",
          optionC: "Future Tense",
          correctAnswer: "Future Tense",
        },
        {
          question:
            "What is the correct word order for interrogative sentences?",
          optionA:
            "Interrogative Word + will/shall + Subject + Verb in I Form + Object?",
          optionB:
            "Interrogative Word + Subject + will/shall + Verb in I Form + Object?",
          optionC:
            "Subject + Verb in I Form + will/shall + Interrogative Word + Object?",
          correctAnswer:
            "Interrogative Word + will/shall + Subject + Verb in I Form + Object?",
        },
        {
          question:
            "In interrogative sentences, where is 'shall' or 'will' placed?",
          optionA: "At the end of the sentence",
          optionB: "In the middle of the sentence",
          optionC: "At the beginning of the sentence",
          correctAnswer: "At the beginning of the sentence",
        },
        {
          question:
            "Which sentence demonstrates the correct use of an interrogative sentence with 'shall'?",
          optionA: "Shall we go to the park?",
          optionB: "We shall go to the park, shall we?",
          optionC: "We to the park go shall?",
          correctAnswer: "Shall we go to the park?",
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
            "Simple Future Tense, also known as Future Indefinite Tense, describes an action that ____________ in the future.",
          options: ["happened", "is happening", "will take place"],
          correctAnswer: "will take place",
        },
        {
          question:
            "In affirmative sentences, the word order is Subject + ____________ + Verb in I Form + Object.",
          options: ["did", "will", "can"],
          correctAnswer: "will",
        },
        {
          question: '"Shall" is used with only the subjects ____________.',
          options: ["he and she", "I and we", "you and they"],
          correctAnswer: "I and we",
        },
        {
          question:
            "In negative sentences, the word order is Subject + will/shall + ____________ + Verb in I Form + Object.",
          options: ["ever", "not/never", "always"],
          correctAnswer: "not/never",
        },
        {
          question:
            '"Not" is used after "will" or "shall" in ____________ sentences.',
          options: ["affirmative", "negative", "interrogative"],
          correctAnswer: "negative",
        },
        {
          question:
            "The correct word order for interrogative sentences is Interrogative Word + will/shall + Subject + Verb in I Form + ____________?",
          options: ["Object?", "Action?", "Future?"],
          correctAnswer: "Object?",
        },
        {
          question:
            'In an interrogative sentence, "shall" and "will" are used ____________ of the sentence.',
          options: ["at the end", "in the middle", "at the beginning"],
          correctAnswer: "at the beginning",
        },
        {
          question: "Simple Future Tense is also known as ____________.",
          options: [
            "Present Continuous Tense",
            "Simple Past Tense",
            "Future Perfect Tense",
          ],
          correctAnswer: "Future Perfect Tense",
        },
        {
          question:
            "All other subjects take ____________ in affirmative sentences.",
          options: ["can", "will", "shall"],
          correctAnswer: "will",
        },
        {
          question:
            "In an affirmative sentence, the correct word order for Simple Future Tense is Subject + ____________ + Verb in I Form + Object.",
          options: ["can", "shall", "will"],
          correctAnswer: "will",
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
            "Simple Future Tense is also known as Future Indefinite Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In affirmative sentences, the word order for the subject 'I' is Subject + shall + Verb in I Form + Object.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            '"Shall" is used with all subjects in affirmative sentences.',
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Negative sentences in Simple Future Tense have the word order Subject + will/shall + not/never + Verb in I Form + Object.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In interrogative sentences, the word order is Interrogative Word + will/shall + Subject + Verb in I Form + Object?",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Present form of the verb (I form) is used with 'did not' in all negative sentences.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "All other subjects take 'will' in affirmative sentences.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In interrogative sentences, 'shall' and 'will' are used at the end of the sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Simple Future Tense is also known as Future Perfect Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In an affirmative sentence, the correct word order for Simple Future Tense is Subject + can + Verb in I Form + Object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
