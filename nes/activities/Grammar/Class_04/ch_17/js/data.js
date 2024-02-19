export const chapter = "Chapter -17: Conjunction";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of conjunctions in a sentence?",
          optionA: "To emphasize words",
          optionB: "To join words, word-groups, and sentences",
          optionC: "To replace words",
          correctAnswer: "To join words, word-groups, and sentences",
        },
        {
          question:
            "Identify the conjunction in the sentence: 'Sundar ran fast but Samir ran slowly.'",
          optionA: "and",
          optionB: "but",
          optionC: "or",
          correctAnswer: "but",
        },
        {
          question: "Which pair of words is an example of correlatives?",
          optionA: "either ... or",
          optionB: "after ... before",
          optionC: "and ... but",
          correctAnswer: "either ... or",
        },
        {
          question:
            "Complete the sentence using the correct correlative: 'Tejas was __________ a clerk __________ an accountant.'",
          optionA: "neither ... nor",
          optionB: "both ... and",
          optionC: "either ... or",
          correctAnswer: "either ... or",
        },
        {
          question:
            "Identify the correlatives in the sentence: 'Cherry is both beautiful and clever.'",
          optionA: "although ... yet",
          optionB: "either ... or",
          optionC: "both ... and",
          correctAnswer: "both ... and",
        },
        {
          question:
            "Choose the appropriate correlative to complete the sentence: 'Hardly had he entered the room __________ the phone rang.'",
          optionA: "than",
          optionB: "so",
          optionC: "when",
          correctAnswer: "than",
        },
        {
          question:
            "Combine the sentences using the correct correlative: 'He is clever. He is rich.'",
          optionA: "both ... and",
          optionB: "neither ... nor",
          optionC: "either ... or",
          correctAnswer: "both ... and",
        },
        {
          question:
            "Select the sentence with the correct use of 'not only ... but also.'",
          optionA: "'You are a good leader. You are a good follower.'",
          optionB: "'Mr. Raj is an engineer. Mr. Raj is a doctor.'",
          optionC: "'Although Dev was weak, yet he won the race.'",
          correctAnswer: "'You are a good leader. You are a good follower.'",
        },
        {
          question:
            "Which conjunction is used to join words in the sentence: 'He ate dosa as well as burger.'",
          optionA: "and",
          optionB: "but",
          optionC: "as well as",
          correctAnswer: "as well as",
        },
        {
          question:
            "Identify the correlative pair in the sentence: 'No sooner had she finished her homework than the power went out.'",
          optionA: "neither ... nor",
          optionB: "no sooner ... than",
          optionC: "not only ... but also",
          correctAnswer: "no sooner ... than",
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
          question: "Abhi and Aman are __________.",
          optionA: "brothers",
          optionB: "enemies",
          optionC: "friends",
          correctAnswer: "friends",
        },
        {
          question:
            "Complete the sentence: 'Sundar ran fast __________ Samir ran slowly.'",
          optionA: "when",
          optionB: "but",
          optionC: "or",
          correctAnswer: "but",
        },
        {
          question:
            "Choose the correct option to complete the sentence: 'What would you like to have—coffee __________ juice?'",
          optionA: "but",
          optionB: "and",
          optionC: "or",
          correctAnswer: "or",
        },
        {
          question: "Can you stay with me __________ my brother returns?",
          optionA: "after",
          optionB: "until",
          optionC: "before",
          correctAnswer: "until",
        },
        {
          question: "'He works hard, __________ he succeeds.'",
          optionA: "or",
          optionB: "so",
          optionC: "but",
          correctAnswer: "so",
        },
        {
          question: "Complete the sentence: 'He ate dosa __________ burger.'",
          optionA: "and",
          optionB: "but",
          optionC: "as well as",
          correctAnswer: "as well as",
        },
        {
          question: "Tejas was __________ a clerk __________ an accountant.",
          optionA: "neither ... nor",
          optionB: "either ... or",
          optionC: "both ... and",
          correctAnswer: "either ... or",
        },
        {
          question: "Cherry is __________ beautiful __________ clever.",
          optionA: "either ... or",
          optionB: "both ... and",
          optionC: "neither ... nor",
          correctAnswer: "both ... and",
        },
        {
          question:
            "'He is clever. He is rich. He is __________ clever __________ rich.'",
          optionA: "both ... and",
          optionB: "neither ... nor",
          optionC: "scarcely ... when",
          correctAnswer: "both ... and",
        },
        {
          question:
            "'I am not a thief. I am not a robber. I am __________ a thief __________ a robber.'",
          optionA: "neither ... nor",
          optionB: "both ... and",
          optionC: "either ... or",
          correctAnswer: "neither ... nor",
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
          question: "Abhi and Aman are enemies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Sundar ran slowly, and Samir ran fast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "You can have either coffee or juice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "You can stay with me after my brother returns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Working hard leads to success.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "He ate dosa but not burger.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Tejas is both a clerk and an accountant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Cherry is neither beautiful nor clever.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "He is both clever and rich.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "I am both a thief and a robber.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
