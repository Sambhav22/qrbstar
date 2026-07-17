export const chapter = "Chapter - 3: Fibre to Fabric";
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
        question: "Which part of the animal’s body provides wool?",
        optionA: "Fleece",
        optionB: "Horns",
        optionC: "Hooves",
        correctAnswer: "Fleece",
      }),
      shuffleOptions({
        question: "What is the main protein found in wool fibres?",
        optionA: "Collagen",
        optionB: "Keratin",
        optionC: "Elastin",
        correctAnswer: "Keratin",
      }),
      shuffleOptions({
        question: "Which type of wool is obtained from the Angora goat?",
        optionA: "Pashmina",
        optionB: "Mohair",
        optionC: "Cashmere",
        correctAnswer: "Mohair",
      }),
      shuffleOptions({
        question: "What is the method called in which animals of different varieties are mated to get better breeds?",
        optionA: "Breeding",
        optionB: "Cross breeding",
        optionC: "Sorting",
        correctAnswer: "Cross breeding",
      }),
      shuffleOptions({
        question: "What is the greasy substance present in wool known as?",
        optionA: "Fat",
        optionB: "Lanolin",
        optionC: "Sericin",
        correctAnswer: "Lanolin",
      }),
      shuffleOptions({
        question: "Which process involves washing the sheared fleece to remove dirt and grease?",
        optionA: "Scouring",
        optionB: "Shearing",
        optionC: "Grading",
        correctAnswer: "Scouring",
      }),
      shuffleOptions({
        question: "What is the process of converting wool fibres into yarns called?",
        optionA: "Sorting",
        optionB: "Spinning",
        optionC: "Weaving",
        correctAnswer: "Spinning",
      }),
      shuffleOptions({
        question: "Which of the following animals also yields wool?",
        optionA: "Alpaca",
        optionB: "Cow",
        optionC: "Buffalo",
        correctAnswer: "Alpaca",
      }),
      shuffleOptions({
        question: "What is the process of taking out silk threads from the cocoon called?",
        optionA: "Scouring",
        optionB: "Reeling",
        optionC: "Grading",
        correctAnswer: "Reeling",
      }),
      shuffleOptions({
        question: "Who discovered silk according to Chinese legends?",
        optionA: "Lady Si Lung Chi",
        optionB: "Emperor Huangdi",
        optionC: "Marco Polo",
        correctAnswer: "Lady Si Lung Chi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Wool is obtained from the ______ of animals.",
        optionA: "fleece",
        optionB: "horns",
        optionC: "hooves",
        correctAnswer: "fleece",
      }),
      shuffleOptions({
        question: "The greasy material found in raw wool is called ______.",
        optionA: "lanolin",
        optionB: "keratin",
        optionC: "wax",
        correctAnswer: "lanolin",
      }),
      shuffleOptions({
        question: "The fine soft under-hair of sheep is used for making ______.",
        optionA: "wool",
        optionB: "silk",
        optionC: "cotton",
        correctAnswer: "wool",
      }),
      shuffleOptions({
        question: "The process of removing fleece from sheep is called ______.",
        optionA: "shearing",
        optionB: "sorting",
        optionC: "scouring",
        correctAnswer: "shearing",
      }),
      shuffleOptions({
        question: "The rearing of silkworms for obtaining silk is called ______.",
        optionA: "sericulture",
        optionB: "apiculture",
        optionC: "pisciculture",
        correctAnswer: "sericulture",
      }),
      shuffleOptions({
        question: "The liquid silk fibre is made of a protein called ______.",
        optionA: "fibroin",
        optionB: "keratin",
        optionC: "collagen",
        correctAnswer: "fibroin",
      }),
      shuffleOptions({
        question: "The sticky gum that holds silk fibres together is called ______.",
        optionA: "sericin",
        optionB: "gelatin",
        optionC: "lanolin",
        correctAnswer: "sericin",
      }),
      shuffleOptions({
        question: "The place where raw silk is produced is known as a ______.",
        optionA: "filature",
        optionB: "mill",
        optionC: "loom",
        correctAnswer: "filature",
      }),
      shuffleOptions({
        question: "The bacterium anthracis causes a disease called ______.",
        optionA: "anthrax",
        optionB: "asthma",
        optionC: "malaria",
        correctAnswer: "anthrax",
      }),
      shuffleOptions({
        question: "The wool obtained from Kashmir goat is called ______.",
        optionA: "cashmere",
        optionB: "mohair",
        optionC: "vicuna",
        correctAnswer: "cashmere",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Wool and silk are both natural animal fibres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fine under-hair of sheep is used for making wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shearing is done in winter to protect the sheep from cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Silk is made up of two proteins – fibroin and sericin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vicuna wool is the least expensive wool in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The silk fibre is unwound from the cocoon in a process called reeling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Anthrax is a disease caused by a virus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Silk moth lays eggs on mulberry leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lady Si Lung Chi discovered silk accidentally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The largest producer of silk in the world is India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
