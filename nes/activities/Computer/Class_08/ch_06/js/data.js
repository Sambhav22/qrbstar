export const chapter = "Chapter - 6: The First War of Independence, 18S7 ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What event marked the opportunity for a massive uprising against the East India Company in 1857?",
        optionA: "The Battle of Plassey",
        optionB: "The introduction of the Enfield rifle",
        optionC: "The annexation of Awadh",
        correctAnswer: "B. The introduction of the Enfield rifle",
      },
      {
        question:
          "Which religious groups joined the revolts against the British, feeling dissatisfied with certain laws?",
        optionA: "Sikhs and Hindus",
        optionB: "Sanyasis, Wahabis, and Faqirs",
        optionC: "Buddhists and Jains",
        correctAnswer: "B. Sanyasis, Wahabis, and Faqirs",
      },
      {
        question: "What was the immediate cause of the uprising in 1857?",
        optionA: "The introduction of English education",
        optionB: "The use of the Enfield rifle cartridges",
        optionC: "Economic policies of the British",
        correctAnswer: "B. The use of the Enfield rifle cartridges",
      },
      {
        question: "What role did Nana Sahib play in the uprising of 1857?",
        optionA: "He led the revolt in Kanpur",
        optionB: "He was a British sympathizer",
        optionC: "He was a British general",
        correctAnswer: "A. He led the revolt in Kanpur",
      },
      {
        question:
          "Who was appointed as the Emperor of India by the Indian sepoys during the uprising?",
        optionA: "Bahadur Shah Zafar",
        optionB: "Tantya Tope",
        optionC: "Rani Lakshmi Bai",
        correctAnswer: "A. Bahadur Shah Zafar",
      },
      {
        question:
          "What was the primary reason for the failure of the uprising in 1857?",
        optionA: "Lack of leadership",
        optionB: "Lack of popular support",
        optionC: "Lack of modern weapons",
        correctAnswer: "A. Lack of leadership",
      },
      {
        question:
          "How did the British government react to the uprising in 1857?",
        optionA: "They granted amnesty to all rebels",
        optionB: "They intensified the policy of 'divide and rule'",
        optionC: "They immediately withdrew from India",
        correctAnswer: "B. They intensified the policy of 'divide and rule'",
      },
      {
        question:
          "Who became the first Viceroy of India after the British government took over direct administration?",
        optionA: "Lord Canning",
        optionB: "Lord Mountbatten",
        optionC: "Lord Curzon",
        correctAnswer: "A. Lord Canning",
      },
      {
        question:
          "What important consequence did the uprising of 1857 have on India's future?",
        optionA: "It led to the immediate attainment of independence.",
        optionB: "It initiated the national movement for freedom.",
        optionC: "It resulted in the re-establishment of the Mughal Empire.",
        correctAnswer: "B. It initiated the national movement for freedom.",
      },
      {
        question:
          "What role did the vernacular and English press play during the uprising of 1857?",
        optionA: "They favored strong action against the rebels.",
        optionB: "They reported events impartially.",
        optionC: "They didn't play any role in covering the events.",
        correctAnswer: "B. They reported events impartially.",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "______ games are played inside the homes.",
        optionA: "Indoor",
        optionB: "Outdoor",
        optionC: "Recreational",
        correctAnswer: "A. Indoor",
      },
      {
        question: "______ games are played outside the homes.",
        optionA: "Board",
        optionB: "Indoor",
        optionC: "Outdoor",
        correctAnswer: "C. Outdoor",
      },
      {
        question:
          "______ equipment are kept in schools to promote sports among students.",
        optionA: "Playground",
        optionB: "Sports",
        optionC: "Classroom",
        correctAnswer: "B. Sports",
      },
      {
        question: "Kabaddi is popular in _____",
        optionA: "Mexico",
        optionB: "India",
        optionC: "Australia",
        correctAnswer: "B. India",
      },
      {
        question: "Sports bring the best out of the _____",
        optionA: "competitors",
        optionB: "spectators",
        optionC: "referees",
        correctAnswer: "A. competitors",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Games played in schools are technical and hard to play.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The materials which are required to play are sports equipment.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Games do not develop discipline in children.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Students get training of sports in school.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Rules are essential to play a game.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
