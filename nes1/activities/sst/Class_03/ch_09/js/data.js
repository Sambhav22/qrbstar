export const chapter = "Chapter - 9: Mumbai: The Gateway of India ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the capital of the Indian state of Maharashtra?",
        optionA: "Delhi",
        optionB: "Kolkata",
        optionC: "Mumbai",
        correctAnswer: "Mumbai",
      },
      {
        question: "Which city is known as India's commercial capital?",
        optionA: "Kolkata",
        optionB: "Mumbai",
        optionC: "Chennai",
        correctAnswer: "Mumbai",
      },
      {
        question: "What is the most widely spoken language in Mumbai?",
        optionA: "Hindi",
        optionB: "English",
        optionC: "Marathi",
        correctAnswer: "Marathi",
      },
      {
        question: "Which festival is particularly popular in Mumbai?",
        optionA: "Diwali",
        optionB: "Ganesh Chaturthi",
        optionC: "Holi",
        correctAnswer: "Ganesh Chaturthi",
      },
      {
        question:
          "Which iconic structure in Mumbai was built to honor a royal visit?",
        optionA: "Victoria Gardens",
        optionB: "Elephanta Caves",
        optionC: "Gateway of India",
        correctAnswer: "Gateway of India",
      },
      {
        question: "What is the Queen's Necklace in Mumbai known for?",
        optionA: "A famous jewelry store",
        optionB: "A scenic lighting display along Marine Drive",
        optionC: "A popular beach",
        correctAnswer: "A scenic lighting display along Marine Drive",
      },
      {
        question:
          "Which industry is not mentioned as one of the main industries in Mumbai?",
        optionA: "Textiles",
        optionB: "Medicines",
        optionC: "Automotive",
        correctAnswer: "Automotive",
      },
      {
        question:
          "Where are India's most important oilfields located, off the Mumbai coast?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      },
      {
        question: "Which famous film industry is based in Mumbai?",
        optionA: "Tollywood",
        optionB: "Kollywood",
        optionC: "Bollywood",
        correctAnswer: "Bollywood",
      },
      {
        question: "What is the name of the airport in Mumbai?",
        optionA: "Indira Gandhi International Airport",
        optionB: "Chhatrapati Shivaji International Airport",
        optionC: "Rajiv Gandhi International Airport",
        correctAnswer: "Chhatrapati Shivaji International Airport",
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
          "Mumbai is the capital of the Indian state of ___________. It is the most populous city in India and the fourth most populous city in the world. It is the economic center of India and is called India's commercial capital. It lies on the west coast of India facing the Arabian Sea and has a deep natural harbor. It is also the richest city in India and has the highest GDP of any city in South, West, or Central ________.",
        optionA: "Karnataka",
        optionB: "Maharashtra",
        optionC: "Gujarat",
        correctAnswer: "Maharashtra",
      },
      {
        question: "Mumbai is known as India's ___________.",
        optionA: "Political capital",
        optionB: "Commercial capital",
        optionC: "Cultural capital",
        correctAnswer: "Commercial capital",
      },
      {
        question:
          "Mumbai has the highest GDP of any city in South, West, or Central ________.",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "North America",
        correctAnswer: "Asia",
      },
      {
        question: "The most important landmark of Mumbai is the ___________.",
        optionA: "Eiffel Tower",
        optionB: "Gateway of India",
        optionC: "Statue of Liberty",
        correctAnswer: "Gateway of India",
      },
      {
        question: "The Queen's Necklace in Mumbai is famous for its ________.",
        optionA: "Jewelry stores",
        optionB: "Scenic beauty",
        optionC: "Amusement parks",
        correctAnswer: "Scenic beauty",
      },
      {
        question:
          "Mumbai is the center of national and international _________.",
        optionA: "Education",
        optionB: "Trade",
        optionC: "Agriculture",
        correctAnswer: "Trade",
      },
      {
        question:
          "India's most important oilfields are located in Bombay High, off the Mumbai ________.",
        optionA: "Desert",
        optionB: "Coast",
        optionC: "Mountains",
        correctAnswer: "Coast",
      },
      {
        question:
          "The Chhatrapati Shivaji International Airport located in Mumbai is one of the busiest ________ in India.",
        optionA: "Bus stations",
        optionB: "Train stations",
        optionC: "Airports",
        correctAnswer: "Airports",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Mumbai is the most populous city in India.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mumbai is the capital of the Indian state of Gujarat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mumbai is located on the east coast of India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mumbai is known as the cultural capital of India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mumbai is situated on the Arabian Sea coast.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mumbai has a tropical climate with distinct seasons.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The Gateway of India is the most important landmark in Mumbai.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mumbai is the political capital of India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mumbai is the richest city in India in terms of GDP.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Mumbai is well-connected with other parts of India through an extensive public transport system.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
