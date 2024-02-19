export const chapter = "Chapter - 12: Think Beyond";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the main theme of the text?",
          optionA: "Environmental pollution",
          optionB: "Energy conservation",
          optionC: "Health and hygiene",
          correctAnswer: "A. Environmental pollution",
        },
        {
          question:
            "What is the consequence of turning off the lights when you leave a room?",
          optionA: "It spreads diseases",
          optionB: "It helps save energy",
          optionC: "It harms water animals",
          correctAnswer: "B. It helps save energy",
        },
        {
          question: "What happens if you throw waste on the roads?",
          optionA: "It saves fuel",
          optionB: "It harms the environment",
          optionC: "It promotes clean streets",
          correctAnswer: "B. It harms the environment",
        },
        {
          question:
            "What is the recommended action for covering short distances?",
          optionA: "Using vehicles",
          optionB: "Walking or cycling",
          optionC: "Using public transportation",
          correctAnswer: "B. Walking or cycling",
        },
        {
          question: "How does throwing trash in rivers affect the environment?",
          optionA: "It helps water animals",
          optionB: "It has no impact",
          optionC: "It destroys the life of water animals and plants",
          correctAnswer: "C. It destroys the life of water animals and plants",
        },
        {
          question: "What is the environmental impact of good actions?",
          optionA: "No impact",
          optionB: "Positive impact",
          optionC: "Negative impact",
          correctAnswer: "B. Positive impact",
        },
        {
          question: "What is the result of bad actions on the environment?",
          optionA: "Positive impact",
          optionB: "Negative impact",
          optionC: "No impact",
          correctAnswer: "B. Negative impact",
        },
        {
          question: "Which action is recommended for conserving fuel?",
          optionA: "Throwing waste on roads",
          optionB: "Using vehicles for short distances",
          optionC: "Not using vehicles for short distances",
          correctAnswer: "C. Not using vehicles for short distances",
        },
        {
          question:
            "What is the primary reason for not using vehicles for short distances?",
          optionA: "It promotes a healthy lifestyle",
          optionB: "It saves fuel",
          optionC: "It's more convenient",
          correctAnswer: "B. It saves fuel",
        },
        {
          question:
            "How can individuals contribute to a better environment according to the text?",
          optionA: "By using vehicles for short distances",
          optionB: "By not turning off the lights",
          optionC: "By not throwing waste on roads",
          correctAnswer: "C. By not throwing waste on roads",
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
            "The actions we do have an impact on the environment. If our action is good, it will have a ______ impact on our environment. If it is bad, then we are harming our environment.",
          optionA: "Positive",
          optionB: "Neutral",
          optionC: "Negative",
          correctAnswer: "Positive",
        },
        {
          question:
            "Let's learn how: Turn off the lights when you leave the room; it saves ______.",
          optionA: "Money",
          optionB: "Energy",
          optionC: "Water",
          correctAnswer: "Energy",
        },
        {
          question: "Throwing waste on the roads spreads ______ diseases.",
          optionA: "Infectious",
          optionB: "Non-communicable",
          optionC: "Mental",
          correctAnswer: "Infectious",
        },
        {
          question:
            "Do not use vehicles to cover short distances; this will help in saving ______.",
          optionA: "Time",
          optionB: "Fuel",
          optionC: "Money",
          correctAnswer: "Fuel",
        },
        {
          question:
            "Throwing trash in rivers will destroy the life of water animals and ______.",
          optionA: "Insects",
          optionB: "Birds",
          optionC: "Plants",
          correctAnswer: "Plants",
        },
        {
          question:
            "If our action is good, it will have a ______ impact on our environment.",
          optionA: "Negative",
          optionB: "Neutral",
          optionC: "Positive",
          correctAnswer: "Positive",
        },
        {
          question:
            "Let's learn how: Turn off the lights when you leave the room; it saves ______.",
          optionA: "Resources",
          optionB: "Money",
          optionC: "Energy",
          correctAnswer: "Energy",
        },
        {
          question: "Throwing waste on the roads spreads many ______ diseases.",
          optionA: "Common",
          optionB: "Non-infectious",
          optionC: "Infectious",
          correctAnswer: "Infectious",
        },
        {
          question:
            "Do not use vehicles to cover short distances; this will help in saving ______.",
          optionA: "Time",
          optionB: "Fuel",
          optionC: "Food",
          correctAnswer: "Fuel",
        },
        {
          question:
            "Throwing trash in rivers will destroy the life of water animals and ______.",
          optionA: "Air animals",
          optionB: "Land animals",
          optionC: "Plants",
          correctAnswer: "Plants",
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
            "Turning off lights when you leave a room helps save energy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Throwing waste on the roads is an environmentally friendly practice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Using vehicles for short distances is an eco-friendly choice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Throwing trash in rivers has a positive impact on water ecosystems.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Positive actions can have a negative impact on the environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Saving energy is an important aspect of environmental conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Conserving fuel by not using vehicles for short distances is recommended.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Throwing waste on the roads can spread diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Destroying the life of water animals and plants is a positive action.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Environmental actions have no impact on the surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
