export const chapter = "Chapter - 1: THINGS AROUND US";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What distinguishes living things from non-living things?",
          optionA: "Growth",
          optionB: "Color",
          optionC: "Weight",
          correctAnswer: "Growth",
        },
        {
          question: "How do plants primarily breathe?",
          optionA: "Through their nose",
          optionB: "Through their leaves",
          optionC: "Through their gills",
          correctAnswer: "Through their leaves",
        },
        {
          question:
            "Which of the following is a characteristic of living things?",
          optionA: "Non-reproduction",
          optionB: "Non-movement",
          optionC: "Non-feeling",
          correctAnswer: "Non-feeling",
        },
        {
          question: "What do living things need to live?",
          optionA: "Only air",
          optionB: "Only water",
          optionC: "Food, water, and air",
          correctAnswer: "Food, water, and air",
        },
        {
          question:
            "Which category includes objects like table, chair, and pen?",
          optionA: "Living things",
          optionB: "Natural non-living things",
          optionC: "Man-made non-living things",
          correctAnswer: "Man-made non-living things",
        },
        {
          question: "How do living things primarily reproduce?",
          optionA: "By laying eggs",
          optionB: "By giving birth to babies",
          optionC: "By producing seeds",
          correctAnswer: "By giving birth to babies",
        },
        {
          question: "What is a characteristic of natural non-living things?",
          optionA: "Made by man",
          optionB: "Found in nature",
          optionC: "Reproduce on their own",
          correctAnswer: "Found in nature",
        },
        {
          question: "Which non-living things are made by man?",
          optionA: "Clouds",
          optionB: "Mountains",
          optionC: "Tables and telephones",
          correctAnswer: "Tables and telephones",
        },
        {
          question: "What do plants need to make their food and grow?",
          optionA: "Food",
          optionB: "Air, water, and sunlight",
          optionC: "Water and soil",
          correctAnswer: "Air, water, and sunlight",
        },
        {
          question:
            "What is a characteristic of both living and non-living things?",
          optionA: "Growth",
          optionB: "Reproduction",
          optionC: "Movement",
          correctAnswer: "Movement",
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
            "Living things grow with the passage of time. An infant grows into an __________. A seed grows into a __________ and so on.",
          options: {
            optionA: "Adolescent, flower",
            optionB: "Adult, plant",
            optionC: "Elder, tree",
          },
          correctAnswer: "Adult, plant",
        },
        {
          question:
            "Plants primarily breathe with the help of __________. Human beings and most animals breathe through __________. Fish breathe through their __________.",
          options: {
            optionA: "Leaves, nose, gills",
            optionB: "Roots, mouth, fins",
            optionC: "Stems, ears, scales",
          },
          correctAnswer: "Leaves, nose, gills",
        },
        {
          question:
            "All living things feel hot, cold, warmth, pain, etc., and react towards them. A pet cat feels happy when its master pats it with love. A plant __________ when exposed to extreme heat or cold.",
          options: {
            optionA: "Blooms",
            optionB: "Wilts",
            optionC: "Shrinks",
          },
          correctAnswer: "Wilts",
        },
        {
          question:
            "All living things __________. We move from one place to another for different reasons. Animals move in search of __________ and shelter. Birds fly in the sky as well as hop on the ground.",
          options: {
            optionA: "Stand still, food",
            optionB: "Move, food",
            optionC: "Hibernate, warmth",
          },
          correctAnswer: "Move, food",
        },
        {
          question:
            "All living things reproduce their own kind. Human beings give birth to __________. Plants produce __________. Some animals lay eggs, while some give birth to their __________.",
          options: {
            optionA: "Puppies, fruits, young",
            optionB: "Babies, seeds, offspring",
            optionC: "Chicks, flowers, descendants",
          },
          correctAnswer: "Babies, seeds, offspring",
        },
        {
          question:
            "Living beings eat food which they get from __________ and other animals. Plants make their own food with the help of __________, __________, and sunlight.",
          options: {
            optionA: "Rocks, air, water",
            optionB: "Other humans, air, soil",
            optionC: "Plants, air, water",
          },
          correctAnswer: "Plants, air, water",
        },
        {
          question:
            "The things that do not grow, breathe, feel, move, and reproduce are called non-living things. Table, chair, book, pen, car, bus, blackboard, water, cloud, rock, mountain, etc., are __________.",
          options: {
            optionA: "Living things",
            optionB: "Natural non-living things",
            optionC: "Man-made non-living things",
          },
          correctAnswer: "Man-made non-living things",
        },
        {
          question:
            "Natural non-living things are found in __________. For example, cloud, rock, mountain, etc. Man-made non-living things are those that are __________ by man.",
          options: {
            optionA: "Cities, created",
            optionB: "Nature, made",
            optionC: "Factories, developed",
          },
          correctAnswer: "Nature, made",
        },
        {
          question:
            "Plants need __________ to make their food and grow. Human beings and animals need air to __________. Plants need air to breathe and to make their food.",
          options: {
            optionA: "Air, breathe",
            optionB: "Soil, live",
            optionC: "Water, grow",
          },
          correctAnswer: "Air, breathe",
        },
        {
          question:
            "Living things need food to live. Plants make their own food with the help of air, water, and sunlight. Human beings and animals eat __________ which they get from __________ and other animals.",
          options: {
            optionA: "Grass, rocks",
            optionB: "Food, plants",
            optionC: "Air, insects",
          },
          correctAnswer: "Food, plants",
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
          question: "Living things grow with the passage of time.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Plants primarily breathe with the help of their leaves, while humans and most animals breathe through their noses.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "All living things feel hot, cold, warmth, pain, etc., and react towards them.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "All living things move, with animals moving in search of food and shelter, and birds flying or hopping for various reasons.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Living beings eat food, which they get from plants and other animals.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Natural non-living things are those found in nature, while man-made non-living things are created by man.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Plants need air to breathe and to make their food.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Living things need food to live, with plants making their own food and humans and animals eating food obtained from plants and other animals.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Natural non-living things are found in nature, while man-made non-living things are created by man.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Living things need food to live, with plants making their own food and humans and animals eating food obtained from plants and other animals.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
