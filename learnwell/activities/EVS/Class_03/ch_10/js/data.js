export const chapter = "Chapter - 10: All About Food";
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
        question: "Which nutrient helps to build our body and muscles?",
        optionA: "Carbohydrates",
        optionB: "Proteins",
        optionC: "Vitamins",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "What type of food gives us energy to work and play?",
        optionA: "Protective food",
        optionB: "Energy-giving food",
        optionC: "Body-building food",
        correctAnswer: "Energy-giving food",
      }),
      shuffleOptions({
        question: "Which nutrient keeps our body healthy and fights diseases?",
        optionA: "Vitamins and minerals",
        optionB: "Proteins",
        optionC: "Fats",
        correctAnswer: "Vitamins and minerals",
      }),
      shuffleOptions({
        question: "What kind of food do old people mostly eat?",
        optionA: "Heavy food",
        optionB: "Light and liquid food",
        optionC: "Junk food",
        correctAnswer: "Light and liquid food",
      }),
      shuffleOptions({
        question: "Which food is called a complete food for infants?",
        optionA: "Mother’s milk",
        optionB: "Soup",
        optionC: "Rice",
        correctAnswer: "Mother’s milk",
      }),
      shuffleOptions({
        question: "What do we get from honeybees?",
        optionA: "Sugar",
        optionB: "Honey",
        optionC: "Butter",
        correctAnswer: "Honey",
      }),
      shuffleOptions({
        question: "What type of food do Mr Iyer and his family eat?",
        optionA: "Steamed or lightly fried food",
        optionB: "Oily food",
        optionC: "Sweet and sour food",
        correctAnswer: "Steamed or lightly fried food",
      }),
      shuffleOptions({
        question: "From which source do we get fruits and vegetables?",
        optionA: "Animals",
        optionB: "Plants",
        optionC: "Minerals",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "What does the government provide to some schoolchildren?",
        optionA: "Breakfast pack",
        optionB: "Mid-day meal",
        optionC: "Dinner",
        correctAnswer: "Mid-day meal",
      }),
      shuffleOptions({
        question: "Which part of the plant is eaten in cauliflower?",
        optionA: "Root",
        optionB: "Flower",
        optionC: "Leaf",
        correctAnswer: "Flower",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We all need food to ______ and stay healthy.",
        optionA: "Sleep",
        optionB: "Grow",
        optionC: "Play",
        correctAnswer: "Grow",
      }),
      shuffleOptions({
        question: "______ help in repairing our body tissues.",
        optionA: "Carbohydrates",
        optionB: "Proteins",
        optionC: "Fats",
        correctAnswer: "Proteins",
      }),
      shuffleOptions({
        question: "______ and fats give energy to our body.",
        optionA: "Vitamins",
        optionB: "Carbohydrates",
        optionC: "Minerals",
        correctAnswer: "Carbohydrates",
      }),
      shuffleOptions({
        question: "______ keep our body fit and strong.",
        optionA: "Junk food",
        optionB: "Vitamins and minerals",
        optionC: "Water",
        correctAnswer: "Vitamins and minerals",
      }),
      shuffleOptions({
        question: "A diet that has all nutrients is called a ______ diet.",
        optionA: "Mixed",
        optionB: "Healthy",
        optionC: "Balanced",
        correctAnswer: "Balanced",
      }),
      shuffleOptions({
        question: "Infants drink only ______.",
        optionA: "Mother’s milk",
        optionB: "Fruit juice",
        optionC: "Water",
        correctAnswer: "Mother’s milk",
      }),
      shuffleOptions({
        question: "Old people should eat ______ food.",
        optionA: "Light",
        optionB: "Spicy",
        optionC: "Oily",
        correctAnswer: "Light",
      }),
      shuffleOptions({
        question: "We get ______ from sheep and cattle.",
        optionA: "Milk",
        optionB: "Pulses",
        optionC: "Grains",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "People in West India like ______-flavoured food.",
        optionA: "Sweet and sour",
        optionB: "Spicy",
        optionC: "Plain",
        correctAnswer: "Sweet and sour",
      }),
      shuffleOptions({
        question: "______ provides warmth to our body.",
        optionA: "Vitamins",
        optionB: "Fats",
        optionC: "Minerals",
        correctAnswer: "Fats",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food gives us energy to work and play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Proteins are also called body-building foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rice and potato are protective foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Vitamins and minerals keep us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Old people can digest heavy oily food easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr Singh’s family likes spicy and oily food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We get honey from honeybees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother’s milk is a complete food for infants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Balanced diet keeps our body fit and strong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diversity means differences in food habits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
