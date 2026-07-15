export const chapter = "Chapter - 13: National Festivals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are festivals celebrated by all the people of a country called?",
        optionA: "Regional festivals",
        optionB: "National festivals",
        optionC: "Religious festivals",
        correctAnswer: "National festivals",
      },
      {
        question: "When is Independence Day celebrated in India?",
        optionA: "26th January",
        optionB: "15th August",
        optionC: "2nd October",
        correctAnswer: "15th August",
      },
      {
        question: "In which year did India become free from British rule?",
        optionA: "1947",
        optionB: "1950",
        optionC: "1942",
        correctAnswer: "1947",
      },
      {
        question:
          "Who hoists the National Flag at the Red Fort in Delhi on Independence Day?",
        optionA: "President of India",
        optionB: "Prime Minister of India",
        optionC: "Chief Justice of India",
        correctAnswer: "Prime Minister of India",
      },
      {
        question: "Where is the main function held on Republic Day?",
        optionA: "India Gate",
        optionB: "Red Fort",
        optionC: "Rajpath in Delhi",
        correctAnswer: "Rajpath in Delhi",
      },
      {
        question:
          "When did India adopt its own Constitution, making it a republic?",
        optionA: "1947",
        optionB: "1950",
        optionC: "1942",
        correctAnswer: "1950",
      },
      {
        question: "Who unfurls the National Flag on Republic Day?",
        optionA: "Prime Minister of India",
        optionB: "President of India",
        optionC: "Chief Justice of India",
        correctAnswer: "President of India",
      },
      {
        question: "What is a special feature of the Republic Day parade?",
        optionA: "Grand fireworks display",
        optionB: "Folk dancers and school children",
        optionC: "Rock concert",
        correctAnswer: "Folk dancers and school children",
      },
      {
        question:
          "When is Gandhi Jayanti celebrated to mark the birthday of Mahatma Gandhi?",
        optionA: "15th August",
        optionB: "26th January",
        optionC: "2nd October",
        correctAnswer: "2nd October",
      },
      {
        question:
          "Where do people offer tribute and prayers on Gandhi Jayanti?",
        optionA: "Red Fort in Delhi",
        optionB: "India Gate",
        optionC: "Rajghat, the Samadhi of Mahatma Gandhi in Delhi",
        correctAnswer: "Rajghat, the Samadhi of Mahatma Gandhi in Delhi",
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
          "Independence Day is celebrated on __________ every year. In 1947, our country became free from British rule.",
        options: ["26th January", "15th August", "2nd October"],
        correctAnswer: "15th August",
      },
      {
        question:
          "On Independence Day, our Prime Minister hoists the National Flag at the __________ in Delhi and addresses the nation.",
        options: ["India Gate", "Red Fort", "Rajpath"],
        correctAnswer: "Red Fort",
      },
      {
        question:
          "Republic Day is celebrated on __________ every year. India adopted its own Constitution on this day in 1950.",
        options: ["26th January", "15th August", "2nd October"],
        correctAnswer: "26th January",
      },
      {
        question:
          "The main function of Republic Day is held at __________ in Delhi. The President of India unfurls the National Flag.",
        options: ["India Gate", "Red Fort", "Rajpath"],
        correctAnswer: "Rajpath",
      },
      {
        question:
          "On Republic Day, the army, navy, and air force show their strength by performing different __________.",
        options: ["Sports", "Activities", "Dances"],
        correctAnswer: "Activities",
      },
      {
        question:
          "Gandhi Jayanti is celebrated on 2nd October every year to mark the birthday of __________.",
        options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi"],
        correctAnswer: "Mahatma Gandhi",
      },
      {
        question:
          "Mahatma Gandhi is considered as the father of the nation and played a great role in motivating people to struggle for __________.",
        options: ["Wealth", "Education", "Freedom"],
        correctAnswer: "Freedom",
      },
      {
        question:
          "On Gandhi Jayanti, people pay homage to Gandhiji at __________, the Samadhi of Mahatma Gandhi in Delhi.",
        options: ["India Gate", "Red Fort", "Rajghat"],
        correctAnswer: "Rajghat",
      },
      {
        question:
          "The President of India, the Prime Minister of India, and other people offer tribute and prayers on Gandhi Jayanti to remember his great __________.",
        options: ["Success", "Works and sacrifices", "Achievements"],
        correctAnswer: "Works and sacrifices",
      },
      {
        question:
          "Independence Day is celebrated in every school, college, and other organizations with great __________.",
        options: ["Food", "Enthusiasm", "Silence"],
        correctAnswer: "Enthusiasm",
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
