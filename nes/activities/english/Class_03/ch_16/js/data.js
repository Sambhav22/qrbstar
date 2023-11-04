export const chapter = "Chapter - 16: The Tongue and the Teeth";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Who was Confucius?",
          optionA: "A student of Lu",
          optionB: "A great thinker and teacher of China",
          optionC: "Wei's father",
          correctAnswer: "A great thinker and teacher of China",
        },
        {
          question:
            "Which one of Confucius's pupils was known for their gentle nature and peaceful demeanor?",
          optionA: "Lu",
          optionB: "Wei",
          optionC: "Both Lu and Wei",
          correctAnswer: "Lu",
        },
        {
          question: "What was a notable characteristic of Wei's temperament?",
          optionA: "He was gentle and peaceful",
          optionB: "He had a good brain",
          optionC: "He had a quick temper",
          correctAnswer: "He had a quick temper",
        },
        {
          question: "How did Lu react after his quarrel with Wei?",
          optionA: "He felt bad and raged in fury",
          optionB: "He pacified after a while",
          optionC: "He went to Confucius for advice",
          correctAnswer: "He pacified after a while",
        },
        {
          question:
            "Why did Wei visit Confucius with concerns about his health?",
          optionA: "He had a headache",
          optionB: "He bled from his mouth",
          optionC: "He wanted to abandon his studies",
          correctAnswer: "He bled from his mouth",
        },
        {
          question: "What did Confucius attribute Wei's health issue to?",
          optionA: "Overstudy and excessive work",
          optionB: "Great anger",
          optionC: "Lack of physical exercise",
          correctAnswer: "Great anger",
        },
        {
          question:
            "How many pupils were there in the school where Wei and Lu studied?",
          optionA: "100",
          optionB: "500",
          optionC: "1000",
          correctAnswer: "1000",
        },
        {
          question:
            "According to Confucius, why did Wei need to exercise self-control?",
          optionA: "Because he had too many friends",
          optionB: "Because he had lost teeth",
          optionC: "Because his anger was a significant problem",
          correctAnswer: "Because his anger was a significant problem",
        },
        {
          question:
            "What comparison did Confucius make between teeth and the tongue?",
          optionA: "Teeth are stronger but less useful",
          optionB: "The tongue is stronger and more important",
          optionC: "Teeth and the tongue are equally strong",
          correctAnswer: "Teeth are stronger but less useful",
        },
        {
          question: "What lesson did Confucius teach Wei about self-control?",
          optionA: "The tongue should be more like teeth",
          optionB: "The teeth should be more like the tongue",
          optionC: "The tongue and teeth should always fight each other",
          correctAnswer: "The teeth should be more like the tongue",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question: "Confucius was a great thinker and teacher of ___________.",
          options: ["India", "China", "Japan"],
          correctAnswer: "China",
        },
        {
          question:
            "One of Confucius's pupils, Lu, was known for his gentle nature and was considered a ___________ man by other students.",
          options: ["Peaceful", "Aggressive", "Intelligent"],
          correctAnswer: "Peaceful",
        },
        {
          question:
            "Wei, another pupil of Confucius, had a good brain and a kind heart, but he was given to great ___________.",
          options: ["Generosity", "Joy", "Anger"],
          correctAnswer: "Anger",
        },
        {
          question:
            "Wei noticed that he bled from his ___________ after his quarrel with Lu.",
          options: ["Eyes", "Ears", "Mouth"],
          correctAnswer: "Mouth",
        },
        {
          question:
            "Confucius told Wei that the trouble with his body was not due to study or work but his great ___________.",
          options: ["Intelligence", "Anger", "Kindness"],
          correctAnswer: "Anger",
        },
        {
          question:
            "Confucius mentioned that Wei could not expect to live long if he continued to have frequent fits of ___________.",
          options: ["Laughter", "Temper", "Joy"],
          correctAnswer: "Temper",
        },
        {
          question:
            "Confucius asked Wei how many teeth he had, and Wei replied that he had ___________ teeth.",
          options: ["20", "32", "40"],
          correctAnswer: "32",
        },
        {
          question:
            "According to Confucius, Wei's teeth were strong and had a tendency to ___________ everything.",
          options: ["Protect", "Crush", "Hide"],
          correctAnswer: "Crush",
        },
        {
          question:
            "Confucius explained that while the teeth may be strong, they are the first to ___________.",
          options: ["Grow", "Endure", "Decay"],
          correctAnswer: "Decay",
        },
        {
          question:
            "To live long and happily, Confucius advised Wei to learn the great lesson of ___________.",
          options: ["Wisdom", "Self-control", "Patience"],
          correctAnswer: "Self-control",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "Confucius had several pupils.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Lu was known for his aggressive nature.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Wei was known for his good brain and kind heart.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Wei's anger caused him health issues.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Lu and Wei never had any disagreements.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Confucius advised Wei to abandon his studies and return to his village.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Wei had 40 teeth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "According to Confucius, teeth are the first to decay.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Wei's anger led to a fit of temper one thousand times in a year.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Confucius encouraged Wei to learn the lesson of patience.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
