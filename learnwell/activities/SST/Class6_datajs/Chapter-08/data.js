export const chapter = "Chapter - 8: India: Natural Vegetation and Wildlife";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which forests remain green throughout the year due to trees shedding leaves at different times?",
        optionA: "Coniferous forests",
        optionB: "Tropical evergreen forests",
        optionC: "Thorny forests",
        correctAnswer: "Tropical evergreen forests",
      }),
      shuffleOptions({
        question: "Which tree is commonly found in tropical deciduous forests?",
        optionA: "Teak",
        optionB: "Cedar",
        optionC: "Cactus",
        correctAnswer: "Teak",
      }),
      shuffleOptions({
        question: "Which forests grow in the deltas of the Ganga and Mahanadi?",
        optionA: "Alpine forests",
        optionB: "Mangrove forests",
        optionC: "Thorn forests",
        correctAnswer: "Mangrove forests",
      }),
      shuffleOptions({
        question: "Which animal is found in the marshy lands of Assam and West Bengal?",
        optionA: "Snow leopard",
        optionB: "One-horned rhinoceros",
        optionC: "Asiatic lion",
        correctAnswer: "One-horned rhinoceros",
      }),
      shuffleOptions({
        question: "Which forest type has deep and radial roots to reach underground water?",
        optionA: "Thorny forests",
        optionB: "Evergreen",
        optionC: "Tidal forests",
        correctAnswer: "Thorny forests",
      }),
      shuffleOptions({
        question: "Which region is home to the Asiatic lions?",
        optionA: "Gir Forests, Gujarat",
        optionB: "Nilgiri Hills",
        optionC: "Andaman Islands",
        correctAnswer: "Gir Forests, Gujarat",
      }),
      shuffleOptions({
        question: "Which tree’s wood is used for boat-making in the Sundarbans?",
        optionA: "Mahogany",
        optionB: "Sundri wood",
        optionC: "Pine",
        correctAnswer: "Sundri wood",
      }),
      shuffleOptions({
        question: "Which organisation at Dehradun manages and protects India’s forests?",
        optionA: "National Park Department",
        optionB: "Forest Research Institute (FRI)",
        optionC: "Wildlife Bureau",
        correctAnswer: "Forest Research Institute (FRI)",
      }),
      shuffleOptions({
        question: "Which movement created awareness by hugging trees to stop cutting?",
        optionA: "Green India Mission",
        optionB: "Jungle Bachao Movement",
        optionC: "Chipko Movement",
        correctAnswer: "Chipko Movement",
      }),
      shuffleOptions({
        question: "Which festival is celebrated to promote planting of trees?",
        optionA: "Wildlife Week",
        optionB: "Van Mahotsava",
        optionC: "Forest Service Day",
        correctAnswer: "Van Mahotsava",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tropical evergreen forests receive more than ______ rainfall every year.",
        optionA: "50 cm",
        optionB: "200 cm",
        optionC: "75 cm",
        correctAnswer: "200 cm",
      }),
      shuffleOptions({
        question: "Mangrove trees can grow in both fresh and ______ water.",
        optionA: "saline water",
        optionB: "muddy water",
        optionC: "frozen water",
        correctAnswer: "saline water",
      }),
      shuffleOptions({
        question: "The ______ forests are found in regions with very low rainfall.",
        optionA: "deciduous",
        optionB: "thorny forests",
        optionC: "alpine",
        correctAnswer: "thorny forests",
      }),
      shuffleOptions({
        question: "The Ganga–Brahmaputra delta is famous for its ______ trees.",
        optionA: "chir",
        optionB: "sundri trees",
        optionC: "cedar",
        correctAnswer: "sundri trees",
      }),
      shuffleOptions({
        question: "Coniferous trees are mainly found in the ______ region.",
        optionA: "Himalayan mountain region",
        optionB: "coastal region",
        optionC: "desert region",
        correctAnswer: "Himalayan mountain region",
      }),
      shuffleOptions({
        question: "Forests help prevent ______ in hilly areas.",
        optionA: "snowfall",
        optionB: "soil erosion",
        optionC: "storms",
        correctAnswer: "soil erosion",
      }),
      shuffleOptions({
        question: "India is home to the ______ lion.",
        optionA: "African",
        optionB: "Asiatic lion",
        optionC: "Arctic",
        correctAnswer: "Asiatic lion",
      }),
      shuffleOptions({
        question: "The ______ is our National Bird.",
        optionA: "eagle",
        optionB: "peacock",
        optionC: "falcon",
        correctAnswer: "peacock",
      }),
      shuffleOptions({
        question: "The ______ is observed in the first week of October.",
        optionA: "Wildlife Week",
        optionB: "Forest Week",
        optionC: "Nature Week",
        correctAnswer: "Wildlife Week",
      }),
      shuffleOptions({
        question: "Cutting and clearing of forests is called ______.",
        optionA: "afforestation",
        optionB: "deforestation",
        optionC: "transpiration",
        correctAnswer: "deforestation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Evergreen forests are found in areas of very heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mangrove forests can survive only in pure fresh water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Thorny forests have plants with thorns and waxy leaves to reduce water loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The snow leopard is found in the high altitudes of the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Forest Research Institute is located in Bhopal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Elephants are mainly found in Assam, Karnataka and Kerala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deciduous forests shed all their leaves at the same time of the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The peacock has long colourful plumage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sundarbans are home to the Royal Bengal Tiger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tidal forests grow in dry interior parts of the country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
