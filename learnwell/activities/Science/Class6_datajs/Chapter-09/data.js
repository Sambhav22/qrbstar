export const chapter = "Chapter - 9: Getting to Know Plants";
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
        question: "Which plants have weak stems and spread along the ground?",
        optionA: "Herbs",
        optionB: "Climbers",
        optionC: "Creepers",
        correctAnswer: "Creepers",
      }),
      shuffleOptions({
        question: "Which plants grow on other trees but do not take food from them?",
        optionA: "Epiphytes",
        optionB: "Shrubs",
        optionC: "Herbs",
        correctAnswer: "Epiphytes",
      }),
      shuffleOptions({
        question: "What type of roots do grass and onion have?",
        optionA: "Tap roots",
        optionB: "Fibrous roots",
        optionC: "Prop roots",
        correctAnswer: "Fibrous roots",
      }),
      shuffleOptions({
        question: "Which part of a plant transports water and minerals to other parts?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Which green pigment helps leaves make food?",
        optionA: "Chlorophyll",
        optionB: "Cellulose",
        optionC: "Protein",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which process in leaves makes food for the plant using sunlight and water?",
        optionA: "Transpiration",
        optionB: "Respiration",
        optionC: "Photosynthesis",
        correctAnswer: "Photosynthesis",
      }),
      shuffleOptions({
        question: "Which part of the plant helps in reproduction?",
        optionA: "Flower",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Flower",
      }),
      shuffleOptions({
        question: "Which part of a flower produces pollen grains?",
        optionA: "Anther",
        optionB: "Stigma",
        optionC: "Sepal",
        correctAnswer: "Anther",
      }),
      shuffleOptions({
        question: "What do we call the transfer of pollen from anther to stigma?",
        optionA: "Fertilisation",
        optionB: "Pollination",
        optionC: "Transpiration",
        correctAnswer: "Pollination",
      }),
      shuffleOptions({
        question: "Which process changes a flower into a fruit and seed?",
        optionA: "Photosynthesis",
        optionB: "Germination",
        optionC: "Fertilisation",
        correctAnswer: "Fertilisation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tall, woody stem of a tree is called a ________.",
        optionA: "Trunk",
        optionB: "Node",
        optionC: "Branch",
        correctAnswer: "Trunk",
      }),
      shuffleOptions({
        question: "Plants that climb with the help of tendrils are called ________.",
        optionA: "Climbers",
        optionB: "Creepers",
        optionC: "Epiphytes",
        correctAnswer: "Climbers",
      }),
      shuffleOptions({
        question: "Leaves have small openings on their surface called ________ for exchange of gases.",
        optionA: "Pores",
        optionB: "Veins",
        optionC: "Stomata",
        correctAnswer: "Stomata",
      }),
      shuffleOptions({
        question: "The loss of water in the form of vapour from leaves is called ________.",
        optionA: "Pollination",
        optionB: "Transpiration",
        optionC: "Evaporation",
        correctAnswer: "Transpiration",
      }),
      shuffleOptions({
        question: "The main thick root that goes deep into the soil is known as a ________ root.",
        optionA: "Tap",
        optionB: "Fibrous",
        optionC: "Aerial",
        correctAnswer: "Tap",
      }),
      shuffleOptions({
        question: "The second whorl of a flower that has coloured petals is called ________.",
        optionA: "Calyx",
        optionB: "Corolla",
        optionC: "Androecium",
        correctAnswer: "Corolla",
      }),
      shuffleOptions({
        question: "The broad, flat part of a leaf that makes food is called the ________.",
        optionA: "Lamina",
        optionB: "Petiole",
        optionC: "Midrib",
        correctAnswer: "Lamina",
      }),
      shuffleOptions({
        question: "Roots that grow from branches and give extra support are called ________.",
        optionA: "Prop roots",
        optionB: "Tap roots",
        optionC: "Fibrous roots",
        correctAnswer: "Prop roots",
      }),
      shuffleOptions({
        question: "The arrangement of veins in a leaf is known as ________.",
        optionA: "Transpiration",
        optionB: "Venation",
        optionC: "Pollination",
        correctAnswer: "Venation",
      }),
      shuffleOptions({
        question: "Flowers that have bright colours and sweet smell are usually pollinated by ________.",
        optionA: "Insects",
        optionB: "Wind",
        optionC: "Water",
        correctAnswer: "Insects",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Herbs are small plants with soft, green stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shrubs are the largest plants found on earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fibrous roots are thin and bushy and arise from the stem base.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tap roots go deep into the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leaves lose water through the process of transpiration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Petals protect the flower bud.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pollination is the transfer of pollen from anther to stigma.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits develop from the ovary of a flower after fertilisation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Epiphytes take their food from other plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chlorophyll is necessary for photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
