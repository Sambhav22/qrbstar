export const chapter = "Chapter - 2: Food We Eat";
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
        question: "Which food group makes our bones and muscles strong?",
        optionA: "Body-building foods",
        optionB: "Junk foods",
        optionC: "Energy-giving foods",
        correctAnswer: "Body-building foods",
      }),
      shuffleOptions({
        question: "From where do we get fruits and vegetables?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Supermarkets",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "Which meal do we eat in the morning?",
        optionA: "Snacks",
        optionB: "Dinner",
        optionC: "Breakfast",
        correctAnswer: "Breakfast",
      }),
      shuffleOptions({
        question: "Which of these is a dairy product?",
        optionA: "Butter",
        optionB: "Meat",
        optionC: "Grapes",
        correctAnswer: "Butter",
      }),
      shuffleOptions({
        question: "Which food is eaten mainly for taste and not for health?",
        optionA: "Protective food",
        optionB: "Junk food",
        optionC: "Energy-giving food",
        correctAnswer: "Junk food",
      }),
      shuffleOptions({
        question: "What do we call people who eat only vegetarian food?",
        optionA: "Vegetarians",
        optionB: "Non-vegetarians",
        optionC: "Builders",
        correctAnswer: "Vegetarians",
      }),
      shuffleOptions({
        question: "Which of these gives us energy to work and play?",
        optionA: "Rice and chapati",
        optionB: "Pulses",
        optionC: "Mango juice",
        correctAnswer: "Rice and chapati",
      }),
      shuffleOptions({
        question: "Which food item is obtained from animals?",
        optionA: "Honey",
        optionB: "Carrot",
        optionC: "Wheat",
        correctAnswer: "Honey",
      }),
      shuffleOptions({
        question: "Which of these foods protects us from falling ill?",
        optionA: "Chips",
        optionB: "Vegetables and fruits",
        optionC: "Sweets",
        correctAnswer: "Vegetables and fruits",
      }),
      shuffleOptions({
        question: "Which meal do we eat at night?",
        optionA: "Dinner",
        optionB: "Breakfast",
        optionC: "Lunch",
        correctAnswer: "Dinner",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Milk, butter and cheese are ______ products.",
        optionA: "fruit",
        optionB: "dairy",
        optionC: "grain",
        correctAnswer: "dairy",
      }),
      shuffleOptions({
        question: "Vegetables and fruits are ______ foods.",
        optionA: "body-building",
        optionB: "protective",
        optionC: "junk",
        correctAnswer: "protective",
      }),
      shuffleOptions({
        question: "We get honey from ______.",
        optionA: "animals",
        optionB: "plants",
        optionC: "shops",
        correctAnswer: "animals",
      }),
      shuffleOptions({
        question: "A meal eaten in the afternoon is called ______.",
        optionA: "dinner",
        optionB: "breakfast",
        optionC: "lunch",
        correctAnswer: "lunch",
      }),
      shuffleOptions({
        question: "Pulses and eggs are ______ foods.",
        optionA: "energy-giving",
        optionB: "protective",
        optionC: "body-building",
        correctAnswer: "body-building",
      }),
      shuffleOptions({
        question: "Rice and chapati are ______ foods.",
        optionA: "protective",
        optionB: "energy-giving",
        optionC: "dairy",
        correctAnswer: "energy-giving",
      }),
      shuffleOptions({
        question: "Fresh fruits and ______ vegetables keep us healthy.",
        optionA: "green",
        optionB: "fried",
        optionC: "coloured",
        correctAnswer: "green",
      }),
      shuffleOptions({
        question: "People who eat meat, fish and eggs are called ______.",
        optionA: "vegetarians",
        optionB: "non-vegetarians",
        optionC: "protectors",
        correctAnswer: "non-vegetarians",
      }),
      shuffleOptions({
        question: "Eating too much ______ food can make us sick.",
        optionA: "protective",
        optionB: "junk",
        optionC: "dairy",
        correctAnswer: "junk",
      }),
      shuffleOptions({
        question: "We get cereals, pulses and vegetables from ______.",
        optionA: "animals",
        optionB: "shops",
        optionC: "plants",
        correctAnswer: "plants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Eggs are non-vegetarian food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green vegetables keep us fit and healthy.",
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
        question: "Milk is obtained from animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chapati and rice give us energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Body-building foods make our bones and muscles weak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We eat breakfast at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People who eat vegetarian food are called non-vegetarians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Protective foods stop us from falling ill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We get fruits from plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
