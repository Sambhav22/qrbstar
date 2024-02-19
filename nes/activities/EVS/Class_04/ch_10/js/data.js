export const chapter = "Chapter - 10: Habitats of Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is a habitat for animals?",
            options: [
              "a) A place where animals hunt",
              "b) A natural home where animals live and grow",
              "c) A location for animal sanctuaries",
            ],
            answer: "b) A natural home where animals live and grow",
          },
          {
            question: "Where do terrestrial animals predominantly live?",
            options: ["a) In the sky", "b) On land", "c) Underwater"],
            answer: "b) On land",
          },
          {
            question:
              "What is an example of a semi-natural or man-made terrestrial habitat?",
            options: ["a) Caves", "b) Deserts", "c) National parks"],
            answer: "c) National parks",
          },
          {
            question:
              "Where do arboreal animals like monkeys and squirrels spend most of their time?",
            options: ["a) Underwater", "b) On trees", "c) In caves"],
            answer: "b) On trees",
          },
          {
            question: "Where do rabbits and snakes make their homes?",
            options: [
              "a) In trees",
              "b) Underwater",
              "c) Deep inside the ground",
            ],
            answer: "c) Deep inside the ground",
          },
          {
            question: "What type of animals are fish, whales, and dolphins?",
            options: [
              "a) Terrestrial animals",
              "b) Aquatic animals",
              "c) Arboreal animals",
            ],
            answer: "b) Aquatic animals",
          },
          {
            question: "What is an example of a semi-aquatic animal?",
            options: ["a) Lions", "b) Walruses", "c) Elephants"],
            answer: "b) Walruses",
          },
          {
            question: "Where do crabs, turtles, and sea worms find shelter?",
            options: [
              "a) In the air",
              "b) Under rocks or in the sand",
              "c) In caves",
            ],
            answer: "b) Under rocks or in the sand",
          },
          {
            question: "What do animal sanctuaries serve as?",
            options: [
              "a) Restaurants for animals",
              "b) Shelter places for homeless animals",
              "c) Entertainment centers for animals",
            ],
            answer: "b) Shelter places for homeless animals",
          },
          {
            question:
              "What do people promote through adoption campaigns at animal sanctuaries?",
            options: [
              "a) Campaigns against animals",
              "b) Adoption of plants",
              "c) Adoption of animals to give them good care",
            ],
            answer: "c) Adoption of animals to give them good care",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fillInTheBlankQuestions: [
          {
            question: "Terrestrial animals live predominantly on ________.",
            options: ["a) Mountains", "b) Land", "c) Oceans"],
            answer: "b) Land",
          },
          {
            question:
              "Arboreal animals, like monkeys and squirrels, spend most of their time on ________.",
            options: ["a) Rocks", "b) Trees", "c) Deserts"],
            answer: "b) Trees",
          },
          {
            question:
              "The habitat of aquatic animals is primarily in ________.",
            options: ["a) Caves", "b) Forests", "c) Water"],
            answer: "c) Water",
          },
          {
            question:
              "Walruses spend their whole life inside the water in the ________ regions.",
            options: ["a) Desert", "b) Polar", "c) Tropical"],
            answer: "b) Polar",
          },
          {
            question:
              "Rabbits and snakes make a hole deep inside the ________ to live.",
            options: ["a) Trees", "b) Sand", "c) Sky"],
            answer: "b) Sand",
          },
          {
            question:
              "Animal sanctuaries serve as shelter places for ________ animals.",
            options: ["a) Endangered", "b) Homeless", "c) Domesticated"],
            answer: "b) Homeless",
          },
          {
            question:
              "The seashore provides shelter to crabs, turtles, and sea worms under rocks or in ________.",
            options: ["a) Air", "b) Caves", "c) Sand"],
            answer: "c) Sand",
          },
          {
            question:
              "Some fish make their homes in corals or among the ________ plants.",
            options: ["a) Desert", "b) Underwater", "c) Arboreal"],
            answer: "b) Underwater",
          },
          {
            question:
              "Adoption campaigns at animal sanctuaries promote giving good care to ________.",
            options: ["a) Plants", "b) Wild animals", "c) Insects"],
            answer: "b) Wild animals",
          },
          {
            question: "Animals like lions and tigers live in ________.",
            options: ["a) Caves", "b) Forests", "c) Deserts"],
            answer: "a) Caves",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        trueFalseQuestions: [
          {
            question: "Terrestrial animals primarily live in water habitats.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "Arboreal animals, like monkeys and squirrels, spend most of their time underground.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "The habitat of aquatic animals is mainly found in forests.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "Walruses spend their entire life outside of water in polar regions.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question: "Rabbits and snakes make holes in the air to live.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "Animal sanctuaries only serve as shelters for domesticated animals.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "The seashore provides shelter to crabs, turtles, and sea worms in caves.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "Some fish make their homes in corals or among the arboreal plants.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question:
              "Adoption campaigns at animal sanctuaries promote giving good care to plants.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
          {
            question: "Animals like lions and tigers live in deserts.",
            options: ["a) Correct", "b) Incorrect"],
            answer: "b) Incorrect",
          },
        ],
      },
    ],
  };
}

export var activityData;
