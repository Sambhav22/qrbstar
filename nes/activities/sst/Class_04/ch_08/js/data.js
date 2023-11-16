export const chapter = "Chapter - 8: Soil";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the uppermost layer of the Earth's surface called?",
        optionA: "Rock",
        optionB: "Soil",
        optionC: "Water",
        correctAnswer: "Soil",
      },
      {
        question: "What makes soil an essential resource for humankind?",
        optionA: "Its color",
        optionB: "Its fertility",
        optionC: "Its texture",
        correctAnswer: "Its fertility",
      },
      {
        question:
          "What makes the soil fertile and enables the growth of crops and natural vegetation?",
        optionA: "Rocks",
        optionB: "Minerals",
        optionC: "Humus",
        correctAnswer: "Humus",
      },
      {
        question:
          "Which natural processes contribute to the formation of soil?",
        optionA: "Volcanic eruptions",
        optionB: "Weathering by wind, water, and climate",
        optionC: "Earthquakes",
        correctAnswer: "Weathering by wind, water, and climate",
      },
      {
        question:
          "How do the characteristics of soil layers differ from one another?",
        optionA: "In temperature",
        optionB: "In thickness",
        optionC: "In chemical composition",
        correctAnswer: "In chemical composition",
      },
      {
        question:
          "What are the primary factors that cause variations in soil from region to region?",
        optionA: "Temperature and rainfall",
        optionB: "Soil erosion",
        optionC: "Plant diversity",
        correctAnswer: "Temperature and rainfall",
      },
      {
        question:
          "Which type of soil is most abundant in the Northern Plains of India?",
        optionA: "Black Soil",
        optionB: "Red Soil",
        optionC: "Alluvial Soil",
        correctAnswer: "Alluvial Soil",
      },
      {
        question: "In which part of India is black soil mainly found?",
        optionA: "Northern Plains",
        optionB: "Deccan Plateau",
        optionC: "Western Ghats",
        correctAnswer: "Deccan Plateau",
      },
      {
        question:
          "What gives black soil its dark color and water-retaining properties?",
        optionA: "Clay content",
        optionB: "Lime and magnesia",
        optionC: "Iron deposits",
        correctAnswer: "Clay content",
      },
      {
        question: "Where is red soil typically found in India?",
        optionA: "Eastern Himalayas",
        optionB: "Western Ghats",
        optionC: "Odisha and Chhattisgarh",
        correctAnswer: "Odisha and Chhattisgarh",
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
          "The uppermost layer of the Earth's surface is called ________.",
        optionA: "Rocks",
        optionB: "Soil",
        optionC: "Water",
        correctAnswer: "Soil",
      },
      {
        question:
          "Soil is essential for growing plants because of its ________.",
        optionA: "Color",
        optionB: "Fertility",
        optionC: "Texture",
        correctAnswer: "Fertility",
      },
      {
        question:
          "Dead plants and organic matter mix with the soil to form ________.",
        optionA: "Minerals",
        optionB: "Humus",
        optionC: "Water",
        correctAnswer: "Humus",
      },
      {
        question:
          "Soil is formed through the process of ________, where rocks are broken down by wind, water, and climate.",
        optionA: "Erosion",
        optionB: "Weathering",
        optionC: "Fertilization",
        correctAnswer: "Weathering",
      },
      {
        question:
          "The characteristic features of soil depend on the rocks from which it has been formed and the types of ________ that grow in it.",
        optionA: "Animals",
        optionB: "Plants",
        optionC: "Insects",
        correctAnswer: "Plants",
      },
      {
        question:
          "Soil forms different layers of particles of different sizes, with each layer differing in texture, color, and chemical composition. This diversity of layers is influenced by factors like ________.",
        optionA: "Temperature and rainfall",
        optionB: "Soil erosion",
        optionC: "Plant diversity",
        correctAnswer: "Temperature and rainfall",
      },
      {
        question:
          "The most fertile alluvial soil in India is found in the ________.",
        optionA: "Himalayas",
        optionB: "Ganga valley",
        optionC: "Deccan Plateau",
        correctAnswer: "Ganga valley",
      },
      {
        question: "Black soil is mainly found in the ________.",
        optionA: "Northern Plains",
        optionB: "Deccan Plateau",
        optionC: "Western Ghats",
        correctAnswer: "Deccan Plateau",
      },
      {
        question:
          "Red soil gets its distinct color from the ________ found in its composition in a crystallized form.",
        optionA: "Iron",
        optionB: "Calcium",
        optionC: "Potash",
        correctAnswer: "Iron",
      },
      {
        question: "Yellow soil appears when red soil is ________.",
        optionA: "Dry",
        optionB: "Hydrated",
        optionC: "Frozen",
        correctAnswer: "Hydrated",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Earth's uppermost layer is called soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Soil is not essential for the growth of plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Humus makes the soil less fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Weathering is the process of rocks breaking down by the action of wind, water, and climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The characteristics of soil depend on the types of animals that live in it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Alluvial soil is most fertile when found in the Ganga valley.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Black soil is mainly found in the Northern Plains of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Red soil gets its color from the iron found in its composition in a crystallized form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Yellow soil appears when red soil is dehydrated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Soil's characteristics are not influenced by factors like temperature and rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
