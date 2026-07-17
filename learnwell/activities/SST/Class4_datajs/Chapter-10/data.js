export const chapter = "Chapter - 10: Soils of India";
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
        question: "Which natural force helps rivers break rocks into fine soil particles?",
        optionA: "Earthquake",
        optionB: "Flowing water",
        optionC: "Sunlight",
        correctAnswer: "Flowing water",
      }),
      shuffleOptions({
        question: "Which type of soil is formed from cooled lava?",
        optionA: "Red soil",
        optionB: "Black soil",
        optionC: "Desert soil",
        correctAnswer: "Black soil",
      }),
      shuffleOptions({
        question: "Which soil can retain moisture for a long period?",
        optionA: "Mountain soil",
        optionB: "Black soil",
        optionC: "Laterite soil",
        correctAnswer: "Black soil",
      }),
      shuffleOptions({
        question: "Which soil is commonly found in regions with hot and heavy rainfall?",
        optionA: "Laterite soil",
        optionB: "Desert soil",
        optionC: "Alluvial soil",
        correctAnswer: "Laterite soil",
      }),
      shuffleOptions({
        question: "Which soil forms when rivers slow down and deposit silt?",
        optionA: "Alluvial soil",
        optionB: "Red soil",
        optionC: "Black soil",
        correctAnswer: "Alluvial soil",
      }),
      shuffleOptions({
        question: "Which soil is mainly made of sand particles from sandstone?",
        optionA: "Desert soil",
        optionB: "Mountain soil",
        optionC: "Red soil",
        correctAnswer: "Desert soil",
      }),
      shuffleOptions({
        question: "Which soil is good for the cultivation of fruits, tea and spices?",
        optionA: "Mountain soil",
        optionB: "Desert soil",
        optionC: "Alluvial soil",
        correctAnswer: "Mountain soil",
      }),
      shuffleOptions({
        question: "Which type of soil becomes fertile when irrigation is provided?",
        optionA: "Desert soil",
        optionB: "Black soil",
        optionC: "Red soil",
        correctAnswer: "Desert soil",
      }),
      shuffleOptions({
        question: "Which soil is reddish due to the presence of iron oxide?",
        optionA: "Laterite soil",
        optionB: "Red soil",
        optionC: "Alluvial soil",
        correctAnswer: "Red soil",
      }),
      shuffleOptions({
        question: "Which soil is found in the Himalayas?",
        optionA: "Mountain soil",
        optionB: "Black soil",
        optionC: "Laterite soil",
        correctAnswer: "Mountain soil",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil contains tiny pieces of ________.",
        optionA: "wood",
        optionB: "rocks",
        optionC: "plastic",
        correctAnswer: "rocks",
      }),
      shuffleOptions({
        question: "Red soil is common in many parts of ________ India.",
        optionA: "northern",
        optionB: "eastern",
        optionC: "peninsular",
        correctAnswer: "peninsular",
      }),
      shuffleOptions({
        question: "Laterite soil becomes less fertile because of ________.",
        optionA: "leaching",
        optionB: "freezing",
        optionC: "melting",
        correctAnswer: "leaching",
      }),
      shuffleOptions({
        question: "Desert soil has very little ________.",
        optionA: "humus",
        optionB: "clay",
        optionC: "silt",
        correctAnswer: "humus",
      }),
      shuffleOptions({
        question: "Mountain soil is rich in ________ matter.",
        optionA: "plastic",
        optionB: "organic",
        optionC: "metallic",
        correctAnswer: "organic",
      }),
      shuffleOptions({
        question: "The fine material deposited by rivers is called ________.",
        optionA: "gravel",
        optionB: "silt",
        optionC: "coal",
        correctAnswer: "silt",
      }),
      shuffleOptions({
        question: "Black soil is suitable for ________ cultivation.",
        optionA: "cotton",
        optionB: "tea",
        optionC: "apples",
        correctAnswer: "cotton",
      }),
      shuffleOptions({
        question: "Soil is formed over millions of years due to the breaking of ________.",
        optionA: "metals",
        optionB: "rocks",
        optionC: "shells",
        correctAnswer: "rocks",
      }),
      shuffleOptions({
        question: "With proper irrigation, ________ soil can grow wheat and dates.",
        optionA: "desert",
        optionB: "alluvial",
        optionC: "black",
        correctAnswer: "desert",
      }),
      shuffleOptions({
        question: "Laterite soil is ________ in colour.",
        optionA: "grey",
        optionB: "reddish-brown",
        optionC: "white",
        correctAnswer: "reddish-brown",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil formation is a slow process that takes thousands of years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Black soil is formed from sandstone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Alluvial soil is very fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Desert soil contains a high amount of moisture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Red soil contains iron oxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Laterite soil is affected by heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mountain soil is poor in humus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Black soil retains moisture for a long time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soil erosion removes the fertile top layer of soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cutting trees can increase soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
