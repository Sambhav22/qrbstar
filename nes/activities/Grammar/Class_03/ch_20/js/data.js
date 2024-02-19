export const chapter = "Chapter - 20: Conjunctions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary function of conjunctions?",
          optionA: "Separate words",
          optionB: "Join words, word-groups, and sentences",
          optionC: "Create emphasis",
          correctAnswer: "Join words, word-groups, and sentences",
        },
        {
          question:
            "In the sentence 'A clever thief or a foolish man,' which conjunction is used?",
          optionA: "and",
          optionB: "or",
          optionC: "but",
          correctAnswer: "or",
        },
        {
          question:
            "Which conjunction is used in the sentence 'He is going by bus or by train'?",
          optionA: "and",
          optionB: "or",
          optionC: "but",
          correctAnswer: "or",
        },
        {
          question:
            "What is the conjunction used in the sentence 'He writes slow but neatly'?",
          optionA: "and",
          optionB: "but",
          optionC: "because",
          correctAnswer: "but",
        },
        {
          question:
            "Which sentence demonstrates the use of the conjunction 'unless'?",
          optionA: "He is going by bus or by train.",
          optionB: "If you work hard, you will succeed.",
          optionC: "Write down my name, so you do not forget it.",
          correctAnswer: "Write down my name, so you do not forget it.",
        },
        {
          question:
            "In the sentence 'Jack and Jill are friends,' what type of conjunction is used?",
          optionA: "Coordinating conjunction",
          optionB: "Subordinating conjunction",
          optionC: "Correlative conjunction",
          correctAnswer: "Coordinating conjunction",
        },
        {
          question: "What does the conjunction 'either ... or' indicate?",
          optionA: "Contrast",
          optionB: "Choice between alternatives",
          optionC: "Cause and effect",
          correctAnswer: "Choice between alternatives",
        },
        {
          question:
            "Which conjunction is used in the sentence 'He is sleeping because he is tired'?",
          optionA: "and",
          optionB: "because",
          optionC: "but",
          correctAnswer: "because",
        },
        {
          question: "What is the function of the conjunction 'unless'?",
          optionA: "Introduce a condition",
          optionB: "Show contrast",
          optionC: "Provide an alternative",
          correctAnswer: "Introduce a condition",
        },
        {
          question:
            "Which sentence demonstrates the use of the conjunction 'so'?",
          optionA: "Naina is a teacher. Heena is a teacher.",
          optionB: "What would you like to have, juice or cold drink?",
          optionC: "Write down my name, so you do not forget it.",
          correctAnswer: "Write down my name, so you do not forget it.",
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
            "Conjunctions join words; for example:\n0 boy _____ girl 0 apples _____ oranges \n0 tea _____ coffee 0 husband _____ wife",
          options: ["or", "and", "but"],
          correctAnswer: "and",
        },
        {
          question:
            "Conjunctions join word-groups; for example:\n0 a tall girl _____ a short boy 0 a beautiful flower _____ a tasty fruit\n0 a clever thief _____ a foolish man 0 a cup of coffee _____ tea",
          options: ["and", "or", "but"],
          correctAnswer: "and",
        },
        {
          question:
            "Conjunctions join sentences:\n0 Naina is a teacher. Heena is _____ teacher.\n0 He is a student. He is _____ teacher.\n0 Naina _____ Heena are teachers. He is either a student _____ a teacher.",
          options: ["or", "and", "but"],
          correctAnswer: "and",
        },
        {
          question: "He writes slow _____ neatly.",
          options: ["or", "but", "and"],
          correctAnswer: "but",
        },
        {
          question: "What would you like to have, juice _____ cold drink?",
          options: ["or", "and", "but"],
          correctAnswer: "or",
        },
        {
          question:
            'Identify the correct conjunction in the sentence "He is going by bus _____ by train."',
          options: ["and", "or", "but"],
          correctAnswer: "or",
        },
        {
          question: "He is sleeping because he is _____.",
          options: ["tired", "happy", "angry"],
          correctAnswer: "tired",
        },
        {
          question: "Write down my name, so you do not forget _____.",
          options: ["it", "them", "me"],
          correctAnswer: "it",
        },
        {
          question: "If you work hard, you will _____.",
          options: ["fail", "succeed", "quit"],
          correctAnswer: "succeed",
        },
        {
          question:
            'Choose the correct conjunction in the sentence "Jack _____ Jill are friends."',
          options: ["and", "or", "but"],
          correctAnswer: "and",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Conjunctions join words, word-groups, and sentences.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'A clever thief or a foolish man,' 'or' is a preposition.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The sentence 'He writes slow but neatly' uses the conjunction 'and'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The conjunction 'unless' is used to provide an alternative in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "'Either ... or' is a conjunction indicating contrast between alternatives.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'He is sleeping because he is tired,' 'because' is a preposition.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Coordinating conjunctions join independent clauses.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The conjunction 'so' is used to introduce a condition in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Correlative conjunctions always come in pairs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The sentence 'He went to the store or to the mall' demonstrates the use of a subordinating conjunction.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
