export const chapter = "Chapter - 6: Getting to Know Plants  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two main groups into which plants are generally divided?",
          optionA: "Fruits and vegetables",
          optionB: "Flowering plants and non-flowering plants",
          optionC: "Herbs and shrubs",
          correctAnswer: "Flowering plants and non-flowering plants",
        },
        {
          question:
            "Which of the following is an example of a non-flowering plant?",
          optionA: "Rose",
          optionB: "Sunflower",
          optionC: "Mushroom",
          correctAnswer: "Mushroom",
        },
        {
          question:
            "What category do plants like watermelon and pumpkin fall under based on their growth habit?",
          optionA: "Herbs",
          optionB: "Climbers",
          optionC: "Creepers",
          correctAnswer: "Creepers",
        },
        {
          question:
            "Which of the following is a modification of roots for storage of food?",
          optionA: "Fibrous roots",
          optionB: "Taproots",
          optionC: "Prop roots",
          correctAnswer: "Taproots",
        },
        {
          question: "What is the main function of stems in plants?",
          optionA: "Absorption of water",
          optionB: "Support and transport",
          optionC: "Storage of food",
          correctAnswer: "Support and transport",
        },
        {
          question: "In which part of the leaf does photosynthesis occur?",
          optionA: "Petiole",
          optionB: "Lamina",
          optionC: "Midrib",
          correctAnswer: "Lamina",
        },
        {
          question: "What is the male part of a flower called?",
          optionA: "Pistil",
          optionB: "Stamen",
          optionC: "Sepal",
          correctAnswer: "Stamen",
        },
        {
          question:
            "What is the process of transfer of pollen grains from anther to stigma called?",
          optionA: "Germination",
          optionB: "Fertilization",
          optionC: "Pollination",
          correctAnswer: "Pollination",
        },
        {
          question:
            "How do flowers of plants like maize and wheat achieve pollination?",
          optionA: "Insect pollination",
          optionB: "Wind pollination",
          optionC: "Water pollination",
          correctAnswer: "Wind pollination",
        },
        {
          question: "What is the function of fruits in seed dispersal?",
          optionA: "Protect seeds from harsh weather",
          optionB: "Attract pollinators",
          optionC: "Provide food for the plant",
          correctAnswer: "Protect seeds from harsh weather",
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
            "Herbs are small plants with soft and delicate stems. They are generally smaller in size, up to one metre, and may live for ___ or ___ seasons. Examples of herbs are tulsi, coriander, mint, balsam, wheat, paddy, mustard, etc.",
          options: ["one", "two", "three"],
          correctAnswer: "one",
        },
        {
          question:
            "Shrubs are medium-sized plants with hard and woody stems, often profusely branched. They do not have a single stem or trunk, and branches may arise from the early part of the stem. Their lifespan covers many years, though less than ___. Lemon, henna, lantana, bougainvillea, and pomegranate are some of the examples of shrubs.",
          options: ["trees", "herbs", "many"],
          correctAnswer: "trees",
        },
        {
          question:
            "Trees are the most advanced plants. They have a tall and woody stem called trunk. The trunk may produce branches, twigs, and leaves. Coconut and palm are also trees, though they do not possess branches. Trees generally survive for ___ years. Neem, sheesham, sal, teak, mango are a few examples of trees.",
          options: ["several", "many", "few"],
          correctAnswer: "many",
        },
        {
          question:
            "Plants such as watermelon, pumpkin, and strawberry spread out on the ground because their stems are very weak and they cannot stand upright. These plants are called ___.",
          options: ["climbers", "shrubs", "creepers"],
          correctAnswer: "creepers",
        },
        {
          question:
            "The parts that remain under the ground (roots) form the root system. The parts above the ground (stem, leaves, flowers, and fruits) form the ___ system.",
          options: ["growth", "reproductive", "shoot"],
          correctAnswer: "shoot",
        },
        {
          question:
            "Roots give support to the plants by anchoring them firmly into the ground. Roots absorb minerals and water from the soil, which are essential for their survival. Roots prevent the soil from being blown off by wind or washed away by water. Therefore, planting trees helps in the conservation of ___.",
          options: ["water", "soil", "air"],
          correctAnswer: "soil",
        },
        {
          question:
            "The stem forms the main axis on which leaves, buds, branches, flowers, and fruits arise. The place on the stem where one or more leaves arise is called the ___, and the portion of the stem between two successive nodes is called the ___.",
          options: ["internode, node", "node, internode", "branch, leaf"],
          correctAnswer: "node, internode",
        },
        {
          question:
            "Leaves make the food for the plant in the presence of sunlight and chlorophyll using carbon dioxide and water. This process is known as ___.",
          options: ["photosynthesis", "respiration", "transpiration"],
          correctAnswer: "photosynthesis",
        },
        {
          question:
            "A flower is the most beautiful and attractive part of the plant. A flower is the reproductive organ of the plant. It usually develops on a branch from a bud. A stalk, called the pedicel, supports the flower on the branch. The upper swollen end of the pedicel is called the ___.",
          options: ["calyx", "thalamus", "corolla"],
          correctAnswer: "thalamus",
        },
        {
          question:
            "The process of transfer of pollen grains from the anther of a flower to the stigma of the same or another flower is known as ___.",
          options: ["fertilization", "pollination", "germination"],
          correctAnswer: "pollination",
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
            "Plants such as watermelon, pumpkin, and strawberry are categorized as climbers.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Shrubs have a single, tall, and woody stem called a trunk.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The stem of a plant transports water and minerals from the leaves to the roots.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Herbs are generally smaller in size, up to one meter, and may live for several seasons.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Roots of some plants like radish and carrot are modified for climbing.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In a monarchy, rulers were elected or chosen by the people.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Brahmins dominated society in religious matters, helping people perform yajna and other rituals.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Leaves perform the function of photosynthesis by exchanging gases through small pores called stomata.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Vedic varna system became more flexible over time, allowing free intermarriage and intermixing.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The process of transfer of pollen grains from the anther of a flower to the stigma is known as fertilization.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
