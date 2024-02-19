export const chapter = "Chapter - 12: Conjunction `  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'What type of conjunction is "and" in the sentence "The sun appeared bright and hot, but the climate was cold and windy."?',
          optionA: "Subordinating Conjunction",
          optionB: "Coordinating Conjunction",
          optionC: "Correlative Conjunction",
          correctAnswer: "b",
        },
        {
          question:
            'In the sentence "The little girl went to the post office after she wrote a letter to God," what type of conjunction is "after"?',
          optionA: "Correlative Conjunction",
          optionB: "Coordinating Conjunction",
          optionC: "Subordinating Conjunction",
          correctAnswer: "c",
        },
        {
          question:
            "Which pair of correlative conjunctions is correctly matched?",
          optionA: "either ... but also",
          optionB: "although ... yet",
          optionC: "no sooner ... than",
          correctAnswer: "a",
        },
        {
          question:
            'In the sentence "Do you know whether he lives here or not?" what type of conjunction is "whether"?',
          optionA: "Coordinating Conjunction",
          optionB: "Correlative Conjunction",
          optionC: "Subordinating Conjunction",
          correctAnswer: "c",
        },
        {
          question:
            'Identify the correct usage of correlative conjunctions in the sentence "He has bought either the chair or the table."',
          optionA: "He either can buy the shirt or the trousers.",
          optionB: "He has bought either the chair or the table.",
          optionC: "He can buy the shirt either or the trousers.",
          correctAnswer: "b",
        },
        {
          question:
            "Which correlative conjunction pair cannot be interchanged according to the given text?",
          optionA: "neither ... nor",
          optionB: "both ... and",
          optionC: "although ... yet",
          correctAnswer: "b",
        },
        {
          question:
            'In the sentence "The old man left behind not only a tea estate but also a huge house," what is the conjunction "not only"?',
          optionA: "Coordinating Conjunction",
          optionB: "Correlative Conjunction",
          optionC: "Subordinating Conjunction",
          correctAnswer: "b",
        },
        {
          question:
            'Identify the correct usage of prepositions with correlative conjunctions in the sentence "He kept the book either on the table or on the bed."',
          optionA: "He kept the book on either the table or the bed.",
          optionB: "He kept the book either on the table or on the bed.",
          optionC: "He kept the book on the either table or bed.",
          correctAnswer: "b",
        },
        {
          question:
            "What should the common words referring to both alternatives be placed before in a correlative conjunction?",
          optionA: "Second part",
          optionB: "Preposition",
          optionC: "First part",
          correctAnswer: "c",
        },
        {
          question:
            'In the sentence "The policeman looked for either the robber or the stolen bag," what type of conjunction is "for"?',
          optionA: "Subordinating Conjunction",
          optionB: "Correlative Conjunction",
          optionC: "Coordinating Conjunction",
          correctAnswer: "c",
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
            "The sun appeared bright and hot, but the climate was __________ and windy.",
          options: ["cold", "warm", "humid"],
          correctAnswer: "cold",
        },
        {
          question: "Is it an insect __________ a reptile?",
          options: ["or", "and", "but"],
          correctAnswer: "or",
        },
        {
          question: "The elephant is a powerful __________ gentle animal.",
          options: ["but", "and", "or"],
          correctAnswer: "but",
        },
        {
          question: "This teddy is new __________ it is a little torn.",
          options: ["and", "but", "or"],
          correctAnswer: "but",
        },
        {
          question:
            "The little girl went to the post office after she wrote a letter __________ God.",
          options: ["to", "for", "with"],
          correctAnswer: "to",
        },
        {
          question: "I bought a loaf of bread because I was very __________.",
          options: ["tired", "hungry", "thirsty"],
          correctAnswer: "hungry",
        },
        {
          question:
            "Although he is strong and tall, __________ he cannot run quickly.",
          options: ["but", "and", "so"],
          correctAnswer: "yet",
        },
        {
          question:
            "Since your teacher is on leave today, you all must study __________.",
          options: ["loudly", "quickly", "silently"],
          correctAnswer: "silently",
        },
        {
          question: "He has bought __________ the chair or the table.",
          options: ["either", "neither", "both"],
          correctAnswer: "either",
        },
        {
          question:
            "The policeman looked __________ the robber or the stolen bag.",
          options: ["at", "for", "to"],
          correctAnswer: "for",
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
            "The sun appeared bright and hot, but the climate was cold and windy.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The little girl went to the post office after she wrote a letter to God.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Correlative conjunctions occur in pairs, and they can be interchanged freely.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The common words referring to both alternatives in correlative conjunctions should be placed after the first part.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "English education in India during this period primarily promoted cultural isolation and separatism.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Correlative conjunctions have no fixed pairs and can be used interchangeably.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The rise of nationalism in India was not influenced by social and religious reform movements.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Means of communication like railways and telegraph played a significant role in suppressing nationalist sentiments.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The lack of access to information was a crucial factor in spreading ideas related to nationalism during this period.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Bankim Chandra Chatterjee wrote the novel 'Anand Math' and composed the national song 'Bande Mataram.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
