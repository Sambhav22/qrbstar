export const chapter = "Chapter - 7: Sentence ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is a Sentence?",
          optionA: "A group of words with no specific order",
          optionB: "A group of words giving a complete thought or sense",
          optionC: "A random collection of words",
          correctAnswer: "B",
        },
        {
          question: "Which characteristic is essential for a sentence?",
          optionA: "Random word arrangement",
          optionB: "Meaningful arrangement of words",
          optionC: "Reversal of facts",
          correctAnswer: "B",
        },
        {
          question: "What is another term for an Assertive Sentence?",
          optionA: "Interrogative Sentence",
          optionB: "Declarative Sentence",
          optionC: "Imperative Sentence",
          correctAnswer: "B",
        },
        {
          question: "Which type of sentence negates something?",
          optionA: "Interrogative Sentence",
          optionB: "Exclamatory Sentence",
          optionC: "Negative Sentence",
          correctAnswer: "C",
        },
        {
          question: "What function does an Imperative Sentence perform?",
          optionA: "States or declares something",
          optionB: "Asks a question",
          optionC: "Gives an order or request",
          correctAnswer: "C",
        },
        {
          question:
            "Which type of sentence is used to enquire about something?",
          optionA: "Exclamatory Sentence",
          optionB: "Assertive Sentence",
          optionC: "Interrogative Sentence",
          correctAnswer: "C",
        },
        {
          question: "What is the purpose of Yes/No-type Questions?",
          optionA: "To express strong feelings",
          optionB: "To affirm a statement",
          optionC: "To request information",
          correctAnswer: "B",
        },
        {
          question: "Which type of questions need information for an answer?",
          optionA: "Yes/No-type Questions",
          optionB: "Wh-type Questions",
          optionC: "Negative Questions",
          correctAnswer: "B",
        },
        {
          question: "Which sentence expresses a strong or sudden feeling?",
          optionA: "Interrogative Sentence",
          optionB: "Exclamatory Sentence",
          optionC: "Assertive Sentence",
          correctAnswer: "B",
        },
        {
          question:
            "What transformation occurs when changing a sentence from Assertive to Negative?",
          optionA: "The word order changes",
          optionB: "The sense remains the same",
          optionC: "The sense undergoes a change",
          correctAnswer: "C",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "A ________ in the Mughal royal court was to meet nobles and officers.",
          options: ["Diwan-i-Khas", "Diwan-i-Aam", "Diwan-i-Rasalat"],
          correctAnswer: "Diwan-i-Khas",
        },
        {
          question:
            "The department in the Mughal administration responsible for revenue, income, and expenditure was the ___________.",
          options: ["Wazir", "Mir Bakshi", "Sadr-i-Sadur"],
          correctAnswer: "Sadr-i-Sadur",
        },
        {
          question:
            "The primary source of income for a ruler during the Mughal period was from ___________.",
          options: ["Trade", "Land revenue", "Taxes on pilgrimage"],
          correctAnswer: "Land revenue",
        },
        {
          question:
            "The system developed by Todar Mal for fixing land revenue was known as ___________.",
          options: ["Todar Bandobast", "Akbari Bandobast", "Zabt System"],
          correctAnswer: "Todar Bandobast",
        },
        {
          question:
            "The key feature of the Mughal military administration called mansabdari was the implementation of a ___________.",
          options: ["Hereditary positions", "Fixed land grants", "Rank system"],
          correctAnswer: "Rank system",
        },
        {
          question:
            "The Mughal ruler controlled an army without being dependent on any mansabdar by exercising ___________.",
          options: ["Diplomacy", "Maintaining a navy", "Direct control"],
          correctAnswer: "Direct control",
        },
        {
          question:
            "The efficiency of the mansabdari system during Aurangzeb's time was compromised due to the ___________.",
          options: [
            "Military campaigns",
            "Suppression of non-Muslims",
            "Land revenue system",
          ],
          correctAnswer: "Suppression of non-Muslims",
        },
        {
          question:
            "After conquering the Rajputs, Akbar treated them ___________, honoring them with high posts.",
          options: [
            "With humiliation",
            "With exile",
            "Honourably and with high posts",
          ],
          correctAnswer: "Honourably and with high posts",
        },
        {
          question:
            "The department responsible for revenue, income, and expenditure in the Mughal administration was the ___________.",
          options: ["Wazir", "Sadr-i-Sadur", "Mir Bakshi"],
          correctAnswer: "Sadr-i-Sadur",
        },
        {
          question:
            "The Mughal ruler controlled an army without being dependent on any mansabdar by exercising ___________.",
          options: ["Diplomacy", "Maintaining a navy", "Direct control"],
          correctAnswer: "Direct control",
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
            "The Diwan-i-Khas in the Mughal royal court was primarily for meeting nobles and officers.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Wazir was responsible for revenue, income, and expenditure in the Mughal administration.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Land revenue was not a significant source of income for Mughal rulers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The system developed by Todar Mal for fixing land revenue was called Akbari Bandobast.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The mansabdari system in the Mughal military administration implemented a hereditary positions system.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Mughal rulers exercised direct control over their army without dependence on any mansabdar.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The efficiency of the mansabdari system during Aurangzeb's time was compromised due to military campaigns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "After conquering the Rajputs, Akbar treated them with humiliation and exile.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Sadr-i-Sadur was responsible for revenue, income, and expenditure in the Mughal administration.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Diplomacy was the key factor in the Mughal ruler's control over an army without dependence on any mansabdar.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
