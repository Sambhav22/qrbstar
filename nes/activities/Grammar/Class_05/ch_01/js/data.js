export const chapter = "Chapter - 1:Sentences";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is a sentence?",
          optionA: "A random arrangement of words",
          optionB: "A group of words expressing a particular meaning",
          optionC: "A set of unrelated words",
          correctAnswer: "A group of words expressing a particular meaning",
        },
        {
          question:
            "Which of the following sentences is an example of an Assertive Sentence?",
          optionA: "How beautiful is this flower?",
          optionB: "She is singing a song.",
          optionC: "Don't forget your umbrella.",
          correctAnswer: "She is singing a song.",
        },
        {
          question:
            "What is the distinguishing feature of Interrogative Sentences?",
          optionA: "Expressing commands",
          optionB: "Asking questions",
          optionC: "Conveying emotions",
          correctAnswer: "Asking questions",
        },
        {
          question:
            "Which type of question can be replied to with either yes or no?",
          optionA: "Question Word Questions",
          optionB: "Exclamatory Questions",
          optionC: "Yes/No type Questions",
          correctAnswer: "Yes/No type Questions",
        },
        {
          question:
            "Identify the Interrogative Word in the question, 'Who is he?'",
          optionA: "is",
          optionB: "who",
          optionC: "he",
          correctAnswer: "who",
        },
        {
          question: "What is the purpose of Imperative Sentences?",
          optionA: "Expressing wishes",
          optionB: "Asking questions",
          optionC: "Giving orders or commands",
          correctAnswer: "Giving orders or commands",
        },
        {
          question:
            "Which sentence type is used to express sudden feelings or emotions?",
          optionA: "Imperative Sentences",
          optionB: "Assertive Sentences",
          optionC: "Exclamatory Sentences",
          correctAnswer: "Exclamatory Sentences",
        },
        {
          question:
            "What is the characteristic feature of Exclamatory Sentences?",
          optionA: "Seeking information",
          optionB: "Expressing sudden feelings or emotions",
          optionC: "Making requests",
          correctAnswer: "Expressing sudden feelings or emotions",
        },
        {
          question:
            "Which sentence type expresses wishes, prayers, or curses and often begins with the word 'may'?",
          optionA: "Interrogative Sentences",
          optionB: "Optative Sentences",
          optionC: "Assertive Sentences",
          correctAnswer: "Optative Sentences",
        },
        {
          question: "Complete the Imperative Sentence: 'Let us go for a walk.'",
          optionA: "Shall we go for a walk?",
          optionB: "May we go for a walk.",
          optionC: "Should we go for a walk.",
          correctAnswer: "Shall we go for a walk?",
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
            "A Sentence is defined as a group of words arranged in a particular order so as to give a particular _______________.",
          options: {
            optionA: "Structure",
            optionB: "Meaning",
            optionC: "Sequence",
          },
          correctAnswer: "Meaning",
        },
        {
          question:
            "An Assertive Sentence expresses a fact, an event, a condition in a positive or negative _____________.",
          options: {
            optionA: "Manner",
            optionB: "Form",
            optionC: "Style",
          },
          correctAnswer: "Manner",
        },
        {
          question:
            "Yes/No type Questions can be replied in __________ or ___________.",
          options: {
            optionA: "Affirmative, Negative",
            optionB: "Positive, Neutral",
            optionC: "Agree, Disagree",
          },
          correctAnswer: "Affirmative, Negative",
        },
        {
          question:
            "Question Word Questions can be replied only with __________ information.",
          options: {
            optionA: "Limited",
            optionB: "Some",
            optionC: "Detailed",
          },
          correctAnswer: "Some",
        },
        {
          question:
            "Imperative Sentences are used to express orders, commands, requests, entreaties, advice, proposals, or ___________.",
          options: {
            optionA: "Demands",
            optionB: "Suggestions",
            optionC: "Promises",
          },
          correctAnswer: "Suggestions",
        },
        {
          question:
            "Exclamatory Sentences are used to express some sudden feelings or ____________.",
          options: {
            optionA: "Thoughts",
            optionB: "Emotions",
            optionC: "Ideas",
          },
          correctAnswer: "Emotions",
        },
        {
          question:
            "Optative Sentences are used to express a wish, prayer, boon, or curse and generally begin with the word ____________.",
          options: {
            optionA: "Please",
            optionB: "May",
            optionC: "Wish",
          },
          correctAnswer: "May",
        },
        {
          question:
            '"May I come in, madam?" is an example of an Imperative Sentence expressing a ___________.',
          options: {
            optionA: "Request",
            optionB: "Order",
            optionC: "Suggestion",
          },
          correctAnswer: "Request",
        },
        {
          question:
            '"Always speak the truth" is an example of an Imperative Sentence giving ___________.',
          options: {
            optionA: "Advice",
            optionB: "Warning",
            optionC: "Information",
          },
          correctAnswer: "Advice",
        },
        {
          question:
            '"Wow! You have finally done it" is an example of an ____________ Sentence.',
          options: {
            optionA: "Assertive",
            optionB: "Exclamatory",
            optionC: "Optative",
          },
          correctAnswer: "Exclamatory",
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
            "An Assertive Sentence expresses a fact, event, or condition in a positive or negative manner.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative Sentences can only be replied with yes or no.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Question Word Questions begin with a helping verb and not with an Interrogative Word.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Imperative Sentences are used to express feelings or emotions.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Optative Sentences express wishes, prayers, or curses and end with a question mark.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Yes/No type Questions can be replied only with some information.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Exclamatory Sentences are used to express sudden feelings or emotions.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Minicomputers are less powerful than Microcomputers.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Supercomputers are mainly used for weather forecasting and scientific simulation.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Wearable Computers provide constant computer and user interaction and are mainly used for graphic design.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
