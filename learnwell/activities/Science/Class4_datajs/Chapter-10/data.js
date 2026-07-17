export const chapter = "Chapter - 10: Soil";
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
        question: "What is the topmost layer of the Earth’s surface on which plants grow called?",
        optionA: "Sand",
        optionB: "Soil",
        optionC: "Rock",
        correctAnswer: "Soil",
      }),
      shuffleOptions({
        question: "Which of these organisms helps in making the soil fertile?",
        optionA: "Earthworm",
        optionB: "Butterfly",
        optionC: "Fish",
        correctAnswer: "Earthworm",
      }),
      shuffleOptions({
        question: "What is the process of wearing away of rocks called?",
        optionA: "Melting",
        optionB: "Weathering",
        optionC: "Breaking",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "Which of the following is a major natural resource besides air and water?",
        optionA: "Soil",
        optionB: "Stone",
        optionC: "Fire",
        correctAnswer: "Soil",
      }),
      shuffleOptions({
        question: "What are the very fine powder-like particles of soil called?",
        optionA: "Sand",
        optionB: "Clay",
        optionC: "Gravel",
        correctAnswer: "Clay",
      }),
      shuffleOptions({
        question: "Which type of soil is best for growing plants?",
        optionA: "Sandy",
        optionB: "Loamy",
        optionC: "Clayey",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "Which type of soil can hold a lot of water?",
        optionA: "Clayey",
        optionB: "Sandy",
        optionC: "Gravel",
        correctAnswer: "Clayey",
      }),
      shuffleOptions({
        question: "What is the process of removal of the top layer of soil by wind or water called?",
        optionA: "Soil erosion",
        optionB: "Weathering",
        optionC: "Digging",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Which method of farming is used on hills to prevent soil erosion?",
        optionA: "Terrace farming",
        optionB: "Plain farming",
        optionC: "Tunnel farming",
        correctAnswer: "Terrace farming",
      }),
      shuffleOptions({
        question: "Planting trees to prevent soil erosion is called —",
        optionA: "Deforestation",
        optionB: "Afforestation",
        optionC: "Cultivation",
        correctAnswer: "Afforestation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of wearing away of rocks is called _______.",
        optionA: "Melting",
        optionB: "Weathering",
        optionC: "Drilling",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "The dead remains of plants and animals in the soil are called _______.",
        optionA: "Sand",
        optionB: "Humus",
        optionC: "Clay",
        correctAnswer: "Humus",
      }),
      shuffleOptions({
        question: "The removal of top layer of soil is known as _______.",
        optionA: "Soil erosion",
        optionB: "Soil formation",
        optionC: "Soil fixing",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Roots of plants bind soil particles together and prevent _______.",
        optionA: "Soil erosion",
        optionB: "Flood",
        optionC: "Freezing",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "_______ soil consists of large sand particles and does not hold much water.",
        optionA: "Sandy",
        optionB: "Clayey",
        optionC: "Loamy",
        correctAnswer: "Sandy",
      }),
      shuffleOptions({
        question: "_______ soil contains humus and is best for growing plants.",
        optionA: "Loamy",
        optionB: "Clayey",
        optionC: "Sandy",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "The process by which rocks break up into small particles is called _______.",
        optionA: "Weathering",
        optionB: "Freezing",
        optionC: "Melting",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "On hills, soil erosion can be prevented by _______.",
        optionA: "Terrace farming",
        optionB: "Level farming",
        optionC: "Pot farming",
        correctAnswer: "Terrace farming",
      }),
      shuffleOptions({
        question: "_______ means protection and renewal of soil at any place.",
        optionA: "Soil conservation",
        optionB: "Soil erosion",
        optionC: "Soil pollution",
        correctAnswer: "Soil conservation",
      }),
      shuffleOptions({
        question: "The continuous process of formation of soil and rocks in nature is called the _______.",
        optionA: "Rock cycle",
        optionB: "Water cycle",
        optionC: "Life cycle",
        correctAnswer: "Rock cycle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil is home to many living organisms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weathering is the removal of topsoil by wind and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loamy soil is a mixture of sand and clay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Humus makes the soil infertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sandy soil can hold a lot of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Terrace farming is done to prevent soil erosion on hills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overgrazing of animals helps to protect soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plant roots help in binding soil particles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soil conservation means protecting the soil from erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rock cycle shows that soil and rocks are formed continuously by natural processes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
