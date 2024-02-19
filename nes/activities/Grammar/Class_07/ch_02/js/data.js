export const chapter = "Chapter - 2: Pronoun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What type of pronouns are used to refer to the person spoken about?",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "c) Third Person",
        },
        {
          question:
            "Which type of pronoun is used when the action done by a pronoun reflects upon itself?",
          optionA: "Personal Pronouns",
          optionB: "Reflexive Pronouns",
          optionC: "Demonstrative Pronouns",
          correctAnswer: "b) Reflexive Pronouns",
        },
        {
          question: "What is the purpose of Emphatic Pronouns?",
          optionA: "To ask questions",
          optionB: "To reflect upon itself",
          optionC: "To lay emphasis upon the subject itself",
          correctAnswer: "c) To lay emphasis upon the subject itself",
        },
        {
          question:
            "Which pronouns point out the nouns and are known as Demonstrative Pronouns?",
          optionA: "Personal Pronouns",
          optionB: "Demonstrative Pronouns",
          optionC: "Interrogative Pronouns",
          correctAnswer: "b) Demonstrative Pronouns",
        },
        {
          question: "What do Interrogative Pronouns do?",
          optionA: "Reflect upon itself",
          optionB: "Ask questions",
          optionC: "Relate to a noun mentioned before",
          correctAnswer: "b) Ask questions",
        },
        {
          question: "What is the function of Relative Pronouns?",
          optionA: "To lay emphasis",
          optionB: "To relate to a noun mentioned before",
          optionC: "To express a common relationship",
          correctAnswer: "b) To relate to a noun mentioned before",
        },
        {
          question:
            "Which pronouns refer to a noun in a general or indefinite way?",
          optionA: "Emphatic Pronouns",
          optionB: "Demonstrative Pronouns",
          optionC: "Indefinite Pronouns",
          correctAnswer: "c) Indefinite Pronouns",
        },
        {
          question: "What is the purpose of Reciprocal Pronouns?",
          optionA: "To express a common relationship",
          optionB: "To ask questions",
          optionC: "To lay emphasis upon the subject itself",
          correctAnswer: "a) To express a common relationship",
        },
        {
          question: "In which capacity can pronouns be used similar to Nouns?",
          optionA: "As subjects, objects, and possessives",
          optionB: "Only as subjects",
          optionC: "Only as possessives",
          correctAnswer: "a) As subjects, objects, and possessives",
        },
        {
          question:
            "In the sentence 'Return him all his books,' what is the function of the pronoun 'him'?",
          optionA: "Subject",
          optionB: "Object",
          optionC: "Possessive",
          correctAnswer: "b) Object",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Personal Pronouns stand for Nouns in __________ persons.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Three",
        },
        {
          question: "Reflexive Pronouns reflect upon __________.",
          options: ["Others", "Themselves", "Subjects"],
          correctAnswer: "Themselves",
        },
        {
          question:
            "An Emphatic Pronoun is used to lay emphasis upon the __________ itself.",
          options: ["Object", "Speaker", "Subject"],
          correctAnswer: "Subject",
        },
        {
          question: "Demonstrative Pronouns point out the __________.",
          options: ["Verbs", "Adjectives", "Nouns"],
          correctAnswer: "Nouns",
        },
        {
          question: "Interrogative Pronouns are used to ask __________.",
          options: ["Commands", "Questions", "Statements"],
          correctAnswer: "Questions",
        },
        {
          question:
            "A Relative Pronoun is used to relate to a Noun that has been mentioned __________.",
          options: ["Before", "After", "During"],
          correctAnswer: "Before",
        },
        {
          question:
            "An Indefinite Pronoun refers to a Noun in a __________ way.",
          options: ["Specific", "General", "Precise"],
          correctAnswer: "General",
        },
        {
          question:
            "Reciprocal Pronouns express a common relationship between __________.",
          options: ["Objects", "Subjects", "Verbs"],
          correctAnswer: "Subjects",
        },
        {
          question:
            "Like Nouns, Pronouns can be used in the capacities of subjects, objects, and __________.",
          options: ["Verbs", "Adverbs", "Possessives"],
          correctAnswer: "Possessives",
        },
        {
          question:
            "Integrated Circuits marked the transition from the second to __________ computers.",
          options: [
            "First-generation",
            "Third-generation",
            "Fourth-generation",
          ],
          correctAnswer: "Third-generation",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Personal Pronouns stand for Nouns in three persons.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Reflexive Pronouns reflect upon others.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Emphatic Pronouns are used to lay emphasis upon the Object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Demonstrative Pronouns point out Verbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interrogative Pronouns are used to make Statements.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Relative Pronouns relate to a Noun mentioned after them.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Indefinite Pronouns always refer to specific Nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Reciprocal Pronouns express a common relationship between Subjects.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Pronouns can only be used as subjects and objects, not possessives.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Integrated Circuits marked the transition from the second to Fourth-generation computers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
