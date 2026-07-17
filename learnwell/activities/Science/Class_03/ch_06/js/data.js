export const chapter = "Chapter - 6: Balanced Diet";
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
        question: "Which nutrient gives us energy for work and play?",
        optionA: "Fats",
        optionB: "Carbohydrates",
        optionC: "Proteins",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "Which nutrient helps in growth and repairing body cells?",
        optionA: "Proteins",
        optionB: "Fats",
        optionC: "Vitamins",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "Which nutrient keeps our bones and teeth strong?",
        optionA: "Minerals",
        optionB: "Fats",
        optionC: "Carbohydrates",
        correctAnswer: "Minerals",
      }),
      shuffleOptions({
        question: "Which food group includes cakes, biscuits, and cookies?",
        optionA: "Refine grains",
        optionB: "Whole grains",
        optionC: "Vegetables",
        correctAnswer: "Refine grains",
      }),
      shuffleOptions({
        question: "Which nutrient helps in proper body functioning?",
        optionA: "Vitamins",
        optionB: "Fats",
        optionC: "Carbohydrates",
        correctAnswer: "Vitamins",
      }),
      shuffleOptions({
        question: "Which nutrient removes waste from our body?",
        optionA: "Water",
        optionB: "Minerals",
        optionC: "Vitamins",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Green vegetables help our body to —",
        optionA: "Fight diseases",
        optionB: "Gain weight",
        optionC: "Sleep more",
        correctAnswer: "Fight diseases",
      }),
      shuffleOptions({
        question: "Which food group gives us proteins and calcium?",
        optionA: "Milk and dairy products",
        optionB: "Fruits",
        optionC: "Sugar and oils",
        correctAnswer: "Milk and dairy products",
      }),
      shuffleOptions({
        question: "Too much oil and sugar in food causes —",
        optionA: "Weight gain",
        optionB: "Good health",
        optionC: "Strong bones",
        correctAnswer: "Weight gain",
      }),
      shuffleOptions({
        question: "Which food group provides vitamins and fibres?",
        optionA: "Fruits",
        optionB: "Refine grains",
        optionC: "Oils",
        correctAnswer: "Fruits",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "________ give energy to our body.",
        optionA: "Fats",
        optionB: "Carbohydrates",
        optionC: "Proteins",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "________ help in digestion and prevent constipation.",
        optionA: "Fibres",
        optionB: "Fats",
        optionC: "Sugars",
        correctAnswer: "Fibres",
      }),
      shuffleOptions({
        question: "________ are rich in proteins and calcium.",
        optionA: "Milk and dairy products",
        optionB: "Fruits",
        optionC: "Sugar and oils",
        correctAnswer: "Milk and dairy products",
      }),
      shuffleOptions({
        question: "________ keep our bones strong and heartbeat normal.",
        optionA: "Minerals",
        optionB: "Vitamins",
        optionC: "Fats",
        correctAnswer: "Minerals",
      }),
      shuffleOptions({
        question: "________ help in the proper functioning of the body.",
        optionA: "Vitamins",
        optionB: "Fats",
        optionC: "Sugars",
        correctAnswer: "Vitamins",
      }),
      shuffleOptions({
        question: "________ helps in digestion and removes waste.",
        optionA: "Water",
        optionB: "Oil",
        optionC: "Fibre",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "________ are the energy reservoirs of the body.",
        optionA: "Fats",
        optionB: "Minerals",
        optionC: "Water",
        correctAnswer: "Fats",
      }),
      shuffleOptions({
        question: "________ contain more nutrients and fibres than refine grains.",
        optionA: "Whole grains",
        optionB: "Cakes",
        optionC: "Biscuits",
        correctAnswer: "Whole grains",
      }),
      shuffleOptions({
        question: "________ protect us from many diseases.",
        optionA: "Balanced diet",
        optionB: "Junk food",
        optionC: "Refine grains",
        correctAnswer: "Balanced diet",
      }),
      shuffleOptions({
        question: "________ are rich in minerals and nutrients.",
        optionA: "Green vegetables",
        optionB: "Sugar and oils",
        optionC: "Refine grains",
        correctAnswer: "Green vegetables",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Carbohydrates are the main source of energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whole grains have less fibre than refine grains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Milk is rich in proteins and calcium.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Too much sugar and oil make us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Green vegetables help reduce diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fats are needed for repairing body cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water helps in digestion and removes waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Balanced diet keeps our body strong and fit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits are rich in vitamins and fibres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A balanced diet is not important for brain development.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
