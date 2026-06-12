export const chapter = "Chapter - 1: Nutrition in Plants ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the ultimate source of food and energy for all living organisms?",
          optionA: "Fungi",
          optionB: "Photosynthesis",
          optionC: "Heterotrophic nutrition",
          correctAnswer: "B",
        },
        {
          question:
            "Which pigment is responsible for the green color in plant leaves and absorbs sunlight for photosynthesis?",
          optionA: "Chlorophyll",
          optionB: "Melanin",
          optionC: "Carotene",
          correctAnswer: "A",
        },
        {
          question: "What is the immediate product of photosynthesis?",
          optionA: "Oxygen",
          optionB: "Starch",
          optionC: "Glucose",
          correctAnswer: "C",
        },
        {
          question:
            "What is the mode of nutrition where organisms take in nutrients in the form of a solution from dead and decaying matter?",
          optionA: "Parasitic nutrition",
          optionB: "Saprotrophic nutrition",
          optionC: "Symbiotic nutrition",
          correctAnswer: "B",
        },
        {
          question:
            "Which category of plants cannot make their own food and derive it entirely from the host plant throughout their life?",
          optionA: "Partial parasites",
          optionB: "Total parasites",
          optionC: "Saprophytes",
          correctAnswer: "B",
        },
        {
          question:
            "What is the condition where two organisms live in close physical contact, providing mutual benefits?",
          optionA: "Parasitism",
          optionB: "Symbiosis",
          optionC: "Commensalism",
          correctAnswer: "B",
        },
        {
          question:
            "Insectivorous plants trap insects to obtain which essential nutrient that is often deficient in marshy areas?",
          optionA: "Calcium",
          optionB: "Nitrogen",
          optionC: "Phosphorus",
          correctAnswer: "B",
        },
        {
          question:
            "What is the purpose of the hair and lid structure in a pitcher plant?",
          optionA: "To attract insects",
          optionB: "To trap insects",
          optionC: "To provide shelter",
          correctAnswer: "B",
        },
        {
          question:
            "Which process replenishes nitrogen in the soil during lightning?",
          optionA: "Photosynthesis",
          optionB: "Electrical discharge",
          optionC: "Respiration",
          correctAnswer: "B",
        },
        {
          question:
            "What is added to the soil to increase its fertility, containing nutrients like nitrogen, potassium, and phosphorus?",
          optionA: "Oxygen",
          optionB: "Manure",
          optionC: "Fertilizers",
          correctAnswer: "C",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Green plants carry out __________ to synthesize food using carbon dioxide, water, and sunlight.",
          options: {
            a: "Respiration",
            b: "Photosynthesis",
            c: "Fermentation",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The tiny structures in plant cells containing chlorophyll are called __________.",
          options: {
            a: "Mitochondria",
            b: "Ribosomes",
            c: "Chloroplasts",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Glucose, the immediate product of photosynthesis, is stored in plants as __________.",
          options: {
            a: "Sucrose",
            b: "Starch",
            c: "Cellulose",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The mode of nutrition where organisms feed on dead and decaying matter is known as __________ nutrition.",
          options: {
            a: "Heterotrophic",
            b: "Autotrophic",
            c: "Saprotrophic",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Total parasites, such as __________, depend entirely on the host plant for their food throughout their life.",
          options: {
            a: "Mistletoe",
            b: "Cuscuta (Amarbel)",
            c: "Sandalwood",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Symbiotic nutrition involves two organisms living together and providing mutual benefits, a condition known as __________.",
          options: {
            a: "Commensalism",
            b: "Symbiosis",
            c: "Parasitism",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Insectivorous plants trap insects to obtain __________, an essential nutrient often deficient in marshy areas.",
          options: {
            a: "Calcium",
            b: "Nitrogen",
            c: "Phosphorus",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The leaves of a pitcher plant are modified into a pitcher-like structure with __________ on the top.",
          options: {
            a: "A lid",
            b: "Flowers",
            c: "Thorns",
          },
          correctAnswer: "a",
        },
        {
          question:
            "__________ and manure are added to the soil to increase its fertility, containing nutrients like nitrogen, potassium, and phosphorus.",
          options: {
            a: "Oxygen",
            b: "Fertilizers",
            c: "Water",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Leguminous plants, like gram and peas, contain __________ bacteria in their roots, which can fix atmospheric nitrogen into a soluble form in the soil.",
          options: {
            a: "Nitrosomonas",
            b: "Rhizobium",
            c: "Lactobacillus",
          },
          correctAnswer: "b",
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
            "Green plants carry out photosynthesis to synthesize food using carbon dioxide, water, and sunlight.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Chloroplasts, containing chlorophyll, are the tiny structures present in plant cells responsible for the green color of leaves.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Glucose, the immediate product of photosynthesis, is stored in plants as cellulose, a complex form of carbohydrate.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Saprotrophic nutrition involves organisms feeding on dead and decaying matter, such as fungi.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Total parasites, like Mistletoe, can make their own food and do not depend entirely on the host plant for sustenance.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Symbiosis is a condition where two organisms live together, providing mutual benefits.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Insectivorous plants trap insects to obtain calcium, an essential nutrient often deficient in marshy areas.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Fertilizers and manure are added to the soil to decrease its fertility.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Archaeological sources in the medieval period include rocks, paintings, and inscriptions.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Literary sources of information for the medieval period include biographies, autobiographies, and poetry.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
