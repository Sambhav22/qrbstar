export const chapter = "Chapter - 19: A Salute to Trees";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary subject of the poem?",
        optionA: "Flowers",
        optionB: "Trees",
        optionC: "Boats",
        correctAnswer: "Trees",
      },
      {
        question: "Why are some trees mentioned as being useful in the poem?",
        optionA: "Because they look beautiful",
        optionB: "Because they provide shade",
        optionC: "Because they have various practical purposes",
        correctAnswer: "Because they have various practical purposes",
      },
      {
        question: "What are some trees used for in the poem?",
        optionA: "Playing music",
        optionB: "Making art",
        optionC: "Providing shelter against the storm",
        correctAnswer: "Providing shelter against the storm",
      },
      {
        question:
          "According to the poem, why are some trees used to keep the fireplace warm?",
        optionA: "Because they are colorful",
        optionB: "Because they are tall",
        optionC: "Because they provide firewood",
        correctAnswer: "Because they provide firewood",
      },
      {
        question:
          "What is the purpose of some trees mentioned in relation to a boat ride?",
        optionA: "They are used for fishing",
        optionB: "They are used as oars",
        optionC: "They are used as shade by the riverside",
        correctAnswer: "They are used as oars",
      },
      {
        question:
          "What type of trees are mentioned for their strength in the poem?",
        optionA: "Trees with colorful leaves",
        optionB: "Trees with strong roots",
        optionC: "Trees with sweet fruits",
        correctAnswer: "Trees with strong roots",
      },
      {
        question:
          "According to the poem, why are some trees used for the roof?",
        optionA: "Because they are tall",
        optionB: "Because they have beautiful leaves",
        optionC: "Because they provide materials for roofing",
        correctAnswer: "Because they provide materials for roofing",
      },
      {
        question:
          "What have trees offered to man since the world began, according to the poem?",
        optionA: "Clothing",
        optionB: "Food",
        optionC: "Gifts",
        correctAnswer: "Gifts",
      },
      {
        question: "Which part of the tree is mentioned for its sweetness?",
        optionA: "Leaves",
        optionB: "Fruits",
        optionC: "Roots",
        correctAnswer: "Fruits",
      },
      {
        question:
          "According to the poem, what are some trees used for in a stream?",
        optionA: "Swimming",
        optionB: "Drinking water",
        optionC: "Boat rides",
        correctAnswer: "Boat rides",
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
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "root", "branches"],
        correctAnswer: "root",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or __________. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "fruit", "bark"],
        correctAnswer: "fruit",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the __________ of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["height", "color", "strength"],
        correctAnswer: "strength",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for shelter against the __________, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["rain", "sun", "storm"],
        correctAnswer: "storm",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace __________. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["cold", "warm", "dry"],
        correctAnswer: "warm",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["soil", "flower", "beam"],
        correctAnswer: "beam",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for a boat ride in a __________. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["desert", "river", "mountain"],
        correctAnswer: "river",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["roof", "soil", "fruit"],
        correctAnswer: "fruit",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the __________, Some for the sweetness of flower or fruit. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the __________, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["bark", "soil", "beam"],
        correctAnswer: "beam",
      },
      {
        question:
          "Many a tree is found in the wood, And every tree for its use is good. Some for the strength of the root, Some for the sweetness of __________. Some for shelter against the storm, And some to keep the fireplace warm. Some for the roof and some for the beam, And some for a boat ride in a stream. In the wealth of the wood since the world began, The trees have offered their gifts to man.",
        options: ["leaves", "soil", "flower"],
        correctAnswer: "flower",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A rectangle has three sides.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Water boils at 100 degrees Celsius at sea level.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The Earth revolves around the Moon.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "An octopus has five tentacles.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Gold is a liquid at room temperature.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Great Wall of China can be seen from space with the naked eye.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The sun rises in the west and sets in the east.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Jupiter is the largest planet in our solar system.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Bees hibernate during the winter.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The Nile River is the longest river in the world.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
