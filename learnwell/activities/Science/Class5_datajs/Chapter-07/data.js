export const chapter = "Chapter - 7: States of Matter";
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
        question: "Which state of matter has a fixed shape and volume?",
        optionA: "Liquid",
        optionB: "Gas",
        optionC: "Solid",
        correctAnswer: "Solid",
      }),
      shuffleOptions({
        question: "Which state of matter can flow and take the shape of its container?",
        optionA: "Solid",
        optionB: "Liquid",
        optionC: "Gas",
        correctAnswer: "Liquid",
      }),
      shuffleOptions({
        question: "Which state of matter spreads and fills all available space?",
        optionA: "Solid",
        optionB: "Gas",
        optionC: "Liquid",
        correctAnswer: "Gas",
      }),
      shuffleOptions({
        question: "Which gas helps fish to breathe in water?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which liquid is called the universal solvent?",
        optionA: "Oil",
        optionB: "Water",
        optionC: "Alcohol",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which liquids do not mix with each other?",
        optionA: "Miscible",
        optionB: "Immiscible",
        optionC: "Soluble",
        correctAnswer: "Immiscible",
      }),
      shuffleOptions({
        question: "Which type of change does not form a new substance?",
        optionA: "Physical",
        optionB: "Chemical",
        optionC: "Permanent",
        correctAnswer: "Physical",
      }),
      shuffleOptions({
        question: "Which type of change forms a new substance?",
        optionA: "Physical",
        optionB: "Chemical",
        optionC: "Reversible",
        correctAnswer: "Chemical",
      }),
      shuffleOptions({
        question: "What happens to most substances when they are heated?",
        optionA: "They expand",
        optionB: "They contract",
        optionC: "They freeze",
        correctAnswer: "They expand",
      }),
      shuffleOptions({
        question: "Which process makes matter shrink when cooled?",
        optionA: "Expansion",
        optionB: "Contraction",
        optionC: "Evaporation",
        correctAnswer: "Contraction",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Anything that has mass and occupies space is called _________.",
        optionA: "Matter",
        optionB: "Object",
        optionC: "Liquid",
        correctAnswer: "Matter",
      }),
      shuffleOptions({
        question: "Matter is made up of tiny particles called _________.",
        optionA: "Molecules",
        optionB: "Mixtures",
        optionC: "Elements",
        correctAnswer: "Molecules",
      }),
      shuffleOptions({
        question: "The smallest particles of molecules are called _________.",
        optionA: "Atoms",
        optionB: "Compounds",
        optionC: "Solutions",
        correctAnswer: "Atoms",
      }),
      shuffleOptions({
        question: "Liquids that mix completely are called _________ liquids.",
        optionA: "Miscible",
        optionB: "Immiscible",
        optionC: "Soluble",
        correctAnswer: "Miscible",
      }),
      shuffleOptions({
        question: "Liquids that do not mix are called _________ liquids.",
        optionA: "Immiscible",
        optionB: "Miscible",
        optionC: "Solid",
        correctAnswer: "Immiscible",
      }),
      shuffleOptions({
        question: "The substance that gets dissolved is the _________.",
        optionA: "Solute",
        optionB: "Solvent",
        optionC: "Gas",
        correctAnswer: "Solute",
      }),
      shuffleOptions({
        question: "The substance in which another dissolves is called a _________.",
        optionA: "Solvent",
        optionB: "Solute",
        optionC: "Mixture",
        correctAnswer: "Solvent",
      }),
      shuffleOptions({
        question: "Salt and sugar are _________ in water.",
        optionA: "Soluble",
        optionB: "Insoluble",
        optionC: "Immiscible",
        correctAnswer: "Soluble",
      }),
      shuffleOptions({
        question: "Sand and chalk powder are _________ in water.",
        optionA: "Insoluble",
        optionB: "Soluble",
        optionC: "Mixed",
        correctAnswer: "Insoluble",
      }),
      shuffleOptions({
        question: "Rusting of iron is a _________ change.",
        optionA: "Chemical",
        optionB: "Physical",
        optionC: "Reversible",
        correctAnswer: "Chemical",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Solids have a definite shape and volume.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Liquids have no fixed shape but a definite volume.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gases have strong molecular forces of attraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oil and water are miscible liquids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water is called a universal solvent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Melting of ice is a chemical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rusting of iron is a physical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When heated, most substances expand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cooling causes contraction in matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Physical changes do not form new substances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
