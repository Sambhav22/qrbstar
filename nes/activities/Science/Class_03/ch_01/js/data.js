export const chapter = "Chapter - 1: Things Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the two main categories mentioned in the text?",
          optionA: "Plants and Animals",
          optionB: "Living and Non-living Things",
          optionC: "Humans and Birds",
          correctAnswer: "Living and Non-living Things",
        },
        {
          question:
            "Which of the following is a characteristic of living things?",
          optionA: "Reproduction",
          optionB: "Cloud formation",
          optionC: "Rock formation",
          correctAnswer: "Reproduction",
        },
        {
          question:
            "What is the main difference between living and non-living things regarding growth?",
          optionA: "Non-living things grow rapidly.",
          optionB: "Living things grow with the passage of time.",
          optionC: "Both grow at the same rate.",
          correctAnswer: "Living things grow with the passage of time.",
        },
        {
          question: "Why do living things move according to the text?",
          optionA: "To escape danger",
          optionB: "To respond to their environment",
          optionC: "To avoid reproduction",
          correctAnswer: "To respond to their environment",
        },
        {
          question:
            "How do plants differ from animals and humans in terms of movement?",
          optionA: "Plants can move faster than animals.",
          optionB: "Plants are fixed at one place.",
          optionC: "Plants only move during the night.",
          correctAnswer: "Plants are fixed at one place.",
        },
        {
          question: "What is the main function of stomata in plants?",
          optionA: "Absorb sunlight",
          optionB: "Breathe through tiny pores",
          optionC: "Reproduce through seeds",
          correctAnswer: "Breathe through tiny pores",
        },
        {
          question:
            "What is a characteristic feature of non-living things regarding movement?",
          optionA: "They can move on their own.",
          optionB: "They require an outside force to move.",
          optionC: "They cannot move at all.",
          correctAnswer: "They require an outside force to move.",
        },
        {
          question:
            "Which sense organs do living things possess to feel changes around themselves?",
          optionA: "Eyes only",
          optionB: "All five senses: see, hear, smell, taste, and touch",
          optionC: "Hearing and smelling only",
          correctAnswer: "All five senses: see, hear, smell, taste, and touch",
        },
        {
          question:
            "What is the process through which living things ensure their existence on Earth?",
          optionA: "Growth",
          optionB: "Reproduction",
          optionC: "Movement",
          correctAnswer: "Reproduction",
        },
        {
          question:
            "Why do non-living things not feel the changes around them?",
          optionA: "They have limited senses.",
          optionB: "They lack sense organs.",
          optionC: "They choose not to feel.",
          correctAnswer: "They lack sense organs.",
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
            "Living things ______, _______, _______, _______, and _______.",
          options: {
            optionA: "Fly, Communicate, Rest, Jump, Hibernate",
            optionB: "Grow, Breathe, Move, Feel, Reproduce",
            optionC: "Sleep, Sing, Hibernate, Blink, Swim",
          },
          correctAnswer: "Grow, Breathe, Move, Feel, Reproduce",
        },
        {
          question:
            "Non-living things do not need ______, ______, and _______ to survive.",
          options: {
            optionA: "Light, Sleep, Exercise",
            optionB: "Food, Water, Air",
            optionC: "Music, Shelter, Friends",
          },
          correctAnswer: "Food, Water, Air",
        },
        {
          question:
            "Living things move in search of _______, _______, and _______.",
          options: {
            optionA: "Money, Knowledge, Happiness",
            optionB: "Food, Shelter, Escape Danger",
            optionC: "Cars, Mountains, Roads",
          },
          correctAnswer: "Food, Shelter, Escape Danger",
        },
        {
          question:
            "Plants are fixed at one place, but they show movements in special ways, such as _______ and _______.",
          options: {
            optionA: "Dancing, Singing",
            optionB: "Wilting, Swaying",
            optionC: "Jumping, Running",
          },
          correctAnswer: "Wilting, Swaying",
        },
        {
          question:
            "Living beings need food and water to live and grow. Plants make their own food in the presence of ______, _______, and _______.",
          options: {
            optionA: "Moonlight, Fire, Water",
            optionB: "Sunlight, Water, Air",
            optionC: "Electricity, Wind, Soil",
          },
          correctAnswer: "Sunlight, Water, Air",
        },
        {
          question:
            "Living things have sense organs to feel the changes around themselves. Insects have _______ to feel changes around themselves.",
          options: {
            optionA: "Wings, Antennae, Fins",
            optionB: "Ears, Eyes, Noses",
            optionC: "Feathers, Paws, Claws",
          },
          correctAnswer: "Wings, Antennae, Fins",
        },
        {
          question: "Living things _______ in air.",
          options: {
            optionA: "Jump, Sleep, Breathe",
            optionB: "Sing, Breathe, Walk",
            optionC: "Breathe, Fly, Talk",
          },
          correctAnswer: "Breathe, Fly, Talk",
        },
        {
          question: "Living things reproduce through _______.",
          options: {
            optionA: "Laying Eggs, Giving Birth, Budding",
            optionB: "Flowers, Fruits, Seeds",
            optionC: "Pollination, Photosynthesis, Germination",
          },
          correctAnswer: "Laying Eggs, Giving Birth, Budding",
        },
        {
          question:
            "Living things can see, hear, smell, taste, and _______ to respond to their environment.",
          options: {
            optionA: "Jump, Swim, Fly",
            optionB: "Touch",
            optionC: "Dance, Sing, Sleep",
          },
          correctAnswer: "Touch",
        },
        {
          question: "Non-living things _______.",
          options: {
            optionA: "Laugh, Cry, Feel",
            optionB: "Reproduce, Grow, Breathe",
            optionC: "Do not feel",
          },
          correctAnswer: "Do not feel",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The Sun is the primary source of life on Earth.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Non-living things need food, water, and air to survive.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Plants can move from one place to another in search of food.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Fish breathe through lungs.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Living things reproduce their own kind.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Insects such as grasshoppers have antennae to feel changes around themselves.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Living things can see, hear, smell, taste, and touch to respond to their environment.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Plants make their own food in the presence of sunlight, water, and air.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "The Earth has only one natural satellite, the Moon.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Non-living things can feel changes around them.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
