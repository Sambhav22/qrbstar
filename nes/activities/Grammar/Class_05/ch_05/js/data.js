export const chapter = "Chapter - 5: Nouns: Gender";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: 'What does the term "Gender" refer to in the given text?',
          optionA: "The age of a noun",
          optionB: "The size of a noun",
          optionC: "Whether a noun is male, female, both, or lifeless",
          correctAnswer: "Whether a noun is male, female, both, or lifeless",
        },
        {
          question: "Which of the following is an example of Masculine Gender?",
          optionA: "Sister",
          optionB: "Heroine",
          optionC: "Brother",
          correctAnswer: "Brother",
        },
        {
          question:
            "In which Gender category would you place a living noun that can be either male or female?",
          optionA: "Masculine Gender",
          optionB: "Feminine Gender",
          optionC: "Common Gender",
          correctAnswer: "Common Gender",
        },
        {
          question:
            "What is the Gender of a lifeless noun, according to the given text?",
          optionA: "Masculine Gender",
          optionB: "Feminine Gender",
          optionC: "Neuter Gender",
          correctAnswer: "Neuter Gender",
        },
        {
          question:
            "How can a Masculine Noun be changed into Feminine according to the rules?",
          optionA: 'By adding "ess"',
          optionB: "By changing the last vowel",
          optionC: "By using the same word",
          correctAnswer: 'By adding "ess"',
        },
        {
          question:
            'Which rule suggests dropping the last vowel in a Masculine Noun and adding "ess"?',
          optionA: "Rule 1",
          optionB: "Rule 2",
          optionC: "Rule 3",
          correctAnswer: "Rule 2",
        },
        {
          question: "When is a Common Gender applicable?",
          optionA: "When a noun is male",
          optionB: "When a noun is female",
          optionC: "When a noun can be either male or female",
          correctAnswer: "When a noun can be either male or female",
        },
        {
          question: "Which of the following is an example of Neuter Gender?",
          optionA: "Brother",
          optionB: "Doll",
          optionC: "Sister",
          correctAnswer: "Doll",
        },
        {
          question:
            "How can a Masculine Noun be changed into Feminine by using an entirely different word?",
          optionA: "Rule 1",
          optionB: "Rule 3",
          optionC: "Rule 5",
          correctAnswer: "Rule 3",
        },
        {
          question:
            "In which Gender category would you place a living noun that is female?",
          optionA: "Masculine Gender",
          optionB: "Feminine Gender",
          optionC: "Common Gender",
          correctAnswer: "Feminine Gender",
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
            "The Gender tells that a Noun is a ________, is a ________, or can be both or is lifeless.",
          options: ["bird, doctor", "male, female", "chair, wall"],
          correctAnswer: "male, female",
        },
        {
          question:
            "Masculine Gender includes nouns like ________, dog, boy, hero, tiger, husband, poet, son, etc.",
          options: ["sister", "brother", "girl"],
          correctAnswer: "brother",
        },
        {
          question:
            "Feminine Gender comprises nouns such as sister, ________, girl, heroine, tigress, wife, poetess, daughter, etc.",
          options: ["brother", "bitch", "boy"],
          correctAnswer: "bitch",
        },
        {
          question:
            "Common Gender is applicable when a living noun is ________.",
          options: ["male", "female", "either male or female"],
          correctAnswer: "either male or female",
        },
        {
          question:
            "Neuter Gender includes lifeless nouns like bus, chair, ball, bone, book, cloud, desk, doll, pen, refrigerator, table, wall, road, shop, etc., where they are ________.",
          options: ["male", "female", "neither male nor female"],
          correctAnswer: "neither male nor female",
        },
        {
          question:
            "A Masculine Noun can be changed into Feminine by adding ________.",
          options: ['"ess"', "a different word", "a vowel"],
          correctAnswer: '"ess"',
        },
        {
          question:
            'The rule of dropping the last vowel in Masculine Gender and adding "ess" is covered under ________.',
          options: ["Rule 1", "Rule 2", "Rule 3"],
          correctAnswer: "Rule 2",
        },
        {
          question:
            "Common Gender is applicable when a living noun can be ________.",
          options: ["only male", "only female", "either male or female"],
          correctAnswer: "either male or female",
        },
        {
          question: "In Neuter Gender, lifeless nouns are considered ________.",
          options: ["male", "female", "neutral"],
          correctAnswer: "neutral",
        },
        {
          question:
            "To change a Masculine Noun into Feminine by using an entirely different word, you follow ________.",
          options: ["Rule 1", "Rule 3", "Rule 5"],
          correctAnswer: "Rule 3",
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
            "The Masculine Gender includes nouns like sister, dog, and girl.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Feminine Gender comprises nouns such as brother, bitch, and boy.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Common Gender is applicable only when a living noun is male.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Neuter Gender includes lifeless nouns like bus, chair, and ball.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Adding 'ess' is one of the rules to change a Masculine Noun into Feminine.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Rule of dropping the last vowel in Masculine Gender and adding 'ess' is covered under Rule 2.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Common Gender is applicable only when a living noun is female.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Neuter Gender, lifeless nouns are considered as neutral.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "To change a Masculine Noun into Feminine by using an entirely different word, you follow Rule 5.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Feminine Gender includes nouns like brother, dog, and boy.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
