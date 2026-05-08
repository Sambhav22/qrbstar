export const chapter = "Chapter - 1: What is Computer?";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What kind of machine is a computer?",
        options: ["Mechanical", "Electronic", "Hydraulic"],
        answer: "Electronic",
      },
      {
        question: "How does a computer assist in tasks?",
        options: [
          "By making them complex",
          "By making them difficult",
          "By making them easy",
        ],
        answer: "By making them easy",
      },
      {
        question:
          "Which of the following is NOT mentioned as a function of a computer?",
        options: [
          "Sending and receiving messages",
          "Solving problems",
          "Cooking meals",
        ],
        answer: "Cooking meals",
      },
      {
        question: "What additional activities can be done using a computer?",
        options: ["Playing games", "Riding a bicycle", "Building houses"],
        answer: "Playing games",
      },
      {
        question: "What powers a computer to operate?",
        options: ["Wind", "Solar energy", "Electricity"],
        answer: "Electricity",
      },
      {
        question: "What is a characteristic of a computer's speed?",
        options: ["Slow", "Fast", "Moderate"],
        answer: "Fast",
      },
      {
        question: "How does a computer impact time and energy?",
        options: [
          "Wastes time and energy",
          "Saves time and energy",
          "Consumes time but saves energy",
        ],
        answer: "Saves time and energy",
      },
      {
        question:
          "Which of the following is NOT mentioned as a task that a computer can help with?",
        options: ["Watching movies", "Listening to music", "Cooking meals"],
        answer: "Cooking meals",
      },
      {
        question: "What makes using a computer advantageous?",
        options: [
          "It is inefficient",
          "It works slowly",
          "It saves time and energy",
        ],
        answer: "It saves time and energy",
      },
      {
        question: "What type of machine is a computer based on the text?",
        options: ["Mechanical", "Electronic", "Hydraulic"],
        answer: "Electronic",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "A computer is an __________ machine.",
        options: ["mechanical", "electronic", "robotic"],
        answer: "electronic",
      },
      {
        question: "A computer helps us in doing __________.",
        options: ["homework", "gardening", "cooking"],
        answer: "homework",
      },
      {
        question: "Computers assist in solving __________.",
        options: ["puzzles", "problems", "mysteries"],
        answer: "problems",
      },
      {
        question:
          "By using a computer, we can do activities like playing __________.",
        options: ["sports", "games", "instruments"],
        answer: "games",
      },
      {
        question: "Computers run on __________.",
        options: ["batteries", "electricity", "solar power"],
        answer: "electricity",
      },
      {
        question: "Computers work at a __________ pace.",
        options: ["slow", "moderate", "fast"],
        answer: "fast",
      },
      {
        question: "Computers save our __________.",
        options: ["money", "time and energy", "resources"],
        answer: "time and energy",
      },
      {
        question: "Using a computer allows us to watch __________.",
        options: ["birds", "movies", "paintings"],
        answer: "movies",
      },
      {
        question: "A computer makes our work __________.",
        options: ["difficult", "complex", "easy"],
        answer: "easy",
      },
      {
        question: "Computers enable us to listen to __________.",
        options: ["speeches", "music", "stories"],
        answer: "music",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A computer is a mechanical machine.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Computers can assist in solving problems.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question: "Watching movies is an activity facilitated by computers.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question: "Computers operate on solar power.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Using a computer saves time and energy.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question: "Computers make our work complex.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Playing games is not possible on computers.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Listening to music is not an activity done using computers.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Computers work at a slow pace.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "Cooking meals is a primary function of computers.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
    ],
  };
}

export var activityData;
