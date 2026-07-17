export const chapter = "Chapter - 6: Physical and Chemical Changes";
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
        question: "What type of change takes place when ice melts into water?",
        optionA: "Chemical change",
        optionB: "Physical change",
        optionC: "Fast change",
        correctAnswer: "Physical change",
      }),
      shuffleOptions({
        question: "What new substance is formed when iron reacts with oxygen and water?",
        optionA: "Iron oxide",
        optionB: "Copper oxide",
        optionC: "Zinc oxide",
        correctAnswer: "Iron oxide",
      }),
      shuffleOptions({
        question: "Which gas is released when vinegar reacts with baking soda?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What is the brown substance formed on iron objects left in moist air called?",
        optionA: "Caramel",
        optionB: "Rust",
        optionC: "Copper",
        correctAnswer: "Rust",
      }),
      shuffleOptions({
        question: "What kind of light is produced when magnesium ribbon burns?",
        optionA: "Blue",
        optionB: "Yellow",
        optionC: "White",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "What prevents the cut surface of an apple from turning brown?",
        optionA: "Applying lemon juice",
        optionB: "Adding salt",
        optionC: "Heating",
        correctAnswer: "Applying lemon juice",
      }),
      shuffleOptions({
        question: "What type of reaction occurs when heat is given out?",
        optionA: "Exothermic reaction",
        optionB: "Endothermic reaction",
        optionC: "Neutralisation",
        correctAnswer: "Exothermic reaction",
      }),
      shuffleOptions({
        question: "What is the process of coating iron with zinc called?",
        optionA: "Tinning",
        optionB: "Galvanising",
        optionC: "Alloying",
        correctAnswer: "Galvanising",
      }),
      shuffleOptions({
        question: "Which reaction involves a more reactive metal displacing a less reactive one?",
        optionA: "Displacement reaction",
        optionB: "Decomposition reaction",
        optionC: "Neutralisation reaction",
        correctAnswer: "Displacement reaction",
      }),
      shuffleOptions({
        question: "Which process is used to obtain large and pure crystals of a substance?",
        optionA: "Alloying",
        optionB: "Crystallisation",
        optionC: "Combustion",
        correctAnswer: "Crystallisation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A change in which no new substance is formed is called a ______ change.",
        optionA: "Physical",
        optionB: "Chemical",
        optionC: "Permanent",
        correctAnswer: "Physical",
      }),
      shuffleOptions({
        question: "The process of iron reacting with water and oxygen to form rust is called ______.",
        optionA: "Corrosion",
        optionB: "Rusting",
        optionC: "Burning",
        correctAnswer: "Rusting",
      }),
      shuffleOptions({
        question: "The process in which two or more substances react to form new ones is called a ______.",
        optionA: "Physical change",
        optionB: "Chemical reaction",
        optionC: "Displacement",
        correctAnswer: "Chemical reaction",
      }),
      shuffleOptions({
        question: "The brown melted substance obtained by heating sugar is called ______.",
        optionA: "Rust",
        optionB: "Caramel",
        optionC: "Wax",
        correctAnswer: "Caramel",
      }),
      shuffleOptions({
        question: "The reaction between an acid and a base is called a ______ reaction.",
        optionA: "Neutralisation",
        optionB: "Decomposition",
        optionC: "Combination",
        correctAnswer: "Neutralisation",
      }),
      shuffleOptions({
        question: "In a chemical reaction, the substances that react are called ______.",
        optionA: "Reactants",
        optionB: "Products",
        optionC: "Mixtures",
        correctAnswer: "Reactants",
      }),
      shuffleOptions({
        question: "The process of mixing metals to make a new one is called ______.",
        optionA: "Alloying",
        optionB: "Rusting",
        optionC: "Melting",
        correctAnswer: "Alloying",
      }),
      shuffleOptions({
        question: "The type of reaction in which heat is absorbed is called an ______ reaction.",
        optionA: "Exothermic",
        optionB: "Endothermic",
        optionC: "Combustion",
        correctAnswer: "Endothermic",
      }),
      shuffleOptions({
        question: "The brown colour on fruits and vegetables after cutting is caused by ______.",
        optionA: "Phenols",
        optionB: "Minerals",
        optionC: "Acids",
        correctAnswer: "Phenols",
      }),
      shuffleOptions({
        question: "The scientist known as the “Father of Modern Chemistry” is ______.",
        optionA: "Dalton",
        optionB: "Antoine Lavoisier",
        optionC: "Rutherford",
        correctAnswer: "Antoine Lavoisier",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Melting of wax is a chemical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Burning of paper produces new substances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rusting requires both air and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Energy is absorbed in an exothermic reaction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Vinegar and baking soda together produce carbon dioxide gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Alloying is used to delay rusting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The process of obtaining copper sulphate crystals is a chemical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Digestion of food is a physical change.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The brown coating on iron is called iron oxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Displacement reaction occurs between two non-metals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
