export const chapter = "Chapter - 17: Adverbs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary function of an Adverb in a sentence?",
          optionA: "Modifying nouns",
          optionB: "Modifying verbs, adjectives, or other adverbs",
          optionC: "Indicating possession",
          correctAnswer: "Modifying verbs, adjectives, or other adverbs",
        },
        {
          question:
            "Which of the following sentences demonstrates the use of an adverb modifying an adjective?",
          optionA: "The girl is very tall.",
          optionB: "The question is quite difficult.",
          optionC: "He speaks slowly.",
          correctAnswer: "The question is quite difficult.",
        },
        {
          question: "Which category of adverbs shows the manner of an action?",
          optionA: "Adverbs of Place",
          optionB: "Adverbs of Time",
          optionC: "Adverbs of Manner",
          correctAnswer: "Adverbs of Manner",
        },
        {
          question: "How are many adverbs of manner formed?",
          optionA: "By adding -ed to adjectives",
          optionB: "By adding -ly to adjectives",
          optionC: "By adding -ing to adjectives",
          correctAnswer: "By adding -ly to adjectives",
        },
        {
          question: "What is the function of adverbs of time?",
          optionA: "Showing the place of an action",
          optionB: "Showing the manner of an action",
          optionC: "Showing the time of an action",
          correctAnswer: "Showing the time of an action",
        },
        {
          question: "Which words are examples of interrogative adverbs?",
          optionA: "Almost, always, never",
          optionB: "Where, when, why",
          optionC: "Today, tomorrow, yesterday",
          correctAnswer: "Where, when, why",
        },
        {
          question:
            "Where should an adverb be placed if it modifies the whole sentence?",
          optionA: "At the end of the sentence",
          optionB: "At the beginning of the sentence",
          optionC: "In the middle of the sentence",
          correctAnswer: "At the beginning of the sentence",
        },
        {
          question:
            "Where should adverbs be placed when they modify intransitive verbs?",
          optionA: "After the subject",
          optionB: "After the main verb and the object",
          optionC: "Before the main verb",
          correctAnswer: "After the main verb and the object",
        },
        {
          question:
            "Which category of adverbs shows the extent or degree of an action?",
          optionA: "Adverbs of Frequency or Number",
          optionB: "Adverbs of Place",
          optionC: "Adverbs of Degree",
          correctAnswer: "Adverbs of Degree",
        },
        {
          question:
            "Which adverb modifies the meaning of the verb 'speaks' in the sentence 'He speaks slowly'?",
          optionA: "Very",
          optionB: "Slowly",
          optionC: "Quite",
          correctAnswer: "Slowly",
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
          question: "An Adverb often modifies the meaning of a __________.",
          options: ["Noun", "Verb", "Adjective"],
          correctAnswer: "Verb",
        },
        {
          question: "Adverbs of Manner show the __________ of an action.",
          options: ["Place", "Manner", "Time"],
          correctAnswer: "Manner",
        },
        {
          question:
            "Many Adverbs of Manner are formed by adding __________ to Adjectives.",
          options: ["-ed", "-ing", "-ly"],
          correctAnswer: "-ly",
        },
        {
          question: "Adverbs of Time show the __________ of an action.",
          options: ["Place", "Manner", "Time"],
          correctAnswer: "Time",
        },
        {
          question:
            "Interrogative Adverbs are used to ask questions such as __________.",
          options: [
            "What, where, when, why",
            "After, before, everywhere",
            "Always, never, nowhere",
          ],
          correctAnswer: "What, where, when, why",
        },
        {
          question:
            "Adverbs of Frequency or Number show the __________ of an action.",
          options: [
            "Frequency or number",
            "Manner of action",
            "Place of action",
          ],
          correctAnswer: "Frequency or number",
        },
        {
          question: "Adverbs of Degree show the __________ of an action.",
          options: ["Time", "Extent or degree", "Place"],
          correctAnswer: "Extent or degree",
        },
        {
          question:
            "If an Adverb modifies the whole sentence, it should be used at __________.",
          options: [
            "The end of the sentence",
            "The beginning of the sentence",
            "In the middle of the sentence",
          ],
          correctAnswer: "The beginning of the sentence",
        },
        {
          question:
            "Adverbs are placed between the Helping and the Main Verb or __________.",
          options: [
            "After the subject",
            "Before the subject",
            "Before the object",
          ],
          correctAnswer: "Before the object",
        },
        {
          question:
            "When an Adverb modifies an Intransitive Verb, it occurs __________.",
          options: [
            "After the subject",
            "Before the subject",
            "After that Verb",
          ],
          correctAnswer: "After that Verb",
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
          question: "Adverbs of Manner show the time of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interrogative Adverbs are used to make statements.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Adverbs of Frequency or Number indicate how often an action occurs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Adverbs of Degree show the extent or degree of an action.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "An Adverb modifies the meaning of a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs are always placed at the end of a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs of Place show the manner of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs of Time indicate the place of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs are only used to modify verbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs are placed between the Helping and the Main Verb.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
