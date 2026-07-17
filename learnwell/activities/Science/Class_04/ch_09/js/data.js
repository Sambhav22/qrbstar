export const chapter = "Chapter - 9: Solid, Liquid and Gas";
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
        question: "What do all things like trees, chairs and pencils have in common?",
        optionA: "They are living things",
        optionB: "They have mass and occupy space",
        optionC: "They can move",
        correctAnswer: "They have mass and occupy space",
      }),
      shuffleOptions({
        question: "What are tiny particles that make up matter called?",
        optionA: "Atoms",
        optionB: "Molecules",
        optionC: "Cells",
        correctAnswer: "Molecules",
      }),
      shuffleOptions({
        question: "Which state of matter has a fixed shape and definite volume?",
        optionA: "Solid",
        optionB: "Liquid",
        optionC: "Gas",
        correctAnswer: "Solid",
      }),
      shuffleOptions({
        question: "Which of these takes the shape of the container in which it is kept?",
        optionA: "Solid",
        optionB: "Liquid",
        optionC: "Gas",
        correctAnswer: "Liquid",
      }),
      shuffleOptions({
        question: "Which metal is liquid at room temperature?",
        optionA: "Iron",
        optionB: "Mercury",
        optionC: "Copper",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "Which process changes a solid into a liquid on heating?",
        optionA: "Freezing",
        optionB: "Condensation",
        optionC: "Melting",
        correctAnswer: "Melting",
      }),
      shuffleOptions({
        question: "Which process changes water into vapour?",
        optionA: "Evaporation",
        optionB: "Freezing",
        optionC: "Condensation",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "What happens when vapour cools down?",
        optionA: "It changes into a liquid",
        optionB: "It becomes solid directly",
        optionC: "It disappears",
        correctAnswer: "It changes into a liquid",
      }),
      shuffleOptions({
        question: "What do we call a substance that dissolves in a liquid?",
        optionA: "Solute",
        optionB: "Solvent",
        optionC: "Solution",
        correctAnswer: "Solute",
      }),
      shuffleOptions({
        question: "Which liquid is known as the universal solvent?",
        optionA: "Milk",
        optionB: "Water",
        optionC: "Oil",
        correctAnswer: "Water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Matter is made up of tiny particles called _______.",
        optionA: "Molecules",
        optionB: "Atoms",
        optionC: "Liquids",
        correctAnswer: "Molecules",
      }),
      shuffleOptions({
        question: "_______ is the smallest unit of matter.",
        optionA: "Atom",
        optionB: "Cell",
        optionC: "Particle",
        correctAnswer: "Atom",
      }),
      shuffleOptions({
        question: "Liquids have definite _______ but no definite shape.",
        optionA: "Volume",
        optionB: "Colour",
        optionC: "Temperature",
        correctAnswer: "Volume",
      }),
      shuffleOptions({
        question: "The process of changing solid into liquid is called _______.",
        optionA: "Melting",
        optionB: "Freezing",
        optionC: "Condensation",
        correctAnswer: "Melting",
      }),
      shuffleOptions({
        question: "The process of changing liquid into vapour is called _______.",
        optionA: "Evaporation",
        optionB: "Melting",
        optionC: "Freezing",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "The process of changing vapour into liquid is called _______.",
        optionA: "Condensation",
        optionB: "Evaporation",
        optionC: "Melting",
        correctAnswer: "Condensation",
      }),
      shuffleOptions({
        question: "The process of changing liquid into solid is called _______.",
        optionA: "Freezing",
        optionB: "Condensation",
        optionC: "Melting",
        correctAnswer: "Freezing",
      }),
      shuffleOptions({
        question: "Substances like salt and sugar which dissolve in water are called _______.",
        optionA: "Soluble substances",
        optionB: "Insoluble substances",
        optionC: "Metals",
        correctAnswer: "Soluble substances",
      }),
      shuffleOptions({
        question: "Substances like sand and chalk which do not dissolve in water are called _______.",
        optionA: "Insoluble substances",
        optionB: "Soluble substances",
        optionC: "Solutions",
        correctAnswer: "Insoluble substances",
      }),
      shuffleOptions({
        question: "A mixture obtained by dissolving solute in a solvent is called a _______.",
        optionA: "Solution",
        optionB: "Suspension",
        optionC: "Liquid",
        correctAnswer: "Solution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Anything that has mass and occupies space is called matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Molecules are large enough to be seen by naked eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Solids have a fixed shape and volume.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gases have fixed volume but no fixed shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Liquids take the shape of the container.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When a solid is cooled, it changes into liquid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Melting is the process of changing solid into liquid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Condensation changes vapour into liquid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sugar is an insoluble substance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water is called the universal solvent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
