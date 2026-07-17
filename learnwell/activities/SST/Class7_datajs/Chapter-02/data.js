export const chapter = "Chapter - 2: Inside the Earth";
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
        question: "Which layer of the earth is the thinnest?",
        optionA: "Mantle",
        optionB: "Crust",
        optionC: "Core",
        correctAnswer: "Crust",
      }),
      shuffleOptions({
        question: "Which rock is formed by slow cooling of magma deep inside the earth?",
        optionA: "Basalt",
        optionB: "Granite",
        optionC: "Obsidian",
        correctAnswer: "Granite",
      }),
      shuffleOptions({
        question: "Which layer is made of silica and aluminium?",
        optionA: "Sima",
        optionB: "Mantle",
        optionC: "Sial",
        correctAnswer: "Sial",
      }),
      shuffleOptions({
        question: "Which rock is an example of an extrusive igneous rock?",
        optionA: "Basalt",
        optionB: "Granite",
        optionC: "Slate",
        correctAnswer: "Basalt",
      }),
      shuffleOptions({
        question: "Which rock is formed when sandstone undergoes metamorphism?",
        optionA: "Quartzite",
        optionB: "Marble",
        optionC: "Shale",
        correctAnswer: "Quartzite",
      }),
      shuffleOptions({
        question: "What causes the fine grains in extrusive igneous rocks?",
        optionA: "Slow cooling",
        optionB: "Rapid cooling of lava on the surface",
        optionC: "No cooling",
        correctAnswer: "Rapid cooling of lava on the surface",
      }),
      shuffleOptions({
        question: "Which rock contains layers called strata?",
        optionA: "Sedimentary rock",
        optionB: "Igneous rock",
        optionC: "Metamorphic rock",
        correctAnswer: "Sedimentary rock",
      }),
      shuffleOptions({
        question: "Which layer of the earth is semi-molten in its lower part?",
        optionA: "Crust",
        optionB: "Mantle",
        optionC: "Inner core",
        correctAnswer: "Mantle",
      }),
      shuffleOptions({
        question: "Which part of the core is molten?",
        optionA: "Inner core",
        optionB: "Outer core",
        optionC: "Crust",
        correctAnswer: "Outer core",
      }),
      shuffleOptions({
        question: "Which process converts sediments into sedimentary rocks?",
        optionA: "Melting",
        optionB: "Compaction and cementation",
        optionC: "Evaporation",
        correctAnswer: "Compaction and cementation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The continental crust is mainly made of ________.",
        optionA: "basalt",
        optionB: "gabbro",
        optionC: "sial (silica and aluminium)",
        correctAnswer: "sial (silica and aluminium)",
      }),
      shuffleOptions({
        question: "The oceanic crust contains rocks like basalt, diabase and ________.",
        optionA: "shale",
        optionB: "gabbro",
        optionC: "slate",
        correctAnswer: "gabbro",
      }),
      shuffleOptions({
        question: "The upper mantle is in ________ state.",
        optionA: "solid",
        optionB: "liquid",
        optionC: "solid state with some molten rock at top",
        correctAnswer: "solid state with some molten rock at top",
      }),
      shuffleOptions({
        question: "The lower mantle can reach temperatures of about ________.",
        optionA: "500°C",
        optionB: "2200°C",
        optionC: "3200°C",
        correctAnswer: "2200°C",
      }),
      shuffleOptions({
        question: "Sediments settle at the bottom of rivers and seas in the form of ________.",
        optionA: "magma",
        optionB: "strata (layers)",
        optionC: "crystals",
        correctAnswer: "strata (layers)",
      }),
      shuffleOptions({
        question: "Limestone changes into marble when exposed to heat and ________.",
        optionA: "pressure",
        optionB: "water",
        optionC: "air",
        correctAnswer: "pressure",
      }),
      shuffleOptions({
        question: "Rocks that form due to cooling of magma are known as ________ rocks.",
        optionA: "igneous",
        optionB: "sedimentary",
        optionC: "metamorphic",
        correctAnswer: "igneous",
      }),
      shuffleOptions({
        question: "Minerals have a definite ________ composition.",
        optionA: "electrical",
        optionB: "chemical",
        optionC: "magnetic",
        correctAnswer: "chemical",
      }),
      shuffleOptions({
        question: "Basalt is an example of a/an ________ igneous rock.",
        optionA: "intrusive",
        optionB: "extrusive",
        optionC: "sedimentary",
        correctAnswer: "extrusive",
      }),
      shuffleOptions({
        question: "The core is mainly composed of nickel and ________.",
        optionA: "aluminium",
        optionB: "magnesium",
        optionC: "iron",
        correctAnswer: "iron",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The crust of the earth is thicker in continents than in ocean beds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lower mantle is entirely solid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Metamorphic rocks are formed due to heat and pressure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Basalt has very fine grains because it cools rapidly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Minerals are naturally occurring inorganic substances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Intrusive igneous rocks have small crystals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sedimentary rocks are known as stratified rocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The inner core is molten.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sandstone is a type of sedimentary rock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth’s core is the coolest part of the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
