export const chapter = "Chapter - 24: Essay Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "On which date is Republic Day celebrated in India?",
          optionA: "15 August",
          optionB: "26 January",
          optionC: "2 October",
          correctAnswer: "26 January",
        },
        {
          question:
            "Who hoisted the National Flag during the Republic Day celebration at the school?",
          optionA: "The Prime Minister",
          optionB: "The District Judge",
          optionC: "The President",
          correctAnswer: "The District Judge",
        },
        {
          question:
            "What is the theme of most cultural presentations during Republic Day celebrations?",
          optionA: "Romantic",
          optionB: "Patriotic",
          optionC: "Comedic",
          correctAnswer: "Patriotic",
        },
        {
          question: "Which animal is described as small, faithful, and useful?",
          optionA: "Cat",
          optionB: "Dog",
          optionC: "Rabbit",
          correctAnswer: "Dog",
        },
        {
          question: "What does a dog typically eat?",
          optionA: "Grass",
          optionB: "Bones",
          optionC: "Fruits",
          correctAnswer: "Bones",
        },
        {
          question: "Which sense is particularly sharp in dogs?",
          optionA: "Taste",
          optionB: "Touch",
          optionC: "Smell",
          correctAnswer: "Smell",
        },
        {
          question:
            "What type of exercise is recommended for those who sit all day?",
          optionA: "Swimming",
          optionB: "Gymnastics",
          optionC: "Walking",
          correctAnswer: "Walking",
        },
        {
          question:
            "What is mentioned as one of the best exercises for overall muscle engagement?",
          optionA: "Swimming",
          optionB: "Football",
          optionC: "Riding",
          correctAnswer: "Swimming",
        },
        {
          question:
            "Who benefits from daily exercise according to the passage?",
          optionA: "Ploughmen",
          optionB: "Coolies",
          optionC: "Clerks",
          correctAnswer: "Clerks",
        },
        {
          question:
            "What is highlighted as a potential consequence of not engaging in physical exercise?",
          optionA: "Weakness and obesity",
          optionB: "Increased energy levels",
          optionC: "Improved mental health",
          correctAnswer: "Weakness and obesity",
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
            "Republic Day is celebrated in India on ________ every year.",
          options: ["15 August", "26 January", "2 October"],
          correctAnswer: "26 January",
        },
        {
          question: "The Constitution of India came into force on ________.",
          options: ["15 August", "26 January", "2 October"],
          correctAnswer: "26 January",
        },
        {
          question:
            "Republic Day celebrations in the school were held in the ________.",
          options: ["classroom", "playground", "auditorium"],
          correctAnswer: "playground",
        },
        {
          question:
            "The ________ was the Chief Guest at the Republic Day celebration in the school.",
          options: ["Prime Minister", "President", "District Judge"],
          correctAnswer: "District Judge",
        },
        {
          question:
            "A dog has ________ legs, two eyes, a pair of large ears, and a curly tail.",
          options: ["three", "four", "two"],
          correctAnswer: "four",
        },
        {
          question: "Dogs like to chew ________ for long.",
          options: ["toys", "bones", "sticks"],
          correctAnswer: "bones",
        },
        {
          question:
            "Dogs start to bark if they find a ________ entering their master's house.",
          options: ["friend", "stranger", "family member"],
          correctAnswer: "stranger",
        },
        {
          question: "Physical exercise is necessary for ________.",
          options: ["wealth", "health", "happiness"],
          correctAnswer: "health",
        },
        {
          question:
            "Playing outdoor games like football, hockey, and cricket are good forms of ________.",
          options: ["exercise", "relaxation", "entertainment"],
          correctAnswer: "exercise",
        },
        {
          question:
            "Swimming is considered one of the best exercises because it exercises ________.",
          options: [
            "only the arms",
            "only the legs",
            "all the muscles of the body",
          ],
          correctAnswer: "all the muscles of the body",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Republic Day is celebrated on 26 January every year.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Dogs have two pairs of large ears.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The Constitution of India came into force on 15 August.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Physical exercise is not necessary for maintaining good health.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Dogs eat both meat and milk.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Swimming exercises only the arms.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Republic Day celebrations usually take place in the classroom.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Dogs can be trained to hunt animals and chase thieves.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Daily exercise is recommended only for certain professions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Football, hockey, and cricket are not considered forms of exercise.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
