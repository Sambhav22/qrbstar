export const chapter = "Chapter - 14: Negative Sentences";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "Which sentence represents a negative statement in the given list?",
            options: [
              "Ravi has good shirts.",
              "Hanish has two cars.",
              "Ravi has no good shirts.",
            ],
            answer: "Ravi has no good shirts.",
          },
          {
            question: "What is the negative form of 'I am an honest boy'?",
            options: [
              "I am not an honest boy.",
              "I am no honest boy.",
              "I am not a honest boy.",
            ],
            answer: "I am not an honest boy.",
          },
          {
            question: "Choose the sentence in the negative form.",
            options: [
              "Shalini was washing the clothes.",
              "Shalini was not washing the clothes.",
              "Shalini washing the clothes.",
            ],
            answer: "Shalini was not washing the clothes.",
          },
          {
            question:
              "Which sentence correctly presents a negative statement about possession?",
            options: [
              "Hanish has two cars.",
              "Hanish has not two cars.",
              "Hanish has some cars.",
            ],
            answer: "Hanish has not two cars.",
          },
          {
            question: "What is the correct negative form of 'They have money'?",
            options: [
              "They have not money.",
              "They have no money.",
              "They not have money.",
            ],
            answer: "They have no money.",
          },
          {
            question: "What is the negative version of 'You are sleeping'?",
            options: [
              "You are not sleeping.",
              "You no sleeping.",
              "You not sleeping.",
            ],
            answer: "You are not sleeping.",
          },
          {
            question: "Identify the negative statement.",
            options: [
              "Ravi has good shirts.",
              "I am an honest boy.",
              "He is not an American.",
            ],
            answer: "He is not an American.",
          },
          {
            question:
              "Which sentence showcases the correct negative form of 'He is an American'?",
            options: [
              "He is not an American.",
              "He is no American.",
              "He not an American.",
            ],
            answer: "He is not an American.",
          },
          {
            question:
              "Which of the following sentences is in the negative form?",
            options: [
              "She is a dancer.",
              "He is an American.",
              "She is not a dancer.",
            ],
            answer: "She is not a dancer.",
          },
          {
            question:
              "Which sentence is a negative statement regarding possession?",
            options: [
              "They have money.",
              "They have no money.",
              "They have some money.",
            ],
            answer: "They have no money.",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "She __________ a dancer.",
            options: ["am", "is", "are"],
            answer: "is",
          },
          {
            question: "They have __________ money.",
            options: ["some", "any", "no"],
            answer: "no",
          },
          {
            question: "Ravi has __________ good shirts.",
            options: ["any", "not", "no"],
            answer: "no",
          },
          {
            question: "Hanish has __________ two cars.",
            options: ["not", "some", "no"],
            answer: "no",
          },
          {
            question: "Shalini was not washing __________ clothes.",
            options: ["a", "the", "any"],
            answer: "the",
          },
          {
            question: "He is not __________ American.",
            options: ["an", "any", "some"],
            answer: "an",
          },
          {
            question: "I am not __________ honest boy.",
            options: ["an", "any", "some"],
            answer: "an",
          },
          {
            question: "You are not __________.",
            options: ["sleep", "sleeping", "sleeps"],
            answer: "sleeping",
          },
          {
            question: "She has __________ a dancer.",
            options: ["am", "is", "are"],
            answer: "is",
          },
          {
            question: "We use 'not' or 'no' in __________ sentences.",
            options: ["negative", "positive", "neutral"],
            answer: "negative",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "She is a dancer.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "He is not an American.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "They have no money.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Ravi has no good shirts.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Hanish has not two cars.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Shalini was not washing the clothes.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "You are not sleeping.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "I am not an honest boy.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "He has two cars.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "They have money.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
