export const chapter = "Chapter - 2: Adaptations in Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two broad categories of plants based on their habitats mentioned in the text?",
          optionA: "Evergreen and Deciduous",
          optionB: "Terrestrial and Aquatic",
          optionC: "Forests and Deserts",
          correctAnswer: "B",
        },
        {
          question:
            "In which habitat do plants adapt to a hot and dry climate with deep roots and soft, flexible stems?",
          optionA: "Mountains",
          optionB: "Grasslands",
          optionC: "Deserts",
          correctAnswer: "B",
        },
        {
          question:
            "What adaptation do trees in mountains have to prevent snow accumulation on their branches?",
          optionA: "Broad leaves",
          optionB: "Thick and fleshy stems",
          optionC: "Conical shape",
          correctAnswer: "C",
        },
        {
          question:
            "What adaptation do desert plants, such as cacti, have to prevent water loss?",
          optionA: "Thick and fleshy stems",
          optionB: "Needle-like spines",
          optionC: "Broad leaves with waxy surface",
          correctAnswer: "B",
        },
        {
          question:
            "Which type of plants grow in coastal areas and have waterproof, shiny leaves to survive in salty water?",
          optionA: "Terrestrial plants",
          optionB: "Aquatic plants",
          optionC: "Marshy plants",
          correctAnswer: "A",
        },
        {
          question:
            "What type of roots do mangrove trees in marshy areas have to obtain air in the clayey soil?",
          optionA: "Fibrous roots",
          optionB: "Breathing roots",
          optionC: "Taproots",
          correctAnswer: "B",
        },
        {
          question:
            "Which category of aquatic plants floats on the surface of the water with spongy stems?",
          optionA: "Fixed Plants",
          optionB: "Submerged Plants",
          optionC: "Floating Plants",
          correctAnswer: "C",
        },
        {
          question:
            "What is the primary function of the pitfall trap in the pitcher plant among insectivorous plants?",
          optionA: "Attracting sunlight",
          optionB: "Digesting trapped insects",
          optionC: "Storing water",
          correctAnswer: "B",
        },
        {
          question:
            "Which adaptation do submerged plants have to support aquatic life by giving out oxygen underwater?",
          optionA: "Flexible stems",
          optionB: "Ribbon-shaped leaves",
          optionC: "Large plate-like leaves",
          correctAnswer: "B",
        },
        {
          question:
            "What is the characteristic feature of parasitic plants like Dodder and Mistletoe?",
          optionA: "They absorb nutrients from the soil",
          optionB: "They have deep fibrous roots",
          optionC: "They absorb nutrients from other living plants",
          correctAnswer: "C",
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
            "Forests are very large areas covered with __________. They are found in places of almost all kinds of weather.",
          optionA: "Sand",
          optionB: "Trees",
          optionC: "Water",
          correctAnswer: "B",
        },
        {
          question:
            "Plants in grasslands have roots that grow __________ into the ground to reach water.",
          optionA: "Shallow",
          optionB: "Deep",
          optionC: "Sideways",
          correctAnswer: "B",
        },
        {
          question:
            "Mountains are highlands, and the temperature varies from cold to extremely cold. Some plants growing in these regions, such as pine and spruce, have __________ leaves to prevent snow accumulation.",
          optionA: "Broad",
          optionB: "Needle-like",
          optionC: "Fleshy",
          correctAnswer: "B",
        },
        {
          question:
            "The temperature in deserts is high, hot, and dry. Cacti, date palm, and babool are some plants growing in these regions, and they have modified leaves into __________ to prevent water loss.",
          optionA: "Thick and fleshy stems",
          optionB: "Needle-like spines",
          optionC: "Broad leaves with waxy surface",
          correctAnswer: "B",
        },
        {
          question:
            "Coconut, rubber, and pepper trees that grow along the coasts have leaves that are __________ to protect them against drying out in salty water.",
          optionA: "Transparent",
          optionB: "Waterproof and shiny",
          optionC: "Broad and thin",
          correctAnswer: "B",
        },
        {
          question:
            "Marshes are hot and damp areas where soil is clayey and sticky. Mangrove and reed are the few plants that can grow in such conditions. The roots of mangrove trees grow __________ to get air.",
          optionA: "Underground",
          optionB: "Above the soil",
          optionC: "Sideways",
          correctAnswer: "B",
        },
        {
          question:
            "Floating plants, such as water hyacinth and duckweed, have spongy stems full of air, making them able to __________ on water.",
          optionA: "Sink",
          optionB: "Swim",
          optionC: "Float",
          correctAnswer: "C",
        },
        {
          question:
            "Insectivorous plants like Venus flytrap have lobed leaves with short, stiff hair at the edges. When a small creature lands on the leaf, the lobes close quickly, trapping the animal in its __________ bristles.",
          optionA: "Smooth",
          optionB: "Interlocking",
          optionC: "Sharp",
          correctAnswer: "B",
        },
        {
          question:
            "Parasitic plants like Dodder and Mistletoe absorb nutrients from other living plants and have special root-like structures that grow into the host plant to __________ nutrients.",
          optionA: "Produce",
          optionB: "Store",
          optionC: "Absorb",
          correctAnswer: "C",
        },
        {
          question:
            "Submerged or underwater plants, like tape grass and pondweed, have thin, narrow, ribbon-shaped leaves without __________.",
          optionA: "Stomata",
          optionB: "Roots",
          optionC: "Flowers",
          correctAnswer: "A",
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
            "Forests are very large areas covered with trees, found in places of almost all kinds of weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Plants in grasslands have roots that grow shallow into the ground to reach water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Mountains are highlands, and the temperature varies from cold to extremely cold. Some plants growing in these regions have broad leaves to prevent snow accumulation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The temperature in deserts is high, hot, and dry. Cacti, date palm, and babool are some plants growing in these regions, and they have modified leaves into needle-like spines to prevent water loss.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Coconut, rubber, and pepper trees that grow along the coasts have leaves that are waterproof and shiny to protect them against drying out in salty water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Marshes are hot and damp areas where soil is clayey and sticky. Mangrove and reed are the few plants that can grow in such conditions. The roots of mangrove trees grow underground to get air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Floating plants, such as water hyacinth and duckweed, have spongy stems full of air, making them able to float on water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Insectivorous plants like Venus flytrap have lobed leaves with short, stiff hair at the edges. When a small creature lands on the leaf, the lobes close quickly, trapping the animal in its interlocking bristles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Parasitic plants like Dodder and Mistletoe absorb nutrients from other living plants and have special root-like structures that grow into the host plant to absorb nutrients.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Submerged or underwater plants, like tape grass and pondweed, have thin, narrow, ribbon-shaped leaves without stomata.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
