export const chapter = "Chapter - 16: National Festivals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the significance of 15th August in India?",
        optionA: "Republic Day",
        optionB: "Gandhi Jayanti",
        optionC: "Independence Day",
        correctAnswer: "Independence Day",
      },
      {
        question:
          "Who hoists the National Flag at the Red Fort in Delhi on Independence Day?",
        optionA: "The President of India",
        optionB: "The Prime Minister",
        optionC: "The Chief Justice of India",
        correctAnswer: "The Prime Minister",
      },
      {
        question:
          "Which national festival is celebrated on 26th January in India?",
        optionA: "Republic Day",
        optionB: "Gandhi Jayanti",
        optionC: "Independence Day",
        correctAnswer: "Republic Day",
      },
      {
        question: "Where is the grand parade held on Republic Day in India?",
        optionA: "Gandhi Samadhi",
        optionB: "Red Fort",
        optionC: "Rajpath in New Delhi",
        correctAnswer: "Rajpath in New Delhi",
      },
      {
        question: "What is celebrated on 2nd October in India?",
        optionA: "Independence Day",
        optionB: "Republic Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Gandhi Jayanti",
      },
      {
        question:
          "Who was born on 2nd October and is celebrated on Gandhi Jayanti?",
        optionA: "Jawaharlal Nehru",
        optionB: "Mahatma Gandhi",
        optionC: "Subhas Chandra Bose",
        correctAnswer: "Mahatma Gandhi",
      },
      {
        question:
          "What do the President, Prime Minister, and others offer at Rajghat on Gandhi Jayanti?",
        optionA: "National Flag",
        optionB: "Flowers",
        optionC: "Sweets",
        correctAnswer: "Flowers",
      },
      {
        question:
          "Which important event is commemorated on 26th January in India?",
        optionA: "Gandhi Jayanti",
        optionB: "Republic Day",
        optionC: "Independence Day",
        correctAnswer: "Republic Day",
      },
      {
        question:
          "Where is the National Flag hoisted on Independence Day in India?",
        optionA: "Red Fort",
        optionB: "Rajghat",
        optionC: "Rajpath in New Delhi",
        correctAnswer: "Red Fort",
      },
      {
        question: "How is Republic Day celebrated in New Delhi?",
        optionA: "By offering prayers at temples",
        optionB: "With a grand parade at Rajpath",
        optionC: "By planting trees",
        correctAnswer: "With a grand parade at Rajpath",
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
          "Our country celebrates Independence Day on ____________ August.",
        options: ["14th", "15th", "16th"],
        correctAnswer: "15th",
      },
      {
        question:
          "On Independence Day, the Prime Minister hoists the National Flag at the ____________ Fort in Delhi.",
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Red",
      },
      {
        question: "India became a republic on ____________ January, 1950.",
        options: ["25th", "26th", "27th"],
        correctAnswer: "26th",
      },
      {
        question:
          "Republic Day is celebrated with a grand parade at ____________ in New Delhi.",
        options: ["Gandhi Samadhi", "Red Fort", "Rajpath"],
        correctAnswer: "Rajpath",
      },
      {
        question:
          "Mahatma Gandhi's birthday is celebrated as ____________ every year on 2nd October.",
        options: ["Independence Day", "Republic Day", "Gandhi Jayanti"],
        correctAnswer: "Gandhi Jayanti",
      },
      {
        question:
          "On Gandhi Jayanti, the President, the Prime Minister, and other people offer ____________ at the Gandhi Samadhi.",
        options: ["Gifts", "Flowers", "Sweets"],
        correctAnswer: "Flowers",
      },
      {
        question:
          "The main national festivals in India are ____________, Republic Day, and Gandhi Jayanti.",
        options: ["Christmas", "Holi", "Independence Day"],
        correctAnswer: "Independence Day",
      },
      {
        question:
          "Independence Day is celebrated to commemorate India's freedom on ____________.",
        options: ["14th August", "15th August", "16th August"],
        correctAnswer: "15th August",
      },
      {
        question:
          "Republic Day is celebrated to mark India becoming a republic on ____________.",
        options: ["25th January", "26th January", "27th January"],
        correctAnswer: "26th January",
      },
      {
        question:
          "The President of India takes the salute during the grand parade on ____________.",
        options: ["Independence Day", "Republic Day", "Gandhi Jayanti"],
        correctAnswer: "Republic Day",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Safety rules are unimportant for us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "To maintain good health, we must follow healthy habits in our routine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Physical exercise and activity are not key factors for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to brush your teeth twice a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "It's unnecessary to take a bath regularly for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Washing your hands after using the toilet is recommended for maintaining cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Wearing neat and clean clothes is not important for health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A balanced diet, including fruits and green vegetables, is crucial for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "It's acceptable to eat stale food and food that is kept in the open for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Chewing your food well is not a good eating practice for digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
