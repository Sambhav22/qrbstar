export const chapter = "Chapter - 4: Metals and Non-metals";
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
        question: "Which metal is the only one found in the liquid state at room temperature?",
        optionA: "Sodium",
        optionB: "Mercury",
        optionC: "Aluminium",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "Which property of metals allows them to be beaten into thin sheets?",
        optionA: "Ductility",
        optionB: "Malleability",
        optionC: "Hardness",
        correctAnswer: "Malleability",
      }),
      shuffleOptions({
        question: "Which non-metal conducts electricity and is used in pencils?",
        optionA: "Sulphur",
        optionB: "Graphite",
        optionC: "Phosphorus",
        correctAnswer: "Graphite",
      }),
      shuffleOptions({
        question: "Which metal is stored in kerosene because it reacts vigorously with water?",
        optionA: "Copper",
        optionB: "Sodium",
        optionC: "Iron",
        correctAnswer: "Sodium",
      }),
      shuffleOptions({
        question: "Which metal is commonly used for galvanising iron?",
        optionA: "Zinc",
        optionB: "Lead",
        optionC: "Tin",
        correctAnswer: "Zinc",
      }),
      shuffleOptions({
        question: "Which of the following non-metals is found in the liquid state at room temperature?",
        optionA: "Carbon",
        optionB: "Oxygen",
        optionC: "Bromine",
        correctAnswer: "Bromine",
      }),
      shuffleOptions({
        question: "Which metal is used for making electrical wires because of its high conductivity?",
        optionA: "Copper",
        optionB: "Sulphur",
        optionC: "Carbon",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which metal burns with a bright white flame when heated in air?",
        optionA: "Iron",
        optionB: "Magnesium",
        optionC: "Silver",
        correctAnswer: "Magnesium",
      }),
      shuffleOptions({
        question: "Which metal forms a green coating called patina when exposed to moist air?",
        optionA: "Iron",
        optionB: "Copper",
        optionC: "Tin",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which metal is the most reactive according to the reactivity series?",
        optionA: "Lead",
        optionB: "Potassium",
        optionC: "Zinc",
        correctAnswer: "Potassium",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Metals are usually shiny or ______ in appearance.",
        optionA: "dull",
        optionB: "lustrous",
        optionC: "colourless",
        correctAnswer: "lustrous",
      }),
      shuffleOptions({
        question: "Most non-metals are ______ and break on hammering.",
        optionA: "ductile",
        optionB: "brittle",
        optionC: "malleable",
        correctAnswer: "brittle",
      }),
      shuffleOptions({
        question: "Sodium reacts with water to produce sodium hydroxide and ______ gas.",
        optionA: "hydrogen",
        optionB: "carbon dioxide",
        optionC: "nitrogen",
        correctAnswer: "hydrogen",
      }),
      shuffleOptions({
        question: "Soft metals like sodium and ______ can be cut with a knife.",
        optionA: "silver",
        optionB: "potassium",
        optionC: "zinc",
        correctAnswer: "potassium",
      }),
      shuffleOptions({
        question: "When exposed to air, aluminium forms a protective layer of ______ oxide.",
        optionA: "iron",
        optionB: "magnesium",
        optionC: "aluminium",
        correctAnswer: "aluminium",
      }),
      shuffleOptions({
        question: "Non-metals react with oxygen to form ______ oxides.",
        optionA: "basic",
        optionB: "acidic or neutral",
        optionC: "metallic",
        correctAnswer: "acidic or neutral",
      }),
      shuffleOptions({
        question: "The green coating formed on copper is known as ______.",
        optionA: "rust",
        optionB: "patina",
        optionC: "soot",
        correctAnswer: "patina",
      }),
      shuffleOptions({
        question: "Diamond is the ______ natural substance known.",
        optionA: "hardest",
        optionB: "softest",
        optionC: "dullest",
        correctAnswer: "hardest",
      }),
      shuffleOptions({
        question: "Metal oxides generally turn ______ litmus paper blue.",
        optionA: "red (to blue)",
        optionB: "blue",
        optionC: "neutral",
        correctAnswer: "red (to blue)",
      }),
      shuffleOptions({
        question: "Bromine is a non-metal that exists in ______ state at room temperature.",
        optionA: "liquid",
        optionB: "solid",
        optionC: "gas",
        correctAnswer: "liquid",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Non-metals are generally poor conductors of heat and electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Metals are sonorous and produce sound when struck.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diamond and graphite both have a dull appearance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Copper reacts vigorously with water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sodium and potassium react violently with cold water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Metals generally have high melting and boiling points.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Graphite is a non-metal yet conducts electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-metals readily react with dilute acids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Magnesium burns in air with a bright white flame.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Patina is a brown coating formed on iron.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
