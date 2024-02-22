export const chapter = "Chapter - 13: Shelter for All";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the primary purpose of houses for humans, according to the passage?",
            options: [
              "Socializing",
              "Protection from weather, theft, and wild animals",
              "Providing a comfortable living space",
            ],
            answer: "Protection from weather, theft, and wild animals",
          },
          {
            question:
              "What are the three types of ants found in a colony, as mentioned in the text?",
            options: [
              "Soldier ants, worker ants, and queen ants",
              "Queen ant, female workers, and male ants",
              "Red ants, black ants, and brown ants",
            ],
            answer: "Queen ant, female workers, and male ants",
          },
          {
            question:
              "Where do bees live together in large, well-organized family groups?",
            options: ["Anthill", "Beehive", "Stilts"],
            answer: "Beehive",
          },
          {
            question:
              "What type of houses are commonly seen in hilly and cold regions?",
            options: [
              "Houses with bamboo walls",
              "Houses with igloos",
              "Houses made of wood with sloping roofs",
            ],
            answer: "Houses made of wood with sloping roofs",
          },
          {
            question:
              "What are igloos made of, and in which region are they commonly found?",
            options: [
              "Wood; Hilly regions",
              "Blocks of ice; Polar regions",
              "Straw; Hot regions",
            ],
            answer: "Blocks of ice; Polar regions",
          },
          {
            question:
              "In flood-prone areas, what are houses built on to keep them safe from floodwater and insects?",
            options: ["Anthills", "Stilts", "Igloos"],
            answer: "Stilts",
          },
          {
            question:
              "What materials are houses made of in earthquake-prone regions to prevent injuries in case of collapse?",
            options: ["Bricks and stones", "Blocks of ice", "Bamboo and wood"],
            answer: "Bamboo and wood",
          },
          {
            question:
              "In hot climatic conditions, what are the roofs of houses covered with to save them from heating due to the sun?",
            options: ["Wood", "Straw or other plant materials", "Mud"],
            answer: "Straw or other plant materials",
          },
          {
            question:
              "What determines the type of houses in a region, according to the passage?",
            options: [
              "Cultural factors",
              "Climate, availability of building materials, and economic status",
              "Government regulations",
            ],
            answer:
              "Climate, availability of building materials, and economic status",
          },
          {
            question:
              "What is a small settlement close to the road, where all settlers are engaged in the same profession?",
            options: ["Village", "City", "Hamlet"],
            answer: "Hamlet",
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
        fill_in_the_blank_questions: [
          {
            question: "Ants are social insects that live in ___________.",
            options: ["Nests", "Beehives", "Igloos"],
            answer: "Colonies",
          },
          {
            question: "Bees live together in a __________.",
            options: ["Stilts", "Beehive", "Anthill"],
            answer: "Beehive",
          },
          {
            question:
              "In hilly and cold regions, houses are made up of __________.",
            options: ["Bamboo", "Wood", "Bricks"],
            answer: "Wood",
          },
          {
            question:
              "In polar regions, houses called __________ are made up of blocks of ice.",
            options: ["Igloos", "Stilts", "Anthills"],
            answer: "Igloos",
          },
          {
            question:
              "Houses built on raised platforms or poles called __________ are common in flood-prone areas.",
            options: ["Beehives", "Stilts", "Anthills"],
            answer: "Stilts",
          },
          {
            question:
              "In earthquake-prone regions, houses are made up of __________ and wood.",
            options: ["Bricks", "Bamboo", "Stone"],
            answer: "Bamboo",
          },
          {
            question:
              "In hot regions, houses have thick walls plastered with __________.",
            options: ["Bamboo", "Mud", "Wood"],
            answer: "Mud",
          },
          {
            question:
              "In moderate climatic regions, people use __________ to construct houses.",
            options: ["Wood", "Bricks", "Bamboo"],
            answer: "Bricks and stones",
          },
          {
            question:
              "The settlement is divided into hamlet, village, town, and city based on the __________ of people.",
            options: ["Income", "Climate", "Government regulations"],
            answer: "Number of people living in an area",
          },
          {
            question:
              "Animals who live both in water and on land are called __________.",
            options: ["Aquatic animals", "Terrestrial animals", "Amphibians"],
            answer: "Amphibians",
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
        true_or_false_questions: [
          {
            question:
              "Ants live in colonies, consisting of queen ant, female workers, and male ants.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Bees work together to build a colony and live in large, well-organized family groups.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Houses in hilly and cold regions usually have flat roofs to prevent snowfall accumulation.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Igloos, houses made of blocks of ice, are commonly found in hot regions.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Houses built on stilts in flood-prone areas keep the house safe from floodwater as well as snakes and insects.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "In earthquake-prone regions, houses are made of bamboo and wood to prevent injury in case of collapse.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Houses in hot climatic conditions have thick walls plastered with mud and roofs covered with straw.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Settlements are divided into hamlet, village, town, and city based on the economic status of the house owner.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Animals who live in water are called terrestrial animals, such as whales, dolphins, and crabs.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Aerial animals, like birds, fly in the air and rest on trees.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
