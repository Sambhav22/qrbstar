export const chapter = "Chapter - 16: All About Plants";
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
        question: "Which plants are very big and strong?",
        optionA: "Herbs",
        optionB: "Shrubs",
        optionC: "Trees",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Which plants have woody stems and look like bushes?",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Shrubs",
      }),
      shuffleOptions({
        question: "Which plants are small and have green stems?",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Herbs",
      }),
      shuffleOptions({
        question: "Which plant gives us cotton?",
        optionA: "Cotton plant",
        optionB: "Neem",
        optionC: "Tomato",
        correctAnswer: "Cotton plant",
      }),
      shuffleOptions({
        question: "Which of the following is a herb?",
        optionA: "Spinach",
        optionB: "Mango",
        optionC: "Peepal",
        correctAnswer: "Spinach",
      }),
      shuffleOptions({
        question: "What do trees and plants make our surroundings?",
        optionA: "Clean and green",
        optionB: "Dusty",
        optionC: "Noisy",
        correctAnswer: "Clean and green",
      }),
      shuffleOptions({
        question: "What do plants give out for us to breathe?",
        optionA: "Oxygen",
        optionB: "Smoke",
        optionC: "Dust",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "What do plants give us to make furniture?",
        optionA: "Wood",
        optionB: "Paper",
        optionC: "Rubber",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "Which of these is used to help plants grow well?",
        optionA: "Manure",
        optionB: "Plastic",
        optionC: "Stone",
        correctAnswer: "Manure",
      }),
      shuffleOptions({
        question: "What should we never do to trees?",
        optionA: "Cut them",
        optionB: "Water them",
        optionC: "Plant them",
        correctAnswer: "Cut them",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants give us ________ to eat.",
        optionA: "Fruits",
        optionB: "Stones",
        optionC: "Metals",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "________ are medium-sized plants with woody stems.",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Shrubs",
      }),
      shuffleOptions({
        question: "________ are small plants that have green stems.",
        optionA: "Herbs",
        optionB: "Shrubs",
        optionC: "Trees",
        correctAnswer: "Herbs",
      }),
      shuffleOptions({
        question: "We get ________ from plants to make furniture.",
        optionA: "Wood",
        optionB: "Glass",
        optionC: "Clay",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "We get paper, gum and ________ from plants.",
        optionA: "Rubber",
        optionB: "Metal",
        optionC: "Plastic",
        correctAnswer: "Rubber",
      }),
      shuffleOptions({
        question: "________ helps plants to grow well.",
        optionA: "Manure",
        optionB: "Dust",
        optionC: "Plastic",
        correctAnswer: "Manure",
      }),
      shuffleOptions({
        question: "We should water the plants ________.",
        optionA: "Daily",
        optionB: "Weekly",
        optionC: "Never",
        correctAnswer: "Daily",
      }),
      shuffleOptions({
        question: "Plants give out fresh ________ to breathe.",
        optionA: "Air",
        optionB: "Smoke",
        optionC: "Heat",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Trees give us fruits and ________.",
        optionA: "Wood",
        optionB: "Sand",
        optionC: "Metal",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "We should not ________ or destroy plants.",
        optionA: "Cut",
        optionB: "Water",
        optionC: "Trim",
        correctAnswer: "Cut",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Trees are small plants that grow for a short time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shrubs have woody stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbs are small plants with green stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants give us food, wood, and medicines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants make our surroundings dirty and dusty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should add manure to the soil timely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants give us paper, gum, and rubber.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should cut trees for fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees make the air around us clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should care for plants by watering them regularly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
