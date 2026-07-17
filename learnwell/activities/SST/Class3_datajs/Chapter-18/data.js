export const chapter = "Chapter - 18: The Story of Early Men";
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
        question: "Who used stones with sharp edges to make tools?",
        optionA: "Early men",
        optionB: "Farmers",
        optionC: "Teachers",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who first learnt that fire could keep them safe from wild animals?",
        optionA: "Kings",
        optionB: "Early men",
        optionC: "Traders",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who discovered fire while shaping stone tools?",
        optionA: "Shepherds",
        optionB: "Early men",
        optionC: "Fishermen",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who noticed seeds growing into plants after falling on the ground?",
        optionA: "Some women of early humans",
        optionB: "Children",
        optionC: "Travellers",
        correctAnswer: "Some women of early humans",
      }),
      shuffleOptions({
        question: "Who began living near rivers to grow crops easily?",
        optionA: "Soldiers",
        optionB: "Early farmers (early men)",
        optionC: "Sailors",
        correctAnswer: "Early farmers (early men)",
      }),
      shuffleOptions({
        question: "Who tied logs of wood together to make rafts?",
        optionA: "Builders",
        optionB: "Early men",
        optionC: "Potters",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who made the first wooden carts without wheels?",
        optionA: "Doctors",
        optionB: "Early men",
        optionC: "Pilots",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who realised that round tree trunks roll easily on the ground?",
        optionA: "Scientists",
        optionB: "Early men",
        optionC: "Merchants",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who roasted meat by placing it on fire?",
        optionA: "Modern cooks",
        optionB: "Early men",
        optionC: "Shopkeepers",
        correctAnswer: "Early men",
      }),
      shuffleOptions({
        question: "Who became food producers after learning agriculture?",
        optionA: "Hunters",
        optionB: "Early men",
        optionC: "Carpenters",
        correctAnswer: "Early men",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early men lived in ______.",
        optionA: "caves and forests",
        optionB: "apartments",
        optionC: "office buildings",
        correctAnswer: "caves and forests",
      }),
      shuffleOptions({
        question: "Early men cooked animal flesh by placing it on ______.",
        optionA: "cold water",
        optionB: "fire",
        optionC: "sand",
        correctAnswer: "fire",
      }),
      shuffleOptions({
        question: "They made rafts by tying logs of ______.",
        optionA: "metal",
        optionB: "wood",
        optionC: "plastic",
        correctAnswer: "wood",
      }),
      shuffleOptions({
        question: "Early men travelled long distances on ______.",
        optionA: "foot",
        optionB: "bicycles",
        optionC: "cars",
        correctAnswer: "foot",
      }),
      shuffleOptions({
        question: "Farming helped early men to live at ______.",
        optionA: "many places",
        optionB: "one place",
        optionC: "high mountains",
        correctAnswer: "one place",
      }),
      shuffleOptions({
        question: "Wheels were made from round pieces of ______.",
        optionA: "stone",
        optionB: "tree trunks",
        optionC: "cloth",
        correctAnswer: "tree trunks",
      }),
      shuffleOptions({
        question: "Roasted meat became ______.",
        optionA: "tastier and healthier",
        optionB: "bitter",
        optionC: "hard",
        correctAnswer: "tastier and healthier",
      }),
      shuffleOptions({
        question: "Early men wore ______ to cover their bodies.",
        optionA: "cotton shirts",
        optionB: "animal skin and tree bark",
        optionC: "school uniforms",
        correctAnswer: "animal skin and tree bark",
      }),
      shuffleOptions({
        question: "Early men hunted animals using sharp ______.",
        optionA: "pillows",
        optionB: "stones and sticks",
        optionC: "leaves",
        correctAnswer: "stones and sticks",
      }),
      shuffleOptions({
        question: "They began farming near ______.",
        optionA: "rivers",
        optionB: "deserts",
        optionC: "factories",
        correctAnswer: "rivers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early men feared fire when they first saw it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men learnt farming after watching seeds grow naturally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men first travelled in boats made from metal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early men made carts without wheels before inventing wheeled carts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men moved from place to place in search of food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fire helped early men cook their food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early men used hollow tree trunks to make early boats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wheels made travelling on land slower and more difficult.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early men lived alone and did not help each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rafts helped early men carry loads across water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
