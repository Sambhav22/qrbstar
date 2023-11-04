export const chapter = "Chapter - 13: So Much or So Little";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What were Deepa and Ayush upset about in the beginning of the story?",
          optionA: "Their mother's strict tone.",
          optionB: "Having to play outside.",
          optionC: "Their schoolwork.",
          correctAnswer: "Their mother's strict tone.",
        },
        {
          question:
            "Why do Deepa and Ayush question the need to conserve water despite Earth's abundance of water?",
          optionA: "They believe there is a shortage of water.",
          optionB:
            "They don't understand the importance of water conservation.",
          optionC: "They think there is enough water to waste.",
          correctAnswer:
            "They don't understand the importance of water conservation.",
        },
        {
          question:
            "What percentage of water on Earth is found in the oceans and considered unsuitable for use?",
          optionA: "2%",
          optionB: "97.2%",
          optionC: "50%",
          correctAnswer: "97.2%",
        },
        {
          question:
            "Which type of water is primarily suitable for human use and consumption, according to Kunal's explanation?",
          optionA: "Seawater",
          optionB: "Groundwater",
          optionC: "Ice at the poles",
          correctAnswer: "Groundwater",
        },
        {
          question:
            "What is the term for water that is available for human use, accounting for less than 1% of Earth's water?",
          optionA: "Saline water",
          optionB: "Freshwater",
          optionC: "Seawater",
          correctAnswer: "Freshwater",
        },
        {
          question:
            "What does Kunal say is the issue with freshwater bodies being polluted?",
          optionA: "They become salty.",
          optionB: "They overflow.",
          optionC: "They get dirty and polluted.",
          correctAnswer: "They get dirty and polluted.",
        },
        {
          question:
            "How do factories contribute to the pollution of freshwater bodies?",
          optionA: "They purify the water.",
          optionB:
            "They dispose of their waste in freshwater rivers and lakes.",
          optionC: "They provide clean water to communities.",
          correctAnswer:
            "They dispose of their waste in freshwater rivers and lakes.",
        },
        {
          question:
            "What do Deepa and Ayush decide to do after understanding the importance of water conservation?",
          optionA: "Play outside.",
          optionB: "Draw a poster for water conservation.",
          optionC: "Conserve water in their own way.",
          correctAnswer: "Draw a poster for water conservation.",
        },
        {
          question:
            "Which water cycle does Kunal mention that helps in cleaning water?",
          optionA: "The water filtration cycle.",
          optionB: "The Earth's purification cycle.",
          optionC: "The nature's water cycle.",
          correctAnswer: "The nature's water cycle.",
        },
        {
          question:
            "What do Deepa, Ayush, and Kunal take an oath to do at the end of the story?",
          optionA: "Waste water.",
          optionB: "Conserve water.",
          optionC: "Pollute water.",
          correctAnswer: "Conserve water.",
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
          question: "______ is a new disease caused by a virus.",
          options: ["Influenza", "COVID-19", "Malaria"],
          correctAnswer: "COVID-19",
        },
        {
          question: "Most diseases arise because people are not ______.",
          options: ["Active", "Careful", "Knowledgeable"],
          correctAnswer: "Careful",
        },
        {
          question:
            "Regular handwashing with soap, keeping nails and hair ______, and wearing clean clothes are simple ways to maintain ______.",
          options: ["Long, fitness", "Short, hygiene", "Clean, health"],
          correctAnswer: "Short, hygiene",
        },
        {
          question:
            "Physical exercise can include activities like running, playing games, and practicing ______.",
          options: ["Yoga", "Martial arts", "Singing"],
          correctAnswer: "Yoga",
        },
        {
          question:
            "Snacks sold in the market are not good for your health because they often contain excessive ______ and ______.",
          options: ["Sugar, salt", "Fiber, vitamins", "Protein, antioxidants"],
          correctAnswer: "Sugar, salt",
        },
        {
          question:
            "It is good to sleep early and rise early as it gives rest to the body and the ______.",
          options: ["Mind", "Muscles", "Stomach"],
          correctAnswer: "Mind",
        },
        {
          question:
            "Apart from sleeping, ______, reading, and playing games are mentioned as methods to take a rest.",
          options: ["Studying", "Exercising", "Thinking"],
          correctAnswer: "Thinking",
        },
        {
          question:
            "According to the text, maintaining cleanliness is essential because a large number of diseases are caused due to ______.",
          options: ["Negligence", "Dirtiness", "Poor diet"],
          correctAnswer: "Dirtiness",
        },
        {
          question:
            "The text emphasizes the value of true ______ and selflessness.",
          options: ["Wealth", "Friendship", "Power"],
          correctAnswer: "Friendship",
        },
        {
          question:
            "Deepa and Ayush wanted to protest against Mummy, but they had checked themselves seeing her ____ mood.",
          options: ["Sore", "Happy", "Calm"],
          correctAnswer: "Sore",
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
          question: "The disease mentioned in the text is caused by a virus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Maintaining cleanliness is not essential for preventing diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The text recommends eating snacks from the market for a healthy diet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Physical exercise can include activities like running and playing games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "It is essential to wash your hands with soap when entering the house from outside.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The text suggests that sleeping late and rising late is beneficial for health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Snacks are considered good for health because they are tasty to eat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Maintaining hygiene can help keep diseases away.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "According to the text, thinking is a method to take a rest for the brain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
