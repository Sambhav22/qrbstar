export const chapter = "Chapter - 20: Interjection";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the primary function of the words used in the given situations?",
          optionA: "Nouns",
          optionB: "Verbs",
          optionC: "Interjections",
          correctAnswer: "Interjections",
        },
        {
          question: "In the context provided, what do interjections denote?",
          optionA: "Continuous action",
          optionB: "Sudden feeling, surprise, or pain",
          optionC: "Logical reasoning",
          correctAnswer: "Sudden feeling, surprise, or pain",
        },
        {
          question:
            "How would you define an interjection based on the given information?",
          optionA: "A word expressing a place",
          optionB: "A word indicating time",
          optionC: "A word denoting sudden emotion or feeling",
          correctAnswer: "A word denoting sudden emotion or feeling",
        },
        {
          question:
            "Which of the following is NOT a function of interjections?",
          optionA: "Expressing surprise",
          optionB: "Denoting pain",
          optionC: "Describing nouns",
          correctAnswer: "Describing nouns",
        },
        {
          question:
            "What is the common characteristic of words categorized as interjections?",
          optionA: "Long syllables",
          optionB: "Denoting colors",
          optionC: "Denoting sudden feelings",
          correctAnswer: "Denoting sudden feelings",
        },
        {
          question: "In the given situations, what role do interjections play?",
          optionA: "Narration",
          optionB: "Expression of emotion",
          optionC: "Abstract representation",
          correctAnswer: "Expression of emotion",
        },
        {
          question: "Which part of speech do interjections belong to?",
          optionA: "Adverbs",
          optionB: "Prepositions",
          optionC: "Interjections",
          correctAnswer: "Interjections",
        },
        {
          question: "What do interjections denote besides surprise or pain?",
          optionA: "Certainty",
          optionB: "Confusion",
          optionC: "Sudden feelings",
          correctAnswer: "Sudden feelings",
        },
        {
          question:
            "What is the primary purpose of using interjections in communication?",
          optionA: "Clarification",
          optionB: "Conveying emotions or feelings",
          optionC: "Establishing facts",
          correctAnswer: "Conveying emotions or feelings",
        },
        {
          question:
            "How would you describe the nature of interjections based on the provided information?",
          optionA: "Planned and deliberate",
          optionB: "Spontaneous and unplanned",
          optionC: "Logical and systematic",
          correctAnswer: "Spontaneous and unplanned",
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
            "The words you have used in the above given situations are ___________.",
          options: ["Nouns", "Verbs", "Interjections"],
          correctAnswer: "Interjections",
        },
        {
          question:
            "An interjection is a word that denotes some sudden ___________.",
          options: ["Place", "Feeling", "Action"],
          correctAnswer: "Feeling",
        },
        {
          question:
            "Interjections are words used to express ___________ or pain.",
          options: ["Continuous action", "Surprise", "Logical reasoning"],
          correctAnswer: "Surprise",
        },
        {
          question:
            "An interjection is characterized by its ability to convey ___________ emotion or feeling.",
          options: ["Planned", "Sudden", "Abstract"],
          correctAnswer: "Sudden",
        },
        {
          question:
            "The primary function of interjections is to denote sudden ___________.",
          options: ["Certainty", "Confusion", "Feelings"],
          correctAnswer: "Feelings",
        },
        {
          question:
            "In the given situations, interjections play a role in the expression of ___________.",
          options: ["Narration", "Emotion", "Abstract representation"],
          correctAnswer: "Emotion",
        },
        {
          question:
            "Interjections belong to the part of speech known as ___________.",
          options: ["Adverbs", "Prepositions", "Interjections"],
          correctAnswer: "Interjections",
        },
        {
          question:
            "Besides surprise or pain, interjections can denote sudden ___________.",
          options: ["Certainty", "Confusion", "Feelings"],
          correctAnswer: "Feelings",
        },
        {
          question:
            "The primary purpose of using interjections in communication is to convey ___________.",
          options: ["Clarification", "Emotions or feelings", "Facts"],
          correctAnswer: "Emotions or feelings",
        },
        {
          question:
            "Interjections are characterized by their ___________ and unplanned nature.",
          options: ["Planned", "Spontaneous", "Logical"],
          correctAnswer: "Spontaneous",
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
          question: "Interjections are words that denote continuous action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interjections primarily express planned and deliberate emotions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The primary function of interjections is to describe nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interjections belong to the part of speech known as adverbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interjections can only denote certainty.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interjections play a role in abstract representation in communication.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "An interjection is characterized by its ability to convey sudden and unplanned emotions.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Interjections can denote feelings other than surprise or pain.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The primary purpose of using interjections is to establish facts.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interjections are characterized by their logical and systematic nature.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
