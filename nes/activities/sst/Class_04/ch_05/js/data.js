export const chapter = "Chapter - 5: The Peninsular Plateau";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What types of rocks primarily make up the Peninsular Plateau?",
        optionA: "Sedimentary rocks",
        optionB: "Igneous, metamorphic, and crystalline rocks",
        optionC: "Volcanic rocks",
        correctAnswer: "Igneous, metamorphic, and crystalline rocks",
      },
      {
        question:
          "Which geographical features border the Peninsular Plateau to the west and east?",
        optionA: "Himalayas and Karakoram Range",
        optionB: "Western Ghats and Eastern Ghats",
        optionC: "Vindhya Range and Aravalli Hills",
        correctAnswer: "Western Ghats and Eastern Ghats",
      },
      {
        question: "How was the Peninsular Plateau formed?",
        optionA: "By volcanic eruptions",
        optionB: "Due to the collision of tectonic plates",
        optionC: "By the deposition of sediments",
        correctAnswer: "Due to the collision of tectonic plates",
      },
      {
        question: "What is the climate of the Peninsular Plateau like?",
        optionA: "Extreme with very hot summers and cold winters",
        optionB: "Moderate throughout the year",
        optionC: "Very rainy with constant monsoons",
        correctAnswer: "Moderate throughout the year",
      },
      {
        question:
          "Which rivers flow from southwest to northeast in the Central Highlands?",
        optionA: "Ganges and Brahmaputra",
        optionB: "Chambal, Sind, Betwa, and Ken",
        optionC: "Yamuna and Sutlej",
        correctAnswer: "Chambal, Sind, Betwa, and Ken",
      },
      {
        question:
          "Which region is bounded by the Narmada River to the south and the Satpura range?",
        optionA: "Deccan Plateau",
        optionB: "Western Ghats",
        optionC: "Central Highlands",
        correctAnswer: "Central Highlands",
      },
      {
        question:
          "Which is the highest peak in South India, located in the Cardamom hills?",
        optionA: "Mount Everest",
        optionB: "Anaimudi Peak",
        optionC: "K2",
        correctAnswer: "Anaimudi Peak",
      },
      {
        question:
          "Where do the rivers in the Peninsular Plateau region mostly flow into?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Bay of Bengal",
      },
      {
        question:
          "Which river in the plateau region is known for the Mettur Dam and is the largest irrigation project in South India?",
        optionA: "Godavari",
        optionB: "Krishna",
        optionC: "Kaveri",
        correctAnswer: "Kaveri",
      },
      {
        question:
          "What is the significance of the Peninsular Plateau for India?",
        optionA: "It has the tallest mountains in the country.",
        optionB: "It is the primary source of India's wheat production.",
        optionC:
          "It is rich in mineral resources, has fertile soil, and is a hub of hydroelectricity generation.",
        correctAnswer:
          "It is rich in mineral resources, has fertile soil, and is a hub of hydroelectricity generation.",
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
          "The Peninsular Plateau is primarily composed of old ______________, igneous, and metamorphic rocks.",
        optionA: "Sedimentary rocks",
        optionB: "Volcanic rocks",
        optionC: "Crystalline rocks",
        correctAnswer: "Crystalline rocks",
      },
      {
        question:
          "The Peninsular Plateau is roughly triangular in shape, with its apex pointing towards the southern tips of the country and is bordered by the Western Ghats in the west and the ______________ in the east.",
        optionA: "Himalayas",
        optionB: "Eastern Ghats",
        optionC: "Satpura ranges",
        correctAnswer: "Eastern Ghats",
      },
      {
        question:
          "The formation of the Peninsular Plateau is attributed to the breaking and drifting of the tectonic plates known as ______________.",
        optionA: "Pacific Plates",
        optionB: "Gondwanaland",
        optionC: "Eurasian Plates",
        correctAnswer: "Gondwanaland",
      },
      {
        question:
          "The climate on the Peninsular Plateau remains moderate throughout the year, with no major difference in ______________ temperatures.",
        optionA: "Summer and winter",
        optionB: "Day and night",
        optionC: "Monsoon and dry",
        correctAnswer: "Summer and winter",
      },
      {
        question:
          "While rainfall is heavy in the Western Ghats, the interior parts of the plateau receive very low ______________.",
        optionA: "Snowfall",
        optionB: "Sunshine",
        optionC: "Rainfall",
        correctAnswer: "Rainfall",
      },
      {
        question:
          "The Peninsular Plateau consists of two broad divisions, namely, the Central Highlands and the ______________.",
        optionA: "Western Ghats",
        optionB: "Deccan Plateau",
        optionC: "Eastern Ghats",
        correctAnswer: "Deccan Plateau",
      },
      {
        question:
          "The part of the Peninsular Plateau lying to the north of the Narmada River, covering a major area of the Malwa Plateau, is known as the ______________.",
        optionA: "Western Ghats",
        optionB: "Central Highlands",
        optionC: "Eastern Ghats",
        correctAnswer: "Central Highlands",
      },
      {
        question:
          "The rivers draining the Central Highlands, such as Chambal, Sind, Betwa, and Ken, flow from southwest to ______________.",
        optionA: "Northwest",
        optionB: "Northeast",
        optionC: "South",
        correctAnswer: "Northeast",
      },
      {
        question:
          "The Deccan Plateau is the largest part of the Southern Plateau and lies towards the south of the ______________.",
        optionA: "Ganges River",
        optionB: "Satpura range",
        optionC: "Narmada River",
        correctAnswer: "Narmada River",
      },
      {
        question:
          "The Western Ghats are a continuous range of hills, including the Nilgiri, Annamalai, and Cardamom hills, with the highest peak in South India, Anaimudi Peak, located in the Cardamom hills of ______________.",
        optionA: "Kerala",
        optionB: "Karnataka",
        optionC: "Tamil Nadu",
        correctAnswer: "Kerala",
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
          "The Peninsular Plateau is primarily composed of sedimentary rocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Peninsular Plateau is located in the northern part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Peninsular Plateau has extreme temperature differences between summer and winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Western Ghats border the Peninsular Plateau to the east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Deccan Plateau is the smallest part of the Southern Plateau.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "All rivers in the plateau region flow from west to east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The highest peak in South India is located in the Western Ghats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Peninsular Plateau is primarily covered with dense tropical forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Narmada River flows from east to west and empties into the Arabian Sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Peninsular Plateau is an important region for hydroelectricity generation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
