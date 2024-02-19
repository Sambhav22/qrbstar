export const chapter = "Chapter - 4: Acids, Bases and Salts ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the main reason for the sour taste in fruits like curd, tamarind, and lemon?",
          optionA: "Presence of minerals",
          optionB: "Presence of bases",
          optionC: "Presence of acids",
          correctAnswer: "C) Presence of acids",
        },
        {
          question: "What is the origin of the term 'acid'?",
          optionA: "Greek word 'acidos'",
          optionB: "Latin word 'acers'",
          optionC: "Sanskrit word 'amla'",
          correctAnswer: "B) Latin word 'acers'",
        },
        {
          question: "Which of the following is a strong acid?",
          optionA: "Acetic acid",
          optionB: "Tartaric acid",
          optionC: "Hydrochloric acid",
          correctAnswer: "C) Hydrochloric acid",
        },
        {
          question: "How are strong acids different from weak acids?",
          optionA: "Strong acids are bitter, weak acids are sour",
          optionB: "Strong acids dissociate completely, weak acids do not",
          optionC: "Strong acids are organic, weak acids are inorganic",
          correctAnswer:
            "B) Strong acids dissociate completely, weak acids do not",
        },
        {
          question: "What type of substance is used to store acids?",
          optionA: "Metal containers",
          optionB: "Plastic containers",
          optionC: "Glass containers",
          correctAnswer: "C) Glass containers",
        },
        {
          question: "Which acid is commonly found in car batteries?",
          optionA: "Hydrochloric acid",
          optionB: "Nitric acid",
          optionC: "Sulphuric acid",
          correctAnswer: "C) Sulphuric acid",
        },
        {
          question:
            "What is the common property of bases that makes them corrosive?",
          optionA: "Slippery feel",
          optionB: "Bitter taste",
          optionC: "Release of hydroxide ions",
          correctAnswer: "C) Release of hydroxide ions",
        },
        {
          question:
            "Which base is commonly used in the preparation of bleaches, soaps, and toothpaste?",
          optionA: "Sodium hydroxide",
          optionB: "Ammonium hydroxide",
          optionC: "Magnesium hydroxide",
          correctAnswer: "A) Sodium hydroxide",
        },
        {
          question: "What type of indicators are litmus paper and turmeric?",
          optionA: "Synthetic indicators",
          optionB: "Universal indicators",
          optionC: "Natural indicators",
          correctAnswer: "C) Natural indicators",
        },
        {
          question:
            "What is the pH range for a neutral solution on the pH scale?",
          optionA: "0-7",
          optionB: "7-14",
          optionC: "1-14",
          correctAnswer: "B) 7-14",
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
            "Curd, tamarind, and lemon are examples of substances with a ______________ taste due to the presence of acids.",
          options: ["A) Sweet", "B) Salty", "C) Sour"],
          correctAnswer: "C) Sour",
        },
        {
          question:
            "Organic acids are naturally occurring acids found in plants, and they mainly consist of ______________.",
          options: ["A) Oxygen", "B) Hydrogen", "C) Carbon"],
          correctAnswer: "C) Carbon",
        },
        {
          question:
            "Mineral acids, also known as inorganic acids, are prepared from naturally occurring compounds in ______________ or industries.",
          options: ["A) Laboratories", "B) Forests", "C) Oceans"],
          correctAnswer: "A) Laboratories",
        },
        {
          question:
            "All acids contain a ______________ atom that, when dissolved in water, produces hydrogen ions.",
          options: ["A) Oxygen", "B) Hydrogen", "C) Nitrogen"],
          correctAnswer: "B) Hydrogen",
        },
        {
          question:
            "The acids that dissociate completely in hydrogen ions when dissolved in water are classified as ______________ acids.",
          options: ["A) Mild", "B) Strong", "C) Weak"],
          correctAnswer: "B) Strong",
        },
        {
          question:
            "Bases are substances that produce ______________ ions when dissolved in water.",
          options: ["A) Oxygen", "B) Hydrogen", "C) Hydroxide"],
          correctAnswer: "C) Hydroxide",
        },
        {
          question:
            "Litmus, a common natural indicator, is extracted from ______________.",
          options: ["A) Roses", "B) Lichens", "C) Sunflowers"],
          correctAnswer: "B) Lichens",
        },
        {
          question:
            "The pH scale is used to determine the strength of an acid or base and ranges from ______________.",
          options: ["A) 0 to 7", "B) 7 to 14", "C) 1 to 14"],
          correctAnswer: "C) 1 to 14",
        },
        {
          question:
            "Neutralization is the reaction between an acid and a base, producing ______________ and water.",
          options: ["A) Salt", "B) Sugar", "C) Oxygen"],
          correctAnswer: "A) Salt",
        },
        {
          question:
            "Toothpaste contains bases that neutralize the acid present in the food we eat, thus protecting our teeth from harmful effects of ______________.",
          options: ["A) Saliva", "B) Acids", "C) Bacteria"],
          correctAnswer: "B) Acids",
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
            "Curd, tamarind, and lemon have a sweet taste due to the presence of acids.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Organic acids are mainly composed of oxygen.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Mineral acids, also known as inorganic acids, are naturally occurring compounds.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "All acids contain a nitrogen atom that produces hydrogen ions when dissolved in water.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Strong acids are substances that do not dissociate completely in hydrogen ions when dissolved in water.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Bases produce oxygen ions when dissolved in water.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Litmus, a common natural indicator, is extracted from sunflowers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The pH scale ranges from 0 to 7 to determine the strength of acids or bases.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Neutralization is the reaction between an acid and a base, producing sugar and water.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Toothpaste contains bases that enhance the harmful effects of acids on teeth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
