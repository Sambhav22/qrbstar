export const chapter = "Chapter - 12: Safety First ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the first safety rule mentioned in the text?",
          optionA: "Do not play with sharp objects.",
          optionB: "Do not run or play on the road.",
          optionC: "Never go anywhere with a stranger.",
          correctAnswer: "B) Do not run or play on the road.",
        },
        {
          question: "What should you do if someone touches you badly?",
          optionA: "Keep quiet and ignore it.",
          optionB: "Inform your parents.",
          optionC: "Play along with the person.",
          correctAnswer: "B) Inform your parents.",
        },
        {
          question: "What information should you know according to the text?",
          optionA: "Your favorite subject.",
          optionB: "Your address and parents' contact details.",
          optionC: "Bus driver's name.",
          correctAnswer: "B) Your address and parents' contact details.",
        },
        {
          question:
            "What is the advised action if you are uncomfortable doing something?",
          optionA: "Keep doing it to avoid trouble.",
          optionB: "Stop that action at that moment.",
          optionC: "Ignore the discomfort.",
          correctAnswer: "B) Stop that action at that moment.",
        },
        {
          question:
            "What is the recommended behavior while traveling by school bus?",
          optionA: "Run around inside the bus.",
          optionB: "Disturb the bus driver.",
          optionC: "Sit quietly inside the bus.",
          correctAnswer: "C) Sit quietly inside the bus.",
        },
        {
          question:
            "What is explicitly mentioned as a rule for waiting at the bus stop?",
          optionA: "Dance while waiting.",
          optionB: "Stand in a queue.",
          optionC: "Ignore others.",
          correctAnswer: "B) Stand in a queue.",
        },
        {
          question: "What should you not do in the bus according to the text?",
          optionA: "Lean head or hand out of the window.",
          optionB: "Sleep in the aisle.",
          optionC: "Play music loudly.",
          correctAnswer: "A) Lean head or hand out of the window.",
        },
        {
          question: "According to the text, why are these rules important?",
          optionA: "To make life boring.",
          optionB: "To keep us safe and alert.",
          optionC: "To annoy children.",
          correctAnswer: "B) To keep us safe and alert.",
        },
        {
          question: "Which of the following is NOT mentioned as a safety rule?",
          optionA: "Never go anywhere with a stranger.",
          optionB: "Play with sharp objects.",
          optionC: "Do not disturb the bus driver.",
          correctAnswer: "B) Play with sharp objects.",
        },
        {
          question: "What is the general theme of the text?",
          optionA: "Cooking safety.",
          optionB: "Traveling by bus.",
          optionC: "Personal safety and rules.",
          correctAnswer: "C) Personal safety and rules.",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "__________ are important to be safe, such as not running or playing on the road.",
          optionA: "Toys",
          optionB: "Safety rules",
          optionC: "Animals",
          correctAnswer: "B) Safety rules",
        },
        {
          question:
            "If someone touches you badly, it is crucial to inform __________.",
          optionA: "Your friends",
          optionB: "Your parents",
          optionC: "Your teacher",
          correctAnswer: "B) Your parents",
        },
        {
          question:
            "To ensure safety, it's advised to know your __________ and parents' contact details.",
          optionA: "Favorite color",
          optionB: "Address",
          optionC: "Bus driver's name",
          correctAnswer: "B) Address",
        },
        {
          question:
            "If you are uncomfortable doing something, it's recommended to __________.",
          optionA: "Continue doing it",
          optionB: "Stop that action at that moment",
          optionC: "Ignore the discomfort",
          correctAnswer: "B) Stop that action at that moment",
        },
        {
          question:
            "While traveling by the school bus, it's important to sit __________ inside the bus.",
          optionA: "Backwards",
          optionB: "Quietly",
          optionC: "Outside",
          correctAnswer: "B) Quietly",
        },
        {
          question:
            "One should not lean their head or hand out of the window of a __________ bus.",
          optionA: "Moving",
          optionB: "Stationary",
          optionC: "Fast",
          correctAnswer: "A) Moving",
        },
        {
          question:
            "When waiting for the bus, it's recommended to stand in __________.",
          optionA: "A circle",
          optionB: "A queue",
          optionC: "A line",
          correctAnswer: "B) A queue",
        },
        {
          question: "__________ keep us safe and alert from potential dangers.",
          optionA: "Jokes",
          optionB: "Rules",
          optionC: "Games",
          correctAnswer: "B) Rules",
        },
        {
          question:
            "Never go __________ with a stranger, as per the safety guidelines.",
          optionA: "Home",
          optionB: "Anywhere",
          optionC: "Alone",
          correctAnswer: "B) Anywhere",
        },
        {
          question:
            "The general theme of the text revolves around __________ and rules.",
          optionA: "Adventure",
          optionB: "Travel",
          optionC: "Personal safety",
          correctAnswer: "C) Personal safety",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Running or playing on the road is safe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "It's recommended to inform someone if touched badly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Knowing your address and parents' contact details is unnecessary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Continuing an uncomfortable action is advised.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Sitting quietly inside the school bus is important.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Leaning head or hand out of the window of a moving bus is safe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Standing in a queue is recommended while waiting for the bus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Jokes keep us safe and alert from potential dangers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Going anywhere with a stranger is acceptable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The general theme of the text is about adventure and travel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
