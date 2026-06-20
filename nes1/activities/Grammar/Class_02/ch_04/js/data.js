export const chapter = "Chapter - 4: Nouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which of the following is NOT a Proper Noun?",
            options: ["Ram", "River", "Agra"],
            answer: "River",
          },
          {
            question: "Proper Nouns differ from Common Nouns because they:",
            options: [
              "Start with a lowercase letter.",
              "Are specific names.",
              "Refer to general things.",
            ],
            answer: "Are specific names.",
          },
          {
            question: "What type of nouns begin with a Capital Letter?",
            options: ["Common Nouns", "Proper Nouns", "Abstract Nouns"],
            answer: "Proper Nouns",
          },
          {
            question: "Which of the following is an example of a Common Noun?",
            options: ["Agra", "Red Fort", "City"],
            answer: "City",
          },
          {
            question: "What is the distinguishing feature of Proper Nouns?",
            options: [
              "They represent general names.",
              "They start with a lowercase letter.",
              "They begin with a Capital Letter.",
            ],
            answer: "They begin with a Capital Letter.",
          },
          {
            question:
              "Which category do names like 'Vibhuti' and 'Naina' belong to?",
            options: ["Proper Nouns", "Common Nouns", "Abstract Nouns"],
            answer: "Proper Nouns",
          },
          {
            question: "'England' and 'Russia' are examples of:",
            options: ["Common Nouns", "Abstract Nouns", "Proper Nouns"],
            answer: "Proper Nouns",
          },
          {
            question: "What do Common Nouns represent?",
            options: ["Specific names", "General names", "Singular names"],
            answer: "General names",
          },
          {
            question: "The term 'girl' belongs to which category of nouns?",
            options: ["Abstract Nouns", "Common Nouns", "Proper Nouns"],
            answer: "Common Nouns",
          },
          {
            question:
              "Which of the following groups only contains Proper Nouns?",
            options: [
              "boy, city, India",
              "Ram, Vibhuti, Ganga",
              "river, Red Fort, girl",
            ],
            answer: "Ram, Vibhuti, Ganga",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "_______________ are names given to persons, animals, places, and things.",
            options: ["Verbs", "Nouns", "Adjectives"],
            answer: "Nouns",
          },
          {
            question: "Proper Nouns begin with a _______________ letter.",
            options: ["lowercase", "uppercase", "special"],
            answer: "uppercase",
          },
          {
            question: "Common Nouns represent _______________ names.",
            options: ["specific", "general", "abstract"],
            answer: "general",
          },
          {
            question:
              "Some examples of Proper Nouns include names like _______________ and _______________.",
            options: ["river, city", "boy, girl", "Ajay, Agra"],
            answer: "Ajay, Agra",
          },
          {
            question:
              "Common Nouns can refer to things like _______________ and _______________.",
            options: ["Ganga, country", "river, building", "Vibhuti, girl"],
            answer: "river, building",
          },
          {
            question: "Proper Nouns can be used for specific _______________.",
            options: ["actions", "people", "emotions"],
            answer: "people",
          },
          {
            question:
              "Names such as 'England' and 'Russia' are examples of _______________.",
            options: ["Common Nouns", "Abstract Nouns", "Proper Nouns"],
            answer: "Proper Nouns",
          },
          {
            question: "Common Nouns are _______________ names.",
            options: ["general", "singular", "unique"],
            answer: "general",
          },
          {
            question: "Proper Nouns start with a _______________ letter.",
            options: ["small", "capital", "lowercase"],
            answer: "capital",
          },
          {
            question:
              "Nouns like 'girl' and 'boy' belong to the category of _______________.",
            options: ["Proper Nouns", "Abstract Nouns", "Common Nouns"],
            answer: "Common Nouns",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Proper Nouns always start with a lowercase letter.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Common Nouns represent specific names.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Abstract Nouns are examples of Proper Nouns.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "All Nouns refer to persons, animals, places, and things.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Common Nouns always begin with a Capital Letter.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Proper Nouns can be used for specific people.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Abstract Nouns represent tangible things.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Common Nouns represent general names.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "All Proper Nouns start with a Capital Letter.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Common Nouns can't be used for specific people or places.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
