export const chapter = "Chapter - 24:   Letter Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the purpose of Sonam's letter to Nityam?",
          optionA: "To ask about Nityam's well-being",
          optionB: "To remind Nityam about borrowed books",
          optionC: "To inquire about Nityam's exams",
          correctAnswer: "To remind Nityam about borrowed books",
        },
        {
          question: "Which book did Nityam borrow from Sonam?",
          optionA: "Mathematics",
          optionB: "General Science",
          optionC: "General English",
          correctAnswer: "General English",
        },
        {
          question: "Why does Sonam need the borrowed book back?",
          optionA: "For leisure reading",
          optionB: "For upcoming examinations",
          optionC: "For a book club meeting",
          correctAnswer: "For upcoming examinations",
        },
        {
          question: "Where does Sonam live, as mentioned in the letter?",
          optionA: "Shanti Nagar",
          optionB: "Shastri Bagh",
          optionC: "Chandni Chowk",
          correctAnswer: "Shastri Bagh",
        },
        {
          question: "What does Sonam inquire about in the letter?",
          optionA: "Nityam's job",
          optionB: "Nityam's parents and sister",
          optionC: "Nityam's favorite hobby",
          correctAnswer: "Nityam's parents and sister",
        },
        {
          question: "What is the tone of Sonam's letter?",
          optionA: "Angry",
          optionB: "Formal",
          optionC: "Affectionate",
          correctAnswer: "Affectionate",
        },
        {
          question: "When was the book borrowed by Nityam?",
          optionA: "Last week",
          optionB: "Last month",
          optionC: "Last year",
          correctAnswer: "Last month",
        },
        {
          question:
            "What message does Sonam convey to Uncle and Auntie in the letter?",
          optionA: "Request to visit them",
          optionB: "Greetings and respect",
          optionC: "Invitation to a family event",
          correctAnswer: "Greetings and respect",
        },
        {
          question:
            "Where does Sonam live, and where is the letter addressed from?",
          optionA: "New Delhi",
          optionB: "Chandigarh",
          optionC: "Mumbai",
          correctAnswer: "Chandigarh",
        },
        {
          question: "How does Sonam sign off in the letter?",
          optionA: "Sincerely",
          optionB: "Regards",
          optionC: "Yours affectionate friend",
          correctAnswer: "Yours affectionate friend",
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
            question: "Sonam lives in ________, as mentioned in the letter.",
            options: ["a) Shanti Nagar", "b) Shastri Bagh", "c) Chandni Chowk"],
            answer: "b) Shastri Bagh",
          },
          {
            question:
              "Nityam borrowed Sonam's book 'General English' ________ month.",
            options: ["a) Last", "b) Next", "c) Current"],
            answer: "a) Last",
          },
          {
            question: "Sonam needs the borrowed book for upcoming ________.",
            options: [
              "a) Holidays",
              "b) Examinations",
              "c) Book Club meetings",
            ],
            answer: "b) Examinations",
          },
          {
            question:
              "In the letter, Sonam inquires about Nityam's ________ and sister.",
            options: ["a) Friends", "b) Parents", "c) Cousins"],
            answer: "b) Parents",
          },
          {
            question: "The tone of Sonam's letter is ________.",
            options: ["a) Angry", "b) Formal", "c) ________"],
            answer: "c) Affectionate",
          },
          {
            question: "Nityam borrowed the book ________ weeks ago.",
            options: ["a) Two", "b) Three", "c) Four"],
            answer: "b) Three",
          },
          {
            question: "Sonam hopes Nityam will return the book ________.",
            options: ["a) Eventually", "b) Immediately", "c) Indefinitely"],
            answer: "b) Immediately",
          },
          {
            question: "Sonam's address is ________, Chandigarh.",
            options: [
              "a) 298, Shastri Bagh",
              "b) 42, Chandni Chowk",
              "c) 7, Shanti Nagar",
            ],
            answer: "a) 298, Shastri Bagh",
          },
          {
            question:
              "The book borrowed by Nityam is titled 'General ________.'",
            options: ["a) Mathematics", "b) Science", "c) English"],
            answer: "c) English",
          },
          {
            question: "Sonam signs off the letter as 'Yours ________ friend.'",
            options: ["a) Truly", "b) Regards", "c) Affectionate"],
            answer: "c) Affectionate",
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
          question: "Sonam lives in Shastri Bagh.",
          options: ["Shastri Bagh", "Chandni Chowk"],
          answer: "Shastri Bagh",
        },
        {
          question:
            "Nityam borrowed Sonam's book 'General English' last month.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question: "Sonam needs the borrowed book for leisure reading.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question: "In the letter, Sonam inquires about Nityam's job.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question: "The tone of Sonam's letter is formal.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question: "Nityam borrowed the book three weeks ago.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question: "Sonam hopes Nityam will return the book eventually.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question: "Sonam's address is 298, Shastri Bagh, Chandigarh.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question: "The book borrowed by Nityam is titled 'General Science.'",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question: "Sonam signs off the letter as 'Yours truly friend.'",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
      ],
  };
}

export var activityData;
