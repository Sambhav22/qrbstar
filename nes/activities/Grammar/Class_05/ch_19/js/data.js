export const chapter = "Chapter - 19: Conjunction";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary purpose of conjunctions?",
          optionA: "To separate words",
          optionB: "To join words, word-groups, and sentences",
          optionC: "To emphasize sentences",
          correctAnswer: "To join words, word-groups, and sentences",
        },
        {
          question:
            "In the sentence 'Nikki is tall but Nimmi is short,' what type of conjunction is used?",
          optionA: "Or",
          optionB: "And",
          optionC: "But",
          correctAnswer: "But",
        },
        {
          question:
            "Which type of conjunctions are used in pairs and are called Correlatives?",
          optionA: "And, but, or",
          optionB: "Both, neither, either",
          optionC: "Although, yet, so",
          correctAnswer: "Both, neither, either",
        },
        {
          question:
            "Complete the sentence: 'You are not only clever ________ swift.'",
          optionA: "and",
          optionB: "but also",
          optionC: "or",
          correctAnswer: "but also",
        },
        {
          question:
            "Identify the correlative conjunctions in the sentence 'This watch was stolen neither by Ritesh nor by Rihan.'",
          optionA: "and",
          optionB: "or",
          optionC: "neither ... nor",
          correctAnswer: "neither ... nor",
        },
        {
          question:
            "Combine the sentences: 'Kanak must work hard. She will fail.'",
          optionA: "Kanak must work hard and she will fail.",
          optionB: "Kanak must work hard or she will fail.",
          optionC: "Kanak must work hard but she will fail.",
          correctAnswer: "Kanak must work hard or she will fail.",
        },
        {
          question:
            "What type of conjunction is used in the sentence 'Although Radha is poor, yet she is honest.'?",
          optionA: "And",
          optionB: "Or",
          optionC: "Although ... yet",
          correctAnswer: "Although ... yet",
        },
        {
          question:
            "Which conjunction is used to join alternatives in the sentence 'either ... or'?",
          optionA: "And",
          optionB: "Or",
          optionC: "But also",
          correctAnswer: "Or",
        },
        {
          question:
            "In the sentence 'Nikki as well as Nimmi study in the same school,' which conjunction is used?",
          optionA: "And",
          optionB: "Or",
          optionC: "As well as",
          correctAnswer: "As well as",
        },
        {
          question:
            "Combine the sentences: 'Akash bought a shirt. Akash bought a vest. Akash bought a cap.'",
          optionA: "Akash bought a shirt, a vest, or a cap.",
          optionB: "Akash bought a shirt and a vest and a cap.",
          optionC: "Akash bought a shirt, a vest, and a cap.",
          correctAnswer: "Akash bought a shirt, a vest, and a cap.",
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
          question:
            "Conjunctions are used to join __________, word-groups, and sentences.",
          options: ["Nouns", "Verbs", "Words"],
          correctAnswer: "Words",
        },
        {
          question:
            "In the sentence 'Nikki is tall but Nimmi is ________,' what is the opposite of tall?",
          options: ["Short", "Intelligent", "Foolish"],
          correctAnswer: "Short",
        },
        {
          question: "Nikki must work hard __________ she will fail.",
          options: ["Because", "And", "Or"],
          correctAnswer: "Or",
        },
        {
          question:
            "Complete the sentence: 'Nikki does not pass __________ she does not work hard.'",
          options: ["Or", "Because", "And"],
          correctAnswer: "Because",
        },
        {
          question:
            "The words 'not only ... but also' are examples of __________ conjunctions.",
          options: ["Correlative", "Coordinating", "Subordinating"],
          correctAnswer: "Correlative",
        },
        {
          question: "Both Raj and Rahul went __________.",
          options: ["Separately", "Together", "Quickly"],
          correctAnswer: "Together",
        },
        {
          question:
            "This watch was stolen neither by Ritesh __________ by Rihan.",
          options: ["And", "Nor", "Or"],
          correctAnswer: "Nor",
        },
        {
          question: "You are not only clever __________ also swift.",
          options: ["And", "But", "Or"],
          correctAnswer: "But",
        },
        {
          question: "Combine the sentences: 'Radha is poor. Radha is honest.'",
          options: [
            "Radha is poor yet honest.",
            "Although Radha is poor, yet she is honest.",
            "Radha is poor and honest.",
          ],
          correctAnswer: "Although Radha is poor, yet she is honest.",
        },
        {
          question: "Akash bought a shirt, a vest, __________ a cap.",
          options: ["But", "And", "Or"],
          correctAnswer: "And",
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
          question:
            "Conjunctions are used to separate words, word-groups, and sentences.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question: "Correlatives are conjunctions used in pairs.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The words 'either ... or' are examples of correlative conjunctions.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'Nikki is tall but Nimmi is short,' 'but' is a subordinating conjunction.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The sentence 'You are not only clever but also swift' contains correlative conjunctions.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The conjunction 'neither ... nor' is used to join alternatives.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question: "A preposition is generally placed before its subject.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'Akash bought a shirt, a vest, and a cap,' 'and' is a coordinating conjunction.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "True",
        },
        {
          question: "Correlative conjunctions are always used in triplets.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The conjunction 'because' is an example of a correlative conjunction.",
          optionTrue: "True",
          optionFalse: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
