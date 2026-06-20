export const chapter = "Chapter - 2: The World of Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the main characteristic of big plants such as trees?",
          optionA: "Soft and green stems",
          optionB: "Thick, brown, and woody stems",
          optionC: "Many thin but woody stems",
          correctAnswer: "Thick, brown, and woody stems",
        },
        {
          question:
            "Which of the following is an example of a small but strong plant known as a shrub?",
          optionA: "Mango",
          optionB: "Rose",
          optionC: "Pea",
          correctAnswer: "Rose",
        },
        {
          question:
            "What type of plants are characterized by very soft and green stems and have a short lifespan of only a few months?",
          optionA: "Climbers",
          optionB: "Herbs",
          optionC: "Creepers",
          correctAnswer: "Herbs",
        },
        {
          question:
            "Which category of plants requires support to stand straight?",
          optionA: "Climbers",
          optionB: "Trees",
          optionC: "Shrubs",
          correctAnswer: "Climbers",
        },
        {
          question:
            "Among the listed herbs, which one has a short lifespan and is known for its aromatic leaves used in cooking?",
          optionA: "Spinach",
          optionB: "Mint",
          optionC: "Sunflower",
          correctAnswer: "Mint",
        },
        {
          question:
            "What is the common feature of climbers like money plant, grapevine, and pea?",
          optionA: "Woody stems",
          optionB: "Soft and green stems",
          optionC: "Need for support to stand straight",
          correctAnswer: "Need for support to stand straight",
        },
        {
          question:
            "Which of the following is an example of a big plant that lives for many years?",
          optionA: "Jasmine",
          optionB: "Neem",
          optionC: "Cotton",
          correctAnswer: "Neem",
        },
        {
          question: "What distinguishes creepers from other types of plants?",
          optionA: "Thick and woody stems",
          optionB: "Creeping along the ground",
          optionC: "Need for support to stand straight",
          correctAnswer: "Creeping along the ground",
        },
        {
          question:
            "Among the listed shrubs, which one is commonly associated with its use in making garlands and perfumes?",
          optionA: "Hibiscus",
          optionB: "Rose",
          optionC: "Jasmine",
          correctAnswer: "Jasmine",
        },
        {
          question: "What type of stems do herbs generally have?",
          optionA: "Woody stems",
          optionB: "Brown and woody stems",
          optionC: "Soft and green stems",
          correctAnswer: "Soft and green stems",
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
            "Big plants with thick, brown, and woody stems are called ___________.",
          optionA: "Herbs",
          optionB: "Climbers",
          optionC: "Trees",
          correctAnswer: "Trees",
        },
        {
          question:
            "Shrubs are smaller than trees and have many thin but woody and strong ___________.",
          optionA: "Leaves",
          optionB: "Stems",
          optionC: "Roots",
          correctAnswer: "Stems",
        },
        {
          question:
            "Herbs have very soft and green ___________ and live only for a few ___________.",
          optionA: "Stems, months",
          optionB: "Leaves, years",
          optionC: "Roots, days",
          correctAnswer: "Stems, months",
        },
        {
          question:
            "Climbers are plants that need ___________ to stand straight.",
          optionA: "Sunlight",
          optionB: "Water",
          optionC: "Support",
          correctAnswer: "Support",
        },
        {
          question:
            "Creepers are weak plants that ___________ along the ground.",
          optionA: "Stand tall",
          optionB: "Creep",
          optionC: "Climb trees",
          correctAnswer: "Creep",
        },
        {
          question:
            "___________, ___________, and ___________ are examples of herbs mentioned in the text.",
          optionA: "Rose, Cotton, Mango",
          optionB: "Mint, Spinach, Sunflower",
          optionC: "Jasmine, Neem, Apple",
          correctAnswer: "Mint, Spinach, Sunflower",
        },
        {
          question:
            "Neem is an example of a ___________ plant that lives for many ___________.",
          optionA: "Climber, days",
          optionB: "Tree, years",
          optionC: "Shrub, months",
          correctAnswer: "Tree, years",
        },
        {
          question:
            "Jasmine, Rose, and Hibiscus are examples of ___________ mentioned in the text.",
          optionA: "Trees",
          optionB: "Shrubs",
          optionC: "Creepers",
          correctAnswer: "Shrubs",
        },
        {
          question:
            "Money plant, Grapevine, and Pea are examples of ___________.",
          optionA: "Herbs",
          optionB: "Climbers",
          optionC: "Trees",
          correctAnswer: "Climbers",
        },
        {
          question:
            "Pumpkins, Watermelons, and Melons are examples of ___________.",
          optionA: "Trees",
          optionB: "Shrubs",
          optionC: "Creepers",
          correctAnswer: "Creepers",
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
            "Big plants with thick, brown, and woody stems are known as shrubs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Shrubs have thin but woody and strong stems.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Herbs are plants with thick and woody stems.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Climbers need support to stand straight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Creepers are plants that grow tall and upright.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Jasmine, Rose, and Hibiscus are examples of trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Neem is a shrub that lives for many years.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Money plant, Grapevine, and Pea are examples of climbers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Pumpkins, Watermelons, and Melons are examples of shrubs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Mint, Spinach, and Sunflower are examples of herbs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
