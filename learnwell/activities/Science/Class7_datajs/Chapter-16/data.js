export const chapter = "Chapter - 16: The Living Resource : Water";
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
        question: "Which day is celebrated every year as World Water Day?",
        optionA: "22 March",
        optionB: "5 June",
        optionC: "14 November",
        correctAnswer: "22 March",
      }),
      shuffleOptions({
        question: "What is the continuous circulation of water in nature known as?",
        optionA: "Water cycle",
        optionB: "Condensation",
        optionC: "Infiltration",
        correctAnswer: "Water cycle",
      }),
      shuffleOptions({
        question: "What is the upper level of underground water called?",
        optionA: "Aquifer",
        optionB: "Water table",
        optionC: "Bedrock",
        correctAnswer: "Water table",
      }),
      shuffleOptions({
        question: "Which process changes water vapour into liquid water?",
        optionA: "Condensation",
        optionB: "Evaporation",
        optionC: "Infiltration",
        correctAnswer: "Condensation",
      }),
      shuffleOptions({
        question: "What type of resource is water?",
        optionA: "Renewable",
        optionB: "Non-renewable",
        optionC: "Exhaustible",
        correctAnswer: "Renewable",
      }),
      shuffleOptions({
        question: "Which process allows rainwater to soak into the ground?",
        optionA: "Infiltration",
        optionB: "Transpiration",
        optionC: "Condensation",
        correctAnswer: "Infiltration",
      }),
      shuffleOptions({
        question: "Which irrigation method supplies water directly near the roots of plants?",
        optionA: "Drip irrigation",
        optionB: "Flood irrigation",
        optionC: "Sprinkler irrigation",
        correctAnswer: "Drip irrigation",
      }),
      shuffleOptions({
        question: "What is the large water body formed behind a dam called?",
        optionA: "Reservoir",
        optionB: "Canal",
        optionC: "Aquifer",
        correctAnswer: "Reservoir",
      }),
      shuffleOptions({
        question: "Which method helps collect and store rainwater for later use?",
        optionA: "Rainwater harvesting",
        optionB: "Deforestation",
        optionC: "Filtration",
        correctAnswer: "Rainwater harvesting",
      }),
      shuffleOptions({
        question: "Who is popularly known as the “Waterman of India”?",
        optionA: "Rajendra Singh",
        optionB: "M.S. Swaminathan",
        optionC: "Verghese Kurien",
        correctAnswer: "Rajendra Singh",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The slow passage of water through the soil is called ______.",
        optionA: "infiltration",
        optionB: "evaporation",
        optionC: "condensation",
        correctAnswer: "infiltration",
      }),
      shuffleOptions({
        question: "The upper limit of underground water is known as the ______.",
        optionA: "water table",
        optionB: "aquifer",
        optionC: "groundwater",
        correctAnswer: "water table",
      }),
      shuffleOptions({
        question: "The downward movement of water through soil and rocks is called ______.",
        optionA: "percolation",
        optionB: "precipitation",
        optionC: "condensation",
        correctAnswer: "percolation",
      }),
      shuffleOptions({
        question: "______ is a renewable natural resource essential for life on Earth.",
        optionA: "Water",
        optionB: "Soil",
        optionC: "Air",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "The process by which water vapour changes into liquid is called ______.",
        optionA: "condensation",
        optionB: "evaporation",
        optionC: "infiltration",
        correctAnswer: "condensation",
      }),
      shuffleOptions({
        question: "The rain, dew or snow falling from the sky is called ______.",
        optionA: "precipitation",
        optionB: "condensation",
        optionC: "transpiration",
        correctAnswer: "precipitation",
      }),
      shuffleOptions({
        question: "______ irrigation provides water to plants through a network of tubes near the roots.",
        optionA: "Drip",
        optionB: "Flood",
        optionC: "Sprinkler",
        correctAnswer: "Drip",
      }),
      shuffleOptions({
        question: "A large structure built across a river to store water is called a ______.",
        optionA: "dam",
        optionB: "levee",
        optionC: "canal",
        correctAnswer: "dam",
      }),
      shuffleOptions({
        question: "Collecting and storing rainwater for recharging groundwater is known as ______.",
        optionA: "rainwater harvesting",
        optionB: "filtration",
        optionC: "recycling",
        correctAnswer: "rainwater harvesting",
      }),
      shuffleOptions({
        question: "The layer of rock that stores underground water is called an ______.",
        optionA: "aquifer",
        optionB: "reservoir",
        optionC: "basin",
        correctAnswer: "aquifer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water exists in three forms—solid, liquid and gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Groundwater is a renewable source of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Evaporation changes water vapour into liquid water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "World Water Day is observed on 22 March every year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainwater harvesting helps recharge groundwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The water table is increasing everywhere in the country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dams help in controlling floods and generating electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overuse of groundwater can lead to its depletion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants do not require water to make food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drip irrigation helps in reducing wastage of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
