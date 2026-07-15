export const chapter = "Chapter - 15: Invention of Wheel ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main subject of the text?",
        optionA: "The invention of electricity",
        optionB: "The development of human civilization",
        optionC: "The invention of the wheel",
        correctAnswer: "The invention of the wheel",
      },
      {
        question:
          "How did early humans carry their loads in the absence of vehicles?",
        optionA: "They used airplanes",
        optionB: "They carried them on their shoulders or animals",
        optionC: "They used bicycles",
        correctAnswer: "They carried them on their shoulders or animals",
      },
      {
        question: "Why did early humans start using logs under the sledge?",
        optionA: "It made the sledge look more attractive",
        optionB: "It helped them move heavy loads with less effort",
        optionC: "It was a religious practice",
        correctAnswer: "It helped them move heavy loads with less effort",
      },
      {
        question:
          "What is the significance of rolling things over rounded objects like logs of wood?",
        optionA: "It has no significance",
        optionB: "It made transportation easier",
        optionC: "It was a form of exercise",
        correctAnswer: "It made transportation easier",
      },
      {
        question:
          "How did early humans discover the idea of using logs as wheels?",
        optionA: "They read about it in a book",
        optionB: "They saw heavy things rolling down slopes",
        optionC: "They used their imagination",
        correctAnswer: "They saw heavy things rolling down slopes",
      },
      {
        question:
          "What did early humans initially place under the sledge to move it with less effort?",
        optionA: "Rocks",
        optionB: "Logs",
        optionC: "Feathers",
        correctAnswer: "Logs",
      },
      {
        question: "What did early humans cut logs into to make the wheel?",
        optionA: "Rectangular pieces",
        optionB: "Circular discs",
        optionC: "Triangular shapes",
        correctAnswer: "Circular discs",
      },
      {
        question:
          "Why was the invention of the wheel considered a great revolution in human civilization?",
        optionA: "It allowed for the invention of airplanes",
        optionB:
          "It made transportation easier and led to the development of many useful things",
        optionC: "It improved the taste of food",
        correctAnswer:
          "It made transportation easier and led to the development of many useful things",
      },
      {
        question:
          "What does the author suggest life would be like if there were no wheel?",
        optionA: "Life would be the same as it is today",
        optionB: "Our life would be better than animals",
        optionC: "It would be impossible to predict",
        correctAnswer: "Our life would be better than animals",
      },
      {
        question:
          "What kind of things did early humans use to pull on sledges?",
        optionA: "Heavy machinery",
        optionB: "Heavy animals",
        optionC: "Heavy loads",
        correctAnswer: "Heavy loads",
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
          "Invention of the _______ was the greatest invention in human history. It is also called the festival of lights.",
        options: ["Electricity", "Wheel", "Machine"],
        correctAnswer: "Wheel",
      },
      {
        question: "If there were no wheel, the world would have no _______.",
        options: ["Electricity", "Machines", "Transport"],
        correctAnswer: "Machines",
      },
      {
        question:
          "Early humans used to carry their loads either on their shoulders or on animals they had tamed. If the loads were heavier, they used to pull them. Later, they made a _______ to pull things on.",
        options: ["Boat", "Sledge", "Bicycle"],
        correctAnswer: "Sledge",
      },
      {
        question:
          "Early humans observed that it was much easier to roll things over rounded objects, such as logs of wood, rather than _______ them.",
        options: ["Lift", "Pull", "Push"],
        correctAnswer: "Pull",
      },
      {
        question:
          "This gave them the idea to place logs under the sledge to move the sledge with less _______.",
        options: ["Noise", "Efforts", "Speed"],
        correctAnswer: "Efforts",
      },
      {
        question:
          "Later, they discovered that logs could be cut into _______ to make a wheel.",
        options: ["Triangular shapes", "Rectangular pieces", "Circular discs"],
        correctAnswer: "Circular discs",
      },
      {
        question:
          "The invention of the wheel was a great revolution in the development of human civilization as it led to the invention of _______ useful things.",
        options: ["Few", "No", "Many"],
        correctAnswer: "Many",
      },
      {
        question: "In earlier days, there were no _______.",
        options: ["Computers", "Vehicles", "Telephones"],
        correctAnswer: "Vehicles",
      },
      {
        question:
          "If there were no wheel, our life would be just a little better than _______.",
        options: ["Birds", "Animals", "Machines"],
        correctAnswer: "Animals",
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
          "The wheel is considered the greatest invention in human history.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early humans used to carry their loads on their shoulders or on tamed animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early humans observed that rolling things over rounded objects like logs of wood was more difficult than pulling them.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The invention of the wheel had no significant impact on human civilization.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Early humans initially placed rocks under the sledge to move it with less effort.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Logs could be cut into triangular shapes to make a wheel.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The wheel made transportation easier and led to the development of many useful things.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Early humans had access to vehicles in earlier days.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "If there were no wheel, life would be better than animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early humans used to pull heavy loads on sledges made of stone.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
