export const chapter = "Chapter - 5: Food and Nutrition";
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
        question: "Which nutrient helps in the growth of our body and muscles?",
        optionA: "Fats",
        optionB: "Proteins",
        optionC: "Minerals",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "Which nutrient provides us with energy to work and play?",
        optionA: "Minerals",
        optionB: "Carbohydrates",
        optionC: "Roughage",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "Which food item helps to keep our body warm?",
        optionA: "Ghee",
        optionB: "Rice",
        optionC: "Apple",
        correctAnswer: "Ghee",
      }),
      shuffleOptions({
        question: "Which nutrient keeps our bones and skin healthy?",
        optionA: "Vitamins",
        optionB: "Proteins",
        optionC: "Fats",
        correctAnswer: "Vitamins",
      }),
      shuffleOptions({
        question: "Which nutrient is required in small quantities but is very important for the body?",
        optionA: "Minerals",
        optionB: "Carbohydrates",
        optionC: "Water",
        correctAnswer: "Minerals",
      }),
      shuffleOptions({
        question: "What is the fibrous part of food that helps in digestion called?",
        optionA: "Roughage",
        optionB: "Protein",
        optionC: "Fat",
        correctAnswer: "Roughage",
      }),
      shuffleOptions({
        question: "Which nutrient helps to prevent infections and heal wounds?",
        optionA: "Vitamins",
        optionB: "Minerals",
        optionC: "Fats",
        correctAnswer: "Vitamins",
      }),
      shuffleOptions({
        question: "Which food is known as a complete food as it contains all nutrients?",
        optionA: "Milk",
        optionB: "Egg",
        optionC: "Rice",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "What do we call the process that prevents food from getting spoilt?",
        optionA: "Food preservation",
        optionB: "Cooking",
        optionC: "Boiling",
        correctAnswer: "Food preservation",
      }),
      shuffleOptions({
        question: "Which type of food is rich in fats or sugar but poor in nutrients?",
        optionA: "Junk food",
        optionB: "Balanced diet",
        optionC: "Roughage",
        correctAnswer: "Junk food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We get food from ______.",
        optionA: "Plants and animals",
        optionB: "Air and soil",
        optionC: "Rocks and water",
        correctAnswer: "Plants and animals",
      }),
      shuffleOptions({
        question: "______ gives us energy to do work and play.",
        optionA: "Carbohydrates",
        optionB: "Proteins",
        optionC: "Vitamins",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "______ keeps our body warm.",
        optionA: "Fats",
        optionB: "Minerals",
        optionC: "Roughage",
        correctAnswer: "Fats",
      }),
      shuffleOptions({
        question: "______ are called body-building foods.",
        optionA: "Proteins",
        optionB: "Vitamins",
        optionC: "Fats",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "______ keep our bones and skin healthy.",
        optionA: "Vitamins",
        optionB: "Carbohydrates",
        optionC: "Fats",
        correctAnswer: "Vitamins",
      }),
      shuffleOptions({
        question: "______ are needed only in small quantities by our body.",
        optionA: "Minerals",
        optionB: "Water",
        optionC: "Carbohydrates",
        correctAnswer: "Minerals",
      }),
      shuffleOptions({
        question: "______ helps in the removal of waste from the body.",
        optionA: "Water",
        optionB: "Oil",
        optionC: "Sugar",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "______ prevents constipation and helps digestion.",
        optionA: "Roughage",
        optionB: "Junk food",
        optionC: "Butter",
        correctAnswer: "Roughage",
      }),
      shuffleOptions({
        question: "______ diet contains all nutrients in the right quantity.",
        optionA: "Balanced",
        optionB: "Junk",
        optionC: "Oily",
        correctAnswer: "Balanced",
      }),
      shuffleOptions({
        question: "______ food remains good and safe for a long time.",
        optionA: "Preserved",
        optionB: "Spoilt",
        optionC: "Uncooked",
        correctAnswer: "Preserved",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Carbohydrates and fats are energy-giving nutrients.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vitamins are needed in large quantities by our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Proteins help our body to grow and build muscles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roughage helps in the proper movement of food in the intestines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water helps in digestion and removal of waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Junk food is good for our health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Milk contains all the nutrients our body needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Food gets spoilt if it is kept for a long time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Preserved food remains good for a long time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vitamins keep our eyes and skin healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
