export const chapter = "Chapter - 6: Pronouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is a Pronoun?",
          optionA: "A word used to describe a noun",
          optionB: "A word used in place of a noun",
          optionC: "A word used as a conjunction",
          correctAnswer: "A word used in place of a noun",
        },
        {
          question: "In which gender can a Personal Pronoun be classified?",
          optionA: "Only Masculine",
          optionB: "Only Feminine",
          optionC: "Masculine, Feminine, or Neuter",
          correctAnswer: "Masculine, Feminine, or Neuter",
        },
        {
          question:
            "Which case does a Personal Pronoun take when used as a subject?",
          optionA: "Nominative Case",
          optionB: "Objective or Accusative Case",
          optionC: "Possessive Case",
          correctAnswer: "Nominative Case",
        },
        {
          question: "How are Reflexive Pronouns formed?",
          optionA: "By adding a prefix -self to the singular",
          optionB:
            "By adding a suffix -self to the singular and -selves to the plural",
          optionC: "By changing the spelling of the pronoun",
          correctAnswer:
            "By adding a suffix -self to the singular and -selves to the plural",
        },
        {
          question: "What do Emphatic Pronouns do?",
          optionA: "Show possession",
          optionB: "Emphasize a point by being placed soon after the subject",
          optionC: "Reflect the action of the subject",
          correctAnswer:
            "Emphasize a point by being placed soon after the subject",
        },
        {
          question: "What do Indefinite Pronouns refer to?",
          optionA: "Specific persons or things",
          optionB: "Particular persons",
          optionC: "Not to particular persons",
          correctAnswer: "Not to particular persons",
        },
        {
          question: "Which Pronouns point to the objects they refer to?",
          optionA: "Interrogative Pronouns",
          optionB: "Demonstrative Pronouns",
          optionC: "Relative Pronouns",
          correctAnswer: "Demonstrative Pronouns",
        },
        {
          question: "What is the function of Interrogative Pronouns?",
          optionA: "Reflect the action of the subject",
          optionB: "Join two sentences",
          optionC: "Used to ask questions",
          correctAnswer: "Used to ask questions",
        },
        {
          question: "How do Relative Pronouns relate to a Noun?",
          optionA: "They show possession of something",
          optionB: "They reflect the action of the subject",
          optionC: "They relate to a Noun mentioned before",
          correctAnswer: "They relate to a Noun mentioned before",
        },
        {
          question:
            "When should Plural Pronouns be used in a sentence with two Nouns joined by 'and'?",
          optionA: "Always",
          optionB: "Only if both Nouns point to a single person or thing",
          optionC: "Never",
          correctAnswer: "Only if both Nouns point to a single person or thing",
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
          question: "A Pronoun is a word used in place of a ___________.",
          options: ["Verb", "Adjective", "Noun"],
          correctAnswer: "Noun",
        },
        {
          question:
            'Personal Pronouns are used in place of a person, place, animal, or thing. For example, "I, we, you, he, she, it, they" are examples of ___________.',
          options: ["Adverbs", "Prepositions", "Pronouns"],
          correctAnswer: "Pronouns",
        },
        {
          question:
            "When somebody speaks about himself, he speaks in the __________ Person; for example: I, me, mine, we, us etc.",
          options: ["First Person", "Second Person", "Third Person"],
          correctAnswer: "First Person",
        },
        {
          question:
            "A Reflexive Pronoun shows that the action of the subject reflects upon __________.",
          options: ["Others", "Itself", "Nature"],
          correctAnswer: "Itself",
        },
        {
          question:
            "When a Reflexive Pronoun is placed soon after the subject to lay emphasis on a particular point, it is called the __________ Pronoun.",
          options: ["Demonstrative", "Indefinite", "Emphatic"],
          correctAnswer: "Emphatic",
        },
        {
          question:
            'An Indefinite Pronoun does not refer to a particular person. For example, "Take __________ with you."',
          options: ["Anything", "Nobody", "Everybody"],
          correctAnswer: "Nobody",
        },
        {
          question:
            'Demonstrative Pronouns point to the objects they refer to; for example: this, that, these, those etc. "This is my house and that is __________ house."',
          options: ["His", "Her", "Their"],
          correctAnswer: "Her",
        },
        {
          question:
            'Interrogative Pronouns are the words used to ask questions; for example: what, where, which, who, whom, whose etc. "__________ is my book on the shelf?"',
          options: ["What", "Where", "Who"],
          correctAnswer: "What",
        },
        {
          question:
            'Relative Pronouns relate or refer to a Noun that has been mentioned before; for example: "I have seen the boy __________ came here this morning."',
          options: ["What", "Which", "Who"],
          correctAnswer: "Who",
        },
        {
          question:
            "When should Plural Pronouns be used in a sentence with two Nouns joined by 'and'?",
          options: [
            "Always",
            "Only if both Nouns point to a single person or thing",
            "Never",
          ],
          correctAnswer: "Only if both Nouns point to a single person or thing",
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
          question: "Pronouns are words used to describe nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Reflexive pronouns show that the action of the subject reflects upon itself.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Indefinite Pronouns always refer to specific persons.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Demonstrative Pronouns point to the objects they refer to, such as this, that, these, and those.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative Pronouns are used to make statements rather than asking questions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Relative Pronouns relate or refer to a noun that has been mentioned before.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Personal Pronouns can only be in the masculine or feminine gender.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Emphatic Pronouns are used to downplay the significance of a statement.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Web browsers are not required to connect to the internet.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Plural Pronouns should always be used when two nouns are joined by 'and'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
