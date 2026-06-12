export const chapter = "Chapter - 4: Water ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the most important source of water mentioned in the text?",
        optionA: "Lakes",
        optionB: "Rain",
        optionC: "Groundwater",
        correctAnswer: "Rain",
      },
      {
        question: "How is groundwater obtained?",
        optionA: "It is collected from rivers",
        optionB: "It is obtained by drilling into the ground",
        optionC: "It falls from the sky as rain",
        correctAnswer: "It is obtained by drilling into the ground",
      },
      {
        question: "Where is water usually stored in our homes?",
        optionA: "Buckets",
        optionB: "Underground",
        optionC: "Overhead tanks",
        correctAnswer: "Overhead tanks",
      },
      {
        question: "How can we clean water before drinking it?",
        optionA: "Freeze it",
        optionB: "Boil and filter it",
        optionC: "Mix it with other liquids",
        correctAnswer: "Boil and filter it",
      },
      {
        question: "Why is it important to save water, according to the text?",
        optionA: "Because there is an abundance of usable water",
        optionB: "Because it is not necessary to conserve water",
        optionC: "Because the amount of usable water on Earth is limited",
        correctAnswer: "Because the amount of usable water on Earth is limited",
      },
      {
        question:
          "What is one of the suggested steps to save water in the text?",
        optionA: "Keep the tap running while brushing your teeth",
        optionB: "Turn off the tap at full",
        optionC: "Use as much water as you want",
        correctAnswer: "Turn off the taps when not in use",
      },
      {
        question:
          "Which source of water gets filled with rainwater in the text?",
        optionA: "Buckets",
        optionB: "Lakes",
        optionC: "Rivers",
        correctAnswer: "Lakes",
      },
      {
        question: "How is groundwater collected from the ground?",
        optionA: "By waiting for it to rise to the surface",
        optionB: "By drilling into the ground",
        optionC: "By using a hand pump",
        correctAnswer: "By drilling into the ground",
      },
      {
        question:
          "What should you do with the leftover water in bottles, according to the text?",
        optionA: "Throw it away",
        optionB: "Use it to water the plants",
        optionC: "Drink it later",
        correctAnswer: "Use it to water the plants",
      },
      {
        question:
          "What is the suggested practice to save water while brushing or washing hands and face?",
        optionA: "Keep the tap on full blast",
        optionB: "Turn off the tap at full",
        optionC: "Use as much water as you want",
        correctAnswer: "Turn off the tap at full",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "All living things need water to _______.",
        optionA: "breathe",
        optionB: "survive",
        optionC: "fly",
        correctAnswer: "survive",
      },
      {
        question: "Rain is the most important source of _______.",
        optionA: "food",
        optionB: "water",
        optionC: "energy",
        correctAnswer: "water",
      },
      {
        question: "Groundwater is obtained by _______ into the ground.",
        optionA: "flying",
        optionB: "digging",
        optionC: "swimming",
        correctAnswer: "digging",
      },
      {
        question:
          "Water is usually stored in buckets, bottles, and pitchers, in addition to _______.",
        optionA: "mountains",
        optionB: "oceans",
        optionC: "overhead tanks",
        correctAnswer: "overhead tanks",
      },
      {
        question:
          "We should clean water before drinking it by _______ and filtering it.",
        optionA: "freezing",
        optionB: "boiling",
        optionC: "evaporating",
        correctAnswer: "boiling",
      },
      {
        question:
          "To save water, we should turn off the taps when they are _______ in use.",
        optionA: "dripping",
        optionB: "not",
        optionC: "fully open",
        correctAnswer: "not",
      },
      {
        question:
          "It's important to take only that much water in your glass that you can _______.",
        optionA: "pour out",
        optionB: "drink",
        optionC: "spill",
        correctAnswer: "drink",
      },
      {
        question:
          "Instead of throwing away leftover water from bottles, we can use it to _______ the plants.",
        optionA: "cook",
        optionB: "water",
        optionC: "clean",
        correctAnswer: "water",
      },
      {
        question: "We should avoid taking _______ showers to save water.",
        optionA: "cold",
        optionB: "hot",
        optionC: "long",
        correctAnswer: "long",
      },
      {
        question: "The amount of usable water on Earth is very _______.",
        optionA: "small",
        optionB: "large",
        optionC: "infinite",
        correctAnswer: "small",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Drinking clean and pure water is essential for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Groundwater is obtained by drilling into the ground.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Rainwater seeping into the ground is called 'overhead water.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Water is usually stored in trees and oceans.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Cleaning water can be achieved by boiling and filtering it.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Turning off taps when not in use is an effective way to save water.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "We should use as much water as we want when brushing or washing hands.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Leftover water from bottles should be thrown away.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Water is an abundant resource on Earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Long showers are recommended to save water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
