export const chapter = "Chapter - 4: Fibre to Fabric";
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
        question: "Which process is used to separate cotton from cotton bolls?",
        optionA: "Spinning",
        optionB: "Ginning",
        optionC: "Weaving",
        correctAnswer: "Ginning",
      }),
      shuffleOptions({
        question: "Which fibre is obtained from the outer covering of a coconut?",
        optionA: "Coir",
        optionB: "Jute",
        optionC: "Cotton",
        correctAnswer: "Coir",
      }),
      shuffleOptions({
        question: "What is the process of removing hair from sheep or goat called?",
        optionA: "Retting",
        optionB: "Shearing",
        optionC: "Spinning",
        correctAnswer: "Shearing",
      }),
      shuffleOptions({
        question: "Which country is the second-largest producer of silk after China?",
        optionA: "India",
        optionB: "Japan",
        optionC: "Thailand",
        correctAnswer: "India",
      }),
      shuffleOptions({
        question: "Which fibre is made entirely from chemicals?",
        optionA: "Nylon",
        optionB: "Wool",
        optionC: "Jute",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "The process of growing silkworms on mulberry trees and obtaining silk is called what?",
        optionA: "Sericulture",
        optionB: "Retting",
        optionC: "Ginning",
        correctAnswer: "Sericulture",
      }),
      shuffleOptions({
        question: "Which process helps to obtain jute fibres from the stalk of the plant?",
        optionA: "Retting",
        optionB: "Spinning",
        optionC: "Weaving",
        correctAnswer: "Retting",
      }),
      shuffleOptions({
        question: "What are power-operated looms called?",
        optionA: "Handlooms",
        optionB: "Powerlooms",
        optionC: "Cottonlooms",
        correctAnswer: "Powerlooms",
      }),
      shuffleOptions({
        question: "Which fibre was first created in 1910 and called artificial silk?",
        optionA: "Rayon",
        optionB: "Acrylic",
        optionC: "Polyester",
        correctAnswer: "Rayon",
      }),
      shuffleOptions({
        question: "What do we call the fluffy coating on the body of animals like sheep and goat?",
        optionA: "Fleece",
        optionB: "Lint",
        optionC: "Bark",
        correctAnswer: "Fleece",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fruits of the cotton plant are called ______.",
        optionA: "Bolls",
        optionB: "Pods",
        optionC: "Bundles",
        correctAnswer: "Bolls",
      }),
      shuffleOptions({
        question: "The process of separating fibre from the stalk of jute plant is called ______.",
        optionA: "Retting",
        optionB: "Ginning",
        optionC: "Spinning",
        correctAnswer: "Retting",
      }),
      shuffleOptions({
        question: "The outer covering of the coconut is known as ______.",
        optionA: "Husk",
        optionB: "Coir",
        optionC: "Shell",
        correctAnswer: "Husk",
      }),
      shuffleOptions({
        question: "The process of removing hair from sheep is called ______.",
        optionA: "Shearing",
        optionB: "Spinning",
        optionC: "Weaving",
        correctAnswer: "Shearing",
      }),
      shuffleOptions({
        question: "Power-operated looms are called ______.",
        optionA: "Powerlooms",
        optionB: "Handlooms",
        optionC: "Cotton looms",
        correctAnswer: "Powerlooms",
      }),
      shuffleOptions({
        question: "The process of obtaining silk from silkworms is known as ______.",
        optionA: "Sericulture",
        optionB: "Spinning",
        optionC: "Retting",
        correctAnswer: "Sericulture",
      }),
      shuffleOptions({
        question: "The fibre obtained from plants like cotton and jute is called ______.",
        optionA: "Natural",
        optionB: "Synthetic",
        optionC: "Blended",
        correctAnswer: "Natural",
      }),
      shuffleOptions({
        question: "Synthetic fibres made by processing wood pulp are called ______.",
        optionA: "Rayon",
        optionB: "Acrylic",
        optionC: "Nylon",
        correctAnswer: "Rayon",
      }),
      shuffleOptions({
        question: "When polyester is blended with cotton, the fabric obtained is called ______.",
        optionA: "Polycotton",
        optionB: "Cottonpoly",
        optionC: "Polyblend",
        correctAnswer: "Polycotton",
      }),
      shuffleOptions({
        question: "The strong natural fibre made from the stalk of the flax plant is ______.",
        optionA: "Linen",
        optionB: "Jute",
        optionC: "Ramic",
        correctAnswer: "Linen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cotton fibres are obtained from the stalk of the cotton plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jute is grown mainly in the delta regions of the Ganga and Brahmaputra rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silk is a synthetic fibre produced from petroleum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wool is obtained from the fleece of sheep and goat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Synthetic fibres absorb sweat and keep the body cool in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polyester and nylon are examples of true synthetic fibres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Retting is the process used to obtain silk from silkworms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Blended fabrics combine natural and synthetic fibres to improve quality.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton and jute are examples of animal fibres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Linen is made from the stalk of the flax plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
