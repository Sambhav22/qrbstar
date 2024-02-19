export const chapter = "Chapter - 13: Work and Play ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is work generally done by people to earn money called?",
          optionA: "Recreation",
          optionB: "Occupation",
          optionC: "Hobby",
          correctAnswer: "Occupation",
        },

        {
          question:
            "Which of the following is NOT mentioned as a work people do to earn money?",
          optionA: "Teaching",
          optionB: "Sweeping",
          optionC: "Playing games",
          correctAnswer: "Playing games",
        },

        {
          question: "In a family, members work to:",
          optionA: "Earn money",
          optionB: "Make their home a better place",
          optionC: "Play games",
          correctAnswer: "Make their home a better place",
        },

        {
          question:
            "What activity is the father engaged in, according to the text?",
          optionA: "Cooking food",
          optionB: "Bringing vegetables",
          optionC: "Organizing the room",
          correctAnswer: "Bringing vegetables",
        },

        {
          question: "What are the adults doing in the picture?",
          optionA: "Playing games",
          optionB: "Doing yoga",
          optionC: "Cooking food",
          correctAnswer: "Doing yoga",
        },

        {
          question: "Which of the following is mentioned as an outdoor game?",
          optionA: "Ludo",
          optionB: "Hockey",
          optionC: "Scrabble",
          correctAnswer: "Hockey",
        },

        {
          question: "What is NOT listed as an indoor game?",
          optionA: "Ludo",
          optionB: "Scrabble",
          optionC: "Tennis",
          correctAnswer: "Tennis",
        },

        {
          question:
            "According to the text, why do family members usually work?",
          optionA: "To earn money",
          optionB: "To play games",
          optionC: "To make their home a better place",
          correctAnswer: "To make their home a better place",
        },

        {
          question: "What is mentioned as a work done to treat the sick?",
          optionA: "Teaching",
          optionB: "Sweeping",
          optionC: "Treating sick",
          correctAnswer: "Treating sick",
        },

        {
          question:
            "What are some examples of outdoor games mentioned in the text?",
          optionA: "Ludo, Scrabble, Playing cards",
          optionB: "Cricket, Hockey, Tennis",
          optionC: "Cooking, Organizing room, Bringing vegetables",
          correctAnswer: "Cricket, Hockey, Tennis",
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
            "Work generally done by people to earn money is called their ________.",
          optionA: "Leisure",
          optionB: "Occupation",
          optionC: "Hobby",
          correctAnswer: "Occupation",
        },

        {
          question:
            "In a family, all members work to make their home a better place, not to earn ________.",
          optionA: "Goods",
          optionB: "Money",
          optionC: "Services",
          correctAnswer: "Money",
        },

        {
          question:
            "The father in the family is engaged in the work of bringing ________.",
          optionA: "Groceries",
          optionB: "Vegetables",
          optionC: "Toys",
          correctAnswer: "Vegetables",
        },

        {
          question:
            "According to the text, adults in the picture are doing ________.",
          optionA: "Cooking",
          optionB: "Yoga",
          optionC: "Playing games",
          correctAnswer: "Yoga",
        },

        {
          question:
            "Outdoor games mentioned in the text include ________, hockey, and tennis.",
          optionA: "Cricket",
          optionB: "Chess",
          optionC: "Ludo",
          correctAnswer: "Cricket",
        },

        {
          question:
            "Indoor games listed in the text are ludo, scrabble, and ________.",
          optionA: "Playing cards",
          optionB: "Chess",
          optionC: "Tennis",
          correctAnswer: "Playing cards",
        },

        {
          question:
            "Some of the works people do to earn money are teaching, treating the ________, sweeping, and growing crops.",
          optionA: "Healthy",
          optionB: "Sick",
          optionC: "Plants",
          correctAnswer: "Sick",
        },

        {
          question:
            "In the family, children are responsible for organizing ________.",
          optionA: "Their toys",
          optionB: "Their room",
          optionC: "Family events",
          correctAnswer: "Their room",
        },

        {
          question:
            "Adults are depicted doing yoga, while children are shown playing different ________.",
          optionA: "Instruments",
          optionB: "Games",
          optionC: "Sports",
          correctAnswer: "Games",
        },

        {
          question:
            "Work done by family members is aimed at making their home a better place to ________ in.",
          optionA: "Work",
          optionB: "Live",
          optionC: "Play",
          correctAnswer: "Live",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "People work in a family to earn money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Yoga is shown as an activity in the picture.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question:
            "Indoor games mentioned include cricket, hockey, and tennis.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Children in the family are responsible for cooking food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Teaching is mentioned as a work done to treat the sick.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Ludo, Scrabble, and playing cards are outdoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question:
            "Family members work to make their home a better place to live in.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question:
            "The father is engaged in bringing vegetables according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Sweeping is mentioned as a work people do to earn money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Cricket, hockey, and tennis are listed as indoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
