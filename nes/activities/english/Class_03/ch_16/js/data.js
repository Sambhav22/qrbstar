export const chapter = "Chapter -16: The Tongue and the Teeth";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What was Lu known for among the other students?",
          optionA: "Having a kind heart",
          optionB: "Showing sudden rage",
          optionC: "Being a great thinker",
          correctAnswer: "Having a kind heart",
        },
        {
          question: "What was Wei's reaction when he and Lu quarreled?",
          optionA: "He pacified quickly",
          optionB: "He continued to rage in fury",
          optionC: "He ignored the matter completely",
          correctAnswer: "He continued to rage in fury",
        },
        {
          question:
            "What was Wei's concern about his body when he noticed bleeding from his mouth?",
          optionA: "He thought he was not studying enough",
          optionB: "He feared for his health and longevity",
          optionC: "He believed his village was the cause of his illness",
          correctAnswer: "He feared for his health and longevity",
        },
        {
          question:
            "According to Confucius, what was the primary cause of trouble for Wei's body?",
          optionA: "Excessive studying",
          optionB: "Intense anger",
          optionC: "Lack of physical exercise",
          correctAnswer: "Intense anger",
        },
        {
          question: "How many teeth did Wei have at his current age?",
          optionA: "Thirty-two",
          optionB: "Thirty-one",
          optionC: "Twenty-seven",
          correctAnswer: "Twenty-seven",
        },
        {
          question:
            "What did Confucius use as an analogy to explain the relationship between teeth and tongue?",
          optionA: "Hair and skin",
          optionB: "Eyes and ears",
          optionC: "Teeth and tongue",
          correctAnswer: "Teeth and tongue",
        },
        {
          question: "What was the fate of the teeth, according to Confucius?",
          optionA: "They decay first",
          optionB: "They remain strong forever",
          optionC: "They strengthen over time",
          correctAnswer: "They decay first",
        },
        {
          question:
            "What lesson did Confucius try to teach Wei through the analogy of teeth and tongue?",
          optionA: "The importance of proper dental care",
          optionB: "The value of self-control and gentleness",
          optionC: "The necessity of exercising regularly",
          correctAnswer: "The value of self-control and gentleness",
        },
        {
          question:
            "What did Confucius predict would happen to Wei if he didn't learn self-control?",
          optionA: "He would become wealthy",
          optionB: "He would become famous",
          optionC: "He would decay quickly",
          correctAnswer: "He would decay quickly",
        },
        {
          question: "How did Confucius address Wei at the end of his lesson?",
          optionA: "Affectionately",
          optionB: "Sternly",
          optionC: "Indifferently",
          correctAnswer: "Affectionately",
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
            "One day, Lu and Wei happened to quarrel over some small ________.",
          optionA: "matter",
          optionB: "thought",
          optionC: "decision",
          correctAnswer: "matter",
        },
        {
          question: "Wei noticed that he bled from his ________.",
          optionA: "hand",
          optionB: "mouth",
          optionC: "leg",
          correctAnswer: "mouth",
        },
        {
          question: "Wei was scared if he was all ________.",
          optionA: "right",
          optionB: "wrong",
          optionC: "left",
          correctAnswer: "right",
        },
        {
          question:
            "Confucius advised Wei that it was not the study, but his great ________ that caused trouble.",
          optionA: "joy",
          optionB: "anger",
          optionC: "sadness",
          correctAnswer: "anger",
        },
        {
          question: "Confucius wanted Wei to exercise ________.",
          optionA: "diligence",
          optionB: "self-control",
          optionC: "compassion",
          correctAnswer: "self-control",
        },
        {
          question:
            "Confucius used an analogy of ________ and tongue to explain a lesson to Wei.",
          optionA: "eyes",
          optionB: "teeth",
          optionC: "ears",
          correctAnswer: "teeth",
        },
        {
          question:
            "According to Confucius, the tongue is ________ and gentle with the teeth.",
          optionA: "rigid",
          optionB: "flexible",
          optionC: "brittle",
          correctAnswer: "flexible",
        },
        {
          question: "The strongest to resist is the first to ________.",
          optionA: "decay",
          optionB: "flourish",
          optionC: "survive",
          correctAnswer: "decay",
        },
        {
          question:
            "If Wei doesn't learn self-control, Confucius predicted that he would ________ quickly.",
          optionA: "prosper",
          optionB: "decay",
          optionC: "thrive",
          correctAnswer: "decay",
        },
        {
          question:
            "Confucius addressed Wei ________ at the end of his lesson.",
          optionA: "sternly",
          optionB: "indifferently",
          optionC: "affectionately",
          correctAnswer: "affectionately",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Lu was known as a peaceful man by other students.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Wei pacified quickly after his quarrel with Lu.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wei was not concerned about his health when he noticed bleeding from his mouth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to Confucius, Wei's great anger was the primary cause of trouble for his body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Confucius advised Wei to exercise self-control.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Confucius used an analogy of teeth and tongue to explain a lesson to Wei.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "According to Confucius, the tongue is rigid and gentle with the teeth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Confucius predicted that the teeth would be the first to decay.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "If Wei doesn't learn self-control, Confucius predicted that he would prosper quickly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Confucius addressed Wei sternly at the end of his lesson.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
