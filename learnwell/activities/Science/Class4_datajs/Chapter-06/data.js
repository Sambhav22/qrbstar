export const chapter = "Chapter - 6: The Digestive System and Teeth";
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
        question: "Which process breaks down food into simpler soluble form?",
        optionA: "Chewing",
        optionB: "Digestion",
        optionC: "Breathing",
        correctAnswer: "Digestion",
      }),
      shuffleOptions({
        question: "Which watery substance softens the food in the mouth?",
        optionA: "Water",
        optionB: "Saliva",
        optionC: "Juice",
        correctAnswer: "Saliva",
      }),
      shuffleOptions({
        question: "Which organ connects the throat to the stomach?",
        optionA: "Large intestine",
        optionB: "Food pipe",
        optionC: "Small intestine",
        correctAnswer: "Food pipe",
      }),
      shuffleOptions({
        question: "Which organ churns food and mixes digestive juices with it?",
        optionA: "Stomach",
        optionB: "Liver",
        optionC: "Mouth",
        correctAnswer: "Stomach",
      }),
      shuffleOptions({
        question: "Which organ absorbs nutrients from digested food?",
        optionA: "Small intestine",
        optionB: "Large intestine",
        optionC: "Stomach",
        correctAnswer: "Small intestine",
      }),
      shuffleOptions({
        question: "Which organ absorbs water from undigested food?",
        optionA: "Large intestine",
        optionB: "Liver",
        optionC: "Mouth",
        correctAnswer: "Large intestine",
      }),
      shuffleOptions({
        question: "Which opening helps to throw waste out of the body?",
        optionA: "Mouth",
        optionB: "Anus",
        optionC: "Food pipe",
        correctAnswer: "Anus",
      }),
      shuffleOptions({
        question: "Which organ produces a juice that mixes with food to help digestion?",
        optionA: "Liver",
        optionB: "Teeth",
        optionC: "Heart",
        correctAnswer: "Liver",
      }),
      shuffleOptions({
        question: "Which part of the tooth is the hardest substance in our body?",
        optionA: "Enamel",
        optionB: "Dentine",
        optionC: "Pulp",
        correctAnswer: "Enamel",
      }),
      shuffleOptions({
        question: "Which type of teeth help in grinding and chewing food?",
        optionA: "Molars",
        optionB: "Incisors",
        optionC: "Canines",
        correctAnswer: "Molars",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food is first softened in the mouth with the help of ______.",
        optionA: "Water",
        optionB: "Saliva",
        optionC: "Pulp",
        correctAnswer: "Saliva",
      }),
      shuffleOptions({
        question: "The ______ pipe carries food from the mouth to the stomach.",
        optionA: "Air",
        optionB: "Food",
        optionC: "Wind",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "The stomach changes food into a thick ______.",
        optionA: "Paste",
        optionB: "Liquid",
        optionC: "Powder",
        correctAnswer: "Paste",
      }),
      shuffleOptions({
        question: "The ______ intestine absorbs nutrients from the digested food.",
        optionA: "Large",
        optionB: "Small",
        optionC: "Short",
        correctAnswer: "Small",
      }),
      shuffleOptions({
        question: "The ______ intestine absorbs water from the undigested food.",
        optionA: "Large",
        optionB: "Small",
        optionC: "Thin",
        correctAnswer: "Large",
      }),
      shuffleOptions({
        question: "Nutrients from food are carried to all parts of the body by ______.",
        optionA: "Water",
        optionB: "Blood",
        optionC: "Air",
        correctAnswer: "Blood",
      }),
      shuffleOptions({
        question: "The outer layer of the tooth is called ______.",
        optionA: "Enamel",
        optionB: "Dentine",
        optionC: "Crown",
        correctAnswer: "Enamel",
      }),
      shuffleOptions({
        question: "The soft centre of the tooth that contains blood vessels and nerves is called ______.",
        optionA: "Pulp",
        optionB: "Root",
        optionC: "Neck",
        correctAnswer: "Pulp",
      }),
      shuffleOptions({
        question: "The first set of teeth in children are known as ______ teeth.",
        optionA: "Milk",
        optionB: "Permanent",
        optionC: "Hard",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "The pointed teeth used for tearing food are called ______.",
        optionA: "Canines",
        optionB: "Molars",
        optionC: "Incisors",
        correctAnswer: "Canines",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of digestion begins in the mouth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The food pipe pushes food down into the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stomach is a hollow muscular bag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The small intestine is shorter than the large intestine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water helps in digestion and removal of waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Enamel is the hardest substance in the human body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Canines are used for tearing food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Premolars are flat and broad teeth used for chewing food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should brush our teeth twice a day to keep them clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eating too many sweets is good for our teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
