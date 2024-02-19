export const chapter = "Chapter - 10: Use of 'A'  and 'An'";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "Which article is used before a singular noun starting with a consonant sound?",
            options: ["An", "The", "A"],
            answer: "A",
          },
          {
            question:
              "What determines the choice between 'a' and 'an' before a noun?",
            options: [
              "The noun's length",
              "The noun's pronunciation",
              "The noun's gender",
            ],
            answer: "The noun's pronunciation",
          },
          {
            question:
              "Which of the following words would correctly pair with 'an' based on sound?",
            options: ["House", "Elephant", "Umbrella"],
            answer: "Elephant",
          },
          {
            question: "When do you use 'a' before a noun?",
            options: [
              "Before any noun starting with a vowel",
              "Before any noun starting with a consonant",
              "Before a noun with a vowel sound",
            ],
            answer: "Before a noun with a vowel sound",
          },
          {
            question:
              "Which of the following pairs follow the rule of 'a' and 'an' placement?",
            options: [
              "A apple, an umbrella",
              "An orange, a pen",
              "A book, an elephant",
            ],
            answer: "An orange, a pen",
          },
          {
            question: "Choose the correct article for the word 'hour':",
            options: ["An", "The", "A"],
            answer: "A",
          },
          {
            question: "Which article would you use before 'university'?",
            options: ["A", "An", "The"],
            answer: "A",
          },
          {
            question: "Select the appropriate article for 'umbrella':",
            options: ["An", "The", "A"],
            answer: "An",
          },
          {
            question: "Which article suits the word 'eggplant'?",
            options: ["The", "A", "An"],
            answer: "A",
          },
          {
            question:
              "What determines the choice of 'an' or 'a' before a noun?",
            options: [
              "The noun's length",
              "The noun's pronunciation",
              "The noun's popularity",
            ],
            answer: "The noun's pronunciation",
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
              "__________ is used with a Singular Noun which begins with a Consonant sound.",
            options: ["An", "The", "A"],
            answer: "A",
          },
          {
            question:
              "An __________ is used with a Singular Noun which begins with a Vowel sound.",
            options: ["The", "Apple", "Watch"],
            answer: "Apple",
          },
          {
            question:
              '"An" is used with a Singular Noun which begins with a __________ sound.',
            options: ["Consonant", "Vowel", "Plural"],
            answer: "Vowel",
          },
          {
            question:
              "A __________ is used before a Singular Noun which begins with a Consonant sound.",
            options: ["Owl", "Book", "Pen"],
            answer: "Owl",
          },
          {
            question:
              '"A" is used with a Singular Noun which begins with a __________ sound.',
            options: ["Plural", "Vowel", "Consonant"],
            answer: "Consonant",
          },
          {
            question:
              "An __________ is placed before words starting with a Vowel sound.",
            options: ["Elephant", "Dog", "Cat"],
            answer: "Elephant",
          },
          {
            question:
              '"An" is used before a Singular Noun which starts with a __________ sound.',
            options: ["Consonant", "Article", "Vowel"],
            answer: "Vowel",
          },
          {
            question:
              "A __________ is used with Singular Noun starting with a Consonant sound.",
            options: ["Zebra", "Banana", "Mango"],
            answer: "Zebra",
          },
          {
            question:
              '"A" is placed before words starting with a __________ sound.',
            options: ["Plural", "Consonant", "Vowel"],
            answer: "Consonant",
          },
          {
            question:
              "An __________ is used before a word starting with a Vowel sound.",
            options: ["Apple", "Orange", "Elephant"],
            answer: "Apple",
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
            question: "Elephants are the smallest mammals on Earth.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "All reptiles are cold-blooded creatures.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The Pacific Ocean is the largest ocean on the planet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Antarctica is the only continent without a time zone.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Oxygen is the most abundant element in the Earth's atmosphere.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The human body has 206 bones at birth.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "All birds can fly.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The Nile River is the longest river in South America.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Mount Everest is the tallest mountain in the world.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Photosynthesis is the process by which plants produce water.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
