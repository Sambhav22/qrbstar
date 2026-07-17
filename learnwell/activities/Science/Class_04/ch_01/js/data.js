export const chapter = "Chapter - 1: Food Making in Plants";
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
        question: "Which part of a leaf allows air to pass in and out?",
        optionA: "Vein",
        optionB: "Stomata",
        optionC: "Petiole",
        correctAnswer: "Stomata",
      }),
      shuffleOptions({
        question: "Which part runs down the centre of a leaf?",
        optionA: "Side vein",
        optionB: "Main vein",
        optionC: "Stipule",
        correctAnswer: "Main vein",
      }),
      shuffleOptions({
        question: "In which form do plants first make their food?",
        optionA: "Glucose",
        optionB: "Protein",
        optionC: "Fat",
        correctAnswer: "Glucose",
      }),
      shuffleOptions({
        question: "Which structures arise from the main vein and spread through the leaf blade?",
        optionA: "Root hairs",
        optionB: "Side veins",
        optionC: "Stomata",
        correctAnswer: "Side veins",
      }),
      shuffleOptions({
        question: "Which of these depends on dead and decaying matter for food?",
        optionA: "Mushroom",
        optionB: "Rose",
        optionC: "Mango",
        correctAnswer: "Mushroom",
      }),
      shuffleOptions({
        question: "Which test is used to show the presence of starch in a leaf?",
        optionA: "Limewater test",
        optionB: "Iodine test",
        optionC: "Salt test",
        correctAnswer: "Iodine test",
      }),
      shuffleOptions({
        question: "Which substance do leaves take in from the air for photosynthesis?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What precaution is given about heating alcohol during the starch test?",
        optionA: "Heat it directly; it boils faster",
        optionB: "Never heat it directly; it will catch fire",
        optionC: "Keep it cold while testing",
        correctAnswer: "Never heat it directly; it will catch fire",
      }),
      shuffleOptions({
        question: "On which surface of a leaf are stomata more in number?",
        optionA: "Upper surface",
        optionB: "Lower surface",
        optionC: "Leaf tip",
        correctAnswer: "Lower surface",
      }),
      shuffleOptions({
        question: "What is the name of the sequence showing energy flow from sun → plants → animals?",
        optionA: "Food web",
        optionB: "Food chain",
        optionC: "Energy loop",
        correctAnswer: "Food chain",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Leaves absorb ______ from the air with the help of stomata.",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Chlorophyll traps energy from the ______.",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Soil",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "The vein running down the centre of a leaf is the ______.",
        optionA: "Side vein",
        optionB: "Main vein",
        optionC: "Stipule",
        correctAnswer: "Main vein",
      }),
      shuffleOptions({
        question: "Several small veins that arise from the main vein are called ______.",
        optionA: "Root hairs",
        optionB: "Side veins",
        optionC: "Stomata",
        correctAnswer: "Side veins",
      }),
      shuffleOptions({
        question: "Plants make food in the form of ______ which soon changes into starch.",
        optionA: "Glucose",
        optionB: "Protein",
        optionC: "Fat",
        correctAnswer: "Glucose",
      }),
      shuffleOptions({
        question: "Iodine solution gives a ______ colour when starch is present.",
        optionA: "Red",
        optionB: "Blue-black",
        optionC: "Brown",
        correctAnswer: "Blue-black",
      }),
      shuffleOptions({
        question: "Extra food in plants is ______ in roots, stems, flowers, fruits or leaves.",
        optionA: "Wasted",
        optionB: "Stored",
        optionC: "Evaporated",
        correctAnswer: "Stored",
      }),
      shuffleOptions({
        question: "Non-green plants like ______ depend on dead and decaying matter for food.",
        optionA: "Rose",
        optionB: "Mango",
        optionC: "Mushroom",
        correctAnswer: "Mushroom",
      }),
      shuffleOptions({
        question: "There are more stomata on the ______ surface of the leaf.",
        optionA: "Upper",
        optionB: "Lower",
        optionC: "Side",
        correctAnswer: "Lower",
      }),
      shuffleOptions({
        question: "Plants absorb water and ______ from the soil.",
        optionA: "Minerals",
        optionB: "Oxygen",
        optionC: "Sugar",
        correctAnswer: "Minerals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Only green leaves containing chlorophyll can make food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leaves absorb carbon dioxide from the air with the help of stomata.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chlorophyll traps energy from the moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Iodine solution is used to test the presence of starch in a leaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The main vein runs along the edge of the leaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are more stomata on the lower surface of the leaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-green plants such as mushrooms obtain food by photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants store extra food in the form of starch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a food chain, energy flows from the sun to plants and then to animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heating alcohol directly during the starch test is safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
