export const chapter = "Chapter - 6: Auxiliaries and Modals  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary function of Auxiliary Verbs in a sentence?",
          optionA: "a) Introduce a new subject",
          optionB: "b) Add tense, mood, voice, or modality to the Main Verb",
          optionC: "c) Act as the main focus of the sentence",
          correctAnswer:
            "b) Add tense, mood, voice, or modality to the Main Verb",
        },
        {
          question: "Which of the following is not a Primary Auxiliary?",
          optionA: "a) Is",
          optionB: "b) Have",
          optionC: "c) Can",
          correctAnswer: "c) Can",
        },
        {
          question:
            "In the sentence 'A bird was flying in the air,' what is the Main Verb?",
          optionA: "a) was",
          optionB: "b) bird",
          optionC: "c) flying",
          correctAnswer: "c) flying",
        },
        {
          question:
            "What is the primary purpose of Modal Auxiliaries in a sentence?",
          optionA: "a) Provide additional information",
          optionB: "b) Add emphasis to the subject",
          optionC: "c) Express possibility, ability, permission, or obligation",
          correctAnswer:
            "c) Express possibility, ability, permission, or obligation",
        },
        {
          question:
            "Which Modal Auxiliary is used to make a polite request when someone is in a position of authority?",
          optionA: "a) Could",
          optionB: "b) Shall",
          optionC: "c) Will",
          correctAnswer: "b) Shall",
        },
        {
          question: "What is the negative form of 'must'?",
          optionA: "a) Don't",
          optionB: "b) Mustn't",
          optionC: "c) Won't",
          correctAnswer: "b) Mustn't",
        },
        {
          question: "How is 'should' used in a sentence?",
          optionA: "a) Expressing obligation",
          optionB: "b) Giving advice",
          optionC: "c) Showing ability",
          correctAnswer: "b) Giving advice",
        },
        {
          question: "What is the function of 'used to' as a Modal Auxiliary?",
          optionA: "a) Expressing a past habit",
          optionB: "b) Present continuous action",
          optionC: "c) Future prediction",
          correctAnswer: "a) Expressing a past habit",
        },
        {
          question:
            "Which Modal Auxiliary is used to indicate strong opinions or suggestions on important matters?",
          optionA: "a) Can",
          optionB: "b) Must",
          optionC: "c) Should",
          correctAnswer: "b) Must",
        },
        {
          question: "How is 'may' used in a sentence?",
          optionA: "a) To express remote possibility",
          optionB: "b) To give and take permission",
          optionC: "c) To show compulsion or necessity",
          correctAnswer: "b) To give and take permission",
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
            "Primary Auxiliaries, such as __________, __________, and __________, are used to form different tenses in sentences.",
          optionA: "a) Can, will, shall",
          optionB: "b) Is, are, am",
          optionC: "c) Have, had, has",
          correctAnswer: "b) Is, are, am",
        },
        {
          question:
            "Modal Auxiliaries express __________, __________, __________, or __________ in a sentence.",
          optionA: "a) Emotion, intention, perception, obligation",
          optionB: "b) Speed, strength, color, size",
          optionC: "c) Shape, weight, temperature, taste",
          correctAnswer: "a) Emotion, intention, perception, obligation",
        },
        {
          question:
            "In Future Tense, the First Person (I, We) uses __________, while all other Subjects use __________.",
          optionA: "a) Can, would",
          optionB: "b) Shall, will",
          optionC: "c) Have, should",
          correctAnswer: "b) Shall, will",
        },
        {
          question:
            "To give advice, the Modal Auxiliaries __________ or __________ are often used.",
          optionA: "a) Can, could",
          optionB: "b) Should, ought to",
          optionC: "c) May, might",
          correctAnswer: "b) Should, ought to",
        },
        {
          question:
            "The negative form of 'must' is __________, indicating the absence of compulsion or necessity.",
          optionA: "a) Shouldn't",
          optionB: "b) Haven't",
          optionC: "c) Mustn't",
          correctAnswer: "c) Mustn't",
        },
        {
          question:
            "\"He __________ be there on time,\" expresses compulsion or necessity using the Modal Auxiliary 'must.'",
          optionA: "a) Can",
          optionB: "b) Should",
          optionC: "c) Must",
          correctAnswer: "c) Must",
        },
        {
          question:
            "__________ is used as the Past form of 'will' in Indirect Speech.",
          optionA: "a) Can",
          optionB: "b) Would",
          optionC: "c) May",
          correctAnswer: "b) Would",
        },
        {
          question:
            "\"She used to rise early and go to bed early\" expresses a __________ habit using the phrase 'used to.'",
          optionA: "a) Present",
          optionB: "b) Past",
          optionC: "c) Future",
          correctAnswer: "b) Past",
        },
        {
          question:
            "__________ is used to make a polite request when someone is in a position of authority.",
          optionA: "a) Will you",
          optionB: "b) Would you",
          optionC: "c) Shall you",
          correctAnswer: "b) Would you",
        },
        {
          question:
            "Modal Auxiliaries like __________ and __________ are used to express wish and give and take permission, respectively.",
          optionA: "a) Should, might",
          optionB: "b) May, might",
          optionC: "c) Could, should",
          correctAnswer: "b) May, might",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Primary Auxiliaries are used to form different tenses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Modal Auxiliaries express emotion, intention, perception, or obligation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In Future Tense, the First Person uses 'will' while all other Subjects use 'shall'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Modal Auxiliaries 'should' and 'ought to' are used to give advice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The negative form of 'must' is 'haven't', indicating the absence of compulsion or necessity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'Can' expresses compulsion or necessity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "'Would' is used as the Past form of 'will' in Indirect Speech.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "'Used to' is used to express a future prediction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'May' is used to make a polite request.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "'Shouldn't' is the negative form of 'should'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
