export const chapter = "Chapter - 2: Land, Soil and Water Resources";
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
        question: "Which part of the Earth supports only about 10% of the world population?",
        optionA: "Plains",
        optionB: "Rugged mountains",
        optionC: "Thick forests and deserts",
        correctAnswer: "Thick forests and deserts",
      }),
      shuffleOptions({
        question: "What is the major reason plains support dense population?",
        optionA: "They are always cool",
        optionB: "They are suitable for farming and settlements",
        optionC: "They receive no floods",
        correctAnswer: "They are suitable for farming and settlements",
      }),
      shuffleOptions({
        question: "Which layer of soil contains most of the nutrients needed by plants?",
        optionA: "Subsoil",
        optionB: "Topsoil",
        optionC: "Bedrock",
        correctAnswer: "Topsoil",
      }),
      shuffleOptions({
        question: "Which type of soil is mainly formed by the deposits of rivers like Ganga and Brahmaputra?",
        optionA: "Alluvial soil",
        optionB: "Desert soil",
        optionC: "Laterite soil",
        correctAnswer: "Alluvial soil",
      }),
      shuffleOptions({
        question: "Which soil is known for retaining moisture and supporting cotton cultivation?",
        optionA: "Black soil",
        optionB: "Red soil",
        optionC: "Mountain soil",
        correctAnswer: "Black soil",
      }),
      shuffleOptions({
        question: "Which method helps reduce soil erosion on steep slopes by cutting land into steps?",
        optionA: "Fallowing",
        optionB: "Terrace farming",
        optionC: "Strip cropping",
        correctAnswer: "Terrace farming",
      }),
      shuffleOptions({
        question: "Which river is an example of a perennial river in India?",
        optionA: "Krishna",
        optionB: "Yamuna",
        optionC: "Mahanadi",
        correctAnswer: "Yamuna",
      }),
      shuffleOptions({
        question: "What is one main reason for water scarcity in some developing countries?",
        optionA: "Too many canals",
        optionB: "Excess glaciers",
        optionC: "Lack of economic resources to import water",
        correctAnswer: "Lack of economic resources to import water",
      }),
      shuffleOptions({
        question: "Which irrigation structure carries water throughout the year?",
        optionA: "Perennial canal",
        optionB: "Inundation canal",
        optionC: "Temporary drain",
        correctAnswer: "Perennial canal",
      }),
      shuffleOptions({
        question: "Which method ensures that rainwater seeps underground and recharges wells?",
        optionA: "Intercropping",
        optionB: "Rainwater harvesting",
        optionC: "Soil leaching",
        correctAnswer: "Rainwater harvesting",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Land that is uneven or covered with snow is generally ______ for habitation.",
        optionA: "ideal",
        optionB: "unsuitable",
        optionC: "preferred",
        correctAnswer: "unsuitable",
      }),
      shuffleOptions({
        question: "Soil formation can take more than ______ years for even a 1 cm layer to develop.",
        optionA: "50",
        optionB: "500",
        optionC: "50,000",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "The washing away of minerals from the soil by water is known as ______.",
        optionA: "leaching",
        optionB: "drilling",
        optionC: "levelling",
        correctAnswer: "leaching",
      }),
      shuffleOptions({
        question: "Laterite soil becomes extremely ______ when dry.",
        optionA: "hard",
        optionB: "soft",
        optionC: "sticky",
        correctAnswer: "hard",
      }),
      shuffleOptions({
        question: "Only ______% of the Earth’s total water is freshwater.",
        optionA: "2%",
        optionB: "10%",
        optionC: "25%",
        correctAnswer: "2%",
      }),
      shuffleOptions({
        question: "Freshwater stored in glaciers forms about ______% of available freshwater.",
        optionA: "50%",
        optionB: "87%",
        optionC: "5%",
        correctAnswer: "87%",
      }),
      shuffleOptions({
        question: "The process of planting rows of trees to reduce wind erosion is called ______.",
        optionA: "afforestation",
        optionB: "intercropping",
        optionC: "shelter belts",
        correctAnswer: "shelter belts",
      }),
      shuffleOptions({
        question: "Rivers that originate in the Himalayas are mostly ______ rivers.",
        optionA: "seasonal",
        optionB: "perennial",
        optionC: "flooded",
        correctAnswer: "perennial",
      }),
      shuffleOptions({
        question: "Over-irrigation may cause ______ of the soil.",
        optionA: "softening",
        optionB: "salination",
        optionC: "fertilisation",
        correctAnswer: "salination",
      }),
      shuffleOptions({
        question: "The rocky layer beneath all other soil layers is known as ______.",
        optionA: "topsoil",
        optionB: "subsoil",
        optionC: "bedrock",
        correctAnswer: "bedrock",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nearly one-third of all land on Earth is unsuitable for living.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subsoil contains more humus than topsoil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heavy rainfall washes away the fertile top layer of laterite soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Red soil has a high iron content, which gives it its colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Desert soil always has high organic content.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Only 1% of freshwater is available in rivers and lakes for human use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tanks are commonly used to store rainwater in South India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overgrazing contributes to soil degradation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perennial rivers carry water only during the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deforestation helps in conserving groundwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
