export const chapter = "Chapter - 10: Chennai: The City of Temples  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the old name of Chennai?",
        optionA: "Kolkata",
        optionB: "Madras",
        optionC: "Delhi",
        correctAnswer: "Madras",
      },
      {
        question: "Which state is Chennai the capital of?",
        optionA: "Kerala",
        optionB: "Karnataka",
        optionC: "Tamil Nadu",
        correctAnswer: "Tamil Nadu",
      },
      {
        question: "Which language is predominantly spoken in Chennai?",
        optionA: "Hindi",
        optionB: "English",
        optionC: "Tamil",
        correctAnswer: "Tamil",
      },
      {
        question: "What is the primary traditional dance form of Tamil Nadu?",
        optionA: "Kathak",
        optionB: "Bharatnatyam",
        optionC: "Kuchipudi",
        correctAnswer: "Bharatnatyam",
      },
      {
        question: "When does Chennai primarily receive rainfall?",
        optionA: "In the summer months",
        optionB: "In the winter months",
        optionC: "In October to December",
        correctAnswer: "In October to December",
      },
      {
        question:
          "Which is the second-longest beach in the world located in Chennai?",
        optionA: "Miami Beach",
        optionB: "Copacabana Beach",
        optionC: "Marina Beach",
        correctAnswer: "Marina Beach",
      },
      {
        question: "What are some of the important industries in Chennai?",
        optionA: "Software and IT",
        optionB: "Cotton textiles, leather goods, and automobiles",
        optionC: "Agriculture and farming",
        correctAnswer: "Cotton textiles, leather goods, and automobiles",
      },
      {
        question: "Which famous Indian film industry is located in Chennai?",
        optionA: "Bollywood",
        optionB: "Tollywood",
        optionC: "Kollywood",
        correctAnswer: "Kollywood",
      },
      {
        question: "Which is the most popular festival celebrated in Chennai?",
        optionA: "Diwali",
        optionB: "Holi",
        optionC: "Pongal",
        correctAnswer: "Pongal",
      },
      {
        question: "How is Chennai primarily connected to other parts of India?",
        optionA: "Through waterways",
        optionB: "Through roadways, railways, and airways",
        optionC: "Through underground tunnels",
        correctAnswer: "Through roadways, railways, and airways",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Chennai, the capital of ____________.",
        options: ["Andhra Pradesh", "Tamil Nadu", "Kerala"],
        answer: "Tamil Nadu",
      },
      {
        question: "The old name of Chennai was ____________.",
        options: ["Kolkata", "Madras", "Delhi"],
        answer: "Madras",
      },
      {
        question:
          "Chennai is located along the southeastern coast of India, facing the ____________.",
        options: ["Indian Ocean", "Arabian Sea", "Bay of Bengal"],
        answer: "Bay of Bengal",
      },
      {
        question:
          "The climate of Chennai is hot and ____________ throughout the year.",
        options: ["Cold", "Humid", "Temperate"],
        answer: "Humid",
      },
      {
        question:
          "Tamil is the main language of Chennai, and the second most commonly spoken language is ____________.",
        options: ["Hindi", "Kannada", "English"],
        answer: "English",
      },
      {
        question:
          "Bharatnatyam is the most popular ____________ in Tamil Nadu.",
        options: ["Music form", "Dance form", "Drama form"],
        answer: "Dance form",
      },
      {
        question:
          "Pongal is the most popular ____________ celebrated in Chennai.",
        options: ["Diwali", "Holi", "Harvest festival"],
        answer: "Harvest festival",
      },
      {
        question:
          "The Marina Beach in Chennai is the ____________ longest beach in the world.",
        options: ["First", "Second", "Third"],
        answer: "Second",
      },
      {
        question:
          "Chennai is known for its seaport used for ____________ trade.",
        options: ["National and international", "Domestic", "Air"],
        answer: "National and international",
      },
      {
        question:
          "Chennai is famous for its film industry known as ____________.",
        options: ["Bollywood", "Hollywood", "Kollywood"],
        answer: "Kollywood",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Chennai is the capital of Tamil Nadu.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The old name of Chennai was Mumbai.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Chennai is located on the western coast of India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The primary language spoken in Chennai is Tamil.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Bharatnatyam is a traditional dance form in Tamil Nadu.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Chennai experiences a hot and humid climate year-round.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Pongal is a popular harvest festival celebrated in Chennai.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Chennai has the longest beach in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Chennai is a major industrial center for cotton textiles and automobiles.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Chennai is known for its film industry called Tollywood.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
