export const chapter = "Chapter - 5: Sorting Materials into Groups";
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
        question: "What is the process of grouping and sorting objects based on similarities and differences called?",
        optionA: "Filtration",
        optionB: "Classification",
        optionC: "Conduction",
        correctAnswer: "Classification",
      }),
      shuffleOptions({
        question: "Which term refers to the characteristic shine seen on metals like gold and silver?",
        optionA: "Lustre",
        optionB: "Glow",
        optionC: "Polish",
        correctAnswer: "Lustre",
      }),
      shuffleOptions({
        question: "Which substance is recognised as the hardest known material?",
        optionA: "Graphite",
        optionB: "Diamond",
        optionC: "Iron",
        correctAnswer: "Diamond",
      }),
      shuffleOptions({
        question: "Which property helps us decide whether an object will float or sink in water?",
        optionA: "Solubility",
        optionB: "Floatation",
        optionC: "Hardness",
        correctAnswer: "Floatation",
      }),
      shuffleOptions({
        question: "What do we call materials that allow light to pass through them clearly so that objects can be seen distinctly?",
        optionA: "Opaque",
        optionB: "Translucent",
        optionC: "Transparent",
        correctAnswer: "Transparent",
      }),
      shuffleOptions({
        question: "Materials that do not allow electricity to pass through them are called what?",
        optionA: "Conductors",
        optionB: "Insulators",
        optionC: "Solvents",
        correctAnswer: "Insulators",
      }),
      shuffleOptions({
        question: "Which of the following is commonly used as a good conductor of heat in cooking utensils?",
        optionA: "Wood",
        optionB: "Copper",
        optionC: "Plastic",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which term is used for materials that allow only some light to pass through so objects appear blurred?",
        optionA: "Transparent",
        optionB: "Opaque",
        optionC: "Translucent",
        correctAnswer: "Translucent",
      }),
      shuffleOptions({
        question: "What term describes liquids that do not mix with water and form a separate layer when left to stand?",
        optionA: "Miscible liquids",
        optionB: "Immiscible liquids",
        optionC: "Soluble liquids",
        correctAnswer: "Immiscible liquids",
      }),
      shuffleOptions({
        question: "According to the chapter, which factor most influences whether a metal object floats on water?",
        optionA: "Its colour",
        optionB: "Its shape and design",
        optionC: "Its temperature",
        correctAnswer: "Its shape and design",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The shine of metals such as gold and silver is known as ________.",
        optionA: "Lustre",
        optionB: "Reflection",
        optionC: "Sparkle",
        correctAnswer: "Lustre",
      }),
      shuffleOptions({
        question: "Objects made of ________ usually sink in water.",
        optionA: "Iron",
        optionB: "Wood",
        optionC: "Plastic",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "The process of ________ helps in arranging materials with similar properties.",
        optionA: "Classification",
        optionB: "Condensation",
        optionC: "Filtration",
        correctAnswer: "Classification",
      }),
      shuffleOptions({
        question: "Materials that allow light to pass through them clearly are called ________.",
        optionA: "Transparent",
        optionB: "Translucent",
        optionC: "Opaque",
        correctAnswer: "Transparent",
      }),
      shuffleOptions({
        question: "________ is the property of a substance to dissolve in another.",
        optionA: "Solubility",
        optionB: "Conductivity",
        optionC: "Hardness",
        correctAnswer: "Solubility",
      }),
      shuffleOptions({
        question: "Substances that do not dissolve in water are called ________.",
        optionA: "Insoluble",
        optionB: "Miscible",
        optionC: "Soluble",
        correctAnswer: "Insoluble",
      }),
      shuffleOptions({
        question: "Materials that do not allow heat to pass through them are called ________.",
        optionA: "Non-conductors",
        optionB: "Conductors",
        optionC: "Metals",
        correctAnswer: "Non-conductors",
      }),
      shuffleOptions({
        question: "________ is a material that conducts electricity easily.",
        optionA: "Copper",
        optionB: "Rubber",
        optionC: "Plastic",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "________ materials allow light to pass through them partially.",
        optionA: "Translucent",
        optionB: "Opaque",
        optionC: "Transparent",
        correctAnswer: "Translucent",
      }),
      shuffleOptions({
        question: "________ depends more on the shape and design of the object than on its material.",
        optionA: "Floatation",
        optionB: "Solubility",
        optionC: "Conductivity",
        correctAnswer: "Floatation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Grouping of materials helps in understanding their properties better.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All metals are poor conductors of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Transparent materials allow light to pass through them completely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plastic and wood are good conductors of heat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Opaque materials allow some light to pass through.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Floatation depends only on the weight of the object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Substances that dissolve completely in water are called soluble substances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diamond is the softest natural material.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air and glass are examples of transparent materials.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Metals like copper and iron are good conductors of electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
