export const chapter = "Chapter - 12: Reproduction in Plants";
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
        question: "What is the process by which living organisms produce their own kind called?",
        optionA: "Reproduction",
        optionB: "Photosynthesis",
        optionC: "Germination",
        correctAnswer: "Reproduction",
      }),
      shuffleOptions({
        question: "Which type of reproduction requires only one parent?",
        optionA: "Asexual reproduction",
        optionB: "Sexual reproduction",
        optionC: "Cross-pollination",
        correctAnswer: "Asexual reproduction",
      }),
      shuffleOptions({
        question: "What are the vegetative parts of a plant?",
        optionA: "Roots, stems, and leaves",
        optionB: "Flowers and fruits",
        optionC: "Seeds and pollen",
        correctAnswer: "Roots, stems, and leaves",
      }),
      shuffleOptions({
        question: "Potato reproduces by which part of the plant?",
        optionA: "Leaf",
        optionB: "Stem (tuber)",
        optionC: "Root",
        correctAnswer: "Stem (tuber)",
      }),
      shuffleOptions({
        question: "What is the underground stem of ginger used for propagation called?",
        optionA: "Bulb",
        optionB: "Rhizome",
        optionC: "Runner",
        correctAnswer: "Rhizome",
      }),
      shuffleOptions({
        question: "Which plant reproduces through buds on its leaves?",
        optionA: "Rose",
        optionB: "Bryophyllum",
        optionC: "Dahlia",
        correctAnswer: "Bryophyllum",
      }),
      shuffleOptions({
        question: "What is the male reproductive part of a flower called?",
        optionA: "Pistil",
        optionB: "Stamen",
        optionC: "Ovary",
        correctAnswer: "Stamen",
      }),
      shuffleOptions({
        question: "What is the transfer of pollen grains from the anther to the stigma called?",
        optionA: "Fertilisation",
        optionB: "Pollination",
        optionC: "Germination",
        correctAnswer: "Pollination",
      }),
      shuffleOptions({
        question: "What is the fusion of male and female gametes called?",
        optionA: "Fertilisation",
        optionB: "Fragmentation",
        optionC: "Budding",
        correctAnswer: "Fertilisation",
      }),
      shuffleOptions({
        question: "What is the process of scattering seeds to different places called?",
        optionA: "Dispersal",
        optionB: "Vegetation",
        optionC: "Layering",
        correctAnswer: "Dispersal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The production of new plants from roots, stems or leaves is called ______ propagation.",
        optionA: "Vegetative",
        optionB: "Sexual",
        optionC: "Artificial",
        correctAnswer: "Vegetative",
      }),
      shuffleOptions({
        question: "The underground swollen stem of potato is known as a ______.",
        optionA: "Tuber",
        optionB: "Bulb",
        optionC: "Rhizome",
        correctAnswer: "Tuber",
      }),
      shuffleOptions({
        question: "In yeast, asexual reproduction takes place by ______.",
        optionA: "Budding",
        optionB: "Fragmentation",
        optionC: "Spore formation",
        correctAnswer: "Budding",
      }),
      shuffleOptions({
        question: "The breaking up of an organism into two or more parts is called ______.",
        optionA: "Fragmentation",
        optionB: "Germination",
        optionC: "Fusion",
        correctAnswer: "Fragmentation",
      }),
      shuffleOptions({
        question: "The male reproductive part of a flower is called the ______.",
        optionA: "Stamen",
        optionB: "Pistil",
        optionC: "Ovule",
        correctAnswer: "Stamen",
      }),
      shuffleOptions({
        question: "The female reproductive part of a flower is called the ______.",
        optionA: "Pistil",
        optionB: "Stamen",
        optionC: "Petal",
        correctAnswer: "Pistil",
      }),
      shuffleOptions({
        question: "The transfer of pollen grains from anther to stigma of the same flower is called ______.",
        optionA: "Self-pollination",
        optionB: "Cross-pollination",
        optionC: "Fertilisation",
        correctAnswer: "Self-pollination",
      }),
      shuffleOptions({
        question: "The fusion of male and female gametes results in the formation of a ______.",
        optionA: "Zygote",
        optionB: "Seed",
        optionC: "Ovule",
        correctAnswer: "Zygote",
      }),
      shuffleOptions({
        question: "The ripened ovary of a flower develops into a ______.",
        optionA: "Fruit",
        optionB: "Seed",
        optionC: "Pollen",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "The process by which seeds are scattered away from the parent plant is called ______.",
        optionA: "Seed dispersal",
        optionB: "Fertilisation",
        optionC: "Germination",
        correctAnswer: "Seed dispersal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Vegetative propagation requires two parent plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Strawberry reproduces through runners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yeast reproduces sexually.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fragmentation occurs in Spirogyra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pollination always takes place by water only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fertilisation is the fusion of male and female gametes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Incomplete flowers have both male and female parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ovary develops into fruit after fertilisation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wind, insects and animals act as agents of pollination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dispersal of seeds helps to prevent overcrowding of plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
