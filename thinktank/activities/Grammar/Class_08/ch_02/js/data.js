export const chapter = "Chapter - 2: Pronoun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What type of pronoun refers to the speaker?",
          optionA: "Reflexive Pronoun",
          optionB: "Personal Pronoun",
          optionC: "Demonstrative Pronoun",
          correctAnswer: "B) Personal Pronoun",
        },
        {
          question: "Which pronoun is used to reflect the action upon itself?",
          optionA: "Interrogative Pronoun",
          optionB: "Reflexive Pronoun",
          optionC: "Emphatic Pronoun",
          correctAnswer: "B) Reflexive Pronoun",
        },
        {
          question:
            "Which type of pronoun points out the nouns and is represented by 'this,' 'that,' 'these,' and 'those'?",
          optionA: "Interrogative Pronoun",
          optionB: "Demonstrative Pronoun",
          optionC: "Relative Pronoun",
          correctAnswer: "B) Demonstrative Pronoun",
        },
        {
          question: "What is the purpose of an Emphatic Pronoun?",
          optionA: "To ask questions",
          optionB: "To lay emphasis on the subject itself",
          optionC: "To point out nouns",
          correctAnswer: "B) To lay emphasis on the subject itself",
        },
        {
          question: "Which pronoun is used to ask questions?",
          optionA: "Demonstrative Pronoun",
          optionB: "Interrogative Pronoun",
          optionC: "Relative Pronoun",
          correctAnswer: "B) Interrogative Pronoun",
        },
        {
          question:
            "What type of pronoun is used to relate to a noun mentioned before?",
          optionA: "Demonstrative Pronoun",
          optionB: "Relative Pronoun",
          optionC: "Indefinite Pronoun",
          correctAnswer: "B) Relative Pronoun",
        },
        {
          question: "What is the function of Indefinite Pronouns?",
          optionA: "To ask questions",
          optionB: "To refer to a noun in a general or indefinite way",
          optionC: "To lay emphasis on the subject itself",
          correctAnswer: "B) To refer to a noun in a general or indefinite way",
        },
        {
          question:
            "Which pronouns express a common relationship between two nouns?",
          optionA: "Indefinite Pronouns",
          optionB: "Interrogative Pronouns",
          optionC: "Reciprocal Pronouns",
          correctAnswer: "C) Reciprocal Pronouns",
        },
        {
          question:
            "In which capacity can pronouns be used to replace nouns, acting as the receiver of the action?",
          optionA: "As Subject",
          optionB: "As Object",
          optionC: "As Possessive",
          correctAnswer: "B) As Object",
        },
        {
          question:
            "Which of the following sentences correctly uses a demonstrative pronoun?",
          optionA: "He is the boy who helped me with his notes.",
          optionB:
            "The baby had many balls, but he likes this and that greatly.",
          optionC: "You cannot blame all of them, can you?",
          correctAnswer:
            "B) The baby had many balls, but he likes this and that greatly.",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Personal Pronouns stand for nouns in three persons: First Person refers to the speaker, for example: ___ went to him and asked if that pen was mine.",
          optionA: "He",
          optionB: "They",
          optionC: "I",
          correctAnswer: "C) I",
        },
        {
          question:
            "Reflexive Pronouns reflect the action upon ___. For example, the stag entangled ___.",
          optionA: "Others",
          optionB: "Themselves",
          optionC: "Itself",
          correctAnswer: "C) Itself",
        },
        {
          question:
            "Emphatic Pronouns are used to lay emphasis upon the ___. For example, ___ could cross the river ourselves.",
          optionA: "Nouns",
          optionB: "Subject itself",
          optionC: "Action",
          correctAnswer: "B) Subject itself",
        },
        {
          question:
            "Demonstrative Pronouns point out the ___. For instance, the baby had many balls, but he likes ___ and ___ greatly.",
          optionA: "Numbers, shapes",
          optionB: "This, that",
          optionC: "These, those",
          correctAnswer: "C) These, those",
        },
        {
          question:
            "Interrogative Pronouns are used to ask questions, for example: ___ is at the door?",
          optionA: "Who",
          optionB: "Where",
          optionC: "Which",
          correctAnswer: "A) Who",
        },
        {
          question:
            "Relative Pronouns are used to relate to a noun mentioned before, for example: He is the boy ___ helped me with his notes.",
          optionA: "Whose",
          optionB: "Who",
          optionC: "Whom",
          correctAnswer: "B) Who",
        },
        {
          question:
            "Indefinite Pronouns refer to a noun in a general or indefinite way, for example: Everybody was in the meeting, but for ___.",
          optionA: "It",
          optionB: "Him",
          optionC: "Her",
          correctAnswer: "B) Him",
        },
        {
          question:
            "Reciprocal Pronouns express a common relationship between ___, for example: The two girls quarreled and then grappled with ___.",
          optionA: "Themselves",
          optionB: "Each other",
          optionC: "Everyone",
          correctAnswer: "B) Each other",
        },
        {
          question:
            "Pronouns can be used in different capacities: As ___, Kanti helped him with some money.",
          optionA: "Subject",
          optionB: "Object",
          optionC: "Possessive",
          correctAnswer: "B) Object",
        },
        {
          question:
            "The function of Pronouns is similar to that of ___. Like Nouns, Pronouns are governed by their functions.",
          optionA: "Adjectives",
          optionB: "Verbs",
          optionC: "Nouns",
          correctAnswer: "C) Nouns",
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
            "Personal Pronouns stand for nouns in two persons: First Person and Second Person.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Reflexive Pronouns are used to lay emphasis upon the subject itself.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Demonstrative Pronouns point out the verbs in a sentence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative Pronouns are used to express a common relationship between two nouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Indefinite Pronouns refer to a noun in a specific and definite way.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Reciprocal Pronouns express a common relationship between two or more people.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Pronouns can be used in different capacities: As Subject, Object, and Possessive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The action done by a Pronoun reflects upon itself in Emphatic Pronouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Relative Pronouns are used to relate to a noun that has been mentioned after them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The British East India Company obtained Diwani rights from Shah Alam II, granting them the power to collect taxes in the provinces of Bengal, Bihar, and Orissa.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
