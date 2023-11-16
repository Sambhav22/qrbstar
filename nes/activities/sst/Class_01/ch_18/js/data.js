export const chapter = "Chapter - 18: Rama ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who was Rama in this story?",
        optionA: "A forest dweller",
        optionB: "A prince of Ayodhya",
        optionC: "A king of Ayodhya",
        correctAnswer: "B",
      },
      {
        question: "How many queens did King Dasharatha have?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "C",
      },
      {
        question: "Who was the third queen of King Dasharatha?",
        optionA: "Sita",
        optionB: "Kaikeyi",
        optionC: "Rama",
        correctAnswer: "B",
      },
      {
        question: "What did Kaikeyi want for her son Bharata?",
        optionA: "To become a forest dweller",
        optionB: "To become the king",
        optionC: "To become a hermit",
        correctAnswer: "B",
      },
      {
        question: "How long did Rama, Sita, and Lakshmana spend in the forest?",
        optionA: "Seven years",
        optionB: "Ten years",
        optionC: "Fourteen years",
        correctAnswer: "C",
      },
      {
        question: "What did Rama, Sita, and Lakshmana do in the forest?",
        optionA: "Lived a luxurious life",
        optionB: "Served the forest people",
        optionC: "Built a palace",
        correctAnswer: "B",
      },
      {
        question:
          "What happened when Rama returned to Ayodhya after fourteen years?",
        optionA: "He became a hermit",
        optionB: "He became the king",
        optionC: "He went back to the forest",
        correctAnswer: "B",
      },
      {
        question: "What did Rama do as the king of Ayodhya?",
        optionA: "Ignored the well-being of his people",
        optionB: "Looked after the good of his people",
        optionC: "Served the forest people",
        correctAnswer: "B",
      },
      {
        question: "Why is Rama remembered by people even today?",
        optionA: "Because he became a forest dweller",
        optionB: "Because he killed many evil people in the forest",
        optionC: "Because he looked after the good of his people as a king",
        correctAnswer: "C",
      },
      {
        question: "How many brothers did Rama have in the story?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "B",
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
          "Rama was a prince of _________. He was the eldest son of King Dasharatha.",
        options: ["Delhi", "Ayodhya", "Varanasi"],
        correctAnswer: "Ayodhya",
      },
      {
        question: "King Dasharatha had three ________ and four sons.",
        options: ["Daughters", "Queens", "Princes"],
        correctAnswer: "Queens",
      },
      {
        question:
          "Kaikeyi, the third queen, wanted her son Bharata to become the king and for Rama to go to the forest for ________ years.",
        options: ["Seven", "Fourteen", "Twenty"],
        correctAnswer: "Fourteen",
      },
      {
        question:
          "Rama went to the forest with his wife ________ and brother Lakshmana.",
        options: ["Sita", "Radha", "Parvati"],
        correctAnswer: "Sita",
      },
      {
        question:
          "In the forest, Rama, Sita, and Lakshmana faced many ________.",
        options: ["Adventures", "Difficulties", "Comforts"],
        correctAnswer: "Difficulties",
      },
      {
        question:
          "Rama, Sita, and Lakshmana served the ________ people in the forest.",
        options: ["Palace", "Forest", "Village"],
        correctAnswer: "Forest",
      },
      {
        question: "Rama returned to Ayodhya after ________ years.",
        options: ["Seven", "Fourteen", "Twenty"],
        correctAnswer: "Fourteen",
      },
      {
        question: "Rama became the ________ of Ayodhya.",
        options: ["Servant", "King", "Minister"],
        correctAnswer: "King",
      },
      {
        question:
          "People remember Rama even today for looking after the ________ of his people.",
        options: ["Wealth", "Good", "Forest"],
        correctAnswer: "Good",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Rama was the youngest son of King Dasharatha.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "King Dasharatha had three queens.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Rama's wife was named Sita.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Rama, Sita, and Lakshmana spent their entire lives in the forest.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Rama returned to Ayodhya after twenty years in the forest.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Kaikeyi wanted Rama to become the king.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Rama and his companions faced no difficulties in the forest.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Rama, Sita, and Lakshmana served the forest people during their exile.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Rama looked after the well-being of his people after becoming the king.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "People remember Rama for his bad deeds even today.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
