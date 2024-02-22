export const chapter = "Chapter - 13: Healthy Habits ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is essential for maintaining good health?",
        optionA: "Sleep",
        optionB: "Physical exercise and activity, cleanliness, and good food",
        optionC: "Watching TV",
        correctAnswer:
          "Physical exercise and activity, cleanliness, and good food",
      },
      {
        question: "What is one of the keys to good health?",
        optionA: "Playing video games",
        optionB: "Eating fast food daily",
        optionC: "Doing exercise or yoga daily in the morning",
        correctAnswer: "Doing exercise or yoga daily in the morning",
      },
      {
        question: "What is a good habit for maintaining cleanliness?",
        optionA: "Brushing your teeth twice a day",
        optionB: "Skipping daily baths",
        optionC: "Not washing hands after using the toilet",
        correctAnswer: "Brushing your teeth twice a day",
      },
      {
        question: "What should you do to keep your hair healthy?",
        optionA: "Dye it with bright colors",
        optionB: "Oil and comb your hair properly",
        optionC: "Shave it off completely",
        correctAnswer: "Oil and comb your hair properly",
      },
      {
        question: "What is recommended for a balanced diet?",
        optionA: "Eating only junk food",
        optionB: "Avoiding fruits and vegetables",
        optionC: "Eating a balanced diet",
        correctAnswer: "Eating a balanced diet",
      },
      {
        question: "How much milk should you drink daily?",
        optionA: "None",
        optionB: "At least two glasses of milk daily",
        optionC: "A whole gallon of milk daily",
        correctAnswer: "At least two glasses of milk daily",
      },
      {
        question: "What should you avoid when it comes to food?",
        optionA: "Fresh food",
        optionB: "Stale food and food kept in the open",
        optionC: "Fruits and vegetables",
        correctAnswer: "Stale food and food kept in the open",
      },
      {
        question: "What is a good eating practice for digestion?",
        optionA: "Swallowing food without chewing",
        optionB: "Chewing your food well",
        optionC: "Eating as fast as possible",
        correctAnswer: "Chewing your food well",
      },
      {
        question:
          "What should you avoid when it comes to food, especially for good health?",
        optionA: "Eating plenty of fruits and vegetables",
        optionB: "Consuming junk food in large quantities",
        optionC: "Eating fresh, nutritious meals",
        correctAnswer: "Consuming junk food in large quantities",
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
          "To maintain good health, it is important to engage in physical exercise and activity. You should avoid _______ for long periods.",
        options: ["sleeping", "sitting idle", "playing outdoor games"],
        correctAnswer: "sitting idle",
      },
      {
        question:
          "Good health can be achieved by practicing healthy habits, including doing some exercise or yoga daily in the morning. You should also play different outdoor games. _______ is essential to staying active.",
        options: ["brushing your teeth", "sitting indoors", "staying active"],
        correctAnswer: "staying active",
      },
      {
        question:
          "For good health, it is advisable to wash your hands after using the toilet and whenever you enter the house. You should also _______.",
        options: [
          "avoid cleaning",
          "take a bath regularly",
          "wear dirty clothes",
        ],
        correctAnswer: "take a bath regularly",
      },
      {
        question:
          "Maintaining cleanliness is crucial for good health. Brush your teeth _______ for proper dental care.",
        options: ["once a week", "twice a day", "occasionally"],
        correctAnswer: "twice a day",
      },
      {
        question:
          "To keep your place and things tidy, it is important to wear _______ clothes and avoid a messy environment.",
        options: ["neat and clean", "old and torn", "colorful and mismatched"],
        correctAnswer: "neat and clean",
      },
      {
        question:
          "Eating a balanced diet, including plenty of fruits and green vegetables, is essential for good health. Avoid eating _______.",
        options: [
          "fresh food",
          "stale food and food kept in the open",
          "homemade meals",
        ],
        correctAnswer: "stale food and food kept in the open",
      },
      {
        question:
          "To promote good health, it's important to chew your food well for proper digestion. Avoid consuming _______.",
        options: ["fresh fruits", "junk food", "milk"],
        correctAnswer: "junk food",
      },
      {
        question:
          "Drinking at least two glasses of milk daily is a healthy habit. _______ is a recommended beverage for good health.",
        options: ["Soda", "Water", "Milk"],
        correctAnswer: "Milk",
      },
      {
        question:
          "One of the keys to good health is doing some exercise or yoga daily in the morning. Avoid being _______.",
        options: ["active", "inactive", "sleepy"],
        correctAnswer: "inactive",
      },
      {
        question:
          "Good health is important to keep a person active. You should also do most of your works _______ for better physical health.",
        options: ["by others", "by yourself", "at night"],
        correctAnswer: "by yourself",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Good health is unimportant for us.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "To maintain good health, we must follow healthy habits in our routine.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Physical exercise and activity are not key factors for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to brush your teeth twice a day.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "It's unnecessary to take a bath regularly for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Washing your hands after using the toilet is recommended for maintaining cleanliness.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Wearing neat and clean clothes is not important for health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "A balanced diet, including fruits and green vegetables, is crucial for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "It's acceptable to eat stale food and food that is kept in the open for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Chewing your food well is not a good eating practice for digestion.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
