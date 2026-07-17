export const chapter = "Chapter - 15: Shelter for Everyone";
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
        question: "Who lives in a bungalow in Punjab?",
        optionA: "Mohit",
        optionB: "Raghav",
        optionC: "Manisha",
        correctAnswer: "Mohit",
      }),
      shuffleOptions({
        question: "Whose house is plastered with mud and has a straw roof?",
        optionA: "Raghav",
        optionB: "Huma",
        optionC: "Emanuel",
        correctAnswer: "Raghav",
      }),
      shuffleOptions({
        question: "Who built a house on bamboo pillars to stay above floodwater?",
        optionA: "Manisha",
        optionB: "Mohit",
        optionC: "Mithisubi",
        correctAnswer: "Manisha",
      }),
      shuffleOptions({
        question: "Whose house has a sloping roof to let the snow slide down?",
        optionA: "Huma",
        optionB: "Raghav",
        optionC: "Manisha",
        correctAnswer: "Huma",
      }),
      shuffleOptions({
        question: "Who lives in an igloo made of snow and ice?",
        optionA: "Emanuel",
        optionB: "Raghav",
        optionC: "Mohit",
        correctAnswer: "Emanuel",
      }),
      shuffleOptions({
        question: "Whose house is built in small sections to resist earthquakes?",
        optionA: "Mithisubi",
        optionB: "Huma",
        optionC: "Mohit",
        correctAnswer: "Mithisubi",
      }),
      shuffleOptions({
        question: "What is a group of a few houses close to each other called?",
        optionA: "Hamlet",
        optionB: "Town",
        optionC: "Village",
        correctAnswer: "Hamlet",
      }),
      shuffleOptions({
        question: "In which area do people usually live in kuchcha houses?",
        optionA: "Village",
        optionB: "Town",
        optionC: "City",
        correctAnswer: "Village",
      }),
      shuffleOptions({
        question: "People who cannot afford houses often live in ______.",
        optionA: "Slums",
        optionB: "Apartments",
        optionC: "Farmhouses",
        correctAnswer: "Slums",
      }),
      shuffleOptions({
        question: "Which insects make homes together showing social behaviour?",
        optionA: "Ants and bees",
        optionB: "Butterflies",
        optionC: "Flies",
        correctAnswer: "Ants and bees",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Houses in Kashmir have ______ roofs.",
        optionA: "flat",
        optionB: "sloping",
        optionC: "thatched",
        correctAnswer: "sloping",
      }),
      shuffleOptions({
        question: "Stilt houses are made on ______ pillars.",
        optionA: "bamboo",
        optionB: "iron",
        optionC: "wooden",
        correctAnswer: "bamboo",
      }),
      shuffleOptions({
        question: "The house made of snow and ice is called an ______.",
        optionA: "hut",
        optionB: "igloo",
        optionC: "tent",
        correctAnswer: "igloo",
      }),
      shuffleOptions({
        question: "The floors of igloos are covered with ______ to keep them warm.",
        optionA: "animal skin",
        optionB: "woollen carpet",
        optionC: "grass",
        correctAnswer: "animal skin",
      }),
      shuffleOptions({
        question: "The houses in Rajasthan have walls plastered with ______.",
        optionA: "mud",
        optionB: "cement",
        optionC: "stone",
        correctAnswer: "mud",
      }),
      shuffleOptions({
        question: "Mohit lives in a ______ located in Punjab.",
        optionA: "bungalow",
        optionB: "flat",
        optionC: "hut",
        correctAnswer: "bungalow",
      }),
      shuffleOptions({
        question: "Houses in earthquake-prone areas are built with ______ and bricks.",
        optionA: "wood",
        optionB: "cement",
        optionC: "straw",
        correctAnswer: "wood",
      }),
      shuffleOptions({
        question: "The use of building materials depends on their ______.",
        optionA: "availability",
        optionB: "colour",
        optionC: "weight",
        correctAnswer: "availability",
      }),
      shuffleOptions({
        question: "People live together in a ______ and share facilities.",
        optionA: "neighbourhood",
        optionB: "forest",
        optionC: "school",
        correctAnswer: "neighbourhood",
      }),
      shuffleOptions({
        question: "Bees make their homes called ______.",
        optionA: "beehives",
        optionB: "anthills",
        optionC: "nests",
        correctAnswer: "beehives",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Houses are built in the same way everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mohit lives in Punjab in a bungalow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raghav’s house has a sloping roof made of tiles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manisha’s house is built on stilts to stay above rainwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Huma’s house helps snow slide down from the roof.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Emanuel’s house is made of wood and bricks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mithisubi’s house is earthquake-resistant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People live together because they are social beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A hamlet consists of a few houses close together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ants and bees live alone and never form groups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
