export const chapter = "Chapter - 1: Resources";
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
        question: "Which resource became useful only after humans discovered its fire-producing ability?",
        optionA: "Limestone",
        optionB: "Coal",
        optionC: "Clay",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "Which type of value is enjoyed for beauty and pleasure?",
        optionA: "Economic value",
        optionB: "Aesthetic value",
        optionC: "Legal value",
        correctAnswer: "Aesthetic value",
      }),
      shuffleOptions({
        question: "Which resource is created when humans apply technology to natural materials?",
        optionA: "Human resource",
        optionB: "Natural resource",
        optionC: "Human-made resource",
        correctAnswer: "Human-made resource",
      }),
      shuffleOptions({
        question: "Which resources are found everywhere on Earth?",
        optionA: "Localised resources",
        optionB: "Ubiquitous resources",
        optionC: "Limited resources",
        correctAnswer: "Ubiquitous resources",
      }),
      shuffleOptions({
        question: "Which of the following is an example of a non-renewable resource?",
        optionA: "Solar energy",
        optionB: "Petroleum",
        optionC: "Wind energy",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "Which type of resource is not fully utilised at present but can be developed in the future?",
        optionA: "Potential resources",
        optionB: "Biotic",
        optionC: "Ubiquitous",
        correctAnswer: "Potential resources",
      }),
      shuffleOptions({
        question: "Which process involves protecting resources and preventing their misuse?",
        optionA: "Mining",
        optionB: "Conservation",
        optionC: "Plantation",
        correctAnswer: "Conservation",
      }),
      shuffleOptions({
        question: "What helps convert mineral oil into useful products like petroleum jelly?",
        optionA: "Climate",
        optionB: "Technology",
        optionC: "Rainfall",
        correctAnswer: "Technology",
      }),
      shuffleOptions({
        question: "Which factor makes the distribution of resources uneven across the world?",
        optionA: "Identical landforms",
        optionB: "Same climatic conditions everywhere",
        optionC: "Variation in climate and landforms globally",
        correctAnswer: "Variation in climate and landforms globally",
      }),
      shuffleOptions({
        question: "Who are considered the biggest resource because of their skills and abilities?",
        optionA: "Machines",
        optionB: "Minerals",
        optionC: "Humans",
        correctAnswer: "Humans",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Minerals and fossil fuels are _______ resources.",
        optionA: "renewable",
        optionB: "non-renewable",
        optionC: "aesthetic",
        correctAnswer: "non-renewable",
      }),
      shuffleOptions({
        question: "Africa has great _______ for developing hydroelectric power.",
        optionA: "potential",
        optionB: "shortage",
        optionC: "danger",
        correctAnswer: "potential",
      }),
      shuffleOptions({
        question: "Technology is considered a _______ resource.",
        optionA: "human-made",
        optionB: "natural",
        optionC: "biotic",
        correctAnswer: "human-made",
      }),
      shuffleOptions({
        question: "Air and water are _______ resources found everywhere.",
        optionA: "localised",
        optionB: "powerful",
        optionC: "ubiquitous",
        correctAnswer: "ubiquitous",
      }),
      shuffleOptions({
        question: "_______ resources can regenerate naturally within a certain period.",
        optionA: "Renewable",
        optionB: "Exhaustible",
        optionC: "Metallic",
        correctAnswer: "Renewable",
      }),
      shuffleOptions({
        question: "The careful use and protection of natural resources is called _______.",
        optionA: "cultivation",
        optionB: "conservation",
        optionC: "rotation",
        correctAnswer: "conservation",
      }),
      shuffleOptions({
        question: "The uneven presence of resources worldwide shows their _______ distribution.",
        optionA: "equal",
        optionB: "uniform",
        optionC: "uneven",
        correctAnswer: "uneven",
      }),
      shuffleOptions({
        question: "_______ resources are obtained from living things.",
        optionA: "Abiotic",
        optionB: "Biotic",
        optionC: "Mineral",
        correctAnswer: "Biotic",
      }),
      shuffleOptions({
        question: "_______ is applied to create useful products from natural materials.",
        optionA: "Technology",
        optionB: "Farming",
        optionC: "Weathering",
        correctAnswer: "Technology",
      }),
      shuffleOptions({
        question: "A thing becomes a resource only when humans find it _______.",
        optionA: "heavy",
        optionB: "valuable or useful",
        optionC: "beautiful",
        correctAnswer: "valuable or useful",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Wind and water can be classified as renewable resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Minerals regenerate quickly and are therefore renewable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air is an example of an ubiquitous resource.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Technology helps convert natural resources into human-made resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Distribution of natural resources is even all over the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Human beings play an important role in resource development.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Potential resources are those fully developed and in use right now.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Overuse of resources can cause them to deplete in the future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aesthetic value refers to the economic usefulness of a resource.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Conservation of resources means wasting them freely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
