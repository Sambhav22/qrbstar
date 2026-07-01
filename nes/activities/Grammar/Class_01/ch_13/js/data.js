export const chapter = "Chapter - 13: Use of 'Has' and 'Have'";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "Which of the following sentences demonstrates the correct usage of 'has'?",
            options: [
              "We has a new car.",
              "She have a pet cat.",
              "The book has an interesting plot.",
            ],
            answer: "The book has an interesting plot.",
          },
          {
            question:
              "In the given example, why is 'have' used instead of 'has'?",
            options: [
              "Due to the presence of a singular subject.",
              "Because of the pronoun 'you.'",
              "To show past tense.",
            ],
            answer: "Because of the pronoun 'you.'",
          },
          {
            question:
              "Which sentence follows the rule for using 'has' correctly?",
            options: [
              "They have a picnic last week.",
              "He has a collection of stamps.",
              "She have a new laptop.",
            ],
            answer: "He has a collection of stamps.",
          },
          {
            question: "When is 'has' used according to the rule provided?",
            options: [
              "With all plural nouns.",
              "Only with singular subjects.",
              "Exclusively with 'you' and 'I.'",
            ],
            answer: "Only with singular subjects.",
          },
          {
            question:
              "Identify the sentence that showcases the correct application of 'have':",
            options: [
              "You has a talent for singing.",
              "The team have won the championship.",
              "It has a beautiful garden.",
            ],
            answer: "The team have won the championship.",
          },
          {
            question:
              "Which phrase correctly employs 'has' following the rule?",
            options: [
              "We have a delicious dinner last night.",
              "She has a bicycle.",
              "They have a good time at the party.",
            ],
            answer: "She has a bicycle.",
          },
          {
            question:
              "Why is 'have' used in the sentence: 'You have an umbrella'?",
            options: [
              "Due to a plural subject.",
              "Because of the presence of 'you.'",
              "To emphasize past actions.",
            ],
            answer: "Because of the presence of 'you.'",
          },
          {
            question: "Choose the sentence that uses 'has' correctly:",
            options: [
              "The students have an exam tomorrow.",
              "He have a new job.",
              "The cat has a cozy bed.",
            ],
            answer: "The cat has a cozy bed.",
          },
          {
            question: "When is 'has' not used according to the rule provided?",
            options: [
              "With 'you' and 'I.'",
              "With all plural subjects.",
              "Only with singular nouns.",
            ],
            answer: "With 'you' and 'I.'",
          },
          {
            question:
              "Select the sentence that demonstrates the appropriate use of 'has':",
            options: [
              "We has a fantastic idea.",
              "She has a beautiful voice.",
              "They have a picnic every weekend.",
            ],
            answer: "She has a beautiful voice.",
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
            question: "The music system ______________ a radio.",
            options: ["have", "has", "having"],
            answer: "has",
          },
          {
            question: "You ______________ an umbrella.",
            options: ["has", "having", "have"],
            answer: "have",
          },
          {
            question: "Has is utilized with ______________.",
            options: ["singulars", "plurals", "both singulars and plurals"],
            answer: "singulars",
          },
          {
            question: "Have is used with ______________.",
            options: ["singulars", "plurals", "neither singulars nor plurals"],
            answer: "plurals",
          },
          {
            question: "They ______________ bats.",
            options: ["has", "having", "have"],
            answer: "have",
          },
          {
            question:
              "The rule dictates that 'has' is not used with ______________.",
            options: [
              "plural subjects",
              "singular subjects",
              "both plural and singular subjects",
            ],
            answer: "plural subjects",
          },
          {
            question: "'Have' is employed with ______________.",
            options: ["'you' and 'I'", "singulars only", "plurals only"],
            answer: "'you' and 'I'",
          },
          {
            question:
              "The phrase 'They have bats' exemplifies the usage of ______________.",
            options: [
              "'have' with singulars",
              "'has' with plurals",
              "'have' with plurals",
            ],
            answer: "'have' with plurals",
          },
          {
            question: "The correct completion: 'He ______________ a new car.'",
            options: ["have", "has", "having"],
            answer: "has",
          },
          {
            question:
              "According to the rule, 'has' isn't used with ______________.",
            options: ["'you' and 'I'", "singular nouns", "plural nouns"],
            answer: "'you' and 'I'",
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
            question: "Mount Everest is the tallest mountain in the world.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The Pacific Ocean is the largest ocean on Earth.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Sharks are mammals.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The Great Wall of China is visible from space.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Diamond is the hardest naturally occurring substance.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The Nile River is the longest river in the world.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The Earth orbits around the Moon.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Mars is the only planet in the solar system with rings.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The human body has 206 bones.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Water boils at 100 degrees Fahrenheit.",
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
