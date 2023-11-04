export const chapter = "Chapter - 14: Row Your Boat";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "In the given text, what are you encouraged to do with the boat?",
        optionA: "Row it vigorously",
        optionB: "Gently row it",
        optionC: "Let it drift on its own",
        correctAnswer: "Gently row it",
      },
      {
        question:
          "What might happen if you spring a leak while rowing your boat up the creek?",
        optionA: "You'll find a treasure",
        optionB: "You might get your bottom wet",
        optionC: "You'll win a race",
        correctAnswer: "You might get your bottom wet",
      },
      {
        question:
          "According to the text, what is a big mistake while rowing the boat around the lake?",
        optionA: "Singing loudly",
        optionB: "Standing up and rocking the boat",
        optionC: "Race with other boats",
        correctAnswer: "Standing up and rocking the boat",
      },
      {
        question:
          "What is mentioned as a consequence when rowing your boat down the stream?",
        optionA: "A peaceful journey",
        optionB: "A thrilling adventure",
        optionC: "A boring trip",
        correctAnswer: "A thrilling adventure",
      },
      {
        question:
          "How many times is the phrase 'Row, row, row your boat' repeated in the text?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "3",
      },
      {
        question: "Where does the text suggest rowing your boat gently up?",
        optionA: "The ocean",
        optionB: "The creek",
        optionC: "The mountain",
        correctAnswer: "The creek",
      },
      {
        question:
          "What is the text's advice when rowing your boat gently round the lake?",
        optionA: "Stand up and enjoy the view",
        optionB: "Don't stand up and rock the boat",
        optionC: "Race with other boats",
        correctAnswer: "Don't stand up and rock the boat",
      },
      {
        question:
          "What kind of experience does the text imply when you hit the waterfall while rowing down the stream?",
        optionA: "A peaceful journey",
        optionB: "A thrilling adventure",
        optionC: "A boring trip",
        correctAnswer: "A thrilling adventure",
      },
      {
        question:
          "In the text, what happens if you spring a leak in your boat while rowing?",
        optionA: "You find a treasure",
        optionB: "You might get your top wet",
        optionC: "You might get your bottom wet",
        correctAnswer: "You might get your bottom wet",
      },
      {
        question: "What body of water is mentioned in the text?",
        optionA: "Desert",
        optionB: "Lake",
        optionC: "Cave",
        correctAnswer: "Lake",
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
