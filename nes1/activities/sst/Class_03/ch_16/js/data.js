export const chapter = "Chapter - 16: Weather and Climate ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the term for the atmospheric conditions of a place at a given time?",
        optionA: "Climate",
        optionB: "Weather",
        optionC: "Monsoon",
        correctAnswer: "Weather",
      },
      {
        question:
          "Which of the following best describes the nature of weather?",
        optionA: "It remains consistent over many years.",
        optionB: "It can change quickly within a few days.",
        optionC: "It is always hot and sunny.",
        correctAnswer: "It can change quickly within a few days.",
      },
      {
        question: "How is climate different from weather?",
        optionA: "Climate can change rapidly, while weather remains constant.",
        optionB:
          "Climate is the kind of weather over a long period, while weather is short-term.",
        optionC: "Climate and weather are the same things.",
        correctAnswer:
          "Climate is the kind of weather over a long period, while weather is short-term.",
      },
      {
        question: "In India, how many seasons are typically experienced?",
        optionA: "Three",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Five",
      },
      {
        question:
          "Which season in India is characterized as neither too hot nor too cold, with new leaves on trees?",
        optionA: "Monsoon",
        optionB: "Winter",
        optionC: "Spring",
        correctAnswer: "Spring",
      },
      {
        question:
          "During which season in India do the plains, desert areas, and plateau regions experience very high temperatures and heatwaves?",
        optionA: "Monsoon",
        optionB: "Winter",
        optionC: "Summer",
        correctAnswer: "Summer",
      },
      {
        question: "What causes the monsoon in India?",
        optionA: "Cold winds from the north",
        optionB: "Warm monsoon winds picking up water vapor from the sea",
        optionC: "High-pressure systems over the Indian subcontinent",
        correctAnswer: "Warm monsoon winds picking up water vapor from the sea",
      },
      {
        question: "When does the autumn season occur in India?",
        optionA: "December to February",
        optionB: "September to mid-November",
        optionC: "March to June",
        correctAnswer: "September to mid-November",
      },
      {
        question:
          "Which areas in India remain very cold during the winter season?",
        optionA: "Coastal areas",
        optionB: "Hilly and desert areas",
        optionC: "Plateau regions",
        correctAnswer: "Hilly and desert areas",
      },
      {
        question:
          "What is the characteristic of the length of nights during the winter season in India?",
        optionA: "Nights are shorter than days.",
        optionB: "Nights are longer than days.",
        optionC: "Nights and days are of equal length.",
        correctAnswer: "Nights are longer than days.",
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
          "The atmospheric conditions of a place at a given time are known as its ____________.",
        options: ["Climate", "Weather", "Monsoon"],
        correctAnswer: "Weather",
      },
      {
        question:
          "Weather can change quickly within a few days or even on the same day, unlike the climate, which remains the same for many ____________.",
        options: ["Weeks", "Months", "Years"],
        correctAnswer: "Years",
      },
      {
        question:
          "In India, there are five seasons, including summer, monsoon, winter, autumn, and ____________.",
        options: ["Fall", "Spring", "Dry season"],
        correctAnswer: "Spring",
      },
      {
        question:
          "Spring is a pleasant season, neither too hot nor too cold, and it is characterized by the appearance of new ____________ on trees.",
        options: ["Flowers", "Leaves", "Fruits"],
        correctAnswer: "Leaves",
      },
      {
        question:
          "The summer season in northern India begins in March-end and continues until ____________.",
        options: ["August", "September", "June"],
        correctAnswer: "June",
      },
      {
        question:
          "During the summer season, the coastal areas experience ____________ temperatures compared to the plains and desert areas.",
        options: ["Extremely hot", "Mild", "Less hot"],
        correctAnswer: "Less hot",
      },
      {
        question:
          "Monsoon in India is caused by monsoon winds getting warmed by the heat of the ____________.",
        options: ["Moon", "Sun", "Stars"],
        correctAnswer: "Sun",
      },
      {
        question:
          "Autumn season in India starts at the end of the monsoon, which is in ____________.",
        options: ["June", "August", "September"],
        correctAnswer: "September",
      },
      {
        question:
          "In the winter season, the hilly areas and desert areas remain very ____________.",
        options: ["Warm", "Hot", "Cold"],
        correctAnswer: "Cold",
      },
      {
        question:
          "During the winter season, nights are ____________ than days in India.",
        options: ["Shorter", "Longer", "Equal"],
        correctAnswer: "Longer",
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
        optionB: "False",correctAnswer: "False",
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
