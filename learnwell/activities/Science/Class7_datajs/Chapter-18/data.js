export const chapter = "Chapter - 18: Recycling Wastewater";
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
        question: "What is the process of cleaning and reusing wastewater called?",
        optionA: "Recycling",
        optionB: "Evaporation",
        optionC: "Filtration",
        correctAnswer: "Recycling",
      }),
      shuffleOptions({
        question: "What is the sewage that comes from homes called?",
        optionA: "Domestic sewage",
        optionB: "Industrial sewage",
        optionC: "Agricultural sewage",
        correctAnswer: "Domestic sewage",
      }),
      shuffleOptions({
        question: "Which tree is known for absorbing wastewater efficiently?",
        optionA: "Eucalyptus",
        optionB: "Neem",
        optionC: "Mango",
        correctAnswer: "Eucalyptus",
      }),
      shuffleOptions({
        question: "What is the network of pipes that carries sewage called?",
        optionA: "Sewerage system",
        optionB: "Drainage line",
        optionC: "Canal",
        correctAnswer: "Sewerage system",
      }),
      shuffleOptions({
        question: "What is the water obtained after sewage treatment called?",
        optionA: "Effluent",
        optionB: "Sludge",
        optionC: "Wastewater",
        correctAnswer: "Effluent",
      }),
      shuffleOptions({
        question: "What are the impurities present in sewage known as?",
        optionA: "Contaminants",
        optionB: "Fertilisers",
        optionC: "Minerals",
        correctAnswer: "Contaminants",
      }),
      shuffleOptions({
        question: "In which stage are large floating materials like rags and plastics removed?",
        optionA: "Screening",
        optionB: "Aeration",
        optionC: "Sedimentation",
        correctAnswer: "Screening",
      }),
      shuffleOptions({
        question: "Which gas is produced during sludge digestion?",
        optionA: "Biogas",
        optionB: "Carbon monoxide",
        optionC: "Oxygen",
        correctAnswer: "Biogas",
      }),
      shuffleOptions({
        question: "Which bacteria help decompose organic matter in the absence of oxygen?",
        optionA: "Anaerobic bacteria",
        optionB: "Aerobic bacteria",
        optionC: "Decomposer fungi",
        correctAnswer: "Anaerobic bacteria",
      }),
      shuffleOptions({
        question: "What is the dried sludge left after treatment used as?",
        optionA: "Organic manure",
        optionB: "Plastic waste",
        optionC: "Detergent",
        correctAnswer: "Organic manure",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sewage contains dissolved and suspended impurities called ______.",
        optionA: "contaminants",
        optionB: "sediments",
        optionC: "nutrients",
        correctAnswer: "contaminants",
      }),
      shuffleOptions({
        question: "The system of underground pipes that carries sewage is called a ______.",
        optionA: "sewerage system",
        optionB: "water channel",
        optionC: "tank line",
        correctAnswer: "sewerage system",
      }),
      shuffleOptions({
        question: "The solid waste that settles at the bottom during treatment is called ______.",
        optionA: "sludge",
        optionB: "effluent",
        optionC: "silt",
        correctAnswer: "sludge",
      }),
      shuffleOptions({
        question: "The gas produced from decomposed sludge is called ______.",
        optionA: "biogas",
        optionB: "chlorine",
        optionC: "nitrogen",
        correctAnswer: "biogas",
      }),
      shuffleOptions({
        question: "The first step in wastewater treatment where solids are removed is ______.",
        optionA: "screening",
        optionB: "filtration",
        optionC: "aeration",
        correctAnswer: "screening",
      }),
      shuffleOptions({
        question: "The process of passing air through water to add oxygen is ______.",
        optionA: "aeration",
        optionB: "sedimentation",
        optionC: "chlorination",
        correctAnswer: "aeration",
      }),
      shuffleOptions({
        question: "______ treatment removes organic matter using decomposer bacteria.",
        optionA: "Secondary",
        optionB: "Primary",
        optionC: "Tertiary",
        correctAnswer: "Secondary",
      }),
      shuffleOptions({
        question: "The treated water released into rivers or used for gardening is called ______.",
        optionA: "effluent",
        optionB: "sludge",
        optionC: "sewage",
        correctAnswer: "effluent",
      }),
      shuffleOptions({
        question: "The airtight tank where sludge is broken down by bacteria is called a ______.",
        optionA: "sludge digester",
        optionB: "septic tank",
        optionC: "grit chamber",
        correctAnswer: "sludge digester",
      }),
      shuffleOptions({
        question: "The nutrient-rich material obtained from treated sludge is used as an ______.",
        optionA: "organic fertiliser",
        optionB: "insecticide",
        optionC: "cleaning agent",
        correctAnswer: "organic fertiliser",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sewage water can be reused after proper treatment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The impurities present in wastewater are called effluents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Screening helps remove large solid materials from sewage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sludge digestion produces biogas, an eco-friendly fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eutrophication increases the oxygen level in water bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industrial sewage contains harmful acids and chemicals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pesticides do not cause water pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chlorination kills harmful microorganisms in treated water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using rainwater harvesting reduces dependence on groundwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Open defecation is a major cause of water contamination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
