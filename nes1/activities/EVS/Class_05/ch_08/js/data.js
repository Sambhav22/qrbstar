export const chapter = "Chapter -8: Farmers on Farm";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "What is the primary occupation of a farmer?",
            "optionA": "Fishing",
            "optionB": "Farming",
            "optionC": "Teaching",
            "correctAnswer": "Farming"
        }),
      shuffleOptions({
            "question": "Which type of farmer has land holdings below two hectares?",
            "optionA": "Dairy Farmers",
            "optionB": "Commercial Farmers",
            "optionC": "Small Farmers",
            "correctAnswer": "Small Farmers"
        }),
      shuffleOptions({
            "question": "What is the main intention of Commercial Farmers?",
            "optionA": "Self-sufficiency",
            "optionB": "Selling products in the market",
            "optionC": "Providing for personal family",
            "correctAnswer": "Selling products in the market"
        }),
      shuffleOptions({
            "question": "What do Dairy Farmers primarily rear?",
            "optionA": "Poultry",
            "optionB": "Milk-giving animals",
            "optionC": "Sheep",
            "correctAnswer": "Milk-giving animals"
        }),
      shuffleOptions({
            "question": "Which type of farmer practices both crop growing and animal rearing?",
            "optionA": "Small Farmers",
            "optionB": "Commercial Farmers",
            "optionC": "Mixed Farmers",
            "correctAnswer": "Mixed Farmers"
        }),
      shuffleOptions({
            "question": "What is the first step in growing crops?",
            "optionA": "Irrigation",
            "optionB": "Harvesting",
            "optionC": "Preparing the soil",
            "correctAnswer": "Preparing the soil"
        }),
      shuffleOptions({
            "question": "Which method of sowing seeds involves scattering them over the soil surface?",
            "optionA": "Seed drill",
            "optionB": "Irrigation",
            "optionC": "Broadcasting",
            "correctAnswer": "Broadcasting"
        }),
      shuffleOptions({
            "question": "What is the purpose of adding fertilizers to the soil?",
            "optionA": "Provide extra water",
            "optionB": "Provide extra nutrients",
            "optionC": "Prevent pests",
            "correctAnswer": "Provide extra nutrients"
        }),
      shuffleOptions({
            "question": "What is the process of separating grains from chaff called?",
            "optionA": "Harvesting",
            "optionB": "Threshing",
            "optionC": "Winnowing",
            "correctAnswer": "Winnowing"
        }),
      shuffleOptions({
            "question": "What is the final step in agricultural production before selling?",
            "optionA": "Winnowing",
            "optionB": "Harvesting",
            "optionC": "Storage",
            "correctAnswer": "Storage"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Small farmers, also known as marginal farmers, typically have land holdings below ______ hectares.",
            "optionA": "1",
            "optionB": "2",
            "optionC": "3",
            "correctAnswer": "2"
        }),
      shuffleOptions({
            "question": "Commercial farmers use modern machines, proper irrigation systems, and high-quality manures and fertilizers to ______ crops.",
            "optionA": "harvest",
            "optionB": "cultivate",
            "optionC": "store",
            "correctAnswer": "cultivate"
        }),
      shuffleOptions({
            "question": "Dairy farmers primarily rear milk-giving animals like cow, goat, and ______.",
            "optionA": "sheep",
            "optionB": "horse",
            "optionC": "buffalo",
            "correctAnswer": "buffalo"
        }),
      shuffleOptions({
            "question": "Mixed farmers involve themselves in both growing crops and rearing animals on a small piece of land to reduce the risk of making losses due to poor ______ conditions.",
            "optionA": "market",
            "optionB": "weather",
            "optionC": "soil",
            "correctAnswer": "weather"
        }),
      shuffleOptions({
            "question": "Farmers follow certain steps for growing crops, and the first step is preparing the ______.",
            "optionA": "seeds",
            "optionB": "soil",
            "optionC": "irrigation system",
            "correctAnswer": "soil"
        }),
      shuffleOptions({
            "question": "Irrigation is providing water to crop fields using tube wells, wells, canals, tanks, and ______.",
            "optionA": "sprinklers",
            "optionB": "tractors",
            "optionC": "plows",
            "correctAnswer": "sprinklers"
        }),
      shuffleOptions({
            "question": "Adding fertilizers to the soil provides extra ______ for better crop production.",
            "optionA": "sunlight",
            "optionB": "nutrients",
            "optionC": "air",
            "correctAnswer": "nutrients"
        }),
      shuffleOptions({
            "question": "Harvesting is the process of cutting down the crops either manually using a sickle or by using ______ on big farms.",
            "optionA": "trucks",
            "optionB": "tractors",
            "optionC": "helicopters",
            "correctAnswer": "tractors"
        }),
      shuffleOptions({
            "question": "Threshing is the process of separating grains from the chaff using threshing machines, manually, or by using animals like bullocks and ______.",
            "optionA": "horses",
            "optionB": "camels",
            "optionC": "goats",
            "correctAnswer": "camels"
        }),
      shuffleOptions({
            "question": "Dried grains are stored in containers or sacks, and tall towers called ______ are used for storing grains.",
            "optionA": "bins",
            "optionB": "barns",
            "optionC": "silos",
            "correctAnswer": "silos"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Small farmers typically have land holdings below two hectares.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Commercial farmers usually use modern machines, proper irrigation systems, and high-quality manures and fertilizers.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Dairy farmers rear milk-giving animals like cow, goat, and sheep.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Mixed farmers involve themselves only in either growing crops or rearing animals, not both.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The first step in growing crops is harvesting.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Irrigation involves providing water to crop fields using tube wells, wells, canals, tanks, and sprinklers.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Adding fertilizers to the soil is not helpful in better crop production.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Harvesting is the process of separating grains from the chaff.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Threshing is done manually without the use of any machines or animals.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Silos are used for storing grains, fruits, and vegetables.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }
    ]
    
    ],
  };
}

export var activityData;
