export const chapter = "Chapter - 9: AIR AROUND US";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the main component of air that we cannot see or touch?",
          optionA: "Water Vapor",
          optionB: "Dust",
          optionC: "Smoke",
          correctAnswer: "Water Vapor",
        },
        {
          question:
            "How does water from wet clothes disappear when hung in the sun?",
          optionA: "It evaporates and turns into water vapor",
          optionB: "It turns into dust particles",
          optionC: "It transforms into smoke",
          correctAnswer: "It evaporates and turns into water vapor",
        },
        {
          question:
            "What is responsible for dust settling on the surfaces of furniture in a closed room?",
          optionA: "Water Vapor",
          optionB: "Smoke",
          optionC: "Air",
          correctAnswer: "Air",
        },
        {
          question:
            "What is the grey, white, or black gas produced after burning something called?",
          optionA: "Water Vapor",
          optionB: "Dust",
          optionC: "Smoke",
          correctAnswer: "Smoke",
        },
        {
          question: "How do germs spread in the air?",
          optionA: "Through water vapor",
          optionB: "Through smoke",
          optionC: "Through coughing or sneezing",
          correctAnswer: "Through coughing or sneezing",
        },
        {
          question: "What can make the air clean and fresh?",
          optionA: "Dust particles",
          optionB: "Smoke-emitting places",
          optionC: "Plants",
          correctAnswer: "Plants",
        },
        {
          question: "What is the term for moving air?",
          optionA: "Breeze",
          optionB: "Storm",
          optionC: "Dust",
          correctAnswer: "Breeze",
        },
        {
          question: "How can the direction of the wind be determined?",
          optionA: "By the movement of branches of trees",
          optionB: "By the color of the sky",
          optionC: "By the temperature of the air",
          correctAnswer: "By the movement of branches of trees",
        },
        {
          question: "What does wind do when it moves slowly or gently?",
          optionA: "Causes a storm",
          optionB: "Creates smoke",
          optionC: "Called breeze",
          correctAnswer: "Called breeze",
        },
        {
          question: "What force does wind possess?",
          optionA: "Heat",
          optionB: "Light",
          optionC: "Force",
          correctAnswer: "Force",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "When we wash our clothes and hang them in the sun, they get dried up after some time. The water from clothes changes into ________ and mixes with air.",
          optionA: "Dust",
          optionB: "Smoke",
          optionC: "Water Vapor",
          correctAnswer: "Water Vapor",
        },
        {
          question:
            "You must have seen dust settled on the surface of furniture even in a closed room. Dust in the air comes through ________ ways.",
          optionA: "Water Vapor",
          optionB: "Many",
          optionC: "Smoke",
          correctAnswer: "Many",
        },
        {
          question:
            "The grey, white, or black gas produced after burning something is called ________. It comes out from houses, factories, vehicles, and burning things.",
          optionA: "Smoke",
          optionB: "Water Vapor",
          optionC: "Dust",
          correctAnswer: "Smoke",
        },
        {
          question:
            "When we cough or sneeze, ________ get mixed with air. There are many diseases which spread through foul or impure air.",
          optionA: "Smoke",
          optionB: "Germs",
          optionC: "Water Vapor",
          correctAnswer: "Germs",
        },
        {
          question:
            "It is important to keep air clean. Plants make the air clean and fresh. We must breathe in clean and fresh air to avoid getting ________.",
          optionA: "Dusty",
          optionB: "Ill",
          optionC: "Smoky",
          correctAnswer: "Ill",
        },
        {
          question:
            "Moving air is called ________. When it moves slowly or gently, it is called breeze, and when it blows fast or strongly, it is called ________.",
          optionA: "Wind, Storm",
          optionB: "Breeze, Wind",
          optionC: "Storm, Breeze",
          correctAnswer: "Breeze, Wind",
        },
        {
          question:
            "Wind always blows in a direction. The direction of the wind can be seen in the movement of the branches of trees, smoke from the chimneys, etc. Wind has ________.",
          optionA: "Temperature",
          optionB: "Force",
          optionC: "Dust",
          correctAnswer: "Force",
        },
        {
          question:
            "Moving air or wind has a lot of ________. It can even uproot trees and blow away the sheds of kutcha houses.",
          optionA: "Heat",
          optionB: "Light",
          optionC: "Force",
          correctAnswer: "Force",
        },
        {
          question:
            "Strong wind has a very high ________. Its speed helps to sail boats and ships faster.",
          optionA: "Force",
          optionB: "Temperature",
          optionC: "Speed",
          correctAnswer: "Speed",
        },
        {
          question:
            "To keep the air clean, we can follow some tips. One of the tips is to keep the doors and windows open to allow ________ air to enter the house.",
          optionA: "Fresh",
          optionB: "Dusty",
          optionC: "Smoky",
          correctAnswer: "Fresh",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "Air contains water vapor, dust, smoke, and germs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Water from wet clothes disappears by turning into dust particles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smoke is produced after burning something and gets mixed with air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Germs can spread through the air when we cough or sneeze.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Plants make the air dirty and should be avoided.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Breeze and storm are two different names for the same wind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The wind always blows in a direction and has force.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Wind can cause damage by uprooting trees and blowing away sheds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Wind speed has no impact on sailing boats and ships.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Keeping doors and windows open can help in breathing fresh air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
