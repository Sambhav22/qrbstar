export const chapter = "Chapter - 2: Components of Food";
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
        question: "Which nutrient carries fat-soluble vitamins inside the body?",
        optionA: "Carbohydrates",
        optionB: "Fats",
        optionC: "Proteins",
        correctAnswer: "Fats",
      }),
      shuffleOptions({
        question: "Who is known as the “Father of Medicine” for emphasising the benefits of fibre?",
        optionA: "Hippocrates",
        optionB: "Pasteur",
        optionC: "Fleming",
        correctAnswer: "Hippocrates",
      }),
      shuffleOptions({
        question: "Which test solution turns food blue-black in the presence of starch?",
        optionA: "Benedict",
        optionB: "Iodine",
        optionC: "Biuret",
        correctAnswer: "Iodine",
      }),
      shuffleOptions({
        question: "Which vitamin helps in the clotting of blood?",
        optionA: "Vitamin A",
        optionB: "Vitamin K",
        optionC: "Vitamin D",
        correctAnswer: "Vitamin K",
      }),
      shuffleOptions({
        question: "Which mineral deficiency leads to anaemia?",
        optionA: "Iodine",
        optionB: "Iron",
        optionC: "Calcium",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "Which component of food helps remove waste from the body?",
        optionA: "Water",
        optionB: "Proteins",
        optionC: "Fats",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which nutrient prevents constipation by adding bulk to food?",
        optionA: "Roughage",
        optionB: "Fats",
        optionC: "Vitamins",
        correctAnswer: "Roughage",
      }),
      shuffleOptions({
        question: "What is the main salt found in bones and teeth?",
        optionA: "Calcium phosphate",
        optionB: "Sodium chloride",
        optionC: "Iron sulphate",
        correctAnswer: "Calcium phosphate",
      }),
      shuffleOptions({
        question: "Which vitamin helps resist infections and keeps gums healthy?",
        optionA: "Vitamin C",
        optionB: "Vitamin D",
        optionC: "Vitamin E",
        correctAnswer: "Vitamin C",
      }),
      shuffleOptions({
        question: "What solution is used to test the presence of proteins in food?",
        optionA: "Biuret solution",
        optionB: "Iodine solution",
        optionC: "Indophenol",
        correctAnswer: "Biuret solution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "_______ is the quickest source of energy for our body.",
        optionA: "Simple carbohydrates",
        optionB: "Fats",
        optionC: "Minerals",
        correctAnswer: "Simple carbohydrates",
      }),
      shuffleOptions({
        question: "_______ provides insulation against cold.",
        optionA: "Fats",
        optionB: "Vitamins",
        optionC: "Proteins",
        correctAnswer: "Fats",
      }),
      shuffleOptions({
        question: "_______ is a mixture of copper sulphate and potassium hydroxide.",
        optionA: "Biuret solution",
        optionB: "Iodine",
        optionC: "Indophenol",
        correctAnswer: "Biuret solution",
      }),
      shuffleOptions({
        question: "The vitamin tested by using _______ solution is Vitamin C.",
        optionA: "Indophenol",
        optionB: "Iodine",
        optionC: "Benedict",
        correctAnswer: "Indophenol",
      }),
      shuffleOptions({
        question: "_______ carries oxygen in our blood.",
        optionA: "Haemoglobin",
        optionB: "Chlorophyll",
        optionC: "Starch",
        correctAnswer: "Haemoglobin",
      }),
      shuffleOptions({
        question: "_______ deficiency causes the disease Beri-beri.",
        optionA: "Vitamin B₁",
        optionB: "Vitamin A",
        optionC: "Vitamin C",
        correctAnswer: "Vitamin B₁",
      }),
      shuffleOptions({
        question: "_______ deficiency in children leads to weak and bent bones.",
        optionA: "Vitamin D",
        optionB: "Vitamin E",
        optionC: "Iron",
        correctAnswer: "Vitamin D",
      }),
      shuffleOptions({
        question: "_______ is an undigested part of carbohydrate that helps digestion.",
        optionA: "Roughage",
        optionB: "Sugar",
        optionC: "Starch",
        correctAnswer: "Roughage",
      }),
      shuffleOptions({
        question: "_______ is required for proper working of the thyroid gland.",
        optionA: "Iodine",
        optionB: "Calcium",
        optionC: "Sodium",
        correctAnswer: "Iodine",
      }),
      shuffleOptions({
        question: "_______ should be taken during dehydration to restore water and salts.",
        optionA: "ORS solution",
        optionB: "Vinegar",
        optionC: "Milk",
        correctAnswer: "ORS solution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Fats provide more energy than carbohydrates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water helps regulate body temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vitamins are needed only in small quantities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Excess fat in the body causes obesity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Iron deficiency leads to night blindness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Iodine deficiency causes goitre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roughage is the digested portion of food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Complex carbohydrates are healthier than simple sugars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Protein deficiency may cause Kwashiorkor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A balanced diet contains all nutrients in the right proportion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
