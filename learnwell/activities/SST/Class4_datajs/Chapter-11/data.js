export const chapter = "Chapter - 11: Our Forests and Wildlife Resources";
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
        question: "Which forests remain green throughout the year because their trees do not shed all leaves at once?",
        optionA: "Evergreen forests",
        optionB: "Tidal forests",
        optionC: "Coniferous forests",
        correctAnswer: "Evergreen forests",
      }),
      shuffleOptions({
        question: "Which trees are known for having needle-shaped leaves and cone-shaped fruits?",
        optionA: "Sal",
        optionB: "Fir",
        optionC: "Chir",
        correctAnswer: "Chir",
      }),
      shuffleOptions({
        question: "In which type of forests is teak usually found?",
        optionA: "Thorny forests",
        optionB: "Deciduous forests",
        optionC: "Tidal forests",
        correctAnswer: "Deciduous forests",
      }),
      shuffleOptions({
        question: "Which forests grow in areas that receive very little rainfall?",
        optionA: "Thorny forests",
        optionB: "Evergreen forests",
        optionC: "Mountain forests",
        correctAnswer: "Thorny forests",
      }),
      shuffleOptions({
        question: "Which forests are found mainly in the Ganga-Brahmaputra Delta?",
        optionA: "Evergreen forests",
        optionB: "Mangrove forests",
        optionC: "Deciduous forests",
        correctAnswer: "Mangrove forests",
      }),
      shuffleOptions({
        question: "Which programme encourages children to plant and take care of a tree?",
        optionA: "Chipko Movement",
        optionB: "Tree for Every Child",
        optionC: "Clean Air Programme",
        correctAnswer: "Tree for Every Child",
      }),
      shuffleOptions({
        question: "Who are protected in national parks established by the government?",
        optionA: "Vehicles",
        optionB: "Wildlife and trees",
        optionC: "Buildings",
        correctAnswer: "Wildlife and trees",
      }),
      shuffleOptions({
        question: "Which animal is specially found in Indian forests as mentioned in the chapter?",
        optionA: "Polar bear",
        optionB: "kangaroo",
        optionC: "Swamp deer",
        correctAnswer: "Swamp deer",
      }),
      shuffleOptions({
        question: "What do forests help to prevent by holding the soil firmly?",
        optionA: "Flooding",
        optionB: "Soil erosion",
        optionC: "Snowfall",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Which forest type has shrubs, ferns and palms?",
        optionA: "Mangrove forests",
        optionB: "Thorny forests",
        optionC: "Evergreen forests",
        correctAnswer: "Mangrove forests",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Evergreen forests grow well in areas with very ______ rainfall.",
        optionA: "low",
        optionB: "heavy",
        optionC: "no",
        correctAnswer: "heavy",
      }),
      shuffleOptions({
        question: "Coniferous forests are mostly found in ______ parts of the Himalayas.",
        optionA: "low",
        optionB: "higher",
        optionC: "eastern",
        correctAnswer: "higher",
      }),
      shuffleOptions({
        question: "Thorny forest trees have long roots to absorb ______ from deep soil.",
        optionA: "heat",
        optionB: "wind",
        optionC: "moisture",
        correctAnswer: "moisture",
      }),
      shuffleOptions({
        question: "Mangrove forests develop in land areas ______ by seawater.",
        optionA: "dried",
        optionB: "flooded",
        optionC: "covered with snow",
        correctAnswer: "flooded",
      }),
      shuffleOptions({
        question: "Deciduous forests shed their leaves ______.",
        optionA: "seasonally",
        optionB: "daily",
        optionC: "never",
        correctAnswer: "seasonally",
      }),
      shuffleOptions({
        question: "Forests provide important products such as gum, rubber and ______.",
        optionA: "rice",
        optionB: "herbs",
        optionC: "resin",
        correctAnswer: "resin",
      }),
      shuffleOptions({
        question: "Cutting down trees has reduced ______ areas in many regions.",
        optionA: "forest",
        optionB: "playground",
        optionC: "building",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "Wild animals such as tiger and deer live in ______.",
        optionA: "schools",
        optionB: "forests",
        optionC: "offices",
        correctAnswer: "forests",
      }),
      shuffleOptions({
        question: "People hugged trees during the ______ Movement.",
        optionA: "Chipko",
        optionB: "Clean India",
        optionC: "Iron Pillar",
        correctAnswer: "Chipko",
      }),
      shuffleOptions({
        question: "To protect wildlife, the government built national parks and ______.",
        optionA: "stadiums",
        optionB: "wildlife sanctuaries",
        optionC: "airports",
        correctAnswer: "wildlife sanctuaries",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Evergreen trees grow close together and form a broad canopy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Keekar and cactus are common trees of thorny forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pine and deodar trees grow in mangrove forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mangrove forests are found in areas that are flooded by seawater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Forests help in checking strong winds and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sundarbans are the largest mangrove forests in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hunting of animals is allowed in national parks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forests help purify the air by absorbing carbon dioxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trees do not play any role in causing rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Van Mahotsav encourages planting of more trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
