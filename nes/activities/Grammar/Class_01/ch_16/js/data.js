export const chapter = "Chapter - 16: Conjunctions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the primary function of a conjunction?",
            options: [
              "To separate words",
              "To join words, word groups, or sentences",
              "To emphasize sentences",
            ],
            answer: "To join words, word groups, or sentences",
          },
          {
            question:
              "In the sentence 'Shubhi is a singer and Rubi is a dancer,' which conjunction is used to join the two statements?",
            options: ["or", "but", "and"],
            answer: "and",
          },
          {
            question:
              "Which of the following pairs of words is connected by the conjunction 'but' in the given examples?",
            options: ["small and big", "singer and dancer", "sour and sweet"],
            answer: "small and big",
          },
          {
            question:
              "'The cup has a handle but the plate does not.' What conjunction is used in this sentence?",
            options: ["and", "but", "or"],
            answer: "but",
          },
          {
            question:
              "Which word connects the phrases 'The guava is sour but the apple is sweet'?",
            options: ["is", "and", "but"],
            answer: "but",
          },
          {
            question:
              "In the sentence 'The ant and the elephant,' what role does 'and' play?",
            options: [
              "Joining two animals",
              "Indicating contrast",
              "Separating two words",
            ],
            answer: "Joining two animals",
          },
          {
            question: "What is the purpose of using conjunctions in sentences?",
            options: [
              "To make sentences longer",
              "To create compound sentences",
              "To remove clarity from sentences",
            ],
            answer: "To create compound sentences",
          },
          {
            question:
              "Which word in the sentence 'The cup and the plate' is a conjunction?",
            options: ["cup", "the", "and"],
            answer: "and",
          },
          {
            question: "What do 'and' and 'but' primarily do in sentences?",
            options: [
              "Indicate time sequences",
              "Join words or sentences",
              "Provide explanations",
            ],
            answer: "Join words or sentences",
          },
          {
            question:
              "Which word is used to show a contrast between two statements in the given examples?",
            options: ["is", "and", "but"],
            answer: "but",
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
            question: "Conjunctions are words that join _______.",
            options: [
              "phrases",
              "words, word groups, or sentences",
              "verbs and nouns",
            ],
            answer: "words, word groups, or sentences",
          },
          {
            question: '"Shubhi is a singer and Rubi is a _______."',
            options: ["chef", "dancer", "painter"],
            answer: "dancer",
          },
          {
            question: '"The ant is small but the elephant is _______."',
            options: ["tiny", "big", "heavy"],
            answer: "big",
          },
          {
            question: '"The cup has a handle but the plate _______."',
            options: ["is big", "has designs", "does not"],
            answer: "does not",
          },
          {
            question: '"The guava is sour but the apple is _______."',
            options: ["bitter", "sour", "sweet"],
            answer: "sweet",
          },
          {
            question:
              "Conjunctions such as 'and' and 'but' are used to join _______.",
            options: [
              "unrelated words",
              "words with similar meanings",
              "words and sentences",
            ],
            answer: "words and sentences",
          },
          {
            question: "Conjunctions join word groups or sentences to _______.",
            options: [
              "create confusion",
              "provide additional information",
              "express relationships",
            ],
            answer: "express relationships",
          },
          {
            question: '"The ant and the _______."',
            options: ["mouse", "elephant", "lion"],
            answer: "elephant",
          },
          {
            question: '"The cup and the _______."',
            options: ["spoon", "plate", "bowl"],
            answer: "plate",
          },
          {
            question: '"The guava and the _______."',
            options: ["orange", "apple", "banana"],
            answer: "apple",
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
              "Conjunctions only join words, not sentences or word groups.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The sentence 'Shubhi is a singer and Rubi is a dancer' does not contain any conjunctions.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Conjunctions like 'but' are used to show similarities between words.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "'The cup has a handle but the plate does not' uses 'but' as a conjunction.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Conjunctions 'and' and 'but' are used to connect sentences.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "In the sentence 'The guava is sour but the apple is sweet,' 'but' is a preposition.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "'The ant and the elephant' does not use any conjunction.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Conjunctions do not play any role in joining word groups or phrases.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The sentence 'The cup and the plate' demonstrates the use of a conjunction.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "'The guava and the apple' uses 'and' as a conjunction to join two words.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
