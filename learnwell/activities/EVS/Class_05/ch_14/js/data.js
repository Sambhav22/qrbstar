export const chapter = "Chapter - 14: Hunger and Deficiency Diseases";
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
        question: "What is the unpleasant feeling caused by the body’s need for food?",
        optionA: "Famine",
        optionB: "Hunger",
        optionC: "Malnutrition",
        correctAnswer: "Hunger",
      }),
      shuffleOptions({
        question: "Which disease is caused by the deficiency of both proteins and carbohydrates?",
        optionA: "Marasmus",
        optionB: "Kwashiorkor",
        optionC: "Rickets",
        correctAnswer: "Marasmus",
      }),
      shuffleOptions({
        question: "The enzyme that helps to change starch into sugar in the mouth is",
        optionA: "Bile",
        optionB: "Amylase",
        optionC: "Gastric acid",
        correctAnswer: "Amylase",
      }),
      shuffleOptions({
        question: "Deficiency of iodine results in",
        optionA: "Goitre",
        optionB: "Anaemia",
        optionC: "Scurvy",
        correctAnswer: "Goitre",
      }),
      shuffleOptions({
        question: "Which vitamin deficiency leads to night blindness?",
        optionA: "Vitamin A",
        optionB: "Vitamin C",
        optionC: "Vitamin B",
        correctAnswer: "Vitamin A",
      }),
      shuffleOptions({
        question: "The small intestine receives digestive juices from the liver, pancreas, and",
        optionA: "Gall bladder",
        optionB: "Large intestine",
        optionC: "Stomach",
        correctAnswer: "Gall bladder",
      }),
      shuffleOptions({
        question: "Which part of the digestive system mainly absorbs water?",
        optionA: "Small intestine",
        optionB: "Large intestine",
        optionC: "Pancreas",
        correctAnswer: "Large intestine",
      }),
      shuffleOptions({
        question: "The liver produces a juice called",
        optionA: "Bile",
        optionB: "Saliva",
        optionC: "Gastric acid",
        correctAnswer: "Bile",
      }),
      shuffleOptions({
        question: "People who do not get the right amount of all nutrients suffer from",
        optionA: "Deficiency diseases",
        optionB: "Infectious diseases",
        optionC: "Allergies",
        correctAnswer: "Deficiency diseases",
      }),
      shuffleOptions({
        question: "Deficiency of iron in the body causes",
        optionA: "Anaemia",
        optionB: "Beri-beri",
        optionC: "Pellagra",
        correctAnswer: "Anaemia",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process that breaks down food into simpler form is called ______.",
        optionA: "Respiration",
        optionB: "Digestion",
        optionC: "Absorption",
        correctAnswer: "Digestion",
      }),
      shuffleOptions({
        question: "Food we eat is used by our body in the form of ______.",
        optionA: "Glucose",
        optionB: "Protein",
        optionC: "Fibre",
        correctAnswer: "Glucose",
      }),
      shuffleOptions({
        question: "Deficiency of vitamin D causes ______.",
        optionA: "Rickets",
        optionB: "Scurvy",
        optionC: "Goitre",
        correctAnswer: "Rickets",
      }),
      shuffleOptions({
        question: "The disease caused by protein deficiency is ______.",
        optionA: "Kwashiorkor",
        optionB: "Anaemia",
        optionC: "Scurvy",
        correctAnswer: "Kwashiorkor",
      }),
      shuffleOptions({
        question: "______ is a widespread scarcity of food due to natural or man-made causes.",
        optionA: "Famine",
        optionB: "Hunger",
        optionC: "Starvation",
        correctAnswer: "Famine",
      }),
      shuffleOptions({
        question: "The ______ stores bile produced by the liver.",
        optionA: "Pancreas",
        optionB: "Gall bladder",
        optionC: "Large intestine",
        correctAnswer: "Gall bladder",
      }),
      shuffleOptions({
        question: "______ causes swelling of legs and face in children.",
        optionA: "Kwashiorkor",
        optionB: "Rickets",
        optionC: "Scurvy",
        correctAnswer: "Kwashiorkor",
      }),
      shuffleOptions({
        question: "______ is caused due to lack of carbohydrates and proteins.",
        optionA: "Marasmus",
        optionB: "Beri-beri",
        optionC: "Anaemia",
        correctAnswer: "Marasmus",
      }),
      shuffleOptions({
        question: "The food pipe that connects mouth to stomach is called ______.",
        optionA: "Oesophagus",
        optionB: "Windpipe",
        optionC: "Small intestine",
        correctAnswer: "Oesophagus",
      }),
      shuffleOptions({
        question: "Deficiency of vitamin C causes ______.",
        optionA: "Scurvy",
        optionB: "Rickets",
        optionC: "Goitre",
        correctAnswer: "Scurvy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hunger and famine mean exactly the same thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kwashiorkor is caused by lack of vitamin C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Digestion begins in the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The pancreas helps in digestion of fats and proteins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deficiency of iron leads to anaemia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vitamin A deficiency results in night blindness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Famine can be caused by floods and wars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Large intestine absorbs water from food before it leaves the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malnutrition is also known as deficiency of nutrients in food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Digested food provides our body energy to work, live and grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
