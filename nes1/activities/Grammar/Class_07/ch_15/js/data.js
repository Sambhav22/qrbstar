export const chapter = "Chapter - 15: Question Tags";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "In which type of sentence is a Question Tag formed with an Auxiliary Verb?",
          optionA: "a) Interrogative",
          optionB: "b) Declarative",
          optionC: "c) Imperative",
          correctAnswer: "a) Interrogative",
        },
        {
          question:
            "When there is no Auxiliary Verb in a sentence, what is used to form the Question Tag?",
          optionA: "a) Is",
          optionB: "b) Do",
          optionC: "c) Have",
          correctAnswer: "b) Do",
        },
        {
          question:
            "Which of the following is a correct example of a negative Question Tag added to a positive statement?",
          optionA: "a) You have a cat, do you?",
          optionB: "b) You don't like coffee, do you?",
          optionC: "c) You like swimming, don't you?",
          correctAnswer: "b) You don't like coffee, do you?",
        },
        {
          question:
            "What is used as a Question Tag with an Imperative Sentence?",
          optionA: "a) Can you",
          optionB: "b) Will you",
          optionC: "c) Should you",
          correctAnswer: "b) Will you",
        },
        {
          question:
            "Which is the correct positive Question Tag for the sentence 'I am going to the market'?",
          optionA: "a) Am I?",
          optionB: "b) Aren't I?",
          optionC: "c) Is I?",
          correctAnswer: "a) Am I?",
        },
        {
          question:
            "When forming a Question Tag for a sentence with no Auxiliary Verb, what is the correct example with the use of 'do'?",
          optionA: "a) They play football, don't they?",
          optionB: "b) She is reading a book, does she?",
          optionC: "c) I have finished my homework, did I?",
          correctAnswer: "a) They play football, don't they?",
        },
        {
          question:
            "Which of the following sentences has the correct negative Question Tag for 'I am' statement?",
          optionA: "a) I am coming to the party, am I?",
          optionB: "b) I am leaving early, aren't I?",
          optionC: "c) I am not tired, don't I?",
          correctAnswer: "b) I am leaving early, aren't I?",
        },
        {
          question:
            "What is the correct Question Tag for the sentence 'Let's go to the beach'?",
          optionA: "a) Shall we?",
          optionB: "b) Can we?",
          optionC: "c) Do we?",
          correctAnswer: "a) Shall we?",
        },
        {
          question:
            "Which form of the verb 'to be' is used in the negative Question Tag for 'I'?",
          optionA: "a) Amn't I",
          optionB: "b) Aren't I",
          optionC: "c) Am I",
          correctAnswer: "b) Aren't I",
        },
        {
          question:
            "What is the correct Question Tag for the sentence 'You didn't finish your homework'?",
          optionA: "a) Did you?",
          optionB: "b) Didn't you?",
          optionC: "c) Do you?",
          correctAnswer: "a) Did you?",
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
            "If there is an Auxiliary Verb in the sentence, a Question Tag is formed with it; for example: You have a red pen, __________?",
          options: ["A. haven't you?", "B. isn't it?", "C. won't you?"],
          correctAnswer: "A. haven't you?",
        },
        {
          question:
            "If there is no Auxiliary Verb in the sentence, the adequate form of do is used; for example: They drag the sack along the ground, __________?",
          options: ["A. doesn't it?", "B. doesn't they?", "C. don't they?"],
          correctAnswer: "C. don't they?",
        },
        {
          question:
            "A negative tag is added to a positive statement and a positive tag is added to a negative one; for example: You mock at all old people, __________?",
          options: ["A. do you?", "B. don't you?", "C. can't you?"],
          correctAnswer: "B. don't you?",
        },
        {
          question:
            "Will you is used as a Question Tag with an Imperative Sentence; for example: Call him here, __________?",
          options: ["A. can you?", "B. don't you?", "C. will you?"],
          correctAnswer: "C. will you?",
        },
        {
          question:
            "The negative Question Tag for I is __________ (and not amn't I).",
          options: ["A. aren't I", "B. amn't I", "C. isn't I"],
          correctAnswer: "A. aren't I",
        },
        {
          question:
            "Which form of do is used when there is no Auxiliary Verb in the sentence?",
          options: ["A. is", "B. does", "C. did"],
          correctAnswer: "B. does",
        },
        {
          question: "The positive Question Tag for I is __________.",
          options: ["A. aren't I", "B. am I", "C. is I"],
          correctAnswer: "B. am I",
        },
        {
          question:
            "What is used as a Question Tag with an Imperative Sentence?",
          options: ["A. will you", "B. should you", "C. can you"],
          correctAnswer: "A. will you",
        },
        {
          question:
            "A negative tag is added to a positive statement and a positive tag is added to a negative one; for example: I have not seen this film yet, __________?",
          options: ["A. have I?", "B. hasn't I?", "C. am I?"],
          correctAnswer: "A. have I?",
        },
        {
          question:
            "In which tense can you describe what happens in a film or television show, or what is described in a book?",
          options: [
            "A. Simple Past Tense",
            "B. Simple Present Tense",
            "C. Present Continuous Tense",
          ],
          correctAnswer: "B. Simple Present Tense",
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
            "The negative Question Tag for I is aren't I (and not amn't I).",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question:
            "A negative tag is added to a positive statement and a positive tag is added to a negative one.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question:
            "If there is an Auxiliary Verb in the sentence, a Question Tag is formed with it.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question:
            "Will you is used as a Question Tag with an Imperative Sentence.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question: "The positive Question Tag for I is am I.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question:
            "When forming a Question Tag for a sentence with no Auxiliary Verb, the adequate form of do is used.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question:
            "In which tense can you describe what happens in a film or television show, or what is described in a book?",
          options: ["A. True", "B. False"],
          correctAnswer: "B. False",
        },
        {
          question: "A hen lays eggs in the morning, doesn't it?",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True",
        },
        {
          question: "The negative Question Tag for I is amn't I.",
          options: ["A. True", "B. False"],
          correctAnswer: "B. False",
        },
        {
          question:
            "The correct positive Question Tag for the sentence 'I am going to the market' is Aren't I.",
          options: ["A. True", "B. False"],
          correctAnswer: "B. False",
        },
      ],
  };

export var activityData;
