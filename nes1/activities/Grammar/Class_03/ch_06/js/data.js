export const chapter = "Chapter - 6: Pronouns ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'What kind of pronouns are "I," "you," "we," "they," "she," "he," "it," etc.?',
          optionA: "Demonstrative Pronouns",
          optionB: "Personal Pronouns",
          optionC: "Reflexive Pronouns",
          correctAnswer: "Personal Pronouns",
        },
        {
          question:
            "Which type of pronoun refers to the person or animal that is the subject of the verb?",
          optionA: "Interrogative Pronouns",
          optionB: "Personal Pronouns",
          optionC: "Reflexive Pronouns",
          correctAnswer: "Reflexive Pronouns",
        },
        {
          question:
            'In the sentence "Preeti bought a book. She read it." What are "she" and "it"?',
          optionA: "Interrogative Pronouns",
          optionB: "Personal Pronouns",
          optionC: "Demonstrative Pronouns",
          correctAnswer: "Personal Pronouns",
        },
        {
          question:
            "If a speaker speaks about himself, which person does he speak in?",
          optionA: "Second Person",
          optionB: "First Person",
          optionC: "Third Person",
          correctAnswer: "First Person",
        },
        {
          question: "Which pronouns are used to ask questions?",
          optionA: "Demonstrative Pronouns",
          optionB: "Interrogative Pronouns",
          optionC: "Reflexive Pronouns",
          correctAnswer: "Interrogative Pronouns",
        },
        {
          question:
            'What is the reflexive pronoun formed by adding the suffix "self" to the singular?',
          optionA: "Yourself",
          optionB: "Myself",
          optionC: "Themselves",
          correctAnswer: "Myself",
        },
        {
          question:
            'In the sentence "The woman made that cake herself. It has hurt itself." What are "herself" and "itself"?',
          optionA: "Demonstrative Pronouns",
          optionB: "Personal Pronouns",
          optionC: "Reflexive Pronouns",
          correctAnswer: "Reflexive Pronouns",
        },
        {
          question: "Which pronouns point to the objects they refer to?",
          optionA: "Personal Pronouns",
          optionB: "Interrogative Pronouns",
          optionC: "Demonstrative Pronouns",
          correctAnswer: "Demonstrative Pronouns",
        },
        {
          question:
            "When the speaker speaks about the person he is speaking to, which person does he speak in?",
          optionA: "Third Person",
          optionB: "Second Person",
          optionC: "First Person",
          correctAnswer: "Second Person",
        },
        {
          question:
            'In the sentence "He lives near the bank. Tell her to come inside. They have done their homework," which pronoun is in the third person?',
          optionA: "He",
          optionB: "Her",
          optionC: "They",
          correctAnswer: "They",
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
            "Personal Pronouns are used in place of __________, animals, things, or places.",
          optionA: "Verbs",
          optionB: "Persons",
          optionC: "Adjectives",
          correctAnswer: "Persons",
        },
        {
          question:
            "Reflexive Pronouns refer to the person or animal that is the __________ of the Verb.",
          optionA: "Subject",
          optionB: "Object",
          optionC: "Adverb",
          correctAnswer: "Subject",
        },
        {
          question: "Interrogative Pronouns are used to ask __________.",
          optionA: "Commands",
          optionB: "Statements",
          optionC: "Questions",
          correctAnswer: "Questions",
        },
        {
          question:
            "Demonstrative Pronouns point to the __________ they refer to.",
          optionA: "Verbs",
          optionB: "Objects",
          optionC: "Adverbs",
          correctAnswer: "Objects",
        },
        {
          question:
            "First Person Personal Pronouns are used when the speaker speaks about __________.",
          optionA: "Themselves",
          optionB: "The person they are speaking to",
          optionC: "Himself or herself",
          correctAnswer: "Himself or herself",
        },
        {
          question:
            'Reflexive Pronouns are formed by adding a suffix "self" to the Singular and "selves" to the __________.',
          optionA: "Adjective",
          optionB: "Plural",
          optionC: "Verb",
          correctAnswer: "Plural",
        },
        {
          question:
            'Interrogative Pronouns include words like "Who," "Whose," and __________.',
          optionA: "Where",
          optionB: "When",
          optionC: "Which",
          correctAnswer: "Which",
        },
        {
          question:
            'Demonstrative Pronouns include words like "This," "That," "These," and __________.',
          optionA: "There",
          optionB: "Them",
          optionC: "Those",
          correctAnswer: "Those",
        },
        {
          question:
            "Second Person Personal Pronouns are used when the speaker speaks about __________.",
          optionA: "Themselves",
          optionB: "The person they are speaking to",
          optionC: "Himself or herself",
          correctAnswer: "The person they are speaking to",
        },
        {
          question:
            'Reflexive Pronouns are formed by adding a suffix "self" to the Singular and "selves" to the __________.',
          optionA: "Adjective",
          optionB: "Plural",
          optionC: "Verb",
          correctAnswer: "Plural",
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
            "Personal Pronouns are used to replace persons, animals, things, or places.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Reflexive Pronouns refer to the subject of the verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Interrogative Pronouns are used to make statements.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            'Demonstrative Pronouns include words like "When" and "Where."',
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "First Person Personal Pronouns are used when the speaker refers to someone else.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            'Reflexive Pronouns are always formed by adding a suffix "self" to the singular.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: 'Interrogative Pronouns include words like "Which."',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: 'Demonstrative Pronouns include words like "Them."',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Second Person Personal Pronouns are used when the speaker refers to themselves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            'Reflexive Pronouns are formed by adding a suffix "self" to the plural.',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
