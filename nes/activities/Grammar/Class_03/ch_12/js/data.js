export const chapter = "Chapter - 12: Is, Are, Am, Was and Were";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What tense is used in the given sentences?",
          optionA: "Past Tense",
          optionB: "Present Tense",
          optionC: "Future Tense",
          correctAnswer: "Present Tense",
        },
        {
          question: "Which of the following sentences is in the Past Tense?",
          optionA: "He is a boy.",
          optionB: "They are friends.",
          optionC: "Akshat was good at grammar.",
          correctAnswer: "Akshat was good at grammar.",
        },
        {
          question:
            "In Negative Sentences, what can be added to change an Affirmative Sentence?",
          optionA: "not",
          optionB: "is",
          optionC: "am",
          correctAnswer: "not",
        },
        {
          question: "Which of the following sentences is Interrogative?",
          optionA: "I am a student.",
          optionB: "It was very hot.",
          optionC: "Are they friends?",
          correctAnswer: "Are they friends?",
        },
        {
          question: "What word is used to make a sentence Interrogative?",
          optionA: "Not",
          optionB: "Is, Are, Am, Was, Were",
          optionC: "And",
          correctAnswer: "Is, Are, Am, Was, Were",
        },
        {
          question: "Choose the sentence that is in Negative form:",
          optionA: "You were very intelligent.",
          optionB: "Their dresses are new.",
          optionC: "I am in my room.",
          correctAnswer:
            "I am in my room. (Note: You were very intelligent is affirmative)",
        },
        {
          question:
            "Which sentence does not follow the rule of using 'is', 'are', 'am' in the Present Tense?",
          optionA: "They are friends.",
          optionB: "It was very hot.",
          optionC: "I am a student.",
          correctAnswer:
            "It was very hot. (Note: It uses 'was,' indicating past tense)",
        },
        {
          question:
            "What tense is used in the sentence 'You were very intelligent'?",
          optionA: "Past Tense",
          optionB: "Present Tense",
          optionC: "Future Tense",
          correctAnswer: "Past Tense",
        },
        {
          question:
            "What can be added to an Affirmative Sentence to make it Negative?",
          optionA: "Is",
          optionB: "Not",
          optionC: "Am",
          correctAnswer: "Not",
        },
        {
          question: "Identify the sentence that is not in the Present Tense:",
          optionA: "They are friends.",
          optionB: "I am in my room.",
          optionC: "Akshat was good at grammar.",
          correctAnswer:
            "Akshat was good at grammar. (Note: It uses 'was,' indicating past tense)",
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
          question: "He ______ a boy.",
          options: ["am", "is", "are"],
          correctAnswer: "is",
        },
        {
          question: "Her name ______ Anuradha.",
          options: ["am", "is", "are"],
          correctAnswer: "is",
        },
        {
          question: "They ______ friends.",
          options: ["am", "is", "are"],
          correctAnswer: "are",
        },
        {
          question: "Their dresses ______ new.",
          options: ["am", "is", "are"],
          correctAnswer: "are",
        },
        {
          question: "I ______ a student.",
          options: ["am", "is", "are"],
          correctAnswer: "am",
        },
        {
          question: "I ______ in my room.",
          options: ["am", "is", "are"],
          correctAnswer: "am",
        },
        {
          question: "Akshat ______ good at grammar.",
          options: ["am", "is", "are"],
          correctAnswer: "was",
        },
        {
          question: "It ______ very hot.",
          options: ["am", "is", "was"],
          correctAnswer: "was",
        },
        {
          question: "They ______ in the park.",
          options: ["am", "is", "were"],
          correctAnswer: "were",
        },
        {
          question: "You ______ very intelligent.",
          options: ["am", "is", "were"],
          correctAnswer: "were",
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
          question: "He is a boy.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Her name is Anuradha.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "They are friends.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Their dresses are new.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "I am a student.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "I am in my room.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Akshat was good at grammar.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "It was very hot.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "They were in the park.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "You were very intelligent.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
