export const chapter = "Chapter - 17: Conjunctions ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a conjunction?",
          optionA: "A joining word",
          optionB: "A singular word",
          optionC: "A descriptive word",
          correctAnswer: "A joining word",
        },
        {
          question:
            "Which words in the examples 'Mukti and Shakti' and 'tea or coffee' are conjunctions?",
          optionA: "Mukti and Shakti",
          optionB: "and, or",
          optionC: "tea or coffee",
          correctAnswer: "and, or",
        },
        {
          question:
            "In the sentence 'Jyoti is poor but honest,' what is the conjunction?",
          optionA: "poor",
          optionB: "but",
          optionC: "honest",
          correctAnswer: "but",
        },
        {
          question:
            "What conjunction is used in the sentence 'Vinayak is neither a singer nor an artist'?",
          optionA: "neither",
          optionB: "nor",
          optionC: "artist",
          correctAnswer: "nor",
        },
        {
          question: "What type of words can conjunctions join?",
          optionA: "Only words",
          optionB: "Words, word-groups, and sentences",
          optionC: "Only sentences",
          correctAnswer: "Words, word-groups, and sentences",
        },
        {
          question:
            "Which conjunction is missing in the sentence 'Jyoti is poor honest' to make it grammatically correct?",
          optionA: "and",
          optionB: "or",
          optionC: "but",
          correctAnswer: "but",
        },
        {
          question:
            "Identify the conjunction in the sentence 'Asha reads, Deepak reads. Asha and Deepak read.'",
          optionA: "reads",
          optionB: "and",
          optionC: "Asha",
          correctAnswer: "and",
        },
        {
          question:
            "What conjunction is used in the sentence 'Have some tea. Have some coffee. Have some tea or coffee'?",
          optionA: "Have",
          optionB: "or",
          optionC: "tea or coffee",
          correctAnswer: "or",
        },
        {
          question:
            "In the list of common conjunctions, which one indicates an alternative or choice?",
          optionA: "and",
          optionB: "either ... or",
          optionC: "because",
          correctAnswer: "either ... or",
        },
        {
          question:
            "Which conjunction is used to express a result or consequence?",
          optionA: "if",
          optionB: "so",
          optionC: "but",
          correctAnswer: "so",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Conjunctions are ______ words.",
          options: ["separating", "joining", "descriptive"],
          correctAnswer: "joining",
        },
        {
          question:
            "A conjunction is a word that joins ______, ______, and sentences.",
          options: ["phrases, numbers", "words, word-groups", "nouns, verbs"],
          correctAnswer: "words, word-groups",
        },
        {
          question:
            "In the sentence 'Jyoti is poor ______ honest,' what conjunction is missing?",
          options: ["and", "or", "but"],
          correctAnswer: "but",
        },
        {
          question: "Vinayak is ______ a singer. Vinayak is ______ an artist.",
          options: ["and, or", "neither, nor", "either, or"],
          correctAnswer: "neither, nor",
        },
        {
          question:
            "Identify the conjunction in the sentence 'Have some tea. Have some coffee. Have some tea ______ coffee.'",
          options: ["or", "and", "but"],
          correctAnswer: "or",
        },
        {
          question: "Mukti ______ Shakti.",
          options: ["or", "and", "but"],
          correctAnswer: "and",
        },
        {
          question:
            "Read the following sentence: 'Asha reads. Deepak reads. Asha ______ Deepak read.'",
          options: ["and", "or", "but"],
          correctAnswer: "and",
        },
        {
          question: "Common conjunctions include ______, ______, and ______.",
          options: ["also, but, else", "if, either, or", "till, unless, while"],
          correctAnswer: "if, either, or",
        },
        {
          question:
            "Fill in the blank: '______ neither a singer nor an artist.'",
          options: ["Since", "Else", "Vinayak is"],
          correctAnswer: "Vinayak is",
        },
        {
          question:
            "Choose the correct conjunction to complete the sentence: 'Read some common conjunctions ______ you understand their usage.'",
          options: ["and", "so", "until"],
          correctAnswer: "so",
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
            "A conjunction is a word that separates words, word-groups, and sentences.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'Jyoti is poor but honest,' 'but' is a conjunction.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Common conjunctions include 'also,' 'but,' and 'else.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Vinayak is both a singer and an artist.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The adverb 'quickly' modifies a noun in the sentence 'The cat ran quickly.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'Have some tea or coffee,' 'or' is a conjunction.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The conjunction 'neither...nor' is used to indicate an alternative or choice.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Asha reads, and Deepak reads. Asha and Deepak read are equivalent sentences.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The adverb 'strongly' adds something to the meaning of an adjective.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Common conjunctions include 'since,' 'either...or,' and 'else.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
