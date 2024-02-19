export const chapter = "Chapter - 10: Games for All ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the main purpose of playing games according to the text?",
          optionA: "Entertainment",
          optionB: "Education",
          optionC: "Recreation",
          correctAnswer: "Recreation",
        },
        {
          question: "Which type of games is mentioned in the text?",
          optionA: "Cooking games",
          optionB: "Adventure sports",
          optionC: "Board games",
          correctAnswer: "Adventure sports",
        },
        {
          question: "Why is National Sports Day celebrated in India?",
          optionA: "To honor a legendary cricket player",
          optionB: "To honor Major Dhyan Chand",
          optionC: "To promote video games",
          correctAnswer: "To honor Major Dhyan Chand",
        },
        {
          question:
            "What skills can be improved by playing games according to the text?",
          optionA: "Cooking skills",
          optionB: "Time management, teamwork, leadership",
          optionC: "Artistic skills",
          correctAnswer: "Time management, teamwork, leadership",
        },
        {
          question:
            "Which date is mentioned as National Sports Day in the text?",
          optionA: "29th August",
          optionB: "1st July",
          optionC: "15th October",
          correctAnswer: "29th August",
        },
        {
          question:
            "According to the text, what type of player is Major Dhyan Chand?",
          optionA: "Football player",
          optionB: "Hockey player",
          optionC: "Cricket player",
          correctAnswer: "Hockey player",
        },
        {
          question: "What benefits does playing games bring to our health?",
          optionA: "Mental wellness",
          optionB: "Physical fitness",
          optionC: "Both a and b",
          correctAnswer: "Both a and b",
        },
        {
          question: "What does the text mention as types of games?",
          optionA: "Only video games",
          optionB: "Adventure sports, puzzles, cultural games, etc.",
          optionC: "Only board games",
          correctAnswer: "Adventure sports, puzzles, cultural games, etc.",
        },
        {
          question:
            "Which of the following is NOT mentioned as a skill improved by playing games?",
          optionA: "Problem-solving",
          optionB: "Time management",
          optionC: "Cooking skills",
          correctAnswer: "Cooking skills",
        },
        {
          question: "Why is Major Dhyan Chand honored on National Sports Day?",
          optionA: "He was a famous cricketer",
          optionB: "He contributed to the development of video games",
          optionC: "He was a legendary hockey player",
          correctAnswer: "He was a legendary hockey player",
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
            "Playing games helps in keeping our body _______ and free from disease or illness.",
          optionA: "Weak",
          optionB: "Active",
          optionC: "Lazy",
          correctAnswer: "Active",
        },
        {
          question:
            "National Sports Day in India is celebrated to honor the legendary hockey player Major _______ Chand.",
          optionA: "Balbir",
          optionB: "Dhyan",
          optionC: "Sardar",
          correctAnswer: "Dhyan",
        },
        {
          question:
            "Games not only improve our health but also boost certain skills like time _______.",
          optionA: "Loss",
          optionB: "Management",
          optionC: "Travel",
          correctAnswer: "Management",
        },
        {
          question:
            "Today is the _______ of August, and we are going to celebrate National Sports Day at school.",
          optionA: "29th",
          optionB: "19th",
          optionC: "9th",
          correctAnswer: "29th",
        },
        {
          question:
            "There are many types of games, including video games, adventure sports, puzzles, and _______ games.",
          optionA: "Cultural",
          optionB: "Cooking",
          optionC: "Educational",
          correctAnswer: "Cultural",
        },
        {
          question: "Playing games helps us to remain _______ and smart.",
          optionA: "Lazy",
          optionB: "Active",
          optionC: "Unfit",
          correctAnswer: "Active",
        },
        {
          question:
            "National Sports Day is celebrated every year in India to honor Major Dhyan Chand's contribution to the sport of _______.",
          optionA: "Football",
          optionB: "Cricket",
          optionC: "Hockey",
          correctAnswer: "Hockey",
        },
        {
          question: "Games boost skills such as teamwork and _______.",
          optionA: "Isolation",
          optionB: "Leadership",
          optionC: "Disorganization",
          correctAnswer: "Leadership",
        },
        {
          question: "Games are a fun and recreational _______.",
          optionA: "Homework",
          optionB: "Activity",
          optionC: "Burden",
          correctAnswer: "Activity",
        },
        {
          question: "Games teach us to remain active and _______.",
          optionA: "Intelligent",
          optionB: "Lazy",
          optionC: "Dull",
          correctAnswer: "Intelligent",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Games improve our health and boost certain skills.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "National Sports Day is celebrated every year on 29th August in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Major Dhyan Chand was a legendary cricket player.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Playing games only improves physical health, not mental health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Games can help in developing skills like time management and teamwork.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "There are only a few types of games mentioned in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "National Sports Day is celebrated to honor Major Sardar Chand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Games can be a burden and are not considered recreational activities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The text mentions that today is 19th August.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Games do not contribute to keeping the body fit and free from disease.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
