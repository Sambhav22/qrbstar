export const chapter = "Chapter - 15: Interrogative Sentences";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What punctuation mark ends an interrogative sentence?",
            options: ["Period", "Exclamation mark", "Question mark"],
            answer: "Question mark",
          },
          {
            question: "Which type of sentences ask something?",
            options: ["Declarative", "Imperative", "Interrogative"],
            answer: "Interrogative",
          },
          {
            question:
              "Which sentence type is represented by 'Salman is a tall boy'?",
            options: ["Exclamatory", "Affirmative", "Interrogative"],
            answer: "Affirmative",
          },
          {
            question: "How does an interrogative sentence usually end?",
            options: [
              "With an exclamation mark",
              "With a comma",
              "With a question mark",
            ],
            answer: "With a question mark",
          },
          {
            question: "Which sentence type is 'Has she a baby'?",
            options: ["Declarative", "Exclamatory", "Interrogative"],
            answer: "Interrogative",
          },
          {
            question: "Which sentence represents an affirmative statement?",
            options: [
              "Were they elephants?",
              "She has a baby.",
              "Have you a pen?",
            ],
            answer: "She has a baby.",
          },
          {
            question: "'You have a pen' belongs to which sentence type?",
            options: ["Affirmative", "Exclamatory", "Imperative"],
            answer: "Affirmative",
          },
          {
            question: "What ends the sentence 'Is Salman a tall boy'?",
            options: ["Period", "Exclamation mark", "Question mark"],
            answer: "Question mark",
          },
          {
            question:
              "'Were they elephants?' is an example of which type of sentence?",
            options: ["Interrogative", "Imperative", "Declarative"],
            answer: "Interrogative",
          },
          {
            question: "Which sentence is an interrogative sentence?",
            options: [
              "They were elephants.",
              "You have a pen.",
              "Have you a pen?",
            ],
            answer: "Have you a pen?",
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
              "Interrogative Sentences ask something. They are called ___________.",
            options: ["Declarations", "Questions", "Statements"],
            answer: "Questions",
          },
          {
            question: "An Interrogative Sentence ends with a ___________.",
            options: ["Full stop", "Comma", "Question Mark"],
            answer: "Question Mark",
          },
          {
            question:
              "Affirmative Sentences express a positive statement or ___________.",
            options: ["Demand", "Fact", "Opinion"],
            answer: "Fact",
          },
          {
            question:
              "'Salman is a tall boy.' represents an example of an ___________ sentence.",
            options: ["Interrogative", "Affirmative", "Imperative"],
            answer: "Affirmative",
          },
          {
            question:
              "'Have you a pen?' is an example of an ___________ sentence.",
            options: ["Exclamatory", "Interrogative", "Imperative"],
            answer: "Interrogative",
          },
          {
            question: "Affirmative sentences generally express a ___________.",
            options: ["Negative action", "Positive action", "Neutral action"],
            answer: "Positive action",
          },
          {
            question: "Interrogative sentences often seek ___________.",
            options: ["Information", "Commands", "Opinions"],
            answer: "Information",
          },
          {
            question:
              "'She has a baby.' falls under the category of ___________ sentence.",
            options: ["Exclamatory", "Interrogative", "Affirmative"],
            answer: "Affirmative",
          },
          {
            question: "An interrogative sentence is used to ___________.",
            options: [
              "Assert something",
              "Express disbelief",
              "Ask a question",
            ],
            answer: "Ask a question",
          },
          {
            question:
              "'Were they elephants?' is an example of an ___________ sentence.",
            options: ["Exclamatory", "Interrogative", "Affirmative"],
            answer: "Interrogative",
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
            question: "The sky is green.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Birds can fly.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Water boils at 100 degrees Celsius.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Plants need oxygen to survive.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The moon is larger than the Earth.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Fish can breathe underwater.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Cats are reptiles.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The Earth orbits the Sun.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Diamonds are made of glass.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Sound cannot travel through air.",
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
