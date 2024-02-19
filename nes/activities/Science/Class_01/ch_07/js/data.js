export const chapter = "Chapter - 7: OUR BASIC NEEDS ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are the three basic needs mentioned in the text?",
          optionA: "Water, air, and sunlight",
          optionB: "Food, clothes, and house",
          optionC: "Electricity, transportation, and education",
          correctAnswer: "Food, clothes, and house",
        },
        {
          question: "Where do we get food from, according to the text?",
          optionA: "Only from animals",
          optionB: "Only from plants",
          optionC: "Both from plants and animals",
          correctAnswer: "Both from plants and animals",
        },
        {
          question: "Why do we need clothes, as mentioned in the text?",
          optionA: "To show off fashion",
          optionB: "To protect from heat, cold, wind, and rain",
          optionC: "Only for special occasions",
          correctAnswer: "To protect from heat, cold, wind, and rain",
        },
        {
          question:
            "What types of clothes are suggested for summer in the text?",
          optionA: "Woollen clothes",
          optionB: "Cotton clothes",
          optionC: "Silk clothes",
          correctAnswer: "Cotton clothes",
        },
        {
          question: "Why do we need a house, according to the text?",
          optionA: "For socializing",
          optionB: "To protect from various elements and threats",
          optionC: "Only for sleeping",
          correctAnswer: "To protect from various elements and threats",
        },
        {
          question:
            "What is the purpose of a kitchen in a house, as mentioned in the text?",
          optionA: "To sleep",
          optionB: "To cook food",
          optionC: "To take a bath",
          correctAnswer: "To cook food",
        },
        {
          question: "Which room in a house is mentioned for receiving guests?",
          optionA: "Kitchen",
          optionB: "Bedroom",
          optionC: "Drawing room",
          correctAnswer: "Drawing room",
        },
        {
          question:
            "What does a bathroom in a house provide, according to the text?",
          optionA: "A place to cook",
          optionB: "A place to sleep",
          optionC: "A place to take a bath",
          correctAnswer: "A place to take a bath",
        },
        {
          question:
            "In which season are woollen clothes recommended in the text?",
          optionA: "Summer",
          optionB: "Winter",
          optionC: "Spring",
          correctAnswer: "Winter",
        },
        {
          question: "According to the text, what does food provide us with?",
          optionA: "Entertainment",
          optionB: "Energy to work and play",
          optionC: "Only nutrients",
          correctAnswer: "Energy to work and play",
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
          question:
            "We need __________ to live and grow. It gives us energy to work and play. We get food from two sources: plants and animals.",
          optionA: "Water",
          optionB: "Food",
          optionC: "Air",
          correctAnswer: "Food",
        },
        {
          question:
            "We wear different types of clothes in different seasons. For example, cotton clothes are recommended in __________.",
          optionA: "Summer",
          optionB: "Winter",
          optionC: "Spring",
          correctAnswer: "Summer",
        },
        {
          question:
            "A house protects us from heat, cold, wind, rain, animals, and thieves. It has a __________ to cook food.",
          optionA: "Bathroom",
          optionB: "Kitchen",
          optionC: "Bedroom",
          correctAnswer: "Kitchen",
        },
        {
          question:
            "We need __________ to wear or cover our body. Clothes protect us from heat, cold, wind, and rain.",
          optionA: "Food",
          optionB: "Air",
          optionC: "Clothes",
          correctAnswer: "Clothes",
        },
        {
          question: "A house has a drawing room to __________ guests.",
          optionA: "Sleep",
          optionB: "Cook",
          optionC: "Receive",
          correctAnswer: "Receive",
        },
        {
          question: "Woollen clothes are recommended in __________.",
          optionA: "Summer",
          optionB: "Winter",
          optionC: "Spring",
          correctAnswer: "Winter",
        },
        {
          question: "We get food from two sources: plants and __________.",
          optionA: "Air",
          optionB: "Water",
          optionC: "Animals",
          correctAnswer: "Animals",
        },
        {
          question: "A house protects us from __________ and thieves.",
          optionA: "Friends",
          optionB: "Heat",
          optionC: "Entertainment",
          correctAnswer: "Heat",
        },
        {
          question: "Clothes protect us from heat, cold, wind, and __________.",
          optionA: "Rain",
          optionB: "Animals",
          optionC: "Sunlight",
          correctAnswer: "Rain",
        },
        {
          question: "The purpose of a bathroom in a house is to __________.",
          optionA: "Cook food",
          optionB: "Take a bath",
          optionC: "Sleep",
          correctAnswer: "Take a bath",
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
          question: "Plants are not a source of food for humans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Clothes are only worn for fashion purposes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A bathroom in a house is primarily for cooking.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Woollen clothes are recommended for summer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A drawing room in a house is meant for sleeping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Houses protect us from various elements but not from thieves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Food provides energy for work and play but not for growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Cotton clothes are recommended for winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Kitchens in houses are meant for sleeping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The main purpose of clothes is to show off fashion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
