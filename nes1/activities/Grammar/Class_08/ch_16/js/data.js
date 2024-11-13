export const chapter = "Chapter - 16: Direct and Indirect Speech ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two main parts of a sentence in Direct Speech?",
          optionA: "Verb and adverb",
          optionB: "Reporting Verb and Reported Speech",
          optionC: "Noun and pronoun",
          correctAnswer: "b) Reporting Verb and Reported Speech",
        },
        {
          question:
            "Which conjunction is used to replace the comma and quotation marks in Direct Speech?",
          optionA: "And",
          optionB: "That",
          optionC: "But",
          correctAnswer: "b) That",
        },
        {
          question:
            "In Indirect Speech, which words are used to replace 'says to' or 'said to'?",
          optionA: "Tells or told",
          optionB: "Asks or enquired",
          optionC: "Ordered or commanded",
          correctAnswer: "a) Tells or told",
        },
        {
          question:
            "When converting Direct Speech to Indirect Speech, what happens to first-person words in the Reported Speech?",
          optionA: "They remain unchanged",
          optionB:
            "They are changed according to the subject of the Reporting Verb",
          optionC:
            "They are changed according to the object of the Reporting Verb",
          correctAnswer:
            "b) They are changed according to the subject of the Reporting Verb",
        },
        {
          question:
            "What tense change occurs in the Reported Speech when the Reporting Verb is in the past tense?",
          optionA: "No tense change",
          optionB: "Future tense becomes past tense",
          optionC: "Present tense becomes past tense",
          correctAnswer: "c) Present tense becomes past tense",
        },
        {
          question:
            "Which words are changed when showing distance, time, or position in Indirect Speech?",
          optionA: "Ago becomes before, here becomes there, now becomes then",
          optionB: "Ago becomes after, here becomes there, now becomes later",
          optionC: "Ago becomes after, here becomes there, now becomes then",
          correctAnswer:
            "a) Ago becomes before, here becomes there, now becomes then",
        },
        {
          question:
            "How are Yes/No-type questions changed into Indirect Speech?",
          optionA:
            "By adding the conjunction 'if' or 'whether' and changing the question into a statement",
          optionB:
            "By changing the question into a statement without adding any conjunction",
          optionC:
            "By replacing the question with a declarative form and adding a question mark",
          correctAnswer:
            "a) By adding the conjunction 'if' or 'whether' and changing the question into a statement",
        },
        {
          question:
            "What happens to commands, advices, and requests in the Reported Speech?",
          optionA: "They remain the same",
          optionB: "They are changed into infinitives",
          optionC: "They are changed into questions",
          correctAnswer: "b) They are changed into infinitives",
        },
        {
          question:
            "When there is a proposal in the Reported Speech, what is used instead of 'said'?",
          optionA: "Ordered",
          optionB: "Advised",
          optionC: "Proposed or suggested",
          correctAnswer: "c) Proposed or suggested",
        },
        {
          question:
            "How are exclamatory sentences changed into Indirect Speech?",
          optionA:
            "By changing the sentence into a statement and adding exclamation marks",
          optionB:
            "By changing the sentence into a statement and adding the appropriate expression of emotion",
          optionC:
            "By changing the sentence into a question and adding exclamation marks",
          correctAnswer:
            "b) By changing the sentence into a statement and adding the appropriate expression of emotion",
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
            'The comma (,) and quotation marks (") in the Direct Speech are removed and replaced by the conjunction ______.',
          optionA: "and",
          optionB: "that",
          optionC: "but",
          correctAnswer: "that",
        },
        {
          question:
            "In the Reported Speech, first-person words are changed according to the ______ of the Reporting Verb.",
          optionA: "subject",
          optionB: "object",
          optionC: "adverb",
          correctAnswer: "subject",
        },
        {
          question:
            "When the Reporting Verb is in the Present or Future Tense, the tense of the Reported Speech ______ change.",
          optionA: "does",
          optionB: "doesn't",
          optionC: "might",
          correctAnswer: "doesn't",
        },
        {
          question:
            "If the Reporting Verb is in the Past Tense, the tense of the Reported Speech is ______.",
          optionA: "changed to the past tense",
          optionB: "changed to the present tense",
          optionC: "not changed",
          correctAnswer: "changed to the past tense",
        },
        {
          question:
            'The following words are changed in Indirect Speech: "ago" becomes ______.',
          optionA: "before",
          optionB: "after",
          optionC: "later",
          correctAnswer: "before",
        },
        {
          question:
            "No change is made to the Verb of the Reported Speech if it shows a ______.",
          optionA: "habitual fact",
          optionB: "future prediction",
          optionC: "wish",
          correctAnswer: "habitual fact",
        },
        {
          question:
            "Interrogative sentences are changed into Indirect Speech by using the conjunction ______.",
          optionA: "and",
          optionB: "if",
          optionC: "but",
          correctAnswer: "if",
        },
        {
          question:
            "Commands, advices, and requests are changed into ______ in the Reported Speech.",
          optionA: "statements",
          optionB: "questions",
          optionC: "infinitives",
          correctAnswer: "infinitives",
        },
        {
          question:
            'If there is a proposal in the Reported Speech, "said" is changed to ______.',
          optionA: "ordered",
          optionB: "advised",
          optionC: "proposed or suggested",
          correctAnswer: "proposed or suggested",
        },
        {
          question:
            "Exclamatory sentences are changed into Indirect Speech by adding the appropriate expression of ______.",
          optionA: "anger",
          optionB: "emotion",
          optionC: "confusion",
          correctAnswer: "emotion",
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
            "The comma and quotation marks in Direct Speech are removed and replaced by the conjunction 'that'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In Indirect Speech, first-person words are changed according to the subject of the Reporting Verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The tense of the Reported Speech changes when the Reporting Verb is in the Present or Future Tense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Indirect Speech, 'ago' becomes 'after' when showing distance, time, or position.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Commands, advices, and requests are changed into questions in the Reported Speech.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "If there is a proposal in the Reported Speech, 'said' is changed to 'ordered'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative sentences are changed into Indirect Speech by using the conjunction 'and'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "No change is made to the Verb of the Reported Speech if it shows a habitual fact.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Exclamatory sentences are changed into Indirect Speech by adding the appropriate expression of anger.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "If there is a proposal in the Reported Speech, 'said' is changed to 'advised'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
