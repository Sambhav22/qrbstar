export const chapter =
  "Chapter - 7: New Ideas : Upanishads , jainism , Buddhism ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What were the primary sources of the new ideas in religion, as mentioned in the text?",
        optionA: "Yajna rituals",
        optionB: "Upanishads, Jainism, and Buddhism",
        optionC: "Expensive rituals",
        correctAnswer: "Upanishads, Jainism, and Buddhism",
      },
      {
        question:
          "Which of the following is NOT one of the Upanishadic philosophies mentioned in the text?",
        optionA: "Vaishesika",
        optionB: "Nyaya",
        optionC: "Jainism",
        correctAnswer: "Jainism",
      },
      {
        question: "The Upanishads are considered the latter part of the:",
        optionA: "Vedic literature",
        optionB: "Jain scriptures",
        optionC: "Buddhist teachings",
        correctAnswer: "Vedic literature",
      },
      {
        question: "What is the ultimate goal of life in Upanishadic thought?",
        optionA: "Material wealth",
        optionB: "Liberation (Moksha)",
        optionC: "Reincarnation",
        correctAnswer: "Liberation (Moksha)",
      },
      {
        question: "Who is considered the founder of Jainism?",
        optionA: "Gautam Buddha",
        optionB: "Mahavira",
        optionC: "Siddhartha",
        correctAnswer: "Mahavira",
      },
      {
        question:
          "Which of the following are the three gems (Triratnas) of Jainism, as mentioned in the text?",
        optionA: "Right Faith, Right Conduct, Right Knowledge",
        optionB: "Right Faith, Right Actions, Right Desires",
        optionC: "Right Prayer, Right Meditation, Right Fasting",
        correctAnswer: "Right Faith, Right Conduct, Right Knowledge",
      },
      {
        question: "Gautam Buddha attained enlightenment under a:",
        optionA: "Banyan tree",
        optionB: "Peepal tree",
        optionC: "Oak tree",
        correctAnswer: "Peepal tree",
      },
      {
        question:
          "What are the Four Noble Truths of Buddhism, as mentioned in the text?",
        optionA:
          "The world has sufferings, we can overcome misery and sorrow by getting rid of desire, the cause of suffering is desire, desire can be banished by following the Noble Eight-fold Path",
        optionB:
          "The world is full of happiness, we can attain happiness by accumulating wealth, the cause of happiness is material success, material success can be achieved by pursuing desire",
        optionC:
          "The world has no meaning, we should not desire anything, the cause of suffering is life itself, life can be banished by leaving society",
        correctAnswer:
          "The world has sufferings, we can overcome misery and sorrow by getting rid of desire, the cause of suffering is desire, desire can be banished by following the Noble Eight-fold Path",
      },
      {
        question:
          "What are the two major sects of Buddhism mentioned in the text?",
        optionA: "Shvetambaras and Digambaras",
        optionB: "Theravada and Mahayana",
        optionC: "Jainism and Hinduism",
        correctAnswer: "Theravada and Mahayana",
      },
      {
        question: "What are the three parts of Buddhist texts known as?",
        optionA: "Vinaya Pitaka, Sukta Pitaka, and Adhidhamma Pitaka",
        optionB: "Vedas, Upanishads, and Puranas",
        optionC: "Bhagavad Gita, Ramayana, and Mahabharata",
        correctAnswer: "Vinaya Pitaka, Sukta Pitaka, and Adhidhamma Pitaka",
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
          "The Upanishads are considered the latter part of the ________.",
        options: ["Vedic literature", "Jain scriptures", "Buddhist teachings"],
        correctAnswer: "Vedic literature",
      },
      {
        question:
          "Mahavira, the founder of Jainism, wandered from place to place for ________ years in search of true knowledge.",
        options: ["5", "10", "12"],
        correctAnswer: "12",
      },
      {
        question:
          "Gautam Buddha attained enlightenment under a ________ tree at the age of ________.",
        options: ["Banyan, 29", "Peepal, 35", "Oak, 40"],
        correctAnswer: "Peepal, 35",
      },
      {
        question:
          "The Four Noble Truths of Buddhism state that the world has ________, and we can overcome misery and sorrow by getting rid of ________.",
        options: [
          "happiness, desire",
          "sufferings, attachment",
          "peace, ignorance",
        ],
        correctAnswer: "sufferings, attachment",
      },
      {
        question:
          "Jain monks who went door to door in nearby villages and towns begging for food were called ________.",
        options: ["Monsoons", "Bhikshus", "Vedantins"],
        correctAnswer: "Bhikshus",
      },
      {
        question:
          "The primary reason for the destruction of wildlife in the prairies is ________ and ________ for farming.",
        options: [
          "pollution, climate change",
          "game hunting, clearing",
          "natural disasters, habitat loss",
        ],
        correctAnswer: "game hunting, clearing",
      },
      {
        question:
          "Two centuries after Mahavira, the Jains were divided into two groups or sects: ________ and ________.",
        options: [
          "Shvetambaras, Hindus",
          "Digambaras, Vaishnavas",
          "Mahayana, Theravada",
        ],
        correctAnswer: "Digambaras, Vaishnavas",
      },
      {
        question:
          "The word 'sangha' means a ________ or association, and both Buddhist and Jain monks abandoned homes to form sanghas.",
        options: ["monastery", "union", "cave"],
        correctAnswer: "union",
      },
      {
        question:
          "The universities at Taxila, Nalanda, and Vikramshila were places where scholars and students came to study ________.",
        options: ["Hinduism", "Buddhism", "Jainism"],
        correctAnswer: "Buddhism",
      },
      {
        question:
          "The Buddha's teachings are contained in the Four Noble Truths and the Noble Eight-fold ________.",
        options: ["Path", "Doctrine", "Vow"],
        correctAnswer: "Path",
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
          "The Upanishads are based on the Vedas and are known as theist philosophies.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Jainism and Buddhism are considered theist philosophies.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The ultimate goal of life in Upanishadic thought is material wealth.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Mahavira, the founder of Jainism, was born in the 6th century BC.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Right Conduct is one of the three gems (Triratnas) of Jainism.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Gautam Buddha founded Hinduism.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Buddhism spread in the kingdoms of Magadha and Koshala.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Noble Eight-fold Path consists of eight principles, including Right View and Right Effort.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Both Buddhist and Jain monks formed associations called sanghas and allowed people from all castes and classes to join them.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The prairies are located near the Pacific Coast.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
