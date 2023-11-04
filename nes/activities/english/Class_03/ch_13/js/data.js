export const chapter = "Chapter - 13: How We Fall Sick";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the main cause of the disease mentioned in the text?",
        optionA: "Bacteria",
        optionB: "Virus",
        optionC: "Fungus",
        correctAnswer: "Virus",
      },
      {
        question: "How can you protect yourself from the mentioned disease?",
        optionA: "Wearing a mask",
        optionB: "Regular handwashing and social distancing",
        optionC: "Eating snacks",
        correctAnswer: "Regular handwashing and social distancing",
      },
      {
        question: "What is the importance of hygiene mentioned in the text?",
        optionA: "It helps in making friends",
        optionB: "It keeps diseases away",
        optionC: "It improves physical fitness",
        correctAnswer: "It keeps diseases away",
      },
      {
        question:
          "What should you do when you enter the house from outside according to the text?",
        optionA: "Brush your teeth",
        optionB: "Wash your hands with soap",
        optionC: "Take a nap",
        correctAnswer: "Wash your hands with soap",
      },
      {
        question:
          "Which of the following is NOT mentioned as a way to maintain cleanliness in the text?",
        optionA: "Wearing clean clothes",
        optionB: "Trimming nails and hair regularly",
        optionC: "Brushing your teeth twice a week",
        correctAnswer: "Brushing your teeth twice a week",
      },
      {
        question:
          "What is a recommended way to take a rest for your brain, according to the text?",
        optionA: "Sleeping",
        optionB: "Playing games",
        optionC: "Eating snacks",
        correctAnswer: "Playing games",
      },
      {
        question:
          "Which of the following is NOT a type of physical exercise mentioned in the text?",
        optionA: "Running",
        optionB: "Yoga",
        optionC: "Watching TV",
        correctAnswer: "Watching TV",
      },
      {
        question:
          "Why are snacks not considered good for your health in the text?",
        optionA: "They are too expensive",
        optionB: "They contain too much sugar and salt",
        optionC: "They are too filling",
        correctAnswer: "They contain too much sugar and salt",
      },
      {
        question:
          "What is recommended for a healthy diet according to the text?",
        optionA: "Eating snacks from the market",
        optionB: "Eating homemade food",
        optionC: "Consuming as much sugar and salt as you like",
        correctAnswer: "Eating homemade food",
      },
      {
        question:
          "What is the benefit of sleeping early and rising early according to the text?",
        optionA: "It helps in weight loss",
        optionB: "It gives rest to the body and the brain",
        optionC: "It increases stress levels",
        correctAnswer: "It gives rest to the body and the brain",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "__________ is a new disease caused by a virus.",
        options: ["Influenza", "COVID-19", "Malaria"],
        correctAnswer: "COVID-19",
      },
      {
        question:
          "Good ____________ and social distancing can help protect you from the disease.",
        options: ["Nutrition", "Hygiene", "Fitness"],
        correctAnswer: "Hygiene",
      },
      {
        question: "Most diseases arise because people are not ____________.",
        options: ["Active", "Careful", "Knowledgeable"],
        correctAnswer: "Careful",
      },
      {
        question:
          "Regular handwashing with soap, keeping nails and hair ____________, and wearing clean clothes are simple ways to maintain ____________.",
        options: ["Long, fitness", "Short, hygiene", "Clean, health"],
        correctAnswer: "Short, hygiene",
      },
      {
        question:
          "Physical exercise can include activities like running, playing games, and practicing ____________.",
        options: ["Yoga", "Martial arts", "Singing"],
        correctAnswer: "Yoga",
      },
      {
        question:
          "Snacks sold in the market are not good for your health because they often contain excessive ____________ and ____________.",
        options: ["Sugar, salt", "Fiber, vitamins", "Protein, antioxidants"],
        correctAnswer: "Sugar, salt",
      },
      {
        question:
          "It is good to sleep early and rise early as it gives rest to the body and the ____________.",
        options: ["Mind", "Muscles", "Stomach"],
        correctAnswer: "Mind",
      },
      {
        question:
          "Apart from sleeping, ____________, reading, and playing games are mentioned as methods to take a rest.",
        options: ["Studying", "Exercising", "Thinking"],
        correctAnswer: "Thinking",
      },
      {
        question:
          "According to the text, maintaining cleanliness is essential because a large number of diseases are caused due to ____________.",
        options: ["Negligence", "Dirtiness", "Poor diet"],
        correctAnswer: "Dirtiness",
      },
      {
        question:
          "The text emphasizes the value of true ____________ and selflessness.",
        options: ["Wealth", "Friendship", "Power"],
        correctAnswer: "Friendship",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
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
  };
}

export var activityData;
