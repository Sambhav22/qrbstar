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
        question: "Which type of soil forms hard lumps when water is added?",
        optionA: "Loamy",
        optionB: "Clayey",
        optionC: "Sandy",
        correctAnswer: "Clayey",
      }),
      shuffleOptions({
        question: "Which soil is the best for growing crops?",
        optionA: "Loamy",
        optionB: "Sandy",
        optionC: "Clayey",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "Which layer of soil is also called the bedrock?",
        optionA: "Horizon B",
        optionB: "Horizon A",
        optionC: "Horizon C",
        correctAnswer: "Horizon C",
      }),
      shuffleOptions({
        question: "Which layer of soil is rich in humus and organic matter?",
        optionA: "Horizon B",
        optionB: "Horizon A",
        optionC: "Horizon C",
        correctAnswer: "Horizon A",
      }),
      shuffleOptions({
        question: "Which natural force helps to break rocks into soil particles?",
        optionA: "Wind",
        optionB: "Fire",
        optionC: "Smoke",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Which of the following causes soil erosion?",
        optionA: "Deforestation",
        optionB: "Planting trees",
        optionC: "Terrace farming",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "Which layer of soil contains large rock pieces and minerals like iron?",
        optionA: "Horizon A",
        optionB: "Horizon B",
        optionC: "Horizon C",
        correctAnswer: "Horizon B",
      }),
      shuffleOptions({
        question: "Which activity helps to reduce soil erosion?",
        optionA: "Terrace farming",
        optionB: "Overgrazing",
        optionC: "Deforestation",
        correctAnswer: "Terrace farming",
      }),
      shuffleOptions({
        question: "What are the small spaces in soil that hold air and water called?",
        optionA: "Pores",
        optionB: "Cracks",
        optionC: "Roots",
        correctAnswer: "Pores",
      }),
      shuffleOptions({
        question: "Which human activity increases soil erosion?",
        optionA: "Planting trees",
        optionB: "Overgrazing",
        optionC: "Building dams",
        correctAnswer: "Overgrazing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil is a mixture of minerals and _______.",
        optionA: "Rocks",
        optionB: "Organic material",
        optionC: "Metals",
        correctAnswer: "Organic material",
      }),
      shuffleOptions({
        question: "The breaking down of rocks into soil is called _______.",
        optionA: "Erosion",
        optionB: "Weathering",
        optionC: "Melting",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "The topmost layer of soil is also called _______.",
        optionA: "Subsoil",
        optionB: "Topsoil",
        optionC: "Bedrock",
        correctAnswer: "Topsoil",
      }),
      shuffleOptions({
        question: "_______ soil needs fertilisers to become fertile.",
        optionA: "Sandy",
        optionB: "Clayey",
        optionC: "Loamy",
        correctAnswer: "Sandy",
      }),
      shuffleOptions({
        question: "Soil that holds moisture and nutrients well is called _______ soil.",
        optionA: "Sandy",
        optionB: "Loamy",
        optionC: "Clayey",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "The cheapest and best method of soil conservation is _______.",
        optionA: "Building dams",
        optionB: "Planting trees",
        optionC: "Cutting forests",
        correctAnswer: "Planting trees",
      }),
      shuffleOptions({
        question: "The movement of soil from one place to another by wind or water is called _______.",
        optionA: "Soil erosion",
        optionB: "Soil profile",
        optionC: "Soil conservation",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "The protection of soil against erosion is called _______.",
        optionA: "Soil conservation",
        optionB: "Weathering",
        optionC: "Erosion",
        correctAnswer: "Soil conservation",
      }),
      shuffleOptions({
        question: "_______ farming is done on slopes to prevent soil erosion.",
        optionA: "Plain",
        optionB: "Terrace",
        optionC: "Desert",
        correctAnswer: "Terrace",
      }),
      shuffleOptions({
        question: "Strong _______ can blow away the top layer of soil.",
        optionA: "Winds",
        optionB: "Clouds",
        optionC: "Snow",
        correctAnswer: "Winds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil is formed in a few days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loamy soil is rich in nutrients.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bedrock layer has the most humus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wind and water cause soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deforestation helps conserve soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Terrace farming is useful in hilly areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overgrazing makes land fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Soil erosion removes the top fertile layer of soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Planting grass on open lands prevents erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soil conservation means protecting soil from being washed away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
