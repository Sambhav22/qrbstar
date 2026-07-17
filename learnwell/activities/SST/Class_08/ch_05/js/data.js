export const chapter = "Chapter - 5: Agriculture";
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
        question: "Which activity makes agriculture the most important occupation in the world?",
        optionA: "It offers entertainment",
        optionB: "It provides basic food needs",
        optionC: "It produces minerals",
        correctAnswer: "It provides basic food needs",
      }),
      shuffleOptions({
        question: "Which factor directly influences the type of crops that can be grown in a region?",
        optionA: "Political parties",
        optionB: "Climate (temperature and rainfall)",
        optionC: "Bank interest rates",
        correctAnswer: "Climate (temperature and rainfall)",
      }),
      shuffleOptions({
        question: "Which farming practice involves moving with animals in search of grazing grounds?",
        optionA: "Mixed farming",
        optionB: "Nomadic herding",
        optionC: "Plantation farming",
        correctAnswer: "Nomadic herding",
      }),
      shuffleOptions({
        question: "Which crop grows best in clayey soil that can retain water?",
        optionA: "Rice",
        optionB: "Wheat",
        optionC: "Cotton",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Which country has the highest yield of rice per hectare?",
        optionA: "India",
        optionB: "Brazil",
        optionC: "Japan",
        correctAnswer: "Japan",
      }),
      shuffleOptions({
        question: "Which cereal crop requires cool and moist conditions at the time of growing?",
        optionA: "Rice",
        optionB: "Wheat",
        optionC: "Millet",
        correctAnswer: "Wheat",
      }),
      shuffleOptions({
        question: "Which fibre is extracted from the stalks of a plant and is used mainly for packaging?",
        optionA: "Cotton",
        optionB: "Jute",
        optionC: "Coir",
        correctAnswer: "Jute",
      }),
      shuffleOptions({
        question: "Which beverage crop grows on hill slopes and needs well-drained loamy soil?",
        optionA: "Cocoa",
        optionB: "Tea",
        optionC: "Coffee",
        correctAnswer: "Coffee",
      }),
      shuffleOptions({
        question: "Which major commercial crop requires a hot climate and plenty of water for irrigation?",
        optionA: "Tobacco",
        optionB: "Sugar cane",
        optionC: "Maize",
        correctAnswer: "Sugar cane",
      }),
      shuffleOptions({
        question: "Rubber trees were first found naturally in the",
        optionA: "Ganga plains",
        optionB: "Prairies",
        optionC: "Amazon Basin",
        correctAnswer: "Amazon Basin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rice cultivation requires a uniform temperature of about ______.",
        optionA: "10°C",
        optionB: "25°C",
        optionC: "45°C",
        correctAnswer: "25°C",
      }),
      shuffleOptions({
        question: "Wheat grows well in ______ rainfall areas.",
        optionA: "30–90 cm",
        optionB: "200 cm",
        optionC: "10 cm",
        correctAnswer: "30–90 cm",
      }),
      shuffleOptions({
        question: "Maize needs a temperature of about ______ during its growing period.",
        optionA: "20°C",
        optionB: "5°C",
        optionC: "40°C",
        correctAnswer: "20°C",
      }),
      shuffleOptions({
        question: "Cotton requires ______ frost-free days.",
        optionA: "50",
        optionB: "120",
        optionC: "210",
        correctAnswer: "210",
      }),
      shuffleOptions({
        question: "Jute is also called the ______ because of its colour and usefulness.",
        optionA: "Silver fibre",
        optionB: "Golden fibre",
        optionC: "White fibre",
        correctAnswer: "Golden fibre",
      }),
      shuffleOptions({
        question: "Tea is obtained from young leaves and ______ of the plant.",
        optionA: "roots",
        optionB: "leaf buds",
        optionC: "stems",
        correctAnswer: "leaf buds",
      }),
      shuffleOptions({
        question: "Rubber is obtained from the ______ of the rubber tree.",
        optionA: "bark",
        optionB: "latex",
        optionC: "seed",
        correctAnswer: "latex",
      }),
      shuffleOptions({
        question: "Coffee beans are ______ before being ground into powder.",
        optionA: "boiled",
        optionB: "roasted",
        optionC: "soaked",
        correctAnswer: "roasted",
      }),
      shuffleOptions({
        question: "Sugar cane needs ______ soil for proper growth.",
        optionA: "alluvial and well-drained soil with levelled land",
        optionB: "sandy soil",
        optionC: "rocky soil",
        correctAnswer: "alluvial and well-drained soil with levelled land",
      }),
      shuffleOptions({
        question: "Oil is extracted from the ______ of plants such as sesame and mustard.",
        optionA: "flowers",
        optionB: "seeds/fruits",
        optionC: "leaves",
        correctAnswer: "seeds/fruits",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nomadic herding is practised in arid and semi-arid regions where cultivation is difficult.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rice is the staple food for about 50% of the world’s population.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wheat requires hot and wet climate for proper growth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Maize was first grown in North America before spreading to other regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton grows best in black and alluvial soils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jute requires high temperature and high rainfall to grow well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tea leaves in India are picked only once a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sugar cane takes nearly a year or more to mature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rubber trees grow well in cold and dry climates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Extensive farming is fully mechanised and uses less labour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
