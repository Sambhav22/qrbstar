export const chapter = "Chapter - 5: Food We Eat";
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
        question: "Which part of a plant gives us fruits like apples and mangoes?",
        optionA: "Leaves",
        optionB: "Fruits",
        optionC: "Roots",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "Which animal makes honey for us?",
        optionA: "Cow",
        optionB: "Bee",
        optionC: "Goat",
        correctAnswer: "Bee",
      }),
      shuffleOptions({
        question: "Which food item do we get from hens?",
        optionA: "Eggs",
        optionB: "Milk",
        optionC: "Honey",
        correctAnswer: "Eggs",
      }),
      shuffleOptions({
        question: "Which food helps us grow strong and healthy?",
        optionA: "Toys",
        optionB: "Food",
        optionC: "Soil",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Which of these is a plant product?",
        optionA: "Fish",
        optionB: "Carrot",
        optionC: "Meat",
        correctAnswer: "Carrot",
      }),
      shuffleOptions({
        question: "From which source do we get milk?",
        optionA: "Machines",
        optionB: "Cars",
        optionC: "Animals like cows and buffaloes",
        correctAnswer: "Animals like cows and buffaloes",
      }),
      shuffleOptions({
        question: "Which food item comes from water animals?",
        optionA: "Rice",
        optionB: "Fish",
        optionC: "Banana",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "What do fresh fruits provide us along with food value?",
        optionA: "Sand",
        optionB: "Water",
        optionC: "Smoke",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which food grain is commonly eaten in many homes?",
        optionA: "Plastic",
        optionB: "Stone",
        optionC: "Wheat",
        correctAnswer: "Wheat",
      }),
      shuffleOptions({
        question: "What should we eat to stay healthy?",
        optionA: "Spoiled food",
        optionB: "Fresh food",
        optionC: "Dirty food",
        correctAnswer: "Fresh food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We get eggs from ______.",
        optionA: "cows",
        optionB: "hens",
        optionC: "bees",
        correctAnswer: "hens",
      }),
      shuffleOptions({
        question: "Honey is made by ______.",
        optionA: "birds",
        optionB: "bees",
        optionC: "fish",
        correctAnswer: "bees",
      }),
      shuffleOptions({
        question: "Fruits come from ______.",
        optionA: "shops",
        optionB: "animals",
        optionC: "plants",
        correctAnswer: "plants",
      }),
      shuffleOptions({
        question: "We get milk from ______.",
        optionA: "cows and buffaloes",
        optionB: "trees",
        optionC: "hens",
        correctAnswer: "cows and buffaloes",
      }),
      shuffleOptions({
        question: "We take our morning meal called ______.",
        optionA: "dinner",
        optionB: "lunch",
        optionC: "breakfast",
        correctAnswer: "breakfast",
      }),
      shuffleOptions({
        question: "Vegetables and fruits keep our body ______.",
        optionA: "dirty",
        optionB: "weak",
        optionC: "healthy",
        correctAnswer: "healthy",
      }),
      shuffleOptions({
        question: "Fish is a food we get from ______.",
        optionA: "water animals",
        optionB: "plants",
        optionC: "birds",
        correctAnswer: "water animals",
      }),
      shuffleOptions({
        question: "Fresh food keeps us ______.",
        optionA: "sick",
        optionB: "healthy",
        optionC: "sad",
        correctAnswer: "healthy",
      }),
      shuffleOptions({
        question: "We should wash our hands ______ eating.",
        optionA: "before and after",
        optionB: "never",
        optionC: "only once a week",
        correctAnswer: "before and after",
      }),
      shuffleOptions({
        question: "Cereals like rice and wheat come from ______.",
        optionA: "animals",
        optionB: "plants",
        optionC: "buses",
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
        question: "Fruits and vegetables come from plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should talk loudly while eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fish is obtained from water animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Honey is made by bees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Milk is a complete food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should eat stale food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Eggs are an animal product.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dinner is eaten in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fruits give us water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should wash vegetables before cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
