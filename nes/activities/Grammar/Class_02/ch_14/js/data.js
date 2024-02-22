export const chapter = "Chapter - 14: Negative Sentences ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What defines a Negative Sentence?",
          optionA: "Presence of 'not' or 'no'",
          optionB: "Absence of verbs",
          optionC: "Use of question words",
          correctAnswer: "Presence of 'not' or 'no'",
        },
        {
          question: "Identify the Affirmative Sentence:",
          optionA: "There is no water in the jug.",
          optionB: "We are not in the class.",
          optionC: "I am an actor.",
          correctAnswer: "I am an actor.",
        },
        {
          question: "Which sentence is Negative?",
          optionA: "He is a businessman.",
          optionB: "They were in the playground.",
          optionC: "We were not boating in the river.",
          correctAnswer: "We were not boating in the river.",
        },
        {
          question: "What is the key element in Negative Sentences?",
          optionA: "Verbs",
          optionB: "Adjectives",
          optionC: '"Not" or "no"',
          correctAnswer: '"Not" or "no"',
        },
        {
          question: "Choose the Negative Sentence:",
          optionA: "I have three cats.",
          optionB: "He had some rice.",
          optionC: "I have not three cats.",
          correctAnswer: "I have not three cats.",
        },
        {
          question: "What is the opposite of 'There is water in the jug'?",
          optionA: "There is no water in the jug.",
          optionB: "I am an actor.",
          optionC: "We were boating in the river.",
          correctAnswer: "There is no water in the jug.",
        },
        {
          question: "Which sentence is Affirmative?",
          optionA: "It was not 11 o'clock.",
          optionB: "He is not a businessman.",
          optionC: "I have three cats.",
          correctAnswer: "I have three cats.",
        },
        {
          question:
            'What makes a sentence Negative in "We are not in the class"?',
          optionA: "Absence of verbs",
          optionB: "Presence of 'not'",
          optionC: "Use of question words",
          correctAnswer: "Presence of 'not'",
        },
        {
          question: "Which sentence is Negative?",
          optionA: "He has two story books.",
          optionB: "He had no rice.",
          optionC: "He is a businessman.",
          correctAnswer: "He had no rice.",
        },
        {
          question: "Identify the Negative Sentence:",
          optionA: "He has two story books.",
          optionB: "They were in the playground.",
          optionC: "He is not a businessman.",
          correctAnswer: "He is not a businessman.",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "There is ______ water in the jug.",
          options: ["some", "no", "much"],
          correctAnswer: "no",
        },
        {
          question: "It was ______ 11 o'clock.",
          options: ["not", "now", "still"],
          correctAnswer: "not",
        },
        {
          question: "We are ______ in the class.",
          options: ["not", "always", "usually"],
          correctAnswer: "not",
        },
        {
          question: "I am ______ an actor.",
          options: ["not", "still", "always"],
          correctAnswer: "not",
        },
        {
          question:
            "They were in the ______. They were ______ in the playground.",
          options: ["classroom / not", "playground / not", "park / also"],
          correctAnswer: "playground / not",
        },
        {
          question: "He is ______ a businessman.",
          options: ["always", "not", "sometimes"],
          correctAnswer: "not",
        },
        {
          question: "We were boating ______ the river.",
          options: ["near", "in", "under"],
          correctAnswer: "in",
        },
        {
          question: "I have ______ three cats.",
          options: ["always", "usually", "not"],
          correctAnswer: "not",
        },
        {
          question: "He had ______ rice.",
          options: ["some", "no", "much"],
          correctAnswer: "no",
        },
        {
          question: "He has ______ two story books.",
          options: ["always", "not", "usually"],
          correctAnswer: "not",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "There is water in the jug.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "It was 11 o'clock.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "We are in the class.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "I am an actor.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "There is no water in the jug.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "It was not 11 o'clock.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We are not in the class.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "I am not an actor.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "They were in the playground.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "They were not in the playground.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
