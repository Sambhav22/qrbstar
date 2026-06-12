export const chapter = "Chapter - 8: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the Subject of a sentence?",
          optionA: "The part of the sentence that completes the action.",
          optionB: "The part of the sentence about which something is said.",
          optionC: "The part of the sentence that indicates time and place.",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following can work as a Subject in a sentence?",
          optionA: "Only Nouns and Pronouns",
          optionB: "Only Adjective Phrases",
          optionC: "Nouns, Pronouns, Gerunds, and Infinitives",
          correctAnswer: "C",
        },
        {
          question: "What are Objects in a sentence?",
          optionA: "Only Direct Objects",
          optionB: "Only Indirect Objects",
          optionC: "Both Direct and Indirect Objects",
          correctAnswer: "C",
        },
        {
          question:
            "In Imperative Sentences, where is the Subject usually hidden?",
          optionA: "At the beginning",
          optionB: "In the middle",
          optionC: "It is not hidden",
          correctAnswer: "B",
        },
        {
          question: "What is the role of a Complement in a sentence?",
          optionA: "It begins the sentence.",
          optionB: "It completes the sense of the sentence.",
          optionC: "It always follows the Subject.",
          correctAnswer: "B",
        },
        {
          question:
            "How is the position of the Subject and Predicate in a sentence?",
          optionA: "The Subject always follows the Predicate.",
          optionB: "The positions can be inverted.",
          optionC: "The Predicate always precedes the Subject.",
          correctAnswer: "B",
        },
        {
          question: "Which sentence shows correct subject-verb agreement?",
          optionA: "The team are playing well.",
          optionB: "Physics are an interesting subject.",
          optionC: "The captain and the players are arriving.",
          correctAnswer: "C",
        },
        {
          question:
            "When using 'or' in a compound subject, with what part should the Verb agree?",
          optionA: "The first part of the compound subject",
          optionB: "The last part of the compound subject",
          optionC: "It can be either the first or last part",
          correctAnswer: "B",
        },
        {
          question:
            "How should you choose the Verb when a Collective Noun is the Subject?",
          optionA: "Always use a Singular Verb.",
          optionB: "Always use a Plural Verb.",
          optionC:
            "It depends on whether the Collective Noun is used as one entity or has several parts.",
          correctAnswer: "C",
        },
        {
          question:
            "In sentences with Relative Pronouns, where should the Verb agree?",
          optionA: "Always agree with the Relative Pronoun.",
          optionB: "Always agree with the noun it refers to (antecedent).",
          optionC: "It can be either the Relative Pronoun or the antecedent.",
          correctAnswer: "B",
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
            "The Subject of a sentence may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. For example, a monkey sitting on _____ tree.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
        },
        {
          question:
            "A Predicate has one or more verbs. Besides, it may have objects, complement, etc. Objects are of two types: 1. Indirect Object 2. Direct Object. All living nouns and personal pronouns are included under Indirect Objects; for example: child, Vibha, Rakesh, Bhanu, dog, giraffe, ____, ____. ",
          options: ["he", "she", "they"],
          correctAnswer: "they",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. The positions of the Subject and the Predicate can be inverted. For example, the captain came through _____ door.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
        },
        {
          question:
            "The Subject may be made up of one or more words. Generally, a Subject is a noun or pronoun. However, in some sentences, it, there, a gerund, or an infinitive can also work as a Subject; for example: _____ is my uncle.",
          options: ["It", "There", "An old man"],
          correctAnswer: "It",
        },
        {
          question:
            "The Subject precedes the Predicate in a sentence. In interrogative and exclamatory sentences, the Subject takes a mid-position. Where did _____ change the dress?",
          options: ["he", "she", "they"],
          correctAnswer: "he",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. We can discuss the following characteristics about its position: The Subject precedes the Predicate; that is, it normally appears at the head of the sentence. The positions of the Subject and the Predicate can be inverted. Compare the two groups: The ships appeared on the horizon. On _____ horizon appeared the ships.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. The Subject may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. We can discuss the following characteristics about its position: An old man lived in _____ hut.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. The Subject may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. We can discuss the following characteristics about its position: The positions of the Subject and the Predicate can be inverted. Compare the two groups: The captain came through _____ door.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. The Subject may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. We can discuss the following characteristics about its position: In interrogative and exclamatory sentences, the Subject takes a mid-position: Will _____ come with me?",
          options: ["you", "he", "she"],
          correctAnswer: "you",
        },
        {
          question:
            "The Subject is an important constituent of a sentence. The Subject may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. We can discuss the following characteristics about its position: The sentences having there and it too have Subjects in the mid-position: An old man lived in _____ hut.",
          options: ["a", "an", "the"],
          correctAnswer: "the",
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
            "A Subject may include determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Adjective Phrases can be part of the Subject in a sentence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Imperative sentences always have the Subject explicitly mentioned.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The position of the Subject and Predicate in a sentence can never be inverted.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Relative Pronouns always agree with the antecedent in the choice of the Verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The verb in a sentence must always agree with the number and person of the subject.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In compound subjects connected by 'or,' the verb should agree with the first part of the compound subject.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "All collective nouns take a singular verb, regardless of whether they refer to a single entity or multiple parts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Quantifiers like much, some, a lot of, little, few, plenty, most, all, etc. are not part of a Subject.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Determiners like an ant, this pen, his virtues can never be part of a Subject.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
