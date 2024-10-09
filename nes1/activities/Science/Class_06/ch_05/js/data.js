export const chapter = "Chapter - 5: Organisms and Their Surroundings";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the meaning of 'biotic' in the context of the environment?",
          optionA: "Non-living",
          optionB: "Living",
          optionC: "Human-made",
          correctAnswer: "Living",
        },
        {
          question:
            "Which of the following is a biotic component of the environment?",
          optionA: "Soil",
          optionB: "Water",
          optionC: "Scavenger",
          correctAnswer: "Scavenger",
        },
        {
          question:
            "What is the process by which plants make their own food using sunlight, water, and carbon dioxide?",
          optionA: "Respiration",
          optionB: "Decomposition",
          optionC: "Photosynthesis",
          correctAnswer: "Photosynthesis",
        },
        {
          question:
            "How do animals in aquatic habitats like oceans and seas breathe?",
          optionA: "Through gills",
          optionB: "Through lungs",
          optionC: "Through skin",
          correctAnswer: "Through gills",
        },
        {
          question:
            "What role do scavengers and decomposers play in the environment?",
          optionA: "Producing oxygen",
          optionB: "Recycling nutrients",
          optionC: "Providing shelter",
          correctAnswer: "Recycling nutrients",
        },
        {
          question:
            "Which abiotic component is essential for carrying out photosynthesis in plants?",
          optionA: "Soil",
          optionB: "Air",
          optionC: "Water",
          correctAnswer: "Water",
        },
        {
          question:
            "What is the primary source of energy on Earth for plants to prepare their food during photosynthesis?",
          optionA: "Soil",
          optionB: "Light",
          optionC: "Temperature",
          correctAnswer: "Light",
        },
        {
          question:
            "Which terrestrial habitat covers one-third of the Earth's surface and is found in various parts of the world?",
          optionA: "Deserts",
          optionB: "Grasslands",
          optionC: "Forests",
          correctAnswer: "Forests",
        },
        {
          question:
            "Which adaptation is common among animals in grasslands to protect themselves from predators?",
          optionA: "Climbing trees",
          optionB: "Camouflage",
          optionC: "Burrowing underground",
          correctAnswer: "Camouflage",
        },
        {
          question:
            "What is the term for a place where organisms or a community of organisms live and grow naturally?",
          optionA: "Environment",
          optionB: "Habitat",
          optionC: "Ecosystem",
          correctAnswer: "Habitat",
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
            "Plants make their own food through a process called ________________ using sunlight, water, and carbon dioxide.",
          options: ["Respiration", "Decomposition", "Photosynthesis"],
          correctAnswer: "Photosynthesis",
        },
        {
          question:
            "Animals in aquatic habitats like oceans and seas breathe through specialized organs called ________________.",
          options: ["Lungs", "Gills", "Skin"],
          correctAnswer: "Gills",
        },
        {
          question:
            "Scavengers and decomposers play a crucial role in ________________ nutrients in the environment.",
          options: ["Producing", "Recycling", "Consuming"],
          correctAnswer: "Recycling",
        },
        {
          question:
            "The uppermost layer of the Earth's crust, called ________________, is essential for the growth of plants.",
          options: ["Water", "Soil", "Air"],
          correctAnswer: "Soil",
        },
        {
          question:
            "Plants need ________________ as an energy source for photosynthesis to prepare their own food.",
          options: ["Soil", "Light", "Temperature"],
          correctAnswer: "Light",
        },
        {
          question:
            "In grasslands, animals often evolve highly effective ________________ to hide from predators.",
          options: ["Camouflage", "Speed", "Climbing ability"],
          correctAnswer: "Camouflage",
        },
        {
          question:
            "Desert plants, also known as xerophytes, show adaptations in their roots, stems, and leaves to survive in ________________.",
          options: [
            "Excessive sunlight",
            "Low temperatures",
            "Arid conditions",
          ],
          correctAnswer: "Arid conditions",
        },
        {
          question:
            "Mountains are characterized by a climate that is too ________________ for some plants and animals to survive.",
          options: ["Hot", "Cold", "Humid"],
          correctAnswer: "Cold",
        },
        {
          question:
            "Adaptations in animals living in cold mountain regions include thick skin or fur and ________________ to walk on snow.",
          options: ["Padded feet", "Webbed feet", "Hooves"],
          correctAnswer: "Hooves",
        },
        {
          question:
            "The primary material used for major activities in Chalcolithic settlements was ________________.",
          options: ["Bronze", "Copper", "Stone"],
          correctAnswer: "Stone",
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
            "Plants cannot make their own food without the presence of chlorophyll.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Animals directly or indirectly depend on plants for their food.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Scavengers are organisms that feed on the bodies of dead plants and animals.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Microorganisms like bacteria and fungi are considered decomposers.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Scavengers and decomposers play a role in producing oxygen in the environment.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Water is not essential for carrying out photosynthesis in plants.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Temperature has no effect on the survival of animals and plants.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Aquatic habitats include forests, grasslands, and deserts.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "All animals in grasslands have strong legs for running fast.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Desert plants have adaptations in their roots, stems, and leaves to survive in arid conditions.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
