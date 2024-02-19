export const chapter = "Chapter - 11: Use of 'Is' 'Are' and 'Am'";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which sentence correctly uses 'is'?",
            options: [
              "They is playing in the garden.",
              "She is playing in the garden.",
              "We is playing in the garden.",
            ],
            answer: "She is playing in the garden.",
          },
          {
            question: "When is 'are' appropriately used?",
            options: [
              "He are cooking dinner.",
              "They are cooking dinner.",
              "I are cooking dinner.",
            ],
            answer: "They are cooking dinner.",
          },
          {
            question: "Which sentence uses 'am' correctly?",
            options: [
              "You am my best friend.",
              "I am your best friend.",
              "We am going to the party.",
            ],
            answer: "I am your best friend.",
          },
          {
            question:
              "Which form of 'be' would suit the sentence 'The cat _____ sleeping on the bed'?",
            options: ["is", "am", "are"],
            answer: "is",
          },
          {
            question: "Which pronoun requires the use of 'are' in a sentence?",
            options: ["I", "He", "They"],
            answer: "They",
          },
          {
            question:
              "In the sentence 'The flowers _____ beautiful,' which form of 'be' fits?",
            options: ["is", "am", "are"],
            answer: "are",
          },
          {
            question: "When do we use 'am'?",
            options: [
              "When referring to a singular person or thing",
              "When referring to a plural person or thing",
              "When referring to oneself (I)",
            ],
            answer: "When referring to oneself (I)",
          },
          {
            question: "Which sentence demonstrates the correct usage of 'are'?",
            options: [
              "You are my closest friend.",
              "She am my closest friend.",
              "He is my closest friend.",
            ],
            answer: "You are my closest friend.",
          },
          {
            question:
              "Choose the appropriate form of 'be' for the sentence 'They _____ running in the park.'",
            options: ["is", "am", "are"],
            answer: "are",
          },
          {
            question: "Which sentence shows the proper use of 'is'?",
            options: [
              "They is waiting for the bus.",
              "She is waiting for the bus.",
              "We is waiting for the bus.",
            ],
            answer: "She is waiting for the bus.",
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
            question:
              "__________ is used with Singular persons or things but not with I and you.",
            options: ["Is", "Are", "Am"],
            answer: "Is",
          },
          {
            question:
              "__________ is used with Plural persons, things, and you.",
            options: ["Is", "Are", "Am"],
            answer: "Are",
          },
          {
            question: "__________ is used with only I.",
            options: ["Is", "Are", "Am"],
            answer: "Am",
          },
          {
            question: "Example: Neeta ______ a dancer.",
            options: ["Is", "Are", "Am"],
            answer: "Is",
          },
          {
            question: "Example: Reeta and Reena ______ friends.",
            options: ["Is", "Are", "Am"],
            answer: "Are",
          },
          {
            question: "Example: I ______ Ram.",
            options: ["Is", "Are", "Am"],
            answer: "Am",
          },
          {
            question:
              "Choose the appropriate form of 'be' for the sentence 'They ______ playing in the park.'",
            options: ["Is", "Are", "Am"],
            answer: "Are",
          },
          {
            question:
              "Select the correct form of 'be' for the sentence 'She ______ a doctor.'",
            options: ["Is", "Are", "Am"],
            answer: "Is",
          },
          {
            question:
              "Which form of 'be' fits in the sentence 'We ______ going to the party.'?",
            options: ["Is", "Are", "Am"],
            answer: "Are",
          },
          {
            question: "The cat ______ sleeping on the bed.",
            options: ["Is", "Are", "Am"],
            answer: "Is",
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
            question:
              "I am used with singular persons or things but not with I and you.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Are is used with plural persons, things, and you.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Am is used only with plural subjects.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Example: Neeta is a dancer.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Reeta and Reena are siblings.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "I am Ram.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "They is playing in the garden.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "She is a teacher.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "We are having lunch together.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The cat are sleeping on the bed.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
