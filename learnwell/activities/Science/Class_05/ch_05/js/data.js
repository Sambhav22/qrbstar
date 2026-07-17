export const chapter = "Chapter - 5: Food, Health and Hygiene";
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
        question: "Which nutrient gives us energy to work and play?",
        optionA: "Proteins",
        optionB: "Carbohydrates",
        optionC: "Vitamins",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "Which nutrient helps our body to grow and repair worn-out tissues?",
        optionA: "Fats",
        optionB: "Proteins",
        optionC: "Minerals",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "Which vitamin helps to keep our eyes healthy?",
        optionA: "Vitamin A",
        optionB: "Vitamin C",
        optionC: "Vitamin B",
        correctAnswer: "Vitamin A",
      }),
      shuffleOptions({
        question: "Which mineral keeps our bones and teeth strong?",
        optionA: "Calcium",
        optionB: "Iron",
        optionC: "Phosphorus",
        correctAnswer: "Calcium",
      }),
      shuffleOptions({
        question: "Which nutrient is stored in the body as fatty tissue?",
        optionA: "Vitamins",
        optionB: "Fats",
        optionC: "Carbohydrates",
        correctAnswer: "Fats",
      }),
      shuffleOptions({
        question: "Which food item contains roughage?",
        optionA: "Raw fruits and vegetables",
        optionB: "Butter",
        optionC: "Eggs",
        correctAnswer: "Raw fruits and vegetables",
      }),
      shuffleOptions({
        question: "Which disease is caused by lack of vitamin D?",
        optionA: "Rickets",
        optionB: "Beri-beri",
        optionC: "Scurvy",
        correctAnswer: "Rickets",
      }),
      shuffleOptions({
        question: "Which disease is caused by lack of iron?",
        optionA: "Anaemia",
        optionB: "Goitre",
        optionC: "Night blindness",
        correctAnswer: "Anaemia",
      }),
      shuffleOptions({
        question: "Which daily habit helps muscles and bones become stronger?",
        optionA: "Exercise",
        optionB: "Rest",
        optionC: "Sleeping late",
        correctAnswer: "Exercise",
      }),
      shuffleOptions({
        question: "Which type of disease spreads from one person to another?",
        optionA: "Non-communicable",
        optionB: "Communicable",
        optionC: "Deficiency",
        correctAnswer: "Communicable",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food contains certain substances called ________ which help our body to grow.",
        optionA: "Nutrients",
        optionB: "Minerals",
        optionC: "Cells",
        correctAnswer: "Nutrients",
      }),
      shuffleOptions({
        question: "Fats give us ________ energy than carbohydrates.",
        optionA: "More",
        optionB: "Less",
        optionC: "Equal",
        correctAnswer: "More",
      }),
      shuffleOptions({
        question: "Vitamins and minerals-rich foods are called ________ foods.",
        optionA: "Protective",
        optionB: "Body-building",
        optionC: "Energy-giving",
        correctAnswer: "Protective",
      }),
      shuffleOptions({
        question: "A diet containing all essential nutrients in right proportion is called a ________ diet.",
        optionA: "Balanced",
        optionB: "Heavy",
        optionC: "Simple",
        correctAnswer: "Balanced",
      }),
      shuffleOptions({
        question: "________ is the fibre in food that helps in digestion.",
        optionA: "Roughage",
        optionB: "Protein",
        optionC: "Fat",
        correctAnswer: "Roughage",
      }),
      shuffleOptions({
        question: "We must drink ________ glasses of water every day.",
        optionA: "8 to 10",
        optionB: "3 to 4",
        optionC: "12 to 14",
        correctAnswer: "8 to 10",
      }),
      shuffleOptions({
        question: "Lack of iodine causes ________.",
        optionA: "Goitre",
        optionB: "Rickets",
        optionC: "Anaemia",
        correctAnswer: "Goitre",
      }),
      shuffleOptions({
        question: "Lack of vitamin C causes ________.",
        optionA: "Scurvy",
        optionB: "Beri-beri",
        optionC: "Night blindness",
        correctAnswer: "Scurvy",
      }),
      shuffleOptions({
        question: "Diseases caused by lack of nutrients are called ________ diseases.",
        optionA: "Deficiency",
        optionB: "Communicable",
        optionC: "Infectious",
        correctAnswer: "Deficiency",
      }),
      shuffleOptions({
        question: "________ helps in building and repairing body tissues.",
        optionA: "Protein",
        optionB: "Vitamin",
        optionC: "Fat",
        correctAnswer: "Protein",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Carbohydrates give energy to work and play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fats are stored in our body cells or fatty tissues.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vitamins help our body to fight diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water helps to maintain body temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roughage has no importance in digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lack of iron causes goitre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Exercise keeps our body healthy and fit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diseases that spread through air and water are communicable diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deficiency diseases spread easily from one person to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clean surroundings help to prevent diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
