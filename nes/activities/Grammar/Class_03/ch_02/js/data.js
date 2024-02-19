export const chapter = "Chapter - 2: Subject and predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the role of 'Swati' in the sentence 'Swati went to school by bus'?",
          optionA: "Noun",
          optionB: "Pronoun",
          optionC: "Verb",
          correctAnswer: "B",
        },
        {
          question:
            "Which part of the sentence contains information about the subject?",
          optionA: "Predicate",
          optionB: "Verb",
          optionC: "Subject",
          correctAnswer: "A",
        },
        {
          question: "What can the subject of a sentence be?",
          optionA: "Noun",
          optionB: "Adjective",
          optionC: "Adverb",
          correctAnswer: "A",
        },
        {
          question: "What does the predicate of a sentence do?",
          optionA: "Describes the subject",
          optionB: "Names the subject",
          optionC: "Contains the subject",
          correctAnswer: "A",
        },
        {
          question: "Which of the following is a component of the subject?",
          optionA: "Verb",
          optionB: "Adjective",
          optionC: "Predicate",
          correctAnswer: "B",
        },
        {
          question: "In the sentence structure, what is the Subject?",
          optionA: "What the sentence is about",
          optionB: "The action of the sentence",
          optionC: "The conclusion of the sentence",
          correctAnswer: "A",
        },
        {
          question: "What is the Predicate of a sentence made up of?",
          optionA: "Nouns only",
          optionB: "Verbs only",
          optionC: "One or more words",
          correctAnswer: "C",
        },
        {
          question:
            "Which part of the sentence tells something about the subject?",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Verb",
          correctAnswer: "B",
        },
        {
          question: "What may a subject consist of?",
          optionA: "Verbs",
          optionB: "Articles, Adjectives, etc.",
          optionC: "Pronouns",
          correctAnswer: "B",
        },
        {
          question: "The Subject and Predicate together make up:",
          optionA: "A paragraph",
          optionB: "A clause",
          optionC: "A sentence",
          correctAnswer: "C",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Every sentence consists of two parts: __________ and __________.",
          options: ["Subject, Predicate", "Noun, Verb", "Adjective, Adverb"],
          correctAnswer: "Subject, Predicate",
        },
        {
          question: "The subject can be a __________ or __________.",
          options: ["Verb, Adjective", "Noun, Pronoun", "Adverb, Conjunction"],
          correctAnswer: "Noun, Pronoun",
        },
        {
          question: "The subject is the part of the sentence about __________.",
          options: [
            "Which action is performed",
            "Which something is said",
            "Which is the main idea",
          ],
          correctAnswer: "Which something is said",
        },
        {
          question: "The predicate tells something about the __________.",
          options: ["Object", "Subject", "Adjective"],
          correctAnswer: "Subject",
        },
        {
          question:
            "A subject may consist of one or more words and may include __________.",
          options: ["Verbs", "Adverbs", "Articles, Adjectives, etc."],
          correctAnswer: "Articles, Adjectives, etc.",
        },
        {
          question: "The predicate of a sentence may be made up of __________.",
          options: ["Nouns only", "Verbs only", "One or more words"],
          correctAnswer: "One or more words",
        },
        {
          question: "The subject and predicate together make up __________.",
          options: ["A phrase", "A clause", "A sentence"],
          correctAnswer: "A sentence",
        },
        {
          question:
            "In the sentence 'Swati went to school by bus', 'Swati' is the __________.",
          options: ["Verb", "Pronoun", "Subject"],
          correctAnswer: "Subject",
        },
        {
          question: "The predicate of a sentence describes __________.",
          options: ["The subject", "The object", "The adverb"],
          correctAnswer: "The subject",
        },
        {
          question:
            "The role of 'Swati' in the sentence is that of a __________.",
          options: ["Noun", "Adjective", "Pronoun"],
          correctAnswer: "Pronoun",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Every sentence consists of two parts: Subject and Predicate.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The subject of a sentence can only be a noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The predicate is the part of the sentence that tells something about the subject.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "A subject may consist of only one word.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The predicate of a sentence is always a single word.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The subject and predicate together make up a paragraph.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Adjectives and articles can be part of the subject in a sentence.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The predicate is responsible for naming the subject.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The role of 'Swati' in the sentence is that of a pronoun.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The subject of a sentence cannot consist of adverbs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
