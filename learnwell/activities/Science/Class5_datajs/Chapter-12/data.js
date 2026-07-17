export const chapter = "Chapter - 12: Our Environment";
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
        question: "Which of these is a non-living (abiotic) component of the environment?",
        optionA: "Trees",
        optionB: "Water",
        optionC: "Animals",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which of the following are living components of the environment?",
        optionA: "Air and water",
        optionB: "Plants and animals",
        optionC: "Rocks and soil",
        correctAnswer: "Plants and animals",
      }),
      shuffleOptions({
        question: "Which organisms are known as producers?",
        optionA: "Animals",
        optionB: "Green plants",
        optionC: "Microbes",
        correctAnswer: "Green plants",
      }),
      shuffleOptions({
        question: "Which animals feed on the remains of dead animals and act as scavengers?",
        optionA: "Cow and goat",
        optionB: "Vulture and eagle",
        optionC: "Tiger and lion",
        correctAnswer: "Vulture and eagle",
      }),
      shuffleOptions({
        question: "Which gas among the following is a greenhouse gas?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Which of the following is a result of deforestation?",
        optionA: "Increase in rainfall",
        optionB: "Loss of soil fertility",
        optionC: "Clean environment",
        correctAnswer: "Loss of soil fertility",
      }),
      shuffleOptions({
        question: "Which human activity causes water pollution?",
        optionA: "Planting trees",
        optionB: "Washing clothes near rivers",
        optionC: "Saving electricity",
        correctAnswer: "Washing clothes near rivers",
      }),
      shuffleOptions({
        question: "Which process is known as the steady rise in the earth’s temperature?",
        optionA: "Air pollution",
        optionB: "Global warming",
        optionC: "Greenhouse effect",
        correctAnswer: "Global warming",
      }),
      shuffleOptions({
        question: "Which of the following gases trap the heat of the sun in the atmosphere?",
        optionA: "Nitrogen and oxygen",
        optionB: "Carbon dioxide and methane",
        optionC: "Argon and neon",
        correctAnswer: "Carbon dioxide and methane",
      }),
      shuffleOptions({
        question: "Which activity is a good example of environment conservation?",
        optionA: "Throwing waste in rivers",
        optionB: "Recycling used materials",
        optionC: "Cutting trees",
        correctAnswer: "Recycling used materials",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Everything that surrounds us forms our ______.",
        optionA: "World",
        optionB: "Environment",
        optionC: "Earth",
        correctAnswer: "Environment",
      }),
      shuffleOptions({
        question: "The non-living parts of nature are called ______ components.",
        optionA: "Abiotic",
        optionB: "Biotic",
        optionC: "Human-made",
        correctAnswer: "Abiotic",
      }),
      shuffleOptions({
        question: "Living organisms like plants and animals form ______ components.",
        optionA: "Biotic",
        optionB: "Abiotic",
        optionC: "Artificial",
        correctAnswer: "Biotic",
      }),
      shuffleOptions({
        question: "Organisms that can make their own food are called ______.",
        optionA: "Producers",
        optionB: "Consumers",
        optionC: "Decomposers",
        correctAnswer: "Producers",
      }),
      shuffleOptions({
        question: "Bacteria and fungi are examples of ______.",
        optionA: "Producers",
        optionB: "Decomposers",
        optionC: "Consumers",
        correctAnswer: "Decomposers",
      }),
      shuffleOptions({
        question: "Cutting down of trees in large number is called ______.",
        optionA: "Afforestation",
        optionB: "Deforestation",
        optionC: "Industrialisation",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "The gases that trap heat in the atmosphere are called ______ gases.",
        optionA: "Greenhouse",
        optionB: "Nitrogen",
        optionC: "Oxygen",
        correctAnswer: "Greenhouse",
      }),
      shuffleOptions({
        question: "The steady rise in the earth’s average temperature is called ______.",
        optionA: "Global warming",
        optionB: "Air pollution",
        optionC: "Soil erosion",
        correctAnswer: "Global warming",
      }),
      shuffleOptions({
        question: "Protecting and saving the environment is called ______.",
        optionA: "Destruction",
        optionB: "Conservation",
        optionC: "Deforestation",
        correctAnswer: "Conservation",
      }),
      shuffleOptions({
        question: "We can save the environment by reusing and ______ materials.",
        optionA: "Burning",
        optionB: "Recycling",
        optionC: "Wasting",
        correctAnswer: "Recycling",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All living things together form the abiotic part of the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants can make their own food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Decomposers feed on dead and decaying matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cutting trees in large numbers improves air quality.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deforestation reduces soil fertility.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carbon dioxide is a greenhouse gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Global warming is the fall in the earth’s temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pollution caused by factories harms air and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Recycling and reusing materials help conserve the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Greenhouse gases trap the heat of the sun in the atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
