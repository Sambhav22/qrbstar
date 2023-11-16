export const chapter = "Chapter - 15: First War of Independence ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What was the immediate cause of the Revolt of 1857?",
            options: [
              "Introduction of the Enfield rifle",
              "The British suppression of Indian culture",
              "Economic exploitation by the British",
            ],
            answer: "Introduction of the Enfield rifle",
          },
          {
            question:
              "Which city did the Indian rebels capture, making Bahadur Shah II the proclaimed emperor?",
            options: ["Delhi", "Kanpur", "Lucknow"],
            answer: "Delhi",
          },
          {
            question: "Who led the revolt in Kanpur during the Revolt of 1857?",
            options: ["Nana Saheb", "Rani Laxmi Bai", "Hazrat Mahal"],
            answer: "Nana Saheb",
          },
          {
            question:
              "What was the policy that allowed the British to take over Indian kingdoms if a king died without an heir?",
            options: [
              "Doctrine of Lapse",
              "Policy of Annexation",
              "Raj Doctrine",
            ],
            answer: "Doctrine of Lapse",
          },
          {
            question:
              "What was the first factory set up by the East India Company in India?",
            options: ["Madras", "Surat", "Calcutta"],
            answer: "Surat",
          },
          {
            question:
              "What industry in India suffered due to the British's import of mill-made clothes?",
            options: ["Textile", "Spices", "Agriculture"],
            answer: "Textile",
          },
          {
            question:
              "Who was the Mughal emperor who gave the East India Company permission to trade in India?",
            options: ["Jahangir", "Akbar", "Aurangzeb"],
            answer: "Jahangir",
          },
          {
            question:
              "What policy did the British adopt to keep Hindus and Muslims divided in India?",
            options: [
              "Divide and Conquer",
              "Divide and Rule",
              "Divide and Share",
            ],
            answer: "Divide and Rule",
          },
          {
            question:
              "Which event is also known as the first war of independence in Indian history?",
            options: ["Sepoy Mutiny", "The Great Rebellion", "Revolt of 1857"],
            answer: "Revolt of 1857",
          },
          {
            question:
              "What was the primary reason for the failure of the Revolt of 1857?",
            options: [
              "Lack of leadership",
              "Lack of a common cause",
              "Lack of resources",
            ],
            answer: "Lack of a common cause",
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
        question:
          "The British introduced the new Enfield rifle and the greased cartridge, which was believed to be made from the fats of cows and pigs. This practice was objectionable to both _______ and _______.",
        options: ["Hindus, Sikhs", "Hindus, Buddhists", "Hindus, Muslims"],
        correctAnswer: "Hindus, Muslims",
      },
      {
        question:
          "The immediate cause of the Revolt of 1857 was the introduction of the new _______ and the greased _______.",
        options: [
          "Artillery, ammunition",
          "Enfield rifle, uniform",
          "Enfield rifle, cartridge",
        ],
        correctAnswer: "Enfield rifle, cartridge",
      },
      {
        question:
          "During the Revolt of 1857, the Indian rebels captured _______ and proclaimed Bahadur Shah II as the emperor of India.",
        options: ["Kanpur", "Delhi", "Lucknow"],
        correctAnswer: "Delhi",
      },
      {
        question:
          "In Kanpur, Nana Saheb led the revolt, declaring himself the _______ and governor of Bahadur Shah. Tantya Tope played a crucial role in the fighting.",
        options: ["Peshwa", "Viceroy", "Emperor"],
        correctAnswer: "Peshwa",
      },
      {
        question:
          "The British adopted the policy of _______ to exploit the lack of unity among the Indian rulers. They supported one king against the other and signed treaties with those who accepted British _______.",
        options: [
          "Divide and Conquer, dominance",
          "Divide and Rule, supremacy",
          "United Front, rule",
        ],
        correctAnswer: "Divide and Rule, supremacy",
      },
      {
        question:
          "The British forced the Indian farmers to grow indigo, a plant used to produce a blue dye. This dye was exported to _______ and purchased from Indian farmers at a very low cost, causing farmers to suffer from _______.",
        options: ["Africa, prosperity", "China, poverty", "England, poverty"],
        correctAnswer: "England, poverty",
      },
      {
        question:
          "The British also affected the Indian _______ industry by importing mill-made clothes. This led to the loss of jobs for many Indian _______.",
        options: [
          "Textile, farmers",
          "Agriculture, traders",
          "Spices, weavers",
        ],
        correctAnswer: "Textile, weavers",
      },
      {
        question:
          "The British policy known as the Doctrine of Lapse allowed them to take over Indian kingdoms if a king died without a _______.",
        options: ["Heir", "Child", "Queen"],
        correctAnswer: "Child",
      },
      {
        question:
          "The revolt of 1857 was poorly organized and lacked coordinated planning among the _______.",
        options: ["Leaders", "British officials", "Peasants"],
        correctAnswer: "Leaders",
      },
      {
        question:
          "The British brutally suppressed the revolt of 1857, using excessive force. They hanged, shot, and even tied people to cannons and blew them off as a means of _______.",
        options: ["Defense", "Retribution", "Communication"],
        correctAnswer: "Retribution",
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
          "The British introduced the new Enfield rifle, which was a significant cause of the Revolt of 1857.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Nana Saheb declared himself the Peshwa and governor of Bahadur Shah in Kanpur during the Revolt of 1857.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Doctrine of Lapse was a British policy that allowed them to take over Indian kingdoms if a king died without an heir.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Indian farmers were forced to grow indigo by the British, leading to their economic prosperity.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The British exploited the Indian textile industry by importing mill-made clothes.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Revolt of 1857 was well-organized and had coordinated planning among its leaders.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The British suppression of Indian culture was a significant cause of the Revolt of 1857.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The British supported Indian unity and encouraged cooperation among different Indian rulers.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The Revolt of 1857 is also known as the Sepoy Mutiny.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Revolt of 1857 led to significant changes in British policies and administration in India.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
