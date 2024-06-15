export const chapter = "Chapter - 17: Active and Passive Voice";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the active voice in a sentence?",
          optionA: "a) When the subject receives the action.",
          optionB: "b) When the subject is doing the action.",
          optionC:
            "c) When the subject is both doing and receiving the action.",
          correctAnswer: "b) When the subject is doing the action.",
        },
        {
          question: "In passive voice, what does the subject of a verb become?",
          optionA: "a) The object.",
          optionB: "b) The action.",
          optionC: "c) The indirect object.",
          correctAnswer: "a) The object.",
        },
        {
          question: "Which of the following sentences is in passive voice?",
          optionA: "a) 'They will build a fine temple here.'",
          optionB: "b) 'The mischievous boy annoyed the teacher.'",
          optionC:
            "c) 'A lovely pullover is being knit by her mother for the child.'",
          correctAnswer:
            "c) 'A lovely pullover is being knit by her mother for the child.'",
        },
        {
          question:
            "What is the rule for changing the subject from active to passive voice?",
          optionA: "a) The subject remains the same.",
          optionB: "b) The subject becomes the object.",
          optionC: "c) The subject becomes the indirect object.",
          correctAnswer: "b) The subject becomes the object.",
        },
        {
          question: "Which tense cannot be changed into passive voice?",
          optionA: "a) Present Continuous Tense.",
          optionB: "b) Future Continuous Tense.",
          optionC: "c) Past Perfect Tense.",
          correctAnswer: "b) Future Continuous Tense.",
        },
        {
          question:
            "How is the present perfect tense changed into passive voice?",
          optionA: "a) Verb + has been/have been.",
          optionB: "b) Verb + is being/are being/am being.",
          optionC: "c) Verb + will be/shall be.",
          correctAnswer: "a) Verb + has been/have been.",
        },
        {
          question:
            "What is the passive voice of 'She may permit me to come here'?",
          optionA: "a) 'I may permit her to come here.'",
          optionB: "b) 'I may be permitted to come here by her.'",
          optionC: "c) 'She permits me to come here.'",
          correctAnswer: "b) 'I may be permitted to come here by her.'",
        },
        {
          question:
            "In imperative sentences, what is the passive voice initiated with?",
          optionA: "a) 'Let + Object + Verb.'",
          optionB: "b) 'Object + Verb + Let.'",
          optionC: "c) 'Object + Be + Verb.'",
          correctAnswer: "a) 'Let + Object + Verb.'",
        },
        {
          question:
            "How is the modal auxiliary 'can' changed into passive voice?",
          optionA: "a) 'Can be + Verb.'",
          optionB: "b) 'Be + Verb + Can.'",
          optionC: "c) 'Verb + can.'",
          correctAnswer: "a) 'Can be + Verb.'",
        },
        {
          question:
            "What is the correct passive voice for the imperative sentence 'Don't call him here'?",
          optionA: "a) 'Let him not be called here by you.'",
          optionB: "b) 'You are requested not to call him here.'",
          optionC: "c) 'Let him be called here by you.'",
          correctAnswer: "a) 'Let him not be called here by you.'",
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
            "In __________ voice, the subject of a verb is doing the action.",
          options: ["a) Active", "b) Passive", "c) Reflexive"],
          correctAnswer: "a) Active",
        },
        {
          question: "The teacher was __________ by the mischievous boy.",
          options: ["a) annoyed", "b) pleased", "c) ignored"],
          correctAnswer: "a) annoyed",
        },
        {
          question:
            "While changing sentences of the Present Indefinite Tense into Passive Voice, the verb is changed into the Past Participle form, preceded by __________ according to the new subject.",
          options: ["a) is/are/am", "b) was/were", "c) will be/shall be"],
          correctAnswer: "a) is/are/am",
        },
        {
          question: "The postman __________ deliver her the parcel.",
          options: ["a) can", "b) will", "c) may"],
          correctAnswer: "b) will",
        },
        {
          question:
            "In Present Continuous Tense, the verb is changed into the Past Participle form, preceded by __________ as per the new subject.",
          options: [
            "a) is being/are being/am being",
            "b) was being/were being",
            "c) will be/shall be",
          ],
          correctAnswer: "a) is being/are being/am being",
        },
        {
          question: "The children had __________ their books.",
          options: ["a) tom", "b) torn", "c) tore"],
          correctAnswer: "b) torn",
        },
        {
          question:
            "When there is a Modal Auxiliary in a sentence, its Passive Voice is made by adding __________ after it and using Past Participle of the Verb.",
          options: ["a) has been/have been", "b) be", "c) is/are/am"],
          correctAnswer: "b) be",
        },
        {
          question:
            "An Imperative Sentence expresses __________, request, suggestion, etc.",
          options: ["a) information", "b) order", "c) question"],
          correctAnswer: "b) order",
        },
        {
          question: "You are requested __________ some water.",
          options: ["a) give", "b) giving", "c) to give"],
          correctAnswer: "c) to give",
        },
        {
          question:
            "When the Reported Speech is in the Present or Future Tense, the tense of the Reported Speech in Indirect Speech __________.",
          options: [
            "a) remains unchanged",
            "b) changes to the Past Tense",
            "c) changes to the Future Tense",
          ],
          correctAnswer: "a) remains unchanged",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The passive voice is used when the subject of a verb is receiving the action.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In imperative sentences, the passive voice is initiated with 'Let + Object + Verb.'",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The tense of the reported speech in indirect speech remains unchanged when the reported speech is in the present or future tense.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The future continuous tense can be changed into the passive voice.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Modal auxiliaries in a sentence are changed into passive voice by adding 'be' after them and using the past participle of the verb.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "An imperative sentence expresses a statement, not an order, request, or suggestion.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The past perfect tense is changed into the passive voice by using 'has been' or 'have been' as per the new subject.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wh-type questions in indirect speech are transformed using the conjunction 'if' or 'whether'.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The passive voice is initiated in imperative sentences with 'Object + Verb + Let.'",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When there is a modal auxiliary in a sentence, its passive voice is made by adding 'be' after it and using the past participle of the verb.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };

export var activityData;
