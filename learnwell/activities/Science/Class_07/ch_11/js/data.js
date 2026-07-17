export const chapter = "Chapter - 11: Transportation of Substances";
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
        question: "Which red-coloured pigment present in blood carries oxygen?",
        optionA: "Myoglobin",
        optionB: "Haemoglobin",
        optionC: "Chlorophyll",
        correctAnswer: "Haemoglobin",
      }),
      shuffleOptions({
        question: "What are the main components of the circulatory system?",
        optionA: "Heart, blood, blood vessels",
        optionB: "Lungs, brain, nerves",
        optionC: "Veins, liver, kidney",
        correctAnswer: "Heart, blood, blood vessels",
      }),
      shuffleOptions({
        question: "Which blood cells help in clotting of blood?",
        optionA: "RBCs",
        optionB: "Platelets",
        optionC: "WBCs",
        correctAnswer: "Platelets",
      }),
      shuffleOptions({
        question: "Which blood vessels carry blood away from the heart?",
        optionA: "Arteries",
        optionB: "Veins",
        optionC: "Capillaries",
        correctAnswer: "Arteries",
      }),
      shuffleOptions({
        question: "What prevents the backward flow of blood in veins?",
        optionA: "Septum",
        optionB: "Valves",
        optionC: "Diaphragm",
        correctAnswer: "Valves",
      }),
      shuffleOptions({
        question: "Which instrument is used to hear heartbeats?",
        optionA: "Thermometer",
        optionB: "Stethoscope",
        optionC: "Microscope",
        correctAnswer: "Stethoscope",
      }),
      shuffleOptions({
        question: "What is the normal pulse rate of an adult human?",
        optionA: "20–40 beats per minute",
        optionB: "60–100 beats per minute",
        optionC: "120–160 beats per minute",
        correctAnswer: "60–100 beats per minute",
      }),
      shuffleOptions({
        question: "Which organ in the human body purifies blood and removes nitrogenous wastes?",
        optionA: "Liver",
        optionB: "Kidney",
        optionC: "Heart",
        correctAnswer: "Kidney",
      }),
      shuffleOptions({
        question: "What is the process of removing waste products from the body called?",
        optionA: "Digestion",
        optionB: "Excretion",
        optionC: "Circulation",
        correctAnswer: "Excretion",
      }),
      shuffleOptions({
        question: "Which vascular tissue in plants transports water and minerals from roots to leaves?",
        optionA: "Phloem",
        optionB: "Xylem",
        optionC: "Cortex",
        correctAnswer: "Xylem",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ system transports food, oxygen and water to different parts of the body.",
        optionA: "Circulatory",
        optionB: "Excretory",
        optionC: "Nervous",
        correctAnswer: "Circulatory",
      }),
      shuffleOptions({
        question: "The liquid part of blood is called ______.",
        optionA: "Plasma",
        optionB: "Lymph",
        optionC: "Cytoplasm",
        correctAnswer: "Plasma",
      }),
      shuffleOptions({
        question: "White blood cells protect the body from ______.",
        optionA: "Fats",
        optionB: "Germs",
        optionC: "Oxygen",
        correctAnswer: "Germs",
      }),
      shuffleOptions({
        question: "The lower muscular chamber of the heart is known as ______.",
        optionA: "Atrium",
        optionB: "Ventricle",
        optionC: "Septum",
        correctAnswer: "Ventricle",
      }),
      shuffleOptions({
        question: "The partition separating the right and left sides of the heart is called the ______.",
        optionA: "Valve",
        optionB: "Septum",
        optionC: "Diaphragm",
        correctAnswer: "Septum",
      }),
      shuffleOptions({
        question: "The process of removing waste products from the blood by an artificial kidney is called ______.",
        optionA: "Dialysis",
        optionB: "Diffusion",
        optionC: "Exhalation",
        correctAnswer: "Dialysis",
      }),
      shuffleOptions({
        question: "The process of removal of waste products from the body is called ______.",
        optionA: "Excretion",
        optionB: "Filtration",
        optionC: "Absorption",
        correctAnswer: "Excretion",
      }),
      shuffleOptions({
        question: "The bean-shaped organs in the human excretory system are called ______.",
        optionA: "Lungs",
        optionB: "Kidneys",
        optionC: "Glands",
        correctAnswer: "Kidneys",
      }),
      shuffleOptions({
        question: "In plants, the movement of prepared food from leaves to other parts is called ______.",
        optionA: "Transpiration",
        optionB: "Translocation",
        optionC: "Transformation",
        correctAnswer: "Translocation",
      }),
      shuffleOptions({
        question: "The pores on the surface of leaves through which gases and water vapour are exchanged are called ______.",
        optionA: "Spiracles",
        optionB: "Stomata",
        optionC: "Lenticels",
        correctAnswer: "Stomata",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Blood is a colourless fluid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Arteries carry blood towards the heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Platelets help in clotting of blood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pulmonary vein carries oxygenated blood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The heart has two chambers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kidneys filter waste materials from the blood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dialysis is the process of artificial filtration of blood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Xylem carries prepared food to all parts of a plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stomata help in excretion of oxygen during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Transpiration helps plants to cool themselves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
