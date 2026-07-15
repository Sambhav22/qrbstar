export const chapter = "Chapter - 7: Our Neighbourhood  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What do we call the people who live near our house?",
        optionA: "Relatives",
        optionB: "Friends",
        optionC: "Neighbors",
        correctAnswer: "Neighbors",
      },
      {
        question: "How do neighbors typically interact with each other?",
        optionA: "They ignore each other",
        optionB: "They help each other in times of need",
        optionC: "They compete with each other",
        correctAnswer: "They help each other in times of need",
      },
      {
        question:
          "What is a key aspect of good neighborly behavior mentioned in the text?",
        optionA: "Playing music loudly",
        optionB: "Throwing garbage on the street",
        optionC: "Keeping the neighborhood clean",
        correctAnswer: "Keeping the neighborhood clean",
      },
      {
        question:
          "What useful service does a post office provide to the community?",
        optionA: "Selling groceries",
        optionB: "Sending letters and parcels",
        optionC: "Repairing electronics",
        correctAnswer: "Sending letters and parcels",
      },
      {
        question: "Where can you buy stamps, envelopes, and postcards?",
        optionA: "Grocery store",
        optionB: "Post office",
        optionC: "Electronics shop",
        correctAnswer: "Post office",
      },
      {
        question:
          "What is the primary function of a police station in a neighborhood?",
        optionA: "Selling groceries",
        optionB: "Maintaining law and order",
        optionC: "Repairing shoes",
        correctAnswer: "Maintaining law and order",
      },
      {
        question: "What kind of place is a hospital in a neighborhood?",
        optionA: "A place to buy clothes",
        optionB: "A place to treat patients",
        optionC: "A place to watch movies",
        correctAnswer: "A place to treat patients",
      },
      {
        question: "What is the purpose of a bank in a neighborhood?",
        optionA: "Keeping money safe",
        optionB: "Selling jewelry",
        optionC: "Repairing electronics",
        correctAnswer: "Keeping money safe",
      },
      {
        question: "What can you do with an ATM card at a bank?",
        optionA: "Watch movies",
        optionB: "Deposit money",
        optionC: "Withdraw money",
        correctAnswer: "Withdraw money",
      },
      {
        question: "What recreational activities can people enjoy in a park?",
        optionA: "Shopping for clothes",
        optionB: "Playing on swings",
        optionC: "Repairing shoes",
        correctAnswer: "Playing on swings",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "We live with our family in our __________.",
        optionA: "School",
        optionB: "House",
        optionC: "Car",
        correctAnswer: "House",
      },
      {
        question: "Neighbours meet daily. They wish one another __________.",
        optionA: "Weekly",
        optionB: "Yearly",
        optionC: "Daily",
        correctAnswer: "Daily",
      },
      {
        question: "We must keep the neighbourhood __________.",
        optionA: "Dirty",
        optionB: "Clean",
        optionC: "Crowded",
        correctAnswer: "Clean",
      },
      {
        question: "Neighbourhood places provide us useful __________.",
        optionA: "Fun",
        optionB: "Services",
        optionC: "Music",
        correctAnswer: "Services",
      },
      {
        question: "Many shops together make a __________.",
        optionA: "Mall",
        optionB: "Hospital",
        optionC: "Market",
        correctAnswer: "Market",
      },
      {
        question:
          "A post office helps us to send our __________ to other people living far away from us.",
        optionA: "Gifts",
        optionB: "Letters",
        optionC: "Toys",
        correctAnswer: "Letters",
      },
      {
        question:
          "A police station helps to maintain law and order in the __________.",
        optionA: "Playground",
        optionB: "Locality",
        optionC: "Bank",
        correctAnswer: "Locality",
      },
      {
        question:
          "A hospital is a place where patients are treated. Patients are admitted to the hospital for __________.",
        optionA: "Observation",
        optionB: "Shopping",
        optionC: "Eating",
        correctAnswer: "Observation",
      },
      {
        question: "A bank keeps our money __________.",
        optionA: "Safe",
        optionB: "Outside",
        optionC: "Dirty",
        correctAnswer: "Safe",
      },
      {
        question:
          "A mall has restaurants, cinema halls, ice cream parlors, and many other __________.",
        optionA: "Services",
        optionB: "Recreational things",
        optionC: "Electronics",
        correctAnswer: "Recreational things",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "We live with our family in our house.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Neighbors live like friends.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Neighbors typically ignore each other.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Good neighborly behavior includes keeping the neighborhood clean.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "A post office helps us to send letters, parcels, and money orders to other people.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Police stations are not necessary in a neighborhood.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Hospitals are places where patients are treated.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Banks have ATMs for withdrawing money.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Parks are primarily for shopping and eating.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Libraries are full of different musical instruments.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
