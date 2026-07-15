export const chapter = "Chapter - 16: Direct and Indirect Speech";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the two parts of a sentence in Direct Speech?",
          optionA: "Reporting Verb and Reported Action",
          optionB: "Reporting Verb and Reported Speech",
          optionC: "Reported Speech and Reported Action",
          correctAnswer: "Reporting Verb and Reported Speech",
        },
        {
          question:
            "When changing Direct Speech to Indirect Speech, what happens to the comma and inverted commas?",
          optionA: "They are replaced by a semicolon and single quotes.",
          optionB: "They are removed and replaced by the conjunction 'that'.",
          optionC: "They are left unchanged.",
          correctAnswer:
            "They are removed and replaced by the conjunction 'that'.",
        },
        {
          question:
            "If the Reporting Verb is in the Present or Future Tense, what happens to the tense of the Reported Speech?",
          optionA: "It remains unchanged.",
          optionB: "It changes to the past tense.",
          optionC: "It changes to the present perfect tense.",
          correctAnswer: "It remains unchanged.",
        },
        {
          question:
            "What happens to words showing distance, time, or position when changing from Direct to Indirect Speech?",
          optionA: "They remain unchanged.",
          optionB: "They are replaced by synonyms.",
          optionC: "They are changed according to the context.",
          correctAnswer: "They are changed according to the context.",
        },
        {
          question:
            "Which type of questions in Direct Speech are changed into statements in Indirect Speech?",
          optionA: "Yes/No-type questions",
          optionB: "Wh-type questions",
          optionC: "Both A and B",
          correctAnswer: "Both A and B",
        },
        {
          question:
            "How are Yes/No-type questions changed into Indirect Speech?",
          optionA: "The conjunction 'that' is used.",
          optionB:
            "The question is changed into a statement with the conjunction 'if' or 'whether'.",
          optionC: "The question remains unchanged.",
          correctAnswer:
            "The question is changed into a statement with the conjunction 'if' or 'whether'.",
        },
        {
          question:
            "What happens to commands, advices, or requests in Indirect Speech?",
          optionA: "They are changed into interrogative sentences.",
          optionB: "They are changed into infinitives.",
          optionC: "They are omitted.",
          correctAnswer: "They are changed into infinitives.",
        },
        {
          question:
            "When there is a request in the Reported Speech, what word is used to replace 'said to'?",
          optionA: "Advised",
          optionB: "Requested",
          optionC: "Ordered",
          correctAnswer: "Requested",
        },
        {
          question:
            "How are proposals and requests expressed in Indirect Speech?",
          optionA: "With the conjunction 'that' and 'should'",
          optionB: "With the conjunction 'and' and 'would'",
          optionC: "With the conjunction 'but' and 'could'",
          correctAnswer: "With the conjunction 'that' and 'should'",
        },
        {
          question:
            "What is the purpose of changing Direct Speech into Indirect Speech?",
          optionA: "To make it more direct",
          optionB: "To make it easier to understand",
          optionC:
            "To report what someone else said without quoting them directly",
          correctAnswer:
            "To report what someone else said without quoting them directly",
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
            "1. When changing Direct Speech to Indirect Speech, the comma and inverted commas are removed and replaced by the conjunction __________.",
          options: ["a) but", "b) and", "c) that"],
          correctAnswer: "c) that",
        },
        {
          question:
            "2. If the Reporting Verb is in the Present or Future Tense, the tense of the Reported Speech __________ changed.",
          options: ["a) remains", "b) becomes", "c) reverses"],
          correctAnswer: "a) remains",
        },
        {
          question:
            "3. In Indirect Speech, words showing distance, time, or position are changed according to the __________.",
          options: ["a) context", "b) speaker", "c) listener"],
          correctAnswer: "a) context",
        },
        {
          question:
            "4. Yes/No-type questions in Direct Speech are changed into statements in Indirect Speech using the conjunction __________.",
          options: ["a) and", "b) if", "c) but"],
          correctAnswer: "b) if",
        },
        {
          question:
            "5. Commands, advices, or requests in Indirect Speech are changed into __________.",
          options: ["a) questions", "b) exclamations", "c) infinitives"],
          correctAnswer: "c) infinitives",
        },
        {
          question:
            "6. When there is a request in the Reported Speech, the word 'said to' is replaced by __________.",
          options: ["a) ordered", "b) requested", "c) suggested"],
          correctAnswer: "b) requested",
        },
        {
          question:
            "7. Proposals and requests in Indirect Speech are expressed using the conjunction 'that' and __________.",
          options: ["a) would", "b) should", "c) could"],
          correctAnswer: "b) should",
        },
        {
          question:
            "8. The purpose of changing Direct Speech into Indirect Speech is to report what someone else said without __________ them directly.",
          options: ["a) quoting", "b) criticizing", "c) ignoring"],
          correctAnswer: "a) quoting",
        },
        {
          question:
            "9. When the Reporting Verb is in the Past Tense, the tense of the Reported Speech is changed according to specific rules, except for __________.",
          options: [
            "a) Present Continuous Tense",
            "b) Past Indefinite Tense",
            "c) Past Perfect Tense",
          ],
          correctAnswer: "b) Past Indefinite Tense",
        },
        {
          question:
            "10. Historical facts, habitual facts, universal truths, or proverbs do not require a change in the __________ of the Reported Speech.",
          options: ["a) tense", "b) context", "c) subject"],
          correctAnswer: "a) tense",
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
            "Question Tag is used more often in speech than in writing.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "A negative tag is added to a negative statement and a positive tag is added to a positive one.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "Will you is used as a Question Tag with an Imperative Sentence.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question: "The negative Question Tag for I is amn't I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question: "The positive Question Tag for I is aren't I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The positive Question Tag for 'We have not met them yet' is haven't we.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "The negative Question Tag for 'I am not in agreement with this' is am I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The Question Tag used with 'Don't play on the road' is will you.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The Question Tag for 'They bring a lot of gifts for us' is don't they.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "The negative Question Tag for 'We have finished our work' is have we.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
      ],
  };
}

export var activityData;
