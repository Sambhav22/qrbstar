export const chapter = "Chapter - 8: Cell : Structure and Function";
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
        question: "Who first observed small box-like structures in cork and named them “cells”?",
        optionA: "Robert Brown",
        optionB: "Robert Hooke",
        optionC: "Antonie van Leeuwenhoek",
        correctAnswer: "Robert Hooke",
      }),
      shuffleOptions({
        question: "Which organism performs all life processes within a single cell?",
        optionA: "Cat",
        optionB: "Mushroom",
        optionC: "Amoeba",
        correctAnswer: "Amoeba",
      }),
      shuffleOptions({
        question: "Which organelle is known as the “powerhouse of the cell”?",
        optionA: "Ribosome",
        optionB: "Mitochondrion",
        optionC: "Chromoplast",
        correctAnswer: "Mitochondrion",
      }),
      shuffleOptions({
        question: "Which part of a plant cell provides rigidity and protection?",
        optionA: "Nucleus",
        optionB: "Cell wall",
        optionC: "Centrosome",
        correctAnswer: "Cell wall",
      }),
      shuffleOptions({
        question: "Which structure controls all the activities of a cell?",
        optionA: "Vacuole",
        optionB: "Cytoplasm",
        optionC: "Nucleus",
        correctAnswer: "Nucleus",
      }),
      shuffleOptions({
        question: "Which cell structure stores water, food and waste materials?",
        optionA: "Ribosome",
        optionB: "Vacuole",
        optionC: "Golgi body",
        correctAnswer: "Vacuole",
      }),
      shuffleOptions({
        question: "Which jelly-like material lies between the nucleus and the cell membrane?",
        optionA: "Cytoplasm",
        optionB: "Cell sap",
        optionC: "Chromatin",
        correctAnswer: "Cytoplasm",
      }),
      shuffleOptions({
        question: "Which pigment makes leaves appear green in colour?",
        optionA: "Carotene",
        optionB: "Xanthophyll",
        optionC: "Chlorophyll",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which organelle contains digestive enzymes and is also known as the “suicidal bag” of the cell?",
        optionA: "Lysosome",
        optionB: "Ribosome",
        optionC: "Centrosome",
        correctAnswer: "Lysosome",
      }),
      shuffleOptions({
        question: "Cells without a well-defined nucleus or nuclear membrane are called:",
        optionA: "Eukaryotic cells",
        optionB: "Prokaryotic cells",
        optionC: "Muscle cells",
        correctAnswer: "Prokaryotic cells",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cell membrane is ______ because it allows only certain substances to pass through.",
        optionA: "rigid",
        optionB: "semi-permeable",
        optionC: "impermeable",
        correctAnswer: "semi-permeable",
      }),
      shuffleOptions({
        question: "The largest organelle present in most cells is the ______.",
        optionA: "vacuole",
        optionB: "nucleus",
        optionC: "ribosome",
        correctAnswer: "nucleus",
      }),
      shuffleOptions({
        question: "New cells formed after cell division are called ______ cells.",
        optionA: "nerve",
        optionB: "muscle",
        optionC: "daughter",
        correctAnswer: "daughter",
      }),
      shuffleOptions({
        question: "The smallest known living cells are ______.",
        optionA: "Amoeba",
        optionB: "PPLO",
        optionC: "Paramoecium",
        correctAnswer: "PPLO",
      }),
      shuffleOptions({
        question: "The nucleus is surrounded by a double-layered ______ membrane.",
        optionA: "nuclear",
        optionB: "cell",
        optionC: "plastid",
        correctAnswer: "nuclear",
      }),
      shuffleOptions({
        question: "Plastids are found only in ______ cells.",
        optionA: "animal",
        optionB: "plant",
        optionC: "fungal",
        correctAnswer: "plant",
      }),
      shuffleOptions({
        question: "The cell organelles responsible for protein synthesis are called ______.",
        optionA: "ribosomes",
        optionB: "vacuoles",
        optionC: "chromoplasts",
        correctAnswer: "ribosomes",
      }),
      shuffleOptions({
        question: "The largest single cell visible to the naked eye is the ______ egg.",
        optionA: "hen’s",
        optionB: "duck’s",
        optionC: "pigeon’s",
        correctAnswer: "hen’s",
      }),
      shuffleOptions({
        question: "The jelly-like fluid that fills the space inside the cell membrane is called ______.",
        optionA: "chlorophyll",
        optionB: "cytoplasm",
        optionC: "nucleolus",
        correctAnswer: "cytoplasm",
      }),
      shuffleOptions({
        question: "Organisms made up of many cells are known as ______ organisms.",
        optionA: "unicellular",
        optionB: "multicellular",
        optionC: "microscopic",
        correctAnswer: "multicellular",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Amoeba changes its shape with the help of pseudopodia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Red blood cells are long and branched like nerve cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All plant and animal cells contain cytoplasm and nucleus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lysosomes contain digestive enzymes and can destroy worn-out cell parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cell wall is present in all types of cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chloroplasts are responsible for photosynthesis in plant cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vacuoles are generally larger in plant cells than in animal cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eukaryotic cells do not have a nucleus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chromosomes help transmit characters from parents to children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mitochondria are found only in plant cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
