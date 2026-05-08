export const chapter = "Chapter - 9: Best Inventions in the Field of AI";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who is considered the Father of Modern Computer Science?",
        optionA: "Joseph Weizenbaum",
        optionB: "Alan Turing",
        optionC: "Garry Kasparov",
        correctAnswer: "Alan Turing",
      },
      {
        question:
          "In which year did Alan Turing pose the question, 'Can machine think?'",
        optionA: "1966",
        optionB: "1972",
        optionC: "1950",
        correctAnswer: "1950",
      },
      {
        question:
          "Which was the first chatbot, created in 1966 to explore communication between humans and machines?",
        optionA: "Shakey",
        optionB: "Deep Blue",
        optionC: "ELIZA",
        correctAnswer: "ELIZA",
      },
      {
        question:
          "Who developed the first true mobile and perceptive robot named Shakey in 1972?",
        optionA: "SRI International",
        optionB: "Joseph Weizenbaum",
        optionC: "Carnegie Mellon University",
        correctAnswer: "SRI International",
      },
      {
        question:
          "Which robot, developed in 1985, was the first computer chess-playing expert?",
        optionA: "Kismet",
        optionB: "Deep Blue",
        optionC: "AIBO",
        correctAnswer: "Deep Blue",
      },
      {
        question:
          "Who created the robot head named Kismet in the 1990s, capable of recognizing and simulating emotions?",
        optionA: "Joseph Weizenbaum",
        optionB: "Dr. Cynthia Breazeal",
        optionC: "Sony",
        correctAnswer: "Dr. Cynthia Breazeal",
      },
      {
        question:
          "AIBO, the first robotic dog, was designed and manufactured by which company?",
        optionA: "Boston Dynamics",
        optionB: "Sony",
        optionC: "Hanson Robotics",
        correctAnswer: "Sony",
      },
      {
        question:
          "Which humanoid robot, developed by Boston Dynamics, made its first public appearance in 2013 and was designed for search and rescue tasks?",
        optionA: "Atlas",
        optionB: "Sophia",
        optionC: "Kismet",
        correctAnswer: "Atlas",
      },
      {
        question:
          "Sophia, the social humanoid robot, was developed by which company?",
        optionA: "Boston Dynamics",
        optionB: "Hanson Robotics",
        optionC: "MIT Artificial Intelligence Laboratory",
        correctAnswer: "Hanson Robotics",
      },
      {
        question:
          "When did the first generation of AIBO, the robotic dog, get discontinued, only to be relaunched in 2017?",
        optionA: "2006",
        optionB: "1999",
        optionC: "2013",
        correctAnswer: "2006",
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
          "ELIZA, the first chatbot, was created by Joseph Weizenbaum in MIT Artificial Intelligence Laboratory in _____ .",
        optionA: "1972",
        optionB: "1966",
        optionC: "1985",
        correctAnswer: "1966",
      },
      {
        question:
          "Shakey, the first true mobile and perceptive robot, was developed by SRI International in _____ in 1972.",
        optionA: "Silicon Valley",
        optionB: "Carnegie Mellon University",
        optionC: "Massachusetts Institute of Technology",
        correctAnswer: "Silicon Valley",
      },
      {
        question:
          "Deep Blue, the first computer chess-playing expert, was developed in _____ University in 1985 under the name 'Chip Test'.",
        optionA: "MIT",
        optionB: "Carnegie Mellon",
        optionC: "Stanford",
        correctAnswer: "Carnegie Mellon",
      },
      {
        question:
          "Kismet, the first robot head capable of recognizing emotions, was created in the _____ by Dr. Cynthia Breazeal.",
        optionA: "Silicon Valley",
        optionB: "MIT",
        optionC: "Hong-Kong",
        correctAnswer: "MIT",
      },
      {
        question:
          "AIBO, the first robotic dog, was designed and manufactured by _____ in 1999.",
        optionA: "Sony",
        optionB: "Boston Dynamics",
        optionC: "Hanson Robotics",
        correctAnswer: "Sony",
      },
      {
        question:
          "Atlas, the bipedal humanoid robot, was developed by the American robotic company 'Boston Dynamics' for _____ tasks.",
        optionA: "Entertainment",
        optionB: "Search and rescue",
        optionC: "Industrial",
        correctAnswer: "Search and rescue",
      },
      {
        question:
          "Sophia, the most recent social humanoid robot, was developed by _____ company 'Hanson Robotics'.",
        optionA: "Sony",
        optionB: "Boston Dynamics",
        optionC: "Hong-Kong",
        correctAnswer: "Hanson Robotics",
      },
      {
        question:
          "ELIZA used _____ methodology to stimulate conversation between humans and machines.",
        optionA: "Pattern matching and substitution",
        optionB: "Neural network",
        optionC: "Quantum computing",
        correctAnswer: "Pattern matching and substitution",
      },
      {
        question:
          "Kismet can recognize and stimulate emotions through various _____.",
        optionA: "Written messages",
        optionB: "Facial expressions, vocalization, and movements",
        optionC: "Mathematical calculations",
        correctAnswer: "Facial expressions, vocalization, and movements",
      },
      {
        question:
          "The first generation of AIBO, the robotic dog, was discontinued in _____ but relaunched by Sony in November 2017.",
        optionA: "2006",
        optionB: "1999",
        optionC: "2013",
        correctAnswer: "2006",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "ELIZA was the first chatbot, created by Joseph Weizenbaum in MIT Artificial Intelligence Laboratory in 1966.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Shakey, the first true mobile and perceptive robot, was developed by Sony in 1972.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Deep Blue, the first computer chess-playing expert, was developed in Carnegie Mellon University in 1985.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Kismet, the robot head developed by Dr. Cynthia Breazeal, can recognize and stimulate emotions through various means.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "AIBO, the first robotic dog, was designed and manufactured by Boston Dynamics in 1999.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Atlas, the bipedal humanoid robot, was developed by Boston Dynamics for entertainment tasks.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Sophia, the most recent social humanoid robot, was developed by Sony.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The first computer chess-playing expert, Deep Blue, was developed by IBM.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The internet is primarily used for communication and entertainment purposes.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "News and entertainment programs are broadcasted on radio and television, with radio primarily used for broadcasting both audio and video.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
